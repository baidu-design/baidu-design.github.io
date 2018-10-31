(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[110],{

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
  if (key == '__proto__') {
    return;
  }

  return object[key];
}

module.exports = safeGet;


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
      else if (!isObject(objValue) || isFunction(objValue)) {
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

/***/ 416:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(442);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(6).default
var update = add("ab6c3654", content, true, {"sourceMap":false});

/***/ }),

/***/ 423:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/veui-loader/lib??ref--11!./node_modules/veui/components/Checkbox.vue?vue&type=template&id=050cf826&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('label',{class:{
    'veui-checkbox': true,
    'veui-disabled': _vm.realReadonly || _vm.realDisabled
  },attrs:{"ui":_vm.realUi}},[_c('input',_vm._g(_vm._b({ref:"box",attrs:{"type":"checkbox"},on:{"change":_vm.handleChange}},'input',_vm.attrs,false),_vm.listeners)),_vm._v(" "),_c('span',{staticClass:"veui-checkbox-box"},[_c('transition',{attrs:{"name":"veui-checkbox-icon"}},[(_vm.localIndeterminate)?_c('veui-icon',{attrs:{"name":_vm.icons.indeterminate}}):_vm._e()],1),_vm._v(" "),_c('transition',{attrs:{"name":"veui-checkbox-icon"}},[(_vm.localChecked && !_vm.localIndeterminate)?_c('veui-icon',{attrs:{"name":_vm.icons.checked}}):_vm._e()],1)],1),_vm._v(" "),(_vm.$slots.default)?_c('span',{staticClass:"veui-checkbox-label"},[_vm._t("default")],2):_vm._e()])}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/veui/components/Checkbox.vue?vue&type=template&id=050cf826&

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/objectSpread.js
var objectSpread = __webpack_require__(9);
var objectSpread_default = /*#__PURE__*/__webpack_require__.n(objectSpread);

// EXTERNAL MODULE: ./node_modules/veui-theme-one/icons/minus-small.js
var minus_small = __webpack_require__(436);

// EXTERNAL MODULE: ./node_modules/veui-theme-one/icons/check-small.js
var check_small = __webpack_require__(438);

// EXTERNAL MODULE: ./node_modules/veui/managers/config.js
var config = __webpack_require__(390);

// CONCATENATED MODULE: ./node_modules/veui-theme-one/components/Checkbox.js



config["a" /* default */].defaults({
  icons: {
    indeterminate: 'minus-small',
    checked: 'check-small'
  },
  ui: {
    size: {
      values: ['small']
    }
  }
}, 'checkbox');
// EXTERNAL MODULE: ./node_modules/veui/components/Icon.vue + 2 modules
var Icon = __webpack_require__(53);

// EXTERNAL MODULE: ./node_modules/veui/mixins/input.js
var input = __webpack_require__(402);

// EXTERNAL MODULE: ./node_modules/veui/mixins/ui.js
var ui = __webpack_require__(391);

// EXTERNAL MODULE: ./node_modules/veui/utils/helper.js
var helper = __webpack_require__(115);

// EXTERNAL MODULE: ./node_modules/veui/utils/dom.js
var dom = __webpack_require__(123);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/veui-loader/lib??ref--11!./node_modules/veui/components/Checkbox.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






