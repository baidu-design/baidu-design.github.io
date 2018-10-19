(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[43,8],{

/***/ 1200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _vue_style_loader_index_js_ref_4_oneOf_1_0_css_loader_index_js_ref_4_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_4_oneOf_1_2_less_loader_dist_cjs_js_ref_4_oneOf_1_3_transfer_less_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(723);
/* harmony import */ var _vue_style_loader_index_js_ref_4_oneOf_1_0_css_loader_index_js_ref_4_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_4_oneOf_1_2_less_loader_dist_cjs_js_ref_4_oneOf_1_3_transfer_less_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_4_oneOf_1_0_css_loader_index_js_ref_4_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_4_oneOf_1_2_less_loader_dist_cjs_js_ref_4_oneOf_1_3_transfer_less_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_vue_style_loader_index_js_ref_4_oneOf_1_0_css_loader_index_js_ref_4_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_4_oneOf_1_2_less_loader_dist_cjs_js_ref_4_oneOf_1_3_transfer_less_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 1201:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, "/* Theme colors */\n/* Additional colors */\n/* Grayscale colors */\n/* Text colors */\n/* Link colors */\n/* Font settings */\n/* Metrics */\n/* Form widths */\n/* Transition duration */\n.veui-transfer {\n  display: inline-block;\n}\n.veui-transfer:before,\n.veui-transfer:after {\n  display: table;\n  content: \"\";\n}\n.veui-transfer:after {\n  clear: both;\n}\n.veui-transfer .veui-filter-panel {\n  float: left;\n}\n.veui-transfer .veui-tree-item {\n  height: auto;\n}\n.veui-transfer-candidate-panel {\n  margin-right: 20px;\n}\n.veui-transfer .veui-filter-panel-content-main {\n  position: relative;\n}\n.veui-transfer-candidate-item,\n.veui-transfer-selected-item {\n  padding: 0 20px;\n  cursor: pointer;\n  color: #666;\n  height: 36px;\n  line-height: 36px;\n}\n.veui-transfer-candidate-item::before,\n.veui-transfer-selected-item::before {\n  content: \"\";\n  position: absolute;\n  display: block;\n  left: 0;\n  right: 0;\n  height: 36px;\n}\n.veui-transfer-candidate-item:hover::before,\n.veui-transfer-selected-item:hover::before {\n  background: #f7f7f7;\n}\n.veui-transfer-candidate-item:active::before,\n.veui-transfer-selected-item:active::before {\n  background: #e7e7e7;\n}\n.veui-transfer-candidate-item .veui-transfer-item-text,\n.veui-transfer-selected-item .veui-transfer-item-text,\n.veui-transfer-candidate-item .veui-icon,\n.veui-transfer-selected-item .veui-icon {\n  position: relative;\n  z-index: 1;\n}\n.veui-transfer-candidate-item-hidden,\n.veui-transfer-selected-item-hidden {\n  display: none;\n}\n.veui-transfer-candidate-item:hover .veui-transfer-candidate-icon-selected,\n.veui-transfer-candidate-item:hover .veui-transfer-candidate-icon-unselected {\n  display: block;\n}\n.veui-transfer-candidate-item-label-selected {\n  color: #b8b8b8;\n}\n.veui-transfer-selected-item:hover .veui-transfer-selected-icon-remove {\n  display: block;\n}\n.veui-transfer-item-text {\n  overflow: hidden;\n  -o-text-overflow: ellipsis;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  max-width: 150px;\n  float: left;\n}\n.veui-transfer-item-label:before,\n.veui-transfer-item-label:after {\n  display: table;\n  content: \"\";\n}\n.veui-transfer-item-label:after {\n  clear: both;\n}\n.veui-transfer-item-label:first-child {\n  margin-left: 18px;\n}\n.veui-transfer-candidate-icon-selected,\n.veui-transfer-candidate-icon-unselected,\n.veui-transfer-selected-icon-remove {\n  float: right;\n  margin-top: calc(18px - .5em);\n  vertical-align: top;\n  display: none;\n}\n.veui-transfer-selected-icon-remove {\n  width: 12px;\n  height: 12px;\n}\n.veui-transfer-select-all,\n.veui-transfer-remove-all {\n  float: right;\n}\n.veui-transfer-selected-flat {\n  width: 350px;\n  min-width: 350px;\n}\n.veui-transfer-selected-flat-items {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  color: #666;\n}\n.veui-transfer-selected-flat-item {\n  padding: 0 20px;\n  cursor: pointer;\n  position: relative;\n}\n.veui-transfer-selected-flat-item:hover {\n  background: #f7f7f7;\n}\n.veui-transfer-selected-flat-item:active {\n  background: #e7e7e7;\n}\n.veui-transfer-selected-flat-item-label {\n  padding: 7px 20px 7px 0;\n}\n.veui-transfer-selected-flat-item-hidden {\n  display: none;\n}\n.veui-transfer-selected-flat-option-separator {\n  display: inline-block;\n  line-height: 1;\n  overflow: hidden;\n  width: 1em;\n  height: 1em;\n  margin-top: calc(11px - .5em);\n  vertical-align: top;\n}\n.veui-transfer-selected-flat-icon-remove {\n  position: absolute;\n  top: 50%;\n  right: 20px;\n  transform: translateY(-50%);\n  display: none;\n  width: 12px;\n  height: 12px;\n}\n.veui-transfer-selected-flat-item:hover .veui-transfer-selected-flat-icon-remove {\n  display: block;\n}\n.veui-transfer-disabled .veui-transfer-candidate-item,\n.veui-transfer-disabled .veui-transfer-selected-item,\n.veui-transfer-disabled .veui-transfer-selected-flat-item {\n  cursor: not-allowed;\n}\n.veui-transfer-disabled .veui-transfer-item-text,\n.veui-transfer-disabled .veui-transfer-candidate-icon-unselected,\n.veui-transfer-disabled .veui-transfer-selected-icon-remove,\n.veui-transfer-disabled .veui-transfer-selected-flat-item-label {\n  color: #b8b8b8;\n}\n.veui-transfer.veui-input-invalid + .veui-field-error {\n  position: absolute;\n  display: block;\n  margin: 0;\n  height: 30px;\n  line-height: 30px;\n  font-size: 12px;\n  margin-left: 120px;\n}\n.veui-transfer.veui-input-invalid + .veui-field-error .veui-icon {\n  margin-top: calc(30px / 2 - .5em);\n}\n", ""]);

// exports


/***/ }),

/***/ 1202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_index_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_4_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_base_vue_vue_type_style_index_0_lang_less_docs_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(724);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_index_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_4_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_base_vue_vue_type_style_index_0_lang_less_docs_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_index_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_4_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_base_vue_vue_type_style_index_0_lang_less_docs_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_index_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_4_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_base_vue_vue_type_style_index_0_lang_less_docs_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 1203:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, "\n.veui-transfer-candidate-icon-selected.veui-icon,\n.veui-transfer-candidate-icon-unselected.veui-icon,\n.veui-transfer-selected-icon-remove.veui-icon {\n  display: none;\n}\n", ""]);

// exports


/***/ }),

/***/ 1204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_index_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_4_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_no_search_vue_vue_type_style_index_0_lang_less_docs_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(725);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_index_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_4_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_no_search_vue_vue_type_style_index_0_lang_less_docs_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_index_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_4_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_no_search_vue_vue_type_style_index_0_lang_less_docs_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_index_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_4_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_no_search_vue_vue_type_style_index_0_lang_less_docs_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 1205:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, "\n.veui-transfer-candidate-icon-selected.veui-icon,\n.veui-transfer-candidate-icon-unselected.veui-icon,\n.veui-transfer-selected-icon-remove.veui-icon {\n  display: none;\n}\n", ""]);

// exports


/***/ }),

/***/ 1206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_index_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_4_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_custom_search_vue_vue_type_style_index_0_lang_less_docs_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(726);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_index_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_4_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_custom_search_vue_vue_type_style_index_0_lang_less_docs_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_index_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_4_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_custom_search_vue_vue_type_style_index_0_lang_less_docs_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_index_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_4_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_custom_search_vue_vue_type_style_index_0_lang_less_docs_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 1207:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, "\n.veui-transfer-candidate-icon-selected.veui-icon,\n.veui-transfer-candidate-icon-unselected.veui-icon,\n.veui-transfer-selected-icon-remove.veui-icon {\n  display: none;\n}\n", ""]);

// exports


/***/ }),

/***/ 1208:
/***/ (function(module, exports) {



/***/ }),

/***/ 1209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_index_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_4_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_flat_vue_vue_type_style_index_0_lang_less_docs_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(727);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_index_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_4_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_flat_vue_vue_type_style_index_0_lang_less_docs_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_index_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_4_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_flat_vue_vue_type_style_index_0_lang_less_docs_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_index_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_4_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_flat_vue_vue_type_style_index_0_lang_less_docs_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 1210:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, "\n.veui-transfer-candidate-icon-selected.veui-icon,\n.veui-transfer-candidate-icon-unselected.veui-icon,\n.veui-transfer-selected-icon-remove.veui-icon {\n  display: none;\n}\n", ""]);

// exports


/***/ }),

/***/ 1211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_index_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_stylus_loader_index_js_ref_7_oneOf_1_3_post_styl_vue_type_style_index_0_id_52737b4f_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(728);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_index_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_stylus_loader_index_js_ref_7_oneOf_1_3_post_styl_vue_type_style_index_0_id_52737b4f_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_index_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_stylus_loader_index_js_ref_7_oneOf_1_3_post_styl_vue_type_style_index_0_id_52737b4f_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_index_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_stylus_loader_index_js_ref_7_oneOf_1_3_post_styl_vue_type_style_index_0_id_52737b4f_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 1212:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, "/*\n\nAtom One Dark by Daniel Gamage\nOriginal One Dark Syntax theme from https://github.com/atom/one-dark-syntax\n\nbase:    #282c34\nmono-1:  #abb2bf\nmono-2:  #818896\nmono-3:  #5c6370\nhue-1:   #56b6c2\nhue-2:   #61aeee\nhue-3:   #c678dd\nhue-4:   #98c379\nhue-5:   #e06c75\nhue-5-2: #be5046\nhue-6:   #d19a66\nhue-6-2: #e6c07b\n\n*/\n.hljs[data-v-52737b4f] {\n  display: block;\n  overflow-x: auto;\n  padding: 0.5em;\n  color: #abb2bf;\n  background: #282c34;\n}\n.hljs-comment[data-v-52737b4f],\n.hljs-quote[data-v-52737b4f] {\n  color: #5c6370;\n  font-style: italic;\n}\n.hljs-doctag[data-v-52737b4f],\n.hljs-keyword[data-v-52737b4f],\n.hljs-formula[data-v-52737b4f] {\n  color: #c678dd;\n}\n.hljs-section[data-v-52737b4f],\n.hljs-name[data-v-52737b4f],\n.hljs-selector-tag[data-v-52737b4f],\n.hljs-deletion[data-v-52737b4f],\n.hljs-subst[data-v-52737b4f] {\n  color: #e06c75;\n}\n.hljs-literal[data-v-52737b4f] {\n  color: #56b6c2;\n}\n.hljs-string[data-v-52737b4f],\n.hljs-regexp[data-v-52737b4f],\n.hljs-addition[data-v-52737b4f],\n.hljs-attribute[data-v-52737b4f],\n.hljs-meta-string[data-v-52737b4f] {\n  color: #98c379;\n}\n.hljs-built_in[data-v-52737b4f],\n.hljs-class .hljs-title[data-v-52737b4f] {\n  color: #e6c07b;\n}\n.hljs-attr[data-v-52737b4f],\n.hljs-variable[data-v-52737b4f],\n.hljs-template-variable[data-v-52737b4f],\n.hljs-type[data-v-52737b4f],\n.hljs-selector-class[data-v-52737b4f],\n.hljs-selector-attr[data-v-52737b4f],\n.hljs-selector-pseudo[data-v-52737b4f],\n.hljs-number[data-v-52737b4f] {\n  color: #d19a66;\n}\n.hljs-symbol[data-v-52737b4f],\n.hljs-bullet[data-v-52737b4f],\n.hljs-link[data-v-52737b4f],\n.hljs-meta[data-v-52737b4f],\n.hljs-selector-id[data-v-52737b4f],\n.hljs-title[data-v-52737b4f] {\n  color: #61aeee;\n}\n.hljs-emphasis[data-v-52737b4f] {\n  font-style: italic;\n}\n.hljs-strong[data-v-52737b4f] {\n  font-weight: bold;\n}\n.hljs-link[data-v-52737b4f] {\n  text-decoration: underline;\n}\n.post[data-v-52737b4f] {\n  padding: 45px 60px;\n  font-size: 14px;\n  line-height: 1.8;\n  color: #666;\n  font-weight: 400;\n}\n.post-layout .post[data-v-52737b4f] {\n  min-height: 100%;\n  margin-bottom: -192px;\n}\n.post-layout .post[data-v-52737b4f]::after {\n  content: \"\";\n  display: block;\n  height: 192px;\n}\n.post-layout.no-links .post[data-v-52737b4f] {\n  margin-bottom: -58px;\n}\n.no-links .post[data-v-52737b4f]::after {\n  height: 58px;\n}\n.post h1[data-v-52737b4f] {\n  margin-top: 0;\n  margin-bottom: 1.25em;\n  font-size: 36px;\n}\n.post h1 small[data-v-52737b4f] {\n  vertical-align: 0.1em;\n  color: #999;\n}\n.post h2[data-v-52737b4f] {\n  margin-top: 1.3em;\n  margin-bottom: 1.2em;\n  font-size: 30px;\n}\n.post h2[data-v-52737b4f]::before {\n  content: \"#\";\n  margin-right: 5px;\n  color: #ccc;\n}\n.post h2 + h3[data-v-52737b4f] {\n  margin-top: 2em;\n}\n.post h3[data-v-52737b4f] {\n  margin-top: 1.25em;\n  margin-bottom: 1.15em;\n  font-size: 24px;\n}\n.post h4[data-v-52737b4f] {\n  margin-top: 1.15em;\n  margin-bottom: 1.1em;\n  font-size: 18px;\n}\n.post h5[data-v-52737b4f] {\n  margin-top: 1.05em;\n  margin-bottom: 1.05em;\n  font-size: 14px;\n}\n.post h6[data-v-52737b4f] {\n  margin-top: 1em;\n  margin-bottom: 1em;\n  font-size: 12px;\n}\n.post h1[data-v-52737b4f],\n.post h2[data-v-52737b4f],\n.post h3[data-v-52737b4f] {\n  font-weight: 500;\n  clear: both;\n}\n.post h1[data-v-52737b4f],\n.post h2[data-v-52737b4f],\n.post h3[data-v-52737b4f],\n.post h4[data-v-52737b4f],\n.post h5[data-v-52737b4f],\n.post h6[data-v-52737b4f] {\n  color: #333;\n  line-height: 1;\n}\n.post br[data-v-52737b4f] {\n  clear: both;\n}\n.post p[data-v-52737b4f] {\n  margin-top: 0.5em;\n  margin-bottom: 0.5em;\n}\n.post ul[data-v-52737b4f],\n.post ol[data-v-52737b4f] {\n  padding-left: 1.5em;\n}\n.post blockquote[data-v-52737b4f] {\n  margin: 1em 0;\n  padding-left: 1em;\n  border-left: 5px solid #f1f1f1;\n  color: #999;\n}\n.post table[data-v-52737b4f] {\n  width: 100%;\n  border-collapse: collapse;\n  border: 1px solid #f1f1f1;\n  border-style: none solid;\n  margin-top: 1.5em;\n  margin-bottom: 1.5em;\n}\n.post th[data-v-52737b4f],\n.post td[data-v-52737b4f] {\n  min-width: 90px;\n  padding: 7px 14px;\n  border: 1px solid #f1f1f1;\n  border-style: solid none;\n  text-align: left;\n}\n.post th[data-v-52737b4f] > :first-child,\n.post td[data-v-52737b4f] > :first-child {\n  margin-top: 5px;\n}\n.post th[data-v-52737b4f] > :last-child,\n.post td[data-v-52737b4f] > :last-child {\n  margin-bottom: 5px;\n}\n.post th pre[data-v-52737b4f],\n.post td pre[data-v-52737b4f] {\n  padding: 10px 15px;\n}\n.post th table[data-v-52737b4f],\n.post td table[data-v-52737b4f] {\n  margin-top: 0.2em;\n  margin-bottom: 0.5em;\n}\n.post td[data-v-52737b4f]:first-child {\n  white-space: nowrap;\n}\n.post a[data-v-52737b4f]:link:not([class^=\"veui-\"]),\n.post a[data-v-52737b4f]:visited:not([class^=\"veui-\"]) {\n  text-decoration: none;\n  color: #3998fc;\n  transition: color 0.2s;\n}\n.post a[data-v-52737b4f]:link:not([class^=\"veui-\"]):hover,\n.post a[data-v-52737b4f]:visited:not([class^=\"veui-\"]):hover {\n  color: #3389e3;\n}\n.post a[data-v-52737b4f]:link:not([class^=\"veui-\"]):active,\n.post a[data-v-52737b4f]:visited:not([class^=\"veui-\"]):active {\n  color: #2e7aca;\n}\n.post code[data-v-52737b4f] {\n  padding: 2px 4px;\n  background-color: rgba(0,0,0,0.024);\n  font-size: 90%;\n}\n.post hr[data-v-52737b4f] {\n  height: 1px;\n  margin: 2em 0;\n  padding: 0;\n  background-color: #eff0f1;\n  border: 0;\n  clear: both;\n}\n.post figure[data-v-52737b4f] {\n  float: right;\n  width: 60%;\n  margin: 0 0 30px 20px;\n}\n.post figure + h1[data-v-52737b4f],\n.post figure + h2[data-v-52737b4f],\n.post figure + h3[data-v-52737b4f],\n.post figure + h4[data-v-52737b4f],\n.post figure + h5[data-v-52737b4f],\n.post figure + h6[data-v-52737b4f] {\n  margin-top: 0;\n}\n.post figure img[data-v-52737b4f] {\n  display: block;\n  margin: auto;\n}\n.post figure .preview[data-v-52737b4f] {\n  padding: 20px;\n  overflow: hidden;\n  border: 1px solid #e5e5e5;\n  transition: box-shadow 0.2s;\n  cursor: pointer;\n  text-align: center;\n}\n.post figure .preview[data-v-52737b4f]:hover {\n  box-shadow: 0 0 5px rgba(0,0,0,0.2);\n}\n.post figure.hero[data-v-52737b4f] {\n  width: 100%;\n}\n.post figcaption[data-v-52737b4f] {\n  margin-top: 10px;\n  font-size: 12px;\n}\n.post figcaption p[data-v-52737b4f] {\n  margin: 0;\n  line-height: 20px;\n}\n.post figcaption .caption[data-v-52737b4f] {\n  font-weight: 500;\n}\n.post figcaption .desc[data-v-52737b4f] {\n  color: #999;\n}\n.post .comparison[data-v-52737b4f] {\n  float: right;\n  width: 60%;\n  margin: 0 0 30px 20px;\n}\n.post .comparison figure[data-v-52737b4f] {\n  width: calc(50% - 5px);\n  margin: 0;\n}\n.post .comparison .good[data-v-52737b4f] {\n  float: left;\n}\n.post .comparison .bad[data-v-52737b4f] {\n  float: right;\n}\n.post .comparison .bad .caption[data-v-52737b4f] {\n  color: #ff5b5b;\n}\n.post img[data-v-52737b4f] {\n  max-width: 100%;\n  max-height: 100%;\n}\n.post pre[data-v-52737b4f] {\n  border: 1px solid #eee;\n  padding: 30px;\n  background-color: #f9f9f9;\n  white-space: pre;\n  overflow: auto;\n}\n.post pre code[data-v-52737b4f] {\n  background-color: transparent;\n  padding: 0;\n}\n.post var[data-v-52737b4f] {\n  font-family: \"PT Serif\", Georgia, serif;\n}\n.post kbd[data-v-52737b4f] {\n  display: inline-block;\n  padding: 3px 5px 6px;\n  font-size: 90%;\n  line-height: 10px;\n  color: #444d56;\n  vertical-align: 1px;\n  background-color: #fafbfc;\n  border: solid 1px #c6cbd1;\n  border-bottom-color: #959da5;\n  border-radius: 3px;\n  box-shadow: inset 0 -1px 0 #959da5;\n}\n.post .custom-block[data-v-52737b4f] {\n  border: 1px solid;\n  margin: 1em 0;\n  padding: 0.75em 1em;\n}\n.post .custom-block[data-v-52737b4f] > :first-child {\n  margin-top: 0;\n}\n.post .custom-block[data-v-52737b4f] > :last-child {\n  margin-bottom: 0;\n}\n.post .alert[data-v-52737b4f],\n.post .warning[data-v-52737b4f],\n.post .tip[data-v-52737b4f] {\n  font-size: 13px;\n}\n.post .alert[data-v-52737b4f] {\n  border-color: #fee;\n  background-color: #fff6f6;\n}\n.post .warning[data-v-52737b4f] {\n  border-color: #fef4e6;\n  background-color: #fef9f2;\n}\n.post .tip[data-v-52737b4f] {\n  border-color: #d8ebff;\n  background-color: #ebf5ff;\n}\n.post .badges[data-v-52737b4f] {\n  border: none;\n  padding: 0;\n}\n.post .badges code[data-v-52737b4f] {\n  padding: 2px 3px;\n  background: #333;\n  border-radius: 2px;\n  color: #fff;\n  font-size: 80%;\n}\n.post .oss-badges[data-v-52737b4f] {\n  border: none;\n  padding: 0;\n}\n.post .oss-badges a[data-v-52737b4f] {\n  margin-right: 10px;\n}\n.post .one-demo[data-v-52737b4f] {\n  margin: 1em 0 1.25em;\n}\n", ""]);

