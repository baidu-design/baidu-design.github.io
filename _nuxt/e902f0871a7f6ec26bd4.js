(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[102],{

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ConfigManager */
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(431);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(432);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_keys__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17);
/* harmony import */ var lodash_keys__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_keys__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_isObject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10);
/* harmony import */ var lodash_isObject__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_isObject__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(475);







function _set(obj, key, value, ns, override, merge) {
  if (lodash_isObject__WEBPACK_IMPORTED_MODULE_4___default()(key)) {
    ns = value;
    value = key;

    lodash_keys__WEBPACK_IMPORTED_MODULE_3___default()(value).forEach(function (k) {
      _set(obj, k, value[k], ns, override, merge);
    });

    return;
  }

  if (typeof key !== 'string') {
    throw new Error('`Config key must be a string value.');
  }

  var k = ns ? "".concat(ns, ".").concat(key) : key;

  if (!(k in obj) || override || merge) {
    if (!merge) {
      if (!(k in obj) || override) {
        obj[k] = value;
      }

      return;
    }

    if (!lodash_isObject__WEBPACK_IMPORTED_MODULE_4___default()(obj[k]) || !lodash_isObject__WEBPACK_IMPORTED_MODULE_4___default()(value)) {
      throw new Error('`config.merge` only handles objects.');
    }

    lodash_keys__WEBPACK_IMPORTED_MODULE_3___default()(value).forEach(function (key) {
      if (!(key in obj[k]) || override) {
        obj[k][key] = value[key];
      }
    });
  }
}

var ConfigManager =
/*#__PURE__*/
function () {
  function ConfigManager() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ConfigManager);

    this.store = {};
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ConfigManager, [{
    key: "set",
    value: function set(key, value, ns) {
      _set(this.store, key, value, ns, true, false);
    }
  }, {
    key: "defaults",
    value: function defaults(key, value, ns) {
      _set(this.store, key, value, ns, false, false);
    }
  }, {
    key: "merge",
    value: function merge(key, value, ns) {
      _set(this.store, key, value, ns, true, true);
    }
  }, {
    key: "mergeDefaults",
    value: function mergeDefaults(key, value, ns) {
      _set(this.store, key, value, ns, false, true);
    }
  }, {
    key: "get",
    value: function get(key) {
      return _type__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].clone(this.store[key]);
    }
  }]);

  return ConfigManager;
}();
var instance = new ConfigManager();
/* harmony default export */ __webpack_exports__["a"] = (instance);

/***/ }),

/***/ 393:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var veui_components_Icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53);

veui_components_Icon__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].register({
  "angle-right-small": {
    "width": "12",
    "height": "12",
    "paths": [{
      "d": "M7.62 6L4.43 2.8l.8-.8 3.98 3.97-.02.03.02.02-3.98 3.97-.8-.8 3.2-3.2z",
      "fill-rule": "evenodd"
    }]
  }
});

/***/ }),

/***/ 408:
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(214),
    baseKeysIn = __webpack_require__(536),
    isArrayLike = __webpack_require__(35);

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

module.exports = keysIn;


/***/ }),

/***/ 414:
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(212),
    getSymbolsIn = __webpack_require__(483),
    keysIn = __webpack_require__(408);

/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeysIn(object) {
  return baseGetAllKeys(object, keysIn, getSymbolsIn);
}

module.exports = getAllKeysIn;


/***/ }),

/***/ 418:
/***/ (function(module, exports, __webpack_require__) {

var isArrayLike = __webpack_require__(35),
    isObjectLike = __webpack_require__(33);

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

module.exports = isArrayLikeObject;


/***/ }),

/***/ 424:
/***/ (function(module, exports) {

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

module.exports = copyArray;


/***/ }),

