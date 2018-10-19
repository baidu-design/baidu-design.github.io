(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[101],{

/***/ 1181:
/***/ (function(module, exports, __webpack_require__) {

var baseFill = __webpack_require__(1182),
    isIterateeCall = __webpack_require__(146);

/**
 * Fills elements of `array` with `value` from `start` up to, but not
 * including, `end`.
 *
 * **Note:** This method mutates `array`.
 *
 * @static
 * @memberOf _
 * @since 3.2.0
 * @category Array
 * @param {Array} array The array to fill.
 * @param {*} value The value to fill `array` with.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns `array`.
 * @example
 *
 * var array = [1, 2, 3];
 *
 * _.fill(array, 'a');
 * console.log(array);
 * // => ['a', 'a', 'a']
 *
 * _.fill(Array(3), 2);
 * // => [2, 2, 2]
 *
 * _.fill([4, 6, 8, 10], '*', 1, 3);
 * // => [4, '*', '*', 10]
 */
function fill(array, value, start, end) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return [];
  }
  if (start && typeof start != 'number' && isIterateeCall(array, value, start)) {
    start = 0;
    end = length;
  }
  return baseFill(array, value, start, end);
}

module.exports = fill;


/***/ }),

/***/ 1182:
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(135),
    toLength = __webpack_require__(1183);

/**
 * The base implementation of `_.fill` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to fill.
 * @param {*} value The value to fill `array` with.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns `array`.
 */
function baseFill(array, value, start, end) {
  var length = array.length;

  start = toInteger(start);
  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  end = (end === undefined || end > length) ? length : toInteger(end);
  if (end < 0) {
    end += length;
  }
  end = start > end ? 0 : toLength(end);
  while (start < end) {
    array[start++] = value;
  }
  return array;
}

module.exports = baseFill;


/***/ }),

/***/ 1183:
/***/ (function(module, exports, __webpack_require__) {

var baseClamp = __webpack_require__(578),
    toInteger = __webpack_require__(135);

/** Used as references for the maximum length and index of an array. */
var MAX_ARRAY_LENGTH = 4294967295;

/**
 * Converts `value` to an integer suitable for use as the length of an
 * array-like object.
 *
 * **Note:** This method is based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toLength(3.2);
 * // => 3
 *
 * _.toLength(Number.MIN_VALUE);
 * // => 0
 *
 * _.toLength(Infinity);
 * // => 4294967295
 *
 * _.toLength('3.2');
 * // => 3
 */
function toLength(value) {
  return value ? baseClamp(toInteger(value), 0, MAX_ARRAY_LENGTH) : 0;
}

module.exports = toLength;


/***/ }),

/***/ 1184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _vue_style_loader_index_js_ref_4_oneOf_1_0_css_loader_index_js_ref_4_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_4_oneOf_1_2_less_loader_dist_cjs_js_ref_4_oneOf_1_3_slider_less_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(715);
/* harmony import */ var _vue_style_loader_index_js_ref_4_oneOf_1_0_css_loader_index_js_ref_4_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_4_oneOf_1_2_less_loader_dist_cjs_js_ref_4_oneOf_1_3_slider_less_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_4_oneOf_1_0_css_loader_index_js_ref_4_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_4_oneOf_1_2_less_loader_dist_cjs_js_ref_4_oneOf_1_3_slider_less_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_vue_style_loader_index_js_ref_4_oneOf_1_0_css_loader_index_js_ref_4_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_4_oneOf_1_2_less_loader_dist_cjs_js_ref_4_oneOf_1_3_slider_less_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 1185:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, "/* Theme colors */\n/* Additional colors */\n/* Grayscale colors */\n/* Text colors */\n/* Link colors */\n/* Font settings */\n/* Metrics */\n/* Form widths */\n/* Transition duration */\n.veui-slider {\n  width: 100%;\n  min-width: 210px;\n  position: relative;\n  user-select: none;\n  overflow: visible;\n}\n.veui-slider-track-default-wrapper {\n  position: relative;\n}\n.veui-slider-track-default-bg,\n.veui-slider-track-default-sp,\n.veui-slider-track-default-fg {\n  height: 4px;\n  border-radius: 2px;\n}\n.veui-slider-track-default-bg {\n  background-color: #dbdbdb;\n}\n.veui-slider-track-default-sp,\n.veui-slider-track-default-fg {\n  position: absolute;\n  top: 0;\n}\n.veui-slider-track-default-sp {\n  background-color: #c4e0fe;\n}\n.veui-slider-track-default-fg {\n  background-color: #3998fc;\n}\n.veui-slider-track-default-marks {\n  width: 100%;\n  position: absolute;\n  top: -3px;\n}\n.veui-slider-track-default-mark {\n  height: 10px;\n  border-left: 1px solid #dbdbdb;\n  position: absolute;\n}\n.veui-slider-thumb {\n  position: absolute;\n  left: 0;\n  transform: translateX(-50%);\n  cursor: pointer;\n}\n.veui-slider-thumb:focus {\n  outline: none;\n}\n.veui-slider-thumb.focus-visible .veui-slider-thumb-default {\n  border-color: #2e7aca;\n}\n.veui-slider-thumb-default {\n  width: 14px;\n  height: 14px;\n  border: 2px solid #3998fc;\n  border-radius: 100%;\n  background-color: #fff;\n}\n.veui-slider .veui-slider-track-default {\n  height: 36px;\n  padding-top: 16px;\n}\n.veui-slider .veui-slider-thumb {\n  top: 11px;\n}\n.veui-slider[ui~=\"large\"] .veui-slider-track-default {\n  height: 42px;\n  padding-top: 19px;\n}\n.veui-slider[ui~=\"large\"] .veui-slider-thumb {\n  top: 14px;\n}\n.veui-slider[ui~=\"small\"] .veui-slider-track-default {\n  height: 32px;\n  padding-top: 14px;\n}\n.veui-slider[ui~=\"small\"] .veui-slider-thumb {\n  top: 9px;\n}\n.veui-slider[ui~=\"tiny\"] .veui-slider-track-default {\n  height: 28px;\n  padding-top: 12px;\n}\n.veui-slider[ui~=\"tiny\"] .veui-slider-thumb {\n  top: 7px;\n}\n.veui-slider[ui~=\"micro\"] .veui-slider-track-default {\n  height: 22px;\n  padding-top: 9px;\n}\n.veui-slider[ui~=\"micro\"] .veui-slider-thumb {\n  top: 4px;\n}\n.veui-slider.veui-disabled .veui-slider-track-default-bg,\n.veui-slider.veui-readonly .veui-slider-track-default-bg {\n  background-color: #e7e7e7;\n}\n.veui-slider.veui-disabled .veui-slider-track-default-fg,\n.veui-slider.veui-readonly .veui-slider-track-default-fg {\n  background-color: #b8b8b8;\n}\n.veui-slider.veui-disabled .veui-slider-track-default-mark,\n.veui-slider.veui-readonly .veui-slider-track-default-mark {\n  border-color: #e7e7e7;\n}\n.veui-slider.veui-disabled .veui-slider-thumb-default,\n.veui-slider.veui-readonly .veui-slider-thumb-default {\n  border-color: #b8b8b8;\n}\n", ""]);

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

