(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.iterator.js
var es6_string_iterator = __webpack_require__(50);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.symbol.async-iterator.js
var es7_symbol_async_iterator = __webpack_require__(59);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.symbol.js
var es6_symbol = __webpack_require__(62);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(20);

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(64);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.match.js
var es6_regexp_match = __webpack_require__(86);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.array.includes.js
var es7_array_includes = __webpack_require__(65);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.includes.js
var es6_string_includes = __webpack_require__(67);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.keys.js
var es6_object_keys = __webpack_require__(70);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__(46);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.assign.js
var es6_object_assign = __webpack_require__(90);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.function.name.js
var es6_function_name = __webpack_require__(72);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.iterator.js
var es6_array_iterator = __webpack_require__(71);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.promise.js
var es6_promise = __webpack_require__(92);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.promise.finally.js
var es7_promise_finally = __webpack_require__(104);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm.js
var vue_runtime_esm = __webpack_require__(1);

// EXTERNAL MODULE: ./.nuxt/middleware.js
var middleware = __webpack_require__(49);
var middleware_default = /*#__PURE__*/__webpack_require__.n(middleware);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.split.js
var es6_regexp_split = __webpack_require__(105);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.starts-with.js
var es6_string_starts_with = __webpack_require__(106);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.repeat.js
var es6_string_repeat = __webpack_require__(107);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.to-string.js
var es6_regexp_to_string = __webpack_require__(109);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.date.to-string.js
var es6_date_to_string = __webpack_require__(111);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.constructor.js
var es6_regexp_constructor = __webpack_require__(112);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.search.js
var es6_regexp_search = __webpack_require__(115);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.replace.js
var es6_regexp_replace = __webpack_require__(117);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread.js + 1 modules
var objectSpread = __webpack_require__(21);

// CONCATENATED MODULE: ./.nuxt/utils.js


















var noopData = function noopData() {
  return {};
}; // window.{{globals.loadedCallback}} hook
// Useful for jsdom testing or plugins (https://github.com/tmpvar/jsdom#dealing-with-asynchronous-script-loading)


if (true) {
  window.onNuxtReadyCbs = [];

  window.onNuxtReady = function (cb) {
    window.onNuxtReadyCbs.push(cb);
  };
}

function empty() {}
function globalHandleError(error) {
  if (vue_runtime_esm["a" /* default */].config.errorHandler) {
    vue_runtime_esm["a" /* default */].config.errorHandler(error);
  }
}
function interopDefault(promise) {
  return promise.then(function (m) {
    return m.default || m;
  });
}
function applyAsyncData(Component, asyncData) {
  var ComponentData = Component.options.data || noopData; // Prevent calling this method for each request on SSR context

  if (!asyncData && Component.options.hasAsyncData) {
    return;
  }

  Component.options.hasAsyncData = true;

  Component.options.data = function () {
    var data = ComponentData.call(this);

    if (this.$ssrContext) {
      asyncData = this.$ssrContext.asyncData[Component.cid];
    }

    return Object(objectSpread["a" /* default */])({}, data, asyncData);
  };

  if (Component._Ctor && Component._Ctor.options) {
    Component._Ctor.options.data = Component.options.data;
  }
}
function sanitizeComponent(Component) {
  // If Component already sanitized
  if (Component.options && Component._Ctor === Component) {
    return Component;
  }

  if (!Component.options) {
    Component = vue_runtime_esm["a" /* default */].extend(Component); // fix issue #6

    Component._Ctor = Component;
  } else {
    Component._Ctor = Component;
    Component.extendOptions = Component.options;
  } // For debugging purpose


  if (!Component.options.name && Component.options.__file) {
    Component.options.name = Component.options.__file;
  }

  return Component;
}
function getMatchedComponents(route) {
  var matches = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return Array.prototype.concat.apply([], route.matched.map(function (m, index) {
    return Object.keys(m.components).map(function (key) {
      matches && matches.push(index);
      return m.components[key];
    });
  }));
}
function getMatchedComponentsInstances(route) {
  var matches = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return Array.prototype.concat.apply([], route.matched.map(function (m, index) {
    return Object.keys(m.instances).map(function (key) {
      matches && matches.push(index);
      return m.instances[key];
    });
  }));
}
function flatMapComponents(route, fn) {
  return Array.prototype.concat.apply([], route.matched.map(function (m, index) {
    return Object.keys(m.components).reduce(function (promises, key) {
      if (m.components[key]) {
        promises.push(fn(m.components[key], m.instances[key], m, key, index));
      } else {
        delete m.components[key];
      }

      return promises;
    }, []);
  }));
}
function resolveRouteComponents(route) {
  return Promise.all(flatMapComponents(route,
  /*#__PURE__*/
  function () {
    var _ref = Object(asyncToGenerator["a" /* default */])(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(Component, _, match, key) {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(typeof Component === 'function' && !Component.options)) {
                _context.next = 4;
                break;
              }

              _context.next = 3;
              return Component();

            case 3:
              Component = _context.sent;

            case 4:
              match.components[key] = sanitizeComponent(Component);
              return _context.abrupt("return", match.components[key]);

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    return function (_x, _x2, _x3, _x4) {
      return _ref.apply(this, arguments);
    };
  }()));
}
function getRouteData(_x5) {
  return _getRouteData.apply(this, arguments);
}

function _getRouteData() {
  _getRouteData = Object(asyncToGenerator["a" /* default */])(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(route) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return resolveRouteComponents(route);

          case 2:
            return _context2.abrupt("return", Object(objectSpread["a" /* default */])({}, route, {
              meta: getMatchedComponents(route).map(function (Component, index) {
                return Object(objectSpread["a" /* default */])({}, Component.options.meta, (route.matched[index] || {}).meta);
              })
            }));

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));
  return _getRouteData.apply(this, arguments);
}

function setContext(_x6, _x7) {
  return _setContext.apply(this, arguments);
}

function _setContext() {
  _setContext = Object(asyncToGenerator["a" /* default */])(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(app, context) {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            // If context not defined, create it
            if (!app.context) {
              app.context = {
                isStatic: true,
                isDev: false,
                isHMR: false,
                app: app,
                payload: context.payload,
                error: context.error,
                base: '/',
                env: {} // Only set once

              };
              if (context.req) app.context.req = context.req;
              if (context.res) app.context.res = context.res;

              app.context.redirect = function (status, path, query) {
                if (!status) {
                  return;
                }

                app.context._redirected = true; // if only 1 or 2 arguments: redirect('/') or redirect('/', { foo: 'bar' })

                var pathType = Object(esm_typeof["a" /* default */])(path);

                if (typeof status !== 'number' && (pathType === 'undefined' || pathType === 'object')) {
                  query = path || {};
                  path = status;
                  pathType = Object(esm_typeof["a" /* default */])(path);
                  status = 302;
                }

                if (pathType === 'object') {
                  path = app.router.resolve(path).href;
                } // "/absolute/route", "./relative/route" or "../relative/route"


                if (/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)) {
                  app.context.next({
                    path: path,
                    query: query,
                    status: status
                  });
                } else {
                  path = formatUrl(path, query);

                  if (false) {}

                  if (true) {
                    // https://developer.mozilla.org/en-US/docs/Web/API/Location/replace
                    window.location.replace(path); // Throw a redirect error

                    throw new Error('ERR_REDIRECT');
                  }
                }
              };

              if (false) {}

              if (true) {
                app.context.nuxtState = window.__NUXT__;
              }
            } // Dynamic keys


            app.context.next = context.next;
            app.context._redirected = false;
            app.context._errored = false;
            app.context.isHMR = !!context.isHMR;

            if (!context.route) {
              _context3.next = 9;
              break;
            }

            _context3.next = 8;
            return getRouteData(context.route);

          case 8:
            app.context.route = _context3.sent;

          case 9:
            app.context.params = app.context.route.params || {};
            app.context.query = app.context.route.query || {};

            if (!context.from) {
              _context3.next = 15;
              break;
            }

            _context3.next = 14;
            return getRouteData(context.from);

          case 14:
            app.context.from = _context3.sent;

          case 15:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));
  return _setContext.apply(this, arguments);
}

