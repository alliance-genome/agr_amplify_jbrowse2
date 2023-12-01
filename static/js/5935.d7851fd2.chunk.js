"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[5935,1631],{48026:(t,e,r)=>{r.d(e,{ZP:()=>l});const i=class t{constructor(t,e){this.low=t,this.high=e}clone(){return new t(this.low,this.high)}get max(){return this.clone()}less_than(t){return this.low<t.low||this.low==t.low&&this.high<t.high}equal_to(t){return this.low==t.low&&this.high==t.high}intersect(t){return!this.not_intersect(t)}not_intersect(t){return this.high<t.low||t.high<this.low}merge(e){return new t(void 0===this.low?e.low:Math.min(this.low,e.low),void 0===this.high?e.high:Math.max(this.high,e.high))}output(){return[this.low,this.high]}static comparable_max(t,e){return t.merge(e)}static comparable_less_than(t,e){return t<e}};class n{constructor(t=void 0,e=void 0,r=null,n=null,l=null,o=1){this.left=r,this.right=n,this.parent=l,this.color=o,this.item={key:t,value:e},t&&t instanceof Array&&2==t.length&&(Number.isNaN(t[0])||Number.isNaN(t[1])||(this.item.key=new i(Math.min(t[0],t[1]),Math.max(t[0],t[1])))),this.max=this.item.key?this.item.key.max:void 0}isNil(){return void 0===this.item.key&&void 0===this.item.value&&null===this.left&&null===this.right&&1===this.color}_value_less_than(t){return this.item.value&&t.item.value&&this.item.value.less_than?this.item.value.less_than(t.item.value):this.item.value<t.item.value}less_than(t){return this.item.value===this.item.key&&t.item.value===t.item.key?this.item.key.less_than(t.item.key):this.item.key.less_than(t.item.key)||this.item.key.equal_to(t.item.key)&&this._value_less_than(t)}_value_equal(t){return this.item.value&&t.item.value&&this.item.value.equal_to?this.item.value.equal_to(t.item.value):this.item.value==t.item.value}equal_to(t){return this.item.value===this.item.key&&t.item.value===t.item.key?this.item.key.equal_to(t.item.key):this.item.key.equal_to(t.item.key)&&this._value_equal(t)}intersect(t){return this.item.key.intersect(t.item.key)}copy_data(t){this.item.key=t.item.key,this.item.value=t.item.value}update_max(){if(this.max=this.item.key?this.item.key.max:void 0,this.right&&this.right.max){const t=this.item.key.constructor.comparable_max;this.max=t(this.max,this.right.max)}if(this.left&&this.left.max){const t=this.item.key.constructor.comparable_max;this.max=t(this.max,this.left.max)}}not_intersect_left_subtree(t){return(0,this.item.key.constructor.comparable_less_than)(void 0!==this.left.max.high?this.left.max.high:this.left.max,t.item.key.low)}not_intersect_right_subtree(t){const e=this.item.key.constructor.comparable_less_than;let r=void 0!==this.right.max.low?this.right.max.low:this.right.item.key.low;return e(t.item.key.high,r)}}class l{constructor(){this.root=null,this.nil_node=new n}get size(){let t=0;return this.tree_walk(this.root,(()=>t++)),t}get keys(){let t=[];return this.tree_walk(this.root,(e=>t.push(e.item.key.output?e.item.key.output():e.item.key))),t}get values(){let t=[];return this.tree_walk(this.root,(e=>t.push(e.item.value))),t}get items(){let t=[];return this.tree_walk(this.root,(e=>t.push({key:e.item.key.output?e.item.key.output():e.item.key,value:e.item.value}))),t}isEmpty(){return null==this.root||this.root==this.nil_node}clear(){this.root=null}insert(t,e=t){if(void 0===t)return;let r=new n(t,e,this.nil_node,this.nil_node,null,0);return this.tree_insert(r),this.recalc_max(r),r}exist(t,e=t){let r=new n(t,e);return!!this.tree_search(this.root,r)}remove(t,e=t){let r=new n(t,e),i=this.tree_search(this.root,r);return i&&this.tree_delete(i),i}search(t,e=((t,e)=>t===e?e.output():t)){let r=new n(t),i=[];return this.tree_search_interval(this.root,r,i),i.map((t=>e(t.item.value,t.item.key)))}intersect_any(t){let e=new n(t);return this.tree_find_any_interval(this.root,e)}forEach(t){this.tree_walk(this.root,(e=>t(e.item.key,e.item.value)))}map(t){const e=new l;return this.tree_walk(this.root,(r=>e.insert(r.item.key,t(r.item.value,r.item.key)))),e}*iterate(t,e=((t,e)=>t===e?e.output():t)){let r;for(t?r=this.tree_search_nearest_forward(this.root,new n(t)):this.root&&(r=this.local_minimum(this.root));r;)yield e(r.item.value,r.item.key),r=this.tree_successor(r)}recalc_max(t){let e=t;for(;null!=e.parent;)e.parent.update_max(),e=e.parent}tree_insert(t){let e=this.root,r=null;if(null==this.root||this.root==this.nil_node)this.root=t;else{for(;e!=this.nil_node;)r=e,e=t.less_than(e)?e.left:e.right;t.parent=r,t.less_than(r)?r.left=t:r.right=t}this.insert_fixup(t)}insert_fixup(t){let e,r;for(e=t;e!=this.root&&0==e.parent.color;)e.parent==e.parent.parent.left?(r=e.parent.parent.right,0==r.color?(e.parent.color=1,r.color=1,e.parent.parent.color=0,e=e.parent.parent):(e==e.parent.right&&(e=e.parent,this.rotate_left(e)),e.parent.color=1,e.parent.parent.color=0,this.rotate_right(e.parent.parent))):(r=e.parent.parent.left,0==r.color?(e.parent.color=1,r.color=1,e.parent.parent.color=0,e=e.parent.parent):(e==e.parent.left&&(e=e.parent,this.rotate_right(e)),e.parent.color=1,e.parent.parent.color=0,this.rotate_left(e.parent.parent)));this.root.color=1}tree_delete(t){let e,r;e=t.left==this.nil_node||t.right==this.nil_node?t:this.tree_successor(t),r=e.left!=this.nil_node?e.left:e.right,r.parent=e.parent,e==this.root?this.root=r:(e==e.parent.left?e.parent.left=r:e.parent.right=r,e.parent.update_max()),this.recalc_max(r),e!=t&&(t.copy_data(e),t.update_max(),this.recalc_max(t)),1==e.color&&this.delete_fixup(r)}delete_fixup(t){let e,r=t;for(;r!=this.root&&null!=r.parent&&1==r.color;)r==r.parent.left?(e=r.parent.right,0==e.color&&(e.color=1,r.parent.color=0,this.rotate_left(r.parent),e=r.parent.right),1==e.left.color&&1==e.right.color?(e.color=0,r=r.parent):(1==e.right.color&&(e.color=0,e.left.color=1,this.rotate_right(e),e=r.parent.right),e.color=r.parent.color,r.parent.color=1,e.right.color=1,this.rotate_left(r.parent),r=this.root)):(e=r.parent.left,0==e.color&&(e.color=1,r.parent.color=0,this.rotate_right(r.parent),e=r.parent.left),1==e.left.color&&1==e.right.color?(e.color=0,r=r.parent):(1==e.left.color&&(e.color=0,e.right.color=1,this.rotate_left(e),e=r.parent.left),e.color=r.parent.color,r.parent.color=1,e.left.color=1,this.rotate_right(r.parent),r=this.root));r.color=1}tree_search(t,e){if(null!=t&&t!=this.nil_node)return e.equal_to(t)?t:e.less_than(t)?this.tree_search(t.left,e):this.tree_search(t.right,e)}tree_search_nearest_forward(t,e){let r,i=t;for(;i&&i!=this.nil_node;)i.less_than(e)?i.intersect(e)?(r=i,i=i.left):i=i.right:(r&&!i.less_than(r)||(r=i),i=i.left);return r||null}tree_search_interval(t,e,r){null!=t&&t!=this.nil_node&&(t.left==this.nil_node||t.not_intersect_left_subtree(e)||this.tree_search_interval(t.left,e,r),t.intersect(e)&&r.push(t),t.right==this.nil_node||t.not_intersect_right_subtree(e)||this.tree_search_interval(t.right,e,r))}tree_find_any_interval(t,e){let r=!1;return null!=t&&t!=this.nil_node&&(t.left==this.nil_node||t.not_intersect_left_subtree(e)||(r=this.tree_find_any_interval(t.left,e)),r||(r=t.intersect(e)),r||t.right==this.nil_node||t.not_intersect_right_subtree(e)||(r=this.tree_find_any_interval(t.right,e))),r}local_minimum(t){let e=t;for(;null!=e.left&&e.left!=this.nil_node;)e=e.left;return e}local_maximum(t){let e=t;for(;null!=e.right&&e.right!=this.nil_node;)e=e.right;return e}tree_successor(t){let e,r,i;if(t.right!=this.nil_node)e=this.local_minimum(t.right);else{for(r=t,i=t.parent;null!=i&&i.right==r;)r=i,i=i.parent;e=i}return e}rotate_left(t){let e=t.right;t.right=e.left,e.left!=this.nil_node&&(e.left.parent=t),e.parent=t.parent,t==this.root?this.root=e:t==t.parent.left?t.parent.left=e:t.parent.right=e,e.left=t,t.parent=e,null!=t&&t!=this.nil_node&&t.update_max(),e=t.parent,null!=e&&e!=this.nil_node&&e.update_max()}rotate_right(t){let e=t.left;t.left=e.right,e.right!=this.nil_node&&(e.right.parent=t),e.parent=t.parent,t==this.root?this.root=e:t==t.parent.left?t.parent.left=e:t.parent.right=e,e.right=t,t.parent=e,null!=t&&t!=this.nil_node&&t.update_max(),e=t.parent,null!=e&&e!=this.nil_node&&e.update_max()}tree_walk(t,e){null!=t&&t!=this.nil_node&&(this.tree_walk(t.left,e),e(t),this.tree_walk(t.right,e))}testRedBlackProperty(){let t=!0;return this.tree_walk(this.root,(function(e){0==e.color&&(1==e.left.color&&1==e.right.color||(t=!1))})),t}testBlackHeightProperty(t){let e=0,r=0,i=0;if(1==t.color&&e++,r=t.left!=this.nil_node?this.testBlackHeightProperty(t.left):1,i=t.right!=this.nil_node?this.testBlackHeightProperty(t.right):1,r!=i)throw new Error("Red-black height property violated");return e+=r,e}}},71631:(t,e,r)=>{r.d(e,{q5:()=>u,unzip:()=>o,y$:()=>s});var i=r(18390),n=r(90510),l=r(96553);async function o(t){try{let e,r=0,n=0;const o=[];let s,h=0;do{const i=t.subarray(r);if(s=new l.Inflate,({strm:e}=s),s.push(i,l.Z_SYNC_FLUSH),s.err)throw new Error(s.msg);r+=e.next_in,o[n]=s.result,h+=o[n].length,n+=1}while(e.avail_in);const a=new Uint8Array(h);for(let t=0,e=0;t<o.length;t++)a.set(o[t],e),e+=o[t].length;return i.Buffer.from(a)}catch(t){if(`${t}`.match(/incorrect header check/))throw new Error("problem decompressing block: incorrect gzip header check");throw t}}async function s(t,e){try{let r;const{minv:n,maxv:o}=e;let s=n.blockPosition,h=n.dataPosition;const a=[],c=[],u=[];let _=0,f=0;do{const e=t.subarray(s-n.blockPosition),i=new l.Inflate;if(({strm:r}=i),i.push(e,l.Z_SYNC_FLUSH),i.err)throw new Error(i.msg);const m=i.result;a.push(m);let p=m.length;c.push(s),u.push(h),1===a.length&&n.dataPosition&&(a[0]=a[0].subarray(n.dataPosition),p=a[0].length);const d=s;if(s+=r.next_in,h+=p,d>=o.blockPosition){a[f]=a[f].subarray(0,o.blockPosition===n.blockPosition?o.dataPosition-n.dataPosition+1:o.dataPosition+1),c.push(s),u.push(h),_+=a[f].length;break}_+=a[f].length,f++}while(r.avail_in);const m=new Uint8Array(_);for(let t=0,e=0;t<a.length;t++)m.set(a[t],e),e+=a[t].length;return{buffer:i.Buffer.from(m),cpositions:c,dpositions:u}}catch(t){if(`${t}`.match(/incorrect header check/))throw new Error("problem decompressing block: incorrect gzip header check");throw t}}var h=r(84574),a=r.n(h);class c{constructor({filehandle:t,path:e}){if(t)this.filehandle=t;else{if(!e)throw new TypeError("either filehandle or path must be defined");this.filehandle=new n.S9(e)}}_readLongWithOverflow(t,e=0,r=!0){const i=a().fromBytesLE(t.slice(e,e+8),r);if(i.greaterThan(Number.MAX_SAFE_INTEGER)||i.lessThan(Number.MIN_SAFE_INTEGER))throw new TypeError("integer overflow");return i.toNumber()}_getIndex(){return this.index||(this.index=this._readIndex()),this.index}async _readIndex(){let t=i.Buffer.allocUnsafe(8);await this.filehandle.read(t,0,8,0);const e=this._readLongWithOverflow(t,0,!0);if(!e)return[[0,0]];const r=new Array(e+1);r[0]=[0,0];const n=16*e;if(n>Number.MAX_SAFE_INTEGER)throw new TypeError("integer overflow");t=i.Buffer.allocUnsafe(n),await this.filehandle.read(t,0,n,8);for(let i=0;i<e;i+=1){const e=this._readLongWithOverflow(t,16*i),n=this._readLongWithOverflow(t,16*i+8);r[i+1]=[e,n]}return r}async getLastBlock(){const t=await this._getIndex();if(t.length)return t[t.length-1]}async getRelevantBlocksForRead(t,e){const r=e+t;if(0===t)return[];const i=await this._getIndex(),n=[],l=(t,r)=>{const i=t[1],n=r?r[1]:1/0;return i<=e&&n>e?0:i<e?-1:1};let o=0,s=i.length-1,h=Math.floor(i.length/2),a=l(i[h],i[h+1]);for(;0!==a;)a>0?s=h-1:a<0&&(o=h+1),h=Math.ceil((s-o)/2)+o,a=l(i[h],i[h+1]);n.push(i[h]);let c=h+1;for(;c<i.length&&(n.push(i[c]),!(i[c][1]>=r));c+=1);return n[n.length-1][1]<r&&n.push([]),n}}class u{constructor({filehandle:t,path:e,gziFilehandle:r,gziPath:i}){if(t)this.filehandle=t;else{if(!e)throw new TypeError("either filehandle or path must be defined");this.filehandle=new n.S9(e)}if(!r&&!i&&!e)throw new TypeError("either gziFilehandle or gziPath must be defined");this.gzi=new c({filehandle:r,path:r||i||!e?`${e}.gzi`:i})}async stat(){const t=await this.filehandle.stat();return Object.assign(t,{size:await this.getUncompressedFileSize(),blocks:void 0,blksize:void 0})}async getUncompressedFileSize(){const[,t]=await this.gzi.getLastBlock(),{size:e}=await this.filehandle.stat(),r=i.Buffer.allocUnsafe(4),{bytesRead:n}=await this.filehandle.read(r,0,4,e-28-4);if(4!==n)throw new Error("read error");return t+r.readUInt32LE(0)}async _readAndUncompressBlock(t,[e],[r]){let i=r;i||(i=(await this.filehandle.stat()).size);const n=i-e;return await this.filehandle.read(t,0,n,e),await o(t.slice(0,n))}async read(t,e,r,n){const l=await this.gzi.getRelevantBlocksForRead(r,n),o=i.Buffer.allocUnsafe(65536);let s=e,h=0;for(let e=0;e<l.length-1;e+=1){const i=await this._readAndUncompressBlock(o,l[e],l[e+1]),[,a]=l[e],c=a>=n?0:n-a,u=Math.min(n+r,a+i.length)-a;c>=0&&c<i.length&&(i.copy(t,s,c,u),s+=u-c,h+=u-c)}return{bytesRead:h,buffer:t}}}}}]);
//# sourceMappingURL=5935.d7851fd2.chunk.js.map