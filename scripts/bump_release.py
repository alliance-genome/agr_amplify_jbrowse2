#!/usr/bin/env python3
"""
Copy the previous release's S3 data to a new release prefix and update the
JBrowse config to point at it.

This is used to stand up a test environment for a new Alliance release before
that release's data is actually ready: the old release's files are copied
server-side in S3 (with public-read ACLs) into parallel directories named for
the new release, and every URL in the JBrowse config is rewritten to match.

The script discovers which S3 locations to copy by scanning the config for
URLs of the form

    https://s3.amazonaws.com/<bucket>/<prefix>/<OLD_RELEASE>/...

so new buckets or prefixes added to the config in the future are picked up
automatically.  For each <bucket>/<prefix>/<OLD_RELEASE>/ directory found:

  * if the config references files directly inside it, the whole directory
    is copied (e.g. agrjbrowse/orthology/9.2.0/);
  * if the config only references subdirectories, just those subdirectories
    are copied (e.g. mod-datadumps/variants/9.2.0/HUMAN/ and .../MGI/, but
    not the FB/RGD/SGD/WB siblings that JBrowse doesn't use).
  Pass --full to always copy whole release directories.

Requirements: python3 (stdlib only) and the aws CLI on PATH, with credentials
available in ~/.aws (or however the aws CLI normally finds them).

Usage:
    scripts/bump_release.py 9.2.0 9.3.0
    scripts/bump_release.py 9.2.0 9.3.0 --dry-run
    scripts/bump_release.py 9.2.0 9.3.0 --config config.json --skip-copy
"""

import argparse
import json
import re
import shutil
import subprocess
import sys
import time
import urllib.request
from collections import defaultdict
from concurrent.futures import ThreadPoolExecutor

S3_HOST = "https://s3.amazonaws.com"


# --------------------------------------------------------------------------
# helpers
# --------------------------------------------------------------------------
def die(msg, code=1):
    print(f"ERROR: {msg}", file=sys.stderr)
    sys.exit(code)


def run(cmd, check=True, capture=True):
    """Run a command, returning CompletedProcess. Prints the command first."""
    print("  $ " + " ".join(cmd))
    return subprocess.run(cmd, check=check, text=True,
                          capture_output=capture)


def s3_summary(bucket, key_prefix):
    """Return (object_count, total_bytes) under s3://bucket/key_prefix."""
    cp = run(["aws", "s3", "ls", "--recursive", "--summarize",
              f"s3://{bucket}/{key_prefix}"], check=False)
    # `aws s3 ls` exits 1 with no output when the prefix has no objects;
    # only treat it as an error if it actually complained.
    if cp.returncode != 0 and cp.stderr.strip():
        die(f"aws s3 ls failed for s3://{bucket}/{key_prefix}:\n{cp.stderr}")
    count = size = 0
    for line in cp.stdout.splitlines():
        line = line.strip()
        if line.startswith("Total Objects:"):
            count = int(line.split(":")[1])
        elif line.startswith("Total Size:"):
            size = int(line.split(":")[1])
    return count, size


def http_status(url, attempts=4):
    """HEAD a URL, retrying transient network errors with backoff."""
    req = urllib.request.Request(url, method="HEAD")
    last = None
    for i in range(attempts):
        try:
            with urllib.request.urlopen(req, timeout=30) as r:
                return r.status
        except urllib.error.HTTPError as e:
            return e.code
        except Exception as e:  # noqa: BLE001
            last = f"ERR {e.__class__.__name__}: {getattr(e, 'reason', e)}"
            time.sleep(1.5 * (i + 1))
    return last


# --------------------------------------------------------------------------
# discovery
# --------------------------------------------------------------------------
def find_release_urls(text, release):
    """All distinct S3 URLs in the config text that contain /<release>/."""
    pat = re.compile(
        re.escape(S3_HOST) + r"/[^\"\s]*?/" + re.escape(release) + r"/[^\"\s]*"
    )
    urls = set(pat.findall(text))
    # Ignore templated URLs such as .../{refseq}/trackData.jsonz; they are not
    # literal objects and can't be copied or HEAD-checked.
    return sorted(u for u in urls if "{" not in u)


