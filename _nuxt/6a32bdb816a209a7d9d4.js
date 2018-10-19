(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

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

/***/ 405:
/***/ (function(module, exports, __webpack_require__) {

var arrayMap = __webpack_require__(116),
    baseClone = __webpack_require__(425),
    baseUnset = __webpack_require__(196),
    castPath = __webpack_require__(44),
    copyObject = __webpack_require__(191),
    customOmitClone = __webpack_require__(420),
    flatRest = __webpack_require__(195),
    getAllKeysIn = __webpack_require__(414);

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;

/**
 * The opposite of `_.pick`; this method creates an object composed of the
 * own and inherited enumerable property paths of `object` that are not omitted.
 *
 * **Note:** This method is considerably slower than `_.pick`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The source object.
 * @param {...(string|string[])} [paths] The property paths to omit.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.omit(object, ['a', 'c']);
 * // => { 'b': '2' }
 */
var omit = flatRest(function(object, paths) {
  var result = {};
  if (object == null) {
    return result;
  }
  var isDeep = false;
  paths = arrayMap(paths, function(path) {
    path = castPath(path, object);
    isDeep || (isDeep = path.length > 1);
    return path;
  });
  copyObject(object, getAllKeysIn(object), result);
  if (isDeep) {
    result = baseClone(result, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
  }
  var length = paths.length;
  while (length--) {
    baseUnset(result, paths[length]);
  }
  return result;
});

module.exports = omit;


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

/***/ 420:
/***/ (function(module, exports, __webpack_require__) {

var isPlainObject = __webpack_require__(415);

/**
 * Used by `_.omit` to customize its `_.cloneDeep` use to only clone plain
 * objects.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {string} key The key of the property to inspect.
 * @returns {*} Returns the uncloned value or `undefined` to defer cloning to `_.cloneDeep`.
 */
function customOmitClone(value) {
  return isPlainObject(value) ? undefined : value;
}

module.exports = customOmitClone;


/***/ }),

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/veui-loader/lib??ref--11!./node_modules/veui/components/Overlay.vue?vue&type=template&id=0f6be2a2&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"veui-overlay"},[_c('transition',{attrs:{"name":"veui-overlay"},on:{"after-leave":function($event){_vm.$emit('afterclose')}}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.realOpen),expression:"realOpen"}],ref:"box",staticClass:"veui-overlay-box",class:_vm.realOverlayClass,style:({zIndex: _vm.zIndex}),attrs:{"ui":_vm.realUi}},[_vm._t("default")],2)])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/veui/components/Overlay.vue?vue&type=template&id=0f6be2a2&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.number.constructor.js
var es6_number_constructor = __webpack_require__(89);

// EXTERNAL MODULE: ./node_modules/lodash/assign.js
var lodash_assign = __webpack_require__(92);
var assign_default = /*#__PURE__*/__webpack_require__.n(lodash_assign);

// EXTERNAL MODULE: ./node_modules/tether/dist/js/tether.js
var tether = __webpack_require__(992);
var tether_default = /*#__PURE__*/__webpack_require__.n(tether);

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

// EXTERNAL MODULE: ./node_modules/lodash/noop.js
var noop = __webpack_require__(93);
var noop_default = /*#__PURE__*/__webpack_require__.n(noop);

// EXTERNAL MODULE: ./node_modules/lodash/find.js
var find = __webpack_require__(54);
var find_default = /*#__PURE__*/__webpack_require__.n(find);

// EXTERNAL MODULE: ./node_modules/lodash/findLast.js
var findLast = __webpack_require__(993);
var findLast_default = /*#__PURE__*/__webpack_require__.n(findLast);

// EXTERNAL MODULE: ./node_modules/lodash/last.js
var last = __webpack_require__(206);
var last_default = /*#__PURE__*/__webpack_require__.n(last);

// EXTERNAL MODULE: ./node_modules/lodash/uniqueId.js
var uniqueId = __webpack_require__(124);
var uniqueId_default = /*#__PURE__*/__webpack_require__.n(uniqueId);

// EXTERNAL MODULE: ./node_modules/lodash/remove.js
var remove = __webpack_require__(138);
var remove_default = /*#__PURE__*/__webpack_require__.n(remove);

// CONCATENATED MODULE: ./node_modules/veui/managers/overlay.js










/**
 * 节点，每一个节点会拥有自己的 order 值
 */
var overlay_Node =
/*#__PURE__*/
function () {
  /**
   * 父节点
   *
   * @public
   * @type Node
   */

  /**
   * 在前序遍历中的前一个节点
   *
   * @public
   * @type Node
   */

  /**
   * 在前序遍历中的后一个节点
   *
   * @public
   * @type Node
   */

  /**
   * 子节点按照 priority 的分组，结构示例：
   * [
   *   {
   *     priority: 1,
   *     children: [node1, node2, ...]
   *   },
   *   {
   *     priority: 2,
   *     children: [node3, node4, ...]
   *   }
   * ]
   *
   * @private
   * @type Array
   */

  /**
   * 节点的唯一标识
   *
   * @public
   * @readonly
   * @type string
   */

  /**
   * order 值
   *
   * @public
   * @type number
   */
  function Node() {
    classCallCheck_default()(this, Node);

    defineProperty_default()(this, "parent", null);

    defineProperty_default()(this, "previous", null);

    defineProperty_default()(this, "next", null);

    defineProperty_default()(this, "childrenGroup", []);

    defineProperty_default()(this, "id", null);

    defineProperty_default()(this, "order", null);

    this.id = uniqueId_default()('overlay-node-id-');
  }
  /**
   * 找到第一个 children 不为空的分组
   *
   * @public
   * @param {boolean} [fromLast] 是否倒着找
   * @param {number} [fromGroupIndex] 从指定索引处开始找
   * @return {Object}
   */


  createClass_default()(Node, [{
    key: "findFirstNotEmptyGroup",
    value: function findFirstNotEmptyGroup() {
      var fromLast = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var fromGroupIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : fromLast ? this.childrenGroup.length - 1 : 0;

      var callback = function callback(group) {
        if (group.children.length) {
          return true;
        }
      };

      return fromLast ? findLast_default()(this.childrenGroup, callback, fromGroupIndex) : find_default()(this.childrenGroup, callback, fromGroupIndex);
    }
    /**
     * 所有 children 的头部
     *
     * @public
     * @type {Node}
     */

  }, {
    key: "appendChild",

    /**
     * 根据 priority 追加子节点。
     *
     * @public
     * @param {Node} child 待追加的子节点
     * @param {number} priority 优先级顺序值，越大，相应的子节点就分配在越靠后的 children group 中。
     * @return {Object} 新插入位置的索引信息
     */
    value: function appendChild(child) {
      var priority = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var groupIndex = -1;
      var isInserted = false;
      var childIndex = 0;

      find_default()(this.childrenGroup, function (group, i) {
        if (group.priority === priority) {
          group.children.push(child);
          isInserted = true;
          childIndex = group.children.length - 1;
          groupIndex = i;
          return true;
        }

        if (group.priority > priority) {
          groupIndex = i;
          return true;
        }
      });

      if (!isInserted) {
        if (groupIndex === -1) {
          this.childrenGroup.push({
            children: [child],
            priority: priority
          });
          groupIndex = this.childrenGroup.length - 1;
        } else {
          this.childrenGroup.splice(groupIndex, 0, {
            children: [child],
            priority: priority
          });
        }
      }

      child.parent = this;
      return {
        groupIndex: groupIndex,
        childIndex: childIndex
      };
    }
    /**
     * 根据节点 id 从当前节点的子级中移除节点
     *
     * @private
     * @param {string} id 节点 id
     * @return {Object} 被移除的节点的索引信息
     */

  }, {
    key: "removeChildById",
    value: function removeChildById(id) {
      var _this = this;

      var groupIndex;
      var childIndex;

      var _loop = function _loop(i, il) {
        var group = _this.childrenGroup[i];

        var removedNodes = remove_default()(group.children, function (child, index) {
          if (child.id === id) {
            child.parent = null;
            child.previous = null;
            groupIndex = i;
            childIndex = index;
            return true;
          }
        });

        if (removedNodes.length === 1) {
          return "break";
        }
      };

      for (var i = 0, il = this.childrenGroup.length; i < il; i++) {
        var _ret = _loop(i, il);

        if (_ret === "break") break;
      }

      return {
        groupIndex: groupIndex,
        childIndex: childIndex
      };
    }
    /**
     * 从父级节点移除当前节点
     *
     * @public
     * @return {Object} 索引信息
     */

  }, {
    key: "remove",
    value: function remove() {
      if (!this.parent) {
        return;
      }

      return this.parent.removeChildById(this.id);
    }
    /**
     * 获取当前节点的直接子节点数量
     *
     * @public
     */

  }, {
    key: "getChildrenCount",
    value: function getChildrenCount() {
      return this.childrenGroup.reduce(function (count, group) {
        return count + group.children.length;
      }, 0);
    }
    /**
     * 获取指定 child 节点的索引信息
     *
     * @param {string} targetChildId child id
     * @return {Object}
     */

  }, {
    key: "getChildIndex",
    value: function getChildIndex(targetChildId) {
      for (var i = 0, il = this.childrenGroup.length; i < il; i++) {
        var group = this.childrenGroup[i];

        for (var j = 0, jl = group.children.length; j < jl; j++) {
          var child = group.children[j];

          if (child.id === targetChildId) {
            return {
              groupIndex: i,
              childIndex: j
            };
          }
        }
      }
    }
  }, {
    key: "head",
    get: function get() {
      var group = this.findFirstNotEmptyGroup();
      return group && group.children[0];
    }
    /**
     * 所有 children 的尾部
     *
     * @public
     * @type {Node}
     */

  }, {
    key: "tail",
    get: function get() {
      var group = this.findFirstNotEmptyGroup(true);
      return group && last_default()(group.children);
    }
  }]);

  return Node;
}();
/**
 * 用于计算 order 的树
 */