// exports


/***/ }),

/***/ 1423:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/veui-loader/lib??ref--11!./pages/development/components/transfer.vue?vue&type=template&id=52737b4f&scoped=true&
var transfervue_type_template_id_52737b4f_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('article',{staticClass:"content post"},[_vm._m(0),_vm._v(" "),_c('h2',{attrs:{"id":"示例"}},[_vm._v("示例")]),_vm._v(" "),_c('p',[_vm._v("基本功能。")]),_vm._v(" "),_c('one-demo',[_c('one-demo-460e291'),_c('template',{slot:"source"},[_c('div',{pre:true},[_c('pre',[_c('code',{attrs:{"class":"hljs language-vue"}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_c('span',{attrs:{"class":"html"}},[_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("article")]),_vm._v(">")]),_vm._v("\n  "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("veui-transfer")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":datasource")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"region\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("v-model")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"selected\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("veui-transfer")]),_vm._v(">")]),_vm._v("\n  "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("class")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"console\"")]),_vm._v(">")]),_vm._v("已选择：{{ selected }}"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("article")]),_vm._v(">")]),_vm._v("\n")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")]),_c('span',{attrs:{"class":"javascript"}},[_vm._v("\n"),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("import")]),_vm._v(" { Transfer } "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("from")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'veui'")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("import")]),_vm._v(" region "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("from")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'@/common/region'")]),_vm._v("\n\n"),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("export")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("default")]),_vm._v(" {\n  "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("components")]),_vm._v(": {\n    "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'veui-transfer'")]),_vm._v(": Transfer\n  },\n  data () {\n    "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("return")]),_vm._v(" {\n      region,\n      "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("selected")]),_vm._v(": []\n    }\n  }\n}\n")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")])])])])]),_c('template',{slot:"desc"})],2),_vm._v(" "),_c('p',[_vm._v("禁止搜索。")]),_vm._v(" "),_c('one-demo',[_c('one-demo-b716e77'),_c('template',{slot:"source"},[_c('div',{pre:true},[_c('pre',[_c('code',{attrs:{"class":"hljs language-vue"}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_c('span',{attrs:{"class":"html"}},[_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("article")]),_vm._v(">")]),_vm._v("\n  "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("veui-transfer")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":datasource")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"region\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":searchable")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"false\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("veui-transfer")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("article")]),_vm._v(">")]),_vm._v("\n")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")]),_c('span',{attrs:{"class":"javascript"}},[_vm._v("\n"),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("import")]),_vm._v(" { Transfer } "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("from")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'veui'")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("import")]),_vm._v(" region "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("from")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'@/common/region'")]),_vm._v("\n\n"),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("export")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("default")]),_vm._v(" {\n  "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("components")]),_vm._v(": {\n    "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'veui-transfer'")]),_vm._v(": Transfer\n  },\n  data () {\n    "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("return")]),_vm._v(" {\n      region\n    }\n  }\n}\n")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")])])])])]),_c('template',{slot:"desc"})],2),_vm._v(" "),_c('p',[_vm._v("自定义搜索。")]),_vm._v(" "),_c('one-demo',[_c('one-demo-e836116'),_c('template',{slot:"source"},[_c('div',{pre:true},[_c('pre',[_c('code',{attrs:{"class":"hljs language-vue"}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_c('span',{attrs:{"class":"html"}},[_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("article")]),_vm._v(">")]),_vm._v("\n  "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("veui-transfer")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":datasource")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"region\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":filter")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"filter\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("veui-transfer")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("article")]),_vm._v(">")]),_vm._v("\n")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")]),_c('span',{attrs:{"class":"javascript"}},[_vm._v("\n"),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("import")]),_vm._v(" { Transfer } "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("from")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'veui'")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("import")]),_vm._v(" region "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("from")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'@/common/region'")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("import")]),_vm._v(" { includes } "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("from")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'lodash'")]),_vm._v("\n\n"),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("export")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("default")]),_vm._v(" {\n  "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("components")]),_vm._v(": {\n    "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'veui-transfer'")]),_vm._v(": Transfer\n  },\n  data () {\n    "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("return")]),_vm._v(" {\n      region\n    }\n  },\n  "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("methods")]),_vm._v(": {\n    filter (type, keyword, item, index, datasource) {\n      "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("return")]),_vm._v(" includes(item.label, keyword) && "),_c('span',{attrs:{"class":"hljs-regexp"}},[_vm._v("/北/")]),_vm._v(".test(item.label)\n    }\n  }\n}\n")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")])])])])]),_c('template',{slot:"desc"},[_c('p',[_vm._v("显示所有包含“北”的叶子项。")])])],2),_vm._v(" "),_c('p',[_vm._v("以扁平的方式显示已选项。")]),_vm._v(" "),_c('one-demo',[_c('one-demo-6f85a06'),_c('template',{slot:"source"},[_c('div',{pre:true},[_c('pre',[_c('code',{attrs:{"class":"hljs language-vue"}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_c('span',{attrs:{"class":"html"}},[_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("article")]),_vm._v(">")]),_vm._v("\n  "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("veui-transfer")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":datasource")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"region\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("v-model")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"selected\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("selected-show-mode")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"flat\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("veui-transfer")]),_vm._v(">")]),_vm._v("\n  "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("class")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"console\"")]),_vm._v(">")]),_vm._v("已选择：{{ selected }}"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("article")]),_vm._v(">")]),_vm._v("\n")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("template")]),_vm._v(">")]),_vm._v("\n\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")]),_c('span',{attrs:{"class":"javascript"}},[_vm._v("\n"),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("import")]),_vm._v(" { Transfer } "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("from")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'veui'")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("import")]),_vm._v(" region "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("from")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'@/common/region'")]),_vm._v("\n\n"),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("export")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("default")]),_vm._v(" {\n  "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("components")]),_vm._v(": {\n    "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'veui-transfer'")]),_vm._v(": Transfer\n  },\n  data () {\n    "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("return")]),_vm._v(" {\n      region,\n      "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("selected")]),_vm._v(": []\n    }\n  }\n}\n")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("script")]),_vm._v(">")])])])])]),_c('template',{slot:"desc"})],2),_vm._v(" "),_c('h2',{attrs:{"id":"api"}},[_vm._v("API")]),_vm._v(" "),_c('h3',{attrs:{"id":"属性"}},[_vm._v("属性")]),_vm._v(" "),_c('table',[_vm._m(1),_c('tbody',[_vm._m(2),_vm._m(3),_c('tr',[_vm._m(4),_vm._m(5),_c('td',[_vm._v("见描述")]),_c('td',[_vm._m(6),_vm._v(" "),_c('one-details',{attrs:{"summary":"参数详情"}},[_c('table',[_c('thead',[_c('tr',[_c('th',[_vm._v("名称")]),_c('th',[_vm._v("类型")]),_c('th',[_vm._v("描述")])])]),_c('tbody',[_c('tr',[_c('td',[_c('code',[_vm._v("type")])]),_c('td',[_c('code',[_vm._v("string")])]),_c('td',[_vm._v("枚举值："),_c('code',[_vm._v("candidate")]),_vm._v("、"),_c('code',[_vm._v("selected")]),_vm._v("，"),_c('code',[_vm._v("candidate")]),_vm._v(" 表示是备选列表触发的搜索，"),_c('code',[_vm._v("selected")]),_vm._v(" 表示是已选列表触发的搜索。")])]),_c('tr',[_c('td',[_c('code',[_vm._v("keyword")])]),_c('td',[_c('code',[_vm._v("string")])]),_c('td',[_vm._v("搜索关键词。")])]),_c('tr',[_c('td',[_c('code',[_vm._v("item")])]),_c('td',[_c('code',[_vm._v("Object")])]),_c('td',[_vm._v("当前遍历到的数据节点。")])]),_c('tr',[_c('td',[_c('code',[_vm._v("index")])]),_c('td',[_c('code',[_vm._v("number")])]),_c('td',[_vm._v("当前数据节点在兄弟节点中的索引。")])]),_c('tr',[_c('td',[_c('code',[_vm._v("datasource")])]),_c('td',[_c('code',[_vm._v("Array<{label: string, value: *}>")])]),_c('td',[_vm._v("与 "),_c('code',[_vm._v("datasource")]),_vm._v(" 属性一致。")])])])])]),_vm._v(" "),_c('one-details',{attrs:{"summary":"默认值"}},[_c('pre',[_c('code',{staticClass:"hljs language-js"},[_c('span',{staticClass:"hljs-keyword"},[_vm._v("import")]),_vm._v(" { includes } "),_c('span',{staticClass:"hljs-keyword"},[_vm._v("from")]),_vm._v(" "),_c('span',{staticClass:"hljs-string"},[_vm._v("'lodash'")]),_vm._v("\n\n"),_c('span',{staticClass:"hljs-function"},[_c('span',{staticClass:"hljs-keyword"},[_vm._v("function")]),_vm._v(" ("),_c('span',{staticClass:"hljs-params"},[_vm._v("keyword, item")]),_vm._v(") ")]),_vm._v("{\n  "),_c('span',{staticClass:"hljs-keyword"},[_vm._v("return")]),_vm._v(" includes(item.label, keyword)\n}")])])])],1)]),_vm._m(7),_vm._m(8),_vm._m(9),_c('tr',[_vm._m(10),_vm._m(11),_vm._m(12),_c('td',[_c('p',[_vm._v("选中框中选中项的显示方式。")]),_vm._v(" "),_c('one-details',{attrs:{"summary":"枚举值"}},[_c('table',[_c('thead',[_c('tr',[_c('th',[_vm._v("值")]),_c('th',[_vm._v("描述")])])]),_c('tbody',[_c('tr',[_c('td',[_c('code',[_vm._v("tree")])]),_c('td',[_vm._v("以树形结构展示。")])]),_c('tr',[_c('td',[_c('code',[_vm._v("flat")])]),_c('td',[_vm._v("以扁平方式展示，数据展开成一维数组。")])])])])])],1)]),_c('tr',[_vm._m(13),_vm._m(14),_c('td',[_vm._v("见描述")]),_c('td',[_vm._m(15),_vm._v(" "),_c('one-details',{attrs:{"summary":"默认值"}},[_c('pre',[_c('code',{staticClass:"hljs language-js"},[_c('span',{staticClass:"hljs-function"},[_c('span',{staticClass:"hljs-keyword"},[_vm._v("function")]),_vm._v(" ("),_c('span',{staticClass:"hljs-params"},[_vm._v("source")]),_vm._v(") ")]),_vm._v("{\n  "),_c('span',{staticClass:"hljs-keyword"},[_vm._v("return")]),_vm._v(" source.value\n}")])])])],1)])])]),_vm._v(" "),_c('h3',{attrs:{"id":"插槽"}},[_vm._v("插槽")]),_vm._v(" "),_vm._m(16),_vm._v(" "),_c('h3',{attrs:{"id":"作用域插槽"}},[_vm._v("作用域插槽")]),_vm._v(" "),_c('table',[_vm._m(17),_c('tbody',[_c('tr',[_vm._m(18),_c('td',[_c('p',[_vm._v("待选区内的每一项内容。")]),_vm._v(" "),_c('one-details',{attrs:{"summary":"作用域参数"}},[_c('table',[_c('thead',[_c('tr',[_c('th',[_vm._v("名称")]),_c('th',[_vm._v("类型")]),_c('th',[_vm._v("描述")])])]),_c('tbody',[_c('tr',[_c('td',[_c('code',[_vm._v("item")])]),_c('td',[_c('code',[_vm._v("Object")])]),_c('td',[_vm._v("节点数据。")])]),_c('tr',[_c('td',[_c('code',[_vm._v("index")])]),_c('td',[_c('code',[_vm._v("number")])]),_c('td',[_vm._v("当前节点在本层级（共父节点）中的索引。")])]),_c('tr',[_c('td',[_c('code',[_vm._v("depth")])]),_c('td',[_c('code',[_vm._v("number")])]),_c('td',[_vm._v("当前节点在树结构中的深度。")])])])])])],1)]),_c('tr',[_vm._m(19),_c('td',[_c('p',[_vm._v("已选区内的每一项内容。")]),_vm._v(" "),_c('one-details',{attrs:{"summary":"作用域参数"}},[_c('p',[_vm._v("如果 "),_c('code',[_vm._v("Transfer")]),_vm._v(" 组件的 "),_c('code',[_vm._v("selected-show-mode")]),_vm._v(" 为 "),_c('code',[_vm._v("tree")]),_vm._v("，则作用域参数与 "),_c('code',[_vm._v("candidate-item")]),_vm._v(" 一致；如果 "),_c('code',[_vm._v("selected-show-mode")]),_vm._v(" 为 "),_c('code',[_vm._v("flat")]),_vm._v("，则作用域参数为：")]),_vm._v(" "),_c('table',[_c('thead',[_c('tr',[_c('th',[_vm._v("名称")]),_c('th',[_vm._v("类型")]),_c('th',[_vm._v("描述")])])]),_c('tbody',[_c('tr',[_c('td',[_c('code',[_vm._v("item")])]),_c('td',[_c('code',[_vm._v("Object")])]),_c('td',[_vm._v("展开后的节点数据，每一条数据对应到最初树形结构数据的一个叶子节点，每一条数据都会有一个 "),_c('code',[_vm._v("items")]),_vm._v(" 属性，包含从树形结构的根节点到叶子节点的路径。")])]),_c('tr',[_c('td',[_c('code',[_vm._v("index")])]),_c('td',[_c('code',[_vm._v("number")])]),_c('td',[_vm._v("当前节点在展开数组中的索引。")])])])])])],1)]),_vm._m(20),_vm._m(21)])]),_vm._v(" "),_c('h3',{attrs:{"id":"图标"}},[_vm._v("图标")]),_vm._v(" "),_vm._m(22)],1)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h1',{attrs:{"id":"transfer-small穿梭框small"}},[_vm._v("Transfer "),_c('small',[_vm._v("穿梭框")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('thead',[_c('tr',[_c('th',[_vm._v("名称")]),_c('th',[_vm._v("类型")]),_c('th',[_vm._v("默认值")]),_c('th',[_vm._v("描述")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('tr',[_c('td',[_c('code',[_vm._v("datasource")])]),_c('td',[_c('code',[_vm._v("Array<Object>")])]),_c('td',[_c('code',[_vm._v("[]")])]),_c('td',[_vm._v("数据源，项目类型为 "),_c('code',[_vm._v("{label: string, value: *}")]),_vm._v("。")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('tr',[_c('td',[_c('code',[_vm._v("searchable")])]),_c('td',[_c('code',[_vm._v("boolean")])]),_c('td',[_c('code',[_vm._v("true")])]),_c('td',[_vm._v("是否允许搜索。")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',[_c('code',[_vm._v("filter")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',[_c('code',[_vm._v("function")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_vm._v("搜索过滤函数，签名为 "),_c('code',[_vm._v("function(type, keyword, item, index, datasource): boolean")]),_vm._v("。返回值为 "),_c('code',[_vm._v("false")]),_vm._v(" 的项目将被从结果中过滤掉。")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('tr',[_c('td',[_c('code',[_vm._v("selected")])]),_c('td',[_c('code',[_vm._v("Array")])]),_c('td',[_c('code',[_vm._v("[]")])]),_c('td',[_c('div',{staticClass:"badges custom-block"},[_c('p',[_c('code',[_vm._v("v-model")])])]),_vm._v(" "),_c('p',[_vm._v("当前选中的值，是 "),_c('code',[_vm._v("datasource")]),_vm._v(" 中选中项的 "),_c('code',[_vm._v("value")]),_vm._v(" 集合。")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('tr',[_c('td',[_c('code',[_vm._v("candidate-placeholder")])]),_c('td',[_c('code',[_vm._v("string")])]),_c('td',[_vm._v("-")]),_c('td',[_vm._v("待选区内搜索框的占位文本。")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('tr',[_c('td',[_c('code',[_vm._v("selected-placeholder")])]),_c('td',[_c('code',[_vm._v("string")])]),_c('td',[_vm._v("-")]),_c('td',[_vm._v("已选区内搜索框的占位文本。")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',[_c('code',[_vm._v("selected-show-mode")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',[_c('code',[_vm._v("string")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',[_c('code',[_vm._v("'tree'")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',[_c('code',[_vm._v("keys")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',[_c('code',[_vm._v("string|function")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_vm._v("自定义获取 "),_c('code',[_vm._v("datasource")]),_vm._v(" 中每一项的 "),_c('code',[_vm._v("value")]),_vm._v(" 值（具备唯一性）。可以用字符串的形式直接指定 "),_c('code',[_vm._v("datasource")]),_vm._v(" 中的哪个属性作为 "),_c('code',[_vm._v("value")]),_vm._v("，也可以传递一个函数更加灵活地去生成 "),_c('code',[_vm._v("value")]),_vm._v(" 值。")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('table',[_c('thead',[_c('tr',[_c('th',[_vm._v("名称")]),_c('th',[_vm._v("描述")])])]),_c('tbody',[_c('tr',[_c('td',[_c('code',[_vm._v("candidate-head")])]),_c('td',[_vm._v("待选区内顶部标题区域。")])]),_c('tr',[_c('td',[_c('code',[_vm._v("selected-head")])]),_c('td',[_vm._v("已选区内顶部标题区域。")])]),_c('tr',[_c('td',[_c('code',[_vm._v("candidate-title")])]),_c('td',[_vm._v("待选区内顶部标题文本区域。")])]),_c('tr',[_c('td',[_c('code',[_vm._v("selected-title")])]),_c('td',[_vm._v("已选区内顶部标题文本区域。")])]),_c('tr',[_c('td',[_c('code',[_vm._v("candidate-no-data")])]),_c('td',[_vm._v("数据源没数据时显示的内容。")])]),_c('tr',[_c('td',[_c('code',[_vm._v("selected-no-data")])]),_c('td',[_vm._v("没有已选项时显示的内容。")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('thead',[_c('tr',[_c('th',[_vm._v("名称")]),_c('th',[_vm._v("描述")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',[_c('code',[_vm._v("candidate-item")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',[_c('code',[_vm._v("selected-item")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('tr',[_c('td',[_c('code',[_vm._v("candidate-item-label")])]),_c('td',[_vm._v("待选区内每一项的文本区域。作用域参数与 "),_c('code',[_vm._v("candidate-item")]),_vm._v(" 一致。")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('tr',[_c('td',[_c('code',[_vm._v("selected-item-label")])]),_c('td',[_vm._v("已选区内每一项的文本区域。作用域参数与 "),_c('code',[_vm._v("selected-item")]),_vm._v(" 一致。")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('table',[_c('thead',[_c('tr',[_c('th',[_vm._v("名称")]),_c('th',[_vm._v("描述")])])]),_c('tbody',[_c('tr',[_c('td',[_c('code',[_vm._v("checked")])]),_c('td',[_vm._v("已选状态。")])]),_c('tr',[_c('td',[_c('code',[_vm._v("select")])]),_c('td',[_vm._v("待选择。")])]),_c('tr',[_c('td',[_c('code',[_vm._v("remove")])]),_c('td',[_vm._v("移除。")])]),_c('tr',[_c('td',[_c('code',[_vm._v("collapsed")])]),_c('td',[_vm._v("节点收起状态。")])]),_c('tr',[_c('td',[_c('code',[_vm._v("separator")])]),_c('td',[_vm._v("分隔符。")])])])])}]


