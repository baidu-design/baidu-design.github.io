(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[54],{

/***/ 1000:
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-string-pad-start-end
var toLength = __webpack_require__(72);
var repeat = __webpack_require__(223);
var defined = __webpack_require__(49);

module.exports = function (that, maxLength, fillString, left) {
  var S = String(defined(that));
  var stringLength = S.length;
  var fillStr = fillString === undefined ? ' ' : String(fillString);
  var intMaxLength = toLength(maxLength);
  if (intMaxLength <= stringLength || fillStr == '') return S;
  var fillLen = intMaxLength - stringLength;
  var stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
  if (stringFiller.length > fillLen) stringFiller = stringFiller.slice(0, fillLen);
  return left ? stringFiller + S : S + stringFiller;
};


/***/ }),

/***/ 1001:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_4_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_advanced_vue_vue_type_style_index_0_id_01459c16_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(563);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_4_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_advanced_vue_vue_type_style_index_0_id_01459c16_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_4_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_advanced_vue_vue_type_style_index_0_id_01459c16_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_4_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_advanced_vue_vue_type_style_index_0_id_01459c16_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 1002:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// imports


// module
exports.push([module.i, "\nsection[data-v-01459c16]{margin-bottom:20px\n}\n.veui-checkbox[data-v-01459c16]{margin-right:20px\n}", ""]);

// exports


/***/ }),

/***/ 1003:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_4_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_scrollable_vue_vue_type_style_index_0_id_d2ce74c8_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(564);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_4_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_scrollable_vue_vue_type_style_index_0_id_d2ce74c8_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_4_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_scrollable_vue_vue_type_style_index_0_id_d2ce74c8_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_4_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_scrollable_vue_vue_type_style_index_0_id_d2ce74c8_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 1004:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// imports


// module
exports.push([module.i, "\nsection[data-v-d2ce74c8]{margin-bottom:20px\n}", ""]);

// exports


/***/ }),

/***/ 1005:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_4_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_expandable_vue_vue_type_style_index_0_id_50b2e0a5_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(565);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_4_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_expandable_vue_vue_type_style_index_0_id_50b2e0a5_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_4_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_expandable_vue_vue_type_style_index_0_id_50b2e0a5_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_4_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_expandable_vue_vue_type_style_index_0_id_50b2e0a5_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 1006:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// imports


// module
exports.push([module.i, "\nsection[data-v-50b2e0a5]{margin-bottom:20px\n}", ""]);

// exports


/***/ }),

/***/ 1007:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_stylus_loader_index_js_ref_7_oneOf_1_3_post_styl_vue_type_style_index_0_id_25d424a4_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(566);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_stylus_loader_index_js_ref_7_oneOf_1_3_post_styl_vue_type_style_index_0_id_25d424a4_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_stylus_loader_index_js_ref_7_oneOf_1_3_post_styl_vue_type_style_index_0_id_25d424a4_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_stylus_loader_index_js_ref_7_oneOf_1_3_post_styl_vue_type_style_index_0_id_25d424a4_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 1008:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// imports


// module
exports.push([module.i, "\n.hljs[data-v-25d424a4]{display:block;overflow-x:auto;padding:.5em;color:#abb2bf;background:#282c34\n}\n.hljs-comment[data-v-25d424a4],.hljs-quote[data-v-25d424a4]{color:#5c6370;font-style:italic\n}\n.hljs-doctag[data-v-25d424a4],.hljs-formula[data-v-25d424a4],.hljs-keyword[data-v-25d424a4]{color:#c678dd\n}\n.hljs-deletion[data-v-25d424a4],.hljs-name[data-v-25d424a4],.hljs-section[data-v-25d424a4],.hljs-selector-tag[data-v-25d424a4],.hljs-subst[data-v-25d424a4]{color:#e06c75\n}\n.hljs-literal[data-v-25d424a4]{color:#56b6c2\n}\n.hljs-addition[data-v-25d424a4],.hljs-attribute[data-v-25d424a4],.hljs-meta-string[data-v-25d424a4],.hljs-regexp[data-v-25d424a4],.hljs-string[data-v-25d424a4]{color:#98c379\n}\n.hljs-built_in[data-v-25d424a4],.hljs-class .hljs-title[data-v-25d424a4]{color:#e6c07b\n}\n.hljs-attr[data-v-25d424a4],.hljs-number[data-v-25d424a4],.hljs-selector-attr[data-v-25d424a4],.hljs-selector-class[data-v-25d424a4],.hljs-selector-pseudo[data-v-25d424a4],.hljs-template-variable[data-v-25d424a4],.hljs-type[data-v-25d424a4],.hljs-variable[data-v-25d424a4]{color:#d19a66\n}\n.hljs-bullet[data-v-25d424a4],.hljs-link[data-v-25d424a4],.hljs-meta[data-v-25d424a4],.hljs-selector-id[data-v-25d424a4],.hljs-symbol[data-v-25d424a4],.hljs-title[data-v-25d424a4]{color:#61aeee\n}\n.hljs-emphasis[data-v-25d424a4]{font-style:italic\n}\n.hljs-strong[data-v-25d424a4]{font-weight:700\n}\n.hljs-link[data-v-25d424a4]{text-decoration:underline\n}\n.mermaid[data-v-25d424a4]{font-family:Helvetica Neue,Arial,PingFang SC,Microsoft YaHei,sans-serif;font-size:13px\n}\n.mermaid .label[data-v-25d424a4]{color:#333\n}\n.mermaid .node circle[data-v-25d424a4],.mermaid .node ellipse[data-v-25d424a4],.mermaid .node polygon[data-v-25d424a4],.mermaid .node rect[data-v-25d424a4]{fill:#eee;stroke:#999;stroke-width:1px\n}\n.mermaid .node.clickable[data-v-25d424a4]{cursor:pointer\n}\n.mermaid .arrowheadPath[data-v-25d424a4]{fill:#333\n}\n.mermaid .edgePath .path[data-v-25d424a4]{stroke:#666;stroke-width:1.5px\n}\n.mermaid .edgeLabel[data-v-25d424a4]{background-color:#fff\n}\n.mermaid .cluster rect[data-v-25d424a4]{fill:#eaf2fb!important;stroke:#26a!important;stroke-width:1px!important\n}\n.mermaid .cluster text[data-v-25d424a4]{fill:#333\n}\n.mermaid div.mermaidTooltip[data-v-25d424a4]{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:Helvetica Neue,Arial,PingFang SC,Microsoft YaHei,sans-serif;font-size:12px;background:#eaf2fb;border:1px solid #26a;border-radius:2px;pointer-events:none;z-index:100\n}\n.post[data-v-25d424a4]{padding:45px 60px;font-size:14px;line-height:1.8;color:#666;font-weight:400\n}\n.post-layout .post[data-v-25d424a4]{min-height:100%;margin-bottom:-192px\n}\n.post-layout .post[data-v-25d424a4]:after{content:\"\";display:block;height:192px\n}\n.post-layout.no-links .post[data-v-25d424a4]{margin-bottom:-58px\n}\n.no-links .post[data-v-25d424a4]:after{height:58px\n}\n.post h1[data-v-25d424a4]{margin-top:0;margin-bottom:1.25em;font-size:36px\n}\n.post h1 small[data-v-25d424a4]{vertical-align:.1em;color:#999\n}\n.post h2[data-v-25d424a4]{margin-top:1.3em;margin-bottom:1.2em;font-size:30px\n}\n.post h2[data-v-25d424a4]:before{content:\"#\";margin-right:5px;color:#ccc\n}\n.post h2+h3[data-v-25d424a4]{margin-top:2em\n}\n.post h3[data-v-25d424a4]{margin-top:1.25em;margin-bottom:1.15em;font-size:24px\n}\n.post h4[data-v-25d424a4]{margin-top:1.15em;margin-bottom:1.1em;font-size:18px\n}\n.post h5[data-v-25d424a4]{margin-top:1.05em;margin-bottom:1.05em;font-size:14px\n}\n.post h6[data-v-25d424a4]{margin-top:1em;margin-bottom:1em;font-size:12px\n}\n.post h1[data-v-25d424a4],.post h2[data-v-25d424a4],.post h3[data-v-25d424a4]{font-weight:500;clear:both\n}\n.post h1[data-v-25d424a4],.post h2[data-v-25d424a4],.post h3[data-v-25d424a4],.post h4[data-v-25d424a4],.post h5[data-v-25d424a4],.post h6[data-v-25d424a4]{color:#333;line-height:1\n}\n.post br[data-v-25d424a4]{clear:both\n}\n.post p[data-v-25d424a4]{margin-top:.5em;margin-bottom:.5em\n}\n.post ol[data-v-25d424a4],.post ul[data-v-25d424a4]{padding-left:1.5em\n}\n.post blockquote[data-v-25d424a4]{margin:1em 0;padding-left:1em;border-left:5px solid #f1f1f1;color:#999\n}\n.post table[data-v-25d424a4]{width:100%;border-collapse:collapse;border-style:none solid;margin-top:1.5em;margin-bottom:1.5em\n}\n.post table[data-v-25d424a4],.post td[data-v-25d424a4],.post th[data-v-25d424a4]{border-color:#f1f1f1;border-width:1px\n}\n.post td[data-v-25d424a4],.post th[data-v-25d424a4]{min-width:90px;padding:7px 14px;border-style:solid none;text-align:left\n}\n.post td[data-v-25d424a4]>:first-child,.post th[data-v-25d424a4]>:first-child{margin-top:5px\n}\n.post td[data-v-25d424a4]>:last-child,.post th[data-v-25d424a4]>:last-child{margin-bottom:5px\n}\n.post td pre[data-v-25d424a4],.post th pre[data-v-25d424a4]{padding:10px 15px\n}\n.post td table[data-v-25d424a4],.post th table[data-v-25d424a4]{margin-top:.2em;margin-bottom:.5em\n}\n.post td[data-v-25d424a4]:first-child{white-space:nowrap\n}\n.post a[data-v-25d424a4]:link:not([class^=veui-]),.post a[data-v-25d424a4]:visited:not([class^=veui-]){text-decoration:none;color:#3998fc;transition:color .2s\n}\n.post a[data-v-25d424a4]:link:not([class^=veui-]):hover,.post a[data-v-25d424a4]:visited:not([class^=veui-]):hover{color:#3389e3\n}\n.post a[data-v-25d424a4]:link:not([class^=veui-]):active,.post a[data-v-25d424a4]:visited:not([class^=veui-]):active{color:#2e7aca\n}\n.post code[data-v-25d424a4]{padding:2px 4px;background-color:rgba(0,0,0,.024);font-size:90%\n}\n.post hr[data-v-25d424a4]{height:1px;margin:2em 0;padding:0;background-color:#eff0f1;border:0;clear:both\n}\n.post figure[data-v-25d424a4]{float:right;width:60%;margin:0 0 30px 20px\n}\n.post figure+h1[data-v-25d424a4],.post figure+h2[data-v-25d424a4],.post figure+h3[data-v-25d424a4],.post figure+h4[data-v-25d424a4],.post figure+h5[data-v-25d424a4],.post figure+h6[data-v-25d424a4]{margin-top:0\n}\n.post figure img[data-v-25d424a4]{display:block;margin:auto\n}\n.post figure .preview[data-v-25d424a4]{padding:20px;overflow:hidden;border:1px solid #e5e5e5;transition:box-shadow .2s;cursor:pointer;text-align:center\n}\n.post figure .preview[data-v-25d424a4]:hover{box-shadow:0 0 5px rgba(0,0,0,.2)\n}\n.post figure.hero[data-v-25d424a4]{width:100%;float:none\n}\n.post figcaption[data-v-25d424a4]{margin-top:10px;font-size:12px\n}\n.post figcaption p[data-v-25d424a4]{margin:0;line-height:20px\n}\n.post figcaption .caption[data-v-25d424a4]{font-weight:500\n}\n.post figcaption .desc[data-v-25d424a4]{color:#999\n}\n.post .comparison[data-v-25d424a4]{float:right;width:60%;margin:0 0 30px 20px\n}\n.post .comparison figure[data-v-25d424a4]{width:calc(50% - 5px);margin:0\n}\n.post .comparison .good[data-v-25d424a4]{float:left\n}\n.post .comparison .bad[data-v-25d424a4]{float:right\n}\n.post .comparison .bad .caption[data-v-25d424a4]{color:#ff5b5b\n}\n.post img[data-v-25d424a4]{max-width:100%;max-height:100%\n}\n.post pre[data-v-25d424a4]{border:1px solid #eee;padding:30px;background-color:#f9f9f9;white-space:pre;overflow:auto\n}\n.post pre code[data-v-25d424a4]{background-color:transparent;padding:0\n}\n.post var[data-v-25d424a4]{font-family:\"PT Serif\",Georgia,serif\n}\n.post kbd[data-v-25d424a4]{display:inline-block;padding:3px 5px 6px;font-size:90%;line-height:10px;color:#444d56;vertical-align:1px;background-color:#fafbfc;border:1px solid #c6cbd1;border-bottom-color:#959da5;border-radius:3px;box-shadow:inset 0 -1px 0 #959da5\n}\n.post .custom-block[data-v-25d424a4]{border:1px solid;margin:1em 0;padding:.75em 1em\n}\n.post .custom-block[data-v-25d424a4]>:first-child{margin-top:0\n}\n.post .custom-block[data-v-25d424a4]>:last-child{margin-bottom:0\n}\n.post .alert[data-v-25d424a4],.post .tip[data-v-25d424a4],.post .warning[data-v-25d424a4]{font-size:13px\n}\n.post .alert[data-v-25d424a4]{border-color:#fee;background-color:#fff6f6\n}\n.post .warning[data-v-25d424a4]{border-color:#fef4e6;background-color:#fef9f2\n}\n.post .tip[data-v-25d424a4]{border-color:#d8ebff;background-color:#ebf5ff\n}\n.post .badges[data-v-25d424a4]{border:none;padding:0\n}\n.post .badges code[data-v-25d424a4]{padding:2px 3px;background:#333;border-radius:2px;color:#fff;font-size:80%\n}\n.post .oss-badges[data-v-25d424a4]{border:none;padding:0\n}\n.post .oss-badges a[data-v-25d424a4]{margin-right:10px\n}\n.post .one-demo[data-v-25d424a4]{margin:1em 0 1.25em\n}", ""]);

