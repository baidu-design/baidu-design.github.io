(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[99],{

/***/ 1370:
/***/ (function(module, exports, __webpack_require__) {

var baseKeys = __webpack_require__(226),
    getTag = __webpack_require__(198),
    isArguments = __webpack_require__(90),
    isArray = __webpack_require__(7),
    isArrayLike = __webpack_require__(35),
    isBuffer = __webpack_require__(119),
    isPrototype = __webpack_require__(130),
    isTypedArray = __webpack_require__(121);

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    setTag = '[object Set]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if `value` is an empty object, collection, map, or set.
 *
 * Objects are considered empty if they have no own enumerable string keyed
 * properties.
 *
 * Array-like values such as `arguments` objects, arrays, buffers, strings, or
 * jQuery-like collections are considered empty if they have a `length` of `0`.
 * Similarly, maps and sets are considered empty if they have a `size` of `0`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is empty, else `false`.
 * @example
 *
 * _.isEmpty(null);
 * // => true
 *
 * _.isEmpty(true);
 * // => true
 *
 * _.isEmpty(1);
 * // => true
 *
 * _.isEmpty([1, 2, 3]);
 * // => false
 *
 * _.isEmpty({ 'a': 1 });
 * // => false
 */
function isEmpty(value) {
  if (value == null) {
    return true;
  }
  if (isArrayLike(value) &&
      (isArray(value) || typeof value == 'string' || typeof value.splice == 'function' ||
        isBuffer(value) || isTypedArray(value) || isArguments(value))) {
    return !value.length;
  }
  var tag = getTag(value);
  if (tag == mapTag || tag == setTag) {
    return !value.size;
  }
  if (isPrototype(value)) {
    return !baseKeys(value).length;
  }
  for (var key in value) {
    if (hasOwnProperty.call(value, key)) {
      return false;
    }
  }
  return true;
}

module.exports = isEmpty;


/***/ }),

/***/ 1371:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * bytes
 * Copyright(c) 2012-2014 TJ Holowaychuk
 * Copyright(c) 2015 Jed Watson
 * MIT Licensed
 */



/**
 * Module exports.
 * @public
 */

module.exports = bytes;
module.exports.format = format;
module.exports.parse = parse;

/**
 * Module variables.
 * @private
 */

var formatThousandsRegExp = /\B(?=(\d{3})+(?!\d))/g;

var formatDecimalsRegExp = /(?:\.0*|(\.[^0]+)0+)$/;

var map = {
  b:  1,
  kb: 1 << 10,
  mb: 1 << 20,
  gb: 1 << 30,
  tb: ((1 << 30) * 1024)
};

var parseRegExp = /^((-|\+)?(\d+(?:\.\d+)?)) *(kb|mb|gb|tb)$/i;

/**
 * Convert the given value in bytes into a string or parse to string to an integer in bytes.
 *
 * @param {string|number} value
 * @param {{
 *  case: [string],
 *  decimalPlaces: [number]
 *  fixedDecimals: [boolean]
 *  thousandsSeparator: [string]
 *  unitSeparator: [string]
 *  }} [options] bytes options.
 *
 * @returns {string|number|null}
 */

function bytes(value, options) {
  if (typeof value === 'string') {
    return parse(value);
  }

  if (typeof value === 'number') {
    return format(value, options);
  }

  return null;
}

/**
 * Format the given value in bytes into a string.
 *
 * If the value is negative, it is kept as such. If it is a float,
 * it is rounded.
 *
 * @param {number} value
 * @param {object} [options]
 * @param {number} [options.decimalPlaces=2]
 * @param {number} [options.fixedDecimals=false]
 * @param {string} [options.thousandsSeparator=]
 * @param {string} [options.unit=]
 * @param {string} [options.unitSeparator=]
 *
 * @returns {string|null}
 * @public
 */

function format(value, options) {
  if (!Number.isFinite(value)) {
    return null;
  }

  var mag = Math.abs(value);
  var thousandsSeparator = (options && options.thousandsSeparator) || '';
  var unitSeparator = (options && options.unitSeparator) || '';
  var decimalPlaces = (options && options.decimalPlaces !== undefined) ? options.decimalPlaces : 2;
  var fixedDecimals = Boolean(options && options.fixedDecimals);
  var unit = (options && options.unit) || '';

  if (!unit || !map[unit.toLowerCase()]) {
    if (mag >= map.tb) {
      unit = 'TB';
    } else if (mag >= map.gb) {
      unit = 'GB';
    } else if (mag >= map.mb) {
      unit = 'MB';
    } else if (mag >= map.kb) {
      unit = 'KB';
    } else {
      unit = 'B';
    }
  }

  var val = value / map[unit.toLowerCase()];
  var str = val.toFixed(decimalPlaces);

  if (!fixedDecimals) {
    str = str.replace(formatDecimalsRegExp, '$1');
  }

  if (thousandsSeparator) {
    str = str.replace(formatThousandsRegExp, thousandsSeparator);
  }

  return str + unitSeparator + unit;
}

/**
 * Parse the string value into an integer in bytes.
 *
 * If no unit is given, it is assumed the value is in bytes.
 *
 * @param {number|string} val
 *
 * @returns {number|null}
 * @public
 */

function parse(val) {
  if (typeof val === 'number' && !isNaN(val)) {
    return val;
  }

  if (typeof val !== 'string') {
    return null;
  }

  // Test if the string passed is valid
  var results = parseRegExp.exec(val);
  var floatValue;
  var unit = 'b';

  if (!results) {
    // Nothing could be extracted from the given string
    floatValue = parseInt(val, 10);
    unit = 'b'
  } else {
    // Retrieve the value and the unit
    floatValue = parseFloat(results[1]);
    unit = results[4].toLowerCase();
  }

  return Math.floor(map[unit] * floatValue);
}


/***/ }),