var overlay_Tree =
/*#__PURE__*/
function () {
  function Tree() {
    classCallCheck_default()(this, Tree);

    defineProperty_default()(this, "root", new overlay_Node());

    defineProperty_default()(this, "nodeMap", defineProperty_default()({}, this.root.id, {
      node: this.root,
      instance: null,
      orderChangeCallback: noop_default.a
    }));

    defineProperty_default()(this, "baseOrder", 100);
  }

  createClass_default()(Tree, [{
    key: "setBaseOrder",

    /**
     * 设置基准 order
     *
     * @public
     * @param {number} [order] 基准 order
     */
    value: function setBaseOrder(order) {
      this.baseOrder = order;
    }
    /**
     * 从指定节点开始按顺序迭代树中的节点，如果迭代回调函数返回真值，就会终止迭代。
     *
     * @private
     * @param {Node} curNode 起始节点
     * @param {Function} callback 迭代回调
     */

  }, {
    key: "iterate",
    value: function iterate() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$curNode = _ref.curNode,
          curNode = _ref$curNode === void 0 ? this.root : _ref$curNode,
          callback = _ref.callback;

      var cur = curNode;

      do {
        if (callback(cur)) {
          break;
        }

        cur = cur.next;
      } while (cur);
    }
    /**
     * 修复指定节点的 previous 和 next 信息
     *
     * @private
     * @param {Node} [node] 待修复的节点
     * @param {number} [groupIndex] 待修复节点所在的分组，在父节点的 childrenGroup 中的索引位置
     * @param {number} [childIndex] 待修复节点在自身分组中的索引位置
     * @param {number} [fixDirection] 修复方向，1 -> 只修复 previous ，2 -> 只修复 next ，3 -> 都修复
     */

  }, {
    key: "fixLink",
    value: function fixLink() {
      var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          node = _ref2.node,
          groupIndex = _ref2.groupIndex,
          childIndex = _ref2.childIndex,
          _ref2$fixDirection = _ref2.fixDirection,
          fixDirection = _ref2$fixDirection === void 0 ? 3 : _ref2$fixDirection;

      if (fixDirection === 1 || fixDirection === 3) {
        var previous = this.findPreviousNode(node, groupIndex, childIndex);
        previous.next = node;
        node.previous = previous;
      }

      if (fixDirection === 2 || fixDirection === 3) {
        var next = this.findNextNode(node, groupIndex, childIndex);

        if (next) {
          next.previous = node;
        }

        node.next = next;
      }
    }
    /**
     * 包裹一层 Node#appendChild 方法，加上了修复前后节点的功能。
     *
     * @private
     * @param {Node} [parent] 父节点
     * @param {Node} [node] 待插入节点
     * @param {number} [priority] priority
     * @return {Object} 插入节点的索引信息
     */

  }, {
    key: "appendChild",
    value: function appendChild(parent, node, priority) {
      var _parent$appendChild = parent.appendChild(node, priority),
          groupIndex = _parent$appendChild.groupIndex,
          childIndex = _parent$appendChild.childIndex;

      this.fixLink({
        node: node,
        groupIndex: groupIndex,
        childIndex: childIndex
      });
      var tail = node.tail;

      while (tail) {
        var nextTail = tail.tail;

        if (!nextTail) {
          this.fixLink({
            node: tail,
            groupIndex: tail.parent.childrenGroup.length - 1,
            childIndex: last_default()(tail.parent.childrenGroup).children.length - 1,
            fixDirection: 2
          });
        }

        tail = nextTail;
      }

      return {
        groupIndex: groupIndex,
        childIndex: childIndex
      };
    }
    /**
     * 包一层 Node#remove ，提供清除前后节点信息的功能
     *
     * @private
     * @param {Node} [node] 待移除节点
     * @return {Object} 索引信息
     */

  }, {
    key: "remove",
    value: function remove(node) {
      var previousBrokenNode = node.previous;
      var nextBrokenNode = node.next;

      var _node$remove = node.remove(),
          groupIndex = _node$remove.groupIndex,
          childIndex = _node$remove.childIndex;

      if (previousBrokenNode) {
        this.fixLink({
          node: previousBrokenNode,
          fixDirection: 2
        });
      }

      if (nextBrokenNode && nextBrokenNode.parent !== node) {
        this.fixLink({
          node: nextBrokenNode,
          fixDirection: 1
        });
      }

      return {
        groupIndex: groupIndex,
        childIndex: childIndex
      };
    }
    /**
     * 在指定父级节点中插入子节点
     *
     * @private
     * @param {string} parentId 父节点 id
     * @param {Node} node 待插入子节点
     * @param {number} priority 优先级顺序值
     * @return {Object} “句柄”
     */

  }, {
    key: "insertNode",
    value: function insertNode(parentId, node, priority) {
      var parent = this.nodeMap[parentId];

      if (!parent) {
        return;
      }

      var parentNode = parent.node;
      this.appendChild(parentNode, node, priority);
      this.generateTreeOrder(node);
    }
    /**
     * 创建一个节点，并将其插入到树中
     *
     * @public
     * @param {string} parentId 父节点 id
     * @param {number} priority 优先级顺序值
     */

  }, {
    key: "createNode",
    value: function createNode() {
      var _this2 = this;

      var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref3$parentId = _ref3.parentId,
          parentId = _ref3$parentId === void 0 ? this.root.id : _ref3$parentId,
          priority = _ref3.priority,
          _ref3$orderChangeCall = _ref3.orderChangeCallback,
          orderChangeCallback = _ref3$orderChangeCall === void 0 ? noop_default.a : _ref3$orderChangeCall;

      var node = new overlay_Node();
      var id = node.id;
      var instance = {
        id: id,
        remove: function remove() {
          _this2.remove(node);

          _this2.nodeMap[id] = null;
        },
        appendTo: function appendTo(parentId, priority) {
          _this2.nodeMap[node.id] = {
            node: node,
            instance: instance,
            orderChangeCallback: orderChangeCallback
          };

          _this2.moveNode(node, parentId, priority);
        },
        toTop: function toTop() {
          var _node$parent$getChild = node.parent.getChildIndex(node.id),
              groupIndex = _node$parent$getChild.groupIndex;

          var targetGroup = node.parent.childrenGroup[groupIndex];
          var priority = targetGroup.priority;
          var parent = node.parent;
          var previous = node.previous;

          _this2.remove(node);

          _this2.appendChild(parent, node, priority);

          _this2.generateTreeOrder(previous);
        }
      };
      this.nodeMap[id] = {
        node: node,
        instance: instance,
        orderChangeCallback: orderChangeCallback
      };
      this.insertNode(parentId, node, priority);
      orderChangeCallback(node.order);
      return instance;
    }
    /**
     * 将节点移动到树中 `指定父节点下` 的 `指定优先级分组下` 的 children 中的最后一个位置
     *
     * @private
     * @param {Node} node 待移动的节点
     * @param {string} parentId 父节点 id
     * @param {number} priority 优先级顺序值
     */

  }, {
    key: "moveNode",
    value: function moveNode(node, parentId, priority) {
      var realParentId = parentId || this.root.id;
      var parent = this.nodeMap[realParentId].node;
      var curParent = node.parent;

      if (parent === curParent) {
        return;
      }

      this.remove(node);
      this.appendChild(parent, node, priority); // 这里不知道是往前移动了，还是往后移动了，不好做判断，干脆整个跑一遍生成 order

      this.generateTreeOrder(this.root);
    }
    /**
     * normalize 一下 index 信息
     *
     * @private
     * @param {Node} node
     * @param {number=} groupIndex
     * @param {number=} childIndex
     * @return {Object}
     */

  }, {
    key: "normalizeIndex",
    value: function normalizeIndex(node, groupIndex, childIndex) {
      if (groupIndex === undefined) {
        var _node$parent$getChild2 = node.parent.getChildIndex(node.id);

        groupIndex = _node$parent$getChild2.groupIndex;
        childIndex = _node$parent$getChild2.childIndex;
      }

      var children = node.parent.childrenGroup[groupIndex].children;

      if (childIndex === undefined) {
        childIndex = children.indexOf(node);
      }

      return {
        groupIndex: groupIndex,
        childIndex: childIndex
      };
    }
    /**
     * 找到指定节点的前一个节点
     *
     * @private
     * @param {Node} [node] 当前节点
     * @param {number=} [groupIndex] 当前节点的分组索引
     * @param {number=} [childIndex] 当前节点在分组中的位置
     * @return {Node}
     */

  }, {
    key: "findPreviousNode",
    value: function findPreviousNode(node, groupIndex) {
      var childIndex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : -1;

      if (node === this.root || !node.parent) {
        return;
      }

      var _this$normalizeIndex = this.normalizeIndex(node, groupIndex, childIndex);

      groupIndex = _this$normalizeIndex.groupIndex;
      childIndex = _this$normalizeIndex.childIndex;
      var targetNode;

      if (childIndex > 0) {
        var previousSibling = node.parent.childrenGroup[groupIndex].children[childIndex - 1];
        var curTail = previousSibling;

        do {
          targetNode = curTail;
          curTail = curTail.tail;
        } while (curTail);

        return targetNode;
      } // 到前面的分组看看


      if (groupIndex > 0) {
        findLast_default()(node.parent.childrenGroup.slice(0, groupIndex), function (group) {
          if (group.children.length) {
            var lastChild = last_default()(group.children);

            targetNode = lastChild.tail || lastChild;
            return true;
          }
        });
      }

      return targetNode || node.parent;
    }
    /**
     * 找到指定节点的下一个节点
     *
     * @private
     * @param {Node} [node] 当前节点
     * @param {number=} [groupIndex] 当前节点的分组索引
     * @param {number=} [childIndex] 当前节点在分组中的位置
     * @return {Node}
     */

  }, {
    key: "findNextNode",
    value: function findNextNode(node, groupIndex, childIndex) {
      var head = node.head;

      if (head) {
        return head;
      }

      if (node === this.root || !node.parent) {
        return null;
      }

      var _this$normalizeIndex2 = this.normalizeIndex(node, groupIndex, childIndex);

      groupIndex = _this$normalizeIndex2.groupIndex;
      childIndex = _this$normalizeIndex2.childIndex;
      var children = node.parent.childrenGroup[groupIndex].children;

      if (childIndex < children.length - 1) {
        return children[childIndex + 1];
      }

      var cur = node;

      while (cur.parent) {
        var _cur$parent$getChildI = cur.parent.getChildIndex(cur.id),
            _groupIndex = _cur$parent$getChildI.groupIndex,
            _childIndex = _cur$parent$getChildI.childIndex;

        var loopChildren = cur.parent.childrenGroup[_groupIndex].children;

        if (_childIndex < loopChildren.length - 1) {
          return loopChildren[_childIndex + 1];
        }

        var group = cur.parent.findFirstNotEmptyGroup(false, _groupIndex + 1);

        if (group && group.children.length) {
          return group.children[0];
        }

        cur = cur.parent;
      }

      return null;
    }
    /**
     * 从指定节点开始，刷一遍 order 值
     *
     * @param {Node} node 当前指定的节点
     * @private
     */

  }, {
    key: "generateTreeOrder",
    value: function generateTreeOrder(node) {
      var _this3 = this;

      var previous = node ? this.findPreviousNode(node) : this.root;
      var baseOrder = previous && previous.order ? previous.order + 1 : this.baseOrder;
      this.iterate({
        curNode: node,
        callback: function callback(cur) {
          if (cur === _this3.root) {
            return;
          }

          var order = baseOrder++;
          var isEqual = cur.order === order;
          cur.order = order;

          if (!isEqual) {
            _this3.nodeMap[cur.id].orderChangeCallback(cur.order);
          }
        }
      });
    }
  }]);

  return Tree;
}();
/* harmony default export */ var overlay = (new overlay_Tree());
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/lodash/keys.js
var keys = __webpack_require__(17);
var keys_default = /*#__PURE__*/__webpack_require__.n(keys);