// exports


/***/ }),

/***/ 1115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/veui-loader/lib??ref--11!./pages/development/components/table.vue?vue&type=template&id=25d424a4&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('article',{staticClass:"content post"},[_vm._m(0),_vm._m(1),_c('h2',{attrs:{"id":"示例"}},[_vm._v("示例")]),_c('h3',{attrs:{"id":"尺寸、样式"}},[_vm._v("尺寸、样式")]),_vm._m(2),_c('one-demo',[_c('one-demo-96c811c'),_c('template',{slot:"source"},[_c('div',{pre:true},[_c('pre',[_c('code',{attrs:{"class":"hljs language-vue"}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_c('span',{attrs:{"class":"html"}},[_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("article")]),_vm._v(">")]),_vm._v("\n  "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("section")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("veui-checkbox")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("v-model")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"slim\"")]),_vm._v(">")]),_vm._v("紧凑样式"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("veui-checkbox")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("veui-checkbox")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("v-model")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"alt\"")]),_vm._v(">")]),_vm._v("备选样式"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("veui-checkbox")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("veui-checkbox")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("v-model")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"bordered\"")]),_vm._v(">")]),_vm._v("单元格带分隔边框"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("veui-checkbox")]),_vm._v(">")]),_vm._v("\n  "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("section")]),_vm._v(">")]),_vm._v("\n  "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("section")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("veui-table")]),_vm._v("\n      "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":ui")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"ui\"")]),_vm._v("\n      "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":data")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"data\"")]),_vm._v("\n      "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("key-field")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"id\"")]),_vm._v(">")]),_vm._v("\n      "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("veui-table-column")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("field")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"id\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("title")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"用户 ID\"")]),_vm._v("/>")]),_vm._v("\n      "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("veui-table-column")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("field")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"name\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("title")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"名字\"")]),_vm._v("/>")]),_vm._v("\n      "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("veui-table-column")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("field")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"bid\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("title")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"出价\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("width")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"160\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("align")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"right\"")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("slot-scope")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"{ bid }\"")]),_vm._v(">")]),_vm._v("{{ bid | currency }}")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n      "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("veui-table-column")]),_vm._v(">")]),_vm._v("\n      "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("veui-table-column")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("field")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"updateDate\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("title")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"更新时间\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("align")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"center\"")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("slot-scope")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"{ updateDate }\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"null"}}),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n      "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("veui-table-column")]),_vm._v(">")]),_vm._v("\n      "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("veui-table-column")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("field")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"operation\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("title")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"操作\"")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("slot-scope")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"{ index }\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"html"}},[_vm._v("\n          "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("veui-button")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("ui")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"link alert\"")]),_vm._v(" @"),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("click")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"del(index)\"")]),_vm._v(">")]),_vm._v("删除"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("veui-button")]),_vm._v(">")]),_vm._v("\n        ")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n      "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("veui-table-column")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("veui-table")]),_vm._v(">")]),_vm._v("\n  "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("section")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("article")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")]),_c('span',{attrs:{"class":"javascript"}},[_vm._v("\n"),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("import")]),_vm._v(" { Checkbox, Table, Column, Button } "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("from")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'veui'")]),_vm._v("\n\n"),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("export")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("default")]),_vm._v(" {\n  "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("components")]),_vm._v(": {\n    "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'veui-table'")]),_vm._v(": Table,\n    "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'veui-table-column'")]),_vm._v(": Column,\n    "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'veui-checkbox'")]),_vm._v(": Checkbox,\n    "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'veui-button'")]),_vm._v(": Button\n  },\n  "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("filters")]),_vm._v(": {\n    currency (value) {\n      "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("return")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'¥'")]),_vm._v(" + value.toFixed("),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("2")]),_vm._v(")\n    },\n    date (value) {\n      "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("let")]),_vm._v(" [, ...parts] = (value.match("),_c('span',{attrs:{"class":"hljs-regexp"}},[_vm._v("/(\\d{4})(\\d{2})(\\d{2})/")]),_vm._v(") || [])\n      "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("return")]),_vm._v(" parts.join("),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'-'")]),_vm._v(")\n    }\n  },\n  data () {\n    "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("return")]),_vm._v(" {\n      "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("slim")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("false")]),_vm._v(",\n      "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("alt")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("false")]),_vm._v(",\n      "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("bordered")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("false")]),_vm._v(",\n      "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("data")]),_vm._v(": [\n        {\n          "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("id")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'3154'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("name")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'Steve Rogers'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("bid")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("1024")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("updateDate")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'20131117'")]),_vm._v("\n        },\n        {\n          "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("id")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'3155'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("name")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'Thor Odinson'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("bid")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("598")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("updateDate")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'20140214'")]),_vm._v("\n        },\n        {\n          "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("id")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'3156'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("name")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'Tony Stark'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("bid")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("820")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("updateDate")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'20170610'")]),_vm._v("\n        },\n        {\n          "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("id")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'3157'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("name")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'Stephen Strange'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("bid")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("736")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("updateDate")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'20180109'")]),_vm._v("\n        }\n      ]\n    }\n  },\n  "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("computed")]),_vm._v(": {\n    ui () {\n      "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("return")]),_vm._v(" [\n        ...this.slim ? ["),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'slim'")]),_vm._v("] : [],\n        ...this.bordered ? ["),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'bordered'")]),_vm._v("] : [],\n        ...this.alt ? ["),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'alt'")]),_vm._v("] : []\n      ].join("),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("' '")]),_vm._v(")\n    }\n  }\n}\n")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")]),_vm._v("\n\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("style")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("lang")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"less\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("scoped")]),_vm._v(">")]),_c('span',{attrs:{"class":"css"}},[_vm._v("\n"),_c('span',{attrs:{"class":"hljs-selector-tag"}},[_vm._v("section")]),_vm._v(" {\n  "),_c('span',{attrs:{"class":"hljs-attribute"}},[_vm._v("margin-bottom")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("20px")]),_vm._v(";\n}\n\n"),_c('span',{attrs:{"class":"hljs-selector-class"}},[_vm._v(".veui-checkbox")]),_vm._v(" {\n  "),_c('span',{attrs:{"class":"hljs-attribute"}},[_vm._v("margin-right")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("20px")]),_vm._v(";\n}\n")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("style")]),_vm._v(">")])])])])]),_c('template',{slot:"desc"})],2),_c('h3',{attrs:{"id":"高级"}},[_vm._v("高级")]),_c('p',[_vm._v("允许自定义唯一键、设定选择模式以及进行排序。")]),_c('one-demo',[_c('one-demo-735e007'),_c('template',{slot:"source"},[_c('div',{pre:true},[_c('pre',[_c('code',{attrs:{"class":"hljs language-vue"}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_c('span',{attrs:{"class":"html"}},[_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("article")]),_vm._v(">")]),_vm._v("\n  "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("section")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("veui-button")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("ui")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"primary\"")]),_vm._v(" @"),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("click")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"append\"")]),_vm._v(">")]),_vm._v("添加"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("veui-button")]),_vm._v(">")]),_vm._v("\n  "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("section")]),_vm._v(">")]),_vm._v("\n  "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("section")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("veui-checkbox")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("v-model")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"mode\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("true-value")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"multiple\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("false-value")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"single\"")]),_vm._v(">")]),_vm._v("多选"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("veui-checkbox")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("veui-checkbox")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("v-model")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"showOps\"")]),_vm._v(">")]),_vm._v("显示「操作」列"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("veui-checkbox")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("veui-checkbox")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("v-model")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"selectSpanRow\"")]),_vm._v(">")]),_vm._v("以「用户分组」列为基准进行选择 "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("small")]),_vm._v(">")]),_vm._v("（而非「用户 ID」）"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("small")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("veui-checkbox")]),_vm._v(">")]),_vm._v("\n  "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("section")]),_vm._v(">")]),_vm._v("\n  "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("section")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("veui-table")]),_vm._v("\n      "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("ui")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"alt bordered\"")]),_vm._v("\n      "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":data")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"data\"")]),_vm._v("\n      "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":key-field")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"selectSpanRow ? 'group' : 'id'\"")]),_vm._v("\n      "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("selectable")]),_vm._v("\n      "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":select-mode")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"mode\"")]),_vm._v("\n      "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":order-by")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"orderBy\"")]),_vm._v("\n      "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":order")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"order\"")]),_vm._v("\n      @"),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("sort")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"handleSort\"")]),_vm._v("\n      "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":selected.sync")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"selected\"")]),_vm._v(">")]),_vm._v("\n      "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("veui-table-column")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("field")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"id\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("title")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"用户 ID\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("sortable")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("slot")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"head\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("strong")]),_vm._v(">")]),_vm._v("用户 ID"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("strong")]),_vm._v(">")])]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("slot")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"foot\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"html"}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("strong")]),_vm._v(">")]),_vm._v("总计"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("strong")]),_vm._v(">")])]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n      "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("veui-table-column")]),_vm._v(">")]),_vm._v("\n      "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("veui-table-column")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("field")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"group\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("title")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"用户分组\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":span")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"groupSpan\"")]),_vm._v(">")]),_vm._v("\n      "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("veui-table-column")]),_vm._v(">")]),_vm._v("\n      "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("veui-table-column")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("field")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"name\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("title")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"用户名字\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("width")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"160\"")]),_vm._v("/>")]),_vm._v("\n      "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("veui-table-column")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("field")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"bid\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("title")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"出价\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("sortable")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("width")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"160\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("align")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"right\"")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("slot-scope")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"{ bid }\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"null"}}),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("slot")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"foot\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"html"}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("strong")]),_vm._v(">")]),_vm._v("{{ total | currency }}"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("strong")]),_vm._v(">")])]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n      "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("veui-table-column")]),_vm._v(">")]),_vm._v("\n      "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("veui-table-column")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("field")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"updateDate\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("title")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"更新时间\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("align")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"center\"")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("slot-scope")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"{ id, updateDate }\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"html"}},[_vm._v("\n          "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("span")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":ref")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"`time-a-${id}`\"")]),_vm._v(">")]),_vm._v("{{ updateDate | date }}"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("span")]),_vm._v(">")]),_vm._v("\n          "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("veui-tooltip")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":target")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"`time-a-${id}`\"")]),_vm._v(">")]),_vm._v("{{ updateDate | time }}"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("veui-tooltip")]),_vm._v(">")]),_vm._v("\n        ")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n      "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("veui-table-column")]),_vm._v(">")]),_vm._v("\n      "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("veui-table-column")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("v-if")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"showOps\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("field")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"operation\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("title")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"操作\"")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("slot-scope")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"{ index }\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"html"}},[_vm._v("\n          "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("veui-button")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("ui")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"link alert\"")]),_vm._v(" @"),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("click")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"del(index)\"")]),_vm._v(">")]),_vm._v("删除"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("veui-button")]),_vm._v(">")]),_vm._v("\n        ")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n      "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("veui-table-column")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("veui-table")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("p")]),_vm._v(">")]),_vm._v("已选ID：{{ JSON.stringify(selected) }}"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("p")]),_vm._v(">")]),_vm._v("\n  "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("section")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("article")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")]),_c('span',{attrs:{"class":"javascript"}},[_vm._v("\n"),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("import")]),_vm._v(" { groupBy } "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("from")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'lodash'")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("import")]),_vm._v(" { Button, Checkbox, Table, Column, Tooltip } "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("from")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'veui'")]),_vm._v("\n\n"),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("export")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("default")]),_vm._v(" {\n  "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("components")]),_vm._v(": {\n    "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'veui-button'")]),_vm._v(": Button,\n    "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'veui-table'")]),_vm._v(": Table,\n    "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'veui-table-column'")]),_vm._v(": Column,\n    "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'veui-tooltip'")]),_vm._v(": Tooltip,\n    "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'veui-checkbox'")]),_vm._v(": Checkbox\n  },\n  "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("filters")]),_vm._v(": {\n    currency (value) {\n      "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("return")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'¥'")]),_vm._v(" + value.toFixed("),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("2")]),_vm._v(")\n    },\n    date (value) {\n      "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("let")]),_vm._v(" [, ...parts] = (value.match("),_c('span',{attrs:{"class":"hljs-regexp"}},[_vm._v("/(\\d{4})(\\d{2})(\\d{2})/")]),_vm._v(") || [])\n      "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("return")]),_vm._v(" parts.join("),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'-'")]),_vm._v(")\n    },\n    time (value) {\n      "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("let")]),_vm._v(" [, ...parts] = (value.match("),_c('span',{attrs:{"class":"hljs-regexp"}},[_vm._v("/(\\d{4})(\\d{2})(\\d{2})/")]),_vm._v(") || [])\n      "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("return")]),_vm._v(" parts.join("),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'-'")]),_vm._v(") + "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("' 00:00:00'")]),_vm._v("\n    }\n  },\n  data () {\n    "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("return")]),_vm._v(" {\n      "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("mode")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'multiple'")]),_vm._v(",\n      "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("showOps")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("true")]),_vm._v(",\n      "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("selectSpanRow")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("true")]),_vm._v(",\n      "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("data")]),_vm._v(": [\n        {\n          "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("id")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'3154'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("name")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'Steve Rogers'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("bid")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("1024")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("updateDate")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'20131117'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("group")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'1577'")]),_vm._v("\n        },\n        {\n          "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("id")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'3155'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("name")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'Thor Odinson'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("bid")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("598")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("updateDate")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'20140214'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("group")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'1577'")]),_vm._v("\n        },\n        {\n          "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("id")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'3156'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("name")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'Tony Stark'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("bid")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("820")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("updateDate")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'20170610'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("group")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'1578'")]),_vm._v("\n        },\n        {\n          "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("id")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'3157'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("name")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'Stephen Strange'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("bid")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("736")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("updateDate")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'20180109'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("group")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'1578'")]),_vm._v("\n        }\n      ],\n      "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("nextId")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("3158")]),_vm._v(",\n      "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("nextIndex")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("4")]),_vm._v(",\n      "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("order")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("false")]),_vm._v(",\n      "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("orderBy")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("null")]),_vm._v(",\n      "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("selected")]),_vm._v(": ["),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'1577'")]),_vm._v("],\n      "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("groupSpan")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-function"}},[_c('span',{attrs:{"class":"hljs-params"}},[_vm._v("i")]),_vm._v(" =>")]),_vm._v(" {\n        "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("let")]),_vm._v(" groups = groupBy("),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("this")]),_vm._v(".data, "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'group'")]),_vm._v(")\n        "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("let")]),_vm._v(" item = "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("this")]),_vm._v(".data[i]\n        "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("let")]),_vm._v(" itemGroup = groups[item.group]\n        "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("if")]),_vm._v(" (item.id === (itemGroup["),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("0")]),_vm._v("] || {}).id) {\n          "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("return")]),_vm._v(" {\n            "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("row")]),_vm._v(": itemGroup.length\n          }\n        }\n        "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("return")]),_vm._v(" {\n          "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("row")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("0")]),_vm._v("\n        }\n      }\n    }\n  },\n  "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("computed")]),_vm._v(": {\n    total () {\n      "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("return")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("this")]),_vm._v(".data.reduce("),_c('span',{attrs:{"class":"hljs-function"}},[_vm._v("("),_c('span',{attrs:{"class":"hljs-params"}},[_vm._v("total, item")]),_vm._v(") =>")]),_vm._v(" {\n        "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("return")]),_vm._v(" total + item.bid\n      }, "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("0")]),_vm._v(")\n    }\n  },\n  "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("methods")]),_vm._v(": {\n    del (index) {\n      "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("this")]),_vm._v(".data.splice(index, "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("1")]),_vm._v(")\n    },\n    append () {\n      "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("let")]),_vm._v(" d = "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("new")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-built_in"}},[_vm._v("Date")]),_vm._v("("),_c('span',{attrs:{"class":"hljs-built_in"}},[_vm._v("Date")]),_vm._v(".now() + "),_c('span',{attrs:{"class":"hljs-built_in"}},[_vm._v("Math")]),_vm._v(".floor("),_c('span',{attrs:{"class":"hljs-built_in"}},[_vm._v("Math")]),_vm._v(".random() * "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("1e10")]),_vm._v("))\n\n      "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("let")]),_vm._v(" item = {\n        "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("id")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-built_in"}},[_vm._v("String")]),_vm._v("("),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("this")]),_vm._v(".nextId),\n        "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("group")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-built_in"}},[_vm._v("String")]),_vm._v("("),_c('span',{attrs:{"class":"hljs-built_in"}},[_vm._v("Math")]),_vm._v(".floor("),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("this")]),_vm._v(".nextId / "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("2")]),_vm._v(")),\n        "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("name")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("`人物"),_c('span',{attrs:{"class":"hljs-subst"}},[_vm._v("${"),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("this")]),_vm._v(".nextIndex}")]),_vm._v("`")]),_vm._v(",\n        "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("bid")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-built_in"}},[_vm._v("Math")]),_vm._v(".floor("),_c('span',{attrs:{"class":"hljs-built_in"}},[_vm._v("Math")]),_vm._v(".random() * "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("1280")]),_vm._v("),\n        "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("updateDate")]),_vm._v(":\n          d.getFullYear() +\n          "),_c('span',{attrs:{"class":"hljs-built_in"}},[_vm._v("String")]),_vm._v("(d.getMonth() + "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("1")]),_vm._v(").padStart("),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("2")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'0'")]),_vm._v(") +\n          "),_c('span',{attrs:{"class":"hljs-built_in"}},[_vm._v("String")]),_vm._v("(d.getMonth() + "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("1")]),_vm._v(").padStart("),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("2")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'0'")]),_vm._v(")\n      }\n      "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("this")]),_vm._v(".nextId++\n      "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("this")]),_vm._v(".nextIndex++\n      "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("this")]),_vm._v(".data.push(item)\n    },\n    handleSort (orderBy, order) {\n      "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("this")]),_vm._v(".orderBy = orderBy\n      "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("this")]),_vm._v(".order = order\n    }\n  }\n}\n")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")]),_vm._v("\n\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("style")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("lang")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"less\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("scoped")]),_vm._v(">")]),_c('span',{attrs:{"class":"css"}},[_vm._v("\n"),_c('span',{attrs:{"class":"hljs-selector-tag"}},[_vm._v("section")]),_vm._v(" {\n  "),_c('span',{attrs:{"class":"hljs-attribute"}},[_vm._v("margin-bottom")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("20px")]),_vm._v(";\n}\n\n"),_c('span',{attrs:{"class":"hljs-selector-class"}},[_vm._v(".veui-checkbox")]),_vm._v(" {\n  "),_c('span',{attrs:{"class":"hljs-attribute"}},[_vm._v("margin-right")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("20px")]),_vm._v(";\n}\n")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("style")]),_vm._v(">")])])])])]),_c('template',{slot:"desc"})],2),_c('h3',{attrs:{"id":"内部滚动模式"}},[_vm._v("内部滚动模式")]),_c('p',[_vm._v("允许启用内部滚动模式，以达到固定表头表底的效果。")]),_c('one-demo',[_c('one-demo-1322af1'),_c('template',{slot:"source"},[_c('div',{pre:true},[_c('pre',[_c('code',{attrs:{"class":"hljs language-vue"}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_c('span',{attrs:{"class":"html"}},[_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("article")]),_vm._v(">")]),_vm._v("\n  "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("section")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("veui-table")]),_vm._v("\n      "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":data")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"data\"")]),_vm._v("\n      "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("scroll")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"360\"")]),_vm._v("\n      "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("key-field")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"id\"")]),_vm._v(">")]),_vm._v("\n      "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("veui-table-column")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("field")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"id\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("title")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"用户 ID\"")]),_vm._v("/>")]),_vm._v("\n      "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("veui-table-column")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("field")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"name\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("title")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"名字\"")]),_vm._v("/>")]),_vm._v("\n      "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("veui-table-column")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("field")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"bid\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("title")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"出价\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("width")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"160\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("align")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"right\"")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("slot-scope")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"{ bid }\"")]),_vm._v(">")]),_vm._v("{{ bid | currency }}")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n      "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("veui-table-column")]),_vm._v(">")]),_vm._v("\n      "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("veui-table-column")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("field")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"updateDate\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("title")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"更新时间\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("align")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"center\"")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("slot-scope")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"{ updateDate }\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"null"}}),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n      "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("veui-table-column")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("veui-table")]),_vm._v(">")]),_vm._v("\n  "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("section")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("article")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")]),_c('span',{attrs:{"class":"javascript"}},[_vm._v("\n"),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("import")]),_vm._v(" { Table, Column } "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("from")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'veui'")]),_vm._v("\n\n"),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("export")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("default")]),_vm._v(" {\n  "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("components")]),_vm._v(": {\n    "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'veui-table'")]),_vm._v(": Table,\n    "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'veui-table-column'")]),_vm._v(": Column\n  },\n  "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("filters")]),_vm._v(": {\n    currency (value) {\n      "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("return")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'¥'")]),_vm._v(" + value.toFixed("),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("2")]),_vm._v(")\n    },\n    date (value) {\n      "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("let")]),_vm._v(" [, ...parts] = (value.match("),_c('span',{attrs:{"class":"hljs-regexp"}},[_vm._v("/(\\d{4})(\\d{2})(\\d{2})/")]),_vm._v(") || [])\n      "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("return")]),_vm._v(" parts.join("),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'-'")]),_vm._v(")\n    }\n  },\n  data () {\n    "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("return")]),_vm._v(" {\n      "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("data")]),_vm._v(": [\n        {\n          "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("id")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'3154'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("name")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'Steve Rogers'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("bid")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("1024")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("updateDate")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'20131117'")]),_vm._v("\n        },\n        {\n          "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("id")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'3155'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("name")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'Thor Odinson'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("bid")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("598")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("updateDate")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'20140214'")]),_vm._v("\n        },\n        {\n          "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("id")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'3156'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("name")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'Tony Stark'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("bid")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("820")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("updateDate")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'20170610'")]),_vm._v("\n        },\n        {\n          "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("id")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'3157'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("name")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'Stephen Strange'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("bid")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("736")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("updateDate")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'20180109'")]),_vm._v("\n        },\n        {\n          "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("id")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'3158'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("name")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'Natalie Romanoff'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("bid")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("736")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("updateDate")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'20180123'")]),_vm._v("\n        },\n        {\n          "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("id")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'3159'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("name")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'Bruce Banner'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("bid")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("736")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("updateDate")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'20181201'")]),_vm._v("\n        },\n        {\n          "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("id")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'3160'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("name")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'Peter Parker'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("bid")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("736")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("updateDate")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'20181113'")]),_vm._v("\n        },\n        {\n          "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("id")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'3161'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("name")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'T\\'Challa'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("bid")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("736")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("updateDate")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'20180730'")]),_vm._v("\n        },\n        {\n          "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("id")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'3162'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("name")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'Loki'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("bid")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("736")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("updateDate")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'20180601'")]),_vm._v("\n        }\n      ]\n    }\n  }\n}\n")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")]),_vm._v("\n\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("style")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("lang")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"less\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("scoped")]),_vm._v(">")]),_c('span',{attrs:{"class":"css"}},[_vm._v("\n"),_c('span',{attrs:{"class":"hljs-selector-tag"}},[_vm._v("section")]),_vm._v(" {\n  "),_c('span',{attrs:{"class":"hljs-attribute"}},[_vm._v("margin-bottom")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("20px")]),_vm._v(";\n}\n")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("style")]),_vm._v(">")])])])])]),_c('template',{slot:"desc"})],2),_c('h3',{attrs:{"id":"展开行"}},[_vm._v("展开行")]),_c('p',[_vm._v("支持将带有子数据的行进行展开。")]),_c('one-demo',[_c('one-demo-c1342bf'),_c('template',{slot:"source"},[_c('div',{pre:true},[_c('pre',[_c('code',{attrs:{"class":"hljs language-vue"}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_c('span',{attrs:{"class":"html"}},[_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("article")]),_vm._v(">")]),_vm._v("\n  "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("section")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("veui-table")]),_vm._v("\n      "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":data")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"data\"")]),_vm._v("\n      "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("expandable")]),_vm._v("\n      "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("key-field")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"id\"")]),_vm._v(">")]),_vm._v("\n      "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("veui-table-column")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("field")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"id\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("title")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"用户 ID\"")]),_vm._v("/>")]),_vm._v("\n      "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("veui-table-column")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("field")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"name\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("title")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"名字\"")]),_vm._v("/>")]),_vm._v("\n      "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("veui-table-column")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("field")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"bid\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("title")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"出价\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("width")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"160\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("align")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"right\"")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("slot-scope")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"{ bid }\"")]),_vm._v(">")]),_vm._v("{{ bid | currency }}")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n      "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("veui-table-column")]),_vm._v(">")]),_vm._v("\n      "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("veui-table-column")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("field")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"updateDate\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("title")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"更新时间\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("align")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"center\"")]),_vm._v(">")]),_vm._v("\n        "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("slot-scope")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"{ updateDate }\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"null"}}),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n      "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("veui-table-column")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("veui-table")]),_vm._v(">")]),_vm._v("\n  "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("section")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("article")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")]),_c('span',{attrs:{"class":"javascript"}},[_vm._v("\n"),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("import")]),_vm._v(" { Table, Column } "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("from")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'veui'")]),_vm._v("\n\n"),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("export")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("default")]),_vm._v(" {\n  "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("components")]),_vm._v(": {\n    "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'veui-table'")]),_vm._v(": Table,\n    "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'veui-table-column'")]),_vm._v(": Column\n  },\n  "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("filters")]),_vm._v(": {\n    currency (value) {\n      "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("return")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'¥'")]),_vm._v(" + value.toFixed("),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("2")]),_vm._v(")\n    },\n    date (value) {\n      "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("let")]),_vm._v(" [, ...parts] = (value.match("),_c('span',{attrs:{"class":"hljs-regexp"}},[_vm._v("/(\\d{4})(\\d{2})(\\d{2})/")]),_vm._v(") || [])\n      "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("return")]),_vm._v(" parts.join("),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'-'")]),_vm._v(")\n    }\n  },\n  data () {\n    "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("return")]),_vm._v(" {\n      "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("data")]),_vm._v(": [\n        {\n          "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("id")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'3154'")]),_vm._v(",\n          "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("name")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'Steve Rogers'")]),_vm._v(",\n          "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("bid")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("1024")]),_vm._v(",\n          "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("updateDate")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'20131117'")]),_vm._v(",\n          "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("children")]),_vm._v(": [\n            { "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("id")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'3154'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("name")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'Steve Rogers'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("bid")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("1024")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("updateDate")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'20131117'")]),_vm._v(" },\n            { "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("id")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'3154'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("name")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'Steve Rogers'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("bid")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("1001")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("updateDate")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'20131116'")]),_vm._v(" },\n            { "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("id")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'3154'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("name")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'Steve Rogers'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("bid")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("985")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("updateDate")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'20131115'")]),_vm._v(" }\n          ]\n\n        },\n        { "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("id")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'3155'")]),_vm._v(",\n          "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("name")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'Thor Odinson'")]),_vm._v(",\n          "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("bid")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("598")]),_vm._v(",\n          "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("updateDate")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'20140214'")]),_vm._v(",\n          "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("children")]),_vm._v(": [\n            { "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("id")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'3155'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("name")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'Thor Odinson'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("bid")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("520")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("updateDate")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'20131116'")]),_vm._v(" }\n          ]\n        },\n        {\n          "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("id")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'3156'")]),_vm._v(",\n          "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("name")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'Tony Stark'")]),_vm._v(",\n          "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("bid")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("820")]),_vm._v(",\n          "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("updateDate")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'20170610'")]),_vm._v(",\n          "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("children")]),_vm._v(": [\n            { "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("id")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'3156'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("name")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'Tony Stark'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("bid")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("800")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("updateDate")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'20131116'")]),_vm._v(" },\n            { "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("id")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'3156'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("name")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'Tony Stark'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("bid")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("763")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("updateDate")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'20131115'")]),_vm._v(" }\n          ]\n        },\n        {\n          "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("id")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'3157'")]),_vm._v(",\n          "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("name")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'Stephen Strange'")]),_vm._v(",\n          "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("bid")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("736")]),_vm._v(",\n          "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("updateDate")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'20180109'")]),_vm._v(",\n          "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("children")]),_vm._v(": [\n            { "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("id")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'3157'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("name")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'Stephen Strange'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("bid")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("704")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("updateDate")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'20131116'")]),_vm._v(" },\n            { "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("id")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'3157'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("name")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'Stephen Strange'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("bid")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("666")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("updateDate")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'20131112'")]),_vm._v(" },\n            { "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("id")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'3157'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("name")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'Stephen Strange'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("bid")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("521")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("updateDate")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'20131111'")]),_vm._v(" },\n            { "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("id")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'3157'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("name")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'Stephen Strange'")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("bid")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("428")]),_vm._v(", "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("updateDate")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'20131110'")]),_vm._v(" }\n          ]\n        }\n      ]\n    }\n  }\n}\n")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")]),_vm._v("\n\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("style")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("lang")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"less\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("scoped")]),_vm._v(">")]),_c('span',{attrs:{"class":"css"}},[_vm._v("\n"),_c('span',{attrs:{"class":"hljs-selector-tag"}},[_vm._v("section")]),_vm._v(" {\n  "),_c('span',{attrs:{"class":"hljs-attribute"}},[_vm._v("margin-bottom")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-number"}},[_vm._v("20px")]),_vm._v(";\n}\n")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("style")]),_vm._v(">")])])])])]),_c('template',{slot:"desc"})],2),_c('h2',{attrs:{"id":"api"}},[_vm._v("API")]),_c('h3',{attrs:{"id":"属性"}},[_vm._v("属性")]),_c('table',[_vm._m(3),_c('tbody',[_c('tr',[_vm._m(4),_vm._m(5),_c('td',[_vm._v("-")]),_c('td',[_c('p',[_vm._v("预设样式。")]),_c('one-details',{attrs:{"summary":"枚举值"}},[_c('table',[_c('thead',[_c('tr',[_c('th',[_vm._v("值")]),_c('th',[_vm._v("描述")])])]),_c('tbody',[_c('tr',[_c('td',[_c('code',[_vm._v("alt")])]),_c('td',[_vm._v("备选样式。")])]),_c('tr',[_c('td',[_c('code',[_vm._v("bordered")])]),_c('td',[_vm._v("单元格带分隔边框的样式。")])]),_c('tr',[_c('td',[_c('code',[_vm._v("slim")])]),_c('td',[_vm._v("紧凑样式。")])])])])])],1)]),_vm._m(6),_vm._m(7),_vm._m(8),_vm._m(9),_vm._m(10),_vm._m(11),_vm._m(12),_vm._m(13),_vm._m(14),_vm._m(15)])]),_c('h3',{attrs:{"id":"插槽"}},[_vm._v("插槽")]),_vm._m(16),_c('h3',{attrs:{"id":"作用域插槽"}},[_vm._v("作用域插槽")]),_vm._m(17),_c('h3',{attrs:{"id":"事件"}},[_vm._v("事件")]),_c('table',[_vm._m(18),_c('tbody',[_c('tr',[_vm._m(19),_c('td',[_vm._m(20),_c('one-details',{attrs:{"summary":"参数详情"}},[_c('table',[_c('thead',[_c('tr',[_c('th',[_vm._v("名称")]),_c('th',[_vm._v("类型")]),_c('th',[_vm._v("描述")])])]),_c('tbody',[_c('tr',[_c('td',[_c('code',[_vm._v("selected")])]),_c('td',[_c('code',[_vm._v("boolean")])]),_c('td',[_c('code',[_vm._v("true")]),_vm._v(" 表示已选择，"),_c('code',[_vm._v("false")]),_vm._v(" 则表示取消选择。")])]),_c('tr',[_c('td',[_c('code',[_vm._v("item")])]),_c('td',[_c('code',[_vm._v("Object")])]),_c('td',[_vm._v("选择状态发生变化的 "),_c('code',[_vm._v("data")]),_vm._v(" 属性中的数据项。当存在纵向合并单元格且以相应行作为键进行选择时，将返回第一条相关的 "),_c('code',[_vm._v("data")]),_vm._v(" 数据项。")])]),_c('tr',[_c('td',[_c('code',[_vm._v("selectedItems")])]),_c('td',[_c('code',[_vm._v("Object<string, Object|Array>")])]),_c('td',[_vm._v("当前所有已选项的信息，键为 "),_c('code',[_vm._v("key-field")]),_vm._v(" 对应字段，值为对应的 "),_c('code',[_vm._v("data")]),_vm._v(" 数据项。当存在纵向合并单元格且以相应行作为键进行选择时，值为所有相关行数据项组成的数组。")])])])])])],1)]),_c('tr',[_vm._m(21),_c('td',[_vm._m(22),_c('one-details',{attrs:{"summary":"参数详情"}},[_c('table',[_c('thead',[_c('tr',[_c('th',[_vm._v("名称")]),_c('th',[_vm._v("类型")]),_c('th',[_vm._v("描述")])])]),_c('tbody',[_c('tr',[_c('td',[_c('code',[_vm._v("field")])]),_c('td',[_c('code',[_vm._v("string")])]),_c('td',[_vm._v("基于哪一列进行排序。值来自对应 "),_c('code',[_vm._v("Column")]),_vm._v(" 组件的 "),_c('code',[_vm._v("field")]),_vm._v(" 属性。")])]),_c('tr',[_c('td',[_c('code',[_vm._v("order")])]),_c('td',[_c('code',[_vm._v("string|boolean")])]),_c('td',[_vm._v("同 "),_c('a',{attrs:{"href":"#%E5%B1%9E%E6%80%A7"}},[_c('code',[_vm._v("order")]),_vm._v(" 属性")]),_vm._v("。")])])])])])],1)])])])],1)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h1',{attrs:{"id":"table-small表格small"}},[_vm._v("Table "),_c('small',[_vm._v("表格")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"tip custom-block"},[_c('p',[_c('code',[_vm._v("Table")]),_vm._v(" 组件需要配合 "),_c('a',{attrs:{"href":"./column"}},[_c('code',[_vm._v("Column")])]),_vm._v(" 组件使用。")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_vm._v("可选的 "),_c('code',[_vm._v("ui")]),_vm._v(" 尺寸属性值："),_c('code',[_vm._v("slim")]),_vm._v(" / "),_c('code',[_vm._v("alt")]),_vm._v(" / "),_c('code',[_vm._v("bordered")]),_vm._v("。")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('thead',[_c('tr',[_c('th',[_vm._v("名称")]),_c('th',[_vm._v("类型")]),_c('th',[_vm._v("默认值")]),_c('th',[_vm._v("描述")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',[_c('code',[_vm._v("ui")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',[_c('code',[_vm._v("string=")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('tr',[_c('td',[_c('code',[_vm._v("data")])]),_c('td',[_c('code',[_vm._v("Array<Object>")])]),_c('td',[_vm._v("-")]),_c('td',[_vm._v("表格数据。")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('tr',[_c('td',[_c('code',[_vm._v("key-field")])]),_c('td',[_c('code',[_vm._v("string")])]),_c('td',[_vm._v("-")]),_c('td',[_vm._v("用于指定充当表格数据的键的列标志符。值对应 "),_c('code',[_vm._v("data")]),_vm._v(" 属性中数据项的某个字段名称。对应字段的值则会作为行元素的 "),_c('a',{attrs:{"href":"https://cn.vuejs.org/v2/guide/list.html#key"}},[_c('code',[_vm._v("key")]),_vm._v(" 属性")]),_vm._v("输出。当 "),_c('code',[_vm._v("selectable")]),_vm._v(" 属性为 "),_c('code',[_vm._v("true")]),_vm._v(" 时，也可以用来指定在存在纵向合并单元格的情况下以哪一列的不同行作为选择项，此时值必须来自内部某个 "),_c('code',[_vm._v("Column")]),_vm._v(" 组件的 "),_c('code',[_vm._v("field")]),_vm._v(" 属性。")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('tr',[_c('td',[_c('code',[_vm._v("selectable")])]),_c('td',[_c('code',[_vm._v("boolean")])]),_c('td',[_c('code',[_vm._v("false")])]),_c('td',[_vm._v("是否支持表格行的选择。")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('tr',[_c('td',[_c('code',[_vm._v("select-mode")])]),_c('td',[_c('code',[_vm._v("string")])]),_c('td',[_c('code',[_vm._v("'multiple'")])]),_c('td',[_vm._v("选择模式，支持的值为 "),_c('code',[_vm._v("single")]),_vm._v("/"),_c('code',[_vm._v("multiple")]),_vm._v("，分别对应于单选/多选模式。")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('tr',[_c('td',[_c('code',[_vm._v("selected")])]),_c('td',[_c('code',[_vm._v("Array<*>|*")])]),_c('td',[_c('code',[_vm._v("[]")])]),_c('td',[_c('div',{staticClass:"badges custom-block"},[_c('p',[_c('code',[_vm._v(".sync")])])]),_c('p',[_vm._v("已选项。当 "),_c('code',[_vm._v("select-mode")]),_vm._v(" 为 "),_c('code',[_vm._v("'multiple'")]),_vm._v(" 时为已选项 "),_c('code',[_vm._v("key-field")]),_vm._v(" 对应字段值的数组；为 "),_c('code',[_vm._v("'single'")]),_vm._v(" 时即已选项 "),_c('code',[_vm._v("key-field")]),_vm._v(" 对应字段值。")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('tr',[_c('td',[_c('code',[_vm._v("expandable")])]),_c('td',[_c('code',[_vm._v("boolean")])]),_c('td',[_c('code',[_vm._v("false")])]),_c('td',[_vm._v("是否允许展开行。")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('tr',[_c('td',[_c('code',[_vm._v("expanded")])]),_c('td',[_c('code',[_vm._v("Array<*>")])]),_c('td',[_c('code',[_vm._v("[]")])]),_c('td',[_c('div',{staticClass:"badges custom-block"},[_c('p',[_c('code',[_vm._v(".sync")])])]),_c('p',[_vm._v("已选项。为已选项 "),_c('code',[_vm._v("key-field")]),_vm._v(" 对应字段值的数组。")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('tr',[_c('td',[_c('code',[_vm._v("order")])]),_c('td',[_c('code',[_vm._v("string|boolean")])]),_c('td',[_c('code',[_vm._v("false")])]),_c('td',[_vm._v("排序顺序。为 "),_c('code',[_vm._v("false")]),_vm._v(" 时表示无序，为字符串值 "),_c('code',[_vm._v("'asc'")]),_vm._v("/"),_c('code',[_vm._v("'desc'")]),_vm._v(" 时分别为升序/降序。")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('tr',[_c('td',[_c('code',[_vm._v("order-by")])]),_c('td',[_c('code',[_vm._v("string")])]),_c('td',[_vm._v("-")]),_c('td',[_vm._v("用于指定当前基于哪一列进行了排序，值必须来自内部某个 "),_c('code',[_vm._v("Column")]),_vm._v(" 组件的 "),_c('code',[_vm._v("field")]),_vm._v(" 属性。")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('tr',[_c('td',[_c('code',[_vm._v("scroll")])]),_c('td',[_c('code',[_vm._v("number")])]),_c('td',[_vm._v("-")]),_c('td',[_vm._v("指定滚动区域的最大高度，当超出此高度时，表格将进入固定表头和底部只允许数据区域滚动的模式。")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('table',[_c('thead',[_c('tr',[_c('th',[_vm._v("名称")]),_c('th',[_vm._v("描述")])])]),_c('tbody',[_c('tr',[_c('td',[_c('code',[_vm._v("default")])]),_c('td',[_vm._v("用于定义表格列，只能包含 "),_c('code',[_vm._v("Column")]),_vm._v(" 组件。")])]),_c('tr',[_c('td',[_c('code',[_vm._v("no-data")])]),_c('td',[_vm._v("用于定义无数据时要展现的内容。")])]),_c('tr',[_c('td',[_c('code',[_vm._v("foot")])]),_c('td',[_vm._v("表格脚部内容，整个区域将打通成为一个容器，不再保留分列。")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('table',[_c('thead',[_c('tr',[_c('th',[_vm._v("名称")]),_c('th',[_vm._v("描述")])])]),_c('tbody',[_c('tr',[_c('td',[_c('code',[_vm._v("sub-row")])]),_c('td',[_c('p',[_vm._v("展开行后子行的内容。使用此插槽时，内容会作为行展开下方通栏显式的子行内容。使用此插槽时会覆盖 "),_c('code',[_vm._v("Column")]),_vm._v(" 的作用域插槽 "),_c('code',[_vm._v("sub-row")]),_vm._v(" 内容。")]),_c('p',[_vm._v("作用域参数为 "),_c('code',[_vm._v("data")]),_vm._v(" 内当前行数据中的所有字段，以及当前行对应索引值 "),_c('code',[_vm._v("index")]),_vm._v("。")])])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('thead',[_c('tr',[_c('th',[_vm._v("名称")]),_c('th',[_vm._v("描述")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',[_c('code',[_vm._v("select")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_vm._v("切换已选项时触发。回调参数为 "),_c('code',[_vm._v("(selected, item, selectedItems)")]),_vm._v("。")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',[_c('code',[_vm._v("sort")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_vm._v("进行排序时触发的事件。回调参数为 "),_c('code',[_vm._v("(field, order)")]),_vm._v("。")])}]


// CONCATENATED MODULE: ./pages/development/components/table.vue?vue&type=template&id=25d424a4&scoped=true&

// EXTERNAL MODULE: ./components/OneDetails.vue + 4 modules
var OneDetails = __webpack_require__(428);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/demos/development/demo/table/basic.vue?vue&type=template&id=442551ce&scoped=true&
var basicvue_type_template_id_442551ce_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('article',[_c('section',[_c('veui-checkbox',{model:{value:(_vm.slim),callback:function ($$v) {_vm.slim=$$v},expression:"slim"}},[_vm._v("紧凑样式")]),_c('veui-checkbox',{model:{value:(_vm.alt),callback:function ($$v) {_vm.alt=$$v},expression:"alt"}},[_vm._v("备选样式")]),_c('veui-checkbox',{model:{value:(_vm.bordered),callback:function ($$v) {_vm.bordered=$$v},expression:"bordered"}},[_vm._v("单元格带分隔边框")])],1),_c('section',[_c('veui-table',{attrs:{"ui":_vm.ui,"data":_vm.data,"key-field":"id"}},[_c('veui-table-column',{attrs:{"field":"id","title":"用户 ID"}}),_c('veui-table-column',{attrs:{"field":"name","title":"名字"}}),_c('veui-table-column',{attrs:{"field":"bid","title":"出价","width":"160","align":"right"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var bid = ref.bid;
return [_vm._v(_vm._s(_vm._f("currency")(bid)))]}}])}),_c('veui-table-column',{attrs:{"field":"updateDate","title":"更新时间","align":"center"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var updateDate = ref.updateDate;
return [_vm._v(_vm._s(_vm._f("date")(updateDate)))]}}])}),_c('veui-table-column',{attrs:{"field":"operation","title":"操作"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var index = ref.index;
return [_c('veui-button',{attrs:{"ui":"link alert"},on:{"click":function($event){_vm.del(index)}}},[_vm._v("删除")])]}}])})],1)],1)])}
var basicvue_type_template_id_442551ce_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/demos/development/demo/table/basic.vue?vue&type=template&id=442551ce&scoped=true&

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(5);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.match.js
var es6_regexp_match = __webpack_require__(57);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/toArray.js
var toArray = __webpack_require__(442);
var toArray_default = /*#__PURE__*/__webpack_require__.n(toArray);