/***/ 446:
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

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

/***/ 464:
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ 465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42);
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isFunction__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(93);
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_noop__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(54);
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_find__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _managers_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(390);
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(115);






_managers_config__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].defaults({
  'nudge.step': 1
});

function clear(el) {
  var nudgeData = el.__nudgeData__;

  if (!nudgeData) {
    return;
  }

  el.removeEventListener('keydown', nudgeData.keydownHandler);
  el.__nudgeData__ = null;
}

function parseParams(_ref) {
  var value = _ref.value,
      modifiers = _ref.modifiers;

  // 解析 axis
  var axis = lodash_find__WEBPACK_IMPORTED_MODULE_3___default()(['x', 'y'], function (item) {
    return modifiers[item];
  });

  if (!axis) {
    axis = lodash_get__WEBPACK_IMPORTED_MODULE_2___default()(value, 'axis', 'y');
  }

  function parseFn(name) {
    if (lodash_isFunction__WEBPACK_IMPORTED_MODULE_0___default()(value)) {
      return value;
    }

    var fn = lodash_get__WEBPACK_IMPORTED_MODULE_2___default()(value, name, lodash_noop__WEBPACK_IMPORTED_MODULE_1___default.a);

    return lodash_isFunction__WEBPACK_IMPORTED_MODULE_0___default()(fn) ? fn : lodash_noop__WEBPACK_IMPORTED_MODULE_1___default.a;
  } // 解析回调函数


  var update = parseFn('update');
  var step = lodash_get__WEBPACK_IMPORTED_MODULE_2___default()(value, 'step') || Object(_utils_helper__WEBPACK_IMPORTED_MODULE_5__[/* getNumberArg */ "d"])(modifiers, _managers_config__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].get('nudge.step'));
  return {
    axis: axis,
    step: step,
    update: update
  };
}

function refresh(el, _ref2) {
  var modifiers = _ref2.modifiers,
      value = _ref2.value,
      arg = _ref2.arg;
  var params = parseParams({
    arg: arg,
    value: value,
    modifiers: modifiers
  });

  if (el.__nudgeData__) {
    el.__nudgeData__.setOptions(params);

    return;
  }

  var nudgeData = {
    options: {},
    setOptions: function setOptions(options) {
      nudgeData.options = options;
    },
    keydownHandler: function keydownHandler(event) {
      var key = event.key,
          altKey = event.altKey,
          shiftKey = event.shiftKey;
      var _nudgeData$options = nudgeData.options,
          step = _nudgeData$options.step,
          axis = _nudgeData$options.axis,
          update = _nudgeData$options.update;
      var increase = step;

      if (altKey) {
        increase *= 0.1;
      } else if (shiftKey) {
        increase *= 10;
      }

      switch (true) {
        case axis === 'x' && (key === 'ArrowRight' || key === 'Right'):
        case axis === 'y' && (key === 'ArrowUp' || key === 'Up'):
          increase *= 1;
          break;

        case axis === 'x' && (key === 'ArrowLeft' || key === 'Left'):
        case axis === 'y' && (key === 'ArrowDown' || key === 'Down'):
          increase *= -1;
          break;

        default:
          increase = 0;
          break;
      }

      if (increase === 0) {
        return;
      }

      event.preventDefault();
      update(increase);
    }
  };
  el.addEventListener('keydown', nudgeData.keydownHandler);
  el.__nudgeData__ = nudgeData;

  el.__nudgeData__.setOptions(params);
}

/* harmony default export */ __webpack_exports__["a"] = ({
  bind: refresh,
  componentUpdated: refresh,
  unbind: clear
});

/***/ }),

/***/ 472:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.split.js
var es6_regexp_split = __webpack_require__(31);

// EXTERNAL MODULE: ./node_modules/lodash/omit.js
var omit = __webpack_require__(405);
var omit_default = /*#__PURE__*/__webpack_require__.n(omit);

// EXTERNAL MODULE: ./node_modules/lodash/difference.js
var difference = __webpack_require__(487);
var difference_default = /*#__PURE__*/__webpack_require__.n(difference);

// EXTERNAL MODULE: ./node_modules/lodash/isEqual.js
var isEqual = __webpack_require__(126);
var isEqual_default = /*#__PURE__*/__webpack_require__.n(isEqual);

// EXTERNAL MODULE: ./node_modules/lodash/isString.js
var isString = __webpack_require__(20);
var isString_default = /*#__PURE__*/__webpack_require__.n(isString);

// EXTERNAL MODULE: ./node_modules/lodash/keys.js
var keys = __webpack_require__(17);
var keys_default = /*#__PURE__*/__webpack_require__.n(keys);

// EXTERNAL MODULE: ./node_modules/lodash/get.js
var get = __webpack_require__(41);
var get_default = /*#__PURE__*/__webpack_require__.n(get);

// EXTERNAL MODULE: ./node_modules/lodash/find.js
var find = __webpack_require__(54);
var find_default = /*#__PURE__*/__webpack_require__.n(find);

// EXTERNAL MODULE: ./node_modules/lodash/isFunction.js
var isFunction = __webpack_require__(42);
var isFunction_default = /*#__PURE__*/__webpack_require__.n(isFunction);

// EXTERNAL MODULE: ./node_modules/lodash/isObject.js
var isObject = __webpack_require__(10);
var isObject_default = /*#__PURE__*/__webpack_require__.n(isObject);

// EXTERNAL MODULE: ./node_modules/lodash/noop.js
var noop = __webpack_require__(93);
var noop_default = /*#__PURE__*/__webpack_require__.n(noop);

// EXTERNAL MODULE: ./node_modules/veui/utils/context.js
var utils_context = __webpack_require__(125);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(431);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(432);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(45);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// CONCATENATED MODULE: ./node_modules/veui/directives/drag/BaseHandler.js