// CONCATENATED MODULE: ./pages/development/components/transfer.vue?vue&type=template&id=52737b4f&scoped=true&

// EXTERNAL MODULE: ./components/OneDetails.vue + 4 modules
var OneDetails = __webpack_require__(395);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/demos/development/demo/transfer/base.vue?vue&type=template&id=d964e700&
var basevue_type_template_id_d964e700_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('article',[_c('veui-transfer',{attrs:{"datasource":_vm.region},model:{value:(_vm.selected),callback:function ($$v) {_vm.selected=$$v},expression:"selected"}}),_vm._v(" "),_c('div',{staticClass:"console"},[_vm._v("已选择："+_vm._s(_vm.selected))])],1)}
var basevue_type_template_id_d964e700_staticRenderFns = []


// CONCATENATED MODULE: ./components/demos/development/demo/transfer/base.vue?vue&type=template&id=d964e700&

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(2);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/lodash/isString.js
var isString = __webpack_require__(20);
var isString_default = /*#__PURE__*/__webpack_require__.n(isString);

// EXTERNAL MODULE: ./node_modules/lodash/remove.js
var remove = __webpack_require__(138);
var remove_default = /*#__PURE__*/__webpack_require__.n(remove);

// EXTERNAL MODULE: ./node_modules/lodash/uniq.js
var uniq = __webpack_require__(117);
var uniq_default = /*#__PURE__*/__webpack_require__.n(uniq);

// EXTERNAL MODULE: ./node_modules/lodash/omit.js
var omit = __webpack_require__(405);
var omit_default = /*#__PURE__*/__webpack_require__.n(omit);

// EXTERNAL MODULE: ./node_modules/lodash/includes.js
var includes = __webpack_require__(40);
var includes_default = /*#__PURE__*/__webpack_require__.n(includes);

// EXTERNAL MODULE: ./node_modules/lodash/difference.js
var difference = __webpack_require__(487);
var difference_default = /*#__PURE__*/__webpack_require__.n(difference);

// EXTERNAL MODULE: ./node_modules/lodash/find.js
var find = __webpack_require__(54);
var find_default = /*#__PURE__*/__webpack_require__.n(find);

// EXTERNAL MODULE: ./node_modules/lodash/isEqual.js
var isEqual = __webpack_require__(126);
var isEqual_default = /*#__PURE__*/__webpack_require__.n(isEqual);

// EXTERNAL MODULE: ./node_modules/veui-theme-one/icons/check.js
var check = __webpack_require__(463);

// EXTERNAL MODULE: ./node_modules/veui-theme-one/icons/arrow-right.js
var arrow_right = __webpack_require__(526);

// EXTERNAL MODULE: ./node_modules/veui-theme-one/icons/cross.js
var cross = __webpack_require__(452);

// EXTERNAL MODULE: ./node_modules/veui-theme-one/icons/angle-right.js
var angle_right = __webpack_require__(444);

// EXTERNAL MODULE: ./node_modules/veui/managers/config.js
var config = __webpack_require__(390);

// CONCATENATED MODULE: ./node_modules/veui-theme-one/components/Transfer.js





config["a" /* default */].defaults({
  icons: {
    checked: 'check',
    select: 'arrow-right',
    remove: 'cross',
    collapsed: 'angle-right',
    separator: 'angle-right'
  }
}, 'transfer');
// EXTERNAL MODULE: ./node_modules/veui/components/FilterPanel.vue + 5 modules
var FilterPanel = __webpack_require__(582);

// EXTERNAL MODULE: ./node_modules/veui/components/Tree/Tree.vue + 10 modules
var Tree = __webpack_require__(519);

// CONCATENATED MODULE: ./node_modules/veui/components/Tree/index.js

// EXTERNAL MODULE: ./node_modules/veui/components/Button.vue + 5 modules
var Button = __webpack_require__(406);

// EXTERNAL MODULE: ./node_modules/veui/components/Icon.vue + 2 modules
var Icon = __webpack_require__(53);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/veui-loader/lib??ref--11!./node_modules/veui/components/Transfer/_CandidatePanel.vue?vue&type=template&id=6baddf8d&
var _CandidatePanelvue_type_template_id_6baddf8d_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('veui-filter-panel',{staticClass:"veui-transfer-candidate-panel",attrs:{"datasource":_vm.datasource,"searchable":_vm.searchable,"filter":_vm.realFilter,"placeholder":_vm.placeholder},scopedSlots:_vm._u([{key:"default",fn:function(props){return [_c('veui-tree',{attrs:{"datasource":props.items,"expands":_vm.expands},on:{"update:expands":function($event){_vm.expands=$event},"click":_vm.select},scopedSlots:_vm._u([{key:"item",fn:function(props){return [_vm._t("item",[_c('div',{staticClass:"veui-transfer-candidate-item",class:{'veui-transfer-candidate-item-hidden': props.item.hidden}},[(props.item.children && props.item.children.length)?_c('span',{staticClass:"veui-tree-item-expand-switcher",on:{"click":function($event){$event.stopPropagation();_vm.toggle(props.item)}}},[_c('veui-icon',{attrs:{"name":_vm.icons.collapsed}})],1):_vm._e(),_vm._v(" "),_c('div',{staticClass:"veui-transfer-item-label",class:{'veui-transfer-candidate-item-label-selected': props.item.visuallySelected}},[_c('span',{staticClass:"veui-transfer-item-text"},[_vm._t("item-label",[_vm._v(_vm._s(props.item.label))],null,props)],2),_vm._v(" "),(!props.item.visuallySelected)?_c('veui-icon',{staticClass:"veui-transfer-candidate-icon-unselected",attrs:{"name":_vm.icons.select}}):_c('veui-icon',{staticClass:"veui-transfer-candidate-icon-selected",attrs:{"name":_vm.icons.checked}})],1)])],null,props)]}}])})]}}])},[_c('template',{slot:"head"},[_vm._t("head",[_vm._t("title",[_vm._v("备选列表")]),_vm._v(" "),_c('veui-button',{staticClass:"veui-transfer-select-all",attrs:{"ui":"link","disabled":!_vm.isSelectable},on:{"click":_vm.selectAll}},[_vm._v("全选")])])],2),_vm._v(" "),_c('template',{slot:"no-data"},[_vm._t("no-data",[_vm._v("没有备选项")])],2)],2)}
var _CandidatePanelvue_type_template_id_6baddf8d_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/veui/components/Transfer/_CandidatePanel.vue?vue&type=template&id=6baddf8d&

