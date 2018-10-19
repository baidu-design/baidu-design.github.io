(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[95],{

/***/ 1362:
/***/ (function(module, exports, __webpack_require__) {

var baseInRange = __webpack_require__(1363),
    toFinite = __webpack_require__(228),
    toNumber = __webpack_require__(136);

/**
 * Checks if `n` is between `start` and up to, but not including, `end`. If
 * `end` is not specified, it's set to `start` with `start` then set to `0`.
 * If `start` is greater than `end` the params are swapped to support
 * negative ranges.
 *
 * @static
 * @memberOf _
 * @since 3.3.0
 * @category Number
 * @param {number} number The number to check.
 * @param {number} [start=0] The start of the range.
 * @param {number} end The end of the range.
 * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
 * @see _.range, _.rangeRight
 * @example
 *
 * _.inRange(3, 2, 4);
 * // => true
 *
 * _.inRange(4, 8);
 * // => true
 *
 * _.inRange(4, 2);
 * // => false
 *
 * _.inRange(2, 2);
 * // => false
 *
 * _.inRange(1.2, 2);
 * // => true
 *
 * _.inRange(5.2, 4);
 * // => false
 *
 * _.inRange(-3, -2, -6);
 * // => true
 */
function inRange(number, start, end) {
  start = toFinite(start);
  if (end === undefined) {
    end = start;
    start = 0;
  } else {
    end = toFinite(end);
  }
  number = toNumber(number);
  return baseInRange(number, start, end);
}

module.exports = inRange;


/***/ }),

/***/ 1363:
/***/ (function(module, exports) {

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * The base implementation of `_.inRange` which doesn't coerce arguments.
 *
 * @private
 * @param {number} number The number to check.
 * @param {number} start The start of the range.
 * @param {number} end The end of the range.
 * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
 */
function baseInRange(number, start, end) {
  return number >= nativeMin(start, end) && number < nativeMax(start, end);
}

module.exports = baseInRange;


/***/ }),

/***/ 1364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _vue_style_loader_index_js_ref_4_oneOf_1_0_css_loader_index_js_ref_4_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_4_oneOf_1_2_less_loader_dist_cjs_js_ref_4_oneOf_1_3_tabs_less_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(820);
/* harmony import */ var _vue_style_loader_index_js_ref_4_oneOf_1_0_css_loader_index_js_ref_4_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_4_oneOf_1_2_less_loader_dist_cjs_js_ref_4_oneOf_1_3_tabs_less_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_4_oneOf_1_0_css_loader_index_js_ref_4_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_4_oneOf_1_2_less_loader_dist_cjs_js_ref_4_oneOf_1_3_tabs_less_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_vue_style_loader_index_js_ref_4_oneOf_1_0_css_loader_index_js_ref_4_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_4_oneOf_1_2_less_loader_dist_cjs_js_ref_4_oneOf_1_3_tabs_less_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 1365:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, "/* Theme colors */\n/* Additional colors */\n/* Grayscale colors */\n/* Text colors */\n/* Link colors */\n/* Font settings */\n/* Metrics */\n/* Form widths */\n/* Transition duration */\n.veui-tabs {\n  overflow: hidden;\n  position: relative;\n}\n.veui-tabs-menu button {\n  background: none;\n  border: none;\n  padding: 0;\n}\n.veui-tabs-menu {\n  overflow: hidden;\n  white-space: nowrap;\n  min-height: 35px;\n}\n.veui-tabs-menu-moving {\n  transition: margin-right 0.5s ease-in-out;\n}\n.veui-tabs-menu::after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 34px;\n  width: 100%;\n  border-bottom: 1px solid #e7e7e7;\n}\n.veui-tabs-list {\n  overflow: hidden;\n  position: relative;\n  display: inline-block;\n  min-height: 36px;\n  max-width: 100%;\n  vertical-align: top;\n  z-index: 1;\n}\n.veui-tabs-list-wrapper {\n  display: inline-block;\n  padding: 0;\n  margin: 0;\n  transform: translate(0);\n}\n.veui-tabs-list-wrapper-moving {\n  transition: transform 0.5s ease-in-out;\n}\n.veui-tabs-item {\n  position: relative;\n  display: inline-block;\n  margin-left: 50px;\n  vertical-align: top;\n}\n.veui-tabs-item:first-child {\n  margin-left: 0;\n}\n.veui-tabs-item.veui-tabs-item-removable {\n  margin-left: 34px;\n}\n.veui-tabs-item.veui-tabs-item-removable:first-child {\n  margin-left: 0;\n}\n.veui-tabs-item.veui-tabs-item-removable .veui-tabs-item-status {\n  margin-right: 8px;\n}\n.veui-tabs-item:first-child .veui-tabs-item-label {\n  padding-left: 0;\n}\n.veui-tabs-item::after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: calc(100% - 1px);\n  background-color: #fff;\n  z-index: -1;\n}\n.veui-tabs-item > .veui-tabs-item-remove {\n  visibility: hidden;\n  color: #999;\n  cursor: pointer;\n  outline: none;\n}\n.veui-tabs-item > .veui-tabs-item-remove .veui-icon {\n  display: block;\n}\n.veui-tabs-item > .veui-tabs-item-remove::after {\n  content: none;\n}\n.veui-tabs-item > .veui-tabs-item-remove:hover,\n.veui-tabs-item > .veui-tabs-item-remove.focus-visible {\n  color: #666;\n}\n.veui-tabs-item > .veui-tabs-item-remove:active {\n  color: #333;\n}\n.veui-tabs-item-remove:focus,\n.veui-tabs-item:hover > .veui-tabs-item-remove,\n.veui-tabs-item-label.focus-visible > .veui-tabs-item-remove {\n  visibility: visible;\n}\n.veui-tabs-item > .veui-tabs-item-label {\n  padding: 0 10px;\n  line-height: 2.5;\n  display: inline-block;\n  text-decoration: none;\n  outline: none;\n  position: relative;\n}\n.veui-tabs-item:not(.veui-tabs-item-disabled) > .veui-tabs-item-label {\n  color: #333;\n}\n.veui-tabs-item:not(.veui-tabs-item-disabled) > .veui-tabs-item-label::after {\n  content: \"\";\n  position: absolute;\n  right: 10px;\n  bottom: 0;\n  left: 10px;\n  height: 2px;\n  transition: background-color 0.2s;\n}\n.veui-tabs-item:not(.veui-tabs-item-disabled) > .veui-tabs-item-label.focus-visible::after,\n.veui-tabs-item:not(.veui-tabs-item-disabled) > .veui-tabs-item-label:hover::after {\n  background-color: #999;\n}\n.veui-tabs-item:not(.veui-tabs-item-disabled) > .veui-tabs-item-label:active::after {\n  background-color: #333;\n}\n.veui-tabs-item:first-child:not(.veui-tabs-item-disabled) > .veui-tabs-item-label::after {\n  position: absolute;\n  right: 10px;\n  bottom: 0;\n  left: 0;\n}\n.veui-tabs-item-active > .veui-tabs-item-label::after {\n  background-color: #333;\n}\n.veui-tabs-item:first-child-label {\n  margin-left: -10px;\n}\n.veui-tabs-item-disabled > .veui-tabs-item-label {\n  cursor: not-allowed;\n  color: #999;\n}\n.veui-tabs-item-status {\n  display: inline-block;\n  width: 1em;\n  margin-right: 12px;\n  vertical-align: top;\n  cursor: pointer;\n}\n.veui-tabs-item-status-success {\n  color: #5bc49f;\n}\n.veui-tabs-item-status-warning {\n  color: #fe9700;\n}\n.veui-tabs-item-status-info {\n  color: #3998fc;\n}\n.veui-tabs-item-status-error {\n  color: #ff5b5b;\n}\n.veui-tabs-extra {\n  display: inline-block;\n  float: right;\n  position: absolute;\n  top: 0;\n}\n.veui-tabs-list-empty .veui-tabs-extra :first-child {\n  margin-left: 0;\n}\n.veui-tabs-extra-tip {\n  display: inline-block;\n  line-height: 2.5;\n  vertical-align: top;\n  color: #b8b8b8;\n}\n.veui-tabs-operator {\n  display: inline-block;\n  margin-left: 60px;\n  line-height: 2.5;\n  outline: none;\n  cursor: pointer;\n}\n.veui-tabs-operator .veui-icon {\n  margin-right: 6px;\n}\n.veui-tabs-operator[disabled],\n.veui-tabs-operator[disabled]:hover {\n  cursor: not-allowed;\n  color: #b8b8b8;\n}\n.veui-tabs-item-status .veui-icon,\n.veui-tabs-item-remove,\n.veui-tabs-operator .veui-icon {\n  vertical-align: top;\n  margin-top: calc(36px / 2 - .5em - 1px);\n  user-select: none;\n}\n.veui-tabs-scroller {\n  display: inline-block;\n  line-height: 2.5;\n  margin-left: 30px;\n}\n.veui-tabs-scroller-left,\n.veui-tabs-scroller-right {\n  display: inline-block;\n  width: 28px;\n  height: 28px;\n  background-color: #f7f7f7;\n  text-align: center;\n  cursor: pointer;\n  user-select: none;\n  outline: none;\n}\n.veui-tabs-scroller-left:hover,\n.veui-tabs-scroller-right:hover,\n.veui-tabs-scroller-left.focus-visible,\n.veui-tabs-scroller-right.focus-visible {\n  background-color: #dbdbdb;\n}\n.veui-tabs-scroller-left:active,\n.veui-tabs-scroller-right:active {\n  background-color: #999;\n}\n.veui-tabs-scroller-left[disabled],\n.veui-tabs-scroller-right[disabled] {\n  background-color: #fff;\n  color: #999;\n  cursor: not-allowed;\n}\n.veui-tabs-scroller-right {\n  margin-left: 8px;\n}\n.veui-tabs[ui~=\"large\"] {\n  font-size: 16px;\n}\n.veui-tabs[ui~=\"large\"] .veui-tabs-menu::after {\n  top: 39px;\n}\n.veui-tabs[ui~=\"large\"] .veui-tabs-menu,\n.veui-tabs[ui~=\"large\"] .veui-tabs-list {\n  min-height: 40px;\n}\n.veui-tabs[ui~=\"large\"] .veui-tabs-operator {\n  padding: 0 10px;\n}\n.veui-tabs[ui~=\"large\"] .veui-tabs-item-status .veui-icon,\n.veui-tabs[ui~=\"large\"] .veui-tabs-item-remove,\n.veui-tabs[ui~=\"large\"] .veui-tabs-operator .veui-icon {\n  margin-top: calc(42px / 2 - .5em - 1px);\n}\n.veui-tabs[ui~=\"large\"] .veui-tabs-scroller-left,\n.veui-tabs[ui~=\"large\"] .veui-tabs-scroller-right {\n  width: 32px;\n  height: 32px;\n}\n.veui-tabs[ui~=\"large\"] .veui-tabs-scroller-left .veui-icon,\n.veui-tabs[ui~=\"large\"] .veui-tabs-scroller-right .veui-icon {\n  font-size: 14px;\n  vertical-align: text-top;\n}\n.veui-tabs[ui~=\"small\"] .veui-tabs-item {\n  margin-left: 30px;\n}\n.veui-tabs[ui~=\"small\"] .veui-tabs-item:first-child {\n  margin-left: 0;\n}\n.veui-tabs[ui~=\"small\"] .veui-tabs-menu::after {\n  display: none;\n}\n.veui-tabs[ui~=\"tiny\"] .veui-tabs-menu::after {\n  display: none;\n}\n.veui-tabs[ui~=\"tiny\"] .veui-tabs-item {\n  margin-left: 21px;\n  position: relative;\n}\n.veui-tabs[ui~=\"tiny\"] .veui-tabs-item:first-child {\n  margin-left: 0;\n}\n.veui-tabs[ui~=\"tiny\"] .veui-tabs-item-label::after {\n  height: 1px;\n}\n.veui-tabs[ui~=\"tiny\"] .veui-tabs-item::before {\n  content: \"\";\n  display: inline-block;\n  width: 1px;\n  height: 14px;\n  background-color: #e7e7e7;\n  position: absolute;\n  top: 10px;\n  left: -11px;\n}\n.veui-tabs[ui~=\"tiny\"] .veui-tabs-item:first-child::before {\n  display: none;\n}\n.veui-tabs[ui~=\"block\"] .veui-tabs-menu::after {\n  display: none;\n}\n.veui-tabs[ui~=\"block\"] .veui-tabs-list {\n  height: 36px\\9\\0;\n  border: 1px solid #e7e7e7;\n}\n.veui-tabs-list-empty.veui-tabs[ui~=\"block\"] .veui-tabs-list {\n  border-width: 1px 0 1px 1px;\n}\n.veui-tabs[ui~=\"block\"] .veui-tabs-item {\n  overflow: hidden;\n  margin-left: 0;\n  border: 1px solid #e7e7e7;\n  border-width: 0 0 0 1px;\n  background-color: #fff;\n  cursor: pointer;\n}\n.veui-tabs[ui~=\"block\"] .veui-tabs-item:first-child {\n  margin-left: 0;\n}\n.veui-tabs[ui~=\"block\"] .veui-tabs-item.veui-tabs-item-removable {\n  padding-right: 12px;\n  padding-right: 0\\9\\0;\n}\n.veui-tabs[ui~=\"block\"] .veui-tabs-item-moving.veui-tabs-item-removable,\n.veui-tabs[ui~=\"block\"] .veui-tabs-item.veui-tab-leave-active {\n  transition: width 0.5s ease-in-out, transform 0.5s ease-in-out, padding-right 0.5s;\n}\n.veui-tabs[ui~=\"block\"] .veui-tabs-item.veui-tab-leave-active {\n  z-index: -1;\n}\n.veui-tabs[ui~=\"block\"] .veui-tabs-item::after {\n  display: none;\n}\n.veui-tabs[ui~=\"block\"] .veui-tabs-item:first-child {\n  border-left-width: 0;\n  margin-left: 0;\n}\n.veui-tabs[ui~=\"block\"] .veui-tabs-item-label {\n  min-width: 62px;\n  max-width: 160px;\n  line-height: 34px;\n  padding: 0 8px 0 12px;\n  overflow: hidden;\n  -o-text-overflow: ellipsis;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  text-align: left;\n}\n.veui-tabs[ui~=\"block\"] .veui-tabs-item-label::after {\n  display: none;\n}\n.veui-tabs[ui~=\"block\"] .veui-tabs-item.focus-visible,\n.veui-tabs[ui~=\"block\"] .veui-tabs-item:hover {\n  background-color: #f7f7f7;\n}\n.veui-tabs[ui~=\"block\"] .veui-tabs-item:active {\n  background-color: #e7e7e7;\n}\n.veui-tabs[ui~=\"block\"] .veui-tabs-item.veui-tabs-item-removable > .veui-tabs-item-label {\n  padding-right: 8px;\n}\n.veui-tabs[ui~=\"block\"] .veui-tabs-item.veui-tabs-item-disabled {\n  background-color: #fff;\n  color: #b8b8b8;\n}\n.veui-tabs[ui~=\"block\"] .veui-tabs-item.veui-tabs-item-active {\n  background-color: #e7e7e7;\n}\n.veui-tabs[ui~=\"block\"] .veui-tabs-item-status .veui-icon,\n.veui-tabs[ui~=\"block\"] .veui-tabs-item-remove,\n.veui-tabs[ui~=\"block\"] .veui-tabs-operator .veui-icon,\n.veui-tabs[ui~=\"block\"] .veui-tabs-scroller .veui-icon {\n  margin-top: calc(34px / 2 - .5em);\n  vertical-align: top;\n}\n.veui-tabs[ui~=\"block\"] .veui-tabs-extra {\n  border-bottom: none;\n  vertical-align: top;\n}\n.veui-tabs-addable.veui-tabs[ui~=\"block\"] .veui-tabs-extra::before {\n  content: \"\";\n  position: absolute;\n  left: -1px;\n  height: 100%;\n  border-left: 1px solid #e7e7e7;\n  z-index: 1;\n}\n.veui-tabs[ui~=\"block\"] .veui-tabs-extra-label {\n  display: none;\n}\n.veui-tabs[ui~=\"block\"] .veui-tabs-operator {\n  margin-left: 0;\n  margin-right: 20px;\n  width: 36px;\n  line-height: 34px;\n  border: 1px solid #e7e7e7;\n  border-width: 1px 1px 1px 0;\n  text-align: center;\n  vertical-align: top;\n}\n.veui-tabs[ui~=\"block\"] .veui-tabs-operator .veui-icon {\n  margin-right: 0;\n}\n.veui-tabs[ui~=\"block\"] .veui-tabs-scroller {\n  line-height: 34px;\n}\n.veui-tabs[ui~=\"block\"] .veui-tabs-scroller-left,\n.veui-tabs[ui~=\"block\"] .veui-tabs-scroller-right {\n  width: 36px;\n  height: 36px;\n  border: 1px solid #e7e7e7;\n  background-color: #fff;\n}\n.veui-tabs[ui~=\"block\"] .veui-tabs-scroller-left:hover,\n.veui-tabs[ui~=\"block\"] .veui-tabs-scroller-right:hover,\n.veui-tabs[ui~=\"block\"] .veui-tabs-scroller-left.focus-visible,\n.veui-tabs[ui~=\"block\"] .veui-tabs-scroller-right.focus-visible {\n  background-color: #f7f7f7;\n}\n.veui-tabs[ui~=\"block\"] .veui-tabs-scroller-left:active,\n.veui-tabs[ui~=\"block\"] .veui-tabs-scroller-right:active {\n  background-color: #e7e7e7;\n}\n.veui-tabs[ui~=\"block\"] .veui-tabs-scroller-left[disabled],\n.veui-tabs[ui~=\"block\"] .veui-tabs-scroller-right[disabled] {\n  color: #b8b8b8;\n  background-color: #fff;\n}\n.veui-tabs[ui~=\"large\"][ui~=\"block\"] .veui-tabs-item-label {\n  line-height: 38px;\n}\n.veui-tabs[ui~=\"large\"][ui~=\"block\"] .veui-tabs-item-status .veui-icon,\n.veui-tabs[ui~=\"large\"][ui~=\"block\"] .veui-tabs-item-remove,\n.veui-tabs[ui~=\"large\"][ui~=\"block\"] .veui-tabs-operator .veui-icon,\n.veui-tabs[ui~=\"large\"][ui~=\"block\"] .veui-tabs-scroller .veui-icon {\n  margin-top: calc(38px / 2 - .5em);\n  vertical-align: top;\n}\n.veui-tabs[ui~=\"large\"][ui~=\"block\"] .veui-tabs-operator {\n  width: 40px;\n  line-height: 38px;\n}\n.veui-tabs[ui~=\"large\"][ui~=\"block\"] .veui-tabs-scroller {\n  line-height: 38px;\n}\n.veui-tabs[ui~=\"large\"][ui~=\"block\"] .veui-tabs-scroller-left,\n.veui-tabs[ui~=\"large\"][ui~=\"block\"] .veui-tabs-scroller-right {\n  width: 40px;\n  height: 40px;\n}\n", ""]);