var BaseHandler_BaseHandler =
/*#__PURE__*/
function () {
  function BaseHandler(options, context) {
    classCallCheck_default()(this, BaseHandler);

    defineProperty_default()(this, "options", {});

    defineProperty_default()(this, "context", null);

    defineProperty_default()(this, "isDragging", false);

    this.setOptions(options);
    this.context = context;
  }

  createClass_default()(BaseHandler, [{
    key: "start",
    value: function start() {
      this.isDragging = true;
    }
  }, {
    key: "drag",
    value: function drag() {}
  }, {
    key: "end",
    value: function end() {
      this.isDragging = false;
    }
  }, {
    key: "destroy",
    value: function destroy() {}
  }, {
    key: "setOptions",
    value: function setOptions(options) {
      if (this.isDragging) {
        throw new Error('Do not set `options` while dragging.');
      }

      this.options = options;
    }
  }, {
    key: "reset",
    value: function reset() {}
  }]);

  return BaseHandler;
}();


// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(2);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(494);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(446);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/get.js
var helpers_get = __webpack_require__(495);
var helpers_get_default = /*#__PURE__*/__webpack_require__.n(helpers_get);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(497);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(464);
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized);

// EXTERNAL MODULE: ./node_modules/lodash/assign.js
var lodash_assign = __webpack_require__(92);
var assign_default = /*#__PURE__*/__webpack_require__.n(lodash_assign);

// EXTERNAL MODULE: ./node_modules/lodash/pick.js
var pick = __webpack_require__(91);
var pick_default = /*#__PURE__*/__webpack_require__.n(pick);

// EXTERNAL MODULE: ./node_modules/veui/managers/config.js
var config = __webpack_require__(390);

// CONCATENATED MODULE: ./node_modules/veui/directives/drag/TranslateHandler.js

















var computedStyle =  false ? undefined : getComputedStyle(document.body);

var TRANSFORM_ACCESSOR = find_default()(['transform', 'msTransform', 'MozTransform', 'webkitTransform'], function (accessor) {
  return accessor in computedStyle;
});

function getComputedTransform(elm) {
  return getComputedStyle(elm)[TRANSFORM_ACCESSOR];
}

var TranslateHandler_TranslateHandler =
/*#__PURE__*/
function (_BaseHandler) {
  inherits_default()(TranslateHandler, _BaseHandler);

  function TranslateHandler() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, TranslateHandler);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(TranslateHandler)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "elms", []);

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "initialStyles", []);

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "initialTransforms", []);

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "initialPositions", []);

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "totalDistanceX", 0);

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "totalDistanceY", 0);

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "isDragged", false);

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "tempStyle", 'user-select:none;-ms-user-select:none;-webkit-user-select:none;-moz-user-select:none;' + 'transition:none;animation:none;-ms-animation:none;-webkit-animation:none;-moz-animation:none');

    return _this;
  }

  createClass_default()(TranslateHandler, [{
    key: "setOptions",
    value: function setOptions(options) {
      if (isEqual_default()(this.options, options)) {
        return;
      }

      helpers_get_default()(getPrototypeOf_default()(TranslateHandler.prototype), "setOptions", this).call(this, options);

      this.options = assign_default()(this.options, pick_default()(options, ['targets', 'containment', 'axis']));
      this.elms = [];
    }
  }, {
    key: "start",
    value: function start() {
      var _this2 = this;

      helpers_get_default()(getPrototypeOf_default()(TranslateHandler.prototype), "start", this).call(this);

      if (!this.elms || !this.elms.length) {
        this.elms = this.options.targets.reduce(function (prev, cur) {
          prev.push.apply(prev, toConsumableArray_default()(Object(utils_context["b" /* getNodes */])(cur, _this2.context)));
          return prev;
        }, []);
      }

      this.elms.forEach(function (elm, index) {
        var initialTransform = getComputedTransform(elm);
        _this2.initialTransforms[index] = initialTransform === 'none' ? '' : initialTransform;
        var elmStyle = elm.getAttribute('style') || '';
        _this2.initialStyles[index] = elmStyle;
        elm.setAttribute('style', elmStyle + ';' + _this2.tempStyle);
        var rect = elm.getBoundingClientRect();
        _this2.initialPositions[index] = rect;
      });
    }
  }, {
    key: "drag",
    value: function drag(_ref) {
      var _this3 = this;

      var distanceX = _ref.distanceX,
          distanceY = _ref.distanceY;

      helpers_get_default()(getPrototypeOf_default()(TranslateHandler.prototype), "drag", this).call(this);

      this.move(distanceX, distanceY, function (elm, index, realDistanceX, realDistanceY) {
        var initialTransform = _this3.initialTransforms[index] || '';
        elm.style[TRANSFORM_ACCESSOR] = "".concat(initialTransform, " translate(").concat(realDistanceX, "px,").concat(realDistanceY, "px)");
      });
      this.isDragged = true;
    }
  }, {
    key: "end",
    value: function end(_ref2) {
      var _this4 = this;

      var distanceX = _ref2.distanceX,
          distanceY = _ref2.distanceY;

      helpers_get_default()(getPrototypeOf_default()(TranslateHandler.prototype), "end", this).call(this);

      this.move(distanceX, distanceY, function (elm, index, realDistanceX, realDistanceY) {
        var initialStyle = _this4.initialStyles[index] || '';
        var initialTransform = _this4.initialTransforms[index] || '';
        elm.setAttribute('style', initialStyle);
        elm.style[TRANSFORM_ACCESSOR] = "".concat(initialTransform, " translate(").concat(realDistanceX, "px,").concat(realDistanceY, "px)");

        if (_this4.isDragged) {
          _this4.totalDistanceX += realDistanceX;
          _this4.totalDistanceY += realDistanceY;
        }
      });
      this.initialTransforms = [];
      this.initialStyles = [];
      this.isDragged = false;
    }
  }, {
    key: "move",
    value: function move(distanceX, distanceY, render) {
      var _this5 = this;

      // 统一转换成 { left: ..., top: ..., width: ..., height: ... } 形式的 rect
      var options = this.options;
      var constraint = null;

      if (options.containment && options.containment.nodeType) {
        constraint = pick_default()(options.containment.getBoundingClientRect(), ['top', 'left', 'right', 'bottom']);
        constraint.width = constraint.right - constraint.left;
        constraint.height = constraint.bottom - constraint.top;
      } else if (options.containment === "".concat(config["a" /* default */].get('drag.prefix'), "window")) {
        constraint = {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight
        };
      } else {
        constraint = options.containment;
      }

      this.elms.forEach(function (elm, index) {
        var initialPosition = _this5.initialPositions[index];
        var realDistanceX = distanceX;
        var realDistanceY = distanceY;
        var offsetWidth = elm.offsetWidth;
        var offsetHeight = elm.offsetHeight;

        if (constraint) {
          if (!options.axis || options.axis === 'y') {
            // 从上面超出范围了
            if (initialPosition.top + realDistanceY <= constraint.top) {
              realDistanceY = constraint.top - initialPosition.top;
            } // 从下面超出范围了


            if (initialPosition.top + offsetHeight + realDistanceY > constraint.top + constraint.height) {
              realDistanceY = constraint.top + constraint.height - (initialPosition.top + offsetHeight);
            }
          } else {
            realDistanceY = 0;
          }

          if (!options.axis || options.axis === 'x') {
            // 从左边超出范围了
            if (initialPosition.left + realDistanceX < constraint.left) {
              realDistanceX = constraint.left - initialPosition.left;
            } // 从右边超出范围了


            if (initialPosition.left + offsetWidth + realDistanceX > constraint.left + constraint.width) {
              realDistanceX = constraint.left + constraint.width - (initialPosition.left + offsetWidth);
            }
          } else {
            realDistanceX = 0;
          }
        } else {
          if (options.axis === 'y') {
            realDistanceX = 0;
          } else if (options.axis === 'x') {
            realDistanceY = 0;
          }
        }

        render(elm, index, realDistanceX, realDistanceY);
      });
    }
  }, {
    key: "reset",
    value: function reset() {
      var _this6 = this;

      // 恢复最初的样式
      this.elms.forEach(function (elm) {
        var initialTransform = getComputedTransform(elm);
        var transformStyle = initialTransform === 'none' ? '' : initialTransform + " translate(".concat(-_this6.totalDistanceX, "px,").concat(-_this6.totalDistanceY, "px)");
        elm.style[TRANSFORM_ACCESSOR] = transformStyle;
      });
      this.totalDistanceX = 0;
      this.totalDistanceY = 0;
    }
  }]);

  return TranslateHandler;
}(BaseHandler_BaseHandler);


