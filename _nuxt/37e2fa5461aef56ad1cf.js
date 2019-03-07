(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ 1452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/veui-loader/lib??ref--14!./pages/advanced/global-config.vue?vue&type=template&id=0fcd69bc&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('article',{staticClass:"content post"},[_c('h1',{attrs:{"id":"全局配置"}},[_vm._v("全局配置")]),_c('p',[_vm._v("VEUI 中很多组件都定义了全局配置项，允许开发者在使用时全局配置某个组件的行为细节。")]),_c('p',[_vm._v("例如，"),_c('code',[_vm._v("Uploader")]),_vm._v(" 组件可以统一配置上传模式，用户可以根据项目前后端接口、需要支持浏览器版本的具体情况选择使用 iframe 回调方式还是 XHR2 方式传递数据，也可以统一配置远端数据格式的转换函数。")]),_c('p',[_vm._v("VEUI 全局配置项可以通过 "),_c('code',[_vm._v("veui/managers/config")]),_vm._v(" 模块进行覆盖：")]),_c('pre',[_c('code',{staticClass:"hljs language-js"},[_c('span',{staticClass:"hljs-keyword"},[_vm._v("import")]),_vm._v(" config "),_c('span',{staticClass:"hljs-keyword"},[_vm._v("from")]),_vm._v(" "),_c('span',{staticClass:"hljs-string"},[_vm._v("'veui/managers/config'")]),_vm._v(" config.set("),_c('span',{staticClass:"hljs-string"},[_vm._v("'uploader.requestMode'")]),_vm._v(", "),_c('span',{staticClass:"hljs-string"},[_vm._v("'iframe'")]),_vm._v(") config.set("),_c('span',{staticClass:"hljs-string"},[_vm._v("'uploader.convertResponse'")]),_vm._v(", ({ code, error, result }) => { "),_c('span',{staticClass:"hljs-comment"},[_vm._v("/** * Transform from * * { * code: 0, * error: '...', * result: { * url: '...' * } * } * * to * * { * success: true, * message: '...', * src: '...' * } */")]),_vm._v(" "),_c('span',{staticClass:"hljs-keyword"},[_vm._v("return")]),_vm._v(" { "),_c('span',{staticClass:"hljs-attr"},[_vm._v("success")]),_vm._v(": code === "),_c('span',{staticClass:"hljs-number"},[_vm._v("0")]),_vm._v(", "),_c('span',{staticClass:"hljs-attr"},[_vm._v("src")]),_vm._v(": error ? "),_c('span',{staticClass:"hljs-literal"},[_vm._v("null")]),_vm._v(" : result.url, "),_c('span',{staticClass:"hljs-attr"},[_vm._v("message")]),_vm._v(": error || "),_c('span',{staticClass:"hljs-literal"},[_vm._v("null")]),_vm._v(" } })")])]),_c('p',[_vm._v("如果需要一次修改同一个组件的多项设置，可以使用如下写法：")]),_c('pre',[_c('code',{staticClass:"hljs language-js"},[_c('span',{staticClass:"hljs-keyword"},[_vm._v("import")]),_vm._v(" config "),_c('span',{staticClass:"hljs-keyword"},[_vm._v("from")]),_vm._v(" "),_c('span',{staticClass:"hljs-string"},[_vm._v("'veui/managers/config'")]),_vm._v(" config.set({ "),_c('span',{staticClass:"hljs-attr"},[_vm._v("requestMode")]),_vm._v(": "),_c('span',{staticClass:"hljs-string"},[_vm._v("'iframe'")]),_vm._v(", "),_c('span',{staticClass:"hljs-attr"},[_vm._v("convertResponse")]),_vm._v(": "),_c('span',{staticClass:"hljs-function"},[_c('span',{staticClass:"hljs-params"},[_vm._v("data")]),_vm._v(" =>")]),_vm._v(" data }, "),_c('span',{staticClass:"hljs-string"},[_vm._v("'uploader'")]),_vm._v(")")])]),_c('p',[_c('code',[_vm._v("config.set()")]),_vm._v(" 方法参数可为如下形式：")]),_c('ul',[_c('li',[_c('code',[_vm._v("(key: string, value: *, namespace: string)")])]),_c('li',[_c('code',[_vm._v("(values: Object<{key: string, value: *}>, namespace: string)")])])]),_c('p',[_vm._v("当提供了 "),_c('code',[_vm._v("namespace")]),_vm._v(" 参数时，最终生成的配置项键名为 "),_c('code',[_vm._v("`${namespace}.${key}`")]),_vm._v("。")]),_c('p',[_vm._v("除此以外，还提供了相同参数列表的 "),_c('code',[_vm._v("config.defaults()")]),_vm._v(" 方法，区别在于当需要在配置项中写入的键值已经存在，则不会覆盖。")]),_c('p',[_vm._v("每个组件、指令等支持的全局配置请查看对应组件、指令的详情页。")])])}]