// exports


/***/ }),

/***/ 391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(31);
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_pickBy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(409);
/* harmony import */ var lodash_pickBy__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_pickBy__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(17);
/* harmony import */ var lodash_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(410);
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_merge__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(41);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(40);
/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash_includes__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(54);
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash_find__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var lodash_uniq__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(117);
/* harmony import */ var lodash_uniq__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash_uniq__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var lodash_compact__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(122);
/* harmony import */ var lodash_compact__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash_compact__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(115);
/* harmony import */ var _utils_warn__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(403);
/* harmony import */ var _managers_config__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(390);















/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    ui: String
  },
  computed: {
    uiParts: function uiParts() {
      return this.getComponentConfig('parts') || {};
    },
    uiProps: function uiProps() {
      var _this = this;

      var ui = (this.ui || '').trim();

      var tokens = lodash_compact__WEBPACK_IMPORTED_MODULE_11___default()(lodash_uniq__WEBPACK_IMPORTED_MODULE_10___default()(ui.split(/\s+/)));

      var _this$uiConfig = this.uiConfig,
          uiConfig = _this$uiConfig === void 0 ? {} : _this$uiConfig;
      return tokens.reduce(function (result, token) {
        var name = lodash_find__WEBPACK_IMPORTED_MODULE_9___default()(lodash_keys__WEBPACK_IMPORTED_MODULE_5___default()(uiConfig), function (name) {
          var _uiConfig$name = uiConfig[name],
              _uiConfig$name$boolea = _uiConfig$name.boolean,
              boolean = _uiConfig$name$boolea === void 0 ? false : _uiConfig$name$boolea,
              _uiConfig$name$values = _uiConfig$name.values,
              values = _uiConfig$name$values === void 0 ? [] : _uiConfig$name$values;

          if (boolean) {
            return token === name;
          }

          return lodash_includes__WEBPACK_IMPORTED_MODULE_8___default()(values, token);
        });

        if (name) {
          if (result[name] && result[name] !== 'default') {
            Object(_utils_warn__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"])("[".concat(_this.$options.name, "] Duplicated `").concat(name, "` value for `ui`: [").concat(result[name], "], [").concat(token, "]."));
          }

          var boolean = uiConfig[name].boolean;

          if (boolean) {
            result[name] = true;
          } else {
            result[name] = token;
          }
        }

        return result;
      }, lodash_keys__WEBPACK_IMPORTED_MODULE_5___default()(uiConfig).reduce(function (result, name) {
        var prop = uiConfig[name];

        if (prop.boolean) {
          result[name] = false;
        } else {
          result[name] = prop.default || 'default';
        }

        return result;
      }, {}));
    },
    uiConfig: function uiConfig() {
      return this.getComponentConfig('ui');
    },
    uiData: function uiData() {
      var _this$uiConfig2 = this.uiConfig,
          uiConfig = _this$uiConfig2 === void 0 ? {} : _this$uiConfig2,
          uiProps = this.uiProps;
      return lodash_keys__WEBPACK_IMPORTED_MODULE_5___default()(uiProps).reduce(function (result, name) {
        var data = lodash_get__WEBPACK_IMPORTED_MODULE_7___default()(uiConfig[name], ['data', uiProps[name]], {});

        lodash_merge__WEBPACK_IMPORTED_MODULE_6___default()(result, data);

        return result;
      }, {});
    },
    icons: function icons() {
      var icons = this.getComponentConfig('icons');
      var uiIcons = this.uiData.icons || {};
      return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, icons, uiIcons);
    },
    inheritedUiProps: function inheritedUiProps() {
      var _this2 = this;

      if (!this.uiConfig) {
        return this.ui;
      }

      return lodash_pickBy__WEBPACK_IMPORTED_MODULE_4___default()(this.uiProps, function (val, key) {
        var uiProp = _this2.uiConfig[key];
        return !!uiProp.inherit;
      });
    },
    realUi: function realUi() {
      // merge ui & $parent's inheritedUi
      var _this$uiProps = this.uiProps,
          uiProps = _this$uiProps === void 0 ? {} : _this$uiProps;

      var overrides = lodash_pickBy__WEBPACK_IMPORTED_MODULE_4___default()(uiProps, function (val, key) {
        return val !== 'default' || val === true;
      });

      var _ref = this.$parent || {},
          _ref$inheritedUiProps = _ref.inheritedUiProps,
          inheritedUiProps = _ref$inheritedUiProps === void 0 ? {} : _ref$inheritedUiProps;

      var props = _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, inheritedUiProps, overrides);

      return lodash_keys__WEBPACK_IMPORTED_MODULE_5___default()(props).map(function (key) {
        if (props[key] === true) {
          return key;
        }

        return props[key];
      }).filter(function (val) {
        return val !== 'default';
      }).join(' ') || null;
    }
  },
  methods: {
    getComponentConfig: function getComponentConfig(key) {
      return _managers_config__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].get("".concat(Object(_utils_helper__WEBPACK_IMPORTED_MODULE_12__[/* getConfigKey */ "b"])(this.$options.name), ".").concat(key));
    }
  }
});