// CONCATENATED MODULE: ./node_modules/veui/directives/drag.js
/* unused harmony export registerHandler */















config["a" /* default */].defaults({
  'drag.prefix': '@'
});
var HANDLERS = {};
function registerHandler(name, Handler) {
  if (!(Handler.prototype instanceof BaseHandler_BaseHandler)) {
    throw new TypeError('The handler class must derive from `BaseHandler`.');
  }

  HANDLERS[name] = Handler;
}
registerHandler('translate', TranslateHandler_TranslateHandler);

function clear(el) {
  var dragData = el.dragData;

  if (!dragData) {
    return;
  }

  dragData.handler.destroy();
  el.removeEventListener('mousedown', dragData.mousedownHandler);
  el.dragData = null;
}

function parseParams(el, _ref, vnode) {
  var arg = _ref.arg,
      value = _ref.value,
      modifiers = _ref.modifiers;
  // 解析 target
  var targets = [];

  if (arg) {
    targets = arg.split(',');
  } else {
    targets = get_default()(value, 'targets', []);
  } // 解析 type


  var type = find_default()(keys_default()(HANDLERS), function (t) {
    return modifiers[t];
  }); // 如果 modifiers 里面没有 type，就到 value 里面去找


  if (!type) {
    type = get_default()(value, 'type');
  } // 解析 draggable


  var draggable = get_default()(value, 'draggable', true); // 解析 containment


  var containment = get_default()(value, 'containment'); // 如果 containment 不是特殊配置，也不是 object ，或者是 object ，
  // 但是没有完整的 top 、 left 、 width 、 height 属性，
  // 就要看看用 containment 能不能选出 DOM Element 了。


  function isSpecialSyntax(value) {
    return isString_default()(value) && value.indexOf(config["a" /* default */].get('drag.prefix')) === 0;
  }

  function isRect(value) {
    return isObject_default()(containment) && containment.hasOwnProperty('top') && containment.hasOwnProperty('left') && containment.hasOwnProperty('width') && containment.hasOwnProperty('height');
  }

  if (!isSpecialSyntax(containment) && !isRect(containment)) {
    containment = Object(utils_context["b" /* getNodes */])(containment, vnode.context);
    containment = get_default()(containment, '[0]', null);
  } // 解析 axis


  var axis = find_default()(['x', 'y'], function (item) {
    return modifiers[item];
  });

  if (!axis) {
    axis = get_default()(value, 'axis');
  }

  function parseFn(name) {
    var fn = get_default()(value, name, noop_default.a);

    return isFunction_default()(fn) ? fn : noop_default.a;
  } // 解析 drag 系列回调函数


  var dragstart = parseFn('dragstart');
  var drag = parseFn('drag');
  var dragend = parseFn('dragend'); // ready 回调

  var ready = parseFn('ready');
  return {
    targets: targets,
    type: type,
    draggable: draggable,
    containment: containment,
    axis: axis,
    dragstart: dragstart,
    drag: drag,
    dragend: dragend,
    ready: ready
  };
}