var EVENTS = ['click', 'keyup', 'keydown', 'keypress', 'focus', 'blur'];
/* harmony default export */ var Checkboxvue_type_script_lang_js_ = ({
  name: 'veui-checkbox',
  inheritAttrs: false,
  components: {
    'veui-icon': Icon["a" /* default */]
  },
  mixins: [ui["a" /* default */], input["a" /* default */]],
  model: {
    prop: 'model'
  },
  props: {
    trueValue: {
      type: null,
      default: true
    },
    falseValue: {
      type: null,
      default: false
    },
    checked: Boolean,
    indeterminate: Boolean,
    model: null
  },
  data: function data() {
    return {
      localChecked: this.checked,
      localIndeterminate: this.indeterminate
    };
  },
  computed: {
    attrs: function attrs() {
      return objectSpread_default()({
        name: this.realName,
        disabled: this.realDisabled || this.realReadonly,
        checked: this.localChecked
      }, this.$attrs);
    },
    listeners: function listeners() {
      return Object(helper["c" /* getListeners */])(EVENTS, this);
    }
  },
  watch: {
    checked: function checked(val) {
      this.localChecked = val;
    },
    localChecked: function localChecked(val) {
      if (this.checked !== val) {
        this.$emit('update:checked', val);
      }

      this.$emit('input', val ? this.trueValue : this.falseValue);
    },
    model: {
      handler: function handler(val) {
        if (typeof val === 'undefined') {
          return;
        }

        this.localChecked = val === this.trueValue;
      },
      immediate: true
    },
    indeterminate: function indeterminate(val) {
      this.localIndeterminate = val;
    },
    localIndeterminate: function localIndeterminate(val) {
      this.$refs.box.indeterminate = val;

      if (this.indeterminate !== val) {
        this.$emit('update:indeterminate', false);
      }
    }
  },
  methods: {
    activate: function activate() {
      if (this.realDisabled || this.realReadonly) {
        return;
      }

      this.toggleChecked();
    },
    handleChange: function handleChange() {
      if (this.localIndeterminate) {
        this.localChecked = this.falseValue;
        this.localIndeterminate = false;
      } else {
        this.toggleChecked();
      }

      this.$emit('change', this.localChecked);
    },
    toggleChecked: function toggleChecked() {
      this.localChecked = !this.localChecked;
    },
    focus: function focus() {
      this.$refs.box.focus();
    }
  },
  mounted: function mounted() {
    var box = this.$refs.box;
    box.indeterminate = this.localIndeterminate;
    Object(dom["h" /* patchIndeterminate */])(box);
  }
});
// CONCATENATED MODULE: ./node_modules/veui/components/Checkbox.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Checkboxvue_type_script_lang_js_ = (Checkboxvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/veui-theme-one/components/checkbox.less?vue&type=style&index=0&lang=less&
var checkboxvue_type_style_index_0_lang_less_ = __webpack_require__(441);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/veui/components/Checkbox.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Checkboxvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "Checkbox.vue"
/* harmony default export */ var Checkbox = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 436:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var veui_components_Icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53);

veui_components_Icon__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].register({
  "minus-small": {
    "width": "12",
    "height": "12",
    "paths": [{
      "d": "M3 5h6v2H3z",
      "fill-rule": "evenodd"
    }]
  }
});

/***/ }),

/***/ 438:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var veui_components_Icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53);

veui_components_Icon__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].register({
  "check-small": {
    "width": "12",
    "height": "12",
    "paths": [{
      "d": "M5.07 9L2.5 6.19l.98-1.06 1.59 1.75L8.47 3 9.5 4.08z",
      "fill-rule": "evenodd"
    }]
  }
});

/***/ }),