// EXTERNAL MODULE: ./node_modules/lodash/findIndex.js
var findIndex = __webpack_require__(22);
var findIndex_default = /*#__PURE__*/__webpack_require__.n(findIndex);

// EXTERNAL MODULE: ./node_modules/veui/utils/dom.js
var dom = __webpack_require__(123);

// CONCATENATED MODULE: ./node_modules/veui/managers/focus.js










var focus_FocusContext =
/*#__PURE__*/
function () {
  /**
   *
   * @param {Element} root Root element for focus context
   * @param {FocusManager} env FocusManager instance that creates this context
   * @param {Element=|FocusContext} source Previous focused element or FocusContext
   * @param {Boolean=} trap Whether focus should be trapped inside root
   * @param {Element=} preferred Where we should start searching for focusable elements
   */
  function FocusContext(root, env, _ref) {
    var _this = this;

    var source = _ref.source,
        _ref$trap = _ref.trap,
        trap = _ref$trap === void 0 ? false : _ref$trap,
        preferred = _ref.preferred;

    classCallCheck_default()(this, FocusContext);

    if (!root) {
      throw new Error('Root must be specified to create a FocusContext instance.');
    }

    this.root = root;
    this.env = env;
    this.source = source;
    this.trap = trap;
    this.preferred = preferred;

    this.outsideStartHandler = function () {
      _this.focusAt(-2, true);
    };

    this.outsideEndHandler = function () {
      _this.focusAt(1, true);
    };

    this.init();
  }
  /**
   * Initalize a focus context:
   * 1. trap focus events inside `root`
   * 2. focus `root` by default
   */


  createClass_default()(FocusContext, [{
    key: "init",
    value: function init() {
      if (this.trap) {
        var before = document.createElement('div');
        before.tabIndex = 0;
        var after = before.cloneNode();
        before.addEventListener('focus', this.outsideStartHandler, true);
        after.addEventListener('focus', this.outsideEndHandler, true);
        this.root.insertBefore(before, this.root.firstChild);
        this.root.appendChild(after);
        this.wardBefore = before;
        this.wardAfter = after;
      } // skip wardBefore if trapping


      this.focusAt(this.trap ? 1 : 0);
    }
  }, {
    key: "focusAt",
    value: function focusAt() {
      var _this2 = this;

      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var ignoreAutofocus = arguments.length > 1 ? arguments[1] : undefined;
      setTimeout(function () {
        var target = _this2.preferred || _this2.root;

        if (target && !Object(dom["d" /* focusIn */])(target, index, ignoreAutofocus)) {
          _this2.root.focus();
        }
      });
    }
  }, {
    key: "toTop",
    value: function toTop() {
      this.env.toTop(this);
    }
  }, {
    key: "focus",
    value: function focus() {
      this.focusAt(this.trap ? 1 : 0);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      var trap = this.trap,
          source = this.source,
          wardBefore = this.wardBefore,
          wardAfter = this.wardAfter;

      if (trap) {
        wardBefore.removeEventListener('focus', this.outsideStartHandler, true);
        wardAfter.removeEventListener('focus', this.outsideEndHandler, true);
        this.root.removeChild(wardBefore);
        this.root.removeChild(wardAfter);
      }

      if (source) {
        this.source = null;

        if (this.env.trigger !== 'pointer' && typeof source.focus === 'function') {
          setTimeout(function () {
            source.focus();
          });
        }
      }

      this.preferred = null;
      this.root = null;
    }
  }]);

  return FocusContext;
}();

var focus_FocusManager =
/*#__PURE__*/
function () {
  function FocusManager() {
    var _this3 = this;

    classCallCheck_default()(this, FocusManager);

    defineProperty_default()(this, "stack", []);

    defineProperty_default()(this, "trigger", 'pointer');

    defineProperty_default()(this, "triggerHandlers", {
      keydown: function keydown() {
        _this3.trigger = 'keyboard';
      },
      mousedown: function mousedown() {
        _this3.trigger = 'pointer';
      }
    });
  }

  createClass_default()(FocusManager, [{
    key: "initTriggerHandlers",
    value: function initTriggerHandlers() {
      var _this4 = this;

      keys_default()(this.triggerHandlers).forEach(function (type) {
        document.addEventListener(type, _this4.triggerHandlers[type], true);
      });
    }
  }, {
    key: "destroyTriggerHandlers",
    value: function destroyTriggerHandlers() {
      var _this5 = this;

      keys_default()(this.triggerHandlers).forEach(function (type) {
        document.removeEventListener(type, _this5.triggerHandlers[type], true);
      });
    }
  }, {
    key: "createContext",
    value: function createContext(root) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (!this.stack.length) {
        this.initTriggerHandlers();
      }

      var context = new focus_FocusContext(root, this, options);
      this.stack.push(context);
      return context;
    }
  }, {
    key: "toTop",
    value: function toTop(context) {
      this.detach(context);
      context.source = last_default()(this.stack);
      this.stack.push(context);
    }
  }, {
    key: "detach",
    value: function detach(context) {
      var stack = this.stack;

      var i = findIndex_default()(stack, context);

      if (i === -1) {
        return;
      }

      if (i < stack.length - 1) {
        stack[i + 1].source = context.source;
      }

      remove_default()(this.stack, function (item) {
        return item === context;
      });

      return context;
    }
  }, {
    key: "remove",
    value: function remove(context) {
      this.detach(context);
      context.destroy();

      if (!this.stack.length) {
        this.destroyTriggerHandlers();
      }
    }
  }]);

  return FocusManager;
}();
/* harmony default export */ var managers_focus = (new focus_FocusManager());
// EXTERNAL MODULE: ./node_modules/veui/managers/config.js
var config = __webpack_require__(390);

// EXTERNAL MODULE: ./node_modules/veui/mixins/ui.js
var ui = __webpack_require__(391);

// EXTERNAL MODULE: ./node_modules/veui/utils/helper.js
var helper = __webpack_require__(115);

// EXTERNAL MODULE: ./node_modules/veui/common/uiTypes.js
var uiTypes = __webpack_require__(407);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/veui-loader/lib??ref--11!./node_modules/veui/components/Overlay.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//
//
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
  'overlay.baseZIndex': 200,
  'overlay.overlayClass': {}
});
overlay.setBaseOrder(config["a" /* default */].get('overlay.baseZIndex'));
/* harmony default export */ var Overlayvue_type_script_lang_js_ = ({
  name: 'veui-overlay',
  uiTypes: ['overlay'],
  mixins: [ui["a" /* default */]],
  props: {
    overlayClass: Object(helper["a" /* getClassPropDef */])(),
    open: Boolean,
    target: {
      default: null
    },
    options: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    priority: Number,
    autofocus: Boolean,
    modal: Boolean
  },
  data: function data() {
    return {
      zIndex: null,
      appendBody: false,
      targetNode: null,
      source: null
    };
  },
  computed: {
    realOpen: function realOpen() {
      return this.zIndex !== null && this.open;
    },
    realOverlayClass: function realOverlayClass() {
      return Object(helper["k" /* mergeClasses */])(this.overlayClass, config["a" /* default */].get('overlay.overlayClass'));
    }
  },
  watch: {
    realOpen: function realOpen(val) {
      this.toggleLocator(val);
      this.updateLocator();
      this.updateNode();

      if (val) {
        var node = this.overlayNode;
        node.toTop();
        this.initFocus();
      } else {
        this.destroyFocus();
      }
    },
    target: function target() {
      this.findTargetNode();
    },
    targetNode: function targetNode() {
      this.updateLocator();
      this.updateNode();
    }
  },
  created: function created() {
    // 初始化时，updateNode 依赖 created 在组件树中的执行顺序：
    // 先父后子
    // 而 mounted 执行顺序是先子后父，所以 updateNode 只能放在
    // created 里面。
    this.updateNode();
  },
  mounted: function mounted() {
    this.overlayBox = this.$refs.box;
    document.body.appendChild(this.overlayBox);

    if (this.realOpen) {
      this.initFocus();
    }

    this.findTargetNode();
    this.updateLocator();
  },
  updated: function updated() {
    var _this = this;

    this.$nextTick(function () {
      if (_this.realOpen) {
        _this.relocate();
      }
    });
  },
  methods: {
    // 更新 zindex 树
    updateNode: function updateNode() {
      var _this2 = this;

      if (!this.overlayNode) {
        this.overlayNode = overlay.createNode({
          parentId: this.findParentOverlayId(),
          priority: this.priority,
          orderChangeCallback: function orderChangeCallback(order) {
            _this2.zIndex = order;
          }
        });
      } else {
        this.overlayNode.appendTo(this.findParentOverlayId(), this.priority);
      }
    },
    findParentOverlayId: function findParentOverlayId() {
      var cur = this.$parent;

      while (cur) {
        if (cur && this.isOverlay(cur)) {
          return cur.overlayNode.id;
        }

        cur = cur.$parent;
      }
    },
    updateLocator: function updateLocator() {
      var _this3 = this;

      if (!this.realOpen) {
        return;
      }

      if (this.targetNode) {
        var options = assign_default()({}, this.options, {
          element: this.overlayBox,
          target: this.targetNode
        });

        if (!this.tether) {
          this.tether = new tether_default.a(options);
          this.tether.on('repositioned', function () {
            _this3.$emit('locate');
          });
        } else {
          this.tether.setOptions(options);
        }
      }
    },
    relocate: function relocate() {
      if (this.tether) {
        this.tether.position();
      }
    },
    findTargetNode: function findTargetNode() {
      if (this.target) {
        this.targetNode = Object(utils_context["b" /* getNodes */])(this.target, this.$vnode.context)[0];
      } else {
        this.targetNode = null;
      }
    },
    isOverlay: function isOverlay(componentInstance) {
      return Object(helper["i" /* isType */])(componentInstance, 'overlay');
    },
    focus: function focus() {
      this.overlayNode.toTop();
      this.focusContext.toTop();
    },
    initFocus: function initFocus() {
      if (!this.autofocus) {
        return;
      }

      if (!this.focusContext) {
        this.focusContext = managers_focus.createContext(this.overlayBox, {
          source: document.activeElement,
          trap: this.modal
        });
        this.lastSource = document.activeElement;
      }
    },
    destroyFocus: function destroyFocus() {
      if (this.focusContext) {
        managers_focus.remove(this.focusContext);
        this.focusContext = null;
      }
    },
    toggleLocator: function toggleLocator(enable) {
      if (!this.tether) {
        return;
      }

      this.tether[enable ? 'enable' : 'disable']();
    },
    destroyLocator: function destroyLocator() {
      if (!this.tether) {
        return;
      }

      this.tether.destroy();
      this.tether = null;
    }
  },
  destroyed: function destroyed() {
    this.destroyLocator();
    var node = this.overlayNode;
    node.remove();
    this.overlayNode = null;
    this.destroyFocus();
    this.$el.appendChild(this.overlayBox);
    this.overlayBox = null;
  }
});
// CONCATENATED MODULE: ./node_modules/veui/components/Overlay.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Overlayvue_type_script_lang_js_ = (Overlayvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/veui-theme-one/components/overlay.less?vue&type=style&index=0&lang=less&
var overlayvue_type_style_index_0_lang_less_ = __webpack_require__(995);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/veui/components/Overlay.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Overlayvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "Overlay.vue"
/* harmony default export */ var Overlay = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 592:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(996);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(6).default
var update = add("43c81f1c", content, true, {"sourceMap":false});