function refresh(el, _ref2, vnode) {
  var modifiers = _ref2.modifiers,
      value = _ref2.value,
      oldValue = _ref2.oldValue,
      arg = _ref2.arg;
  var params = parseParams(el, {
    arg: arg,
    value: value,
    modifiers: modifiers
  }, vnode);
  var oldParams = el.dragOldParams; // 如果参数没发生变化，就不要刷新了

  if (difference_default()(get_default()(params, 'targets', []), get_default()(oldParams, 'targets', [])).length === 0 && isEqual_default()(omit_default()(params, 'targets'), omit_default()(oldParams, 'targets'))) {
    return;
  }

  el.dragOldParams = params;

  if (el.dragData) {
    el.dragData.handler.setOptions(params);
  } else {
    var contextComponent = vnode.context;
    var handler = null;

    if (HANDLERS[params.type]) {
      var Handler = HANDLERS[params.type];
      handler = new Handler(params, contextComponent);
    } else {
      handler = new BaseHandler_BaseHandler(params, contextComponent);
    }

    params.ready({
      reset: function reset() {
        return handler.reset();
      }
    });
    var dragData = {
      dragging: false,
      initX: 0,
      initY: 0,
      handler: handler,
      mousedownHandler: function mousedownHandler(event) {
        if (!params.draggable || dragData.dragging) {
          return;
        }

        var clientX = event.clientX,
            clientY = event.clientY;
        dragData.dragging = true;
        dragData.initX = clientX;
        dragData.initY = clientY;
        contextComponent.$emit('dragstart', {
          event: event
        });
        handler.start({
          event: event
        });
        params.dragstart({
          event: event
        });

        function selectStartHandler(e) {
          e.preventDefault();
        }

        function mouseMoveHandler(event) {
          var clientX = event.clientX,
              clientY = event.clientY;

          if (!dragData.dragging) {
            return;
          }

          var dragParams = {
            distanceX: clientX - dragData.initX,
            distanceY: clientY - dragData.initY,
            event: event
          };
          contextComponent.$emit('drag', dragParams);
          handler.drag(dragParams);
          params.drag(dragParams);
        }

        function mouseupHandler(event) {
          dragData.dragging = false;
          var clientX = event.clientX,
              clientY = event.clientY;
          var dragParams = {
            distanceX: clientX - dragData.initX,
            distanceY: clientY - dragData.initY,
            event: event
          };
          contextComponent.$emit('dragend', dragParams);
          handler.end(dragParams);
          params.dragend(dragParams);
          window.removeEventListener('mousemove', mouseMoveHandler);
          window.removeEventListener('mouseup', mouseupHandler);
          window.removeEventListener('selectstart', selectStartHandler);
        } // TODO: 非IE下面不用移除选区


        document.getSelection().removeAllRanges();
        window.addEventListener('selectstart', selectStartHandler);
        window.addEventListener('mousemove', mouseMoveHandler);
        window.addEventListener('mouseup', mouseupHandler);
      }
    };
    el.addEventListener('mousedown', dragData.mousedownHandler);
    el.dragData = dragData;
  }
}
/**
 * drag 指令基本使用方式如下：
 *
 * ```html
 * <div v-drag></div>
 * ```
 *
 * 在拖动过程中，drag 指令会依次向当前组件 context 发送 dragstart、drag、dragend 事件，
 * 并带上拖动距离作为参数，在当前组件中可以监听这些事件：
 *
 * ```js
 * this.$on('dragstart', ({ event }) => { ... })
 * this.$on('drag', ({ event, distanceX, distanceY }) => { ... })
 * this.$on('dragend', ({ event, distanceX, distanceY }) => { ... })
 * ```
 *
 * 在各个事件的回调函数中，可以对目标 DOM 元素进行操作，从而达到拖动等效果。
 *
 * drag 指令内部也提供了一个默认的拖动处理器，借助 translate 来移动目标元素。可以通过指令的 arg
 * 指定要使用的拖动处理器（目前仅支持 translate ），通过 value 并借助 vue 的 refs 来指定目标元素：
 *
 * ```html
 * <p ref="target1"></p>
 * <p ref="target2"></p>
 * <div v-drag.translate="['target1', 'target2']"></div>
 * ```
 *
 * drag 指令也可以随时关闭 drag 功能，只需要传入值为 false 的 draggable 参数即可：
 *
 * ```html
 * <div v-drag="{targets: ['target1', 'target2'], type: 'translate', draggable: false}"></div>
 * ```
 *
 * 可以通过传递 containment 参数来限制拖动的范围。
 * containment 参数可以是结构为 `{ left: 0, top: 0, width: 100, height: 0}` 的对象：
 *
 * ```html
 * <div v-drag.translate="{targets: ['content'], type: 'translate', containment: {left: 0, top: 0, width: 100, height: 100}}"></div>
 * ```
 *
 * 也可以是一个 DOM 节点或者 ref 指向的节点：
 *
 * ```html
 * <div v-drag.translate="{targets: ['content'], type: 'translate', containment: body}"></div>
 * ```
 *
 * 可以通过传递 axis 参数来限定拖动的方向，x 表明在水平方向拖动，y 表示在垂直方向拖动：
 *
 * ```html
 * <div v-drag.translate="{targets: ['content'], type: 'translate', axis: 'x', ready: (handle) => { ... }}"></div>
 * ```
 * `ready` 参数是一个回调函数，当 drag 指令准备就绪后会调用该函数，并传回一个句柄 `handle` ，句柄上提供了 `reset` 方法，可以将 targets 元素
 * 的视觉重置为 drag 之前的的效果。
 *
 * drag 指令的复杂参数可以通过 `value` 的方式传递，在一些简单场景下，也可以通过 modifier 、 arg 传递参数：
 *
 * ```html
 * <div v-drag:ref1,ref2.translate.x="{...}"></div>
 * ```
 *
 * 其中，`ref1,ref2` 对应 targets 参数， `translate` 对应 type 参数， `x` 对应 axis 参数。
 *
 * drag 指令也支持自定义 Handler ：
 *
 * ```js
 * import BaseHandler from 'veui/directives/drag/BaseHandler'
 *
 * export default class CustomHandler extends BaseHandler {
 *   ...
 * }
 * ```
 *
 * 然后将自定义 Handler 注册到 drag 中去：
 *
 * ```js
 * import { registerHandler } from 'veui/directives/drag'
 *
 * registerHandler('customHandler', CustomHandler)
 * ```
 *
 * 在使用的时候，就可以把 type 参数设置为 `customHandler` 了：
 *
 * ```html
 * <div v-drag.translate="{targets: ['content'], type: 'customHandler', axis: 'x'"></div>
 * ```
 *
 * **注：** 自定义 Handler 必须继承自 `BaseHandler` 。
 */


/* harmony default export */ var directives_drag = __webpack_exports__["a"] = ({
  inserted: refresh,
  componentUpdated: refresh,
  unbind: clear
});

/***/ }),

/***/ 487:
/***/ (function(module, exports, __webpack_require__) {

var baseDifference = __webpack_require__(493),
    baseFlatten = __webpack_require__(200),
    baseRest = __webpack_require__(199),
    isArrayLikeObject = __webpack_require__(418);

/**
 * Creates an array of `array` values not included in the other given arrays
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons. The order and references of result values are
 * determined by the first array.
 *
 * **Note:** Unlike `_.pullAll`, this method returns a new array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {...Array} [values] The values to exclude.
 * @returns {Array} Returns the new array of filtered values.
 * @see _.without, _.xor
 * @example
 *
 * _.difference([2, 1], [2, 3]);
 * // => [1]
 */
var difference = baseRest(function(array, values) {
  return isArrayLikeObject(array)
    ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true))
    : [];
});

module.exports = difference;


/***/ }),