def plan_copies(urls, release, full=False):
    """
    Group URLs into (bucket, prefix) release directories and decide, for each,
    which key prefixes need copying.  Returns a sorted list of
    (bucket, old_key_prefix) tuples, where old_key_prefix ends with '/'.
    """
    # (bucket, prefix) -> set of first path components after the release dir
    groups = defaultdict(set)
    leafy = set()  # (bucket, prefix) pairs with files directly in release dir
    for u in urls:
        path = u[len(S3_HOST) + 1:]            # bucket/prefix/release/rest
        bucket, _, rest = path.partition("/")
        marker = f"/{release}/"
        idx = rest.find(marker)
        if idx < 0:
            continue
        prefix = rest[:idx]                     # e.g. docker, orthology, variants
        after = rest[idx + len(marker):]        # e.g. FlyBase/fruitfly/x.gff.gz
        key = (bucket, prefix)
        if "/" in after:
            groups[key].add(after.split("/", 1)[0])
        else:
            leafy.add(key)
            groups[key]  # ensure the key exists

    plan = []
    for (bucket, prefix), subdirs in groups.items():
        base = f"{prefix}/{release}/"
        if full or (bucket, prefix) in leafy or not subdirs:
            plan.append((bucket, base))
        else:
            for sd in sorted(subdirs):
                plan.append((bucket, f"{base}{sd}/"))
    return sorted(plan)


# --------------------------------------------------------------------------
# main steps
# --------------------------------------------------------------------------
def copy_data(plan, old, new, dry_run, overwrite):
    print(f"\n=== Copying S3 data {old} -> {new} ===")
    results = []
    for bucket, old_key in plan:
        new_key = old_key.replace(f"/{old}/", f"/{new}/", 1)
        src = f"s3://{bucket}/{old_key}"
        dst = f"s3://{bucket}/{new_key}"
        print(f"\n--- {src}\n    -> {dst}")

        src_count, src_size = s3_summary(bucket, old_key)
        if src_count == 0:
            print(f"    WARNING: source is empty, skipping")
            continue
        print(f"    source: {src_count} objects, {src_size:,} bytes")

        dst_count, _ = s3_summary(bucket, new_key)
        if dst_count and not overwrite:
            print(f"    destination already has {dst_count} objects; "
                  f"skipping copy (use --overwrite to copy anyway)")
            results.append((bucket, old_key, new_key))
            continue

        if dry_run:
            print("    [dry-run] would copy with --acl public-read")
            continue

        cp = run(["aws", "s3", "cp", "--recursive", "--acl", "public-read",
                  "--only-show-errors", src, dst], check=False, capture=False)
        if cp.returncode != 0:
            die(f"aws s3 cp failed for {src} (exit {cp.returncode})")
        results.append((bucket, old_key, new_key))
    return results


def verify_copies(results):
    print("\n=== Verifying copies (object count and total size) ===")
    ok = True
    for bucket, old_key, new_key in results:
        sc, ss = s3_summary(bucket, old_key)
        dc, ds = s3_summary(bucket, new_key)
        status = "OK" if (sc, ss) == (dc, ds) else "MISMATCH"
        if status != "OK":
            ok = False
        print(f"  {status:8} s3://{bucket}/{new_key}  "
              f"{dc}/{sc} objects, {ds:,}/{ss:,} bytes")
    if not ok:
        die("one or more copies do not match their source")


