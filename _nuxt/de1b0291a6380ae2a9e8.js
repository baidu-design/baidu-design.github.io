(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22],{

/***/ 1449:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/veui-loader/lib??ref--14!./pages/advanced/theming.vue?vue&type=template&id=7067e2bb&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('article',{staticClass:"content post"},[_c('h1',{attrs:{"id":"主题"}},[_vm._v("主题")]),_vm._v(" "),_c('p',[_vm._v("VEUI 的组件和主题包是完全解耦的。组件库中不含有任何样式代码，每个组件的样式都需要主题包中对应的样式文件来提供。")]),_vm._v(" "),_c('p',[_vm._v("为了方便在按需引入的同时不需要手动引入每个组件的样式代码，我们提供了 veui-loader 来完成通过配置自动将依赖的样式文件注入组件，详情请参考 veui-loader 的"),_c('a',{attrs:{"href":"../getting-started/veui-loader"}},[_vm._v("相关介绍")]),_vm._v("。")]),_vm._v(" "),_c('h2',{attrs:{"id":"创建自定义主题包"}},[_vm._v("创建自定义主题包")]),_vm._v(" "),_c('p',[_vm._v("veui-loader 为 VEUI 注入依赖时，同时支持注入 script 类型及 style 类型的模块。所以主题包中可以为每个组件提供这两种类型的主题配置。")]),_vm._v(" "),_c('h3',{attrs:{"id":"自定义样式"}},[_vm._v("自定义样式")]),_vm._v(" "),_c('div',{staticClass:"warning custom-block"},[_c('p',[_vm._v("注意，主题包样式对 VEUI 组件的 DOM 结构会有依赖。")])]),_vm._v(" "),_c('p',[_vm._v("为每个组件提供完整的样式，可以使用任何预处理语言。每个组件具体提供的类名及选择器可以参考 veui-theme-one 中的实现。")]),_vm._v(" "),_c('pre',[_c('code',{staticClass:"hljs language-less"},[_c('span',{staticClass:"hljs-selector-class"},[_vm._v(".veui-button")]),_vm._v(" {\n  "),_c('span',{staticClass:"hljs-comment"},[_vm._v("/* ... */")]),_vm._v("\n}")])]),_vm._v(" "),_c('h3',{attrs:{"id":"自定义图标"}},[_vm._v("自定义图标")]),_vm._v(" "),_c('p',[_vm._v("VEUI 的 "),_c('code',[_vm._v("Icon")]),_vm._v(" 组件封装了 "),_c('a',{attrs:{"href":"https://justineo.github.io/vue-awesome/demo/"}},[_vm._v("Vue-Awesome")]),_vm._v(" 来输出内联 SVG 图标，无法直接在样式代码中指定，需要通过 script 模块进行注册。每个组件都定义了语义明确的图标接口，我们需要做的只是在全局配置中为组件注入相应的图标名称映射并引入对应的图标模块：")]),_vm._v(" "),_c('pre',[_c('code',{staticClass:"hljs language-js"},[_c('span',{staticClass:"hljs-keyword"},[_vm._v("import")]),_vm._v(" config "),_c('span',{staticClass:"hljs-keyword"},[_vm._v("from")]),_vm._v(" "),_c('span',{staticClass:"hljs-string"},[_vm._v("'veui/managers/config'")]),_vm._v("\n"),_c('span',{staticClass:"hljs-keyword"},[_vm._v("import")]),_vm._v(" "),_c('span',{staticClass:"hljs-string"},[_vm._v("'../icons/angle-up-small'")]),_vm._v("\n"),_c('span',{staticClass:"hljs-keyword"},[_vm._v("import")]),_vm._v(" "),_c('span',{staticClass:"hljs-string"},[_vm._v("'../icons/angle-down-small'")]),_vm._v("\n\nconfig.defaults({\n  "),_c('span',{staticClass:"hljs-attr"},[_vm._v("icons")]),_vm._v(": {\n    "),_c('span',{staticClass:"hljs-attr"},[_vm._v("expand")]),_vm._v(": "),_c('span',{staticClass:"hljs-string"},[_vm._v("'angle-down-small'")]),_vm._v(",\n    "),_c('span',{staticClass:"hljs-attr"},[_vm._v("collapse")]),_vm._v(": "),_c('span',{staticClass:"hljs-string"},[_vm._v("'angle-up-small'")]),_vm._v("\n  }\n}, "),_c('span',{staticClass:"hljs-string"},[_vm._v("'select'")]),_vm._v(")")])]),_vm._v(" "),_c('p',[_vm._v("除了 veui-theme-one 自带的图标外，目前可以使用的图标包还有：")]),_vm._v(" "),_c('ul',[_c('li',[_c('a',{attrs:{"href":"https://justineo.github.io/vue-awesome/demo/"}},[_c('code',[_vm._v("vue-awesome/icons")])]),_vm._v("：Vue-Awesome 自带 "),_c('a',{attrs:{"href":"https://fontawesome.com/"}},[_vm._v("FontAwesome")]),_vm._v(" 图标包")]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"https://justineo.github.io/vue-awesome-material-icons/demo/"}},[_c('code',[_vm._v("vue-awesome-material-icons/icons")])]),_vm._v("：同样基于 Vue-Awesome 的 "),_c('a',{attrs:{"href":"https://material.io/tools/icons"}},[_vm._v("Material Icons")]),_vm._v(" 图标包")])]),_vm._v(" "),_c('h3',{attrs:{"id":"预设样式及自定义配置"}},[_vm._v("预设样式及自定义配置")]),_vm._v(" "),_c('p',[_vm._v("VEUI 中各个组件的可切换的预设样式是通过为主题包提供可扩展的 "),_c('code',[_vm._v("ui")]),_vm._v(" 配置实现的。")]),_vm._v(" "),_c('p',[_vm._v("新增一个预设样式 "),_c('code',[_vm._v("foo")]),_vm._v(" 只需要在样式文件中添加 "),_c('code',[_vm._v("[ui~=\"foo\"]")]),_vm._v(" 对应的样式并在使用组件时添加对应的 "),_c('code',[_vm._v("ui=\"foo\"")]),_vm._v(" 声明即可完成：")]),_vm._v(" "),_c('pre',[_c('code',{staticClass:"hljs language-less"},[_c('span',{staticClass:"hljs-selector-class"},[_vm._v(".veui-select")]),_vm._v(" {\n  "),_c('span',{staticClass:"hljs-comment"},[_vm._v("/* ... */")]),_vm._v("\n\n  "),_c('span',{staticClass:"hljs-selector-tag"},[_vm._v("&")]),_c('span',{staticClass:"hljs-selector-attr"},[_vm._v("[ui~=\"foo\"]")]),_vm._v(" {\n    "),_c('span',{staticClass:"hljs-attribute"},[_vm._v("color")]),_vm._v(": "),_c('span',{staticClass:"hljs-number"},[_vm._v("#f00")]),_vm._v(";\n  }\n}")])]),_vm._v(" "),_c('pre',[_c('code',{staticClass:"hljs language-html"},[_c('span',{staticClass:"hljs-tag"},[_vm._v("<"),_c('span',{staticClass:"hljs-name"},[_vm._v("veui-select")]),_vm._v(" "),_c('span',{staticClass:"hljs-attr"},[_vm._v("ui")]),_vm._v("="),_c('span',{staticClass:"hljs-string"},[_vm._v("\"foo\"")]),_vm._v(">")]),_vm._v("..."),_c('span',{staticClass:"hljs-tag"},[_vm._v("</"),_c('span',{staticClass:"hljs-name"},[_vm._v("veui-select")]),_vm._v(">")])])]),_vm._v(" "),_c('p',[_vm._v("一个组件也可以同时应用多个预设样式：")]),_vm._v(" "),_c('pre',[_c('code',{staticClass:"hljs language-html"},[_c('span',{staticClass:"hljs-tag"},[_vm._v("<"),_c('span',{staticClass:"hljs-name"},[_vm._v("veui-select")]),_vm._v(" "),_c('span',{staticClass:"hljs-attr"},[_vm._v("ui")]),_vm._v("="),_c('span',{staticClass:"hljs-string"},[_vm._v("\"foo bar\"")]),_vm._v(">")]),_vm._v("..."),_c('span',{staticClass:"hljs-tag"},[_vm._v("</"),_c('span',{staticClass:"hljs-name"},[_vm._v("veui-select")]),_vm._v(">")])])]),_vm._v(" "),_c('p',[_vm._v("但如果我们想将预设样式定义得更完善一些，比如 "),_c('code',[_vm._v("foo")]),_vm._v(" 与 "),_c('code',[_vm._v("bar")]),_vm._v(" 是组件的两种不可同时使用的预设样式怎么办呢？比如 "),_c('code',[_vm._v("small")]),_vm._v(" 和 "),_c('code',[_vm._v("large")]),_vm._v(" 样式都会自定义组件的尺寸，是互斥的，我们就需要通过在全局配置中为组件注入更详细的 "),_c('code',[_vm._v("ui")]),_vm._v(" 配置来实现。")]),_vm._v(" "),_c('p',[_c('code',[_vm._v("ui")]),_vm._v(" 字段下每个属性名都是需要声明的预设样式名称，其值的类型为："),_c('code',[_vm._v("{ values, boolean, inherit }")]),_vm._v("。")]),_vm._v(" "),_c('p',[_vm._v("字段详情：")]),_vm._v(" "),_c('table',[_c('thead',[_c('tr',[_c('th',[_vm._v("名称")]),_c('th',[_vm._v("类型")]),_c('th',[_vm._v("默认值")]),_c('th',[_vm._v("描述")])])]),_c('tbody',[_c('tr',[_c('td',[_c('code',[_vm._v("values")])]),_c('td',[_c('code',[_vm._v("Array<string>")])]),_c('td',[_vm._v("-")]),_c('td',[_vm._v("预设 "),_c('code',[_vm._v("ui")]),_vm._v(" 属性的可选值。")])]),_c('tr',[_c('td',[_c('code',[_vm._v("boolean")])]),_c('td',[_c('code',[_vm._v("boolean")])]),_c('td',[_c('code',[_vm._v("false")])]),_c('td',[_vm._v("预设 "),_c('code',[_vm._v("ui")]),_vm._v(" 属性是否为布尔型。")])]),_c('tr',[_c('td',[_c('code',[_vm._v("inherit")])]),_c('td',[_c('code',[_vm._v("boolean")])]),_c('td',[_c('code',[_vm._v("false")])]),_c('td',[_vm._v("预设 "),_c('code',[_vm._v("ui")]),_vm._v(" 属性值是否会被子组件继承。")])])])]),_vm._v(" "),_c('p',[_vm._v("以 "),_c('code',[_vm._v("Select")]),_vm._v(" 组件为例：")]),_vm._v(" "),_c('pre',[_c('code',{staticClass:"hljs language-js"},[_c('span',{staticClass:"hljs-keyword"},[_vm._v("import")]),_vm._v(" config "),_c('span',{staticClass:"hljs-keyword"},[_vm._v("from")]),_vm._v(" "),_c('span',{staticClass:"hljs-string"},[_vm._v("'veui/managers/config'")]),_vm._v("\n\nconfig.defaults({\n  "),_c('span',{staticClass:"hljs-attr"},[_vm._v("ui")]),_vm._v(": {\n    "),_c('span',{staticClass:"hljs-attr"},[_vm._v("size")]),_vm._v(": {\n      "),_c('span',{staticClass:"hljs-attr"},[_vm._v("values")]),_vm._v(": ["),_c('span',{staticClass:"hljs-string"},[_vm._v("'large'")]),_vm._v(", "),_c('span',{staticClass:"hljs-string"},[_vm._v("'small'")]),_vm._v(", "),_c('span',{staticClass:"hljs-string"},[_vm._v("'tiny'")]),_vm._v(", "),_c('span',{staticClass:"hljs-string"},[_vm._v("'micro'")]),_vm._v("],\n      "),_c('span',{staticClass:"hljs-attr"},[_vm._v("inherit")]),_vm._v(": "),_c('span',{staticClass:"hljs-literal"},[_vm._v("true")]),_vm._v("\n    },\n    "),_c('span',{staticClass:"hljs-attr"},[_vm._v("style")]),_vm._v(": {\n      "),_c('span',{staticClass:"hljs-attr"},[_vm._v("values")]),_vm._v(": ["),_c('span',{staticClass:"hljs-string"},[_vm._v("'alt'")]),_vm._v("]\n    }\n  }\n}, "),_c('span',{staticClass:"hljs-string"},[_vm._v("'select'")]),_vm._v(")")])]),_vm._v(" "),_c('p',[_vm._v("在上面这个例子中，我们定义了两个 "),_c('code',[_vm._v("ui")]),_vm._v(" 属性："),_c('code',[_vm._v("size")]),_vm._v(" 和 "),_c('code',[_vm._v("style")]),_vm._v("。它们都是枚举类型，其中 "),_c('code',[_vm._v("size")]),_vm._v(" 值可被子组件继承。最终调用 "),_c('code',[_vm._v("Select")]),_vm._v(" 组件时，可以这样启用预设样式：")]),_vm._v(" "),_c('pre',[_c('code',{staticClass:"hljs language-html"},[_c('span',{staticClass:"hljs-tag"},[_vm._v("<"),_c('span',{staticClass:"hljs-name"},[_vm._v("veui-select")]),_vm._v(" "),_c('span',{staticClass:"hljs-attr"},[_vm._v("ui")]),_vm._v("="),_c('span',{staticClass:"hljs-string"},[_vm._v("\"alt small\"")]),_vm._v(">")]),_vm._v("..."),_c('span',{staticClass:"hljs-tag"},[_vm._v("</"),_c('span',{staticClass:"hljs-name"},[_vm._v("veui-select")]),_vm._v(">")])])]),_vm._v(" "),_c('p',[_vm._v("当然，我们也可以完全不定义 "),_c('code',[_vm._v("ui")]),_vm._v(" 属性的详情，这时 VEUI 会将用户书写的 "),_c('code',[_vm._v("ui")]),_vm._v(" 属性原样输出，不会进行去重、同属性的属性值冲突检测、继承等特殊处理。")]),_vm._v(" "),_c('div',{staticClass:"warning custom-block"},[_c('p',[_vm._v("由于 "),_c('code',[_vm._v("ui")]),_vm._v(" 属性最后会将值打平输出到 DOM 元素上，所以各个属性的值不能冲突。")])]),_vm._v(" "),_c('h3',{attrs:{"id":"指定组件内部组件的预设样式"}},[_vm._v("指定组件内部组件的预设样式")]),_vm._v(" "),_c('p',[_vm._v("有一些组件由多个其它组件组合而成，此时我们可能会需要全局指定内部特定部件的预设样式。比如在 veui-theme-one 中，"),_c('code',[_vm._v("Dialog")]),_vm._v(" 中的取消按钮默认采用默认样式，而如果在其它主题中我们可能会想重置为 "),_c('code',[_vm._v("link")]),_vm._v(" 样式。此时可以使用全局配置修改组件的 "),_c('code',[_vm._v("parts")]),_vm._v(" 映射。")]),_vm._v(" "),_c('pre',[_c('code',{staticClass:"hljs language-js"},[_c('span',{staticClass:"hljs-keyword"},[_vm._v("import")]),_vm._v(" config "),_c('span',{staticClass:"hljs-keyword"},[_vm._v("from")]),_vm._v(" "),_c('span',{staticClass:"hljs-string"},[_vm._v("'veui/managers/config'")]),_vm._v("\n\nconfig.defaults({\n  "),_c('span',{staticClass:"hljs-attr"},[_vm._v("parts")]),_vm._v(": {\n    "),_c('span',{staticClass:"hljs-attr"},[_vm._v("ok")]),_vm._v(": "),_c('span',{staticClass:"hljs-string"},[_vm._v("'primary'")]),_vm._v(",\n    "),_c('span',{staticClass:"hljs-attr"},[_vm._v("cancel")]),_vm._v(": "),_c('span',{staticClass:"hljs-string"},[_vm._v("'link'")]),_vm._v("\n  }\n}, "),_c('span',{staticClass:"hljs-string"},[_vm._v("'select'")]),_vm._v(")")])]),_vm._v(" "),_c('h2',{attrs:{"id":"主题包列表"}},[_vm._v("主题包列表")]),_vm._v(" "),_c('ul',[_c('li',[_c('a',{attrs:{"href":"https://github.com/ecomfe/veui/tree/dev/packages/veui-theme-one"}},[_vm._v("veui-theme-one")]),_vm._v("：基于 ONE DESIGN 的 VEUI 主题")]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"https://github.com/ecomfe/veui-theme-blue"}},[_vm._v("veui-theme-blue")]),_vm._v("：基于 Theme Blue 的 VEUI 主题")]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"https://justineo.github.io/veui-theme-spectre/demo/"}},[_vm._v("veui-theme-spectre")]),_vm._v("：基于 Spectre.css 的 VEUI 主题")])])])}]