/***/ 1372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _vue_style_loader_index_js_ref_4_oneOf_1_0_css_loader_index_js_ref_4_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_4_oneOf_1_2_less_loader_dist_cjs_js_ref_4_oneOf_1_3_uploader_less_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(826);
/* harmony import */ var _vue_style_loader_index_js_ref_4_oneOf_1_0_css_loader_index_js_ref_4_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_4_oneOf_1_2_less_loader_dist_cjs_js_ref_4_oneOf_1_3_uploader_less_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_4_oneOf_1_0_css_loader_index_js_ref_4_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_4_oneOf_1_2_less_loader_dist_cjs_js_ref_4_oneOf_1_3_uploader_less_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_vue_style_loader_index_js_ref_4_oneOf_1_0_css_loader_index_js_ref_4_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_4_oneOf_1_2_less_loader_dist_cjs_js_ref_4_oneOf_1_3_uploader_less_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 1373:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, "/* Theme colors */\n/* Additional colors */\n/* Grayscale colors */\n/* Text colors */\n/* Link colors */\n/* Font settings */\n/* Metrics */\n/* Form widths */\n/* Transition duration */\n.veui-uploader {\n  width: 400px;\n  overflow: hidden;\n}\n.veui-uploader-button-container {\n  position: relative;\n  margin-bottom: 12px;\n  overflow: hidden;\n}\n.veui-uploader-button-container .veui-uploader-tip,\n.veui-uploader-button-container .veui-uploader-error {\n  margin-top: 8px;\n}\n.veui-uploader-input-label {\n  float: left;\n  color: #333;\n  cursor: pointer;\n  margin: 0 1em 8px 0;\n}\n.veui-uploader-input-label-icon {\n  margin-right: 5px;\n}\n.veui-uploader .veui-uploader-input-label-disabled,\n.veui-uploader .veui-button.veui-uploader-input-label-disabled {\n  cursor: not-allowed;\n  border-color: transparent;\n  background-color: #eee;\n  color: #999;\n  box-shadow: none;\n}\n.veui-uploader .veui-uploader-input-label-disabled:hover,\n.veui-uploader .veui-button.veui-uploader-input-label-disabled:hover {\n  border-color: transparent;\n  background-color: #eee;\n  color: #999;\n  box-shadow: none;\n}\n.veui-uploader-input-label-image {\n  position: relative;\n  display: block;\n  width: 100%;\n  height: 100%;\n  cursor: pointer;\n  transition: background-color 0.2s;\n}\n.veui-uploader-input-label-image .veui-icon {\n  font-size: 50px;\n  color: #666;\n  position: absolute;\n  top: auto;\n  right: 50%;\n  bottom: 50%;\n  left: auto;\n  transform: translate(50%, 50%);\n}\n.veui-uploader-input-label-image:hover {\n  background: #f7f7f7;\n}\n.veui-uploader-input-label-image:active {\n  background: #e7e7e7;\n}\n.veui-uploader-list,\n.veui-uploader-list-image {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n}\n.veui-uploader-list li,\n.veui-uploader-list-image li {\n  margin: 0 10px 5px 0;\n  position: relative;\n  transition: transform 0.2s;\n}\n.veui-uploader-list img,\n.veui-uploader-list-image img {\n  width: auto;\n  height: auto;\n  max-width: 100%;\n  max-height: 100%;\n  position: absolute;\n  top: auto;\n  right: 50%;\n  bottom: 50%;\n  left: auto;\n  transform: translate(50%, 50%);\n}\n.veui-uploader-list-status,\n.veui-uploader-list-image-status {\n  line-height: 1.2;\n}\n.veui-uploader-list-status > span,\n.veui-uploader-list-image-status > span {\n  display: inline-block;\n  vertical-align: middle;\n  word-break: break-all;\n}\n.veui-uploader-list-status::after,\n.veui-uploader-list-image-status::after {\n  content: \"\";\n  height: 100%;\n  display: inline-block;\n  vertical-align: middle;\n}\n.veui-uploader-list-success,\n.veui-uploader-list-image-success {\n  position: absolute;\n  top: -1px;\n  right: -1px;\n  bottom: -1px;\n  left: -1px;\n  padding: 9px 4px;\n  background-color: #fff;\n  border: 1px solid #dbdbdb;\n  color: #5bc49f;\n  cursor: pointer;\n}\n.veui-uploader-list-container {\n  position: relative;\n  width: 300px;\n  padding: 3px 4px;\n  max-width: 300px;\n  color: #666;\n  transition: background-color 0.2s;\n  text-align: right;\n  overflow: hidden;\n  white-space: nowrap;\n}\n.veui-uploader-list-container:hover {\n  background-color: #f7f7f7;\n}\n.veui-uploader-list-container:hover .veui-uploader-button-remove {\n  opacity: 1;\n}\n.veui-uploader-list-name {\n  overflow: hidden;\n  -o-text-overflow: ellipsis;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  float: left;\n  max-width: calc(100% - 3em);\n  line-height: 22px;\n  text-align: left;\n  vertical-align: middle;\n}\n.veui-uploader-list-name-success {\n  width: calc(100% - 9em);\n}\n.veui-uploader-list-name-failure {\n  width: calc(100% - 12em);\n}\n.veui-uploader-list-status {\n  display: inline-block;\n  max-width: calc(100% - 3em);\n  height: 100%;\n}\n.veui-uploader-list-success .veui-icon {\n  position: relative;\n  top: 0;\n}\n.veui-uploader-list-icon {\n  font-size: 12px;\n  margin: 5px 8px 0 0;\n  float: left;\n}\n.veui-uploader-list-retry {\n  margin-right: 6px;\n  margin-left: 10px;\n}\n.veui-uploader-list-retry.veui-button[ui~=\"micro\"] {\n  font-size: 14px;\n}\n.veui-uploader-list-retry .veui-icon {\n  margin: 4px 6px 0 0;\n  font-size: 12px;\n}\n.veui-uploader-list .veui-uploader-progress {\n  float: left;\n  text-align: left;\n  line-height: 22px;\n  margin-right: 10px;\n}\n.veui-uploader-list-image {\n  float: left;\n}\n.veui-uploader-list-image-container {\n  width: 140px;\n  height: 140px;\n  padding: 0;\n  border: 1px solid #dbdbdb;\n  text-align: center;\n  position: relative;\n}\n.veui-uploader-list-image-container:before,\n.veui-uploader-list-image-container:after {\n  display: table;\n  content: \"\";\n}\n.veui-uploader-list-image-container:after {\n  clear: both;\n}\n.veui-uploader-list-image-container label.veui-button {\n  cursor: pointer;\n  position: absolute;\n  top: auto;\n  right: 50%;\n  bottom: 50%;\n  left: auto;\n  transform: translate(50%, 50%);\n  width: 88px;\n  height: 28px;\n  line-height: 26px;\n  padding: 0;\n}\n.veui-uploader-list-image-container:hover .veui-uploader-list-image-mask {\n  opacity: 1;\n}\n.veui-uploader-list-image-mask {\n  opacity: 0;\n  transition: opacity 0.2s;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-color: rgba(0, 0, 0, 0.1);\n}\n.veui-uploader-list-image-mask-failure {\n  background-color: none;\n}\n.veui-button.veui-uploader-list-image-mask-remove {\n  position: absolute;\n  top: -1px;\n  right: -1px;\n}\n.veui-uploader-list-image-mask .veui-button.veui-uploader-input-label-disabled {\n  background: none;\n}\n.veui-uploader-list-image-mask .veui-button.veui-uploader-input-label-disabled:hover {\n  background: none;\n}\n.veui-uploader-list-image-status {\n  margin-top: 10%;\n  height: 40%;\n}\n.veui-uploader-list-image-status > span {\n  max-width: 90%;\n}\n.veui-uploader-list-image-success {\n  padding: 0;\n  line-height: 138px;\n}\n.veui-uploader-list-image-success span {\n  display: block;\n}\n.veui-uploader-list-image-success .veui-icon {\n  font-size: 16px;\n  vertical-align: text-bottom;\n  margin-right: 5px;\n}\n.veui-uploader-list-image-mask-remove.veui-uploader-list-image-mask-remove-failure {\n  position: absolute;\n  display: none;\n}\n.veui-uploader-list-image-container:hover .veui-uploader-list-image-mask-remove-failure {\n  display: inline;\n}\n.veui-uploader-list-image .veui-uploader-progress-bar,\n.veui-uploader-list-image .veui-uploader-progress-bar-full {\n  left: calc(50% - 35px);\n  max-width: 70px;\n}\n.veui-uploader-error {\n  display: inline-block;\n}\n.veui-uploader-error .veui-icon {\n  vertical-align: -2px;\n  margin-right: 7px;\n}\n.veui-uploader-tip {\n  color: #999;\n  display: inline-block;\n}\n.veui-uploader-tip + .veui-uploader-error {\n  display: block;\n  clear: both;\n  font-size: 12px;\n}\n.veui-uploader-error,\n.veui-uploader-failure {\n  color: #ff5b5b;\n  vertical-align: middle;\n  cursor: help;\n}\n.veui-uploader-success {\n  color: #5bc49f;\n  vertical-align: middle;\n}\n.veui-uploader-hide {\n  display: none;\n}\n.veui-uploader[ui~=\"horizontal\"] {\n  width: 100%;\n}\n.veui-uploader[ui~=\"horizontal\"] .veui-uploader-list:before,\n.veui-uploader[ui~=\"horizontal\"] .veui-uploader-list-image:before,\n.veui-uploader[ui~=\"horizontal\"] .veui-uploader-list:after,\n.veui-uploader[ui~=\"horizontal\"] .veui-uploader-list-image:after {\n  display: table;\n  content: \"\";\n}\n.veui-uploader[ui~=\"horizontal\"] .veui-uploader-list:after,\n.veui-uploader[ui~=\"horizontal\"] .veui-uploader-list-image:after {\n  clear: both;\n}\n.veui-uploader[ui~=\"horizontal\"] .veui-uploader-list li,\n.veui-uploader[ui~=\"horizontal\"] .veui-uploader-list-image li {\n  float: left;\n  margin-right: 10px;\n}\n.veui-uploader[ui~=\"horizontal\"] .veui-uploader-list-container {\n  width: auto;\n}\n.veui-uploader .veui-uploader-button-remove {\n  margin-right: -1px;\n  color: #666;\n  opacity: 0;\n  vertical-align: middle;\n  transition: opacity 0.2s;\n}\n.veui-uploader-list-enter,\n.veui-uploader-list-leave-to {\n  opacity: 0;\n}\n.veui-uploader .veui-uploader-list-leave-active {\n  position: absolute;\n}\n.veui-uploader-fade-leave-active {\n  opacity: 0;\n  transition: opacity 0.2s ease;\n}\n.veui-uploader-progress {\n  display: block;\n  position: relative;\n  line-height: 20px;\n}\n.veui-uploader-progress-bar,\n.veui-uploader-progress-bar-full {\n  position: absolute;\n  height: 4px;\n  top: calc(50% - 2px);\n  width: 100%;\n}\n.veui-uploader-progress-bar {\n  background-color: #666;\n}\n.veui-uploader-progress-bar-full {\n  z-index: -1;\n  background-color: #dbdbdb;\n}\n", ""]);

// exports


/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31);
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(40);
/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_includes__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(115);
/* harmony import */ var _common_uiTypes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(407);







/* harmony default export */ __webpack_exports__["a"] = ({
  uiTypes: ['input'],
  props: {
    name: String,
    readonly: Boolean,
    disabled: Boolean
  },
  data: function data() {
    return {
      initialData: undefined,
      isTopMostInput: Object(_utils_helper__WEBPACK_IMPORTED_MODULE_5__[/* isTopMostOfType */ "h"])(this, 'input', 'field')
    };
  },
  computed: _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_3___default()({
    realName: function realName() {
      return this.formField && this.formField.name || this.name;
    },
    realDisabled: function realDisabled() {
      return Boolean(this.disabled || this.formField && this.formField.realDisabled);
    },
    realReadonly: function realReadonly() {
      return Boolean(this.readonly || this.formField && this.formField.realReadonly);
    },
    realInvalid: function realInvalid() {
      return this.formField && !this.formField.validity.valid && this.isTopMostInput;
    }
  }, Object(_utils_helper__WEBPACK_IMPORTED_MODULE_5__[/* getTypedAncestorTracker */ "f"])('field', 'formField').computed),
  created: function created() {
    if (!this.isTopMostInput || !this.formField || !this.formField.field) {
      return;
    }

    this.$emit = this.realEmit.bind(this, this.$emit);
  },
  methods: {
    realEmit: function realEmit(originalEmit, eventName, data, event) {
      originalEmit.apply(this, Array.prototype.slice.call(arguments, 1)); // 过滤掉 vue 内部 hook 和 .sync 的 update 事件，不需要往上处理

      var _eventName$split = eventName.split(':'),
          _eventName$split2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_eventName$split, 2),
          prefix = _eventName$split2[0],
          name = _eventName$split2[1];

      if (!name || !lodash_includes__WEBPACK_IMPORTED_MODULE_4___default()(['hook', 'update'], prefix)) {
        this.formField.$emit('interact', eventName);
      }
    }
  }
});

/***/ }),

/***/ 404:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(422);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(6).default
var update = add("d6fbf814", content, true, {"sourceMap":false});

/***/ }),

/***/ 406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/veui-loader/lib??ref--11!./node_modules/veui/components/Button.vue?vue&type=template&id=22e2529d&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',_vm._g(_vm._b({class:{
    'veui-button': true,
    'veui-button-loading': _vm.loading,
    'veui-disabled': _vm.disabled
  },attrs:{"ui":_vm.realUi}},'button',_vm.attrs,false),_vm.listeners),[(!_vm.loading)?[_vm._t("default")]:[_vm._t("loading",[_c('veui-icon',{attrs:{"name":_vm.icons.loading,"spin":""}}),_vm._v(" "),_c('span',{staticClass:"veui-button-loading-text"},[_vm._t("default")],2)])]],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/veui/components/Button.vue?vue&type=template&id=22e2529d&

// EXTERNAL MODULE: ./node_modules/lodash/omit.js
var omit = __webpack_require__(405);
var omit_default = /*#__PURE__*/__webpack_require__.n(omit);

// EXTERNAL MODULE: ./node_modules/veui-theme-one/icons/loading.js
var loading = __webpack_require__(419);

// EXTERNAL MODULE: ./node_modules/veui/managers/config.js
var config = __webpack_require__(390);

// CONCATENATED MODULE: ./node_modules/veui-theme-one/components/Button.js


config["a" /* default */].defaults({
  icons: {
    loading: 'loading'
  },
  ui: {
    style: {
      values: ['alt', 'primary', 'dark']
    },
    role: {
      values: ['link']
    },
    size: {
      values: ['large', 'small', 'tiny', 'micro']
    },
    shape: {
      values: ['round', 'square']
    }
  }
}, 'button');
// EXTERNAL MODULE: ./node_modules/veui/components/Icon.vue + 2 modules
var Icon = __webpack_require__(53);

// EXTERNAL MODULE: ./node_modules/veui/mixins/ui.js
var ui = __webpack_require__(391);

// EXTERNAL MODULE: ./node_modules/veui/utils/helper.js
var helper = __webpack_require__(115);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/veui-loader/lib??ref--11!./node_modules/veui/components/Button.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




