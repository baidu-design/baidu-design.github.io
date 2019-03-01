(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ 1097:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_id_23775029_lang_less_scoped_true_docs_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(593);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_id_23775029_lang_less_scoped_true_docs_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_id_23775029_lang_less_scoped_true_docs_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_id_23775029_lang_less_scoped_true_docs_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 1098:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)(false);
// Module
exports.push([module.i, "h4[data-v-23775029]{margin-top:0}section[data-v-23775029]{margin-bottom:10px}", ""]);



/***/ }),

/***/ 422:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(429);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(10).default
var update = add("127ed8d5", content, true, {"sourceMap":false});

/***/ }),

/***/ 423:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(433);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(10).default
var update = add("840735a6", content, true, {"sourceMap":false});

/***/ }),

/***/ 424:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(435);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(10).default
var update = add("e3ba9572", content, true, {"sourceMap":false});

/***/ }),

/***/ 425:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var veui_components_Icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);

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

/***/ 426:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/OneDemo.vue?vue&type=template&id=0ec20538&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('article',{staticClass:"one-demo",class:{ expanded: _vm.localExpanded }},[_c('section',{staticClass:"demo"},[(_vm.browser)?_c('browser-window',{attrs:{"url":_vm.browser,"width":"80%","height":"400px"}},[_vm._t("default")],2):_vm._t("default")],2),(_vm.$slots.desc)?_c('section',{staticClass:"desc"},[_vm._t("desc")],2):_vm._e(),(_vm.$slots.source)?_c('section',{ref:"source",staticClass:"source",style:({ height: _vm.localExpanded ? ((_vm.sourceHeight || 0) + "px") : '0' })},[_vm._t("source")],2):_vm._e(),_c('button',{staticClass:"toggle",on:{"click":function($event){_vm.localExpanded = !_vm.localExpanded}}},[_c('veui-icon',{staticClass:"arrow",attrs:{"name":"angle-right"}}),_vm._v(" "+_vm._s(_vm.t(_vm.localExpanded ? 'hideCode' : 'showCode')))],1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/OneDemo.vue?vue&type=template&id=0ec20538&scoped=true&

// EXTERNAL MODULE: ./node_modules/veui/index.js + 351 modules
var veui = __webpack_require__(181);

// EXTERNAL MODULE: ./node_modules/veui/mixins/i18n.js
var i18n = __webpack_require__(16);

// EXTERNAL MODULE: ./node_modules/vue-windows/dist/vue-windows.es.js
var vue_windows_es = __webpack_require__(430);

// EXTERNAL MODULE: ./node_modules/veui-theme-one-icons/angle-right.js
var angle_right = __webpack_require__(425);

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/OneDemo.vue?vue&type=script&lang=js&
//
//
//
//
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
  mixins: [i18n["a" /* default */]],
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
var vue_windowsvue_type_style_index_0_lang_css_ = __webpack_require__(431);

// EXTERNAL MODULE: ./components/OneDemo.vue?vue&type=style&index=1&id=0ec20538&lang=stylus&scoped=true&
var OneDemovue_type_style_index_1_id_0ec20538_lang_stylus_scoped_true_ = __webpack_require__(428);

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
  "0ec20538",
  null
  
)

/* harmony default export */ var OneDemo = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 427:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/OneDetails.vue?vue&type=template&id=66b3dd00&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:{
    'one-details': true,
    expanded: _vm.expanded
  }},[_c('button',{staticClass:"summary",on:{"click":_vm.toggle}},[_c('veui-icon',{staticClass:"arrow",attrs:{"name":"angle-right"}}),_vm._v(" "+_vm._s(_vm.summary))],1),_c('div',{ref:"content",staticClass:"content",style:(_vm.style),on:{"transitionend":function($event){_vm.stable = true}}},[_vm._t("default")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/OneDetails.vue?vue&type=template&id=66b3dd00&scoped=true&

// EXTERNAL MODULE: ./node_modules/veui/index.js + 351 modules
var veui = __webpack_require__(181);

// EXTERNAL MODULE: ./node_modules/veui-theme-one-icons/angle-right.js
var angle_right = __webpack_require__(425);

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/OneDetails.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
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
var OneDetailsvue_type_style_index_0_id_66b3dd00_lang_stylus_scoped_true_ = __webpack_require__(434);

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

/* harmony default export */ var OneDetails = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 428:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_stylus_loader_index_js_ref_10_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OneDemo_vue_vue_type_style_index_1_id_0ec20538_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(422);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_stylus_loader_index_js_ref_10_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OneDemo_vue_vue_type_style_index_1_id_0ec20538_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_stylus_loader_index_js_ref_10_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OneDemo_vue_vue_type_style_index_1_id_0ec20538_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_stylus_loader_index_js_ref_10_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OneDemo_vue_vue_type_style_index_1_id_0ec20538_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 429:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)(false);
// Module
exports.push([module.i, ".one-demo[data-v-0ec20538]{overflow:hidden}.arrow[data-v-0ec20538]{transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s;vertical-align:-2px;-webkit-transform:rotate(90deg);transform:rotate(90deg)}.one-demo.expanded .arrow[data-v-0ec20538]{-webkit-transform:rotate(270deg);transform:rotate(270deg)}.demo[data-v-0ec20538]{padding:30px}.demo[data-v-0ec20538],.desc[data-v-0ec20538]{border:1px solid #eee}.desc[data-v-0ec20538]{padding:18px 20px;background-color:#fcfcfc}.source[data-v-0ec20538]{transition:height .3s}.source[data-v-0ec20538] pre{margin-top:0;margin-bottom:0}.desc[data-v-0ec20538],.source[data-v-0ec20538] pre,.toggle[data-v-0ec20538]{margin-top:-1px}.toggle[data-v-0ec20538]{position:relative;display:block;width:100%;height:40px;border:1px solid #eee;background-color:#fff;transition:background-color .3s;outline:none}.toggle.focus-visible[data-v-0ec20538],.toggle[data-v-0ec20538]:hover{background-color:#fafafa}", ""]);



/***/ }),

/***/ 430:
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

/***/ 431:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _vue_style_loader_index_js_ref_5_oneOf_1_0_css_loader_dist_cjs_js_ref_5_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_5_oneOf_1_2_vue_windows_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(423);
/* harmony import */ var _vue_style_loader_index_js_ref_5_oneOf_1_0_css_loader_dist_cjs_js_ref_5_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_5_oneOf_1_2_vue_windows_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_5_oneOf_1_0_css_loader_dist_cjs_js_ref_5_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_5_oneOf_1_2_vue_windows_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_vue_style_loader_index_js_ref_5_oneOf_1_0_css_loader_dist_cjs_js_ref_5_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_5_oneOf_1_2_vue_windows_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

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
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)(false);
// Module
exports.push([module.i, ".style-module_window__283Ok{width:500px;height:340px;border-radius:4px;text-align:left;vertical-align:top;margin:0 20px;display:inline-block;background-color:#fff;z-index:1;overflow:hidden;border:1px solid #ccc}.style-module_body__14MV-{padding:10px 12px;position:relative;height:calc(100% - 40px);overflow:auto}.style-module_shadow__3RfWD{box-shadow:0 20px 68px rgba(0,0,0,.55)}.style-module_dark__fHT4T{color:#fff;border-color:#151515;background-color:#151515}.style-module_safe__202Ig{color:#40ad36}.style-module_safe__202Ig.style-module_dark__fHT4T{color:#45cc4b;background-color:transparent}.style-module_header__2fZK7{height:40px;padding-right:75px;display:flex;align-items:center}.style-module_title__3cIVr{flex:1 1 320px;text-align:center;font-size:12px;color:#766f79;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.style-module_bullets__79QN2{margin-left:12px;display:flex;flex:0 0;align-items:center}.style-module_bullet__Ce0rQ{height:12px;width:12px;display:block;background:#ccc;border-radius:100%;border:1px solid}.style-module_bullet__Ce0rQ+.style-module_bullet__Ce0rQ{margin-left:5px}.style-module_bullet-red__3UfbN{background:#f85955;border-color:#d74246}.style-module_bullet-yellow__2GzZ-{background:#fbbe3f;border-color:#d7a32d}.style-module_bullet-green__1JY6W{background:#45cc4b;border-color:#40ad36}.style-module_header__2fZK7.style-module_isUrl__2Iqlr{background:#e8e8e8}.style-module_header__2fZK7.style-module_isUrl__2Iqlr .style-module_title__3cIVr{background:#fff;flex:1 1 320px;border-radius:4px;line-height:26px;margin-left:17px;padding:0 12px;text-align:left}.style-module_header__2fZK7.style-module_dark__2yIKV .style-module_title__3cIVr{color:#fff}.style-module_header__2fZK7.style-module_dark__2yIKV .style-module_bullet__Ce0rQ{border-color:transparent}.style-module_header__2fZK7.style-module_dark__2yIKV.style-module_isUrl__2Iqlr{background:hsla(0,0%,100%,.1)}.style-module_header__2fZK7.style-module_dark__2yIKV.style-module_isUrl__2Iqlr .style-module_title__3cIVr{background-color:hsla(0,0%,61.2%,.21)}", ""]);