// CONCATENATED MODULE: ./pages/advanced/global-config.vue?vue&type=template&id=0fcd69bc&scoped=true&

// EXTERNAL MODULE: ./common/i18n.js
var i18n = __webpack_require__(59);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/veui-loader/lib??ref--14!./pages/advanced/global-config.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var global_configvue_type_script_lang_js_ = ({
  mixins: [i18n["b" /* htmlAttrs */]]
});
// CONCATENATED MODULE: ./pages/advanced/global-config.vue?vue&type=script&lang=js&
 /* harmony default export */ var advanced_global_configvue_type_script_lang_js_ = (global_configvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./assets/styles/post.styl?vue&type=style&index=0&id=0fcd69bc&lang=stylus&scoped=true&
var postvue_type_style_index_0_id_0fcd69bc_lang_stylus_scoped_true_ = __webpack_require__(948);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/advanced/global-config.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  advanced_global_configvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "0fcd69bc",
  null
  
)

/* harmony default export */ var global_config = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 474:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(949);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(10).default
var update = add("da074e0e", content, true, {"sourceMap":false});

/***/ }),

/***/ 948:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_stylus_loader_index_js_ref_10_oneOf_1_3_post_styl_vue_type_style_index_0_id_0fcd69bc_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(474);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_stylus_loader_index_js_ref_10_oneOf_1_3_post_styl_vue_type_style_index_0_id_0fcd69bc_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_stylus_loader_index_js_ref_10_oneOf_1_3_post_styl_vue_type_style_index_0_id_0fcd69bc_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_stylus_loader_index_js_ref_10_oneOf_1_3_post_styl_vue_type_style_index_0_id_0fcd69bc_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 949:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)(false);
// Module
exports.push([module.i, ".hljs[data-v-0fcd69bc]{display:block;overflow-x:auto;padding:.5em;color:#abb2bf;background:#282c34}.hljs-comment[data-v-0fcd69bc],.hljs-quote[data-v-0fcd69bc]{color:#5c6370;font-style:italic}.hljs-doctag[data-v-0fcd69bc],.hljs-formula[data-v-0fcd69bc],.hljs-keyword[data-v-0fcd69bc]{color:#c678dd}.hljs-deletion[data-v-0fcd69bc],.hljs-name[data-v-0fcd69bc],.hljs-section[data-v-0fcd69bc],.hljs-selector-tag[data-v-0fcd69bc],.hljs-subst[data-v-0fcd69bc]{color:#e06c75}.hljs-literal[data-v-0fcd69bc]{color:#56b6c2}.hljs-addition[data-v-0fcd69bc],.hljs-attribute[data-v-0fcd69bc],.hljs-meta-string[data-v-0fcd69bc],.hljs-regexp[data-v-0fcd69bc],.hljs-string[data-v-0fcd69bc]{color:#98c379}.hljs-built_in[data-v-0fcd69bc],.hljs-class .hljs-title[data-v-0fcd69bc]{color:#e6c07b}.hljs-attr[data-v-0fcd69bc],.hljs-number[data-v-0fcd69bc],.hljs-selector-attr[data-v-0fcd69bc],.hljs-selector-class[data-v-0fcd69bc],.hljs-selector-pseudo[data-v-0fcd69bc],.hljs-template-variable[data-v-0fcd69bc],.hljs-type[data-v-0fcd69bc],.hljs-variable[data-v-0fcd69bc]{color:#d19a66}.hljs-bullet[data-v-0fcd69bc],.hljs-link[data-v-0fcd69bc],.hljs-meta[data-v-0fcd69bc],.hljs-selector-id[data-v-0fcd69bc],.hljs-symbol[data-v-0fcd69bc],.hljs-title[data-v-0fcd69bc]{color:#61aeee}.hljs-emphasis[data-v-0fcd69bc]{font-style:italic}.hljs-strong[data-v-0fcd69bc]{font-weight:700}.hljs-link[data-v-0fcd69bc]{text-decoration:underline}.mermaid[data-v-0fcd69bc]{font-family:Helvetica Neue,Arial,PingFang SC,Microsoft YaHei,sans-serif;font-size:13px}.mermaid .label[data-v-0fcd69bc]{color:#333}.mermaid .node circle[data-v-0fcd69bc],.mermaid .node ellipse[data-v-0fcd69bc],.mermaid .node polygon[data-v-0fcd69bc],.mermaid .node rect[data-v-0fcd69bc]{fill:#eee;stroke:#999;stroke-width:1px}.mermaid .node.clickable[data-v-0fcd69bc]{cursor:pointer}.mermaid .arrowheadPath[data-v-0fcd69bc]{fill:#333}.mermaid .edgePath .path[data-v-0fcd69bc]{stroke:#666;stroke-width:1.5px}.mermaid .edgeLabel[data-v-0fcd69bc]{background-color:#fff}.mermaid .cluster rect[data-v-0fcd69bc]{fill:#eaf2fb!important;stroke:#26a!important;stroke-width:1px!important}.mermaid .cluster text[data-v-0fcd69bc]{fill:#333}.mermaid div.mermaidTooltip[data-v-0fcd69bc]{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:Helvetica Neue,Arial,PingFang SC,Microsoft YaHei,sans-serif;font-size:12px;background:#eaf2fb;border:1px solid #26a;border-radius:2px;pointer-events:none;z-index:100}.post[data-v-0fcd69bc]{padding:45px 60px;font-size:14px;line-height:1.8;color:#666;font-weight:400;-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto}.post-layout .post[data-v-0fcd69bc]{min-height:100%;margin-bottom:-192px}.post-layout .post[data-v-0fcd69bc]:after{content:\"\";display:block;height:192px}.post-layout.no-links .post[data-v-0fcd69bc]{margin-bottom:-58px}.no-links .post[data-v-0fcd69bc]:after{height:58px}.post h1[data-v-0fcd69bc]{margin-top:0;margin-bottom:1.25em;font-size:36px}.post h1 small[data-v-0fcd69bc]{vertical-align:.1em;color:#999}.post h2[data-v-0fcd69bc]{margin-top:1.3em;margin-bottom:1.2em;font-size:30px}.post h2[data-v-0fcd69bc]:before{content:\"#\";margin-right:5px;color:#ccc}.post h2+h3[data-v-0fcd69bc]{margin-top:2em}.post h3[data-v-0fcd69bc]{margin-top:1.25em;margin-bottom:1.15em;font-size:24px}.post h4[data-v-0fcd69bc]{margin-top:1.15em;margin-bottom:1.1em;font-size:18px}.post h5[data-v-0fcd69bc]{margin-top:1.05em;margin-bottom:1.05em;font-size:14px}.post h6[data-v-0fcd69bc]{margin-top:1em;margin-bottom:1em;font-size:12px}.post h1[data-v-0fcd69bc],.post h2[data-v-0fcd69bc],.post h3[data-v-0fcd69bc]{font-weight:500;clear:both}.post h1[data-v-0fcd69bc],.post h2[data-v-0fcd69bc],.post h3[data-v-0fcd69bc],.post h4[data-v-0fcd69bc],.post h5[data-v-0fcd69bc],.post h6[data-v-0fcd69bc]{color:#333;line-height:1}.post br[data-v-0fcd69bc]{clear:both}.post p[data-v-0fcd69bc]{margin-top:.5em;margin-bottom:.5em}.post ol[data-v-0fcd69bc],.post ul[data-v-0fcd69bc]{padding-left:1.5em}.post blockquote[data-v-0fcd69bc]{margin:1em 0;padding-left:1em;border-left:5px solid #f1f1f1;color:#999}.post table[data-v-0fcd69bc]{width:100%;border-collapse:collapse;border-color:#f1f1f1;border-style:none solid;border-width:1px;margin-top:1.5em;margin-bottom:1.5em}.post table pre[data-v-0fcd69bc],.post table table[data-v-0fcd69bc]{max-width:480px}.post td[data-v-0fcd69bc],.post th[data-v-0fcd69bc]{min-width:90px;padding:7px 14px;border-color:#f1f1f1;border-style:solid none;border-width:1px;text-align:left}.post td[data-v-0fcd69bc]>:first-child,.post th[data-v-0fcd69bc]>:first-child{margin-top:5px}.post td[data-v-0fcd69bc]>:last-child,.post th[data-v-0fcd69bc]>:last-child{margin-bottom:5px}.post td pre[data-v-0fcd69bc],.post th pre[data-v-0fcd69bc]{padding:10px 15px}.post td table[data-v-0fcd69bc],.post th table[data-v-0fcd69bc]{margin-top:.2em;margin-bottom:.5em}.post td[data-v-0fcd69bc]:first-child{white-space:nowrap}.post a[data-v-0fcd69bc]:link:not([class^=veui-]),.post a[data-v-0fcd69bc]:visited:not([class^=veui-]){text-decoration:none;color:#3998fc;transition:color .2s}.post a[data-v-0fcd69bc]:link:not([class^=veui-]):hover,.post a[data-v-0fcd69bc]:visited:not([class^=veui-]):hover{color:#3389e3}.post a[data-v-0fcd69bc]:link:not([class^=veui-]):active,.post a[data-v-0fcd69bc]:visited:not([class^=veui-]):active{color:#2e7aca}.post code[data-v-0fcd69bc]{padding:2px 4px;background-color:rgba(0,0,0,.024);font-size:90%;overflow:visible;-webkit-hyphens:none;-ms-hyphens:none;hyphens:none}.post hr[data-v-0fcd69bc]{height:1px;margin:2em 0;padding:0;background-color:#eff0f1;border:0;clear:both}.post figure[data-v-0fcd69bc]{float:right;width:60%;margin:0 0 30px 20px}.post figure+h1[data-v-0fcd69bc],.post figure+h2[data-v-0fcd69bc],.post figure+h3[data-v-0fcd69bc],.post figure+h4[data-v-0fcd69bc],.post figure+h5[data-v-0fcd69bc],.post figure+h6[data-v-0fcd69bc]{margin-top:0}.post figure img[data-v-0fcd69bc]{display:block;margin:auto}.post figure .preview[data-v-0fcd69bc]{padding:20px;overflow:hidden;border:1px solid #e5e5e5;transition:box-shadow .2s;cursor:pointer;text-align:center}.post figure .preview[data-v-0fcd69bc]:hover{box-shadow:0 0 5px rgba(0,0,0,.2)}.post figure.hero[data-v-0fcd69bc]{width:100%;float:none}.post figcaption[data-v-0fcd69bc]{margin-top:10px;font-size:12px}.post figcaption p[data-v-0fcd69bc]{margin:0;line-height:20px}.post figcaption .caption[data-v-0fcd69bc]{font-weight:500}.post figcaption .desc[data-v-0fcd69bc]{color:#999}.post .comparison[data-v-0fcd69bc]{float:right;width:60%;margin:0 0 30px 20px}.post .comparison figure[data-v-0fcd69bc]{width:calc(50% - 5px);margin:0}.post .comparison .good[data-v-0fcd69bc]{float:left}.post .comparison .bad[data-v-0fcd69bc]{float:right}.post .comparison .bad .caption[data-v-0fcd69bc]{color:#ff5b5b}.post img[data-v-0fcd69bc]{max-width:100%;max-height:100%}.post pre[data-v-0fcd69bc]{border:1px solid #eee;padding:30px;background-color:#f9f9f9;white-space:pre;overflow:auto}.post pre code[data-v-0fcd69bc]{background-color:transparent;padding:0}.post var[data-v-0fcd69bc]{font-family:\"PT Serif\",Georgia,serif}.post kbd[data-v-0fcd69bc]{display:inline-block;padding:3px 5px 6px;font-size:90%;line-height:10px;color:#444d56;vertical-align:1px;background-color:#fafbfc;border:1px solid #c6cbd1;border-bottom-color:#959da5;border-radius:3px;box-shadow:inset 0 -1px 0 #959da5}.post .custom-block[data-v-0fcd69bc]{border:1px solid;margin:1em 0;padding:.75em 1em}.post .custom-block[data-v-0fcd69bc]>:first-child{margin-top:0}.post .custom-block[data-v-0fcd69bc]>:last-child{margin-bottom:0}.post .alert[data-v-0fcd69bc],.post .tip[data-v-0fcd69bc],.post .warning[data-v-0fcd69bc]{font-size:13px}.post .alert[data-v-0fcd69bc]{border-color:#fee;background-color:#fff6f6}.post .warning[data-v-0fcd69bc]{border-color:#fef4e6;background-color:#fef9f2}.post .tip[data-v-0fcd69bc]{border-color:#d8ebff;background-color:#ebf5ff}.post .badges[data-v-0fcd69bc]{border:none;padding:0}.post .badges code[data-v-0fcd69bc]{padding:2px 3px;background:#333;border-radius:2px;color:#fff;font-size:80%}.post .oss-badges[data-v-0fcd69bc]{border:none;padding:0}.post .oss-badges a[data-v-0fcd69bc]{margin-right:10px}.post .one-demo[data-v-0fcd69bc]{margin:1em 0 1.25em}", ""]);



/***/ })

}]);