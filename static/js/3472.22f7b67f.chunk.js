),""!==m[0]&&m.unshift(""),m.length<2&&m.unshift(""),s.pathname=m.join("/")}if(s.search=t.search,s.query=t.query,s.host=t.host||"",s.auth=t.auth,s.hostname=t.hostname||t.host,s.port=t.port,s.pathname||s.search){var v=s.pathname||"",y=s.search||"";s.path=v+y}return s.slashes=s.slashes||t.slashes,s.href=s.format(),s}var b=s.pathname&&"/"===s.pathname.charAt(0),j=t.host||t.pathname&&"/"===t.pathname.charAt(0),O=j||b||s.host&&t.pathname,x=O,w=s.pathname&&s.pathname.split("/")||[],C=(m=t.pathname&&t.pathname.split("/")||[],s.protocol&&!g[s.protocol]);if(C&&(s.hostname="",s.port=null,s.host&&(""===w[0]?w[0]=s.host:w.unshift(s.host)),s.host="",t.protocol&&(t.hostname=null,t.port=null,t.host&&(""===m[0]?m[0]=t.host:m.unshift(t.host)),t.host=null),O=O&&(""===m[0]||""===w[0])),j)s.host=t.host||""===t.host?t.host:s.host,s.hostname=t.hostname||""===t.hostname?t.hostname:s.hostname,s.search=t.search,s.query=t.query,w=m;else if(m.length)w||(w=[]),w.pop(),w=w.concat(m),s.search=t.search,s.query=t.query;else if(!n.isNullOrUndefined(t.search)){if(C)s.hostname=s.host=w.shift(),(R=!!(s.host&&s.host.indexOf("@")>0)&&s.host.split("@"))&&(s.auth=R.shift(),s.host=s.hostname=R.shift());return s.search=t.search,s.query=t.query,n.isNull(s.pathname)&&n.isNull(s.search)||(s.path=(s.pathname?s.pathname:"")+(s.search?s.search:"")),s.href=s.format(),s}if(!w.length)return s.pathname=null,s.search?s.path="/"+s.search:s.path=null,s.href=s.format(),s;for(var A=w.slice(-1)[0],I=(s.host||t.host||w.length>1)&&("."===A||".."===A)||""===A,q=0,U=w.length;U>=0;U--)"."===(A=w[U])?w.splice(U,1):".."===A?(w.splice(U,1),q++):q&&(w.splice(U,1),q--);if(!O&&!x)for(;q--;q)w.unshift("..");!O||""===w[0]||w[0]&&"/"===w[0].charAt(0)||w.unshift(""),I&&"/"!==w.join("/").substr(-1)&&w.push("");var R,k=""===w[0]||w[0]&&"/"===w[0].charAt(0);C&&(s.hostname=s.host=k?"":w.length?w.shift():"",(R=!!(s.host&&s.host.indexOf("@")>0)&&s.host.split("@"))&&(s.auth=R.shift(),s.host=s.hostname=R.shift()));return(O=O||s.host&&w.length)&&!k&&w.unshift(""),w.length?s.pathname=w.join("/"):(s.pathname=null,s.path=null),n.isNull(s.pathname)&&n.isNull(s.search)||(s.path=(s.pathname?s.pathname:"")+(s.search?s.search:"")),s.auth=t.auth||s.auth,s.slashes=s.slashes||t.slashes,s.href=s.format(),s},h.prototype.parseHost=function(){var t=this.host,e=a.exec(t);e&&(":"!==(e=e[0])&&(this.port=e.substr(1)),t=t.substr(0,t.length-e.length)),t&&(this.hostname=t)}},90045:function(t){"use strict";t.exports={isString:function(t){return"string"===typeof t},isObject:function(t){return"object"===typeof t&&null!==t},isNull:function(t){return null===t},isNullOrUndefined:function(t){return null==t}}}}]);
//# sourceMappingURL=3472.22f7b67f.chunk.js.map/*! For license information please see 3472.22f7b67f.chunk.js.LICENSE.txt */
(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[3472],{35248:function(t){"use strict";function e(t,e){return Object.prototype.hasOwnProperty.call(t,e)}t.exports=function(t,s,r,n){s=s||"&",r=r||"=";var h={};if("string"!==typeof t||0===t.length)return h;var o=/\+/g;t=t.split(s);var a=1e3;n&&"number"===typeof n.maxKeys&&(a=n.maxKeys);var i=t.length;a>0&&i>a&&(i=a);for(var u=0;u<i;++u){var l,c,f,p,m=t[u].replace(o,"%20"),v=m.indexOf(r);v>=0?(l=m.substr(0,v),c=m.substr(v+1)):(l=m,c=""),f=decodeURIComponent(l),p=decodeURIComponent(c),e(h,f)?Array.isArray(h[f])?h[f].push(p):h[f]=[h[f],p]:h[f]=p}return h}},40797:function(t){"use strict";var e=function(t){switch(typeof t){case"string":return t;case"boolean":return t?"true":"false";case"number":return isFinite(t)?t:"";default:return""}};t.exports=function(t,s,r,n){return s=s||"&",r=r||"=",null===t&&(t=void 0),"object"===typeof t?Object.keys(t).map((function(n){var h=encodeURIComponent(e(n))+r;return Array.isArray(t[n])?t[n].map((function(t){return h+encodeURIComponent(e(t))})).join(s):h+encodeURIComponent(e(t[n]))})).join(s):n?encodeURIComponent(e(n))+r+encodeURIComponent(e(t)):""}},92109:function(t,e,s){"use strict";e.decode=e.parse=s(35248),e.encode=e.stringify=s(40797)},67620:function(t,e,s){var r;t=s.nmd(t),function(n){e&&e.nodeType,t&&t.nodeType;var h="object"==typeof s.g&&s.g;h.global!==h&&h.window!==h&&h.self;var o,a=2147483647,i=36,u=1,l=26,c=38,f=700,p=72,m=128,v="-",d=/^xn--/,g=/[^\x20-\x7E]/,y=/[\x2E\u3002\uFF0E\uFF61]/g,b={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},j=i-u,O=Math.floor,x=String.fromCharCode;function w(t){throw RangeError(b[t])}function C(t,e){for(var s=t.length,r=[];s--;)r[s]=e(t[s]);return r}function A(t,e){var s=t.split("@"),r="";return s.length>1&&(r=s[0]+"@",t=s[1]),r+C((t=t.replace(y,".")).split("."),e).join(".")}function I(t){for(var e,s,r=[],n=0,h=t.length;n<h;)(e=t.charCodeAt(n++))>=55296&&e<=56319&&n<h?56320==(64512&(s=t.charCodeAt(n++)))?r.push(((1023&e)<<10)+(1023&s)+65536):(r.push(e),n--):r.push(e);return r}function q(t){return C(t,(function(t){var e="";return t>65535&&(e+=x((t-=65536)>>>10&1023|55296),t=56320|1023&t),e+=x(t)})).join("")}function U(t,e){return t+22+75*(t<26)-((0!=e)<<5)}function R(t,e,s){var r=0;for(t=s?O(t/f):t>>1,t+=O(t/e);t>j*l>>1;r+=i)t=O(t/j);return O(r+(j+1)*t/(t+c))}function k(t){var e,s,r,n,h,o,c,f,d,g,y,b=[],j=t.length,x=0,C=m,A=p;for((s=t.lastIndexOf(v))<0&&(s=0),r=0;r<s;++r)t.charCodeAt(r)>=128&&w("not-basic"),b.push(t.charCodeAt(r));for(n=s>0?s+1:0;n<j;){for(h=x,o=1,c=i;n>=j&&w("invalid-input"),((f=(y=t.charCodeAt(n++))-48<10?y-22:y-65<26?y-65:y-97<26?y-97:i)>=i||f>O((a-x)/o))&&w("overflow"),x+=f*o,!(f<(d=c<=A?u:c>=A+l?l:c-A));c+=i)o>O(a/(g=i-d))&&w("overflow"),o*=g;A=R(x-h,e=b.length+1,0==h),O(x/e)>a-C&&w("overflow"),C+=O(x/e),x%=e,b.splice(x++,0,C)}return q(b)}function N(t){var e,s,r,n,h,o,c,f,d,g,y,b,j,C,A,q=[];for(b=(t=I(t)).length,e=m,s=0,h=p,o=0;o<b;++o)(y=t[o])<128&&q.push(x(y));for(r=n=q.length,n&&q.push(v);r<b;){for(c=a,o=0;o<b;++o)(y=t[o])>=e&&y<c&&(c=y);for(c-e>O((a-s)/(j=r+1))&&w("overflow"),s+=(c-e)*j,e=c,o=0;o<b;++o)if((y=t[o])<e&&++s>a&&w("overflow"),y==e){for(f=s,d=i;!(f<(g=d<=h?u:d>=h+l?l:d-h));d+=i)A=f-g,C=i-g,q.push(x(U(g+A%C,0))),f=O(A/C);q.push(x(U(f,0))),h=R(s,j,r==n),s=0,++r}++s,++e}return q.join("")}o={version:"1.3.2",ucs2:{decode:I,encode:q},decode:k,encode:N,toASCII:function(t){return A(t,(function(t){return g.test(t)?"xn--"+N(t):t}))},toUnicode:function(t){return A(t,(function(t){return d.test(t)?k(t.slice(4).toLowerCase()):t}))}},void 0===(r=function(){return o}.call(e,s,e,t))||(t.exports=r)}()},33472:function(t,e,s){"use strict";var r=s(67620),n=s(90045);function h(){this.protocol=null,this.slashes=null,this.auth=null,this.host=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.query=null,this.pathname=null,this.path=null,this.href=null}e.parse=b,e.resolve=function(t,e){return b(t,!1,!0).resolve(e)},e.resolveObject=function(t,e){return t?b(t,!1,!0).resolveObject(e):e},e.format=function(t){n.isString(t)&&(t=b(t));return t instanceof h?t.format():h.prototype.format.call(t)},e.Url=h;var o=/^([a-z0-9.+-]+:)/i,a=/:[0-9]*$/,i=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,u=["{","}","|","\\","^","`"].concat(["<",">",'"',"`"," ","\r","\n","\t"]),l=["'"].concat(u),c=["%","/","?",";","#"].concat(l),f=["/","?","#"],p=/^[+a-z0-9A-Z_-]{0,63}$/,m=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,v={javascript:!0,"javascript:":!0},d={javascript:!0,"javascript:":!0},g={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0},y=s(92109);function b(t,e,s){if(t&&n.isObject(t)&&t instanceof h)return t;var r=new h;return r.parse(t,e,s),r}h.prototype.parse=function(t,e,s){if(!n.isString(t))throw new TypeError("Parameter 'url' must be a string, not "+typeof t);var h=t.indexOf("?"),a=-1!==h&&h<t.indexOf("#")?"?":"#",u=t.split(a);u[0]=u[0].replace(/\\/g,"/");var b=t=u.join(a);if(b=b.trim(),!s&&1===t.split("#").length){var j=i.exec(b);if(j)return this.path=b,this.href=b,this.pathname=j[1],j[2]?(this.search=j[2],this.query=e?y.parse(this.search.substr(1)):this.search.substr(1)):e&&(this.search="",this.query={}),this}var O=o.exec(b);if(O){var x=(O=O[0]).toLowerCase();this.protocol=x,b=b.substr(O.length)}if(s||O||b.match(/^\/\/[^@\/]+@[^@\/]+/)){var w="//"===b.substr(0,2);!w||O&&d[O]||(b=b.substr(2),this.slashes=!0)}if(!d[O]&&(w||O&&!g[O])){for(var C,A,I=-1,q=0;q<f.length;q++){-1!==(U=b.indexOf(f[q]))&&(-1===I||U<I)&&(I=U)}-1!==(A=-1===I?b.lastIndexOf("@"):b.lastIndexOf("@",I))&&(C=b.slice(0,A),b=b.slice(A+1),this.auth=decodeURIComponent(C)),I=-1;for(q=0;q<c.length;q++){var U;-1!==(U=b.indexOf(c[q]))&&(-1===I||U<I)&&(I=U)}-1===I&&(I=b.length),this.host=b.slice(0,I),b=b.slice(I),this.parseHost(),this.hostname=this.hostname||"";var R="["===this.hostname[0]&&"]"===this.hostname[this.hostname.length-1];if(!R)for(var k=this.hostname.split(/\./),N=(q=0,k.length);q<N;q++){var S=k[q];if(S&&!S.match(p)){for(var _="",E=0,F=S.length;E<F;E++)S.charCodeAt(E)>127?_+="x":_+=S[E];if(!_.match(p)){var $=k.slice(0,q),z=k.slice(q+1),L=S.match(m);L&&($.push(L[1]),z.unshift(L[2])),z.length&&(b="/"+z.join(".")+b),this.hostname=$.join(".");break}}}this.hostname.length>255?this.hostname="":this.hostname=this.hostname.toLowerCase(),R||(this.hostname=r.toASCII(this.hostname));var T=this.port?":"+this.port:"",H=this.hostname||"";this.host=H+T,this.href+=this.host,R&&(this.hostname=this.hostname.substr(1,this.hostname.length-2),"/"!==b[0]&&(b="/"+b))}if(!v[x])for(q=0,N=l.length;q<N;q++){var K=l[q];if(-1!==b.indexOf(K)){var P=encodeURIComponent(K);P===K&&(P=escape(K)),b=b.split(K).join(P)}}var Z=b.indexOf("#");-1!==Z&&(this.hash=b.substr(Z),b=b.slice(0,Z));var M=b.indexOf("?");if(-1!==M?(this.search=b.substr(M),this.query=b.substr(M+1),e&&(this.query=y.parse(this.query)),b=b.slice(0,M)):e&&(this.search="",this.query={}),b&&(this.pathname=b),g[x]&&this.hostname&&!this.pathname&&(this.pathname="/"),this.pathname||this.search){T=this.pathname||"";var B=this.search||"";this.path=T+B}return this.href=this.format(),this},h.prototype.format=function(){var t=this.auth||"";t&&(t=(t=encodeURIComponent(t)).replace(/%3A/i,":"),t+="@");var e=this.protocol||"",s=this.pathname||"",r=this.hash||"",h=!1,o="";this.host?h=t+this.host:this.hostname&&(h=t+(-1===this.hostname.indexOf(":")?this.hostname:"["+this.hostname+"]"),this.port&&(h+=":"+this.port)),this.query&&n.isObject(this.query)&&Object.keys(this.query).length&&(o=y.stringify(this.query));var a=this.search||o&&"?"+o||"";return e&&":"!==e.substr(-1)&&(e+=":"),this.slashes||(!e||g[e])&&!1!==h?(h="//"+(h||""),s&&"/"!==s.charAt(0)&&(s="/"+s)):h||(h=""),r&&"#"!==r.charAt(0)&&(r="#"+r),a&&"?"!==a.charAt(0)&&(a="?"+a),e+h+(s=s.replace(/[?#]/g,(function(t){return encodeURIComponent(t)})))+(a=a.replace("#","%23"))+r},h.prototype.resolve=function(t){return this.resolveObject(b(t,!1,!0)).format()},h.prototype.resolveObject=function(t){if(n.isString(t)){var e=new h;e.parse(t,!1,!0),t=e}for(var s=new h,r=Object.keys(this),o=0;o<r.length;o++){var a=r[o];s[a]=this[a]}if(s.hash=t.hash,""===t.href)return s.href=s.format(),s;if(t.slashes&&!t.protocol){for(var i=Object.keys(t),u=0;u<i.length;u++){var l=i[u];"protocol"!==l&&(s[l]=t[l])}return g[s.protocol]&&s.hostname&&!s.pathname&&(s.path=s.pathname="/"),s.href=s.format(),s}if(t.protocol&&t.protocol!==s.protocol){if(!g[t.protocol]){for(var c=Object.keys(t),f=0;f<c.length;f++){var p=c[f];s[p]=t[p]}return s.href=s.format(),s}if(s.protocol=t.protocol,t.host||d[t.protocol])s.pathname=t.pathname;else{for(var m=(t.pathname||"").split("/");m.length&&!(t.host=m.shift()););t.host||(t.host=""),t.hostname||(t.hostname=""