// EXTERNAL MODULE: ./node_modules/veui/index.js + 334 modules
var veui = __webpack_require__(172);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/demos/development/demo/table/basic.vue?vue&type=script&lang=js&



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
//
//
//
//
//
//
//
//

/* harmony default export */ var basicvue_type_script_lang_js_ = ({
  components: {
    'veui-table': veui["T" /* Table */],
    'veui-table-column': veui["k" /* Column */],
    'veui-checkbox': veui["i" /* Checkbox */],
    'veui-button': veui["d" /* Button */]
  },
  filters: {
    currency: function currency(value) {
      return '¥' + value.toFixed(2);
    },
    date: function date(value) {
      var _ref = value.match(/(\d{4})(\d{2})(\d{2})/) || [],
          _ref2 = toArray_default()(_ref),
          parts = _ref2.slice(1);

      return parts.join('-');
    }
  },
  data: function data() {
    return {
      slim: false,
      alt: false,
      bordered: false,
      data: [{
        id: '3154',
        name: 'Steve Rogers',
        bid: 1024,
        updateDate: '20131117'
      }, {
        id: '3155',
        name: 'Thor Odinson',
        bid: 598,
        updateDate: '20140214'
      }, {
        id: '3156',
        name: 'Tony Stark',
        bid: 820,
        updateDate: '20170610'
      }, {
        id: '3157',
        name: 'Stephen Strange',
        bid: 736,
        updateDate: '20180109'
      }]
    };
  },
  computed: {
    ui: function ui() {
      return toConsumableArray_default()(this.slim ? ['slim'] : []).concat(toConsumableArray_default()(this.bordered ? ['bordered'] : []), toConsumableArray_default()(this.alt ? ['alt'] : [])).join(' ');
    }
  }
});
// CONCATENATED MODULE: ./components/demos/development/demo/table/basic.vue?vue&type=script&lang=js&
 /* harmony default export */ var table_basicvue_type_script_lang_js_ = (basicvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./components/demos/development/demo/table/basic.vue?vue&type=style&index=0&id=442551ce&lang=less&scoped=true&
var basicvue_type_style_index_0_id_442551ce_lang_less_scoped_true_ = __webpack_require__(997);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/demos/development/demo/table/basic.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  table_basicvue_type_script_lang_js_,
  basicvue_type_template_id_442551ce_scoped_true_render,
  basicvue_type_template_id_442551ce_scoped_true_staticRenderFns,
  false,
  null,
  "442551ce",
  null
  
)