function middlewareSeries(promises, appContext) {
  if (!promises.length || appContext._redirected || appContext._errored) {
    return Promise.resolve();
  }

  return promisify(promises[0], appContext).then(function () {
    return middlewareSeries(promises.slice(1), appContext);
  });
}
function promisify(fn, context) {
  var promise;

  if (fn.length === 2) {
    // fn(context, callback)
    promise = new Promise(function (resolve) {
      fn(context, function (err, data) {
        if (err) {
          context.error(err);
        }

        data = data || {};
        resolve(data);
      });
    });
  } else {
    promise = fn(context);
  }

  if (!promise || !(promise instanceof Promise) && typeof promise.then !== 'function') {
    promise = Promise.resolve(promise);
  }

  return promise;
} // Imported from vue-router

function getLocation(base, mode) {
  var path = window.location.pathname;

  if (mode === 'hash') {
    return window.location.hash.replace(/^#\//, '');
  }

  if (base && path.indexOf(base) === 0) {
    path = path.slice(base.length);
  }

  return decodeURI(path || '/') + window.location.search + window.location.hash;
}
function urlJoin() {
  return Array.prototype.slice.call(arguments).join('/').replace(/\/+/g, '/');
} // Imported from path-to-regexp

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */

function compile(str, options) {
  return tokensToFunction(parse(str, options));
}
function getQueryDiff(toQuery, fromQuery) {
  var diff = {};

  var queries = Object(objectSpread["a" /* default */])({}, toQuery, fromQuery);

  for (var k in queries) {
    if (String(toQuery[k]) !== String(fromQuery[k])) {
      diff[k] = true;
    }
  }

  return diff;
}
function normalizeError(err) {
  var message;

  if (!(err.message || typeof err === 'string')) {
    try {
      message = JSON.stringify(err, null, 2);
    } catch (e) {
      message = "[".concat(err.constructor.name, "]");
    }
  } else {
    message = err.message || err;
  }

  return Object(objectSpread["a" /* default */])({}, err, {
    message: message,
    statusCode: err.statusCode || err.status || err.response && err.response.status || 500
  });
}
/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */

var PATH_REGEXP = new RegExp([// Match escaped characters that would otherwise appear in future matches.
// This allows the user to escape special characters that won't transform.
'(\\\\.)', // Match Express-style parameters and un-named parameters with a prefix
// and optional suffixes. Matches appear as:
//
// "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
// "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
// "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
'([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'].join('|'), 'g');
/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */

function parse(str, options) {
  var tokens = [];
  var key = 0;
  var index = 0;
  var path = '';
  var defaultDelimiter = options && options.delimiter || '/';
  var res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0];
    var escaped = res[1];
    var offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length; // Ignore already escaped sequences.

    if (escaped) {
      path += escaped[1];
      continue;
    }

    var next = str[index];
    var prefix = res[2];
    var name = res[3];
    var capture = res[4];
    var group = res[5];
    var modifier = res[6];
    var asterisk = res[7]; // Push the current path onto the tokens.

    if (path) {
      tokens.push(path);
      path = '';
    }

    var partial = prefix != null && next != null && next !== prefix;
    var repeat = modifier === '+' || modifier === '*';
    var optional = modifier === '?' || modifier === '*';
    var delimiter = res[2] || defaultDelimiter;
    var pattern = capture || group;
    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?'
    });
  } // Match any characters still remaining.


  if (index < str.length) {
    path += str.substr(index);
  } // If the path exists, push it onto the end.


  if (path) {
    tokens.push(path);
  }

  return tokens;
}
/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */


function encodeURIComponentPretty(str) {
  return encodeURI(str).replace(/[/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}
/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */


function encodeAsterisk(str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}
/**
 * Expose a method for transforming tokens into the path function.
 */


function tokensToFunction(tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length); // Compile all the patterns before compilation.

  for (var i = 0; i < tokens.length; i++) {
    if (Object(esm_typeof["a" /* default */])(tokens[i]) === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$');
    }
  }

  return function (obj, opts) {
    var path = '';
    var data = obj || {};
    var options = opts || {};
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (var _i = 0; _i < tokens.length; _i++) {
      var token = tokens[_i];

      if (typeof token === 'string') {
        path += token;
        continue;
      }

      var value = data[token.name || 'pathMatch'];
      var segment = void 0;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue;
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined');
        }
      }

      if (Array.isArray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`');
        }

        if (value.length === 0) {
          if (token.optional) {
            continue;
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty');
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[_i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`');
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue;
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[_i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
      }

      path += token.prefix + segment;
    }

    return path;
  };
}
/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */


function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');
}
/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */


function escapeGroup(group) {
  return group.replace(/([=!:$/()])/g, '\\$1');
}
/**
 * Format given url, append query to url query string
 *
 * @param  {string} url
 * @param  {string} query
 * @return {string}
 */


function formatUrl(url, query) {
  var protocol;
  var index = url.indexOf('://');

  if (index !== -1) {
    protocol = url.substring(0, index);
    url = url.substring(index + 3);
  } else if (url.startsWith('//')) {
    url = url.substring(2);
  }

  var parts = url.split('/');
  var result = (protocol ? protocol + '://' : '//') + parts.shift();
  var path = parts.filter(Boolean).join('/');
  var hash;
  parts = path.split('#');

  if (parts.length === 2) {
    path = parts[0];
    hash = parts[1];
  }

  result += path ? '/' + path : '';

  if (query && JSON.stringify(query) !== '{}') {
    result += (url.split('?').length === 2 ? '&' : '?') + formatQuery(query);
  }

  result += hash ? '#' + hash : '';
  return result;
}
/**
 * Transform data object to query string
 *
 * @param  {object} query
 * @return {string}
 */