/***/ 441:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _vue_style_loader_index_js_ref_4_oneOf_1_0_css_loader_index_js_ref_4_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_4_oneOf_1_2_less_loader_dist_cjs_js_ref_4_oneOf_1_3_checkbox_less_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(416);
/* harmony import */ var _vue_style_loader_index_js_ref_4_oneOf_1_0_css_loader_index_js_ref_4_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_4_oneOf_1_2_less_loader_dist_cjs_js_ref_4_oneOf_1_3_checkbox_less_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_4_oneOf_1_0_css_loader_index_js_ref_4_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_4_oneOf_1_2_less_loader_dist_cjs_js_ref_4_oneOf_1_3_checkbox_less_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_vue_style_loader_index_js_ref_4_oneOf_1_0_css_loader_index_js_ref_4_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_4_oneOf_1_2_less_loader_dist_cjs_js_ref_4_oneOf_1_3_checkbox_less_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 442:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, "\n.veui-checkbox{position:relative;display:inline-block;color:#666;font-size:14px;line-height:16px;cursor:pointer\n}\n.veui-checkbox input{position:absolute;opacity:0\n}\n.veui-checkbox-box,.veui-checkbox-label{vertical-align:top;display:inline-block;transition:color .2s\n}\n.veui-field>.veui-checkbox{line-height:36px\n}\n.veui-field>.veui-checkbox .veui-checkbox-box{vertical-align:text-top\n}\n.veui-checkbox .focus-visible~.veui-checkbox-box,.veui-checkbox .focus-visible~.veui-checkbox-label,.veui-checkbox:hover{color:#333\n}\n.veui-checkbox .focus-visible~.veui-checkbox-box{box-shadow:0 0 0 2px #dbdbdb\n}\n.veui-checkbox-box{position:relative;height:16px;width:16px;margin-right:8px;border:1px solid #666;background-color:#fff;font-size:16px;transition:box-shadow .2s\n}\n.veui-checkbox-box .veui-icon{color:#333;position:absolute;top:50%;right:50%;bottom:50%;left:50%;-webkit-transform:translate(-50%,-50%) scale(1);transform:translate(-50%,-50%) scale(1);transition:opacity .2s,-webkit-transform .2s;transition:transform .2s,opacity .2s;transition:transform .2s,opacity .2s,-webkit-transform .2s\n}\n.veui-checkbox-icon-enter,.veui-checkbox-icon-leave-to{opacity:0;-webkit-transform:translate(-50%,-50%) scale(.8);transform:translate(-50%,-50%) scale(.8)\n}\n.veui-checkbox:hover .veui-checkbox-box{border-color:#333\n}\n.veui-checkbox :checked+.veui-checkbox-box,.veui-checkbox :indeterminate+.veui-checkbox-box{border-color:#333\n}\n.veui-checkbox.veui-disabled{cursor:not-allowed\n}\n.veui-checkbox.veui-disabled .veui-checkbox-label{color:#999\n}\n.veui-checkbox.veui-disabled .veui-checkbox-box{border-color:#dbdbdb;background-color:#eee\n}\n.veui-checkbox.veui-disabled .veui-checkbox-box .veui-icon{color:#dbdbdb\n}\n.veui-checkbox[ui~=small]{font-size:12px;line-height:12px\n}\n.veui-field[ui~=small]>.veui-checkbox[ui~=small]{line-height:32px\n}\n.veui-field[ui~=small]>.veui-checkbox[ui~=small] .veui-checkbox-box{vertical-align:-2px\n}\n.veui-checkbox[ui~=small] .veui-checkbox-box{margin-right:6px;height:12px;width:12px;font-size:12px\n}", ""]);

// exports


/***/ }),

/***/ 488:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export is */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return sign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isPositive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return round; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return log10; });
/* harmony import */ var core_js_modules_es6_math_log10__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(505);
/* harmony import */ var core_js_modules_es6_math_log10__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_math_log10__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(89);
/* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_1__);



/**
 * 判断两个数字是否相等，支持区分 -0 和 0
 *
 * @param {number} a 第一个比较数字
 * @param {number} b 第二个比较数字
 * @returns {boolean} 是否相同
 */
function is(a, b) {
  if (a !== b) {
    return false;
  }

  return 1 / a === 1 / b;
}
/**
 * 符号函数，大于 0 返回 1，小于 0 返回 -1，0 返回 0
 *
 * @param {number} a 第一个比较数字
 * @param {number} b 第二个比较数字
 * @returns {boolean} 是否相同
 */

function sign(num) {
  if (num === 0) {
    return 0;
  }

  return num > 0 ? 1 : -1;
}
/**
 * 判断一个数是否为正数，0 为正，-0 为负
 * @param {number} num 目标数值
 * @returns {boolean} 是否为正
 */

function isPositive(num) {
  return num > 0 || is(num, 0);
}
/**
 * 处理浮点数精度问题
 *
 * @param {number} a （被）加数
 * @param {number} b 加数
 * @param {number} [decimals=0] 精确小数位个数
 * @returns {number}  结果
 */

function add(a, b) {
  var decimals = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  return round((a + b) * Math.pow(10, decimals)) / Math.pow(10, decimals);
}
/**
 * 真·四舍五入
 *
 * @param {number} num 目标数值
 * @param {number} decimals 精确小数位个数
 * @returns {number}  结果
 */

function round(num) {
  var decimals = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return Number(Math.round(num + 'e' + decimals) + 'e-' + decimals);
}
/**
 * 以 10 为底数取对数
 *
 * @param {number} num 真数
 * @returns {number} 对数
 */

function log10(num) {
  return Math.log10 ? Math.log10(num) : Math.log(num) * Math.LOG10E;
}

/***/ }),