component.options.__file = "basic.vue"
/* harmony default export */ var basic = (component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/demos/development/demo/table/advanced.vue?vue&type=template&id=01459c16&scoped=true&
var advancedvue_type_template_id_01459c16_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('article',[_c('section',[_c('veui-button',{attrs:{"ui":"primary"},on:{"click":_vm.append}},[_vm._v("添加")])],1),_c('section',[_c('veui-checkbox',{attrs:{"true-value":"multiple","false-value":"single"},model:{value:(_vm.mode),callback:function ($$v) {_vm.mode=$$v},expression:"mode"}},[_vm._v("多选")]),_c('veui-checkbox',{model:{value:(_vm.showOps),callback:function ($$v) {_vm.showOps=$$v},expression:"showOps"}},[_vm._v("显示「操作」列")]),_c('veui-checkbox',{model:{value:(_vm.selectSpanRow),callback:function ($$v) {_vm.selectSpanRow=$$v},expression:"selectSpanRow"}},[_vm._v("以「用户分组」列为基准进行选择 "),_c('small',[_vm._v("（而非「用户 ID」）")])])],1),_c('section',[_c('veui-table',{attrs:{"ui":"alt bordered","data":_vm.data,"key-field":_vm.selectSpanRow ? 'group' : 'id',"selectable":"","select-mode":_vm.mode,"order-by":_vm.orderBy,"order":_vm.order,"selected":_vm.selected},on:{"sort":_vm.handleSort,"update:selected":function($event){_vm.selected=$event}}},[_c('veui-table-column',{attrs:{"field":"id","title":"用户 ID","sortable":""}},[_c('template',{slot:"head"},[_c('strong',[_vm._v("用户 ID")])]),_c('template',{slot:"foot"},[_c('strong',[_vm._v("总计")])])],2),_c('veui-table-column',{attrs:{"field":"group","title":"用户分组","span":_vm.groupSpan}}),_c('veui-table-column',{attrs:{"field":"name","title":"用户名字","width":"160"}}),_c('veui-table-column',{attrs:{"field":"bid","title":"出价","sortable":"","width":"160","align":"right"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var bid = ref.bid;
return [_vm._v(_vm._s(_vm._f("currency")(bid)))]}}])},[_c('template',{slot:"foot"},[_c('strong',[_vm._v(_vm._s(_vm._f("currency")(_vm.total)))])])],2),_c('veui-table-column',{attrs:{"field":"updateDate","title":"更新时间","align":"center"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var id = ref.id;
var updateDate = ref.updateDate;
return [_c('span',{ref:("time-a-" + id)},[_vm._v(_vm._s(_vm._f("date")(updateDate)))]),_c('veui-tooltip',{attrs:{"target":("time-a-" + id)}},[_vm._v(_vm._s(_vm._f("time")(updateDate)))])]}}])}),(_vm.showOps)?_c('veui-table-column',{attrs:{"field":"operation","title":"操作"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var index = ref.index;
return [_c('veui-button',{attrs:{"ui":"link alert"},on:{"click":function($event){_vm.del(index)}}},[_vm._v("删除")])]}}])}):_vm._e()],1),_c('p',[_vm._v("已选ID："+_vm._s(JSON.stringify(_vm.selected)))])],1)])}
var advancedvue_type_template_id_01459c16_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/demos/development/demo/table/advanced.vue?vue&type=template&id=01459c16&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.string.pad-start.js
var es7_string_pad_start = __webpack_require__(999);