/***/ }),

/***/ 400:
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(118),
    eq = __webpack_require__(56);

/**
 * This function is like `assignValue` except that it doesn't assign
 * `undefined` values.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignMergeValue(object, key, value) {
  if ((value !== undefined && !eq(object[key], value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignMergeValue;


/***/ }),

/***/ 401:
/***/ (function(module, exports) {

/**
 * Gets the value at `key`, unless `key` is "__proto__".
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function safeGet(object, key) {
  return key == '__proto__'
    ? undefined
    : object[key];
}

module.exports = safeGet;


/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return warn; });
function warn() {
  if (console && console.warn) {
    for (var _len = arguments.length, messages = new Array(_len), _key = 0; _key < _len; _key++) {
      messages[_key] = arguments[_key];
    }

    Function.prototype.apply.call(console.warn, console, messages);
  }
}

/***/ }),

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_uniq__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(117);
/* harmony import */ var lodash_uniq__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_uniq__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);




vue__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].config.optionMergeStrategies.uiTypes = function () {
  var toVal = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var fromVal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  return lodash_uniq__WEBPACK_IMPORTED_MODULE_1___default()(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(toVal).concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(fromVal)));
};

/***/ }),

/***/ 409:
/***/ (function(module, exports, __webpack_require__) {

var arrayMap = __webpack_require__(116),
    baseIteratee = __webpack_require__(55),
    basePickBy = __webpack_require__(192),
    getAllKeysIn = __webpack_require__(414);

/**
 * Creates an object composed of the `object` properties `predicate` returns
 * truthy for. The predicate is invoked with two arguments: (value, key).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The source object.
 * @param {Function} [predicate=_.identity] The function invoked per property.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.pickBy(object, _.isNumber);
 * // => { 'a': 1, 'c': 3 }
 */
function pickBy(object, predicate) {
  if (object == null) {
    return {};
  }
  var props = arrayMap(getAllKeysIn(object), function(prop) {
    return [prop];
  });
  predicate = baseIteratee(predicate);
  return basePickBy(object, props, function(value, path) {
    return predicate(value, path[0]);
  });
}

module.exports = pickBy;


/***/ }),

/***/ 410:
/***/ (function(module, exports, __webpack_require__) {

var baseMerge = __webpack_require__(411),
    createAssigner = __webpack_require__(194);

/**
 * This method is like `_.assign` except that it recursively merges own and
 * inherited enumerable string keyed properties of source objects into the
 * destination object. Source properties that resolve to `undefined` are
 * skipped if a destination value exists. Array and plain object properties
 * are merged recursively. Other objects and value types are overridden by
 * assignment. Source objects are applied from left to right. Subsequent
 * sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 0.5.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = {
 *   'a': [{ 'b': 2 }, { 'd': 4 }]
 * };
 *
 * var other = {
 *   'a': [{ 'c': 3 }, { 'e': 5 }]
 * };
 *
 * _.merge(object, other);
 * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
 */
var merge = createAssigner(function(object, source, srcIndex) {
  baseMerge(object, source, srcIndex);
});

module.exports = merge;


/***/ }),

/***/ 411:
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(120),
    assignMergeValue = __webpack_require__(400),
    baseFor = __webpack_require__(193),
    baseMergeDeep = __webpack_require__(412),
    isObject = __webpack_require__(10),
    keysIn = __webpack_require__(408),
    safeGet = __webpack_require__(401);

/**
 * The base implementation of `_.merge` without support for multiple sources.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} [customizer] The function to customize merged values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMerge(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }
  baseFor(source, function(srcValue, key) {
    if (isObject(srcValue)) {
      stack || (stack = new Stack);
      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
    }
    else {
      var newValue = customizer
        ? customizer(safeGet(object, key), srcValue, (key + ''), object, source, stack)
        : undefined;

      if (newValue === undefined) {
        newValue = srcValue;
      }
      assignMergeValue(object, key, newValue);
    }
  }, keysIn);
}

module.exports = baseMerge;


/***/ }),

/***/ 412:
/***/ (function(module, exports, __webpack_require__) {

var assignMergeValue = __webpack_require__(400),
    cloneBuffer = __webpack_require__(426),
    cloneTypedArray = __webpack_require__(427),
    copyArray = __webpack_require__(424),
    initCloneObject = __webpack_require__(428),
    isArguments = __webpack_require__(90),
    isArray = __webpack_require__(7),
    isArrayLikeObject = __webpack_require__(418),
    isBuffer = __webpack_require__(119),
    isFunction = __webpack_require__(42),
    isObject = __webpack_require__(10),
    isPlainObject = __webpack_require__(415),
    isTypedArray = __webpack_require__(121),
    safeGet = __webpack_require__(401),
    toPlainObject = __webpack_require__(413);

/**
 * A specialized version of `baseMerge` for arrays and objects which performs
 * deep merges and tracks traversed objects enabling objects with circular
 * references to be merged.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {string} key The key of the value to merge.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} mergeFunc The function to merge values.
 * @param {Function} [customizer] The function to customize assigned values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = safeGet(object, key),
      srcValue = safeGet(source, key),
      stacked = stack.get(srcValue);

  if (stacked) {
    assignMergeValue(object, key, stacked);
    return;
  }
  var newValue = customizer
    ? customizer(objValue, srcValue, (key + ''), object, source, stack)
    : undefined;

  var isCommon = newValue === undefined;

  if (isCommon) {
    var isArr = isArray(srcValue),
        isBuff = !isArr && isBuffer(srcValue),
        isTyped = !isArr && !isBuff && isTypedArray(srcValue);

    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if (isArray(objValue)) {
        newValue = objValue;
      }
      else if (isArrayLikeObject(objValue)) {
        newValue = copyArray(objValue);
      }
      else if (isBuff) {
        isCommon = false;
        newValue = cloneBuffer(srcValue, true);
      }
      else if (isTyped) {
        isCommon = false;
        newValue = cloneTypedArray(srcValue, true);
      }
      else {
        newValue = [];
      }
    }
    else if (isPlainObject(srcValue) || isArguments(srcValue)) {
      newValue = objValue;
      if (isArguments(objValue)) {
        newValue = toPlainObject(objValue);
      }
      else if (!isObject(objValue) || (srcIndex && isFunction(objValue))) {
        newValue = initCloneObject(srcValue);
      }
    }
    else {
      isCommon = false;
    }
  }
  if (isCommon) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack['delete'](srcValue);
  }
  assignMergeValue(object, key, newValue);
}

module.exports = baseMergeDeep;


/***/ }),

/***/ 413:
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(191),
    keysIn = __webpack_require__(408);

/**
 * Converts `value` to a plain object flattening inherited enumerable string
 * keyed properties of `value` to own properties of the plain object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Object} Returns the converted plain object.
 * @example
 *
 * function Foo() {
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.assign({ 'a': 1 }, new Foo);
 * // => { 'a': 1, 'b': 2 }
 *
 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
 * // => { 'a': 1, 'b': 2, 'c': 3 }
 */
function toPlainObject(value) {
  return copyObject(value, keysIn(value));
}

module.exports = toPlainObject;


/***/ }),

/***/ 437:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var veui_components_Icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53);

veui_components_Icon__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].register({
  "exclamation-circle-o": {
    "width": "16",
    "height": "16",
    "paths": [{
      "d": "M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM7 9.13v-5h2v5H7zm1 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
    }]
  }
});

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

/***/ 449:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var veui_components_Icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53);