/***/ 505:
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.21 Math.log10(x)
var $export = __webpack_require__(8);

$export($export.S, 'Math', {
  log10: function log10(x) {
    return Math.log(x) * Math.LOG10E;
  }
});


/***/ }),

/***/ 517:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(777);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(6).default
var update = add("96262114", content, true, {"sourceMap":false});

/***/ }),

/***/ 574:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/veui-loader/lib??ref--11!./node_modules/veui/components/Textarea.vue?vue&type=template&id=5084953b&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"veui-textarea",class:{
    'veui-textarea-focused': _vm.focused,
    'veui-textarea-rows': _vm.normalizedRows > 0,
    'veui-textarea-line-numbered': _vm.lineNumber,
    'veui-input-invalid': _vm.realInvalid,
    'veui-readonly': _vm.realReadonly,
    'veui-disabled': _vm.realDisabled
  },attrs:{"ui":_vm.realUi}},[(_vm.measure)?_c('div',{ref:"measurer",staticClass:"veui-textarea-measurer"},_vm._l((_vm.lines),function(line,index){return _c('div',{key:index,staticClass:"veui-textarea-measurer-line"},[(_vm.lineNumber)?_c('div',{staticClass:"veui-textarea-measurer-line-number",style:({width: (_vm.lineNumberWidth + "px")})},[_vm._v(_vm._s(index + 1))]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"veui-textarea-measurer-line-content",style:({width: (_vm.measurerContentWidth + "px")}),attrs:{"aria-hidden":"true"}},[_vm._v(_vm._s(line))])])})):_vm._e(),_vm._v(" "),_c('textarea',_vm._g(_vm._b({directives:[{name:"model",rawName:"v-model",value:(_vm.localValue),expression:"localValue"}],ref:"input",staticClass:"veui-textarea-input",style:({
      maxWidth: _vm.lineNumber ? null : '100%',
      width: _vm.lineNumber ? ("calc(100% - " + _vm.lineNumberWidth + "px)") : null,
      height: _vm.contentHeight || null,
      // autoresize 的时候 hidden 一下，避免闪现一下滚动条。
      overflow: _vm.autoresize ? 'hidden' : 'auto'
    }),domProps:{"value":(_vm.localValue)},on:{"focus":_vm.handleFocus,"blur":_vm.handleBlur,"input":[function($event){if($event.target.composing){ return; }_vm.localValue=$event.target.value},_vm.handleInput],"scroll":_vm.handleScroll,"change":function($event){_vm.$emit('change', $event.target.value, $event)}}},'textarea',_vm.attrs,false),_vm.listeners))])}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/veui/components/Textarea.vue?vue&type=template&id=5084953b&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.split.js
var es6_regexp_split = __webpack_require__(31);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/objectSpread.js
var objectSpread = __webpack_require__(9);
var objectSpread_default = /*#__PURE__*/__webpack_require__.n(objectSpread);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.number.constructor.js
var es6_number_constructor = __webpack_require__(89);

// EXTERNAL MODULE: ./node_modules/lodash/pick.js
var pick = __webpack_require__(91);
var pick_default = /*#__PURE__*/__webpack_require__.n(pick);

// EXTERNAL MODULE: ./node_modules/veui/managers/config.js
var config = __webpack_require__(390);

// CONCATENATED MODULE: ./node_modules/veui-theme-one/components/Textarea.js

config["a" /* default */].defaults({
  ui: {
    size: {
      values: ['large', 'small', 'tiny']
    }
  }
}, 'textarea');
// EXTERNAL MODULE: ./node_modules/veui/mixins/ui.js
var ui = __webpack_require__(391);

// EXTERNAL MODULE: ./node_modules/veui/mixins/input.js
var input = __webpack_require__(402);

// EXTERNAL MODULE: ./node_modules/veui/utils/helper.js
var helper = __webpack_require__(115);

// EXTERNAL MODULE: ./node_modules/veui/utils/math.js
var math = __webpack_require__(488);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/veui-loader/lib??ref--11!./node_modules/veui/components/Textarea.vue?vue&type=script&lang=js&




//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