// EXTERNAL MODULE: ./node_modules/lodash/lodash.js
var lodash = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/demos/development/demo/table/advanced.vue?vue&type=script&lang=js&



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
//
//
//
//
//


/* harmony default export */ var advancedvue_type_script_lang_js_ = ({
  components: {
    'veui-button': veui["d" /* Button */],
    'veui-table': veui["T" /* Table */],
    'veui-table-column': veui["k" /* Column */],
    'veui-tooltip': veui["X" /* Tooltip */],
    'veui-checkbox': veui["i" /* Checkbox */]
  },
  filters: {
    currency: function currency(value) {
      return '¥' + value.toFixed(2);
    },
    date: function date(value) {
      var _ref = value.match(/(\d{4})(\d{2})(\d{2})/) || [],
          _ref2 = toArray_default()(_ref),
          parts = _ref2.slice(1);

      return parts.join('-');
    },
    time: function time(value) {
      var _ref3 = value.match(/(\d{4})(\d{2})(\d{2})/) || [],
          _ref4 = toArray_default()(_ref3),
          parts = _ref4.slice(1);

      return parts.join('-') + ' 00:00:00';
    }
  },
  data: function data() {
    var _this = this;

    return {
      mode: 'multiple',
      showOps: true,
      selectSpanRow: true,
      data: [{
        id: '3154',
        name: 'Steve Rogers',
        bid: 1024,
        updateDate: '20131117',
        group: '1577'
      }, {
        id: '3155',
        name: 'Thor Odinson',
        bid: 598,
        updateDate: '20140214',
        group: '1577'
      }, {
        id: '3156',
        name: 'Tony Stark',
        bid: 820,
        updateDate: '20170610',
        group: '1578'
      }, {
        id: '3157',
        name: 'Stephen Strange',
        bid: 736,
        updateDate: '20180109',
        group: '1578'
      }],
      nextId: 3158,
      nextIndex: 4,
      order: false,
      orderBy: null,
      selected: ['1577'],
      groupSpan: function groupSpan(i) {
        var groups = Object(lodash["groupBy"])(_this.data, 'group');
        var item = _this.data[i];
        var itemGroup = groups[item.group];

        if (item.id === (itemGroup[0] || {}).id) {
          return {
            row: itemGroup.length
          };
        }

        return {
          row: 0
        };
      }
    };
  },
  computed: {
    total: function total() {
      return this.data.reduce(function (total, item) {
        return total + item.bid;
      }, 0);
    }
  },
  methods: {
    del: function del(index) {
      this.data.splice(index, 1);
    },
    append: function append() {
      var d = new Date(Date.now() + Math.floor(Math.random() * 1e10));
      var item = {
        id: String(this.nextId),
        group: String(Math.floor(this.nextId / 2)),
        name: "\u4EBA\u7269".concat(this.nextIndex),
        bid: Math.floor(Math.random() * 1280),
        updateDate: d.getFullYear() + String(d.getMonth() + 1).padStart(2, '0') + String(d.getMonth() + 1).padStart(2, '0')
      };
      this.nextId++;
      this.nextIndex++;
      this.data.push(item);
    },
    handleSort: function handleSort(orderBy, order) {
      this.orderBy = orderBy;
      this.order = order;
    }
  }
});
// CONCATENATED MODULE: ./components/demos/development/demo/table/advanced.vue?vue&type=script&lang=js&
 /* harmony default export */ var table_advancedvue_type_script_lang_js_ = (advancedvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./components/demos/development/demo/table/advanced.vue?vue&type=style&index=0&id=01459c16&lang=less&scoped=true&
var advancedvue_type_style_index_0_id_01459c16_lang_less_scoped_true_ = __webpack_require__(1001);

// CONCATENATED MODULE: ./components/demos/development/demo/table/advanced.vue






/* normalize component */

var advanced_component = Object(componentNormalizer["a" /* default */])(
  table_advancedvue_type_script_lang_js_,
  advancedvue_type_template_id_01459c16_scoped_true_render,
  advancedvue_type_template_id_01459c16_scoped_true_staticRenderFns,
  false,
  null,
  "01459c16",
  null
  
)

advanced_component.options.__file = "advanced.vue"
/* harmony default export */ var advanced = (advanced_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/demos/development/demo/table/scrollable.vue?vue&type=template&id=d2ce74c8&scoped=true&
var scrollablevue_type_template_id_d2ce74c8_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('article',[_c('section',[_c('veui-table',{attrs:{"data":_vm.data,"scroll":"360","key-field":"id"}},[_c('veui-table-column',{attrs:{"field":"id","title":"用户 ID"}}),_c('veui-table-column',{attrs:{"field":"name","title":"名字"}}),_c('veui-table-column',{attrs:{"field":"bid","title":"出价","width":"160","align":"right"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var bid = ref.bid;
return [_vm._v(_vm._s(_vm._f("currency")(bid)))]}}])}),_c('veui-table-column',{attrs:{"field":"updateDate","title":"更新时间","align":"center"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var updateDate = ref.updateDate;
return [_vm._v(_vm._s(_vm._f("date")(updateDate)))]}}])})],1)],1)])}
var scrollablevue_type_template_id_d2ce74c8_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/demos/development/demo/table/scrollable.vue?vue&type=template&id=d2ce74c8&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/demos/development/demo/table/scrollable.vue?vue&type=script&lang=js&


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