veui_components_Icon__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].register({
  "check-circle-o": {
    "width": "16",
    "height": "16",
    "paths": [{
      "d": "M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm-.93-5L4.5 8.19l.98-1.06 1.59 1.75L10.47 5l1.03 1.08L7.07 11z"
    }]
  }
});

/***/ }),

/***/ 450:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var veui_components_Icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53);

veui_components_Icon__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].register({
  "info-circle-o": {
    "width": "16",
    "height": "16",
    "paths": [{
      "d": "M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zm0-1a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM7 6.87v5h2v-5H7zm1-1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
    }]
  }
});

/***/ }),

/***/ 451:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var veui_components_Icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53);

veui_components_Icon__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].register({
  "cross-circle-o": {
    "width": "16",
    "height": "16",
    "paths": [{
      "d": "M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zm0-1a8 8 0 1 1 0 16A8 8 0 0 1 8 0zm3.17 4l.83.83L4.83 12 4 11.17 11.17 4zM4.83 4L12 11.17l-.83.83L4 4.83 4.83 4z"
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

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var veui_components_Icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53);

veui_components_Icon__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].register({
  "angle-left": {
    "width": "14",
    "height": "14",
    "paths": [{
      "d": "M3.16 7.13l-.47-.47L8.34 1l.95.94-4.72 4.72 4.72 4.71-.95.94-5.18-5.18z",
      "fill-rule": "evenodd"
    }]
  }
});

/***/ }),

/***/ 481:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/veui-loader/lib??ref--11!./node_modules/veui/components/Link.vue?vue&type=template&id=1eacfdea&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (!_vm.to)?_c(_vm.fallback,{tag:"component",class:_vm.klass,attrs:{"ui":_vm.realUi,"aria-disabled":String(_vm.disabled)},on:{"click":_vm.handleRedirect}},[_vm._t("default")],2):(_vm.$router && !_vm.native)?_c('router-link',{class:_vm.klass,attrs:{"to":_vm.to,"ui":_vm.realUi,"aria-disabled":String(_vm.disabled),"replace":_vm.replace}},[_vm._t("default")],2):_c('a',{class:_vm.klass,attrs:{"href":_vm.to,"ui":_vm.realUi,"aria-disabled":String(_vm.disabled)},on:{"click":_vm.handleRedirect}},[_vm._t("default")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/veui/components/Link.vue?vue&type=template&id=1eacfdea&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.replace.js
var es6_regexp_replace = __webpack_require__(46);

// EXTERNAL MODULE: ./node_modules/veui/mixins/ui.js
var ui = __webpack_require__(391);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/veui-loader/lib??ref--11!./node_modules/veui/components/Link.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Linkvue_type_script_lang_js_ = ({
  name: 'veui-link',
  mixins: [ui["a" /* default */]],
  props: {
    to: {
      type: [String, Object],
      default: ''
    },
    replace: Boolean,
    native: Boolean,
    fallback: {
      type: String,
      default: 'span'
    },
    disabled: Boolean
  },
  computed: {
    klass: function klass() {
      return {
        'veui-link': true,
        'veui-disabled': this.disabled
      };
    }
  },
  methods: {
    handleRedirect: function handleRedirect(event) {
      if (this.disabled) {
        event.preventDefault();
        return;
      }

      if (this.to) {
        this.$emit('click', event);

        if (this.replace && !event.defaultPrevented) {
          event.preventDefault();
          location.replace(this.to);
        }
      } else {
        event.preventDefault();
        this.$emit('click', event);
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/veui/components/Link.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Linkvue_type_script_lang_js_ = (Linkvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/veui/components/Link.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Linkvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "Link.vue"
/* harmony default export */ var Link = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 486:
/***/ (function(module, exports, __webpack_require__) {

var debounce = __webpack_require__(132),
    isObject = __webpack_require__(10);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

module.exports = throttle;


/***/ }),

/***/ 564:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var veui_components_Icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53);

veui_components_Icon__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].register({
  "plus-circle-o": {
    "width": "48",
    "height": "48",
    "paths": [{
      "d": "M24 48a24 24 0 1 1 0-48 24 24 0 0 1 0 48zm0-4a20 20 0 1 0 0-40 20 20 0 0 0 0 40z"
    }, {
      "d": "M15 25.5h19a2 2 0 1 0 0-4H15a2 2 0 1 0 0 4z"
    }, {
      "d": "M22.5 14v19a2 2 0 1 0 4 0V14a2 2 0 1 0-4 0z"
    }]
  }
});

/***/ }),

/***/ 573:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var veui_components_Icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53);

veui_components_Icon__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].register({
  "plus-huge": {
    "width": "50",
    "height": "50",
    "paths": [{
      "d": "M24 24H0v2h24v24h2V26h24v-2H26V0h-2v24z",
      "fill-rule": "evenodd"
    }]
  }
});

/***/ }),

/***/ 580:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/veui-loader/lib??ref--11!./node_modules/veui/components/Tabs/Tabs.vue?vue&type=template&id=27781f0c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"resize",rawName:"v-resize.debounce",value:(_vm.listResizeHandler),expression:"listResizeHandler",modifiers:{"debounce":true}}],staticClass:"veui-tabs",class:{
    'veui-tabs-overflow': _vm.menuOverflow,
    'veui-tabs-addable': _vm.addable,
    'veui-tabs-list-empty': _vm.items.length === 0,
    'veui-tabs-left-limited': _vm.leftLimited,
    'veui-tabs-right-limited': _vm.rightLimited
  },attrs:{"ui":_vm.realUi}},[_c('div',{ref:"menu",class:{
      'veui-tabs-menu': true,
      'veui-tabs-menu-moving': _vm.menuMoving
    },attrs:{"role":"tablist"}},[_c('div',{staticClass:"veui-tabs-list"},[_c('transition-group',{ref:"listContainer",class:{
          'veui-tabs-list-wrapper': true,
          'veui-tabs-list-wrapper-moving': _vm.conMoving
        },attrs:{"tag":"div","name":"veui-tab"},on:{"before-leave":_vm.beforeLeave,"leave":_vm.leave,"after-leave":_vm.afterLeave}},_vm._l((_vm.items),function(tab,index){return _c('div',{key:tab.name,ref:("tab-" + (tab.name)),refInFor:true,class:{
            'veui-tabs-item': true,
            'veui-tabs-item-disabled': tab.disabled,
            'veui-tabs-item-removable': tab.removable,
            'veui-tabs-item-active': index === _vm.localIndex,
            'veui-tabs-item-moving': _vm.itemMoving
          },attrs:{"data-index":index},on:{"click":function ($event) {
            if ($event.target === _vm.$refs[("tab-" + (tab.name))][0] && !tab.disabled) {
              _vm.setActive({ index: index })
            }
          }}},[_vm._t("tab-item",[(tab.to)?_c('veui-link',_vm._b({staticClass:"veui-tabs-item-label",attrs:{"to":tab.to,"native":tab.native}},'veui-link',_vm.ariaAttrs[index],false),[_vm._v("\n              "+_vm._s(tab.label)+"\n            ")]):_c('button',_vm._b({staticClass:"veui-tabs-item-label",attrs:{"type":"button"},on:{"click":function($event){!tab.disabled && _vm.setActive({ index: index })}}},'button',_vm.ariaAttrs[index],false),[_vm._v(_vm._s(tab.label))]),_vm._v(" "),_vm._t("tab-item-status",[(tab.status)?_c('span',{staticClass:"veui-tabs-item-status",on:{"click":function($event){!tab.disabled && _vm.setActive({ index: index })}}},[_c('veui-icon',{class:("veui-tabs-item-status-" + (tab.status)),attrs:{"name":_vm.icons[tab.status]}})],1):_vm._e()],{index:index},tab),_vm._v(" "),_vm._t("tab-item-extra",[(tab.removable)?_c('button',{staticClass:"veui-tabs-item-remove",attrs:{"type":"button","aria-label":"删除","disabled":_vm.removing},on:{"click":function($event){_vm.$emit('remove', tab)}}},[_c('veui-icon',{attrs:{"name":_vm.icons.remove}})],1):_vm._e()],{index:index},tab)],{index:index},tab)],2)}))],1),_vm._v(" "),_vm._t("tabs-extra",[_c('div',{ref:"extra",staticClass:"veui-tabs-extra"},[(_vm.addable)?_c('button',{staticClass:"veui-tabs-operator",attrs:{"type":"button","aria-label":"添加","disabled":_vm.max != null && _vm.items.length >= _vm.max || _vm.removing},on:{"click":function($event){_vm.$emit('add')}}},[_c('veui-icon',{attrs:{"name":_vm.icons.add}}),_vm._v(" "),_vm._t("tabs-extra-label",[_c('span',{staticClass:"veui-tabs-extra-label"},[_vm._v("添加 Tab")])])],2):_vm._e(),_vm._v(" "),_vm._t("tabs-extra-tip",[(_vm.tip)?_c('span',{staticClass:"veui-tabs-extra-tip"},[_vm._v(_vm._s(_vm.tip))]):_vm._e()]),_vm._v(" "),(_vm.menuOverflow)?_c('div',{ref:"scroller",staticClass:"veui-tabs-scroller",attrs:{"aria-hidden":"true"}},[_c('button',{staticClass:"veui-tabs-scroller-left",attrs:{"type":"button","disabled":_vm.leftLimited},on:{"click":function($event){_vm.scroll({ direction: 'left' })}}},[_c('veui-icon',{attrs:{"name":_vm.icons.prev}})],1),_vm._v(" "),_c('button',{staticClass:"veui-tabs-scroller-right",attrs:{"type":"button","disabled":_vm.rightLimited},on:{"click":function($event){_vm.scroll({ direction: 'right' })}}},[_c('veui-icon',{attrs:{"name":_vm.icons.next}})],1)]):_vm._e()],2)])],2),_vm._v(" "),_vm._t("default")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/veui/components/Tabs/Tabs.vue?vue&type=template&id=27781f0c&

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(2);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.split.js
var es6_regexp_split = __webpack_require__(31);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.function.name.js
var es6_function_name = __webpack_require__(32);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.number.constructor.js
var es6_number_constructor = __webpack_require__(89);

// EXTERNAL MODULE: ./node_modules/lodash/inRange.js
var inRange = __webpack_require__(1362);
var inRange_default = /*#__PURE__*/__webpack_require__.n(inRange);

// EXTERNAL MODULE: ./node_modules/lodash/assign.js
var lodash_assign = __webpack_require__(92);
var assign_default = /*#__PURE__*/__webpack_require__.n(lodash_assign);

// EXTERNAL MODULE: ./node_modules/veui-theme-one/icons/cross.js
var cross = __webpack_require__(452);

// EXTERNAL MODULE: ./node_modules/veui-theme-one/icons/plus-circle-o.js
var plus_circle_o = __webpack_require__(564);

// EXTERNAL MODULE: ./node_modules/veui-theme-one/icons/angle-left.js
var angle_left = __webpack_require__(458);

// EXTERNAL MODULE: ./node_modules/veui-theme-one/icons/angle-right.js
var angle_right = __webpack_require__(444);

// EXTERNAL MODULE: ./node_modules/veui-theme-one/icons/plus-huge.js
var plus_huge = __webpack_require__(573);

// EXTERNAL MODULE: ./node_modules/veui-theme-one/icons/check-circle-o.js
var check_circle_o = __webpack_require__(449);

// EXTERNAL MODULE: ./node_modules/veui-theme-one/icons/exclamation-circle-o.js
var exclamation_circle_o = __webpack_require__(437);

// EXTERNAL MODULE: ./node_modules/veui-theme-one/icons/info-circle-o.js
var info_circle_o = __webpack_require__(450);

// EXTERNAL MODULE: ./node_modules/veui-theme-one/icons/cross-circle-o.js
var cross_circle_o = __webpack_require__(451);

// EXTERNAL MODULE: ./node_modules/veui/managers/config.js
var config = __webpack_require__(390);

// CONCATENATED MODULE: ./node_modules/veui-theme-one/components/Tabs.js










config["a" /* default */].defaults({
  icons: {
    remove: 'cross',
    add: 'plus-circle-o',
    prev: 'angle-left',
    next: 'angle-right',
    success: 'check-circle-o',
    warning: 'exclamation-circle-o',
    info: 'info-circle-o',
    error: 'cross-circle-o'
  },
  ui: {
    size: {
      values: ['large', 'small', 'tiny']
    },
    style: {
      values: ['block'],
      data: {
        block: {
          icons: {
            add: 'plus-huge'
          }
        }
      }
    }
  }
}, 'tabs');
// EXTERNAL MODULE: ./node_modules/veui/utils/warn.js
var warn = __webpack_require__(403);

// EXTERNAL MODULE: ./node_modules/veui/components/Link.vue + 4 modules
var Link = __webpack_require__(481);

// EXTERNAL MODULE: ./node_modules/veui/components/Icon.vue + 2 modules
var Icon = __webpack_require__(53);

// EXTERNAL MODULE: ./node_modules/veui/directives/resize.js + 1 modules
var resize = __webpack_require__(585);

// EXTERNAL MODULE: ./node_modules/veui/mixins/ui.js
var ui = __webpack_require__(391);

// EXTERNAL MODULE: ./node_modules/veui/common/uiTypes.js
var uiTypes = __webpack_require__(407);

// EXTERNAL MODULE: ./node_modules/veui/utils/dom.js
var dom = __webpack_require__(123);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/veui-loader/lib??ref--11!./node_modules/veui/components/Tabs/Tabs.vue?vue&type=script&lang=js&







//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








/* harmony default export */ var Tabsvue_type_script_lang_js_ = ({
  name: 'veui-tabs',
  uiTypes: ['tabs'],
  mixins: [ui["a" /* default */]],
  components: {
    'veui-link': Link["a" /* default */],
    'veui-icon': Icon["a" /* default */]
  },
  directives: {
    resize: resize["a" /* default */]
  },
  props: {
    active: {
      type: String
    },
    index: {
      type: Number,
      default: 0
    },
    addable: {
      type: Boolean,
      default: false
    },
    max: {
      type: Number,
      default: null
    },
    tip: {
      type: String
    }
  },
  data: function data() {
    return {
      items: [],
      localIndex: null,
      localActive: null,
      activeId: null,
      menuOverflow: false,
      menuLeft: null,
      menuRight: null,
      menuRightStable: null,
      menuClientWidth: null,
      tabConClientWidth: null,
      extraWidth: null,
      currentTranslate: 0,
      inited: false,
      switching: false,
      menuMoving: false,
      conMoving: false,
      itemMoving: false,
      removing: false,
      transitionSupported: null,
      fixedTranslate: null,
      fixedTabs: null,
      needResize: false
    };
  },
  computed: {
    tabUids: function tabUids() {
      return this.items.map(function (_ref) {
        var id = _ref.id;
        return id;
      });
    },
    tabNames: function tabNames() {
      return this.items.map(function (_ref2) {
        var name = _ref2.name;
        return name;
      });
    },
    leftLimited: function leftLimited() {
      return !this.currentTranslate;
    },
    rightLimited: function rightLimited() {
      // offsetWidth/clientWidth 的值会取四舍五入，两个数比较误差不超过 2
      return this.currentTranslate !== 0 && (this.currentTranslate < this.maxTranslate || inRange_default()(this.currentTranslate, this.maxTranslate + 2, this.maxTranslate - 2));
    },
    maxTranslate: function maxTranslate() {
      return this.menuClientWidth - this.tabConClientWidth;
    },
    needTransition: function needTransition() {
      return this.inited && this.transitionSupported && this.uiProps.style === 'block';
    },
    ariaAttrs: function ariaAttrs() {
      var _this = this;

      return this.items.map(function (tab, index) {
        return {
          role: 'tab',
          'aria-selected': String(index === _this.localIndex),
          'aria-setsize': _this.items.length,
          'aria-posinset': index + 1
        };
      });
    }
  },
  methods: {
    add: function add(tab) {
      var _this2 = this;

      var tabIndex = this.items.length;
      var domBaseIndex = tab.index;

      if (this.tabNames.indexOf(tab.name) !== -1) {
        Object(warn["a" /* default */])('[veui-tabs] Duplicate tab name.');
      } // 如果还没有找到选中的 tab，优先查看配置的 name
      // 因为 index 有默认值，而 tab.name 会 fallback 到 id 上边，所以 active 不指定不会误判断


      if (!this.activeId && tab.name === this.active || tabIndex === this.index && !this.active) {
        this.localIndex = tabIndex;
        this.localActive = tab.name;
        this.activeId = tab.id;
      }

      if (domBaseIndex >= tabIndex) {
        this.items.push(tab);
      } else {
        this.items.splice(domBaseIndex, 0, tab); // 这种情况要更新一下 index

        this.localIndex = this.tabUids.indexOf(this.activeId);
      }

      this.$nextTick(function () {
        if (!_this2.transitionSupported) {
          return;
        }

        var tabItem = _this2.getTab(tab.name);

        var end = function end($event) {
          $event.stopPropagation();
        };

        var label = tabItem.querySelector('.veui-tabs-item-label');
        var remove = tabItem.querySelector('.veui-tabs-item-remove');

        if (label) {
          label.addEventListener('transitionend', end);
        }

        if (tab.removable && remove) {
          remove.addEventListener('transitionend', end);
        }
      });
    },
    removeById: function removeById(id) {
      var _this3 = this;

      var index = this.tabUids.indexOf(id);

      if (index < 0) {
        return;
      } // 外部控制有可能会多次进入，把任务往后推


      if (this.removing) {
        setTimeout(function () {
          return _this3.removeById(id);
        }, 100);
        return;
      }

      this.removing = true;
      var items = this.items;
      var item = items[index];
      var tab = this.getTab(item.name); // 视图已经销毁

      if (!tab) {
        return;
      }

      var needFixed = false;

      if (items.length > 1) {
        needFixed = index === this.localIndex && index === 0 || index < this.localIndex;

        if (index === this.localIndex) {
          var _item = items[this.localIndex - 1] || items[this.localIndex + 1];

          this.localIndex = items.indexOf(_item);
          this.localActive = _item.name;
          this.activeId = _item.id;
        }
      } else {
        this.localIndex = null;
        this.localActive = null;
        this.activeId = null;
      }

      this.$nextTick(function () {
        items.splice(index, 1);

        if (needFixed) {
          _this3.localIndex -= 1;
        }
      });
    },
    setActive: function setActive(_ref3) {
      var active = _ref3.active,
          index = _ref3.index;

      if (this.localActive === active || this.localIndex === index) {
        return;
      }

      if (this.removing) {
        return;
      }

      var values = this.tabNames;
      this.localIndex = index !== undefined ? index : values.indexOf(active);
      this.localActive = active !== undefined ? active : values[index];
      this.activeId = this.localActive != null ? this.items[this.localIndex].id : null;

      if (this.menuOverflow && this.localActive) {
        this.scroll({
          itemName: this.localActive
        });
      }
    },
    storeBoundingSize: function storeBoundingSize(menuRightStable) {
      // 记录 resize 后的一些边界
      var _this$$refs = this.$refs,
          menu = _this$$refs.menu,
          listContainer = _this$$refs.listContainer,
          extra = _this$$refs.extra;
      var tabConClientWidth = listContainer.$el.clientWidth;
      var menuClientWidth = menu.clientWidth;
      var extraWidth = extra.offsetWidth;

      if (this.tabConClientWidth !== tabConClientWidth || this.menuClientWidth !== menuClientWidth || this.extraWidth !== extraWidth) {
        var _menu$getBoundingClie = menu.getBoundingClientRect(),
            left = _menu$getBoundingClie.left,
            right = _menu$getBoundingClie.right;

        assign_default()(this, {
          extraWidth: extraWidth,
          tabConClientWidth: tabConClientWidth,
          menuClientWidth: menuClientWidth,
          menuLeft: left,
          menuRight: right,
          menuRightStable: menuRightStable || right
        });
      }
    },
    fixResizeOverflow: function fixResizeOverflow() {
      var _this4 = this;

      if (this.menuOverflow) {
        var listContainer = this.$refs.listContainer.$el;

        var _listContainer$getBou = listContainer.getBoundingClientRect(),
            right = _listContainer$getBou.right;

        if (this.menuRight > right) {
          this.currentTranslate = this.maxTranslate;
          this.conMoving = true;
          this.bindTransition(listContainer, function () {
            _this4.conMoving = false;
          });
          this.$nextTick(function () {
            Object(dom["i" /* setTransform */])(listContainer, "translate(".concat(_this4.maxTranslate, "px)"));
          });
        }
      }
    },
    listResizeHandler: function listResizeHandler() {
      var _this5 = this;

      var _this$$refs2 = this.$refs,
          menu = _this$$refs2.menu,
          extra = _this$$refs2.extra,
          scroller = _this$$refs2.scroller,
          listContainer = _this$$refs2.listContainer;

      if (!listContainer || this.switching) {
        // 销毁阶段
        return;
      }

      var menuWidth = menu.offsetWidth;
      var tabConWidth = listContainer.$el.offsetWidth;
      var stickyWidth = extra.offsetWidth;
      var factor = this.menuOverflow ? -(scroller.offsetWidth + parseFloat(getComputedStyle(scroller).marginLeft)) : stickyWidth;
      var menuOverflow = menuWidth < tabConWidth + factor;

      if (this.menuOverflow !== menuOverflow) {
        this.switching = true;
      }

      this.menuOverflow = menuOverflow;
      return new Promise(function (resolve) {
        if (_this5.inited) {
          _this5.menuMoving = true;
          _this5.conMoving = true;
        } // 需要 menuOverflow 对 dom 进行更新


        _this5.$nextTick(function () {
          var menuRightStable;

          if (_this5.switching || _this5.extraWidth !== stickyWidth) {
            _this5.bindTransition(menu, function (e) {
              _this5.menuMoving = false;
              _this5.conMoving = false;

              _this5.storeBoundingSize();

              _this5.fixResizeOverflow();

              resolve();
              _this5.switching = false;
            });

            var extraWidth = extra.getBoundingClientRect().width;

            if (!_this5.menuOverflow) {
              _this5.currentTranslate = 0;
              Object(dom["i" /* setTransform */])(listContainer.$el, 'translate(0)'); // 本来用 padding 就完事了，ie9 不让 -  -

              menu.style.marginRight = 0;
            } else if (_this5.menuOverflow) {
              // 这个值是为了溢出时横向滚动的同步动画计算记录的，不记录一个稳定位置无法准确滚到位
              menuRightStable = _this5.menuRight ? _this5.menuRight + parseFloat(getComputedStyle(menu).marginRight) - extraWidth : null;
              menu.style.marginRight = extraWidth + 'px';
            }
          } else {
            _this5.menuMoving = false;
            _this5.conMoving = false;

            _this5.storeBoundingSize(menuRightStable);

            _this5.fixResizeOverflow();

            resolve();
            _this5.switching = false;
          }
        });
      });
    },

    /**
     * 处理滚动至 tab 或者整体横向滚动
     *
     * 逻辑是如果视窗内最后一个 tab 有 1/3 以上的内容残缺，那就以它为基准，否则以它下一个为基准
     * 例如往右滚动，视窗最后一个 tab 只有一点点内容看得到，那滚动完后，这个 tab 应该在第一个
     * 如果能看到 2/3 以上的内容，那就是它的下一个 tab 在第一个，除非它是最后一个
     *
     * @param  {string} direction left 或者 right，整体横向滚动方向
     * @param  {string} itemName  滚动至 tab 的 name，优先级比 direction 高
     */
    scroll: function scroll(_ref4) {
      var _this6 = this;

      var direction = _ref4.direction,
          itemName = _ref4.itemName;
      var listContainer = this.$refs.listContainer.$el;
      this.conMoving = true;
      this.bindTransition(listContainer, function () {
        _this6.conMoving = false;
      }); // 极限值

      var limited = {
        left: 0,
        right: this.maxTranslate // 标志 tab 的边界值

      };
      var flag = {
        left: null,
        right: null // 本次滚动偏移值，带方向

      };
      var localTranslate; // 本次最大滚动偏移值，带方向，防止边框连续排列的美观性，统一向上取整，让边框隐藏在视区外

      var localMaxTranslate; // 制定的滚动逻辑是否已经越界

      var overflow = false; // TODO: 这里还可以再优化一下，通过计算中心位置的偏移量来判断是正向还是反向查询

      if (!direction && !itemName) {
        return;
      } else if (itemName) {
        var _this$getTab$getBound = this.getTab(itemName).getBoundingClientRect(),
            left = _this$getTab$getBound.left,
            right = _this$getTab$getBound.right;

        if (left < this.menuLeft) {
          localTranslate = this.menuLeft - left;
          direction = 'left';
        } else if (right > this.menuRightStable) {
          localTranslate = this.menuRightStable - right;
          direction = 'right';
        } else {
          return;
        }
      } else if (direction === 'left') {
        var former = null;
        this.items.slice().some(function (item, index) {
          var tab = _this6.getTab(item.name);

          var _getComputedStyle = getComputedStyle(tab),
              marginLeft = _getComputedStyle.marginLeft,
              marginRight = _getComputedStyle.marginRight;

          var _tab$getBoundingClien = tab.getBoundingClientRect(),
              left = _tab$getBoundingClien.left,
              right = _tab$getBoundingClien.right; // 记录向左滚动极限距离


          if (index === 0) {
            localMaxTranslate = Math.ceil(_this6.menuLeft - left);
          } // 检查是否是一整个 tab 占满视窗的特殊情况，如果是，滚到上一个就是了


          if (Math.floor(left) <= _this6.menuLeft && Math.ceil(right) >= _this6.menuRight) {
            former = index - 1;
            return true;
          } // 减少 tab 留白和滚动误差带来的影响，三分之二宽度在视窗内才不会被保留在下个视窗中


          if (left > _this6.menuLeft - (tab.offsetWidth + parseFloat(marginLeft) + parseFloat(marginRight)) / 3) {
            if (index === 0) {
              // 第一个就满足条件，说明边界离第一个很近，往左只能在第一个的内部滚了
              former = -1;
            }

            return true;
          }

          assign_default()(flag, {
            left: left,
            right: right
          });

          return false;
        });

        if (former != null) {
          // 视窗太窄或者只需要滚动一点点
          if (former === -1) {
            // 视窗在第一个或者只需要滚动一点点
            localTranslate = localMaxTranslate;
          } else {
            // 视窗在中间
            var tab = this.getTab(this.items[former].name);
            localTranslate = this.menuRightStable - tab.getBoundingClientRect().right;
          }
        } else {
          localTranslate = this.menuRightStable - flag.right;
        } // 逻辑滚动距离超出极限状态，向左滚动是正值，溢出使用小于号


        overflow = localMaxTranslate <= localTranslate;
      } else if (direction === 'right') {
        var _former = null;
        this.items.slice().reverse().some(function (item, index) {
          var tab = _this6.getTab(item.name);

          var _getComputedStyle2 = getComputedStyle(tab),
              marginLeft = _getComputedStyle2.marginLeft,
              marginRight = _getComputedStyle2.marginRight;

          var _tab$getBoundingClien2 = tab.getBoundingClientRect(),
              left = _tab$getBoundingClien2.left,
              right = _tab$getBoundingClien2.right; // 记录向右滚动极限距离


          if (index === 0) {
            localMaxTranslate = Math.ceil(_this6.menuRightStable - right);
          } // 检查是否是一整个 tab 占满视窗的特殊情况，如果是，滚到上一个就是了


          if (Math.floor(left) <= _this6.menuLeft && Math.ceil(right) >= _this6.menuRight) {
            _former = _this6.items.length - index;
            return true;
          } // 同向左滚动


          if (right < _this6.menuRightStable + (tab.offsetWidth + parseFloat(marginLeft) + parseFloat(marginRight)) / 3) {
            if (index === 0) {
              // 最后一个就满足条件，说明边界离最后一个很近，往右只能在最后一个的内部滚了
              _former = _this6.items.length;
            }

            return true;
          }

          assign_default()(flag, {
            left: left,
            right: right
          });

          return false;
        });

        if (_former != null) {
          // 视窗太窄或者只需要滚动一点点
          if (_former === this.items.length) {
            // 视窗在最后一个或者只需要滚动一点点
            localTranslate = localMaxTranslate;
          } else {
            // 视窗在中间
            var _tab = this.getTab(this.items[_former].name);

            localTranslate = this.menuLeft - _tab.getBoundingClientRect().left;
          }
        } else {
          localTranslate = this.menuLeft - flag.left;
        } // 逻辑滚动距离超出极限状态，向右滚动是负值，溢出使用大于号


        overflow = localMaxTranslate >= localTranslate;
      }

      if (overflow) {
        this.currentTranslate = limited[direction];
        this.$nextTick(function () {
          Object(dom["i" /* setTransform */])(listContainer, "translate(".concat(limited[direction], "px)"));
        });
        return;
      }

      var matrix = Object(dom["g" /* getTransform */])(listContainer).slice(7).split(',').map(function (v) {
        return +v.trim();
      });
      var currentTranslate = matrix[4] + localTranslate;
      currentTranslate = inRange_default()(currentTranslate, limited[direction] - 2, limited[direction] + 2) ? limited[direction] : currentTranslate;
      this.currentTranslate = currentTranslate;
      this.$nextTick(function () {
        Object(dom["i" /* setTransform */])(listContainer, "translate(".concat(currentTranslate, "px)"));
      });
    },
    adaptToSetActive: function adaptToSetActive(activation) {
      var _this7 = this;

      // 由于 watcher 是同步的
      // 为了支持外部 add/remove 修改完 tab 源数据（slot 中用于循环的数组）就可以同步操作 active/index
      // 这里要让数据层的异步操作完成
      this.$nextTick(function () {
        // add 的逻辑是异步的，因此 add 之后的 resize 会在这个逻辑之后，这里直接同步调用一次让 resize 完成
        var resizeUpdated = _this7.listResizeHandler(); // 需要判断是不是有返回，因为锁存在的情况下是直接 return 的


        resizeUpdated && resizeUpdated.then(function () {
          return _this7.setActive(activation);
        });
      });
    },
    getTab: function getTab(name) {
      return this.$refs["tab-".concat(name)][0];
    },
    bindTransition: function bindTransition(el, cb) {
      if (!this.transitionSupported) {
        setTimeout(function () {
          cb();
        }, 0);
        return;
      }

      var end = function end($event) {
        $event.stopPropagation();
        cb($event);
        el.removeEventListener('transitionend', end);
      };

      el.addEventListener('transitionend', end);
    },
    translateTabs: function translateTabs(tabs, distance) {
      tabs.forEach(function (tab) {
        return Object(dom["i" /* setTransform */])(tab, "translate(".concat(distance, "px)"));
      });
    },
    beforeLeave: function beforeLeave(el) {
      if (!this.needTransition) {
        return;
      }

      this.menuMoving = true;
      this.conMoving = true;
      this.itemMoving = true;
    },
    leave: function leave(el) {
      var _this8 = this;

      if (!this.needTransition) {
        return;
      } // 若产生子元素局部动画，要把局部的状态收敛到父元素上


      this.fixedTranslate = null;
      this.fixedTabs = null;
      this.needResize = false;
      this.$nextTick(function () {
        el.style.paddingRight = 0;
      });
      var transitionWidth = 0;
      el.style.width = el.offsetWidth + 'px';

      if (this.menuOverflow) {
        var _this$$refs3 = this.$refs,
            menu = _this$$refs3.menu,
            listContainer = _this$$refs3.listContainer;
        var conRight = listContainer.$el.getBoundingClientRect().right;
        var elWidth = el.getBoundingClientRect().width;
        var overflowWidth = conRight - this.menuRight;
        var currentTranslate = Math.abs(this.currentTranslate);
        var distance;

        switch (true) {
          // 右侧溢出部分足够填充移除元素
          case overflowWidth > elWidth:
            transitionWidth = 0;
            break;
          // 左侧溢出部分足够填充移除元素

          case overflowWidth < elWidth && currentTranslate > elWidth:
            transitionWidth = null;
            distance = elWidth;
            this.fixedTabs = this.items.filter(function (item, index) {
              return index < el.dataset.index;
            }).map(function (_ref5) {
              var name = _ref5.name;
              return _this8.getTab(name);
            });
            this.fixedTranslate = elWidth - currentTranslate;
            break;
          // 左右都不足以单独填充移除元素

          case overflowWidth < elWidth && currentTranslate < elWidth:
            transitionWidth = 0;
            distance = currentTranslate;
            this.fixedTabs = this.items.map(function (_ref6) {
              var name = _ref6.name;
              return _this8.getTab(name);
            });
            this.fixedTranslate = 0; // 左右合并之后如果足以填充移除元素，可以暂时不关注溢出状态
            // 但是不足就要先移动右侧来填补中间的空白，然后再主动 resize

            if (overflowWidth + currentTranslate < elWidth) {
              this.needResize = true;
              this.$nextTick(function () {
                // 右侧动画
                menu.style.marginRight = parseFloat(menu.style.marginRight) + elWidth - currentTranslate - overflowWidth + 'px';
              });
            }

            break;

          default:
            break;
        } // 左侧的动画


        if (distance != null) {
          this.$nextTick(function () {
            _this8.translateTabs(toConsumableArray_default()(_this8.fixedTabs).concat([el]), distance);
          });
        }
      } // 删除元素本身的动画


      if (transitionWidth != null) {
        this.$nextTick(function () {
          el.style.width = transitionWidth;
        });
      }
    },
    afterLeave: function afterLeave() {
      var _this9 = this;

      if (!this.needTransition) {
        this.$nextTick(function () {
          _this9.removing = false;

          _this9.listResizeHandler();
        });
        return;
      } // 动画结束后收敛 transform


      this.removing = false;
      this.menuMoving = false;
      this.itemMoving = false;
      this.conMoving = false;
      this.$nextTick(function () {
        if (_this9.fixedTranslate != null) {
          _this9.translateTabs(_this9.fixedTabs, 0);

          _this9.currentTranslate = _this9.fixedTranslate;
          Object(dom["i" /* setTransform */])(_this9.$refs.listContainer.$el, "translate(".concat(_this9.fixedTranslate, "px)"));
        }

        if (_this9.$refs.extra.offsetWidth !== _this9.extraWidth && _this9.menuOverflow) {
          // extra 里头可能有 tip 会影响宽度，需要检查
          _this9.listResizeHandler();
        } else {
          _this9.storeBoundingSize();

          if (_this9.needResize) {
            _this9.listResizeHandler();
          }
        }
      });
    }
  },
  watch: {
    active: function active(val) {
      if (val === this.localActive) {
        return;
      }

      this.adaptToSetActive({
        active: val
      });
    },
    index: function index(val) {
      if (val === this.localIndex) {
        return;
      }

      this.adaptToSetActive({
        index: val
      });
    },
    localIndex: function localIndex(val) {
      this.$emit('update:index', val);
    },
    localActive: function localActive(val) {
      this.$emit('update:active', val);
    }
  },
  mounted: function mounted() {
    var _this10 = this;

    this.transitionSupported = 'transition' in document.documentElement.style; // 让子组件渲染完毕

    this.$nextTick(function () {
      var menu = _this10.$refs.menu;

      _this10.storeBoundingSize();

      _this10.listResizeHandler();

      _this10.inited = true;

      if (_this10.menuOverflow) {
        menu.style.marginRight = _this10.$refs.extra.offsetWidth;

        _this10.$nextTick(function () {
          _this10.storeBoundingSize();
        });
      }
    });
  }
});
// CONCATENATED MODULE: ./node_modules/veui/components/Tabs/Tabs.vue?vue&type=script&lang=js&
 /* harmony default export */ var Tabs_Tabsvue_type_script_lang_js_ = (Tabsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/veui-theme-one/components/tabs.less?vue&type=style&index=0&lang=less&
var tabsvue_type_style_index_0_lang_less_ = __webpack_require__(1364);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/veui/components/Tabs/Tabs.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Tabs_Tabsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "Tabs.vue"
/* harmony default export */ var Tabs = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 581:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/veui-loader/lib??ref--11!./node_modules/veui/components/Tabs/Tab.vue?vue&type=template&id=283b8823&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isActive),expression:"isActive"}],staticClass:"veui-tab",attrs:{"role":"tabpanel","aria-hidden":String(!_vm.isActive)}},[(_vm.isInited || _vm.isActive)?_vm._t("default",[(_vm.to && _vm.$route && _vm.realTo === _vm.$route.fullPath)?_c('router-view'):_vm._e()]):_vm._e()],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/veui/components/Tabs/Tab.vue?vue&type=template&id=283b8823&

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/objectSpread.js
var objectSpread = __webpack_require__(9);
var objectSpread_default = /*#__PURE__*/__webpack_require__.n(objectSpread);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.function.name.js
var es6_function_name = __webpack_require__(32);