// CONCATENATED MODULE: ./pages/advanced/theming.vue?vue&type=template&id=7067e2bb&scoped=true&

// EXTERNAL MODULE: ./common/i18n.js
var i18n = __webpack_require__(59);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/veui-loader/lib??ref--14!./pages/advanced/theming.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var themingvue_type_script_lang_js_ = ({
  mixins: [i18n["b" /* htmlAttrs */]]
});
// CONCATENATED MODULE: ./pages/advanced/theming.vue?vue&type=script&lang=js&
 /* harmony default export */ var advanced_themingvue_type_script_lang_js_ = (themingvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./assets/styles/post.styl?vue&type=style&index=0&id=7067e2bb&lang=stylus&scoped=true&
var postvue_type_style_index_0_id_7067e2bb_lang_stylus_scoped_true_ = __webpack_require__(952);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/advanced/theming.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  advanced_themingvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "7067e2bb",
  null
  
)

/* harmony default export */ var theming = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 476:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(953);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(10).default
var update = add("5714178d", content, true, {"sourceMap":false});

/***/ }),

/***/ 952:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_stylus_loader_index_js_ref_10_oneOf_1_3_post_styl_vue_type_style_index_0_id_7067e2bb_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(476);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_stylus_loader_index_js_ref_10_oneOf_1_3_post_styl_vue_type_style_index_0_id_7067e2bb_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_stylus_loader_index_js_ref_10_oneOf_1_3_post_styl_vue_type_style_index_0_id_7067e2bb_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_stylus_loader_index_js_ref_10_oneOf_1_3_post_styl_vue_type_style_index_0_id_7067e2bb_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 953:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)(false);
// Module
exports.push([module.i, ".hljs[data-v-7067e2bb]{display:block;overflow-x:auto;padding:.5em;color:#abb2bf;background:#282c34}.hljs-comment[data-v-7067e2bb],.hljs-quote[data-v-7067e2bb]{color:#5c6370;font-style:italic}.hljs-doctag[data-v-7067e2bb],.hljs-formula[data-v-7067e2bb],.hljs-keyword[data-v-7067e2bb]{color:#c678dd}.hljs-deletion[data-v-7067e2bb],.hljs-name[data-v-7067e2bb],.hljs-section[data-v-7067e2bb],.hljs-selector-tag[data-v-7067e2bb],.hljs-subst[data-v-7067e2bb]{color:#e06c75}.hljs-literal[data-v-7067e2bb]{color:#56b6c2}.hljs-addition[data-v-7067e2bb],.hljs-attribute[data-v-7067e2bb],.hljs-meta-string[data-v-7067e2bb],.hljs-regexp[data-v-7067e2bb],.hljs-string[data-v-7067e2bb]{color:#98c379}.hljs-built_in[data-v-7067e2bb],.hljs-class .hljs-title[data-v-7067e2bb]{color:#e6c07b}.hljs-attr[data-v-7067e2bb],.hljs-number[data-v-7067e2bb],.hljs-selector-attr[data-v-7067e2bb],.hljs-selector-class[data-v-7067e2bb],.hljs-selector-pseudo[data-v-7067e2bb],.hljs-template-variable[data-v-7067e2bb],.hljs-type[data-v-7067e2bb],.hljs-variable[data-v-7067e2bb]{color:#d19a66}.hljs-bullet[data-v-7067e2bb],.hljs-link[data-v-7067e2bb],.hljs-meta[data-v-7067e2bb],.hljs-selector-id[data-v-7067e2bb],.hljs-symbol[data-v-7067e2bb],.hljs-title[data-v-7067e2bb]{color:#61aeee}.hljs-emphasis[data-v-7067e2bb]{font-style:italic}.hljs-strong[data-v-7067e2bb]{font-weight:700}.hljs-link[data-v-7067e2bb]{text-decoration:underline}.mermaid[data-v-7067e2bb]{font-family:Helvetica Neue,Arial,PingFang SC,Microsoft YaHei,sans-serif;font-size:13px}.mermaid .label[data-v-7067e2bb]{color:#333}.mermaid .node circle[data-v-7067e2bb],.mermaid .node ellipse[data-v-7067e2bb],.mermaid .node polygon[data-v-7067e2bb],.mermaid .node rect[data-v-7067e2bb]{fill:#eee;stroke:#999;stroke-width:1px}.mermaid .node.clickable[data-v-7067e2bb]{cursor:pointer}.mermaid .arrowheadPath[data-v-7067e2bb]{fill:#333}.mermaid .edgePath .path[data-v-7067e2bb]{stroke:#666;stroke-width:1.5px}.mermaid .edgeLabel[data-v-7067e2bb]{background-color:#fff}.mermaid .cluster rect[data-v-7067e2bb]{fill:#eaf2fb!important;stroke:#26a!important;stroke-width:1px!important}.mermaid .cluster text[data-v-7067e2bb]{fill:#333}.mermaid div.mermaidTooltip[data-v-7067e2bb]{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:Helvetica Neue,Arial,PingFang SC,Microsoft YaHei,sans-serif;font-size:12px;background:#eaf2fb;border:1px solid #26a;border-radius:2px;pointer-events:none;z-index:100}.post[data-v-7067e2bb]{padding:45px 60px;font-size:14px;line-height:1.8;color:#666;font-weight:400;-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto}.post-layout .post[data-v-7067e2bb]{min-height:100%;margin-bottom:-192px}.post-layout .post[data-v-7067e2bb]:after{content:\"\";display:block;height:192px}.post-layout.no-links .post[data-v-7067e2bb]{margin-bottom:-58px}.no-links .post[data-v-7067e2bb]:after{height:58px}.post h1[data-v-7067e2bb]{margin-top:0;margin-bottom:1.25em;font-size:36px}.post h1 small[data-v-7067e2bb]{vertical-align:.1em;color:#999}.post h2[data-v-7067e2bb]{margin-top:1.3em;margin-bottom:1.2em;font-size:30px}.post h2[data-v-7067e2bb]:before{content:\"#\";margin-right:5px;color:#ccc}.post h2+h3[data-v-7067e2bb]{margin-top:2em}.post h3[data-v-7067e2bb]{margin-top:1.25em;margin-bottom:1.15em;font-size:24px}.post h4[data-v-7067e2bb]{margin-top:1.15em;margin-bottom:1.1em;font-size:18px}.post h5[data-v-7067e2bb]{margin-top:1.05em;margin-bottom:1.05em;font-size:14px}.post h6[data-v-7067e2bb]{margin-top:1em;margin-bottom:1em;font-size:12px}.post h1[data-v-7067e2bb],.post h2[data-v-7067e2bb],.post h3[data-v-7067e2bb]{font-weight:500;clear:both}.post h1[data-v-7067e2bb],.post h2[data-v-7067e2bb],.post h3[data-v-7067e2bb],.post h4[data-v-7067e2bb],.post h5[data-v-7067e2bb],.post h6[data-v-7067e2bb]{color:#333;line-height:1}.post br[data-v-7067e2bb]{clear:both}.post p[data-v-7067e2bb]{margin-top:.5em;margin-bottom:.5em}.post ol[data-v-7067e2bb],.post ul[data-v-7067e2bb]{padding-left:1.5em}.post blockquote[data-v-7067e2bb]{margin:1em 0;padding-left:1em;border-left:5px solid #f1f1f1;color:#999}.post table[data-v-7067e2bb]{width:100%;border-collapse:collapse;border-color:#f1f1f1;border-style:none solid;border-width:1px;margin-top:1.5em;margin-bottom:1.5em}.post table pre[data-v-7067e2bb],.post table table[data-v-7067e2bb]{max-width:480px}.post td[data-v-7067e2bb],.post th[data-v-7067e2bb]{min-width:90px;padding:7px 14px;border-color:#f1f1f1;border-style:solid none;border-width:1px;text-align:left}.post td[data-v-7067e2bb]>:first-child,.post th[data-v-7067e2bb]>:first-child{margin-top:5px}.post td[data-v-7067e2bb]>:last-child,.post th[data-v-7067e2bb]>:last-child{margin-bottom:5px}.post td pre[data-v-7067e2bb],.post th pre[data-v-7067e2bb]{padding:10px 15px}.post td table[data-v-7067e2bb],.post th table[data-v-7067e2bb]{margin-top:.2em;margin-bottom:.5em}.post td[data-v-7067e2bb]:first-child{white-space:nowrap}.post a[data-v-7067e2bb]:link:not([class^=veui-]),.post a[data-v-7067e2bb]:visited:not([class^=veui-]){text-decoration:none;color:#3998fc;transition:color .2s}.post a[data-v-7067e2bb]:link:not([class^=veui-]):hover,.post a[data-v-7067e2bb]:visited:not([class^=veui-]):hover{color:#3389e3}.post a[data-v-7067e2bb]:link:not([class^=veui-]):active,.post a[data-v-7067e2bb]:visited:not([class^=veui-]):active{color:#2e7aca}.post code[data-v-7067e2bb]{padding:2px 4px;background-color:rgba(0,0,0,.024);font-size:90%;overflow:visible;-webkit-hyphens:none;-ms-hyphens:none;hyphens:none}.post hr[data-v-7067e2bb]{height:1px;margin:2em 0;padding:0;background-color:#eff0f1;border:0;clear:both}.post figure[data-v-7067e2bb]{float:right;width:60%;margin:0 0 30px 20px}.post figure+h1[data-v-7067e2bb],.post figure+h2[data-v-7067e2bb],.post figure+h3[data-v-7067e2bb],.post figure+h4[data-v-7067e2bb],.post figure+h5[data-v-7067e2bb],.post figure+h6[data-v-7067e2bb]{margin-top:0}.post figure img[data-v-7067e2bb]{display:block;margin:auto}.post figure .preview[data-v-7067e2bb]{padding:20px;overflow:hidden;border:1px solid #e5e5e5;transition:box-shadow .2s;cursor:pointer;text-align:center}.post figure .preview[data-v-7067e2bb]:hover{box-shadow:0 0 5px rgba(0,0,0,.2)}.post figure.hero[data-v-7067e2bb]{width:100%;float:none}.post figcaption[data-v-7067e2bb]{margin-top:10px;font-size:12px}.post figcaption p[data-v-7067e2bb]{margin:0;line-height:20px}.post figcaption .caption[data-v-7067e2bb]{font-weight:500}.post figcaption .desc[data-v-7067e2bb]{color:#999}.post .comparison[data-v-7067e2bb]{float:right;width:60%;margin:0 0 30px 20px}.post .comparison figure[data-v-7067e2bb]{width:calc(50% - 5px);margin:0}.post .comparison .good[data-v-7067e2bb]{float:left}.post .comparison .bad[data-v-7067e2bb]{float:right}.post .comparison .bad .caption[data-v-7067e2bb]{color:#ff5b5b}.post img[data-v-7067e2bb]{max-width:100%;max-height:100%}.post pre[data-v-7067e2bb]{border:1px solid #eee;padding:30px;background-color:#f9f9f9;white-space:pre;overflow:auto}.post pre code[data-v-7067e2bb]{background-color:transparent;padding:0}.post var[data-v-7067e2bb]{font-family:\"PT Serif\",Georgia,serif}.post kbd[data-v-7067e2bb]{display:inline-block;padding:3px 5px 6px;font-size:90%;line-height:10px;color:#444d56;vertical-align:1px;background-color:#fafbfc;border:1px solid #c6cbd1;border-bottom-color:#959da5;border-radius:3px;box-shadow:inset 0 -1px 0 #959da5}.post .custom-block[data-v-7067e2bb]{border:1px solid;margin:1em 0;padding:.75em 1em}.post .custom-block[data-v-7067e2bb]>:first-child{margin-top:0}.post .custom-block[data-v-7067e2bb]>:last-child{margin-bottom:0}.post .alert[data-v-7067e2bb],.post .tip[data-v-7067e2bb],.post .warning[data-v-7067e2bb]{font-size:13px}.post .alert[data-v-7067e2bb]{border-color:#fee;background-color:#fff6f6}.post .warning[data-v-7067e2bb]{border-color:#fef4e6;background-color:#fef9f2}.post .tip[data-v-7067e2bb]{border-color:#d8ebff;background-color:#ebf5ff}.post .badges[data-v-7067e2bb]{border:none;padding:0}.post .badges code[data-v-7067e2bb]{padding:2px 3px;background:#333;border-radius:2px;color:#fff;font-size:80%}.post .oss-badges[data-v-7067e2bb]{border:none;padding:0}.post .oss-badges a[data-v-7067e2bb]{margin-right:10px}.post .one-demo[data-v-7067e2bb]{margin:1em 0 1.25em}", ""]);



/***/ })

}]);