/* harmony default export */ var scrollablevue_type_script_lang_js_ = ({
  components: {
    'veui-table': veui["T" /* Table */],
    'veui-table-column': veui["k" /* Column */]
  },
  filters: {
    currency: function currency(value) {
      return '¥' + value.toFixed(2);
    },
    date: function date(value) {
      var _ref = value.match(/(\d{4})(\d{2})(\d{2})/) || [],
          _ref2 = toArray_default()(_ref),
          parts = _ref2.slice(1);

      return parts.join('-');
    }
  },
  data: function data() {
    return {
      data: [{
        id: '3154',
        name: 'Steve Rogers',
        bid: 1024,
        updateDate: '20131117'
      }, {
        id: '3155',
        name: 'Thor Odinson',
        bid: 598,
        updateDate: '20140214'
      }, {
        id: '3156',
        name: 'Tony Stark',
        bid: 820,
        updateDate: '20170610'
      }, {
        id: '3157',
        name: 'Stephen Strange',
        bid: 736,
        updateDate: '20180109'
      }, {
        id: '3158',
        name: 'Natalie Romanoff',
        bid: 736,
        updateDate: '20180123'
      }, {
        id: '3159',
        name: 'Bruce Banner',
        bid: 736,
        updateDate: '20181201'
      }, {
        id: '3160',
        name: 'Peter Parker',
        bid: 736,
        updateDate: '20181113'
      }, {
        id: '3161',
        name: 'T\'Challa',
        bid: 736,
        updateDate: '20180730'
      }, {
        id: '3162',
        name: 'Loki',
        bid: 736,
        updateDate: '20180601'
      }]
    };
  }
});
// CONCATENATED MODULE: ./components/demos/development/demo/table/scrollable.vue?vue&type=script&lang=js&
 /* harmony default export */ var table_scrollablevue_type_script_lang_js_ = (scrollablevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./components/demos/development/demo/table/scrollable.vue?vue&type=style&index=0&id=d2ce74c8&lang=less&scoped=true&
var scrollablevue_type_style_index_0_id_d2ce74c8_lang_less_scoped_true_ = __webpack_require__(1003);

// CONCATENATED MODULE: ./components/demos/development/demo/table/scrollable.vue






/* normalize component */

var scrollable_component = Object(componentNormalizer["a" /* default */])(
  table_scrollablevue_type_script_lang_js_,
  scrollablevue_type_template_id_d2ce74c8_scoped_true_render,
  scrollablevue_type_template_id_d2ce74c8_scoped_true_staticRenderFns,
  false,
  null,
  "d2ce74c8",
  null
  
)

scrollable_component.options.__file = "scrollable.vue"
/* harmony default export */ var scrollable = (scrollable_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/demos/development/demo/table/expandable.vue?vue&type=template&id=50b2e0a5&scoped=true&
var expandablevue_type_template_id_50b2e0a5_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('article',[_c('section',[_c('veui-table',{attrs:{"data":_vm.data,"expandable":"","key-field":"id"}},[_c('veui-table-column',{attrs:{"field":"id","title":"用户 ID"}}),_c('veui-table-column',{attrs:{"field":"name","title":"名字"}}),_c('veui-table-column',{attrs:{"field":"bid","title":"出价","width":"160","align":"right"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var bid = ref.bid;
return [_vm._v(_vm._s(_vm._f("currency")(bid)))]}}])}),_c('veui-table-column',{attrs:{"field":"updateDate","title":"更新时间","align":"center"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var updateDate = ref.updateDate;
return [_vm._v(_vm._s(_vm._f("date")(updateDate)))]}}])})],1)],1)])}
var expandablevue_type_template_id_50b2e0a5_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/demos/development/demo/table/expandable.vue?vue&type=template&id=50b2e0a5&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/demos/development/demo/table/expandable.vue?vue&type=script&lang=js&


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