var EVENTS = ['mousedown', 'mouseup', 'mouseenter', 'mouseleave', 'click', 'keydown', 'keyup', 'keypress', 'focus', 'blur'];
/* harmony default export */ var Buttonvue_type_script_lang_js_ = ({
  name: 'veui-button',
  mixins: [ui["a" /* default */]],
  components: {
    'veui-icon': Icon["a" /* default */]
  },
  props: {
    disabled: Boolean,
    name: String,
    type: {
      type: String,
      default: 'button'
    },
    value: String,
    loading: Boolean
  },
  computed: {
    attrs: function attrs() {
      var attrs = omit_default()(this.$props, 'loading');

      attrs.disabled = this.disabled || this.loading;
      return attrs;
    },
    listeners: function listeners() {
      return Object(helper["c" /* getListeners */])(EVENTS, this);
    }
  },
  methods: {
    focus: function focus() {
      this.$el.focus();
    }
  }
});
// CONCATENATED MODULE: ./node_modules/veui/components/Button.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Buttonvue_type_script_lang_js_ = (Buttonvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/veui-theme-one/components/button.less?vue&type=style&index=0&lang=less&
var buttonvue_type_style_index_0_lang_less_ = __webpack_require__(421);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/veui/components/Button.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Buttonvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "Button.vue"
/* harmony default export */ var Button = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 417:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(405);
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_omit__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(115);



/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    overlayClass: Object(_utils_helper__WEBPACK_IMPORTED_MODULE_2__[/* getClassPropDef */ "a"])(),
    overlayOptions: {
      default: function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {
      localOverlayOptions: {}
    };
  },
  computed: {
    realOverlayOptions: function realOverlayOptions() {
      var options = _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, this.localOverlayOptions, this.overlayOptions);

      var position = options.position;
      return lodash_omit__WEBPACK_IMPORTED_MODULE_1___default()(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, options, Object(_utils_helper__WEBPACK_IMPORTED_MODULE_2__[/* resolveOverlayPosition */ "m"])(position)), 'position');
    }
  },
  methods: {
    mergeOverlayClass: function mergeOverlayClass(klass) {
      return Object(_utils_helper__WEBPACK_IMPORTED_MODULE_2__[/* mergeClasses */ "k"])(this.overlayClass, klass);
    },
    relocate: function relocate() {
      if (!this.$refs.overlay) {
        throw new Error('Can not find [this.$refs.overlay] to relocate');
      }

      this.$refs.overlay.relocate();
    }
  }
});

/***/ }),

/***/ 419:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var veui_components_Icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53);

veui_components_Icon__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].register({
  "loading": {
    "width": "12",
    "height": "12",
    "paths": [{
      "d": "M11.22 4.17a5.5 5.5 0 1 0 .1 3.47l-.96-.29a4.5 4.5 0 1 1-.08-2.84l.94-.34z"
    }]
  }
});

/***/ }),

/***/ 421:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _vue_style_loader_index_js_ref_4_oneOf_1_0_css_loader_index_js_ref_4_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_4_oneOf_1_2_less_loader_dist_cjs_js_ref_4_oneOf_1_3_button_less_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(404);
/* harmony import */ var _vue_style_loader_index_js_ref_4_oneOf_1_0_css_loader_index_js_ref_4_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_4_oneOf_1_2_less_loader_dist_cjs_js_ref_4_oneOf_1_3_button_less_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_4_oneOf_1_0_css_loader_index_js_ref_4_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_4_oneOf_1_2_less_loader_dist_cjs_js_ref_4_oneOf_1_3_button_less_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_vue_style_loader_index_js_ref_4_oneOf_1_0_css_loader_index_js_ref_4_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_4_oneOf_1_2_less_loader_dist_cjs_js_ref_4_oneOf_1_3_button_less_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 422:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, "/* Theme colors */\n/* Additional colors */\n/* Grayscale colors */\n/* Text colors */\n/* Link colors */\n/* Font settings */\n/* Metrics */\n/* Form widths */\n/* Transition duration */\n.veui-button {\n  padding: 0 20px;\n  user-select: none;\n  vertical-align: middle;\n  transition-property: border-color, background-color, color, opacity;\n  transition-duration: 0.2s;\n  border: 1px solid #dbdbdb;\n  background-color: #fff;\n  color: #666;\n  height: 36px;\n  line-height: 34px;\n}\n.veui-button:hover,\n.veui-button:active {\n  color: #333;\n}\n.veui-button:hover {\n  background-color: #f7f7f7;\n}\n.veui-button:active {\n  background-color: #e7e7e7;\n}\n.veui-button:focus {\n  outline: none;\n}\n.veui-button.focus-visible {\n  color: #3998fc;\n}\n.veui-button[ui~=\"primary\"] {\n  border-color: transparent;\n  background-color: #3998fc;\n  color: #fff;\n}\n.veui-button[ui~=\"primary\"]:hover,\n.veui-button[ui~=\"primary\"].focus-visible {\n  background-color: #3389e3;\n}\n.veui-button[ui~=\"primary\"]:active {\n  background-color: #2e7aca;\n}\n.veui-button[ui~=\"alt\"] {\n  border-color: transparent;\n  background-color: #eee;\n}\n.veui-button[ui~=\"alt\"]:hover {\n  background-color: #e7e7e7;\n}\n.veui-button[ui~=\"alt\"]:active {\n  background-color: #dbdbdb;\n}\n.veui-button[ui~=\"alt\"].focus-visible {\n  color: #3998fc;\n}\n.veui-button[ui~=\"dark\"] {\n  border-color: transparent;\n  background-color: rgba(0, 0, 0, 0.7);\n  color: #fff;\n}\n.veui-button[ui~=\"dark\"]:hover,\n.veui-button[ui~=\"dark\"]:active,\n.veui-button[ui~=\"dark\"].focus-visible {\n  background-color: rgba(0, 0, 0, 0.8);\n}\n.veui-button[ui~=\"large\"] {\n  line-height: 42px;\n  font-size: 16px;\n  height: 42px;\n  line-height: 40px;\n}\n.veui-button[ui~=\"large\"] .veui-icon {\n  vertical-align: top;\n  margin-top: calc(20px - 0.5em);\n}\n.veui-button[ui~=\"small\"] {\n  line-height: 32px;\n  font-size: 12px;\n  height: 32px;\n  line-height: 30px;\n  padding-right: 10px;\n  padding-left: 10px;\n}\n.veui-button[ui~=\"small\"] .veui-icon {\n  vertical-align: top;\n  margin-top: calc(15px - 0.5em);\n}\n.veui-button[ui~=\"tiny\"] {\n  line-height: 28px;\n  font-size: 12px;\n  height: 28px;\n  line-height: 26px;\n  padding-right: 10px;\n  padding-left: 10px;\n}\n.veui-button[ui~=\"tiny\"] .veui-icon {\n  vertical-align: top;\n  margin-top: calc(13px - 0.5em);\n}\n.veui-button[ui~=\"micro\"] {\n  min-width: auto;\n  line-height: 22px;\n  height: 22px;\n  line-height: 20px;\n  font-size: 12px;\n  padding-right: 10px;\n  padding-left: 10px;\n}\n.veui-button[ui~=\"micro\"] .veui-icon {\n  vertical-align: top;\n  margin-top: calc(10px - 0.5em);\n}\n.veui-button[ui~=\"round\"] {\n  border-radius: 50%;\n}\n.veui-button[ui~=\"round\"],\n.veui-button[ui~=\"square\"] {\n  width: 36px;\n  min-width: auto;\n  padding-right: 0;\n  padding-left: 0;\n  text-align: center;\n}\n.veui-button[ui~=\"round\"][ui~=\"large\"],\n.veui-button[ui~=\"square\"][ui~=\"large\"] {\n  width: 42px;\n}\n.veui-button[ui~=\"round\"][ui~=\"small\"],\n.veui-button[ui~=\"square\"][ui~=\"small\"] {\n  width: 32px;\n}\n.veui-button[ui~=\"round\"][ui~=\"tiny\"],\n.veui-button[ui~=\"square\"][ui~=\"tiny\"] {\n  width: 28px;\n}\n.veui-button[ui~=\"round\"][ui~=\"micro\"],\n.veui-button[ui~=\"square\"][ui~=\"micro\"] {\n  width: 22px;\n}\n.veui-button.veui-disabled,\n.veui-button.veui-disabled[ui],\n.veui-button.veui-disabled:hover,\n.veui-button.veui-disabled[ui]:hover {\n  cursor: not-allowed;\n  border-color: transparent;\n  background-color: #eee;\n  color: #b8b8b8;\n}\n.veui-button[ui~=\"link\"] {\n  display: inline;\n  min-width: auto;\n  border: none;\n  padding: 0;\n}\n.veui-button[ui~=\"link\"],\n.veui-button[ui~=\"link\"]:hover,\n.veui-button[ui~=\"link\"]:active,\n.veui-button[ui~=\"link\"].focus-visible {\n  background-color: transparent;\n}\n.veui-button[ui~=\"link\"].veui-disabled,\n.veui-button[ui~=\"link\"].veui-disabled:hover {\n  background-color: transparent;\n}\n.veui-button-loading,\n.veui-button-loading[ui] {\n  cursor: default;\n  pointer-events: none;\n  opacity: 0.5;\n}\n.veui-button .veui-icon {\n  max-width: 1em;\n}\n.veui-button .veui-icon + .veui-button-loading-text {\n  margin-left: 5px;\n}\n.veui-button .veui-icon {\n  vertical-align: top;\n  margin-top: calc(17px - 0.5em);\n}\n.veui-button-loading-text {\n  vertical-align: top;\n}\n[ui~=\"round\"] > .veui-button-loading-text,\n[ui~=\"square\"] > .veui-button-loading-text {\n  display: none;\n}\n", ""]);

// exports


/***/ }),

/***/ 434:
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(34),
    isObjectLike = __webpack_require__(33);

/** `Object#toString` result references. */
var numberTag = '[object Number]';

/**
 * Checks if `value` is classified as a `Number` primitive or object.
 *
 * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are
 * classified as numbers, use the `_.isFinite` method.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a number, else `false`.
 * @example
 *
 * _.isNumber(3);
 * // => true
 *
 * _.isNumber(Number.MIN_VALUE);
 * // => true
 *
 * _.isNumber(Infinity);
 * // => true
 *
 * _.isNumber('3');
 * // => false
 */
function isNumber(value) {
  return typeof value == 'number' ||
    (isObjectLike(value) && baseGetTag(value) == numberTag);
}

module.exports = isNumber;


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

/***/ 445:
/***/ (function(module, exports) {

var nestRE = /^(attrs|props|on|nativeOn|class|style|hook)$/

module.exports = function mergeJSXProps (objs) {
  return objs.reduce(function (a, b) {
    var aa, bb, key, nestedKey, temp
    for (key in b) {
      aa = a[key]
      bb = b[key]
      if (aa && nestRE.test(key)) {
        // normalize class
        if (key === 'class') {
          if (typeof aa === 'string') {
            temp = aa
            a[key] = aa = {}
            aa[temp] = true
          }
          if (typeof bb === 'string') {
            temp = bb
            b[key] = bb = {}
            bb[temp] = true
          }
        }
        if (key === 'on' || key === 'nativeOn' || key === 'hook') {
          // merge functions
          for (nestedKey in bb) {
            aa[nestedKey] = mergeFn(aa[nestedKey], bb[nestedKey])
          }
        } else if (Array.isArray(aa)) {
          a[key] = aa.concat(bb)
        } else if (Array.isArray(bb)) {
          a[key] = [aa].concat(bb)
        } else {
          for (nestedKey in bb) {
            aa[nestedKey] = bb[nestedKey]
          }
        }
      } else {
        a[key] = b[key]
      }
    }
    return a
  }, {})
}

function mergeFn (a, b) {
  return function () {
    a && a.apply(this, arguments)
    b && b.apply(this, arguments)
  }
}


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

/***/ 453:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(512);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(6).default
var update = add("00ebc54c", content, true, {"sourceMap":false});

/***/ }),