function formatQuery(query) {
  return Object.keys(query).sort().map(function (key) {
    var val = query[key];

    if (val == null) {
      return '';
    }

    if (Array.isArray(val)) {
      return val.slice().map(function (val2) {
        return [key, '=', val2].join('');
      }).join('&');
    }

    return key + '=' + val;
  }).filter(Boolean).join('&');
}
// EXTERNAL MODULE: ./.nuxt/index.js
var _nuxt = __webpack_require__(14);

// CONCATENATED MODULE: ./.nuxt/components/nuxt-link.client.js







var requestIdleCallback = window.requestIdleCallback || function (cb) {
  var start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function timeRemaining() {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

var observer = window.IntersectionObserver && new window.IntersectionObserver(function (entries) {
  entries.forEach(function (_ref) {
    var intersectionRatio = _ref.intersectionRatio,
        link = _ref.target;

    if (intersectionRatio <= 0) {
      return;
    }

    link.__prefetch();
  });
});
/* harmony default export */ var nuxt_link_client = ({
  name: 'NuxtLink',
  extends: vue_runtime_esm["a" /* default */].component('RouterLink'),
  props: {
    noPrefetch: {
      type: Boolean,
      default: false
    }
  },
  mounted: function mounted() {
    if (!this.noPrefetch) {
      requestIdleCallback(this.observe, {
        timeout: 2e3
      });
    }
  },
  beforeDestroy: function beforeDestroy() {
    if (this.__observed) {
      observer.unobserve(this.$el);
      delete this.$el.__prefetch;
    }
  },
  methods: {
    observe: function observe() {
      // If no IntersectionObserver, avoid prefetching
      if (!observer) {
        return;
      } // Add to observer


      if (this.shouldPrefetch()) {
        this.$el.__prefetch = this.prefetch.bind(this);
        observer.observe(this.$el);
        this.__observed = true;
      }
    },
    shouldPrefetch: function shouldPrefetch() {
      return this.getPrefetchComponents().length > 0;
    },
    canPrefetch: function canPrefetch() {
      var conn = navigator.connection;
      var hasBadConnection = this.$nuxt.isOffline || conn && ((conn.effectiveType || '').includes('2g') || conn.saveData);
      return !hasBadConnection;
    },
    getPrefetchComponents: function getPrefetchComponents() {
      var ref = this.$router.resolve(this.to, this.$route, this.append);
      var Components = ref.resolved.matched.map(function (r) {
        return r.components.default;
      });
      return Components.filter(function (Component) {
        return typeof Component === 'function' && !Component.options && !Component.__prefetched;
      });
    },
    prefetch: function prefetch() {
      if (!this.canPrefetch()) {
        return;
      } // Stop obersing this link (in case of internet connection changes)


      observer.unobserve(this.$el);
      var Components = this.getPrefetchComponents();
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = Components[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var Component = _step.value;

          try {
            Component();
            Component.__prefetched = true;
          } catch (e) {}
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }
});
// CONCATENATED MODULE: ./.nuxt/client.js




















 // should be included after ./index.js
// Component: <NuxtLink>

vue_runtime_esm["a" /* default */].component(nuxt_link_client.name, nuxt_link_client);
vue_runtime_esm["a" /* default */].component('NLink', nuxt_link_client); // Global shared references

var _lastPaths = [];
var client_app;
var client_router; // Try to rehydrate SSR data from window

var NUXT = window.__NUXT__ || {};
Object.assign(vue_runtime_esm["a" /* default */].config, {
  "silent": true,
  "performance": false
});
var errorHandler = vue_runtime_esm["a" /* default */].config.errorHandler || console.error; // Create and mount App

Object(_nuxt["createApp"])().then(mountApp).catch(function (err) {
  err.message = '[nuxt] Error while mounting app: ' + err.message;
  errorHandler(err);
});

function componentOption(component, key) {
  if (!component || !component.options || !component.options[key]) {
    return {};
  }

  var option = component.options[key];

  if (typeof option === 'function') {
    for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    return option.apply(void 0, args);
  }

  return option;
}

function mapTransitions(Components, to, from) {
  var componentTransitions = function componentTransitions(component) {
    var transition = componentOption(component, 'transition', to, from) || {};
    return typeof transition === 'string' ? {
      name: transition
    } : transition;
  };

  return Components.map(function (Component) {
    // Clone original object to prevent overrides
    var transitions = Object.assign({}, componentTransitions(Component)); // Combine transitions & prefer `leave` transitions of 'from' route

    if (from && from.matched.length && from.matched[0].components.default) {
      var fromTransitions = componentTransitions(from.matched[0].components.default);
      Object.keys(fromTransitions).filter(function (key) {
        return fromTransitions[key] && key.toLowerCase().includes('leave');
      }).forEach(function (key) {
        transitions[key] = fromTransitions[key];
      });
    }

    return transitions;
  });
}

function loadAsyncComponents(_x, _x2, _x3) {
  return _loadAsyncComponents.apply(this, arguments);
}

function _loadAsyncComponents() {
  _loadAsyncComponents = Object(asyncToGenerator["a" /* default */])(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(to, from, next) {
    var _this3 = this;

    var Components, startLoader, err, statusCode, message;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            // Check if route path changed (this._pathChanged), only if the page is not an error (for validate())
            this._pathChanged = !!client_app.nuxt.err || from.path !== to.path;
            this._queryChanged = JSON.stringify(to.query) !== JSON.stringify(from.query);
            this._diffQuery = this._queryChanged ? getQueryDiff(to.query, from.query) : [];

            if (this._pathChanged && this.$loading.start && !this.$loading.manual) {
              this.$loading.start();
            }

            _context2.prev = 4;
            _context2.next = 7;
            return resolveRouteComponents(to);

          case 7:
            Components = _context2.sent;

            if (!this._pathChanged && this._queryChanged) {
              // Add a marker on each component that it needs to refresh or not
              startLoader = Components.some(function (Component) {
                var watchQuery = Component.options.watchQuery;
                if (watchQuery === true) return true;

                if (Array.isArray(watchQuery)) {
                  return watchQuery.some(function (key) {
                    return _this3._diffQuery[key];
                  });
                }

                return false;
              });

              if (startLoader && this.$loading.start && !this.$loading.manual) {
                this.$loading.start();
              }
            } // Call next()


            next();
            _context2.next = 23;
            break;

          case 12:
            _context2.prev = 12;
            _context2.t0 = _context2["catch"](4);
            err = _context2.t0 || {};
            statusCode = err.statusCode || err.status || err.response && err.response.status || 500;
            message = err.message || ''; // Handle chunk loading errors
            // This may be due to a new deployment or a network problem

            if (!/^Loading chunk (\d)+ failed\./.test(message)) {
              _context2.next = 20;
              break;
            }

            window.location.reload(true
            /* skip cache */
            );
            return _context2.abrupt("return");

          case 20:
            this.error({
              statusCode: statusCode,
              message: message
            });
            this.$nuxt.$emit('routeChanged', to, from, err);
            next();

          case 23:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this, [[4, 12]]);
  }));
  return _loadAsyncComponents.apply(this, arguments);
}

function applySSRData(Component, ssrData) {
  if (NUXT.serverRendered && ssrData) {
    applyAsyncData(Component, ssrData);
  }

  Component._Ctor = Component;
  return Component;
} // Get matched components


function resolveComponents(router) {
  var path = getLocation(router.options.base, router.options.mode);
  return flatMapComponents(router.match(path),
  /*#__PURE__*/
  function () {
    var _ref = Object(asyncToGenerator["a" /* default */])(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(Component, _, match, key, index) {
      var _Component;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(typeof Component === 'function' && !Component.options)) {
                _context.next = 4;
                break;
              }

              _context.next = 3;
              return Component();

            case 3:
              Component = _context.sent;

            case 4:
              // Sanitize it and save it
              _Component = applySSRData(sanitizeComponent(Component), NUXT.data ? NUXT.data[index] : null);
              match.components[key] = _Component;
              return _context.abrupt("return", _Component);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    return function (_x4, _x5, _x6, _x7, _x8) {
      return _ref.apply(this, arguments);
    };
  }());
}

function callMiddleware(Components, context, layout) {
  var _this = this;

  var midd = [];
  var unknownMiddleware = false; // If layout is undefined, only call global middleware

  if (typeof layout !== 'undefined') {
    midd = []; // Exclude global middleware if layout defined (already called before)

    layout = sanitizeComponent(layout);

    if (layout.options.middleware) {
      midd = midd.concat(layout.options.middleware);
    }

    Components.forEach(function (Component) {
      if (Component.options.middleware) {
        midd = midd.concat(Component.options.middleware);
      }
    });
  }

  midd = midd.map(function (name) {
    if (typeof name === 'function') return name;

    if (typeof middleware_default.a[name] !== 'function') {
      unknownMiddleware = true;

      _this.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }

    return middleware_default.a[name];
  });
  if (unknownMiddleware) return;
  return middlewareSeries(midd, context);
}

function render(_x9, _x10, _x11) {
  return _render.apply(this, arguments);
} // Fix components format in matched, it's due to code-splitting of vue-router


function _render() {
  _render = Object(asyncToGenerator["a" /* default */])(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(to, from, next) {
    var _this4 = this;

    var fromMatches, nextCalled, _next, matches, Components, layout, _layout, isValid, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, Component, error, _layout2;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            if (!(this._pathChanged === false && this._queryChanged === false)) {
              _context3.next = 2;
              break;
            }

            return _context3.abrupt("return", next());

          case 2:
            // Handle first render on SPA mode
            if (to === from) _lastPaths = [];else {
              fromMatches = [];
              _lastPaths = getMatchedComponents(from, fromMatches).map(function (Component, i) {
                return compile(from.matched[fromMatches[i]].path)(from.params);
              });
            } // nextCalled is true when redirected

            nextCalled = false;

            _next = function _next(path) {
              if (from.path === path.path && _this4.$loading.finish) {
                _this4.$loading.finish();
              }

              if (from.path !== path.path && _this4.$loading.pause) {
                _this4.$loading.pause();
              }

              if (nextCalled) return;
              nextCalled = true;
              next(path);
            }; // Update context


            _context3.next = 7;
            return setContext(client_app, {
              route: to,
              from: from,
              next: _next.bind(this)
            });

          case 7:
            this._dateLastError = client_app.nuxt.dateErr;
            this._hadError = !!client_app.nuxt.err; // Get route's matched components

            matches = [];
            Components = getMatchedComponents(to, matches); // If no Components matched, generate 404

            if (Components.length) {
              _context3.next = 25;
              break;
            }

            _context3.next = 14;
            return callMiddleware.call(this, Components, client_app.context);

          case 14:
            if (!nextCalled) {
              _context3.next = 16;
              break;
            }

            return _context3.abrupt("return");

          case 16:
            _context3.next = 18;
            return this.loadLayout(typeof _nuxt["NuxtError"].layout === 'function' ? _nuxt["NuxtError"].layout(client_app.context) : _nuxt["NuxtError"].layout);

          case 18:
            layout = _context3.sent;
            _context3.next = 21;
            return callMiddleware.call(this, Components, client_app.context, layout);

          case 21:
            if (!nextCalled) {
              _context3.next = 23;
              break;
            }

            return _context3.abrupt("return");

          case 23:
            // Show error page
            client_app.context.error({
              statusCode: 404,
              message: "This page could not be found"
            });
            return _context3.abrupt("return", next());

          case 25:
            // Update ._data and other properties if hot reloaded
            Components.forEach(function (Component) {
              if (Component._Ctor && Component._Ctor.options) {
                Component.options.asyncData = Component._Ctor.options.asyncData;
                Component.options.fetch = Component._Ctor.options.fetch;
              }
            }); // Apply transitions

            this.setTransitions(mapTransitions(Components, to, from));
            _context3.prev = 27;
            _context3.next = 30;
            return callMiddleware.call(this, Components, client_app.context);

          case 30:
            if (!nextCalled) {
              _context3.next = 32;
              break;
            }

            return _context3.abrupt("return");

          case 32:
            if (!client_app.context._errored) {
              _context3.next = 34;
              break;
            }

            return _context3.abrupt("return", next());

          case 34:
            // Set layout
            _layout = Components[0].options.layout;

            if (typeof _layout === 'function') {
              _layout = _layout(client_app.context);
            }

            _context3.next = 38;
            return this.loadLayout(_layout);

          case 38:
            _layout = _context3.sent;
            _context3.next = 41;
            return callMiddleware.call(this, Components, client_app.context, _layout);

          case 41:
            if (!nextCalled) {
              _context3.next = 43;
              break;
            }

            return _context3.abrupt("return");

          case 43:
            if (!client_app.context._errored) {
              _context3.next = 45;
              break;
            }

            return _context3.abrupt("return", next());

          case 45:
            // Call .validate()
            isValid = true;
            _context3.prev = 46;
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _iteratorError = undefined;
            _context3.prev = 50;
            _iterator = Components[Symbol.iterator]();

          case 52:
            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
              _context3.next = 64;
              break;
            }

            Component = _step.value;

            if (!(typeof Component.options.validate !== 'function')) {
              _context3.next = 56;
              break;
            }

            return _context3.abrupt("continue", 61);

          case 56:
            _context3.next = 58;
            return Component.options.validate(client_app.context);

          case 58:
            isValid = _context3.sent;

            if (isValid) {
              _context3.next = 61;
              break;
            }

            return _context3.abrupt("break", 64);

          case 61:
            _iteratorNormalCompletion = true;
            _context3.next = 52;
            break;

          case 64:
            _context3.next = 70;
            break;

          case 66:
            _context3.prev = 66;
            _context3.t0 = _context3["catch"](50);
            _didIteratorError = true;
            _iteratorError = _context3.t0;

          case 70:
            _context3.prev = 70;
            _context3.prev = 71;

            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }

          case 73:
            _context3.prev = 73;

            if (!_didIteratorError) {
              _context3.next = 76;
              break;
            }

            throw _iteratorError;

          case 76:
            return _context3.finish(73);

          case 77:
            return _context3.finish(70);

          case 78:
            _context3.next = 84;
            break;

          case 80:
            _context3.prev = 80;
            _context3.t1 = _context3["catch"](46);
            // ...If .validate() threw an error
            this.error({
              statusCode: _context3.t1.statusCode || '500',
              message: _context3.t1.message
            });
            return _context3.abrupt("return", next());

          case 84:
            if (isValid) {
              _context3.next = 87;
              break;
            }

            this.error({
              statusCode: 404,
              message: "This page could not be found"
            });
            return _context3.abrupt("return", next());

          case 87:
            _context3.next = 89;
            return Promise.all(Components.map(function (Component, i) {
              // Check if only children route changed
              Component._path = compile(to.matched[matches[i]].path)(to.params);
              Component._dataRefresh = false; // Check if Component need to be refreshed (call asyncData & fetch)
              // Only if its slug has changed or is watch query changes

              if (_this4._pathChanged && _this4._queryChanged || Component._path !== _lastPaths[i]) {
                Component._dataRefresh = true;
              } else if (!_this4._pathChanged && _this4._queryChanged) {
                var watchQuery = Component.options.watchQuery;

                if (watchQuery === true) {
                  Component._dataRefresh = true;
                } else if (Array.isArray(watchQuery)) {
                  Component._dataRefresh = watchQuery.some(function (key) {
                    return _this4._diffQuery[key];
                  });
                }
              }

              if (!_this4._hadError && _this4._isMounted && !Component._dataRefresh) {
                return Promise.resolve();
              }

              var promises = [];
              var hasAsyncData = Component.options.asyncData && typeof Component.options.asyncData === 'function';
              var hasFetch = !!Component.options.fetch;
              var loadingIncrease = hasAsyncData && hasFetch ? 30 : 45; // Call asyncData(context)

              if (hasAsyncData) {
                var promise = promisify(Component.options.asyncData, client_app.context).then(function (asyncDataResult) {
                  applyAsyncData(Component, asyncDataResult);

                  if (_this4.$loading.increase) {
                    _this4.$loading.increase(loadingIncrease);
                  }
                });
                promises.push(promise);
              } // Check disabled page loading


              _this4.$loading.manual = Component.options.loading === false; // Call fetch(context)

              if (hasFetch) {
                var p = Component.options.fetch(client_app.context);

                if (!p || !(p instanceof Promise) && typeof p.then !== 'function') {
                  p = Promise.resolve(p);
                }

                p.then(function (fetchResult) {
                  if (_this4.$loading.increase) {
                    _this4.$loading.increase(loadingIncrease);
                  }
                });
                promises.push(p);
              }

              return Promise.all(promises);
            }));

          case 89:
            // If not redirected
            if (!nextCalled) {
              if (this.$loading.finish && !this.$loading.manual) {
                this.$loading.finish();
              }

              next();
            }

            _context3.next = 106;
            break;

          case 92:
            _context3.prev = 92;
            _context3.t2 = _context3["catch"](27);
            error = _context3.t2 || {};

            if (!(error.message === 'ERR_REDIRECT')) {
              _context3.next = 97;
              break;
            }

            return _context3.abrupt("return", this.$nuxt.$emit('routeChanged', to, from, error));

          case 97:
            _lastPaths = [];
            globalHandleError(error); // Load error layout

            _layout2 = _nuxt["NuxtError"].layout;

            if (typeof _layout2 === 'function') {
              _layout2 = _layout2(client_app.context);
            }

            _context3.next = 103;
            return this.loadLayout(_layout2);

          case 103:
            this.error(error);
            this.$nuxt.$emit('routeChanged', to, from, error);
            next();

          case 106:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this, [[27, 92], [46, 80], [50, 66, 70, 78], [71,, 73, 77]]);
  }));
  return _render.apply(this, arguments);
}