/***/ 425:
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(120),
    arrayEach = __webpack_require__(533),
    assignValue = __webpack_require__(94),
    baseAssign = __webpack_require__(534),
    baseAssignIn = __webpack_require__(535),
    cloneBuffer = __webpack_require__(426),
    copyArray = __webpack_require__(424),
    copySymbols = __webpack_require__(538),
    copySymbolsIn = __webpack_require__(539),
    getAllKeys = __webpack_require__(211),
    getAllKeysIn = __webpack_require__(414),
    getTag = __webpack_require__(198),
    initCloneArray = __webpack_require__(540),
    initCloneByTag = __webpack_require__(541),
    initCloneObject = __webpack_require__(428),
    isArray = __webpack_require__(7),
    isBuffer = __webpack_require__(119),
    isMap = __webpack_require__(546),
    isObject = __webpack_require__(10),
    isSet = __webpack_require__(548),
    keys = __webpack_require__(17);

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] =
cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
cloneableTags[boolTag] = cloneableTags[dateTag] =
cloneableTags[float32Tag] = cloneableTags[float64Tag] =
cloneableTags[int8Tag] = cloneableTags[int16Tag] =
cloneableTags[int32Tag] = cloneableTags[mapTag] =
cloneableTags[numberTag] = cloneableTags[objectTag] =
cloneableTags[regexpTag] = cloneableTags[setTag] =
cloneableTags[stringTag] = cloneableTags[symbolTag] =
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] =
cloneableTags[weakMapTag] = false;

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, bitmask, customizer, key, object, stack) {
  var result,
      isDeep = bitmask & CLONE_DEEP_FLAG,
      isFlat = bitmask & CLONE_FLAT_FLAG,
      isFull = bitmask & CLONE_SYMBOLS_FLAG;

  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
      result = (isFlat || isFunc) ? {} : initCloneObject(value);
      if (!isDeep) {
        return isFlat
          ? copySymbolsIn(value, baseAssignIn(result, value))
          : copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  if (isSet(value)) {
    value.forEach(function(subValue) {
      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
    });

    return result;
  }

  if (isMap(value)) {
    value.forEach(function(subValue, key) {
      result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
    });

    return result;
  }

  var keysFunc = isFull
    ? (isFlat ? getAllKeysIn : getAllKeys)
    : (isFlat ? keysIn : keys);

  var props = isArr ? undefined : keysFunc(value);
  arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
  });
  return result;
}

module.exports = baseClone;


/***/ }),

/***/ 426:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(18);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

module.exports = cloneBuffer;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(137)(module)))

/***/ }),

/***/ 427:
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(462);

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

module.exports = cloneTypedArray;


/***/ }),

/***/ 428:
/***/ (function(module, exports, __webpack_require__) {

var baseCreate = __webpack_require__(545),
    getPrototype = __webpack_require__(476),
    isPrototype = __webpack_require__(130);

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

module.exports = initCloneObject;


/***/ }),

/***/ 431:
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ 432:
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ 462:
/***/ (function(module, exports, __webpack_require__) {

var Uint8Array = __webpack_require__(210);

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

module.exports = cloneArrayBuffer;


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

/***/ 475:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Type */
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(431);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(432);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(54);
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_find__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_cloneDeepWith__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(532);
/* harmony import */ var lodash_cloneDeepWith__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_cloneDeepWith__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_lang__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(484);





var Type =
/*#__PURE__*/
function () {
  function Type() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Type);

    this.configs = [{
      type: Function,
      clone: function clone(val) {
        return val;
      }
    }];
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Type, [{
    key: "clone",
    value: function clone(val) {
      return lodash_cloneDeepWith__WEBPACK_IMPORTED_MODULE_3___default()(val, cloneBuiltIn.bind(this));
    }
  }, {
    key: "register",
    value: function register(newConfig) {
      if (!newConfig) {
        return;
      }

      var config = lodash_find__WEBPACK_IMPORTED_MODULE_2___default()(this.configs, function (config) {
        return config.type === newConfig.type;
      });

      if (!config) {
        this.configs.push(newConfig);
      } else {
        config.clone = newConfig.clone;
      }
    }
  }]);

  return Type;
}();

