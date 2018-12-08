(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ 1148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/veui-loader/lib??ref--11!./pages/development/advanced/custom-rules.vue?vue&type=template&id=03b6421a&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('article',{staticClass:"content post"},[_c('h1',{attrs:{"id":"自定义校验规则"}},[_vm._v("自定义校验规则")]),_vm._v(" "),_vm._m(0),_vm._v(" "),_c('h2',{attrs:{"id":"示例"}},[_vm._v("示例")]),_vm._v(" "),_vm._m(1),_vm._v(" "),_vm._m(2),_vm._v(" "),_c('h2',{attrs:{"id":"api"}},[_vm._v("API")]),_vm._v(" "),_c('table',[_vm._m(3),_c('tbody',[_vm._m(4),_vm._m(5),_c('tr',[_vm._m(6),_vm._m(7),_c('td',[_c('p',[_vm._v("规则优先级。数值低优先级高。")]),_vm._v(" "),_c('one-details',{attrs:{"summary":"目前内置的优先级"}},[_c('table',[_c('thead',[_c('tr',[_c('th',[_vm._v("名称")]),_c('th',[_vm._v("优先级")]),_c('th')])]),_c('tbody',[_c('tr',[_c('td',[_c('code',[_vm._v("required")])]),_c('td',[_c('code',[_vm._v("0")])]),_c('td')]),_c('tr',[_c('td',[_c('code',[_vm._v("numeric")])]),_c('td',[_c('code',[_vm._v("10")])]),_c('td')]),_c('tr',[_c('td',[_c('code',[_vm._v("pattern")])]),_c('td',[_c('code',[_vm._v("50")])]),_c('td')]),_c('tr',[_c('td',[_c('code',[_vm._v("maxLength")])]),_c('td',[_c('code',[_vm._v("100")])]),_c('td')]),_c('tr',[_c('td',[_c('code',[_vm._v("minLength")])]),_c('td',[_c('code',[_vm._v("100")])]),_c('td')]),_c('tr',[_c('td',[_c('code',[_vm._v("max")])]),_c('td',[_c('code',[_vm._v("200")])]),_c('td')]),_c('tr',[_c('td',[_c('code',[_vm._v("min")])]),_c('td',[_c('code',[_vm._v("200")])]),_c('td')])])])])],1)])])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_vm._v("对于多值校验，"),_c('a',{attrs:{"href":"../components/form#%E5%B1%9E%E6%80%A7"}},[_vm._v("表单 › validators 属性")]),_vm._v("提供了比较完善的功能来实现自定义校验。对于单值校验，"),_c('code',[_vm._v("Field")]),_vm._v(" 组件内置了 7 种常见规则，具体参考"),_c('a',{attrs:{"href":"../components/field#%E5%B1%9E%E6%80%A7"}},[_vm._v("表单项 › rule 属性")]),_vm._v("。如果无法覆盖需求，"),_c('code',[_vm._v("VEUI")]),_vm._v(" 校验规则模块允许你添加自定义规则。")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('pre',[_c('code',{staticClass:"hljs language-js"},[_c('span',{staticClass:"hljs-keyword"},[_vm._v("import")]),_vm._v(" ruleManager "),_c('span',{staticClass:"hljs-keyword"},[_vm._v("from")]),_vm._v(" "),_c('span',{staticClass:"hljs-string"},[_vm._v("'veui/manager/rule'")]),_vm._v("\nruleManager.addRule("),_c('span',{staticClass:"hljs-string"},[_vm._v("'range'")]),_vm._v(", {\n  validate (value, ruleValue) {\n    "),_c('span',{staticClass:"hljs-comment"},[_vm._v("// 仅实现大小校验部分")]),_vm._v("\n    "),_c('span',{staticClass:"hljs-keyword"},[_vm._v("let")]),_vm._v(" range = value.split("),_c('span',{staticClass:"hljs-string"},[_vm._v("'-'")]),_vm._v(")\n    "),_c('span',{staticClass:"hljs-keyword"},[_vm._v("return")]),_vm._v(" +range["),_c('span',{staticClass:"hljs-number"},[_vm._v("0")]),_vm._v("] >= ruleValue.floor && +range["),_c('span',{staticClass:"hljs-number"},[_vm._v("1")]),_vm._v("] <= ruleValue.ceil\n  },\n  "),_c('span',{staticClass:"hljs-attr"},[_vm._v("message")]),_vm._v(": "),_c('span',{staticClass:"hljs-string"},[_vm._v("'范围值必须在限定区间内'")]),_vm._v(",\n  "),_c('span',{staticClass:"hljs-attr"},[_vm._v("priority")]),_vm._v(": "),_c('span',{staticClass:"hljs-number"},[_vm._v("100")]),_vm._v("\n})")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('pre',[_c('code',{staticClass:"hljs language-html"},[_c('span',{staticClass:"hljs-tag"},[_vm._v("<"),_c('span',{staticClass:"hljs-name"},[_vm._v("veui-field")]),_vm._v("\n  "),_c('span',{staticClass:"hljs-attr"},[_vm._v(":rules")]),_vm._v("="),_c('span',{staticClass:"hljs-string"},[_vm._v("[{")]),_vm._v("\n    "),_c('span',{staticClass:"hljs-attr"},[_vm._v("triggers:")]),_vm._v(" '"),_c('span',{staticClass:"hljs-attr"},[_vm._v("change")]),_vm._v("'\n    "),_c('span',{staticClass:"hljs-attr"},[_vm._v("name:")]),_vm._v(" '"),_c('span',{staticClass:"hljs-attr"},[_vm._v("range")]),_vm._v("',\n    "),_c('span',{staticClass:"hljs-attr"},[_vm._v("value:")]),_vm._v(" {\n      "),_c('span',{staticClass:"hljs-attr"},[_vm._v("ceil:")]),_vm._v(" "),_c('span',{staticClass:"hljs-attr"},[_vm._v("100")]),_vm._v(",\n      "),_c('span',{staticClass:"hljs-attr"},[_vm._v("floor:")]),_vm._v(" "),_c('span',{staticClass:"hljs-attr"},[_vm._v("50")]),_vm._v("\n    }\n  }]\n  "),_c('span',{staticClass:"hljs-attr"},[_vm._v("...")]),_vm._v("\n>")]),_vm._v("..."),_c('span',{staticClass:"hljs-tag"},[_vm._v("</"),_c('span',{staticClass:"hljs-name"},[_vm._v("veui-field")]),_vm._v(">")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('thead',[_c('tr',[_c('th',[_vm._v("名称")]),_c('th',[_vm._v("类型")]),_c('th',[_vm._v("描述")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('tr',[_c('td',[_c('code',[_vm._v("validate")])]),_c('td',[_c('code',[_vm._v("function(value: *, ruleValue: ?*=)")])]),_c('td',[_vm._v("校验逻辑，"),_c('code',[_vm._v("value")]),_vm._v(" 为 "),_c('code',[_vm._v("Field")]),_vm._v(" 需要校验的值，"),_c('code',[_vm._v("ruleValue")]),_vm._v(" 可选，根据规则需要添加，表示规则的限定值。")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('tr',[_c('td',[_c('code',[_vm._v("message")])]),_c('td',[_c('code',[_vm._v("function|string")])]),_c('td',[_c('p',[_vm._v("默认出错信息。")]),_vm._v(" "),_c('p',[_vm._v("若类型为 "),_c('code',[_vm._v("string")]),_vm._v("，可以通过 "),_c('code',[_vm._v("{ruleValue}")]),_vm._v(" 引用 "),_c('code',[_vm._v("ruleValue")]),_vm._v("、"),_c('code',[_vm._v("{value}")]),_vm._v(" 引用 "),_c('code',[_vm._v("value")]),_vm._v("。例如：")]),_vm._v(" "),_c('pre',[_c('code',{staticClass:"hljs language-js"},[_c('span',{staticClass:"hljs-keyword"},[_vm._v("let")]),_vm._v(" minLengthRule = {\n  validate (value, ruleValue) {\n    "),_c('span',{staticClass:"hljs-keyword"},[_vm._v("return")]),_vm._v(" !isEmpty(value) ? val.length >= ruleValue : "),_c('span',{staticClass:"hljs-literal"},[_vm._v("true")]),_vm._v("\n  },\n  "),_c('span',{staticClass:"hljs-attr"},[_vm._v("message")]),_vm._v(": "),_c('span',{staticClass:"hljs-string"},[_vm._v("'字符长度不能短于 {ruleValue}，当前长度 {value}'")]),_vm._v(",\n  "),_c('span',{staticClass:"hljs-attr"},[_vm._v("priority")]),_vm._v(": "),_c('span',{staticClass:"hljs-number"},[_vm._v("100")]),_vm._v("\n}")])]),_vm._v(" "),_c('p',[_vm._v("若类型为 "),_c('code',[_vm._v("function")]),_vm._v("，参数为 "),_c('code',[_vm._v("(ruleValue: ?*=, value: *)")]),_vm._v("。例如：")]),_vm._v(" "),_c('pre',[_c('code',{staticClass:"hljs language-js"},[_c('span',{staticClass:"hljs-keyword"},[_vm._v("let")]),_vm._v(" minLengthRule = {\n  validate (value, ruleValue) {\n    "),_c('span',{staticClass:"hljs-keyword"},[_vm._v("return")]),_vm._v(" !isEmpty(value) ? val.length >= ruleValue : "),_c('span',{staticClass:"hljs-literal"},[_vm._v("true")]),_vm._v("\n  },\n  message (ruleValue, value) {\n    "),_c('span',{staticClass:"hljs-keyword"},[_vm._v("return")]),_vm._v(" "),_c('span',{staticClass:"hljs-string"},[_vm._v("`字符长度不能短于"),_c('span',{staticClass:"hljs-subst"},[_vm._v("${ruleValue}")]),_vm._v("，当前长度"),_c('span',{staticClass:"hljs-subst"},[_vm._v("${value}")]),_vm._v("`")]),_vm._v("\n  },\n  "),_c('span',{staticClass:"hljs-attr"},[_vm._v("priority")]),_vm._v(": "),_c('span',{staticClass:"hljs-number"},[_vm._v("100")]),_vm._v("\n}")])]),_vm._v(" "),_c('div',{staticClass:"tip custom-block"},[_c('p',[_vm._v("如果需要支持运行时切换语言，"),_c('code',[_vm._v("message")]),_vm._v(" 必须使用 "),_c('code',[_vm._v("function")]),_vm._v(" 类型。")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',[_c('code',[_vm._v("priority")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',[_c('code',[_vm._v("number")])])}]


// CONCATENATED MODULE: ./pages/development/advanced/custom-rules.vue?vue&type=template&id=03b6421a&scoped=true&

// EXTERNAL MODULE: ./components/OneDetails.vue + 4 modules
var OneDetails = __webpack_require__(425);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/veui-loader/lib??ref--11!./pages/development/advanced/custom-rules.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var custom_rulesvue_type_script_lang_js_ = ({
  components: {
    OneDetails: OneDetails["a" /* default */]
  }
});
// CONCATENATED MODULE: ./pages/development/advanced/custom-rules.vue?vue&type=script&lang=js&
 /* harmony default export */ var advanced_custom_rulesvue_type_script_lang_js_ = (custom_rulesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./assets/styles/post.styl?vue&type=style&index=0&id=03b6421a&lang=stylus&scoped=true&
var postvue_type_style_index_0_id_03b6421a_lang_stylus_scoped_true_ = __webpack_require__(742);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/development/advanced/custom-rules.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  advanced_custom_rulesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "03b6421a",
  null
  
)

component.options.__file = "custom-rules.vue"
/* harmony default export */ var custom_rules = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 421:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(428);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(9).default
var update = add("011bdead", content, true, {});

/***/ }),

/***/ 423:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var veui_components_Icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);

veui_components_Icon__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].register({
  'angle-right-small': {
    paths: [{
      d: 'M7.62 6L4.43 2.8l.8-.8 3.98 3.97-.02.03.02.02-3.98 3.97-.8-.8 3.2-3.2z',
      'fill-rule': 'evenodd'
    }],
    width: '12',
    height: '12'
  }
});

/***/ }),

/***/ 425:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/OneDetails.vue?vue&type=template&id=1bf0130e&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:{
    'one-details': true,
    expanded: _vm.expanded
  }},[_c('button',{staticClass:"summary",on:{"click":_vm.toggle}},[_c('veui-icon',{staticClass:"arrow",attrs:{"name":"angle-right-small"}}),_vm._v(" "+_vm._s(_vm.summary))],1),_vm._v(" "),_c('div',{ref:"content",staticClass:"content",style:(_vm.style),on:{"transitionend":function($event){_vm.stable = true}}},[_vm._t("default")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/OneDetails.vue?vue&type=template&id=1bf0130e&scoped=true&

// EXTERNAL MODULE: ./node_modules/veui/index.js + 333 modules
var veui = __webpack_require__(173);

// EXTERNAL MODULE: ./node_modules/veui-theme-one/icons/angle-right-small.js
var angle_right_small = __webpack_require__(423);

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
// EXTERNAL MODULE: ./components/OneDetails.vue?vue&type=style&index=0&id=1bf0130e&lang=stylus&scoped=true&
var OneDetailsvue_type_style_index_0_id_1bf0130e_lang_stylus_scoped_true_ = __webpack_require__(427);

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
  "1bf0130e",
  null
  
)

component.options.__file = "OneDetails.vue"
/* harmony default export */ var OneDetails = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 427:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_stylus_loader_index_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OneDetails_vue_vue_type_style_index_0_id_1bf0130e_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(421);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_stylus_loader_index_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OneDetails_vue_vue_type_style_index_0_id_1bf0130e_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_stylus_loader_index_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OneDetails_vue_vue_type_style_index_0_id_1bf0130e_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_stylus_loader_index_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OneDetails_vue_vue_type_style_index_0_id_1bf0130e_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 428:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// imports


// module
exports.push([module.i, "\n.one-details[data-v-1bf0130e]{overflow:hidden\n}\n.summary[data-v-1bf0130e]{border:none;background:none;padding-left:0;cursor:help;outline:none\n}\n.summary[data-v-1bf0130e]:hover{color:#333\n}\n.content[data-v-1bf0130e]{overflow:hidden;transition:height .3s\n}\n.arrow[data-v-1bf0130e]{vertical-align:top;margin-top:.35em;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s\n}\n.expanded>.summary>.arrow[data-v-1bf0130e]{-webkit-transform:rotate(90deg);transform:rotate(90deg)\n}", ""]);

// exports


/***/ }),

/***/ 443:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(743);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(9).default
var update = add("f06bebb0", content, true, {});

/***/ }),

/***/ 742:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_stylus_loader_index_js_ref_7_oneOf_1_3_post_styl_vue_type_style_index_0_id_03b6421a_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(443);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_stylus_loader_index_js_ref_7_oneOf_1_3_post_styl_vue_type_style_index_0_id_03b6421a_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_stylus_loader_index_js_ref_7_oneOf_1_3_post_styl_vue_type_style_index_0_id_03b6421a_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_stylus_loader_index_js_ref_7_oneOf_1_3_post_styl_vue_type_style_index_0_id_03b6421a_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 743:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// imports


// module
exports.push([module.i, "\n.hljs[data-v-03b6421a]{display:block;overflow-x:auto;padding:.5em;color:#abb2bf;background:#282c34\n}\n.hljs-comment[data-v-03b6421a],.hljs-quote[data-v-03b6421a]{color:#5c6370;font-style:italic\n}\n.hljs-doctag[data-v-03b6421a],.hljs-formula[data-v-03b6421a],.hljs-keyword[data-v-03b6421a]{color:#c678dd\n}\n.hljs-deletion[data-v-03b6421a],.hljs-name[data-v-03b6421a],.hljs-section[data-v-03b6421a],.hljs-selector-tag[data-v-03b6421a],.hljs-subst[data-v-03b6421a]{color:#e06c75\n}\n.hljs-literal[data-v-03b6421a]{color:#56b6c2\n}\n.hljs-addition[data-v-03b6421a],.hljs-attribute[data-v-03b6421a],.hljs-meta-string[data-v-03b6421a],.hljs-regexp[data-v-03b6421a],.hljs-string[data-v-03b6421a]{color:#98c379\n}\n.hljs-built_in[data-v-03b6421a],.hljs-class .hljs-title[data-v-03b6421a]{color:#e6c07b\n}\n.hljs-attr[data-v-03b6421a],.hljs-number[data-v-03b6421a],.hljs-selector-attr[data-v-03b6421a],.hljs-selector-class[data-v-03b6421a],.hljs-selector-pseudo[data-v-03b6421a],.hljs-template-variable[data-v-03b6421a],.hljs-type[data-v-03b6421a],.hljs-variable[data-v-03b6421a]{color:#d19a66\n}\n.hljs-bullet[data-v-03b6421a],.hljs-link[data-v-03b6421a],.hljs-meta[data-v-03b6421a],.hljs-selector-id[data-v-03b6421a],.hljs-symbol[data-v-03b6421a],.hljs-title[data-v-03b6421a]{color:#61aeee\n}\n.hljs-emphasis[data-v-03b6421a]{font-style:italic\n}\n.hljs-strong[data-v-03b6421a]{font-weight:700\n}\n.hljs-link[data-v-03b6421a]{text-decoration:underline\n}\n.post[data-v-03b6421a]{padding:45px 60px;font-size:14px;line-height:1.8;color:#666;font-weight:400\n}\n.post-layout .post[data-v-03b6421a]{min-height:100%;margin-bottom:-192px\n}\n.post-layout .post[data-v-03b6421a]:after{content:\"\";display:block;height:192px\n}\n.post-layout.no-links .post[data-v-03b6421a]{margin-bottom:-58px\n}\n.no-links .post[data-v-03b6421a]:after{height:58px\n}\n.post h1[data-v-03b6421a]{margin-top:0;margin-bottom:1.25em;font-size:36px\n}\n.post h1 small[data-v-03b6421a]{vertical-align:.1em;color:#999\n}\n.post h2[data-v-03b6421a]{margin-top:1.3em;margin-bottom:1.2em;font-size:30px\n}\n.post h2[data-v-03b6421a]:before{content:\"#\";margin-right:5px;color:#ccc\n}\n.post h2+h3[data-v-03b6421a]{margin-top:2em\n}\n.post h3[data-v-03b6421a]{margin-top:1.25em;margin-bottom:1.15em;font-size:24px\n}\n.post h4[data-v-03b6421a]{margin-top:1.15em;margin-bottom:1.1em;font-size:18px\n}\n.post h5[data-v-03b6421a]{margin-top:1.05em;margin-bottom:1.05em;font-size:14px\n}\n.post h6[data-v-03b6421a]{margin-top:1em;margin-bottom:1em;font-size:12px\n}\n.post h1[data-v-03b6421a],.post h2[data-v-03b6421a],.post h3[data-v-03b6421a]{font-weight:500;clear:both\n}\n.post h1[data-v-03b6421a],.post h2[data-v-03b6421a],.post h3[data-v-03b6421a],.post h4[data-v-03b6421a],.post h5[data-v-03b6421a],.post h6[data-v-03b6421a]{color:#333;line-height:1\n}\n.post br[data-v-03b6421a]{clear:both\n}\n.post p[data-v-03b6421a]{margin-top:.5em;margin-bottom:.5em\n}\n.post ol[data-v-03b6421a],.post ul[data-v-03b6421a]{padding-left:1.5em\n}\n.post blockquote[data-v-03b6421a]{margin:1em 0;padding-left:1em;border-left:5px solid #f1f1f1;color:#999\n}\n.post table[data-v-03b6421a]{width:100%;border-collapse:collapse;border-style:none solid;margin-top:1.5em;margin-bottom:1.5em\n}\n.post table[data-v-03b6421a],.post td[data-v-03b6421a],.post th[data-v-03b6421a]{border-color:#f1f1f1;border-width:1px\n}\n.post td[data-v-03b6421a],.post th[data-v-03b6421a]{min-width:90px;padding:7px 14px;border-style:solid none;text-align:left\n}\n.post td[data-v-03b6421a]>:first-child,.post th[data-v-03b6421a]>:first-child{margin-top:5px\n}\n.post td[data-v-03b6421a]>:last-child,.post th[data-v-03b6421a]>:last-child{margin-bottom:5px\n}\n.post td pre[data-v-03b6421a],.post th pre[data-v-03b6421a]{padding:10px 15px\n}\n.post td table[data-v-03b6421a],.post th table[data-v-03b6421a]{margin-top:.2em;margin-bottom:.5em\n}\n.post td[data-v-03b6421a]:first-child{white-space:nowrap\n}\n.post a[data-v-03b6421a]:link:not([class^=veui-]),.post a[data-v-03b6421a]:visited:not([class^=veui-]){text-decoration:none;color:#3998fc;transition:color .2s\n}\n.post a[data-v-03b6421a]:link:not([class^=veui-]):hover,.post a[data-v-03b6421a]:visited:not([class^=veui-]):hover{color:#3389e3\n}\n.post a[data-v-03b6421a]:link:not([class^=veui-]):active,.post a[data-v-03b6421a]:visited:not([class^=veui-]):active{color:#2e7aca\n}\n.post code[data-v-03b6421a]{padding:2px 4px;background-color:rgba(0,0,0,.024);font-size:90%\n}\n.post hr[data-v-03b6421a]{height:1px;margin:2em 0;padding:0;background-color:#eff0f1;border:0;clear:both\n}\n.post figure[data-v-03b6421a]{float:right;width:60%;margin:0 0 30px 20px\n}\n.post figure+h1[data-v-03b6421a],.post figure+h2[data-v-03b6421a],.post figure+h3[data-v-03b6421a],.post figure+h4[data-v-03b6421a],.post figure+h5[data-v-03b6421a],.post figure+h6[data-v-03b6421a]{margin-top:0\n}\n.post figure img[data-v-03b6421a]{display:block;margin:auto\n}\n.post figure .preview[data-v-03b6421a]{padding:20px;overflow:hidden;border:1px solid #e5e5e5;transition:box-shadow .2s;cursor:pointer;text-align:center\n}\n.post figure .preview[data-v-03b6421a]:hover{box-shadow:0 0 5px rgba(0,0,0,.2)\n}\n.post figure.hero[data-v-03b6421a]{width:100%\n}\n.post figcaption[data-v-03b6421a]{margin-top:10px;font-size:12px\n}\n.post figcaption p[data-v-03b6421a]{margin:0;line-height:20px\n}\n.post figcaption .caption[data-v-03b6421a]{font-weight:500\n}\n.post figcaption .desc[data-v-03b6421a]{color:#999\n}\n.post .comparison[data-v-03b6421a]{float:right;width:60%;margin:0 0 30px 20px\n}\n.post .comparison figure[data-v-03b6421a]{width:calc(50% - 5px);margin:0\n}\n.post .comparison .good[data-v-03b6421a]{float:left\n}\n.post .comparison .bad[data-v-03b6421a]{float:right\n}\n.post .comparison .bad .caption[data-v-03b6421a]{color:#ff5b5b\n}\n.post img[data-v-03b6421a]{max-width:100%;max-height:100%\n}\n.post pre[data-v-03b6421a]{border:1px solid #eee;padding:30px;background-color:#f9f9f9;white-space:pre;overflow:auto\n}\n.post pre code[data-v-03b6421a]{background-color:transparent;padding:0\n}\n.post var[data-v-03b6421a]{font-family:\"PT Serif\",Georgia,serif\n}\n.post kbd[data-v-03b6421a]{display:inline-block;padding:3px 5px 6px;font-size:90%;line-height:10px;color:#444d56;vertical-align:1px;background-color:#fafbfc;border:1px solid #c6cbd1;border-bottom-color:#959da5;border-radius:3px;box-shadow:inset 0 -1px 0 #959da5\n}\n.post .custom-block[data-v-03b6421a]{border:1px solid;margin:1em 0;padding:.75em 1em\n}\n.post .custom-block[data-v-03b6421a]>:first-child{margin-top:0\n}\n.post .custom-block[data-v-03b6421a]>:last-child{margin-bottom:0\n}\n.post .alert[data-v-03b6421a],.post .tip[data-v-03b6421a],.post .warning[data-v-03b6421a]{font-size:13px\n}\n.post .alert[data-v-03b6421a]{border-color:#fee;background-color:#fff6f6\n}\n.post .warning[data-v-03b6421a]{border-color:#fef4e6;background-color:#fef9f2\n}\n.post .tip[data-v-03b6421a]{border-color:#d8ebff;background-color:#ebf5ff\n}\n.post .badges[data-v-03b6421a]{border:none;padding:0\n}\n.post .badges code[data-v-03b6421a]{padding:2px 3px;background:#333;border-radius:2px;color:#fff;font-size:80%\n}\n.post .oss-badges[data-v-03b6421a]{border:none;padding:0\n}\n.post .oss-badges a[data-v-03b6421a]{margin-right:10px\n}\n.post .one-demo[data-v-03b6421a]{margin:1em 0 1.25em\n}", ""]);

// exports


/***/ })

}]);