// EXTERNAL MODULE: ./node_modules/lodash/clone.js
var clone = __webpack_require__(563);
var clone_default = /*#__PURE__*/__webpack_require__.n(clone);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/veui-loader/lib??ref--11!./node_modules/veui/components/Transfer/_CandidatePanel.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var _CandidatePanelvue_type_script_lang_js_ = ({
  name: 'veui-candidate-panel',
  components: {
    'veui-filter-panel': FilterPanel["a" /* default */],
    'veui-tree': Tree["a" /* default */],
    'veui-button': Button["a" /* default */],
    'veui-icon': Icon["a" /* default */]
  },
  props: {
    datasource: Array,
    searchable: Boolean,
    filter: Function,
    placeholder: String,
    isSelectable: Boolean,
    expands: Array,
    icons: Object
  },
  data: function data() {
    return {
      localExpands: []
    };
  },
  watch: {
    expands: {
      handler: function handler(val, oldVal) {
        if (!isEqual_default()(val, oldVal)) {
          this.localExpands = clone_default()(this.expands);
        }
      },
      immediate: true
    },
    localExpands: function localExpands(val, oldVal) {
      if (!isEqual_default()(val, oldVal)) {
        this.$emit('update:expands', val);
      }
    }
  },
  methods: {
    realFilter: function realFilter(keyword, option) {
      return this.filter('candidate', keyword, option, this.datasource);
    },
    toggle: function toggle(option) {
      var expands = clone_default()(this.localExpands);

      var index = expands.indexOf(option.value);

      if (index > -1) {
        expands.splice(index, 1);
      } else {
        expands.push(option.value);
      }

      this.localExpands = expands;
    },
    selectAll: function selectAll() {
      this.$emit('selectall');
    },
    select: function select() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      this.$emit.apply(this, ['select'].concat(args));
    }
  }
});
// CONCATENATED MODULE: ./node_modules/veui/components/Transfer/_CandidatePanel.vue?vue&type=script&lang=js&
 /* harmony default export */ var Transfer_CandidatePanelvue_type_script_lang_js_ = (_CandidatePanelvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/veui/components/Transfer/_CandidatePanel.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Transfer_CandidatePanelvue_type_script_lang_js_,
  _CandidatePanelvue_type_template_id_6baddf8d_render,
  _CandidatePanelvue_type_template_id_6baddf8d_staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "_CandidatePanel.vue"
/* harmony default export */ var _CandidatePanel = (component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/veui-loader/lib??ref--11!./node_modules/veui/components/Transfer/_SelectedPanel.vue?vue&type=template&id=9244fb48&
var _SelectedPanelvue_type_template_id_9244fb48_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('veui-filter-panel',{ref:"selected",staticClass:"veui-transfer-selected-panel",class:{'veui-transfer-selected-flat': _vm.showMode === 'flat'},attrs:{"datasource":_vm.showMode === 'flat' ? _vm.flattenOptions : _vm.datasource,"searchable":_vm.searchable,"filter":_vm.realFilter,"placeholder":_vm.placeholder},scopedSlots:_vm._u([{key:"default",fn:function(props){return [(_vm.showMode === 'tree')?_c('veui-tree',{staticClass:"veui-transfer-selected-tree",attrs:{"datasource":props.items,"expands":_vm.localExpands},on:{"update:expands":function($event){_vm.localExpands=$event},"click":_vm.remove},scopedSlots:_vm._u([{key:"item",fn:function(props){return [_vm._t("item",[_c('div',{staticClass:"veui-transfer-selected-item",class:{'veui-transfer-selected-item-hidden': props.item.hidden}},[(props.item.children && props.item.children.length)?_c('span',{staticClass:"veui-tree-item-expand-switcher",on:{"click":function($event){$event.stopPropagation();_vm.toggle(props.item)}}},[_c('veui-icon',{attrs:{"name":_vm.icons.collapsed}})],1):_vm._e(),_vm._v(" "),_c('div',{staticClass:"veui-transfer-item-label"},[_c('span',{staticClass:"veui-transfer-item-text"},[_vm._t("item-label",[_vm._v(_vm._s(props.item.label))],null,props)],2),_vm._v(" "),_c('veui-icon',{staticClass:"veui-transfer-selected-icon-remove",attrs:{"name":_vm.icons.remove}})],1)])],null,props)]}}])}):_c('ul',{staticClass:"veui-transfer-selected-flat-items"},_vm._l((props.items),function(options,index){return _c('li',{key:options.items[options.items.length - 1].value,staticClass:"veui-transfer-selected-flat-item",class:{'veui-transfer-selected-flat-item-hidden': options.hidden},on:{"click":function($event){_vm.remove(options.items[options.items.length - 1], options.items.slice(0, options.items.length - 1).reverse())}}},[_vm._t("item",[_c('div',{staticClass:"veui-transfer-selected-flat-item-label"},[_vm._l((options.items),function(opt,index){return [_c('span',{key:'l-' + opt.value,staticClass:"veui-transfer-selected-flat-option-label"},[_vm._v(_vm._s(opt.label))]),_vm._v(" "),(index < options.items.length - 1)?_c('span',{key:'s-' + opt.value,staticClass:"veui-transfer-selected-flat-option-separator"},[_c('veui-icon',{attrs:{"name":_vm.icons.separator}})],1):_vm._e()]}),_vm._v(" "),_c('veui-icon',{staticClass:"veui-transfer-selected-flat-icon-remove",attrs:{"name":_vm.icons.remove}})],2)],{option:options.items,index:index})],2)}))]}}])},[_c('template',{slot:"head"},[_vm._t("head",[_vm._t("title",[_vm._v("已选列表")]),_vm._v(" "),_c('veui-button',{staticClass:"veui-transfer-remove-all",attrs:{"ui":"link","disabled":!_vm.isSelectable},on:{"click":_vm.removeAll}},[_vm._v("删除全部")])])],2),_vm._v(" "),_c('template',{slot:"no-data"},[_vm._t("no-data",[_vm._v("请从左侧选择")])],2)],2)}
var _SelectedPanelvue_type_template_id_9244fb48_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/veui/components/Transfer/_SelectedPanel.vue?vue&type=template&id=9244fb48&

// EXTERNAL MODULE: ./node_modules/lodash/get.js
var get = __webpack_require__(41);
var get_default = /*#__PURE__*/__webpack_require__.n(get);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/veui-loader/lib??ref--11!./node_modules/veui/components/Transfer/_SelectedPanel.vue?vue&type=script&lang=js&





//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var _SelectedPanelvue_type_script_lang_js_ = ({
  name: 'veui-selected-panel',
  components: {
    'veui-filter-panel': FilterPanel["a" /* default */],
    'veui-icon': Icon["a" /* default */],
    'veui-button': Button["a" /* default */],
    'veui-tree': Tree["a" /* default */]
  },
  props: {
    datasource: Array,
    showMode: String,
    searchable: Boolean,
    filter: Function,
    placeholder: String,
    isSelectable: Boolean,
    expands: Array,
    icons: Object
  },
  data: function data() {
    return {
      flattenOptions: [],
      localExpands: []
    };
  },
  watch: {
    expands: {
      handler: function handler(val, oldVal) {
        if (!isEqual_default()(val, oldVal)) {
          this.localExpands = clone_default()(this.expands);
        }
      },
      immediate: true
    },
    localExpands: function localExpands(val, oldVal) {
      if (!isEqual_default()(val, oldVal)) {
        this.$emit('update:expands', val);
      }
    },
    datasource: {
      handler: function handler(selectedOptions) {
        var _this = this;

        var walk = function walk(option, path, paths) {
          if (!option.children || !option.children.length) {
            paths.push(toConsumableArray_default()(path).concat([option]));
            return;
          }

          option.children.forEach(function (child) {
            walk(child, toConsumableArray_default()(path).concat([option]), paths);
          });
        };

        var paths = [];
        selectedOptions.forEach(function (option) {
          var itemPaths = [];
          walk(option, [], itemPaths);
          paths.push.apply(paths, itemPaths);
        });
        paths.forEach(function (path, index) {
          var option = get_default()(_this.flattenOptions, [index, 'items']);

          if (!option || !path.length === option.length || path.some(function (pathItem, index) {
            return option[index].value !== pathItem.value;
          })) {
            _this.flattenOptions[index] = {
              items: path
            };
          }
        });
        this.flattenOptions.splice(paths.length, this.flattenOptions.length - paths.length);
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    realFilter: function realFilter(keyword, option) {
      var isFlat = this.showMode === 'flat';
      option = isFlat ? option.items[option.items.length - 1] : option;
      return this.filter('selected', keyword, option, isFlat ? this.flattenOptions : this.datasource);
    },
    toggle: function toggle(option) {
      var expands = clone_default()(this.localExpands);

      var index = expands.indexOf(option.value);

      if (index > -1) {
        expands.splice(index, 1);
      } else {
        expands.push(option.value);
      }

      this.localExpands = expands;
    },
    removeAll: function removeAll() {
      this.$emit('removeall');
    },
    remove: function remove() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      this.$emit.apply(this, ['remove'].concat(args));
    }
  }
});
// CONCATENATED MODULE: ./node_modules/veui/components/Transfer/_SelectedPanel.vue?vue&type=script&lang=js&
 /* harmony default export */ var Transfer_SelectedPanelvue_type_script_lang_js_ = (_SelectedPanelvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/veui/components/Transfer/_SelectedPanel.vue





/* normalize component */

var _SelectedPanel_component = Object(componentNormalizer["a" /* default */])(
  Transfer_SelectedPanelvue_type_script_lang_js_,
  _SelectedPanelvue_type_template_id_9244fb48_render,
  _SelectedPanelvue_type_template_id_9244fb48_staticRenderFns,
  false,
  null,
  null,
  null
  
)

_SelectedPanel_component.options.__file = "_SelectedPanel.vue"
/* harmony default export */ var _SelectedPanel = (_SelectedPanel_component.exports);
// EXTERNAL MODULE: ./node_modules/veui/mixins/ui.js
var ui = __webpack_require__(391);

// EXTERNAL MODULE: ./node_modules/veui/mixins/input.js
var input = __webpack_require__(402);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/veui-loader/lib??ref--11!./node_modules/veui/components/Transfer/Transfer.vue?vue&type=script&lang=js&




















function defaultFilter(type, keyword, option, datasource) {
  return includes_default()(option.label, keyword);
}

/* harmony default export */ var Transfervue_type_script_lang_js_ = ({
  name: 'veui-transfer',
  components: {
    'veui-filter-panel': FilterPanel["a" /* default */],
    'veui-icon': Icon["a" /* default */],
    'veui-tree': Tree["a" /* default */],
    'veui-button': Button["a" /* default */],
    'veui-candidate-panel': _CandidatePanel,
    'veui-selected-panel': _SelectedPanel
  },
  mixins: [ui["a" /* default */], input["a" /* default */]],
  props: {
    datasource: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    searchable: {
      type: Boolean,
      default: true
    },
    filter: {
      type: Function,
      default: defaultFilter
    },
    selected: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    candidatePlaceholder: String,
    selectedPlaceholder: String,
    selectedShowMode: {
      type: String,
      default: 'tree',
      validator: function validator(value) {
        return includes_default()(['tree', 'flat'], value);
      }
    },
    keys: {
      type: [String, Function],
      default: function _default() {
        return function (source) {
          return source.value;
        };
      }
    }
  },
  model: {
    prop: 'selected',
    event: 'select'
  },
  data: function data() {
    return {
      candidateOptions: [],
      selectedOptions: [],
      rootAllCount: 0,
      rootPartCount: 0,
      candidateExpands: [],
      selectedExpands: []
    };
  },
  created: function created() {
    this.correct();
    this.setSelectedOptions(this.cloneSelectedOptions());
  },
  computed: {
    isSelectable: function isSelectable() {
      return !this.realDisabled && !this.realReadonly;
    },
    realKeys: function realKeys() {
      var _this = this;

      if (isString_default()(this.keys)) {
        return function (source) {
          return source[_this.keys];
        };
      }

      return this.keys;
    }
  },
  watch: {
    datasource: {
      handler: function handler(v, oldV) {
        var _this2 = this;

        if (!isEqual_default()(v, oldV)) {
          var walk = function walk(datasource, options) {
            datasource.forEach(function (source, index) {
              var option = omit_default()(source, 'children');

              option.value = _this2.realKeys(source);

              if (_this2.hasChild(source)) {
                _this2.$set(option, 'children', []);

                walk(source.children, option.children);
              }

              _this2.$set(options, index, option);
            });
          };

          walk(this.datasource, this.candidateOptions);
          this.correct();
          this.setSelectedOptions(this.cloneSelectedOptions());
        }
      },
      immediate: true
    },
    selected: function selected(v, oldV) {
      if (difference_default()(v, oldV).length || difference_default()(v, this.getSelectedValuesFromSelectedOptions()).length) {
        this.correct();
        this.setSelectedOptions(this.cloneSelectedOptions());
      }
    }
  },
  methods: {
    // 判断节点是否被选中：
    // 1、如果是叶子节点，直接根据 selected 属性判断。
    // 2、如果是非叶子节点，则该节点下所有子级节点都全部选择了，当前节点才算被选中了。
    isSelected: function isSelected(option) {
      return this.hasChild(option) ? option.allCount === option.children.length : option.selected;
    },
    // 取出 this.selectedOptions 中的 values 值，返回一个一维数组。
    getSelectedValuesFromSelectedOptions: function getSelectedValuesFromSelectedOptions() {
      var _this3 = this;

      var values = [];

      var walk = function walk() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this3.selectedOptions;
        options.forEach(function (option) {
          if (_this3.hasChild(option)) {
            walk(option.children);
          } else {
            values.push(option.value);
          }
        });
      };

      walk();
      return values;
    },
    emitSelect: function emitSelect() {
      this.$emit('select', this.getSelectedValuesFromSelectedOptions());
    },
    selectAll: function selectAll() {
      var _this4 = this;

      if (!this.isSelectable) {
        return;
      }

      var walk = function walk(options) {
        options.forEach(function (option) {
          if (_this4.hasChild(option)) {
            _this4.setOptionCount(option, option.children.length, 0);

            walk(option.children);
          } else {
            _this4.setLeafSelected(option, true);
          }

          _this4.$set(option, 'visuallySelected', true);
        });
      };

      walk(this.candidateOptions);
      this.setSelectedOptions(this.cloneSelectedOptions());
      this.emitSelect();
    },
    removeAll: function removeAll() {
      var _this5 = this;

      if (!this.isSelectable) {
        return;
      }

      var walk = function walk(options) {
        options.forEach(function (option) {
          if (_this5.hasChild(option)) {
            _this5.setOptionCount(option, 0, 0);

            walk(option.children);
          } else {
            _this5.setLeafSelected(option, false);
          }

          _this5.$set(option, 'visuallySelected', false);
        });
      };

      walk(this.candidateOptions);
      this.setSelectedOptions([]);
      this.emitSelect();
    },
    // 从左侧添加选中项
    //
    // 接收的参数为：
    //  option ：当前被选中的节点
    //
    // 注意： parents 来自于 this.candidateOptions ，内部的节点数据和 this.candidateOptions 中的节点数据是相等的。
    //
    // 执行步骤为：
    // 1、以 this.candidateOptions 为主要标记目标。
    // 2、如果当前选中节点 option 是叶子节点，则设置其被选中（ option.selected=true ）。
    // 3、如果当前选中节点 option 是非叶子节点，则在 option 中标记“全选（ option.allCount=option.children.length, option.partCount=0 ）”。
    // 4、依次标记祖先节点，刷新祖先节点中的 allCount 和 partCount 计数。
    // 5、如果 option 是非叶子节点，则标记所有子孙节点为“全选（ allCount=children.length, partCount=0, selected=true ）”。
    // 6、从之前选中的节点树中（ this.selectedOptions ）中解析出每个节点的状态（目前只有展开/收起状态 expanded ）。
    // 7、从 this.candidateOptions 中剥离出选中的节点及其父节点，并与6步中解析出的状态进行合并，得到新的 this.selectedOptions 。
    // 8、抛出 select 事件，带上一维的选中的节点的 value 值数组。
    select: function select(option) {
      if (!this.isSelectable) {
        return;
      }

      var chain = this.findChain(this.candidateOptions, option.value);
      option = chain[chain.length - 1];
      var parents = chain.slice(0, chain.length - 1).reverse();

      if (this.hasChild(option)) {
        this.setOptionCount(option, option.children.length, 0);
      } else {
        this.setLeafSelected(option, true);
      }

      this.$set(option, 'visuallySelected', true);
      this.markParentsChain(parents);
      this.selectAllChildren(option, true);
      this.setSelectedOptions(this.cloneSelectedOptions());
      this.emitSelect();
    },
    // 从右侧移除选中项。
    //
    // 接收的参数为：
    //  option :待移除的节点
    //
    // 注意：parents 来自于 this.selectedOptions ，内部的节点数据和 this.candidateOptions 中的节点数据是完全不相等的。
    //
    // 执行步骤为：
    // 1、以 this.candidateOptions 为主要标记目标。
    // 2、按照 parents 的最右侧开始遍历（即从树根开始），找到 parents 对应到 this.candidateOptions 中的 parents 祖先节点数组 candidateParents。
    // 3、找到 option 对应到 this.candidateOptions 中的节点 candidateOption。
    // 4、如果 candidateOption 没有子孙节点，就直接标记 candidateOption 上的选中状态（ selected ）为 false 。
    // 5、如果 candidateOption 有子孙节点，则标记 candidateOption 上的“子级中全选的节点总数（ allCount ）”为 0，“子级中部分选择的节点总数（ partCount ）”为0。
    // 6、依次刷新 candidateParents 中的 allCount 和 partCount 标记。
    // 7、如果 candidateOption 有子孙节点的话，则将其子孙节点全部设为未选中状态（ allCount=0 、 partCount=0 、 selected=false ）。
    // 8、从之前选中的节点树中（ this.selectedOptions ）中解析出每个节点的状态（目前只有展开/收起状态 expanded ）。
    // 9、从 this.candidateOptions 中剥离出选中的节点及其父节点，并与8步中解析出的状态进行合并，得到新的 this.selectedOptions 。
    // 10、抛出 select 事件，带上一维的选中的节点的 value 值数组。
    remove: function remove(option) {
      if (!this.isSelectable) {
        return;
      } // 先找到在 this.candidateOptions 里面对应的 option 和 parents 数组


      var chain = this.findChain(this.candidateOptions, option.value);
      option = chain[chain.length - 1];
      var parents = chain.slice(0, chain.length - 1).reverse();

      if (this.hasChild(option)) {
        this.setOptionCount(option, 0, 0);
      } else {
        this.setLeafSelected(option, false);
      }

      this.$set(option, 'visuallySelected', false);
      this.markParentsChain(parents);
      this.selectAllChildren(option, false);
      this.setSelectedOptions(this.cloneSelectedOptions());
      this.emitSelect();
    },
    setSelectedOptions: function setSelectedOptions(options) {
      var _this$selectedOptions;

      (_this$selectedOptions = this.selectedOptions).splice.apply(_this$selectedOptions, [0, this.selectedOptions.length].concat(toConsumableArray_default()(options)));
    },
    // 更新祖先节点中的选择标记（ selected 、 allCount 、 partCount ）
    markParentsChain: function markParentsChain(parents) {
      var _this6 = this;

      parents.forEach(function (parent) {
        var allCount = 0;
        var partCount = 0;
        parent.children.forEach(function (child) {
          if (_this6.hasChild(child)) {
            if (child.allCount === child.children.length) {
              allCount += 1;
            } else if (child.allCount > 0 || child.partCount > 0) {
              partCount += 1;
            }
          } else if (child.selected) {
            allCount += 1;
          }
        });

        _this6.setOptionCount(parent, allCount, partCount);

        _this6.$set(parent, 'visuallySelected', _this6.isSelected(parent));
      });
    },
    checkOwnProperty: function checkOwnProperty(obj, property) {
      return Object.prototype.hasOwnProperty.call(obj, property);
    },
    setLeafSelected: function setLeafSelected(option, selected) {
      this.$set(option, 'selected', selected);

      if (this.checkOwnProperty(option, 'allCount')) {
        this.$set(option, 'allCount', undefined);
      }

      if (this.checkOwnProperty(option, 'partCount')) {
        this.$set(option, 'partCount', undefined);
      }
    },
    setOptionCount: function setOptionCount(option, allCount, partCount) {
      this.$set(option, 'allCount', allCount);
      this.$set(option, 'partCount', partCount);

      if (this.checkOwnProperty(option, 'selected')) {
        this.$set(option, 'selected', undefined);
      }
    },
    hasChild: function hasChild(option) {
      return option.children && option.children.length;
    },
    // 从 this.candidateOptions 中深克隆一份 selectedOptions 。
    cloneSelectedOptions: function cloneSelectedOptions() {
      var _this7 = this;

      var walk = function walk(candidateOptions, selectedOptions) {
        var newSelectedOptions = [];
        candidateOptions.forEach(function (candidateOption) {
          if (candidateOption.allCount || candidateOption.partCount || candidateOption.selected) {
            var relatedSelectedOption = find_default()(selectedOptions, function (selectedOption) {
              return selectedOption.value === candidateOption.value;
            });

            var newSelectedOption = omit_default()(candidateOption, 'children');

            if (_this7.hasChild(candidateOption)) {
              newSelectedOption.children = walk(candidateOption.children, relatedSelectedOption && relatedSelectedOption.children); // 如果右侧没有相同的 option ，说明当前这个 option 是新选中的。
              // 对于新选中的 option ，要保持左侧的展开收起状态。

              if (!relatedSelectedOption) {
                var expanded = includes_default()(_this7.candidateExpands, newSelectedOption.value);

                if (expanded) {
                  _this7.selectedExpands.push(newSelectedOption.value);

                  uniq_default()(_this7.selectedExpands);
                } else {
                  remove_default()(_this7.selectedExpands, newSelectedOption.value);
                }
              }
            }

            newSelectedOptions.push(newSelectedOption);
          }
        });
        return newSelectedOptions;
      };

      return walk(this.candidateOptions, this.selectedOptions);
    },
    selectAllChildren: function selectAllChildren(option, selected) {
      var _this8 = this;

      if (this.hasChild(option)) {
        option.children.forEach(function (child) {
          if (_this8.hasChild(child)) {
            _this8.setOptionCount(child, selected ? child.children.length : 0, 0);

            _this8.selectAllChildren(child, selected);
          } else {
            _this8.setLeafSelected(child, selected);
          }

          _this8.$set(child, 'visuallySelected', _this8.isSelected(child));
        });
      }
    },
    // 有可能用户传进来的 selected 没有在 datasource 里面，所以此处要处理一下
    correct: function correct() {
      var _this9 = this;

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.candidateOptions;
      var allCount = 0;
      var partCount = 0;
      options.forEach(function (option) {
        if (_this9.hasChild(option)) {
          var _this9$correct = _this9.correct(option.children),
              all = _this9$correct.allCount,
              part = _this9$correct.partCount;

          _this9.setOptionCount(option, all, part);

          if (all === option.children.length) {
            allCount += 1;
          } else if (all > 0 || part > 0) {
            partCount += 1;
          }
        } else {
          _this9.setLeafSelected(option, _this9.selected.some(function (v) {
            return v === option.value;
          }));

          allCount += option.selected ? 1 : 0;
        }

        _this9.$set(option, 'visuallySelected', _this9.isSelected(option));
      });

      if (options === this.candidateOptions) {
        this.rootAllCount = allCount;
        this.rootPartCount = partCount;
      }

      return {
        allCount: allCount,
        partCount: partCount
      };
    },
    findChain: function findChain(options, value) {
      var _this10 = this;

      var walk = function walk(options) {
        var chain = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
        var currentChain = [];
        var result = options.some(function (option) {
          if (option.value === value) {
            currentChain.push(option);
            return true;
          }

          if (_this10.hasChild(option)) {
            currentChain.push(option);
            return walk(option.children, currentChain);
          }
        }); // 找到了目标 value ，说明这条链路是正确的

        if (result) {
          chain.push.apply(chain, currentChain);
        }

        return result;
      };

      var chain = [];
      walk(options, chain);
      return chain;
    }
  },
  render: function render(h) {
    var _this12 = this;

    function generateHead(type) {
      var headSlotName = "".concat(type, "-head");
      var head = this.$slots[headSlotName] ? h('template', {
        slot: 'head'
      }, this.$slots[headSlotName]) : null;
      var titleSlotName = "".concat(type, "-title");
      var title = !head && this.$slots[titleSlotName] ? h('template', {
        slot: 'title'
      }, this.$slots[titleSlotName]) : null;
      return [head, title];
    }

    function generateItem(type) {
      var _this11 = this;

      var itemSlotName = "".concat(type, "-item");
      var item = this.$scopedSlots[itemSlotName] ? function (props) {
        return _this11.$scopedSlots[itemSlotName](props);
      } : null;
      var itemLabelSlotName = "".concat(type, "-item-label");
      var itemLabel = !item && this.$scopedSlots[itemLabelSlotName] ? function (props) {
        return _this11.$scopedSlots[itemLabelSlotName](props);
      } : null;
      return {
        item: item,
        'item-label': itemLabel
      };
    }

    function generateNoData(type) {
      var slotName = "".concat(type, "-no-data");
      return this.$slots[slotName] ? h('template', {
        slot: 'no-data'
      }, this.$slots[slotName]) : null;
    }

    return h('div', {
      class: {
        'veui-input-invalid': this.realInvalid,
        'veui-transfer': true,
        'veui-transfer-disabled': !this.isSelectable
      },
      props: {
        ui: this.ui
      }
    }, [h(_CandidatePanel, {
      props: {
        datasource: this.candidateOptions,
        searchable: this.searchable,
        filter: this.filter,
        placeholder: this.candidatePlaceholder,
        isSelectable: this.isSelectable,
        icons: this.icons,
        expands: this.candidateExpands
      },
      on: {
        'update:expands': function updateExpands(val) {
          _this12.candidateExpands = val;
        },
        select: function select() {
          _this12.select.apply(_this12, arguments);
        },
        selectall: function selectall() {
          _this12.selectAll.apply(_this12, arguments);
        }
      },
      scopedSlots: generateItem.call(this, 'candidate')
    }, toConsumableArray_default()(generateHead.call(this, 'candidate')).concat([generateNoData.call(this, 'candidate')])), h(_SelectedPanel, {
      props: {
        datasource: this.selectedOptions,
        showMode: this.selectedShowMode,
        searchable: this.searchable,
        filter: this.filter,
        placeholder: this.selectedPlaceholder,
        isSelectable: this.isSelectable,
        expands: this.selectedExpands,
        icons: this.icons
      },
      on: {
        'update:expands': function updateExpands(val) {
          _this12.selectedExpands = val;
        },
        remove: function remove() {
          _this12.remove.apply(_this12, arguments);
        },
        removeall: function removeall() {
          _this12.removeAll.apply(_this12, arguments);
        }
      },
      scopedSlots: generateItem.call(this, 'selected')
    }, toConsumableArray_default()(generateHead.call(this, 'selected')).concat([generateNoData.call(this, 'selected')]))]);
  }
});
// CONCATENATED MODULE: ./node_modules/veui/components/Transfer/Transfer.vue?vue&type=script&lang=js&
 /* harmony default export */ var Transfer_Transfervue_type_script_lang_js_ = (Transfervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/veui-theme-one/components/transfer.less?vue&type=style&index=0&lang=less&
var transfervue_type_style_index_0_lang_less_ = __webpack_require__(1200);

// CONCATENATED MODULE: ./node_modules/veui/components/Transfer/Transfer.vue
var Transfer_render, Transfer_staticRenderFns





/* normalize component */

var Transfer_component = Object(componentNormalizer["a" /* default */])(
  Transfer_Transfervue_type_script_lang_js_,
  Transfer_render,
  Transfer_staticRenderFns,
  false,
  null,
  null,
  null
  
)

Transfer_component.options.__file = "Transfer.vue"
/* harmony default export */ var Transfer = (Transfer_component.exports);
// EXTERNAL MODULE: ./common/region.js
var region = __webpack_require__(460);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/demos/development/demo/transfer/base.vue?vue&type=script&lang=js&


/* harmony default export */ var basevue_type_script_lang_js_ = ({
  components: {
    'veui-transfer': Transfer
  },
  data: function data() {
    return {
      region: region["a" /* default */],
      selected: []
    };
  }
});
// CONCATENATED MODULE: ./components/demos/development/demo/transfer/base.vue?vue&type=script&lang=js&
 /* harmony default export */ var transfer_basevue_type_script_lang_js_ = (basevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./components/demos/development/demo/transfer/base.vue?vue&type=style&index=0&lang=less&docs=true&
var basevue_type_style_index_0_lang_less_docs_true_ = __webpack_require__(1202);

// CONCATENATED MODULE: ./components/demos/development/demo/transfer/base.vue






/* normalize component */

var base_component = Object(componentNormalizer["a" /* default */])(
  transfer_basevue_type_script_lang_js_,
  basevue_type_template_id_d964e700_render,
  basevue_type_template_id_d964e700_staticRenderFns,
  false,
  null,
  null,
  null
  
)

base_component.options.__file = "base.vue"
/* harmony default export */ var base = (base_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/demos/development/demo/transfer/no-search.vue?vue&type=template&id=d47b7bc8&
var no_searchvue_type_template_id_d47b7bc8_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('article',[_c('veui-transfer',{attrs:{"datasource":_vm.region,"searchable":false}})],1)}
var no_searchvue_type_template_id_d47b7bc8_staticRenderFns = []


// CONCATENATED MODULE: ./components/demos/development/demo/transfer/no-search.vue?vue&type=template&id=d47b7bc8&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/demos/development/demo/transfer/no-search.vue?vue&type=script&lang=js&


/* harmony default export */ var no_searchvue_type_script_lang_js_ = ({
  components: {
    'veui-transfer': Transfer
  },
  data: function data() {
    return {
      region: region["a" /* default */]
    };
  }
});
// CONCATENATED MODULE: ./components/demos/development/demo/transfer/no-search.vue?vue&type=script&lang=js&
 /* harmony default export */ var transfer_no_searchvue_type_script_lang_js_ = (no_searchvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./components/demos/development/demo/transfer/no-search.vue?vue&type=style&index=0&lang=less&docs=true&
var no_searchvue_type_style_index_0_lang_less_docs_true_ = __webpack_require__(1204);

// CONCATENATED MODULE: ./components/demos/development/demo/transfer/no-search.vue






/* normalize component */

var no_search_component = Object(componentNormalizer["a" /* default */])(
  transfer_no_searchvue_type_script_lang_js_,
  no_searchvue_type_template_id_d47b7bc8_render,
  no_searchvue_type_template_id_d47b7bc8_staticRenderFns,
  false,
  null,
  null,
  null
  
)

no_search_component.options.__file = "no-search.vue"
/* harmony default export */ var no_search = (no_search_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/demos/development/demo/transfer/custom-search.vue?vue&type=template&id=594539ea&
var custom_searchvue_type_template_id_594539ea_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('article',[_c('veui-transfer',{attrs:{"datasource":_vm.region,"filter":_vm.filter}})],1)}
var custom_searchvue_type_template_id_594539ea_staticRenderFns = []


// CONCATENATED MODULE: ./components/demos/development/demo/transfer/custom-search.vue?vue&type=template&id=594539ea&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/demos/development/demo/transfer/custom-search.vue?vue&type=script&lang=js&



/* harmony default export */ var custom_searchvue_type_script_lang_js_ = ({
  components: {
    'veui-transfer': Transfer
  },
  data: function data() {
    return {
      region: region["a" /* default */]
    };
  },
  methods: {
    filter: function filter(type, keyword, item, index, datasource) {
      return includes_default()(item.label, keyword) && /北/.test(item.label);
    }
  }
});
// CONCATENATED MODULE: ./components/demos/development/demo/transfer/custom-search.vue?vue&type=script&lang=js&
 /* harmony default export */ var transfer_custom_searchvue_type_script_lang_js_ = (custom_searchvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./components/demos/development/demo/transfer/custom-search.vue?vue&type=style&index=0&lang=less&docs=true&
var custom_searchvue_type_style_index_0_lang_less_docs_true_ = __webpack_require__(1206);

// EXTERNAL MODULE: ./components/demos/development/demo/transfer/custom-search.vue?vue&type=custom&index=0&blockType=docs
var custom_searchvue_type_custom_index_0_blockType_docs = __webpack_require__(1208);
var custom_searchvue_type_custom_index_0_blockType_docs_default = /*#__PURE__*/__webpack_require__.n(custom_searchvue_type_custom_index_0_blockType_docs);

// CONCATENATED MODULE: ./components/demos/development/demo/transfer/custom-search.vue






/* normalize component */

var custom_search_component = Object(componentNormalizer["a" /* default */])(
  transfer_custom_searchvue_type_script_lang_js_,
  custom_searchvue_type_template_id_594539ea_render,
  custom_searchvue_type_template_id_594539ea_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* custom blocks */

if (typeof custom_searchvue_type_custom_index_0_blockType_docs_default.a === 'function') custom_searchvue_type_custom_index_0_blockType_docs_default()(custom_search_component)

custom_search_component.options.__file = "custom-search.vue"
/* harmony default export */ var custom_search = (custom_search_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/demos/development/demo/transfer/flat.vue?vue&type=template&id=e6f94f56&
var flatvue_type_template_id_e6f94f56_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('article',[_c('veui-transfer',{attrs:{"datasource":_vm.region,"selected-show-mode":"flat"},model:{value:(_vm.selected),callback:function ($$v) {_vm.selected=$$v},expression:"selected"}}),_vm._v(" "),_c('div',{staticClass:"console"},[_vm._v("已选择："+_vm._s(_vm.selected))])],1)}
var flatvue_type_template_id_e6f94f56_staticRenderFns = []


// CONCATENATED MODULE: ./components/demos/development/demo/transfer/flat.vue?vue&type=template&id=e6f94f56&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/demos/development/demo/transfer/flat.vue?vue&type=script&lang=js&


/* harmony default export */ var flatvue_type_script_lang_js_ = ({
  components: {
    'veui-transfer': Transfer
  },
  data: function data() {
    return {
      region: region["a" /* default */],
      selected: []
    };
  }
});
// CONCATENATED MODULE: ./components/demos/development/demo/transfer/flat.vue?vue&type=script&lang=js&
 /* harmony default export */ var transfer_flatvue_type_script_lang_js_ = (flatvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./components/demos/development/demo/transfer/flat.vue?vue&type=style&index=0&lang=less&docs=true&
var flatvue_type_style_index_0_lang_less_docs_true_ = __webpack_require__(1209);

// CONCATENATED MODULE: ./components/demos/development/demo/transfer/flat.vue






/* normalize component */

var flat_component = Object(componentNormalizer["a" /* default */])(
  transfer_flatvue_type_script_lang_js_,
  flatvue_type_template_id_e6f94f56_render,
  flatvue_type_template_id_e6f94f56_staticRenderFns,
  false,
  null,
  null,
  null
  
)

flat_component.options.__file = "flat.vue"
/* harmony default export */ var flat = (flat_component.exports);
// EXTERNAL MODULE: ./components/OneDemo.vue + 4 modules
var OneDemo = __webpack_require__(394);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/veui-loader/lib??ref--11!./pages/development/components/transfer.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ var transfervue_type_script_lang_js_ = ({
  components: {
    OneDetails: OneDetails["a" /* default */],
    'one-demo-460e291': base,
    'one-demo-b716e77': no_search,
    'one-demo-e836116': custom_search,
    'one-demo-6f85a06': flat,
    OneDemo: OneDemo["a" /* default */]
  }
});
// CONCATENATED MODULE: ./pages/development/components/transfer.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_transfervue_type_script_lang_js_ = (transfervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./assets/styles/post.styl?vue&type=style&index=0&id=52737b4f&lang=stylus&scoped=true&
var postvue_type_style_index_0_id_52737b4f_lang_stylus_scoped_true_ = __webpack_require__(1211);

// CONCATENATED MODULE: ./pages/development/components/transfer.vue






/* normalize component */

var transfer_component = Object(componentNormalizer["a" /* default */])(
  components_transfervue_type_script_lang_js_,
  transfervue_type_template_id_52737b4f_scoped_true_render,
  staticRenderFns,
  false,
  null,
  "52737b4f",
  null
  
)

transfer_component.options.__file = "transfer.vue"
/* harmony default export */ var transfer = __webpack_exports__["default"] = (transfer_component.exports);

/***/ }),

/***/ 388:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(397);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(6).default
var update = add("011bdead", content, true, {"sourceMap":false});

/***/ }),

/***/ 389:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(399);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(6).default
var update = add("375c42f8", content, true, {"sourceMap":false});

/***/ }),