/***/ }),

/***/ 992:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! tether 1.4.4 */

(function(root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(this, function() {

'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var TetherBase = undefined;
if (typeof TetherBase === 'undefined') {
  TetherBase = { modules: [] };
}

var zeroElement = null;

// Same as native getBoundingClientRect, except it takes into account parent <frame> offsets
// if the element lies within a nested document (<frame> or <iframe>-like).
function getActualBoundingClientRect(node) {
  var boundingRect = node.getBoundingClientRect();

  // The original object returned by getBoundingClientRect is immutable, so we clone it
  // We can't use extend because the properties are not considered part of the object by hasOwnProperty in IE9
  var rect = {};
  for (var k in boundingRect) {
    rect[k] = boundingRect[k];
  }

  if (node.ownerDocument !== document) {
    var _frameElement = node.ownerDocument.defaultView.frameElement;
    if (_frameElement) {
      var frameRect = getActualBoundingClientRect(_frameElement);
      rect.top += frameRect.top;
      rect.bottom += frameRect.top;
      rect.left += frameRect.left;
      rect.right += frameRect.left;
    }
  }

  return rect;
}

function getScrollParents(el) {
  // In firefox if the el is inside an iframe with display: none; window.getComputedStyle() will return null;
  // https://bugzilla.mozilla.org/show_bug.cgi?id=548397
  var computedStyle = getComputedStyle(el) || {};
  var position = computedStyle.position;
  var parents = [];

  if (position === 'fixed') {
    return [el];
  }

  var parent = el;
  while ((parent = parent.parentNode) && parent && parent.nodeType === 1) {
    var style = undefined;
    try {
      style = getComputedStyle(parent);
    } catch (err) {}

    if (typeof style === 'undefined' || style === null) {
      parents.push(parent);
      return parents;
    }

    var _style = style;
    var overflow = _style.overflow;
    var overflowX = _style.overflowX;
    var overflowY = _style.overflowY;

    if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
      if (position !== 'absolute' || ['relative', 'absolute', 'fixed'].indexOf(style.position) >= 0) {
        parents.push(parent);
      }
    }
  }

  parents.push(el.ownerDocument.body);

  // If the node is within a frame, account for the parent window scroll
  if (el.ownerDocument !== document) {
    parents.push(el.ownerDocument.defaultView);
  }

  return parents;
}

var uniqueId = (function () {
  var id = 0;
  return function () {
    return ++id;
  };
})();

var zeroPosCache = {};
var getOrigin = function getOrigin() {
  // getBoundingClientRect is unfortunately too accurate.  It introduces a pixel or two of
  // jitter as the user scrolls that messes with our ability to detect if two positions
  // are equivilant or not.  We place an element at the top left of the page that will
  // get the same jitter, so we can cancel the two out.
  var node = zeroElement;
  if (!node || !document.body.contains(node)) {
    node = document.createElement('div');
    node.setAttribute('data-tether-id', uniqueId());
    extend(node.style, {
      top: 0,
      left: 0,
      position: 'absolute'
    });

    document.body.appendChild(node);

    zeroElement = node;
  }

  var id = node.getAttribute('data-tether-id');
  if (typeof zeroPosCache[id] === 'undefined') {
    zeroPosCache[id] = getActualBoundingClientRect(node);

    // Clear the cache when this position call is done
    defer(function () {
      delete zeroPosCache[id];
    });
  }

  return zeroPosCache[id];
};

function removeUtilElements() {
  if (zeroElement) {
    document.body.removeChild(zeroElement);
  }
  zeroElement = null;
};

function getBounds(el) {
  var doc = undefined;
  if (el === document) {
    doc = document;
    el = document.documentElement;
  } else {
    doc = el.ownerDocument;
  }

  var docEl = doc.documentElement;

  var box = getActualBoundingClientRect(el);

  var origin = getOrigin();

  box.top -= origin.top;
  box.left -= origin.left;

  if (typeof box.width === 'undefined') {
    box.width = document.body.scrollWidth - box.left - box.right;
  }
  if (typeof box.height === 'undefined') {
    box.height = document.body.scrollHeight - box.top - box.bottom;
  }

  box.top = box.top - docEl.clientTop;
  box.left = box.left - docEl.clientLeft;
  box.right = doc.body.clientWidth - box.width - box.left;
  box.bottom = doc.body.clientHeight - box.height - box.top;

  return box;
}

function getOffsetParent(el) {
  return el.offsetParent || document.documentElement;
}

var _scrollBarSize = null;
function getScrollBarSize() {
  if (_scrollBarSize) {
    return _scrollBarSize;
  }
  var inner = document.createElement('div');
  inner.style.width = '100%';
  inner.style.height = '200px';

  var outer = document.createElement('div');
  extend(outer.style, {
    position: 'absolute',
    top: 0,
    left: 0,
    pointerEvents: 'none',
    visibility: 'hidden',
    width: '200px',
    height: '150px',
    overflow: 'hidden'
  });

  outer.appendChild(inner);

  document.body.appendChild(outer);

  var widthContained = inner.offsetWidth;
  outer.style.overflow = 'scroll';
  var widthScroll = inner.offsetWidth;

  if (widthContained === widthScroll) {
    widthScroll = outer.clientWidth;
  }

  document.body.removeChild(outer);

  var width = widthContained - widthScroll;

  _scrollBarSize = { width: width, height: width };
  return _scrollBarSize;
}

function extend() {
  var out = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  var args = [];

  Array.prototype.push.apply(args, arguments);

  args.slice(1).forEach(function (obj) {
    if (obj) {
      for (var key in obj) {
        if (({}).hasOwnProperty.call(obj, key)) {
          out[key] = obj[key];
        }
      }
    }
  });

  return out;
}

function removeClass(el, name) {
  if (typeof el.classList !== 'undefined') {
    name.split(' ').forEach(function (cls) {
      if (cls.trim()) {
        el.classList.remove(cls);
      }
    });
  } else {
    var regex = new RegExp('(^| )' + name.split(' ').join('|') + '( |$)', 'gi');
    var className = getClassName(el).replace(regex, ' ');
    setClassName(el, className);
  }
}

function addClass(el, name) {
  if (typeof el.classList !== 'undefined') {
    name.split(' ').forEach(function (cls) {
      if (cls.trim()) {
        el.classList.add(cls);
      }
    });
  } else {
    removeClass(el, name);
    var cls = getClassName(el) + (' ' + name);
    setClassName(el, cls);
  }
}

function hasClass(el, name) {
  if (typeof el.classList !== 'undefined') {
    return el.classList.contains(name);
  }
  var className = getClassName(el);
  return new RegExp('(^| )' + name + '( |$)', 'gi').test(className);
}

function getClassName(el) {
  // Can't use just SVGAnimatedString here since nodes within a Frame in IE have
  // completely separately SVGAnimatedString base classes
  if (el.className instanceof el.ownerDocument.defaultView.SVGAnimatedString) {
    return el.className.baseVal;
  }
  return el.className;
}

function setClassName(el, className) {
  el.setAttribute('class', className);
}

function updateClasses(el, add, all) {
  // Of the set of 'all' classes, we need the 'add' classes, and only the
  // 'add' classes to be set.
  all.forEach(function (cls) {
    if (add.indexOf(cls) === -1 && hasClass(el, cls)) {
      removeClass(el, cls);
    }
  });

  add.forEach(function (cls) {
    if (!hasClass(el, cls)) {
      addClass(el, cls);
    }
  });
}

var deferred = [];

var defer = function defer(fn) {
  deferred.push(fn);
};

var flush = function flush() {
  var fn = undefined;
  while (fn = deferred.pop()) {
    fn();
  }
};

var Evented = (function () {
  function Evented() {
    _classCallCheck(this, Evented);
  }

  _createClass(Evented, [{
    key: 'on',
    value: function on(event, handler, ctx) {
      var once = arguments.length <= 3 || arguments[3] === undefined ? false : arguments[3];

      if (typeof this.bindings === 'undefined') {
        this.bindings = {};
      }
      if (typeof this.bindings[event] === 'undefined') {
        this.bindings[event] = [];
      }
      this.bindings[event].push({ handler: handler, ctx: ctx, once: once });
    }
  }, {
    key: 'once',
    value: function once(event, handler, ctx) {
      this.on(event, handler, ctx, true);
    }
  }, {
    key: 'off',
    value: function off(event, handler) {
      if (typeof this.bindings === 'undefined' || typeof this.bindings[event] === 'undefined') {
        return;
      }

      if (typeof handler === 'undefined') {
        delete this.bindings[event];
      } else {
        var i = 0;
        while (i < this.bindings[event].length) {
          if (this.bindings[event][i].handler === handler) {
            this.bindings[event].splice(i, 1);
          } else {
            ++i;
          }
        }
      }
    }
  }, {
    key: 'trigger',
    value: function trigger(event) {
      if (typeof this.bindings !== 'undefined' && this.bindings[event]) {
        var i = 0;

        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        while (i < this.bindings[event].length) {
          var _bindings$event$i = this.bindings[event][i];
          var handler = _bindings$event$i.handler;
          var ctx = _bindings$event$i.ctx;
          var once = _bindings$event$i.once;

          var context = ctx;
          if (typeof context === 'undefined') {
            context = this;
          }

          handler.apply(context, args);

          if (once) {
            this.bindings[event].splice(i, 1);
          } else {
            ++i;
          }
        }
      }
    }
  }]);

  return Evented;
})();

TetherBase.Utils = {
  getActualBoundingClientRect: getActualBoundingClientRect,
  getScrollParents: getScrollParents,
  getBounds: getBounds,
  getOffsetParent: getOffsetParent,
  extend: extend,
  addClass: addClass,
  removeClass: removeClass,
  hasClass: hasClass,
  updateClasses: updateClasses,
  defer: defer,
  flush: flush,
  uniqueId: uniqueId,
  Evented: Evented,
  getScrollBarSize: getScrollBarSize,
  removeUtilElements: removeUtilElements
};
/* globals TetherBase, performance */

'use strict';

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x6, _x7, _x8) { var _again = true; _function: while (_again) { var object = _x6, property = _x7, receiver = _x8; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x6 = parent; _x7 = property; _x8 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (typeof TetherBase === 'undefined') {
  throw new Error('You must include the utils.js file before tether.js');
}

var _TetherBase$Utils = TetherBase.Utils;
var getScrollParents = _TetherBase$Utils.getScrollParents;
var getBounds = _TetherBase$Utils.getBounds;
var getOffsetParent = _TetherBase$Utils.getOffsetParent;
var extend = _TetherBase$Utils.extend;
var addClass = _TetherBase$Utils.addClass;
var removeClass = _TetherBase$Utils.removeClass;
var updateClasses = _TetherBase$Utils.updateClasses;
var defer = _TetherBase$Utils.defer;
var flush = _TetherBase$Utils.flush;
var getScrollBarSize = _TetherBase$Utils.getScrollBarSize;
var removeUtilElements = _TetherBase$Utils.removeUtilElements;

function within(a, b) {
  var diff = arguments.length <= 2 || arguments[2] === undefined ? 1 : arguments[2];

  return a + diff >= b && b >= a - diff;
}

var transformKey = (function () {
  if (typeof document === 'undefined') {
    return '';
  }
  var el = document.createElement('div');

  var transforms = ['transform', 'WebkitTransform', 'OTransform', 'MozTransform', 'msTransform'];
  for (var i = 0; i < transforms.length; ++i) {
    var key = transforms[i];
    if (el.style[key] !== undefined) {
      return key;
    }
  }
})();

var tethers = [];

var position = function position() {
  tethers.forEach(function (tether) {
    tether.position(false);
  });
  flush();
};

function now() {
  if (typeof performance === 'object' && typeof performance.now === 'function') {
    return performance.now();
  }
  return +new Date();
}

(function () {
  var lastCall = null;
  var lastDuration = null;
  var pendingTimeout = null;

  var tick = function tick() {
    if (typeof lastDuration !== 'undefined' && lastDuration > 16) {
      // We voluntarily throttle ourselves if we can't manage 60fps
      lastDuration = Math.min(lastDuration - 16, 250);

      // Just in case this is the last event, remember to position just once more
      pendingTimeout = setTimeout(tick, 250);
      return;
    }

    if (typeof lastCall !== 'undefined' && now() - lastCall < 10) {
      // Some browsers call events a little too frequently, refuse to run more than is reasonable
      return;
    }

    if (pendingTimeout != null) {
      clearTimeout(pendingTimeout);
      pendingTimeout = null;
    }

    lastCall = now();
    position();
    lastDuration = now() - lastCall;
  };

  if (typeof window !== 'undefined' && typeof window.addEventListener !== 'undefined') {
    ['resize', 'scroll', 'touchmove'].forEach(function (event) {
      window.addEventListener(event, tick);
    });
  }
})();

var MIRROR_LR = {
  center: 'center',
  left: 'right',
  right: 'left'
};

var MIRROR_TB = {
  middle: 'middle',
  top: 'bottom',
  bottom: 'top'
};

var OFFSET_MAP = {
  top: 0,
  left: 0,
  middle: '50%',
  center: '50%',
  bottom: '100%',
  right: '100%'
};

var autoToFixedAttachment = function autoToFixedAttachment(attachment, relativeToAttachment) {
  var left = attachment.left;
  var top = attachment.top;

  if (left === 'auto') {
    left = MIRROR_LR[relativeToAttachment.left];
  }

  if (top === 'auto') {
    top = MIRROR_TB[relativeToAttachment.top];
  }

  return { left: left, top: top };
};

var attachmentToOffset = function attachmentToOffset(attachment) {
  var left = attachment.left;
  var top = attachment.top;

  if (typeof OFFSET_MAP[attachment.left] !== 'undefined') {
    left = OFFSET_MAP[attachment.left];
  }

  if (typeof OFFSET_MAP[attachment.top] !== 'undefined') {
    top = OFFSET_MAP[attachment.top];
  }

  return { left: left, top: top };
};

function addOffset() {
  var out = { top: 0, left: 0 };

  for (var _len = arguments.length, offsets = Array(_len), _key = 0; _key < _len; _key++) {
    offsets[_key] = arguments[_key];
  }

  offsets.forEach(function (_ref) {
    var top = _ref.top;
    var left = _ref.left;

    if (typeof top === 'string') {
      top = parseFloat(top, 10);
    }
    if (typeof left === 'string') {
      left = parseFloat(left, 10);
    }

    out.top += top;
    out.left += left;
  });

  return out;
}

function offsetToPx(offset, size) {
  if (typeof offset.left === 'string' && offset.left.indexOf('%') !== -1) {
    offset.left = parseFloat(offset.left, 10) / 100 * size.width;
  }
  if (typeof offset.top === 'string' && offset.top.indexOf('%') !== -1) {
    offset.top = parseFloat(offset.top, 10) / 100 * size.height;
  }

  return offset;
}

var parseOffset = function parseOffset(value) {
  var _value$split = value.split(' ');

  var _value$split2 = _slicedToArray(_value$split, 2);

  var top = _value$split2[0];
  var left = _value$split2[1];

  return { top: top, left: left };
};
var parseAttachment = parseOffset;

var TetherClass = (function (_Evented) {
  _inherits(TetherClass, _Evented);

  function TetherClass(options) {
    var _this = this;

    _classCallCheck(this, TetherClass);

    _get(Object.getPrototypeOf(TetherClass.prototype), 'constructor', this).call(this);
    this.position = this.position.bind(this);

    tethers.push(this);

    this.history = [];

    this.setOptions(options, false);

    TetherBase.modules.forEach(function (module) {
      if (typeof module.initialize !== 'undefined') {
        module.initialize.call(_this);
      }
    });

    this.position();
  }

  _createClass(TetherClass, [{
    key: 'getClass',
    value: function getClass() {
      var key = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
      var classes = this.options.classes;

      if (typeof classes !== 'undefined' && classes[key]) {
        return this.options.classes[key];
      } else if (this.options.classPrefix) {
        return this.options.classPrefix + '-' + key;
      } else {
        return key;
      }
    }
  }, {
    key: 'setOptions',
    value: function setOptions(options) {
      var _this2 = this;

      var pos = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

      var defaults = {
        offset: '0 0',
        targetOffset: '0 0',
        targetAttachment: 'auto auto',
        classPrefix: 'tether'
      };

      this.options = extend(defaults, options);

      var _options = this.options;
      var element = _options.element;
      var target = _options.target;
      var targetModifier = _options.targetModifier;

      this.element = element;
      this.target = target;
      this.targetModifier = targetModifier;

      if (this.target === 'viewport') {
        this.target = document.body;
        this.targetModifier = 'visible';
      } else if (this.target === 'scroll-handle') {
        this.target = document.body;
        this.targetModifier = 'scroll-handle';
      }

      ['element', 'target'].forEach(function (key) {
        if (typeof _this2[key] === 'undefined') {
          throw new Error('Tether Error: Both element and target must be defined');
        }

        if (typeof _this2[key].jquery !== 'undefined') {
          _this2[key] = _this2[key][0];
        } else if (typeof _this2[key] === 'string') {
          _this2[key] = document.querySelector(_this2[key]);
        }
      });

      addClass(this.element, this.getClass('element'));
      if (!(this.options.addTargetClasses === false)) {
        addClass(this.target, this.getClass('target'));
      }

      if (!this.options.attachment) {
        throw new Error('Tether Error: You must provide an attachment');
      }

      this.targetAttachment = parseAttachment(this.options.targetAttachment);
      this.attachment = parseAttachment(this.options.attachment);
      this.offset = parseOffset(this.options.offset);
      this.targetOffset = parseOffset(this.options.targetOffset);

      if (typeof this.scrollParents !== 'undefined') {
        this.disable();
      }

      if (this.targetModifier === 'scroll-handle') {
        this.scrollParents = [this.target];
      } else {
        this.scrollParents = getScrollParents(this.target);
      }

      if (!(this.options.enabled === false)) {
        this.enable(pos);
      }
    }
  }, {
    key: 'getTargetBounds',
    value: function getTargetBounds() {
      if (typeof this.targetModifier !== 'undefined') {
        if (this.targetModifier === 'visible') {
          if (this.target === document.body) {
            return { top: pageYOffset, left: pageXOffset, height: innerHeight, width: innerWidth };
          } else {
            var bounds = getBounds(this.target);

            var out = {
              height: bounds.height,
              width: bounds.width,
              top: bounds.top,
              left: bounds.left
            };

            out.height = Math.min(out.height, bounds.height - (pageYOffset - bounds.top));
            out.height = Math.min(out.height, bounds.height - (bounds.top + bounds.height - (pageYOffset + innerHeight)));
            out.height = Math.min(innerHeight, out.height);
            out.height -= 2;

            out.width = Math.min(out.width, bounds.width - (pageXOffset - bounds.left));
            out.width = Math.min(out.width, bounds.width - (bounds.left + bounds.width - (pageXOffset + innerWidth)));
            out.width = Math.min(innerWidth, out.width);
            out.width -= 2;

            if (out.top < pageYOffset) {
              out.top = pageYOffset;
            }
            if (out.left < pageXOffset) {
              out.left = pageXOffset;
            }

            return out;
          }
        } else if (this.targetModifier === 'scroll-handle') {
          var bounds = undefined;
          var target = this.target;
          if (target === document.body) {
            target = document.documentElement;

            bounds = {
              left: pageXOffset,
              top: pageYOffset,
              height: innerHeight,
              width: innerWidth
            };
          } else {
            bounds = getBounds(target);
          }

          var style = getComputedStyle(target);

          var hasBottomScroll = target.scrollWidth > target.clientWidth || [style.overflow, style.overflowX].indexOf('scroll') >= 0 || this.target !== document.body;

          var scrollBottom = 0;
          if (hasBottomScroll) {
            scrollBottom = 15;
          }

          var height = bounds.height - parseFloat(style.borderTopWidth) - parseFloat(style.borderBottomWidth) - scrollBottom;

          var out = {
            width: 15,
            height: height * 0.975 * (height / target.scrollHeight),
            left: bounds.left + bounds.width - parseFloat(style.borderLeftWidth) - 15
          };

          var fitAdj = 0;
          if (height < 408 && this.target === document.body) {
            fitAdj = -0.00011 * Math.pow(height, 2) - 0.00727 * height + 22.58;
          }

          if (this.target !== document.body) {
            out.height = Math.max(out.height, 24);
          }

          var scrollPercentage = this.target.scrollTop / (target.scrollHeight - height);
          out.top = scrollPercentage * (height - out.height - fitAdj) + bounds.top + parseFloat(style.borderTopWidth);

          if (this.target === document.body) {
            out.height = Math.max(out.height, 24);
          }

          return out;
        }
      } else {
        return getBounds(this.target);
      }
    }
  }, {
    key: 'clearCache',
    value: function clearCache() {
      this._cache = {};
    }
  }, {
    key: 'cache',
    value: function cache(k, getter) {
      // More than one module will often need the same DOM info, so
      // we keep a cache which is cleared on each position call
      if (typeof this._cache === 'undefined') {
        this._cache = {};
      }

      if (typeof this._cache[k] === 'undefined') {
        this._cache[k] = getter.call(this);
      }

      return this._cache[k];
    }
  }, {
    key: 'enable',
    value: function enable() {
      var _this3 = this;

      var pos = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];

      if (!(this.options.addTargetClasses === false)) {
        addClass(this.target, this.getClass('enabled'));
      }
      addClass(this.element, this.getClass('enabled'));
      this.enabled = true;

      this.scrollParents.forEach(function (parent) {
        if (parent !== _this3.target.ownerDocument) {
          parent.addEventListener('scroll', _this3.position);
        }
      });

      if (pos) {
        this.position();
      }
    }
  }, {
    key: 'disable',
    value: function disable() {
      var _this4 = this;

      removeClass(this.target, this.getClass('enabled'));
      removeClass(this.element, this.getClass('enabled'));
      this.enabled = false;

      if (typeof this.scrollParents !== 'undefined') {
        this.scrollParents.forEach(function (parent) {
          parent.removeEventListener('scroll', _this4.position);
        });
      }
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      var _this5 = this;

      this.disable();

      tethers.forEach(function (tether, i) {
        if (tether === _this5) {
          tethers.splice(i, 1);
        }
      });

      // Remove any elements we were using for convenience from the DOM
      if (tethers.length === 0) {
        removeUtilElements();
      }
    }
  }, {
    key: 'updateAttachClasses',
    value: function updateAttachClasses(elementAttach, targetAttach) {
      var _this6 = this;

      elementAttach = elementAttach || this.attachment;
      targetAttach = targetAttach || this.targetAttachment;
      var sides = ['left', 'top', 'bottom', 'right', 'middle', 'center'];

      if (typeof this._addAttachClasses !== 'undefined' && this._addAttachClasses.length) {
        // updateAttachClasses can be called more than once in a position call, so
        // we need to clean up after ourselves such that when the last defer gets
        // ran it doesn't add any extra classes from previous calls.
        this._addAttachClasses.splice(0, this._addAttachClasses.length);
      }

      if (typeof this._addAttachClasses === 'undefined') {
        this._addAttachClasses = [];
      }
      var add = this._addAttachClasses;

      if (elementAttach.top) {
        add.push(this.getClass('element-attached') + '-' + elementAttach.top);
      }
      if (elementAttach.left) {
        add.push(this.getClass('element-attached') + '-' + elementAttach.left);
      }
      if (targetAttach.top) {
        add.push(this.getClass('target-attached') + '-' + targetAttach.top);
      }
      if (targetAttach.left) {
        add.push(this.getClass('target-attached') + '-' + targetAttach.left);
      }

      var all = [];
      sides.forEach(function (side) {
        all.push(_this6.getClass('element-attached') + '-' + side);
        all.push(_this6.getClass('target-attached') + '-' + side);
      });

      defer(function () {
        if (!(typeof _this6._addAttachClasses !== 'undefined')) {
          return;
        }

        updateClasses(_this6.element, _this6._addAttachClasses, all);
        if (!(_this6.options.addTargetClasses === false)) {
          updateClasses(_this6.target, _this6._addAttachClasses, all);
        }

        delete _this6._addAttachClasses;
      });
    }
  }, {
    key: 'position',
    value: function position() {
      var _this7 = this;

      var flushChanges = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];

      // flushChanges commits the changes immediately, leave true unless you are positioning multiple
      // tethers (in which case call Tether.Utils.flush yourself when you're done)

      if (!this.enabled) {
        return;
      }

      this.clearCache();

      // Turn 'auto' attachments into the appropriate corner or edge
      var targetAttachment = autoToFixedAttachment(this.targetAttachment, this.attachment);

      this.updateAttachClasses(this.attachment, targetAttachment);

      var elementPos = this.cache('element-bounds', function () {
        return getBounds(_this7.element);
      });

      var width = elementPos.width;
      var height = elementPos.height;

      if (width === 0 && height === 0 && typeof this.lastSize !== 'undefined') {
        var _lastSize = this.lastSize;

        // We cache the height and width to make it possible to position elements that are
        // getting hidden.
        width = _lastSize.width;
        height = _lastSize.height;
      } else {
        this.lastSize = { width: width, height: height };
      }

      var targetPos = this.cache('target-bounds', function () {
        return _this7.getTargetBounds();
      });
      var targetSize = targetPos;

      // Get an actual px offset from the attachment
      var offset = offsetToPx(attachmentToOffset(this.attachment), { width: width, height: height });
      var targetOffset = offsetToPx(attachmentToOffset(targetAttachment), targetSize);

      var manualOffset = offsetToPx(this.offset, { width: width, height: height });
      var manualTargetOffset = offsetToPx(this.targetOffset, targetSize);

      // Add the manually provided offset
      offset = addOffset(offset, manualOffset);
      targetOffset = addOffset(targetOffset, manualTargetOffset);

      // It's now our goal to make (element position + offset) == (target position + target offset)
      var left = targetPos.left + targetOffset.left - offset.left;
      var top = targetPos.top + targetOffset.top - offset.top;

      for (var i = 0; i < TetherBase.modules.length; ++i) {
        var _module2 = TetherBase.modules[i];
        var ret = _module2.position.call(this, {
          left: left,
          top: top,
          targetAttachment: targetAttachment,
          targetPos: targetPos,
          elementPos: elementPos,
          offset: offset,
          targetOffset: targetOffset,
          manualOffset: manualOffset,
          manualTargetOffset: manualTargetOffset,
          scrollbarSize: scrollbarSize,
          attachment: this.attachment
        });

        if (ret === false) {
          return false;
        } else if (typeof ret === 'undefined' || typeof ret !== 'object') {
          continue;
        } else {
          top = ret.top;
          left = ret.left;
        }
      }

      // We describe the position three different ways to give the optimizer
      // a chance to decide the best possible way to position the element
      // with the fewest repaints.
      var next = {
        // It's position relative to the page (absolute positioning when
        // the element is a child of the body)
        page: {
          top: top,
          left: left
        },

        // It's position relative to the viewport (fixed positioning)
        viewport: {
          top: top - pageYOffset,
          bottom: pageYOffset - top - height + innerHeight,
          left: left - pageXOffset,
          right: pageXOffset - left - width + innerWidth
        }
      };

      var doc = this.target.ownerDocument;
      var win = doc.defaultView;

      var scrollbarSize = undefined;
      if (win.innerHeight > doc.documentElement.clientHeight) {
        scrollbarSize = this.cache('scrollbar-size', getScrollBarSize);
        next.viewport.bottom -= scrollbarSize.height;
      }

      if (win.innerWidth > doc.documentElement.clientWidth) {
        scrollbarSize = this.cache('scrollbar-size', getScrollBarSize);
        next.viewport.right -= scrollbarSize.width;
      }

      if (['', 'static'].indexOf(doc.body.style.position) === -1 || ['', 'static'].indexOf(doc.body.parentElement.style.position) === -1) {
        // Absolute positioning in the body will be relative to the page, not the 'initial containing block'
        next.page.bottom = doc.body.scrollHeight - top - height;
        next.page.right = doc.body.scrollWidth - left - width;
      }

      if (typeof this.options.optimizations !== 'undefined' && this.options.optimizations.moveElement !== false && !(typeof this.targetModifier !== 'undefined')) {
        (function () {
          var offsetParent = _this7.cache('target-offsetparent', function () {
            return getOffsetParent(_this7.target);
          });
          var offsetPosition = _this7.cache('target-offsetparent-bounds', function () {
            return getBounds(offsetParent);
          });
          var offsetParentStyle = getComputedStyle(offsetParent);
          var offsetParentSize = offsetPosition;

          var offsetBorder = {};
          ['Top', 'Left', 'Bottom', 'Right'].forEach(function (side) {
            offsetBorder[side.toLowerCase()] = parseFloat(offsetParentStyle['border' + side + 'Width']);
          });

          offsetPosition.right = doc.body.scrollWidth - offsetPosition.left - offsetParentSize.width + offsetBorder.right;
          offsetPosition.bottom = doc.body.scrollHeight - offsetPosition.top - offsetParentSize.height + offsetBorder.bottom;

          if (next.page.top >= offsetPosition.top + offsetBorder.top && next.page.bottom >= offsetPosition.bottom) {
            if (next.page.left >= offsetPosition.left + offsetBorder.left && next.page.right >= offsetPosition.right) {
              // We're within the visible part of the target's scroll parent
              var scrollTop = offsetParent.scrollTop;
              var scrollLeft = offsetParent.scrollLeft;

              // It's position relative to the target's offset parent (absolute positioning when
              // the element is moved to be a child of the target's offset parent).
              next.offset = {
                top: next.page.top - offsetPosition.top + scrollTop - offsetBorder.top,
                left: next.page.left - offsetPosition.left + scrollLeft - offsetBorder.left
              };
            }
          }
        })();
      }

      // We could also travel up the DOM and try each containing context, rather than only
      // looking at the body, but we're gonna get diminishing returns.

      this.move(next);

      this.history.unshift(next);

      if (this.history.length > 3) {
        this.history.pop();
      }

      if (flushChanges) {
        flush();
      }

      return true;
    }

    // THE ISSUE
  }, {
    key: 'move',
    value: function move(pos) {
      var _this8 = this;

      if (!(typeof this.element.parentNode !== 'undefined')) {
        return;
      }

      var same = {};

      for (var type in pos) {
        same[type] = {};

        for (var key in pos[type]) {
          var found = false;

          for (var i = 0; i < this.history.length; ++i) {
            var point = this.history[i];
            if (typeof point[type] !== 'undefined' && !within(point[type][key], pos[type][key])) {
              found = true;
              break;
            }
          }

          if (!found) {
            same[type][key] = true;
          }
        }
      }

      var css = { top: '', left: '', right: '', bottom: '' };

      var transcribe = function transcribe(_same, _pos) {
        var hasOptimizations = typeof _this8.options.optimizations !== 'undefined';
        var gpu = hasOptimizations ? _this8.options.optimizations.gpu : null;
        if (gpu !== false) {
          var yPos = undefined,
              xPos = undefined;
          if (_same.top) {
            css.top = 0;
            yPos = _pos.top;
          } else {
            css.bottom = 0;
            yPos = -_pos.bottom;
          }

          if (_same.left) {
            css.left = 0;
            xPos = _pos.left;
          } else {
            css.right = 0;
            xPos = -_pos.right;
          }

          if (window.matchMedia) {
            // HubSpot/tether#207
            var retina = window.matchMedia('only screen and (min-resolution: 1.3dppx)').matches || window.matchMedia('only screen and (-webkit-min-device-pixel-ratio: 1.3)').matches;
            if (!retina) {
              xPos = Math.round(xPos);
              yPos = Math.round(yPos);
            }
          }

          css[transformKey] = 'translateX(' + xPos + 'px) translateY(' + yPos + 'px)';

          if (transformKey !== 'msTransform') {
            // The Z transform will keep this in the GPU (faster, and prevents artifacts),
            // but IE9 doesn't support 3d transforms and will choke.
            css[transformKey] += " translateZ(0)";
          }
        } else {
          if (_same.top) {
            css.top = _pos.top + 'px';
          } else {
            css.bottom = _pos.bottom + 'px';
          }

          if (_same.left) {
            css.left = _pos.left + 'px';
          } else {
            css.right = _pos.right + 'px';
          }
        }
      };

      var moved = false;
      if ((same.page.top || same.page.bottom) && (same.page.left || same.page.right)) {
        css.position = 'absolute';
        transcribe(same.page, pos.page);
      } else if ((same.viewport.top || same.viewport.bottom) && (same.viewport.left || same.viewport.right)) {
        css.position = 'fixed';
        transcribe(same.viewport, pos.viewport);
      } else if (typeof same.offset !== 'undefined' && same.offset.top && same.offset.left) {
        (function () {
          css.position = 'absolute';
          var offsetParent = _this8.cache('target-offsetparent', function () {
            return getOffsetParent(_this8.target);
          });

          if (getOffsetParent(_this8.element) !== offsetParent) {
            defer(function () {
              _this8.element.parentNode.removeChild(_this8.element);
              offsetParent.appendChild(_this8.element);
            });
          }

          transcribe(same.offset, pos.offset);
          moved = true;
        })();
      } else {
        css.position = 'absolute';
        transcribe({ top: true, left: true }, pos.page);
      }

      if (!moved) {
        if (this.options.bodyElement) {
          if (this.element.parentNode !== this.options.bodyElement) {
            this.options.bodyElement.appendChild(this.element);
          }
        } else {
          var isFullscreenElement = function isFullscreenElement(e) {
            var d = e.ownerDocument;
            var fe = d.fullscreenElement || d.webkitFullscreenElement || d.mozFullScreenElement || d.msFullscreenElement;
            return fe === e;
          };

          var offsetParentIsBody = true;

          var currentNode = this.element.parentNode;
          while (currentNode && currentNode.nodeType === 1 && currentNode.tagName !== 'BODY' && !isFullscreenElement(currentNode)) {
            if (getComputedStyle(currentNode).position !== 'static') {
              offsetParentIsBody = false;
              break;
            }

            currentNode = currentNode.parentNode;
          }

          if (!offsetParentIsBody) {
            this.element.parentNode.removeChild(this.element);
            this.element.ownerDocument.body.appendChild(this.element);
          }
        }
      }

      // Any css change will trigger a repaint, so let's avoid one if nothing changed
      var writeCSS = {};
      var write = false;
      for (var key in css) {
        var val = css[key];
        var elVal = this.element.style[key];

        if (elVal !== val) {
          write = true;
          writeCSS[key] = val;
        }
      }

      if (write) {
        defer(function () {
          extend(_this8.element.style, writeCSS);
          _this8.trigger('repositioned');
        });
      }
    }
  }]);

  return TetherClass;
})(Evented);

TetherClass.modules = [];

TetherBase.position = position;

var Tether = extend(TetherClass, TetherBase);
/* globals TetherBase */

'use strict';

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

var _TetherBase$Utils = TetherBase.Utils;
var getBounds = _TetherBase$Utils.getBounds;
var extend = _TetherBase$Utils.extend;
var updateClasses = _TetherBase$Utils.updateClasses;
var defer = _TetherBase$Utils.defer;

var BOUNDS_FORMAT = ['left', 'top', 'right', 'bottom'];

function getBoundingRect(tether, to) {
  if (to === 'scrollParent') {
    to = tether.scrollParents[0];
  } else if (to === 'window') {
    to = [pageXOffset, pageYOffset, innerWidth + pageXOffset, innerHeight + pageYOffset];
  }

  if (to === document) {
    to = to.documentElement;
  }

  if (typeof to.nodeType !== 'undefined') {
    (function () {
      var node = to;
      var size = getBounds(to);
      var pos = size;
      var style = getComputedStyle(to);

      to = [pos.left, pos.top, size.width + pos.left, size.height + pos.top];

      // Account any parent Frames scroll offset
      if (node.ownerDocument !== document) {
        var win = node.ownerDocument.defaultView;
        to[0] += win.pageXOffset;
        to[1] += win.pageYOffset;
        to[2] += win.pageXOffset;
        to[3] += win.pageYOffset;
      }

      BOUNDS_FORMAT.forEach(function (side, i) {
        side = side[0].toUpperCase() + side.substr(1);
        if (side === 'Top' || side === 'Left') {
          to[i] += parseFloat(style['border' + side + 'Width']);
        } else {
          to[i] -= parseFloat(style['border' + side + 'Width']);
        }
      });
    })();
  }

  return to;
}

TetherBase.modules.push({
  position: function position(_ref) {
    var _this = this;

    var top = _ref.top;
    var left = _ref.left;
    var targetAttachment = _ref.targetAttachment;

    if (!this.options.constraints) {
      return true;
    }

    var _cache = this.cache('element-bounds', function () {
      return getBounds(_this.element);
    });

    var height = _cache.height;
    var width = _cache.width;

    if (width === 0 && height === 0 && typeof this.lastSize !== 'undefined') {
      var _lastSize = this.lastSize;

      // Handle the item getting hidden as a result of our positioning without glitching
      // the classes in and out
      width = _lastSize.width;
      height = _lastSize.height;
    }

    var targetSize = this.cache('target-bounds', function () {
      return _this.getTargetBounds();
    });

    var targetHeight = targetSize.height;
    var targetWidth = targetSize.width;

    var allClasses = [this.getClass('pinned'), this.getClass('out-of-bounds')];

    this.options.constraints.forEach(function (constraint) {
      var outOfBoundsClass = constraint.outOfBoundsClass;
      var pinnedClass = constraint.pinnedClass;

      if (outOfBoundsClass) {
        allClasses.push(outOfBoundsClass);
      }
      if (pinnedClass) {
        allClasses.push(pinnedClass);
      }
    });

    allClasses.forEach(function (cls) {
      ['left', 'top', 'right', 'bottom'].forEach(function (side) {
        allClasses.push(cls + '-' + side);
      });
    });

    var addClasses = [];

    var tAttachment = extend({}, targetAttachment);
    var eAttachment = extend({}, this.attachment);

    this.options.constraints.forEach(function (constraint) {
      var to = constraint.to;
      var attachment = constraint.attachment;
      var pin = constraint.pin;

      if (typeof attachment === 'undefined') {
        attachment = '';
      }

      var changeAttachX = undefined,
          changeAttachY = undefined;
      if (attachment.indexOf(' ') >= 0) {
        var _attachment$split = attachment.split(' ');

        var _attachment$split2 = _slicedToArray(_attachment$split, 2);

        changeAttachY = _attachment$split2[0];
        changeAttachX = _attachment$split2[1];
      } else {
        changeAttachX = changeAttachY = attachment;
      }

      var bounds = getBoundingRect(_this, to);

      if (changeAttachY === 'target' || changeAttachY === 'both') {
        if (top < bounds[1] && tAttachment.top === 'top') {
          top += targetHeight;
          tAttachment.top = 'bottom';
        }

        if (top + height > bounds[3] && tAttachment.top === 'bottom') {
          top -= targetHeight;
          tAttachment.top = 'top';
        }
      }

      if (changeAttachY === 'together') {
        if (tAttachment.top === 'top') {
          if (eAttachment.top === 'bottom' && top < bounds[1]) {
            top += targetHeight;
            tAttachment.top = 'bottom';

            top += height;
            eAttachment.top = 'top';
          } else if (eAttachment.top === 'top' && top + height > bounds[3] && top - (height - targetHeight) >= bounds[1]) {
            top -= height - targetHeight;
            tAttachment.top = 'bottom';

            eAttachment.top = 'bottom';
          }
        }

        if (tAttachment.top === 'bottom') {
          if (eAttachment.top === 'top' && top + height > bounds[3]) {
            top -= targetHeight;
            tAttachment.top = 'top';

            top -= height;
            eAttachment.top = 'bottom';
          } else if (eAttachment.top === 'bottom' && top < bounds[1] && top + (height * 2 - targetHeight) <= bounds[3]) {
            top += height - targetHeight;
            tAttachment.top = 'top';

            eAttachment.top = 'top';
          }
        }

        if (tAttachment.top === 'middle') {
          if (top + height > bounds[3] && eAttachment.top === 'top') {
            top -= height;
            eAttachment.top = 'bottom';
          } else if (top < bounds[1] && eAttachment.top === 'bottom') {
            top += height;
            eAttachment.top = 'top';
          }
        }
      }

      if (changeAttachX === 'target' || changeAttachX === 'both') {
        if (left < bounds[0] && tAttachment.left === 'left') {
          left += targetWidth;
          tAttachment.left = 'right';
        }

        if (left + width > bounds[2] && tAttachment.left === 'right') {
          left -= targetWidth;
          tAttachment.left = 'left';
        }
      }

      if (changeAttachX === 'together') {
        if (left < bounds[0] && tAttachment.left === 'left') {
          if (eAttachment.left === 'right') {
            left += targetWidth;
            tAttachment.left = 'right';

            left += width;
            eAttachment.left = 'left';
          } else if (eAttachment.left === 'left') {
            left += targetWidth;
            tAttachment.left = 'right';

            left -= width;
            eAttachment.left = 'right';
          }
        } else if (left + width > bounds[2] && tAttachment.left === 'right') {
          if (eAttachment.left === 'left') {
            left -= targetWidth;
            tAttachment.left = 'left';

            left -= width;
            eAttachment.left = 'right';
          } else if (eAttachment.left === 'right') {
            left -= targetWidth;
            tAttachment.left = 'left';

            left += width;
            eAttachment.left = 'left';
          }
        } else if (tAttachment.left === 'center') {
          if (left + width > bounds[2] && eAttachment.left === 'left') {
            left -= width;
            eAttachment.left = 'right';
          } else if (left < bounds[0] && eAttachment.left === 'right') {
            left += width;
            eAttachment.left = 'left';
          }
        }
      }

      if (changeAttachY === 'element' || changeAttachY === 'both') {
        if (top < bounds[1] && eAttachment.top === 'bottom') {
          top += height;
          eAttachment.top = 'top';
        }

        if (top + height > bounds[3] && eAttachment.top === 'top') {
          top -= height;
          eAttachment.top = 'bottom';
        }
      }

      if (changeAttachX === 'element' || changeAttachX === 'both') {
        if (left < bounds[0]) {
          if (eAttachment.left === 'right') {
            left += width;
            eAttachment.left = 'left';
          } else if (eAttachment.left === 'center') {
            left += width / 2;
            eAttachment.left = 'left';
          }
        }

        if (left + width > bounds[2]) {
          if (eAttachment.left === 'left') {
            left -= width;
            eAttachment.left = 'right';
          } else if (eAttachment.left === 'center') {
            left -= width / 2;
            eAttachment.left = 'right';
          }
        }
      }

      if (typeof pin === 'string') {
        pin = pin.split(',').map(function (p) {
          return p.trim();
        });
      } else if (pin === true) {
        pin = ['top', 'left', 'right', 'bottom'];
      }

      pin = pin || [];

      var pinned = [];
      var oob = [];

      if (top < bounds[1]) {
        if (pin.indexOf('top') >= 0) {
          top = bounds[1];
          pinned.push('top');
        } else {
          oob.push('top');
        }
      }

      if (top + height > bounds[3]) {
        if (pin.indexOf('bottom') >= 0) {
          top = bounds[3] - height;
          pinned.push('bottom');
        } else {
          oob.push('bottom');
        }
      }

      if (left < bounds[0]) {
        if (pin.indexOf('left') >= 0) {
          left = bounds[0];
          pinned.push('left');
        } else {
          oob.push('left');
        }
      }

      if (left + width > bounds[2]) {
        if (pin.indexOf('right') >= 0) {
          left = bounds[2] - width;
          pinned.push('right');
        } else {
          oob.push('right');
        }
      }

      if (pinned.length) {
        (function () {
          var pinnedClass = undefined;
          if (typeof _this.options.pinnedClass !== 'undefined') {
            pinnedClass = _this.options.pinnedClass;
          } else {
            pinnedClass = _this.getClass('pinned');
          }

          addClasses.push(pinnedClass);
          pinned.forEach(function (side) {
            addClasses.push(pinnedClass + '-' + side);
          });
        })();
      }

      if (oob.length) {
        (function () {
          var oobClass = undefined;
          if (typeof _this.options.outOfBoundsClass !== 'undefined') {
            oobClass = _this.options.outOfBoundsClass;
          } else {
            oobClass = _this.getClass('out-of-bounds');
          }

          addClasses.push(oobClass);
          oob.forEach(function (side) {
            addClasses.push(oobClass + '-' + side);
          });
        })();
      }

      if (pinned.indexOf('left') >= 0 || pinned.indexOf('right') >= 0) {
        eAttachment.left = tAttachment.left = false;
      }
      if (pinned.indexOf('top') >= 0 || pinned.indexOf('bottom') >= 0) {
        eAttachment.top = tAttachment.top = false;
      }

      if (tAttachment.top !== targetAttachment.top || tAttachment.left !== targetAttachment.left || eAttachment.top !== _this.attachment.top || eAttachment.left !== _this.attachment.left) {
        _this.updateAttachClasses(eAttachment, tAttachment);
        _this.trigger('update', {
          attachment: eAttachment,
          targetAttachment: tAttachment
        });
      }
    });

    defer(function () {
      if (!(_this.options.addTargetClasses === false)) {
        updateClasses(_this.target, addClasses, allClasses);
      }
      updateClasses(_this.element, addClasses, allClasses);
    });

    return { top: top, left: left };
  }
});
/* globals TetherBase */

'use strict';

var _TetherBase$Utils = TetherBase.Utils;
var getBounds = _TetherBase$Utils.getBounds;
var updateClasses = _TetherBase$Utils.updateClasses;
var defer = _TetherBase$Utils.defer;

TetherBase.modules.push({
  position: function position(_ref) {
    var _this = this;

    var top = _ref.top;
    var left = _ref.left;

    var _cache = this.cache('element-bounds', function () {
      return getBounds(_this.element);
    });

    var height = _cache.height;
    var width = _cache.width;

    var targetPos = this.getTargetBounds();

    var bottom = top + height;
    var right = left + width;

    var abutted = [];
    if (top <= targetPos.bottom && bottom >= targetPos.top) {
      ['left', 'right'].forEach(function (side) {
        var targetPosSide = targetPos[side];
        if (targetPosSide === left || targetPosSide === right) {
          abutted.push(side);
        }
      });
    }

    if (left <= targetPos.right && right >= targetPos.left) {
      ['top', 'bottom'].forEach(function (side) {
        var targetPosSide = targetPos[side];
        if (targetPosSide === top || targetPosSide === bottom) {
          abutted.push(side);
        }
      });
    }

    var allClasses = [];
    var addClasses = [];

    var sides = ['left', 'top', 'right', 'bottom'];
    allClasses.push(this.getClass('abutted'));
    sides.forEach(function (side) {
      allClasses.push(_this.getClass('abutted') + '-' + side);
    });

    if (abutted.length) {
      addClasses.push(this.getClass('abutted'));
    }

    abutted.forEach(function (side) {
      addClasses.push(_this.getClass('abutted') + '-' + side);
    });

    defer(function () {
      if (!(_this.options.addTargetClasses === false)) {
        updateClasses(_this.target, addClasses, allClasses);
      }
      updateClasses(_this.element, addClasses, allClasses);
    });

    return true;
  }
});
/* globals TetherBase */

'use strict';

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

TetherBase.modules.push({
  position: function position(_ref) {
    var top = _ref.top;
    var left = _ref.left;

    if (!this.options.shift) {
      return;
    }

    var shift = this.options.shift;
    if (typeof this.options.shift === 'function') {
      shift = this.options.shift.call(this, { top: top, left: left });
    }

    var shiftTop = undefined,
        shiftLeft = undefined;
    if (typeof shift === 'string') {
      shift = shift.split(' ');
      shift[1] = shift[1] || shift[0];

      var _shift = shift;

      var _shift2 = _slicedToArray(_shift, 2);

      shiftTop = _shift2[0];
      shiftLeft = _shift2[1];

      shiftTop = parseFloat(shiftTop, 10);
      shiftLeft = parseFloat(shiftLeft, 10);
    } else {
      shiftTop = shift.top;
      shiftLeft = shift.left;
    }

    top += shiftTop;
    left += shiftLeft;

    return { top: top, left: left };
  }
});
return Tether;

}));


