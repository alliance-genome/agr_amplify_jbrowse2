"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[2598],{32598:(t,e,r)=>{r.d(e,{Ay:()=>o});const i=class t{constructor(t,e){this.low=t,this.high=e}clone(){return new t(this.low,this.high)}get max(){return this.clone()}less_than(t){return this.low<t.low||this.low===t.low&&this.high<t.high}equal_to(t){return this.low===t.low&&this.high===t.high}intersect(t){return!this.not_intersect(t)}not_intersect(t){return this.high<t.low||t.high<this.low}merge(e){return new t(void 0===this.low?e.low:this.low<e.low?this.low:e.low,void 0===this.high?e.high:this.high>e.high?this.high:e.high)}output(){return[this.low,this.high]}static comparable_max(t,e){return t.merge(e)}static comparable_less_than(t,e){return t<e}};class l{constructor(t=void 0,e=void 0,r=null,l=null,o=null,h=1){if(this.left=r,this.right=l,this.parent=o,this.color=h,this.item={key:t,value:e},t&&t instanceof Array&&2===t.length&&!Number.isNaN(t[0])&&!Number.isNaN(t[1])){let[e,r]=t;e>r&&([e,r]=[r,e]),this.item.key=new i(e,r)}this.max=this.item.key?this.item.key.max:void 0}isNil(){return void 0===this.item.key&&void 0===this.item.value&&null===this.left&&null===this.right&&1===this.color}_value_less_than(t){return this.item.value&&t.item.value&&this.item.value.less_than?this.item.value.less_than(t.item.value):this.item.value<t.item.value}less_than(t){return this.item.value===this.item.key&&t.item.value===t.item.key?this.item.key.less_than(t.item.key):this.item.key.less_than(t.item.key)||this.item.key.equal_to(t.item.key)&&this._value_less_than(t)}_value_equal(t){return this.item.value&&t.item.value&&this.item.value.equal_to?this.item.value.equal_to(t.item.value):this.item.value===t.item.value}equal_to(t){return this.item.value===this.item.key&&t.item.value===t.item.key?this.item.key.equal_to(t.item.key):this.item.key.equal_to(t.item.key)&&this._value_equal(t)}intersect(t){return this.item.key.intersect(t.item.key)}copy_data(t){this.item.key=t.item.key,this.item.value=t.item.value}update_max(){if(this.max=this.item.key?this.item.key.max:void 0,this.right&&this.right.max){const t=this.item.key.constructor.comparable_max;this.max=t(this.max,this.right.max)}if(this.left&&this.left.max){const t=this.item.key.constructor.comparable_max;this.max=t(this.max,this.left.max)}}not_intersect_left_subtree(t){return(0,this.item.key.constructor.comparable_less_than)(void 0!==this.left.max.high?this.left.max.high:this.left.max,t.item.key.low)}not_intersect_right_subtree(t){const e=this.item.key.constructor.comparable_less_than;let r=void 0!==this.right.max.low?this.right.max.low:this.right.item.key.low;return e(t.item.key.high,r)}}class o{constructor(){this.root=null,this.nil_node=new l}get size(){let t=0;return this.tree_walk(this.root,(()=>t++)),t}get keys(){let t=[];return this.tree_walk(this.root,(e=>t.push(e.item.key.output?e.item.key.output():e.item.key))),t}get values(){let t=[];return this.tree_walk(this.root,(e=>t.push(e.item.value))),t}get items(){let t=[];return this.tree_walk(this.root,(e=>t.push({key:e.item.key.output?e.item.key.output():e.item.key,value:e.item.value}))),t}isEmpty(){return null==this.root||this.root===this.nil_node}clear(){this.root=null}insert(t,e=t){if(void 0===t)return;let r=new l(t,e,this.nil_node,this.nil_node,null,0);return this.tree_insert(r),this.recalc_max(r),r}exist(t,e=t){let r=new l(t,e);return!!this.tree_search(this.root,r)}remove(t,e=t){let r=new l(t,e),i=this.tree_search(this.root,r);return i&&this.tree_delete(i),i}search(t,e=((t,e)=>t===e?e.output():t)){let r=new l(t),i=[];return this.tree_search_interval(this.root,r,i),i.map((t=>e(t.item.value,t.item.key)))}intersect_any(t){let e=new l(t);return this.tree_find_any_interval(this.root,e)}forEach(t){this.tree_walk(this.root,(e=>t(e.item.key,e.item.value)))}map(t){const e=new o;return this.tree_walk(this.root,(r=>e.insert(r.item.key,t(r.item.value,r.item.key)))),e}*iterate(t,e=((t,e)=>t===e?e.output():t)){let r;for(t?r=this.tree_search_nearest_forward(this.root,new l(t)):this.root&&(r=this.local_minimum(this.root));r;)yield e(r.item.value,r.item.key),r=this.tree_successor(r)}recalc_max(t){let e=t;for(;null!=e.parent;)e.parent.update_max(),e=e.parent}tree_insert(t){let e=this.root,r=null;if(null==this.root||this.root===this.nil_node)this.root=t;else{for(;e!==this.nil_node;)r=e,e=t.less_than(e)?e.left:e.right;t.parent=r,t.less_than(r)?r.left=t:r.right=t}this.insert_fixup(t)}insert_fixup(t){let e,r;for(e=t;e!==this.root&&0===e.parent.color;)e.parent===e.parent.parent.left?(r=e.parent.parent.right,0===r.color?(e.parent.color=1,r.color=1,e.parent.parent.color=0,e=e.parent.parent):(e===e.parent.right&&(e=e.parent,this.rotate_left(e)),e.parent.color=1,e.parent.parent.color=0,this.rotate_right(e.parent.parent))):(r=e.parent.parent.left,0===r.color?(e.parent.color=1,r.color=1,e.parent.parent.color=0,e=e.parent.parent):(e===e.parent.left&&(e=e.parent,this.rotate_right(e)),e.parent.color=1,e.parent.parent.color=0,this.rotate_left(e.parent.parent)));this.root.color=1}tree_delete(t){let e,r;e=t.left===this.nil_node||t.right===this.nil_node?t:this.tree_successor(t),r=e.left!==this.nil_node?e.left:e.right,r.parent=e.parent,e===this.root?this.root=r:(e===e.parent.left?e.parent.left=r:e.parent.right=r,e.parent.update_max()),this.recalc_max(r),e!==t&&(t.copy_data(e),t.update_max(),this.recalc_max(t)),1===e.color&&this.delete_fixup(r)}delete_fixup(t){let e,r=t;for(;r!==this.root&&null!=r.parent&&1===r.color;)r===r.parent.left?(e=r.parent.right,0===e.color&&(e.color=1,r.parent.color=0,this.rotate_left(r.parent),e=r.parent.right),1===e.left.color&&1===e.right.color?(e.color=0,r=r.parent):(1===e.right.color&&(e.color=0,e.left.color=1,this.rotate_right(e),e=r.parent.right),e.color=r.parent.color,r.parent.color=1,e.right.color=1,this.rotate_left(r.parent),r=this.root)):(e=r.parent.left,0===e.color&&(e.color=1,r.parent.color=0,this.rotate_right(r.parent),e=r.parent.left),1===e.left.color&&1===e.right.color?(e.color=0,r=r.parent):(1===e.left.color&&(e.color=0,e.right.color=1,this.rotate_left(e),e=r.parent.left),e.color=r.parent.color,r.parent.color=1,e.left.color=1,this.rotate_right(r.parent),r=this.root));r.color=1}tree_search(t,e){if(null!=t&&t!==this.nil_node)return e.equal_to(t)?t:e.less_than(t)?this.tree_search(t.left,e):this.tree_search(t.right,e)}tree_search_nearest_forward(t,e){let r,i=t;for(;i&&i!==this.nil_node;)i.less_than(e)?i.intersect(e)?(r=i,i=i.left):i=i.right:(r&&!i.less_than(r)||(r=i),i=i.left);return r||null}tree_search_interval(t,e,r){null!=t&&t!==this.nil_node&&(t.left===this.nil_node||t.not_intersect_left_subtree(e)||this.tree_search_interval(t.left,e,r),t.intersect(e)&&r.push(t),t.right===this.nil_node||t.not_intersect_right_subtree(e)||this.tree_search_interval(t.right,e,r))}tree_find_any_interval(t,e){let r=!1;return null!=t&&t!==this.nil_node&&(t.left===this.nil_node||t.not_intersect_left_subtree(e)||(r=this.tree_find_any_interval(t.left,e)),r||(r=t.intersect(e)),r||t.right===this.nil_node||t.not_intersect_right_subtree(e)||(r=this.tree_find_any_interval(t.right,e))),r}local_minimum(t){let e=t;for(;null!=e.left&&e.left!==this.nil_node;)e=e.left;return e}local_maximum(t){let e=t;for(;null!=e.right&&e.right!==this.nil_node;)e=e.right;return e}tree_successor(t){let e,r,i;if(t.right!==this.nil_node)e=this.local_minimum(t.right);else{for(r=t,i=t.parent;null!=i&&i.right===r;)r=i,i=i.parent;e=i}return e}rotate_left(t){let e=t.right;t.right=e.left,e.left!==this.nil_node&&(e.left.parent=t),e.parent=t.parent,t===this.root?this.root=e:t===t.parent.left?t.parent.left=e:t.parent.right=e,e.left=t,t.parent=e,null!=t&&t!==this.nil_node&&t.update_max(),e=t.parent,null!=e&&e!==this.nil_node&&e.update_max()}rotate_right(t){let e=t.left;t.left=e.right,e.right!==this.nil_node&&(e.right.parent=t),e.parent=t.parent,t===this.root?this.root=e:t===t.parent.left?t.parent.left=e:t.parent.right=e,e.right=t,t.parent=e,null!==t&&t!==this.nil_node&&t.update_max(),e=t.parent,null!=e&&e!==this.nil_node&&e.update_max()}tree_walk(t,e){null!=t&&t!==this.nil_node&&(this.tree_walk(t.left,e),e(t),this.tree_walk(t.right,e))}testRedBlackProperty(){let t=!0;return this.tree_walk(this.root,(function(e){0===e.color&&(1===e.left.color&&1===e.right.color||(t=!1))})),t}testBlackHeightProperty(t){let e=0,r=0,i=0;if(1===t.color&&e++,r=t.left!==this.nil_node?this.testBlackHeightProperty(t.left):1,i=t.right!==this.nil_node?this.testBlackHeightProperty(t.right):1,r!==i)throw new Error("Red-black height property violated");return e+=r,e}}}}]);
//# sourceMappingURL=2598.08780e1e.chunk.js.map