/***/ 493:
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(133),
    arrayIncludes = __webpack_require__(207),
    arrayIncludesWith = __webpack_require__(208),
    arrayMap = __webpack_require__(116),
    baseUnary = __webpack_require__(197),
    cacheHas = __webpack_require__(134);

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * The base implementation of methods like `_.difference` without support
 * for excluding multiple arrays or iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Array} values The values to exclude.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new array of filtered values.
 */
function baseDifference(array, values, iteratee, comparator) {
  var index = -1,
      includes = arrayIncludes,
      isCommon = true,
      length = array.length,
      result = [],
      valuesLength = values.length;

  if (!length) {
    return result;
  }
  if (iteratee) {
    values = arrayMap(values, baseUnary(iteratee));
  }
  if (comparator) {
    includes = arrayIncludesWith;
    isCommon = false;
  }
  else if (values.length >= LARGE_ARRAY_SIZE) {
    includes = cacheHas;
    isCommon = false;
    values = new SetCache(values);
  }
  outer:
  while (++index < length) {
    var value = array[index],
        computed = iteratee == null ? value : iteratee(value);

    value = (comparator || value !== 0) ? value : 0;
    if (isCommon && computed === computed) {
      var valuesIndex = valuesLength;
      while (valuesIndex--) {
        if (values[valuesIndex] === computed) {
          continue outer;
        }
      }
      result.push(value);
    }
    else if (!includes(values, computed, comparator)) {
      result.push(value);
    }
  }
  return result;
}

module.exports = baseDifference;


/***/ }),

/***/ 494:
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(27);

var assertThisInitialized = __webpack_require__(464);

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ 495:
/***/ (function(module, exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__(446);

var superPropBase = __webpack_require__(496);

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    module.exports = _get = Reflect.get;
  } else {
    module.exports = _get = function _get(target, property, receiver) {
      var base = superPropBase(target, property);
      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
}

module.exports = _get;

/***/ }),

/***/ 496:
/***/ (function(module, exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__(446);

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

module.exports = _superPropBase;

/***/ }),

/***/ 497:
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(498);

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ 498:
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

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