/***/ }),

/***/ 993:
/***/ (function(module, exports, __webpack_require__) {

var createFind = __webpack_require__(227),
    findLastIndex = __webpack_require__(994);

/**
 * This method is like `_.find` except that it iterates over elements of
 * `collection` from right to left.
 *
 * @static
 * @memberOf _
 * @since 2.0.0
 * @category Collection
 * @param {Array|Object} collection The collection to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=collection.length-1] The index to search from.
 * @returns {*} Returns the matched element, else `undefined`.
 * @example
 *
 * _.findLast([1, 2, 3, 4], function(n) {
 *   return n % 2 == 1;
 * });
 * // => 3
 */
var findLast = createFind(findLastIndex);

module.exports = findLast;


/***/ }),

/***/ 994:
/***/ (function(module, exports, __webpack_require__) {

var baseFindIndex = __webpack_require__(145),
    baseIteratee = __webpack_require__(55),
    toInteger = __webpack_require__(135);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * This method is like `_.findIndex` except that it iterates over elements
 * of `collection` from right to left.
 *
 * @static
 * @memberOf _
 * @since 2.0.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=array.length-1] The index to search from.
 * @returns {number} Returns the index of the found element, else `-1`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'active': true },
 *   { 'user': 'fred',    'active': false },
 *   { 'user': 'pebbles', 'active': false }
 * ];
 *
 * _.findLastIndex(users, function(o) { return o.user == 'pebbles'; });
 * // => 2
 *
 * // The `_.matches` iteratee shorthand.
 * _.findLastIndex(users, { 'user': 'barney', 'active': true });
 * // => 0
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.findLastIndex(users, ['active', false]);
 * // => 2
 *
 * // The `_.property` iteratee shorthand.
 * _.findLastIndex(users, 'active');
 * // => 0
 */