/***/ }),

/***/ 434:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_stylus_loader_index_js_ref_10_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OneDetails_vue_vue_type_style_index_0_id_66b3dd00_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(424);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_stylus_loader_index_js_ref_10_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OneDetails_vue_vue_type_style_index_0_id_66b3dd00_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_stylus_loader_index_js_ref_10_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OneDetails_vue_vue_type_style_index_0_id_66b3dd00_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_stylus_loader_index_js_ref_10_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OneDetails_vue_vue_type_style_index_0_id_66b3dd00_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 435:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)(false);
// Module
exports.push([module.i, ".one-details[data-v-66b3dd00]{overflow:hidden}.summary[data-v-66b3dd00]{border:none;background:none;padding-left:0;cursor:help;outline:none}.summary[data-v-66b3dd00]:hover{color:#333}.content[data-v-66b3dd00]{overflow:hidden;transition:height .3s}.arrow[data-v-66b3dd00]{vertical-align:top;margin-top:.35em;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s}.expanded>.summary>.arrow[data-v-66b3dd00]{-webkit-transform:rotate(90deg);transform:rotate(90deg)}", ""]);



/***/ }),

/***/ 593:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1098);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(10).default
var update = add("97371e34", content, true, {"sourceMap":false});

/***/ }),

/***/ 879:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/demos/demo/region-picker/default.vue?vue&type=template&id=23775029&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('article',[_c('h4',[_vm._v("Chinese Regions")]),_c('section',[_c('veui-region-picker',{attrs:{"datasource":_vm.region},model:{value:(_vm.selected),callback:function ($$v) {_vm.selected=$$v},expression:"selected"}})],1),_c('section',[_vm._v("Selected IDs: "+_vm._s(_vm.result))])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/demos/demo/region-picker/default.vue?vue&type=template&id=23775029&scoped=true&

// EXTERNAL MODULE: ./node_modules/veui/index.js + 351 modules
var veui = __webpack_require__(181);

// CONCATENATED MODULE: ./common/region.js
/* harmony default export */ var region = ([{
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
}]);
// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/demos/demo/region-picker/default.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var defaultvue_type_script_lang_js_ = ({
  components: {
    'veui-region-picker': veui["K" /* RegionPicker */]
  },
  data: function data() {
    return {
      region: region,
      selected: null
    };
  },
  computed: {
    result: function result() {
      return (this.selected || []).join(', ') || '-';
    }
  }
});
// CONCATENATED MODULE: ./components/demos/demo/region-picker/default.vue?vue&type=script&lang=js&
 /* harmony default export */ var region_picker_defaultvue_type_script_lang_js_ = (defaultvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./components/demos/demo/region-picker/default.vue?vue&type=style&index=0&id=23775029&lang=less&scoped=true&docs=true&
var defaultvue_type_style_index_0_id_23775029_lang_less_scoped_true_docs_true_ = __webpack_require__(1097);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/demos/demo/region-picker/default.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  region_picker_defaultvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "23775029",
  null
  
)

/* harmony default export */ var region_picker_default = __webpack_exports__["a"] = (component.exports);

/***/ })

}]);