/***/ 394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/OneDemo.vue?vue&type=template&id=60514566&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('article',{staticClass:"one-demo",class:{ expanded: _vm.localExpanded }},[_c('section',{staticClass:"demo"},[_vm._t("default")],2),_vm._v(" "),(_vm.$slots.desc)?_c('section',{staticClass:"desc"},[_vm._t("desc")],2):_vm._e(),_vm._v(" "),(_vm.$slots.source)?_c('section',{ref:"source",staticClass:"source",style:({ height: _vm.localExpanded ? ((_vm.sourceHeight || 0) + "px") : '0' })},[_vm._t("source")],2):_vm._e(),_vm._v(" "),_c('button',{staticClass:"toggle",on:{"click":function($event){_vm.localExpanded = !_vm.localExpanded}}},[_c('veui-icon',{staticClass:"arrow",attrs:{"name":"angle-right-small"}}),_vm._v(" "+_vm._s(_vm.localExpanded ? '隐藏代码' : '显示代码'))],1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/OneDemo.vue?vue&type=template&id=60514566&scoped=true&

// EXTERNAL MODULE: ./node_modules/veui/components/Icon.vue + 2 modules
var Icon = __webpack_require__(53);

// EXTERNAL MODULE: ./node_modules/veui-theme-one/icons/angle-right-small.js
var angle_right_small = __webpack_require__(393);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/OneDemo.vue?vue&type=script&lang=js&


/* harmony default export */ var OneDemovue_type_script_lang_js_ = ({
  name: 'one-demo',
  components: {
    'veui-icon': Icon["a" /* default */]
  },
  props: {
    expanded: Boolean
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
// EXTERNAL MODULE: ./components/OneDemo.vue?vue&type=style&index=0&id=60514566&lang=stylus&scoped=true&
var OneDemovue_type_style_index_0_id_60514566_lang_stylus_scoped_true_ = __webpack_require__(398);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/OneDemo.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_OneDemovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "60514566",
  null
  
)

component.options.__file = "OneDemo.vue"
/* harmony default export */ var OneDemo = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/OneDetails.vue?vue&type=template&id=1bf0130e&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:{
    'one-details': true,
    expanded: _vm.expanded
  }},[_c('button',{staticClass:"summary",on:{"click":_vm.toggle}},[_c('veui-icon',{staticClass:"arrow",attrs:{"name":"angle-right-small"}}),_vm._v(" "+_vm._s(_vm.summary))],1),_vm._v(" "),_c('div',{ref:"content",staticClass:"content",style:(_vm.style),on:{"transitionend":function($event){_vm.stable = true}}},[_vm._t("default")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/OneDetails.vue?vue&type=template&id=1bf0130e&scoped=true&

// EXTERNAL MODULE: ./node_modules/veui/components/Icon.vue + 2 modules
var Icon = __webpack_require__(53);

// EXTERNAL MODULE: ./node_modules/veui-theme-one/icons/angle-right-small.js
var angle_right_small = __webpack_require__(393);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/OneDetails.vue?vue&type=script&lang=js&


/* harmony default export */ var OneDetailsvue_type_script_lang_js_ = ({
  name: 'one-details',
  components: {
    'veui-icon': Icon["a" /* default */]
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
// EXTERNAL MODULE: ./components/OneDetails.vue?vue&type=style&index=0&id=1bf0130e&lang=stylus&scoped=true&
var OneDetailsvue_type_style_index_0_id_1bf0130e_lang_stylus_scoped_true_ = __webpack_require__(396);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/OneDetails.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_OneDetailsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "1bf0130e",
  null
  
)

component.options.__file = "OneDetails.vue"
/* harmony default export */ var OneDetails = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_index_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_stylus_loader_index_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OneDetails_vue_vue_type_style_index_0_id_1bf0130e_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(388);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_index_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_stylus_loader_index_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OneDetails_vue_vue_type_style_index_0_id_1bf0130e_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_index_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_stylus_loader_index_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OneDetails_vue_vue_type_style_index_0_id_1bf0130e_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_index_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_stylus_loader_index_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OneDetails_vue_vue_type_style_index_0_id_1bf0130e_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 397:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, "\n.one-details[data-v-1bf0130e] {\n  overflow: hidden;\n}\n.summary[data-v-1bf0130e] {\n  border: none;\n  background: none;\n  padding-left: 0;\n  cursor: help;\n  outline: none;\n}\n.summary[data-v-1bf0130e]:hover {\n  color: #333;\n}\n.content[data-v-1bf0130e] {\n  overflow: hidden;\n  transition: height 0.3s;\n}\n.arrow[data-v-1bf0130e] {\n  vertical-align: top;\n  margin-top: 0.35em;\n  transition: transform 0.3s;\n}\n.expanded > .summary > .arrow[data-v-1bf0130e] {\n  transform: rotateZ(90deg);\n}\n", ""]);

// exports


/***/ }),

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_index_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_stylus_loader_index_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OneDemo_vue_vue_type_style_index_0_id_60514566_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(389);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_index_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_stylus_loader_index_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OneDemo_vue_vue_type_style_index_0_id_60514566_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_index_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_stylus_loader_index_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OneDemo_vue_vue_type_style_index_0_id_60514566_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_index_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_stylus_loader_index_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OneDemo_vue_vue_type_style_index_0_id_60514566_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 399:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, "\n.one-demo[data-v-60514566] {\n  overflow: hidden;\n}\n.arrow[data-v-60514566] {\n  transition: transform 0.3s;\n  vertical-align: -2px;\n  transform: rotateZ(90deg);\n}\n.one-demo.expanded .arrow[data-v-60514566] {\n  transform: rotateZ(270deg);\n}\n.demo[data-v-60514566] {\n  border: 1px solid #eee;\n  padding: 30px;\n}\n.desc[data-v-60514566] {\n  border: 1px solid #eee;\n  padding: 18px 20px;\n  background-color: #fcfcfc;\n}\n.source[data-v-60514566] {\n  transition: height 0.3s;\n}\n.source[data-v-60514566] pre {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.desc[data-v-60514566],\n.source[data-v-60514566] pre,\n.toggle[data-v-60514566] {\n  margin-top: -1px;\n}\n.toggle[data-v-60514566] {\n  position: relative;\n  display: block;\n  width: 100%;\n  height: 40px;\n  border: 1px solid #eee;\n  background-color: #fff;\n  transition: background-color 0.3s;\n  outline: none;\n}\n.toggle[data-v-60514566]:hover,\n.toggle.focus-visible[data-v-60514566] {\n  background-color: #fafafa;\n}\n", ""]);

// exports


/***/ }),

/***/ 444:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var veui_components_Icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53);