/***/ 459:
/***/ (function(module, exports, __webpack_require__) {

var baseClone = __webpack_require__(425);

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_SYMBOLS_FLAG = 4;

/**
 * This method is like `_.clone` except that it recursively clones `value`.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to recursively clone.
 * @returns {*} Returns the deep cloned value.
 * @see _.clone
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var deep = _.cloneDeep(objects);
 * console.log(deep[0] === objects[0]);
 * // => false
 */
function cloneDeep(value) {
  return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
}

module.exports = cloneDeep;


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

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _vue_style_loader_index_js_ref_4_oneOf_1_0_css_loader_index_js_ref_4_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_4_oneOf_1_2_less_loader_dist_cjs_js_ref_4_oneOf_1_3_tooltip_less_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(453);
/* harmony import */ var _vue_style_loader_index_js_ref_4_oneOf_1_0_css_loader_index_js_ref_4_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_4_oneOf_1_2_less_loader_dist_cjs_js_ref_4_oneOf_1_3_tooltip_less_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_4_oneOf_1_0_css_loader_index_js_ref_4_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_4_oneOf_1_2_less_loader_dist_cjs_js_ref_4_oneOf_1_3_tooltip_less_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_vue_style_loader_index_js_ref_4_oneOf_1_0_css_loader_index_js_ref_4_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_4_oneOf_1_2_less_loader_dist_cjs_js_ref_4_oneOf_1_3_tooltip_less_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 512:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, "/* Theme colors */\n/* Additional colors */\n/* Grayscale colors */\n/* Text colors */\n/* Link colors */\n/* Font settings */\n/* Metrics */\n/* Form widths */\n/* Transition duration */\n.veui-tooltip {\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);\n  position: relative;\n  padding: 7.5px 10px;\n  background-color: rgba(51, 51, 51, 0.8);\n  color: #fff;\n  line-height: 1.5;\n  border-radius: 1px;\n}\n.veui-tooltip-box-transparent {\n  pointer-events: none;\n}\n.veui-tooltip::before,\n.veui-tooltip::after {\n  content: \"\";\n  color: rgba(51, 51, 51, 0.8);\n  transform-origin: 50% 100%;\n  top: 50%;\n  left: 50%;\n  position: absolute;\n  width: 0;\n  height: 0;\n  border: 4px solid transparent;\n  border-bottom-color: currentColor;\n  margin-left: -4px;\n  margin-top: -8px;\n}\n.veui-tooltip::before {\n  display: none;\n}\n.tether-element-attached-top.tether-target-attached-bottom .veui-tooltip {\n  margin-top: 8px;\n}\n.tether-element-attached-top.tether-target-attached-bottom .veui-tooltip::before,\n.tether-element-attached-top.tether-target-attached-bottom .veui-tooltip::after {\n  top: 0;\n}\n.tether-element-attached-top.tether-target-attached-bottom .veui-tooltip::before {\n  transform: scale(1.3);\n}\n.tether-element-attached-right.tether-target-attached-left .veui-tooltip {\n  margin-right: 8px;\n}\n.tether-element-attached-right.tether-target-attached-left .veui-tooltip::before,\n.tether-element-attached-right.tether-target-attached-left .veui-tooltip::after {\n  right: -4px;\n  left: auto;\n  transform: scale(1.1) rotate(90deg);\n}\n.tether-element-attached-right.tether-target-attached-left .veui-tooltip::before {\n  transform: scale(1.3) rotate(90deg);\n}\n.tether-element-attached-bottom.tether-target-attached-top .veui-tooltip {\n  margin-bottom: 8px;\n}\n.tether-element-attached-bottom.tether-target-attached-top .veui-tooltip::before,\n.tether-element-attached-bottom.tether-target-attached-top .veui-tooltip::after {\n  bottom: 0;\n  top: auto;\n  transform: scale(1.1) rotate(180deg);\n}\n.tether-element-attached-bottom.tether-target-attached-top .veui-tooltip::before {\n  transform: scale(1.3) rotate(180deg);\n}\n.tether-element-attached-left.tether-target-attached-right .veui-tooltip {\n  margin-left: 8px;\n}\n.tether-element-attached-left.tether-target-attached-right .veui-tooltip::before,\n.tether-element-attached-left.tether-target-attached-right .veui-tooltip::after {\n  left: 0;\n  transform: scale(1.1) rotate(270deg);\n}\n.tether-element-attached-left.tether-target-attached-right .veui-tooltip::before {\n  transform: scale(1.3) rotate(270deg);\n}\n.tether-element-attached-top.tether-target-attached-top .veui-tooltip::before,\n.tether-element-attached-top.tether-target-attached-top .veui-tooltip::after {\n  top: 14px;\n}\n.tether-element-attached-right.tether-target-attached-right .veui-tooltip::before,\n.tether-element-attached-right.tether-target-attached-right .veui-tooltip::after {\n  right: 14px;\n  left: auto;\n}\n.tether-element-attached-bottom.tether-target-attached-bottom .veui-tooltip::before,\n.tether-element-attached-bottom.tether-target-attached-bottom .veui-tooltip::after {\n  top: auto;\n  bottom: 14px;\n}\n.tether-element-attached-left.tether-target-attached-left .veui-tooltip::before,\n.tether-element-attached-left.tether-target-attached-left .veui-tooltip::after {\n  left: 14px;\n}\n.veui-tooltip[ui~=\"alt\"] {\n  background-color: #fff;\n  color: #666;\n}\n.veui-tooltip[ui~=\"alt\"]::before {\n  display: block;\n  color: rgba(0, 0, 0, 0.1);\n  z-index: -1;\n}\n.veui-tooltip[ui~=\"alt\"]::after {\n  color: #fff;\n}\n.veui-tooltip[ui~=\"small\"] {\n  font-size: 12px;\n}\n.veui-tooltip[ui~=\"large\"] {\n  font-size: 16px;\n}\n", ""]);

// exports


/***/ }),

/***/ 522:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/babel-helper-vue-jsx-merge-props/index.js
var babel_helper_vue_jsx_merge_props = __webpack_require__(445);
var babel_helper_vue_jsx_merge_props_default = /*#__PURE__*/__webpack_require__.n(babel_helper_vue_jsx_merge_props);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.split.js
var es6_regexp_split = __webpack_require__(31);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.number.constructor.js
var es6_number_constructor = __webpack_require__(89);

// EXTERNAL MODULE: ./node_modules/lodash/isString.js
var isString = __webpack_require__(20);
var isString_default = /*#__PURE__*/__webpack_require__.n(isString);

// EXTERNAL MODULE: ./node_modules/veui/managers/config.js
var config = __webpack_require__(390);

// CONCATENATED MODULE: ./node_modules/veui-theme-one/components/Tooltip.js

config["a" /* default */].defaults({
  ui: {
    style: {
      values: ['alt']
    },
    size: {
      values: ['large', 'small']
    }
  }
}, 'tooltip');
// EXTERNAL MODULE: ./node_modules/veui/components/Overlay.vue + 6 modules
var Overlay = __webpack_require__(429);

// EXTERNAL MODULE: ./node_modules/veui/mixins/ui.js
var ui = __webpack_require__(391);

// EXTERNAL MODULE: ./node_modules/veui/mixins/overlay.js
var overlay = __webpack_require__(417);

// EXTERNAL MODULE: ./node_modules/veui/directives/outside.js
var outside = __webpack_require__(127);

// EXTERNAL MODULE: ./node_modules/veui/utils/context.js
var context = __webpack_require__(125);

// EXTERNAL MODULE: ./node_modules/veui/utils/warn.js
var warn = __webpack_require__(403);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/veui-loader/lib??ref--11!./node_modules/veui/components/Tooltip.vue?vue&type=script&lang=js&