var EVENTS = ['click', 'keyup', 'keydown', 'keypress'];
/* harmony default export */ var Textareavue_type_script_lang_js_ = ({
  name: 'veui-textarea',
  mixins: [ui["a" /* default */], input["a" /* default */]],
  props: {
    placeholder: String,
    value: {
      type: String,
      default: ''
    },
    lineNumber: Boolean,
    rows: [Number, String],
    autofocus: Boolean,
    composition: Boolean,
    autoresize: Boolean
  },
  data: function data() {
    return {
      localValue: this.value || '',
      focused: false,
      height: 0,
      measurerContentWidth: 0,
      measurerContentHeight: 0,
      scrollTop: 0
    };
  },
  computed: {
    listeners: function listeners() {
      return Object(helper["c" /* getListeners */])(EVENTS, this);
    },
    normalizedRows: function normalizedRows() {
      var rows = Number(this.rows);
      return isNaN(rows) ? null : rows;
    },
    attrs: function attrs() {
      return objectSpread_default()({}, pick_default()(this, 'placeholder', 'autofocus'), {
        rows: this.normalizedRows,
        disabled: this.realDisabled,
        readonly: this.realReadonly
      });
    },
    measure: function measure() {
      return this.lineNumber || this.autoresize;
    },
    lines: function lines() {
      // use a zero-width space to prevent empty element from being collapsed
      return this.localValue.split('\n').map(function (line) {
        return line || "\u200B".concat(line);
      });
    },
    digits: function digits() {
      return Math.floor(Object(math["c" /* log10 */])(this.lines.length)) + 1;
    },
    lineNumberWidth: function lineNumberWidth() {
      return this.digits * 8 + 12;
    },
    contentHeight: function contentHeight() {
      if (this.autoresize) {
        return "".concat(this.measurerContentHeight, "px");
      }

      return null;
    }
  },
  watch: {
    value: function value(val) {
      this.localValue = val || '';
    },
    localValue: {
      handler: function handler() {
        var _this = this;

        if (!this.measure) {
          return;
        }

        this.$nextTick(function () {
          if (_this.$refs.input) {
            _this.measurerContentWidth = _this.$refs.input.clientWidth;

            if (_this.autoresize) {
              _this.measurerContentHeight = _this.getMeasurersHeight();
            }
          }
        });
      },
      immediate: true
    }
  },
  methods: {
    handleFocus: function handleFocus(e) {
      this.focused = true;
      this.$emit('focus', e);
    },
    handleBlur: function handleBlur(e) {
      this.focused = false;
      this.$emit('blur', e);
    },
    getLineHeight: function getLineHeight(elem) {
      var computedStyle = getComputedStyle(elem);
      var lineHeight = parseFloat(computedStyle.lineHeight);

      if (isNaN(lineHeight)) {
        lineHeight = parseFloat(computedStyle.fontSize) * 1.2;
      }

      return lineHeight;
    },
    handleInput: function handleInput($event) {
      var _this2 = this;

      // 分3种情况
      // 1. 感知输入法，触发原生 input 事件就必须向上继续抛出
      // 2. 不感知输入法
      //  2.1 vue 底层会对原生 input 的 v-model 做忽略输入法组合态处理，所以 localValue 和 $event.target.value 不同步，只有当 localValue 产生变化时才向上继续抛出
      //  2.2 在 localValue 没有变化的情况下，原则上不抛出
      if (this.composition || !this.composition && this.localValue !== this.value) {
        this.$emit('input', $event.target.value, $event);
      }

      this.$nextTick(function () {
        var input = _this2.$refs.input;

        var inputLineHeight = _this2.getLineHeight(input);

        if (input.scrollHeight - input.clientHeight - input.scrollTop < inputLineHeight) {
          _this2.scrollTop = input.scrollHeight - input.clientHeight;
        }
      });
    },
    focus: function focus() {
      this.$refs.input.focus();
    },
    activate: function activate() {
      if (this.realDisabled || this.realReadonly) {
        return;
      }

      this.$refs.input.focus();
    },
    getMeasurersHeight: function getMeasurersHeight() {
      return this.$refs.measurer.offsetHeight;
    },
    handleScroll: function handleScroll() {
      if (!this.measure) {
        return;
      }

      this.scrollTop = this.$refs.input.scrollTop; // render 里面没有依赖 scrollTop ，单独改 scrollTop 并不会触发 updated hook ，
      // 所以手动去同步一下 scrollTop

      this.syncScroll();
    },
    syncScroll: function syncScroll() {
      var _this$$refs = this.$refs,
          input = _this$$refs.input,
          measurer = _this$$refs.measurer;
      input.scrollTop = this.scrollTop;

      if (measurer) {
        measurer.scrollTop = this.scrollTop;
      }
    }
  },
  updated: function updated() {
    var _this3 = this;

    this.$nextTick(function () {
      return _this3.syncScroll();
    });
  },
  mounted: function mounted() {
    this.scrollTop = this.$refs.input.scrollTop;
  }
});
// CONCATENATED MODULE: ./node_modules/veui/components/Textarea.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Textareavue_type_script_lang_js_ = (Textareavue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/veui-theme-one/components/textarea.less?vue&type=style&index=0&lang=less&
var textareavue_type_style_index_0_lang_less_ = __webpack_require__(776);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/veui/components/Textarea.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Textareavue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "Textarea.vue"
/* harmony default export */ var Textarea = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 776:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _vue_style_loader_index_js_ref_4_oneOf_1_0_css_loader_index_js_ref_4_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_4_oneOf_1_2_less_loader_dist_cjs_js_ref_4_oneOf_1_3_textarea_less_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(517);
/* harmony import */ var _vue_style_loader_index_js_ref_4_oneOf_1_0_css_loader_index_js_ref_4_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_4_oneOf_1_2_less_loader_dist_cjs_js_ref_4_oneOf_1_3_textarea_less_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_4_oneOf_1_0_css_loader_index_js_ref_4_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_4_oneOf_1_2_less_loader_dist_cjs_js_ref_4_oneOf_1_3_textarea_less_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_vue_style_loader_index_js_ref_4_oneOf_1_0_css_loader_index_js_ref_4_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_4_oneOf_1_2_less_loader_dist_cjs_js_ref_4_oneOf_1_3_textarea_less_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 777:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, "\n.veui-textarea.veui-input-invalid,.veui-textarea.veui-input-invalid:focus,.veui-textarea.veui-input-invalid:hover{border-color:#ff5b5b\n}\n.veui-textarea{display:inline-block;position:relative;overflow:hidden;width:300px;border:1px solid #dbdbdb;padding:0;background-color:#eee;font-size:14px;line-height:36px;transition:border-color .2s,color .2s;color:#666;min-height:150px\n}\n.veui-textarea-focused,.veui-textarea:hover{border-color:#999\n}\n.veui-textarea-focused{color:#333\n}\n.veui-textarea-input,.veui-textarea-measurer{font:inherit\n}\n.veui-textarea-input{position:relative;float:right;width:100%;height:inherit;min-height:inherit;max-height:inherit;border:none;outline:none;padding:0 10px;z-index:1;resize:none\n}\n.veui-textarea-rows{min-height:auto\n}\n.veui-textarea-rows .veui-textarea-input{height:auto\n}\n.veui-textarea-measurer+.veui-textarea-input{max-width:calc(100% - 36px)\n}\n.veui-textarea-measurer{position:absolute;top:0;right:0;left:0;overflow:hidden;white-space:pre-wrap;word-wrap:break-word;color:#999\n}\n.veui-textarea-measurer-line{overflow:hidden\n}\n.veui-textarea-measurer-line-number{float:left;min-width:36px;text-align:center\n}\n.veui-textarea-measurer-line-content{padding-right:10px;padding-left:10px;overflow:hidden;visibility:hidden\n}\n.veui-textarea[ui~=small]{font-size:12px;line-height:32px\n}\n.veui-textarea[ui~=large]{font-size:16px;line-height:42px\n}\n.veui-textarea.veui-disabled,.veui-textarea.veui-disabled:hover,.veui-textarea.veui-readonly,.veui-textarea.veui-readonly:hover{border-color:#dbdbdb;color:#999\n}\n.veui-textarea.veui-disabled .veui-textarea-input,.veui-textarea.veui-readonly .veui-textarea-input{background-color:#f7f7f7\n}\n.veui-textarea.veui-disabled,.veui-textarea.veui-disabled .veui-textarea-input{cursor:not-allowed\n}", ""]);

// exports


/***/ })

}]);