/* harmony default export */ var expandablevue_type_script_lang_js_ = ({
  components: {
    'veui-table': veui["T" /* Table */],
    'veui-table-column': veui["k" /* Column */]
  },
  filters: {
    currency: function currency(value) {
      return '¥' + value.toFixed(2);
    },
    date: function date(value) {
      var _ref = value.match(/(\d{4})(\d{2})(\d{2})/) || [],
          _ref2 = toArray_default()(_ref),
          parts = _ref2.slice(1);

      return parts.join('-');
    }
  },
  data: function data() {
    return {
      data: [{
        id: '3154',
        name: 'Steve Rogers',
        bid: 1024,
        updateDate: '20131117',
        children: [{
          id: '3154',
          name: 'Steve Rogers',
          bid: 1024,
          updateDate: '20131117'
        }, {
          id: '3154',
          name: 'Steve Rogers',
          bid: 1001,
          updateDate: '20131116'
        }, {
          id: '3154',
          name: 'Steve Rogers',
          bid: 985,
          updateDate: '20131115'
        }]
      }, {
        id: '3155',
        name: 'Thor Odinson',
        bid: 598,
        updateDate: '20140214',
        children: [{
          id: '3155',
          name: 'Thor Odinson',
          bid: 520,
          updateDate: '20131116'
        }]
      }, {
        id: '3156',
        name: 'Tony Stark',
        bid: 820,
        updateDate: '20170610',
        children: [{
          id: '3156',
          name: 'Tony Stark',
          bid: 800,
          updateDate: '20131116'
        }, {
          id: '3156',
          name: 'Tony Stark',
          bid: 763,
          updateDate: '20131115'
        }]
      }, {
        id: '3157',
        name: 'Stephen Strange',
        bid: 736,
        updateDate: '20180109',
        children: [{
          id: '3157',
          name: 'Stephen Strange',
          bid: 704,
          updateDate: '20131116'
        }, {
          id: '3157',
          name: 'Stephen Strange',
          bid: 666,
          updateDate: '20131112'
        }, {
          id: '3157',
          name: 'Stephen Strange',
          bid: 521,
          updateDate: '20131111'
        }, {
          id: '3157',
          name: 'Stephen Strange',
          bid: 428,
          updateDate: '20131110'
        }]
      }]
    };
  }
});
// CONCATENATED MODULE: ./components/demos/development/demo/table/expandable.vue?vue&type=script&lang=js&
 /* harmony default export */ var table_expandablevue_type_script_lang_js_ = (expandablevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./components/demos/development/demo/table/expandable.vue?vue&type=style&index=0&id=50b2e0a5&lang=less&scoped=true&
var expandablevue_type_style_index_0_id_50b2e0a5_lang_less_scoped_true_ = __webpack_require__(1005);

// CONCATENATED MODULE: ./components/demos/development/demo/table/expandable.vue






/* normalize component */

var expandable_component = Object(componentNormalizer["a" /* default */])(
  table_expandablevue_type_script_lang_js_,
  expandablevue_type_template_id_50b2e0a5_scoped_true_render,
  expandablevue_type_template_id_50b2e0a5_scoped_true_staticRenderFns,
  false,
  null,
  "50b2e0a5",
  null
  
)

expandable_component.options.__file = "expandable.vue"
/* harmony default export */ var expandable = (expandable_component.exports);
// EXTERNAL MODULE: ./components/OneDemo.vue + 4 modules
var OneDemo = __webpack_require__(427);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/veui-loader/lib??ref--11!./pages/development/components/table.vue?vue&type=script&lang=js&
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






/* harmony default export */ var tablevue_type_script_lang_js_ = ({
  components: {
    OneDetails: OneDetails["a" /* default */],
    'one-demo-96c811c': basic,
    'one-demo-735e007': advanced,
    'one-demo-1322af1': scrollable,
    'one-demo-c1342bf': expandable,
    OneDemo: OneDemo["a" /* default */]
  }
});
// CONCATENATED MODULE: ./pages/development/components/table.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_tablevue_type_script_lang_js_ = (tablevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./assets/styles/post.styl?vue&type=style&index=0&id=25d424a4&lang=stylus&scoped=true&
var postvue_type_style_index_0_id_25d424a4_lang_stylus_scoped_true_ = __webpack_require__(1007);

// CONCATENATED MODULE: ./pages/development/components/table.vue






/* normalize component */

var table_component = Object(componentNormalizer["a" /* default */])(
  components_tablevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "25d424a4",
  null
  
)

table_component.options.__file = "table.vue"
/* harmony default export */ var table = __webpack_exports__["default"] = (table_component.exports);

/***/ }),

/***/ 422:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(430);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(9).default
var update = add("4a8630a4", content, true, {});

/***/ }),

/***/ 423:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(434);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(9).default
var update = add("5ad61634", content, true, {});

/***/ }),

/***/ 424:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(436);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(9).default
var update = add("3ee6f8b7", content, true, {});

/***/ }),

/***/ 425:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var veui_components_Icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);

veui_components_Icon__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].register({
  'angle-right': {
    paths: [{
      stroke: 'currentColor',
      'stroke-width': '4',
      d: 'M19 14l10 10-10 10',
      fill: 'none',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round'
    }],
    width: '48',
    height: '48'
  }
});

/***/ }),

/***/ 427:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/OneDemo.vue?vue&type=template&id=d145da86&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('article',{staticClass:"one-demo",class:{ expanded: _vm.localExpanded }},[_c('section',{staticClass:"demo"},[(_vm.browser)?_c('browser-window',{attrs:{"url":_vm.browser,"width":"80%","height":"400px"}},[_vm._t("default")],2):_vm._t("default")],2),(_vm.$slots.desc)?_c('section',{staticClass:"desc"},[_vm._t("desc")],2):_vm._e(),(_vm.$slots.source)?_c('section',{ref:"source",staticClass:"source",style:({ height: _vm.localExpanded ? ((_vm.sourceHeight || 0) + "px") : '0' })},[_vm._t("source")],2):_vm._e(),_c('button',{staticClass:"toggle",on:{"click":function($event){_vm.localExpanded = !_vm.localExpanded}}},[_c('veui-icon',{staticClass:"arrow",attrs:{"name":"angle-right"}}),_vm._v(" "+_vm._s(_vm.localExpanded ? '隐藏代码' : '显示代码'))],1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/OneDemo.vue?vue&type=template&id=d145da86&scoped=true&

// EXTERNAL MODULE: ./node_modules/veui/index.js + 334 modules
var veui = __webpack_require__(172);

// EXTERNAL MODULE: ./node_modules/vue-windows/dist/vue-windows.es.js
var vue_windows_es = __webpack_require__(431);

// EXTERNAL MODULE: ./node_modules/veui-theme-one-icons/angle-right.js
var angle_right = __webpack_require__(425);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/OneDemo.vue?vue&type=script&lang=js&
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



/* harmony default export */ var OneDemovue_type_script_lang_js_ = ({
  name: 'one-demo',
  components: {
    'veui-icon': veui["w" /* Icon */],
    BrowserWindow: vue_windows_es["a" /* BrowserWindow */]
  },
  props: {
    expanded: Boolean,
    browser: String
  },
  data: function data() {
    return {
      sourceHeight: 0,
      localExpanded: this.expanded
    };
  },
  watch: {
    expanded: function expanded(val) {
      this.localExpanded = val;
    },
    localExpanded: function localExpanded(val) {
      this.$emit('update:expanded', val);
    }
  },
  mounted: function mounted() {
    var source = this.$refs.source;
    var style = source.style;
    style.height = '';
    style.height = source.offsetHeight;
    this.sourceHeight = source.offsetHeight;
    style.height = '0';
  }
});
// CONCATENATED MODULE: ./components/OneDemo.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_OneDemovue_type_script_lang_js_ = (OneDemovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-windows/dist/vue-windows.css?vue&type=style&index=0&lang=css&
var vue_windowsvue_type_style_index_0_lang_css_ = __webpack_require__(433);

// EXTERNAL MODULE: ./components/OneDemo.vue?vue&type=style&index=1&id=d145da86&lang=stylus&scoped=true&
var OneDemovue_type_style_index_1_id_d145da86_lang_stylus_scoped_true_ = __webpack_require__(435);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/OneDemo.vue







/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_OneDemovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "d145da86",
  null
  
)

component.options.__file = "OneDemo.vue"
/* harmony default export */ var OneDemo = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 428:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/OneDetails.vue?vue&type=template&id=66b3dd00&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:{
    'one-details': true,
    expanded: _vm.expanded
  }},[_c('button',{staticClass:"summary",on:{"click":_vm.toggle}},[_c('veui-icon',{staticClass:"arrow",attrs:{"name":"angle-right"}}),_vm._v(" "+_vm._s(_vm.summary))],1),_c('div',{ref:"content",staticClass:"content",style:(_vm.style),on:{"transitionend":function($event){_vm.stable = true}}},[_vm._t("default")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/OneDetails.vue?vue&type=template&id=66b3dd00&scoped=true&

// EXTERNAL MODULE: ./node_modules/veui/index.js + 334 modules
var veui = __webpack_require__(172);

// EXTERNAL MODULE: ./node_modules/veui-theme-one-icons/angle-right.js
var angle_right = __webpack_require__(425);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/OneDetails.vue?vue&type=script&lang=js&
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


/* harmony default export */ var OneDetailsvue_type_script_lang_js_ = ({
  name: 'one-details',
  components: {
    'veui-icon': veui["w" /* Icon */]
  },
  data: function data() {
    return {
      expanded: false,
      intrinsicHeight: 0,
      height: 0,
      stable: true
    };
  },
  props: {
    summary: {
      type: String,
      required: true,
      default: '详细信息'
    }
  },
  computed: {
    style: function style() {
      return this.stable ? this.expanded ? null : 'height: 0' : "height: ".concat(this.height, "px");
    }
  },
  methods: {
    toggle: function toggle() {
      var _this = this;

      this.expanded = !this.expanded;
      this.stable = false;
      this.height = this.intrinsicHeight;

      if (!this.expanded) {
        requestAnimationFrame(function () {
          requestAnimationFrame(function () {
            _this.height = 0;
          });
        });
      }
    },
    updateHeight: function updateHeight() {
      var content = this.$refs.content;
      this.intrinsicHeight = content.scrollHeight;
    }
  },
  mounted: function mounted() {
    this.updateHeight();
  }
});
// CONCATENATED MODULE: ./components/OneDetails.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_OneDetailsvue_type_script_lang_js_ = (OneDetailsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./components/OneDetails.vue?vue&type=style&index=0&id=66b3dd00&lang=stylus&scoped=true&
var OneDetailsvue_type_style_index_0_id_66b3dd00_lang_stylus_scoped_true_ = __webpack_require__(429);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/OneDetails.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_OneDetailsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "66b3dd00",
  null
  
)

component.options.__file = "OneDetails.vue"
/* harmony default export */ var OneDetails = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_stylus_loader_index_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OneDetails_vue_vue_type_style_index_0_id_66b3dd00_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(422);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_stylus_loader_index_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OneDetails_vue_vue_type_style_index_0_id_66b3dd00_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_stylus_loader_index_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OneDetails_vue_vue_type_style_index_0_id_66b3dd00_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_stylus_loader_index_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OneDetails_vue_vue_type_style_index_0_id_66b3dd00_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 430:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// imports


// module
exports.push([module.i, "\n.one-details[data-v-66b3dd00]{overflow:hidden\n}\n.summary[data-v-66b3dd00]{border:none;background:none;padding-left:0;cursor:help;outline:none\n}\n.summary[data-v-66b3dd00]:hover{color:#333\n}\n.content[data-v-66b3dd00]{overflow:hidden;transition:height .3s\n}\n.arrow[data-v-66b3dd00]{vertical-align:top;margin-top:.35em;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s\n}\n.expanded>.summary>.arrow[data-v-66b3dd00]{-webkit-transform:rotate(90deg);transform:rotate(90deg)\n}", ""]);

// exports


/***/ }),

/***/ 431:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export EditorWindow */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrowserWindow; });
/* harmony import */ var nano_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(432);
/* harmony import */ var nano_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nano_assign__WEBPACK_IMPORTED_MODULE_0__);


