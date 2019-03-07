(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[135],{

/***/ 1347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/veui-loader/lib??ref--14!./pages/getting-started/index.vue?vue&type=template&id=54ed9cbc&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('article',{staticClass:"content post"},[_c('h1',{attrs:{"id":"起步"}},[_vm._v("起步")]),_c('div',{staticClass:"tip custom-block"},[_c('p',[_vm._v("这篇文档基于 Vue CLI 3.x 撰写，需要在 Vue CLI 2.x 下初始化项目，请移步"),_c('a',{attrs:{"href":"/getting-started/vue-cli-2"}},[_vm._v("这里")]),_vm._v("。")])]),_c('h2',{attrs:{"id":"安装"}},[_vm._v("安装")]),_c('p',[_vm._v("使用 CLI 创建项目以后，在项目根目录下运行：")]),_c('pre',[_c('code',{staticClass:"hljs language-sh"},[_vm._v("npm i --save veui veui-theme-one npm i --save-dev veui-loader babel-plugin-veui babel-plugin-lodash")])]),_c('h2',{attrs:{"id":"配置"}},[_vm._v("配置")]),_c('h3',{attrs:{"id":"babel-插件"}},[_vm._v("Babel 插件")]),_c('p',[_vm._v("VEUI 目前在 npm 上直接以源码方式进行发布，在使用时必须提前转译（其中的优缺点和取舍可以参考 "),_c('a',{attrs:{"href":"https://www.patreon.com/henryzhu"}},[_vm._v("Henry Zhu")]),_vm._v(" 在 Babel 的官方博客上发布的"),_c('a',{attrs:{"href":"https://babeljs.io/blog/2018/06/26/on-consuming-and-publishing-es2015+-packages"}},[_vm._v("这篇文章")]),_vm._v("）。VEUI 的源代码依赖 Lodash 和 Vue JSX 相关的 Babel 插件才能正确转译。此外，VEUI 还提供了自己的 Babel 插件，以帮助应用书写更简单的 "),_c('code',[_vm._v("import")]),_vm._v(" 语句的同时最小化代码的体积。")]),_c('p',[_vm._v("将项目根目录中生成的 "),_c('code',[_vm._v("babel.config.js")]),_vm._v(" 修改为：")]),_c('pre',[_c('code',{staticClass:"hljs language-js"},[_c('span',{staticClass:"hljs-built_in"},[_vm._v("module")]),_vm._v(".exports = { "),_c('span',{staticClass:"hljs-attr"},[_vm._v("presets")]),_vm._v(": [ "),_c('span',{staticClass:"hljs-string"},[_vm._v("'@vue/app'")]),_vm._v(" ], "),_c('span',{staticClass:"hljs-attr"},[_vm._v("plugins")]),_vm._v(": [ "),_c('span',{staticClass:"hljs-string"},[_vm._v("'veui'")]),_vm._v(", "),_c('span',{staticClass:"hljs-string"},[_vm._v("'lodash'")]),_vm._v(" ] }")])]),_c('p',[_vm._v("其中关于 babel-plugin-veui 的更详细信息请移步"),_c('a',{attrs:{"href":"/getting-started/babel-plugin-veui"}},[_vm._v("这里")]),_vm._v("。")]),_c('h3',{attrs:{"id":"webpack-loader"}},[_vm._v("webpack Loader")]),_c('p',[_vm._v("VEUI 采取了样式主题与组件代码分离的开发、发布方式。组件代码对样式代码没有显式的依赖，故以源码方式引入时，需要使用 veui-loader 配置关联的主题包。")]),_c('p',[_vm._v("如需使用默认的样式包 veui-theme-one，我们还需要确保在 webpack 配置中引入 "),_c('code',[_vm._v("veui-loader")]),_vm._v("。同时由于 Less 3+ 不再默认开启内联 JavaScript 解析，而 veui-theme-one 依赖了这一功能，所以我们需要手动开启配置项。")]),_c('p',[_vm._v("另外，由于我们采用将 VEUI 及其依赖与项目一起打包的策略，需要手动指定相关的依赖包进行转译。")]),_c('p',[_vm._v("综上，我们需要在项目根目录下的 "),_c('code',[_vm._v("vue.config.js")]),_vm._v(" 中进行如下配置")]),_c('pre',[_c('code',{staticClass:"hljs language-js"},[_c('span',{staticClass:"hljs-keyword"},[_vm._v("const")]),_vm._v(" lessOptions = { "),_c('span',{staticClass:"hljs-attr"},[_vm._v("javascriptEnabled")]),_vm._v(": "),_c('span',{staticClass:"hljs-literal"},[_vm._v("true")]),_vm._v(" } "),_c('span',{staticClass:"hljs-built_in"},[_vm._v("module")]),_vm._v(".exports = { "),_c('span',{staticClass:"hljs-attr"},[_vm._v("transpileDependencies")]),_vm._v(": [ "),_c('span',{staticClass:"hljs-regexp"},[_vm._v("/[/\\\\]node_modules[/\\\\]veui[/\\\\]/")]),_vm._v(", /["),_c('span',{staticClass:"hljs-regexp"},[_vm._v("/\\\\]node_modules[/\\\\]vue-awesome[/\\\\]/")]),_vm._v(", /["),_c('span',{staticClass:"hljs-regexp"},[_vm._v("/\\\\]node_modules[/\\\\]resize-detector[/\\\\]/")]),_vm._v(" ], "),_c('span',{staticClass:"hljs-attr"},[_vm._v("chainWebpack")]),_vm._v(": "),_c('span',{staticClass:"hljs-function"},[_c('span',{staticClass:"hljs-params"},[_vm._v("config")]),_vm._v(" =>")]),_vm._v(" { config.module .rule("),_c('span',{staticClass:"hljs-string"},[_vm._v("'veui'")]),_vm._v(") .test("),_c('span',{staticClass:"hljs-regexp"},[_vm._v("/\\.vue$/")]),_vm._v(") .pre() .use("),_c('span',{staticClass:"hljs-string"},[_vm._v("'veui-loader'")]),_vm._v(") .loader("),_c('span',{staticClass:"hljs-string"},[_vm._v("'veui-loader'")]),_vm._v(") .tap("),_c('span',{staticClass:"hljs-function"},[_c('span',{staticClass:"hljs-params"},[_vm._v("()")]),_vm._v(" =>")]),_vm._v(" { "),_c('span',{staticClass:"hljs-keyword"},[_vm._v("return")]),_vm._v(" { "),_c('span',{staticClass:"hljs-attr"},[_vm._v("modules")]),_vm._v(": [ { "),_c('span',{staticClass:"hljs-attr"},[_vm._v("package")]),_vm._v(": "),_c('span',{staticClass:"hljs-string"},[_vm._v("'veui-theme-one'")]),_vm._v(", "),_c('span',{staticClass:"hljs-attr"},[_vm._v("fileName")]),_vm._v(": "),_c('span',{staticClass:"hljs-string"},[_vm._v("'{module}.less'")]),_vm._v(" }, { "),_c('span',{staticClass:"hljs-attr"},[_vm._v("package")]),_vm._v(": "),_c('span',{staticClass:"hljs-string"},[_vm._v("'veui-theme-one'")]),_vm._v(", "),_c('span',{staticClass:"hljs-attr"},[_vm._v("fileName")]),_vm._v(": "),_c('span',{staticClass:"hljs-string"},[_vm._v("'{module}.js'")]),_vm._v(", "),_c('span',{staticClass:"hljs-attr"},[_vm._v("transform")]),_vm._v(": "),_c('span',{staticClass:"hljs-literal"},[_vm._v("false")]),_vm._v(" } ] } }) "),_c('span',{staticClass:"hljs-keyword"},[_vm._v("const")]),_vm._v(" types = ["),_c('span',{staticClass:"hljs-string"},[_vm._v("'vue-modules'")]),_vm._v(", "),_c('span',{staticClass:"hljs-string"},[_vm._v("'vue'")]),_vm._v(", "),_c('span',{staticClass:"hljs-string"},[_vm._v("'normal-modules'")]),_vm._v(", "),_c('span',{staticClass:"hljs-string"},[_vm._v("'normal'")]),_vm._v("] types.forEach("),_c('span',{staticClass:"hljs-function"},[_c('span',{staticClass:"hljs-params"},[_vm._v("type")]),_vm._v(" =>")]),_vm._v(" { config.module .rule("),_c('span',{staticClass:"hljs-string"},[_vm._v("'less'")]),_vm._v(") .oneOf(type) .use("),_c('span',{staticClass:"hljs-string"},[_vm._v("'less-loader'")]),_vm._v(") .tap("),_c('span',{staticClass:"hljs-function"},[_c('span',{staticClass:"hljs-params"},[_vm._v("options")]),_vm._v(" =>")]),_vm._v(" "),_c('span',{staticClass:"hljs-built_in"},[_vm._v("Object")]),_vm._v(".assign({}, options, lessOptions)) }) } }")])]),_c('p',[_vm._v("veui-loader 选项的详细配置请参考 "),_c('a',{attrs:{"href":"/getting-started/veui-loader"}},[_vm._v("veui-loader 文档")]),_vm._v("。")]),_c('h3',{attrs:{"id":"全局样式"}},[_vm._v("全局样式")]),_c('p',[_vm._v("在使用 veui-theme-one 时，需要先全局引入基础样式，包括样式的 normalize 及一些基本元素的样式。可以自行选择引入的方式。")]),_c('p',[_vm._v("从 JavaScript 引入：")]),_c('pre',[_c('code',{staticClass:"hljs language-js"},[_c('span',{staticClass:"hljs-keyword"},[_vm._v("import")]),_vm._v(" "),_c('span',{staticClass:"hljs-string"},[_vm._v("'veui-theme-one/common.less'")])])]),_c('p',[_vm._v("或从样式中引入：")]),_c('pre',[_c('code',{staticClass:"hljs language-less"},[_c('span',{staticClass:"hljs-keyword"},[_vm._v("@import")]),_vm._v(" "),_c('span',{staticClass:"hljs-string"},[_vm._v("\"~veui-theme-one/common.less\"")]),_vm._v(";")])])])}]