veui_components_Icon__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].register({
  "angle-right": {
    "width": "14",
    "height": "14",
    "paths": [{
      "d": "M10.84 7.13l.47-.47L5.66 1l-.95.94 4.72 4.72-4.72 4.71.95.94 5.18-5.18z",
      "fill-rule": "evenodd"
    }]
  }
});

/***/ }),

/***/ 452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var veui_components_Icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53);

veui_components_Icon__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].register({
  "cross": {
    "width": "14",
    "height": "14",
    "paths": [{
      "d": "M7 6.14L1.86 1 1 1.86 6.14 7 1 12.14l.86.86L7 7.86 12.14 13l.86-.86L7.86 7 13 1.86 12.14 1 7 6.14z",
      "fill-rule": "evenodd"
    }]
  }
});

/***/ }),

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ([{
  value: '10000',
  label: '中国',
  children: [{
    value: '1000',
    label: '华北地区',
    children: [{
      value: '1',
      label: '北京',
      children: [{
        value: '378',
        label: '东城'
      }, {
        value: '379',
        label: '西城'
      }, {
        value: '380',
        label: '崇文'
      }, {
        value: '381',
        label: '宣武'
      }, {
        value: '382',
        label: '朝阳'
      }, {
        value: '383',
        label: '丰台'
      }, {
        value: '384',
        label: '石景山'
      }, {
        value: '385',
        label: '海淀'
      }, {
        value: '386',
        label: '门头沟'
      }, {
        value: '387',
        label: '房山'
      }, {
        value: '388',
        label: '通州'
      }, {
        value: '389',
        label: '顺义'
      }, {
        value: '390',
        label: '昌平'
      }, {
        value: '391',
        label: '大兴'
      }, {
        value: '392',
        label: '怀柔'
      }, {
        value: '393',
        label: '平谷'
      }, {
        value: '394',
        label: '密云'
      }, {
        value: '395',
        label: '延庆'
      }]
    }, {
      value: '3',
      label: '天津',
      children: [{
        value: '415',
        label: '和平'
      }, {
        value: '416',
        label: '河东'
      }, {
        value: '417',
        label: '河西'
      }, {
        value: '418',
        label: '南开'
      }, {
        value: '419',
        label: '河北'
      }, {
        value: '420',
        label: '红桥'
      }, {
        value: '421',
        label: '塘沽'
      }, {
        value: '422',
        label: '汉沽'
      }, {
        value: '423',
        label: '大港'
      }, {
        value: '424',
        label: '东丽'
      }, {
        value: '425',
        label: '西青'
      }, {
        value: '426',
        label: '津南'
      }, {
        value: '427',
        label: '北辰'
      }, {
        value: '428',
        label: '武清'
      }, {
        value: '429',
        label: '宝坻'
      }, {
        value: '430',
        label: '宁河'
      }, {
        value: '431',
        label: '静海'
      }, {
        value: '432',
        label: '蓟县'
      }, {
        value: '475',
        label: '滨海'
      }]
    }, {
      value: '13',
      label: '河北',
      children: [{
        value: '304',
        label: '保定'
      }, {
        value: '305',
        label: '沧州'
      }, {
        value: '306',
        label: '承德'
      }, {
        value: '307',
        label: '廊坊'
      }, {
        value: '325',
        label: '秦皇岛'
      }, {
        value: '326',
        label: '邢台'
      }, {
        value: '327',
        label: '石家庄'
      }, {
        value: '329',
        label: '唐山'
      }, {
        value: '330',
        label: '邯郸'
      }, {
        value: '331',
        label: '张家口'
      }, {
        value: '332',
        label: '衡水'
      }]
    }, {
      value: '22',
      label: '内蒙古',
      children: [{
        value: '158',
        label: '赤峰'
      }, {
        value: '159',
        label: '阿拉善盟'
      }, {
        value: '160',
        label: '兴安盟'
      }, {
        value: '161',
        label: '通辽'
      }, {
        value: '162',
        label: '巴彦淖尔'
      }, {
        value: '163',
        label: '乌兰察布'
      }, {
        value: '164',
        label: '乌海'
      }, {
        value: '165',
        label: '锡林郭勒盟'
      }, {
        value: '166',
        label: '呼伦贝尔'
      }, {
        value: '167',
        label: '呼和浩特'
      }, {
        value: '168',
        label: '鄂尔多斯'
      }, {
        value: '169',
        label: '包头'
      }]
    }, {
      value: '26',
      label: '山西',
      children: [{
        value: '205',
        label: '晋城'
      }, {
        value: '206',
        label: '晋中'
      }, {
        value: '209',
        label: '长治'
      }, {
        value: '210',
        label: '吕梁'
      }, {
        value: '211',
        label: '临汾'
      }, {
        value: '212',
        label: '忻州'
      }, {
        value: '213',
        label: '朔州'
      }, {
        value: '214',
        label: '太原'
      }, {
        value: '215',
        label: '阳泉'
      }, {
        value: '216',
        label: '运城'
      }, {
        value: '217',
        label: '大同'
      }]
    }]
  }, {
    value: '1001',
    label: '东北地区',
    children: [{
      value: '15',
      label: '黑龙江',
      children: [{
        value: '333',
        label: '鸡西'
      }, {
        value: '334',
        label: '佳木斯'
      }, {
        value: '335',
        label: '哈尔滨'
      }, {
        value: '336',
        label: '牡丹江'
      }, {
        value: '337',
        label: '齐齐哈尔'
      }, {
        value: '338',
        label: '七台河'
      }, {
        value: '339',
        label: '绥化'
      }, {
        value: '340',
        label: '双鸭山'
      }, {
        value: '341',
        label: '伊春'
      }, {
        value: '342',
        label: '大庆'
      }, {
        value: '343',
        label: '大兴安岭'
      }, {
        value: '344',
        label: '鹤岗'
      }, {
        value: '345',
        label: '黑河'
      }]
    }, {
      value: '18',
      label: '吉林',
      children: [{
        value: '38',
        label: '吉林'
      }, {
        value: '39',
        label: '白城'
      }, {
        value: '40',
        label: '长春'
      }, {
        value: '41',
        label: '辽源'
      }, {
        value: '42',
        label: '白山'
      }, {
        value: '43',
        label: '四平'
      }, {
        value: '44',
        label: '松原'
      }, {
        value: '45',
        label: '通化'
      }, {
        value: '46',
        label: '延吉'
      }, {
        value: '47',
        label: '延边'
      }]
    }, {
      value: '21',
      label: '辽宁',
      children: [{
        value: '144',
        label: '丹东'
      }, {
        value: '145',
        label: '本溪'
      }, {
        value: '146',
        label: '锦州'
      }, {
        value: '147',
        label: '朝阳'
      }, {
        value: '148',
        label: '辽阳'
      }, {
        value: '149',
        label: '盘锦'
      }, {
        value: '150',
        label: '阜新'
      }, {
        value: '151',
        label: '鞍山'
      }, {
        value: '152',
        label: '抚顺'
      }, {
        value: '153',
        label: '沈阳'
      }, {
        value: '154',
        label: '铁岭'
      }, {
        value: '155',
        label: '大连'
      }, {
        value: '156',
        label: '营口'
      }, {
        value: '157',
        label: '葫芦岛'
      }]
    }]
  }, {
    value: '1002',
    label: '华东地区',
    children: [{
      value: '2',
      label: '上海',
      children: [{
        value: '396',
        label: '黄浦'
      }, {
        value: '397',
        label: '卢湾'
      }, {
        value: '398',
        label: '徐汇'
      }, {
        value: '399',
        label: '长宁'
      }, {
        value: '400',
        label: '静安'
      }, {
        value: '401',
        label: '普陀'
      }, {
        value: '402',
        label: '闸北'
      }, {
        value: '403',
        label: '虹口'
      }, {
        value: '404',
        label: '杨浦'
      }, {
        value: '405',
        label: '闵行'
      }, {
        value: '406',
        label: '宝山'
      }, {
        value: '407',
        label: '嘉定'
      }, {
        value: '408',
        label: '浦东'
      }, {
        value: '409',
        label: '金山'
      }, {
        value: '410',
        label: '松江'
      }, {
        value: '411',
        label: '青浦'
      }, {
        value: '412',
        label: '南汇'
      }, {
        value: '413',
        label: '奉贤'
      }, {
        value: '414',
        label: '崇明'
      }]
    }, {
      value: '9',
      label: '安徽',
      children: [{
        value: '127',
        label: '淮北'
      }, {
        value: '128',
        label: '安庆'
      }, {
        value: '129',
        label: '巢湖'
      }, {
        value: '130',
        label: '池州'
      }, {
        value: '131',
        label: '滁州'
      }, {
        value: '132',
        label: '黄山'
      }, {
        value: '133',
        label: '淮南'
      }, {
        value: '134',
        label: '马鞍山'
      }, {
        value: '135',
        label: '六安'
      }, {
        value: '136',
        label: '宣城'
      }, {
        value: '137',
        label: '宿州'
      }, {
        value: '138',
        label: '铜陵'
      }, {
        value: '139',
        label: '芜湖'
      }, {
        value: '140',
        label: '阜阳'
      }, {
        value: '141',
        label: '蚌埠'
      }, {
        value: '142',
        label: '合肥'
      }, {
        value: '143',
        label: '亳州'
      }]
    }, {
      value: '5',
      label: '福建',
      children: [{
        value: '48',
        label: '莆田'
      }, {
        value: '49',
        label: '南平'
      }, {
        value: '50',
        label: '龙岩'
      }, {
        value: '51',
        label: '宁德'
      }, {
        value: '52',
        label: '泉州'
      }, {
        value: '66',
        label: '三明'
      }, {
        value: '70',
        label: '厦门'
      }, {
        value: '80',
        label: '漳州'
      }, {
        value: '81',
        label: '福州'
      }]
    }, {
      value: '19',
      label: '江苏',
      children: [{
        value: '53',
        label: '淮安'
      }, {
        value: '54',
        label: '常州'
      }, {
        value: '55',
        label: '南京'
      }, {
        value: '56',
        label: '南通'
      }, {
        value: '57',
        label: '连云港'
      }, {
        value: '58',
        label: '徐州'
      }, {
        value: '59',
        label: '苏州'
      }, {
        value: '60',
        label: '宿迁'
      }, {
        value: '61',
        label: '泰州'
      }, {
        value: '62',
        label: '无锡'
      }, {
        value: '63',
        label: '盐城'
      }, {
        value: '64',
        label: '扬州'
      }]
    }, {
      value: '20',
      label: '江西',
      children: [{
        value: '67',
        label: '九江'
      }, {
        value: '68',
        label: '吉安'
      }, {
        value: '69',
        label: '景德镇'
      }, {
        value: '71',
        label: '萍乡'
      }, {
        value: '72',
        label: '南昌'
      }, {
        value: '73',
        label: '新余'
      }, {
        value: '74',
        label: '上饶'
      }, {
        value: '75',
        label: '宜春'
      }, {
        value: '76',
        label: '鹰潭'
      }, {
        value: '77',
        label: '赣州'
      }, {
        value: '78',
        label: '抚州'
      }]
    }, {
      value: '25',
      label: '山东',
      children: [{
        value: '196',
        label: '济南'
      }, {
        value: '197',
        label: '济宁'
      }, {
        value: '198',
        label: '莱芜'
      }, {
        value: '199',
        label: '聊城'
      }, {
        value: '200',
        label: '德州'
      }, {
        value: '201',
        label: '临沂'
      }, {
        value: '202',
        label: '青岛'
      }, {
        value: '203',
        label: '日照'
      }, {
        value: '204',
        label: '潍坊'
      }, {
        value: '207',
        label: '淄博'
      }, {
        value: '208',
        label: '泰安'
      }, {
        value: '218',
        label: '威海'
      }, {
        value: '219',
        label: '烟台'
      }, {
        value: '220',
        label: '东营'
      }, {
        value: '221',
        label: '枣庄'
      }, {
        value: '222',
        label: '菏泽'
      }, {
        value: '223',
        label: '滨州'
      }]
    }, {
      value: '32',
      label: '浙江',
      children: [{
        value: '272',
        label: '金华'
      }, {
        value: '273',
        label: '嘉兴'
      }, {
        value: '274',
        label: '衢州'
      }, {
        value: '275',
        label: '丽水'
      }, {
        value: '276',
        label: '宁波'
      }, {
        value: '277',
        label: '绍兴'
      }, {
        value: '278',
        label: '温州'
      }, {
        value: '279',
        label: '台州'
      }, {
        value: '280',
        label: '杭州'
      }, {
        value: '281',
        label: '舟山'
      }, {
        value: '282',
        label: '湖州'
      }]
    }]
  }, {
    value: '1003',
    label: '华中地区',
    children: [{
      value: '14',
      label: '河南',
      children: [{
        value: '308',
        label: '焦作'
      }, {
        value: '309',
        label: '安阳'
      }, {
        value: '310',
        label: '开封'
      }, {
        value: '311',
        label: '洛阳'
      }, {
        value: '312',
        label: '漯河'
      }, {
        value: '313',
        label: '平顶山'
      }, {
        value: '314',
        label: '驻马店'
      }, {
        value: '315',
        label: '南阳'
      }, {
        value: '316',
        label: '濮阳'
      }, {
        value: '317',
        label: '新乡'
      }, {
        value: '318',
        label: '信阳'
      }, {
        value: '319',
        label: '许昌'
      }, {
        value: '320',
        label: '商丘'
      }, {
        value: '321',
        label: '三门峡'
      }, {
        value: '322',
        label: '郑州'
      }, {
        value: '323',
        label: '鹤壁'
      }, {
        value: '324',
        label: '周口'
      }, {
        value: '476',
        label: '济源'
      }]
    }, {
      value: '16',
      label: '湖北',
      children: [{
        value: '346',
        label: '荆门'
      }, {
        value: '347',
        label: '荆州'
      }, {
        value: '348',
        label: '黄石'
      }, {
        value: '349',
        label: '黄冈'
      }, {
        value: '364',
        label: '潜江'
      }, {
        value: '365',
        label: '孝感'
      }, {
        value: '366',
        label: '恩施'
      }, {
        value: '367',
        label: '随州'
      }, {
        value: '368',
        label: '神农架'
      }, {
        value: '369',
        label: '十堰'
      }, {
        value: '370',
        label: '襄樊'
      }, {
        value: '371',
        label: '武汉'
      }, {
        value: '372',
        label: '仙桃'
      }, {
        value: '373',
        label: '天门'
      }, {
        value: '375',
        label: '咸宁'
      }, {
        value: '376',
        label: '宜昌'
      }, {
        value: '377',
        label: '鄂州'
      }]
    }, {
      value: '17',
      label: '湖南',
      children: [{
        value: '350',
        label: '怀化'
      }, {
        value: '351',
        label: '常德'
      }, {
        value: '352',
        label: '长沙'
      }, {
        value: '353',
        label: '郴州'
      }, {
        value: '354',
        label: '娄底'
      }, {
        value: '355',
        label: '邵阳'
      }, {
        value: '356',
        label: '湘潭'
      }, {
        value: '357',
        label: '湘西'
      }, {
        value: '358',
        label: '张家界'
      }, {
        value: '359',
        label: '益阳'
      }, {
        value: '360',
        label: '衡阳'
      }, {
        value: '361',
        label: '岳阳'
      }, {
        value: '362',
        label: '永州'
      }, {
        value: '363',
        label: '株洲'
      }]
    }]
  }, {
    value: '1004',
    label: '华南地区',
    children: [{
      value: '4',
      label: '广东',
      children: [{
        value: '82',
        label: '江门'
      }, {
        value: '83',
        label: '揭阳'
      }, {
        value: '84',
        label: '广州'
      }, {
        value: '85',
        label: '潮州'
      }, {
        value: '86',
        label: '茂名'
      }, {
        value: '88',
        label: '梅州'
      }, {
        value: '89',
        label: '清远'
      }, {
        value: '90',
        label: '佛山'
      }, {
        value: '91',
        label: '汕头'
      }, {
        value: '92',
        label: '汕尾'
      }, {
        value: '93',
        label: '深圳'
      }, {
        value: '94',
        label: '韶关'
      }, {
        value: '109',
        label: '阳江'
      }, {
        value: '110',
        label: '湛江'
      }, {
        value: '111',
        label: '云浮'
      }, {
        value: '112',
        label: '中山'
      }, {
        value: '113',
        label: '珠海'
      }, {
        value: '114',
        label: '肇庆'
      }, {
        value: '115',
        label: '河源'
      }, {
        value: '116',
        label: '东莞'
      }, {
        value: '117',
        label: '惠州'
      }]
    }, {
      value: '12',
      label: '广西',
      children: [{
        value: '95',
        label: '桂林'
      }, {
        value: '96',
        label: '贵港'
      }, {
        value: '98',
        label: '防城港'
      }, {
        value: '99',
        label: '南宁'
      }, {
        value: '100',
        label: '来宾'
      }, {
        value: '101',
        label: '柳州'
      }, {
        value: '102',
        label: '钦州'
      }, {
        value: '103',
        label: '梧州'
      }, {
        value: '104',
        label: '北海'
      }, {
        value: '105',
        label: '玉林'
      }, {
        value: '106',
        label: '河池'
      }, {
        value: '107',
        label: '贺州'
      }, {
        value: '108',
        label: '百色'
      }, {
        value: '478',
        label: '崇左'
      }]
    }, {
      value: '8',
      label: '海南',
      children: [{
        value: '296',
        label: '东方'
      }, {
        value: '297',
        label: '琼海'
      }, {
        value: '298',
        label: '三亚'
      }, {
        value: '299',
        label: '文昌'
      }, {
        value: '300',
        label: '五指山'
      }, {
        value: '301',
        label: '万宁'
      }, {
        value: '302',
        label: '海口'
      }, {
        value: '303',
        label: '儋州'
      }, {
        value: '484',
        label: '定安县'
      }, {
        value: '485',
        label: '屯昌县'
      }, {
        value: '486',
        label: '陵水黎族自治县'
      }, {
        value: '487',
        label: '澄迈县'
      }, {
        value: '488',
        label: '保亭黎族苗族自治县'
      }, {
        value: '489',
        label: '琼中黎族苗族自治县'
      }, {
        value: '490',
        label: '乐东黎族自治县'
      }, {
        value: '491',
        label: '临高县'
      }, {
        value: '492',
        label: '昌江黎族自治县'
      }, {
        value: '493',
        label: '白沙黎族自治县'
      }]
    }]
  }, {
    value: '1005',
    label: '西南地区',
    children: [{
      value: '33',
      label: '重庆',
      children: [{
        value: '433',
        label: '渝中'
      }, {
        value: '434',
        label: '大渡口'
      }, {
        value: '435',
        label: '江北'
      }, {
        value: '436',
        label: '沙坪坝'
      }, {
        value: '437',
        label: '九龙坡'
      }, {
        value: '438',
        label: '南岸'
      }, {
        value: '439',
        label: '北碚'
      }, {
        value: '440',
        label: '万盛'
      }, {
        value: '441',
        label: '双桥'
      }, {
        value: '442',
        label: '渝北'
      }, {
        value: '443',
        label: '巴南'
      }, {
        value: '444',
        label: '万州'
      }, {
        value: '445',
        label: '涪陵'
      }, {
        value: '446',
        label: '黔江'
      }, {
        value: '447',
        label: '长寿'
      }, {
        value: '448',
        label: '江津'
      }, {
        value: '449',
        label: '合川'
      }, {
        value: '450',
        label: '永川'
      }, {
        value: '451',
        label: '南川'
      }, {
        value: '452',
        label: '綦江'
      }, {
        value: '453',
        label: '潼南'
      }, {
        value: '454',
        label: '铜梁'
      }, {
        value: '455',
        label: '大足'
      }, {
        value: '456',
        label: '荣昌'
      }, {
        value: '457',
        label: '璧山'
      }, {
        value: '458',
        label: '梁平'
      }, {
        value: '459',
        label: '城口'
      }, {
        value: '460',
        label: '丰都'
      }, {
        value: '461',
        label: '垫江'
      }, {
        value: '462',
        label: '武隆'
      }, {
        value: '463',
        label: '忠县'
      }, {
        value: '464',
        label: '开县'
      }, {
        value: '465',
        label: '云阳'
      }, {
        value: '466',
        label: '奉节'
      }, {
        value: '467',
        label: '巫山'
      }, {
        value: '468',
        label: '巫溪'
      }, {
        value: '469',
        label: '石柱'
      }, {
        value: '470',
        label: '秀山'
      }, {
        value: '471',
        label: '酉阳'
      }, {
        value: '472',
        label: '彭水'
      }]
    }, {
      value: '10',
      label: '贵州',
      children: [{
        value: '118',
        label: '贵阳'
      }, {
        value: '119',
        label: '安顺'
      }, {
        value: '120',
        label: '六盘水'
      }, {
        value: '121',
        label: '黔南'
      }, {
        value: '122',
        label: '黔东南'
      }, {
        value: '123',
        label: '黔西南'
      }, {
        value: '124',
        label: '毕节'
      }, {
        value: '125',
        label: '铜仁'
      }, {
        value: '126',
        label: '遵义'
      }]
    }, {
      value: '28',
      label: '四川',
      children: [{
        value: '224',
        label: '广安'
      }, {
        value: '225',
        label: '广元'
      }, {
        value: '226',
        label: '成都'
      }, {
        value: '227',
        label: '眉山'
      }, {
        value: '228',
        label: '凉山'
      }, {
        value: '229',
        label: '绵阳'
      }, {
        value: '230',
        label: '攀枝花'
      }, {
        value: '231',
        label: '南充'
      }, {
        value: '232',
        label: '德阳'
      }, {
        value: '233',
        label: '乐山'
      }, {
        value: '234',
        label: '泸州'
      }, {
        value: '235',
        label: '内江'
      }, {
        value: '236',
        label: '甘孜'
      }, {
        value: '237',
        label: '遂宁'
      }, {
        value: '238',
        label: '资阳'
      }, {
        value: '247',
        label: '巴中'
      }, {
        value: '250',
        label: '达州'
      }, {
        value: '251',
        label: '雅安'
      }, {
        value: '252',
        label: '阿坝'
      }, {
        value: '253',
        label: '自贡'
      }, {
        value: '254',
        label: '宜宾'
      }]
    }, {
      value: '29',
      label: '西藏',
      children: [{
        value: '268',
        label: '那曲'
      }, {
        value: '269',
        label: '拉萨'
      }, {
        value: '270',
        label: '林芝'
      }, {
        value: '271',
        label: '日喀则'
      }, {
        value: '480',
        label: '昌都'
      }, {
        value: '497',
        label: '山南'
      }, {
        value: '498',
        label: '阿里'
      }]
    }, {
      value: '31',
      label: '云南',
      children: [{
        value: '283',
        label: '楚雄'
      }, {
        value: '284',
        label: '昆明'
      }, {
        value: '285',
        label: '丽江'
      }, {
        value: '286',
        label: '德宏'
      }, {
        value: '287',
        label: '临沧'
      }, {
        value: '288',
        label: '曲靖'
      }, {
        value: '289',
        label: '保山'
      }, {
        value: '290',
        label: '普洱'
      }, {
        value: '291',
        label: '文山'
      }, {
        value: '292',
        label: '大理'
      }, {
        value: '293',
        label: '红河'
      }, {
        value: '294',
        label: '昭通'
      }, {
        value: '295',
        label: '玉溪'
      }, {
        value: '481',
        label: '怒江'
      }, {
        value: '482',
        label: '迪庆'
      }, {
        value: '483',
        label: '西双版纳'
      }]
    }]
  }, {
    value: '1006',
    label: '西北地区',
    children: [{
      value: '11',
      label: '甘肃',
      children: [{
        value: '255',
        label: '酒泉'
      }, {
        value: '256',
        label: '金昌'
      }, {
        value: '257',
        label: '嘉峪关'
      }, {
        value: '258',
        label: '兰州'
      }, {
        value: '259',
        label: '陇南'
      }, {
        value: '260',
        label: '平凉'
      }, {
        value: '261',
        label: '临夏'
      }, {
        value: '262',
        label: '庆阳'
      }, {
        value: '263',
        label: '定西'
      }, {
        value: '264',
        label: '武威'
      }, {
        value: '265',
        label: '天水'
      }, {
        value: '266',
        label: '张掖'
      }, {
        value: '267',
        label: '白银'
      }, {
        value: '477',
        label: '甘南'
      }]
    }, {
      value: '23',
      label: '宁夏',
      children: [{
        value: '170',
        label: '固原'
      }, {
        value: '171',
        label: '石嘴山'
      }, {
        value: '172',
        label: '吴忠'
      }, {
        value: '173',
        label: '中卫'
      }, {
        value: '174',
        label: '银川'
      }]
    }, {
      value: '24',
      label: '青海',
      children: [{
        value: '175',
        label: '西宁'
      }, {
        value: '176',
        label: '海东'
      }, {
        value: '177',
        label: '海西'
      }, {
        value: '178',
        label: '玉树'
      }, {
        value: '479',
        label: '海南'
      }, {
        value: '494',
        label: '海北'
      }, {
        value: '495',
        label: '黄南'
      }, {
        value: '496',
        label: '果洛'
      }]
    }, {
      value: '27',
      label: '陕西',
      children: [{
        value: '239',
        label: '宝鸡'
      }, {
        value: '240',
        label: '安康'
      }, {
        value: '241',
        label: '商洛'
      }, {
        value: '242',
        label: '铜川'
      }, {
        value: '243',
        label: '渭南'
      }, {
        value: '244',
        label: '西安'
      }, {
        value: '245',
        label: '咸阳'
      }, {
        value: '246',
        label: '延安'
      }, {
        value: '248',
        label: '汉中'
      }, {
        value: '249',
        label: '榆林'
      }]
    }, {
      value: '30',
      label: '新疆',
      children: [{
        value: '179',
        label: '哈密'
      }, {
        value: '180',
        label: '博尔塔拉'
      }, {
        value: '181',
        label: '昌吉'
      }, {
        value: '182',
        label: '阿勒泰'
      }, {
        value: '183',
        label: '喀什'
      }, {
        value: '184',
        label: '克拉玛依'
      }, {
        value: '185',
        label: '阿克苏'
      }, {
        value: '186',
        label: '克孜勒苏柯尔克孜'
      }, {
        value: '187',
        label: '石河子'
      }, {
        value: '188',
        label: '塔城'
      }, {
        value: '189',
        label: '五家渠'
      }, {
        value: '190',
        label: '吐鲁番'
      }, {
        value: '191',
        label: '巴音郭楞'
      }, {
        value: '192',
        label: '乌鲁木齐'
      }, {
        value: '193',
        label: '伊犁'
      }, {
        value: '195',
        label: '和田'
      }, {
        value: '499',
        label: '阿拉尔'
      }, {
        value: '500',
        label: '图木舒克'
      }]
    }]
  }, {
    value: '1007',
    label: '港澳台',
    children: [{
      value: '34',
      label: '香港'
    }, {
      value: '35',
      label: '台湾'
    }, {
      value: '36',
      label: '澳门'
    }]
  }]
}, {
  value: '7',
  label: '日本'
}, {
  value: '37',
  label: '其他国家'
}]);

