(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[35],{

/***/ 1393:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/veui-loader/lib??ref--14!./pages/components/column.vue?vue&type=template&id=ef832f48&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('article',{staticClass:"content post"},[_c('h1',{attrs:{"id":"column-small表格列small"}},[_vm._v("Column "),_c('small',[_vm._v("表格列")])]),_c('div',{staticClass:"tip custom-block"},[_c('p',[_c('code',[_vm._v("Column")]),_vm._v(" 组件需要在 "),_c('a',{attrs:{"href":"./table"}},[_c('code',[_vm._v("Table")])]),_vm._v(" 组件内使用。")])]),_c('h2',{attrs:{"id":"示例"}},[_vm._v("示例")]),_c('p',[_vm._v("见 "),_c('a',{attrs:{"href":"./table#%E7%A4%BA%E4%BE%8B"}},[_c('code',[_vm._v("Table")]),_vm._v(" 示例")]),_vm._v("。")]),_c('h2',{attrs:{"id":"api"}},[_vm._v("API")]),_c('h3',{attrs:{"id":"属性"}},[_vm._v("属性")]),_c('table',[_c('thead',[_c('tr',[_c('th',[_vm._v("名称")]),_c('th',[_vm._v("类型")]),_c('th',[_vm._v("默认值")]),_c('th',[_vm._v("描述")])])]),_c('tbody',[_c('tr',[_c('td',[_c('code',[_vm._v("title")])]),_c('td',[_c('code',[_vm._v("string")])]),_c('td',[_vm._v("-")]),_c('td',[_vm._v("列标题。")])]),_c('tr',[_c('td',[_c('code',[_vm._v("field")])]),_c('td',[_c('code',[_vm._v("string")])]),_c('td',[_vm._v("-")]),_c('td',[_vm._v("列的键名，对应所属的 "),_c('code',[_vm._v("Table")]),_vm._v(" 组件 "),_c('code',[_vm._v("data")]),_vm._v(" 属性数据项的某个字段。")])]),_c('tr',[_c('td',[_c('code',[_vm._v("width")])]),_c('td',[_c('code',[_vm._v("string=|number=")])]),_c('td',[_vm._v("-")]),_c('td',[_vm._v("列宽，值为像素值。")])]),_c('tr',[_c('td',[_c('code',[_vm._v("sortable")])]),_c('td',[_c('code',[_vm._v("boolean")])]),_c('td',[_c('code',[_vm._v("false")])]),_c('td',[_c('p',[_vm._v("本列是否支持排序。")]),_c('div',{staticClass:"warning custom-block"},[_c('p',[_vm._v("组件本身不会处理排序逻辑，仅会在排序按钮被点击时在 "),_c('code',[_vm._v("Table")]),_vm._v(" 上抛出 "),_c('code',[_vm._v("sort")]),_vm._v(" 事件，使用者需要自行处理排序逻辑。")])])])]),_c('tr',[_c('td',[_c('code',[_vm._v("align")])]),_c('td',[_c('code',[_vm._v("string=")])]),_c('td',[_vm._v("-")]),_c('td',[_vm._v("内容对齐方式，支持 "),_c('code',[_vm._v("left")]),_vm._v("/"),_c('code',[_vm._v("center")]),_vm._v("/"),_c('code',[_vm._v("right")]),_vm._v("。")])]),_c('tr',[_c('td',[_c('code',[_vm._v("span")])]),_c('td',[_c('code',[_vm._v("function(number): Object")])]),_c('td'),_c('td',[_c('p',[_vm._v("单元格合并配置。类型为 "),_c('code',[_vm._v("function(index: number): { row: number, col: number }")]),_vm._v("。"),_c('code',[_vm._v("index")]),_vm._v(" 为当前行在所属 "),_c('code',[_vm._v("Table")]),_vm._v(" 组件的 "),_c('code',[_vm._v("data")]),_vm._v(" 属性中的索引。返回值的 "),_c('code',[_vm._v("row")]),_vm._v("/"),_c('code',[_vm._v("col")]),_vm._v(" 字段对应于单元格的 "),_c('code',[_vm._v("rowspan")]),_vm._v("/"),_c('code',[_vm._v("colspan")]),_vm._v("，默认值均为 "),_c('code',[_vm._v("1")]),_vm._v("。")]),_c('div',{staticClass:"tip custom-block"},[_c('p',[_vm._v("可以参考 "),_c('code',[_vm._v("Table")]),_vm._v(" 组件中的"),_c('a',{attrs:{"href":"./table#%E9%AB%98%E7%BA%A7"}},[_vm._v("示例 › 高级")]),_vm._v("来了解如何使用。")])])])])])]),_c('h3',{attrs:{"id":"插槽"}},[_vm._v("插槽")]),_c('table',[_c('thead',[_c('tr',[_c('th',[_vm._v("名称")]),_c('th',[_vm._v("描述")])])]),_c('tbody',[_c('tr',[_c('td',[_c('code',[_vm._v("head")])]),_c('td',[_vm._v("列头区域。")])]),_c('tr',[_c('td',[_c('code',[_vm._v("foot")])]),_c('td',[_c('p',[_vm._v("列脚区域。")]),_c('div',{staticClass:"warning custom-block"},[_c('p',[_vm._v("如果所属的 "),_c('code',[_vm._v("Table")]),_vm._v(" 组件定义了 "),_c('code',[_vm._v("foot")]),_vm._v(" 插槽，单独的列脚配置将被覆盖。")])])])]),_c('tr',[_c('td',[_c('code',[_vm._v("default")])]),_c('td',[_c('p',[_vm._v("单元格的内容。")]),_c('p',[_vm._v("默认内容：表格 "),_c('code',[_vm._v("data")]),_vm._v(" 数据项中与 "),_c('code',[_vm._v("field")]),_vm._v(" 属性对应的字段值。")]),_c('p',[_vm._v("作用域参数为 "),_c('code',[_vm._v("data")]),_vm._v(" 内当前行数据中的所有字段。")])])]),_c('tr',[_c('td',[_c('code',[_vm._v("sub-row")])]),_c('td',[_c('p',[_vm._v("展开行后子行的内容。使用此插槽时，内容会作为行展开下方子行中对应列的单元格内容。行数据源来自 "),_c('code',[_vm._v("data")]),_vm._v(" 中对应主行数据的 "),_c('code',[_vm._v("children")]),_vm._v(" 数组，展开的子行数与 "),_c('code',[_vm._v("children")]),_vm._v(" 内数据项数相同，使用相同的列配置。")]),_c('p',[_vm._v("默认内容：表格 "),_c('code',[_vm._v("data[i].children[j]")]),_vm._v(" 数据项中与 "),_c('code',[_vm._v("field")]),_vm._v(" 属性对应的字段值。")]),_c('p',[_vm._v("作用域参数当前子行数据中的所有字段，以及当前主行对应索引值 "),_c('code',[_vm._v("index")]),_vm._v("。")]),_c('div',{staticClass:"warning custom-block"},[_c('p',[_vm._v("如果所属的 "),_c('code',[_vm._v("Table")]),_vm._v(" 组件定义了作用域插槽 "),_c('code',[_vm._v("sub-row")]),_vm._v("，单独列的 "),_c('code',[_vm._v("sub-row")]),_vm._v(" 将被覆盖。")])])])])])])])}]