/***/ 527:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/veui-loader/lib??ref--11!./node_modules/veui/components/Slider.vue?vue&type=template&id=0574d5e1&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.sliderClasses,attrs:{"ui":_vm.realUi,"role":"application"}},[_c('div',{ref:"track",staticClass:"veui-slider-track",on:{"click":_vm.handleTrackClick}},[_vm._t("track",[_c('div',{staticClass:"veui-slider-track-default"},[_c('div',{staticClass:"veui-slider-track-default-wrapper"},[_c('div',{staticClass:"veui-slider-track-default-bg"}),_vm._v(" "),(_vm.stepMarks)?_c('div',{staticClass:"veui-slider-track-default-marks"},_vm._l((_vm.stepMarks),function(mark){return _c('div',{key:mark,staticClass:"veui-slider-track-default-mark",style:({
              left: ((mark * 100) + "%")
            })})})):_vm._e(),_vm._v(" "),_c('div',{staticClass:"veui-slider-track-default-sp",style:(_vm.secondardProgressStyle)}),_vm._v(" "),_c('div',{staticClass:"veui-slider-track-default-fg",style:(_vm.progressStyle)})])])])],2),_vm._v(" "),_vm._l((new Array(_vm.thumbCount)),function(_,index){return _c('div',_vm._b({directives:[{name:"outside",rawName:"v-outside.hover",value:(function () { return _vm.handleThumbMouseLeave(index); }),expression:"() => handleThumbMouseLeave(index)",modifiers:{"hover":true}},{name:"drag",rawName:"v-drag",value:(_vm.thumbDragOptions[index]),expression:"thumbDragOptions[index]"},{name:"nudge",rawName:"v-nudge.x",value:({
      step: _vm.keyboardChangeStep,
      update: function () {
          var args = [], len = arguments.length;
          while ( len-- ) args[ len ] = arguments[ len ];

          return _vm.handleThumbNudgeUpdage.apply(void 0, [ index ].concat( args ));
            }
    }),expression:"{\n      step: keyboardChangeStep,\n      update: (...args) => handleThumbNudgeUpdage(index, ...args)\n    }",modifiers:{"x":true}}],key:("thumb" + index),ref:"thumb",refInFor:true,staticClass:"veui-slider-thumb",style:({
      left: ((_vm.ratios[index] * 100) + "%")
    }),attrs:{"tabindex":_vm.realDisabled ? null : '0',"role":"slider"},on:{"mouseenter":function($event){_vm.handleThumbMouseEnter(index)},"focus":function($event){_vm.handleThumbFocus(index)},"blur":function($event){_vm.handleThumbBlur(index)}}},'div',_vm.thumbAttrs[index],false),[_vm._t("thumb",[_c('div',{staticClass:"veui-slider-thumb-default"})],{index:index,focus:_vm.currentThumbFocusIndex === index,hover:_vm.currentThumbHoverIndex === index,dragging:_vm.currentThumbDraggingIndex === index})],2)}),_vm._v(" "),_vm._t("tip",[_c('veui-tooltip',{ref:"tip",attrs:{"target":_vm.tooltipTarget,"open":_vm.activeTooltipIndex >= 0,"trigger":"custom","interactive":false}},[_vm._t("tip-label",[_vm._v(_vm._s(_vm.tooltipLabel))])],2)],{target:_vm.tooltipTarget,open:_vm.activeTooltipIndex >= 0,activeIndex:_vm.activeTooltipIndex})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/veui/components/Slider.vue?vue&type=template&id=0574d5e1&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.number.constructor.js
var es6_number_constructor = __webpack_require__(89);

// EXTERNAL MODULE: ./node_modules/lodash/identity.js
var identity = __webpack_require__(58);
var identity_default = /*#__PURE__*/__webpack_require__.n(identity);

// EXTERNAL MODULE: ./node_modules/lodash/isEqual.js
var isEqual = __webpack_require__(126);
var isEqual_default = /*#__PURE__*/__webpack_require__.n(isEqual);

// EXTERNAL MODULE: ./node_modules/lodash/clamp.js
var clamp = __webpack_require__(714);
var clamp_default = /*#__PURE__*/__webpack_require__.n(clamp);

// EXTERNAL MODULE: ./node_modules/lodash/fill.js
var fill = __webpack_require__(1181);
var fill_default = /*#__PURE__*/__webpack_require__.n(fill);

// EXTERNAL MODULE: ./node_modules/veui/managers/config.js
var config = __webpack_require__(390);

// CONCATENATED MODULE: ./node_modules/veui-theme-one/components/Slider.js

config["a" /* default */].defaults({
  ui: {
    size: {
      values: ['large', 'small', 'tiny', 'micro']
    }
  }
}, 'slider');
// EXTERNAL MODULE: ./node_modules/veui/directives/drag.js + 2 modules
var drag = __webpack_require__(472);

// EXTERNAL MODULE: ./node_modules/veui/directives/nudge.js
var nudge = __webpack_require__(465);

// EXTERNAL MODULE: ./node_modules/veui/directives/outside.js
var outside = __webpack_require__(127);

// EXTERNAL MODULE: ./node_modules/veui/mixins/ui.js
var ui = __webpack_require__(391);

// EXTERNAL MODULE: ./node_modules/veui/mixins/input.js
var input = __webpack_require__(402);

// EXTERNAL MODULE: ./node_modules/veui/components/Tooltip.vue + 3 modules
var Tooltip = __webpack_require__(522);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/veui-loader/lib??ref--11!./node_modules/veui/components/Slider.vue?vue&type=script&lang=js&





//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ var Slidervue_type_script_lang_js_ = ({
  name: 'veui-slider',
  components: {
    'veui-tooltip': Tooltip["a" /* default */]
  },
  mixins: [ui["a" /* default */], input["a" /* default */]],
  directives: {
    drag: drag["a" /* default */],
    nudge: nudge["a" /* default */],
    outside: outside["a" /* default */]
  },
  props: {
    value: true,
    secondaryProgress: {
      type: [Number, Array],
      default: 0
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 1
    },
    step: {
      type: Number,
      default: 0,
      validator: function validator(val) {
        return val >= 0;
      }
    },
    mark: Boolean,
    parse: {
      type: Function,
      default: identity_default.a
    },
    format: {
      type: Function,
      default: identity_default.a
    }
  },
  data: function data() {
    return {
      localValues: [],
      currentThumbFocusIndex: -1,
      currentThumbDraggingIndex: -1,
      currentThumbHoverIndex: -1,
      latestIndex: -1,
      thumbCount: 0
    };
  },
  watch: {
    value: {
      handler: function handler(val) {
        var _this = this;

        this.localValues = [].concat(val).map(function (val) {
          return _this.getAdjustedValue(_this.parse(val));
        }).sort(function (a, b) {
          return a > b ? 1 : -1;
        });
      },
      immediate: true
    },
    localValues: {
      handler: function handler(newVal) {
        var _this2 = this;

        var oldVal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

        if (newVal.length !== oldVal.length) {
          // 解耦 localValue 和 localValue.length，防止依赖 localValue 长度的 drag options 在拖动时改变
          this.thumbCount = newVal.length;
        }

        if (this.$refs.tip) {
          // 要用 nextTick，否则有 step 的 thumb 的 tip 定位到了前一个位置
          this.$nextTick(function () {
            _this2.$refs.tip.relocate();
          });
        }

        var value = [].concat(this.value).map(function (val) {
          return _this2.parse(val);
        });

        if (!isEqual_default()(value, newVal)) {
          newVal = newVal.map(this.format);
          this.$emit('input', newVal.length > 1 ? newVal : newVal[0]);
        }
      },
      immediate: true
    },
    activeTooltipIndex: {
      handler: function handler(val) {
        if (val !== -1) {
          this.latestIndex = val;
        }
      },
      immediate: true
    }
  },
  computed: {
    sliderClasses: function sliderClasses() {
      return {
        'veui-slider': true,
        'veui-disabled': this.realDisabled,
        'veui-readonly': this.realReadonly
      };
    },
    ratios: function ratios() {
      var min = this.min,
          max = this.max;
      return this.localValues.map(function (val) {
        return (val - min) / (max - min);
      });
    },
    activeTooltipIndex: function activeTooltipIndex() {
      if (this.currentThumbFocusIndex >= 0) {
        return this.currentThumbFocusIndex;
      }

      if (this.currentThumbHoverIndex >= 0) {
        return this.currentThumbHoverIndex;
      }

      return -1;
    },
    tooltipTarget: function tooltipTarget() {
      return this.getThumbRefByIndex(this.activeTooltipIndex);
    },
    tooltipLabel: function tooltipLabel() {
      return this.getValueByIndex(this.latestIndex);
    },
    stepMarks: function stepMarks() {
      var min = this.min,
          val = this.min,
          max = this.max,
          step = this.step,
          mark = this.mark;

      if (!step || min >= max || !mark) {
        return;
      }

      var marks = [];

      while (val <= max) {
        var pos = (val - min) / (max - min);

        if (pos > 0 && pos < 1) {
          marks.push(pos);
        }

        val += step;
      }

      return marks;
    },
    keyboardChangeStep: function keyboardChangeStep() {
      // 如果没有指定 step ，就算一个
      return this.step || (this.max - this.min) / 10;
    },
    noInteractive: function noInteractive() {
      return this.realDisabled || this.realReadonly;
    },
    localValueBoundary: function localValueBoundary() {
      return this.getLocalValueBoundary(this.currentThumbFocusIndex);
    },
    progressStyle: function progressStyle() {
      return this.getProgressStyle(this.ratios);
    },
    localSecondaryProgress: function localSecondaryProgress() {
      var min = this.min,
          max = this.max;
      return [].concat(this.secondaryProgress).map(function (progress) {
        return (progress - min) / (max - min);
      });
    },
    secondardProgressStyle: function secondardProgressStyle() {
      return this.getProgressStyle(this.localSecondaryProgress);
    },
    thumbAttrs: function thumbAttrs() {
      var _this3 = this;

      return this.localValues.map(function (value, index) {
        var _this3$getLocalValueB = _this3.getLocalValueBoundary(index),
            min = _this3$getLocalValueB.min,
            max = _this3$getLocalValueB.max;

        return {
          'aria-valuemin': _this3.reduceDecimal(min),
          'aria-valuemax': _this3.reduceDecimal(max),
          'aria-valuenow': _this3.reduceDecimal(value),
          'aria-valuetext': _this3.format(_this3.reduceDecimal(value))
        };
      });
    },
    thumbDragOptions: function thumbDragOptions() {
      var _this4 = this;

      return fill_default()(new Array(this.thumbCount), true).map(function (_, index) {
        return {
          axis: 'x',
          dragstart: function dragstart() {
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }

            return _this4.handleThumbDragStart.apply(_this4, [index].concat(args));
          },
          drag: function drag() {
            for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              args[_key2] = arguments[_key2];
            }

            return _this4.handleThumbDrag.apply(_this4, [index].concat(args));
          },
          dragend: function dragend() {
            for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
              args[_key3] = arguments[_key3];
            }

            return _this4.handleThumbDragEnd.apply(_this4, [index].concat(args));
          }
        };
      });
    }
  },
  methods: {
    handleTrackClick: function handleTrackClick(_ref) {
      var offsetX = _ref.offsetX;

      if (this.noInteractive || this.localValues.length > 1) {
        return;
      }

      var trackWidth = this.$refs.track.offsetWidth;
      this.updateValueByRatio(offsetX / trackWidth);
      this.$refs.thumb[0].focus();
    },
    handleThumbMouseEnter: function handleThumbMouseEnter(index) {
      this.currentThumbHoverIndex = index;
    },
    handleThumbMouseLeave: function handleThumbMouseLeave(index) {
      this.currentThumbHoverIndex = -1;
    },
    handleThumbDragStart: function handleThumbDragStart(index) {
      if (this.noInteractive) {
        return;
      }

      this.currentThumbDraggingIndex = index;
      this.previousRatio = this.ratios[index];
      this.trackWidth = this.$refs.track.offsetWidth;
    },
    handleThumbDrag: function handleThumbDrag(index, _ref2) {
      var distanceX = _ref2.distanceX;

      if (this.noInteractive) {
        return;
      }

      var ratio = this.previousRatio + distanceX / this.trackWidth;
      this.updateValueByRatio(ratio, index);
    },
    handleThumbDragEnd: function handleThumbDragEnd(index) {
      this.currentThumbDraggingIndex = -1;
    },
    handleThumbNudgeUpdage: function handleThumbNudgeUpdage(index, delta) {
      if (this.noInteractive) {
        return;
      }

      var _this$localValueBound = this.localValueBoundary,
          min = _this$localValueBound.min,
          max = _this$localValueBound.max;
      var val = this.getAdjustedValue(this.localValues[index] + delta, min, max);
      this.$set(this.localValues, index, val);
    },
    handleThumbFocus: function handleThumbFocus(index) {
      this.currentThumbFocusIndex = index;
    },
    handleThumbBlur: function handleThumbBlur(index) {
      this.currentThumbFocusIndex = -1;
    },
    updateValueByRatio: function updateValueByRatio(ratio) {
      var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var _this$localValueBound2 = this.localValueBoundary,
          min = _this$localValueBound2.min,
          max = _this$localValueBound2.max;
      var val = this.getAdjustedValue(this.min + (this.max - this.min) * ratio, min, max);
      this.$set(this.localValues, index, val);
    },
    getAdjustedValue: function getAdjustedValue(val) {
      var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.min;
      var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.max;
      val = clamp_default()(val, min, max);

      if (this.step > 0) {
        var maxSteps = Math.floor((max - min) / this.step);
        val = Math.min(Math.round((val - min) / this.step), maxSteps) * this.step + min;
      }

      return val;
    },
    getValueByIndex: function getValueByIndex(index) {
      var val = Array.isArray(this.value) ? this.value[index] : this.value;
      return this.reduceDecimal(val);
    },
    reduceDecimal: function reduceDecimal(val) {
      // 如果是数字就处理一下精度，否则会出现很多零
      return typeof val === 'number' ? Math.round(val * 100) / 100 : val;
    },
    getThumbRefByIndex: function getThumbRefByIndex(index) {
      return this.$refs.thumb && this.$refs.thumb[index];
    },
    getLocalValueBoundary: function getLocalValueBoundary(thumbIndex) {
      var min = this.min,
          max = this.max,
          ratios = this.ratios;
      var len = this.localValues.length;

      if (len === 1) {
        return {
          min: min,
          max: max
        };
      }

      var prevIndex = thumbIndex - 1;
      var nextIndex = thumbIndex + 1;
      var minLocalValue = prevIndex < 0 ? min : ratios[prevIndex] * (max - min) + min;
      var maxLocalValue = nextIndex > len - 1 ? max : ratios[nextIndex] * (max - min) + min;
      return {
        min: minLocalValue,
        max: maxLocalValue
      };
    },
    getProgressStyle: function getProgressStyle(ratios) {
      var left = 0;
      var width;

      if (ratios.length === 1) {
        width = "".concat(ratios[0] * 100, "%");
      } else {
        left = "".concat(ratios[0] * 100, "%");
        width = "".concat((ratios[ratios.length - 1] - ratios[0]) * 100, "%");
      }

      return {
        left: left,
        width: width
      };
    }
  }
});
// CONCATENATED MODULE: ./node_modules/veui/components/Slider.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Slidervue_type_script_lang_js_ = (Slidervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/veui-theme-one/components/slider.less?vue&type=style&index=0&lang=less&
var slidervue_type_style_index_0_lang_less_ = __webpack_require__(1184);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/veui/components/Slider.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Slidervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "Slider.vue"
/* harmony default export */ var Slider = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 578:
/***/ (function(module, exports) {

/**
 * The base implementation of `_.clamp` which doesn't coerce arguments.
 *
 * @private
 * @param {number} number The number to clamp.
 * @param {number} [lower] The lower bound.
 * @param {number} upper The upper bound.
 * @returns {number} Returns the clamped number.
 */
function baseClamp(number, lower, upper) {
  if (number === number) {
    if (upper !== undefined) {
      number = number <= upper ? number : upper;
    }
    if (lower !== undefined) {
      number = number >= lower ? number : lower;
    }
  }
  return number;
}

module.exports = baseClamp;


/***/ }),

/***/ 714:
/***/ (function(module, exports, __webpack_require__) {

var baseClamp = __webpack_require__(578),
    toNumber = __webpack_require__(136);

/**
 * Clamps `number` within the inclusive `lower` and `upper` bounds.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Number
 * @param {number} number The number to clamp.
 * @param {number} [lower] The lower bound.
 * @param {number} upper The upper bound.
 * @returns {number} Returns the clamped number.
 * @example
 *
 * _.clamp(-10, -5, 5);
 * // => -5
 *
 * _.clamp(10, -5, 5);
 * // => 5
 */
function clamp(number, lower, upper) {
  if (upper === undefined) {
    upper = lower;
    lower = undefined;
  }
  if (upper !== undefined) {
    upper = toNumber(upper);
    upper = upper === upper ? upper : 0;
  }
  if (lower !== undefined) {
    lower = toNumber(lower);
    lower = lower === lower ? lower : 0;
  }
  return baseClamp(toNumber(number), lower, upper);
}

module.exports = clamp;


/***/ }),

/***/ 715:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1185);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(6).default
var update = add("41948356", content, true, {"sourceMap":false});

/***/ })

}]);