function normalizeComponents(to, ___) {
  flatMapComponents(to, function (Component, _, match, key) {
    if (Object(esm_typeof["a" /* default */])(Component) === 'object' && !Component.options) {
      // Updated via vue-router resolveAsyncComponents()
      Component = vue_runtime_esm["a" /* default */].extend(Component);
      Component._Ctor = Component;
      match.components[key] = Component;
    }

    return Component;
  });
}

function showNextPage(to) {
  // Hide error component if no error
  if (this._hadError && this._dateLastError === this.$options.nuxt.dateErr) {
    this.error();
  } // Set layout


  var layout = this.$options.nuxt.err ? _nuxt["NuxtError"].layout : to.matched[0].components.default.options.layout;

  if (typeof layout === 'function') {
    layout = layout(client_app.context);
  }

  this.setLayout(layout);
} // When navigating on a different route but the same component is used, Vue.js
// Will not update the instance data, so we have to update $data ourselves


function fixPrepatch(to, ___) {
  var _this2 = this;

  if (this._pathChanged === false && this._queryChanged === false) return;
  vue_runtime_esm["a" /* default */].nextTick(function () {
    var matches = [];
    var instances = getMatchedComponentsInstances(to, matches);
    var Components = getMatchedComponents(to, matches);
    instances.forEach(function (instance, i) {
      if (!instance) return; // if (
      //   !this._queryChanged &&
      //   to.matched[matches[i]].path.indexOf(':') === -1 &&
      //   to.matched[matches[i]].path.indexOf('*') === -1
      // ) return // If not a dynamic route, skip

      if (instance.constructor._dataRefresh && Components[i] === instance.constructor && typeof instance.constructor.options.data === 'function') {
        var newData = instance.constructor.options.data.call(instance);

        for (var key in newData) {
          vue_runtime_esm["a" /* default */].set(instance.$data, key, newData[key]);
        }
      }
    });
    showNextPage.call(_this2, to);
  });
}

