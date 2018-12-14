(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ 1164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/veui-loader/lib??ref--11!./pages/development/components/column.vue?vue&type=template&id=70c00c15&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('article',{staticClass:"content post"},[_c('h1',{attrs:{"id":"column-small表格列small"}},[_vm._v("Column "),_c('small',[_vm._v("表格列")])]),_c('div',{staticClass:"tip custom-block"},[_c('p',[_c('code',[_vm._v("Column")]),_vm._v(" 组件需要配合 "),_c('a',{attrs:{"href":"./table"}},[_c('code',[_vm._v("Table")])]),_vm._v(" 组件使用。")])]),_c('h2',{attrs:{"id":"示例"}},[_vm._v("示例")]),_c('p',[_vm._v("见 "),_c('a',{attrs:{"href":"./table#%E7%A4%BA%E4%BE%8B"}},[_vm._v("Table 示例")]),_vm._v("。")]),_c('h2',{attrs:{"id":"api"}},[_vm._v("API")]),_c('h3',{attrs:{"id":"属性"}},[_vm._v("属性")]),_c('table',[_c('thead',[_c('tr',[_c('th',[_vm._v("名称")]),_c('th',[_vm._v("类型")]),_c('th',[_vm._v("默认值")]),_c('th',[_vm._v("描述")])])]),_c('tbody',[_c('tr',[_c('td',[_c('code',[_vm._v("title")])]),_c('td',[_c('code',[_vm._v("string")])]),_c('td',[_vm._v("-")]),_c('td',[_vm._v("列标题。")])]),_c('tr',[_c('td',[_c('code',[_vm._v("field")])]),_c('td',[_c('code',[_vm._v("string")])]),_c('td',[_vm._v("-")]),_c('td',[_vm._v("列的键名，对应所属的 "),_c('code',[_vm._v("Table")]),_vm._v(" 组件 "),_c('code',[_vm._v("data")]),_vm._v(" 属性数据项的某个字段。")])]),_c('tr',[_c('td',[_c('code',[_vm._v("width")])]),_c('td',[_c('code',[_vm._v("string=|number=")])]),_c('td',[_vm._v("-")]),_c('td',[_vm._v("列宽，值为像素值。")])]),_c('tr',[_c('td',[_c('code',[_vm._v("sortable")])]),_c('td',[_c('code',[_vm._v("boolean")])]),_c('td',[_c('code',[_vm._v("false")])]),_c('td',[_c('p',[_vm._v("本列是否支持排序。")]),_c('div',{staticClass:"warning custom-block"},[_c('p',[_vm._v("组件本身不会处理排序逻辑，仅会在排序按钮被点击时在 "),_c('code',[_vm._v("Table")]),_vm._v(" 上抛出 "),_c('code',[_vm._v("sort")]),_vm._v(" 事件，使用者需要自行处理排序逻辑。")])])])]),_c('tr',[_c('td',[_c('code',[_vm._v("align")])]),_c('td',[_c('code',[_vm._v("string=")])]),_c('td',[_vm._v("-")]),_c('td',[_vm._v("内容对齐方式，支持 "),_c('code',[_vm._v("left")]),_vm._v("/"),_c('code',[_vm._v("center")]),_vm._v("/"),_c('code',[_vm._v("right")]),_vm._v("。")])]),_c('tr',[_c('td',[_c('code',[_vm._v("span")])]),_c('td',[_c('code',[_vm._v("function(number): Object")])]),_c('td'),_c('td',[_c('p',[_vm._v("单元格合并配置。类型为 "),_c('code',[_vm._v("function(index: number): { row: number, col: number }")]),_vm._v("。"),_c('code',[_vm._v("index")]),_vm._v(" 为当前行在所属 "),_c('code',[_vm._v("Table")]),_vm._v(" 组件的 "),_c('code',[_vm._v("data")]),_vm._v(" 属性中的索引。返回值的 "),_c('code',[_vm._v("row")]),_vm._v("/"),_c('code',[_vm._v("col")]),_vm._v(" 字段对应于单元格的 "),_c('code',[_vm._v("rowspan")]),_vm._v("/"),_c('code',[_vm._v("colspan")]),_vm._v("，默认值均为 "),_c('code',[_vm._v("1")]),_vm._v("。")]),_c('div',{staticClass:"tip custom-block"},[_c('p',[_vm._v("可以参考 "),_c('code',[_vm._v("Table")]),_vm._v(" 组件中的"),_c('a',{attrs:{"href":"./table#%E9%AB%98%E7%BA%A7"}},[_vm._v("示例 › 高级")]),_vm._v("来了解如何使用。")])])])])])]),_c('h3',{attrs:{"id":"插槽"}},[_vm._v("插槽")]),_c('table',[_c('thead',[_c('tr',[_c('th',[_vm._v("名称")]),_c('th',[_vm._v("描述")])])]),_c('tbody',[_c('tr',[_c('td',[_c('code',[_vm._v("head")])]),_c('td',[_vm._v("列头区域。")])]),_c('tr',[_c('td',[_c('code',[_vm._v("foot")])]),_c('td',[_c('p',[_vm._v("列脚区域。")]),_c('div',{staticClass:"warning custom-block"},[_c('p',[_vm._v("如果所属的 "),_c('code',[_vm._v("Table")]),_vm._v(" 组件定义了 "),_c('code',[_vm._v("foot")]),_vm._v(" 插槽，单独的列脚配置将被覆盖。")])])])])])]),_c('h3',{attrs:{"id":"作用域插槽"}},[_vm._v("作用域插槽")]),_c('table',[_c('thead',[_c('tr',[_c('th',[_vm._v("名称")]),_c('th',[_vm._v("描述")])])]),_c('tbody',[_c('tr',[_c('td',[_c('code',[_vm._v("default")])]),_c('td',[_c('p',[_vm._v("单元格的内容。")]),_c('p',[_vm._v("默认内容：表格 "),_c('code',[_vm._v("data")]),_vm._v(" 数据项中与 "),_c('code',[_vm._v("field")]),_vm._v(" 属性对应的字段值。")]),_c('p',[_vm._v("作用域参数为 "),_c('code',[_vm._v("data")]),_vm._v(" 内当前行数据中的所有字段。")])])])])]),_c('h3',{attrs:{"id":"作用域插槽-1"}},[_vm._v("作用域插槽")]),_c('table',[_c('thead',[_c('tr',[_c('th',[_vm._v("名称")]),_c('th',[_vm._v("描述")])])]),_c('tbody',[_c('tr',[_c('td',[_c('code',[_vm._v("sub-row")])]),_c('td',[_c('p',[_vm._v("展开行后子行的内容。使用此插槽时，内容会作为行展开下方子行中对应列的单元格内容。行数据源来自 "),_c('code',[_vm._v("data")]),_vm._v(" 中对应主行数据的 "),_c('code',[_vm._v("children")]),_vm._v(" 数组，展开的子行数与 "),_c('code',[_vm._v("children")]),_vm._v(" 内数据项数相同，使用相同的列配置。")]),_c('p',[_vm._v("默认内容：表格 "),_c('code',[_vm._v("data[i].children[j]")]),_vm._v(" 数据项中与 "),_c('code',[_vm._v("field")]),_vm._v(" 属性对应的字段值。")]),_c('p',[_vm._v("作用域参数当前子行数据中的所有字段，以及当前主行对应索引值 "),_c('code',[_vm._v("index")]),_vm._v("。")]),_c('div',{staticClass:"warning custom-block"},[_c('p',[_vm._v("如果所属的 "),_c('code',[_vm._v("Table")]),_vm._v(" 组件定义了作用域插槽 "),_c('code',[_vm._v("sub-row")]),_vm._v("，单独列的 "),_c('code',[_vm._v("sub-row")]),_vm._v(" 将被覆盖。")])])])])])])])}]