var TRIGGER_MAP = {
  hover: 'mouseenter'
};
config["a" /* default */].defaults({
  'tooltip.hideDelay': 300
});
/* harmony default export */ var Tooltipvue_type_script_lang_js_ = ({
  name: 'veui-tooltip',
  directives: {
    outside: outside["a" /* default */]
  },
  mixins: [ui["a" /* default */], overlay["a" /* default */]],
  components: {
    'veui-overlay': Overlay["a" /* default */]
  },
  props: {
    position: {
      type: String,
      default: 'top'
    },
    target: {
      validator: function validator(val) {
        return Object(context["d" /* isValidNodesResolver */])(val);
      }
    },
    trigger: {
      type: String,
      default: 'hover'
    },
    hideDelay: {
      type: Number,
      default: config["a" /* default */].get('tooltip.hideDelay')
    },
    custom: {
      type: Boolean,
      default: false
    },
    open: {
      type: Boolean,
      default: false
    },
    interactive: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      localOpen: this.open,
      localOverlayOptions: {
        position: this.position,
        constraints: [{
          to: 'window',
          attachment: 'together'
        }]
      }
    };
  },
  computed: {
    localTrigger: function localTrigger() {
      if (this.trigger === 'custom') {
        return {};
      }

      var open;
      var close;

      if (isString_default()(this.trigger)) {
        var trigger = this.trigger.split('-');
        open = trigger[0];
        close = trigger[1] || trigger[0];
      }

      open = TRIGGER_MAP[open] || open;
      return {
        open: open,
        close: close
      };
    },
    targetNode: function targetNode() {
      return Object(context["b" /* getNodes */])(this.target, this.$vnode.context)[0];
    },
    outsideOptions: function outsideOptions() {
      return {
        handler: this.closeHandler,
        refs: this.targetNode,
        trigger: this.localTrigger.close,
        delay: this.hideDelay,
        excludeSelf: !this.interactive
      };
    },
    realOpen: function realOpen() {
      return this.localOpen && !!this.targetNode;
    }
  },
  watch: {
    open: function open(val) {
      if (this.localOpen !== val) {
        this.localOpen = val;
      }
    },
    localOpen: function localOpen(val) {
      if (this.open !== val) {
        this.$emit('update:open', val);
      }
    },
    target: function target() {
      this.localOpen = this.open;
    },
    position: function position(val) {
      this.localOverlayOptions.position = val;
    }
  },
  methods: {
    openHandler: function openHandler() {
      this.localOpen = true;
    },
    closeHandler: function closeHandler() {
      this.localOpen = false;
    },
    bindHandler: function bindHandler() {
      if (!this.custom && this.trigger !== 'custom') {
        if (this.targetNode) {
          if (!this.targetNode.__bindToolTip__) {
            this.targetNode.addEventListener(this.localTrigger.open, this.openHandler, false);
            this.targetNode.__bindToolTip__ = true;
          }
        }
      }
    }
  },
  render: function render() {
    var h = arguments[0];
    var directives = [];

    if (!this.custom && this.trigger !== 'custom') {
      directives.push({
        name: 'outside',
        value: this.outsideOptions,
        modifiers: {}
      });
    }

    return h("veui-overlay", {
      ref: "overlay",
      attrs: {
        target: this.targetNode,
        open: this.realOpen,
        options: this.realOverlayOptions,
        overlayClass: this.mergeOverlayClass({
          'veui-tooltip-box': true,
          'veui-tooltip-box-transparent': !this.interactive
        })
      }
    }, [h("div", babel_helper_vue_jsx_merge_props_default()([{
      "class": "veui-tooltip",
      attrs: {
        ui: this.realUi,
        role: "tooltip"
      }
    }, {
      directives: directives
    }]), [h("div", {
      "class": "veui-tooltip-content"
    }, [this.$slots.default])])]);
  },
  created: function created() {
    if (this.custom) {
      Object(warn["a" /* default */])('[veui-tooltip] `custom` is deprecated and will be removed in `1.0.0`. Use `trigger: \'custom\'` instead.');
    }
  },
  mounted: function mounted() {
    this.bindHandler();
  },
  updated: function updated() {
    this.bindHandler();
  },
  beforeDestroy: function beforeDestroy() {
    if (!this.custom && this.trigger !== 'custom') {
      this.targetNode && this.targetNode.removeEventListener(this.localTrigger.open, this.openHandler, false);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/veui/components/Tooltip.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Tooltipvue_type_script_lang_js_ = (Tooltipvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/veui-theme-one/components/tooltip.less?vue&type=style&index=0&lang=less&
var tooltipvue_type_style_index_0_lang_less_ = __webpack_require__(511);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/veui/components/Tooltip.vue
var Tooltip_render, staticRenderFns





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Tooltipvue_type_script_lang_js_,
  Tooltip_render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "Tooltip.vue"
/* harmony default export */ var Tooltip = __webpack_exports__["a"] = (component.exports);

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

/***/ 823:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var veui_components_Icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53);

veui_components_Icon__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].register({
  "upload": {
    "width": "14",
    "height": "14",
    "paths": [{
      "d": "M7.5 1.39v9.41h-1V1.45l-2.8 2.8-.7-.71L6.5.04V0h1v.04l.04-.03 3.53 3.53-.7.71L7.5 1.39zM.87 8v5h12.24V8c1.06 0 .88.34.88.75v4.5c0 .42-.39.75-.88.75H.88c-.49 0-.88-.34-.88-.75v-4.5C0 8.33-.04 8 .87 8z",
      "fill-rule": "evenodd"
    }]
  }
});

/***/ }),

/***/ 824:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var veui_components_Icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53);

veui_components_Icon__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].register({
  "clip": {
    "width": "12",
    "height": "12",
    "paths": [{
      "d": "M4.67 4.65l1.29-1.53a2.5 2.5 0 0 1 3.83 3.21l-1.93 2.3L7.09 8l1.93-2.3a1.5 1.5 0 0 0-2.3-1.93L4.8 6.06l-.77-.64.64-.77.65-.76.76.64-1.93 2.3a.5.5 0 0 0 .77.64l2.23-2.66.77.64-2.24 2.66a1.5 1.5 0 0 1-2.3-1.93l1.3-1.53zm3.7 1.8l.78.65-1.93 2.3a3.5 3.5 0 0 1-5.37-4.5l2.9-3.45.77.64-2.9 3.45a2.5 2.5 0 0 0 3.83 3.22l1.93-2.3z"
    }]
  }
});

/***/ }),

/***/ 825:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var veui_components_Icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53);

veui_components_Icon__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].register({
  "refresh": {
    "width": "12",
    "height": "12",
    "paths": [{
      "d": "M10.62 8.31c-.07.03-.42 0-.45.06-.72 1.41-2.89 2.46-4.36 2.47-2.52.03-4.9-2.46-4.88-4.9 0-2.42 2.5-5.01 4.84-5 1.3 0 3.4 1.17 4.27 2.15l-1.89.08c-.16 0-.37.39-.37.55 0 .16.21.38.37.38h2.5c.16 0 .34-.58.34-.75V.72a.3.3 0 0 0-.3-.3c-.15 0-.65.14-.65.3l-.03 1.13A5.72 5.72 0 0 0 .46 3.66a6.13 6.13 0 0 0 1.24 6.58A5.78 5.78 0 0 0 5.8 12a5.7 5.7 0 0 0 3.07-.9 6 6 0 0 0 2.1-2.35.32.32 0 0 0-.13-.42.26.26 0 0 0-.22-.02z"
    }]
  }
});

/***/ }),

/***/ 826:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1373);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(6).default
var update = add("2d45caf6", content, true, {"sourceMap":false});

/***/ }),