function findLastIndex(array, predicate, fromIndex) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return -1;
  }
  var index = length - 1;
  if (fromIndex !== undefined) {
    index = toInteger(fromIndex);
    index = fromIndex < 0
      ? nativeMax(length + index, 0)
      : nativeMin(index, length - 1);
  }
  return baseFindIndex(array, baseIteratee(predicate, 3), index, true);
}

module.exports = findLastIndex;


/***/ }),

/***/ 995:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _vue_style_loader_index_js_ref_4_oneOf_1_0_css_loader_index_js_ref_4_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_4_oneOf_1_2_less_loader_dist_cjs_js_ref_4_oneOf_1_3_overlay_less_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(592);
/* harmony import */ var _vue_style_loader_index_js_ref_4_oneOf_1_0_css_loader_index_js_ref_4_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_4_oneOf_1_2_less_loader_dist_cjs_js_ref_4_oneOf_1_3_overlay_less_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_4_oneOf_1_0_css_loader_index_js_ref_4_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_4_oneOf_1_2_less_loader_dist_cjs_js_ref_4_oneOf_1_3_overlay_less_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_vue_style_loader_index_js_ref_4_oneOf_1_0_css_loader_index_js_ref_4_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_4_oneOf_1_2_less_loader_dist_cjs_js_ref_4_oneOf_1_3_overlay_less_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 996:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, "/* Theme colors */\n/* Additional colors */\n/* Grayscale colors */\n/* Text colors */\n/* Link colors */\n/* Font settings */\n/* Metrics */\n/* Form widths */\n/* Transition duration */\n.veui-overlay-box {\n  transition: opacity 0.2s;\n}\n.veui-overlay-enter,\n.veui-overlay-leave-to {\n  opacity: 0;\n}\n.veui-overlay-enter-to,\n.veui-overlay-leave {\n  opacity: 1;\n}\n", ""]);

// exports


/***/ })

}]);