var styles = {"window":"style-module_window__283Ok","body":"style-module_body__14MV-","shadow":"style-module_shadow__3RfWD","dark":"style-module_dark__fHT4T","safe":"style-module_safe__202Ig"};

var style = {"header":"style-module_header__2fZK7","title":"style-module_title__3cIVr","bullets":"style-module_bullets__79QN2","bullet":"style-module_bullet__Ce0rQ","bullet-red":"style-module_bullet-red__3UfbN","bullet-yellow":"style-module_bullet-yellow__2GzZ-","bullet-green":"style-module_bullet-green__1JY6W","isUrl":"style-module_isUrl__2Iqlr","dark":"style-module_dark__2yIKV"};

var Header = {
  functional: true,
  props: {
    title: {
      type: String,
      required: true
    },
    isURL: {
      type: Boolean,
      default: false
    },
    theme: {
      type: String
    }
  },
  render: function render(h, _ref) {
    var _ref$props = _ref.props,
        title = _ref$props.title,
        isURL = _ref$props.isURL,
        theme = _ref$props.theme;
    return h("div", {
      "class": [style.header, isURL && style.isUrl, style[theme]]
    }, [h("div", {
      "class": style.bullets
    }, [h("span", {
      "class": [style.bullet, style['bullet-red']]
    }), h("span", {
      "class": [style.bullet, style['bullet-yellow']]
    }), h("span", {
      "class": [style.bullet, style['bullet-green']]
    })]), h("span", {
      "class": style.title,
      domProps: {
        "innerHTML": title
      }
    })]);
  }
};

var sharedProps = {
  browser: Boolean,
  height: [Number, String],
  width: [Number, String],
  theme: {
    type: String,
    validator: function validator(v) {
      return ['default', 'dark'].indexOf(v) > -1;
    }
  },
  shadow: {
    type: Boolean,
    default: false
  }
};
var EditorWindow = {
  functional: true,
  name: 'editor-window',
  props: nano_assign__WEBPACK_IMPORTED_MODULE_0___default()({
    title: {
      required: true,
      type: String
    }
  }, sharedProps),
  render: function render(h, ctx) {
    var children = ctx.children;
    var _ctx$props = ctx.props,
        browser = _ctx$props.browser,
        title = _ctx$props.title,
        height = _ctx$props.height,
        width = _ctx$props.width,
        theme = _ctx$props.theme,
        shadow = _ctx$props.shadow;
    var className = [styles.window, theme && styles[theme], shadow && styles.shadow];
    var style = {
      height: Boolean(height) && (typeof height === 'number' ? "".concat(height, "px") : height),
      width: Boolean(width) && (typeof width === 'number' ? "".concat(width, "px") : width)
    };
    return h("div", {
      "class": className,
      style: style
    }, [h(Header, {
      attrs: {
        title: title,
        isURL: browser,
        theme: theme
      }
    }), h("div", {
      "class": styles.body
    }, [children])]);
  }
};
var BrowserWindow = {
  functional: true,
  name: 'browser-window',
  props: nano_assign__WEBPACK_IMPORTED_MODULE_0___default()({
    url: {
      required: true,
      type: String
    }
  }, sharedProps),
  render: function render(h, ctx) {
    var _ctx$props2 = ctx.props,
        url = _ctx$props2.url,
        height = _ctx$props2.height,
        width = _ctx$props2.width,
        theme = _ctx$props2.theme,
        shadow = _ctx$props2.shadow;
    var children = ctx.children;

    if (url.substr(0, 8) === 'https://') {
      url = "<span class=\"".concat([styles.safe, theme && styles[theme]].join(' '), "\">https</span>").concat(url.substr(5));
    }

    return h(EditorWindow, {
      attrs: {
        title: url,
        browser: true,
        height: height,
        width: width,
        theme: theme,
        shadow: shadow
      }
    }, [children]);
  }
};




/***/ }),

/***/ 432:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * nano-assign v1.0.1
 * (c) 2018-present egoist <0x142857@gmail.com>
 * Released under the MIT License.
 */


var index = function(obj) {
  var arguments$1 = arguments;

  for (var i = 1; i < arguments.length; i++) {
    // eslint-disable-next-line guard-for-in, prefer-rest-params
    for (var p in arguments[i]) { obj[p] = arguments$1[i][p]; }
  }
  return obj
};

module.exports = index;


/***/ }),

/***/ 433:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _vue_style_loader_index_js_css_loader_index_js_ref_3_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_3_oneOf_1_2_vue_windows_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(423);
/* harmony import */ var _vue_style_loader_index_js_css_loader_index_js_ref_3_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_3_oneOf_1_2_vue_windows_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_css_loader_index_js_ref_3_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_3_oneOf_1_2_vue_windows_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_vue_style_loader_index_js_css_loader_index_js_ref_3_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_3_oneOf_1_2_vue_windows_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 434:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// imports


// module
exports.push([module.i, "\n.style-module_window__283Ok{width:500px;height:340px;border-radius:4px;text-align:left;vertical-align:top;margin:0 20px;display:inline-block;background-color:#fff;z-index:1;overflow:hidden;border:1px solid #ccc\n}\n.style-module_body__14MV-{padding:10px 12px;position:relative;height:calc(100% - 40px);overflow:auto\n}\n.style-module_shadow__3RfWD{box-shadow:0 20px 68px rgba(0,0,0,.55)\n}\n.style-module_dark__fHT4T{color:#fff;border-color:#151515;background-color:#151515\n}\n.style-module_safe__202Ig{color:#40ad36\n}\n.style-module_safe__202Ig.style-module_dark__fHT4T{color:#45cc4b;background-color:transparent\n}\n.style-module_header__2fZK7{height:40px;padding-right:75px;display:flex;align-items:center\n}\n.style-module_title__3cIVr{flex:1 1 320px;text-align:center;font-size:12px;color:#766f79;white-space:nowrap;overflow:hidden;text-overflow:ellipsis\n}\n.style-module_bullets__79QN2{margin-left:12px;display:flex;flex:0 0;align-items:center\n}\n.style-module_bullet__Ce0rQ{height:12px;width:12px;display:block;background:#ccc;border-radius:100%;border:1px solid\n}\n.style-module_bullet__Ce0rQ+.style-module_bullet__Ce0rQ{margin-left:5px\n}\n.style-module_bullet-red__3UfbN{background:#f85955;border-color:#d74246\n}\n.style-module_bullet-yellow__2GzZ-{background:#fbbe3f;border-color:#d7a32d\n}\n.style-module_bullet-green__1JY6W{background:#45cc4b;border-color:#40ad36\n}\n.style-module_header__2fZK7.style-module_isUrl__2Iqlr{background:#e8e8e8\n}\n.style-module_header__2fZK7.style-module_isUrl__2Iqlr .style-module_title__3cIVr{background:#fff;flex:1 1 320px;border-radius:4px;line-height:26px;margin-left:17px;padding:0 12px;text-align:left\n}\n.style-module_header__2fZK7.style-module_dark__2yIKV .style-module_title__3cIVr{color:#fff\n}\n.style-module_header__2fZK7.style-module_dark__2yIKV .style-module_bullet__Ce0rQ{border-color:transparent\n}\n.style-module_header__2fZK7.style-module_dark__2yIKV.style-module_isUrl__2Iqlr{background:hsla(0,0%,100%,.1)\n}\n.style-module_header__2fZK7.style-module_dark__2yIKV.style-module_isUrl__2Iqlr .style-module_title__3cIVr{background-color:hsla(0,0%,61.2%,.21)\n}", ""]);

// exports


/***/ }),

/***/ 435:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_stylus_loader_index_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OneDemo_vue_vue_type_style_index_1_id_d145da86_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(424);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_stylus_loader_index_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OneDemo_vue_vue_type_style_index_1_id_d145da86_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_stylus_loader_index_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OneDemo_vue_vue_type_style_index_1_id_d145da86_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_stylus_loader_index_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OneDemo_vue_vue_type_style_index_1_id_d145da86_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 436:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// imports


// module
exports.push([module.i, "\n.one-demo[data-v-d145da86]{overflow:hidden\n}\n.arrow[data-v-d145da86]{transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s;vertical-align:-2px;-webkit-transform:rotate(90deg);transform:rotate(90deg)\n}\n.one-demo.expanded .arrow[data-v-d145da86]{-webkit-transform:rotate(270deg);transform:rotate(270deg)\n}\n.demo[data-v-d145da86]{padding:30px\n}\n.demo[data-v-d145da86],.desc[data-v-d145da86]{border:1px solid #eee\n}\n.desc[data-v-d145da86]{padding:18px 20px;background-color:#fcfcfc\n}\n.source[data-v-d145da86]{transition:height .3s\n}\n.source[data-v-d145da86] pre{margin-top:0;margin-bottom:0\n}\n.desc[data-v-d145da86],.source[data-v-d145da86] pre,.toggle[data-v-d145da86]{margin-top:-1px\n}\n.toggle[data-v-d145da86]{position:relative;display:block;width:100%;height:40px;border:1px solid #eee;background-color:#fff;transition:background-color .3s;outline:none\n}\n.toggle.focus-visible[data-v-d145da86],.toggle[data-v-d145da86]:hover{background-color:#fafafa\n}", ""]);

// exports


/***/ }),

/***/ 442:
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(224);

var iterableToArray = __webpack_require__(226);

var nonIterableRest = __webpack_require__(225);

function _toArray(arr) {
  return arrayWithHoles(arr) || iterableToArray(arr) || nonIterableRest();
}

module.exports = _toArray;

/***/ }),

/***/ 562:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(998);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(9).default
var update = add("2aef891c", content, true, {});

/***/ }),

/***/ 563:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1002);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(9).default
var update = add("6c0b0620", content, true, {});

/***/ }),

/***/ 564:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1004);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(9).default
var update = add("e1a5ed3e", content, true, {});

/***/ }),

/***/ 565:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1006);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(9).default
var update = add("f514cc6e", content, true, {});

/***/ }),

/***/ 566:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1008);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(9).default
var update = add("64256036", content, true, {});

/***/ }),

/***/ 997:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_4_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_basic_vue_vue_type_style_index_0_id_442551ce_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(562);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_4_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_basic_vue_vue_type_style_index_0_id_442551ce_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_4_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_basic_vue_vue_type_style_index_0_id_442551ce_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_4_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_basic_vue_vue_type_style_index_0_id_442551ce_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 998:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// imports


// module
exports.push([module.i, "\nsection[data-v-442551ce]{margin-bottom:20px\n}\n.veui-checkbox[data-v-442551ce]{margin-right:20px\n}", ""]);

// exports


/***/ }),

/***/ 999:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-string-pad-start-end
var $export = __webpack_require__(32);
var $pad = __webpack_require__(1000);
var userAgent = __webpack_require__(222);

// https://github.com/zloirock/core-js/issues/280
$export($export.P + $export.F * /Version\/10\.\d+(\.\d+)? Safari\//.test(userAgent), 'String', {
  padStart: function padStart(maxLength /* , fillString = ' ' */) {
    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
  }
});


/***/ })

}]);