// CONCATENATED MODULE: ./pages/getting-started/index.vue?vue&type=template&id=54ed9cbc&scoped=true&

// EXTERNAL MODULE: ./common/i18n.js
var i18n = __webpack_require__(59);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/veui-loader/lib??ref--14!./pages/getting-started/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var getting_startedvue_type_script_lang_js_ = ({
  mixins: [i18n["b" /* htmlAttrs */]]
});
// CONCATENATED MODULE: ./pages/getting-started/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_getting_startedvue_type_script_lang_js_ = (getting_startedvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./assets/styles/post.styl?vue&type=style&index=0&id=54ed9cbc&lang=stylus&scoped=true&
var postvue_type_style_index_0_id_54ed9cbc_lang_stylus_scoped_true_ = __webpack_require__(944);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/getting-started/index.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_getting_startedvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "54ed9cbc",
  null
  
)

/* harmony default export */ var getting_started = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 472:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(945);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(10).default
var update = add("268a938b", content, true, {"sourceMap":false});

/***/ }),

/***/ 944:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_stylus_loader_index_js_ref_10_oneOf_1_3_post_styl_vue_type_style_index_0_id_54ed9cbc_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(472);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_stylus_loader_index_js_ref_10_oneOf_1_3_post_styl_vue_type_style_index_0_id_54ed9cbc_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_stylus_loader_index_js_ref_10_oneOf_1_3_post_styl_vue_type_style_index_0_id_54ed9cbc_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_stylus_loader_index_js_ref_10_oneOf_1_3_post_styl_vue_type_style_index_0_id_54ed9cbc_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 945:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)(false);
// Module
exports.push([module.i, ".hljs[data-v-54ed9cbc]{display:block;overflow-x:auto;padding:.5em;color:#abb2bf;background:#282c34}.hljs-comment[data-v-54ed9cbc],.hljs-quote[data-v-54ed9cbc]{color:#5c6370;font-style:italic}.hljs-doctag[data-v-54ed9cbc],.hljs-formula[data-v-54ed9cbc],.hljs-keyword[data-v-54ed9cbc]{color:#c678dd}.hljs-deletion[data-v-54ed9cbc],.hljs-name[data-v-54ed9cbc],.hljs-section[data-v-54ed9cbc],.hljs-selector-tag[data-v-54ed9cbc],.hljs-subst[data-v-54ed9cbc]{color:#e06c75}.hljs-literal[data-v-54ed9cbc]{color:#56b6c2}.hljs-addition[data-v-54ed9cbc],.hljs-attribute[data-v-54ed9cbc],.hljs-meta-string[data-v-54ed9cbc],.hljs-regexp[data-v-54ed9cbc],.hljs-string[data-v-54ed9cbc]{color:#98c379}.hljs-built_in[data-v-54ed9cbc],.hljs-class .hljs-title[data-v-54ed9cbc]{color:#e6c07b}.hljs-attr[data-v-54ed9cbc],.hljs-number[data-v-54ed9cbc],.hljs-selector-attr[data-v-54ed9cbc],.hljs-selector-class[data-v-54ed9cbc],.hljs-selector-pseudo[data-v-54ed9cbc],.hljs-template-variable[data-v-54ed9cbc],.hljs-type[data-v-54ed9cbc],.hljs-variable[data-v-54ed9cbc]{color:#d19a66}.hljs-bullet[data-v-54ed9cbc],.hljs-link[data-v-54ed9cbc],.hljs-meta[data-v-54ed9cbc],.hljs-selector-id[data-v-54ed9cbc],.hljs-symbol[data-v-54ed9cbc],.hljs-title[data-v-54ed9cbc]{color:#61aeee}.hljs-emphasis[data-v-54ed9cbc]{font-style:italic}.hljs-strong[data-v-54ed9cbc]{font-weight:700}.hljs-link[data-v-54ed9cbc]{text-decoration:underline}.mermaid[data-v-54ed9cbc]{font-family:Helvetica Neue,Arial,PingFang SC,Microsoft YaHei,sans-serif;font-size:13px}.mermaid .label[data-v-54ed9cbc]{color:#333}.mermaid .node circle[data-v-54ed9cbc],.mermaid .node ellipse[data-v-54ed9cbc],.mermaid .node polygon[data-v-54ed9cbc],.mermaid .node rect[data-v-54ed9cbc]{fill:#eee;stroke:#999;stroke-width:1px}.mermaid .node.clickable[data-v-54ed9cbc]{cursor:pointer}.mermaid .arrowheadPath[data-v-54ed9cbc]{fill:#333}.mermaid .edgePath .path[data-v-54ed9cbc]{stroke:#666;stroke-width:1.5px}.mermaid .edgeLabel[data-v-54ed9cbc]{background-color:#fff}.mermaid .cluster rect[data-v-54ed9cbc]{fill:#eaf2fb!important;stroke:#26a!important;stroke-width:1px!important}.mermaid .cluster text[data-v-54ed9cbc]{fill:#333}.mermaid div.mermaidTooltip[data-v-54ed9cbc]{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:Helvetica Neue,Arial,PingFang SC,Microsoft YaHei,sans-serif;font-size:12px;background:#eaf2fb;border:1px solid #26a;border-radius:2px;pointer-events:none;z-index:100}.post[data-v-54ed9cbc]{padding:45px 60px;font-size:14px;line-height:1.8;color:#666;font-weight:400;-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto}.post-layout .post[data-v-54ed9cbc]{min-height:100%;margin-bottom:-192px}.post-layout .post[data-v-54ed9cbc]:after{content:\"\";display:block;height:192px}.post-layout.no-links .post[data-v-54ed9cbc]{margin-bottom:-58px}.no-links .post[data-v-54ed9cbc]:after{height:58px}.post h1[data-v-54ed9cbc]{margin-top:0;margin-bottom:1.25em;font-size:36px}.post h1 small[data-v-54ed9cbc]{vertical-align:.1em;color:#999}.post h2[data-v-54ed9cbc]{margin-top:1.3em;margin-bottom:1.2em;font-size:30px}.post h2[data-v-54ed9cbc]:before{content:\"#\";margin-right:5px;color:#ccc}.post h2+h3[data-v-54ed9cbc]{margin-top:2em}.post h3[data-v-54ed9cbc]{margin-top:1.25em;margin-bottom:1.15em;font-size:24px}.post h4[data-v-54ed9cbc]{margin-top:1.15em;margin-bottom:1.1em;font-size:18px}.post h5[data-v-54ed9cbc]{margin-top:1.05em;margin-bottom:1.05em;font-size:14px}.post h6[data-v-54ed9cbc]{margin-top:1em;margin-bottom:1em;font-size:12px}.post h1[data-v-54ed9cbc],.post h2[data-v-54ed9cbc],.post h3[data-v-54ed9cbc]{font-weight:500;clear:both}.post h1[data-v-54ed9cbc],.post h2[data-v-54ed9cbc],.post h3[data-v-54ed9cbc],.post h4[data-v-54ed9cbc],.post h5[data-v-54ed9cbc],.post h6[data-v-54ed9cbc]{color:#333;line-height:1}.post br[data-v-54ed9cbc]{clear:both}.post p[data-v-54ed9cbc]{margin-top:.5em;margin-bottom:.5em}.post ol[data-v-54ed9cbc],.post ul[data-v-54ed9cbc]{padding-left:1.5em}.post blockquote[data-v-54ed9cbc]{margin:1em 0;padding-left:1em;border-left:5px solid #f1f1f1;color:#999}.post table[data-v-54ed9cbc]{width:100%;border-collapse:collapse;border-color:#f1f1f1;border-style:none solid;border-width:1px;margin-top:1.5em;margin-bottom:1.5em}.post table pre[data-v-54ed9cbc],.post table table[data-v-54ed9cbc]{max-width:480px}.post td[data-v-54ed9cbc],.post th[data-v-54ed9cbc]{min-width:90px;padding:7px 14px;border-color:#f1f1f1;border-style:solid none;border-width:1px;text-align:left}.post td[data-v-54ed9cbc]>:first-child,.post th[data-v-54ed9cbc]>:first-child{margin-top:5px}.post td[data-v-54ed9cbc]>:last-child,.post th[data-v-54ed9cbc]>:last-child{margin-bottom:5px}.post td pre[data-v-54ed9cbc],.post th pre[data-v-54ed9cbc]{padding:10px 15px}.post td table[data-v-54ed9cbc],.post th table[data-v-54ed9cbc]{margin-top:.2em;margin-bottom:.5em}.post td[data-v-54ed9cbc]:first-child{white-space:nowrap}.post a[data-v-54ed9cbc]:link:not([class^=veui-]),.post a[data-v-54ed9cbc]:visited:not([class^=veui-]){text-decoration:none;color:#3998fc;transition:color .2s}.post a[data-v-54ed9cbc]:link:not([class^=veui-]):hover,.post a[data-v-54ed9cbc]:visited:not([class^=veui-]):hover{color:#3389e3}.post a[data-v-54ed9cbc]:link:not([class^=veui-]):active,.post a[data-v-54ed9cbc]:visited:not([class^=veui-]):active{color:#2e7aca}.post code[data-v-54ed9cbc]{padding:2px 4px;background-color:rgba(0,0,0,.024);font-size:90%;overflow:visible;-webkit-hyphens:none;-ms-hyphens:none;hyphens:none}.post hr[data-v-54ed9cbc]{height:1px;margin:2em 0;padding:0;background-color:#eff0f1;border:0;clear:both}.post figure[data-v-54ed9cbc]{float:right;width:60%;margin:0 0 30px 20px}.post figure+h1[data-v-54ed9cbc],.post figure+h2[data-v-54ed9cbc],.post figure+h3[data-v-54ed9cbc],.post figure+h4[data-v-54ed9cbc],.post figure+h5[data-v-54ed9cbc],.post figure+h6[data-v-54ed9cbc]{margin-top:0}.post figure img[data-v-54ed9cbc]{display:block;margin:auto}.post figure .preview[data-v-54ed9cbc]{padding:20px;overflow:hidden;border:1px solid #e5e5e5;transition:box-shadow .2s;cursor:pointer;text-align:center}.post figure .preview[data-v-54ed9cbc]:hover{box-shadow:0 0 5px rgba(0,0,0,.2)}.post figure.hero[data-v-54ed9cbc]{width:100%;float:none}.post figcaption[data-v-54ed9cbc]{margin-top:10px;font-size:12px}.post figcaption p[data-v-54ed9cbc]{margin:0;line-height:20px}.post figcaption .caption[data-v-54ed9cbc]{font-weight:500}.post figcaption .desc[data-v-54ed9cbc]{color:#999}.post .comparison[data-v-54ed9cbc]{float:right;width:60%;margin:0 0 30px 20px}.post .comparison figure[data-v-54ed9cbc]{width:calc(50% - 5px);margin:0}.post .comparison .good[data-v-54ed9cbc]{float:left}.post .comparison .bad[data-v-54ed9cbc]{float:right}.post .comparison .bad .caption[data-v-54ed9cbc]{color:#ff5b5b}.post img[data-v-54ed9cbc]{max-width:100%;max-height:100%}.post pre[data-v-54ed9cbc]{border:1px solid #eee;padding:30px;background-color:#f9f9f9;white-space:pre;overflow:auto}.post pre code[data-v-54ed9cbc]{background-color:transparent;padding:0}.post var[data-v-54ed9cbc]{font-family:\"PT Serif\",Georgia,serif}.post kbd[data-v-54ed9cbc]{display:inline-block;padding:3px 5px 6px;font-size:90%;line-height:10px;color:#444d56;vertical-align:1px;background-color:#fafbfc;border:1px solid #c6cbd1;border-bottom-color:#959da5;border-radius:3px;box-shadow:inset 0 -1px 0 #959da5}.post .custom-block[data-v-54ed9cbc]{border:1px solid;margin:1em 0;padding:.75em 1em}.post .custom-block[data-v-54ed9cbc]>:first-child{margin-top:0}.post .custom-block[data-v-54ed9cbc]>:last-child{margin-bottom:0}.post .alert[data-v-54ed9cbc],.post .tip[data-v-54ed9cbc],.post .warning[data-v-54ed9cbc]{font-size:13px}.post .alert[data-v-54ed9cbc]{border-color:#fee;background-color:#fff6f6}.post .warning[data-v-54ed9cbc]{border-color:#fef4e6;background-color:#fef9f2}.post .tip[data-v-54ed9cbc]{border-color:#d8ebff;background-color:#ebf5ff}.post .badges[data-v-54ed9cbc]{border:none;padding:0}.post .badges code[data-v-54ed9cbc]{padding:2px 3px;background:#333;border-radius:2px;color:#fff;font-size:80%}.post .oss-badges[data-v-54ed9cbc]{border:none;padding:0}.post .oss-badges a[data-v-54ed9cbc]{margin-right:10px}.post .one-demo[data-v-54ed9cbc]{margin:1em 0 1.25em}", ""]);



/***/ })

}]);