// EXTERNAL MODULE: ./node_modules/lodash/includes.js
var includes = __webpack_require__(40);
var includes_default = /*#__PURE__*/__webpack_require__.n(includes);

// EXTERNAL MODULE: ./node_modules/lodash/uniqueId.js
var uniqueId = __webpack_require__(124);
var uniqueId_default = /*#__PURE__*/__webpack_require__.n(uniqueId);

// EXTERNAL MODULE: ./node_modules/lodash/find.js
var find = __webpack_require__(54);
var find_default = /*#__PURE__*/__webpack_require__.n(find);

// EXTERNAL MODULE: ./node_modules/lodash/pick.js
var pick = __webpack_require__(91);
var pick_default = /*#__PURE__*/__webpack_require__.n(pick);

// EXTERNAL MODULE: ./node_modules/veui/utils/helper.js
var helper = __webpack_require__(115);

// EXTERNAL MODULE: ./node_modules/veui/utils/context.js
var context = __webpack_require__(125);

// EXTERNAL MODULE: ./node_modules/veui/utils/warn.js
var warn = __webpack_require__(403);

// EXTERNAL MODULE: ./node_modules/veui/common/uiTypes.js
var uiTypes = __webpack_require__(407);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/veui-loader/lib??ref--11!./node_modules/veui/components/Tabs/Tab.vue?vue&type=script&lang=js&