/***/ 975:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/veui-loader/lib??ref--11!./node_modules/veui/components/Uploader.vue?vue&type=template&id=3e8b5959&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"main",staticClass:"veui-uploader",attrs:{"ui":_vm.realUi}},[(_vm.type === 'file')?_c('div',{staticClass:"veui-uploader-button-container"},[_c('label',{ref:"label",staticClass:"veui-button veui-uploader-input-label",class:{'veui-uploader-input-label-disabled': _vm.realUneditable ||
        (_vm.maxCount > 1 && _vm.fileList.length >= _vm.maxCount) ||
        (_vm.requestMode === 'iframe' && _vm.isSubmiting)},on:{"click":_vm.handleClick}},[_vm._t("button-label",[_c('veui-icon',{staticClass:"veui-uploader-input-label-icon",attrs:{"name":_vm.icons.upload}}),_vm._v("选择文件")]),_vm._v(" "),_c('input',{ref:"input",attrs:{"id":_vm.inputId,"hidden":"","type":"file","name":_vm.name,"disabled":_vm.realUneditable ||
          (_vm.maxCount > 1 && _vm.fileList.length >= _vm.maxCount) ||
          (_vm.requestMode === 'iframe' && _vm.disabledWhenSubmiting),"accept":_vm.accept,"multiple":_vm.requestMode !== 'iframe' && (_vm.maxCount > 1 || _vm.maxCount === undefined) && !_vm.isReplacing},on:{"change":_vm.handleNewFiles,"click":function($event){$event.stopPropagation();}}})],2),_vm._v(" "),(_vm.$slots.desc)?_c('span',{staticClass:"veui-uploader-tip"},[_vm._t("desc")],2):_vm._e(),_vm._v(" "),_c('span',{staticClass:"veui-uploader-error"},[(_vm.error.typeInvalid)?[_vm._t("type-invalid",[_c('veui-icon',{attrs:{"name":_vm.icons.alert}}),_vm._v("文件的类型不符合要求")])]:_vm._e(),_vm._v(" "),(_vm.error.sizeInvalid)?[_vm._t("size-invalid",[_c('veui-icon',{attrs:{"name":_vm.icons.alert}}),_vm._v("文件的大小不符合要求")])]:_vm._e(),_vm._v(" "),(_vm.error.countOverflow)?[_vm._t("count-overflow",[_c('veui-icon',{attrs:{"name":_vm.icons.alert}}),_vm._v("文件的数量超过限制")])]:_vm._e()],2)]):_vm._e(),_vm._v(" "),_c('transition-group',{class:_vm.listClass,attrs:{"tag":"ul","name":"veui-uploader-list"}},[_vm._l((_vm.fileList),function(file,index){return _c('li',{key:((file.name) + "-" + (file.src) + "-" + index)},[((_vm.type === 'file' && file.status !== 'uploading')
        || _vm.type === 'image' && (!file.status || file.status === 'success'))?[_vm._t("file",[(_vm.type === 'file')?[_vm._t("file-before",null,null,_vm.getScopeValue(index, file)),_vm._v(" "),_c('div',{staticClass:"veui-uploader-list-container"},[_c('veui-icon',{staticClass:"veui-uploader-list-icon",attrs:{"name":_vm.icons.file}}),_vm._v(" "),_c('span',{staticClass:"veui-uploader-list-name",class:{'veui-uploader-list-name-success': file.status === 'success',
                  'veui-uploader-list-name-failure': file.status === 'failure'
                },attrs:{"title":file.name}},[_vm._v(_vm._s(file.name))]),_vm._v(" "),(file.status === 'success')?_c('span',{staticClass:"veui-uploader-success"},[_vm._t("success-label",[_vm._v("上传成功！")])],2):_vm._e(),_vm._v(" "),(file.status === 'failure')?_c('span',{ref:("fileFailure" + index),refInFor:true,staticClass:"veui-uploader-failure"},[_vm._t("failure-label",[_vm._v("上传失败")])],2):_vm._e(),_vm._v(" "),(file.status === 'failure')?_c('veui-button',{class:(_vm.listClass + "-retry"),attrs:{"ui":_vm.uiParts.retryFileDone},on:{"click":function($event){_vm.retry(file)}}},[_c('veui-icon',{attrs:{"name":_vm.icons.redo}}),_vm._v("重试")],1):_vm._e(),_vm._v(" "),_c('veui-button',{staticClass:"veui-uploader-button-remove",attrs:{"ui":_vm.uiParts.clearFileDone,"disabled":_vm.realUneditable},on:{"click":function($event){_vm.removeFile(file)}}},[_c('veui-icon',{attrs:{"name":_vm.icons.clear}})],1),_vm._v(" "),_c('veui-tooltip',{attrs:{"position":"top","target":("fileFailure" + index)}},[_vm._v(_vm._s(file.failureReason))])],1),_vm._v(" "),_vm._t("file-after",null,null,_vm.getScopeValue(index, file))]:[_vm._t("file-before",null,null,_vm.getScopeValue(index, file)),_vm._v(" "),_c('div',{staticClass:"veui-uploader-list-image-container"},[_c('img',{attrs:{"src":file.src,"alt":file.alt || ''}}),_vm._v(" "),(!_vm.realUneditable)?_c('div',{class:(_vm.listClass + "-mask")},[_c('label',{staticClass:"veui-button",class:{'veui-uploader-input-label-disabled': _vm.realUneditable},attrs:{"for":_vm.inputId,"ui":_vm.uiParts.retryImageSuccess},on:{"click":function($event){$event.stopPropagation();_vm.replaceFile(file)}}},[_vm._v("重新上传")]),_vm._v(" "),_c('veui-button',{class:(_vm.listClass + "-mask-remove"),attrs:{"ui":_vm.uiParts.clearImageSuccess,"disabled":_vm.realUneditable},on:{"click":function($event){_vm.removeFile(file)}}},[_c('veui-icon',{attrs:{"name":_vm.icons.clear,"label":"移除"}})],1),_vm._v(" "),_vm._t("extra-operation",null,null,_vm.getScopeValue(index, file))],2):_vm._e(),_vm._v(" "),_c('transition',{attrs:{"name":"veui-uploader-fade"}},[(file.status === 'success')?_c('div',{class:(_vm.listClass + "-success")},[_c('span',{staticClass:"veui-uploader-success"},[_vm._t("success-label",[_c('veui-icon',{attrs:{"name":_vm.icons.success}}),_vm._v("完成")])],2)]):_vm._e()])],1),_vm._v(" "),_vm._t("file-after",null,null,_vm.getScopeValue(index, file))]],{file:_vm.getScopeValue(index, file)})]:(file.status === 'uploading')?[_vm._t("uploading",[_vm._t("file-before",null,null,_vm.getScopeValue(index, file)),_vm._v(" "),_c('div',{class:(_vm.listClass + "-container")},[_c('veui-uploader-progress',{class:_vm.type === 'image' ? (_vm.listClass + "-status") : null,attrs:{"type":_vm.progress,"loaded":file.loaded,"total":file.total,"convertSizeUnit":_vm.convertSizeUnit}},[_vm._t("uploading-label",[_vm._v("上传中...")])],2),_vm._v(" "),(_vm.type === 'file')?_c('veui-button',{staticClass:"veui-uploader-button-remove",attrs:{"ui":_vm.uiParts.cancelFile},on:{"click":function($event){_vm.cancelFile(file)}}},[_c('veui-icon',{attrs:{"name":_vm.icons.clear}})],1):_c('veui-button',{attrs:{"ui":_vm.uiParts.cancelImage},on:{"click":function($event){_vm.cancelFile(file)}}},[_vm._v("取消")])],1),_vm._v(" "),_vm._t("file-after",null,null,_vm.getScopeValue(index, file))],{file:_vm.getScopeValue(index, file)})]:(file.status === 'failure' && _vm.type === 'image')?[_vm._t("failure",[_vm._t("file-before",null,null,_vm.getScopeValue(index, file)),_vm._v(" "),_c('div',{class:(_vm.listClass + "-container")},[_c('div',{class:(_vm.listClass + "-status")},[_c('span',{staticClass:"veui-uploader-failure"},[_vm._t("failure-label",[_vm._v("错误！")]),_vm._v(_vm._s(file.failureReason))],2)]),_vm._v(" "),_c('veui-button',{attrs:{"ui":_vm.uiParts.retryImageFailure},on:{"click":function($event){_vm.retry(file)}}},[_vm._v("重试")]),_vm._v(" "),_c('veui-button',{class:(_vm.listClass + "-mask-remove " + _vm.listClass + "-mask-remove-failure"),attrs:{"ui":_vm.uiParts.clearImageFailure},on:{"click":function($event){_vm.removeFile(file)}}},[_c('veui-icon',{attrs:{"name":_vm.icons.clear,"label":"移除"}})],1)],1),_vm._v(" "),_vm._t("file-after",null,null,_vm.getScopeValue(index, file))],{file:_vm.getScopeValue(index, file)})]:_vm._e()],2)}),_vm._v(" "),(_vm.type === 'image')?_c('li',{directives:[{name:"show",rawName:"v-show",value:(!_vm.maxCount || _vm.fileList.length < _vm.maxCount),expression:"!maxCount || fileList.length < maxCount"}],key:"input"},[_c('div',{staticClass:"veui-uploader-list-image-container"},[_c('label',{ref:"label",class:{
            'veui-button': _vm.$scopedSlots['extra-operation'],
            'veui-uploader-input-label-image': !_vm.$scopedSlots['extra-operation'],
            'veui-uploader-input-label-disabled': _vm.$scopedSlots['extra-operation'] &&
              (_vm.realUneditable ||
              (_vm.maxCount > 1 && _vm.fileList.length >= _vm.maxCount) ||
              _vm.isSubmiting)
          },on:{"click":_vm.handleClick}},[_c('input',{ref:"input",attrs:{"id":_vm.inputId,"hidden":"","type":"file","name":_vm.name,"disabled":_vm.realUneditable || (_vm.requestMode === 'iframe' && _vm.disabledWhenSubmiting),"accept":_vm.accept,"multiple":_vm.requestMode !== 'iframe' && (_vm.maxCount > 1 || _vm.maxCount === undefined) && !_vm.isReplacing},on:{"change":_vm.handleNewFiles,"click":function($event){$event.stopPropagation();}}}),_vm._v(" "),(!_vm.$scopedSlots['extra-operation'])?_c('veui-icon',{attrs:{"name":_vm.icons.add}}):[_vm._t("button-label",[_vm._v("选择文件")])]],2),_vm._v(" "),_vm._t("extra-operation")],2)]):_vm._e()],2),_vm._v(" "),(_vm.$slots.desc && _vm.type === 'image')?_c('span',{staticClass:"veui-uploader-tip"},[_vm._t("desc")],2):_vm._e(),_vm._v(" "),(_vm.type === 'image')?_c('span',{staticClass:"veui-uploader-error"},[(_vm.error.typeInvalid)?[_vm._t("type-invalid",[_c('veui-icon',{attrs:{"name":_vm.icons.alert}}),_vm._v("文件的类型不符合要求")])]:_vm._e(),_vm._v(" "),(_vm.error.sizeInvalid)?[_vm._t("size-invalid",[_c('veui-icon',{attrs:{"name":_vm.icons.alert}}),_vm._v("文件的大小不符合要求")])]:_vm._e(),_vm._v(" "),(_vm.error.countOverflow)?[_vm._t("count-overflow",[_c('veui-icon',{attrs:{"name":_vm.icons.alert}}),_vm._v("文件的数量超过限制")])]:_vm._e()],2):_vm._e(),_vm._v(" "),(_vm.requestMode === 'iframe' && _vm.isSubmiting)?_c('iframe',{ref:"iframe",staticClass:"veui-uploader-hide",attrs:{"id":_vm.iframeId,"name":_vm.iframeId}}):_vm._e(),_vm._v(" "),(_vm.requestMode === 'iframe' && _vm.isSubmiting)?_c('form',{ref:"form",staticClass:"veui-uploader-hide",attrs:{"action":_vm.queryURL,"enctype":"multipart/form-data","method":"POST","target":_vm.iframeId}},[_vm._l((_vm.payload),function(value,key){return _c('input',{key:key,attrs:{"name":key},domProps:{"value":value}})}),_vm._v(" "),(_vm.iframeMode === 'callback')?_c('input',{attrs:{"name":"callback"},domProps:{"value":("parent." + _vm.callbackNamespace + "['" + _vm.callbackFuncName + "']")}}):_vm._e()],2):_vm._e()],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/veui/components/Uploader.vue?vue&type=template&id=3e8b5959&

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/typeof.js
var helpers_typeof = __webpack_require__(27);
var typeof_default = /*#__PURE__*/__webpack_require__.n(helpers_typeof);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.split.js
var es6_regexp_split = __webpack_require__(31);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.function.name.js
var es6_function_name = __webpack_require__(32);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.replace.js
var es6_regexp_replace = __webpack_require__(46);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(2);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.match.js
var es6_regexp_match = __webpack_require__(131);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/objectSpread.js
var objectSpread = __webpack_require__(9);
var objectSpread_default = /*#__PURE__*/__webpack_require__.n(objectSpread);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.number.constructor.js
var es6_number_constructor = __webpack_require__(89);

// EXTERNAL MODULE: ./node_modules/lodash/isEmpty.js
var isEmpty = __webpack_require__(1370);
var isEmpty_default = /*#__PURE__*/__webpack_require__.n(isEmpty);

// EXTERNAL MODULE: ./node_modules/lodash/includes.js
var includes = __webpack_require__(40);
var includes_default = /*#__PURE__*/__webpack_require__.n(includes);

// EXTERNAL MODULE: ./node_modules/lodash/omit.js
var omit = __webpack_require__(405);
var omit_default = /*#__PURE__*/__webpack_require__.n(omit);

// EXTERNAL MODULE: ./node_modules/lodash/pick.js
var pick = __webpack_require__(91);
var pick_default = /*#__PURE__*/__webpack_require__.n(pick);

// EXTERNAL MODULE: ./node_modules/lodash/last.js
var last = __webpack_require__(206);
var last_default = /*#__PURE__*/__webpack_require__.n(last);

// EXTERNAL MODULE: ./node_modules/lodash/isNumber.js
var isNumber = __webpack_require__(434);
var isNumber_default = /*#__PURE__*/__webpack_require__.n(isNumber);

// EXTERNAL MODULE: ./node_modules/lodash/assign.js
var lodash_assign = __webpack_require__(92);
var assign_default = /*#__PURE__*/__webpack_require__.n(lodash_assign);

// EXTERNAL MODULE: ./node_modules/lodash/uniqueId.js
var uniqueId = __webpack_require__(124);
var uniqueId_default = /*#__PURE__*/__webpack_require__.n(uniqueId);

// EXTERNAL MODULE: ./node_modules/lodash/cloneDeep.js
var cloneDeep = __webpack_require__(459);
var cloneDeep_default = /*#__PURE__*/__webpack_require__.n(cloneDeep);

// EXTERNAL MODULE: ./node_modules/veui-theme-one/icons/upload.js
var upload = __webpack_require__(823);

// EXTERNAL MODULE: ./node_modules/veui-theme-one/icons/cross.js
var cross = __webpack_require__(452);

// EXTERNAL MODULE: ./node_modules/veui-theme-one/icons/check.js
var check = __webpack_require__(463);

// EXTERNAL MODULE: ./node_modules/veui-theme-one/icons/clip.js
var clip = __webpack_require__(824);

// EXTERNAL MODULE: ./node_modules/veui-theme-one/icons/refresh.js
var refresh = __webpack_require__(825);

// EXTERNAL MODULE: ./node_modules/veui-theme-one/icons/plus-huge.js
var plus_huge = __webpack_require__(573);

// EXTERNAL MODULE: ./node_modules/veui-theme-one/icons/exclamation-circle-o.js
var exclamation_circle_o = __webpack_require__(437);

// EXTERNAL MODULE: ./node_modules/veui/managers/config.js
var config = __webpack_require__(390);

// CONCATENATED MODULE: ./node_modules/veui-theme-one/components/Uploader.js








config["a" /* default */].defaults({
  icons: {
    upload: 'upload',
    clear: 'cross',
    success: 'check',
    redo: 'refresh',
    file: 'clip',
    add: 'plus-huge',
    alert: 'exclamation-circle-o'
  },
  ui: {
    direction: {
      values: ['horizontal']
    }
  },
  parts: {
    retryFileDone: 'link micro',
    clearFileDone: 'link square micro',
    cancelFile: 'link square micro',
    cancelImage: 'small',
    retryImageSuccess: 'dark',
    clearImageSuccess: 'dark square micro',
    retryImageFailure: 'small',
    clearImageFailure: 'link square micro'
  }
}, 'uploader');
// EXTERNAL MODULE: ./node_modules/veui/components/Button.vue + 5 modules
var Button = __webpack_require__(406);