/***/ }),

/***/ 463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var veui_components_Icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53);

veui_components_Icon__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].register({
  "check": {
    "width": "14",
    "height": "14",
    "paths": [{
      "d": "M5.44 11L2 7.09l1.01-1.04L5.44 8.9l5.5-5.9L12 4.07z",
      "fill-rule": "evenodd"
    }]
  }
});

/***/ }),

/***/ 510:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(672);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(6).default
var update = add("1290fc14", content, true, {"sourceMap":false});

/***/ }),

/***/ 519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/veui-loader/lib??ref--11!./node_modules/veui/components/Tree/Tree.vue?vue&type=template&id=31d65651&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (this.$scopedSlots.item)?_c('veui-tree-node',{attrs:{"datasource":_vm.localDatasource,"item-click":_vm.itemClick,"icons":_vm.icons,"ui":_vm.realUi},on:{"toggle":_vm.toggle,"click":_vm.handleItemClick},scopedSlots:_vm._u([{key:"item",fn:function(props){return [_vm._t("item",null,null,props)]}}])}):(this.$scopedSlots['item-label'])?_c('veui-tree-node',{attrs:{"datasource":_vm.localDatasource,"item-click":_vm.itemClick,"icons":_vm.icons,"ui":_vm.realUi},on:{"toggle":_vm.toggle,"click":_vm.handleItemClick},scopedSlots:_vm._u([{key:"item-label",fn:function(props){return [_vm._t("item-label",null,null,props)]}}])}):_c('veui-tree-node',{attrs:{"datasource":_vm.localDatasource,"item-click":_vm.itemClick,"icons":_vm.icons,"ui":_vm.realUi},on:{"toggle":_vm.toggle,"click":_vm.handleItemClick}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/veui/components/Tree/Tree.vue?vue&type=template&id=31d65651&

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(2);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// EXTERNAL MODULE: ./node_modules/lodash/uniq.js
var uniq = __webpack_require__(117);
var uniq_default = /*#__PURE__*/__webpack_require__.n(uniq);

// EXTERNAL MODULE: ./node_modules/lodash/filter.js
var filter = __webpack_require__(669);
var filter_default = /*#__PURE__*/__webpack_require__.n(filter);

// EXTERNAL MODULE: ./node_modules/lodash/omit.js
var omit = __webpack_require__(405);
var omit_default = /*#__PURE__*/__webpack_require__.n(omit);

// EXTERNAL MODULE: ./node_modules/lodash/clone.js
var clone = __webpack_require__(563);
var clone_default = /*#__PURE__*/__webpack_require__.n(clone);

// EXTERNAL MODULE: ./node_modules/lodash/remove.js
var remove = __webpack_require__(138);
var remove_default = /*#__PURE__*/__webpack_require__.n(remove);

// EXTERNAL MODULE: ./node_modules/lodash/includes.js
var includes = __webpack_require__(40);
var includes_default = /*#__PURE__*/__webpack_require__.n(includes);

// EXTERNAL MODULE: ./node_modules/veui-theme-one/icons/angle-right.js
var angle_right = __webpack_require__(444);

// EXTERNAL MODULE: ./node_modules/veui/managers/config.js
var config = __webpack_require__(390);

// CONCATENATED MODULE: ./node_modules/veui-theme-one/components/Tree.js


config["a" /* default */].defaults({
  icons: {
    collapsed: 'angle-right'
  }
}, 'tree');
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/veui-loader/lib??ref--11!./node_modules/veui/components/Tree/_TreeNode.vue?vue&type=template&id=5b1cc460&
var _TreeNodevue_type_template_id_5b1cc460_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',{class:{'veui-tree-item-group': _vm.depth > 1, 'veui-tree': _vm.depth === 1}},_vm._l((_vm.datasource),function(option,index){return _c('li',{key:option.value},[_c('div',{staticClass:"veui-tree-item",class:{'veui-tree-item-expanded': option.expanded},on:{"click":function($event){_vm.click(option, [], index, _vm.depth)}}},[_vm._t("item",[(option.children && option.children.length)?_c('span',{staticClass:"veui-tree-item-expand-switcher",on:{"click":function($event){$event.stopPropagation();_vm.toggle(option, index, _vm.depth)}}},[_c('veui-icon',{attrs:{"name":_vm.icons.collapsed}})],1):_vm._e(),_vm._v(" "),_c('div',{staticClass:"veui-tree-item-label"},[_vm._t("item-label",[_vm._v(_vm._s(option.label))],{item:option,index:index,depth:_vm.depth})],2)],{item:option,index:index,depth:_vm.depth})],2),_vm._v(" "),(option.expanded && option.children && option.children.length)?_c('veui-tree-node',{attrs:{"datasource":option.children,"depth":_vm.depth + 1,"item-click":_vm.itemClick,"icons":_vm.icons},on:{"click":function($event){
var i = arguments.length, argsArray = Array(i);
while ( i-- ) argsArray[i] = arguments[i];
_vm.handleChildClick.apply(void 0, [ option ].concat( argsArray ))},"toggle":_vm.handleChildToggle},scopedSlots:_vm._u([{key:"item",fn:function(props){return [_vm._t("item",[(props.item.children && props.item.children.length)?_c('span',{staticClass:"veui-tree-item-expand-switcher",on:{"click":function($event){$event.stopPropagation();_vm.toggle(props.item, props.index, _vm.depth + 1)}}},[_c('veui-icon',{attrs:{"name":_vm.icons.collapsed}})],1):_vm._e(),_vm._v(" "),_c('div',{staticClass:"veui-tree-item-label"},[_vm._t("item-label",[_vm._v(_vm._s(props.item.label))],null,props)],2)],null,props)]}}])}):_vm._e()],1)}))}
var _TreeNodevue_type_template_id_5b1cc460_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/veui/components/Tree/_TreeNode.vue?vue&type=template&id=5b1cc460&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.number.constructor.js
var es6_number_constructor = __webpack_require__(89);