var STATUS_LIST = ['success', 'warning', 'info', 'error'];
/* harmony default export */ var Tabvue_type_script_lang_js_ = ({
  name: 'veui-tab',
  uiTypes: ['tab'],
  mixins: [Object(helper["f" /* getTypedAncestorTracker */])('tabs')],
  props: {
    label: {
      type: String,
      required: true
    },
    name: String,
    disabled: {
      type: Boolean,
      default: false
    },
    to: {
      type: [String, Object],
      default: ''
    },
    native: Boolean,
    removable: {
      type: Boolean,
      default: false
    },
    status: {
      type: String,
      default: null,
      validator: function validator(val) {
        return includes_default()(STATUS_LIST, val);
      }
    }
  },
  data: function data() {
    return {
      id: uniqueId_default()('veui-tab-'),
      isInited: false
    };
  },
  computed: {
    isActive: function isActive() {
      return this.id === this.tabs.activeId;
    },
    realTo: function realTo() {
      if (!this.to) {
        return null;
      }

      return this.$router ? this.$router.resolve(this.to).route.fullPath : this.to;
    }
  },
  created: function created() {
    var _this = this;

    var index = Object(context["a" /* getIndexOfType */])(this, 'tab');
    var props = ['label', 'disabled', 'to', 'native', 'removable', 'status'];

    if (this.to && this.name) {
      Object(warn["a" /* default */])('[veui-tab] prop `name` will be ignored when prop `to` is set.');
    }

    this.tabs.add(objectSpread_default()({}, pick_default.a.apply(void 0, [this].concat(props, ['id'])), {
      name: this.realTo || this.name || this.id,
      index: index
    }));
    props.forEach(function (prop) {
      _this.$watch(prop, function (val) {
        find_default()(_this.tabs.items, function (item) {
          return item.id === _this.id;
        })[prop] = val;
      });
    });

    if (!this.isActive) {
      var unWatchIsActive = this.$watch('isActive', function () {
        _this.isInited = true;
        unWatchIsActive();
      });
    } else {
      this.isInited = true;
    }
  },
  destroyed: function destroyed() {
    this.tabs.removeById(this.id);
  }
});
// CONCATENATED MODULE: ./node_modules/veui/components/Tabs/Tab.vue?vue&type=script&lang=js&
 /* harmony default export */ var Tabs_Tabvue_type_script_lang_js_ = (Tabvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/veui/components/Tabs/Tab.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Tabs_Tabvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "Tab.vue"
/* harmony default export */ var Tab = (component.exports);
// CONCATENATED MODULE: ./node_modules/veui/components/Tab.js
/* concated harmony reexport default */__webpack_require__.d(__webpack_exports__, "a", function() { return Tab; });


/***/ }),