function cloneBuiltIn(val) {
  var config = lodash_find__WEBPACK_IMPORTED_MODULE_2___default()(this.configs, function (config) {
    return Object(_utils_lang__WEBPACK_IMPORTED_MODULE_4__[/* isType */ "c"])(config.type, val);
  });

  if (config) {
    return config.clone(val);
  }
}

var instance = new Type();
/* harmony default export */ __webpack_exports__["a"] = (instance);

/***/ }),

/***/ 476:
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(215);

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;


/***/ }),

/***/ 483:
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(141),
    getPrototype = __webpack_require__(476),
    getSymbols = __webpack_require__(201),
    stubArray = __webpack_require__(213);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
  var result = [];
  while (object) {
    arrayPush(result, getSymbols(object));
    object = getPrototype(object);
  }
  return result;
};

module.exports = getSymbolsIn;


/***/ }),

/***/ 484:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getTypeByInstance; });
/* unused harmony export getType */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isEqualSet; });
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(128);
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_date_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(129);
/* harmony import */ var core_js_modules_es6_date_to_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_date_to_string__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(131);
/* harmony import */ var core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_uniq__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(117);
/* harmony import */ var lodash_uniq__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_uniq__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_union__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(550);
/* harmony import */ var lodash_union__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_union__WEBPACK_IMPORTED_MODULE_4__);





function getTypeByInstance(obj) {
  if (obj !== null && obj !== undefined) {
    return getType(obj.constructor);
  } else {
    return obj;
  }
}
function getType(type) {
  var match = type && type.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : '';
}
function isType(type, obj) {
  return getType(type) === getTypeByInstance(obj);
}
function isEqualSet(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return false;
  }

  var uniqArr1 = lodash_uniq__WEBPACK_IMPORTED_MODULE_3___default()(arr1);

  var uniqArr2 = lodash_uniq__WEBPACK_IMPORTED_MODULE_3___default()(arr2);

  return uniqArr1.length === uniqArr2.length && lodash_union__WEBPACK_IMPORTED_MODULE_4___default()(arr1, arr2).length === uniqArr1.length;
}

/***/ }),

/***/ 532:
/***/ (function(module, exports, __webpack_require__) {

var baseClone = __webpack_require__(425);

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_SYMBOLS_FLAG = 4;

/**
 * This method is like `_.cloneWith` except that it recursively clones `value`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to recursively clone.
 * @param {Function} [customizer] The function to customize cloning.
 * @returns {*} Returns the deep cloned value.
 * @see _.cloneWith
 * @example
 *
 * function customizer(value) {
 *   if (_.isElement(value)) {
 *     return value.cloneNode(true);
 *   }
 * }
 *
 * var el = _.cloneDeepWith(document.body, customizer);
 *
 * console.log(el === document.body);
 * // => false
 * console.log(el.nodeName);
 * // => 'BODY'
 * console.log(el.childNodes.length);
 * // => 20
 */
function cloneDeepWith(value, customizer) {
  customizer = typeof customizer == 'function' ? customizer : undefined;
  return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG, customizer);
}

module.exports = cloneDeepWith;


/***/ }),

/***/ 533:
/***/ (function(module, exports) {

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

module.exports = arrayEach;


/***/ }),

/***/ 534:
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(191),
    keys = __webpack_require__(17);

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}

module.exports = baseAssign;


/***/ }),

/***/ 535:
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(191),
    keysIn = __webpack_require__(408);

/**
 * The base implementation of `_.assignIn` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssignIn(object, source) {
  return object && copyObject(source, keysIn(source), object);
}

module.exports = baseAssignIn;


/***/ }),

/***/ 536:
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(10),
    isPrototype = __webpack_require__(130),
    nativeKeysIn = __webpack_require__(537);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeysIn;


/***/ }),

/***/ 537:
/***/ (function(module, exports) {

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

module.exports = nativeKeysIn;


/***/ }),

/***/ 538:
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(191),
    getSymbols = __webpack_require__(201);

/**
 * Copies own symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}

module.exports = copySymbols;


/***/ }),

/***/ 539:
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(191),
    getSymbolsIn = __webpack_require__(483);