// EXTERNAL MODULE: ./node_modules/veui/components/Icon.vue + 2 modules
var Icon = __webpack_require__(53);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/veui-loader/lib??ref--11!./node_modules/veui/components/Tree/_TreeNode.vue?vue&type=script&lang=js&



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var _TreeNodevue_type_script_lang_js_ = ({
  name: 'veui-tree-node',
  components: {
    'veui-icon': Icon["a" /* default */]
  },
  props: {
    icons: Object,
    datasource: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    depth: {
      type: Number,
      default: 1
    },
    // 点击整个 item 区域，是否触发展开/收起
    itemClick: {
      type: String,
      default: 'none',
      validator: function validator(value) {
        return includes_default()(['toggle', 'none'], value);
      }
    }
  },
  methods: {
    toggle: function toggle() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      this.$emit.apply(this, ['toggle'].concat(args));
    },
    click: function click(option, parents) {
      for (var _len2 = arguments.length, extraArgs = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        extraArgs[_key2 - 2] = arguments[_key2];
      }

      this.$emit.apply(this, ['click', option, parents].concat(extraArgs));

      if (this.itemClick === 'toggle' && option.children && option.children.length) {
        this.toggle.apply(this, [option].concat(extraArgs));
      }
    },
    handleChildToggle: function handleChildToggle() {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      this.$emit.apply(this, ['toggle'].concat(args));
    },
    handleChildClick: function handleChildClick(parentOption, currentOption, parents) {
      for (var _len4 = arguments.length, extraArgs = new Array(_len4 > 3 ? _len4 - 3 : 0), _key4 = 3; _key4 < _len4; _key4++) {
        extraArgs[_key4 - 3] = arguments[_key4];
      }

      this.$emit.apply(this, ['click', currentOption, toConsumableArray_default()(parents).concat([parentOption])].concat(extraArgs));
    }
  }
});
// CONCATENATED MODULE: ./node_modules/veui/components/Tree/_TreeNode.vue?vue&type=script&lang=js&
 /* harmony default export */ var Tree_TreeNodevue_type_script_lang_js_ = (_TreeNodevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/veui/components/Tree/_TreeNode.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Tree_TreeNodevue_type_script_lang_js_,
  _TreeNodevue_type_template_id_5b1cc460_render,
  _TreeNodevue_type_template_id_5b1cc460_staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "_TreeNode.vue"
/* harmony default export */ var _TreeNode = (component.exports);
// EXTERNAL MODULE: ./node_modules/veui/mixins/ui.js
var ui = __webpack_require__(391);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/veui-loader/lib??ref--11!./node_modules/veui/components/Tree/Tree.vue?vue&type=script&lang=js&







//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var Treevue_type_script_lang_js_ = ({
  name: 'veui-tree',
  components: {
    'veui-tree-node': _TreeNode
  },
  mixins: [ui["a" /* default */]],
  props: {
    datasource: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    // 点击整个 item 区域，是否触发展开/收起
    itemClick: {
      type: String,
      default: 'none',
      validator: function validator(value) {
        return includes_default()(['toggle', 'none'], value);
      }
    },
    // 当前有哪些节点是展开的
    expands: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      localDatasource: []
    };
  },
  watch: {
    expands: function expands() {
      this.parseExpands();
    },
    datasource: {
      handler: function handler() {
        this.parseExpands();
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    parseExpands: function parseExpands() {
      var expands = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.expands;

      var walk = function walk(items, expands) {
        return items.map(function (item) {
          var localOption = omit_default()(item, 'children');

          if (item.children && item.children.length) {
            var expanded = !!remove_default()(expands, function (value) {
              return value === item.value;
            }).length;
            localOption.expanded = expanded;
            localOption.children = walk(item.children, expands);
          }

          return localOption;
        });
      };

      this.localDatasource = walk(this.datasource, clone_default()(expands));
    },
    toggle: function toggle(item, index, depth) {
      item.expanded = !item.expanded;
      var expands = item.expanded ? uniq_default()(toConsumableArray_default()(this.expands).concat([item.value])) : filter_default()(this.expands, function (value) {
        return value !== item.value;
      });
      this.$emit('update:expands', expands);
      this.$emit(item.expanded ? 'expand' : 'collapse', item, index, depth);
    },
    handleItemClick: function handleItemClick() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      this.$emit.apply(this, ['click'].concat(args));
    }
  }
});
// CONCATENATED MODULE: ./node_modules/veui/components/Tree/Tree.vue?vue&type=script&lang=js&
 /* harmony default export */ var Tree_Treevue_type_script_lang_js_ = (Treevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/veui-theme-one/components/tree.less?vue&type=style&index=0&lang=less&
var treevue_type_style_index_0_lang_less_ = __webpack_require__(671);

// CONCATENATED MODULE: ./node_modules/veui/components/Tree/Tree.vue






/* normalize component */

var Tree_component = Object(componentNormalizer["a" /* default */])(
  Tree_Treevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

Tree_component.options.__file = "Tree.vue"
/* harmony default export */ var Tree = __webpack_exports__["a"] = (Tree_component.exports);

/***/ }),

/***/ 526:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var veui_components_Icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53);

veui_components_Icon__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].register({
  "arrow-right": {
    "width": "12",
    "height": "12",
    "paths": [{
      "d": "M12 6.5l-3.5 4-.82-.8 2.82-3.2H0v-1h12v1zm0-1h-1.5L7.68 2.3l.82-.8 3.5 4z"
    }]
  }
});

/***/ }),

/***/ 563:
/***/ (function(module, exports, __webpack_require__) {

var baseClone = __webpack_require__(425);

/** Used to compose bitmasks for cloning. */
var CLONE_SYMBOLS_FLAG = 4;

/**
 * Creates a shallow clone of `value`.
 *
 * **Note:** This method is loosely based on the
 * [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
 * and supports cloning arrays, array buffers, booleans, date objects, maps,
 * numbers, `Object` objects, regexes, sets, strings, symbols, and typed
 * arrays. The own enumerable properties of `arguments` objects are cloned
 * as plain objects. An empty object is returned for uncloneable values such
 * as error objects, functions, DOM nodes, and WeakMaps.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to clone.
 * @returns {*} Returns the cloned value.
 * @see _.cloneDeep
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var shallow = _.clone(objects);
 * console.log(shallow[0] === objects[0]);
 * // => true
 */
function clone(value) {
  return baseClone(value, CLONE_SYMBOLS_FLAG);
}

module.exports = clone;


/***/ }),

/***/ 669:
/***/ (function(module, exports, __webpack_require__) {

var arrayFilter = __webpack_require__(218),
    baseFilter = __webpack_require__(670),
    baseIteratee = __webpack_require__(55),
    isArray = __webpack_require__(7);

/**
 * Iterates over elements of `collection`, returning an array of all elements
 * `predicate` returns truthy for. The predicate is invoked with three
 * arguments: (value, index|key, collection).
 *
 * **Note:** Unlike `_.remove`, this method returns a new array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 * @see _.reject
 * @example
 *
 * var users = [
 *   { 'user': 'barney', 'age': 36, 'active': true },
 *   { 'user': 'fred',   'age': 40, 'active': false }
 * ];
 *
 * _.filter(users, function(o) { return !o.active; });
 * // => objects for ['fred']
 *
 * // The `_.matches` iteratee shorthand.
 * _.filter(users, { 'age': 36, 'active': true });
 * // => objects for ['barney']
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.filter(users, ['active', false]);
 * // => objects for ['fred']
 *
 * // The `_.property` iteratee shorthand.
 * _.filter(users, 'active');
 * // => objects for ['barney']
 */
function filter(collection, predicate) {
  var func = isArray(collection) ? arrayFilter : baseFilter;
  return func(collection, baseIteratee(predicate, 3));
}

module.exports = filter;


/***/ }),

/***/ 670:
/***/ (function(module, exports, __webpack_require__) {

var baseEach = __webpack_require__(203);

/**
 * The base implementation of `_.filter` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function baseFilter(collection, predicate) {
  var result = [];
  baseEach(collection, function(value, index, collection) {
    if (predicate(value, index, collection)) {
      result.push(value);
    }
  });
  return result;
}

module.exports = baseFilter;


/***/ }),

/***/ 671:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _vue_style_loader_index_js_ref_4_oneOf_1_0_css_loader_index_js_ref_4_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_4_oneOf_1_2_less_loader_dist_cjs_js_ref_4_oneOf_1_3_tree_less_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(510);
/* harmony import */ var _vue_style_loader_index_js_ref_4_oneOf_1_0_css_loader_index_js_ref_4_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_4_oneOf_1_2_less_loader_dist_cjs_js_ref_4_oneOf_1_3_tree_less_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_4_oneOf_1_0_css_loader_index_js_ref_4_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_4_oneOf_1_2_less_loader_dist_cjs_js_ref_4_oneOf_1_3_tree_less_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_vue_style_loader_index_js_ref_4_oneOf_1_0_css_loader_index_js_ref_4_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_4_oneOf_1_2_less_loader_dist_cjs_js_ref_4_oneOf_1_3_tree_less_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 672:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, "/* Theme colors */\n/* Additional colors */\n/* Grayscale colors */\n/* Text colors */\n/* Link colors */\n/* Font settings */\n/* Metrics */\n/* Form widths */\n/* Transition duration */\n.veui-tree,\n.veui-tree-item-group {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.veui-tree-item {\n  height: 36px;\n  line-height: 36px;\n}\n.veui-tree-item:before,\n.veui-tree-item:after {\n  display: table;\n  content: \"\";\n}\n.veui-tree-item:after {\n  clear: both;\n}\n.veui-tree-item-expand-switcher,\n.veui-tree-item-label {\n  float: left;\n}\n.veui-tree-item-expand-switcher {\n  height: 14px;\n  line-height: 14px;\n  vertical-align: top;\n  margin-right: 4px;\n  cursor: pointer;\n  margin-top: calc(18px - 0.5em);\n}\n.veui-tree-item-expand-switcher .veui-icon {\n  width: 14px;\n  height: 14px;\n}\n.veui-tree-item-expanded .veui-tree-item-expand-switcher {\n  transform: rotateZ(90deg);\n}\n.veui-tree-item-group {\n  display: none;\n  padding-left: 18px;\n}\n.veui-tree-item-expanded + .veui-tree-item-group {\n  display: block;\n}\n.veui-tree-item-label:first-child {\n  margin-left: 18px;\n}\n", ""]);

// exports


/***/ }),

/***/ 723:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1201);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(6).default
var update = add("777843d6", content, true, {"sourceMap":false});

/***/ }),

/***/ 724:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1203);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(6).default
var update = add("418644df", content, true, {"sourceMap":false});

/***/ }),

/***/ 725:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1205);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(6).default
var update = add("9b813326", content, true, {"sourceMap":false});

/***/ }),

/***/ 726:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1207);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(6).default
var update = add("70715d6d", content, true, {"sourceMap":false});

/***/ }),

/***/ 727:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1210);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(6).default
var update = add("c901dfa2", content, true, {"sourceMap":false});

/***/ }),

/***/ 728:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1212);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(6).default
var update = add("66ed4d77", content, true, {"sourceMap":false});

/***/ })

}]);