/***/ 585:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/lodash/keys.js
var keys = __webpack_require__(17);
var keys_default = /*#__PURE__*/__webpack_require__.n(keys);

// EXTERNAL MODULE: ./node_modules/lodash/find.js
var find = __webpack_require__(54);
var find_default = /*#__PURE__*/__webpack_require__.n(find);

// EXTERNAL MODULE: ./node_modules/lodash/isEqual.js
var isEqual = __webpack_require__(126);
var isEqual_default = /*#__PURE__*/__webpack_require__.n(isEqual);

// EXTERNAL MODULE: ./node_modules/lodash/assign.js
var lodash_assign = __webpack_require__(92);
var assign_default = /*#__PURE__*/__webpack_require__.n(lodash_assign);

// EXTERNAL MODULE: ./node_modules/lodash/isObject.js
var isObject = __webpack_require__(10);
var isObject_default = /*#__PURE__*/__webpack_require__.n(isObject);

// EXTERNAL MODULE: ./node_modules/lodash/throttle.js
var throttle = __webpack_require__(486);
var throttle_default = /*#__PURE__*/__webpack_require__.n(throttle);

// EXTERNAL MODULE: ./node_modules/lodash/debounce.js
var debounce = __webpack_require__(132);
var debounce_default = /*#__PURE__*/__webpack_require__.n(debounce);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.keys.js
var es6_object_keys = __webpack_require__(140);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__(21);