/**
 * Copies own and inherited symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbolsIn(source, object) {
  return copyObject(source, getSymbolsIn(source), object);
}

module.exports = copySymbolsIn;


/***/ }),

/***/ 540:
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = new array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

module.exports = initCloneArray;


/***/ }),

/***/ 541:
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(462),
    cloneDataView = __webpack_require__(542),
    cloneRegExp = __webpack_require__(543),
    cloneSymbol = __webpack_require__(544),
    cloneTypedArray = __webpack_require__(427);

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag:
      return cloneArrayBuffer(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case dataViewTag:
      return cloneDataView(object, isDeep);

    case float32Tag: case float64Tag:
    case int8Tag: case int16Tag: case int32Tag:
    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
      return cloneTypedArray(object, isDeep);

    case mapTag:
      return new Ctor;

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      return cloneRegExp(object);

    case setTag:
      return new Ctor;

    case symbolTag:
      return cloneSymbol(object);
  }
}

module.exports = initCloneByTag;


/***/ }),

/***/ 542:
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(462);

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

module.exports = cloneDataView;


/***/ }),

/***/ 543:
/***/ (function(module, exports) {

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

module.exports = cloneRegExp;


/***/ }),

/***/ 544:
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(47);

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

module.exports = cloneSymbol;


/***/ }),

/***/ 545:
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(10);

/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

module.exports = baseCreate;


/***/ }),

/***/ 546:
/***/ (function(module, exports, __webpack_require__) {

var baseIsMap = __webpack_require__(547),
    baseUnary = __webpack_require__(197),
    nodeUtil = __webpack_require__(202);

/* Node.js helper references. */
var nodeIsMap = nodeUtil && nodeUtil.isMap;

/**
 * Checks if `value` is classified as a `Map` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 * @example
 *
 * _.isMap(new Map);
 * // => true
 *
 * _.isMap(new WeakMap);
 * // => false
 */
var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;

module.exports = isMap;


/***/ }),

/***/ 547:
/***/ (function(module, exports, __webpack_require__) {

var getTag = __webpack_require__(198),
    isObjectLike = __webpack_require__(33);

/** `Object#toString` result references. */
var mapTag = '[object Map]';

/**
 * The base implementation of `_.isMap` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 */
function baseIsMap(value) {
  return isObjectLike(value) && getTag(value) == mapTag;
}

module.exports = baseIsMap;


/***/ }),

/***/ 548:
/***/ (function(module, exports, __webpack_require__) {

var baseIsSet = __webpack_require__(549),
    baseUnary = __webpack_require__(197),
    nodeUtil = __webpack_require__(202);

/* Node.js helper references. */
var nodeIsSet = nodeUtil && nodeUtil.isSet;

/**
 * Checks if `value` is classified as a `Set` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 * @example
 *
 * _.isSet(new Set);
 * // => true
 *
 * _.isSet(new WeakSet);
 * // => false
 */
var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;

module.exports = isSet;


/***/ }),

/***/ 549:
/***/ (function(module, exports, __webpack_require__) {

var getTag = __webpack_require__(198),
    isObjectLike = __webpack_require__(33);

/** `Object#toString` result references. */
var setTag = '[object Set]';

/**
 * The base implementation of `_.isSet` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 */
function baseIsSet(value) {
  return isObjectLike(value) && getTag(value) == setTag;
}

module.exports = baseIsSet;


/***/ }),

/***/ 550:
/***/ (function(module, exports, __webpack_require__) {

var baseFlatten = __webpack_require__(200),
    baseRest = __webpack_require__(199),
    baseUniq = __webpack_require__(216),
    isArrayLikeObject = __webpack_require__(418);

/**
 * Creates an array of unique values, in order, from all given arrays using
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {...Array} [arrays] The arrays to inspect.
 * @returns {Array} Returns the new array of combined values.
 * @example
 *
 * _.union([2], [1, 2]);
 * // => [2, 1]
 */
var union = baseRest(function(arrays) {
  return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
});

module.exports = union;


/***/ })

}]);