// EXTERNAL MODULE: ./node_modules/veui/components/Icon.vue + 2 modules
var Icon = __webpack_require__(53);

// EXTERNAL MODULE: ./node_modules/veui/components/Tooltip.vue + 3 modules
var Tooltip = __webpack_require__(522);

// EXTERNAL MODULE: ./node_modules/veui/mixins/ui.js
var ui = __webpack_require__(391);

// EXTERNAL MODULE: ./node_modules/veui/mixins/input.js
var input = __webpack_require__(402);

// EXTERNAL MODULE: ./node_modules/veui/utils/helper.js
var helper = __webpack_require__(115);

// EXTERNAL MODULE: ./node_modules/bytes/index.js
var bytes = __webpack_require__(1371);
var bytes_default = /*#__PURE__*/__webpack_require__.n(bytes);

// EXTERNAL MODULE: ./node_modules/veui/utils/warn.js
var warn = __webpack_require__(403);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/veui-loader/lib??ref--11!./node_modules/veui/components/Uploader.vue?vue&type=script&lang=js&


















//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//










config["a" /* default */].defaults({
  'uploader.requestMode': 'xhr',
  'uploader.iframeMode': 'postmessage',
  'uploader.callbackNamespace': 'veuiUploadResult'
});
/* harmony default export */ var Uploadervue_type_script_lang_js_ = ({
  name: 'veui-uploader',
  components: {
    'veui-icon': Icon["a" /* default */],
    'veui-button': Button["a" /* default */],
    'veui-tooltip': Tooltip["a" /* default */],
    'veui-uploader-progress': getProgress()
  },
  mixins: [ui["a" /* default */], input["a" /* default */]],
  model: {
    event: 'change'
  },
  props: {
    name: {
      type: String,
      default: 'file'
    },
    value: {
      type: [Array, String, Object]
    },
    type: {
      type: String,
      default: 'file'
    },
    action: String,
    headers: {
      type: Object,
      default: function _default() {
        return config["a" /* default */].get('uploader.headers');
      }
    },
    withCredentials: {
      type: Boolean,
      default: true
    },
    requestMode: {
      type: String,
      default: function _default() {
        return config["a" /* default */].get('uploader.requestMode');
      },
      validator: function validator(value) {
        return includes_default()(['xhr', 'iframe', 'custom'], value);
      }
    },
    iframeMode: {
      type: String,
      default: function _default() {
        return config["a" /* default */].get('uploader.iframeMode');
      }
    },

    /**
     * @deprecated
     */
    autoUpload: {
      type: Boolean,
      default: true,
      validator: function validator(val) {
        // TODO: remove support in 1.0.0
        if (val === false) {
          Object(warn["a" /* default */])('[veui-uploader] `auto-upload` is deprecated and will be removed in `1.0.0`. Use `autoupload` instead.');
        }

        return true;
      }
    },
    convertResponse: {
      default: function _default() {
        return config["a" /* default */].get('uploader.convertResponse');
      },
      validator: function validator(value) {
        return typeof value === 'function';
      }
    },
    callbackNamespace: {
      type: String,
      default: function _default() {
        return config["a" /* default */].get('uploader.callbackNamespace');
      }
    },
    dataType: {
      type: String,
      default: 'json',
      validator: function validator(value) {
        return includes_default()(['json', 'text'], value);
      }
    },
    extensions: {
      type: Array,
      default: function _default() {
        return ['jpg', 'jpeg', 'gif', 'png', 'bmp', 'tif', 'tiff', 'webp', 'apng', 'svg'];
      }
    },
    accept: String,
    maxCount: Number,
    maxSize: [Number, String],
    payload: Object,
    progress: {
      type: String,
      default: 'text'
    },
    autoupload: {
      type: Boolean,
      default: true
    },
    order: {
      type: String,
      default: 'asc',
      validator: function validator(value) {
        return includes_default()(['asc', 'desc'], value);
      }
    },
    compat: {
      type: Boolean,
      default: false
    },
    upload: {
      type: Function
    }
  },
  data: function data() {
    return {
      fileList: this.genFileList(this.value),
      canceled: false,
      // inputId用于图片里的重新上传的label的for
      inputId: uniqueId_default()('veui-uploader-input'),
      iframeId: uniqueId_default()('veui-uploader-iframe'),
      callbackFuncName: uniqueId_default()('veuiUploaderCallback'),
      replacingFile: null,
      currentSubmitingFile: null,
      // isSubmiting 控制form与iframe是否存在
      isSubmiting: false,
      // disabledWhenSubmiting 控制input在submit时是否禁用
      disabledWhenSubmiting: false,
      error: {
        sizeInvalid: false,
        typeInvalid: false,
        countOverflow: false
      }
    };
  },
  watch: {
    value: function value(val) {
      var temp = val;

      if (!Array.isArray(val)) {
        temp = this.genFileList(val);
      }

      var successIndex = 0;
      this.fileList = this.fileList.map(function (file) {
        if (file.status === 'success' || !file.status) {
          // 处理外部直接减少文件的情形
          if (successIndex + 1 > temp.length) {
            return null;
          }

          return assign_default()(file, temp[successIndex++]);
        }

        return file;
      }).filter(function (file) {
        return !!file;
      }) // 处理外部直接增加文件的情形
      .concat(cloneDeep_default()(temp.slice(successIndex)));
    },
    status: function status(val) {
      if (val) {
        this.$emit('statuschange', val);
      }
    }
  },
  computed: {
    listClass: function listClass() {
      return "veui-uploader-list".concat(this.type === 'image' ? '-image' : '');
    },
    latestFile: function latestFile() {
      return this.fileList[this.fileList.length - 1];
    },
    queryURL: function queryURL() {
      var queryString = Object(helper["n" /* stringifyQuery */])(assign_default()(this.requestMode === 'iframe' && this.iframeMode === 'callback' ? {
        callback: "parent.".concat(this.callbackNamespace, "['").concat(this.callbackFuncName, "']")
      } : {}, this.payload));
      return "".concat(this.action).concat(queryString ? '?' + queryString : '');
    },
    isReplacing: function isReplacing() {
      return !!this.replacingFile;
    },
    realUneditable: function realUneditable() {
      return this.realDisabled || this.realReadonly;
    },
    status: function status() {
      if (!this.fileList.length) {
        return 'empty';
      }

      if (this.fileList.some(function (file) {
        return file.status === 'uploading';
      })) {
        return 'uploading';
      }

      if (this.fileList.some(function (file) {
        return file.status === 'failure';
      })) {
        return 'failure';
      }

      return 'success';
    },
    realAutoupload: function realAutoupload() {
      return this.autoupload && this.autoUpload;
    },
    files: function files() {
      return this.fileList.map(function (file) {
        return objectSpread_default()({}, pick_default()(file, ['name', 'src', 'status']), file._extra);
      });
    },
    pureFileList: function pureFileList() {
      return this.files.filter(function (file) {
        return file.status === 'success' || !file.status;
      }).map(function (file) {
        return omit_default()(file, 'status');
      });
    }
  },
  created: function created() {
    if (this.requestMode !== 'custom' && !this.action) {
      Object(warn["a" /* default */])('[veui-uploader] `action` is required when `request-mode` is not `custom`.');
    }
  },
  mounted: function mounted() {
    var _this = this;

    if (this.requestMode === 'iframe') {
      if (this.iframeMode === 'postmessage') {
        this.handlePostmessage = function (event) {
          if (!event.source || !event.source.frameElement || event.source.frameElement.id !== _this.iframeId || _this.canceled) {
            return;
          } // 支持action为绝对路径或相对路径，ie9里的location没有origin


          var actionOrigin = /^https?:\/\//.test(_this.action) ? _this.action.match(/^https?:\/\/[^/]*/)[0] : location.origin || location.protocol + '//' + location.host;

          if (actionOrigin === event.origin) {
            _this.uploadCallback(_this.parseData(event.data), _this.currentSubmitingFile);
          }
        };

        window.addEventListener('message', this.handlePostmessage);
      } else if (this.iframeMode === 'callback') {
        if (!window[this.callbackNamespace]) {
          window[this.callbackNamespace] = {};
        }

        window[this.callbackNamespace][this.callbackFuncName] = function (data) {
          if (!_this.canceled) {
            _this.uploadCallback(_this.parseData(data), _this.currentSubmitingFile);
          }
        };
      }
    }
  },
  beforeDestroy: function beforeDestroy() {
    if (this.requestMode === 'iframe') {
      if (this.iframeMode === 'callback') {
        window[this.callbackNamespace][this.callbackFuncName] = null;
      } else if (this.iframeMode === 'postmessage') {
        window.removeEventListener('message', this.handlePostmessage);
      }
    }
  },
  methods: {
    handleClick: function handleClick() {
      this.replacingFile = null;
      this.reset();
    },
    genFileList: function genFileList(value) {
      var _this2 = this;

      if (!value) {
        return [];
      }

      if (Array.isArray(value)) {
        return value.map(function (file) {
          return _this2.getNewFile(file);
        });
      }

      if (typeof value === 'string') {
        return [assign_default()(this.fileList ? this.fileList[0] : {}, {
          src: value,
          name: value
        })];
      }

      return isEmpty_default()(value) ? [] : [this.getNewFile(value)];
    },
    getNewFile: function getNewFile(file) {
      var newFile = {};

      var extraInfo = omit_default()(file, ['name', 'src']);

      if (!isEmpty_default()(extraInfo)) {
        newFile._extra = cloneDeep_default()(extraInfo);
      }

      return assign_default()(newFile, pick_default()(file, ['name', 'src']));
    },
    handleNewFiles: function handleNewFiles() {
      var _this3 = this;

      this.canceled = false;
      this.error = {
        sizeInvalid: false,
        typeInvalid: false,
        countOverflow: false
      };
      var newFiles;

      if (this.requestMode !== 'iframe') {
        newFiles = toConsumableArray_default()(this.$refs.input.files).filter(function (file) {
          return _this3.validateFile(file);
        });
      } else {
        var name = this.$refs.input.value.replace('C:\\fakepath\\', '');
        var size = this.$refs.input.files && this.$refs.input.files[0].size;

        if (!this.validateFile({
          name: name,
          size: size
        })) {
          return;
        }

        newFiles = [{
          status: 'uploading',
          name: name
        }];
      }

      if (!newFiles.length) {
        return;
      }

      if (this.isReplacing) {
        // type=image时，点击重新上传进入此分支，替换掉原位置的文件replacingFile
        var newFile = newFiles[0];
        newFile.toBeUploaded = true;

        if (this.requestMode !== 'iframe' && window.URL) {
          newFile.src = window.URL.createObjectURL(newFile);
        }

        var replacingIndex = this.fileList.indexOf(this.replacingFile);
        this.removeFile(this.replacingFile);
        this.fileList.splice(replacingIndex, 0, null);
        this.$set(this.fileList, replacingIndex, newFile);
        this.replacingFile = null;

        if (this.requestMode === 'iframe' && this.realAutoupload) {
          this.submit(newFile);
        }

        if (this.requestMode !== 'iframe' && this.realAutoupload) {
          this.uploadFile(newFile);
        }
      } else {
        if (this.maxCount !== 1 && this.fileList.length + newFiles.length > this.maxCount) {
          this.error.countOverflow = true;
          return;
        }

        var currentFiles = this.fileList.filter(function (file) {
          return file.status !== 'failure';
        });
        var needImageSrc = this.requestMode !== 'iframe' && this.type === 'image' && window.URL;
        newFiles = newFiles.map(function (file) {
          if (needImageSrc) {
            file.src = window.URL.createObjectURL(file);
          }

          file.toBeUploaded = true;
          return file;
        });
        this.fileList = this.order === 'desc' ? toConsumableArray_default()(newFiles).concat(toConsumableArray_default()(currentFiles)) : toConsumableArray_default()(currentFiles).concat(toConsumableArray_default()(newFiles));

        if (this.maxCount === 1) {
          this.fileList = this.fileList.slice(-1);
        }

        if (this.requestMode === 'iframe' && this.realAutoupload) {
          this.submit();
        }

        if (this.requestMode !== 'iframe' && this.realAutoupload) {
          this.uploadFiles();
        }
      }
    },
    validateFile: function validateFile(_ref) {
      var name = _ref.name,
          size = _ref.size;
      var typeValidation = this.validateFileType(name);
      this.error.typeInvalid = !typeValidation;
      var sizeValidation = this.validateFileSize(size);
      this.error.sizeInvalid = !sizeValidation;
      return typeValidation && sizeValidation;
    },
    validateFileType: function validateFileType(filename) {
      var _this4 = this;

      if (!this.accept) {
        return true;
      }

      var extension = last_default()(filename.split('.')).toLowerCase();

      return this.accept.split(/,\s*/).some(function (item) {
        var acceptExtention = last_default()(item.split(/[./]/)).toLowerCase();

        if (acceptExtention === extension || // 对于类似'application/msword'这样的mimetype与扩展名对不上的情形跳过校验
        acceptExtention !== '*' && item.indexOf('/') > -1) {
          return true;
        }

        if (acceptExtention === '*' && item.indexOf('/') > -1 && _this4.extensions.indexOf(extension) > -1) {
          return true;
        }

        return false;
      });
    },
    validateFileSize: function validateFileSize(fileSize) {
      return !this.maxSize || !fileSize || fileSize <= bytes_default.a.parse(this.maxSize);
    },
    uploadFiles: function uploadFiles() {
      var _this5 = this;

      this.fileList.forEach(function (file) {
        if (file.toBeUploaded) {
          _this5.uploadFile(file);
        }
      });
    },
    onprogress: function onprogress(file, progress) {
      var index = this.fileList.indexOf(file);

      switch (this.progress) {
        case 'percent':
        case 'detail':
        case 'bar':
          file.loaded = progress.loaded;
          file.total = progress.total;
          this.updateFileList(file);
          break;
      }

      this.$emit('progress', this.files[index], index, this.requestMode === 'xhr' ? progress : null);
    },
    onload: function onload(file, data) {
      this.uploadCallback(data, file);
    },
    onerror: function onerror(file, error) {
      var index = this.fileList.indexOf(file);
      this.showFailureResult(error || {}, file);
      this.$emit('failure', this.files[index], index);
    },
    uploadFile: function uploadFile(file) {
      var _this6 = this;

      this.updateFileList(file, 'uploading');

      if (this.requestMode === 'xhr' && !this.upload) {
        var xhr = new XMLHttpRequest();
        file.xhr = xhr;

        xhr.upload.onprogress = function (e) {
          return _this6.onprogress(file, e);
        };

        xhr.onload = function () {
          return _this6.onload(file, _this6.parseData(xhr.responseText));
        };

        xhr.onerror = function (e) {
          return _this6.onerror(file, e);
        };

        var formData = new FormData();
        formData.append(this.name, file);

        for (var key in this.payload) {
          formData.append(key, this.payload[key]);
        }

        xhr.open('POST', this.queryURL, true);

        for (var _key in this.headers) {
          xhr.setRequestHeader(_key, this.headers[_key]);
        }

        xhr.withCredentials = this.withCredentials;
        xhr.send(formData);
      } else if (this.requestMode === 'custom' && this.upload) {
        this.upload.call(null, file, {
          onload: this.onload,
          onprogress: this.onprogress,
          onerror: this.onerror
        });
      }
    },
    replaceFile: function replaceFile(file) {
      this.replacingFile = file;
      this.reset();
    },
    submit: function submit() {
      var _this7 = this;

      var file = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.latestFile;
      this.currentSubmitingFile = file;
      this.updateFileList(file, 'uploading');
      this.isSubmiting = true;
      this.$nextTick(function () {
        var form = _this7.$refs.form;
        document.body.appendChild(_this7.$refs.iframe);
        document.body.appendChild(form);
        form.appendChild(_this7.$refs.input);
        form.submit();
        _this7.disabledWhenSubmiting = true;
      });
    },
    uploadCallback: function uploadCallback(data, file) {
      this.isSubmiting = false;
      this.disabledWhenSubmiting = false;
      var index = this.fileList.indexOf(file);
      data = this.convertResponse ? this.convertResponse(data) : data;

      if (data.status === 'success') {
        this.showSuccessResult(data, file);
        this.$emit('success', this.files[index], index);
      } else if (data.status === 'failure') {
        this.showFailureResult(data, file);
        this.$emit('failure', this.files[index], index);
      }

      this.currentSubmitingFile = null;
    },
    showSuccessResult: function showSuccessResult(data, file) {
      var _this8 = this;

      file.xhr = null;
      file.toBeUploaded = null;
      this.updateFileList(file, 'success', data, true);
      setTimeout(function () {
        _this8.updateFileList(file, null);
      }, 2000);
    },
    showFailureResult: function showFailureResult(data, file) {
      file.xhr = null;
      file.toBeUploaded = null;
      file.failureReason = data.reason || '';
      this.updateFileList(file, 'failure', data);
    },
    updateFileList: function updateFileList(file, status, properties) {
      var toEmit = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

      if (status !== undefined) {
        file.status = status;
      }

      if (properties) {
        assign_default()(file, properties);

        file._extra = omit_default()(properties, ['status', 'name', 'src']);
      }

      this.$set(this.fileList, this.fileList.indexOf(file), file);

      if (toEmit) {
        this.$emit('change', this.getValue(false));
      }
    },
    getPureFile: function getPureFile(file, properties) {
      return assign_default()(pick_default()(file, ['name', 'src']), omit_default()(properties, 'status'));
    },
    getIndexInPureList: function getIndexInPureList(file) {
      var initialIndex = this.fileList.indexOf(file);
      return initialIndex - this.fileList.slice(0, initialIndex).filter(function (f) {
        return f.status === 'uploading' || f.status === 'failure';
      }).length;
    },
    retry: function retry(file) {
      if (this.requestMode === 'iframe') {
        this.submit(file);
      } else {
        this.uploadFile(file);
      }
    },
    removeFile: function removeFile(file) {
      this.error.countOverflow = false;
      var index = this.fileList.indexOf(file);

      if (this.maxCount === 1) {
        this.fileList = [];
      } else {
        this.fileList.splice(this.fileList.indexOf(file), 1);
      }

      if (!file.toBeUploaded) {
        this.$emit('change', this.getValue(true));
      }

      if (!this.isReplacing) {
        this.$emit('remove', this.files[index], index);
      }
    },
    cancelFile: function cancelFile(file) {
      if (this.requestMode === 'iframe') {
        this.canceled = true;
        this.isSubmiting = false;
        this.disabledWhenSubmiting = false;
      }

      if (file.xhr) {
        file.xhr.abort();
      }

      this.removeFile(file);
    },
    reset: function reset() {
      this.$refs.input.value = '';
      this.$refs.label.appendChild(this.$refs.input);
    },
    convertSizeUnit: function convertSizeUnit(size) {
      return bytes_default()(size, {
        decimalPlaces: 1
      });
    },
    parseData: function parseData(data) {
      if (typeof_default()(data) === 'object') {
        return data;
      }

      if (typeof data === 'string') {
        if (this.dataType === 'json') {
          try {
            return JSON.parse(data);
          } catch (error) {
            this.$emit('failure', {
              error: error
            });
            return {
              status: 'failure'
            };
          }
        } else if (this.dataType === 'text') {
          return data;
        }
      }
    },
    getScopeValue: function getScopeValue(index, file) {
      return objectSpread_default()({
        index: index
      }, file);
    },
    getValue: function getValue(isEmptyValue) {
      if (this.maxCount !== 1) {
        return this.pureFileList;
      }

      if (isEmptyValue) {
        return null;
      }

      return this.compat ? this.pureFileList[0].src || this.pureFileList[0].name : this.pureFileList[0];
    }
  }
});