// CONCATENATED MODULE: ./node_modules/resize-detector/esm/index.js


var raf = null;

function requestAnimationFrame(callback) {
  if (!raf) {
    raf = (window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (callback) {
      return setTimeout(callback, 16);
    }).bind(window);
  }

  return raf(callback);
}

var caf = null;

function cancelAnimationFrame(id) {
  if (!caf) {
    caf = (window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || function (id) {
      clearTimeout(id);
    }).bind(window);
  }

  caf(id);
}

function createStyles(styleText) {
  var style = document.createElement('style');
  style.type = 'text/css';

  if (style.styleSheet) {
    style.styleSheet.cssText = styleText;
  } else {
    style.appendChild(document.createTextNode(styleText));
  }

  (document.querySelector('head') || document.body).appendChild(style);
  return style;
}

function createElement(tagName) {
  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var elem = document.createElement(tagName);
  Object.keys(props).forEach(function (key) {
    elem[key] = props[key];
  });
  return elem;
}

function getComputedStyle(elem, prop, pseudo) {
  // for older versions of Firefox, `getComputedStyle` required
  // the second argument and may return `null` for some elements
  // when `display: none`
  var computedStyle = window.getComputedStyle(elem, pseudo || null) || {
    display: 'none'
  };
  return computedStyle[prop];
}

function getRenderInfo(elem) {
  if (!document.documentElement.contains(elem)) {
    return {
      detached: true,
      rendered: false
    };
  }

  var current = elem;

  while (current !== document) {
    if (getComputedStyle(current, 'display') === 'none') {
      return {
        detached: false,
        rendered: false
      };
    }

    current = current.parentNode;
  }

  return {
    detached: false,
    rendered: true
  };
}

var css = ".resize-triggers{visibility:hidden;opacity:0}.resize-contract-trigger,.resize-contract-trigger:before,.resize-expand-trigger,.resize-triggers{content:\"\";position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden}.resize-contract-trigger,.resize-expand-trigger{background:#eee;overflow:auto}.resize-contract-trigger:before{width:200%;height:200%}";
var total = 0;
var style = null;

function addListener(elem, callback) {
  if (!elem.__resize_mutation_handler__) {
    elem.__resize_mutation_handler__ = handleMutation.bind(elem);
  }

  var listeners = elem.__resize_listeners__;

  if (!listeners) {
    elem.__resize_listeners__ = [];

    if (window.ResizeObserver) {
      var offsetWidth = elem.offsetWidth,
          offsetHeight = elem.offsetHeight;
      var ro = new ResizeObserver(function () {
        if (!elem.__resize_observer_triggered__) {
          elem.__resize_observer_triggered__ = true;

          if (elem.offsetWidth === offsetWidth && elem.offsetHeight === offsetHeight) {
            return;
          }
        }

        runCallbacks(elem);
      }); // initially display none won't trigger ResizeObserver callback

      var _getRenderInfo = getRenderInfo(elem),
          detached = _getRenderInfo.detached,
          rendered = _getRenderInfo.rendered;

      elem.__resize_observer_triggered__ = detached === false && rendered === false;
      elem.__resize_observer__ = ro;
      ro.observe(elem);
    } else if (elem.attachEvent && elem.addEventListener) {
      // targeting IE9/10
      elem.__resize_legacy_resize_handler__ = function handleLegacyResize() {
        runCallbacks(elem);
      };

      elem.attachEvent('onresize', elem.__resize_legacy_resize_handler__);
      document.addEventListener('DOMSubtreeModified', elem.__resize_mutation_handler__);
    } else {
      if (!total) {
        style = createStyles(css);
      }

      initTriggers(elem);
      elem.__resize_rendered__ = getRenderInfo(elem).rendered;

      if (window.MutationObserver) {
        var mo = new MutationObserver(elem.__resize_mutation_handler__);
        mo.observe(document, {
          attributes: true,
          childList: true,
          characterData: true,
          subtree: true
        });
        elem.__resize_mutation_observer__ = mo;
      }
    }
  }

  elem.__resize_listeners__.push(callback);

  total++;
}

function removeListener(elem, callback) {
  // targeting IE9/10
  if (elem.detachEvent && elem.removeEventListener) {
    elem.detachEvent('onresize', elem.__resize_legacy_resize_handler__);
    document.removeEventListener('DOMSubtreeModified', elem.__resize_mutation_handler__);
    return;
  }

  var listeners = elem.__resize_listeners__;

  if (!listeners) {
    return;
  }

  listeners.splice(listeners.indexOf(callback), 1);

  if (!listeners.length) {
    if (elem.__resize_observer__) {
      elem.__resize_observer__.unobserve(elem);

      elem.__resize_observer__.disconnect();

      elem.__resize_observer__ = null;
    } else {
      if (elem.__resize_mutation_observer__) {
        elem.__resize_mutation_observer__.disconnect();

        elem.__resize_mutation_observer__ = null;
      }

      elem.removeEventListener('scroll', handleScroll);
      elem.removeChild(elem.__resize_triggers__.triggers);
      elem.__resize_triggers__ = null;
    }

    elem.__resize_listeners__ = null;
  }

  if (! --total && style) {
    style.parentNode.removeChild(style);
  }
}

function getUpdatedSize(elem) {
  var _elem$__resize_last__ = elem.__resize_last__,
      width = _elem$__resize_last__.width,
      height = _elem$__resize_last__.height;
  var offsetWidth = elem.offsetWidth,
      offsetHeight = elem.offsetHeight;

  if (offsetWidth !== width || offsetHeight !== height) {
    return {
      width: offsetWidth,
      height: offsetHeight
    };
  }

  return null;
}

function handleMutation() {
  // `this` denotes the scrolling element
  var _getRenderInfo2 = getRenderInfo(this),
      rendered = _getRenderInfo2.rendered,
      detached = _getRenderInfo2.detached;

  if (rendered !== this.__resize_rendered__) {
    if (!detached && this.__resize_triggers__) {
      resetTriggers(this);
      this.addEventListener('scroll', handleScroll, true);
    }

    this.__resize_rendered__ = rendered;
    runCallbacks(this);
  }
}

function handleScroll() {
  var _this = this;

  // `this` denotes the scrolling element
  resetTriggers(this);

  if (this.__resize_raf__) {
    cancelAnimationFrame(this.__resize_raf__);
  }

  this.__resize_raf__ = requestAnimationFrame(function () {
    var updated = getUpdatedSize(_this);

    if (updated) {
      _this.__resize_last__ = updated;
      runCallbacks(_this);
    }
  });
}

function runCallbacks(elem) {
  elem.__resize_listeners__.forEach(function (callback) {
    callback.call(elem);
  });
}

function initTriggers(elem) {
  var position = getComputedStyle(elem, 'position');

  if (!position || position === 'static') {
    elem.style.position = 'relative';
  }

  elem.__resize_old_position__ = position;
  elem.__resize_last__ = {};
  var triggers = createElement('div', {
    className: 'resize-triggers'
  });
  var expand = createElement('div', {
    className: 'resize-expand-trigger'
  });
  var expandChild = createElement('div');
  var contract = createElement('div', {
    className: 'resize-contract-trigger'
  });
  expand.appendChild(expandChild);
  triggers.appendChild(expand);
  triggers.appendChild(contract);
  elem.appendChild(triggers);
  elem.__resize_triggers__ = {
    triggers: triggers,
    expand: expand,
    expandChild: expandChild,
    contract: contract
  };
  resetTriggers(elem);
  elem.addEventListener('scroll', handleScroll, true);
  elem.__resize_last__ = {
    width: elem.offsetWidth,
    height: elem.offsetHeight
  };
}

function resetTriggers(elem) {
  var _elem$__resize_trigge = elem.__resize_triggers__,
      expand = _elem$__resize_trigge.expand,
      expandChild = _elem$__resize_trigge.expandChild,
      contract = _elem$__resize_trigge.contract; // batch read

  var csw = contract.scrollWidth,
      csh = contract.scrollHeight;
  var eow = expand.offsetWidth,
      eoh = expand.offsetHeight,
      esw = expand.scrollWidth,
      esh = expand.scrollHeight; // batch write

  contract.scrollLeft = csw;
  contract.scrollTop = csh;
  expandChild.style.width = eow + 1 + 'px';
  expandChild.style.height = eoh + 1 + 'px';
  expand.scrollLeft = esw;
  expand.scrollTop = esh;
}


// EXTERNAL MODULE: ./node_modules/veui/utils/helper.js
var helper = __webpack_require__(115);

// CONCATENATED MODULE: ./node_modules/veui/directives/resize.js









var modeMap = {
  debounce: debounce_default.a,
  throttle: throttle_default.a
};

function attach(el, _ref) {
  var value = _ref.value,
      oldValue = _ref.oldValue,
      modifiers = _ref.modifiers;

  var mode = find_default()(keys_default()(modeMap), function (mode) {
    return modifiers[mode];
  });

  var wait = Object(helper["d" /* getNumberArg */])(modifiers, 150);
  var options = {
    wait: wait,
    mode: mode,
    handler: value,
    leading: modifiers.leading
  };

  if (isObject_default()(value)) {
    assign_default()(options, value);
  }

  var fn = modeMap[options.mode];
  var cb = fn ? fn(options.handler, options.wait, options.leading) : options.handler;

  if (!oldValue) {
    el.__veui_resize_handler__ = cb;
    addListener(el, cb);
  } else {
    var oldOptions = {
      wait: wait,
      mode: mode,
      handler: oldValue,
      leading: modifiers.leading
    };

    if (isObject_default()(oldValue)) {
      assign_default()(oldOptions, oldValue);
    }

    var changed = isEqual_default()(oldValue, options);

    if (changed) {
      var oldCb = el.__veui_resize_handler__;
      removeListener(el, oldCb);
      el.__veui_resize_handler__ = cb;
      addListener(el, cb);
    }
  }
}

function clear(el) {
  removeListener(el, el.__veui_resize_handler__);
}

/* harmony default export */ var resize = __webpack_exports__["a"] = ({
  inserted: attach,
  componentUpdated: attach,
  unbind: clear
});

/***/ }),

/***/ 820:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1365);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(6).default
var update = add("6c4825f6", content, true, {"sourceMap":false});

/***/ })

}]);