// CONCATENATED MODULE: ./pages/development/components/column.vue?vue&type=template&id=70c00c15&scoped=true&

// EXTERNAL MODULE: ./assets/styles/post.styl?vue&type=style&index=0&id=70c00c15&lang=stylus&scoped=true&
var postvue_type_style_index_0_id_70c00c15_lang_stylus_scoped_true_ = __webpack_require__(818);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/development/components/column.vue

var script = {}



/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  "70c00c15",
  null
  
)

component.options.__file = "column.vue"
/* harmony default export */ var column = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 480:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(819);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(9).default
var update = add("e8e39e20", content, true, {});

/***/ }),

/***/ 818:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_stylus_loader_index_js_ref_7_oneOf_1_3_post_styl_vue_type_style_index_0_id_70c00c15_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(480);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_stylus_loader_index_js_ref_7_oneOf_1_3_post_styl_vue_type_style_index_0_id_70c00c15_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_stylus_loader_index_js_ref_7_oneOf_1_3_post_styl_vue_type_style_index_0_id_70c00c15_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_stylus_loader_index_js_ref_7_oneOf_1_3_post_styl_vue_type_style_index_0_id_70c00c15_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 819:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// imports


// module
exports.push([module.i, "\n.hljs[data-v-70c00c15]{display:block;overflow-x:auto;padding:.5em;color:#abb2bf;background:#282c34\n}\n.hljs-comment[data-v-70c00c15],.hljs-quote[data-v-70c00c15]{color:#5c6370;font-style:italic\n}\n.hljs-doctag[data-v-70c00c15],.hljs-formula[data-v-70c00c15],.hljs-keyword[data-v-70c00c15]{color:#c678dd\n}\n.hljs-deletion[data-v-70c00c15],.hljs-name[data-v-70c00c15],.hljs-section[data-v-70c00c15],.hljs-selector-tag[data-v-70c00c15],.hljs-subst[data-v-70c00c15]{color:#e06c75\n}\n.hljs-literal[data-v-70c00c15]{color:#56b6c2\n}\n.hljs-addition[data-v-70c00c15],.hljs-attribute[data-v-70c00c15],.hljs-meta-string[data-v-70c00c15],.hljs-regexp[data-v-70c00c15],.hljs-string[data-v-70c00c15]{color:#98c379\n}\n.hljs-built_in[data-v-70c00c15],.hljs-class .hljs-title[data-v-70c00c15]{color:#e6c07b\n}\n.hljs-attr[data-v-70c00c15],.hljs-number[data-v-70c00c15],.hljs-selector-attr[data-v-70c00c15],.hljs-selector-class[data-v-70c00c15],.hljs-selector-pseudo[data-v-70c00c15],.hljs-template-variable[data-v-70c00c15],.hljs-type[data-v-70c00c15],.hljs-variable[data-v-70c00c15]{color:#d19a66\n}\n.hljs-bullet[data-v-70c00c15],.hljs-link[data-v-70c00c15],.hljs-meta[data-v-70c00c15],.hljs-selector-id[data-v-70c00c15],.hljs-symbol[data-v-70c00c15],.hljs-title[data-v-70c00c15]{color:#61aeee\n}\n.hljs-emphasis[data-v-70c00c15]{font-style:italic\n}\n.hljs-strong[data-v-70c00c15]{font-weight:700\n}\n.hljs-link[data-v-70c00c15]{text-decoration:underline\n}\n.post[data-v-70c00c15]{padding:45px 60px;font-size:14px;line-height:1.8;color:#666;font-weight:400\n}\n.post-layout .post[data-v-70c00c15]{min-height:100%;margin-bottom:-192px\n}\n.post-layout .post[data-v-70c00c15]:after{content:\"\";display:block;height:192px\n}\n.post-layout.no-links .post[data-v-70c00c15]{margin-bottom:-58px\n}\n.no-links .post[data-v-70c00c15]:after{height:58px\n}\n.post h1[data-v-70c00c15]{margin-top:0;margin-bottom:1.25em;font-size:36px\n}\n.post h1 small[data-v-70c00c15]{vertical-align:.1em;color:#999\n}\n.post h2[data-v-70c00c15]{margin-top:1.3em;margin-bottom:1.2em;font-size:30px\n}\n.post h2[data-v-70c00c15]:before{content:\"#\";margin-right:5px;color:#ccc\n}\n.post h2+h3[data-v-70c00c15]{margin-top:2em\n}\n.post h3[data-v-70c00c15]{margin-top:1.25em;margin-bottom:1.15em;font-size:24px\n}\n.post h4[data-v-70c00c15]{margin-top:1.15em;margin-bottom:1.1em;font-size:18px\n}\n.post h5[data-v-70c00c15]{margin-top:1.05em;margin-bottom:1.05em;font-size:14px\n}\n.post h6[data-v-70c00c15]{margin-top:1em;margin-bottom:1em;font-size:12px\n}\n.post h1[data-v-70c00c15],.post h2[data-v-70c00c15],.post h3[data-v-70c00c15]{font-weight:500;clear:both\n}\n.post h1[data-v-70c00c15],.post h2[data-v-70c00c15],.post h3[data-v-70c00c15],.post h4[data-v-70c00c15],.post h5[data-v-70c00c15],.post h6[data-v-70c00c15]{color:#333;line-height:1\n}\n.post br[data-v-70c00c15]{clear:both\n}\n.post p[data-v-70c00c15]{margin-top:.5em;margin-bottom:.5em\n}\n.post ol[data-v-70c00c15],.post ul[data-v-70c00c15]{padding-left:1.5em\n}\n.post blockquote[data-v-70c00c15]{margin:1em 0;padding-left:1em;border-left:5px solid #f1f1f1;color:#999\n}\n.post table[data-v-70c00c15]{width:100%;border-collapse:collapse;border-style:none solid;margin-top:1.5em;margin-bottom:1.5em\n}\n.post table[data-v-70c00c15],.post td[data-v-70c00c15],.post th[data-v-70c00c15]{border-color:#f1f1f1;border-width:1px\n}\n.post td[data-v-70c00c15],.post th[data-v-70c00c15]{min-width:90px;padding:7px 14px;border-style:solid none;text-align:left\n}\n.post td[data-v-70c00c15]>:first-child,.post th[data-v-70c00c15]>:first-child{margin-top:5px\n}\n.post td[data-v-70c00c15]>:last-child,.post th[data-v-70c00c15]>:last-child{margin-bottom:5px\n}\n.post td pre[data-v-70c00c15],.post th pre[data-v-70c00c15]{padding:10px 15px\n}\n.post td table[data-v-70c00c15],.post th table[data-v-70c00c15]{margin-top:.2em;margin-bottom:.5em\n}\n.post td[data-v-70c00c15]:first-child{white-space:nowrap\n}\n.post a[data-v-70c00c15]:link:not([class^=veui-]),.post a[data-v-70c00c15]:visited:not([class^=veui-]){text-decoration:none;color:#3998fc;transition:color .2s\n}\n.post a[data-v-70c00c15]:link:not([class^=veui-]):hover,.post a[data-v-70c00c15]:visited:not([class^=veui-]):hover{color:#3389e3\n}\n.post a[data-v-70c00c15]:link:not([class^=veui-]):active,.post a[data-v-70c00c15]:visited:not([class^=veui-]):active{color:#2e7aca\n}\n.post code[data-v-70c00c15]{padding:2px 4px;background-color:rgba(0,0,0,.024);font-size:90%\n}\n.post hr[data-v-70c00c15]{height:1px;margin:2em 0;padding:0;background-color:#eff0f1;border:0;clear:both\n}\n.post figure[data-v-70c00c15]{float:right;width:60%;margin:0 0 30px 20px\n}\n.post figure+h1[data-v-70c00c15],.post figure+h2[data-v-70c00c15],.post figure+h3[data-v-70c00c15],.post figure+h4[data-v-70c00c15],.post figure+h5[data-v-70c00c15],.post figure+h6[data-v-70c00c15]{margin-top:0\n}\n.post figure img[data-v-70c00c15]{display:block;margin:auto\n}\n.post figure .preview[data-v-70c00c15]{padding:20px;overflow:hidden;border:1px solid #e5e5e5;transition:box-shadow .2s;cursor:pointer;text-align:center\n}\n.post figure .preview[data-v-70c00c15]:hover{box-shadow:0 0 5px rgba(0,0,0,.2)\n}\n.post figure.hero[data-v-70c00c15]{width:100%\n}\n.post figcaption[data-v-70c00c15]{margin-top:10px;font-size:12px\n}\n.post figcaption p[data-v-70c00c15]{margin:0;line-height:20px\n}\n.post figcaption .caption[data-v-70c00c15]{font-weight:500\n}\n.post figcaption .desc[data-v-70c00c15]{color:#999\n}\n.post .comparison[data-v-70c00c15]{float:right;width:60%;margin:0 0 30px 20px\n}\n.post .comparison figure[data-v-70c00c15]{width:calc(50% - 5px);margin:0\n}\n.post .comparison .good[data-v-70c00c15]{float:left\n}\n.post .comparison .bad[data-v-70c00c15]{float:right\n}\n.post .comparison .bad .caption[data-v-70c00c15]{color:#ff5b5b\n}\n.post img[data-v-70c00c15]{max-width:100%;max-height:100%\n}\n.post pre[data-v-70c00c15]{border:1px solid #eee;padding:30px;background-color:#f9f9f9;white-space:pre;overflow:auto\n}\n.post pre code[data-v-70c00c15]{background-color:transparent;padding:0\n}\n.post var[data-v-70c00c15]{font-family:\"PT Serif\",Georgia,serif\n}\n.post kbd[data-v-70c00c15]{display:inline-block;padding:3px 5px 6px;font-size:90%;line-height:10px;color:#444d56;vertical-align:1px;background-color:#fafbfc;border:1px solid #c6cbd1;border-bottom-color:#959da5;border-radius:3px;box-shadow:inset 0 -1px 0 #959da5\n}\n.post .custom-block[data-v-70c00c15]{border:1px solid;margin:1em 0;padding:.75em 1em\n}\n.post .custom-block[data-v-70c00c15]>:first-child{margin-top:0\n}\n.post .custom-block[data-v-70c00c15]>:last-child{margin-bottom:0\n}\n.post .alert[data-v-70c00c15],.post .tip[data-v-70c00c15],.post .warning[data-v-70c00c15]{font-size:13px\n}\n.post .alert[data-v-70c00c15]{border-color:#fee;background-color:#fff6f6\n}\n.post .warning[data-v-70c00c15]{border-color:#fef4e6;background-color:#fef9f2\n}\n.post .tip[data-v-70c00c15]{border-color:#d8ebff;background-color:#ebf5ff\n}\n.post .badges[data-v-70c00c15]{border:none;padding:0\n}\n.post .badges code[data-v-70c00c15]{padding:2px 3px;background:#333;border-radius:2px;color:#fff;font-size:80%\n}\n.post .oss-badges[data-v-70c00c15]{border:none;padding:0\n}\n.post .oss-badges a[data-v-70c00c15]{margin-right:10px\n}\n.post .one-demo[data-v-70c00c15]{margin:1em 0 1.25em\n}", ""]);

// exports


/***/ })

}]);