function getProgress() {
  return {
    props: ['loaded', 'total', 'type', 'uploadingText', 'convertSizeUnit'],
    computed: {
      percent: function percent() {
        if (this.type !== 'text' && isNumber_default()(this.loaded) && isNumber_default()(this.total)) {
          return Math.ceil(this.loaded / this.total * 100) + '%';
        }

        return '';
      },
      content: function content() {
        switch (this.type) {
          case 'text':
            return this.$slots.default;

          case 'percent':
            return this.percent;

          case 'detail':
            return this.percent ? "".concat(this.convertSizeUnit(this.loaded), "/").concat(this.convertSizeUnit(this.total)) : '';

          case 'bar':
            return '';
        }
      }
    },
    render: function render() {
      var h = arguments[0];
      var bar = this.type === 'bar' ? [h("div", {
        "class": "veui-uploader-progress-bar",
        style: {
          width: this.percent || '0%'
        }
      }), h("div", {
        "class": "veui-uploader-progress-bar-full"
      })] : '';
      return h("div", {
        "class": "veui-uploader-progress"
      }, [this.content, bar]);
    }
  };
}
// CONCATENATED MODULE: ./node_modules/veui/components/Uploader.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Uploadervue_type_script_lang_js_ = (Uploadervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/veui-theme-one/components/uploader.less?vue&type=style&index=0&lang=less&
var uploadervue_type_style_index_0_lang_less_ = __webpack_require__(1372);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/veui/components/Uploader.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Uploadervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "Uploader.vue"
/* harmony default export */ var Uploader = __webpack_exports__["a"] = (component.exports);

/***/ })

}]);