function nuxtReady(_app) {
  window.onNuxtReadyCbs.forEach(function (cb) {
    if (typeof cb === 'function') {
      cb(_app);
    }
  }); // Special JSDOM

  if (typeof window._onNuxtLoaded === 'function') {
    window._onNuxtLoaded(_app);
  } // Add router hooks


  client_router.afterEach(function (to, from) {
    // Wait for fixPrepatch + $data updates
    vue_runtime_esm["a" /* default */].nextTick(function () {
      return _app.$nuxt.$emit('routeChanged', to, from);
    });
  });
}

function mountApp(_x12) {
  return _mountApp.apply(this, arguments);
}

function _mountApp() {
  _mountApp = Object(asyncToGenerator["a" /* default */])(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(__app) {
    var Components, _app, layout, mount;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            // Set global variables
            client_app = __app.app;
            client_router = __app.router; // Resolve route components

            _context4.next = 4;
            return Promise.all(resolveComponents(client_router));

          case 4:
            Components = _context4.sent;
            // Create Vue instance
            _app = new vue_runtime_esm["a" /* default */](client_app); // Load layout

            layout = NUXT.layout || 'default';
            _context4.next = 9;
            return _app.loadLayout(layout);

          case 9:
            _app.setLayout(layout); // Mounts Vue app to DOM element


            mount = function mount() {
              _app.$mount('#__nuxt'); // Listen for first Vue update


              vue_runtime_esm["a" /* default */].nextTick(function () {
                // Call window.{{globals.readyCallback}} callbacks
                nuxtReady(_app);
              });
            }; // Enable transitions


            _app.setTransitions = _app.$options.nuxt.setTransitions.bind(_app);

            if (Components.length) {
              _app.setTransitions(mapTransitions(Components, client_router.currentRoute));

              _lastPaths = client_router.currentRoute.matched.map(function (route) {
                return compile(route.path)(client_router.currentRoute.params);
              });
            } // Initialize error handler


            _app.$loading = {}; // To avoid error while _app.$nuxt does not exist

            if (NUXT.error) _app.error(NUXT.error); // Add router hooks

            client_router.beforeEach(loadAsyncComponents.bind(_app));
            client_router.beforeEach(render.bind(_app));
            client_router.afterEach(normalizeComponents);
            client_router.afterEach(fixPrepatch.bind(_app)); // If page already is server rendered

            if (!NUXT.serverRendered) {
              _context4.next = 22;
              break;
            }

            mount();
            return _context4.abrupt("return");

          case 22:
            // First render on client-side
            render.call(_app, client_router.currentRoute, client_router.currentRoute, function (path) {
              // If not redirected
              if (!path) {
                normalizeComponents(client_router.currentRoute, client_router.currentRoute);
                showNextPage.call(_app, client_router.currentRoute); // Don't call fixPrepatch.call(_app, router.currentRoute, router.currentRoute) since it's first render

                mount();
                return;
              } // Push the path and then mount app


              client_router.push(path, function () {
                return mount();
              }, function (err) {
                if (!err) return mount();
                errorHandler(err);
              });
            });

          case 23:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));
  return _mountApp.apply(this, arguments);
}

/***/ }),

/***/ 14:
/***/ (function(module, exports) {



/***/ }),

/***/ 49:
/***/ (function(module, exports) {



/***/ }),

/***/ 77:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(121);


/***/ })

},[[77,2,1]]]);