// CONCATENATED MODULE: ./pages/components/column.vue?vue&type=template&id=ef832f48&scoped=true&

// EXTERNAL MODULE: ./common/i18n.js
var i18n = __webpack_require__(59);

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/veui-loader/lib??ref--14!./pages/components/column.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var columnvue_type_script_lang_js_ = ({
  mixins: [i18n["b" /* htmlAttrs */]]
});
// CONCATENATED MODULE: ./pages/components/column.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_columnvue_type_script_lang_js_ = (columnvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./assets/styles/post.styl?vue&type=style&index=0&id=ef832f48&lang=stylus&scoped=true&
var postvue_type_style_index_0_id_ef832f48_lang_stylus_scoped_true_ = __webpack_require__(996);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/components/column.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_columnvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "ef832f48",
  null
  
)

/* harmony default export */ var column = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 520:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(997);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(10).default
var update = add("15532b60", content, true, {"sourceMap":false});

/***/ }),

/***/ 996:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_stylus_loader_index_js_ref_10_oneOf_1_3_post_styl_vue_type_style_index_0_id_ef832f48_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(520);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_stylus_loader_index_js_ref_10_oneOf_1_3_post_styl_vue_type_style_index_0_id_ef832f48_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_stylus_loader_index_js_ref_10_oneOf_1_3_post_styl_vue_type_style_index_0_id_ef832f48_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_stylus_loader_index_js_ref_10_oneOf_1_3_post_styl_vue_type_style_index_0_id_ef832f48_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 997:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)(false);
// Module
exports.push([module.i, ".hljs[data-v-ef832f48]{display:block;overflow-x:auto;padding:.5em;color:#abb2bf;background:#282c34}.hljs-comment[data-v-ef832f48],.hljs-quote[data-v-ef832f48]{color:#5c6370;font-style:italic}.hljs-doctag[data-v-ef832f48],.hljs-formula[data-v-ef832f48],.hljs-keyword[data-v-ef832f48]{color:#c678dd}.hljs-deletion[data-v-ef832f48],.hljs-name[data-v-ef832f48],.hljs-section[data-v-ef832f48],.hljs-selector-tag[data-v-ef832f48],.hljs-subst[data-v-ef832f48]{color:#e06c75}.hljs-literal[data-v-ef832f48]{color:#56b6c2}.hljs-addition[data-v-ef832f48],.hljs-attribute[data-v-ef832f48],.hljs-meta-string[data-v-ef832f48],.hljs-regexp[data-v-ef832f48],.hljs-string[data-v-ef832f48]{color:#98c379}.hljs-built_in[data-v-ef832f48],.hljs-class .hljs-title[data-v-ef832f48]{color:#e6c07b}.hljs-attr[data-v-ef832f48],.hljs-number[data-v-ef832f48],.hljs-selector-attr[data-v-ef832f48],.hljs-selector-class[data-v-ef832f48],.hljs-selector-pseudo[data-v-ef832f48],.hljs-template-variable[data-v-ef832f48],.hljs-type[data-v-ef832f48],.hljs-variable[data-v-ef832f48]{color:#d19a66}.hljs-bullet[data-v-ef832f48],.hljs-link[data-v-ef832f48],.hljs-meta[data-v-ef832f48],.hljs-selector-id[data-v-ef832f48],.hljs-symbol[data-v-ef832f48],.hljs-title[data-v-ef832f48]{color:#61aeee}.hljs-emphasis[data-v-ef832f48]{font-style:italic}.hljs-strong[data-v-ef832f48]{font-weight:700}.hljs-link[data-v-ef832f48]{text-decoration:underline}.mermaid[data-v-ef832f48]{font-family:Helvetica Neue,Arial,PingFang SC,Microsoft YaHei,sans-serif;font-size:13px}.mermaid .label[data-v-ef832f48]{color:#333}.mermaid .node circle[data-v-ef832f48],.mermaid .node ellipse[data-v-ef832f48],.mermaid .node polygon[data-v-ef832f48],.mermaid .node rect[data-v-ef832f48]{fill:#eee;stroke:#999;stroke-width:1px}.mermaid .node.clickable[data-v-ef832f48]{cursor:pointer}.mermaid .arrowheadPath[data-v-ef832f48]{fill:#333}.mermaid .edgePath .path[data-v-ef832f48]{stroke:#666;stroke-width:1.5px}.mermaid .edgeLabel[data-v-ef832f48]{background-color:#fff}.mermaid .cluster rect[data-v-ef832f48]{fill:#eaf2fb!important;stroke:#26a!important;stroke-width:1px!important}.mermaid .cluster text[data-v-ef832f48]{fill:#333}.mermaid div.mermaidTooltip[data-v-ef832f48]{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:Helvetica Neue,Arial,PingFang SC,Microsoft YaHei,sans-serif;font-size:12px;background:#eaf2fb;border:1px solid #26a;border-radius:2px;pointer-events:none;z-index:100}.post[data-v-ef832f48]{padding:45px 60px;font-size:14px;line-height:1.8;color:#666;font-weight:400;-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto}.post-layout .post[data-v-ef832f48]{min-height:100%;margin-bottom:-192px}.post-layout .post[data-v-ef832f48]:after{content:\"\";display:block;height:192px}.post-layout.no-links .post[data-v-ef832f48]{margin-bottom:-58px}.no-links .post[data-v-ef832f48]:after{height:58px}.post h1[data-v-ef832f48]{margin-top:0;margin-bottom:1.25em;font-size:36px}.post h1 small[data-v-ef832f48]{vertical-align:.1em;color:#999}.post h2[data-v-ef832f48]{margin-top:1.3em;margin-bottom:1.2em;font-size:30px}.post h2[data-v-ef832f48]:before{content:\"#\";margin-right:5px;color:#ccc}.post h2+h3[data-v-ef832f48]{margin-top:2em}.post h3[data-v-ef832f48]{margin-top:1.25em;margin-bottom:1.15em;font-size:24px}.post h4[data-v-ef832f48]{margin-top:1.15em;margin-bottom:1.1em;font-size:18px}.post h5[data-v-ef832f48]{margin-top:1.05em;margin-bottom:1.05em;font-size:14px}.post h6[data-v-ef832f48]{margin-top:1em;margin-bottom:1em;font-size:12px}.post h1[data-v-ef832f48],.post h2[data-v-ef832f48],.post h3[data-v-ef832f48]{font-weight:500;clear:both}.post h1[data-v-ef832f48],.post h2[data-v-ef832f48],.post h3[data-v-ef832f48],.post h4[data-v-ef832f48],.post h5[data-v-ef832f48],.post h6[data-v-ef832f48]{color:#333;line-height:1}.post br[data-v-ef832f48]{clear:both}.post p[data-v-ef832f48]{margin-top:.5em;margin-bottom:.5em}.post ol[data-v-ef832f48],.post ul[data-v-ef832f48]{padding-left:1.5em}.post blockquote[data-v-ef832f48]{margin:1em 0;padding-left:1em;border-left:5px solid #f1f1f1;color:#999}.post table[data-v-ef832f48]{width:100%;border-collapse:collapse;border-style:none solid;margin-top:1.5em;margin-bottom:1.5em}.post table[data-v-ef832f48],.post td[data-v-ef832f48],.post th[data-v-ef832f48]{border-color:#f1f1f1;border-width:1px}.post td[data-v-ef832f48],.post th[data-v-ef832f48]{min-width:90px;padding:7px 14px;border-style:solid none;text-align:left}.post td[data-v-ef832f48]>:first-child,.post th[data-v-ef832f48]>:first-child{margin-top:5px}.post td[data-v-ef832f48]>:last-child,.post th[data-v-ef832f48]>:last-child{margin-bottom:5px}.post td pre[data-v-ef832f48],.post th pre[data-v-ef832f48]{padding:10px 15px}.post td table[data-v-ef832f48],.post th table[data-v-ef832f48]{margin-top:.2em;margin-bottom:.5em}.post td[data-v-ef832f48]:first-child{white-space:nowrap}.post a[data-v-ef832f48]:link:not([class^=veui-]),.post a[data-v-ef832f48]:visited:not([class^=veui-]){text-decoration:none;color:#3998fc;transition:color .2s}.post a[data-v-ef832f48]:link:not([class^=veui-]):hover,.post a[data-v-ef832f48]:visited:not([class^=veui-]):hover{color:#3389e3}.post a[data-v-ef832f48]:link:not([class^=veui-]):active,.post a[data-v-ef832f48]:visited:not([class^=veui-]):active{color:#2e7aca}.post code[data-v-ef832f48]{padding:2px 4px;background-color:rgba(0,0,0,.024);font-size:90%;-webkit-hyphens:none;-ms-hyphens:none;hyphens:none}.post hr[data-v-ef832f48]{height:1px;margin:2em 0;padding:0;background-color:#eff0f1;border:0;clear:both}.post figure[data-v-ef832f48]{float:right;width:60%;margin:0 0 30px 20px}.post figure+h1[data-v-ef832f48],.post figure+h2[data-v-ef832f48],.post figure+h3[data-v-ef832f48],.post figure+h4[data-v-ef832f48],.post figure+h5[data-v-ef832f48],.post figure+h6[data-v-ef832f48]{margin-top:0}.post figure img[data-v-ef832f48]{display:block;margin:auto}.post figure .preview[data-v-ef832f48]{padding:20px;overflow:hidden;border:1px solid #e5e5e5;transition:box-shadow .2s;cursor:pointer;text-align:center}.post figure .preview[data-v-ef832f48]:hover{box-shadow:0 0 5px rgba(0,0,0,.2)}.post figure.hero[data-v-ef832f48]{width:100%;float:none}.post figcaption[data-v-ef832f48]{margin-top:10px;font-size:12px}.post figcaption p[data-v-ef832f48]{margin:0;line-height:20px}.post figcaption .caption[data-v-ef832f48]{font-weight:500}.post figcaption .desc[data-v-ef832f48]{color:#999}.post .comparison[data-v-ef832f48]{float:right;width:60%;margin:0 0 30px 20px}.post .comparison figure[data-v-ef832f48]{width:calc(50% - 5px);margin:0}.post .comparison .good[data-v-ef832f48]{float:left}.post .comparison .bad[data-v-ef832f48]{float:right}.post .comparison .bad .caption[data-v-ef832f48]{color:#ff5b5b}.post img[data-v-ef832f48]{max-width:100%;max-height:100%}.post pre[data-v-ef832f48]{border:1px solid #eee;padding:30px;background-color:#f9f9f9;white-space:pre;overflow:auto}.post pre code[data-v-ef832f48]{background-color:transparent;padding:0}.post var[data-v-ef832f48]{font-family:\"PT Serif\",Georgia,serif}.post kbd[data-v-ef832f48]{display:inline-block;padding:3px 5px 6px;font-size:90%;line-height:10px;color:#444d56;vertical-align:1px;background-color:#fafbfc;border:1px solid #c6cbd1;border-bottom-color:#959da5;border-radius:3px;box-shadow:inset 0 -1px 0 #959da5}.post .custom-block[data-v-ef832f48]{border:1px solid;margin:1em 0;padding:.75em 1em}.post .custom-block[data-v-ef832f48]>:first-child{margin-top:0}.post .custom-block[data-v-ef832f48]>:last-child{margin-bottom:0}.post .alert[data-v-ef832f48],.post .tip[data-v-ef832f48],.post .warning[data-v-ef832f48]{font-size:13px}.post .alert[data-v-ef832f48]{border-color:#fee;background-color:#fff6f6}.post .warning[data-v-ef832f48]{border-color:#fef4e6;background-color:#fef9f2}.post .tip[data-v-ef832f48]{border-color:#d8ebff;background-color:#ebf5ff}.post .badges[data-v-ef832f48]{border:none;padding:0}.post .badges code[data-v-ef832f48]{padding:2px 3px;background:#333;border-radius:2px;color:#fff;font-size:80%}.post .oss-badges[data-v-ef832f48]{border:none;padding:0}.post .oss-badges a[data-v-ef832f48]{margin-right:10px}.post .one-demo[data-v-ef832f48]{margin:1em 0 1.25em}", ""]);



/***/ })

}]);