def rewrite_config(path, raw, old, new, dry_run):
    print(f"\n=== Rewriting {path}: /{old}/ -> /{new}/ in S3 URLs ===")
    pat = re.compile(
        "(" + re.escape(S3_HOST) + r"/[^\"\s]*?/)" + re.escape(old) + "(/)"
    )
    new_raw, n = pat.subn(lambda m: m.group(1) + new + m.group(2), raw)
    print(f"  {n} URL(s) rewritten")
    leftover = len(re.findall(re.escape(old), new_raw))
    if leftover:
        print(f"  NOTE: {leftover} non-URL occurrence(s) of '{old}' left untouched")

    # make sure we didn't break the JSON
    try:
        json.loads(new_raw.encode("utf-8", "surrogateescape")
                   .decode("utf-8", "replace"))
    except json.JSONDecodeError as e:
        die(f"config is not valid JSON after rewrite: {e}")

    if dry_run:
        print("  [dry-run] config not written")
        return new_raw
    backup = path + f".{old}.bak"
    shutil.copyfile(path, backup)
    with open(path, "w", encoding="utf-8", errors="surrogateescape",
              newline="") as fh:
        fh.write(new_raw)
    print(f"  written; backup of original at {backup}")
    return new_raw


def verify_urls(text, new):
    urls = find_release_urls(text, new)
    print(f"\n=== HEAD-checking {len(urls)} unique {new} URLs ===")
    bad = []
    with ThreadPoolExecutor(max_workers=8) as ex:
        for url, status in zip(urls, ex.map(http_status, urls)):
            if status != 200:
                bad.append((status, url))
    if bad:
        for status, url in bad:
            print(f"  {status} {url}")
        die(f"{len(bad)} URL(s) are not reachable")
    print("  all URLs return 200")


# --------------------------------------------------------------------------
def main():
    ap = argparse.ArgumentParser(
        description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("old_release", help="existing release, e.g. 9.2.0")
    ap.add_argument("new_release", help="new release, e.g. 9.3.0")
    ap.add_argument("--config", default="config.json",
                    help="JBrowse config to scan and rewrite (default: config.json)")
    ap.add_argument("--dry-run", action="store_true",
                    help="show what would be copied/changed; touch nothing")
    ap.add_argument("--full", action="store_true",
                    help="copy whole release directories even when the config "
                         "only references some subdirectories")
    ap.add_argument("--overwrite", action="store_true",
                    help="copy even if the destination prefix already has objects")
    ap.add_argument("--skip-copy", action="store_true",
                    help="don't copy S3 data (just rewrite and verify the config)")
    ap.add_argument("--skip-config", action="store_true",
                    help="don't rewrite the config (just copy S3 data)")
    ap.add_argument("--no-verify", action="store_true",
                    help="skip the post-copy size check and URL HEAD checks")
    args = ap.parse_args()

    old, new = args.old_release, args.new_release
    if old == new:
        die("old and new release are the same")
    if not args.skip_copy and shutil.which("aws") is None:
        die("aws CLI not found on PATH")

    try:
        with open(args.config, encoding="utf-8", errors="surrogateescape",
                  newline="") as fh:
            raw = fh.read()
    except OSError as e:
        die(f"can't read {args.config}: {e}")

    urls = find_release_urls(raw, old)
    if not urls:
        die(f"no S3 URLs containing /{old}/ found in {args.config}")
    plan = plan_copies(urls, old, full=args.full)

    print(f"Found {len(urls)} unique {old} URL(s) in {args.config}")
    print("S3 prefixes to copy:")
    for bucket, key in plan:
        print(f"  s3://{bucket}/{key}")

    results = []
    if not args.skip_copy:
        results = copy_data(plan, old, new, args.dry_run, args.overwrite)
        if results and not args.no_verify and not args.dry_run:
            verify_copies(results)

    if not args.skip_config:
        new_raw = rewrite_config(args.config, raw, old, new, args.dry_run)
        if not args.no_verify and not args.dry_run:
            verify_urls(new_raw, new)

    print("\nDone." + (" (dry run; nothing was changed)" if args.dry_run else ""))


if __name__ == "__main__":
    main()
