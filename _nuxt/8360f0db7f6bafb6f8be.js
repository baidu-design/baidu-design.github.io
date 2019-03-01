(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

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

/***/ 876:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/veui/components/Icon.vue + 5 modules
var Icon = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/account-info.js

Icon["a" /* default */].register({
  'account-info': {
    paths: [{
      d: 'M24 48a2 2 0 1 1 0-4A20 20 0 1 0 4 24a2 2 0 1 1-4 0 24 24 0 1 1 24 24zm-10.03-2.19c-5.2-2.4-9.4-6.6-11.79-11.8L2 33.26l.1-.74.26-.5c.56-.55.56-.55.77-.64l.35-.14.18-.04.12-.01.18-.03.58-.06 2.25-.22L15.8 30a2 2 0 0 1 2.18 2.18 4577.92 4577.92 0 0 1-1.16 11.84l-.02.18-.02.1-.03.17-.11.33c-.09.19-.09.19-.44.62l-.17.15-.52.29-.83.12-.7-.18zM7.2 34.86a20.12 20.12 0 0 0 5.93 5.93l.64-6.57-6.57.64zm18-.94a2 2 0 1 1-.5-3.97 6 6 0 1 0-6.72-6.7 2 2 0 1 1-3.96-.5 10 10 0 1 1 11.17 11.17z'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/ad.js

Icon["a" /* default */].register({
  ad: {
    paths: [{
      d: 'M18.79 29.43h-6.91l-1.57 4.05a1.71 1.71 0 0 1-3.2-1.24l6.64-17.14a1.71 1.71 0 0 1 3.2 0l6.6 17.14a1.71 1.71 0 0 1-3.2 1.23l-1.56-4.04zM17.47 26l-2.13-5.52L13.21 26h4.26zM6 0h36a6 6 0 0 1 6 6v36a6 6 0 0 1-6 6H6a6 6 0 0 1-6-6V6a6 6 0 0 1 6-6zm0 4a2 2 0 0 0-2 2v36c0 1.1.9 2 2 2h36a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H6zm20 11.72c0-.94.75-1.7 1.7-1.72 8.63-.11 13.39 3.38 13.39 10.29 0 6.9-4.76 10.4-13.4 10.28A1.71 1.71 0 0 1 26 32.85V15.72zm3.43 15.4c5.7-.29 8.23-2.5 8.23-6.83s-2.52-6.55-8.23-6.83V31.1z',
      'fill-rule': 'evenodd'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/airplay.js

Icon["a" /* default */].register({
  airplay: {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path stroke="currentColor" stroke-width="4" d="M12 36H2V4h44v32H36"/><path class="fillColor" stroke="currentColor" stroke-width="4" d="M24 32L12 44h24z"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/alarm-clock.js

Icon["a" /* default */].register({
  'alarm-clock': {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><circle class="fillColor" stroke="currentColor" stroke-width="4" cx="24" cy="28" r="18"/><path d="M4 11l8-6m32 6l-7-6" stroke="currentColor" stroke-width="4"/><path class="innerStrokeColor" stroke="currentColor" stroke-width="4" d="M24 18v10l7 7"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/align-bottom.js

Icon["a" /* default */].register({
  'align-bottom': {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path class="fillColor" stroke="currentColor" stroke-width="4" d="M8 2h12v36H8zm20 12h12v24H28z"/><path d="M2 46h44" stroke="currentColor" stroke-width="4"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/align-horizontally.js

Icon["a" /* default */].register({
  'align-horizontally': {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path class="fillColor" stroke="currentColor" stroke-width="4" d="M2 28h44v12H2zM12 8h24v12H12z"/><path d="M24 46V2" stroke="currentColor" stroke-width="4"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/align-left.js

Icon["a" /* default */].register({
  'align-left': {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path class="fillColor" stroke="currentColor" stroke-width="4" d="M10 8h36v12H10zm0 20h24v12H10z"/><path d="M2 46V2" stroke="currentColor" stroke-width="4"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/align-right.js

Icon["a" /* default */].register({
  'align-right': {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path class="fillColor" stroke="currentColor" stroke-width="4" d="M2 8h36v12H2zm12 20h24v12H14z"/><path d="M46 46V2" stroke="currentColor" stroke-width="4"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/align-text-both-r.js

Icon["a" /* default */].register({
  'align-text-both-r': {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path class="fillColor" stroke="currentColor" stroke-width="4" d="M2 2h44v44H2z"/><path class="innerStrokeColor" d="M10 12h28m-28 8h8m8 0h12m-28 8h15m8 0h5m-28 8h28" stroke="currentColor" stroke-width="4"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/align-text-both.js

Icon["a" /* default */].register({
  'align-text-both': {
    paths: [{
      d: 'M2 4h44M2 14h12m8 0h24M2 24h23m9 0h12M2 44h44M2 34h8m8 0h12m8 0h8',
      fill: 'none',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      stroke: 'currentColor',
      'stroke-width': '4'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/align-text-bottom-r.js

Icon["a" /* default */].register({
  'align-text-bottom-r': {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path class="fillColor" stroke="currentColor" stroke-width="4" d="M2 2h44v44H2z"/><path class="innerStrokeColor" d="M10 30h28m-28 8h20" stroke="currentColor" stroke-width="4"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/align-text-bottom.js

Icon["a" /* default */].register({
  'align-text-bottom': {
    paths: [{
      d: 'M2 38h44M2 46h44M32 22l-8 8-8-8h0m8-20v27',
      fill: 'none',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      stroke: 'currentColor',
      'stroke-width': '4'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/align-text-center-r.js

Icon["a" /* default */].register({
  'align-text-center-r': {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path class="fillColor" stroke="currentColor" stroke-width="4" d="M2 2h44v44H2z"/><path class="innerStrokeColor" d="M10 12h28m-20 8h12m-16 8h20m-16 8h12" stroke="currentColor" stroke-width="4"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/align-text-center.js

Icon["a" /* default */].register({
  'align-text-center': {
    paths: [{
      d: 'M2 4h44M10 14h28M2 24h44M2 44h44M18 34h12',
      fill: 'none',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      stroke: 'currentColor',
      'stroke-width': '4'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/align-text-left-r.js

Icon["a" /* default */].register({
  'align-text-left-r': {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path class="fillColor" stroke="currentColor" stroke-width="4" d="M2 2h44v44H2z"/><path class="innerStrokeColor" d="M10 12h28m-28 8h12m-12 8h20m-20 8h12" stroke="currentColor" stroke-width="4"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/align-text-left.js

Icon["a" /* default */].register({
  'align-text-left': {
    paths: [{
      d: 'M2 4h44M2 14h28M2 24h44M2 44h44M2 34h12',
      fill: 'none',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      stroke: 'currentColor',
      'stroke-width': '4'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/align-text-middle-r.js

Icon["a" /* default */].register({
  'align-text-middle-r': {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path class="fillColor" stroke="currentColor" stroke-width="4" d="M2 2h44v44H2z"/><path class="innerStrokeColor" d="M10 20h28m-28 8h20" stroke="currentColor" stroke-width="4"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/align-text-middle.js

Icon["a" /* default */].register({
  'align-text-middle': {
    paths: [{
      d: 'M16 38l8-8 8 8m-8-7v15M2 24h44M32 10l-8 8-8-8h0m8-8v15',
      fill: 'none',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      stroke: 'currentColor',
      'stroke-width': '4'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/align-text-right-r.js

Icon["a" /* default */].register({
  'align-text-right-r': {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path class="fillColor" stroke="currentColor" stroke-width="4" d="M2 2h44v44H2z"/><path class="innerStrokeColor" d="M10 12h28m-12 8h12m-20 8h20m-12 8h12" stroke="currentColor" stroke-width="4"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/align-text-right.js

Icon["a" /* default */].register({
  'align-text-right': {
    paths: [{
      d: 'M2 4h44M18 14h28M2 24h44M2 44h44M34 34h12',
      fill: 'none',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      stroke: 'currentColor',
      'stroke-width': '4'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/align-text-top-r.js

Icon["a" /* default */].register({
  'align-text-top-r': {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path class="fillColor" stroke="currentColor" stroke-width="4" d="M2 2h44v44H2z"/><path class="innerStrokeColor" d="M10 10h28m-28 8h20" stroke="currentColor" stroke-width="4"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/align-text-top.js

Icon["a" /* default */].register({
  'align-text-top': {
    paths: [{
      d: 'M2 2h44M2 10h44M16 26l8-8 8 8m-8-7v27',
      fill: 'none',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      stroke: 'currentColor',
      'stroke-width': '4'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/align-top.js

Icon["a" /* default */].register({
  'align-top': {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path class="fillColor" stroke="currentColor" stroke-width="4" d="M8 10h12v36H8zm20 0h12v24H28z"/><path d="M2 2h44" stroke="currentColor" stroke-width="4"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/align-vertically.js

Icon["a" /* default */].register({
  'align-vertically': {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path class="fillColor" stroke="currentColor" stroke-width="4" d="M8 2h12v44H8zm20 10h12v24H28z"/><path d="M2 24h44" stroke="currentColor" stroke-width="4"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/anchor.js

Icon["a" /* default */].register({
  anchor: {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M10 24H2c0 8 6 22 22 22s22-14 22-22h-8M24 46V12" stroke="currentColor" stroke-width="4"/><circle class="fillColor" stroke="currentColor" stroke-width="4" cx="24" cy="7" r="5"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/android.js

Icon["a" /* default */].register({
  android: {
    paths: [{
      class: 'noStroke',
      d: 'M89.6 204.5v115.8c0 15.4-12.1 27.7-27.5 27.7-15.3 0-30.1-12.4-30.1-27.7V204.5c0-15.1 14.8-27.5 30.1-27.5 15.1 0 27.5 12.4 27.5 27.5zm10.8 157c0 16.4 13.2 29.6 29.6 29.6h19.9l.3 61.1c0 36.9 55.2 36.6 55.2 0v-61.1h37.2v61.1c0 36.7 55.5 36.8 55.5 0v-61.1h20.2a29.5 29.5 0 0 0 29.4-29.6V182.1H100.4v179.4zm248-189.1H99.3c0-42.8 25.6-80 63.6-99.4l-19.1-35.3c-2.8-4.9 4.3-8 6.7-3.8l19.4 35.6c34.9-15.5 75-14.7 108.3 0L297.5 34c2.5-4.3 9.5-1.1 6.7 3.8L285.1 73c37.7 19.4 63.3 56.6 63.3 99.4zm-170.7-55.5c0-5.7-4.6-10.5-10.5-10.5-5.7 0-10.2 4.8-10.2 10.5s4.6 10.5 10.2 10.5c5.9 0 10.5-4.8 10.5-10.5zm113.4 0c0-5.7-4.6-10.5-10.2-10.5a10.5 10.5 0 1 0 0 21c5.6 0 10.2-4.8 10.2-10.5zm94.8 60.1c-15.1 0-27.5 12.1-27.5 27.5v115.8a27.6 27.6 0 0 0 27.5 27.7c15.4 0 30.1-12.4 30.1-27.7V204.5c0-15.4-14.8-27.5-30.1-27.5z'
    }],
    width: 448,
    height: 512
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/angle-double-down.js

Icon["a" /* default */].register({
  'angle-double-down': {
    paths: [{
      d: 'M38 26L24 40 10 26m28-16L24 24 10 10',
      fill: 'none',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      stroke: 'currentColor',
      'stroke-width': '4'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/angle-double-left.js

Icon["a" /* default */].register({
  'angle-double-left': {
    paths: [{
      d: 'M23 38L9 24l14-14h0m16 28L25 24l14-14h0',
      fill: 'none',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      stroke: 'currentColor',
      'stroke-width': '4'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/angle-double-right.js

Icon["a" /* default */].register({
  'angle-double-right': {
    paths: [{
      d: 'M25 10l14 14-14 14h0M8 10l14 14L8 38h0',
      fill: 'none',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      stroke: 'currentColor',
      'stroke-width': '4'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/angle-double-up.js

Icon["a" /* default */].register({
  'angle-double-up': {
    paths: [{
      d: 'M10 22L24 8l14 14M10 38l14-14 14 14',
      fill: 'none',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      stroke: 'currentColor',
      'stroke-width': '4'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/angle-down.js

Icon["a" /* default */].register({
  'angle-down': {
    paths: [{
      stroke: 'currentColor',
      'stroke-width': '4',
      d: 'M13 19l10 10 10-10',
      fill: 'none',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/angle-left.js

Icon["a" /* default */].register({
  'angle-left': {
    paths: [{
      stroke: 'currentColor',
      'stroke-width': '4',
      d: 'M27 14L17 24l10 10',
      fill: 'none',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round'
    }],
    width: '48',
    height: '48'
  }
});
// EXTERNAL MODULE: ./node_modules/veui-theme-one-icons/angle-right.js
var angle_right = __webpack_require__(425);

// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/angle-up.js

Icon["a" /* default */].register({
  'angle-up': {
    paths: [{
      stroke: 'currentColor',
      'stroke-width': '4',
      d: 'M15 29l10-10 10 10',
      fill: 'none',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/apple-f.js

Icon["a" /* default */].register({
  'apple-f': {
    paths: [{
      class: 'noStroke',
      d: 'M247.2 137.6c-6.2 1.9-15.3 3.5-27.9 4.6 1.1-56.7 29.9-96.6 88-110.1 9.3 41.6-26.1 94.1-60.1 105.5zm121.3 72.7c6.4-9.4 16.6-19.9 30.6-31.7-22.3-27.6-48.1-44.3-85.1-44.3-35.4 0-65.2 18.2-87 18.2-18.5 0-51.9-16.1-84.5-16.1-69.6 0-106.5 68.1-106.5 139C36 354.2 95.7 480 156.2 480c23.8 0 45.2-18 73.5-18 29.3 0 52.8 17.2 80.3 17.2 46 0 88.6-77.5 102-119.7-46.8-14.3-84.4-90.2-43.5-149.2z'
    }],
    width: 448,
    height: 512
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/arrow-circle-down.js

Icon["a" /* default */].register({
  'arrow-circle-down': {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><circle class="fillColor" stroke="currentColor" stroke-width="4" cx="24" cy="24" r="22"/><path d="M16 26l8 8 8-8m-8 8V14" stroke="currentColor" stroke-width="4"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/arrow-circle-left.js

Icon["a" /* default */].register({
  'arrow-circle-left': {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><circle class="fillColor" stroke="currentColor" stroke-width="4" cx="24" cy="24" r="22"/><path class="innerStrokeColor" stroke="currentColor" stroke-width="4" d="M20 16l-8 8 8 8m16-8H14"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/arrow-circle-right.js

Icon["a" /* default */].register({
  'arrow-circle-right': {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><circle class="fillColor" stroke="currentColor" stroke-width="4" cx="24" cy="24" r="22"/><path class="innerStrokeColor" d="M12 24h22m-6-8l8 8-8 8" stroke="currentColor" stroke-width="4"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/arrow-circle-up.js

Icon["a" /* default */].register({
  'arrow-circle-up': {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><circle class="fillColor" stroke="currentColor" stroke-width="4" cx="24" cy="24" r="22"/><path class="innerStrokeColor" stroke="currentColor" stroke-width="4" d="M16 20l8-8 8 8m-8-6v22"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/arrow-double-down.js

Icon["a" /* default */].register({
  'arrow-double-down': {
    paths: [{
      d: 'M20 2v44L6 32M28 2v44l14-14',
      stroke: 'currentColor',
      'stroke-width': '4',
      fill: 'none',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/arrow-double-ld.js

Icon["a" /* default */].register({
  'arrow-double-ld': {
    paths: [{
      d: 'M40 2L2 40V22M46 8L8 46h18',
      stroke: 'currentColor',
      'stroke-width': '4',
      fill: 'none',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/arrow-double-left.js

Icon["a" /* default */].register({
  'arrow-double-left': {
    paths: [{
      d: 'M46 28H2l14 14m30-22H2L16 6',
      stroke: 'currentColor',
      'stroke-width': '4',
      fill: 'none',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/arrow-double-lt.js

Icon["a" /* default */].register({
  'arrow-double-lt': {
    paths: [{
      d: 'M40 46L2 8v18m44 14L8 2h18',
      stroke: 'currentColor',
      'stroke-width': '4',
      fill: 'none',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/arrow-double-rd.js

Icon["a" /* default */].register({
  'arrow-double-rd': {
    paths: [{
      d: 'M8 2l38 38V22M2 8l38 38H22',
      stroke: 'currentColor',
      'stroke-width': '4',
      fill: 'none',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/arrow-double-right.js

Icon["a" /* default */].register({
  'arrow-double-right': {
    paths: [{
      d: 'M2 28h44L32 42M2 20h44L32 6',
      stroke: 'currentColor',
      'stroke-width': '4',
      fill: 'none',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/arrow-double-rt.js

Icon["a" /* default */].register({
  'arrow-double-rt': {
    paths: [{
      d: 'M8 46L46 8v18M2 40L40 2H22',
      stroke: 'currentColor',
      'stroke-width': '4',
      fill: 'none',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/arrow-double-top.js

Icon["a" /* default */].register({
  'arrow-double-top': {
    paths: [{
      d: 'M20 46V2L6 16m22 30V2l14 14',
      stroke: 'currentColor',
      'stroke-width': '4',
      fill: 'none',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/arrow-down.js

Icon["a" /* default */].register({
  'arrow-down': {
    paths: [{
      d: 'M24 10v26M10 24l14 14 14-14',
      fill: 'none',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      stroke: 'currentColor',
      'stroke-width': '4'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/arrow-from-bottom.js

Icon["a" /* default */].register({
  'arrow-from-bottom': {
    paths: [{
      d: 'M6 20L24 2l18 18M24 35V4M2 46h44',
      fill: 'none',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      stroke: 'currentColor',
      'stroke-width': '4'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/arrow-lb.js

Icon["a" /* default */].register({
  'arrow-lb': {
    paths: [{
      d: 'M38 10L12 36m-2-18v20h20',
      fill: 'none',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      stroke: 'currentColor',
      'stroke-width': '4'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/arrow-left.js

Icon["a" /* default */].register({
  'arrow-left': {
    paths: [{
      d: 'M12 24h26M24 10L10 24l14 14',
      fill: 'none',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      stroke: 'currentColor',
      'stroke-width': '4'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/arrow-lt.js

Icon["a" /* default */].register({
  'arrow-lt': {
    paths: [{
      d: 'M10 30V10h20m-18 2l26 26',
      fill: 'none',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      stroke: 'currentColor',
      'stroke-width': '4'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/arrow-rb.js

Icon["a" /* default */].register({
  'arrow-rb': {
    paths: [{
      d: 'M10 10l26 26m-18 2h20V18',
      fill: 'none',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      stroke: 'currentColor',
      'stroke-width': '4'
    }],
    width: '48',
    height: '48'
  }
});
// EXTERNAL MODULE: ./node_modules/veui-theme-one-icons/arrow-right.js
var arrow_right = __webpack_require__(241);

// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/arrow-rt.js

Icon["a" /* default */].register({
  'arrow-rt': {
    paths: [{
      d: 'M9 38l26-26m-18-2h20v20',
      fill: 'none',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      stroke: 'currentColor',
      'stroke-width': '4'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/arrow-to-bottom.js

Icon["a" /* default */].register({
  'arrow-to-bottom': {
    paths: [{
      d: 'M10 44h28M10 22l14 14 14-14M24 4v30',
      fill: 'none',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      stroke: 'currentColor',
      'stroke-width': '4'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/arrow-to-left.js

Icon["a" /* default */].register({
  'arrow-to-left': {
    paths: [{
      d: 'M4 10v28m22-28L12 24l14 14m18-14H14',
      fill: 'none',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      stroke: 'currentColor',
      'stroke-width': '4'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/arrow-to-right.js

Icon["a" /* default */].register({
  'arrow-to-right': {
    paths: [{
      d: 'M22 10l14 14-14 14m22-28v28M4 24h30',
      fill: 'none',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      stroke: 'currentColor',
      'stroke-width': '4'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/arrow-to-top.js

Icon["a" /* default */].register({
  'arrow-to-top': {
    paths: [{
      d: 'M10 26l14-14 14 14M24 13v31M10 4h28',
      fill: 'none',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      stroke: 'currentColor',
      'stroke-width': '4'
    }],
    width: '48',
    height: '48'
  }
});
// EXTERNAL MODULE: ./node_modules/veui-theme-one-icons/arrow-up.js
var arrow_up = __webpack_require__(245);

// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/babybottle.js

Icon["a" /* default */].register({
  babybottle: {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path class="fillColor" stroke="currentColor" stroke-width="4" d="M14 18h20v28H14z"/><path class="innerStrokeColor" d="M25 26h9m-9 6h9m-9 6h9" stroke="currentColor" stroke-width="4"/><path d="M14 12h7V5c0-1 1-3 3-3s3 2 3 3v7h7" stroke="currentColor" stroke-width="4"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/baidu.js

Icon["a" /* default */].register({
  baidu: {
    paths: [{
      class: 'noStroke',
      d: 'M40.24 33.5s4.44 3.46 1.6 10.13c-2.83 6.67-13.21 3.2-13.21 3.2s-3.83-1.22-8.27-.24c-4.44 1-8.27.62-8.27.62s-5.2.12-6.67-6.42c-1.48-6.55 5.18-10.14 5.68-10.75.5-.62 3.95-2.96 6.17-6.67 2.23-3.7 8.9-6.67 13.58.62 3.46 4.94 9.4 9.51 9.4 9.51zm-5.19 9.88V31.92H31.7v8.6h-3.2s-1.02-.14-1.21-.96v-7.7l-3.15.06v8.56s.14 2.13 3.15 2.9h7.76zm-12.57.05V27.18l-3.05-.05v4.4h-3.6s-3.58.3-4.84 4.35c-.44 2.71.38 4.3.53 4.65a5.9 5.9 0 0 0 4.22 2.9h6.74zm-8.1-7.45c.15-.44.78-1.45 2.09-1.84h2.9v6.63h-2.71s-1.9-.1-2.47-2.27c-.3-.97.04-2.08.2-2.52zm4.13-21.12c-2.86 0-5.19-3.3-5.19-7.36 0-4.06 2.33-7.35 5.19-7.35 2.86 0 5.18 3.29 5.18 7.35 0 4.07-2.32 7.36-5.18 7.36zm12.34.48c-3.82-.49-4.69-3.94-4.32-7.4.31-2.83 3.7-7.17 6.42-6.55 2.72.61 5.19 4.2 4.69 7.28-.5 3.1-2.95 7.17-6.79 6.67zM8.87 25.23c-5.17 1.1-7.1-4.87-6.53-7.66 0 0 .61-6.05 4.81-6.43 3.34-.29 5.8 3.35 6.05 5.44.16 1.35.86 7.53-4.33 8.65zm37.17-4.7c0 1.49.62 7.78-5.06 7.9-5.69.13-5.92-3.82-5.92-6.66 0-2.97.6-7.17 5.18-7.17 4.57 0 5.8 4.45 5.8 5.93z'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/ban.js

Icon["a" /* default */].register({
  ban: {
    raw: '<g fill="none" fill-rule="evenodd"><circle class="fillColor" stroke="currentColor" stroke-width="4" cx="24" cy="24" r="22"/><path class="innerStrokeColor" d="M9 9l30 30" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/barcode-alt.js

Icon["a" /* default */].register({
  'barcode-alt': {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path class="fillColor" stroke="currentColor" stroke-width="4" d="M2 2h44v44H2z"/><path class="innerStrokeColor" d="M12 14v20m8-20v20m8-20v20m8-20v20" stroke="currentColor" stroke-width="4"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/barcode-scan.js

Icon["a" /* default */].register({
  'barcode-scan': {
    paths: [{
      d: 'M2 20h44M4 4v10m0 12v14M20 4v10m0 12v18M36 4v10m0 12v10M12 4v10m0 12v10M28 4v10m0 12v10M44 4v10m0 12v14',
      fill: 'none',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      stroke: 'currentColor',
      'stroke-width': '4'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/bars.js

Icon["a" /* default */].register({
  bars: {
    paths: [{
      d: 'M2 11h44M2 25h44M2 39h44',
      fill: 'none',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      stroke: 'currentColor',
      'stroke-width': '4'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/baseball.js

Icon["a" /* default */].register({
  baseball: {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><circle class="fillColor" stroke="currentColor" stroke-width="4" cx="24" cy="24" r="22"/><path class="innerStrokeColor" d="M7 10c4.67 4 7 8.67 7 14s-2.33 10-7 14m34 0c-4.67-4-7-8.67-7-14s2.33-10 7-14" stroke="currentColor" stroke-width="4"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/basketball-clothes.js

Icon["a" /* default */].register({
  'basketball-clothes': {
    raw: '<g stroke="currentColor" stroke-width="4" fill="none" fill-rule="evenodd" stroke-linejoin="round"><path d="M18 2a6 6 0 1 0 12 0h5s0 10 1 13 7 7 7 7v24H5V22s6-4 7-7 1-13 1-13h5z"/><path d="M24 24h8v14h-8z"/><path d="M16 24v14" stroke-linecap="round"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/basketball.js

Icon["a" /* default */].register({
  basketball: {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><circle class="fillColor" stroke="currentColor" stroke-width="4" cx="24" cy="24" r="22"/><path class="innerStrokeColor" d="M7 10c4.67 4 7 8.67 7 14s-2.33 10-7 14m34 0c-4.67-4-7-8.67-7-14s2.33-10 7-14M2 24h44M24 2v44" stroke="currentColor" stroke-width="4"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/battery-bolt.js

Icon["a" /* default */].register({
  'battery-bolt': {
    paths: [{
      d: 'M30 14h12v20H29m-15 0H2V14h13m31 7v6h-4v-6zm-23-7l-6 10h10l-6 10',
      fill: 'none',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      stroke: 'currentColor',
      'stroke-width': '4'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/battery-empty.js

Icon["a" /* default */].register({
  'battery-empty': {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path class="fillColor" stroke="currentColor" stroke-width="4" d="M2 14h40v20H2z"/><path stroke="currentColor" stroke-width="4" d="M46 21v6h-4v-6z"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/battery-full.js

Icon["a" /* default */].register({
  'battery-full': {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path class="fillColor" stroke="currentColor" stroke-width="4" d="M2 14h40v20H2z"/><path class="innerStrokeColor" d="M10 21v6m12-6v6m-6-6v6m12-6v6m6-6v6" stroke="currentColor" stroke-width="4"/><path stroke="currentColor" stroke-width="4" d="M46 21v6h-4v-6z"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/battery-quarter.js

Icon["a" /* default */].register({
  'battery-quarter': {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path class="fillColor" stroke="currentColor" stroke-width="4" d="M2 14h40v20H2z"/><path class="innerStrokeColor" d="M10 21v6m6-6v6" stroke="currentColor" stroke-width="4"/><path stroke="currentColor" stroke-width="4" d="M46 21v6h-4v-6z"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/bedside.js

Icon["a" /* default */].register({
  bedside: {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path class="fillColor" stroke="currentColor" stroke-width="4" d="M4 18h40v12H4zm0 12h40v12H4z"/><path class="innerStrokeColor" d="M22 24h4m-4 12h4" stroke="currentColor" stroke-width="4"/><path d="M8 42v4m32-4v4M24 18v-8" stroke="currentColor" stroke-width="4"/><path class="fillColor" d="M32 10a8 8 0 1 0-16 0h16z" stroke="currentColor" stroke-width="4"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/bell.js

Icon["a" /* default */].register({
  bell: {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path class="fillColor" d="M35 19a11 11 0 0 0-22 0" stroke="currentColor" stroke-width="4"/><path class="innerFillColor" d="M17 39a7 7 0 0 0 14 0H17z" stroke="currentColor" stroke-width="4"/><path class="fillColor" d="M35 19v10c6 2.67 9 6 9 10H4c0-4 3-7.33 9-10V19" stroke="currentColor" stroke-width="4"/><path class="innerFillColor" d="M28 8V6a4 4 0 1 0-8 0v2" stroke="currentColor" stroke-width="4"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/bezier-curve.js

Icon["a" /* default */].register({
  'bezier-curve': {
    raw: '<g transform="translate(0 8)" fill="none" fill-rule="evenodd"><path d="M28 4.45A18 18 0 0 1 42 22M6 22A18 18 0 0 1 20 4.45M2 24h8v8H2zm36 0h8v8h-8zM20 0h8v8h-8zm0 4H4m40 0H28" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><circle cx="4" cy="4" r="4"/><circle cx="44" cy="4" r="4"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/bicycle.js

Icon["a" /* default */].register({
  bicycle: {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><circle class="fillColor" stroke="currentColor" stroke-width="4" cx="11" cy="37" r="9"/><circle class="fillColor" stroke="currentColor" stroke-width="4" cx="37" cy="37" r="9"/><path stroke="currentColor" stroke-width="4" d="M18 8h9l10 29m-26 0l20-16m0-4h11l2-5M7 17h10m-4 0l5 13"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/bluetooth-b.js

Icon["a" /* default */].register({
  'bluetooth-b': {
    paths: [{
      stroke: 'currentColor',
      'stroke-width': '4',
      d: 'M12 13l22 22-11 11V2l11 11-22 22',
      fill: 'none',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/book-2.js

Icon["a" /* default */].register({
  'book-2': {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path class="fillColor" stroke="currentColor" stroke-width="4" d="M8 7H2v40h44V7h-6"/><path class="innerFillColor" stroke="currentColor" stroke-width="4" d="M8 3l16 4 16-4v40l-16 4-16-4z"/><path d="M24 7v40" stroke="currentColor" stroke-width="4"/><path class="innerStrokeColor" d="M14 13l4 1m16-1l-4 1 4-1zm-20 8l4 1m16-1l-4 1 4-1zm-20 8l4 1m16-1l-4 1 4-1zm-20 8l4 1m16-1l-4 1 4-1z" stroke="currentColor" stroke-width="4"/></g>',
    width: '48',
    height: '49'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/book-alt.js

Icon["a" /* default */].register({
  'book-alt': {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke="currentColor" stroke-width="4"><path d="M34 46H8a6 6 0 0 1-6-6V8a6 6 0 0 1 6-6h26v32"/><path d="M34 34H8a6 6 0 1 0 0 12h34V6M8 40h22"/></g>',
    width: '44',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/book-open.js

Icon["a" /* default */].register({
  'book-open': {
    paths: [{
      class: 'fillColor',
      d: 'M2 2h16a6 6 0 0 1 6 6v32a6 6 0 0 1-6 6H2V2zm44 0v44H30a6 6 0 0 1-6-6V8a6 6 0 0 1 6-6h16z',
      stroke: 'currentColor',
      'stroke-width': '4',
      fill: 'none',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/book.js

Icon["a" /* default */].register({
  book: {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path class="fillColor" d="M40 2H12a4 4 0 0 0-4 4v36a4 4 0 0 0 4 4h28V2z" stroke="currentColor" stroke-width="4"/><path class="innerFillColor" d="M12 46h28v-8H12a4 4 0 1 0 0 8z" stroke="currentColor" stroke-width="4"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/bookmark.js

Icon["a" /* default */].register({
  bookmark: {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path class="fillColor" d="M6 46V6a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v40l-18-8-18 8z" stroke="currentColor" stroke-width="4"/><path class="innerStrokeColor" d="M15 21h18m-18-9h18" stroke="currentColor" stroke-width="4"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/bowl.js

Icon["a" /* default */].register({
  bowl: {
    raw: '<g fill="none" fill-rule="evenodd"><path class="fillColor" d="M15 42.08A22 22 0 0 1 2 22h44a22 22 0 0 1-13 20.08V46H15v-3.92z" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M6 8v6M18 2v12M30 2v12m12-6v6" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/box.js

Icon["a" /* default */].register({
  box: {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path class="fillColor" stroke="currentColor" stroke-width="4" d="M2 13L24 2l22 11v22L24 46 2 35z"/><path class="innerStrokeColor" stroke="currentColor" stroke-width="4" d="M2 13l22 11 22-11M24 24v22M14 8l20 10"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/bran-reputation.js

Icon["a" /* default */].register({
  'bran-reputation': {
    paths: [{
      d: 'M6 4a2 2 0 0 0-2 2v36c0 1.1.9 2 2 2h36a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H6zm0-4h36a6 6 0 0 1 6 6v36a6 6 0 0 1-6 6H6a6 6 0 0 1-6-6V6a6 6 0 0 1 6-6zm11.47 33.38a2 2 0 0 1-2.9-2.1l1.23-7.15-5.2-5.06a2 2 0 0 1 1.11-3.41l7.18-1.04 3.2-6.5a2 2 0 0 1 3.6 0l3.2 6.5 7.17 1.04a2 2 0 0 1 1.11 3.4l-5.19 5.07 1.23 7.14a2 2 0 0 1-2.9 2.11l-6.42-3.37-6.42 3.37zm5.49-7.4a2 2 0 0 1 1.86 0l3.76 1.98-.72-4.2a2 2 0 0 1 .58-1.76l3.04-2.97-4.2-.6a2 2 0 0 1-1.51-1.1l-1.88-3.81-1.88 3.8a2 2 0 0 1-1.5 1.1l-4.21.61L19.34 22a2 2 0 0 1 .58 1.77l-.72 4.19 3.76-1.98zM17.7 37h13.72a1.71 1.71 0 1 1 0 3.43H17.7a1.71 1.71 0 1 1 0-3.43z'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/briefcase-medical.js

Icon["a" /* default */].register({
  'briefcase-medical': {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><rect class="fillColor" stroke="currentColor" stroke-width="4" x="2" y="14" width="44" height="32" rx="4"/><path d="M16 2h16a4 4 0 0 1 4 4v8H12V6a4 4 0 0 1 4-4z" stroke="currentColor" stroke-width="4"/><path class="innerStrokeColor" d="M16 30h16m-8-8v16" stroke="currentColor" stroke-width="4"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/briefcase.js

Icon["a" /* default */].register({
  briefcase: {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><rect class="fillColor" stroke="currentColor" stroke-width="4" x="2" y="14" width="44" height="32" rx="4"/><path class="noFill" d="M9 14c3.33-8 8.33-12 15-12s11.67 4 15 12" stroke="currentColor" stroke-width="4"/><path d="M14 22v1m20-1v1" stroke="currentColor" stroke-width="4"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/bring-forward.js

Icon["a" /* default */].register({
  'bring-forward': {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path class="fillColor" stroke="currentColor" stroke-width="4" d="M2 2h36v36H2z"/><path class="noFill" stroke="currentColor" stroke-width="4" d="M38 10h8v36H10v-8h28z"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/bring-to-front.js

Icon["a" /* default */].register({
  'bring-to-front': {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path class="fillColor" stroke="currentColor" stroke-width="4" d="M2 2h27v27H2z"/><path class="noFill" stroke="currentColor" stroke-width="4" d="M29 10h8v27H10v-8h19z"/><path class="noFill" stroke="currentColor" stroke-width="4" d="M37 18h8v27H18v-8h19z"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/broadcast.js

Icon["a" /* default */].register({
  broadcast: {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><circle class="fillColor" stroke="currentColor" stroke-width="4" cx="24" cy="24" r="5"/><path d="M14.1 14.1a14 14 0 0 0 0 19.8m19.8 0a14 14 0 0 0 0-19.8M8.44 8.44a22 22 0 0 0 0 31.12m31.12 0a22 22 0 0 0 0-31.12" stroke="currentColor" stroke-width="4"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/browser.js

Icon["a" /* default */].register({
  browser: {
    raw: '<g fill="none" fill-rule="evenodd"><path class="fillColor" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" d="M2 2h44v44H2z"/><circle class="noStroke innerFillColor" cx="8" cy="8" r="2"/><circle class="noStroke innerFillColor" cx="14" cy="8" r="2"/><circle class="noStroke innerFillColor" cx="20" cy="8" r="2"/><path class="innerStrokeColor" d="M2 14h44" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/bug.js

Icon["a" /* default */].register({
  bug: {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path class="fillColor" d="M24 44a16 16 0 0 0 16-16V14H8v14a16 16 0 0 0 16 16z" stroke="currentColor" stroke-width="4"/><path d="M2 8l6 6m38-6l-6 6M2 27h6m38 0h-6M6 46l6-6m30 6l-6-6" stroke="currentColor" stroke-width="4"/><path class="innerStrokeColor" d="M24 44V22" stroke="currentColor" stroke-width="4"/><path d="M34 12a10 10 0 1 0-20 0v2h20v-2z" stroke="currentColor" stroke-width="4"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/building.js

Icon["a" /* default */].register({
  building: {
    raw: '<g fill="none" fill-rule="evenodd"><path class="fillColor" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" d="M6 2h28v44H6z"/><path class="fillColor" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" d="M26 30h16v16H26z"/><path d="M2 46h44" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path class="innerStrokeColor" d="M26 38h16" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path class="noStroke innerFillColor" d="M12 8h6v6h-6zm0 10h6v6h-6zm0 10h6v6h-6zM22 8h6v6h-6zm0 10h6v6h-6z"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/bulleted-list.js

Icon["a" /* default */].register({
  'bulleted-list': {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M16 7h30" stroke="currentColor" stroke-width="4"/><circle class="fillColor" stroke="currentColor" stroke-width="4" cx="5" cy="7" r="3"/><circle class="fillColor" stroke="currentColor" stroke-width="4" cx="5" cy="24" r="3"/><circle class="fillColor" stroke="currentColor" stroke-width="4" cx="5" cy="41" r="3"/><path d="M16 24h30M16 41h30" stroke="currentColor" stroke-width="4"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/bulletin-manage.js

Icon["a" /* default */].register({
  'bulletin-manage': {
    paths: [{
      d: 'M12.16 15H35.5c-5.1-5.41-8.46-8.84-10.03-10.25-1.1-.99-1.93-1-3.16 0L12.16 15zm-5.63 0l.05-.05 12.97-13.1.14-.12c2.77-2.31 5.83-2.31 8.46.04C30.09 3.51 34.35 7.9 40.99 15H42a6 6 0 0 1 6 6v10.5a2 2 0 1 1-4 0V21a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v21c0 1.1.9 2 2 2h26.07a2 2 0 1 1 0 4H6a6 6 0 0 1-6-6V21a6 6 0 0 1 6-6h.53zM42 48a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-4a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM20 25h19a2 2 0 1 1 0 4H20a2 2 0 1 1 0-4zM9 34h24a2 2 0 1 1 0 4H9a2 2 0 1 1 0-4zm0-9h4a2 2 0 1 1 0 4H9a2 2 0 1 1 0-4z'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/bulletin.js

Icon["a" /* default */].register({
  bulletin: {
    paths: [{
      d: 'M6.53 15l.05-.05 12.97-13.1.14-.12c2.77-2.31 5.83-2.31 8.46.04C30.09 3.51 34.35 7.9 40.99 15H42a6 6 0 0 1 6 6v21a6 6 0 0 1-6 6H6a6 6 0 0 1-6-6V21a6 6 0 0 1 6-6h.53zm5.63 0H35.5c-5.1-5.41-8.46-8.84-10.03-10.25-1.1-.99-1.93-1-3.16 0L12.16 15zM6 19a2 2 0 0 0-2 2v21c0 1.1.9 2 2 2h36a2 2 0 0 0 2-2V21a2 2 0 0 0-2-2H6zm14 6h19a2 2 0 1 1 0 4H20a2 2 0 1 1 0-4zM9 34h30a2 2 0 1 1 0 4H9a2 2 0 1 1 0-4zm0-9h4a2 2 0 1 1 0 4H9a2 2 0 1 1 0-4z'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/bullseye.js

Icon["a" /* default */].register({
  bullseye: {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke="currentColor" stroke-width="4"><path d="M14.73 43.96a22 22 0 1 1 18.54 0m-15.83-7.59a14 14 0 1 1 13.12 0"/><path d="M20.2 28.64A5.99 5.99 0 0 1 24 18a6 6 0 0 1 3.8 10.64"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/bus.js

Icon["a" /* default */].register({
  bus: {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path class="fillColor" stroke="currentColor" stroke-width="4" d="M2 28h44v12H2z"/><path class="innerFillColor" stroke="currentColor" stroke-width="4" d="M2 8h44v20H2z"/><path class="fillColor" stroke="currentColor" stroke-width="4" d="M2 2h44v6H2zm4 38h6v6H6zm30 0h6v6h-6z"/><path class="innerStrokeColor" d="M21 14h6M9 34h2m6 0h14m6 0h2" stroke="currentColor" stroke-width="4"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/calculator.js

Icon["a" /* default */].register({
  calculator: {
    raw: '<g fill="none" fill-rule="evenodd"><path class="fillColor" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" d="M7 2h34v44H7z"/><path class="innerStrokeColor" d="M7 12h34" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><rect class="noStroke innerFillColor" x="13" y="18" width="6" height="6" rx="1"/><rect class="noStroke innerFillColor" x="13" y="26" width="6" height="6" rx="1"/><rect class="noStroke innerFillColor" x="13" y="34" width="6" height="6" rx="1"/><rect class="noStroke innerFillColor" x="21" y="18" width="6" height="6" rx="1"/><rect class="noStroke innerFillColor" x="21" y="26" width="6" height="6" rx="1"/><rect class="noStroke innerFillColor" x="21" y="34" width="6" height="6" rx="1"/><rect class="noStroke innerFillColor" x="29" y="18" width="6" height="6" rx="1"/><rect class="noStroke innerFillColor" x="29" y="26" width="6" height="14" rx="1"/></g>',
    width: '48',
    height: '48'
  }
});
// EXTERNAL MODULE: ./node_modules/veui-theme-one-icons/calendar.js
var calendar = __webpack_require__(235);

// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/camera.js

Icon["a" /* default */].register({
  camera: {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path class="fillColor" stroke="currentColor" stroke-width="4" d="M15 10l3-6h12l3 6"/><rect class="fillColor" stroke="currentColor" stroke-width="4" x="2" y="10" width="44" height="32" rx="4"/><circle class="innerFillColor innerStrokeColor" stroke="currentColor" stroke-width="4" cx="24" cy="26" r="8"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/caret-square-right.js

Icon["a" /* default */].register({
  'caret-square-right': {
    raw: '<g stroke="currentColor" stroke-width="4" fill="none" fill-rule="evenodd"><rect class="fillColor" x="2" y="2" width="44" height="44" rx="4"/><path class="innerFillColor innerStrokeColor" stroke-linecap="round" stroke-linejoin="round" d="M20 17l12 7-12 7z"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/cart-arrow-down.js

Icon["a" /* default */].register({
  'cart-arrow-down': {
    raw: '<g fill="none" fill-rule="evenodd"><path stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" d="M2 4h8v8"/><path class="fillColor" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" d="M10 12h36l-8 22H10z"/><circle class="noStroke fillColor" cx="12" cy="44" r="4"/><circle class="noStroke fillColor" cx="38" cy="44" r="4"/><path class="innerStrokeColor" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" d="M20 23l5 5 5-5m-5-5v10"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/cart-arrow-up.js

Icon["a" /* default */].register({
  'cart-arrow-up': {
    raw: '<g fill="none" fill-rule="evenodd"><path stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" d="M2 4h8v8"/><path class="fillColor" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" d="M10 12h36l-8 22H10z"/><circle class="noStroke fillColor" cx="12" cy="44" r="4"/><circle class="noStroke fillColor" cx="38" cy="44" r="4"/><path class="innerStrokeColor" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" d="M20 23l5-5 5 5m-5-5v10"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/cart-del.js

Icon["a" /* default */].register({
  'cart-del': {
    raw: '<g fill="none" fill-rule="evenodd"><path stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" d="M2 4h8v8"/><path class="fillColor" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" d="M10 12h36l-8 22H10z"/><circle class="noStroke fillColor" cx="12" cy="44" r="4"/><circle class="noStroke fillColor" cx="38" cy="44" r="4"/><path class="innerStrokeColor" d="M20 23h10" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/cart-full.js

Icon["a" /* default */].register({
  'cart-full': {
    raw: '<g fill="none" fill-rule="evenodd"><path stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" d="M2 4h8v8"/><path class="fillColor" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" d="M10 12h36l-8 22H10z"/><circle class="noStroke fillColor" cx="12" cy="44" r="4"/><circle class="noStroke fillColor" cx="38" cy="44" r="4"/><path class="innerStrokeColor" d="M18 26h14m-14-6h17" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/cart-less.js

Icon["a" /* default */].register({
  'cart-less': {
    raw: '<g fill="none" fill-rule="evenodd"><path stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" d="M2 4h8v8"/><path class="fillColor" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" d="M10 12h36l-8 22H10z"/><circle class="noStroke fillColor" cx="12" cy="44" r="4"/><circle class="noStroke fillColor" cx="38" cy="44" r="4"/><path class="innerStrokeColor" d="M18 26h14" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/cart-plus.js

Icon["a" /* default */].register({
  'cart-plus': {
    raw: '<g fill="none" fill-rule="evenodd"><path stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" d="M2 4h8v8"/><path class="fillColor" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" d="M10 12h36l-8 22H10z"/><circle class="noStroke fillColor" cx="12" cy="44" r="4"/><circle class="noStroke fillColor" cx="38" cy="44" r="4"/><path class="innerStrokeColor" d="M20 23h10m-5-5v10" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/cast.js

Icon["a" /* default */].register({
  cast: {
    raw: '<g fill="none" fill-rule="evenodd"><path d="M18 40A16 16 0 0 0 2 24m8 16a8 8 0 0 0-8-8" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" d="M2 16V8h44v32H27"/><circle class="noStroke fillColor" cx="2" cy="40" r="2"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/chart-bar.js

Icon["a" /* default */].register({
  'chart-bar': {
    paths: [{
      d: 'M2 2v44h44M10 6h28m-28 8h36m-36 8h20m-20 8h12m-12 8h4',
      fill: 'none',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      stroke: 'currentColor',
      'stroke-width': '4'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/chart-funnel.js

Icon["a" /* default */].register({
  'chart-funnel': {
    paths: [{
      class: 'fillColor',
      d: 'M33.25 44h-16.5L14 36h22l-2.75 8zm5.5-16h-27.5L8.5 20h33l-2.75 8zm5.5-16H5.75L3 4h44l-2.75 8z',
      stroke: 'currentColor',
      'stroke-width': '4',
      fill: 'none',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round'
    }],
    width: '50',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/chart-gauge.js

Icon["a" /* default */].register({
  'chart-gauge': {
    raw: '<g fill="none" fill-rule="evenodd"><path d="M35.03 4.96a22 22 0 1 0 8.05 8.08" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path class="noStroke fillColor" d="M21.17 26.83a4 4 0 0 1 0-5.66C22.73 19.61 39.94 5.94 41 7c1.06 1.06-12.6 18.27-14.17 19.83a4 4 0 0 1-5.66 0z"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/chart-graph.js

Icon["a" /* default */].register({
  'chart-graph': {
    raw: '<g fill="none" fill-rule="evenodd"><path stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" d="M2 2v44h44"/><path stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" d="M14 17l14 3-7-16m20 3L28 20l13 13M28 20L15 33"/><circle class="noStroke fillColor" cx="28" cy="20" r="7"/><circle class="noStroke fillColor" cx="15" cy="33" r="7"/><circle class="noStroke fillColor" cx="41" cy="33" r="6"/><circle class="noStroke fillColor" cx="41" cy="7" r="5"/><circle class="noStroke fillColor" cx="14" cy="17" r="5"/><circle class="noStroke fillColor" cx="21" cy="4" r="4"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/chart-histogram.js

Icon["a" /* default */].register({
  'chart-histogram': {
    paths: [{
      d: 'M2 2v44h44M10 34v4m8-12v12m8-20v20m8-36v36m8-28v28',
      fill: 'none',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      stroke: 'currentColor',
      'stroke-width': '4'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/chart-line-area.js

Icon["a" /* default */].register({
  'chart-line-area': {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path stroke="currentColor" stroke-width="4" d="M2 2v44h44"/><path class="fillColor" stroke="currentColor" stroke-width="4" d="M10 38l5-15 9 5 4-16 11 9 7-19v36z"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/chart-line.js

Icon["a" /* default */].register({
  'chart-line': {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke="currentColor" stroke-width="4"><path d="M2 2v44h44"/><path d="M10 38l5-15 9 5 4-16 11 9 7-19"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/chart-map.js

Icon["a" /* default */].register({
  'chart-map': {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path class="fillColor" stroke="currentColor" stroke-width="4" d="M2 12l14-8 14 8 16-8v32l-16 8-14-8-14 8z"/><path class="innerStrokeColor" d="M16 4v32" stroke="currentColor" stroke-width="4"/><path class="innerStrokeColor innerFillColor" d="M30 35c2.67-5.86 4-9.53 4-11a4 4 0 1 0-8 0c0 1.47 1.33 5.14 4 11z" stroke="currentColor" stroke-width="4"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/chart-parallel.js

Icon["a" /* default */].register({
  'chart-parallel': {
    paths: [{
      d: 'M2 2v44M17 2v44M31 2v44M46 2v44M2 3l15 7 14-3.5L46 16v3L31 29l-14-5H2v21l15-9 14 7h15',
      fill: 'none',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      stroke: 'currentColor',
      'stroke-width': '4'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/chart-pie.js

Icon["a" /* default */].register({
  'chart-pie': {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M45.17 30A22.01 22.01 0 1 1 18 2.83" stroke="currentColor" stroke-width="4"/><path class="fillColor" d="M46 24A22 22 0 0 0 24 2v22h22z" stroke="currentColor" stroke-width="4"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/chart-radar.js

Icon["a" /* default */].register({
  'chart-radar': {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path class="fillColor" stroke="currentColor" stroke-width="4" d="M24 2L5 13v22l19 11 19-11V13z"/><path class="innfillColor innerStrokeColor" stroke="currentColor" stroke-width="4" d="M24 11l-11 6v14l11 6V24l11-7z"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/chart-ring.js

Icon["a" /* default */].register({
  'chart-ring': {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M38 5.04a18 18 0 1 0-.03 29.95M43 29.97c1.9-2.87 3-6.28 3-9.97 0-3.68-1.1-7.1-3-9.96" stroke="currentColor" stroke-width="4"/><circle class="fillColor" stroke="currentColor" stroke-width="4" cx="28" cy="20" r="8"/><path stroke="currentColor" stroke-width="4" d="M2 2v44h44"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/chart-scatter.js

Icon["a" /* default */].register({
  'chart-scatter': {
    raw: '<g fill="none" fill-rule="evenodd"><path stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" d="M2 2v44h44"/><circle class="noStroke fillColor" cx="24" cy="20" r="4"/><circle class="noStroke fillColor" cx="42" cy="12" r="6"/><circle class="noStroke fillColor" cx="15" cy="33" r="3"/><circle class="noStroke fillColor" cx="36" cy="27" r="3"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/chart-stock.js

Icon["a" /* default */].register({
  'chart-stock': {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path stroke="currentColor" stroke-width="4" d="M2 2v44h44"/><path class="fillColor" stroke="currentColor" stroke-width="4" d="M10 4h8v12h-8zm14 20h8v11h-8zM38 7h8v10h-8z"/><path d="M14 16v18m28-17v21m0-36v5M14 2v2m14 31v4m0-35v20" stroke="currentColor" stroke-width="4"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/chart-tree.js

Icon["a" /* default */].register({
  'chart-tree': {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><circle class="fillColor" stroke="currentColor" stroke-width="4" cx="24" cy="6" r="4"/><circle class="fillColor" stroke="currentColor" stroke-width="4" cx="6" cy="42" r="4"/><circle class="fillColor" stroke="currentColor" stroke-width="4" cx="24" cy="42" r="4"/><circle class="fillColor" stroke="currentColor" stroke-width="4" cx="42" cy="42" r="4"/><path d="M24 10v28M6 38V24h36v14" stroke="currentColor" stroke-width="4"/></g>',
    width: '48',
    height: '48'
  }
});
// EXTERNAL MODULE: ./node_modules/veui-theme-one-icons/check-circle.js
var check_circle = __webpack_require__(78);

// EXTERNAL MODULE: ./node_modules/veui-theme-one-icons/check.js
var check = __webpack_require__(61);

// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/checkbox-indeterminate.js

Icon["a" /* default */].register({
  'checkbox-indeterminate': {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path class="fillColor" stroke="currentColor" stroke-width="4" d="M2 2h44v44H2z"/><path class="innerStrokeColor" d="M14 24h20" stroke="currentColor" stroke-width="4"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/checkbox-uncheck.js

Icon["a" /* default */].register({
  'checkbox-uncheck': {
    paths: [{
      class: 'fillColor',
      stroke: 'currentColor',
      'stroke-width': '4',
      d: 'M2 2h44v44H2z',
      fill: 'none',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/checkbox.js

Icon["a" /* default */].register({
  checkbox: {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path class="fillColor" stroke="currentColor" stroke-width="4" d="M2 2h44v44H2z"/><path class="innerStrokeColor" stroke="currentColor" stroke-width="4" d="M12 23l10 9 16-19"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/chevron-circle-down.js

Icon["a" /* default */].register({
  'chevron-circle-down': {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><circle class="fillColor" stroke="currentColor" stroke-width="4" cx="24" cy="24" r="22"/><path class="innerStrokeColor" stroke="currentColor" stroke-width="4" d="M14 19l10 10 10-10"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/chevron-circle-left.js

Icon["a" /* default */].register({
  'chevron-circle-left': {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><circle class="fillColor" stroke="currentColor" stroke-width="4" cx="24" cy="24" r="22"/><path class="innerStrokeColor" stroke="currentColor" stroke-width="4" d="M29 14L19 24l10 10"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/chevron-circle-right.js

Icon["a" /* default */].register({
  'chevron-circle-right': {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><circle class="fillColor" stroke="currentColor" stroke-width="4" cx="24" cy="24" r="22"/><path class="innerStrokeColor" stroke="currentColor" stroke-width="4" d="M19 14l10 10-10 10"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/chevron-circle-up.js

Icon["a" /* default */].register({
  'chevron-circle-up': {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><circle class="fillColor" stroke="currentColor" stroke-width="4" cx="24" cy="24" r="22"/><path class="innerStrokeColor" stroke="currentColor" stroke-width="4" d="M14 29l10-10 10 10"/></g>',
    width: '48',
    height: '48'
  }
});
// EXTERNAL MODULE: ./node_modules/veui-theme-one-icons/chevron-down.js
var chevron_down = __webpack_require__(80);

// EXTERNAL MODULE: ./node_modules/veui-theme-one-icons/chevron-left.js
var chevron_left = __webpack_require__(68);

// EXTERNAL MODULE: ./node_modules/veui-theme-one-icons/chevron-right.js
var chevron_right = __webpack_require__(47);

// EXTERNAL MODULE: ./node_modules/veui-theme-one-icons/chevron-up.js
var chevron_up = __webpack_require__(237);

// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/chrome.js

Icon["a" /* default */].register({
  chrome: {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><circle class="fillColor" stroke="currentColor" stroke-width="4" cx="24" cy="24" r="22"/><circle class="innerFillColor innerStrokeColor" stroke="currentColor" stroke-width="4" cx="24" cy="24" r="10"/><path class="innerStrokeColor" d="M24 14h19M16 44l14-12M4 15l12 15" stroke="currentColor" stroke-width="4"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/circle-3.js

Icon["a" /* default */].register({
  'circle-3': {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path class="fillColor" d="M42.92 28.17a10 10 0 0 0-11.51 15.7 18.94 18.94 0 0 1-14.81 0 10 10 0 0 0-11.51-15.7A19 19 0 0 1 14.35 10a10 10 0 0 0 19.3 0 19 19 0 0 1 9.26 18.17z" stroke="currentColor" stroke-width="4"/><circle class="innerFillColor" stroke="currentColor" stroke-width="4" cx="24" cy="7" r="4"/><circle class="innerFillColor" stroke="currentColor" stroke-width="4" cx="9" cy="37" r="4"/><circle class="innerFillColor" stroke="currentColor" stroke-width="4" cx="39" cy="37" r="4"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/circle-4.js

Icon["a" /* default */].register({
  'circle-4': {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><circle class="innerFillColor" stroke="currentColor" stroke-width="4" cx="24" cy="6" r="4"/><circle class="innerFillColor" stroke="currentColor" stroke-width="4" cx="24" cy="42" r="4"/><circle class="innerFillColor" stroke="currentColor" stroke-width="4" cx="6" cy="24" r="4"/><circle class="innerFillColor" stroke="currentColor" stroke-width="4" cx="42" cy="24" r="4"/><path class="fillColor" d="M39.45 33.83a18.1 18.1 0 0 1-5.62 5.62 10 10 0 0 0-19.21 0A18.1 18.1 0 0 1 9 33.83a10 10 0 0 0 0-19.21A18.1 18.1 0 0 1 14.62 9a10 10 0 0 0 19.21 0 18.1 18.1 0 0 1 5.62 5.62 10 10 0 0 0 0 19.21z" stroke="currentColor" stroke-width="4"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/clean.js

Icon["a" /* default */].register({
  clean: {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path class="fillColor" stroke="currentColor" stroke-width="4" d="M2 32h44v14H2zm0-6l16-6 3-18h6l3 18 16 6v6H2z"/><path class="innerStrokeColor" d="M12 38v8" stroke="currentColor" stroke-width="4"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/clipboard.js

Icon["a" /* default */].register({
  clipboard: {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path class="fillColor" stroke="currentColor" stroke-width="4" d="M32 6h10v40H6V6h10"/><path class="noFill" stroke="currentColor" stroke-width="4" d="M16 2h16v8H16z"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/clock.js

Icon["a" /* default */].register({
  clock: {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><circle class="fillColor" stroke="currentColor" stroke-width="4" cx="24" cy="24" r="22"/><path class="innerStrokeColor" stroke="currentColor" stroke-width="4" d="M22 13v14h14"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/cloud-atlas.js

Icon["a" /* default */].register({
  'cloud-atlas': {
    paths: [{
      d: 'M17.84 41.68a17.84 17.84 0 1 1 16.32-25.06 12.56 12.56 0 1 1 .47 25.03l-.51.03H18.28a5.13 5.13 0 0 1-.44 0zm.27-4h.12a67937.49 67937.49 0 0 0 16.05-.01l.23-.04.23.02a8.56 8.56 0 1 0-1.37-16.84l-1.8.45-.58-1.76A13.85 13.85 0 1 0 18.1 37.68zM15 27h19a2 2 0 1 1 0 4H15a2 2 0 1 1 0-4zm0-7h7a2 2 0 1 1 0 4h-7a2 2 0 1 1 0-4z'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/cloudy.js

Icon["a" /* default */].register({
  cloudy: {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path class="fillColor" d="M15 41a13 13 0 1 1 12.18-17.55A9 9 0 1 1 30 41H15z" stroke="currentColor" stroke-width="4"/><path class="innerFillColor" d="M38.45 28.88a9 9 0 0 0-11.27-5.43 13 13 0 0 0-18.17-6.99L9 16a13 13 0 0 1 25.18-4.55 9 9 0 1 1 4.27 17.43z" stroke="currentColor" stroke-width="4"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/code-branch.js

Icon["a" /* default */].register({
  'code-branch': {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><circle class="fillColor" stroke="currentColor" stroke-width="4" cx="38" cy="14" r="4"/><circle class="fillColor" stroke="currentColor" stroke-width="4" cx="14" cy="6" r="4"/><circle class="fillColor" stroke="currentColor" stroke-width="4" cx="14" cy="42" r="4"/><path d="M14 10v28-3c0-8 24-5 24-13v-4" stroke="currentColor" stroke-width="4"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/code-merge.js

Icon["a" /* default */].register({
  'code-merge': {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><circle class="fillColor" stroke="currentColor" stroke-width="4" cx="37" cy="6" r="4"/><circle class="fillColor" stroke="currentColor" stroke-width="4" cx="13" cy="6" r="4"/><circle class="fillColor" stroke="currentColor" stroke-width="4" cx="25" cy="42" r="4"/><path d="M13 10v5c0 7 12 10 12 17v6-6c0-7 12-10 12-17v-5" stroke="currentColor" stroke-width="4"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/code-requests.js

Icon["a" /* default */].register({
  'code-requests': {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><circle class="fillColor" stroke="currentColor" stroke-width="4" cx="37" cy="42" r="4"/><circle class="fillColor" stroke="currentColor" stroke-width="4" cx="11" cy="6" r="4"/><circle class="fillColor" stroke="currentColor" stroke-width="4" cx="11" cy="42" r="4"/><path d="M11 10v28M27 2l-4 4 4 4" stroke="currentColor" stroke-width="4"/><path d="M23 6h10a4 4 0 0 1 4 4v28" stroke="currentColor" stroke-width="4"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/code.js

Icon["a" /* default */].register({
  code: {
    paths: [{
      d: 'M11 14L2 24l9 10m26-20l9 10-9 10M29 6L19 42',
      fill: 'none',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      stroke: 'currentColor',
      'stroke-width': '4'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/cog.js

Icon["a" /* default */].register({
  cog: {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><circle class="innerFillColor innerStrokeColor" stroke="currentColor" stroke-width="4" cx="24" cy="24" r="8"/><path class="fillColor" stroke="currentColor" stroke-width="4" d="M24 2l-6 6H8v10l-6 6 6 6v10h10l6 6 6-6h10V30l6-6-6-6V8H30z"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/collapse.js

Icon["a" /* default */].register({
  collapse: {
    paths: [{
      d: 'M10 16l-8 8 8 8m-8-8h44M22 7h24M22 41h24',
      fill: 'none',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      stroke: 'currentColor',
      'stroke-width': '4'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/collected.js

Icon["a" /* default */].register({
  collected: {
    paths: [{
      stroke: 'currentColor',
      'stroke-width': '4',
      d: 'M24 36.5l-13.52 7.1 2.58-15.05L2.13 17.9l15.11-2.2L24 2l6.76 13.7 15.11 2.2-10.93 10.65 2.58 15.06z',
      'fill-rule': 'evenodd',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/command.js

Icon["a" /* default */].register({
  command: {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path class="fillColor" d="M8 14h6V8a6 6 0 1 0-6 6zm0 20h6v6a6 6 0 1 1-6-6z" stroke="currentColor" stroke-width="4"/><path stroke="currentColor" stroke-width="4" d="M14 14h20v20H14z"/><path class="fillColor" d="M40 14h-6V8a6 6 0 1 1 6 6zm0 20a6 6 0 1 1-6 6v-6h6z" stroke="currentColor" stroke-width="4"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/comment-alt-dots.js

Icon["a" /* default */].register({
  'comment-alt-dots': {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path class="fillColor" d="M21 36l-10 8v-8H6a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4h36a4 4 0 0 1 4 4v24a4 4 0 0 1-4 4H21z" stroke="currentColor" stroke-width="4"/><path d="M14 20v1m10-1v1m10-1v1" stroke="currentColor" stroke-width="4"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/comment-alt.js

Icon["a" /* default */].register({
  'comment-alt': {
    paths: [{
      class: 'fillColor',
      d: 'M7.13 6h33.74c1.79 0 2.43.19 3.08.53a3.6 3.6 0 0 1 1.52 1.52c.34.65.53 1.3.53 3.08v21.74c0 1.79-.19 2.43-.53 3.08a3.63 3.63 0 0 1-1.52 1.52c-.65.34-1.3.53-3.08.53H10l-8 8V11.13c0-1.79.19-2.43.53-3.08a3.6 3.6 0 0 1 1.52-1.52C4.7 6.2 5.35 6 7.13 6z',
      stroke: 'currentColor',
      'stroke-width': '4',
      fill: 'none',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/comments-alt.js

Icon["a" /* default */].register({
  'comments-alt': {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path class="fillColor" d="M21 36l-10 8v-8H4a2 2 0 0 1-2-2V14c0-1.1.9-2 2-2h32a2 2 0 0 1 2 2v20a2 2 0 0 1-2 2H21z" stroke="currentColor" stroke-width="4"/><path d="M10 10V6c0-1.1.9-2 2-2h32a2 2 0 0 1 2 2v22a2 2 0 0 1-2 2h-6" stroke="currentColor" stroke-width="4"/><path class="innerStrokeColor" d="M11 24v1m9-1v1m9-1v1" stroke="currentColor" stroke-width="4"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/company.js

Icon["a" /* default */].register({
  company: {
    paths: [{
      d: 'M23.26 30.98V44H42a2 2 0 0 0 2-2V24a2 2 0 1 1 4 0v18a6 6 0 0 1-6 6H6a6 6 0 0 1-6-6V24.15a2 2 0 1 1 4 0V42c0 1.1.9 2 2 2h13.26V16a2 2 0 1 1 4 0v10.98H33a2 2 0 1 1 0 4h-9.74zm.96-26.82L3.32 16.24a2 2 0 1 1-2-3.46L22.72.4a3 3 0 0 1 3 0l21.29 12.38a2 2 0 0 1-2.02 3.46L24.22 4.16z'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/compress-alt.js

Icon["a" /* default */].register({
  'compress-alt': {
    paths: [{
      d: 'M46 28H30a2 2 0 0 0-2 2v16m18 0L30 30M28 2h16a2 2 0 0 1 2 2v16M20 46H4a2 2 0 0 1-2-2V28m0-8h16a2 2 0 0 0 2-2V2m-2 16L2 2',
      fill: 'none',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      stroke: 'currentColor',
      'stroke-width': '4'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/connection-arrow.js

Icon["a" /* default */].register({
  'connection-arrow': {
    raw: '<g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><path d="M46 6H11c-3 0-9 2-9 9s6 9 9 9h26c3 0 9 2 9 9s-6 9-9 9H2"/><path d="M42 2l4 4-4 4M6 38l-4 4 4 4"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/connection-point.js

Icon["a" /* default */].register({
  'connection-point': {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M38 6H11c-3 0-9 2-9 9s6 9 9 9h26c3 0 9 2 9 9s-6 9-9 9H10" stroke="currentColor" stroke-width="4"/><circle class="fillColor" stroke="currentColor" stroke-width="4" cx="42" cy="6" r="4"/><circle class="fillColor" stroke="currentColor" stroke-width="4" cx="6" cy="42" r="4"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/cooking-pot.js

Icon["a" /* default */].register({
  'cooking-pot': {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path class="fillColor" d="M11 46h26V21a13 13 0 0 0-26 0v25z" stroke="currentColor" stroke-width="4"/><path d="M4 21h40M21 2h6" stroke="currentColor" stroke-width="4"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/copy.js

Icon["a" /* default */].register({
  copy: {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path class="fillColor" stroke="currentColor" stroke-width="4" d="M4 10h32v36H4z"/><path d="M12 10V2h32v36h-8v8H4V10h8zm0 8h16m-16 8h16m-16 8h10" stroke="currentColor" stroke-width="4"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/couch.js

Icon["a" /* default */].register({
  couch: {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path class="innerFillColor" stroke="currentColor" stroke-width="4" d="M2 20h8v16H2zm36 0h8v16h-8z"/><path class="fillColor" stroke="currentColor" stroke-width="4" d="M10 28h28v8H10z"/><path stroke="currentColor" stroke-width="4" d="M6 20V8h36v12M6 36v4m36-4v4"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/coupon.js

Icon["a" /* default */].register({
  coupon: {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path class="fillColor" d="M2 18.34V6h44v12.34a6 6 0 0 0 0 11.32V42H2V29.66a6 6 0 0 0 0-11.32z" stroke="currentColor" stroke-width="4"/><path class="innerStrokeColor" stroke="currentColor" stroke-width="4" d="M18 13l6 6 6-6m-13 8h14m-14 7h14m-7-7v14"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/credit-card.js

Icon["a" /* default */].register({
  'credit-card': {
    raw: '<g fill="none" fill-rule="evenodd"><path class="fillColor" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" d="M2 18h44v22H2z"/><path stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" d="M2 8h44v10H2z"/><path class="noStroke innerFillColor" d="M8 28h4v4H8zm6 0h4v4h-4zm6 0h4v4h-4z"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/crop-alt.js

Icon["a" /* default */].register({
  'crop-alt': {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke="currentColor" stroke-width="4"><path d="M2 9h37v37"/><path d="M46 39H9V2"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/crosshairs.js

Icon["a" /* default */].register({
  crosshairs: {
    raw: '<g fill="none" fill-rule="evenodd"><circle class="fillColor" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" cx="24" cy="24" r="22"/><path class="innerStrokeColor" d="M24 10V2m0 36v8M2 24h8m28 0h8" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/cut.js

Icon["a" /* default */].register({
  cut: {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><circle class="fillColor" stroke="currentColor" stroke-width="4" cx="8" cy="8" r="6"/><circle class="fillColor" stroke="currentColor" stroke-width="4" cx="8" cy="40" r="6"/><path d="M13 35L44 4m-31 9l31 31" stroke="currentColor" stroke-width="4"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/data-all.js

Icon["a" /* default */].register({
  'data-all': {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path class="fillColor" d="M3.44 33.5C6.61 36.13 14.62 38 24 38c9.38 0 17.4-1.87 20.56-4.5.93.78 1.44 1.62 1.44 2.5 0 3.87-9.85 7-22 7S2 39.87 2 36c0-.88.51-1.72 1.44-2.5zm0-12C6.61 24.13 14.62 26 24 26c9.38 0 17.4-1.87 20.56-4.5.93.78 1.44 1.62 1.44 2.5 0 3.87-9.85 7-22 7S2 27.87 2 24c0-.88.51-1.72 1.44-2.5z" stroke="currentColor" stroke-width="4"/><ellipse class="fillColor" stroke="currentColor" stroke-width="4" cx="24" cy="12" rx="22" ry="7"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/data-null.js

Icon["a" /* default */].register({
  'data-null': {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke="currentColor" stroke-width="4"><ellipse cx="24" cy="12" rx="22" ry="7"/><path d="M44.56 33.5c.93.78 1.44 1.62 1.44 2.5 0 3.87-9.85 7-22 7S2 39.87 2 36c0-.88.51-1.72 1.44-2.5m41.12-12c.93.78 1.44 1.62 1.44 2.5 0 3.87-9.85 7-22 7S2 27.87 2 24c0-.88.51-1.72 1.44-2.5"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/data-one.js

Icon["a" /* default */].register({
  'data-one': {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M44.56 33.5c.93.78 1.44 1.62 1.44 2.5 0 3.87-9.85 7-22 7S2 39.87 2 36c0-.88.51-1.72 1.44-2.5m41.12-12c.93.78 1.44 1.62 1.44 2.5 0 3.87-9.85 7-22 7S2 27.87 2 24c0-.88.51-1.72 1.44-2.5" stroke="currentColor" stroke-width="4"/><ellipse class="fillColor" stroke="currentColor" stroke-width="4" cx="24" cy="12" rx="22" ry="7"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/data-three.js

Icon["a" /* default */].register({
  'data-three': {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path class="fillColor" d="M3.44 33.5C6.61 36.13 14.62 38 24 38c9.38 0 17.4-1.87 20.56-4.5.93.78 1.44 1.62 1.44 2.5 0 3.87-9.85 7-22 7S2 39.87 2 36c0-.88.51-1.72 1.44-2.5z" stroke="currentColor" stroke-width="4"/><path d="M44.56 21.5c.93.78 1.44 1.62 1.44 2.5 0 3.87-9.85 7-22 7S2 27.87 2 24c0-.88.51-1.72 1.44-2.5" stroke="currentColor" stroke-width="4"/><ellipse stroke="currentColor" stroke-width="4" cx="24" cy="12" rx="22" ry="7"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/data-two.js

Icon["a" /* default */].register({
  'data-two': {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M44.56 33.5c.93.78 1.44 1.62 1.44 2.5 0 3.87-9.85 7-22 7S2 39.87 2 36c0-.88.51-1.72 1.44-2.5" stroke="currentColor" stroke-width="4"/><path class="fillColor" d="M3.44 21.5C6.61 24.13 14.62 26 24 26c9.38 0 17.4-1.87 20.56-4.5.93.78 1.44 1.62 1.44 2.5 0 3.87-9.85 7-22 7S2 27.87 2 24c0-.88.51-1.72 1.44-2.5z" stroke="currentColor" stroke-width="4"/><ellipse stroke="currentColor" stroke-width="4" cx="24" cy="12" rx="22" ry="7"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/data.js

Icon["a" /* default */].register({
  data: {
    paths: [{
      d: 'M2 44h44a2 2 0 1 1 0 4H2a2 2 0 1 1 0-4zm6-6a2 2 0 1 1-4 0V18a2 2 0 1 1 4 0v20zm12 0a2 2 0 1 1-4 0V2a2 2 0 1 1 4 0v36zm12 0a2 2 0 1 1-4 0V26a2 2 0 1 1 4 0v12zm12 0a2 2 0 1 1-4 0V9a2 2 0 1 1 4 0v29z',
      'fill-rule': 'evenodd'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/database.js

Icon["a" /* default */].register({
  database: {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path class="fillColor" d="M2 10v28c0 4.42 9.85 8 22 8s22-3.58 22-8V10" stroke="currentColor" stroke-width="4"/><ellipse class="fillColor" stroke="currentColor" stroke-width="4" cx="24" cy="10" rx="22" ry="8"/><path class="innerStrokeColor" d="M2 20c0 4.42 9.85 8 22 8s22-3.58 22-8M2 29c0 4.42 9.85 8 22 8s22-3.58 22-8" stroke="currentColor" stroke-width="4"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/desktop.js

Icon["a" /* default */].register({
  desktop: {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path class="fillColor" stroke="currentColor" stroke-width="4" d="M2 6h44v28H2z"/><path class="innerStrokeColor" d="M10 14h28m-28 8h14" stroke="currentColor" stroke-width="4"/><path d="M11 42h26m-18 0v-8m10 8v-8" stroke="currentColor" stroke-width="4"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/devices.js

Icon["a" /* default */].register({
  devices: {
    raw: '<g transform="translate(2 2)" fill="none" fill-rule="evenodd"><path stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" d="M10 0h34v44H20V12H10z"/><path stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" d="M0 12h20v32H0z"/><circle cx="10" cy="38" r="2"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/diagnosis.js

Icon["a" /* default */].register({
  diagnosis: {
    paths: [{
      d: 'M40 23.75v10.23a14 14 0 1 1-28 0v-.15A12 12 0 0 1 2 22V3a3 3 0 0 1 3-3h2.95a2 2 0 1 1 0 4H6v18a8 8 0 1 0 16 0V4h-1.94a2 2 0 1 1 0-4H23a3 3 0 0 1 3 3v19a12 12 0 0 1-10 11.83v.15a10 10 0 1 0 20 0V23.75a8 8 0 1 1 4 0zM38 20a4 4 0 1 0 0-8 4 4 0 0 0 0 8z'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/distribute-horizontally.js

Icon["a" /* default */].register({
  'distribute-horizontally': {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2v44M42 2v44" stroke="currentColor" stroke-width="4"/><path class="fillColor" stroke="currentColor" stroke-width="4" d="M18 8h12v32H18z"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/distribute-vertically.js

Icon["a" /* default */].register({
  'distribute-vertically': {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M2 6h44M2 42h44" stroke="currentColor" stroke-width="4"/><path class="fillColor" stroke="currentColor" stroke-width="4" d="M8 18h32v12H8z"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/document-file.js

Icon["a" /* default */].register({
  'document-file': {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke="currentColor" stroke-width="4"><path d="M26 41H2a5 5 0 0 0 5 5h24"/><path d="M26 41a5 5 0 0 0 10 0V7"/><path d="M12 41V7a5 5 0 0 1 5-5h24"/><path d="M36 7a5 5 0 0 1 10 0v2H36V7zM18 9h12m-12 7h12m-12 7h12"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/document-folder.js

Icon["a" /* default */].register({
  'document-folder': {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path class="fillColor" stroke="currentColor" stroke-width="4" d="M22 2h12v44H22zM6 2l12 1-4 43-12-1zm28 0h12v44H34z"/><path class="innerStrokeColor" d="M28 40v-6m0-23v-1m0 8v-1m12 23v-6m0-23v-1m0 8v-1" stroke="currentColor" stroke-width="4"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/dot-circle.js

Icon["a" /* default */].register({
  'dot-circle': {
    raw: '<g fill="none" fill-rule="evenodd"><circle stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" cx="24" cy="24" r="15"/><circle class="innerFillColor" cx="24" cy="24" r="6"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/download.js

Icon["a" /* default */].register({
  download: {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke="currentColor" stroke-width="4"><path d="M46 26v20H2V26h0"/><path d="M34 26L24 36 14 26h0M24 2v32V2z"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/dynamics.js

Icon["a" /* default */].register({
  dynamics: {
    paths: [{
      d: 'M43.76 9.05a2 2 0 1 1 3.52-1.9c.47.87.72 1.84.72 2.85v32a6 6 0 0 1-6 6H6a6 6 0 0 1-6-6V10c0-.93.21-1.84.62-2.66A2 2 0 1 1 4.21 9.1c-.14.3-.21.6-.21.9v32c0 1.1.9 2 2 2h36a2 2 0 0 0 2-2V10c0-.34-.08-.66-.24-.95zM13 0h22a6 6 0 1 1 0 12H13a6 6 0 1 1 0-12zm0 4a2 2 0 1 0 0 4h22a2 2 0 1 0 0-4H13zm15.62 27.33l-8.9-2.66-8.44 7.02a2 2 0 0 1-2.56-3.07L18 24.9a2 2 0 0 1 1.85-.38l8.85 2.65 8.57-7.67a2 2 0 1 1 2.67 2.98l-9.4 8.42a2 2 0 0 1-1.91.42z'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/edit.js

Icon["a" /* default */].register({
  edit: {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path class="fillColor" stroke="currentColor" stroke-width="4" d="M2 46h10l34-34L36 2 2 36z"/><path class="innerStrokeColor" d="M30 8l10 10" stroke="currentColor" stroke-width="4"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/ellipsis-h.js

Icon["a" /* default */].register({
  'ellipsis-h': {
    paths: [{
      class: 'noStroke fillColor',
      d: 'M10 27a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm14 0a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm14 0a3 3 0 1 1 0-6 3 3 0 0 1 0 6z',
      'fill-rule': 'evenodd'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/ellipsis-v.js

Icon["a" /* default */].register({
  'ellipsis-v': {
    paths: [{
      class: 'noStroke fillColor',
      d: 'M25 41a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0-14a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0-14a3 3 0 1 1 0-6 3 3 0 0 1 0 6z',
      'fill-rule': 'evenodd'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/envelope-open.js

Icon["a" /* default */].register({
  'envelope-open': {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linejoin="round"><path class="fillColor" stroke="currentColor" stroke-width="4" d="M2 16L24 2l22 14v30H2z"/><path class="innerStrokeColor" stroke="currentColor" stroke-width="4" d="M2 16l22 14 22-14"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/envelope.js

Icon["a" /* default */].register({
  envelope: {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><rect class="fillColor" stroke="currentColor" stroke-width="4" x="2" y="8" width="44" height="32" rx="4"/><path class="innerStrokeColor" d="M4 10l17.4 14.8a4 4 0 0 0 5.2 0L44 10" stroke="currentColor" stroke-width="4"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/exchange-alt--circle.js

Icon["a" /* default */].register({
  'exchange-alt--circle': {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><circle class="fillColor" stroke="currentColor" stroke-width="4" cx="24" cy="24" r="22"/><path class="innerStrokeColor" stroke="currentColor" stroke-width="4" d="M12 20h24l-7-7m7 15H12l7 7"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/exchange.js

Icon["a" /* default */].register({
  exchange: {
    paths: [{
      d: 'M9 2l15 14L39 2M5 19h37M5 32h37m-3-17l4 4-4 4M8 28l-4 4 4 4m16-17v27',
      fill: 'none',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      stroke: 'currentColor',
      'stroke-width': '4'
    }],
    width: '48',
    height: '48'
  }
});
// EXTERNAL MODULE: ./node_modules/veui-theme-one-icons/exclamation-circle.js
var exclamation_circle = __webpack_require__(67);

// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/expand-alt.js

Icon["a" /* default */].register({
  'expand-alt': {
    paths: [{
      d: 'M20 2H4a2 2 0 0 0-2 2v16m26 26h16a2 2 0 0 0 2-2V28m-26-8L4 4m40 40L28 28m0-26h16a2 2 0 0 1 2 2v16M20 46H4a2 2 0 0 1-2-2V28',
      fill: 'none',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      stroke: 'currentColor',
      'stroke-width': '4'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/expansion.js

Icon["a" /* default */].register({
  expansion: {
    paths: [{
      d: 'M2 24h44M2 7h24M2 41h24m12-25l8 8-8 8',
      fill: 'none',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      stroke: 'currentColor',
      'stroke-width': '4'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/external-link.js

Icon["a" /* default */].register({
  'external-link': {
    paths: [{
      d: 'M46 28v18H2V2h18m8 0h18v18m-22 4L46 2',
      fill: 'none',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      stroke: 'currentColor',
      'stroke-width': '4'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/eye-slash.js

Icon["a" /* default */].register({
  'eye-slash': {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke="currentColor" stroke-width="4"><path d="M40.22 15.78c1.98 2.3 3.9 5.03 5.78 8.22-6.67 11.33-14 17-22 17-2.5 0-4.95-.56-7.33-1.67m-8.89-7.11A55.87 55.87 0 0 1 2 24C8.67 12.67 16 7 24 7c2.5 0 4.95.56 7.33 1.67"/><path d="M24 32a8 8 0 0 0 8-8m-16 0a8 8 0 0 1 8-8M46 2L2 46"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/eye.js

Icon["a" /* default */].register({
  eye: {
    raw: '<g class="fillColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M24 41c8 0 15.33-5.67 22-17C39.33 12.67 32 7 24 7S8.67 12.67 2 24c6.67 11.33 14 17 22 17z" stroke="currentColor" stroke-width="4"/><circle class="innerFillColor innerStrokeColor" stroke="currentColor" stroke-width="4" cx="24" cy="24" r="7"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/fengchao.js

Icon["a" /* default */].register({
  fengchao: {
    paths: [{
      d: 'M23.17 30.98h5.46v-5.47h-5.46v5.47zm-6.51-2.73a9.27 9.27 0 0 0 6.05 8.68 9.22 9.22 0 0 0 10.37-2.86 9.2 9.2 0 0 0 1.4-9.24 9.24 9.24 0 0 0-17.82 3.42zm1.84-8.52l-.01-.01v.01zm-.01-.02zm27.46 9.02a13.07 13.07 0 0 0-13.98-13.04c.52.22 1.02.48 1.5.77a14.07 14.07 0 0 1 5.77 7.46 13.92 13.92 0 0 1-.35 9.65 14.05 14.05 0 0 1-12.97 8.71 14 14 0 0 1-11.06-22.6 5.94 5.94 0 0 1 3.25-2.23l.09-.02.05-.01.16-.03.08-.02.14-.03.08-.02a5.36 5.36 0 0 0 .21-.05l.13-.03.09-.03.12-.03a16.37 16.37 0 0 0 .21-.06l.09-.03c.04 0 .09-.02.13-.04l.07-.02a9.8 9.8 0 0 0 .4-.14c.03 0 .06-.02.08-.03l.13-.04.08-.04.12-.04.09-.04.1-.04.1-.04.1-.05.1-.04.1-.05.09-.04.1-.05.1-.04.1-.06.08-.04.13-.06.06-.03.19-.1.05-.03.13-.08.07-.04.11-.07.08-.04.1-.07.08-.04.1-.07.08-.05.1-.07a3.34 3.34 0 0 0 .18-.12l.07-.05.1-.07.08-.05.11-.08.06-.05.17-.12.03-.03.2-.16.48-.41.03-.02c.82-.75 1.55-1.6 2.16-2.53a12.8 12.8 0 0 1-9.62.93h-.01a.13.13 0 0 1-.02-.24 11.36 11.36 0 0 1 3.85-.71 20.59 20.59 0 0 0 6.74-1.68l.12-.05.03-.02c.03 0 .06-.02.08-.03h.02l.03-.02.03-.02h.03c.01-.02.03-.02.05-.03l.1-.05.02-.01.05-.02a11.32 11.32 0 0 0 .2-.1l.11-.05.04-.03h.01l.07-.04c.03 0 .05-.02.07-.03h.01l.01-.01.1-.05h.01a32.01 32.01 0 0 1 2.84-1.16h.01l.01-.01h.03v-.01l.03-.01h.03a13.01 13.01 0 0 1 5.53-.47l-.17-.13a13.07 13.07 0 0 0-5.71-2.22 14.79 14.79 0 0 0-9.21 1.54.37.37 0 0 1-.52-.48.46.46 0 0 1 .09-.12l.02-.03h.01l.07-.05.23-.17a12.08 12.08 0 0 1 8.4-2.16 18.2 18.2 0 0 0 9.8-.86l.22-.08c.13-.04.3-.11.45-.18l.04-.02c.16-.08.31-.17.4-.26 0 0-.15.04-.42.04a4.49 4.49 0 0 1-1.61-.31 25.86 25.86 0 0 0-5.8-.98h-.1a26.56 26.56 0 0 0-8.09.84 26.22 26.22 0 0 0-13.92 9.3 23.36 23.36 0 0 0-4.82 20.97 19.85 19.85 0 0 0 4.1 8.26 19.97 19.97 0 0 0 35.05-9.5c.16-.8.25-1.62.25-2.47v-.09zm-8.34-16.14c-.37-.06-.64-.2-1.1-.27a5.98 5.98 0 0 0-6.13 3.13l.4-.22a10.37 10.37 0 0 1 7.04-.91 2.89 2.89 0 0 0 .6.03 5.39 5.39 0 0 0 4.83-3 7.8 7.8 0 0 1-5.64 1.24zm-29.28.86l.07-.13a24.3 24.3 0 0 1 .68-1.1 28.1 28.1 0 0 1 8.13-8.16h.01a27.88 27.88 0 0 1 6.31-3.1 27.06 27.06 0 0 1 3.6-.95 18.11 18.11 0 0 0-2.73.12 18.88 18.88 0 0 0-2.67.52c-1.91.52-3.7 1.33-5.32 2.39A18.87 18.87 0 0 1 18.58.82l.08-.07.38-.29-.48.11a12.9 12.9 0 0 0-4.82 2.3 15.31 15.31 0 0 0-4.96 5.98v.02l-.02.03a.25.25 0 0 1-.47-.13v-.04l.02-.09a12.8 12.8 0 0 1 1.1-3.5l-.03.03a26.22 26.22 0 0 0-6.43 11.51 23.01 23.01 0 0 0 4.62 21.1 26.3 26.3 0 0 1-2.6-11.43c0-4.68 1.22-9.08 3.36-12.9z',
      'fill-rule': 'evenodd'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/file-alt.js

Icon["a" /* default */].register({
  'file-alt': {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path class="fillColor" stroke="currentColor" stroke-width="4" d="M6 2h36v44H6z"/><path d="M14 12h20m-20 8h20m-20 8h20m-20 8h12" stroke="currentColor" stroke-width="4"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/film.js

Icon["a" /* default */].register({
  film: {
    raw: '<g transform="translate(0 -2)" stroke="currentColor" stroke-width="4" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><rect class="fillColor" x="2" y="4" width="44" height="40" rx="2"/><path class="innerFillColor innerStrokeColor" d="M20 18l10 6-10 6z"/><path d="M4 4h6v40H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2zm34 0h6a2 2 0 0 1 2 2v36a2 2 0 0 1-2 2h-6V4zM2 12h8m28 0h8M2 20h8m28 0h8M2 28h8m28 0h8M2 36h8m28 0h8"/></g>',
    width: '48',
    height: '44'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/filter.js

Icon["a" /* default */].register({
  filter: {
    paths: [{
      stroke: 'currentColor',
      'stroke-width': '4',
      d: 'M15 34V22L4 2h40L33 22v24',
      fill: 'none',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/finance.js

Icon["a" /* default */].register({
  finance: {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><circle class="fillColor" stroke="currentColor" stroke-width="4" cx="24" cy="24" r="22"/><path class="innerFillColor innerStrokeColor" stroke="currentColor" stroke-width="4" d="M24 18l6 6-6 6-6-6z"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/financing.js

Icon["a" /* default */].register({
  financing: {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path class="fillColor" d="M24 46c11.05 0 20-6.06 20-16 0-5.27-4.67-11.6-14-18.96H18C8.67 17.05 4 23.37 4 30c0 9.94 8.95 16 20 16zm-6-35l-4-9 6 2 4-2 4 2 6-2-4 9z" stroke="currentColor" stroke-width="4"/><path class="innerStrokeColor" stroke="currentColor" stroke-width="4" d="M19 19l5 5 5-5m-11 7h12m-12 6h12m-6-6v12"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/fireworks.js

Icon["a" /* default */].register({
  fireworks: {
    raw: '<g fill="none" fill-rule="evenodd"><path class="fillColor" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" d="M2 46l11-26 17 17z"/><path d="M23 21l5-5c2.67-2.67 3-5 1-7m0 18l5-5c3.33-3.33 6.67-3.33 10 0" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><circle class="noStroke fillColor" cx="16" cy="9" r="2"/><circle class="noStroke fillColor" cx="38" cy="8" r="2"/><circle class="noStroke fillColor" cx="38" cy="31" r="2"/><circle class="noStroke fillColor" cx="39" cy="40" r="2"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/flag.js

Icon["a" /* default */].register({
  flag: {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path class="fillColor" d="M6 6h22l7 3h9a2 2 0 0 1 2 2v21a2 2 0 0 1-2 2h-9l-7-3H6" stroke="currentColor" stroke-width="4"/><path d="M6 2v44m-4 0h8" stroke="currentColor" stroke-width="4"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/flashlight.js

Icon["a" /* default */].register({
  flashlight: {
    paths: [{
      d: 'M36 46v-7.56A21.98 21.98 0 0 0 46 20H2a21.9 21.9 0 0 0 10 18.48l.06 7.52M4 2l2 10m7-10l2 10m9-10v10M35 2l-2 10M44 2l-2 10',
      fill: 'none',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      stroke: 'currentColor',
      'stroke-width': '4'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/flask.js

Icon["a" /* default */].register({
  flask: {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path class="fillColor" stroke="currentColor" stroke-width="4" d="M18 8h12v19l16 16v3H2v-3l16-16z"/><path d="M18 2h12" stroke="currentColor" stroke-width="4"/><path class="innerStrokeColor" d="M24 27v1m0-10v3M10 35h28" stroke="currentColor" stroke-width="4"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/flip-horizontally.js

Icon["a" /* default */].register({
  'flip-horizontally': {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M24 46V2v44z" stroke="currentColor" stroke-width="4"/><path class="fillColor" stroke="currentColor" stroke-width="4" d="M2 39l14-29v29zm44 0H32V10z"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/flip-vertically.js

Icon["a" /* default */].register({
  'flip-vertically': {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M2 24h44" stroke="currentColor" stroke-width="4"/><path class="fillColor" stroke="currentColor" stroke-width="4" d="M9 2v14h29zm0 44V32h29z"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/fog.js

Icon["a" /* default */].register({
  fog: {
    paths: [{
      d: 'M2.85 22a15 15 0 0 1 28.63-8.92A10 10 0 0 1 46 22M4 38h6m8 0h12m8 0h6M4 30h23m8 0h9M4 46h9m8 0h23M11 22h27',
      stroke: 'currentColor',
      'stroke-width': '4',
      fill: 'none',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/folder-download.js

Icon["a" /* default */].register({
  'folder-download': {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path class="fillColor" d="M2 7v34c0 1.1.9 2 2 2h40a2 2 0 0 0 2-2V13a2 2 0 0 0-2-2H27l-6-6H4a2 2 0 0 0-2 2z" stroke="currentColor" stroke-width="4"/><path d="M16 27l8 8 8-8m-8 7V19" stroke="currentColor" stroke-width="4"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/folder-plus.js

Icon["a" /* default */].register({
  'folder-plus': {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path class="fillColor" d="M2 7v34c0 1.1.9 2 2 2h40a2 2 0 0 0 2-2V13a2 2 0 0 0-2-2H27l-6-6H4a2 2 0 0 0-2 2z" stroke="currentColor" stroke-width="4"/><path d="M16 27h16m-8-8v16" stroke="currentColor" stroke-width="4"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/folder.js

Icon["a" /* default */].register({
  folder: {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path class="fillColor" d="M2 7v34c0 1.1.9 2 2 2h40a2 2 0 0 0 2-2V13a2 2 0 0 0-2-2H27l-6-6H4a2 2 0 0 0-2 2z" stroke="currentColor" stroke-width="4"/><path class="innerStrokeColor" d="M2 19h44" stroke="currentColor" stroke-width="4"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/font.js

Icon["a" /* default */].register({
  font: {
    paths: [{
      d: 'M2 46L24 2l22 44M11 28h26',
      fill: 'none',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      stroke: 'currentColor',
      'stroke-width': '4'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/football.js

Icon["a" /* default */].register({
  football: {
    raw: '<g stroke="currentColor" stroke-width="4" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><circle cx="24" cy="24" r="22"/><path d="M31 4l-7 5v5l9 7 5-2 3-8M17 4l7 5v5l-9 7-5-2-3-8"/><path d="M3 22l7-3 5 2 3 11-3 4H6"/><path d="M15 43v-7l3-4h12l3 4v7"/><path d="M42 36h-9l-3-4 3-11 5-2 8 4"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/frown.js

Icon["a" /* default */].register({
  frown: {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><circle class="fillColor" stroke="currentColor" stroke-width="4" cx="24" cy="24" r="22"/><path class="innerStrokeColor" d="M14 36c2.67-4 6-6 10-6s7.33 2 10 6M17 16v4m14-4v4" stroke="currentColor" stroke-width="4"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/game.js

Icon["a" /* default */].register({
  game: {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path class="fillColor" stroke="currentColor" stroke-width="4" d="M28 28h18v18H28zM12 2l10 17H2z"/><circle class="fillColor" stroke="currentColor" stroke-width="4" cx="37" cy="11" r="9"/><path d="M2 28l18 18m0-18L2 46" stroke="currentColor" stroke-width="4"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/gamepad.js

Icon["a" /* default */].register({
  gamepad: {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><rect class="fillColor" stroke="currentColor" stroke-width="4" x="2" y="16" width="44" height="26" rx="12"/><path class="innerStrokeColor" d="M15 24v10m-5-5h10m13-5v1m0 8v1m4-5h1m-10 0h1" stroke="currentColor" stroke-width="4"/><path stroke="currentColor" stroke-width="4" d="M24 16V8h9V2"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/gavel.js

Icon["a" /* default */].register({
  gavel: {
    raw: '<g stroke="currentColor" stroke-width="4" fill="none" fill-rule="evenodd"><path d="M11.4 25.32L26 10.74l8.24 8.24-14.58 14.58zm19.55-1l10.47 10.47h0a4.33 4.33 0 0 1 0 6.13h0a4.33 4.33 0 0 1-6.13 0L24.82 30.45h0m-4.56 3.81c1 2 1.13 4.3-.57 6a4.69 4.69 0 0 1-6.42.09L3.33 30.4a4.33 4.33 0 0 1 .01-6.12c1.7-1.7 5.23-1.69 6.92 0"/><path d="M35 20c2 2 4.95 1.42 6.64-.27a4.71 4.71 0 0 0 .1-6.43l-9.95-9.93a4.33 4.33 0 0 0-6.12 0c-1.7 1.7-1.69 5.23 0 6.92"/></g>',
    width: '45',
    height: '45'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/gem.js

Icon["a" /* default */].register({
  gem: {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path class="fillColor" stroke="currentColor" stroke-width="4" d="M10 3h28l8 14-22 26L2 17z"/><path class="innerStrokeColor" stroke="currentColor" stroke-width="4" d="M10 3l14 40L38 3M2 17h44"/><path class="innerStrokeColor" stroke="currentColor" stroke-width="4" d="M15 17l9-14 9 14"/></g>',
    width: '48',
    height: '45'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/ghost.js

Icon["a" /* default */].register({
  ghost: {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path class="fillColor" d="M8 46l4-4 4 4 4-6 4 6 4-6 4 6 4-4 4 4V18a16 16 0 1 0-32 0v28z" stroke="currentColor" stroke-width="4"/><path class="innerStrokeColor" d="M18 18h4m8 0h4" stroke="currentColor" stroke-width="4"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/gift.js

Icon["a" /* default */].register({
  gift: {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path class="fillColor" stroke="currentColor" stroke-width="4" d="M2 10h44v12H2zm4 12h36v24H6z"/><path class="innerStrokeColor" d="M24 22v24" stroke="currentColor" stroke-width="4"/><path stroke="currentColor" stroke-width="4" d="M16 2l8 8 8-8"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/github.js

Icon["a" /* default */].register({
  github: {
    paths: [{
      class: 'noStroke',
      d: 'M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z'
    }],
    width: 496,
    height: 512
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/globe-stand.js

Icon["a" /* default */].register({
  'globe-stand': {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M39.1 2A22 22 0 1 1 8 33.1" stroke="currentColor" stroke-width="4"/><circle class="fillColor" stroke="currentColor" stroke-width="4" cx="24" cy="18" r="16"/><path d="M24 40v6m-6 0h12" stroke="currentColor" stroke-width="4"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/go-bottom.js

Icon["a" /* default */].register({
  'go-bottom': {
    paths: [{
      d: 'M38 13L24 27 10 13h0m0 22h28',
      fill: 'none',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      stroke: 'currentColor',
      'stroke-width': '4'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/go-end.js

Icon["a" /* default */].register({
  'go-end': {
    paths: [{
      d: 'M12 10l14 14-14 14h0m22-28v28',
      fill: 'none',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      stroke: 'currentColor',
      'stroke-width': '4'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/go-start.js

Icon["a" /* default */].register({
  'go-start': {
    paths: [{
      d: 'M36 38L22 24l14-14h0m-22 0v28',
      fill: 'none',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      stroke: 'currentColor',
      'stroke-width': '4'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/go-top.js

Icon["a" /* default */].register({
  'go-top': {
    paths: [{
      d: 'M10 35l14-14 14 14M10 13h28',
      fill: 'none',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      stroke: 'currentColor',
      'stroke-width': '4'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/graduation-cap.js

Icon["a" /* default */].register({
  'graduation-cap': {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path class="fillColor" stroke="currentColor" stroke-width="4" d="M2 19l22-9 22 9-22 9z"/><path d="M46 19v10" stroke="currentColor" stroke-width="4"/><path class="innerFillColor" d="M12 23v13c4 2.67 8 4 12 4s8-1.33 12-4V23" stroke="currentColor" stroke-width="4"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/grin.js

Icon["a" /* default */].register({
  grin: {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><circle class="fillColor" stroke="currentColor" stroke-width="4" cx="24" cy="24" r="22"/><path class="innerStrokeColor" d="M14 30c2.67 4 6 6 10 6s7.33-2 10-6M17 16v4m14-4v4" stroke="currentColor" stroke-width="4"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/h1.js

Icon["a" /* default */].register({
  h1: {
    paths: [{
      d: 'M5 9v30M23 9v30m11 0h10M5 23h18m11-9l5-5v30M2 9h6M2 39h6M20 9h6m-6 30h6',
      fill: 'none',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      stroke: 'currentColor',
      'stroke-width': '4'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/h2.js

Icon["a" /* default */].register({
  h2: {
    paths: [{
      d: 'M5 9v30M23 9v30M5 23h18M2 9h6M2 39h6M20 9h6m-6 30h6m6-23c0-5 3.5-7 7-7s7 2 7 7c0 9-15 11-15 19v4h15',
      fill: 'none',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      stroke: 'currentColor',
      'stroke-width': '4'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/h3.js

Icon["a" /* default */].register({
  h3: {
    paths: [{
      d: 'M5 9v30M23 9v30M5 23h18M2 9h6M2 39h6M20 9h6m-6 30h6m6-30h14L36 21c5 0 10 5 10 10s-4 8-7 8c-3.33 0-5.67-1-7-3',
      fill: 'none',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      stroke: 'currentColor',
      'stroke-width': '4'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/hamburger.js

Icon["a" /* default */].register({
  hamburger: {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M46 24a22 22 0 1 0-44 0h44z" stroke="currentColor" stroke-width="4"/><path class="fillColor" stroke="currentColor" stroke-width="4" d="M2 40h44v6H2zm0-10l6 4 8-4 8 4 8-4 8 4 6-4"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/handheld.js

Icon["a" /* default */].register({
  handheld: {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path class="fillColor" stroke="currentColor" stroke-width="4" d="M5 24h38v22H5z"/><path stroke="currentColor" stroke-width="4" d="M5 2h38v22H5z"/><path class="innerStrokeColor" d="M16 30v10m-5-5h10m11-5v1m0 8v1m4-5h1m-10 0h1" stroke="currentColor" stroke-width="4"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/headset.js

Icon["a" /* default */].register({
  headset: {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M46 42V28a22 22 0 1 0-44 0v14m14-9v6m16-6v6m-8-10v14" stroke="currentColor" stroke-width="4"/><path class="fillColor" stroke="currentColor" stroke-width="4" d="M2 30h4v12H2zm40 0h4v12h-4z"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/heart.js

Icon["a" /* default */].register({
  heart: {
    paths: [{
      class: 'fillColor',
      d: 'M34 4a12 12 0 0 1 12 12c0 8.63-8 16-12 20-2.67 2.67-6 5.33-10 8-4-2.67-7.33-5.33-10-8-4-4-12-11.37-12-20a12 12 0 0 1 22-6.64A11.99 11.99 0 0 1 34 4z',
      stroke: 'currentColor',
      'stroke-width': '4',
      fill: 'none',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/heavy-rain.js

Icon["a" /* default */].register({
  'heavy-rain': {
    paths: [{
      d: 'M8 29a15 15 0 1 1 23.48-15.92A10 10 0 0 1 40 31.18M16 28v12m8-8v12m8-16v12',
      fill: 'none',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      stroke: 'currentColor',
      'stroke-width': '4'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/hi-f.js

Icon["a" /* default */].register({
  'hi-f': {
    raw: '<g class="noStroke"><g class="noStroke"><path class="noStroke" d="M4.33 16.4s-9.39-6.01-.72-13.6c0 0 7.14-5.2 11.84 2.49 0 0 6.47-4.03 16.32-.1 0 0 4.54-7.14 11.63-2.24 0 0 4.34 2.9 2.8 8.86 0 0-.66 3.11-3.41 4.59 0 0 3.67 7.74 0 16.86 0 0-2.04 3.88.3 6.99 0 0 .87 1.73 3.88 2.8 0 0 3.21 1.42-2.1 2.55 0 0-2.85.45-6.27-1.07l-4.48-1.64s-8.83 5.76-19.44.97C4.08 39.07.4 26.64 4.33 16.4zm11.05-1.72c-.9 0-1.62.73-1.62 1.62v15.25a1.62 1.62 0 1 0 3.24 0v-6.72h8.41v6.72a1.62 1.62 0 1 0 3.24 0V16.3a1.62 1.62 0 1 0-3.24 0v5.74H17V16.3c0-.9-.73-1.62-1.62-1.62zm17.47 0a1.4 1.4 0 1 0 0 2.8h.16a1.4 1.4 0 0 0 0-2.8h-.16zm.08 4.66c-.81 0-1.47.66-1.47 1.47v10.44a1.48 1.48 0 0 0 2.95 0V20.8c0-.81-.66-1.47-1.48-1.47z"/></g></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/hi.js

Icon["a" /* default */].register({
  hi: {
    paths: [{
      class: 'noStroke',
      d: 'M40.28 40.6c-.22-.26-.4-.5-.52-.72a6.99 6.99 0 0 1-.97-1.9 8.3 8.3 0 0 1 .1-5.25c.15-.48.32-.87.45-1.14a18.53 18.53 0 0 0 .02-13.73l-.82-1.72 1.68-.9c.51-.27.94-.67 1.3-1.16a5.35 5.35 0 0 0 .83-1.77 5.58 5.58 0 0 0-1.76-5.96c-2.61-1.8-4.67-1.5-6.56.12a7.7 7.7 0 0 0-1.25 1.36l-.89 1.4-1.54-.61c-4.51-1.8-8.44-1.79-11.63-.7-.77.25-1.28.5-1.49.63L15.52 9.6l-1.05-1.7a6.03 6.03 0 0 0-2.66-2.56c-1.28-.55-2.75-.39-4.22.28-.46.2-.8.4-.99.53-3.37 2.99-3.26 5.35-1.1 7.76a9.46 9.46 0 0 0 1.6 1.42l1.36.88-.58 1.52c-3.4 8.84.11 18.81 8.42 22.56a17.13 17.13 0 0 0 13.5.38 16.25 16.25 0 0 0 2.35-1.12l.83-.54 5.05 1.83.13.05c1.18.53 2.32.79 3.32.85a7.63 7.63 0 0 1-1.2-1.12zM2.52 16.58c-3.55-3.97-3.75-8.9 1.52-13.5l.14-.12c.38-.27.98-.63 1.77-.99C8.35.88 10.9.6 13.39 1.66a9.16 9.16 0 0 1 3.45 2.68l.6-.22c3.7-1.25 8.1-1.38 13 .26.28-.3.61-.63.99-.95C34.6.72 38.6.13 42.83 3.05c.54.36 1.25.99 1.94 1.92a9.49 9.49 0 0 1 1.47 8.26 8.68 8.68 0 0 1-2.66 4.5l.26.89a22.47 22.47 0 0 1-.82 14.54l-.09.19c-.04.08-.14.3-.24.62a4.47 4.47 0 0 0-.1 2.75c.1.31.24.6.45.87l.11.15.08.16c-.01-.03.02.02.1.12.21.25.5.5.9.76s.87.5 1.43.7l.14.05c.23.1.52.26.82.48.74.55 1.26 1.24 1.25 2.28 0 1.27-.83 2.11-2.09 2.67a12.07 12.07 0 0 1-2.8.75 13.1 13.1 0 0 1-6.39-1.14l-3.16-1.15c-.58.3-1.33.64-2.21.98a21.06 21.06 0 0 1-16.57-.47C4.78 39.47.41 28.09 3.65 17.7c-.36-.32-.75-.7-1.13-1.13zm12.86-1.89c.9 0 1.62.73 1.62 1.62v5.74h8.41V16.3a1.62 1.62 0 1 1 3.24 0v15.25a1.62 1.62 0 1 1-3.24 0v-6.72H17v6.72a1.62 1.62 0 1 1-3.24 0V16.3c0-.9.73-1.62 1.62-1.62zm17.47 0h.16a1.4 1.4 0 1 1 0 2.8h-.16a1.4 1.4 0 1 1 0-2.8zm.08 4.66c.82 0 1.48.66 1.48 1.47v10.44a1.48 1.48 0 1 1-2.95 0V20.8c0-.81.66-1.47 1.47-1.47z'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/history.js

Icon["a" /* default */].register({
  history: {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke="currentColor" stroke-width="4"><path d="M4 5v8h8M2 24a22 22 0 1 0 2.94-11"/><path d="M24 13v11l10 10"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/home.js

Icon["a" /* default */].register({
  home: {
    raw: '<g stroke="currentColor" stroke-width="4" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path class="fillColor" d="M24 2L2 22h6v20h32V22h6z"/><path class="innerFillColor innerStrokeColor" d="M17 42V26h14v16z"/><path d="M12 42h24"/></g>',
    width: '48',
    height: '44'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/hourglass-half.js

Icon["a" /* default */].register({
  'hourglass-half': {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2h36M6 46h36" stroke="currentColor" stroke-width="4"/><path class="fillColor" d="M8 2h32c-4 14.67-9.33 22-16 22S12 16.67 8 2zm0 44c4-14.67 9.33-22 16-22s12 7.33 16 22H8z" stroke="currentColor" stroke-width="4"/><path class="innerStrokeColor" d="M19 15h10M16 38h16" stroke="currentColor" stroke-width="4"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/hourglass.js

Icon["a" /* default */].register({
  hourglass: {
    raw: '<g fill="none" fill-rule="evenodd"><path d="M6 2h36M6 46h36" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path class="fillColor" d="M8 2h32c-4 14.67-9.33 22-16 22S12 16.67 8 2zm0 44c4-14.67 9.33-22 16-22s12 7.33 16 22H8z" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/hubspot.js

Icon["a" /* default */].register({
  hubspot: {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><circle class="fillColor" stroke="currentColor" stroke-width="4" cx="8" cy="6" r="4"/><circle class="fillColor" stroke="currentColor" stroke-width="4" cx="8" cy="36" r="6"/><circle class="fillColor" stroke="currentColor" stroke-width="4" cx="40" cy="40" r="6"/><circle class="fillColor" stroke="currentColor" stroke-width="4" cx="22" cy="18" r="8"/><circle class="fillColor" stroke="currentColor" stroke-width="4" cx="34" cy="6" r="4"/><path d="M11 9l4 4m15-3l-2 2m7 23l-7-10m-16 6l5-6" stroke="currentColor" stroke-width="4"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/id-card.js

Icon["a" /* default */].register({
  'id-card': {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path class="fillColor" stroke="currentColor" stroke-width="4" d="M2 8h44v32H2z"/><circle class="innerStrokeColor innerFillColor" stroke="currentColor" stroke-width="4" cx="16" cy="21" r="4"/><path class="innerStrokeColor" d="M22 31a6 6 0 1 0-12 0m18-11h10m-8 8h8" stroke="currentColor" stroke-width="4"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/imac.js

Icon["a" /* default */].register({
  imac: {
    raw: '<g transform="translate(0 -2)" fill="none" fill-rule="evenodd"><path class="fillColor" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" d="M2 4h44v32H2z"/><path class="innerFillColor" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" d="M2 30h44v6H2z"/><rect class="noStroke innerFillColor" x="10" y="10" width="4" height="4" rx="1"/><rect class="noStroke innerFillColor" x="10" y="17" width="4" height="4" rx="1"/><rect class="noStroke innerFillColor" x="18" y="10" width="4" height="4" rx="1"/><rect class="noStroke innerFillColor" x="18" y="17" width="4" height="4" rx="1"/><rect class="noStroke innerFillColor" x="26" y="10" width="4" height="4" rx="1"/><rect class="noStroke innerFillColor" x="34" y="10" width="4" height="4" rx="1"/><rect class="noStroke innerFillColor" x="26" y="17" width="4" height="4" rx="1"/><path class="fillColor" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" d="M20 36l-2 8h13l-2-8z"/></g>',
    width: '48',
    height: '44'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/image.js

Icon["a" /* default */].register({
  image: {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><rect class="fillColor" stroke="currentColor" stroke-width="4" x="2" y="6" width="44" height="36" rx="4"/><circle class="innerFillColor innerStrokeColor" stroke="currentColor" stroke-width="4" cx="33" cy="17" r="3"/><path class="innerStrokeColor" d="M2 21c12 0 20 4 24 12 4-4.67 10.67-7 20-7" stroke="currentColor" stroke-width="4"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/inbox-in.js

Icon["a" /* default */].register({
  'inbox-in': {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path class="fillColor" stroke="currentColor" stroke-width="4" d="M2 2h44v44H2z"/><path class="innerFillColor" stroke="currentColor" stroke-width="4" d="M2 36h12l2 10h16l2-10h12v10H2z"/><path class="innerStrokeColor" stroke="currentColor" stroke-width="4" d="M16 22l8 8 8-8m-8 7V12"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/inbox-out.js

Icon["a" /* default */].register({
  'inbox-out': {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path class="fillColor" stroke="currentColor" stroke-width="4" d="M2 2h44v44H2z"/><path class="innerFillColor" stroke="currentColor" stroke-width="4" d="M2 36h12l2 10h16l2-10h12v10H2z"/><path class="innerStrokeColor" stroke="currentColor" stroke-width="4" d="M16 20l8-8 8 8m-8 10V13"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/inbox-success.js

Icon["a" /* default */].register({
  'inbox-success': {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path class="fillColor" stroke="currentColor" stroke-width="4" d="M2 2h44v44H2z"/><path class="innerFillColor" stroke="currentColor" stroke-width="4" d="M2 36h12l2 10h16l2-10h12v10H2z"/><path class="innerStrokeColor" stroke="currentColor" stroke-width="4" d="M16 20l7 7 13-13"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/inbox.js

Icon["a" /* default */].register({
  inbox: {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path class="fillColor" stroke="currentColor" stroke-width="4" d="M2 2h44v44H2z"/><path class="innerFillColor" stroke="currentColor" stroke-width="4" d="M2 36h12l2 10h16l2-10h12v10H2z"/><path class="innerStrokeColor" d="M16 16h16m-16 8h16" stroke="currentColor" stroke-width="4"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/infinity.js

Icon["a" /* default */].register({
  infinity: {
    paths: [{
      d: 'M19 28c-2 2-4 4-8 4s-9-3-9-9 5-9 9-9c6 0 9 4 13 9s7 9 13 9c4 0 9-3 9-9s-5-9-9-9-7 3-8 4',
      stroke: 'currentColor',
      'stroke-width': '4',
      fill: 'none',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round'
    }],
    width: '48',
    height: '48'
  }
});
// EXTERNAL MODULE: ./node_modules/veui-theme-one-icons/info-circle.js
var info_circle = __webpack_require__(77);

// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/intelligence.js

Icon["a" /* default */].register({
  intelligence: {
    paths: [{
      d: 'M42 48H6a6 6 0 0 1-6-6V6a6 6 0 0 1 6-6h26a6 6 0 0 1 6 6v28.1a2 2 0 1 1-4 0V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v36c0 1.1.9 2 2 2h36a2 2 0 0 0 2-2V6a2 2 0 1 1 4 0v36a6 6 0 0 1-6 6zM11 16a2 2 0 1 1 0-4h16a2 2 0 1 1 0 4H11zm0 10a2 2 0 1 1 0-4h16a2 2 0 1 1 0 4H11zm0 10a2 2 0 1 1 0-4h8a2 2 0 1 1 0 4h-8z'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/joystick.js

Icon["a" /* default */].register({
  joystick: {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path class="fillColor" stroke="currentColor" stroke-width="4" d="M2 36h44v10H2zm24-6h12v6H26z"/><circle class="fillColor" stroke="currentColor" stroke-width="4" cx="18" cy="9" r="7"/><path d="M16 16l-4 20" stroke="currentColor" stroke-width="4"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/keyboard.js

Icon["a" /* default */].register({
  keyboard: {
    raw: '<g fill="none" fill-rule="evenodd"><path class="fillColor" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" d="M2 10h44v28H2z"/><rect class="noStroke innerFillColor" x="6" y="16" width="4" height="4" rx="1"/><rect class="noStroke innerFillColor" x="22" y="16" width="4" height="4" rx="1"/><rect class="noStroke innerFillColor" x="30" y="16" width="4" height="4" rx="1"/><rect class="noStroke innerFillColor" x="14" y="16" width="4" height="4" rx="1"/><rect class="noStroke innerFillColor" x="6" y="22" width="8" height="4" rx="1"/><rect class="noStroke innerFillColor" x="18" y="22" width="4" height="4" rx="1"/><rect class="noStroke innerFillColor" x="26" y="22" width="4" height="4" rx="1"/><path class="noStroke innerFillColor" d="M35 22h6a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1z"/><rect class="noStroke innerFillColor" x="34" y="28" width="8" height="4" rx="1"/><path class="noStroke innerFillColor" d="M39 16h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1z"/><rect class="noStroke innerFillColor" x="6" y="28" width="4" height="4" rx="1"/><rect class="noStroke innerFillColor" x="14" y="28" width="16" height="4" rx="1"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/layers.js

Icon["a" /* default */].register({
  layers: {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path class="fillColor" stroke="currentColor" stroke-width="4" d="M2 12l22 10 22-10L24 2z"/><path stroke="currentColor" stroke-width="4" d="M2 20l22 10 22-10"/><path stroke="currentColor" stroke-width="4" d="M2 28l22 10 22-10"/><path stroke="currentColor" stroke-width="4" d="M2 36l22 10 22-10"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/layout.js

Icon["a" /* default */].register({
  layout: {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path class="fillColor" stroke="currentColor" stroke-width="4" d="M2 2h44v44H2z"/><path class="innerStrokeColor" d="M2 14h44m-32 0v32" stroke="currentColor" stroke-width="4"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/light-rain.js

Icon["a" /* default */].register({
  'light-rain': {
    paths: [{
      d: 'M8 29a15 15 0 1 1 23.48-15.92A10 10 0 0 1 40 31.18M16 28v2m0 6v2m8-6v2m0 6v2m8-14v2m0 6v2',
      fill: 'none',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      stroke: 'currentColor',
      'stroke-width': '4'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/lightning.js

Icon["a" /* default */].register({
  lightning: {
    paths: [{
      d: 'M18.28 4l-4.84 19.56h9.33a2.42 2.42 0 0 1 2.37 2.89l-2.15 11 10.33-16.57h-7.58a2.43 2.43 0 0 1-2.05-3.7L31.88 4h-13.6zm2.56 23.56h-9.43a2.42 2.42 0 0 1-2.34-3.01L14.7 1.84A2.41 2.41 0 0 1 17.03 0h17.68a2.42 2.42 0 0 1 2.04 3.7l-8.17 13.18h7.59a2.42 2.42 0 0 1 2.04 3.72L21.84 46.86a2.4 2.4 0 0 1-3.37.74 2.43 2.43 0 0 1-1.04-2.49l3.41-17.55z'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/liked.js

Icon["a" /* default */].register({
  liked: {
    paths: [{
      d: 'M34 4a12 12 0 0 1 12 12c0 8.63-8 16-12 20-2.67 2.67-6 5.33-10 8-4-2.67-7.33-5.33-10-8-4-4-12-11.37-12-20a12 12 0 0 1 22-6.64A11.99 11.99 0 0 1 34 4z',
      stroke: 'currentColor',
      'stroke-width': '4',
      'fill-rule': 'evenodd',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/link.js

Icon["a" /* default */].register({
  link: {
    paths: [{
      d: 'M26.12 14.8l-9.9-9.9A8 8 0 1 0 4.91 16.23l8.48 8.49M34.6 23.3l8.5 8.48a8 8 0 1 1-11.32 11.31l-9.9-9.9m4.24-7.07a8 8 0 0 0 0-11.31m-4.24 7.07a8 8 0 0 0 0 11.31',
      stroke: 'currentColor',
      'stroke-width': '4',
      fill: 'none',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/list-alt.js

Icon["a" /* default */].register({
  'list-alt': {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><rect class="fillColor" stroke="currentColor" stroke-width="4" x="2" y="2" width="44" height="44" rx="4"/><path d="M19 12h19m-19 8h19m-19 8h19m-19 8h19M10 12h1m-1 8h1m-1 8h1m-1 8h1" stroke="currentColor" stroke-width="4"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/list-audit.js

Icon["a" /* default */].register({
  'list-audit': {
    paths: [{
      d: 'M6 4a2 2 0 0 0-2 2v36c0 1.1.9 2 2 2h36a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H6zm0-4h36a6 6 0 0 1 6 6v36a6 6 0 0 1-6 6H6a6 6 0 0 1-6-6V6a6 6 0 0 1 6-6zm5 12h1a2 2 0 1 1 0 4h-1a2 2 0 1 1 0-4zm18 10h9a2 2 0 1 1 0 4h-9a2 2 0 1 1 0-4zm5 10h4a2 2 0 1 1 0 4h-4a2 2 0 1 1 0-4zM19 12h19a2 2 0 1 1 0 4H19a2 2 0 1 1 0-4zm-8 10h11a2 2 0 1 1 0 4H11a2 2 0 1 1 0-4zm0 10h16a2 2 0 1 1 0 4H11a2 2 0 1 1 0-4z'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/list-expense.js

Icon["a" /* default */].register({
  'list-expense': {
    paths: [{
      d: 'M24 48a24 24 0 1 1 0-48 24 24 0 0 1 0 48zm0-4a20 20 0 1 0 0-40 20 20 0 0 0 0 40zm1.41-29.9l8.49 8.49a2 2 0 0 1 0 2.82l-8.5 8.49a2 2 0 0 1-2.82 0l-8.48-8.5a2 2 0 0 1 0-2.82l8.49-8.49a2 2 0 0 1 2.82 0zM18.34 24L24 29.66 29.66 24 24 18.34 18.34 24z'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/list-frozen.js

Icon["a" /* default */].register({
  'list-frozen': {
    paths: [{
      d: 'M15.83 24.31l8.48 8.49 8.49-8.49-8.49-8.48-8.48 8.48zM36.14 22H46a2 2 0 1 1 0 4h-9.23L26 36.77V46a2 2 0 1 1-4 0v-9.86L11.86 26H2a2 2 0 1 1 0-4h10a2 2 0 0 1 .44.05l9.6-9.61A2 2 0 0 1 22 12V2a2 2 0 1 1 4 0v9.86L36.14 22zM9 15A6 6 0 1 1 9 3a6 6 0 0 1 0 12zm0-4a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm30 4a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-4a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM9 45a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-4a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm30 4a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-4a2 2 0 1 0 0-4 2 2 0 0 0 0 4z'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/list-log.js

Icon["a" /* default */].register({
  'list-log': {
    paths: [{
      d: 'M6 0h35a7 7 0 0 1 4.92 11.98 2 2 0 1 1-2.81-2.85A3 3 0 0 0 41 4h-1.35c.22.63.34 1.3.34 2v36a6 6 0 0 1-6 6H6a6 6 0 0 1-6-6V6a6 6 0 0 1 6-6zm0 4a2 2 0 0 0-2 2v36c0 1.1.9 2 2 2h28a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H6zm8 12a2 2 0 1 1 0-4h12a2 2 0 1 1 0 4H14zm0 10a2 2 0 1 1 0-4h12a2 2 0 1 1 0 4H14zm0 10a2 2 0 1 1 0-4h12a2 2 0 1 1 0 4H14z'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/list-vip.js

Icon["a" /* default */].register({
  'list-vip': {
    paths: [{
      d: 'M23.82 32.1l8.7-18.93a2 2 0 0 1 3.63 1.66l-10.33 22.5a2 2 0 0 1-2.07 1.15 2 2 0 0 1-2.1-1.2l-9.5-22.5a2 2 0 1 1 3.7-1.56l7.97 18.89zM33.47 4a2 2 0 1 1 0-4H42a6 6 0 0 1 6 6v36a6 6 0 0 1-6 6H6a6 6 0 0 1-6-6V6a6 6 0 0 1 6-6h7.75a2 2 0 1 1 0 4H6a2 2 0 0 0-2 2v36c0 1.1.9 2 2 2h36a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-8.53z'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/live.js

Icon["a" /* default */].register({
  live: {
    paths: [{
      d: 'M24 48a20 20 0 1 1 0-40 20 20 0 0 1 0 40zm0-4a16 16 0 1 0 0-32 16 16 0 0 0 0 32zm2-40v1a2 2 0 1 1-4 0V4h-6a2 2 0 1 1 0-4h16a2 2 0 1 1 0 4h-6zm-7.59 16.59l5.6 5.58 4.58-4.58a2 2 0 1 1 2.83 2.83l-6 6a2 2 0 0 1-2.83 0l-7-7a2 2 0 1 1 2.82-2.83z'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/location-arrow.js

Icon["a" /* default */].register({
  'location-arrow': {
    paths: [{
      class: 'fillColor',
      stroke: 'currentColor',
      'stroke-width': '4',
      d: 'M24 2L7 46l17-10 17 10z',
      fill: 'none',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/lock.js

Icon["a" /* default */].register({
  lock: {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><rect class="fillColor" stroke="currentColor" stroke-width="4" x="2" y="22" width="44" height="24" rx="4"/><circle class="innerStrokeColor" stroke="currentColor" stroke-width="4" cx="24" cy="32" r="2"/><path d="M37 22v-7a13 13 0 0 0-26 0v7" stroke="currentColor" stroke-width="4"/><path class="innerStrokeColor" d="M24 38v-4" stroke="currentColor" stroke-width="4"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/long-arrow-down.js

Icon["a" /* default */].register({
  'long-arrow-down': {
    paths: [{
      d: 'M38 32L24 46 10 32h0M24 2v43',
      fill: 'none',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      stroke: 'currentColor',
      'stroke-width': '4'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/long-arrow-left.js

Icon["a" /* default */].register({
  'long-arrow-left': {
    paths: [{
      d: 'M46 24H3m13 14L2 24l14-14h0',
      fill: 'none',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      stroke: 'currentColor',
      'stroke-width': '4'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/long-arrow-right.js

Icon["a" /* default */].register({
  'long-arrow-right': {
    paths: [{
      d: 'M45 24H2m30-14l14 14-14 14h0',
      fill: 'none',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      stroke: 'currentColor',
      'stroke-width': '4'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/long-arrow-up.js

Icon["a" /* default */].register({
  'long-arrow-up': {
    paths: [{
      d: 'M10 16L24 2l14 14M24 3v43',
      fill: 'none',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      stroke: 'currentColor',
      'stroke-width': '4'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/magic.js

Icon["a" /* default */].register({
  magic: {
    paths: [{
      d: 'M33 2v6m9.9-1.9l-4.24 4.24M47 16h-6m1.9 9.9l-4.24-4.24M33 30v-6m-9.9 1.9l4.24-4.24M19 16h6m-1.9-9.9l4.24 4.24M33 16L2 47',
      fill: 'none',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      stroke: 'currentColor',
      'stroke-width': '4'
    }],
    width: '49',
    height: '49'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/manage-ad.js

Icon["a" /* default */].register({
  'manage-ad': {
    paths: [{
      d: 'M33 4a2 2 0 0 0-2 2v36c0 1.1.9 2 2 2h9a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-9zm0-4h9a6 6 0 0 1 6 6v36a6 6 0 0 1-6 6h-9a6 6 0 0 1-6-6V6a6 6 0 0 1 6-6zM6 0h11a6 6 0 0 1 6 6v17a6 6 0 0 1-6 6H6a6 6 0 0 1-6-6V6a6 6 0 0 1 6-6zm0 4a2 2 0 0 0-2 2v17c0 1.1.9 2 2 2h11a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H6zm0 29h11a6 6 0 0 1 6 6v3a6 6 0 0 1-6 6H6a6 6 0 0 1-6-6v-3a6 6 0 0 1 6-6zm0 4a2 2 0 0 0-2 2v3c0 1.1.9 2 2 2h11a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H6z'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/manage-advertising.js

Icon["a" /* default */].register({
  'manage-advertising': {
    paths: [{
      d: 'M26.6 24.06a6.6 6.6 0 0 1 4.7 6.26 6.6 6.6 0 0 1-4.7 6.25v4.36c0 1.11-.93 2.02-2.08 2.02s-2.09-.9-2.09-2.02v-4.36a6.6 6.6 0 0 1-4.7-6.25 6.6 6.6 0 0 1 4.7-6.26v-7.39c0-1.11.94-2.02 2.1-2.02 1.14 0 2.08.9 2.08 2.02v7.4zM43.3 7.9a6.6 6.6 0 0 1 4.7 6.25 6.6 6.6 0 0 1-4.7 6.25v25.58c0 1.12-.93 2.02-2.08 2.02-1.16 0-2.09-.9-2.09-2.02V20.4a6.6 6.6 0 0 1-4.7-6.25 6.6 6.6 0 0 1 4.7-6.25V2.02C39.13.9 40.06 0 41.22 0c1.15 0 2.08.9 2.08 2.02V7.9zM8.87 20.4v25.58c0 1.12-.93 2.02-2.09 2.02-1.15 0-2.08-.9-2.08-2.02V20.4A6.6 6.6 0 0 1 0 14.15 6.6 6.6 0 0 1 4.7 7.9V2.02C4.7.9 5.63 0 6.78 0c1.16 0 2.09.9 2.09 2.02V7.9a6.6 6.6 0 0 1 4.7 6.25 6.6 6.6 0 0 1-4.7 6.25zm-2.09-3.73a2.57 2.57 0 0 0 2.61-2.52c0-1.4-1.17-2.53-2.6-2.53a2.57 2.57 0 0 0-2.62 2.53c0 1.4 1.17 2.52 2.61 2.52zm34.44 0c1.44 0 2.6-1.13 2.6-2.52 0-1.4-1.16-2.53-2.6-2.53a2.57 2.57 0 0 0-2.61 2.53c0 1.4 1.17 2.52 2.6 2.52zm-16.7 16.17a2.57 2.57 0 0 0 2.61-2.52c0-1.4-1.17-2.53-2.6-2.53a2.57 2.57 0 0 0-2.62 2.53c0 1.4 1.17 2.52 2.61 2.52z'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/manage-channel.js

Icon["a" /* default */].register({
  'manage-channel': {
    paths: [{
      d: 'M44 36V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v36c0 1.1.9 2 2 2h30a2 2 0 1 1 0 4H6a6 6 0 0 1-6-6V6a6 6 0 0 1 6-6h36a6 6 0 0 1 6 6v30a2 2 0 1 1-4 0zM11 16a2 2 0 1 1 0-4h26a2 2 0 1 1 0 4H11zm0 10a2 2 0 1 1 0-4h26a2 2 0 1 1 0 4H11zm0 10a2 2 0 1 1 0-4h14a2 2 0 1 1 0 4H11z'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/manage-info.js

Icon["a" /* default */].register({
  'manage-info': {
    paths: [{
      d: 'M12.97 0a2 2 0 1 1 0 4H6a2 2 0 0 0-2 2v36c0 1.1.9 2 2 2h36a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-7.03a2 2 0 1 1 0-4H42a6 6 0 0 1 6 6v36a6 6 0 0 1-6 6H6a6 6 0 0 1-6-6V6a6 6 0 0 1 6-6h6.97zM22 13a2 2 0 1 1 4 0v20a2 2 0 1 1-4 0V13zm2-9a2 2 0 1 1 0-4 2 2 0 0 1 0 4z'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/manage-keyword.js

Icon["a" /* default */].register({
  'manage-keyword': {
    paths: [{
      d: 'M44 31.72a2 2 0 1 1 4 0V42a6 6 0 0 1-6 6H6a6 6 0 0 1-6-6V6a6 6 0 0 1 6-6h11.72a2 2 0 1 1 0 4H6a2 2 0 0 0-2 2v36c0 1.1.9 2 2 2h36a2 2 0 0 0 2-2V31.72zM11.57 16a2 2 0 1 1 0-4h6.3a2 2 0 1 1 0 4h-6.3zm0 11a2 2 0 1 1 0-4h6.3a2 2 0 1 1 0 4h-6.3zm.17 10a2 2 0 1 1 0-4H37a2 2 0 1 1 0 4H11.74zm18.08-12.22a3 3 0 0 1-4.01-2.91l.16-5.47-3.34-4.32a3 3 0 0 1 1.53-4.72l5.25-1.53 3.08-4.52a3 3 0 0 1 4.96 0l3.08 4.52 5.25 1.53a3 3 0 0 1 1.53 4.72l-3.35 4.32.17 5.47a3 3 0 0 1-4.01 2.91l-5.15-1.84-5.15 1.84zm5.15-6.09l5.11 1.83-.16-5.43 3.33-4.3-5.22-1.52-3.06-4.5-3.07 4.5-5.21 1.52 3.32 4.3-.16 5.43 5.12-1.83z'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/manage-list.js

Icon["a" /* default */].register({
  'manage-list': {
    paths: [{
      d: 'M30.11 13.42a8 8 0 1 1 11.48.3A12.8 12.8 0 0 1 48 24.87a2 2 0 1 1-4 0c0-4.85-3.78-8.75-8.42-8.75-4.64 0-8.42 3.9-8.42 8.75a2 2 0 1 1-4 0c0-5.02 2.83-9.38 6.95-11.45zM44 31.72a2 2 0 1 1 4 0V42a6 6 0 0 1-6 6H6a6 6 0 0 1-6-6V6a6 6 0 0 1 6-6h11.72a2 2 0 1 1 0 4H6a2 2 0 0 0-2 2v36c0 1.1.9 2 2 2h36a2 2 0 0 0 2-2V31.72zM11.57 16a2 2 0 1 1 0-4h6.3a2 2 0 1 1 0 4h-6.3zm0 11a2 2 0 1 1 0-4h6.3a2 2 0 1 1 0 4h-6.3zm.17 10a2 2 0 1 1 0-4H37a2 2 0 1 1 0 4H11.74zM36 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8z'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/manage-order.js

Icon["a" /* default */].register({
  'manage-order': {
    paths: [{
      d: 'M6 0h9a6 6 0 0 1 6 6v9a6 6 0 0 1-6 6H6a6 6 0 0 1-6-6V6a6 6 0 0 1 6-6zm0 4a2 2 0 0 0-2 2v9c0 1.1.9 2 2 2h9a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H6zm27 23h9a6 6 0 0 1 6 6v9a6 6 0 0 1-6 6h-9a6 6 0 0 1-6-6v-9a6 6 0 0 1 6-6zm0 4a2 2 0 0 0-2 2v9c0 1.1.9 2 2 2h9a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2h-9zM6 27h9a6 6 0 0 1 6 6v9a6 6 0 0 1-6 6H6a6 6 0 0 1-6-6v-9a6 6 0 0 1 6-6zm0 4a2 2 0 0 0-2 2v9c0 1.1.9 2 2 2h9a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2H6zm31.5-10a10.5 10.5 0 1 1 0-21 10.5 10.5 0 0 1 0 21zm0-4a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13z'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/manage-pic.js

Icon["a" /* default */].register({
  'manage-pic': {
    paths: [{
      d: 'M44 21.86a2 2 0 1 1 4 0V42a6 6 0 0 1-6 6H6a6 6 0 0 1-6-6V21.86a2 2 0 1 1 4 0V42c0 1.1.9 2 2 2h36a2 2 0 0 0 2-2V21.86zM6 0h36a6 6 0 0 1 6 6v3a6 6 0 0 1-6 6H6a6 6 0 0 1-6-6V6a6 6 0 0 1 6-6zm0 4a2 2 0 0 0-2 2v3c0 1.1.9 2 2 2h36a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H6zm10 26a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-4a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM9.84 40.09a2 2 0 0 1 .32-3.99c6.19.51 10.67-1.4 13.73-5.78C27.74 24.84 32.48 22 38 22a2 2 0 1 1 0 4c-4.12 0-7.7 2.14-10.83 6.62-3.91 5.58-9.78 8.09-17.33 7.47z'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/manage-resource.js

Icon["a" /* default */].register({
  'manage-resource': {
    paths: [{
      d: 'M2 18a2 2 0 1 1 0-4h18a2 2 0 1 1 0 4H2zm0 14a2 2 0 1 1 0-4h44a2 2 0 1 1 0 4H2zm0 14a2 2 0 1 1 0-4h44a2 2 0 1 1 0 4H2zM2 4a2 2 0 1 1 0-4h18a2 2 0 1 1 0 4H2zm32-4h8a6 6 0 0 1 6 6v8a6 6 0 0 1-6 6h-8a6 6 0 0 1-6-6V6a6 6 0 0 1 6-6zm0 4a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-8z'
    }],
    width: '48',
    height: '46'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/manage-video.js

Icon["a" /* default */].register({
  'manage-video': {
    paths: [{
      d: 'M44 21.86a2 2 0 1 1 4 0V42a6 6 0 0 1-6 6H6a6 6 0 0 1-6-6V21.86a2 2 0 1 1 4 0V42c0 1.1.9 2 2 2h36a2 2 0 0 0 2-2V21.86zM6 0h36a6 6 0 0 1 6 6v3a6 6 0 0 1-6 6H6a6 6 0 0 1-6-6V6a6 6 0 0 1 6-6zm0 4a2 2 0 0 0-2 2v3c0 1.1.9 2 2 2h36a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H6zm14.34 34.45A3 3 0 0 1 16 35.76V23a3 3 0 0 1 4.34-2.68l12.77 6.38a3 3 0 0 1 0 5.37l-12.77 6.38zm9.48-8.95L20 25v9l9.82-4.5z'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/map-distance.js

Icon["a" /* default */].register({
  'map-distance': {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path class="fillColor" stroke="currentColor" stroke-width="4" d="M2 2h44v44H2z"/><path class="innerStrokeColor" d="M12 38l24-10" stroke="currentColor" stroke-width="4" stroke-dasharray="2,6"/><path class="innerStrokeColor" d="M36 22c2.67-3.86 4-6.53 4-8a4 4 0 1 0-8 0c0 1.47 1.33 4.14 4 8zm-24 9c2.67-3.86 4-6.53 4-8a4 4 0 1 0-8 0c0 1.47 1.33 4.14 4 8z" stroke="currentColor" stroke-width="4"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/map-marker-alt.js

Icon["a" /* default */].register({
  'map-marker-alt': {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path class="fillColor" d="M24 46c12-8.04 18-16.7 18-26a18 18 0 1 0-36 0c0 9.3 6 17.96 18 26z" stroke="currentColor" stroke-width="4"/><circle class="innerStrokeColor" stroke="currentColor" stroke-width="4" cx="24" cy="20" r="7"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/map-pin.js

Icon["a" /* default */].register({
  'map-pin': {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><circle class="fillColor" stroke="currentColor" stroke-width="4" cx="24" cy="12" r="10"/><path d="M24 22v16m-8-4h-6L2 46h44l-8-12h-6" stroke="currentColor" stroke-width="4"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/map-road.js

Icon["a" /* default */].register({
  'map-road': {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path class="fillColor" stroke="currentColor" stroke-width="4" d="M2 2h44v44H2z"/><path class="innerStrokeColor" d="M8 22l32-10" stroke="currentColor" stroke-width="4"/><path class="innerStrokeColor" d="M8 29l32-10" stroke="currentColor" stroke-width="4" stroke-dasharray="2,6"/><path class="innerStrokeColor" d="M8 36l32-10m-24-7L13 9m24 29l-3-10" stroke="currentColor" stroke-width="4"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/map-signs.js

Icon["a" /* default */].register({
  'map-signs': {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M24 2v44" stroke="currentColor" stroke-width="4"/><path class="fillColor" stroke="currentColor" stroke-width="4" d="M24 6h19l3 4-3 4H24zm0 12H5l-3 4 3 4h19z"/><path d="M17 46h14" stroke="currentColor" stroke-width="4"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/map.js

Icon["a" /* default */].register({
  map: {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path class="fillColor" stroke="currentColor" stroke-width="4" d="M2 12l14-8 14 8 16-8v32l-16 8-14-8-14 8z"/><path class="innerFillColor" stroke="currentColor" stroke-width="4" d="M16 4v32l14 8V12z"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/mars.js

Icon["a" /* default */].register({
  mars: {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><circle class="fillColor" stroke="currentColor" stroke-width="4" cx="20" cy="28" r="15"/><path d="M31 17L44 4M32 4h12v12" stroke="currentColor" stroke-width="4"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/medal.js

Icon["a" /* default */].register({
  medal: {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><circle class="fillColor" stroke="currentColor" stroke-width="4" cx="24" cy="30" r="16"/><path d="M13 18L8.81 4.6A2 2 0 0 1 10.72 2h26.56a2 2 0 0 1 1.9 2.6L35 18" stroke="currentColor" stroke-width="4"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/microchip.js

Icon["a" /* default */].register({
  microchip: {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path class="fillColor" stroke="currentColor" stroke-width="4" d="M8 8h32v32H8z"/><path class="innerFillColor innerStrokeColor" stroke="currentColor" stroke-width="4" d="M18 18h12v12H18z"/><path d="M14 2v6m0 32v6M24 2v6m0 32v6M34 2v6m0 32v6M2 14h6m32 0h6M2 24h6m32 0h6M2 34h6m32 0h6" stroke="currentColor" stroke-width="4"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/microphone.js

Icon["a" /* default */].register({
  microphone: {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path class="fillColor" d="M30.93 24a7 7 0 0 1-13.86 0H17V9a7 7 0 0 1 14 0v15h-.07z" stroke="currentColor" stroke-width="4"/><path d="M9 23a15 15 0 0 0 30 0M24 38v8" stroke="currentColor" stroke-width="4"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/minus-circle.js

Icon["a" /* default */].register({
  'minus-circle': {
    raw: '<g fill="none" fill-rule="evenodd"><circle class="fillColor" stroke="currentColor" stroke-width="4" cx="24" cy="24" r="22"/><path class="innerStrokeColor" d="M14 24h20" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></g>',
    width: '48',
    height: '48'
  }
});
// EXTERNAL MODULE: ./node_modules/veui-theme-one-icons/minus.js
var minus = __webpack_require__(231);

// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/money-bill.js

Icon["a" /* default */].register({
  'money-bill': {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path class="fillColor" stroke="currentColor" stroke-width="4" d="M2 13h44v24H2z"/><path class="innerFillColor" d="M2 21a8 8 0 0 0 8-8H2v8zm0 8a8 8 0 0 1 8 8H2v-8zm44 0v8h-8a8 8 0 0 1 8-8zm0-8a8 8 0 0 1-8-8h8v8z" stroke="currentColor" stroke-width="4"/><circle class="innerFillColor innerStrokeColor" stroke="currentColor" stroke-width="4" cx="24" cy="25" r="5"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/monitor-heart-rate.js

Icon["a" /* default */].register({
  'monitor-heart-rate': {
    raw: '<g fill="none" fill-rule="evenodd"><path class="fillColor" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" d="M2 10h44v36H2z"/><path class="innerStrokeColor" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" d="M10 29h5l5 9 7-21 3 12h8"/><path d="M12 2h24" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/monitor.js

Icon["a" /* default */].register({
  monitor: {
    paths: [{
      class: 'fillColor',
      stroke: 'currentColor',
      'stroke-width': '4',
      d: 'M2 13h32v24H2zm32 8l12-8v24l-12-8z',
      fill: 'none',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/moon.js

Icon["a" /* default */].register({
  moon: {
    paths: [{
      class: 'fillColor',
      d: 'M28.46 2.45a14 14 0 1 0 17.09 17.1 22 22 0 1 1-17.09-17.1z',
      stroke: 'currentColor',
      'stroke-width': '4',
      fill: 'none',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/more-weixin.js

Icon["a" /* default */].register({
  'more-weixin': {
    paths: [{
      class: 'noStroke fillColor',
      d: 'M10 27a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm14 2a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm14-2a3 3 0 1 1 0-6 3 3 0 0 1 0 6z',
      'fill-rule': 'evenodd'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/music.js

Icon["a" /* default */].register({
  music: {
    raw: '<g stroke="currentColor" stroke-width="4" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path class="fillColor" d="M6 38h8v4a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4h0a4 4 0 0 1 4-4zm28-8h8v4a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4h0a4 4 0 0 1 4-4z"/><path d="M14 18l28-8M14 38V10l28-8v28"/></g>',
    width: '44',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/note.js

Icon["a" /* default */].register({
  note: {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path class="fillColor" stroke="currentColor" stroke-width="4" d="M6 2h36v44H6z"/><path class="innerStrokeColor" d="M34 46V2" stroke="currentColor" stroke-width="4"/><path d="M2 12h8m-8 8h8m-8 8h8m-8 8h8" stroke="currentColor" stroke-width="4"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/notebook.js

Icon["a" /* default */].register({
  notebook: {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path class="fillColor" stroke="currentColor" stroke-width="4" d="M6 2h36v44H6z"/><path class="innerStrokeColor" d="M14 12h20m-20 8h20m-20 8h20m-20 8h12" stroke="currentColor" stroke-width="4"/><path d="M2 12h4m-4 8h4m-4 8h4m-4 8h2" stroke="currentColor" stroke-width="4"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/number-list.js

Icon["a" /* default */].register({
  'number-list': {
    paths: [{
      d: 'M16 7h30M16 24h30M16 41h30M5 2v10m-3 7h6v5H2v5h6m-6 7h6v10H2m0-5h6',
      fill: 'none',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      stroke: 'currentColor',
      'stroke-width': '4'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/object-group.js

Icon["a" /* default */].register({
  'object-group': {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path class="fillColor" stroke="currentColor" stroke-width="4" d="M2 2h8v8H2zm0 36h8v8H2zM38 2h8v8h-8zm0 36h8v8h-8z"/><path d="M10 6h28M10 42h28M6 10v28m36-28v28M14 14h12v8h8v12H22v-8h-8z" stroke="currentColor" stroke-width="4"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/object-ungroup.js

Icon["a" /* default */].register({
  'object-ungroup': {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path class="fillColor" stroke="currentColor" stroke-width="4" d="M2 2h8v8H2zm36 36h8v8h-8zM2 24h8v8H2zm14 14h8v8h-8zm8-36h8v8h-8zm14 14h8v8h-8z"/><path d="M10 6h14m0 36h14M10 28h18V10" stroke="currentColor" stroke-width="4"/><path stroke="currentColor" stroke-width="4" d="M20 38V20h18M6 10v14m36 0v14"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/order-sub.js

Icon["a" /* default */].register({
  'order-sub': {
    paths: [{
      d: 'M0 6a2 2 0 1 1 4 0v36c0 1.1.9 2 2 2h21a2 2 0 1 1 0 4H6a6 6 0 0 1-6-6V6zm44 0a2 2 0 1 1 4 0v21a2 2 0 1 1-4 0V6zM12 4a2 2 0 1 1 0-4h24a2 2 0 1 1 0 4H12zm6 13a2 2 0 1 1 0-4h12a2 2 0 1 1 0 4H18zm0 10a2 2 0 1 1 0-4h12a2 2 0 1 1 0 4H18zm0 10a2 2 0 1 1 0-4h7a2 2 0 1 1 0 4h-7zm21 11a9 9 0 1 1 0-18 9 9 0 0 1 0 18zm0-4a5 5 0 1 0 0-10 5 5 0 0 0 0 10z'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/order-todown.js

Icon["a" /* default */].register({
  'order-todown': {
    paths: [{
      d: 'M41.99 40.59V31a2 2 0 1 0-4 0v9.63l-2.48-2.85a2 2 0 1 0-3.02 2.63l5.96 6.86a2 2 0 0 0 3.16-.1l5.81-6.77a2 2 0 1 0-3.03-2.6l-2.4 2.79zM0 6a2 2 0 1 1 4 0v36c0 1.1.9 2 2 2h21a2 2 0 1 1 0 4H6a6 6 0 0 1-6-6V6zm44 0a2 2 0 1 1 4 0v21a2 2 0 1 1-4 0V6zM12 4a2 2 0 1 1 0-4h24a2 2 0 1 1 0 4H12zm6 13a2 2 0 1 1 0-4h12a2 2 0 1 1 0 4H18zm0 10a2 2 0 1 1 0-4h12a2 2 0 1 1 0 4H18zm0 10a2 2 0 1 1 0-4h7a2 2 0 1 1 0 4h-7z'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/order.js

Icon["a" /* default */].register({
  order: {
    paths: [{
      d: 'M0 6a2 2 0 1 1 4 0v36c0 1.1.9 2 2 2h36a2 2 0 0 0 2-2V6a2 2 0 1 1 4 0v36a6 6 0 0 1-6 6H6a6 6 0 0 1-6-6V6zm12-2a2 2 0 1 1 0-4h24a2 2 0 1 1 0 4H12zm6 13a2 2 0 1 1 0-4h12a2 2 0 1 1 0 4H18zm0 10a2 2 0 1 1 0-4h12a2 2 0 1 1 0 4H18zm0 10a2 2 0 1 1 0-4h12a2 2 0 1 1 0 4H18z'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/orienteering.js

Icon["a" /* default */].register({
  orienteering: {
    paths: [{
      d: 'M45.8 27A22 22 0 0 1 26 45.91V46a2 2 0 1 1-4 0v-.09A22 22 0 0 1 2.2 27H2a2 2 0 1 1 0-4h.02A22 22 0 0 1 22 2.09V2a2 2 0 1 1 4 0v.09A22 22 0 0 1 45.98 23H46a2 2 0 1 1 0 4h-.2zm-4.05 0H34.6c-1.13 4-4.46 7.06-8.59 7.82v7.07A18 18 0 0 0 41.76 27zm.22-4A18 18 0 0 0 26 6.11v7.07A11 11 0 0 1 34.96 23h7.01zM6.25 27A18 18 0 0 0 22 41.89v-7.07A11.02 11.02 0 0 1 13.41 27H6.25zm-.22-4h7.01A11 11 0 0 1 22 13.18V6.11A18 18 0 0 0 6.03 23zM24 31a7 7 0 1 0 0-14 7 7 0 0 0 0 14z'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/outdoor.js

Icon["a" /* default */].register({
  outdoor: {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path class="fillColor" stroke="currentColor" stroke-width="4" d="M3 46l15-34 11 24 6-12 12 22z"/><circle class="fillColor" stroke="currentColor" stroke-width="4" cx="36" cy="7" r="5"/></g>',
    width: '50',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/pad.js

Icon["a" /* default */].register({
  pad: {
    raw: '<g transform="translate(0 -5)" fill="none" fill-rule="evenodd"><path class="fillColor" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" d="M2 7h44v34H2z"/><rect class="innerFillColor" x="10" y="13" width="4" height="4" rx="1"/><rect class="innerFillColor" x="10" y="20" width="4" height="4" rx="1"/><rect class="noStroke innerFillColor" x="10" y="31" width="4" height="4" rx="1"/><rect class="noStroke innerFillColor" x="18" y="13" width="4" height="4" rx="1"/><rect class="noStroke innerFillColor" x="18" y="20" width="4" height="4" rx="1"/><rect class="noStroke innerFillColor" x="18" y="31" width="4" height="4" rx="1"/><rect class="noStroke innerFillColor" x="26" y="13" width="4" height="4" rx="1"/><rect class="noStroke innerFillColor" x="34" y="13" width="4" height="4" rx="1"/><rect class="noStroke innerFillColor" x="26" y="20" width="4" height="4" rx="1"/><rect class="noStroke innerFillColor" x="34" y="20" width="4" height="4" rx="1"/><rect class="noStroke innerFillColor" x="26" y="31" width="4" height="4" rx="1"/></g>',
    width: '48',
    height: '38'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/paper-plane.js

Icon["a" /* default */].register({
  'paper-plane': {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path class="fillColor" stroke="currentColor" stroke-width="4" d="M47 6L2 21l14.01 7.9L16 37l8.17-3.5L41 43z"/><path class="innerStrokeColor" d="M25 26l12-10" stroke="currentColor" stroke-width="4"/></g>',
    width: '49',
    height: '48'
  }
});
// EXTERNAL MODULE: ./node_modules/veui-theme-one-icons/paperclip.js
var paperclip = __webpack_require__(243);

// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/parachute.js

Icon["a" /* default */].register({
  parachute: {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path class="fillColor" d="M16 24c2.67-2.67 5.33-4 8-4s5.33 1.33 8 4c3.11-2.67 5.44-4 7-4 1.56 0 3.89 1.33 7 4a22 22 0 1 0-44 0c3.11-2.67 5.44-4 7-4 1.56 0 3.89 1.33 7 4z" stroke="currentColor" stroke-width="4"/><path stroke="currentColor" stroke-width="4" d="M2 24l22 22-8-22m16 0l-8 22 22-22"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/pause-circle.js

Icon["a" /* default */].register({
  'pause-circle': {
    raw: '<g fill="none" fill-rule="evenodd"><circle class="fillColor" stroke="currentColor" stroke-width="4" cx="24" cy="24" r="22"/><path class="innerStrokeColor" d="M19 18v12m10-12v12" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/pause-square.js

Icon["a" /* default */].register({
  'pause-square': {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><rect class="fillColor" stroke="currentColor" stroke-width="4" x="2" y="2" width="44" height="44" rx="4"/><path class="innerStrokeColor" d="M19 18v12m10-12v12" stroke="currentColor" stroke-width="4"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/people-more.js

Icon["a" /* default */].register({
  'people-more': {
    paths: [{
      class: 'noStroke fillColor',
      d: 'M29 29v17a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2V29a2 2 0 0 0-2-2 2 2 0 0 1-2-2V12c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2 2 2 0 0 0-2 2zM24 0a3 3 0 0 1 3 3v2a3 3 0 0 1-6 0V3a3 3 0 0 1 3-3zm19 31v15a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2V31c0-1.1.9-2 2-2a2 2 0 0 0 2-2V12c0-1.1.9-2 2-2h6a2 2 0 0 1 2 2v15a2 2 0 0 1-2 2 2 2 0 0 0-2 2zM38 0a3 3 0 0 1 3 3v2a3 3 0 0 1-6 0V3a3 3 0 0 1 3-3zM5 31a2 2 0 0 0-2-2 2 2 0 0 1-2-2V12c0-1.1.9-2 2-2h6a2 2 0 0 1 2 2v15c0 1.1.9 2 2 2a2 2 0 0 1 2 2v15a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V31zm5-31a3 3 0 0 1 3 3v2a3 3 0 0 1-6 0V3a3 3 0 0 1 3-3z'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/people-three.js

Icon["a" /* default */].register({
  'people-three': {
    paths: [{
      class: 'noStroke fillColor',
      d: 'M14 29v17a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V29a2 2 0 0 0-2-2 2 2 0 0 1-2-2V12c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2 2 2 0 0 0-2 2zM9 0a3 3 0 0 1 3 3v2a3 3 0 0 1-6 0V3a3 3 0 0 1 3-3zm35 29v17a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2V29a2 2 0 0 0-2-2 2 2 0 0 1-2-2V14c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2 2 2 0 0 0-2 2zM39 2a3 3 0 0 1 3 3v2a3 3 0 0 1-6 0V5a3 3 0 0 1 3-3zM28 40.5V46a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-5.5c0-.83-.67-1.5-1.5-1.5a1.5 1.5 0 0 1-1.5-1.5V31c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v6.5c0 .83-.67 1.5-1.5 1.5s-1.5.67-1.5 1.5zM24 19a3 3 0 0 1 3 3v2a3 3 0 0 1-6 0v-2a3 3 0 0 1 3-3z'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/people-two.js

Icon["a" /* default */].register({
  'people-two': {
    paths: [{
      class: 'noStroke fillColor',
      d: 'M18 29v17a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2V29a2 2 0 0 0-2-2 2 2 0 0 1-2-2V12c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2 2 2 0 0 0-2 2zM13 0a3 3 0 0 1 3 3v2a3 3 0 0 1-6 0V3a3 3 0 0 1 3-3zm27 31v15a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2V31a2 2 0 0 0-2-2 2 2 0 0 1-2-2V14c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2 2 2 0 0 0-2 2zM35 2a3 3 0 0 1 3 3v2a3 3 0 0 1-6 0V5a3 3 0 0 1 3-3z'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/people.js

Icon["a" /* default */].register({
  people: {
    paths: [{
      class: 'noStroke fillColor',
      d: 'M29 29v17a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2V29a2 2 0 0 0-2-2 2 2 0 0 1-2-2V12c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2 2 2 0 0 0-2 2zM24 0a3 3 0 0 1 3 3v2a3 3 0 0 1-6 0V3a3 3 0 0 1 3-3z'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/phone.js

Icon["a" /* default */].register({
  phone: {
    raw: '<g transform="translate(-5)" fill="none" fill-rule="evenodd"><path class="fillColor" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" d="M7 2h34v44H7z"/><path class="innerFillColor" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" d="M7 40h34v6H7z"/><rect class="noStroke innerFillColor" x="13" y="8" width="6" height="6" rx="1"/><rect class="noStroke innerFillColor" x="13" y="16" width="6" height="6" rx="1"/><rect class="noStroke innerFillColor" x="13" y="24" width="6" height="6" rx="1"/><rect class="noStroke innerFillColor" x="21" y="8" width="6" height="6" rx="1"/><rect class="noStroke innerFillColor" x="21" y="16" width="6" height="6" rx="1"/><rect class="noStroke innerFillColor" x="21" y="24" width="6" height="6" rx="1"/><rect class="noStroke innerFillColor" x="29" y="8" width="6" height="6" rx="1"/><rect class="noStroke innerFillColor" x="29" y="16" width="6" height="6" rx="1"/></g>',
    width: '38',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/pic-show.js

Icon["a" /* default */].register({
  'pic-show': {
    paths: [{
      d: 'M36 19.1a2 2 0 0 1-.37-.27A10.01 10.01 0 0 0 28.72 16c-4.74 0-8.93 3.5-10.28 8.58-.11.43-.2.88-.28 1.33a2 2 0 0 1-3.13 1.32 2 2 0 0 1-.53-.4c-.94-.98-3.18-1.82-4.91-1.82C6.19 25.01 4 26.92 4 30v4c0 1.1.9 2 2 2h28a2 2 0 0 0 2-2V19.1zm0-5.01V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v16.51a10.5 10.5 0 0 1 5.59-1.5c1.75 0 3.71.5 5.36 1.32C17.08 16.22 22.5 12 28.72 12c2.6 0 5.1.74 7.28 2.09zm4-6.4h2.73A5.27 5.27 0 0 1 48 12.98v29.76A5.27 5.27 0 0 1 42.73 48H13.27A5.27 5.27 0 0 1 8 42.73V40H6a6 6 0 0 1-6-6V6a6 6 0 0 1 6-6h28a6 6 0 0 1 6 6v1.7zM12 40v2.73c0 .7.57 1.27 1.27 1.27h29.46c.7 0 1.27-.57 1.27-1.27V12.97c0-.7-.57-1.27-1.27-1.27H40V34a6 6 0 0 1-6 6H12zM11 8a3 3 0 1 1 0 6 3 3 0 0 1 0-6z'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/pic-suggest.js

Icon["a" /* default */].register({
  'pic-suggest': {
    paths: [{
      d: 'M44 15.16V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v22.73a11.36 11.36 0 0 1 13.36-1.01A18.36 18.36 0 0 1 44 15.16zm0 4.74a14.36 14.36 0 0 0-23 11.46 2 2 0 0 1-3.5 1.3 2 2 0 0 1-1.06-.56A6.73 6.73 0 0 0 11.4 30 7.4 7.4 0 0 0 4 37.4V42c0 1.1.9 2 2 2h15.7a2 2 0 1 1 0 4H6a6 6 0 0 1-6-6V6a6 6 0 0 1 6-6h36a6 6 0 0 1 6 6v17.12a2 2 0 1 1-4 0V19.9zM14 9a6 6 0 1 1 0 12 6 6 0 0 1 0-12zm0 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm13.44 21.8a2 2 0 0 1-2.88-2.8l6.19-6.4a2 2 0 0 1 3.43 1.4v18.36a2 2 0 1 1-4 0V31.95l-2.74 2.84zm17.1 2.77a2 2 0 1 1 2.88 2.78l-6.18 6.4a2 2 0 0 1-3.44-1.39V27a2 2 0 1 1 4 0v13.42l2.75-2.85z'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/pie-eight.js

Icon["a" /* default */].register({
  'pie-eight': {
    raw: '<g fill="none" fill-rule="evenodd"><path class="noStroke fillColor" d="M24 46a22 22 0 1 0 0-44v22L8.47 8.42A22 22 0 0 0 24 46z"/><circle stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" cx="24" cy="24" r="22"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/pie-five.js

Icon["a" /* default */].register({
  'pie-five': {
    raw: '<g fill="none" fill-rule="evenodd"><path class="noStroke fillColor" d="M24 46a22 22 0 1 0 0-44v44z"/><circle stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" cx="24" cy="24" r="22"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/pie-four.js

Icon["a" /* default */].register({
  'pie-four': {
    raw: '<g fill="none" fill-rule="evenodd"><path class="noStroke fillColor" d="M39.54 39.57A22 22 0 0 0 24 2v22l15.54 15.57z"/><circle stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" cx="24" cy="24" r="22"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/pie-one.js

Icon["a" /* default */].register({
  'pie-one': {
    raw: '<g fill="none" fill-rule="evenodd"><path class="noStroke fillColor" d="M33.14 3.98A21.92 21.92 0 0 0 24 2v22l9.14-20.02z"/><circle stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" cx="24" cy="24" r="22"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/pie-seven.js

Icon["a" /* default */].register({
  'pie-seven': {
    raw: '<g fill="none" fill-rule="evenodd"><path class="noStroke fillColor" d="M2 24A22 22 0 1 0 24 2v22H2z"/><circle stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" cx="24" cy="24" r="22"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/pie-six.js

Icon["a" /* default */].register({
  'pie-six': {
    raw: '<g fill="none" fill-rule="evenodd"><path class="noStroke fillColor" d="M24 46a22 22 0 1 0 0-44v22L8.58 39.7C12.55 43.6 18 46 24 46z"/><circle stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" cx="24" cy="24" r="22"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/pie-three.js

Icon["a" /* default */].register({
  'pie-three': {
    raw: '<g fill="none" fill-rule="evenodd"><path class="noStroke fillColor" d="M46 24A22 22 0 0 0 24 2v22h22z"/><circle stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" cx="24" cy="24" r="22"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/pie-two.js

Icon["a" /* default */].register({
  'pie-two': {
    raw: '<g fill="none" fill-rule="evenodd"><path class="noStroke fillColor" d="M39.3 8.2A21.93 21.93 0 0 0 24 2v22L39.3 8.2z"/><circle stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" cx="24" cy="24" r="22"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/play-circle.js

Icon["a" /* default */].register({
  'play-circle': {
    raw: '<g fill="none" fill-rule="evenodd"><circle class="fillColor" stroke="currentColor" stroke-width="4" cx="24" cy="24" r="22"/><path class="innerFillColor innerStrokeColor" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" d="M20 17l12 7-12 7z"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/plug.js

Icon["a" /* default */].register({
  plug: {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path class="fillColor" d="M24 39a17 17 0 0 0 17-17h3v-8H4v8h3a17 17 0 0 0 17 17z" stroke="currentColor" stroke-width="4"/><path stroke="currentColor" stroke-width="4" d="M12 2v12h24V2M24 39v7"/></g>',
    width: '48',
    height: '48'
  }
});
// EXTERNAL MODULE: ./node_modules/veui-theme-one-icons/plus-circle.js
var plus_circle = __webpack_require__(240);

// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/plus-cross.js

Icon["a" /* default */].register({
  'plus-cross': {
    paths: [{
      d: 'M17 17V2h14v15h15v14H31v15H17V31H2V17h15z',
      stroke: 'currentColor',
      'stroke-width': '4',
      fill: 'none',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round'
    }],
    width: '48',
    height: '48'
  }
});
// EXTERNAL MODULE: ./node_modules/veui-theme-one-icons/plus.js
var plus = __webpack_require__(183);

// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/poker.js

Icon["a" /* default */].register({
  poker: {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path class="fillColor" stroke="currentColor" stroke-width="4" d="M10 2h36v44H10z"/><path stroke="currentColor" stroke-width="4" d="M2 10l8-2v38z"/><path class="innerStrokeColor innerFillColor" stroke="currentColor" stroke-width="4" d="M28 18l-5 6 5 6 5-6z"/><path class="innerStrokeColor" d="M16 8v4m24 24v4" stroke="currentColor" stroke-width="4"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/pound.js

Icon["a" /* default */].register({
  pound: {
    paths: [{
      d: 'M6 14h40M2 34h40M16 2l-6 44M37 2l-6 44',
      fill: 'none',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      stroke: 'currentColor',
      'stroke-width': '4'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/power-off.js

Icon["a" /* default */].register({
  'power-off': {
    paths: [{
      d: 'M36.65 6a22 22 0 1 1-25.3 0M24 20V2',
      fill: 'none',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      stroke: 'currentColor',
      'stroke-width': '4'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/ppt.js

Icon["a" /* default */].register({
  ppt: {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M2 6h44" stroke="currentColor" stroke-width="4"/><path class="fillColor" stroke="currentColor" stroke-width="4" d="M6 6h36v30H6z"/><path class="innerStrokeColor" stroke="currentColor" stroke-width="4" d="M22 16l5 5-5 5"/><path stroke="currentColor" stroke-width="4" d="M16 44l8-8 8 8"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/print.js

Icon["a" /* default */].register({
  print: {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path class="fillColor" stroke="currentColor" stroke-width="4" d="M10 32h28v14H10z"/><path stroke="currentColor" stroke-width="4" d="M2 20h44v18h-8v-6H10v6H2z"/><path class="fillColor" stroke="currentColor" stroke-width="4" d="M10 2h28v18H10z"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/profile.js

Icon["a" /* default */].register({
  profile: {
    paths: [{
      d: 'M2 10a2 2 0 1 1 0-4h8a2 2 0 1 1 0 4H2zm24 0a2 2 0 1 1 0-4h20a2 2 0 1 1 0 4H26zM2 26a2 2 0 1 1 0-4h14a2 2 0 1 1 0 4H2zm30 0a2 2 0 1 1 0-4h14a2 2 0 1 1 0 4H32zM2 42a2 2 0 1 1 0-4h8a2 2 0 1 1 0 4H2zm24 0a2 2 0 1 1 0-4h20a2 2 0 1 1 0 4H26zm-8-32a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 16a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-6 16a2 2 0 1 1 0-4 2 2 0 0 1 0 4z'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/puzzle-piece.js

Icon["a" /* default */].register({
  'puzzle-piece': {
    paths: [{
      class: 'fillColor',
      d: 'M2 24V12h11V8a6 6 0 1 1 12 0v4h11v12h4a6 6 0 1 1 0 12h-4v10H2V36h4a6 6 0 1 0 0-12H2z',
      stroke: 'currentColor',
      'stroke-width': '4',
      fill: 'none',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/qq-f.js

Icon["a" /* default */].register({
  'qq-f': {
    paths: [{
      class: 'noStroke',
      d: 'M44.09 32.48c-.32-4.54-3.28-8.34-5-10.31.24-.57.82-3.89-1.41-6.15v-.16C37.68 6.95 31.51.53 23.77.5 16.02.53 9.85 6.95 9.85 15.86v.16c-2.23 2.26-1.65 5.58-1.41 6.15-1.71 1.97-4.68 5.77-5 10.3-.06 1.2.13 2.94.69 3.71.7.94 2.59-.19 3.94-3.2a19.4 19.4 0 0 0 3.22 6.23c-3.3.77-4.24 4.11-3.13 5.94.79 1.3 2.58 2.35 5.66 2.35 5.5 0 7.92-1.52 9-2.57.22-.24.54-.35.95-.35.4 0 .72.11.94.35 1.08 1.05 3.5 2.57 9 2.57 3.09 0 4.88-1.06 5.66-2.35 1.1-1.83.17-5.17-3.13-5.94a19.44 19.44 0 0 0 3.22-6.23c1.36 3.01 3.25 4.14 3.94 3.2.57-.77.75-2.51.69-3.7z'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/qq.js

Icon["a" /* default */].register({
  qq: {
    paths: [{
      class: 'noStroke',
      d: 'M36.81 22.44c.2-.49.7-3.3-1.2-5.23v-.14C35.6 9.5 30.36 4.02 23.77 4c-6.6.03-11.85 5.49-11.85 13.07v.14c-1.9 1.92-1.4 4.74-1.2 5.23-1.46 1.67-3.98 4.91-4.25 8.77-.05 1.02.1 2.5.58 3.16.6.8 2.2-.16 3.36-2.73.32 1.2 1.06 3 2.74 5.3-2.8.66-3.6 3.5-2.66 5.06.66 1.1 2.19 2 4.81 2 4.68 0 6.74-1.3 7.66-2.2.19-.19.46-.28.8-.28.35 0 .62.1.8.29.93.9 3 2.19 7.67 2.19 2.63 0 4.15-.9 4.81-2 .95-1.55.15-4.4-2.66-5.06a16.54 16.54 0 0 0 2.74-5.3c1.16 2.57 2.77 3.53 3.36 2.73.48-.66.63-2.14.58-3.16-.27-3.86-2.8-7.1-4.25-8.77zM15.31 48c-3.7 0-6.69-1.37-8.24-3.92a6.9 6.9 0 0 1-.7-5.54 4.6 4.6 0 0 1-2.54-1.81c-1.12-1.52-1.46-3.66-1.35-5.8.26-3.62 1.72-6.68 4-9.62a9.6 9.6 0 0 1 1.48-5.52C8.54 6.81 15.18.03 23.78 0c8.57.03 15.2 6.81 15.79 15.8a9.6 9.6 0 0 1 1.49 5.5c2.27 2.95 3.74 6.01 4 9.63v.2c.09 2.02-.26 4.1-1.36 5.6a4.6 4.6 0 0 1-2.55 1.81 6.9 6.9 0 0 1-.69 5.54C38.91 46.63 35.92 48 32.23 48c-3.6 0-6.38-.66-8.46-1.84C21.68 47.34 18.9 48 15.3 48z'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/qrcode.js

Icon["a" /* default */].register({
  qrcode: {
    raw: '<g class="fillColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke="currentColor" stroke-width="4"><rect x="2" y="2" width="12" height="16" rx="2"/><rect x="2" y="34" width="12" height="12" rx="2"/><rect x="30" y="2" width="16" height="16" rx="2"/><rect x="30" y="34" width="16" height="12" rx="2"/><path d="M2 26h44M22 2v16m0 16v12"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/question-circle.js

Icon["a" /* default */].register({
  'question-circle': {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><circle class="fillColor" stroke="currentColor" stroke-width="4" cx="24" cy="24" r="22"/><path class="innerStrokeColor" d="M24 31v-6a7 7 0 1 0-7-7m7 19v1" stroke="currentColor" stroke-width="4"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/question-square.js

Icon["a" /* default */].register({
  'question-square': {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><rect class="fillColor" stroke="currentColor" stroke-width="4" x="2" y="2" width="44" height="44" rx="4"/><path class="innerStrokeColor" d="M24 31v-6a7 7 0 1 0-7-7m7 19v1" stroke="currentColor" stroke-width="4"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/radar.js

Icon["a" /* default */].register({
  radar: {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke="currentColor" stroke-width="4"><path d="M24 21V2a22 22 0 1 0 17.01 8.05"/><circle cx="24" cy="24" r="3"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/radiation.js

Icon["a" /* default */].register({
  radiation: {
    raw: '<g fill="none" fill-rule="evenodd"><path class="fillColor" d="M13 3.06A22 22 0 0 0 2 22.1l.05-.03L16 22.1a8 8 0 0 1 4-6.92L13 3.06zM34.9 3l.06.08L28 15.18a7.96 7.96 0 0 1 4 6.94l13.96.02.05.08a21.9 21.9 0 0 0-2.95-11.1A21.9 21.9 0 0 0 34.9 3zM13 41.17a22 22 0 0 0 22 0l-7-12.13a8 8 0 0 1-7.99 0l-6.96 12.1-.05.03h0z" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><circle class="fillColor" cx="24" cy="22" r="3"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/radio-uncheck.js

Icon["a" /* default */].register({
  'radio-uncheck': {
    raw: '<circle class="fillColor" stroke="currentColor" stroke-width="4" cx="24" cy="24" r="22" fill="none" stroke-linecap="round" stroke-linejoin="round"/>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/radio.js

Icon["a" /* default */].register({
  radio: {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><circle class="fillColor" stroke="currentColor" stroke-width="4" cx="24" cy="24" r="22"/><circle class="innerFillColor innerStrokeColor" stroke="currentColor" stroke-width="4" cx="24" cy="24" r="7"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/red-envelopes.js

Icon["a" /* default */].register({
  'red-envelopes': {
    raw: '<g transform="translate(-4)" stroke="currentColor" stroke-width="4" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path class="fillColor" d="M6 2h36v44H6z"/><path class="innerStrokeColor" d="M19.1 20.03C14.72 18.32 10.35 14.3 6 8m36 0c-4.36 6.3-8.73 10.32-13.1 12.03"/><circle class="innerFillColor innerStrokeColor" cx="24" cy="21" r="5"/></g>',
    width: '40',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/redo-alt.js

Icon["a" /* default */].register({
  'redo-alt': {
    paths: [{
      d: 'M43.6 34a22 22 0 1 1 0-20m.4 0V4',
      fill: 'none',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      stroke: 'currentColor',
      'stroke-width': '4'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/repeat-1.js

Icon["a" /* default */].register({
  'repeat-1': {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke="currentColor" stroke-width="4"><path d="M46 24a14 14 0 0 1-14 14H16a14 14 0 1 1 0-28h29"/><path d="M40 4l6 6-6 6"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/repeat.js

Icon["a" /* default */].register({
  repeat: {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke="currentColor" stroke-width="4"><path d="M46 24a14 14 0 0 1-14 14H3M2 24a14 14 0 0 1 14-14h29"/><path d="M40 4l6 6-6 6M8 44l-6-6 6-6h0"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/report-basics.js

Icon["a" /* default */].register({
  'report-basics': {
    paths: [{
      d: 'M6 4a2 2 0 0 0-2 2v6c0 1.1.9 2 2 2h36a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H6zm0-4h36a6 6 0 0 1 6 6v6a6 6 0 0 1-6 6H6a6 6 0 0 1-6-6V6a6 6 0 0 1 6-6zm38 24.05a2 2 0 1 1 4 0V42a6 6 0 0 1-6 6H6a6 6 0 0 1-6-6V24.05a2 2 0 1 1 4 0V42c0 1.1.9 2 2 2h36a2 2 0 0 0 2-2V24.05zM10 23h9a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-9a2 2 0 0 1-2-2V25c0-1.1.9-2 2-2zm2 14h5V27h-5v10zm15-12h6a2 2 0 1 1 0 4h-6a2 2 0 1 1 0-4zm0 9h11a2 2 0 1 1 0 4H27a2 2 0 1 1 0-4zM9 11a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm7 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm7 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/report.js

Icon["a" /* default */].register({
  report: {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path class="fillColor" d="M37 15v21c6 2.67 9 6 9 10H2c0-4 3-7.33 9-10V15m26 0a13 13 0 0 0-26 0" stroke="currentColor" stroke-width="4"/><path d="M43 10l3-2M5 10L2 8l3 2zm38 14l3 2M5 24l-3 2 3-2z" stroke="currentColor" stroke-width="4"/><path class="innerStrokeColor" d="M28 14c-5.33 0-8 2.33-8 7s2.67 7 8 7" stroke="currentColor" stroke-width="4"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/resource-lock.js

Icon["a" /* default */].register({
  'resource-lock': {
    paths: [{
      d: 'M34 30h5c-.07-2.16-.8-3-2.5-3-1.71 0-2.4.79-2.5 3zm9 .08A6 6 0 0 1 48 36v6a6 6 0 0 1-6 6H32a6 6 0 0 1-6-6v-6a6 6 0 0 1 4-5.66c.05-4.49 2.2-7.34 6.5-7.34 4.21 0 6.4 2.81 6.5 7.08zM44 16H4v26c0 1.1.9 2 2 2h15.7a2 2 0 1 1 0 4H6a6 6 0 0 1-6-6V6a6 6 0 0 1 6-6h36a6 6 0 0 1 6 6v17.12a2 2 0 1 1-4 0V16zm0-4V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v6h40zM10 26a2 2 0 1 1 0-4h15a2 2 0 1 1 0 4H10zm0 10a2 2 0 1 1 0-4h6.57a2 2 0 1 1 0 4H10zm22-2a2 2 0 0 0-2 2v6c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2H32z'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/ring-3.js

Icon["a" /* default */].register({
  'ring-3': {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M33.65 8.63a19 19 0 0 1 9.27 18.17h0M31.4 42.5a18.94 18.94 0 0 1-14.8 0M5.08 26.8a19 19 0 0 1 9.27-18.17" stroke="currentColor" stroke-width="4"/><circle class="fillColor" stroke="currentColor" stroke-width="4" cx="24" cy="6" r="4"/><circle class="fillColor" stroke="currentColor" stroke-width="4" cx="9" cy="36" r="4"/><circle class="fillColor" stroke="currentColor" stroke-width="4" cx="39" cy="36" r="4"/></g>',
    width: '48',
    height: '46'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/ring-4.js

Icon["a" /* default */].register({
  'ring-4': {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><circle class="fillColor" stroke="currentColor" stroke-width="4" cx="24" cy="6" r="4"/><circle class="fillColor" stroke="currentColor" stroke-width="4" cx="24" cy="42" r="4"/><circle class="fillColor" stroke="currentColor" stroke-width="4" cx="6" cy="24" r="4"/><circle class="fillColor" stroke="currentColor" stroke-width="4" cx="42" cy="24" r="4"/><path d="M33.6 8.78a18.1 18.1 0 0 1 5.62 5.61m0 19.22a18.1 18.1 0 0 1-5.61 5.61m-19.22 0a18.1 18.1 0 0 1-5.61-5.61m0-19.22a18.1 18.1 0 0 1 5.61-5.61" stroke="currentColor" stroke-width="4"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/road.js

Icon["a" /* default */].register({
  road: {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke="currentColor" stroke-width="4"><path d="M24 2v44" stroke-dasharray="1,6"/><path d="M16 2l-3 11-11 .05m0 7.99l9-.04-7 25M32 2l4 16h10m0 8h-7l5 20"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/rocket.js

Icon["a" /* default */].register({
  rocket: {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path class="fillColor" stroke="currentColor" stroke-width="4" d="M13 10l11-8 11 8v24H13z"/><path class="innerFillColor" stroke="currentColor" stroke-width="4" d="M13 17l-7 6v10l7-3zm22 0l7 6v10l-7-3z"/><path d="M17 40v3m7-3v6m7-6v3" stroke="currentColor" stroke-width="4"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/router-mi.js

Icon["a" /* default */].register({
  'router-mi': {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2h24M12 8h24m-24 6h24" stroke="currentColor" stroke-width="4"/><path class="fillColor" stroke="currentColor" stroke-width="4" d="M12 20h24v26H12z"/><path class="innerStrokeColor" d="M24 35v4" stroke="currentColor" stroke-width="4"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/router.js

Icon["a" /* default */].register({
  router: {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path class="fillColor" stroke="currentColor" stroke-width="4" d="M9 26L2 40h46l-7-14z"/><path d="M11 2v16M29 2v16M20 2v16M38 2v16" stroke="currentColor" stroke-width="4"/><path class="fillColor" stroke="currentColor" stroke-width="4" d="M2 40v6h46v-6z"/></g>',
    width: '50',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/rss.js

Icon["a" /* default */].register({
  rss: {
    raw: '<g fill="none" fill-rule="evenodd"><path d="M46 46A44 44 0 0 0 2 2m30 44A30 30 0 0 0 2 16m16 30.5A16.5 16.5 0 0 0 1.5 30" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><circle class="noStroke fillColor" cx="3" cy="45" r="3"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/rugby-ball.js

Icon["a" /* default */].register({
  'rugby-ball': {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path class="fillColor" d="M24 40c12.15 0 22-10 22-16S36.15 8 24 8 2 18 2 24s9.85 16 22 16z" stroke="currentColor" stroke-width="4"/><path class="innerStrokeColor" d="M9 14v20m30-20v20M15 24h18m-15-5v10m6-10v10m6-10v10" stroke="currentColor" stroke-width="4"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/safari.js

Icon["a" /* default */].register({
  safari: {
    raw: '<g fill="none" fill-rule="evenodd"><circle class="fillColor" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" cx="24" cy="24" r="22"/><path class="innerFillColor innerStrokeColor" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" d="M14 34l5-15 15-5-5 15z"/><circle class="noStroke fillColor" cx="24" cy="24" r="2"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/sandstorm.js

Icon["a" /* default */].register({
  sandstorm: {
    paths: [{
      d: 'M2.85 22a15 15 0 0 1 28.63-8.92A10 10 0 0 1 46 22M4 28h30m-22 8h29M2 36h2m10-16h2m1 26h2m5-26h2m1 26h6m8 0a5 5 0 0 0 0-10m-7-8a4 4 0 1 0 0-8',
      fill: 'none',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      stroke: 'currentColor',
      'stroke-width': '4'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/save.js

Icon["a" /* default */].register({
  save: {
    raw: '<g stroke="currentColor" stroke-width="4" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path class="fillColor" d="M2 2h38l6 6v38H2z"/><path class="innerStrokeColor" d="M10 32h28m-28-6h28M10 38h14M10 2h24v16H10z"/><path class="innerStrokeColor innerFillColor" d="M18 2h4v9h-4z"/><path d="M6 2h31"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/scan-code.js

Icon["a" /* default */].register({
  'scan-code': {
    paths: [{
      d: 'M2 16V6a4 4 0 0 1 4-4h10m0 44H6a4 4 0 0 1-4-4V32M32 2h10a4 4 0 0 1 4 4v10m0 16v10a4 4 0 0 1-4 4H32M2 24h44',
      fill: 'none',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      stroke: 'currentColor',
      'stroke-width': '4'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/schedule.js

Icon["a" /* default */].register({
  schedule: {
    paths: [{
      d: 'M38 9a2 2 0 1 1 0-4h4.33A5.74 5.74 0 0 1 48 10.8v31.4c0 3.18-2.52 5.8-5.67 5.8H5.67A5.74 5.74 0 0 1 0 42.2V10.8C0 7.62 2.52 5 5.67 5h4.35a2 2 0 1 1 0 4H5.67C4.77 9 4 9.8 4 10.8v31.4c0 1 .76 1.8 1.67 1.8h36.66c.9 0 1.67-.8 1.67-1.8V10.8c0-1-.76-1.8-1.67-1.8h-4.32zM22 9a2 2 0 1 1 0-4h4a2 2 0 1 1 0 4h-4zm-4 1a2 2 0 1 1-4 0V2a2 2 0 1 1 4 0v8zm16 0a2 2 0 1 1-4 0V2a2 2 0 1 1 4 0v8zm-22 7h16a2 2 0 1 1 0 4H12a2 2 0 1 1 0-4zm0 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm16-8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-8-8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm16-16a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4z'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/screenshot.js

Icon["a" /* default */].register({
  screenshot: {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path stroke="currentColor" stroke-width="4" d="M2 26V2h44v24"/><circle class="fillColor" stroke="currentColor" stroke-width="4" cx="8" cy="40" r="6"/><path d="M36 12C20.4 33.27 13.8 42.68 12.24 44.24a6 6 0 0 1-8.48 0" stroke="currentColor" stroke-width="4"/><circle class="fillColor" stroke="currentColor" stroke-width="4" cx="40" cy="40" r="6"/><path d="M44.24 44.24a6 6 0 0 1-8.48 0C34.2 42.68 27.6 33.27 12 12" stroke="currentColor" stroke-width="4"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/search-2.js

Icon["a" /* default */].register({
  'search-2': {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M2 8h14M2 16h10M2 24h10M2 32h16M2 40h37" stroke="currentColor" stroke-width="4"/><circle class="fillColor" stroke="currentColor" stroke-width="4" cx="31" cy="19" r="11"/><path d="M38 28l8 8" stroke="currentColor" stroke-width="4"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/search-advertiser.js

Icon["a" /* default */].register({
  'search-advertiser': {
    paths: [{
      d: 'M20.74 44a2 2 0 1 1 0 4H6a6 6 0 0 1-6-6V6a6 6 0 0 1 6-6h36a6 6 0 0 1 6 6v20.02a2 2 0 1 1-4 0V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v36c0 1.1.9 2 2 2h14.74zM10.5 10h27a2.5 2.5 0 1 1 0 5h-27a2.5 2.5 0 1 1 0-5zm0 10h27a2.5 2.5 0 1 1 0 5h-27a2.5 2.5 0 1 1 0-5zM37 44a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm0-4a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm3.51 3.34a2 2 0 0 1 2.98-2.68l3.53 3.92a2 2 0 1 1-2.98 2.68l-3.53-3.92zM10.5 30h12a2.5 2.5 0 1 1 0 5h-12a2.5 2.5 0 1 1 0-5z'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/search-minus.js

Icon["a" /* default */].register({
  'search-minus': {
    raw: '<g fill="none" fill-rule="evenodd"><circle class="fillColor" stroke="currentColor" stroke-width="4" cx="21.5" cy="21.5" r="19.5"/><path d="M36 36l10 10" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path class="innerStrokeColor" d="M14 21h16" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/search-plus.js

Icon["a" /* default */].register({
  'search-plus': {
    raw: '<g fill="none" fill-rule="evenodd"><circle class="fillColor" stroke="currentColor" stroke-width="4" cx="21.5" cy="21.5" r="19.5"/><path d="M36 36l10 10" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path class="innerStrokeColor" d="M14 21h16m-8-8v16" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/search-words.js

Icon["a" /* default */].register({
  'search-words': {
    paths: [{
      d: 'M24.02 28.3l4.15 4.99a2 2 0 1 1-3.08 2.55l-4.12-4.95a9.5 9.5 0 1 1 3.05-2.58zM36 12h3a2 2 0 1 1 0 4h-3a2 2 0 1 1 0-4zm-4 7h7a2 2 0 1 1 0 4h-7a2 2 0 1 1 0-4zm0 7h7a2 2 0 1 1 0 4h-7a2 2 0 1 1 0-4zm4 7h3a2 2 0 1 1 0 4h-3a2 2 0 1 1 0-4zm-19.5-5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM16 44a2 2 0 1 1 0 4H6a6 6 0 0 1-6-6V6a6 6 0 0 1 6-6h36a6 6 0 0 1 6 6v36a6 6 0 0 1-6 6h-6.02a2 2 0 1 1 0-4H42a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v36c0 1.1.9 2 2 2h10z',
      'fill-rule': 'evenodd'
    }],
    width: '48',
    height: '48'
  }
});
// EXTERNAL MODULE: ./node_modules/veui-theme-one-icons/search.js
var search = __webpack_require__(236);

// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/selected-focus.js

Icon["a" /* default */].register({
  'selected-focus': {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path class="fillColor" stroke="currentColor" stroke-width="4" d="M2 2h8v8H2zm0 36h8v8H2zM38 2h8v8h-8zm0 36h8v8h-8z"/><path d="M10 6h28M10 42h28M6 10v28m36-28v28" stroke="currentColor" stroke-width="4" stroke-dasharray="1,5"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/selected.js

Icon["a" /* default */].register({
  selected: {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path class="fillColor" stroke="currentColor" stroke-width="4" d="M2 2h8v8H2zm0 18h8v8H2zm36 0h8v8h-8zM20 38h8v8h-8zM2 38h8v8H2zM38 2h8v8h-8zM20 2h8v8h-8zm18 36h8v8h-8z"/><path d="M6 38V28m36 10V28M6 20V10m36 10V10M10 6h10M10 42h10m8-36h10M28 42h10" stroke="currentColor" stroke-width="4"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/send-backward.js

Icon["a" /* default */].register({
  'send-backward': {
    raw: '<g fill="none" fill-rule="evenodd"><path class="noFill" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" d="M2 2h36v36H2z"/><path class="fillColor" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" d="M38 10h8v36H10v-8h28z"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/sent-to-back.js

Icon["a" /* default */].register({
  'sent-to-back': {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path class="noFill" stroke="currentColor" stroke-width="4" d="M2 2h27v27H2z"/><path class="noFill" stroke="currentColor" stroke-width="4" d="M29 10h8v27H10v-8h19z"/><path class="fillColor" stroke="currentColor" stroke-width="4" d="M37 18h8v27H18v-8h19z"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/server.js

Icon["a" /* default */].register({
  server: {
    raw: '<g fill="none" fill-rule="evenodd"><path class="fillColor" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" d="M2 4h44v16H2zm0 24h44v16H2z"/><rect class="noStroke innerFillColor" x="8" y="10" width="4" height="4" rx="1"/><rect class="noStroke innerFillColor" x="8" y="34" width="4" height="4" rx="1"/><rect class="noStroke innerFillColor" x="16" y="10" width="4" height="4" rx="1"/><rect class="noStroke innerFillColor" x="16" y="34" width="4" height="4" rx="1"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/setting-3.js

Icon["a" /* default */].register({
  'setting-3': {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path class="fillColor" stroke="currentColor" stroke-width="4" d="M12 5h24l10 19-10 19H12L2 24z"/><circle class="innerFillColor innerStrokeColor" stroke="currentColor" stroke-width="4" cx="24" cy="24" r="8"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/setup-user.js

Icon["a" /* default */].register({
  'setup-user': {
    paths: [{
      d: 'M26 28.36a2 2 0 0 1 .8-3.16 9.71 9.71 0 0 0 6.2-8.06 40.88 40.88 0 0 0 0-2.16l-.01-.99a10 10 0 1 0-19.98 0 153.81 153.81 0 0 1-.02 1.69v1.47a9.65 9.65 0 0 0 6.38 8.11 2 2 0 0 1-.77 3.88C10.07 30.84 4 37.25 4 44.6a2 2 0 1 1-4 0c0-8.04 5.53-15.04 13.62-18.16a13.5 13.5 0 0 1-4.6-8.9 24.46 24.46 0 0 1-.01-2.6V14A14 14 0 1 1 37 14a148.9 148.9 0 0 0 .01 1.66c.01 1.04 0 1.6-.02 1.9a13.59 13.59 0 0 1-4.62 8.88 23.7 23.7 0 0 1 5.77 3.19 2 2 0 1 1-2.41 3.19 20.45 20.45 0 0 0-8.51-3.7 2 2 0 0 1-1.21-.75zM28 36h18a2 2 0 1 1 0 4H28a2 2 0 1 1 0-4zm0 7h18a2 2 0 1 1 0 4H28a2 2 0 1 1 0-4z'
    }],
    width: '48',
    height: '47'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/setup-words.js

Icon["a" /* default */].register({
  'setup-words': {
    paths: [{
      d: 'M25.58 34.83l5.29-10.77a6.5 6.5 0 1 1 3.55 1.85l-6.07 12.35a2 2 0 0 1-1.13 1 2 2 0 0 1-1.52-.02l-5.32-2.29-5.13 9.86a2 2 0 0 1-1.6 1.06 2 2 0 0 1-.7.13H6a6 6 0 0 1-6-6V6a6 6 0 0 1 6-6h36a6 6 0 0 1 6 6v36a6 6 0 0 1-6 6h-4.93a2 2 0 1 1 0-4H42a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v36c0 1.1.9 2 2 2h6.2l5.17-9.92c.05-.1.1-.19.17-.27a2 2 0 0 1 2.7-1.27l5.34 2.29zM35.5 22a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/shake.js

Icon["a" /* default */].register({
  shake: {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path stroke="currentColor" stroke-width="4" d="M46 44l-5-5 5-5-5-5 5-5-5-5 5-5-5-5 5-5h0M2 4l5 5-5 5 5 5-5 5 5 5-5 5 5 5-5 5h0"/><path class="fillColor" stroke="currentColor" stroke-width="4" d="M13 2h22v44H13z"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/shangqiao-f.js

Icon["a" /* default */].register({
  'shangqiao-f': {
    paths: [{
      class: 'noStroke',
      d: 'M44.19 27.19c-13.43 1.64-23.65 7.23-30.53 16.75-.34-.18-.67-.37-1-.57C19.43 29.8 29.75 22.51 43.8 21.32c.32 1.6.53 3.6.39 5.87zm-.66 4.12c-.23.9-.53 1.82-.91 2.76 0 0-2.02 3.82.3 6.89 0 0 .86 1.71 3.83 2.77 0 0 3.18 1.4-2.06 2.51 0 0-2.83.46-6.2-1.05l-4.43-1.61s-7.31 4.76-16.59 1.94c6-7.86 14.64-12.59 26.06-14.2zm-.9-13.9c-14.83 1.51-25.95 9.4-33.2 23.49-6.2-5.89-7.9-15.38-4.8-23.5 0 0-9.27-5.93-.7-13.43 0 0 7.05-5.13 11.69 2.47 0 0 6.4-3.98 16.12-.1 0 0 4.48-7.05 11.48-2.22 0 0 4.29 2.87 2.78 8.76 0 0-.66 3.07-3.38 4.53z'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/shangqiao.js

Icon["a" /* default */].register({
  shangqiao: {
    paths: [{
      class: 'noStroke',
      d: 'M16.25 41.22c5.65-8.85 13.87-14.2 24.54-15.98a19.6 19.6 0 0 0-.66-4.56c-11.65 1.38-20.18 7.82-25.77 19.51.6.38 1.23.72 1.89 1.03zm3.94 1.3a17.3 17.3 0 0 0 12.05-2l.84-.55 5.05 1.84.13.05c1.2.54 2.35.8 3.35.86a7.66 7.66 0 0 1-1.73-1.87 7 7 0 0 1-.98-1.9 8.32 8.32 0 0 1 .1-5.26c.16-.49.32-.88.46-1.15a19 19 0 0 0 .95-3.16c-8.7 1.68-15.4 6.04-20.22 13.13zm-9-4.96c6.12-12.19 15.5-19.17 28-20.8l1.15-.62a3.9 3.9 0 0 0 1.3-1.16 5.37 5.37 0 0 0 .84-1.77 5.6 5.6 0 0 0-1.77-5.99c-2.63-1.8-4.7-1.5-6.6.12a7.74 7.74 0 0 0-1.24 1.36l-.89 1.4-1.54-.61c-4.53-1.8-8.47-1.79-11.68-.7-.77.26-1.27.5-1.49.63l-1.7 1.07-1.06-1.72a6.06 6.06 0 0 0-2.67-2.58c-1.29-.55-2.76-.38-4.23.28-.46.2-.81.41-1 .54-3.38 3-3.27 5.37-1.1 7.8a9.49 9.49 0 0 0 1.6 1.41l1.37.88-.59 1.52c-2.58 6.74-1.18 14.13 3.3 18.94zm-8.67-20.1c-3.55-3.97-3.75-8.9 1.53-13.53l.14-.11c.38-.27.98-.64 1.77-1 2.4-1.08 4.98-1.37 7.46-.3a9.18 9.18 0 0 1 3.47 2.69l.6-.21c3.71-1.26 8.13-1.39 13.03.26.29-.31.62-.64 1-.96 3.18-2.72 7.2-3.3 11.44-.39a9.51 9.51 0 0 1 3.41 10.2 8.7 8.7 0 0 1-2.67 4.53l.26.89a22.53 22.53 0 0 1-.82 14.58l-.09.19c-.04.08-.14.3-.24.62a4.48 4.48 0 0 0-.11 2.77c.1.3.25.6.46.87l.1.15.1.16a4.05 4.05 0 0 0 1 .88c.39.26.86.5 1.43.7l.14.06c.23.1.51.25.82.48.74.55 1.26 1.24 1.25 2.27 0 1.28-.83 2.12-2.09 2.68a12.1 12.1 0 0 1-2.8.75c-1.83.16-4.06-.1-6.41-1.14l-3.18-1.16a21.12 21.12 0 0 1-18.83.51C4.8 40.44.41 29.03 3.67 18.6c-.37-.32-.76-.7-1.15-1.13z'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/share-alt.js

Icon["a" /* default */].register({
  'share-alt': {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><circle class="fillColor" stroke="currentColor" stroke-width="4" cx="40" cy="8" r="6"/><circle class="fillColor" stroke="currentColor" stroke-width="4" cx="40" cy="40" r="6"/><circle class="fillColor" stroke="currentColor" stroke-width="4" cx="8" cy="24" r="6"/><path d="M34 11L14 21m0 6l20 10" stroke="currentColor" stroke-width="4"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/share-circle.js

Icon["a" /* default */].register({
  'share-circle': {
    paths: [{
      d: 'M24 2a22 22 0 1 0 22 22M32 4h12v12m-20 8L44 4',
      fill: 'none',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      stroke: 'currentColor',
      'stroke-width': '4'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/shield-add.js

Icon["a" /* default */].register({
  'shield-add': {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path class="fillColor" d="M24 2L6 8v17c0 8 6 15 18 21 12-6 18-13 18-21V8L24 2z" stroke="currentColor" stroke-width="4"/><path class="innerStrokeColor" d="M16 22h16m-8-8v16" stroke="currentColor" stroke-width="4"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/shield-check.js

Icon["a" /* default */].register({
  'shield-check': {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path class="fillColor" d="M24 2L6 8v17c0 8 6 15 18 21 12-6 18-13 18-21V8L24 2z" stroke="currentColor" stroke-width="4"/><path class="innerStrokeColor" stroke="currentColor" stroke-width="4" d="M15 22l7 7 12-12"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/shield-no.js

Icon["a" /* default */].register({
  'shield-no': {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path class="fillColor" d="M24 2L6 8v17c0 8 6 15 18 21 12-6 18-13 18-21V8L24 2z" stroke="currentColor" stroke-width="4"/><path class="innerStrokeColor" d="M18 16l12 12m-12 0l12-12" stroke="currentColor" stroke-width="4"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/shield.js

Icon["a" /* default */].register({
  shield: {
    paths: [{
      class: 'fillColor',
      d: 'M24 2L6 8v17c0 8 6 15 18 21 12-6 18-13 18-21V8L24 2z',
      stroke: 'currentColor',
      'stroke-width': '4',
      fill: 'none',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/ship.js

Icon["a" /* default */].register({
  ship: {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path class="fillColor" stroke="currentColor" stroke-width="4" d="M6 20l18-7 18 7-6 16H12z"/><path stroke="currentColor" stroke-width="4" d="M3 43l3 3 3-3 3 3 3-3 3 3 3-3 3 3 3-3 3 3 3-3 3 3 3-3 3 3 3-3M13 16V7h22v9M24 7V2"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/shopping-bag.js

Icon["a" /* default */].register({
  'shopping-bag': {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path class="fillColor" stroke="currentColor" stroke-width="4" d="M2 6h44v36H2z"/><path class="innerStrokeColor" d="M12 17c.67 8.67 4.67 13 12 13s11.33-4.33 12-13" stroke="currentColor" stroke-width="4"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/shopping-cart.js

Icon["a" /* default */].register({
  'shopping-cart': {
    raw: '<g fill="none" fill-rule="evenodd"><path stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" d="M2 4h8v8"/><path class="fillColor" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" d="M10 12h36l-8 22H10z"/><circle class="noStroke fillColor" cx="12" cy="44" r="4"/><circle class="noStroke fillColor" cx="38" cy="44" r="4"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/sign-in.js

Icon["a" /* default */].register({
  'sign-in': {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke="currentColor" stroke-width="4"><path d="M22 2H2v44h20m24-22H14"/><path d="M22 14L12 24l10 10"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/sign-out.js

Icon["a" /* default */].register({
  'sign-out': {
    paths: [{
      d: 'M22 2H2v44h20m22-22H12m24-10l10 10-10 10',
      fill: 'none',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      stroke: 'currentColor',
      'stroke-width': '4'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/signal.js

Icon["a" /* default */].register({
  signal: {
    paths: [{
      d: 'M46 2v44M35 14v32M24 26v20M13 32v14M2 35v11',
      fill: 'none',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      stroke: 'currentColor',
      'stroke-width': '4'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/sim.js

Icon["a" /* default */].register({
  sim: {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path class="fillColor" stroke="currentColor" stroke-width="4" d="M5 2h28l8 8v36H5z"/><path class="innerFillColor innerStrokeColor" stroke="currentColor" stroke-width="4" d="M13 26h20v12H13z"/><path class="innerStrokeColor" d="M13 10v8m6-8v8m6-8v8" stroke="currentColor" stroke-width="4"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/skull.js

Icon["a" /* default */].register({
  skull: {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M12 46l1.52-9.15a19 19 0 1 1 20.95 0L36 46m-16-6v6m8-6v6" stroke="currentColor" stroke-width="4"/><circle class="fillColor" stroke="currentColor" stroke-width="4" cx="16" cy="21" r="4"/><circle class="fillColor" stroke="currentColor" stroke-width="4" cx="32" cy="21" r="4"/><path stroke="currentColor" stroke-width="4" d="M20 32l4-4 4 4"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/slide.js

Icon["a" /* default */].register({
  slide: {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M2 6h44" stroke="currentColor" stroke-width="4"/><path class="fillColor" stroke="currentColor" stroke-width="4" d="M6 6h36v30H6z"/><path class="innerStrokeColor" stroke="currentColor" stroke-width="4" d="M22 16l5 5-5 5"/><path stroke="currentColor" stroke-width="4" d="M16 44l8-8 8 8"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/sliders-v.js

Icon["a" /* default */].register({
  'sliders-v': {
    paths: [{
      d: 'M7 2v16m-5 8h10m-5 0v20m17-26v26m-5-34h10M24 2v10M41 2v24m-5 8h10m-5 0v12',
      fill: 'none',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      stroke: 'currentColor',
      'stroke-width': '4'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/snow.js

Icon["a" /* default */].register({
  snow: {
    paths: [{
      d: 'M8 29a15 15 0 1 1 23.48-15.92A10 10 0 0 1 40 31.18M16 28v1m0 13v1m4-8v1m-8-1v1m12-8v1m0 13v1m4-8v1m8-1v1m-4-8v1m0 13v1',
      fill: 'none',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      stroke: 'currentColor',
      'stroke-width': '4'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/snowflake.js

Icon["a" /* default */].register({
  snowflake: {
    paths: [{
      d: 'M24 2v44M5 13l38 22M5 35l38-22M11 9l3 9-9 2m0 8l9 2-3 9M37 9l-3 9 9 2m0 8l-9 2 3 9M18 5l6 6 6-6M18 43l6-6 6 6',
      fill: 'none',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      stroke: 'currentColor',
      'stroke-width': '4'
    }],
    width: '48',
    height: '48'
  }
});
// EXTERNAL MODULE: ./node_modules/veui-theme-one-icons/sort-down.js
var sort_down = __webpack_require__(239);

// EXTERNAL MODULE: ./node_modules/veui-theme-one-icons/sort-up.js
var sort_up = __webpack_require__(238);

// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/sort.js

Icon["a" /* default */].register({
  sort: {
    paths: [{
      d: 'M32 46V2l14 14M2 32l14 14V2',
      fill: 'none',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      stroke: 'currentColor',
      'stroke-width': '4'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/sound-market.js

Icon["a" /* default */].register({
  'sound-market': {
    paths: [{
      d: 'M23.07 0h.03a2 2 0 0 1 2 2v44a2 2 0 0 1-2 2h-.03a2 2 0 0 1-2-2V2c0-1.1.9-2 2-2zM12.8 10.29h.02a2 2 0 0 1 2 2v26.85a2 2 0 0 1-2 2h-.02a2 2 0 0 1-2-2V12.3c0-1.1.9-2 2-2zm20.57 0h.02a2 2 0 0 1 2 2v26.85a2 2 0 0 1-2 2h-.02a2 2 0 0 1-2-2V12.3c0-1.1.9-2 2-2zm10.28 6.85h.03a2 2 0 0 1 2 2v9.72a2 2 0 0 1-2 2h-.03a2 2 0 0 1-2-2v-9.72c0-1.1.9-2 2-2zm-41.14 0h.02a2 2 0 0 1 2 2v9.72a2 2 0 0 1-2 2H2.5a2 2 0 0 1-2-2v-9.72c0-1.1.9-2 2-2z'
    }],
    width: '46',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/speaker.js

Icon["a" /* default */].register({
  speaker: {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path class="fillColor" stroke="currentColor" stroke-width="4" d="M8 2h32v44H8z"/><circle class="innerFillColor innerStrokeColor" stroke="currentColor" stroke-width="4" cx="24" cy="30" r="8"/><path class="innerStrokeColor" d="M24 10v4" stroke="currentColor" stroke-width="4"/></g>',
    width: '48',
    height: '48'
  }
});
// EXTERNAL MODULE: ./node_modules/veui-theme-one-icons/spinner.js
var spinner = __webpack_require__(230);

// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/star.js

Icon["a" /* default */].register({
  star: {
    paths: [{
      class: 'fillColor',
      stroke: 'currentColor',
      'stroke-width': '4',
      d: 'M24 36.5l-13.52 7.1 2.58-15.05L2.13 17.9l15.11-2.2L24 2l6.76 13.7 15.11 2.2-10.93 10.65 2.58 15.06z',
      fill: 'none',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/stop-circle.js

Icon["a" /* default */].register({
  'stop-circle': {
    raw: '<g fill="none" fill-rule="evenodd"><circle class="fillColor" stroke="currentColor" stroke-width="4" cx="24" cy="24" r="22"/><path class="innerFillColor innerStrokeColor" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" d="M18 18h12v12H18z"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/stopwatch.js

Icon["a" /* default */].register({
  stopwatch: {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><circle class="fillColor" stroke="currentColor" stroke-width="4" cx="24" cy="28" r="18"/><path d="M16 2h16" stroke="currentColor" stroke-width="4"/><path class="innerStrokeColor" d="M24 18v10" stroke="currentColor" stroke-width="4"/><path d="M37 15l3-3" stroke="currentColor" stroke-width="4"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/sun.js

Icon["a" /* default */].register({
  sun: {
    raw: '<g fill="none" fill-rule="evenodd"><path d="M24 2v4m15.56 2.44l-2.83 2.83M46 24h-4m-2.44 15.56l-2.83-2.83M24 46v-4M8.44 39.56l2.83-2.83M2 24h4M8.44 8.44l2.83 2.83" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><circle class="fillColor" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" cx="24" cy="24" r="10"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/sunny.js

Icon["a" /* default */].register({
  sunny: {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path class="fillColor" d="M17 46a15 15 0 1 1 14.48-18.92A10 10 0 1 1 36 46H17z" stroke="currentColor" stroke-width="4"/><path class="innerFillColor" d="M19 16.16a8 8 0 1 1 11.56 8.9A15.02 15.02 0 0 0 19 16.15z" stroke="currentColor" stroke-width="4"/><path d="M26.02 2v2m11.31 2.69L35.92 8.1m6.1 9.9h-2M14.71 6.69l1.41 1.41" stroke="currentColor" stroke-width="4"/></g>',
    width: '48',
    height: '48'
  }
});
// EXTERNAL MODULE: ./node_modules/veui-theme-one-icons/sync-alt.js
var sync_alt = __webpack_require__(244);

// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/table.js

Icon["a" /* default */].register({
  table: {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path class="fillColor" stroke="currentColor" stroke-width="4" d="M6 2h36v44H6z"/><path class="innerStrokeColor" d="M12 13h24M12 24h24M12 35h24M18 8v32" stroke="currentColor" stroke-width="4"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/tag.js

Icon["a" /* default */].register({
  tag: {
    raw: '<g fill="none" fill-rule="evenodd"><path class="fillColor" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" d="M24 2L10 14v32h28V14z"/><circle class="noStroke" cx="24" cy="15" r="3"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/tape.js

Icon["a" /* default */].register({
  tape: {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path class="fillColor" stroke="currentColor" stroke-width="4" d="M2 8h44v32H2z"/><circle class="innerFillColor innerStrokeColor" stroke="currentColor" stroke-width="4" cx="15" cy="24" r="5"/><circle class="innerFillColor innerStrokeColor" stroke="currentColor" stroke-width="4" cx="33" cy="24" r="5"/><path class="innerStrokeColor" d="M15 29h18" stroke="currentColor" stroke-width="4"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/taxi.js

Icon["a" /* default */].register({
  taxi: {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path class="fillColor" stroke="currentColor" stroke-width="4" d="M2 28h44v12H2zm4 12h6v6H6zm30 0h6v6h-6zM10 8h28l4 20H6zm8-6h12l2 6H16z"/><path class="innerStrokeColor" d="M8 34h2m11-20h6m11 20h2" stroke="currentColor" stroke-width="4"/><path d="M2 22v-2m44 2v-2" stroke="currentColor" stroke-width="4"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/technology.js

Icon["a" /* default */].register({
  technology: {
    paths: [{
      d: 'M6 0h36a6 6 0 0 1 6 6v36a6 6 0 0 1-6 6H6a6 6 0 0 1-6-6V6a6 6 0 0 1 6-6zm0 4a2 2 0 0 0-2 2v36c0 1.1.9 2 2 2h36a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H6zm-2 6h40v4H4v-4zm27.57 23.6l4.6-4.69-4.57-4.48a2 2 0 1 1 2.8-2.86l6 5.88a2 2 0 0 1 .03 2.83l-6 6.12a2 2 0 1 1-2.86-2.8zm-15.14-9.2l-4.6 4.69 4.57 4.48a2 2 0 0 1-2.8 2.86l-6-5.88a2 2 0 0 1-.03-2.83l6-6.12a2 2 0 0 1 2.86 2.8zm7.67-2.03a2 2 0 1 1 3.8 1.26l-4 12a2 2 0 1 1-3.8-1.26l4-12z',
      'fill-rule': 'evenodd'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/terminal.js

Icon["a" /* default */].register({
  terminal: {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path class="fillColor" stroke="currentColor" stroke-width="4" d="M2 8h44v32H2z"/><path class="innerStrokeColor" stroke="currentColor" stroke-width="4" d="M10 18l6 6-6 6m10 2h18"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/text-bold.js

Icon["a" /* default */].register({
  'text-bold': {
    paths: [{
      d: 'M25 24a11 11 0 0 0 0-22H8v22h17zm4 22a11 11 0 0 0 0-22H8v22h21z',
      fill: 'none',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      stroke: 'currentColor',
      'stroke-width': '4'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/text-ltalic.js

Icon["a" /* default */].register({
  'text-ltalic': {
    paths: [{
      d: 'M20 2h16M12 47h16m0-45l-8 45',
      fill: 'none',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      stroke: 'currentColor',
      'stroke-width': '4'
    }],
    width: '48',
    height: '49'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/text-underline.js

Icon["a" /* default */].register({
  'text-underline': {
    paths: [{
      d: 'M8 2v20a16 16 0 1 0 32 0V2M2 46h44',
      fill: 'none',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      stroke: 'currentColor',
      'stroke-width': '4'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/text-vertical.js

Icon["a" /* default */].register({
  'text-vertical': {
    paths: [{
      d: 'M8 2H2v44h6M2 24h44m0-8v16',
      fill: 'none',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      stroke: 'currentColor',
      'stroke-width': '4'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/text.js

Icon["a" /* default */].register({
  text: {
    paths: [{
      d: 'M2 8V2h44v6M24 2v44m-8 0h16',
      fill: 'none',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      stroke: 'currentColor',
      'stroke-width': '4'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/th-large.js

Icon["a" /* default */].register({
  'th-large': {
    raw: '<g class="fillColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke="currentColor" stroke-width="4"><rect x="2" y="2" width="18" height="18" rx="2"/><rect x="2" y="28" width="18" height="18" rx="2"/><rect x="28" y="2" width="18" height="18" rx="2"/><rect x="28" y="28" width="18" height="18" rx="2"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/thermometer.js

Icon["a" /* default */].register({
  thermometer: {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path class="fillColor" d="M18 28V8a6 6 0 1 1 12 0v20a9.98 9.98 0 0 1-6 18 10 10 0 0 1-6-18z" stroke="currentColor" stroke-width="4"/><path class="innerStrokeColor" d="M24 13v19" stroke="currentColor" stroke-width="4"/><circle class="innerFillColor innerStrokeColor" stroke="currentColor" stroke-width="4" cx="24" cy="36" r="4"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/thirtyjin.js

Icon["a" /* default */].register({
  thirtyjin: {
    raw: '<g class="noStroke" fill-rule="evenodd"><path d="M8 1h38a2 2 0 0 1 2 2v44a2 2 0 0 1-3.51 1.3l-38-44A2 2 0 0 1 8 1zm4.37 4L44 41.62V5H12.37z" fill-rule="nonzero"/><path d="M48 3v44a2 2 0 0 1-2 2H8a2 2 0 0 1-1.51-3.3l38-44A2 2 0 0 1 48 3zM12.37 45H44V8.38L12.37 45z"/><path d="M48 3v44a2 2 0 0 1-2.9 1.79l-44-22a2 2 0 0 1 0-3.58l44-22A2 2 0 0 1 48 3zm-4 3.24L6.47 25 44 43.76V6.24z"/></g>',
    width: '48',
    height: '50'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/thumbs-down.js

Icon["a" /* default */].register({
  'thumbs-down': {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path class="fillColor" d="M6 6h31.85a4 4 0 0 1 3.89 3.07l4.08 17a4 4 0 0 1-3.9 4.93H27v6c0 6-3 9-7 9l-7-19H6a4 4 0 0 1-4-4V10a4 4 0 0 1 4-4z" stroke="currentColor" stroke-width="4"/><path class="innerStrokeColor" d="M13 27V6" stroke="currentColor" stroke-width="4"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/thumbs-up.js

Icon["a" /* default */].register({
  'thumbs-up': {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path class="fillColor" d="M6 42h31.85a4 4 0 0 0 3.89-3.07l4.08-17a4 4 0 0 0-3.9-4.93H27v-6c0-6-3-9-7-9l-7 19H6a4 4 0 0 0-4 4v13a4 4 0 0 0 4 4z" stroke="currentColor" stroke-width="4"/><path class="innerStrokeColor" d="M13 21v21" stroke="currentColor" stroke-width="4"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/thunderstorm.js

Icon["a" /* default */].register({
  thunderstorm: {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M8 29a15 15 0 1 1 23.48-15.92A10 10 0 0 1 40 31.18" stroke="currentColor" stroke-width="4"/><path class="fillColor" stroke="currentColor" stroke-width="4" d="M19 20l-4 13 7 1-3 12 13-15-8-2 6-9z"/></g>',
    width: '48',
    height: '48'
  }
});
// EXTERNAL MODULE: ./node_modules/veui-theme-one-icons/times-circle.js
var times_circle = __webpack_require__(79);

// EXTERNAL MODULE: ./node_modules/veui-theme-one-icons/times.js
var times = __webpack_require__(58);

// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/tool-center.js

Icon["a" /* default */].register({
  'tool-center': {
    paths: [{
      d: 'M37 24h7V12a2 2 0 0 0-2-2h-9.03a2 2 0 1 1 0-4H42a6 6 0 0 1 6 6v30a6 6 0 0 1-6 6H6a6 6 0 0 1-6-6V12a6 6 0 0 1 6-6h8.97a2 2 0 1 1 0 4H6a2 2 0 0 0-2 2v12h7v-2c0-1.1.9-2 2-2h6a2 2 0 0 1 2 2v2h6v-2c0-1.1.9-2 2-2h6a2 2 0 0 1 2 2v2zm0 4v2a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2v-2h-6v2a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2v-2H4v14c0 1.1.9 2 2 2h36a2 2 0 0 0 2-2V28h-7zM15 4a2 2 0 1 1 0-4h18a2 2 0 1 1 0 4H15zm0 24h2v-4h-2v4zm16 0h2v-4h-2v4z'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/trace.js

Icon["a" /* default */].register({
  trace: {
    paths: [{
      d: 'M41.98 8.71L26.35 24.34a2 2 0 1 1-2.83-2.83L39.03 6H32a2 2 0 1 1 0-4h11.98a2 2 0 0 1 2 2v12.06a2 2 0 1 1-4 0V8.7zM24 0a2 2 0 1 1 0 4 20 20 0 1 0 20 20 2 2 0 1 1 4 0A24 24 0 1 1 24 0zm-1.5 12.02a2 2 0 1 1 .5 3.96 8.01 8.01 0 1 0 8.95 8.95 2 2 0 1 1 3.97.5A12.01 12.01 0 1 1 22.5 12.02z'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/trash-alt.js

Icon["a" /* default */].register({
  'trash-alt': {
    paths: [{
      d: 'M2 10h44m-32 0l4-8h13l4 8M9 18v28h30V18m-20 4v16m10-16v16',
      fill: 'none',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      stroke: 'currentColor',
      'stroke-width': '4'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/trend.js

Icon["a" /* default */].register({
  trend: {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M2 46h44" stroke="currentColor" stroke-width="4"/><path class="fillColor" stroke="currentColor" stroke-width="4" d="M4 26l8 2v12H4zm16-2l8-4v20h-8zm16-8l8-4v28h-8z"/><path stroke="currentColor" stroke-width="4" d="M2 17l10 3L46 2H36"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/trophy.js

Icon["a" /* default */].register({
  trophy: {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path class="fillColor" d="M24 36a14 14 0 0 0 14-14V2H10v20a14 14 0 0 0 14 14zM10 22V10H2c0 8 4 12 8 12zm28 0V10h8c0 8-4 12-8 12z" stroke="currentColor" stroke-width="4"/><path d="M24 36v10" stroke="currentColor" stroke-width="4"/><path class="innerStrokeColor" d="M30 2v12" stroke="currentColor" stroke-width="4"/><path d="M16 46h16" stroke="currentColor" stroke-width="4"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/truck.js

Icon["a" /* default */].register({
  truck: {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path class="innerFillColor" stroke="currentColor" stroke-width="4" d="M8 37H2V11h30v26H16m16 0V19h8l6 9v9h-6"/><circle class="fillColor" stroke="currentColor" stroke-width="4" cx="12" cy="37" r="4"/><circle class="fillColor" stroke="currentColor" stroke-width="4" cx="36" cy="37" r="4"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/tshirt.js

Icon["a" /* default */].register({
  tshirt: {
    paths: [{
      class: 'fillColor',
      d: 'M17 2a7 7 0 0 0 14 0h7l8 12-7 6v26H9V20l-7-6 8-12h7z',
      stroke: 'currentColor',
      'stroke-width': '4',
      fill: 'none',
      'stroke-linejoin': 'round'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/tv-retro.js

Icon["a" /* default */].register({
  'tv-retro': {
    raw: '<g stroke="currentColor" stroke-width="4" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M2 14h44v32H2z"/><path class="fillColor" d="M8 20h24v20H8z"/><path d="M14 5l10 9L36 2m3 18v1m0 6v1"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/umbrella.js

Icon["a" /* default */].register({
  umbrella: {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path class="fillColor" d="M46 24a22 22 0 1 0-44 0h44z" stroke="currentColor" stroke-width="4"/><path d="M24 24v16a6 6 0 1 0 12 0" stroke="currentColor" stroke-width="4"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/umbrella2.js

Icon["a" /* default */].register({
  umbrella2: {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path class="fillColor" d="M16 28c2.67-2.67 5.33-4 8-4s5.33 1.33 8 4c3.11-2.67 5.44-4 7-4 1.56 0 3.89 1.33 7 4a22 22 0 1 0-44 0c3.11-2.67 5.44-4 7-4 1.56 0 3.89 1.33 7 4z" stroke="currentColor" stroke-width="4"/><path d="M24 24v16a6 6 0 1 0 12 0M24 2v4" stroke="currentColor" stroke-width="4"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/undo.js

Icon["a" /* default */].register({
  undo: {
    paths: [{
      d: 'M4.4 14a22 22 0 1 1 0 20M4 14V4',
      fill: 'none',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      stroke: 'currentColor',
      'stroke-width': '4'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/unlike.js

Icon["a" /* default */].register({
  unlike: {
    paths: [{
      d: 'M26 42.6a221 221 0 0 1-2 1.4c-4-2.67-7.33-5.33-10-8-4-4-12-11.37-12-20a12 12 0 0 1 22-6.64A11.99 11.99 0 0 1 46 16c0 3.21-1.1 6.25-2.7 9M31 39l9-9m-9 0l9 9',
      fill: 'none',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      stroke: 'currentColor',
      'stroke-width': '4'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/unlink.js

Icon["a" /* default */].register({
  unlink: {
    paths: [{
      d: 'M26.83 15.51l-10.6-10.6A8 8 0 1 0 4.9 16.22l10.6 10.6m16.99-5.65l10.6 10.6A8 8 0 1 1 31.78 43.1l-10.6-10.6m-.01-11.33l-5.66-5.66m16.98 16.98l-5.66-5.66',
      stroke: 'currentColor',
      'stroke-width': '4',
      fill: 'none',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/unlock.js

Icon["a" /* default */].register({
  unlock: {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><rect class="fillColor" stroke="currentColor" stroke-width="4" x="2" y="22" width="44" height="24" rx="4"/><circle class="innerStrokeColor" stroke="currentColor" stroke-width="4" cx="24" cy="32" r="2"/><path d="M35 8.06A13 13 0 0 0 11 15v7" stroke="currentColor" stroke-width="4"/><path class="innerStrokeColor" d="M24 38v-4" stroke="currentColor" stroke-width="4"/></g>',
    width: '48',
    height: '48'
  }
});
// EXTERNAL MODULE: ./node_modules/veui-theme-one-icons/upload.js
var upload = __webpack_require__(242);

// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/usb.js

Icon["a" /* default */].register({
  usb: {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path class="fillColor" d="M13 20a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm24 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" stroke="currentColor" stroke-width="4"/><path stroke="currentColor" stroke-width="4" d="M20 7l5-5 5 5m-5 32L13 27v-7m24 7v7L25 46m0-43v43"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/user-circle.js

Icon["a" /* default */].register({
  'user-circle': {
    raw: '<g stroke="currentColor" stroke-width="4" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><circle class="fillColor" cx="24" cy="24" r="22"/><circle class="innerFillColor innerStrokeColor" cx="24" cy="16" r="6"/><path class="innerStrokeColor" d="M7 38c3-5 9-10 17-10s14 5 17 10"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/user.js

Icon["a" /* default */].register({
  user: {
    raw: '<g class="fillColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke="currentColor" stroke-width="4"><circle cx="24" cy="13" r="11"/><path d="M46 46a22 22 0 1 0-44 0h44z"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/username.js

Icon["a" /* default */].register({
  username: {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><circle class="fillColor" stroke="currentColor" stroke-width="4" cx="24" cy="13" r="11"/><path d="M46 46a22 22 0 1 0-44 0" stroke="currentColor" stroke-width="4"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/van.js

Icon["a" /* default */].register({
  van: {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path class="innerFillColor" stroke="currentColor" stroke-width="4" d="M2 2h44v38H2z"/><path class="fillColor" stroke="currentColor" stroke-width="4" d="M8 28h32v12H8zm0-18h32v18H8zm0 30h6v6H8zm26 0h6v6h-6z"/><path class="innerStrokeColor" d="M21 16h6M14 34h2m16 0h2" stroke="currentColor" stroke-width="4"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/venus.js

Icon["a" /* default */].register({
  venus: {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><circle class="fillColor" stroke="currentColor" stroke-width="4" cx="24" cy="17" r="15"/><path d="M14 40h20m-10-8v14" stroke="currentColor" stroke-width="4"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/vial.js

Icon["a" /* default */].register({
  vial: {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path class="fillColor" d="M24 46a6 6 0 0 0 6-6V8H18v32a6 6 0 0 0 6 6z" stroke="currentColor" stroke-width="4"/><path d="M18 2h12" stroke="currentColor" stroke-width="4"/><path class="innerStrokeColor" d="M24 27v1m0-10v3m-5 14h11" stroke="currentColor" stroke-width="4"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/video.js

Icon["a" /* default */].register({
  video: {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><circle class="fillColor" stroke="currentColor" stroke-width="4" cx="24" cy="24" r="22"/><circle class="innerFillColor innerStrokeColor" stroke="currentColor" stroke-width="4" cx="24" cy="14" r="3"/><circle class="innerFillColor innerStrokeColor" stroke="currentColor" stroke-width="4" cx="24" cy="34" r="3"/><circle class="innerFillColor innerStrokeColor" stroke="currentColor" stroke-width="4" cx="14" cy="24" r="3"/><circle class="innerFillColor innerStrokeColor" stroke="currentColor" stroke-width="4" cx="34" cy="24" r="3"/><path d="M24 46h22" stroke="currentColor" stroke-width="4"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/view-list-grid.js

Icon["a" /* default */].register({
  'view-list-grid': {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><rect class="fillColor" stroke="currentColor" stroke-width="4" x="2" y="2" width="44" height="44" rx="4"/><path class="innerFillColor innerStrokeColor" stroke="currentColor" stroke-width="4" d="M10 10h10v10H10zm0 18h10v10H10z"/><path d="M28 10h10m-10 8h10M28 28h10m-10 8h10" stroke="currentColor" stroke-width="4"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/vip.js

Icon["a" /* default */].register({
  vip: {
    raw: '<g stroke="currentColor" stroke-width="4" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path class="fillColor" d="M10 2H2l11 44h8z"/><path d="M21 46L46 2"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/voice-message.js

Icon["a" /* default */].register({
  'voice-message': {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><circle class="fillColor" stroke="currentColor" stroke-width="4" cx="24" cy="24" r="22"/><path class="innerStrokeColor" d="M15 27.1a5.97 5.97 0 0 0 0-7.1m6 12.56a13.94 13.94 0 0 0 2.71-8.28c0-3.1-1-5.96-2.71-8.28m7 21.02a21.9 21.9 0 0 0 4.26-13A21.9 21.9 0 0 0 28 11" stroke="currentColor" stroke-width="4"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/voicemail.js

Icon["a" /* default */].register({
  voicemail: {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><circle class="fillColor" stroke="currentColor" stroke-width="4" cx="10" cy="24" r="8"/><circle class="fillColor" stroke="currentColor" stroke-width="4" cx="38" cy="24" r="8"/><path d="M10 32h28" stroke="currentColor" stroke-width="4"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/volume-down.js

Icon["a" /* default */].register({
  'volume-down': {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path class="fillColor" d="M24 2v44c-4 0-8.33-4-13-12H6a4 4 0 0 1-4-4V18a4 4 0 0 1 4-4h5c4.67-8 9-12 13-12z" stroke="currentColor" stroke-width="4"/><path d="M31 11.3a17.49 17.49 0 0 1 0 26.4" stroke="currentColor" stroke-width="4"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/volume-mute.js

Icon["a" /* default */].register({
  'volume-mute': {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path class="fillColor" d="M24 2v44c-4 0-8.33-4-13-12H6a4 4 0 0 1-4-4V18a4 4 0 0 1 4-4h5c4.67-8 9-12 13-12z" stroke="currentColor" stroke-width="4"/><path d="M34 18l12 12m0-12L34 30" stroke="currentColor" stroke-width="4"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/volume-up.js

Icon["a" /* default */].register({
  'volume-up': {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path class="fillColor" d="M24 2v44c-4 0-8.33-4-13-12H6a4 4 0 0 1-4-4V18a4 4 0 0 1 4-4h5c4.67-8 9-12 13-12z" stroke="currentColor" stroke-width="4"/><path d="M31 11.3a17.49 17.49 0 0 1 0 26.4m2-35.61a25.98 25.98 0 0 1 0 43.82" stroke="currentColor" stroke-width="4"/></g>',
    width: '47',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/vr-glasses.js

Icon["a" /* default */].register({
  'vr-glasses': {
    raw: '<g fill="none" fill-rule="evenodd"><path class="fillColor" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" d="M2 12h44v26H30l-6-10-6 10H2z"/><circle class="noStroke innerFillColor" cx="13" cy="24" r="4"/><circle class="noStroke innerFillColor" cx="35" cy="24" r="4"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/wallet.js

Icon["a" /* default */].register({
  wallet: {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path class="fillColor" stroke="currentColor" stroke-width="4" d="M2 10h44v36H2z"/><path class="innerFillColor innerStrokeColor" d="M36 34h10V22H36a6 6 0 1 0 0 12z" stroke="currentColor" stroke-width="4"/><path class="innerFillColor" stroke="currentColor" stroke-width="4" d="M16 10l19-8 3 8z"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/water-rate.js

Icon["a" /* default */].register({
  'water-rate': {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path class="fillColor" d="M24 46a16 16 0 0 0 16-16c0-8.67-5.33-18-16-28C13.33 12 8 21.33 8 30a16 16 0 0 0 16 16z" stroke="currentColor" stroke-width="4"/><path class="innerStrokeColor" stroke="currentColor" stroke-width="4" d="M24 22l-4 8h8l-4 8"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/waterfalls-h.js

Icon["a" /* default */].register({
  'waterfalls-h': {
    paths: [{
      class: 'fillColor',
      stroke: 'currentColor',
      'stroke-width': '4',
      d: 'M2 2h24v18H2zm20 26h24v18H22zM34 2h12v18H34zM2 28h12v18H2z',
      fill: 'none',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/waterfalls-v.js

Icon["a" /* default */].register({
  'waterfalls-v': {
    paths: [{
      class: 'fillColor',
      stroke: 'currentColor',
      'stroke-width': '4',
      d: 'M2 2h18v12H2zm26 32h18v12H28zm0-32h18v24H28zM2 22h18v24H2z',
      fill: 'none',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/webcam.js

Icon["a" /* default */].register({
  webcam: {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path class="fillColor" d="M7.9 31a22 22 0 0 0 32.2 0c3.66 3.93 5.9 9.2 5.9 15H2c0-5.8 2.24-11.07 5.9-15z" stroke="currentColor" stroke-width="4"/><circle class="fillColor" stroke="currentColor" stroke-width="4" cx="24" cy="16" r="14"/><circle class="innerStrokeColor innerFillColor" stroke="currentColor" stroke-width="4" cx="24" cy="16" r="6"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/weibo.js

Icon["a" /* default */].register({
  weibo: {
    paths: [{
      class: 'noStroke',
      d: 'M407 177.6c7.6-24-13.4-46.8-37.4-41.7-22 4.8-28.8-28.1-7.1-32.8 50.1-10.9 92.3 37.1 76.5 84.8-6.8 21.2-38.8 10.8-32-10.3zM214.8 446.7C108.5 446.7 0 395.3 0 310.4c0-44.3 28-95.4 76.3-143.7C176 67 279.5 65.8 249.9 161c-4 13.1 12.3 5.7 12.3 6 79.5-33.6 140.5-16.8 114 51.4-3.7 9.4 1.1 10.9 8.3 13.1 135.7 42.3 34.8 215.2-169.7 215.2zm143.7-146.3c-5.4-55.7-78.5-94-163.4-85.7-84.8 8.6-148.8 60.3-143.4 116s78.5 94 163.4 85.7c84.8-8.6 148.8-60.3 143.4-116zM347.9 35.1c-25.9 5.6-16.8 43.7 8.3 38.3 72.3-15.2 134.8 52.8 111.7 124-7.4 24.2 29.1 37 37.4 12 31.9-99.8-55.1-195.9-157.4-174.3zm-78.5 311c-17.1 38.8-66.8 60-109.1 46.3-40.8-13.1-58-53.4-40.3-89.7 17.7-35.4 63.1-55.4 103.4-45.1 42 10.8 63.1 50.2 46 88.5zm-86.3-30c-12.9-5.4-30 .3-38 12.9-8.3 12.9-4.3 28 8.6 34 13.1 6 30.8.3 39.1-12.9 8-13.1 3.7-28.3-9.7-34zm32.6-13.4c-5.1-1.7-11.4.6-14.3 5.4-2.9 5.1-1.4 10.6 3.7 12.9 5.1 2 11.7-.3 14.6-5.4 2.8-5.2 1.1-10.9-4-12.9z'
    }],
    width: 512,
    height: 512
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/weixin-f.js

Icon["a" /* default */].register({
  'weixin-f': {
    paths: [{
      class: 'noStroke',
      d: 'M372.3 167.6c6.4 0 12.6.3 18.8 1.1C374.4 90.3 290.3 32 194.7 32 87.6 32 0 104.8 0 197.4c0 53.4 29.3 97.5 77.9 131.6l-19.3 58.6 68-34.1c24.4 4.8 43.8 9.7 68.2 9.7 6.2 0 12.1-.3 18.3-.8-4-12.9-6.2-26.6-6.2-40.8-.1-84.9 73-154 165.4-154zm-104.5-52.9c14.5 0 24.2 9.7 24.2 24.4 0 14.5-9.7 24.2-24.2 24.2-14.8 0-29.3-9.7-29.3-24.2 0-14.7 14.5-24.4 29.3-24.4zm-136.5 48.6c-14.5 0-29.3-9.7-29.3-24.2 0-14.8 14.8-24.4 29.3-24.4 14.8 0 24.4 9.7 24.4 24.4.1 14.6-9.6 24.2-24.4 24.2zm418.8 156.1c0-77.9-77.9-141.3-165.4-141.3-92.7 0-165.4 63.4-165.4 141.3S292 460.7 384.6 460.7c19.3 0 38.9-5.1 58.6-9.9l53.4 29.3-14.8-48.6c39.3-29.4 68.3-68.3 68.3-112.1zm-219.2-24.5c-9.7 0-19.3-9.7-19.3-19.6 0-9.7 9.7-19.3 19.3-19.3 14.8 0 24.4 9.7 24.4 19.3 0 10-9.6 19.6-24.4 19.6zm107.2 0c-9.7 0-19.3-9.7-19.3-19.6 0-9.7 9.7-19.3 19.3-19.3 14.5 0 24.4 9.7 24.4 19.3 0 10-9.9 19.6-24.4 19.6z'
    }],
    width: 576,
    height: 512
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/weixin.js

Icon["a" /* default */].register({
  weixin: {
    paths: [{
      class: 'noStroke',
      d: 'M18.48 35a20.63 20.63 0 0 1-6.82-1.02l-5.63 2.51a2.5 2.5 0 0 1-3.71-2.76l.06-.19 1.61-4.48A14.92 14.92 0 0 1 0 19C0 10.1 8.11 3 18 3c8.37 0 15.6 5.12 17.5 12.26C42.6 16.52 48 22.16 48 29c0 2.56-.76 5-2.16 7.14l1.37 4.87a2.5 2.5 0 0 1-3.41 2.97l-4.98-2.2c-1.97.8-4.11 1.22-6.32 1.22-6.16 0-11.52-3.25-14.02-8zm-1.33-4.02c-.1-.65-.15-1.3-.15-1.98 0-7.4 6.3-13.37 14.22-13.95C29.31 10.35 24.1 7 18 7 10.21 7 4 12.44 4 19a11.1 11.1 0 0 0 3.67 8.1l.96.9-1.27 3.52 4.16-1.86.78.3a16 16 0 0 0 4.85 1.02zm24.2 4.48l.7-.89A9.04 9.04 0 0 0 44 29c0-5.47-5.1-10-11.5-10S21 23.53 21 29s5.1 10 11.5 10c1.94 0 3.8-.42 5.47-1.2l.83-.4 3.7 1.64-.63-2.23-.51-1.35zM11.78 16.2c-1.26 0-2.27-.94-2.27-2.1 0-1.16 1.01-2.1 2.27-2.1 1.25 0 2.26.94 2.26 2.1 0 1.16-1.01 2.1-2.26 2.1zm11 0c-1.26 0-2.27-.94-2.27-2.1 0-1.16 1.01-2.1 2.27-2.1 1.25 0 2.26.94 2.26 2.1 0 1.16-1.01 2.1-2.26 2.1zm4.84 12.6c-1.16 0-2.11-.85-2.11-1.9 0-1.05.95-1.9 2.11-1.9 1.17 0 2.11.85 2.11 1.9 0 1.05-.94 1.9-2.1 1.9zm9.5 0c-1.16 0-2.11-.85-2.11-1.9 0-1.05.95-1.9 2.11-1.9 1.17 0 2.11.85 2.11 1.9 0 1.05-.94 1.9-2.1 1.9z'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/wifi.js

Icon["a" /* default */].register({
  wifi: {
    raw: '<g fill="none" fill-rule="evenodd"><path d="M2 17.76a32 32 0 0 1 44 0m-6.44 7.8a22 22 0 0 0-31.12 0m24.53 6.93a12 12 0 0 0-16.97 0" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><circle class="noStroke fillColor" cx="24" cy="39" r="3"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/windmill.js

Icon["a" /* default */].register({
  windmill: {
    paths: [{
      class: 'fillColor',
      d: 'M24 24a11 11 0 0 0 0-22v22zm0 0h22a11 11 0 0 1-22 0zM2 24a11 11 0 0 1 22 0H2zm22 22a11 11 0 0 1 0-22v22z',
      stroke: 'currentColor',
      'stroke-width': '4',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      fill: 'none'
    }],
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/windows.js

Icon["a" /* default */].register({
  windows: {
    paths: [{
      class: 'noStroke',
      d: 'M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z'
    }],
    width: 448,
    height: 512
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/write.js

Icon["a" /* default */].register({
  write: {
    raw: '<g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M19 22H8c-3 0-6 2-6 6s3 6 6 6h32c3 0 6 2 6 6s-3 6-6 6H14" stroke="currentColor" stroke-width="4"/><path class="fillColor" stroke="currentColor" stroke-width="4" d="M28 20v-5L41 2l5 5-13 13z"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/yen-sign-circle.js

Icon["a" /* default */].register({
  'yen-sign-circle': {
    raw: '<g fill="none" fill-rule="evenodd"><circle class="fillColor" stroke="currentColor" stroke-width="4" cx="24" cy="24" r="22"/><path class="innerStrokeColor" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" d="M16 11l8 9 8-9m-17 9h18m-18 8h18m-9-8v18"/></g>',
    width: '48',
    height: '48'
  }
});
// CONCATENATED MODULE: ./node_modules/veui-theme-one-icons/index.js











































































































































































































































































































































































































































































































/***/ })

}]);