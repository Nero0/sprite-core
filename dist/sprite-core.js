(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["spritejs"] = factory();
	else
		root["spritejs"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/js/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Color", function() { return Color; });
/* harmony import */ var sprite_animator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Effects", function() { return sprite_animator__WEBPACK_IMPORTED_MODULE_0__["Effects"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Easings", function() { return sprite_animator__WEBPACK_IMPORTED_MODULE_0__["Easings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Timeline", function() { return sprite_animator__WEBPACK_IMPORTED_MODULE_0__["Timeline"]; });

/* harmony import */ var svg_path_to_canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19);
/* harmony import */ var svg_path_to_canvas__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(svg_path_to_canvas__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "SvgPath", function() { return svg_path_to_canvas__WEBPACK_IMPORTED_MODULE_1___default.a; });
/* harmony import */ var sprite_math__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(111);
/* harmony import */ var sprite_math__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sprite_math__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "math", function() { return sprite_math__WEBPACK_IMPORTED_MODULE_2__; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(120);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "utils", function() { return _utils__WEBPACK_IMPORTED_MODULE_3__; });
/* harmony import */ var _basesprite__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(129);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseSprite", function() { return _basesprite__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _sprite__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(147);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Sprite", function() { return _sprite__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _label__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(149);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return _label__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _layer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(155);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Layer", function() { return _layer__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _group__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(157);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Group", function() { return _group__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _basenode__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(142);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseNode", function() { return _basenode__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _path__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(166);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Path", function() { return _path__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _batch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(156);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Batch", function() { return _batch__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _use__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(167);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "use", function() { return _use__WEBPACK_IMPORTED_MODULE_12__["default"]; });













 // load modules
// import './modules/layout';
// import {
//   registerNodeType,
//   createNode,
//   createElement,
//   isValidNodeType,
//   querySelector,
//   querySelectorAll,
// } from './modules/dom';
// import stylesheet from './modules/css';
// import './modules/actions';

var Color = _utils__WEBPACK_IMPORTED_MODULE_3__["Color"];


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var sprite_timeline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Timeline", function() { return sprite_timeline__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _effect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Effects", function() { return _effect__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _easing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Easings", function() { return _easing__WEBPACK_IMPORTED_MODULE_2__["Easings"]; });

/* harmony import */ var _animator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Animator", function() { return _animator__WEBPACK_IMPORTED_MODULE_3__["default"]; });







/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13);






var _nowtime = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["createNowTime"])();

var defaultOptions = {
  originTime: 0,
  playbackRate: 1.0
};

var _timeMark = Symbol('timeMark'),
    _playbackRate = Symbol('playbackRate'),
    _timers = Symbol('timers'),
    _originTime = Symbol('originTime'),
    _setTimer = Symbol('setTimer'),
    _parent = Symbol('parent');

var Timeline =
/*#__PURE__*/
function () {
  function Timeline(options, parent) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Timeline);

    if (options instanceof Timeline) {
      parent = options;
      options = {};
    }

    options = Object.assign({}, defaultOptions, options);

    if (parent) {
      this[_parent] = parent;
    }

    var nowtime = options.nowtime || _nowtime;

    if (!parent) {
      var createTime = nowtime();
      Object.defineProperty(this, 'globalTime', {
        get: function get() {
          return nowtime() - createTime;
        }
      });
    } else {
      Object.defineProperty(this, 'globalTime', {
        get: function get() {
          return parent.currentTime;
        }
      });
    } // timeMark records the reference points on timeline
    // Each time we change the playbackRate or currentTime or entropy
    // A new timeMark will be generated
    // timeMark sorted by entropy
    // If you reset entropy, all the timeMarks behind the new entropy
    // should be dropped


    this[_timeMark] = [{
      globalTime: this.globalTime,
      localTime: -options.originTime,
      entropy: -options.originTime,
      playbackRate: options.playbackRate,
      globalEntropy: 0
    }];

    if (this[_parent]) {
      this[_timeMark][0].globalEntropy = this[_parent].entropy;
    }

    this[_originTime] = options.originTime;
    this[_playbackRate] = options.playbackRate;
    this[_timers] = new Map();
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Timeline, [{
    key: "markTime",
    value: function markTime() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$time = _ref.time,
          time = _ref$time === void 0 ? this.currentTime : _ref$time,
          _ref$entropy = _ref.entropy,
          entropy = _ref$entropy === void 0 ? this.entropy : _ref$entropy,
          _ref$playbackRate = _ref.playbackRate,
          playbackRate = _ref$playbackRate === void 0 ? this.playbackRate : _ref$playbackRate;

      var timeMark = {
        globalTime: this.globalTime,
        localTime: time,
        entropy: entropy,
        playbackRate: playbackRate,
        globalEntropy: this.globalEntropy
      };

      this[_timeMark].push(timeMark);
    }
  }, {
    key: "fork",
    value: function fork(options) {
      return new Timeline(options, this);
    }
  }, {
    key: "seekGlobalTime",
    value: function seekGlobalTime(seekEntropy) {
      var idx = this.seekTimeMark(seekEntropy),
          timeMark = this[_timeMark][idx];
      var entropy = timeMark.entropy,
          playbackRate = timeMark.playbackRate,
          globalTime = timeMark.globalTime;
      return globalTime + (seekEntropy - entropy) / Math.abs(playbackRate);
    }
  }, {
    key: "seekLocalTime",
    value: function seekLocalTime(seekEntropy) {
      var idx = this.seekTimeMark(seekEntropy),
          timeMark = this[_timeMark][idx];
      var localTime = timeMark.localTime,
          entropy = timeMark.entropy,
          playbackRate = timeMark.playbackRate;

      if (playbackRate > 0) {
        return localTime + (seekEntropy - entropy);
      }

      return localTime - (seekEntropy - entropy);
    }
  }, {
    key: "seekTimeMark",
    value: function seekTimeMark(entropy) {
      var timeMark = this[_timeMark];
      var l = 0,
          r = timeMark.length - 1;

      if (entropy <= timeMark[l].entropy) {
        return l;
      }

      if (entropy >= timeMark[r].entropy) {
        return r;
      }

      var m = Math.floor((l + r) / 2); // binary search

      while (m > l && m < r) {
        if (entropy === timeMark[m].entropy) {
          return m;
        }

        if (entropy < timeMark[m].entropy) {
          r = m;
        } else if (entropy > timeMark[m].entropy) {
          l = m;
        }

        m = Math.floor((l + r) / 2);
      }

      return l;
    }
  }, {
    key: "updateTimers",
    value: function updateTimers() {
      var _this = this;

      var timers = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(this[_timers]);

      timers.forEach(function (_ref2) {
        var _ref3 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref2, 2),
            id = _ref3[0],
            timer = _ref3[1];

        _this[_setTimer](timer.handler, timer.time, id);
      });
    }
  }, {
    key: "clearTimeout",
    value: function (_clearTimeout) {
      function clearTimeout(_x) {
        return _clearTimeout.apply(this, arguments);
      }

      clearTimeout.toString = function () {
        return _clearTimeout.toString();
      };

      return clearTimeout;
    }(function (id) {
      var timer = this[_timers].get(id);

      if (timer && timer.timerID != null) {
        if (this[_parent]) {
          this[_parent].clearTimeout(timer.timerID);
        } else {
          clearTimeout(timer.timerID);
        }
      }

      this[_timers].delete(id);
    })
  }, {
    key: "clearInterval",
    value: function clearInterval(id) {
      return this.clearTimeout(id);
    }
  }, {
    key: "clear",
    value: function clear() {
      var _this2 = this;

      // clear all running timers
      var timers = this[_timers];

      _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(timers.keys()).forEach(function (id) {
        _this2.clearTimeout(id);
      });
    }
    /*
      setTimeout(func, {delay: 100, isEntropy: true})
      setTimeout(func, {entropy: 100})
      setTimeout(func, 100})
     */

  }, {
    key: "setTimeout",
    value: function setTimeout(handler) {
      var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        delay: 0
      };
      return this[_setTimer](handler, time);
    }
  }, {
    key: "setInterval",
    value: function setInterval(handler) {
      var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        delay: 0
      };
      var that = this;

      var id = this[_setTimer](function step() {
        // reset timer before handler cause we may clearTimeout in handler()
        that[_setTimer](step, time, id);

        handler();
      }, time);

      return id;
    }
  }, {
    key: _setTimer,
    value: function value(handler, time) {
      var _this3 = this;

      var id = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Symbol('timerID');
      time = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["formatDelay"])(time);

      var timer = this[_timers].get(id);

      var delay,
          timerID = null,
          startTime,
          startEntropy;

      if (timer) {
        this.clearTimeout(id);

        if (time.isEntropy) {
          delay = (time.delay - (this.entropy - timer.startEntropy)) / Math.abs(this.playbackRate);
        } else {
          delay = (time.delay - (this.currentTime - timer.startTime)) / this.playbackRate;
        }

        startTime = timer.startTime;
        startEntropy = timer.startEntropy;
      } else {
        delay = time.delay / (time.isEntropy ? Math.abs(this.playbackRate) : this.playbackRate);
        startTime = this.currentTime;
        startEntropy = this.entropy;
      }

      var parent = this[_parent],
          globalTimeout = parent ? parent.setTimeout.bind(parent) : setTimeout;
      var heading = time.heading; // console.log(heading, parent, delay)

      if (!parent && heading === false && delay < 0) {
        delay = Infinity;
      } // if playbackRate is zero, delay will be infinity.
      // For wxapp bugs, cannot use Number.isFinite yet.


      if (isFinite(delay) || parent) {
        // eslint-disable-line no-restricted-globals
        delay = Math.ceil(delay);

        if (globalTimeout !== setTimeout) {
          delay = {
            delay: delay,
            heading: heading
          };
        }

        timerID = globalTimeout(function () {
          _this3[_timers].delete(id);

          handler();
        }, delay);
      }

      this[_timers].set(id, {
        timerID: timerID,
        handler: handler,
        time: time,
        startTime: startTime,
        startEntropy: startEntropy
      });

      return id;
    }
  }, {
    key: "parent",
    get: function get() {
      return this[_parent];
    }
  }, {
    key: "lastTimeMark",
    get: function get() {
      return this[_timeMark][this[_timeMark].length - 1];
    }
  }, {
    key: "currentTime",
    get: function get() {
      var _this$lastTimeMark = this.lastTimeMark,
          localTime = _this$lastTimeMark.localTime,
          globalTime = _this$lastTimeMark.globalTime;
      return localTime + (this.globalTime - globalTime) * this.playbackRate;
    },
    set: function set(time) {
      var _this4 = this;

      var from = this.currentTime,
          to = time,
          timers = this[_timers];
      this.markTime({
        time: time
      });

      _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(timers).forEach(function (_ref4) {
        var _ref5 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref4, 2),
            id = _ref5[0],
            timer = _ref5[1];

        if (!timers.has(id)) return; // Need check because it maybe clearTimeout by former handler().

        var _timer$time = timer.time,
            isEntropy = _timer$time.isEntropy,
            delay = _timer$time.delay,
            heading = _timer$time.heading,
            handler = timer.handler,
            startTime = timer.startTime;

        if (!isEntropy) {
          var endTime = startTime + delay;

          if (delay === 0 || heading !== false && (to - from) * delay <= 0 || from <= endTime && endTime <= to || from >= endTime && endTime >= to) {
            handler();

            _this4.clearTimeout(id);
          }
        } else if (delay === 0) {
          handler();

          _this4.clearTimeout(id);
        }
      });

      this.updateTimers();
    } // Both currentTime and entropy should be influenced by playbackRate.
    // If current playbackRate is negative, the currentTime should go backwards
    // while the entropy remain to go forwards.
    // Both of the initial values is set to -originTime

  }, {
    key: "entropy",
    get: function get() {
      var _this$lastTimeMark2 = this.lastTimeMark,
          entropy = _this$lastTimeMark2.entropy,
          globalEntropy = _this$lastTimeMark2.globalEntropy;
      return entropy + Math.abs((this.globalEntropy - globalEntropy) * this.playbackRate);
    },
    // get globalTime() {
    //   if(this[_parent]) {
    //     return this[_parent].currentTime;
    //   }
    //   return nowtime();
    // }
    // change entropy will NOT cause currentTime changing but may influence the pass
    // and the future of the timeline. (It may change the result of seek***Time)
    // While entropy is set, all the marks behind will be droped
    set: function set(entropy) {
      if (this.entropy > entropy) {
        var idx = this.seekTimeMark(entropy);
        this[_timeMark].length = idx + 1;
      }

      this.markTime({
        entropy: entropy
      });
      this.updateTimers();
    }
  }, {
    key: "globalEntropy",
    get: function get() {
      return this[_parent] ? this[_parent].entropy : this.globalTime;
    }
  }, {
    key: "playbackRate",
    get: function get() {
      return this[_playbackRate];
    },
    set: function set(rate) {
      if (rate !== this.playbackRate) {
        this.markTime({
          playbackRate: rate
        });
        this[_playbackRate] = rate;
        this.updateTimers();
      }
    }
  }, {
    key: "paused",
    get: function get() {
      if (this.playbackRate === 0) return true;
      var parent = this.parent;

      while (parent) {
        if (parent.playbackRate === 0) return true;
        parent = parent.parent;
      }

      return false;
    }
  }]);

  return Timeline;
}();

/* harmony default export */ __webpack_exports__["default"] = (Timeline);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(4);

var iterableToArrayLimit = __webpack_require__(5);

var nonIterableRest = __webpack_require__(6);

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

module.exports = _nonIterableRest;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(8);

var iterableToArray = __webpack_require__(9);

var nonIterableSpread = __webpack_require__(10);

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

module.exports = _arrayWithoutHoles;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),
/* 12 */
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
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNowTime", function() { return createNowTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDelay", function() { return formatDelay; });
function createNowTime() {
  var syncLocker = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  var nowtime = null;

  if (Date.now) {
    nowtime = Date.now;
  } else {
    nowtime = function nowtime() {
      return new Date().getTime();
    };
  }

  return nowtime;
}
/*
  delay = 100 -> delay = {delay: 100}
  delay = {entropy: 100} -> delay = {delay: 100, isEntropy: true}
 */

function formatDelay(delay) {
  if (typeof delay === 'number') {
    delay = {
      delay: delay
    };
  } else if ('entropy' in delay) {
    delay = {
      delay: delay.entropy,
      isEntropy: true
    };
  }

  return delay;
}

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  // s - startFrame, e - endFrame
  default: function _default(from, to, p, s, e) {
    if (typeof from === 'number' && typeof to === 'number') {
      return from + (p - s) / (e - s) * (to - from);
    }

    if (p - s > e - p) {
      return to;
    }

    return from;
  }
});

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Easings", function() { return Easings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseEasing", function() { return parseEasing; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);



var BezierEasing = __webpack_require__(16);

var bezierFuncCache = new Map();

function getBezierEasing() {
  for (var _len = arguments.length, value = new Array(_len), _key = 0; _key < _len; _key++) {
    value[_key] = arguments[_key];
  }

  var easing = bezierFuncCache.get(value);

  if (easing) {
    return easing;
  }

  easing = BezierEasing.apply(void 0, value);
  bezierFuncCache.set(value, easing);
  return easing;
}

function getStepsEasing(step) {
  var pos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'end';
  return function (p, frames) {
    for (var i = 1; i < frames.length; i++) {
      var offset = frames[i].offset;

      if (p <= offset) {
        var start = frames[i - 1].offset,
            end = offset;
        var fp = (p - start) / (end - start),
            d = 1 / step;
        var t = fp / d;

        if (pos === 'end') {
          t = Math.floor(t);
        } else {
          t = Math.ceil(t);
        }

        return d * t * (end - start) + start;
      }
    }

    return 0;
  };
}

function parseEasingStr(easingStr) {
  var pattern = /^cubic-bezier\((.*)\)/,
      matched = easingStr.match(pattern);

  if (matched) {
    var value = matched[1].trim();
    value = value.split(',').map(function (v) {
      return parseFloat(v.trim());
    });
    return getBezierEasing.apply(void 0, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(value));
  }

  pattern = /^steps\((.*)\)/;
  matched = easingStr.match(pattern);

  if (matched) {
    var _value = matched[1].trim();

    _value = _value.split(',').map(function (v) {
      return v.trim();
    });

    var _value2 = _value,
        _value3 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_value2, 2),
        step = _value3[0],
        pos = _value3[1];

    return getStepsEasing(parseInt(step, 10), pos);
  }

  return easingStr;
}

var Easings = {
  linear: function linear(p) {
    return p;
  },
  ease: getBezierEasing(0.25, 0.1, 0.25, 1),
  'ease-in': getBezierEasing(0.42, 0, 1, 1),
  'ease-out': getBezierEasing(0, 0, 0.58, 1),
  'ease-in-out': getBezierEasing(0.42, 0, 0.58, 1),
  // 'step-start': function(p, frames){
  //   let ret = 0
  //   for(let i = 0; i < frames.length; i++){
  //     const {offset} = frames[i]
  //     ret = offset
  //     if(p < offset){
  //       break
  //     }
  //   }
  //   return ret
  // },
  // 'step-end': function(p, frames){
  //   let ret = 0
  //   for(let i = 0; i < frames.length; i++){
  //     const {offset} = frames[i]
  //     if(p < offset){
  //       break
  //     }
  //     ret = offset
  //   }
  //   return ret
  // }
  'step-start': getStepsEasing(1, 'start'),
  'step-end': getStepsEasing(1, 'end')
};

function parseEasing(easing) {
  if (typeof easing === 'string') {
    if (!Easings[easing]) {
      easing = parseEasingStr(easing);
    } else {
      // load default Easing
      easing = Easings[easing];
    }
  } else if (easing.type === 'cubic-bezier') {
    easing = getBezierEasing.apply(void 0, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(easing.value));
  } else if (easing.type === 'steps') {
    easing = getStepsEasing(easing.step, easing.pos);
  }

  return easing;
}



/***/ }),
/* 16 */
/***/ (function(module, exports) {

/**
 * https://github.com/gre/bezier-easing
 * BezierEasing - use bezier curve for transition easing function
 * by Gaëtan Renaudeau 2014 - 2015 – MIT License
 */

// These values are established by empiricism with tests (tradeoff: performance VS precision)
var NEWTON_ITERATIONS = 4;
var NEWTON_MIN_SLOPE = 0.001;
var SUBDIVISION_PRECISION = 0.0000001;
var SUBDIVISION_MAX_ITERATIONS = 10;

var kSplineTableSize = 11;
var kSampleStepSize = 1.0 / (kSplineTableSize - 1.0);

var float32ArraySupported = typeof Float32Array === 'function';

function A (aA1, aA2) { return 1.0 - 3.0 * aA2 + 3.0 * aA1; }
function B (aA1, aA2) { return 3.0 * aA2 - 6.0 * aA1; }
function C (aA1)      { return 3.0 * aA1; }

// Returns x(t) given t, x1, and x2, or y(t) given t, y1, and y2.
function calcBezier (aT, aA1, aA2) { return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT; }

// Returns dx/dt given t, x1, and x2, or dy/dt given t, y1, and y2.
function getSlope (aT, aA1, aA2) { return 3.0 * A(aA1, aA2) * aT * aT + 2.0 * B(aA1, aA2) * aT + C(aA1); }

function binarySubdivide (aX, aA, aB, mX1, mX2) {
  var currentX, currentT, i = 0;
  do {
    currentT = aA + (aB - aA) / 2.0;
    currentX = calcBezier(currentT, mX1, mX2) - aX;
    if (currentX > 0.0) {
      aB = currentT;
    } else {
      aA = currentT;
    }
  } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);
  return currentT;
}

function newtonRaphsonIterate (aX, aGuessT, mX1, mX2) {
 for (var i = 0; i < NEWTON_ITERATIONS; ++i) {
   var currentSlope = getSlope(aGuessT, mX1, mX2);
   if (currentSlope === 0.0) {
     return aGuessT;
   }
   var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
   aGuessT -= currentX / currentSlope;
 }
 return aGuessT;
}

function LinearEasing (x) {
  return x;
}

module.exports = function bezier (mX1, mY1, mX2, mY2) {
  if (!(0 <= mX1 && mX1 <= 1 && 0 <= mX2 && mX2 <= 1)) {
    throw new Error('bezier x values must be in [0, 1] range');
  }

  if (mX1 === mY1 && mX2 === mY2) {
    return LinearEasing;
  }

  // Precompute samples table
  var sampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);
  for (var i = 0; i < kSplineTableSize; ++i) {
    sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
  }

  function getTForX (aX) {
    var intervalStart = 0.0;
    var currentSample = 1;
    var lastSample = kSplineTableSize - 1;

    for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
      intervalStart += kSampleStepSize;
    }
    --currentSample;

    // Interpolate to provide an initial guess for t
    var dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
    var guessForT = intervalStart + dist * kSampleStepSize;

    var initialSlope = getSlope(guessForT, mX1, mX2);
    if (initialSlope >= NEWTON_MIN_SLOPE) {
      return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
    } else if (initialSlope === 0.0) {
      return guessForT;
    } else {
      return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
    }
  }

  return function BezierEasing (x) {
    // Because JavaScript number are imprecise, we should guarantee the extremes are right.
    if (x === 0) {
      return 0;
    }
    if (x === 1) {
      return 1;
    }
    return calcBezier(getTForX(x), mY1, mY2);
  };
};


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var sprite_timeline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18);
/* harmony import */ var _easing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(15);






var _timing = Symbol('timing'),
    _keyframes = Symbol('keyframes'),
    _initState = Symbol('initState'),
    _readyDefer = Symbol('readyDefer'),
    _finishedDefer = Symbol('finishedDefer'),
    _effects = Symbol('effects'),
    _activeReadyTimer = Symbol('activeReadyTimer'),
    _activeFinishTimer = Symbol('activeFinishTimer'),
    _removeDefer = Symbol('removeDefer');
/**
  easing: {
    type: 'cubic-bezier',
    value: [...]
  }
  easing: {
    type: 'steps',
    step: 1,
    pos: 'end'
  }
 */


var defaultTiming = {
  delay: 0,
  endDelay: 0,
  fill: 'auto',
  iterations: 1.0,
  playbackRate: 1.0,
  direction: 'normal',
  easing: 'linear',
  effect: null
};
/**
  animation: play --> delay --> effect --> endDelay
  playState: idle --> pending --> running --> pending --> finished
 */

var _default =
/*#__PURE__*/
function () {
  function _default(initState, keyframes, timing) {
    var _this = this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, _default);

    if (Array.isArray(initState)) {
      // 如果 initState 缺省，默认 keyframes 的第一帧为 initState
      var _ref = [initState[0], initState, keyframes];
      initState = _ref[0];
      keyframes = _ref[1];
      timing = _ref[2];
    }

    if (typeof timing === 'number') {
      timing = {
        duration: timing
      };
    }

    this[_timing] = Object.assign({}, defaultTiming, timing);
    this[_timing].easing = Object(_easing__WEBPACK_IMPORTED_MODULE_4__["parseEasing"])(this[_timing].easing);
    this[_keyframes] = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["calculateFramesOffset"])(keyframes);
    var lastFrame = this[_keyframes][this[_keyframes].length - 1];
    this[_initState] = {}; // 初始状态

    Object.keys(lastFrame).forEach(function (key) {
      if (Object.prototype.hasOwnProperty.call(initState, key)) {
        if (key !== 'easing' && key !== 'offset') {
          _this[_initState][key] = initState[key];
        }
      }
    }); // 补齐参数

    this[_keyframes] = this[_keyframes].map(function (frame) {
      return Object.assign({}, _this[_initState], frame);
    });

    if (this[_keyframes][0].offset !== 0) {
      // 要补第一帧
      this[_keyframes].unshift(Object.assign({}, this[_initState], {
        offset: 0
      }));
    }

    if (lastFrame.offset < 1) {
      // 要补最后一帧
      this[_keyframes].push(Object.assign({}, lastFrame, {
        offset: 1
      }));
    }

    this[_effects] = {};
    this.timeline = null; // idle, no effect
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(_default, [{
    key: "pause",
    value: function pause() {
      this.timeline.playbackRate = 0;
    }
  }, {
    key: _activeReadyTimer,
    value: function value() {
      var _this2 = this;

      if (this[_readyDefer] && !this[_readyDefer].timerID) {
        if (this.timeline.currentTime < 0) {
          this[_readyDefer].timerID = this.timeline.setTimeout(function () {
            _this2[_readyDefer].resolve();

            delete _this2[_readyDefer];
          }, {
            delay: -this.timeline.currentTime,
            heading: false
          });
        } else {
          this[_readyDefer].timerID = this.timeline.setTimeout(function () {
            _this2[_readyDefer].resolve();

            delete _this2[_readyDefer];
          }, {
            delay: 0,
            isEntropy: true
          });
        }
      }
    }
  }, {
    key: _activeFinishTimer,
    value: function value() {
      var _this3 = this;

      var _this$_timing = this[_timing],
          duration = _this$_timing.duration,
          iterations = _this$_timing.iterations,
          endDelay = _this$_timing.endDelay;
      var delay = Math.ceil(duration * iterations + endDelay - this.timeline.currentTime) + 1;

      if (this[_finishedDefer] && !this[_finishedDefer].timerID) {
        this[_finishedDefer].timerID = this.timeline.setTimeout(function () {
          _this3[_finishedDefer].resolve();

          _this3[_removeDefer](_readyDefer);

          _this3[_removeDefer](_finishedDefer);
        }, {
          delay: delay,
          heading: false
        });
        this[_finishedDefer].reverseTimerID = this.timeline.setTimeout(function () {
          _this3[_finishedDefer].resolve();

          _this3[_removeDefer](_readyDefer);

          _this3[_removeDefer](_finishedDefer);

          _this3.timeline = null;
        }, {
          delay: -this[_timing].delay - 1,
          heading: false
        });
      }
    }
  }, {
    key: "play",
    value: function play() {
      if (this.playState === 'finished') {
        this.cancel();
      }

      if (this.playState === 'idle') {
        if (this.playbackRate <= 0) {
          return;
        }

        var _this$_timing2 = this[_timing],
            delay = _this$_timing2.delay,
            playbackRate = _this$_timing2.playbackRate,
            timeline = _this$_timing2.timeline;
        this.timeline = new sprite_timeline__WEBPACK_IMPORTED_MODULE_2__["default"]({
          originTime: delay,
          playbackRate: playbackRate
        }, timeline);

        this[_activeReadyTimer]();

        this[_activeFinishTimer]();
      } else if (this.playState === 'paused') {
        this.timeline.playbackRate = this.playbackRate;

        this[_activeReadyTimer]();
      }
    }
  }, {
    key: _removeDefer,
    value: function value(deferID) {
      var defered = this[deferID],
          timeline = this.timeline;

      if (defered && timeline) {
        timeline.clearTimeout(defered.timerID);

        if (defered.reverseTimerID) {
          timeline.clearTimeout(defered.reverseTimerID);
        }
      }

      delete this[deferID];
    }
  }, {
    key: "cancel",
    value: function cancel() {
      this[_removeDefer](_readyDefer);

      this[_removeDefer](_finishedDefer);

      this.timeline = null;
    }
  }, {
    key: "finish",
    value: function finish() {
      if (this.timeline) {
        this.timeline.currentTime = Infinity / this.playbackRate;
      }

      this[_removeDefer](_readyDefer);

      this[_removeDefer](_finishedDefer);
    }
  }, {
    key: "applyEffects",
    value: function applyEffects(effects) {
      return Object.assign(this[_effects], effects);
    }
  }, {
    key: "playbackRate",
    get: function get() {
      return this[_timing].playbackRate;
    },
    set: function set(rate) {
      if (this.timeline) {
        this.timeline.playbackRate = rate;
      }

      this[_timing].playbackRate = rate;
    }
  }, {
    key: "playState",
    get: function get() {
      var timeline = this.timeline,
          _this$_timing3 = this[_timing],
          iterations = _this$_timing3.iterations,
          duration = _this$_timing3.duration,
          endDelay = _this$_timing3.endDelay;
      var state = 'running';

      if (timeline == null) {
        state = 'idle';
      } else if (timeline.paused) {
        state = 'paused';
      } else if (timeline.currentTime < 0) {
        // 开始 pending
        state = 'pending';
      } else {
        var ed = timeline.currentTime - iterations * duration;

        if (ed > 0 && ed < endDelay) {
          // 结束 pending
          state = 'pending';
        } else if (ed >= endDelay) {
          state = 'finished';
        }
      }

      return state;
    }
  }, {
    key: "progress",
    get: function get() {
      if (!this.timeline) return 0;
      var _this$_timing4 = this[_timing],
          duration = _this$_timing4.duration,
          iterations = _this$_timing4.iterations;
      var timeline = this.timeline,
          playState = this.playState;
      var p;

      if (playState === 'idle') {
        p = 0;
      } else if (playState === 'paused' && timeline.currentTime < 0) {
        p = 0;
      } else if (playState === 'pending') {
        if (timeline.currentTime < 0) {
          p = 0;
        } else {
          var time = timeline.seekLocalTime(iterations * duration);
          p = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["periodicity"])(time, duration)[1] / duration;
        }
      } else if (playState === 'running' || playState === 'paused') {
        p = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["periodicity"])(timeline.currentTime, duration)[1] / duration;
      }

      if (playState === 'finished') {
        p = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["periodicity"])(iterations, 1)[1];
      }

      return p;
    }
  }, {
    key: "frame",
    get: function get() {
      var playState = this.playState,
          initState = this[_initState],
          fill = this[_timing].fill;

      if (playState === 'idle') {
        return initState;
      }

      var currentTime = this.timeline.currentTime,
          keyframes = this[_keyframes].slice(0);

      var _getProgress = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getProgress"])(this.timeline, this[_timing], this.progress),
          p = _getProgress.p,
          inverted = _getProgress.inverted;

      var frameState = initState;

      if (currentTime < 0 && playState === 'pending') {
        // 在开始前 delay 阶段
        if (fill === 'backwards' || fill === 'both') {
          frameState = inverted ? keyframes[keyframes.length - 1] : keyframes[0];
        }
      } else if (playState !== 'pending' && playState !== 'finished' || fill === 'forwards' || fill === 'both') {
        // 不在 endDelay 或结束状态，或 forwards
        frameState = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getCurrentFrame"])(this[_timing], keyframes, this[_effects], p);
      }

      return frameState;
    }
  }, {
    key: "timing",
    get: function get() {
      return this[_timing];
    }
  }, {
    key: "baseTimeline",
    set: function set(timeline) {
      this[_timing].timeline = timeline;
    },
    get: function get() {
      return this[_timing].timeline;
    }
  }, {
    key: "ready",
    get: function get() {
      if (this[_readyDefer]) {
        return this[_readyDefer].promise;
      }

      if (this.timeline && this.timeline.currentTime >= 0) {
        if (this.playState !== 'paused') {
          return Promise.resolve();
        }
      }

      this[_readyDefer] = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["defer"])();

      if (this.timeline) {
        // 已经在 pending 状态
        this[_activeReadyTimer]();
      }

      if (this[_readyDefer]) {
        return this[_readyDefer].promise;
      }

      return Promise.resolve();
    }
  }, {
    key: "finished",
    get: function get() {
      if (this.playState === 'finished') {
        return Promise.resolve();
      }

      if (!this[_finishedDefer]) {
        this[_finishedDefer] = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["defer"])();

        if (this.timeline) {
          this[_activeFinishTimer]();
        }
      }

      return this[_finishedDefer].promise;
    }
  }]);

  return _default;
}();



/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defer", function() { return defer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "periodicity", function() { return periodicity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateFramesOffset", function() { return calculateFramesOffset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProgress", function() { return getProgress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentFrame", function() { return getCurrentFrame; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _easing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15);
/* harmony import */ var _effect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);



function defer() {
  var ret = {};
  ret.promise = new Promise(function (resolve, reject) {
    ret.resolve = resolve;
    ret.reject = reject;
  });
  return ret;
}
function periodicity(val, dur) {
  var t = Math.floor(val / dur);
  var v = val - t * dur;

  if (v === 0 && t > 0) {
    v = dur;
    t--;
  }

  return [t, v];
}
function calculateFramesOffset(keyframes) {
  keyframes = keyframes.slice(0);
  var firstFrame = keyframes[0],
      lastFrame = keyframes[keyframes.length - 1];
  lastFrame.offset = lastFrame.offset || 1;
  firstFrame.offset = firstFrame.offset || 0;
  var offset = 0,
      offsetFrom = -1;

  for (var i = 0; i < keyframes.length; i++) {
    var frame = keyframes[i];

    if (frame.offset != null) {
      var dis = i - offsetFrom;

      if (dis > 1) {
        var delta = (frame.offset - offset) / dis;

        for (var j = 0; j < dis - 1; j++) {
          keyframes[offsetFrom + j + 1].offset = offset + delta * (j + 1);
        }
      }

      offset = frame.offset;
      offsetFrom = i;
    }

    if (frame.easing != null) {
      frame.easing = Object(_easing__WEBPACK_IMPORTED_MODULE_1__["parseEasing"])(frame.easing);
    }

    if (i > 0) {
      var hasEasing = keyframes[i].easing != null; // 如果中间某个属性没有了，需要从前一帧复制过来

      keyframes[i] = Object.assign({}, keyframes[i - 1], keyframes[i]);

      if (!hasEasing) {
        // easing 不能复制
        delete keyframes[i].easing;
      }
    }
  }

  return keyframes;
}
function getProgress(timeline, timing, p) {
  var currentTime = timeline.currentTime,
      direction = timing.direction,
      duration = timing.duration;
  var inverted = false;

  if (direction === 'reverse') {
    p = 1 - p;
    inverted = true;
  } else if (direction === 'alternate' || direction === 'alternate-reverse') {
    var period = Math.floor(currentTime / duration);
    if (p === 1) period--; // period = Math.max(0, period)

    if (period % 2 ^ direction === 'alternate-reverse') {
      p = 1 - p;
      inverted = true;
    }
  }

  return {
    p: p,
    inverted: inverted
  };
}

function calculateFrame(previousFrame, nextFrame, effects, p) {
  var ret = {};
  Object.entries(nextFrame).forEach(function (_ref) {
    var _ref2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];

    if (key !== 'offset' && key !== 'easing') {
      var effect = effects[key] || effects.default;
      var v = effect(previousFrame[key], value, p, previousFrame.offset, nextFrame.offset);

      if (v != null) {
        ret[key] = v;
      }
    }
  });
  return ret;
}

function getCurrentFrame(timing, keyframes, effects, p) {
  var easing = timing.easing,
      effect = timing.effect;

  if (!effect) {
    // timing.effect 会覆盖掉 Effects 和 animator.applyEffects 中定义的 effects
    effects = Object.assign({}, effects, _effect__WEBPACK_IMPORTED_MODULE_2__["default"]);
  }

  var ret = {};
  p = easing(p, keyframes);

  for (var i = 1; i < keyframes.length; i++) {
    var frame = keyframes[i],
        offset = frame.offset;

    if (offset >= p || i === keyframes.length - 1) {
      var previousFrame = keyframes[i - 1],
          previousOffset = previousFrame.offset,
          _easing = previousFrame.easing;
      var ep = p;

      if (_easing) {
        var d = offset - previousOffset;
        ep = _easing((p - previousOffset) / d) * d + previousOffset;
      }

      if (effect) {
        ret = effect(previousFrame, frame, ep, previousOffset, offset);
      } else {
        ret = calculateFrame(previousFrame, frame, effects, ep);
      }

      break;
    }
  }

  return ret;
}

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(20);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _slicedToArray2 = __webpack_require__(74);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _toArray2 = __webpack_require__(85);

var _toArray3 = _interopRequireDefault(_toArray2);

var _assign = __webpack_require__(86);

var _assign2 = _interopRequireDefault(_assign);

var _classCallCheck2 = __webpack_require__(92);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(93);

var _createClass3 = _interopRequireDefault(_createClass2);

var _symbol = __webpack_require__(97);

var _symbol2 = _interopRequireDefault(_symbol);

var _spriteMath = __webpack_require__(111);

var _platform = __webpack_require__(114);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var parse = __webpack_require__(115);

var abs = __webpack_require__(116);

var normalize = __webpack_require__(117);

var isSvgPath = __webpack_require__(119);

var _path = (0, _symbol2.default)('path');

var _bounds = (0, _symbol2.default)('bounds');

var _savedPaths = (0, _symbol2.default)('savedPaths');

var _renderProps = (0, _symbol2.default)('renderProps');

var _beginPath = (0, _symbol2.default)('beginPath');

var SvgPath = function () {
  function SvgPath(d) {
    (0, _classCallCheck3.default)(this, SvgPath);

    if (!isSvgPath(d)) {
      throw new Error('Not an SVG path!');
    }

    var path = normalize(abs(parse(d)));
    this[_path] = path;
    this[_bounds] = null;
    this[_savedPaths] = [];
    this[_renderProps] = {};
    this[_beginPath] = false;
  }

  (0, _createClass3.default)(SvgPath, [{
    key: 'save',
    value: function save() {
      this[_savedPaths].push({
        path: this[_path],
        bounds: this[_bounds],
        renderProps: (0, _assign2.default)({}, this[_renderProps])
      });

      return this;
    }
  }, {
    key: 'restore',
    value: function restore() {
      if (this[_savedPaths].length) {
        var _savedPaths$pop = this[_savedPaths].pop(),
            path = _savedPaths$pop.path,
            bounds = _savedPaths$pop.bounds,
            renderProps = _savedPaths$pop.renderProps;

        this[_path] = path;
        this[_bounds] = bounds;
        this[_renderProps] = renderProps;
      }

      return this;
    }
  }, {
    key: 'isPointInPath',
    value: function isPointInPath(x, y) {
      return (0, _platform.isPointInPath)(this, x, y);
    }
  }, {
    key: 'getPointAtLength',
    value: function getPointAtLength(len) {
      return (0, _platform.getPointAtLength)(this.d, len);
    }
  }, {
    key: 'getTotalLength',
    value: function getTotalLength() {
      return (0, _platform.getTotalLength)(this.d);
    }
  }, {
    key: 'transform',
    value: function transform() {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      this[_bounds] = null;
      var m = new _spriteMath.Matrix(args);
      var commands = this[_path];
      this[_path] = commands.map(function (c) {
        var _c = (0, _toArray3.default)(c),
            cmd = _c[0],
            args = _c.slice(1);

        var transformed = [cmd];

        for (var i = 0; i < args.length; i += 2) {
          var x0 = args[i],
              y0 = args[i + 1];

          var _m$transformPoint = m.transformPoint(x0, y0),
              _m$transformPoint2 = (0, _slicedToArray3.default)(_m$transformPoint, 2),
              x = _m$transformPoint2[0],
              y = _m$transformPoint2[1];

          transformed.push(x, y);
        }

        return transformed;
      });
      return this;
    }
  }, {
    key: 'translate',
    value: function translate(x, y) {
      var m = new _spriteMath.Matrix().translate(x, y);
      return this.transform.apply(this, (0, _toConsumableArray3.default)(m.m));
    }
  }, {
    key: 'rotate',
    value: function rotate(deg) {
      var m = new _spriteMath.Matrix().rotate(deg);
      return this.transform.apply(this, (0, _toConsumableArray3.default)(m.m));
    }
  }, {
    key: 'scale',
    value: function scale(sx, sy) {
      if (sy == null) sy = sx;
      var m = new _spriteMath.Matrix().scale(sx, sy);
      return this.transform.apply(this, (0, _toConsumableArray3.default)(m.m));
    }
  }, {
    key: 'skew',
    value: function skew(degX, degY) {
      var m = new _spriteMath.Matrix().skew(degX, degY);
      return this.transform.apply(this, (0, _toConsumableArray3.default)(m.m));
    }
  }, {
    key: 'trim',
    value: function trim() {
      var _bounds2 = (0, _slicedToArray3.default)(this.bounds, 2),
          x = _bounds2[0],
          y = _bounds2[1];

      this.translate(-x, -y);
      return this;
    }
  }, {
    key: 'beginPath',
    value: function beginPath() {
      this[_beginPath] = true;
      return this;
    }
  }, {
    key: 'to',
    value: function to(context) {
      var commands = this[_path];
      var renderProps = this[_renderProps];

      if (commands.length) {
        if (this[_beginPath]) {
          context.beginPath();
        }

        commands.forEach(function (c) {
          var _c2 = (0, _toArray3.default)(c),
              cmd = _c2[0],
              args = _c2.slice(1);

          if (cmd === 'M') {
            context.moveTo.apply(context, (0, _toConsumableArray3.default)(args));
          } else {
            context.bezierCurveTo.apply(context, (0, _toConsumableArray3.default)(args));
          }
        });
      }

      (0, _assign2.default)(context, renderProps);
      return {
        stroke: function stroke() {
          context.stroke();
          return this;
        },
        fill: function fill() {
          context.fill();
          return this;
        }
      };
    }
  }, {
    key: 'strokeStyle',
    value: function strokeStyle(value) {
      this[_renderProps].strokeStyle = value;
      return this;
    }
  }, {
    key: 'fillStyle',
    value: function fillStyle(value) {
      this[_renderProps].fillStyle = value;
      return this;
    }
  }, {
    key: 'lineWidth',
    value: function lineWidth(value) {
      this[_renderProps].lineWidth = value;
      return this;
    }
  }, {
    key: 'lineCap',
    value: function lineCap(value) {
      this[_renderProps].lineCap = value;
      return this;
    }
  }, {
    key: 'lineJoin',
    value: function lineJoin(value) {
      this[_renderProps].lineJoin = value;
      return this;
    }
  }, {
    key: 'bounds',
    get: function get() {
      if (!this[_bounds]) {
        var path = this[_path];
        this[_bounds] = [0, 0, 0, 0];

        if (path.length) {
          var bounds = [Infinity, Infinity, -Infinity, -Infinity];

          for (var i = 0, l = path.length; i < l; i++) {
            var points = path[i].slice(1);

            for (var j = 0; j < points.length; j += 2) {
              if (points[j + 0] < bounds[0]) bounds[0] = points[j + 0];
              if (points[j + 1] < bounds[1]) bounds[1] = points[j + 1];
              if (points[j + 0] > bounds[2]) bounds[2] = points[j + 0];
              if (points[j + 1] > bounds[3]) bounds[3] = points[j + 1];
            }
          }

          this[_bounds] = bounds;
        }
      }

      return this[_bounds];
    }
  }, {
    key: 'size',
    get: function get() {
      var bounds = this.bounds;
      return [bounds[2] - bounds[0], bounds[3] - bounds[1]];
    }
  }, {
    key: 'center',
    get: function get() {
      var _bounds3 = (0, _slicedToArray3.default)(this.bounds, 4),
          x0 = _bounds3[0],
          y0 = _bounds3[1],
          x1 = _bounds3[2],
          y1 = _bounds3[3];

      return [(x0 + x1) / 2, (y0 + y1) / 2];
    }
  }, {
    key: 'd',
    get: function get() {
      return this[_path].map(function (p) {
        var _p = (0, _toArray3.default)(p),
            c = _p[0],
            points = _p.slice(1);

        return c + points.join();
      }).join('');
    }
  }, {
    key: 'path',
    get: function get() {
      return this[_path];
    }
  }]);
  return SvgPath;
}();

exports.default = SvgPath;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__(21);

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(22), __esModule: true };

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(23);
__webpack_require__(67);
module.exports = __webpack_require__(31).Array.from;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(24)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(27)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(25);
var defined = __webpack_require__(26);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 25 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 26 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(28);
var $export = __webpack_require__(29);
var redefine = __webpack_require__(44);
var hide = __webpack_require__(34);
var has = __webpack_require__(45);
var Iterators = __webpack_require__(46);
var $iterCreate = __webpack_require__(47);
var setToStringTag = __webpack_require__(63);
var getPrototypeOf = __webpack_require__(65);
var ITERATOR = __webpack_require__(64)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = (!BUGGY && $native) || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(30);
var core = __webpack_require__(31);
var ctx = __webpack_require__(32);
var hide = __webpack_require__(34);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && key in exports) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 30 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 31 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.3' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(33);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(35);
var createDesc = __webpack_require__(43);
module.exports = __webpack_require__(39) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(36);
var IE8_DOM_DEFINE = __webpack_require__(38);
var toPrimitive = __webpack_require__(42);
var dP = Object.defineProperty;

exports.f = __webpack_require__(39) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(37);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(39) && !__webpack_require__(40)(function () {
  return Object.defineProperty(__webpack_require__(41)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(40)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(37);
var document = __webpack_require__(30).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(37);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(34);


/***/ }),
/* 45 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(48);
var descriptor = __webpack_require__(43);
var setToStringTag = __webpack_require__(63);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(34)(IteratorPrototype, __webpack_require__(64)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(36);
var dPs = __webpack_require__(49);
var enumBugKeys = __webpack_require__(61);
var IE_PROTO = __webpack_require__(58)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(41)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(62).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(35);
var anObject = __webpack_require__(36);
var getKeys = __webpack_require__(50);

module.exports = __webpack_require__(39) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(51);
var enumBugKeys = __webpack_require__(61);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(45);
var toIObject = __webpack_require__(52);
var arrayIndexOf = __webpack_require__(55)(false);
var IE_PROTO = __webpack_require__(58)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(53);
var defined = __webpack_require__(26);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(54);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 54 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(52);
var toLength = __webpack_require__(56);
var toAbsoluteIndex = __webpack_require__(57);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(25);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(25);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(59)('keys');
var uid = __webpack_require__(60);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(30);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),
/* 60 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 61 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(30).document;
module.exports = document && document.documentElement;


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(35).f;
var has = __webpack_require__(45);
var TAG = __webpack_require__(64)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(59)('wks');
var uid = __webpack_require__(60);
var Symbol = __webpack_require__(30).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(45);
var toObject = __webpack_require__(66);
var IE_PROTO = __webpack_require__(58)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(26);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(32);
var $export = __webpack_require__(29);
var toObject = __webpack_require__(66);
var call = __webpack_require__(68);
var isArrayIter = __webpack_require__(69);
var toLength = __webpack_require__(56);
var createProperty = __webpack_require__(70);
var getIterFn = __webpack_require__(71);

$export($export.S + $export.F * !__webpack_require__(73)(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(36);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(46);
var ITERATOR = __webpack_require__(64)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(35);
var createDesc = __webpack_require__(43);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(72);
var ITERATOR = __webpack_require__(64)('iterator');
var Iterators = __webpack_require__(46);
module.exports = __webpack_require__(31).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(54);
var TAG = __webpack_require__(64)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(64)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _isIterable2 = __webpack_require__(75);

var _isIterable3 = _interopRequireDefault(_isIterable2);

var _getIterator2 = __webpack_require__(82);

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if ((0, _isIterable3.default)(Object(arr))) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(76), __esModule: true };

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(77);
__webpack_require__(23);
module.exports = __webpack_require__(81);


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(78);
var global = __webpack_require__(30);
var hide = __webpack_require__(34);
var Iterators = __webpack_require__(46);
var TO_STRING_TAG = __webpack_require__(64)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(79);
var step = __webpack_require__(80);
var Iterators = __webpack_require__(46);
var toIObject = __webpack_require__(52);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(27)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 79 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 80 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(72);
var ITERATOR = __webpack_require__(64)('iterator');
var Iterators = __webpack_require__(46);
module.exports = __webpack_require__(31).isIterable = function (it) {
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    // eslint-disable-next-line no-prototype-builtins
    || Iterators.hasOwnProperty(classof(O));
};


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(83), __esModule: true };

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(77);
__webpack_require__(23);
module.exports = __webpack_require__(84);


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(36);
var get = __webpack_require__(71);
module.exports = __webpack_require__(31).getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__(21);

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  return Array.isArray(arr) ? arr : (0, _from2.default)(arr);
};

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(87), __esModule: true };

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(88);
module.exports = __webpack_require__(31).Object.assign;


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(29);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(89) });


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(50);
var gOPS = __webpack_require__(90);
var pIE = __webpack_require__(91);
var toObject = __webpack_require__(66);
var IObject = __webpack_require__(53);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(40)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),
/* 90 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 91 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(94);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(95), __esModule: true };

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(96);
var $Object = __webpack_require__(31).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(29);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(39), 'Object', { defineProperty: __webpack_require__(35).f });


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(98), __esModule: true };

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(99);
__webpack_require__(108);
__webpack_require__(109);
__webpack_require__(110);
module.exports = __webpack_require__(31).Symbol;


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(30);
var has = __webpack_require__(45);
var DESCRIPTORS = __webpack_require__(39);
var $export = __webpack_require__(29);
var redefine = __webpack_require__(44);
var META = __webpack_require__(100).KEY;
var $fails = __webpack_require__(40);
var shared = __webpack_require__(59);
var setToStringTag = __webpack_require__(63);
var uid = __webpack_require__(60);
var wks = __webpack_require__(64);
var wksExt = __webpack_require__(101);
var wksDefine = __webpack_require__(102);
var enumKeys = __webpack_require__(103);
var isArray = __webpack_require__(104);
var anObject = __webpack_require__(36);
var isObject = __webpack_require__(37);
var toIObject = __webpack_require__(52);
var toPrimitive = __webpack_require__(42);
var createDesc = __webpack_require__(43);
var _create = __webpack_require__(48);
var gOPNExt = __webpack_require__(105);
var $GOPD = __webpack_require__(107);
var $DP = __webpack_require__(35);
var $keys = __webpack_require__(50);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(106).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(91).f = $propertyIsEnumerable;
  __webpack_require__(90).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(28)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(34)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(60)('meta');
var isObject = __webpack_require__(37);
var has = __webpack_require__(45);
var setDesc = __webpack_require__(35).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(40)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(64);


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(30);
var core = __webpack_require__(31);
var LIBRARY = __webpack_require__(28);
var wksExt = __webpack_require__(101);
var defineProperty = __webpack_require__(35).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(50);
var gOPS = __webpack_require__(90);
var pIE = __webpack_require__(91);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(54);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(52);
var gOPN = __webpack_require__(106).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(51);
var hiddenKeys = __webpack_require__(61).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(91);
var createDesc = __webpack_require__(43);
var toIObject = __webpack_require__(52);
var toPrimitive = __webpack_require__(42);
var has = __webpack_require__(45);
var IE8_DOM_DEFINE = __webpack_require__(38);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(39) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 108 */
/***/ (function(module, exports) {



/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(102)('asyncIterator');


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(102)('observable');


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Vector = exports.Matrix = undefined;

var _matrix = __webpack_require__(112);

var _matrix2 = _interopRequireDefault(_matrix);

var _vector = __webpack_require__(113);

var _vector2 = _interopRequireDefault(_vector);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

exports.Matrix = _matrix2.default;
exports.Vector = _vector2.default;

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // from https://github.com/chrisaljoudi/transformatrix.js

/**
  default:
          (1, 0, 0)
          (0, 1, 0)
 */

var Matrix = function Matrix(m) {
  m = m || [1, 0, 0, 1, 0, 0];
  this.m = [m[0], m[1], m[2], m[3], m[4], m[5]];
};

Matrix.prototype.unit = function () {
  this.m = [1, 0, 0, 1, 0, 0];
  return this;
};

Matrix.prototype.multiply = function (m) {
  var m1 = this.m;
  var m2 = void 0;

  if (m instanceof Matrix) {
    m2 = m.m;
  } else {
    m2 = m;
  }

  var m11 = m1[0] * m2[0] + m1[2] * m2[1],
      m12 = m1[1] * m2[0] + m1[3] * m2[1],
      m21 = m1[0] * m2[2] + m1[2] * m2[3],
      m22 = m1[1] * m2[2] + m1[3] * m2[3];
  var dx = m1[0] * m2[4] + m1[2] * m2[5] + m1[4],
      dy = m1[1] * m2[4] + m1[3] * m2[5] + m1[5];
  m1[0] = m11;
  m1[1] = m12;
  m1[2] = m21;
  m1[3] = m22;
  m1[4] = dx;
  m1[5] = dy;
  return this;
};

Matrix.prototype.inverse = function () {
  var inv = new Matrix(this.m),
      invm = inv.m;
  var d = 1 / (invm[0] * invm[3] - invm[1] * invm[2]),
      m0 = invm[3] * d,
      m1 = -invm[1] * d,
      m2 = -invm[2] * d,
      m3 = invm[0] * d,
      m4 = d * (invm[2] * invm[5] - invm[3] * invm[4]),
      m5 = d * (invm[1] * invm[4] - invm[0] * invm[5]);
  invm[0] = m0;
  invm[1] = m1;
  invm[2] = m2;
  invm[3] = m3;
  invm[4] = m4;
  invm[5] = m5;
  return inv;
};
/**
  (1, 0, sx)
  (0, 1, sy)
 * */


Matrix.prototype.translate = function (x, y) {
  return this.multiply([1, 0, 0, 1, x, y]);
};
/**
    (cos, -sin, 0)
    (sin, cos, 0)
 */


Matrix.prototype.rotate = function (deg) {
  var rad = deg * Math.PI / 180,
      c = Math.cos(rad),
      s = Math.sin(rad);
  return this.multiply([c, s, -s, c, 0, 0]);
};
/**
    (1, tx, 0)
    (ty, 1, 0)
 */


Matrix.prototype.skew = function (degX, degY) {
  degY |= 0;
  var radX = degX * Math.PI / 180,
      radY = degY * Math.PI / 180;
  var tx = Math.tan(radX),
      ty = Math.tan(radY);
  return this.multiply([1, ty, tx, 1, 0, 0]);
};
/**
  (sx, 0, 0)
  (0, sy, 0)
 */


Matrix.prototype.scale = function (sx, sy) {
  return this.multiply([sx, 0, 0, sy, 0, 0]);
};

Matrix.prototype.transformPoint = function (px, py) {
  var x = px,
      y = py;
  px = x * this.m[0] + y * this.m[2] + this.m[4];
  py = x * this.m[1] + y * this.m[3] + this.m[5];
  return [px, py];
};

Matrix.prototype.transformVector = function (px, py) {
  var x = px,
      y = py;
  px = x * this.m[0] + y * this.m[2];
  py = x * this.m[1] + y * this.m[3];
  return [px, py];
};

exports.default = Matrix;

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray2 = __webpack_require__(74);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _classCallCheck2 = __webpack_require__(92);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(93);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var Vector = function () {
  function Vector(p1) {
    var p2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [0, 0, 0];
    (0, _classCallCheck3.default)(this, Vector);

    var _p = (0, _slicedToArray3.default)(p1, 3),
        x1 = _p[0],
        y1 = _p[1],
        z1 = _p[2],
        _p2 = (0, _slicedToArray3.default)(p2, 3),
        x2 = _p2[0],
        y2 = _p2[1],
        z2 = _p2[2];

    z1 = z1 || 0;
    z2 = z2 || 0;
    this.x = x1 - x2;
    this.y = y1 - y2;
    this.z = z1 - z2;
  }

  (0, _createClass3.default)(Vector, [{
    key: "unit",
    value: function unit() {
      var length = this.length;
      return new Vector([this.x / length, this.y / length, this.z / length]);
    }
  }, {
    key: "dot",
    value: function dot(v) {
      return this.x * v.x + this.y * v.y + this.z * v.z;
    }
  }, {
    key: "cross",
    value: function cross(v) {
      var x1 = this.x,
          y1 = this.y,
          z1 = this.z,
          x2 = v.x,
          y2 = v.y,
          z2 = v.z;
      return new Vector([y1 * z2 - z1 * y2, z1 * x2 - x1 * z2, x1 * y2 - x2 * y1]);
    }
  }, {
    key: "length",
    get: function get() {
      var x = this.x,
          y = this.y,
          z = this.z;
      return Math.sqrt(x * x + y * y + z * z);
    }
  }]);
  return Vector;
}();

exports.default = Vector;

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPointAtLength = getPointAtLength;
exports.getTotalLength = getTotalLength;
exports.isPointInPath = isPointInPath;

function createSvgPath(d) {
  var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute('d', d);
  return path;
}

function getPointAtLength(d, len) {
  var path = createSvgPath(d);

  var _path$getPointAtLengt = path.getPointAtLength(len),
      x = _path$getPointAtLengt.x,
      y = _path$getPointAtLengt.y;

  return [x, y];
}

function getTotalLength(d, len) {
  var path = createSvgPath(d);
  return path.getTotalLength(len);
}

function isPointInPath(_ref, x, y) {
  var d = _ref.d;
  var path = new Path2D(d);
  var context = document.createElement('canvas').getContext('2d');
  return context.isPointInPath(path, x, y);
}

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // https://github.com/jkroso/parse-svg-path

module.exports = parse;
/**
 * expected argument lengths
 * @type {Object}
 */

/* eslint-disable */

var length = {
  a: 7,
  c: 6,
  h: 1,
  l: 2,
  m: 2,
  q: 4,
  s: 4,
  t: 2,
  v: 1,
  z: 0
  /**
   * segment pattern
   * @type {RegExp}
   */

};
var segment = /([astvzqmhlc])([^astvzqmhlc]*)/ig;
/**
 * parse an svg path data string. Generates an Array
 * of commands where each command is an Array of the
 * form `[command, arg1, arg2, ...]`
 *
 * @param {String} path
 * @return {Array}
 */

function parse(path) {
  var data = [];
  path.replace(segment, function (_, command, args) {
    var type = command.toLowerCase();
    args = parseValues(args); // overloaded moveTo

    if (type == 'm' && args.length > 2) {
      data.push([command].concat(args.splice(0, 2)));
      type = 'l';
      command = command == 'm' ? 'l' : 'L';
    }

    while (true) {
      if (args.length == length[type]) {
        args.unshift(command);
        return data.push(args);
      }

      if (args.length < length[type]) throw new Error('malformed path data');
      data.push([command].concat(args.splice(0, length[type])));
    }
  });
  return data;
}

var number = /-?[0-9]*\.?[0-9]+(?:e[-+]?\d+)?/ig;

function parseValues(args) {
  var numbers = args.match(number);
  return numbers ? numbers.map(Number) : [];
}
/* eslint-enable */

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // https://github.com/jkroso/abs-svg-path

module.exports = absolutize;
/**
 * redefine `path` with absolute coordinates
 *
 * @param {Array} path
 * @return {Array}
 */

/* eslint-disable */

function absolutize(path) {
  var startX = 0;
  var startY = 0;
  var x = 0;
  var y = 0;
  return path.map(function (seg) {
    seg = seg.slice();
    var type = seg[0];
    var command = type.toUpperCase(); // is relative

    if (type != command) {
      seg[0] = command;

      switch (type) {
        case 'a':
          seg[6] += x;
          seg[7] += y;
          break;

        case 'v':
          seg[1] += y;
          break;

        case 'h':
          seg[1] += x;
          break;

        default:
          for (var i = 1; i < seg.length;) {
            seg[i++] += x;
            seg[i++] += y;
          }

      }
    } // update cursor state


    switch (command) {
      case 'Z':
        x = startX;
        y = startY;
        break;

      case 'H':
        x = seg[1];
        break;

      case 'V':
        y = seg[1];
        break;

      case 'M':
        x = startX = seg[1];
        y = startY = seg[2];
        break;

      default:
        x = seg[seg.length - 2];
        y = seg[seg.length - 1];
    }

    return seg;
  });
}
/* eslint-enable */

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray2 = __webpack_require__(74);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} // https://github.com/jkroso/normalize-svg-path


module.exports = normalize;

var a2c = __webpack_require__(118);
/* eslint-disable */


function normalize(path) {
  // init state
  var prev;
  var result = [];
  var bezierX = 0;
  var bezierY = 0;
  var startX = 0;
  var startY = 0;
  var quadX = null;
  var quadY = null;
  var x = 0;
  var y = 0;

  for (var i = 0, len = path.length; i < len; i++) {
    var seg = path[i];
    var command = seg[0];

    switch (command) {
      case 'M':
        startX = seg[1];
        startY = seg[2];
        break;

      case 'A':
        var curves = a2c(x, y, seg[6], seg[7], seg[4], seg[5], seg[1], seg[2], seg[3]);
        if (!curves.length) continue;
        curves = curves.map(function (curve) {
          var _curve = (0, _slicedToArray3.default)(curve, 8),
              x0 = _curve[0],
              y0 = _curve[1],
              x1 = _curve[2],
              y1 = _curve[3],
              x2 = _curve[4],
              y2 = _curve[5],
              x = _curve[6],
              y = _curve[7];

          return {
            x1: x1,
            y1: y1,
            x2: x2,
            y2: y2,
            x: x,
            y: y
          };
        });

        for (var j = 0, c; j < curves.length; j++) {
          c = curves[j];
          seg = ['C', c.x1, c.y1, c.x2, c.y2, c.x, c.y];
          if (j < curves.length - 1) result.push(seg);
        }

        break;

      case 'S':
        // default control point
        var cx = x;
        var cy = y;

        if (prev == 'C' || prev == 'S') {
          cx += cx - bezierX; // reflect the previous command's control

          cy += cy - bezierY; // point relative to the current point
        }

        seg = ['C', cx, cy, seg[1], seg[2], seg[3], seg[4]];
        break;

      case 'T':
        if (prev == 'Q' || prev == 'T') {
          quadX = x * 2 - quadX; // as with 'S' reflect previous control point

          quadY = y * 2 - quadY;
        } else {
          quadX = x;
          quadY = y;
        }

        seg = quadratic(x, y, quadX, quadY, seg[1], seg[2]);
        break;

      case 'Q':
        quadX = seg[1];
        quadY = seg[2];
        seg = quadratic(x, y, seg[1], seg[2], seg[3], seg[4]);
        break;

      case 'L':
        seg = line(x, y, seg[1], seg[2]);
        break;

      case 'H':
        seg = line(x, y, seg[1], y);
        break;

      case 'V':
        seg = line(x, y, x, seg[1]);
        break;

      case 'Z':
        seg = line(x, y, startX, startY);
        break;
    } // update state


    prev = command;
    x = seg[seg.length - 2];
    y = seg[seg.length - 1];

    if (seg.length > 4) {
      bezierX = seg[seg.length - 4];
      bezierY = seg[seg.length - 3];
    } else {
      bezierX = x;
      bezierY = y;
    }

    result.push(seg);
  }

  return result;
}

function line(x1, y1, x2, y2) {
  return ['C', x1, y1, x2, y2, x2, y2];
}

function quadratic(x1, y1, cx, cy, x2, y2) {
  return ['C', x1 / 3 + 2 / 3 * cx, y1 / 3 + 2 / 3 * cy, x2 / 3 + 2 / 3 * cx, y2 / 3 + 2 / 3 * cy, x2, y2];
}
/* eslint-enable */

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // https://github.com/colinmeinke/svg-arc-to-cubic-bezier
//
// Convert an arc to a sequence of cubic bézier curves
//

var TAU = Math.PI * 2;
/* eslint-disable space-infix-ops */
// Calculate an angle between two unit vectors
//
// Since we measure angle between radii of circular arcs,
// we can use simplified math (without length normalization)
//

function unit_vector_angle(ux, uy, vx, vy) {
  var sign = ux * vy - uy * vx < 0 ? -1 : 1;
  var dot = ux * vx + uy * vy; // Add this to work with arbitrary vectors:
  // dot /= Math.sqrt(ux * ux + uy * uy) * Math.sqrt(vx * vx + vy * vy);
  // rounding errors, e.g. -1.0000000000000002 can screw up this

  if (dot > 1.0) {
    dot = 1.0;
  }

  if (dot < -1.0) {
    dot = -1.0;
  }

  return sign * Math.acos(dot);
} // Convert from endpoint to center parameterization,
// see http://www.w3.org/TR/SVG11/implnote.html#ArcImplementationNotes
//
// Return [cx, cy, theta1, delta_theta]
//


function get_arc_center(x1, y1, x2, y2, fa, fs, rx, ry, sin_phi, cos_phi) {
  // Step 1.
  //
  // Moving an ellipse so origin will be the middlepoint between our two
  // points. After that, rotate it to line up ellipse axes with coordinate
  // axes.
  //
  var x1p = cos_phi * (x1 - x2) / 2 + sin_phi * (y1 - y2) / 2;
  var y1p = -sin_phi * (x1 - x2) / 2 + cos_phi * (y1 - y2) / 2;
  var rx_sq = rx * rx;
  var ry_sq = ry * ry;
  var x1p_sq = x1p * x1p;
  var y1p_sq = y1p * y1p; // Step 2.
  //
  // Compute coordinates of the centre of this ellipse (cx', cy')
  // in the new coordinate system.
  //

  var radicant = rx_sq * ry_sq - rx_sq * y1p_sq - ry_sq * x1p_sq;

  if (radicant < 0) {
    // due to rounding errors it might be e.g. -1.3877787807814457e-17
    radicant = 0;
  }

  radicant /= rx_sq * y1p_sq + ry_sq * x1p_sq;
  radicant = Math.sqrt(radicant) * (fa === fs ? -1 : 1);
  var cxp = radicant * rx / ry * y1p;
  var cyp = radicant * -ry / rx * x1p; // Step 3.
  //
  // Transform back to get centre coordinates (cx, cy) in the original
  // coordinate system.
  //

  var cx = cos_phi * cxp - sin_phi * cyp + (x1 + x2) / 2;
  var cy = sin_phi * cxp + cos_phi * cyp + (y1 + y2) / 2; // Step 4.
  //
  // Compute angles (theta1, delta_theta).
  //

  var v1x = (x1p - cxp) / rx;
  var v1y = (y1p - cyp) / ry;
  var v2x = (-x1p - cxp) / rx;
  var v2y = (-y1p - cyp) / ry;
  var theta1 = unit_vector_angle(1, 0, v1x, v1y);
  var delta_theta = unit_vector_angle(v1x, v1y, v2x, v2y);

  if (fs === 0 && delta_theta > 0) {
    delta_theta -= TAU;
  }

  if (fs === 1 && delta_theta < 0) {
    delta_theta += TAU;
  }

  return [cx, cy, theta1, delta_theta];
} //
// Approximate one unit arc segment with bézier curves,
// see http://math.stackexchange.com/questions/873224
//


function approximate_unit_arc(theta1, delta_theta) {
  var alpha = 4 / 3 * Math.tan(delta_theta / 4);
  var x1 = Math.cos(theta1);
  var y1 = Math.sin(theta1);
  var x2 = Math.cos(theta1 + delta_theta);
  var y2 = Math.sin(theta1 + delta_theta);
  return [x1, y1, x1 - y1 * alpha, y1 + x1 * alpha, x2 + y2 * alpha, y2 - x2 * alpha, x2, y2];
}

module.exports = function a2c(x1, y1, x2, y2, fa, fs, rx, ry, phi) {
  var sin_phi = Math.sin(phi * TAU / 360);
  var cos_phi = Math.cos(phi * TAU / 360); // Make sure radii are valid
  //

  var x1p = cos_phi * (x1 - x2) / 2 + sin_phi * (y1 - y2) / 2;
  var y1p = -sin_phi * (x1 - x2) / 2 + cos_phi * (y1 - y2) / 2;

  if (x1p === 0 && y1p === 0) {
    // we're asked to draw line to itself
    return [];
  }

  if (rx === 0 || ry === 0) {
    // one of the radii is zero
    return [];
  } // Compensate out-of-range radii
  //


  rx = Math.abs(rx);
  ry = Math.abs(ry);
  var lambda = x1p * x1p / (rx * rx) + y1p * y1p / (ry * ry);

  if (lambda > 1) {
    rx *= Math.sqrt(lambda);
    ry *= Math.sqrt(lambda);
  } // Get center parameters (cx, cy, theta1, delta_theta)
  //


  var cc = get_arc_center(x1, y1, x2, y2, fa, fs, rx, ry, sin_phi, cos_phi);
  var result = [];
  var theta1 = cc[2];
  var delta_theta = cc[3]; // Split an arc to multiple segments, so each segment
  // will be less than τ/4 (= 90°)
  //

  var segments = Math.max(Math.ceil(Math.abs(delta_theta) / (TAU / 4)), 1);
  delta_theta /= segments;

  for (var i = 0; i < segments; i++) {
    result.push(approximate_unit_arc(theta1, delta_theta));
    theta1 += delta_theta;
  } // We have a bezier approximation of a unit circle,
  // now need to transform back to the original ellipse
  //


  return result.map(function (curve) {
    for (var _i = 0; _i < curve.length; _i += 2) {
      var x = curve[_i + 0];
      var y = curve[_i + 1]; // scale

      x *= rx;
      y *= ry; // rotate

      var xp = cos_phi * x - sin_phi * y;
      var yp = sin_phi * x + cos_phi * y; // translate

      curve[_i + 0] = xp + cc[0];
      curve[_i + 1] = yp + cc[1];
    }

    return curve;
  });
};

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // https://github.com/dy/is-svg-path

module.exports = function isPath(str) {
  if (typeof str !== 'string') return false;
  str = str.trim(); // https://www.w3.org/TR/SVG/paths.html#PathDataBNF

  if (/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(str) && /[\dz]$/i.test(str) && str.length > 4) return true;
  return false;
};

/***/ }),
/* 120 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _parse_font__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(121);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseFont", function() { return _parse_font__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(122);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "appendUnit", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["appendUnit"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Color", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["Color"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fourValuesShortCut", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["fourValuesShortCut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "notice", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["notice"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "oneOrTwoValues", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["oneOrTwoValues"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseColor", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["parseColor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseColorString", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["parseColorString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "praseString", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["praseString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseStringFloat", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["parseStringFloat"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseStringInt", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["parseStringInt"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseStringTransform", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["parseStringTransform"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rectVertices", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["rectVertices"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sortOrderedSprites", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["sortOrderedSprites"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateID", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["generateID"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sizeToPixel", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["sizeToPixel"]; });

/* harmony import */ var _decorators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(127);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cachable", function() { return _decorators__WEBPACK_IMPORTED_MODULE_2__["cachable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "attr", function() { return _decorators__WEBPACK_IMPORTED_MODULE_2__["attr"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deprecate", function() { return _decorators__WEBPACK_IMPORTED_MODULE_2__["deprecate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flow", function() { return _decorators__WEBPACK_IMPORTED_MODULE_2__["flow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "absolute", function() { return _decorators__WEBPACK_IMPORTED_MODULE_2__["absolute"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "relative", function() { return _decorators__WEBPACK_IMPORTED_MODULE_2__["relative"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "inherit", function() { return _decorators__WEBPACK_IMPORTED_MODULE_2__["inherit"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "inheritAttributes", function() { return _decorators__WEBPACK_IMPORTED_MODULE_2__["inheritAttributes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseValue", function() { return _decorators__WEBPACK_IMPORTED_MODULE_2__["parseValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setDeprecation", function() { return _decorators__WEBPACK_IMPORTED_MODULE_2__["setDeprecation"]; });

/* harmony import */ var _helpers_render__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(128);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findColor", function() { return _helpers_render__WEBPACK_IMPORTED_MODULE_3__["findColor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cacheContextPool", function() { return _helpers_render__WEBPACK_IMPORTED_MODULE_3__["cacheContextPool"]; });







/***/ }),
/* 121 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return parseFont; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(122);
// borrow from node-canvas (https://github.com/Automattic/node-canvas)

/**
 * Font RegExp helpers.
 */

var weights = 'bold|bolder|lighter|[1-9]00',
    styles = 'italic|oblique',
    variants = 'small-caps',
    stretches = 'ultra-condensed|extra-condensed|condensed|semi-condensed|semi-expanded|expanded|extra-expanded|ultra-expanded',
    units = 'px|pt|pc|in|cm|mm|em|ex|rem|q|vw|vh|vmax|vmin|%',
    string = "'([^']+)'|\"([^\"]+)\"|([\\w-]|[\u4E00-\u9FA5])+"; // [ [ <‘font-style’> || <font-variant-css21> || <‘font-weight’> || <‘font-stretch’> ]?
//    <‘font-size’> [ / <‘line-height’> ]? <‘font-family’> ]
// https://drafts.csswg.org/css-fonts-3/#font-prop

var weightRe = new RegExp("(".concat(weights, ") +"), 'i');
var styleRe = new RegExp("(".concat(styles, ") +"), 'i');
var variantRe = new RegExp("(".concat(variants, ") +"), 'i');
var stretchRe = new RegExp("(".concat(stretches, ") +"), 'i');
/* eslint-disable prefer-template */

var sizeFamilyRe = new RegExp('([\\d\\.]+)(' + units + ') *' + '((?:' + string + ')( *, *(?:' + string + '))*)');
/* eslint-enable prefer-template */

/**
 * Parse font `str`.
 *
 * @param {String} str
 * @return {Object} Parsed font. `size` is in device units. `unit` is the unit
 *   appearing in the input string.
 * @api private
 */

function parseFont(str, defaultHeight) {
  // Try for required properties first.
  var sizeFamily = sizeFamilyRe.exec(str);
  if (!sizeFamily) return; // invalid
  // Default values and required properties

  var font = {
    weight: 'normal',
    style: 'normal',
    stretch: 'normal',
    variant: 'normal',
    size: parseFloat(sizeFamily[1]),
    unit: sizeFamily[2],
    family: sizeFamily[3].replace(/ *, */g, ',')
  }; // Stop search at `sizeFamily.index`

  var substr = str.substring(0, sizeFamily.index); // Optional, unordered properties.

  var weight = weightRe.exec(substr),
      style = styleRe.exec(substr),
      variant = variantRe.exec(substr),
      stretch = stretchRe.exec(substr);
  if (weight) font.weight = weight[1];
  if (style) font.style = style[1];
  if (variant) font.variant = variant[1];
  if (stretch) font.stretch = stretch[1];
  font.size0 = font.size;
  font.size = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["sizeToPixel"])({
    size: font.size0,
    unit: font.unit
  }, defaultHeight);

  if (font.unit === 'vw' || font.unit === 'vh') {
    if (typeof document !== 'undefined' && document.documentElement) {
      var _document$documentEle = document.documentElement,
          clientWidth = _document$documentEle.clientWidth,
          clientHeight = _document$documentEle.clientHeight;
      var val = font.unit === 'vw' ? clientWidth : clientHeight;
      font.size = val * font.size / 100;
    }
  }

  return font;
}
/* eslint-enable */

/***/ }),
/* 122 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Color", function() { return Color; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseColor", function() { return parseColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseColorString", function() { return parseColorString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseStringTransform", function() { return parseStringTransform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseValuesString", function() { return parseValuesString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "praseString", function() { return praseString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseStringInt", function() { return parseStringInt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseStringFloat", function() { return parseStringFloat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "oneOrTwoValues", function() { return oneOrTwoValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fourValuesShortCut", function() { return fourValuesShortCut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rectVertices", function() { return rectVertices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appendUnit", function() { return appendUnit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortOrderedSprites", function() { return sortOrderedSprites; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notice", function() { return notice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateID", function() { return generateID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sizeToPixel", function() { return sizeToPixel; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);





var colorString = __webpack_require__(123);

var Color =
/*#__PURE__*/
function () {
  function Color(color) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Color);

    if (typeof color === 'string') {
      var _colorString$get = colorString.get(color || 'rgba(0,0,0,1)'),
          model = _colorString$get.model,
          value = _colorString$get.value;

      this.model = model;
      this.value = value;
    } else {
      this.model = color.model;
      this.value = color.value;
    }
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Color, [{
    key: "toString",
    value: function toString() {
      var _this$value = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(this.value, 4),
          a = _this$value[0],
          b = _this$value[1],
          c = _this$value[2],
          d = _this$value[3];

      var model = this.model;

      if (model === 'rgb') {
        return "".concat(model, "a(").concat(a, ",").concat(b, ",").concat(c, ",").concat(d, ")");
      }

      return "".concat(model, "a(").concat(a, ",").concat(b, "%,").concat(c, "%,").concat(d, ")");
    }
  }, {
    key: "str",
    get: function get() {
      return String(this);
    }
  }]);

  return Color;
}();


function parseColor(color) {
  return new Color(color);
}
function parseColorString(color) {
  if (color && typeof color === 'string' && color !== 'inherit') {
    return parseColor(color).toString();
  }

  return color;
}
function parseStringTransform(str) {
  if (typeof str !== 'string') return str;
  var rules = str.match(/(?:^|\s)+((?:scale|rotate|translate|skew|matrix)\([^()]+\))/g);
  var ret = {};

  if (rules) {
    rules.forEach(function (rule) {
      var matched = rule.match(/(scale|rotate|translate|skew|matrix)\(([^()]+)\)/);

      var _matched = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(matched, 3),
          m = _matched[1],
          v = _matched[2];

      if (m === 'rotate') {
        ret[m] = parseStringFloat(v)[0];
      } else {
        ret[m] = parseStringFloat(v);
      }
    });
  }

  return ret;
}
function parseValuesString(str, parser) {
  if (typeof str === 'string' && str !== '' && str !== 'inherit') {
    var values = str.split(/[\s,]+/g);
    return values.map(function (v) {
      var ret = parser ? parser(v) : v;
      return Number.isNaN(ret) ? v : ret;
    });
  }

  return str;
}
function praseString(str) {
  return parseValuesString(str);
}
function parseStringInt(str) {
  return parseValuesString(str, parseInt);
}
function parseStringFloat(str) {
  return parseValuesString(str, function (v) {
    if (v === 'center') return 0.5;
    if (v === 'left' || v === 'top') return 0;
    if (v === 'right' || v === 'bottom') return 1;
    return parseFloat(v);
  });
}
function oneOrTwoValues(val) {
  if (!Array.isArray(val)) {
    return [val, val];
  }

  if (val.length === 1) {
    return [val[0], val[0]];
  }

  return val;
}
function fourValuesShortCut(val) {
  if (!Array.isArray(val)) {
    return [val, val, val, val];
  }

  if (val.length === 1) {
    return [val[0], val[0], val[0], val[0]];
  }

  if (val.length === 2) {
    return [val[0], val[1], val[0], val[1]];
  }

  return _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(val).concat([0, 0, 0, 0]).slice(0, 4);
}
function rectVertices(rect) {
  var _rect = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(rect, 4),
      x = _rect[0],
      y = _rect[1],
      w = _rect[2],
      h = _rect[3];

  return [[x, y], [x + w, y], [x + w, y + h], [x, y + h]];
}
function appendUnit(value) {
  var defaultUnit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'px';

  if (value === '') {
    return value;
  }

  if (typeof value === 'string' && Number.isNaN(Number(value))) {
    return value;
  }

  return value + defaultUnit;
}
function sortOrderedSprites(sprites) {
  var reversed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(sprites).sort(function (a, b) {
    if (reversed) {
      var _ref = [b, a];
      a = _ref[0];
      b = _ref[1];
    }

    if (a.zIndex === b.zIndex) {
      return a.zOrder - b.zOrder;
    }

    return a.zIndex - b.zIndex;
  });
}
var noticed = new Set();
function notice(msg) {
  var level = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'warn';

  if (typeof console !== 'undefined' && !noticed.has(msg)) {
    console[level](msg); // eslint-disable-line no-console

    noticed.add(msg);
  }
}
var IDMap = new WeakMap();
function generateID(obj) {
  if (IDMap.has(obj)) {
    return IDMap.get(obj);
  }

  var id = Math.random().toString(36).slice(2);
  IDMap.set(obj, id);
  return id;
}
function sizeToPixel(value, defaultWidth) {
  // eslint-disable-line complexity
  if (typeof value === 'string') {
    var matched = value.trim().match(/^([\d.]+)(px|pt|pc|in|cm|mm|em|ex|rem|q|vw|vh|vmax|vmin|%)$/);

    if (matched) {
      value = {
        size: parseFloat(matched[1]),
        unit: matched[2]
      };
    } else {
      value = {
        size: parseInt(value, 10),
        unit: 'px'
      };
    }
  }

  var _value = value,
      size = _value.size,
      unit = _value.unit;

  if (unit === 'pt') {
    size /= 0.75;
  } else if (unit === 'pc') {
    size *= 16;
  } else if (unit === 'in') {
    size *= 96;
  } else if (unit === 'cm') {
    size *= 96.0 / 2.54;
  } else if (unit === 'mm') {
    size *= 96.0 / 25.4;
  } else if (unit === 'em' || unit === 'rem' || unit === 'ex') {
    if (!defaultWidth && typeof getComputedStyle === 'function' && typeof document !== 'undefined') {
      var root = getComputedStyle(document.documentElement).fontSize;
      defaultWidth = sizeToPixel(root, 16);
    }

    size *= defaultWidth;
    if (unit === 'ex') size /= 2;
  } else if (unit === 'q') {
    size *= 96.0 / 25.4 / 4;
  } else if (unit === 'vw' || unit === 'vh') {
    if (typeof document !== 'undefined') {
      var val = unit === 'vw' ? document.documentElement.clientWidth : document.documentElement.clientHeight;
      size *= val / 100;
    }
  } else if (unit === 'vmax' || unit === 'vmin') {
    if (typeof document !== 'undefined') {
      var width = document.documentElement.clientWidth;
      var height = document.documentElement.clientHeight;

      if (unit === 'vmax') {
        size *= Math.max(width, height) / 100;
      } else {
        size *= Math.min(width, height) / 100;
      }
    }
  }

  return size;
}

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

/* MIT license */
var colorNames = __webpack_require__(124);
var swizzle = __webpack_require__(125);

var reverseNames = {};

// create a list of reverse color names
for (var name in colorNames) {
	if (colorNames.hasOwnProperty(name)) {
		reverseNames[colorNames[name]] = name;
	}
}

var cs = module.exports = {
	to: {},
	get: {}
};

cs.get = function (string) {
	var prefix = string.substring(0, 3).toLowerCase();
	var val;
	var model;
	switch (prefix) {
		case 'hsl':
			val = cs.get.hsl(string);
			model = 'hsl';
			break;
		case 'hwb':
			val = cs.get.hwb(string);
			model = 'hwb';
			break;
		default:
			val = cs.get.rgb(string);
			model = 'rgb';
			break;
	}

	if (!val) {
		return null;
	}

	return {model: model, value: val};
};

cs.get.rgb = function (string) {
	if (!string) {
		return null;
	}

	var abbr = /^#([a-f0-9]{3,4})$/i;
	var hex = /^#([a-f0-9]{6})([a-f0-9]{2})?$/i;
	var rgba = /^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
	var per = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
	var keyword = /(\D+)/;

	var rgb = [0, 0, 0, 1];
	var match;
	var i;
	var hexAlpha;

	if (match = string.match(hex)) {
		hexAlpha = match[2];
		match = match[1];

		for (i = 0; i < 3; i++) {
			// https://jsperf.com/slice-vs-substr-vs-substring-methods-long-string/19
			var i2 = i * 2;
			rgb[i] = parseInt(match.slice(i2, i2 + 2), 16);
		}

		if (hexAlpha) {
			rgb[3] = Math.round((parseInt(hexAlpha, 16) / 255) * 100) / 100;
		}
	} else if (match = string.match(abbr)) {
		match = match[1];
		hexAlpha = match[3];

		for (i = 0; i < 3; i++) {
			rgb[i] = parseInt(match[i] + match[i], 16);
		}

		if (hexAlpha) {
			rgb[3] = Math.round((parseInt(hexAlpha + hexAlpha, 16) / 255) * 100) / 100;
		}
	} else if (match = string.match(rgba)) {
		for (i = 0; i < 3; i++) {
			rgb[i] = parseInt(match[i + 1], 0);
		}

		if (match[4]) {
			rgb[3] = parseFloat(match[4]);
		}
	} else if (match = string.match(per)) {
		for (i = 0; i < 3; i++) {
			rgb[i] = Math.round(parseFloat(match[i + 1]) * 2.55);
		}

		if (match[4]) {
			rgb[3] = parseFloat(match[4]);
		}
	} else if (match = string.match(keyword)) {
		if (match[1] === 'transparent') {
			return [0, 0, 0, 0];
		}

		rgb = colorNames[match[1]];

		if (!rgb) {
			return null;
		}

		rgb[3] = 1;

		return rgb;
	} else {
		return null;
	}

	for (i = 0; i < 3; i++) {
		rgb[i] = clamp(rgb[i], 0, 255);
	}
	rgb[3] = clamp(rgb[3], 0, 1);

	return rgb;
};

cs.get.hsl = function (string) {
	if (!string) {
		return null;
	}

	var hsl = /^hsla?\(\s*([+-]?(?:\d*\.)?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
	var match = string.match(hsl);

	if (match) {
		var alpha = parseFloat(match[4]);
		var h = (parseFloat(match[1]) + 360) % 360;
		var s = clamp(parseFloat(match[2]), 0, 100);
		var l = clamp(parseFloat(match[3]), 0, 100);
		var a = clamp(isNaN(alpha) ? 1 : alpha, 0, 1);

		return [h, s, l, a];
	}

	return null;
};

cs.get.hwb = function (string) {
	if (!string) {
		return null;
	}

	var hwb = /^hwb\(\s*([+-]?\d*[\.]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
	var match = string.match(hwb);

	if (match) {
		var alpha = parseFloat(match[4]);
		var h = ((parseFloat(match[1]) % 360) + 360) % 360;
		var w = clamp(parseFloat(match[2]), 0, 100);
		var b = clamp(parseFloat(match[3]), 0, 100);
		var a = clamp(isNaN(alpha) ? 1 : alpha, 0, 1);
		return [h, w, b, a];
	}

	return null;
};

cs.to.hex = function () {
	var rgba = swizzle(arguments);

	return (
		'#' +
		hexDouble(rgba[0]) +
		hexDouble(rgba[1]) +
		hexDouble(rgba[2]) +
		(rgba[3] < 1
			? (hexDouble(Math.round(rgba[3] * 255)))
			: '')
	);
};

cs.to.rgb = function () {
	var rgba = swizzle(arguments);

	return rgba.length < 4 || rgba[3] === 1
		? 'rgb(' + Math.round(rgba[0]) + ', ' + Math.round(rgba[1]) + ', ' + Math.round(rgba[2]) + ')'
		: 'rgba(' + Math.round(rgba[0]) + ', ' + Math.round(rgba[1]) + ', ' + Math.round(rgba[2]) + ', ' + rgba[3] + ')';
};

cs.to.rgb.percent = function () {
	var rgba = swizzle(arguments);

	var r = Math.round(rgba[0] / 255 * 100);
	var g = Math.round(rgba[1] / 255 * 100);
	var b = Math.round(rgba[2] / 255 * 100);

	return rgba.length < 4 || rgba[3] === 1
		? 'rgb(' + r + '%, ' + g + '%, ' + b + '%)'
		: 'rgba(' + r + '%, ' + g + '%, ' + b + '%, ' + rgba[3] + ')';
};

cs.to.hsl = function () {
	var hsla = swizzle(arguments);
	return hsla.length < 4 || hsla[3] === 1
		? 'hsl(' + hsla[0] + ', ' + hsla[1] + '%, ' + hsla[2] + '%)'
		: 'hsla(' + hsla[0] + ', ' + hsla[1] + '%, ' + hsla[2] + '%, ' + hsla[3] + ')';
};

// hwb is a bit different than rgb(a) & hsl(a) since there is no alpha specific syntax
// (hwb have alpha optional & 1 is default value)
cs.to.hwb = function () {
	var hwba = swizzle(arguments);

	var a = '';
	if (hwba.length >= 4 && hwba[3] !== 1) {
		a = ', ' + hwba[3];
	}

	return 'hwb(' + hwba[0] + ', ' + hwba[1] + '%, ' + hwba[2] + '%' + a + ')';
};

cs.to.keyword = function (rgb) {
	return reverseNames[rgb.slice(0, 3)];
};

// helpers
function clamp(num, min, max) {
	return Math.min(Math.max(min, num), max);
}

function hexDouble(num) {
	var str = num.toString(16).toUpperCase();
	return (str.length < 2) ? '0' + str : str;
}


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
	"aliceblue": [240, 248, 255],
	"antiquewhite": [250, 235, 215],
	"aqua": [0, 255, 255],
	"aquamarine": [127, 255, 212],
	"azure": [240, 255, 255],
	"beige": [245, 245, 220],
	"bisque": [255, 228, 196],
	"black": [0, 0, 0],
	"blanchedalmond": [255, 235, 205],
	"blue": [0, 0, 255],
	"blueviolet": [138, 43, 226],
	"brown": [165, 42, 42],
	"burlywood": [222, 184, 135],
	"cadetblue": [95, 158, 160],
	"chartreuse": [127, 255, 0],
	"chocolate": [210, 105, 30],
	"coral": [255, 127, 80],
	"cornflowerblue": [100, 149, 237],
	"cornsilk": [255, 248, 220],
	"crimson": [220, 20, 60],
	"cyan": [0, 255, 255],
	"darkblue": [0, 0, 139],
	"darkcyan": [0, 139, 139],
	"darkgoldenrod": [184, 134, 11],
	"darkgray": [169, 169, 169],
	"darkgreen": [0, 100, 0],
	"darkgrey": [169, 169, 169],
	"darkkhaki": [189, 183, 107],
	"darkmagenta": [139, 0, 139],
	"darkolivegreen": [85, 107, 47],
	"darkorange": [255, 140, 0],
	"darkorchid": [153, 50, 204],
	"darkred": [139, 0, 0],
	"darksalmon": [233, 150, 122],
	"darkseagreen": [143, 188, 143],
	"darkslateblue": [72, 61, 139],
	"darkslategray": [47, 79, 79],
	"darkslategrey": [47, 79, 79],
	"darkturquoise": [0, 206, 209],
	"darkviolet": [148, 0, 211],
	"deeppink": [255, 20, 147],
	"deepskyblue": [0, 191, 255],
	"dimgray": [105, 105, 105],
	"dimgrey": [105, 105, 105],
	"dodgerblue": [30, 144, 255],
	"firebrick": [178, 34, 34],
	"floralwhite": [255, 250, 240],
	"forestgreen": [34, 139, 34],
	"fuchsia": [255, 0, 255],
	"gainsboro": [220, 220, 220],
	"ghostwhite": [248, 248, 255],
	"gold": [255, 215, 0],
	"goldenrod": [218, 165, 32],
	"gray": [128, 128, 128],
	"green": [0, 128, 0],
	"greenyellow": [173, 255, 47],
	"grey": [128, 128, 128],
	"honeydew": [240, 255, 240],
	"hotpink": [255, 105, 180],
	"indianred": [205, 92, 92],
	"indigo": [75, 0, 130],
	"ivory": [255, 255, 240],
	"khaki": [240, 230, 140],
	"lavender": [230, 230, 250],
	"lavenderblush": [255, 240, 245],
	"lawngreen": [124, 252, 0],
	"lemonchiffon": [255, 250, 205],
	"lightblue": [173, 216, 230],
	"lightcoral": [240, 128, 128],
	"lightcyan": [224, 255, 255],
	"lightgoldenrodyellow": [250, 250, 210],
	"lightgray": [211, 211, 211],
	"lightgreen": [144, 238, 144],
	"lightgrey": [211, 211, 211],
	"lightpink": [255, 182, 193],
	"lightsalmon": [255, 160, 122],
	"lightseagreen": [32, 178, 170],
	"lightskyblue": [135, 206, 250],
	"lightslategray": [119, 136, 153],
	"lightslategrey": [119, 136, 153],
	"lightsteelblue": [176, 196, 222],
	"lightyellow": [255, 255, 224],
	"lime": [0, 255, 0],
	"limegreen": [50, 205, 50],
	"linen": [250, 240, 230],
	"magenta": [255, 0, 255],
	"maroon": [128, 0, 0],
	"mediumaquamarine": [102, 205, 170],
	"mediumblue": [0, 0, 205],
	"mediumorchid": [186, 85, 211],
	"mediumpurple": [147, 112, 219],
	"mediumseagreen": [60, 179, 113],
	"mediumslateblue": [123, 104, 238],
	"mediumspringgreen": [0, 250, 154],
	"mediumturquoise": [72, 209, 204],
	"mediumvioletred": [199, 21, 133],
	"midnightblue": [25, 25, 112],
	"mintcream": [245, 255, 250],
	"mistyrose": [255, 228, 225],
	"moccasin": [255, 228, 181],
	"navajowhite": [255, 222, 173],
	"navy": [0, 0, 128],
	"oldlace": [253, 245, 230],
	"olive": [128, 128, 0],
	"olivedrab": [107, 142, 35],
	"orange": [255, 165, 0],
	"orangered": [255, 69, 0],
	"orchid": [218, 112, 214],
	"palegoldenrod": [238, 232, 170],
	"palegreen": [152, 251, 152],
	"paleturquoise": [175, 238, 238],
	"palevioletred": [219, 112, 147],
	"papayawhip": [255, 239, 213],
	"peachpuff": [255, 218, 185],
	"peru": [205, 133, 63],
	"pink": [255, 192, 203],
	"plum": [221, 160, 221],
	"powderblue": [176, 224, 230],
	"purple": [128, 0, 128],
	"rebeccapurple": [102, 51, 153],
	"red": [255, 0, 0],
	"rosybrown": [188, 143, 143],
	"royalblue": [65, 105, 225],
	"saddlebrown": [139, 69, 19],
	"salmon": [250, 128, 114],
	"sandybrown": [244, 164, 96],
	"seagreen": [46, 139, 87],
	"seashell": [255, 245, 238],
	"sienna": [160, 82, 45],
	"silver": [192, 192, 192],
	"skyblue": [135, 206, 235],
	"slateblue": [106, 90, 205],
	"slategray": [112, 128, 144],
	"slategrey": [112, 128, 144],
	"snow": [255, 250, 250],
	"springgreen": [0, 255, 127],
	"steelblue": [70, 130, 180],
	"tan": [210, 180, 140],
	"teal": [0, 128, 128],
	"thistle": [216, 191, 216],
	"tomato": [255, 99, 71],
	"turquoise": [64, 224, 208],
	"violet": [238, 130, 238],
	"wheat": [245, 222, 179],
	"white": [255, 255, 255],
	"whitesmoke": [245, 245, 245],
	"yellow": [255, 255, 0],
	"yellowgreen": [154, 205, 50]
};


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isArrayish = __webpack_require__(126);

var concat = Array.prototype.concat;
var slice = Array.prototype.slice;

var swizzle = module.exports = function swizzle(args) {
	var results = [];

	for (var i = 0, len = args.length; i < len; i++) {
		var arg = args[i];

		if (isArrayish(arg)) {
			// http://jsperf.com/javascript-array-concat-vs-push/98
			results = concat.call(results, slice.call(arg));
		} else {
			results.push(arg);
		}
	}

	return results;
};

swizzle.wrap = function (fn) {
	return function () {
		return fn(swizzle(arguments));
	};
};


/***/ }),
/* 126 */
/***/ (function(module, exports) {

module.exports = function isArrayish(obj) {
	if (!obj || typeof obj === 'string') {
		return false;
	}

	return obj instanceof Array || Array.isArray(obj) ||
		(obj.length >= 0 && (obj.splice instanceof Function ||
			(Object.getOwnPropertyDescriptor(obj, (obj.length - 1)) && obj.constructor.name !== 'String')));
};


/***/ }),
/* 127 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attr", function() { return attr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cachable", function() { return cachable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inheritAttributes", function() { return inheritAttributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inherit", function() { return inherit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "relative", function() { return relative; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flow", function() { return flow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "absolute", function() { return absolute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDeprecation", function() { return setDeprecation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deprecate", function() { return deprecate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseValue", function() { return parseValue; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(122);


var _attrAbsolute = Symbol('attrAbsolute');

function getPV(subject, relative) {
  var parent = subject.parent;
  var pv = null;

  if (parent) {
    var attrSize = parent.attrSize;

    if (attrSize) {
      var attrV = relative === 'pw' ? attrSize[0] : attrSize[1];

      while (attrSize && attrV === '') {
        // flexible value
        parent = parent.parent;
        attrSize = parent.attrSize;
      }
    }

    if (relative === 'pw') {
      pv = attrSize ? parent.contentSize[0] : parent.resolution[0];
    } else if (relative === 'ph') {
      pv = attrSize ? parent.contentSize[1] : parent.resolution[1];
    }
  }

  return pv;
}

function attr(target, prop, descriptor) {
  var _getter = descriptor.get;

  if (!_getter) {
    _getter = function _getter() {
      return this.get(prop);
    };
  }

  if (!descriptor.__relative && !descriptor.__inherit) {
    descriptor.get = function () {
      var ret = _getter.call(this);

      if (ret == null) {
        ret = this.get(prop);
      }

      return ret;
    };
  } else if (descriptor.__relative) {
    // enable set default to user defined getter
    descriptor.get = function () {
      var ret = _getter.call(this);

      var subject = this.subject;

      if (ret == null) {
        ret = this.get(prop);
      } else if (ret.relative) {
        var _relative = ret.relative.trim();

        if (_relative === 'pw' || _relative === 'ph') {
          var pv = getPV(subject, _relative);

          if (pv !== ret.pv) {
            this[prop] = ret.rv;
            return this[prop];
          }

          subject.cache = null;

          if (subject[_attrAbsolute]) {
            return pv * ret.v;
          }

          return ret.rv;
        }

        if (_relative === 'rw' || _relative === 'rh') {
          var layer = subject.layer;
          var _pv = null;

          if (layer) {
            if (_relative === 'rw') {
              _pv = layer.resolution[0];
            } else if (_relative === 'rh') {
              _pv = layer.resolution[1];
            }
          }

          if (_pv !== ret.pv) {
            this[prop] = ret.rv;
            return this[prop];
          }

          subject.cache = null;

          if (subject[_attrAbsolute]) {
            return _pv * ret.v;
          }

          return ret.rv;
        }
      }

      return ret;
    };
  } else {
    // enable set default to user defined getter
    descriptor.get = function () {
      var ret = _getter.call(this);

      var subject = this.subject;

      if (ret == null) {
        ret = this.get(prop);
      } else if (ret === 'inherit') {
        var value = null;
        var parent = subject.parent;

        while (parent && parent.attr) {
          value = parent.attr(prop);
          if (value != null) break;
          parent = parent.parent;
        }

        return value != null ? value : this.__inheritDefaults[prop]; // return this.__inheritDefaults[prop];
      }

      return ret;
    };
  }

  var _setter = descriptor.set;

  var _clearCache = !descriptor.__cachable;

  descriptor.set = function (val) {
    var subject = this.subject;
    this.__updateTag = false;
    this.__reflowTag = false;
    this.__clearLayout = false;

    _setter.call(this, val);

    if (subject && subject.hasLayout) {
      var offsetSize = subject.boxOffsetSize,
          layoutSize = subject.__lastLayout;

      if (this.__clearLayout || !layoutSize || offsetSize[0] !== layoutSize[0] || offsetSize[1] !== layoutSize[1]) {
        subject.clearLayout();
      }

      subject.__lastLayout = offsetSize;
    }

    if (this.subject && this.__updateTag) {
      subject.forceUpdate(_clearCache);

      if (this.__reflowTag) {
        subject.reflow();
      }
    } // delete this.__reflowTag;
    // delete this.__updateTag;

  };

  return descriptor;
} // after attr

function cachable(target, prop, descriptor) {
  descriptor.__cachable = true;
  return descriptor;
}
var inheritAttributes = new Set(); // after attr

function inherit() {
  var defaultValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return function (target, prop, descriptor) {
    if (!target.hasOwnProperty('__inheritDefaults')) {
      // eslint-disable-line no-prototype-builtins
      target.__inheritDefaults = {}; // Object.assign({}, target.__inheritDefaults);
    }

    target.__inheritDefaults[prop] = defaultValue;
    descriptor.__inherit = true;
    inheritAttributes.add(prop);
    return descriptor;
  };
} // after attr
// relative -> width | height

function relative() {
  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'width';
  return function (target, prop, descriptor) {
    if (descriptor.set) {
      var setter = descriptor.set;
      descriptor.__relative = true;

      descriptor.set = function (val) {
        if (typeof val === 'string') {
          val = val.trim();

          if (val.slice(-1) === '%') {
            var _relative2 = type === 'width' ? 'pw' : 'ph';

            var pv = getPV(this.subject, _relative2);
            val = {
              relative: _relative2,
              pv: pv,
              v: parseFloat(val) / 100,
              rv: val
            };
          } else {
            var _relative3 = val.slice(-2);

            if (_relative3 === 'rw' || _relative3 === 'rh') {
              var _pv2 = null;
              var layer = this.subject.layer;

              if (layer) {
                _pv2 = layer.resolution[_relative3 === 'rw' ? 0 : 1];
              }

              val = {
                relative: _relative3,
                pv: _pv2,
                v: parseFloat(val) / 100,
                rv: val
              };
            } else {
              val = val ? parseFloat(val) : val;
            }
          }
        }

        setter.call(this, val);
      };

      return descriptor;
    }
  };
}
function flow(target, prop, descriptor) {
  if (descriptor.get) {
    var _getter = descriptor.get;

    descriptor.get = function () {
      var ret = this.flow(prop);

      if (ret === undefined) {
        ret = _getter.call(this);
        this.flow(prop, ret);
      }

      return ret;
    };
  }

  return descriptor;
} // set tag force to get absolute value from relative attributes

function absolute(target, prop, descriptor) {
  if (descriptor.get) {
    var _getter = descriptor.get;

    descriptor.get = function () {
      this[_attrAbsolute] = true;

      var ret = _getter.call(this);

      this[_attrAbsolute] = false;
      return ret;
    };
  }

  return descriptor;
}
function setDeprecation(apiName) {
  var msg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  msg = "[Deprecation] ".concat(apiName, " has been deprecated.").concat(msg);
  Object(_utils__WEBPACK_IMPORTED_MODULE_0__["notice"])(msg);
}
function deprecate(apiName) {
  var msg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return function decorator(target, prop, descriptor) {
    apiName = apiName || "".concat(target.constructor.name, "#").concat(prop);

    if (typeof descriptor.value === 'function') {
      var func = descriptor.value;

      descriptor.value = function () {
        setDeprecation(apiName, msg);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return func.apply(this, args);
      };
    }

    if (descriptor.set) {
      var setter = descriptor.set;

      descriptor.set = function (val) {
        setDeprecation(apiName, msg);
        return setter.call(this, val);
      };
    }

    if (descriptor.get) {
      var getter = descriptor.get;

      descriptor.get = function () {
        setDeprecation(apiName, msg);
        return getter.call(this);
      };
    }
  };
} // before attr

function parseValue() {
  for (var _len2 = arguments.length, parsers = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    parsers[_key2] = arguments[_key2];
  }

  return function (target, prop, descriptor) {
    var setter = descriptor.set;

    descriptor.set = function (val) {
      if (val != null && val !== '' && val !== 'inherit') {
        val = parsers.reduce(function (v, parser) {
          return parser(v);
        }, val);
      }

      setter.call(this, val);
    };

    return descriptor;
  };
}

/***/ }),
/* 128 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawRadiusBox", function() { return drawRadiusBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findColor", function() { return findColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cacheContextPool", function() { return cacheContextPool; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);


function drawRadiusBox(context, _ref) {
  var x = _ref.x,
      y = _ref.y,
      w = _ref.w,
      h = _ref.h,
      r = _ref.r;
  // avoid radius larger than width or height
  r = Math.min(r, Math.floor(Math.min(w, h) / 2)); // avoid radius is negative

  r = Math.max(r, 0);
  context.beginPath();
  context.moveTo(x + r, y);
  context.arcTo(x + w, y, x + w, y + h, r);
  context.arcTo(x + w, y + h, x, y + h, r);
  context.arcTo(x, y + h, x, y, r);
  context.arcTo(x, y, x + w, y, r);
  context.closePath();
}
/* istanbul ignore next  */

function gradientBox(angle, rect) {
  var _rect = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(rect, 4),
      x = _rect[0],
      y = _rect[1],
      w = _rect[2],
      h = _rect[3];

  angle %= 360;

  if (angle < 0) {
    angle += 360;
  }

  var ret = [x, y, x + w, y + h];

  if (angle >= 0 && angle < 90) {
    var tan = Math.tan(Math.PI * angle / 180);
    var d = tan * w;

    if (d <= h) {
      ret = [x, y, x + w, y + d];
    } else {
      d = h / tan;
      ret = [x, y, x + d, y + h];
    }
  } else if (angle >= 90 && angle < 180) {
    var _tan = Math.tan(Math.PI * (angle - 90) / 180);

    var _d = _tan * h;

    if (_d <= w) {
      ret = [x + w, y, x + w - _d, y + h];
    } else {
      _d = w / _tan;
      ret = [x + w, y, x, y + _d];
    }
  } else if (angle >= 180 && angle < 270) {
    var _tan2 = Math.tan(Math.PI * (angle - 180) / 180);

    var _d2 = _tan2 * w;

    if (_d2 <= h) {
      ret = [x + w, y + h, x, y + h - _d2];
    } else {
      _d2 = h / _tan2;
      ret = [x + w, y + h, x + w - _d2, y];
    }
  } else if (angle >= 270 && angle < 360) {
    var _tan3 = Math.tan(Math.PI * (angle - 270) / 180);

    var _d3 = _tan3 * h;

    if (_d3 <= w) {
      ret = [x, y + h, x + _d3, y];
    } else {
      _d3 = w / _tan3;
      ret = [x, y + h, x + w, y + h - _d3];
    }
  }

  return ret;
}

function findColor(context, sprite, prop) {
  var gradients = sprite.attr('gradients') || {};
  var color = prop === 'border' ? sprite.attr(prop).color : sprite.attr(prop),
      gradient;

  if (gradients[prop]) {
    /* istanbul ignore next */
    gradient = gradients[prop];
  } else if (typeof color !== 'string') {
    gradient = color;
  }

  if (gradient) {
    var _gradient = gradient,
        colors = _gradient.colors,
        vector = _gradient.vector,
        direction = _gradient.direction,
        rect = _gradient.rect;
    /* istanbul ignore if  */

    if (direction != null) {
      if (prop === 'border') {
        rect = rect || [0, 0].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(sprite.outerSize));
      } else {
        var _sprite$attr = sprite.attr('border'),
            borderWidth = _sprite$attr.width;

        rect = rect || [borderWidth, borderWidth].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(sprite.innerSize));
      }

      vector = gradientBox(direction, rect);
    }

    if (vector.length === 4) {
      color = context.createLinearGradient.apply(context, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(vector));
    } else if (vector.length === 6) {
      color = context.createRadialGradient.apply(context, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(vector));
    }
    /* istanbul ignore next  */
    else if (vector.length === 3) {
        // for wxapp
        color = context.createCircularGradient.apply(context, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(vector));
      }
      /* istanbul ignore next  */
      else {
          throw Error('Invalid gradient vector!');
        }

    colors.forEach(function (o) {
      color.addColorStop(o.offset, o.color);
    });
  }

  return color;
}
var contextPool = [],
    maxPollSize = 20;
var cacheContextPool = {
  get: function get(context) {
    if (contextPool.length > 0) {
      return contextPool.pop();
    }

    var canvas = context.canvas;

    if (!canvas || !canvas.cloneNode) {
      return;
    }

    var copied = canvas.cloneNode();
    return copied.getContext('2d');
  },
  put: function put() {
    for (var _len = arguments.length, contexts = new Array(_len), _key = 0; _key < _len; _key++) {
      contexts[_key] = arguments[_key];
    }

    contexts.every(function (context) {
      var ret = contextPool.length < maxPollSize;

      if (ret) {
        context.canvas.width = 0;
        context.canvas.height = 0;
        contextPool.push(context);
      }

      return ret;
    });
  },

  get size() {
    return contextPool.length;
  }

};

/***/ }),
/* 129 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BaseSprite; });
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(130);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(131);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(132);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(133);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(134);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(136);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(138);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(139);
/* harmony import */ var _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var sprite_math__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(111);
/* harmony import */ var sprite_math__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(sprite_math__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var sprite_animator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(120);
/* harmony import */ var _baseattr__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(140);
/* harmony import */ var _basenode__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(142);
/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(143);
/* harmony import */ var _helpers_render__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(128);
/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(146);













var _dec, _class, _class2, _temp;










var _animations = Symbol('animations'),
    _cachePriority = Symbol('cachePriority'),
    _effects = Symbol('effects'),
    _flow = Symbol('flow'),
    _changeStateAction = Symbol('changeStateAction'),
    _releaseKeys = Symbol('releaseKeys');

var CACHE_PRIORITY_THRESHOLDS = 0; // disable cache_priority, for canvas drawing bug...

var BaseSprite = (_dec = Object(_utils__WEBPACK_IMPORTED_MODULE_14__["deprecate"])('Instead use sprite.cache = null'), (_class = (_temp = _class2 =
/*#__PURE__*/
function (_BaseNode) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8___default()(BaseSprite, _BaseNode);

  /**
    new Sprite({
      attr: {
        ...
      }
    })
   */
  function BaseSprite(attrs) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, BaseSprite);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(BaseSprite).call(this, attrs));
    _this[_animations] = new Set();
    _this[_cachePriority] = 0;
    _this[_flow] = {};
    _this[_releaseKeys] = new Set();
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(BaseSprite, [{
    key: "setReleaseKey",
    value: function setReleaseKey(key) {
      this[_releaseKeys].add(key);
    }
  }, {
    key: "reflow",
    value: function reflow() {
      this[_flow] = {};
    }
  }, {
    key: "flow",
    value: function flow(prop, value) {
      if (value === undefined) {
        return this[_flow][prop];
      }

      this[_flow][prop] = value;
    }
  }, {
    key: "isVisible",
    value: function isVisible() {
      if (!this.parent) return false;
      var display = this.attr('display');

      if (display === 'none') {
        return false;
      }

      var opacity = this.attr('opacity');

      if (opacity <= 0) {
        return false;
      }

      if (this.isVirtual) return true;

      var _this$offsetSize = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_11___default()(this.offsetSize, 2),
          width = _this$offsetSize[0],
          height = _this$offsetSize[1];

      if (width <= 0 || height <= 0) {
        return false;
      }

      if (this.parent.isVisible) {
        return this.parent.isVisible();
      }

      return true;
    }
  }, {
    key: "transition",
    value: function transition(sec) {
      var _ref5;

      var easing = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'linear';
      var isStyleAnim = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      var that = this,
          _animation = Symbol('animation');

      easing = easing || 'linear';
      var delay = 0;

      if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2___default()(sec) === 'object') {
        delay = sec.delay || 0;
        sec = sec.duration;
      }

      return _ref5 = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(_ref5, _animation, null), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(_ref5, "cancel", function cancel() {
        var preserveState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var animation = this[_animation];

        if (animation) {
          animation.cancel(preserveState);
        }
      }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(_ref5, "end", function end() {
        var animation = this[_animation];

        if (animation && (animation.playState === 'running' || animation.playState === 'pending')) {
          animation.finish();
        }
      }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(_ref5, "reverse", function reverse() {
        var animation = this[_animation];

        if (animation) {
          if (animation.playState === 'running' || animation.playState === 'pending') {
            animation.playbackRate = -animation.playbackRate;
          } else {
            var direction = animation.timing.direction;
            animation.timing.direction = direction === 'reverse' ? 'normal' : 'reverse';
            animation.play();
          }
        }

        return animation.finished;
      }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(_ref5, "attr", function attr(prop, val) {
        this.end();

        if (typeof prop === 'string') {
          prop = _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()({}, prop, val);
        }

        Object.entries(prop).forEach(function (_ref3) {
          var _ref4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_11___default()(_ref3, 2),
              key = _ref4[0],
              value = _ref4[1];

          if (typeof value === 'function') {
            prop[key] = value(that.attr(key));
          }
        });
        this[_animation] = that.animate([prop], {
          duration: sec * 1000,
          delay: delay * 1000,
          fill: 'forwards',
          easing: easing
        }, isStyleAnim);
        return this[_animation].finished;
      }), _ref5;
    }
  }, {
    key: "animate",
    value: function animate(frames, timing) {
      var _this2 = this;

      var isStyleAnim = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var setter = null;

      if (isStyleAnim) {
        setter = function setter(frame, target) {
          target.__attr.__styleTag = true;
          target.attr(frame);
          target.__attr.__styleTag = false;
        };
      }

      var animation = new _animation__WEBPACK_IMPORTED_MODULE_17__["default"](this, frames, timing, setter);
      if (this[_effects]) animation.applyEffects(this[_effects]);

      if (this.layer) {
        animation.baseTimeline = this.layer.timeline;
        animation.play();
        animation.finished.then(function () {
          _this2[_animations].delete(animation);
        });
      }

      this[_animations].add(animation);

      return animation;
    }
  }, {
    key: "changeState",
    value: function changeState(fromState, toState, action) {
      var _this3 = this;

      var animation;

      if (this[_changeStateAction]) {
        var currentAnim = this[_changeStateAction].animation;

        if (this[_changeStateAction].reversable && (currentAnim.playState === 'running' || currentAnim.playState === 'pending') && this[_changeStateAction].fromState === toState && this[_changeStateAction].toState === fromState) {
          currentAnim.playbackRate = -currentAnim.playbackRate;
          animation = currentAnim;
          animation.__reversed = this[_changeStateAction].action;
        } else {
          currentAnim.finish();
        }
      }

      if (!animation) {
        // const [_fromState, _toState] = [Object.assign({}, fromState), Object.assign({}, toState)];
        // delete _fromState.__default;
        // delete _toState.__default;
        var _fromState = {},
            _toState = {};
        Object.entries(fromState || {}).forEach(function (_ref6) {
          var _ref7 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_11___default()(_ref6, 2),
              key = _ref7[0],
              value = _ref7[1];

          if (key !== '__default') {
            if (typeof value === 'function') {
              _fromState[key] = _this3.attr(key);
            } else {
              _fromState[key] = value;
            }
          }
        });
        Object.entries(toState || {}).forEach(function (_ref8) {
          var _ref9 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_11___default()(_ref8, 2),
              key = _ref9[0],
              value = _ref9[1];

          if (key !== '__default') {
            if (typeof value === 'function') {
              _toState[key] = value(_this3.attr(key));
            } else {
              _toState[key] = value;
            }
          }
        });
        animation = this.animate([_fromState, _toState], Object.assign({
          fill: 'forwards'
        }, action));
        animation.finished.then(function () {
          if (_this3[_changeStateAction] && _this3[_changeStateAction].animation === animation) delete _this3[_changeStateAction];
        });
      }

      this[_changeStateAction] = {
        animation: animation,
        fromState: fromState,
        toState: toState,
        action: action,
        reversable: action.reversable !== false
      };
      return animation;
    }
  }, {
    key: "connect",
    value: function connect(parent) {
      var _this4 = this;

      var zOrder = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      if (parent && !(parent instanceof _basenode__WEBPACK_IMPORTED_MODULE_16__["default"])) {
        var node = new _basenode__WEBPACK_IMPORTED_MODULE_16__["default"]();
        node.context = parent;
        node.timeline = new sprite_animator__WEBPACK_IMPORTED_MODULE_13__["Timeline"]();

        node.update = function () {
          var currentTime = this.timeline.currentTime;
          node.dispatchEvent('update', {
            target: this,
            timeline: this.timeline,
            renderTime: currentTime
          }, true, true);
        };

        parent = node;
      }

      var ret = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(BaseSprite.prototype), "connect", this).call(this, parent, zOrder);

      Object.defineProperty(this, 'context', {
        get: function get() {
          return parent.cache || parent.context;
        },
        configurable: true
      });

      this[_animations].forEach(function (animation) {
        if (parent.layer) {
          animation.baseTimeline = parent.layer.timeline;
        }

        animation.play();
        animation.finished.then(function () {
          _this4[_animations].delete(animation);
        });
      });

      if (this.hasLayout) this.clearLayout();
      this.reflow();
      return ret;
    }
  }, {
    key: "disconnect",
    value: function disconnect(parent) {
      var _this5 = this;

      this[_animations].forEach(function (animation) {
        return animation.cancel();
      });

      if (this.cache) {
        this.cache = null;
      }

      if (this.hasLayout) this.clearLayout();
      this.reflow();

      var ret = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(BaseSprite.prototype), "disconnect", this).call(this, parent);

      delete this.context;

      _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(this[_releaseKeys]).forEach(function (key) {
        return delete _this5[key];
      });

      return ret;
    }
  }, {
    key: "getParentXY",
    value: function getParentXY() {
      var lx = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var ly = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var layer = this.layer;
      if (!layer) return [0, 0];
      var parents = [];
      var target = this.parent;

      while (target && target !== layer) {
        parents.push(target);
        target = target.parent;
      }

      parents.reverse();
      var parentX = lx,
          parentY = ly;
      parents.forEach(function (node) {
        var scrollLeft = node.attr('scrollLeft'),
            scrollTop = node.attr('scrollTop'),
            borderWidth = node.attr('border').width,
            padding = node.attr('padding');

        var _node$pointToOffset = node.pointToOffset(parentX, parentY);

        var _node$pointToOffset2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_11___default()(_node$pointToOffset, 2);

        parentX = _node$pointToOffset2[0];
        parentY = _node$pointToOffset2[1];
        parentX = parentX - node.originalRect[0] - borderWidth - padding[3] + scrollLeft;
        parentY = parentY - node.originalRect[1] - borderWidth - padding[0] + scrollTop;
      });
      return [parentX, parentY];
    }
  }, {
    key: "getLayerXY",
    value: function getLayerXY() {
      var dx = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var dy = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var layer = this.layer;
      if (!layer) return [0, 0];
      var target = this;
      var x = dx,
          y = dy;

      while (target && target !== layer) {
        var _target$offsetToPoint = target.offsetToPoint(x, y);

        var _target$offsetToPoint2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_11___default()(_target$offsetToPoint, 2);

        x = _target$offsetToPoint2[0];
        y = _target$offsetToPoint2[1];
        var parent = target.parent;

        if (parent !== layer) {
          var borderWidth = parent.attr('border').width;
          var padding = parent.attr('padding'),
              scrollLeft = parent.attr('scrollLeft') || 0,
              scrollTop = parent.attr('scrollTop') || 0; // const parentX = evt.offsetX - this.originalRect[0] - borderWidth - padding[3] + scrollLeft
          // const parentY = evt.offsetY - this.originalRect[1] - borderWidth - padding[0] + scrollTop

          x = x + parent.originalRect[0] + borderWidth + padding[3] - scrollLeft;
          y = y + parent.originalRect[1] + borderWidth + padding[0] - scrollTop;
        }

        target = parent;
      }

      return [x, y];
    }
  }, {
    key: "clearCache",
    value: function clearCache() {
      this.cache = null;
    }
  }, {
    key: "appendTo",
    value: function appendTo(parent) {
      parent.appendChild(this);
    }
  }, {
    key: "forceUpdate",
    value: function forceUpdate() {
      var clearCache = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (clearCache) {
        this.cache = null;
      }

      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(BaseSprite.prototype), "forceUpdate", this).call(this);
    } // layer position to sprite offset

  }, {
    key: "pointToOffset",
    value: function pointToOffset(x, y) {
      var _this$xy = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_11___default()(this.xy, 2),
          x0 = _this$xy[0],
          y0 = _this$xy[1];

      var dx = x - x0,
          dy = y - y0;
      var transform = this.transform;
      return transform.inverse().transformPoint(dx, dy);
    }
  }, {
    key: "offsetToPoint",
    value: function offsetToPoint(dx, dy) {
      var transform = this.transform;

      var _this$xy2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_11___default()(this.xy, 2),
          x0 = _this$xy2[0],
          y0 = _this$xy2[1];

      var _transform$transformP = transform.transformPoint(dx, dy),
          _transform$transformP2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_11___default()(_transform$transformP, 2),
          x = _transform$transformP2[0],
          y = _transform$transformP2[1];

      return [x + x0, y + y0];
    }
  }, {
    key: "getOffsetXY",
    value: function getOffsetXY(evt) {
      var parentX, parentY;

      if (evt.parentX != null) {
        // group
        parentX = evt.parentX;
        parentY = evt.parentY;
      } else {
        parentX = evt.layerX;
        parentY = evt.layerY;
      }

      if (parentX != null && parentY != null) {
        return this.pointToOffset(parentX, parentY);
      }
    }
  }, {
    key: "dispatchEvent",
    value: function dispatchEvent(type, evt) {
      var collisionState = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var swallow = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

      if (collisionState) {
        var offsetXY = this.getOffsetXY(evt);

        if (offsetXY) {
          evt.offsetX = offsetXY[0];
          evt.offsetY = offsetXY[1];
        }
      }

      return _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(BaseSprite.prototype), "dispatchEvent", this).call(this, type, evt, collisionState, swallow);
    }
  }, {
    key: "pointCollision",
    value: function pointCollision(evt) {
      /* istanbul ignore if */
      if (!this.isVisible()) {
        return false;
      }

      var offsetXY = this.getOffsetXY(evt);
      if (!offsetXY) return true;

      var _offsetXY = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_11___default()(offsetXY, 2),
          nx = _offsetXY[0],
          ny = _offsetXY[1];

      evt.offsetX = nx;
      evt.offsetY = ny;

      var _this$originalRect = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_11___default()(this.originalRect, 4),
          ox = _this$originalRect[0],
          oy = _this$originalRect[1],
          ow = _this$originalRect[2],
          oh = _this$originalRect[3];

      if (nx >= ox && nx - ox < ow && ny >= oy && ny - oy < oh) {
        if (this.context && this.context.isPointInPath) {
          var borderWidth = this.attr('border').width,
              borderRadius = this.attr('borderRadius');

          if (borderWidth || borderRadius) {
            var _this$outerSize = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_11___default()(this.outerSize, 2),
                width = _this$outerSize[0],
                height = _this$outerSize[1];

            var _ref10 = [0, 0, width, height, Math.max(0, borderRadius + borderWidth / 2)],
                x = _ref10[0],
                y = _ref10[1],
                w = _ref10[2],
                h = _ref10[3],
                r = _ref10[4];
            Object(_helpers_render__WEBPACK_IMPORTED_MODULE_18__["drawRadiusBox"])(this.context, {
              x: x,
              y: y,
              w: w,
              h: h,
              r: r
            });

            if (this.layer && this.layer.offset) {
              nx += this.layer.offset[0];
              ny += this.layer.offset[1];
            }

            return this.context.isPointInPath(nx - ox, ny - oy);
          }
        }

        return true;
      }
    } // OBB: http://blog.csdn.net/silangquan/article/details/50812425

  }, {
    key: "OBBCollision",
    value: function OBBCollision(sprite) {
      // vertices: [p1, p2, p3, p4]
      var _this$vertices = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_11___default()(this.vertices, 3),
          p11 = _this$vertices[0],
          p12 = _this$vertices[1],
          p13 = _this$vertices[2],
          _sprite$vertices = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_11___default()(sprite.vertices, 3),
          p21 = _sprite$vertices[0],
          p22 = _sprite$vertices[1],
          p23 = _sprite$vertices[2];

      var a1 = new sprite_math__WEBPACK_IMPORTED_MODULE_12__["Vector"](p12, p11).unit(),
          a2 = new sprite_math__WEBPACK_IMPORTED_MODULE_12__["Vector"](p13, p12).unit(),
          a3 = new sprite_math__WEBPACK_IMPORTED_MODULE_12__["Vector"](p22, p21).unit(),
          a4 = new sprite_math__WEBPACK_IMPORTED_MODULE_12__["Vector"](p23, p22).unit(); // The projection of the axis of a vertex in a certain direction

      function verticesProjection(vertices, axis) {
        var _vertices$map = vertices.map(function (v) {
          return axis.dot(new sprite_math__WEBPACK_IMPORTED_MODULE_12__["Vector"](v));
        }),
            _vertices$map2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_11___default()(_vertices$map, 4),
            p1 = _vertices$map2[0],
            p2 = _vertices$map2[1],
            p3 = _vertices$map2[2],
            p4 = _vertices$map2[3];

        return [Math.min(p1, p2, p3, p4), Math.max(p1, p2, p3, p4)];
      }

      function projectionIntersect(p1, p2) {
        var m1 = (p1[0] + p1[1]) / 2,
            l1 = Math.abs(p1[1] - p1[0]),
            m2 = (p2[0] + p2[1]) / 2,
            l2 = Math.abs(p2[1] - p2[0]);
        return Math.abs(m2 - m1) <= (l1 + l2) / 2;
      }

      return projectionIntersect(verticesProjection(this.vertices, a1), verticesProjection(sprite.vertices, a1)) && projectionIntersect(verticesProjection(this.vertices, a2), verticesProjection(sprite.vertices, a2)) && projectionIntersect(verticesProjection(this.vertices, a3), verticesProjection(sprite.vertices, a3)) && projectionIntersect(verticesProjection(this.vertices, a4), verticesProjection(sprite.vertices, a4));
    }
  }, {
    key: "relayout",
    value: function relayout() {}
  }, {
    key: "draw",
    value: function draw(t) {
      var drawingContext = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.context;

      // eslint-disable-line complexity
      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(BaseSprite.prototype), "draw", this).call(this, t, drawingContext);

      if (!this.isVisible()) {
        return;
      }

      var bound = this.originalRect;
      var cachableContext = !this.isVirtual && this.cache;
      var filter = this.attr('filter'),
          shadow = this.attr('shadow'),
          enableCache = this.attr('enableCache') || shadow || filter;
      var ratio = this.layer ? this.layer.displayRatio || 1.0 : 1.0;

      if (enableCache && (shadow || filter || cachableContext !== false) && !cachableContext) {
        cachableContext = _helpers_render__WEBPACK_IMPORTED_MODULE_18__["cacheContextPool"].get(drawingContext);

        if (cachableContext) {
          // +2 to solve 1px problem
          cachableContext.canvas.width = Math.ceil(bound[2] * ratio) + 2;
          cachableContext.canvas.height = Math.ceil(bound[3] * ratio) + 2;
        }
      }

      var evtArgs = {
        context: drawingContext,
        cacheContext: cachableContext,
        target: this,
        renderTime: t,
        fromCache: !!this.cache
      };
      drawingContext.save();
      drawingContext.translate.apply(drawingContext, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(this.xy));
      drawingContext.transform.apply(drawingContext, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(this.transform.m)); // fix for wxapp

      var alpha = drawingContext.globalAlpha != null ? drawingContext.globalAlpha : 1;
      drawingContext.globalAlpha = alpha * this.attr('opacity');

      if (!cachableContext) {
        drawingContext.translate(bound[0], bound[1]);
      } else {
        cachableContext.save(); // solve 1px problem

        cachableContext.translate(bound[0] - Math.floor(bound[0]) + 1, bound[1] - Math.floor(bound[1]) + 1);

        if (ratio !== 1.0) {
          cachableContext.scale(ratio, ratio);
        }
      }

      this.dispatchEvent('beforedraw', evtArgs, true, true);

      if (cachableContext) {
        // set cache before render for group
        if (!this.cache) {
          this.cache = cachableContext;
          this.render(t, cachableContext);
        }
      } else {
        this.render(t, drawingContext);
      }

      if ((shadow || filter) && !cachableContext) {
        console.warn('No cachable context. Shadows and filters have been ignored.');
      }

      if (cachableContext && cachableContext.canvas.width > 0 && cachableContext.canvas.height > 0) {
        if (filter) {
          drawingContext.filter = _filters__WEBPACK_IMPORTED_MODULE_19__["default"].compile(filter);
        }

        if (shadow) {
          var blur = shadow.blur,
              color = shadow.color,
              offset = shadow.offset;
          blur = blur || 1;
          color = color || 'rgba(0,0,0,1)';
          drawingContext.shadowBlur = blur;
          drawingContext.shadowColor = color;

          if (offset) {
            drawingContext.shadowOffsetX = offset[0];
            drawingContext.shadowOffsetY = offset[1];
          }
        }

        drawingContext.drawImage(cachableContext.canvas, Math.floor(bound[0]) - 1, Math.floor(bound[1]) - 1, bound[2] + 2, bound[3] + 2);
      }

      this.dispatchEvent('afterdraw', evtArgs, true, true);

      if (cachableContext) {
        cachableContext.restore();
      }

      drawingContext.restore();
      this[_cachePriority]++;
      return drawingContext;
    }
  }, {
    key: "show",
    value: function show() {
      this.attr('display', this.__originalDisplay || '');
      return this;
    }
  }, {
    key: "hide",
    value: function hide() {
      var display = this.attr('display');

      if (display !== 'none') {
        this.__originalDisplay = display;
        this.attr('display', 'none');
      }

      return this;
    }
  }, {
    key: "render",
    value: function render(t, drawingContext) {
      var border = this.attr('border'),
          borderRadius = this.attr('borderRadius'),
          padding = this.attr('padding'),
          _this$offsetSize2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_11___default()(this.offsetSize, 2),
          offsetWidth = _this$offsetSize2[0],
          offsetHeight = _this$offsetSize2[1],
          _this$clientSize = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_11___default()(this.clientSize, 2),
          clientWidth = _this$clientSize[0],
          clientHeight = _this$clientSize[1];

      if (!this.needRender) {
        drawingContext.translate(padding[3], padding[0]);
        return false;
      }

      var borderWidth = border.width;
      var borderStyle = border.style; // draw border

      if (borderWidth) {
        drawingContext.lineWidth = borderWidth;
        var x = borderWidth / 2,
            y = borderWidth / 2,
            w = offsetWidth - borderWidth,
            h = offsetHeight - borderWidth,
            r = borderRadius;
        Object(_helpers_render__WEBPACK_IMPORTED_MODULE_18__["drawRadiusBox"])(drawingContext, {
          x: x,
          y: y,
          w: w,
          h: h,
          r: r
        });

        if (borderStyle && borderStyle !== 'solid') {
          var dashOffset = this.attr('dashOffset');
          drawingContext.lineDashOffset = dashOffset;

          if (borderStyle === 'dashed') {
            borderStyle = [borderWidth * 3, borderWidth * 3];
          }

          drawingContext.setLineDash(borderStyle);
        }

        drawingContext.strokeStyle = Object(_helpers_render__WEBPACK_IMPORTED_MODULE_18__["findColor"])(drawingContext, this, 'border');
        drawingContext.stroke();
      } // draw bgcolor


      var bgcolor = Object(_helpers_render__WEBPACK_IMPORTED_MODULE_18__["findColor"])(drawingContext, this, 'bgcolor');
      var bgimage = this.attr('bgimage');

      if (this.cache == null || borderWidth || borderRadius || bgcolor || bgimage && bgimage.display !== 'none') {
        var _ref11 = [borderWidth, borderWidth, clientWidth, clientHeight, Math.max(0, borderRadius - borderWidth / 2)],
            _x = _ref11[0],
            _y = _ref11[1],
            _w = _ref11[2],
            _h = _ref11[3],
            _r = _ref11[4];
        Object(_helpers_render__WEBPACK_IMPORTED_MODULE_18__["drawRadiusBox"])(drawingContext, {
          x: _x,
          y: _y,
          w: _w,
          h: _h,
          r: _r
        });

        if (bgcolor) {
          drawingContext.fillStyle = bgcolor;
          drawingContext.fill();
        } // clip is expensive, we should only perform clip when it has to.


        if (bgimage && bgimage.display !== 'none' || borderRadius && (this.nodeType !== 'sprite' || this.textures && this.textures.length)) {
          drawingContext.clip();
        }

        if (bgimage && bgimage.image && bgimage.display !== 'none') {
          drawBgImage(drawingContext, bgimage, borderWidth, offsetWidth, offsetHeight, clientWidth, clientHeight);
        }
      }

      drawingContext.translate(borderWidth + padding[3], borderWidth + padding[0]);
      return true;
    }
  }, {
    key: "hasLayout",
    get: function get() {
      if (this.attr('position') === 'absolute') return false;

      if (this.parent && this.parent.relayout) {
        var display = this.parent.attr('display');
        return display !== '' && display !== 'static';
      }

      return false;
    }
  }, {
    key: "zIndex",
    set: function set(val) {
      this.attr('zIndex', val);
    },
    get: function get() {
      return this.attr('zIndex');
    }
  }, {
    key: "isVirtual",
    get: function get() {
      return false;
    }
  }, {
    key: "transform",
    get: function get() {
      var transform = new sprite_math__WEBPACK_IMPORTED_MODULE_12__["Matrix"](this.__attr.get('transformMatrix'));
      var transformOrigin = this.attr('transformOrigin');

      if (transformOrigin) {
        var t = new sprite_math__WEBPACK_IMPORTED_MODULE_12__["Matrix"]();
        t.translate.apply(t, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(transformOrigin));
        t.multiply(transform);
        t.translate.apply(t, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(transformOrigin.map(function (v) {
          return -v;
        })));
        return t;
      }

      return transform;
    }
  }, {
    key: "animations",
    get: function get() {
      return this[_animations];
    }
  }, {
    key: "xy",
    get: function get() {
      var x, y;

      if (this.hasLayout) {
        x = this.attr('layoutX');
        y = this.attr('layoutY');
      } else {
        var _this$attr = this.attr('pos');

        var _this$attr2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_11___default()(_this$attr, 2);

        x = _this$attr2[0];
        y = _this$attr2[1];
      }

      return [x, y];
    }
  }, {
    key: "attrSize",
    get: function get() {
      var _this$attr3 = this.attr('size'),
          _this$attr4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_11___default()(_this$attr3, 2),
          width = _this$attr4[0],
          height = _this$attr4[1];

      var isBorderBox = this.attr('boxSizing') === 'border-box';

      if (this.hasLayout) {
        var layoutWidth = this.attr('layoutWidth'),
            layoutHeight = this.attr('layoutHeight');
        var _ref12 = [layoutWidth !== '' ? layoutWidth : width, layoutHeight !== '' ? layoutHeight : height];
        width = _ref12[0];
        height = _ref12[1];
      }

      if (isBorderBox) {
        var borderWidth = this.attr('border').width,
            _this$attr5 = this.attr('padding'),
            _this$attr6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_11___default()(_this$attr5, 4),
            paddingTop = _this$attr6[0],
            paddingRight = _this$attr6[1],
            paddingBottom = _this$attr6[2],
            paddingLeft = _this$attr6[3];

        if (width !== '') {
          width = Math.max(0, width - 2 * borderWidth - paddingLeft - paddingRight);
        }

        if (height !== '') {
          height = Math.max(0, height - 2 * borderWidth - paddingTop - paddingBottom);
        }
      }

      return [width, height];
    }
  }, {
    key: "boxOffsetSize",
    get: function get() {
      // get original boxSize, without layout
      if (this.isVirtual) return [0, 0];

      var _this$attr7 = this.attr('size'),
          _this$attr8 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_11___default()(_this$attr7, 2),
          width = _this$attr8[0],
          height = _this$attr8[1];

      var _this$attr9 = this.attr('padding'),
          _this$attr10 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_11___default()(_this$attr9, 4),
          top = _this$attr10[0],
          right = _this$attr10[1],
          bottom = _this$attr10[2],
          left = _this$attr10[3];

      var _this$attr11 = this.attr('border'),
          borderWidth = _this$attr11.width,
          lw = borderWidth * 2;

      return [left + (width | 0) + right + lw, top + (height | 0) + bottom + lw];
    } // content width / height

  }, {
    key: "contentSize",
    get: function get() {
      if (this.isVirtual) return [0, 0];

      var _this$attrSize = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_11___default()(this.attrSize, 2),
          width = _this$attrSize[0],
          height = _this$attrSize[1];

      return [width | 0, height | 0];
    } // content + padding

  }, {
    key: "clientSize",
    get: function get() {
      var _this$attr12 = this.attr('padding'),
          _this$attr13 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_11___default()(_this$attr12, 4),
          top = _this$attr13[0],
          right = _this$attr13[1],
          bottom = _this$attr13[2],
          left = _this$attr13[3],
          _this$contentSize = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_11___default()(this.contentSize, 2),
          width = _this$contentSize[0],
          height = _this$contentSize[1];

      return [left + width + right, top + height + bottom];
    } // content + padding + border

  }, {
    key: "offsetSize",
    get: function get() {
      var _this$attr14 = this.attr('border'),
          borderWidth = _this$attr14.width,
          _this$clientSize2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_11___default()(this.clientSize, 2),
          width = _this$clientSize2[0],
          height = _this$clientSize2[1];

      return [width + 2 * borderWidth, height + 2 * borderWidth];
    }
  }, {
    key: "layoutSize",
    get: function get() {
      var size = this.offsetSize;

      var _this$attr15 = this.attr('margin'),
          _this$attr16 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_11___default()(_this$attr15, 4),
          top = _this$attr16[0],
          right = _this$attr16[1],
          bottom = _this$attr16[2],
          left = _this$attr16[3];

      return [left + size[0] + right, top + size[1] + bottom];
    }
  }, {
    key: "innerSize",
    get: function get() {
      return this.contentSize;
    }
  }, {
    key: "outerSize",
    get: function get() {
      return this.offsetSize;
    }
  }, {
    key: "boundingRect",
    get: function get() {
      var transform = this.transform;

      var _this$originalRect2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_11___default()(this.originalRect, 4),
          ox = _this$originalRect2[0],
          oy = _this$originalRect2[1],
          width = _this$originalRect2[2],
          height = _this$originalRect2[3];

      if (this.hasLayout) {
        var margin = this.attr('margin');
        width += margin[1];
        height += margin[2];
      }

      var vertexs = [[ox, oy], [width + ox, oy], [ox, height + oy], [width + ox, height + oy]];
      var transformed = vertexs.map(function (v) {
        return transform.transformPoint(v[0], v[1]);
      });
      var vx = transformed.map(function (v) {
        return v[0];
      }),
          vy = transformed.map(function (v) {
        return v[1];
      });
      var minX = Math.min.apply(Math, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(vx)),
          minY = Math.min.apply(Math, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(vy)),
          maxX = Math.max.apply(Math, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(vx)),
          maxY = Math.max.apply(Math, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(vy));
      return [minX, minY].concat([maxX - minX, maxY - minY]);
    } // rect before transform

  }, {
    key: "originalRect",
    get: function get() {
      var _this$offsetSize3 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_11___default()(this.offsetSize, 2),
          width = _this$offsetSize3[0],
          height = _this$offsetSize3[1],
          _this$attr17 = this.attr('anchor'),
          _this$attr18 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_11___default()(_this$attr17, 2),
          anchorX = _this$attr18[0],
          anchorY = _this$attr18[1];

      var rect = [-anchorX * width, -anchorY * height, width, height];

      if (this.hasLayout) {
        var margin = this.attr('margin');
        rect[0] += margin[3];
        rect[1] += margin[0];
      }

      return rect;
    }
  }, {
    key: "originalRenderRect",
    get: function get() {
      var bound = this.originalRect,
          pos = this.xy;
      return [pos[0] + bound[0], pos[1] + bound[1], bound[2], bound[3]];
    }
  }, {
    key: "renderBox",
    get: function get() {
      var bound = this.boundingRect,
          pos = this.xy;
      return [Math.floor(pos[0] + bound[0]), Math.floor(pos[1] + bound[1]), Math.ceil(pos[0] + bound[0] + bound[2]), Math.ceil(pos[1] + bound[1] + bound[3])];
    }
  }, {
    key: "renderRect",
    get: function get() {
      var _this$renderBox = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_11___default()(this.renderBox, 4),
          x0 = _this$renderBox[0],
          y0 = _this$renderBox[1],
          x1 = _this$renderBox[2],
          y1 = _this$renderBox[3];

      return [x0, y0, x1 - x0, y1 - y0];
    }
  }, {
    key: "vertices",
    get: function get() {
      var vertices = Object(_utils__WEBPACK_IMPORTED_MODULE_14__["rectVertices"])(this.originalRect),
          transform = this.transform,
          _this$xy3 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_11___default()(this.xy, 2),
          x0 = _this$xy3[0],
          y0 = _this$xy3[1];

      return vertices.map(function (v) {
        var _transform$transformP3 = transform.transformPoint(v[0], v[1]),
            _transform$transformP4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_11___default()(_transform$transformP3, 2),
            x = _transform$transformP4[0],
            y = _transform$transformP4[1];

        return [x0 + x, y0 + y];
      });
    }
  }, {
    key: "cache",
    set: function set(context) {
      if (context == null) {
        this[_cachePriority] = 0;

        if (this.parent && this.parent.cache) {
          this.parent.cache = null;
        }
      }

      if (this.cacheContext && context !== this.cacheContext) {
        _helpers_render__WEBPACK_IMPORTED_MODULE_18__["cacheContextPool"].put(this.cacheContext);
      }

      this.cacheContext = context;
    },
    get: function get() {
      if (this[_cachePriority] >= CACHE_PRIORITY_THRESHOLDS) {
        return this.cacheContext;
      }

      if (this.cacheContext) {
        this.cache = null;
      }

      return false;
    }
  }, {
    key: "needRender",
    get: function get() {
      if (this.isVirtual) return false;

      var _this$offsetSize4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_11___default()(this.offsetSize, 2),
          offsetWidth = _this$offsetSize4[0],
          offsetHeight = _this$offsetSize4[1];

      if (offsetWidth <= 0 || offsetHeight <= 0) return false;
      var border = this.attr('border');

      if (border.width <= 0 && this.attr('borderRadius') <= 0 && !this.attr('bgcolor') && !this.attr('gradients').bgcolor && !this.attr('bgimage')) {
        return false; // don't need to render
      }

      return true;
    }
  }], [{
    key: "setAttributeEffects",
    value: function setAttributeEffects() {
      var effects = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (this.prototype[_effects] == null) {
        this.prototype[_effects] = effects;
      }

      Object.assign(this.prototype[_effects], effects);
    }
  }, {
    key: "addAttributes",
    value: function addAttributes() {
      var _this6 = this;

      var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      Object.entries(attrs).forEach(function (_ref13) {
        var _ref14 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_11___default()(_ref13, 2),
            prop = _ref14[0],
            handler = _ref14[1];

        var getter = function getter() {
          return this.get(prop);
        };

        if (typeof handler !== 'function' && handler.set) {
          getter = handler.get || getter;
          handler = handler.set;
        }

        if (prop !== 'init') {
          Object.defineProperty(_this6.Attr.prototype, prop, {
            set: function set(val) {
              this.__updateTag = false;
              this.__reflowTag = false;
              this.__clearLayout = false;
              handler(this, val);

              if (this.subject && this.subject.hasLayout) {
                var offsetSize = this.subject.offsetSize,
                    layoutSize = this.subject.__layoutSize;

                if (this.__clearLayout || !layoutSize || offsetSize[0] !== layoutSize[0] || offsetSize[1] !== layoutSize[1]) {
                  this.subject.clearLayout();
                }

                this.subject.__lastLayout = offsetSize;
              }

              if (this.subject && this.__updateTag) {
                this.subject.forceUpdate(true);

                if (this.__reflowTag) {
                  this.subject.reflow();
                }
              } // delete this.__reflowTag;
              // delete this.__updateTag;

            },
            get: getter
          });
        }
      });
    }
  }, {
    key: "defineAttributes",
    value: function defineAttributes(attrs, effects) {
      this.Attr =
      /*#__PURE__*/
      function (_this$Attr) {
        _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8___default()(_class3, _this$Attr);

        function _class3(subject) {
          var _this7;

          _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, _class3);

          _this7 = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(_class3).call(this, subject));
          if (attrs.init) attrs.init(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this7)), subject);
          return _this7;
        }

        return _class3;
      }(this.Attr);

      if (attrs) this.addAttributes(attrs);
      if (effects) this.setAttributeEffects(effects);
      return this.Attr;
    }
  }]);

  return BaseSprite;
}(_basenode__WEBPACK_IMPORTED_MODULE_16__["default"]), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(_class2, "Attr", _baseattr__WEBPACK_IMPORTED_MODULE_15__["default"]), _temp), (_babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_10___default()(_class.prototype, "xy", [_utils__WEBPACK_IMPORTED_MODULE_14__["absolute"]], Object.getOwnPropertyDescriptor(_class.prototype, "xy"), _class.prototype), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_10___default()(_class.prototype, "attrSize", [_utils__WEBPACK_IMPORTED_MODULE_14__["absolute"], _utils__WEBPACK_IMPORTED_MODULE_14__["flow"]], Object.getOwnPropertyDescriptor(_class.prototype, "attrSize"), _class.prototype), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_10___default()(_class.prototype, "boxOffsetSize", [_utils__WEBPACK_IMPORTED_MODULE_14__["absolute"], _utils__WEBPACK_IMPORTED_MODULE_14__["flow"]], Object.getOwnPropertyDescriptor(_class.prototype, "boxOffsetSize"), _class.prototype), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_10___default()(_class.prototype, "contentSize", [_utils__WEBPACK_IMPORTED_MODULE_14__["flow"]], Object.getOwnPropertyDescriptor(_class.prototype, "contentSize"), _class.prototype), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_10___default()(_class.prototype, "clientSize", [_utils__WEBPACK_IMPORTED_MODULE_14__["flow"]], Object.getOwnPropertyDescriptor(_class.prototype, "clientSize"), _class.prototype), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_10___default()(_class.prototype, "offsetSize", [_utils__WEBPACK_IMPORTED_MODULE_14__["flow"]], Object.getOwnPropertyDescriptor(_class.prototype, "offsetSize"), _class.prototype), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_10___default()(_class.prototype, "originalRect", [_utils__WEBPACK_IMPORTED_MODULE_14__["flow"]], Object.getOwnPropertyDescriptor(_class.prototype, "originalRect"), _class.prototype), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_10___default()(_class.prototype, "clearCache", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "clearCache"), _class.prototype)), _class));


function drawDot9Image(drawingContext, image, clip9, borderWidth, offsetWidth, offsetHeight, clientWidth, clientHeight) {
  var w = image.width,
      h = image.height;

  var _ref = clip9 || [16, 16, 16, 16],
      _ref2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_11___default()(_ref, 4),
      top = _ref2[0],
      right = _ref2[1],
      bottom = _ref2[2],
      left = _ref2[3];

  var leftTop = [0, 0, left, top],
      rightTop = [w - right, 0, right, top],
      rightBottom = [w - right, h - bottom, right, bottom],
      leftBottom = [0, h - bottom, left, bottom];
  var boxRight = offsetWidth - right - borderWidth,
      boxBottom = offsetHeight - borderWidth - bottom; // draw .9 cross

  var midWidth = w - left - right,
      midHeight = h - top - bottom;

  if (midWidth > 0) {
    var midBoxWidth = clientWidth - left - right + 2;
    var leftOffset = borderWidth + left - 1;

    while (midBoxWidth > 0) {
      var ww = Math.min(midBoxWidth, midWidth) + 1;
      var topPiece = [left - 1, 0, ww, top],
          bottomPiece = [left - 1, h - bottom, ww, bottom];
      drawingContext.drawImage.apply(drawingContext, [image].concat(topPiece, [leftOffset, borderWidth, ww, top]));
      drawingContext.drawImage.apply(drawingContext, [image].concat(bottomPiece, [leftOffset, boxBottom, ww, bottom]));
      midBoxWidth -= midWidth;

      if (midBoxWidth > 0) {
        leftOffset += midWidth;
      }
    }
  }

  if (midHeight > 0) {
    var midBoxHeight = clientHeight - top - bottom + 2;
    var topOffset = borderWidth + top - 1;

    while (midBoxHeight > 0) {
      var hh = Math.min(midBoxHeight, midHeight) + 1;
      var leftPiece = [0, top - 1, left, hh],
          rightPiece = [w - right, top - 1, right, hh];
      drawingContext.drawImage.apply(drawingContext, [image].concat(leftPiece, [borderWidth, topOffset, left, hh]));
      drawingContext.drawImage.apply(drawingContext, [image].concat(rightPiece, [boxRight, topOffset, right, hh]));
      midBoxHeight -= midHeight;

      if (midBoxHeight > 0) {
        topOffset += midHeight;
      }
    }
  }

  if (midHeight && midWidth > 0) {
    var _midBoxWidth = clientWidth - left - right + 2;

    var _leftOffset = borderWidth + left - 1;

    while (_midBoxWidth > 0) {
      var _midBoxHeight = clientHeight - top - bottom + 2;

      var _topOffset = borderWidth + top - 1;

      while (_midBoxHeight > 0) {
        var _ww = Math.min(_midBoxWidth, midWidth) + 1,
            _hh = Math.min(_midBoxHeight, midHeight) + 1;

        var midPiece = [left - 1, top - 1, _ww, _hh];
        drawingContext.drawImage.apply(drawingContext, [image].concat(midPiece, [_leftOffset, _topOffset, _ww, _hh]));
        _midBoxHeight -= midWidth;

        if (_midBoxHeight > 0) {
          _topOffset += midHeight;
        }
      }

      _midBoxWidth -= midWidth;

      if (_midBoxWidth > 0) {
        _leftOffset += midWidth;
      }
    }
  } // draw four corners


  drawingContext.drawImage.apply(drawingContext, [image].concat(leftTop, [borderWidth, borderWidth, left, top]));
  drawingContext.drawImage.apply(drawingContext, [image].concat(rightTop, [boxRight, borderWidth, right, top]));
  drawingContext.drawImage.apply(drawingContext, [image].concat(rightBottom, [boxRight, boxBottom, left, bottom]));
  drawingContext.drawImage.apply(drawingContext, [image].concat(leftBottom, [borderWidth, boxBottom, left, bottom]));
}

function drawBgImage(drawingContext, bgimage, borderWidth, offsetWidth, offsetHeight, clientWidth, clientHeight) {
  var image = bgimage.image,
      display = bgimage.display,
      clip9 = bgimage.clip9;

  if (display === '.9') {
    drawDot9Image(drawingContext, image, clip9, borderWidth, offsetWidth, offsetHeight, clientWidth, clientHeight);
  } else {
    var offset = bgimage.offset || [0, 0],
        w = image.width,
        h = image.height;

    if (display === 'center') {
      offset = [(clientWidth - w) * 0.5, (clientHeight - h) * 0.5];
    } else if (display === 'stretch') {
      w = clientWidth - offset[0];
      h = clientHeight - offset[1];
    }

    drawingContext.drawImage(image, borderWidth + offset[0], borderWidth + offset[1], w, h);

    if (w > 0 && (display === 'repeat' || display === 'repeatX')) {
      var cw = clientWidth - borderWidth - offset[0] - w;

      while (cw > borderWidth) {
        drawingContext.drawImage(image, clientWidth - cw, borderWidth + offset[1], w, h);

        if (h > 0 && display === 'repeat') {
          var ch = clientHeight - borderWidth - offset[1] - h;

          while (ch > borderWidth) {
            drawingContext.drawImage(image, clientWidth - cw, clientHeight - ch, w, h);
            ch -= h;
          }
        }

        cw -= w;
      }
    }

    if (h > 0 && (display === 'repeat' || display === 'repeatY')) {
      var _ch = clientHeight - borderWidth - offset[1] - h;

      while (_ch > borderWidth) {
        drawingContext.drawImage(image, borderWidth + offset[0], clientHeight - _ch, w, h);
        _ch -= h;
      }
    }
  }
}

/***/ }),
/* 130 */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),
/* 131 */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(131);

var assertThisInitialized = __webpack_require__(130);

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),
/* 133 */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__(133);

var superPropBase = __webpack_require__(135);

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
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__(133);

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

module.exports = _superPropBase;

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(137);

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
/* 137 */
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
/* 138 */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),
/* 139 */
/***/ (function(module, exports) {

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

module.exports = _applyDecoratedDescriptor;

/***/ }),
/* 140 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SpriteAttr; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(132);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(133);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(134);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(136);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(130);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(139);
/* harmony import */ var _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var svg_path_to_canvas__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(19);
/* harmony import */ var svg_path_to_canvas__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(svg_path_to_canvas__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var sprite_math__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(111);
/* harmony import */ var sprite_math__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(sprite_math__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _attr__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(141);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(120);











var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _class;





var SpriteAttr = (_dec = Object(_utils__WEBPACK_IMPORTED_MODULE_13__["parseValue"])(_utils__WEBPACK_IMPORTED_MODULE_13__["parseStringFloat"], _utils__WEBPACK_IMPORTED_MODULE_13__["oneOrTwoValues"]), _dec2 = Object(_utils__WEBPACK_IMPORTED_MODULE_13__["relative"])('width'), _dec3 = Object(_utils__WEBPACK_IMPORTED_MODULE_13__["relative"])('height'), _dec4 = Object(_utils__WEBPACK_IMPORTED_MODULE_13__["relative"])('width'), _dec5 = Object(_utils__WEBPACK_IMPORTED_MODULE_13__["relative"])('height'), _dec6 = Object(_utils__WEBPACK_IMPORTED_MODULE_13__["parseValue"])(_utils__WEBPACK_IMPORTED_MODULE_13__["parseStringInt"]), _dec7 = Object(_utils__WEBPACK_IMPORTED_MODULE_13__["parseValue"])(_utils__WEBPACK_IMPORTED_MODULE_13__["parseColorString"]), _dec8 = Object(_utils__WEBPACK_IMPORTED_MODULE_13__["parseValue"])(parseFloat), _dec9 = Object(_utils__WEBPACK_IMPORTED_MODULE_13__["relative"])('width'), _dec10 = Object(_utils__WEBPACK_IMPORTED_MODULE_13__["relative"])('height'), _dec11 = Object(_utils__WEBPACK_IMPORTED_MODULE_13__["relative"])('width'), _dec12 = Object(_utils__WEBPACK_IMPORTED_MODULE_13__["relative"])('height'), _dec13 = Object(_utils__WEBPACK_IMPORTED_MODULE_13__["parseValue"])(_utils__WEBPACK_IMPORTED_MODULE_13__["parseStringInt"]), _dec14 = Object(_utils__WEBPACK_IMPORTED_MODULE_13__["parseValue"])(_utils__WEBPACK_IMPORTED_MODULE_13__["parseStringInt"], _utils__WEBPACK_IMPORTED_MODULE_13__["fourValuesShortCut"]), _dec15 = Object(_utils__WEBPACK_IMPORTED_MODULE_13__["parseValue"])(parseFloat), _dec16 = Object(_utils__WEBPACK_IMPORTED_MODULE_13__["parseValue"])(parseFloat), _dec17 = Object(_utils__WEBPACK_IMPORTED_MODULE_13__["parseValue"])(parseFloat), _dec18 = Object(_utils__WEBPACK_IMPORTED_MODULE_13__["parseValue"])(parseFloat), _dec19 = Object(_utils__WEBPACK_IMPORTED_MODULE_13__["parseValue"])(parseFloat), _dec20 = Object(_utils__WEBPACK_IMPORTED_MODULE_13__["parseValue"])(parseFloat), _dec21 = Object(_utils__WEBPACK_IMPORTED_MODULE_13__["parseValue"])(_utils__WEBPACK_IMPORTED_MODULE_13__["parseStringTransform"]), _dec22 = Object(_utils__WEBPACK_IMPORTED_MODULE_13__["parseValue"])(_utils__WEBPACK_IMPORTED_MODULE_13__["parseStringFloat"]), _dec23 = Object(_utils__WEBPACK_IMPORTED_MODULE_13__["parseValue"])(parseFloat), _dec24 = Object(_utils__WEBPACK_IMPORTED_MODULE_13__["parseValue"])(_utils__WEBPACK_IMPORTED_MODULE_13__["parseStringFloat"], _utils__WEBPACK_IMPORTED_MODULE_13__["oneOrTwoValues"]), _dec25 = Object(_utils__WEBPACK_IMPORTED_MODULE_13__["parseValue"])(parseInt), _dec26 = Object(_utils__WEBPACK_IMPORTED_MODULE_13__["parseValue"])(parseFloat), _dec27 = Object(_utils__WEBPACK_IMPORTED_MODULE_13__["parseValue"])(parseFloat), _dec28 = Object(_utils__WEBPACK_IMPORTED_MODULE_13__["parseValue"])(parseFloat), _dec29 = Object(_utils__WEBPACK_IMPORTED_MODULE_13__["parseValue"])(parseInt), _dec30 = Object(_utils__WEBPACK_IMPORTED_MODULE_13__["parseValue"])(_utils__WEBPACK_IMPORTED_MODULE_13__["parseStringInt"], _utils__WEBPACK_IMPORTED_MODULE_13__["fourValuesShortCut"]), _dec31 = Object(_utils__WEBPACK_IMPORTED_MODULE_13__["parseValue"])(parseFloat), _dec32 = Object(_utils__WEBPACK_IMPORTED_MODULE_13__["parseValue"])(parseFloat), _dec33 = Object(_utils__WEBPACK_IMPORTED_MODULE_13__["parseValue"])(parseFloat), _dec34 = Object(_utils__WEBPACK_IMPORTED_MODULE_13__["parseValue"])(parseFloat), (_class =
/*#__PURE__*/
function (_NodeAttr) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default()(SpriteAttr, _NodeAttr);

  function SpriteAttr(subject) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, SpriteAttr);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(SpriteAttr).call(this, subject));

    _this.setDefault({
      anchor: [0, 0],
      enableCache: false,
      x: 0,
      y: 0,
      opacity: 1,
      width: '',
      height: '',
      layoutX: 0,
      layoutY: 0,
      layoutWidth: '',
      layoutHeight: '',
      bgcolor: '',
      flexGrow: 0,
      flexShrink: 1,
      flexBasis: 'auto',
      order: 0,
      position: '',
      alignSelf: '',
      rotate: 0,
      scale: [1, 1],
      translate: [0, 0],
      skew: [0, 0],
      transform: 'matrix(1,0,0,1,0,0)',
      transformOrigin: '',
      transformMatrix: [1, 0, 0, 1, 0, 0],
      border: {
        width: 0,
        color: 'rgba(0,0,0,0)',
        style: 'solid'
      },
      // border: [0, 'rgba(0,0,0,0)'],
      borderRadius: 0,
      boxSizing: 'content-box',
      dashOffset: 0,
      display: '',
      padding: [0, 0, 0, 0],
      margin: [0, 0, 0, 0],
      zIndex: 0,
      offsetRotate: 'auto',
      gradients: {},
      offsetDistance: 0,
      filter: '',
      // filter: {blur, ...}
      shadow: '',
      // shadow: {color = 'rgba(0,0,0,1)', blur = 1[, offset]}
      bgimage: '',
      clipOverflow: true
    });

    Object.defineProperty(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8___default()(_this)), '__reflowTag', {
      writable: true,
      value: false
    });
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(SpriteAttr, [{
    key: "clearFlow",
    value: function clearFlow() {
      this.__reflowTag = true;
      return this;
    }
  }, {
    key: "clearLayout",
    value: function clearLayout() {
      this.__clearLayout = true;
      return this;
    }
  }, {
    key: "set",
    value: function set(key, value) {
      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(SpriteAttr.prototype), "set", this).call(this, key, value); // auto reflow


      if (key === 'width' || key === 'height' || key === 'layoutWidth' || key === 'layoutHeight' || key === 'display' || key === 'anchor' || key === 'border' || key === 'padding' || key === 'boxSizing' || key === 'margin' || key === 'flexBasis' || key === 'flex') {
        this.__reflowTag = true;
      }
    }
  }, {
    key: "merge",
    value: function merge(attrs) {
      var _this2 = this;

      if (typeof attrs === 'string') {
        attrs = JSON.parse(attrs);
      }

      Object.entries(attrs).forEach(function (_ref) {
        var _ref2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_ref, 2),
            key = _ref2[0],
            value = _ref2[1];

        if (_this2.getDefaultValue(key) !== value) {
          if (key !== 'offsetPath' && key !== 'offsetDistance' && key !== 'offsetRotate' && key !== 'offsetAngle' && key !== 'offsetPoint') {
            // this[key] = value;
            _this2.subject.attr(key, value);
          } else if (key === 'offsetPath') {
            var offsetPath = new svg_path_to_canvas__WEBPACK_IMPORTED_MODULE_10___default.a(value);

            _this2.set('offsetPath', offsetPath.d);

            _this2.saveObj('offsetPath', offsetPath);
          } else {
            _this2.set(key, value);
          }
        }
      });
      return this;
    }
  }, {
    key: "serialize",
    value: function serialize() {
      var attrs = this.getAttributes();
      delete attrs.id;
      var offsetAngle = this.get('offsetAngle');
      if (offsetAngle != null) attrs.offsetAngle = offsetAngle;
      var offsetPoint = this.get('offsetPoint');
      if (offsetPoint != null) attrs.offsetPoint = offsetPoint;
      return JSON.stringify(attrs);
    }
  }, {
    key: "resetOffset",
    value: function resetOffset() {
      var offsetPath = this.get('offsetPath');
      var dis = this.offsetDistance;

      if (offsetPath) {
        var pathObj = this.loadObj('offsetPath');

        if (pathObj) {
          offsetPath = pathObj;
        } else {
          offsetPath = new svg_path_to_canvas__WEBPACK_IMPORTED_MODULE_10___default.a(offsetPath);
          this.saveObj('offsetPath', offsetPath);
        }
      }

      if (offsetPath != null) {
        var len = dis * offsetPath.getTotalLength();

        var _offsetPath$getPointA = offsetPath.getPointAtLength(len),
            _offsetPath$getPointA2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_offsetPath$getPointA, 2),
            x = _offsetPath$getPointA2[0],
            y = _offsetPath$getPointA2[1];

        var angle = this.offsetRotate;

        if (angle === 'auto' || angle === 'reverse') {
          if (angle === 'reverse' && len === 0) {
            len = 1;
          }

          var _offsetPath$getPointA3 = offsetPath.getPointAtLength(angle === 'auto' ? len + 1 : len - 1),
              _offsetPath$getPointA4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_offsetPath$getPointA3, 2),
              x1 = _offsetPath$getPointA4[0],
              y1 = _offsetPath$getPointA4[1];

          if (x1 === x && y1 === y) {
            // last point
            angle = this.get('offsetAngle');
          } else {
            angle = 180 * Math.atan2(y1 - y, x1 - x) / Math.PI;
          }

          if (this.offsetRotate === 'reverse') {
            angle = -angle;
          }
        }

        var offsetAngle = this.get('offsetAngle');

        if (offsetAngle) {
          this.rotate -= offsetAngle;
        }

        this.set('offsetAngle', angle);
        this.rotate += angle;
        var offsetPoint = this.get('offsetPoint');

        if (offsetPoint) {
          this.pos = [this.x - offsetPoint[0], this.y - offsetPoint[1]];
        }

        this.set('offsetPoint', [x, y]);
        this.pos = [this.x + x, this.y + y];
      }
    }
  }, {
    key: "enableCache",
    set: function set(val) {
      return this.set('enableCache', val);
    }
  }, {
    key: "anchor",
    set: function set(val) {
      this.clearLayout();
      this.set('anchor', val);
    }
  }, {
    key: "display",
    set: function set(val) {
      this.set('display', val);
    }
  }, {
    key: "layoutX",
    set: function set(val) {
      this.set('layoutX', val);
    }
  }, {
    key: "layoutY",
    set: function set(val) {
      this.set('layoutY', val);
    }
  }, {
    key: "x",
    set: function set(val) {
      this.set('x', val);
    }
  }, {
    key: "y",
    set: function set(val) {
      this.set('y', val);
    }
  }, {
    key: "pos",
    set: function set(val) {
      if (val == null) {
        val = [0, 0];
      }

      var _val = val,
          _val2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_val, 2),
          x = _val2[0],
          y = _val2[1];

      this.x = x;
      this.y = y;
    },
    get: function get() {
      return [this.x, this.y];
    }
  }, {
    key: "bgcolor",
    set: function set(val) {
      this.set('bgcolor', val);
    }
  }, {
    key: "opacity",
    set: function set(val) {
      this.set('opacity', val);
    }
  }, {
    key: "width",
    set: function set(val) {
      this.set('width', val);
    }
  }, {
    key: "height",
    set: function set(val) {
      this.set('height', val);
    }
  }, {
    key: "layoutWidth",
    set: function set(val) {
      this.set('layoutWidth', val);
    }
  }, {
    key: "layoutHeight",
    set: function set(val) {
      this.set('layoutHeight', val);
    }
  }, {
    key: "size",
    set: function set(val) {
      if (val == null) {
        val = ['', ''];
      }

      var _val3 = val,
          _val4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_val3, 2),
          width = _val4[0],
          height = _val4[1];

      this.width = width;
      this.height = height;
    },
    get: function get() {
      return [this.width, this.height];
    }
  }, {
    key: "border",
    set: function set(val) {
      if (val == null) {
        this.set('border', null);
        return;
      }

      if (typeof val === 'number' || typeof val === 'string') {
        val = {
          width: parseFloat(val)
        };
      } else if (Array.isArray(val)) {
        val = {
          width: parseFloat(val[0]),
          color: Object(_utils__WEBPACK_IMPORTED_MODULE_13__["parseColorString"])(val[1] || '#000')
        };
      } else {
        val.width = parseFloat(val.width);
        val.color = Object(_utils__WEBPACK_IMPORTED_MODULE_13__["parseColorString"])(val.color || '#000');
      }

      val = Object.assign({
        width: 1,
        color: Object(_utils__WEBPACK_IMPORTED_MODULE_13__["parseColorString"])('#000'),
        style: 'solid'
      }, val);
      this.set('border', val);
    }
  }, {
    key: "padding",
    set: function set(val) {
      this.set('padding', val);
    }
  }, {
    key: "paddingTop",
    set: function set(val) {
      this.setAttrIndex('padding', val, 0);
    },
    get: function get() {
      return this.get('padding')[0];
    }
  }, {
    key: "paddingRight",
    set: function set(val) {
      this.setAttrIndex('padding', val, 1);
    },
    get: function get() {
      return this.get('padding')[1];
    }
  }, {
    key: "paddingBottom",
    set: function set(val) {
      this.setAttrIndex('padding', val, 2);
    },
    get: function get() {
      return this.get('padding')[2];
    }
  }, {
    key: "paddingLeft",
    set: function set(val) {
      this.setAttrIndex('padding', val, 3);
    },
    get: function get() {
      return this.get('padding')[3];
    }
  }, {
    key: "borderRadius",
    set: function set(val) {
      this.set('borderRadius', val);
    }
  }, {
    key: "boxSizing",
    set: function set(val) {
      this.set('boxSizing', val);
    }
  }, {
    key: "dashOffset",
    set: function set(val) {
      this.set('dashOffset', val);
    } // transform attributes

  }, {
    key: "transform",
    set: function set(val) {
      var _this3 = this;

      /*
        rotate: 0,
        scale: [1, 1],
        translate: [0, 0],
        skew: [0, 0],
        matrix: [1,0,0,1,0,0],
       */
      Object.assign(this.__attr, {
        rotate: 0,
        scale: [1, 1],
        translate: [0, 0],
        skew: [0, 0]
      });

      if (Array.isArray(val)) {
        this.set('transformMatrix', val);
        this.set('transform', "matrix(".concat(val, ")"));
      } else {
        this.set('transformMatrix', [1, 0, 0, 1, 0, 0]);
        var transformStr = [];
        Object.entries(val).forEach(function (_ref3) {
          var _ref4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_ref3, 2),
              key = _ref4[0],
              value = _ref4[1];

          if (key === 'matrix' && Array.isArray(value)) {
            _this3.set('transformMatrix', new sprite_math__WEBPACK_IMPORTED_MODULE_11__["Matrix"](value).m);
          } else {
            _this3[key] = value;
          }

          transformStr.push("".concat(key, "(").concat(value, ")"));
        });
        this.set('transform', transformStr.join(' '));
      }
    }
  }, {
    key: "transformOrigin",
    set: function set(val) {
      this.set('transformOrigin', val);
    }
  }, {
    key: "rotate",
    set: function set(val) {
      var delta = this.get('rotate') - val;
      this.set('rotate', val);
      var transform = new sprite_math__WEBPACK_IMPORTED_MODULE_11__["Matrix"](this.get('transformMatrix')).rotate(-delta);
      this.set('transformMatrix', transform.m);
    }
  }, {
    key: "scale",
    set: function set(val) {
      val = Object(_utils__WEBPACK_IMPORTED_MODULE_13__["oneOrTwoValues"])(val).map(function (v) {
        if (Math.abs(v) > 0.001) {
          return v;
        }

        return 1 / v > 0 ? 0.001 : -0.001;
      });
      var oldVal = this.get('scale') || [1, 1];
      var delta = [val[0] / oldVal[0], val[1] / oldVal[1]];
      this.set('scale', val);
      var offsetAngle = this.get('offsetAngle');

      if (offsetAngle) {
        this.rotate -= offsetAngle;
      }

      var transform = new sprite_math__WEBPACK_IMPORTED_MODULE_11__["Matrix"](this.get('transformMatrix'));
      transform.scale.apply(transform, delta);
      this.set('transformMatrix', transform.m);

      if (offsetAngle) {
        this.rotate += offsetAngle;
      }
    }
  }, {
    key: "translate",
    set: function set(val) {
      var oldVal = this.get('translate') || [0, 0];
      var delta = [val[0] - oldVal[0], val[1] - oldVal[1]];
      this.set('translate', val);
      var transform = new sprite_math__WEBPACK_IMPORTED_MODULE_11__["Matrix"](this.get('transformMatrix'));
      transform.translate.apply(transform, delta);
      this.set('transformMatrix', transform.m);
    }
  }, {
    key: "skew",
    set: function set(val) {
      var _ref5, _transform$multiply;

      var oldVal = this.get('skew') || [0, 0];

      var invm = (_ref5 = new sprite_math__WEBPACK_IMPORTED_MODULE_11__["Matrix"]()).skew.apply(_ref5, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(oldVal)).inverse();

      this.set('skew', val);
      var transform = new sprite_math__WEBPACK_IMPORTED_MODULE_11__["Matrix"](this.get('transformMatrix'));

      (_transform$multiply = transform.multiply(invm)).skew.apply(_transform$multiply, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(val));

      this.set('transformMatrix', transform.m);
    }
  }, {
    key: "zIndex",
    set: function set(val) {
      this.set('zIndex', val);
      var subject = this.subject;

      if (subject.parent) {
        subject.parent.sortedChildNodes = Object(_utils__WEBPACK_IMPORTED_MODULE_13__["sortOrderedSprites"])(subject.parent.childNodes);
      }
    }
    /**
      linearGradients : {
        bgcolor: {
          direction: 30,  //angle，[0,360)
          rect: [x, y, w, h],
          vector: [x1, y1, x2, y2], // direction/rect or from/to
          colors: [
            {offset: 0, color: 'red'},
            {offset: 1, color: 'black'}
          ]
        }
      }
     */

  }, {
    key: "linearGradients",
    set: function set(val)
    /* istanbul ignore next  */
    {
      this.gradients = val;
    },
    get: function get() {
      return this.gradients;
    }
    /**
      gradients : {
        bgcolor: {
          direction: 30,  //angle，[0,360)
          rect: [x, y, w, h],  // rect + direction or vector
          vector: [x1, y1, r1, x2, y2, r2], // vector.length -> linear or radial
          colors: [
            {offset: 0, color: 'red'},
            {offset: 1, color: 'black'}
          ]
        }
      }
     */

  }, {
    key: "gradients",
    set: function set(val) {
      this.set('gradients', val);
    }
  }, {
    key: "offsetPath",
    set: function set(val) {
      var offsetPath = new svg_path_to_canvas__WEBPACK_IMPORTED_MODULE_10___default.a(val);
      this.set('offsetPath', offsetPath.d);
      this.saveObj('offsetPath', offsetPath);
      this.resetOffset();
    }
  }, {
    key: "offsetDistance",
    set: function set(val) {
      this.set('offsetDistance', val);
      this.resetOffset();
    }
  }, {
    key: "offsetRotate",
    set: function set(val) {
      if (typeof val === 'string' && val !== 'auto' && val !== 'reverse') {
        val = parseFloat(val);
      }

      this.set('offsetRotate', val);
      this.resetOffset();
    }
  }, {
    key: "filter",
    set: function set(val) {
      this.set('filter', val);
    }
  }, {
    key: "shadow",
    set: function set(val) {
      this.set('shadow', val);
    }
  }, {
    key: "flexGrow",
    set: function set(val) {
      this.clearLayout();
      this.set('flexGrow', val);
    }
  }, {
    key: "flexShrink",
    set: function set(val) {
      this.clearLayout();
      this.set('flexShrink', val);
    }
  }, {
    key: "flexBasis",
    set: function set(val) {
      this.clearLayout();

      if (val && val !== 'auto') {
        val = parseFloat(val);
      }

      this.set('flexBasis', val);
    }
  }, {
    key: "flex",
    set: function set(val) {
      if (val != null && val !== 'initial') {
        if (val === 'auto') {
          this.flexGrow = 1;
          this.flexShrink = 1;
          this.flexBasis = 'auto';
        } else if (val === 'none') {
          this.flexGrow = 0;
          this.flexShrink = 0;
          this.flexBasis = 'auto';
        } else if (typeof val === 'string') {
          var values = val.trim().split(/\s+/);
          this.flexGrow = values[0];
          this.flexShrink = values[1];
          this.flexBasis = values[2];
        } else {
          this.flexGrow = val;
          this.flexShrink = 1;
          this.flexBasis = 'auto';
        }
      } else {
        this.flexGrow = 0;
        this.flexShrink = 1;
        this.flexBasis = 'auto';
      }
    },
    get: function get() {
      return "".concat(this.flexGrow, " ").concat(this.flexShrink, " ").concat(this.flexBasis);
    }
  }, {
    key: "order",
    set: function set(val) {
      this.clearLayout();
      this.set('order', val);
    }
  }, {
    key: "position",
    set: function set(val) {
      this.clearLayout();
      this.set('position', val);
    }
  }, {
    key: "alignSelf",
    set: function set(val) {
      this.clearLayout();
      this.set('alignSelf', val);
    }
  }, {
    key: "margin",
    set: function set(val) {
      this.clearLayout();
      this.set('margin', val);
    }
  }, {
    key: "marginTop",
    set: function set(val) {
      this.setAttrIndex('margin', val, 0);
    },
    get: function get() {
      return this.get('margin')[0];
    }
  }, {
    key: "marginRight",
    set: function set(val) {
      this.setAttrIndex('margin', val, 1);
    },
    get: function get() {
      return this.get('margin')[1];
    }
  }, {
    key: "marginBottom",
    set: function set(val) {
      this.setAttrIndex('margin', val, 2);
    },
    get: function get() {
      return this.get('margin')[2];
    }
  }, {
    key: "marginLeft",
    set: function set(val) {
      this.setAttrIndex('margin', val, 3);
    },
    get: function get() {
      return this.get('margin')[3];
    }
    /*
      {
        src: image | url,
        display: 'none' | 'repeatX' | 'repeatY' | 'repeat' | 'stretch' | 'center' | '.9',
        offset: [x, y],
        clip9: [paddingTop, paddingRight, paddingBottom, paddingLeft],
      }
    */

  }, {
    key: "bgimage",
    set: function set(val) {
      if (val && val.clip9) val.clip9 = Object(_utils__WEBPACK_IMPORTED_MODULE_13__["fourValuesShortCut"])(val.clip9);

      if (val && !val.image && this.subject.loadBgImage) {
        val = this.subject.loadBgImage(val);
      }

      this.set('bgimage', val);
    }
  }, {
    key: "clipOverflow",
    set: function set(val) {
      this.set('clipOverflow', !!val);
    }
  }]);

  return SpriteAttr;
}(_attr__WEBPACK_IMPORTED_MODULE_12__["default"]), (_babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_9___default()(_class.prototype, "enableCache", [_utils__WEBPACK_IMPORTED_MODULE_13__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, "enableCache"), _class.prototype), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_9___default()(_class.prototype, "anchor", [_dec, _utils__WEBPACK_IMPORTED_MODULE_13__["attr"], _utils__WEBPACK_IMPORTED_MODULE_13__["cachable"]], Object.getOwnPropertyDescriptor(_class.prototype, "anchor"), _class.prototype), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_9___default()(_class.prototype, "display", [_utils__WEBPACK_IMPORTED_MODULE_13__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, "display"), _class.prototype), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_9___default()(_class.prototype, "layoutX", [_utils__WEBPACK_IMPORTED_MODULE_13__["attr"], _dec2, _utils__WEBPACK_IMPORTED_MODULE_13__["cachable"]], Object.getOwnPropertyDescriptor(_class.prototype, "layoutX"), _class.prototype), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_9___default()(_class.prototype, "layoutY", [_utils__WEBPACK_IMPORTED_MODULE_13__["attr"], _dec3, _utils__WEBPACK_IMPORTED_MODULE_13__["cachable"]], Object.getOwnPropertyDescriptor(_class.prototype, "layoutY"), _class.prototype), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_9___default()(_class.prototype, "x", [_utils__WEBPACK_IMPORTED_MODULE_13__["attr"], _dec4, _utils__WEBPACK_IMPORTED_MODULE_13__["cachable"]], Object.getOwnPropertyDescriptor(_class.prototype, "x"), _class.prototype), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_9___default()(_class.prototype, "y", [_utils__WEBPACK_IMPORTED_MODULE_13__["attr"], _dec5, _utils__WEBPACK_IMPORTED_MODULE_13__["cachable"]], Object.getOwnPropertyDescriptor(_class.prototype, "y"), _class.prototype), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_9___default()(_class.prototype, "pos", [_dec6, _utils__WEBPACK_IMPORTED_MODULE_13__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, "pos"), _class.prototype), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_9___default()(_class.prototype, "bgcolor", [_dec7, _utils__WEBPACK_IMPORTED_MODULE_13__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, "bgcolor"), _class.prototype), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_9___default()(_class.prototype, "opacity", [_dec8, _utils__WEBPACK_IMPORTED_MODULE_13__["attr"], _utils__WEBPACK_IMPORTED_MODULE_13__["cachable"]], Object.getOwnPropertyDescriptor(_class.prototype, "opacity"), _class.prototype), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_9___default()(_class.prototype, "width", [_utils__WEBPACK_IMPORTED_MODULE_13__["attr"], _dec9], Object.getOwnPropertyDescriptor(_class.prototype, "width"), _class.prototype), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_9___default()(_class.prototype, "height", [_utils__WEBPACK_IMPORTED_MODULE_13__["attr"], _dec10], Object.getOwnPropertyDescriptor(_class.prototype, "height"), _class.prototype), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_9___default()(_class.prototype, "layoutWidth", [_utils__WEBPACK_IMPORTED_MODULE_13__["attr"], _dec11], Object.getOwnPropertyDescriptor(_class.prototype, "layoutWidth"), _class.prototype), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_9___default()(_class.prototype, "layoutHeight", [_utils__WEBPACK_IMPORTED_MODULE_13__["attr"], _dec12], Object.getOwnPropertyDescriptor(_class.prototype, "layoutHeight"), _class.prototype), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_9___default()(_class.prototype, "size", [_dec13, _utils__WEBPACK_IMPORTED_MODULE_13__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, "size"), _class.prototype), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_9___default()(_class.prototype, "border", [_utils__WEBPACK_IMPORTED_MODULE_13__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, "border"), _class.prototype), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_9___default()(_class.prototype, "padding", [_dec14, _utils__WEBPACK_IMPORTED_MODULE_13__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, "padding"), _class.prototype), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_9___default()(_class.prototype, "paddingTop", [_dec15, _utils__WEBPACK_IMPORTED_MODULE_13__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, "paddingTop"), _class.prototype), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_9___default()(_class.prototype, "paddingRight", [_dec16, _utils__WEBPACK_IMPORTED_MODULE_13__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, "paddingRight"), _class.prototype), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_9___default()(_class.prototype, "paddingBottom", [_dec17, _utils__WEBPACK_IMPORTED_MODULE_13__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, "paddingBottom"), _class.prototype), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_9___default()(_class.prototype, "paddingLeft", [_dec18, _utils__WEBPACK_IMPORTED_MODULE_13__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, "paddingLeft"), _class.prototype), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_9___default()(_class.prototype, "borderRadius", [_dec19, _utils__WEBPACK_IMPORTED_MODULE_13__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, "borderRadius"), _class.prototype), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_9___default()(_class.prototype, "boxSizing", [_utils__WEBPACK_IMPORTED_MODULE_13__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, "boxSizing"), _class.prototype), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_9___default()(_class.prototype, "dashOffset", [_dec20, _utils__WEBPACK_IMPORTED_MODULE_13__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, "dashOffset"), _class.prototype), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_9___default()(_class.prototype, "transform", [_dec21, _utils__WEBPACK_IMPORTED_MODULE_13__["attr"], _utils__WEBPACK_IMPORTED_MODULE_13__["cachable"]], Object.getOwnPropertyDescriptor(_class.prototype, "transform"), _class.prototype), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_9___default()(_class.prototype, "transformOrigin", [_dec22, _utils__WEBPACK_IMPORTED_MODULE_13__["attr"], _utils__WEBPACK_IMPORTED_MODULE_13__["cachable"]], Object.getOwnPropertyDescriptor(_class.prototype, "transformOrigin"), _class.prototype), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_9___default()(_class.prototype, "rotate", [_dec23, _utils__WEBPACK_IMPORTED_MODULE_13__["attr"], _utils__WEBPACK_IMPORTED_MODULE_13__["cachable"]], Object.getOwnPropertyDescriptor(_class.prototype, "rotate"), _class.prototype), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_9___default()(_class.prototype, "scale", [_dec24, _utils__WEBPACK_IMPORTED_MODULE_13__["attr"], _utils__WEBPACK_IMPORTED_MODULE_13__["cachable"]], Object.getOwnPropertyDescriptor(_class.prototype, "scale"), _class.prototype), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_9___default()(_class.prototype, "translate", [_utils__WEBPACK_IMPORTED_MODULE_13__["attr"], _utils__WEBPACK_IMPORTED_MODULE_13__["cachable"]], Object.getOwnPropertyDescriptor(_class.prototype, "translate"), _class.prototype), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_9___default()(_class.prototype, "skew", [_utils__WEBPACK_IMPORTED_MODULE_13__["attr"], _utils__WEBPACK_IMPORTED_MODULE_13__["cachable"]], Object.getOwnPropertyDescriptor(_class.prototype, "skew"), _class.prototype), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_9___default()(_class.prototype, "zIndex", [_dec25, _utils__WEBPACK_IMPORTED_MODULE_13__["attr"], _utils__WEBPACK_IMPORTED_MODULE_13__["cachable"]], Object.getOwnPropertyDescriptor(_class.prototype, "zIndex"), _class.prototype), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_9___default()(_class.prototype, "linearGradients", [_utils__WEBPACK_IMPORTED_MODULE_13__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, "linearGradients"), _class.prototype), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_9___default()(_class.prototype, "gradients", [_utils__WEBPACK_IMPORTED_MODULE_13__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, "gradients"), _class.prototype), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_9___default()(_class.prototype, "offsetPath", [_utils__WEBPACK_IMPORTED_MODULE_13__["attr"], _utils__WEBPACK_IMPORTED_MODULE_13__["cachable"]], Object.getOwnPropertyDescriptor(_class.prototype, "offsetPath"), _class.prototype), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_9___default()(_class.prototype, "offsetDistance", [_dec26, _utils__WEBPACK_IMPORTED_MODULE_13__["attr"], _utils__WEBPACK_IMPORTED_MODULE_13__["cachable"]], Object.getOwnPropertyDescriptor(_class.prototype, "offsetDistance"), _class.prototype), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_9___default()(_class.prototype, "offsetRotate", [_utils__WEBPACK_IMPORTED_MODULE_13__["attr"], _utils__WEBPACK_IMPORTED_MODULE_13__["cachable"]], Object.getOwnPropertyDescriptor(_class.prototype, "offsetRotate"), _class.prototype), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_9___default()(_class.prototype, "filter", [_utils__WEBPACK_IMPORTED_MODULE_13__["attr"], _utils__WEBPACK_IMPORTED_MODULE_13__["cachable"]], Object.getOwnPropertyDescriptor(_class.prototype, "filter"), _class.prototype), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_9___default()(_class.prototype, "shadow", [_utils__WEBPACK_IMPORTED_MODULE_13__["attr"], _utils__WEBPACK_IMPORTED_MODULE_13__["cachable"]], Object.getOwnPropertyDescriptor(_class.prototype, "shadow"), _class.prototype), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_9___default()(_class.prototype, "flexGrow", [_dec27, _utils__WEBPACK_IMPORTED_MODULE_13__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, "flexGrow"), _class.prototype), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_9___default()(_class.prototype, "flexShrink", [_dec28, _utils__WEBPACK_IMPORTED_MODULE_13__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, "flexShrink"), _class.prototype), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_9___default()(_class.prototype, "flexBasis", [_utils__WEBPACK_IMPORTED_MODULE_13__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, "flexBasis"), _class.prototype), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_9___default()(_class.prototype, "flex", [_utils__WEBPACK_IMPORTED_MODULE_13__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, "flex"), _class.prototype), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_9___default()(_class.prototype, "order", [_dec29, _utils__WEBPACK_IMPORTED_MODULE_13__["attr"], _utils__WEBPACK_IMPORTED_MODULE_13__["cachable"]], Object.getOwnPropertyDescriptor(_class.prototype, "order"), _class.prototype), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_9___default()(_class.prototype, "position", [_utils__WEBPACK_IMPORTED_MODULE_13__["attr"], _utils__WEBPACK_IMPORTED_MODULE_13__["cachable"]], Object.getOwnPropertyDescriptor(_class.prototype, "position"), _class.prototype), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_9___default()(_class.prototype, "alignSelf", [_utils__WEBPACK_IMPORTED_MODULE_13__["attr"], _utils__WEBPACK_IMPORTED_MODULE_13__["cachable"]], Object.getOwnPropertyDescriptor(_class.prototype, "alignSelf"), _class.prototype), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_9___default()(_class.prototype, "margin", [_dec30, _utils__WEBPACK_IMPORTED_MODULE_13__["attr"], _utils__WEBPACK_IMPORTED_MODULE_13__["cachable"]], Object.getOwnPropertyDescriptor(_class.prototype, "margin"), _class.prototype), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_9___default()(_class.prototype, "marginTop", [_dec31, _utils__WEBPACK_IMPORTED_MODULE_13__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, "marginTop"), _class.prototype), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_9___default()(_class.prototype, "marginRight", [_dec32, _utils__WEBPACK_IMPORTED_MODULE_13__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, "marginRight"), _class.prototype), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_9___default()(_class.prototype, "marginBottom", [_dec33, _utils__WEBPACK_IMPORTED_MODULE_13__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, "marginBottom"), _class.prototype), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_9___default()(_class.prototype, "marginLeft", [_dec34, _utils__WEBPACK_IMPORTED_MODULE_13__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, "marginLeft"), _class.prototype), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_9___default()(_class.prototype, "bgimage", [_utils__WEBPACK_IMPORTED_MODULE_13__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, "bgimage"), _class.prototype), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_9___default()(_class.prototype, "clipOverflow", [_utils__WEBPACK_IMPORTED_MODULE_13__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, "clipOverflow"), _class.prototype)), _class));


/***/ }),
/* 141 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Attr; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(131);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(138);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(139);
/* harmony import */ var _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(120);








var _dec, _class, _class2, _temp2;



var _attr = Symbol('attr'),
    _style = Symbol('style'),
    _temp = Symbol('store'),
    _subject = Symbol('subject'),
    _default = Symbol('default');

var Attr = (_dec = Object(_utils__WEBPACK_IMPORTED_MODULE_7__["deprecate"])('You can remove this call.'), (_class = (_temp2 = _class2 =
/*#__PURE__*/
function () {
  function Attr(subject) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, Attr);

    this[_subject] = subject;
    this[_default] = {};
    this[_attr] = {};
    this[_style] = {};
    this[_temp] = new Map(); // save non-serialized values

    Object.defineProperty(this, '__attributesSet', {
      value: new Set()
    });
    Object.defineProperty(this, '__styleTag', {
      writable: true,
      value: false
    });
    Object.defineProperty(this, '__updateTag', {
      writable: true,
      value: false
    });
    this.setDefault(Attr.attrDefaultValues);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(Attr, [{
    key: "getDefaultValue",
    value: function getDefaultValue(key) {
      return this[_default][key];
    }
  }, {
    key: "setDefault",
    value: function setDefault(attrs) {
      Object.assign(this[_default], attrs);
      Object.assign(this[_attr], attrs);
    }
  }, {
    key: "setAttrIndex",
    value: function setAttrIndex(key, val, idx) {
      if (val == null) val = this[_default][key][idx];
      var arr = this.get(key);
      arr[idx] = val;
      this.set(key, arr);
    }
  }, {
    key: "saveObj",
    value: function saveObj(key, val) {
      this[_temp].set(key, val);

      this.__updateTag = true;
    }
  }, {
    key: "loadObj",
    value: function loadObj(key) {
      return this[_temp].get(key);
    }
  }, {
    key: "quietSet",
    value: function quietSet(key, val) {
      var oldVal;

      if (key.length > 5 && key.indexOf('data-') === 0) {
        var dataKey = key.slice(5);
        oldVal = this.subject.data(dataKey);
        this.subject.data(dataKey, val);
      } else if (!this.__styleTag) {
        if (val != null) {
          this.__attributesSet.add(key);
        } else {
          val = this[_default][key];

          if (this.__attributesSet.has(key)) {
            this.__attributesSet.delete(key);
          }
        }

        oldVal = this[_attr][key];
        this[_attr][key] = val;
      } else if (val != null) {
        this[_style][key] = val;
      } else {
        delete this[_style][key];
      }

      if (!this.__styleTag && Attr.relatedAttributes.has(key)) {
        if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2___default()(oldVal) === 'object' || _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2___default()(val) === 'object' || oldVal !== val) {
          this.subject.updateStyles();
        }
      }
    }
  }, {
    key: "clearStyle",
    value: function clearStyle() {
      this[_style] = {};
    }
  }, {
    key: "set",
    value: function set(key, val) {
      if (!this.__styleTag && val != null) {
        this.__attributesSet.add(key);
      }

      if (!this.__styleTag && val == null) {
        val = this[_default][key];

        if (this.__attributesSet.has(key)) {
          this.__attributesSet.delete(key);
        }
      }

      if (this.__styleTag) {
        if (val != null) {
          this[_style][key] = val;
        } else {
          delete this[_style][key];
        }
      }

      var oldVal = this[_attr][key];

      if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2___default()(val) === 'object') {
        if (oldVal !== val && JSON.stringify(val) === JSON.stringify(oldVal)) {
          return false;
        }
      } else if (oldVal === val) {
        return false;
      }

      if (!this.__styleTag) {
        this[_attr][key] = val;

        if (Attr.relatedAttributes.has(key)) {
          this.subject.updateStyles();
        }
      }

      this.__updateTag = true;
      return true;
    }
  }, {
    key: "get",
    value: function get(key) {
      if (key.length > 5 && key.indexOf('data-') === 0) {
        return this.subject.data(key.slice(5));
      }

      if (this.__getStyleTag || this[_style][key] != null && !this.__attributesSet.has(key)) {
        return this[_style][key];
      }

      return this[_attr][key];
    }
  }, {
    key: "getAttributes",
    value: function getAttributes() {
      var _this = this;

      var ignoreDefault = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var ret = {};

      if (!ignoreDefault) {
        Object.keys(this[_attr]).forEach(function (key) {
          if (_this[key] !== undefined) {
            ret[key] = _this[key];
          }
        });
      }

      _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(this.__attributesSet).forEach(function (key) {
        if (key.indexOf('__internal') !== 0) {
          ret[key] = _this[key];
        }
      });

      Object.entries(this).forEach(function (_ref) {
        var _ref2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref, 2),
            key = _ref2[0],
            value = _ref2[1];

        if (key.indexOf('__') !== 0) {
          ret[key] = value;
        }
      });
      return ret;
    }
  }, {
    key: "clearCache",
    value: function clearCache() {
      return this;
    }
  }, {
    key: "merge",
    value: function merge(attrs) {
      if (typeof attrs === 'string') {
        attrs = JSON.parse(attrs);
      }

      return this;
    }
  }, {
    key: "serialize",
    value: function serialize() {
      var attrs = this.getAttributes();
      delete attrs.id;
      return JSON.stringify(attrs);
    }
  }, {
    key: "__attr",
    get: function get() {
      return this[_attr];
    }
  }, {
    key: "style",
    get: function get() {
      return this[_style];
    }
  }, {
    key: "attrs",
    get: function get() {
      return this.getAttributes(false);
    }
  }, {
    key: "subject",
    get: function get() {
      return this[_subject];
    }
    /* ------------------- define attributes ----------------------- */

  }, {
    key: "id",
    set: function set(val) {
      return this.quietSet('id', String(val));
    }
  }, {
    key: "name",
    set: function set(val) {
      return this.quietSet('name', String(val));
    }
  }, {
    key: "class",
    set: function set(val) {
      return this.quietSet('class', String(val));
    }
  }]);

  return Attr;
}(), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_class2, "relatedAttributes", new Set()), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(_class2, "attrDefaultValues", {}), _temp2), (_babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_6___default()(_class.prototype, "clearCache", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "clearCache"), _class.prototype), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_6___default()(_class.prototype, "id", [_utils__WEBPACK_IMPORTED_MODULE_7__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, "id"), _class.prototype), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_6___default()(_class.prototype, "name", [_utils__WEBPACK_IMPORTED_MODULE_7__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, "name"), _class.prototype), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_6___default()(_class.prototype, "class", [_utils__WEBPACK_IMPORTED_MODULE_7__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, "class"), _class.prototype)), _class));


/***/ }),
/* 142 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BaseNode; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(131);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(138);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _attr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(141);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(120);






// import stylesheet from './stylesheet';



var _eventHandlers = Symbol('eventHandlers'),
    _collisionState = Symbol('collisionState'),
    _data = Symbol('data'),
    _mouseCapture = Symbol('mouseCapture');

var _attr = Symbol('attr');

var BaseNode =
/*#__PURE__*/
function () {
  function BaseNode(attrs) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, BaseNode);

    this[_eventHandlers] = {};
    this[_data] = {};
    this[_attr] = new this.constructor.Attr(this);

    if (attrs) {
      this.attr(attrs);
    }
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(BaseNode, [{
    key: "serialize",
    value: function serialize() {
      var nodeType = this.nodeType,
          attrs = this[_attr].serialize(),
          dataset = JSON.stringify(this.dataset),
          id = this.id;

      return {
        nodeType: nodeType,
        attrs: attrs,
        dataset: dataset,
        id: id
      };
    }
  }, {
    key: "clearLayout",
    value: function clearLayout() {
      if (this.hasLayout) {
        this.parent.clearLayout();
      }
    }
  }, {
    key: "merge",
    value: function merge(attrs) {
      this[_attr].merge(attrs);
    }
  }, {
    key: "cloneNode",
    value: function cloneNode() {
      var node = new this.constructor();
      node.merge(this[_attr].serialize());
      node.data(this.dataset);
      var bgimage = this.attr('bgimage');

      if (bgimage && bgimage.image) {
        node.attr('bgimage', null);
        node.attr('bgimage', Object.assign({}, bgimage));
      }

      return node;
    }
  }, {
    key: "attr",
    value: function attr(props, val) {
      var _this = this;

      var setVal = function setVal(key, value) {
        if (!(key in _this[_attr])) {
          Object.defineProperty(_this[_attr], key, {
            // enumerable: true,
            configurable: true,
            set: function set(value) {
              var subject = this.subject;
              this.quietSet(key, value); // fixed color inherit

              if (key === 'color') {
                subject.attr('fillColor', value);
              } // fixed font inherit


              if (key === 'fontSize' || key === 'fontFamily' || key === 'fontStyle' || key === 'fontVariant' || key === 'fontWeight') {
                var font = this.get('font') || 'normal normal normal 16px Arial';
                var parsed = Object(_utils__WEBPACK_IMPORTED_MODULE_7__["parseFont"])(font);
                parsed.fontSize = parsed.size + parsed.unit;

                if (key === 'fontSize' && (typeof value === 'number' || /[\d.]$/.test(value))) {
                  value += 'px';
                }

                parsed[key] = value;
                var style = parsed.style,
                    variant = parsed.variant,
                    weight = parsed.weight,
                    family = parsed.family,
                    fontSize = parsed.fontSize;
                subject.attr('font', "".concat(style, " ").concat(variant, " ").concat(weight, " ").concat(fontSize, " ").concat(family));
              }

              if (key === 'font' || key === 'lineHeight' || key === 'lineBreak' || key === 'wordBreak' || key === 'letterSpacing' || key === 'textIndent') {
                var children = subject.querySelectorAll('*');
                children.forEach(function (node) {
                  if (node.retypesetting) node.retypesetting();
                });
              }

              if (_utils__WEBPACK_IMPORTED_MODULE_7__["inheritAttributes"].has(key)) {
                subject.forceUpdate();
              }
            },
            get: function get() {
              return this.get(key);
            }
          });
        }

        _this[_attr][key] = value;
      };

      if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2___default()(props) === 'object') {
        Object.entries(props).forEach(function (_ref) {
          var _ref2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_ref, 2),
              prop = _ref2[0],
              value = _ref2[1];

          _this.attr(prop, value);
        });
        return this;
      }

      if (typeof props === 'string') {
        if (val !== undefined) {
          if (props === 'attrs') {
            if (Array.isArray(val)) {
              val = Object.assign.apply(Object, [{}].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(val)));
            }

            Object.entries(val).forEach(function (_ref3) {
              var _ref4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_ref3, 2),
                  prop = _ref4[0],
                  value = _ref4[1];

              _this.attr(prop, value);
            });
            return this;
          }

          if (props === 'style') {
            if (Array.isArray(val)) {
              val = Object.assign.apply(Object, [{}].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(val)));
            }

            Object.entries(val).forEach(function (_ref5) {
              var _ref6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_ref5, 2),
                  prop = _ref6[0],
                  value = _ref6[1];

              _this.style[prop] = value;
            });
            return this;
          }

          if (typeof val === 'function') {
            val = val(this.attr(props));
          }

          if (val && typeof val.then === 'function') {
            return val.then(function (res) {
              setVal(props, res);
            });
          }

          setVal(props, val);
          return this;
        }

        return props in this[_attr] ? this[_attr][props] : this[_attr].get(props);
      }

      return this[_attr].attrs;
    }
  }, {
    key: "forceUpdate",
    value: function forceUpdate() {
      var parent = this.parent;

      if (parent) {
        this.parent.update(this);
      }
    }
  }, {
    key: "restyle",
    value: function restyle() {// stylesheet.computeStyle(this);
    }
  }, {
    key: "draw",
    value: function draw() {
      var styleNeedUpdate = this.__styleNeedUpdate;

      if (styleNeedUpdate) {
        this.restyle();

        if (this.querySelectorAll) {
          var children = this.querySelectorAll('*');
          children.forEach(function (child) {
            return child.restyle();
          });
        }

        if (styleNeedUpdate === 'siblings') {
          if (this.parent) {
            var _children = this.parent.children;

            var index = _children.indexOf(this);

            var len = _children.length;

            for (var i = index + 1; i < len; i++) {
              var node = _children[i];
              node.restyle();

              if (node.querySelectorAll) {
                var nodes = node.querySelectorAll('*');
                nodes.forEach(function (child) {
                  return child.restyle();
                });
              }
            }
          }
        }
      }
    }
  }, {
    key: "data",
    value: function data(props, val) {
      var _this2 = this;

      var setVal = function setVal(key, value) {
        _this2[_data][key] = value;

        if (_this2.attr) {
          var attrKey = "data-".concat(key); // this.attr(attrKey, value);

          if (_attr__WEBPACK_IMPORTED_MODULE_6__["default"].relatedAttributes.has(attrKey)) {
            _this2.updateStyles();
          }
        }

        if (value == null) {
          delete _this2[_data][key];
        }
      };

      if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2___default()(props) === 'object') {
        Object.entries(props).forEach(function (_ref7) {
          var _ref8 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_ref7, 2),
              prop = _ref8[0],
              value = _ref8[1];

          _this2.data(prop, value);
        });
        return this;
      }

      if (typeof props === 'string') {
        if (val !== undefined) {
          if (typeof val === 'function') {
            val = val(this[_data][props]);
          }

          if (val && typeof val.then === 'function') {
            return val.then(function (res) {
              setVal(props, res);
            });
          }

          setVal(props, val);
          return this;
        }

        return this[_data][props];
      }

      return this[_data];
    }
  }, {
    key: "updateStyles",
    value: function updateStyles() {
      var nextSibling = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      // append to parent & reset name or class or id auto updateStyles
      this.__styleNeedUpdate = nextSibling ? 'siblings' : 'children';
      this.forceUpdate();
    }
  }, {
    key: "getEventHandlers",
    value: function getEventHandlers(type) {
      return type != null ? this[_eventHandlers][type] || [] : this[_eventHandlers];
    }
  }, {
    key: "on",
    value: function on(type, handler) {
      var _this3 = this;

      if (Array.isArray(type)) {
        type.forEach(function (t) {
          return _this3.on(t, handler);
        });
      } else {
        this[_eventHandlers][type] = this[_eventHandlers][type] || [];

        this[_eventHandlers][type].push(handler);
      }

      return this;
    }
  }, {
    key: "once",
    value: function once(type, handler) {
      var _this4 = this;

      if (Array.isArray(type)) {
        type.forEach(function (t) {
          return _this4.once(t, handler);
        });
      } else {
        this.on(type, function f() {
          this.off(type, f);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          return handler.apply(this, args);
        });
      }

      return this;
    }
  }, {
    key: "off",
    value: function off(type, handler) {
      var _this5 = this;

      if (Array.isArray(type)) {
        type.forEach(function (t) {
          return _this5.off(t, handler);
        });
      } else if (handler && this[_eventHandlers][type]) {
        var idx = this[_eventHandlers][type].indexOf(handler);

        if (idx >= 0) {
          this[_eventHandlers][type].splice(idx, 1);
        }
      } else {
        delete this[_eventHandlers][type];
      }

      return this;
    }
  }, {
    key: "remove",
    value: function remove() {
      var exit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      if (!this.parent) return null;
      return this.parent.removeChild(this, exit);
    }
  }, {
    key: "pointCollision",
    value: function pointCollision(evt) {
      throw Error('you mast override this method');
    }
  }, {
    key: "setMouseCapture",
    value: function setMouseCapture() {
      this[_mouseCapture] = true;
    }
  }, {
    key: "releaseMouseCapture",
    value: function releaseMouseCapture() {
      this[_mouseCapture] = false;
    }
  }, {
    key: "isCaptured",
    value: function isCaptured(evt) {
      return (evt.type === 'mousemove' || evt.type === 'mousedown' || evt.type === 'mouseup') && this[_mouseCapture];
    }
  }, {
    key: "dispatchEvent",
    value: function dispatchEvent(type, evt) {
      var _this6 = this;

      var collisionState = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var swallow = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      // eslint-disable-line complexity
      var handlers = this.getEventHandlers(type);
      evt.returnValue = true;

      if (swallow && handlers.length === 0) {
        return;
      }

      if (!evt.stopDispatch) {
        evt.stopDispatch = function () {
          evt.terminated = true;
        };
      }

      if (!evt.stopPropagation) {
        evt.stopPropagation = function () {
          evt.cancelBubble = true;
        };
      }

      if (!evt.preventDefault) {
        evt.preventDefault = function () {
          evt.returnValue = false;
        };
      }

      if (evt.type !== type) {
        if (evt.type) {
          evt.originalType = evt.type;
        }

        evt.type = type;
      }

      var isCollision = collisionState || this.pointCollision(evt);
      var captured = this.isCaptured(evt);

      if (this[_collisionState] && type === 'mouseleave') {
        // dispatched from group
        evt.target = this;
        this[_collisionState] = false;
        isCollision = true;
        this.attr('__internal_state_hover_', null);
      }

      if (!evt.terminated && (isCollision || captured)) {
        if (!evt.target) evt.target = this;
        var changedTouches = evt.originalEvent && evt.originalEvent.changedTouches;

        if (changedTouches) {
          if (type === 'touchstart') {
            var touch = changedTouches[0],
                layer = this.layer;

            if (touch && touch.identifier != null) {
              layer.touchedTargets[touch.identifier] = layer.touchedTargets[touch.identifier] || [];
              layer.touchedTargets[touch.identifier].push(this);
            }
          }

          if (/^touch/.test(type)) {
            var touches = Array.from(evt.originalEvent.touches),
                _layer = this.layer;
            evt.targetTouches = [];
            touches.forEach(function (touch) {
              var identifier = touch.identifier;

              if (_layer.touchedTargets[identifier] && _layer.touchedTargets[identifier].indexOf(_this6) >= 0) {
                evt.targetTouches.push(touch);
              }
            });
            evt.touches = touches;
            evt.changedTouches = Array.from(changedTouches);
          }
        }

        if (type === 'mousedown' || type === 'touchstart') {
          this.attr('__internal_state_active_', 'active');
        } else if (type === 'mouseup' || type === 'touchend') {
          this.attr('__internal_state_active_', null);
        }

        _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(handlers).forEach(function (handler) {
          return handler.call(_this6, evt);
        });

        if (!this[_collisionState] && isCollision && type === 'mousemove') {
          var _evt = Object.assign({}, evt);

          _evt.type = 'mouseenter';
          delete _evt.target;
          _evt.terminated = false;
          this.dispatchEvent('mouseenter', _evt, true, true);
          this.attr('__internal_state_hover_', 'hover');
          this[_collisionState] = true;
        }
      }

      if (this[_collisionState] && !isCollision && type === 'mousemove') {
        var _evt2 = Object.assign({}, evt);

        _evt2.type = 'mouseleave';
        delete _evt2.target;
        _evt2.terminated = false;
        this.dispatchEvent('mouseleave', _evt2);
        this.attr('__internal_state_hover_', null); // this[_collisionState] = false;
      }

      return isCollision;
    } // called when layer appendChild

  }, {
    key: "connect",
    value: function connect(parent) {
      var zOrder = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      if (this.parent) {
        // throw new Error('This node belongs to another parent node! Remove it first...')
        this.remove();
      }

      Object.defineProperty(this, 'zOrder', {
        value: zOrder,
        writable: false,
        configurable: true
      });
      Object.defineProperty(this, 'parent', {
        get: function get() {
          return parent;
        },
        configurable: true
      });
      this.dispatchEvent('append', {
        parent: parent,
        zOrder: zOrder
      }, true, true);
      parent.dispatchEvent('appendChild', {
        child: this,
        zOrder: zOrder
      }, true, true);

      if (this.layer) {
        this.updateStyles(true);
      }

      return this;
    } // override to recycling resources

  }, {
    key: "disconnect",
    value: function disconnect(parent) {
      if (!this.parent || parent !== this.parent) {
        throw new Error('Invalid node to disconnect');
      }

      if (this.layer) {
        var nextSibling = this.nextElementSilbing;
        if (nextSibling) nextSibling.updateStyles(true);
      }

      var zOrder = this.zOrder;
      delete this.zOrder;
      delete this.parent;
      delete this.isDirty;
      this.dispatchEvent('remove', {
        parent: parent,
        zOrder: zOrder
      }, true, true);
      parent.dispatchEvent('removeChild', {
        child: this,
        zOrder: zOrder
      }, true, true);
      return this;
    }
  }, {
    key: "enter",
    value: function enter() {
      // override to do atction after connection, can return a promise
      return this;
    }
  }, {
    key: "exit",
    value: function exit() {
      // override to do atction before disconnection, can return a promise
      return this;
    }
  }, {
    key: "__attr",
    get: function get() {
      return this[_attr];
    }
  }, {
    key: "layer",
    get: function get() {
      return this.parent && this.parent.layer;
    }
  }, {
    key: "dataset",
    get: function get() {
      return this[_data];
    }
  }, {
    key: "id",
    set: function set(val) {
      this.attr('id', val);
    },
    get: function get() {
      return this.attr('id');
    }
  }, {
    key: "name",
    set: function set(val) {
      this.attr('name', val);
    },
    get: function get() {
      return this.attr('name');
    }
  }, {
    key: "className",
    set: function set(val) {
      this.attr('class', val);
    },
    get: function get() {
      return this.attr('class');
    }
  }]);

  return BaseNode;
}();

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(BaseNode, "Attr", _attr__WEBPACK_IMPORTED_MODULE_6__["default"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(BaseNode, "inheritAttributes", _utils__WEBPACK_IMPORTED_MODULE_7__["inheritAttributes"]);



/***/ }),
/* 143 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(132);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(133);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(134);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(136);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var sprite_animator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1);
/* harmony import */ var sprite_math__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(111);
/* harmony import */ var sprite_math__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(sprite_math__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(120);
/* harmony import */ var _helpers_fast_animation_frame__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(144);












var _defaultEffect = sprite_animator__WEBPACK_IMPORTED_MODULE_8__["Effects"].default;

var defaultEffect = function defaultEffect(from, to, p, start, end) {
  var unitFrom = 'px',
      unitTo = 'px';
  var matchFrom = null,
      matchTo = null;
  var exp = /^([\d.]+)(%|rh|rw)$/i;

  if (typeof from === 'string') {
    matchFrom = exp.exec(from);

    if (matchFrom) {
      unitFrom = matchFrom[2];
    }
  }

  if (typeof to === 'string') {
    matchTo = exp.exec(to);

    if (matchTo) {
      unitTo = matchTo[2];
    }
  }

  if (unitFrom === unitTo) {
    if (matchFrom) from = parseFloat(matchFrom[1]);
    if (matchTo) to = parseFloat(matchTo[1]);
  }

  var v = _defaultEffect(from, to, p, start, end);

  return unitFrom !== 'px' ? "".concat(v).concat(unitFrom) : v;
};

sprite_animator__WEBPACK_IMPORTED_MODULE_8__["Effects"].default = defaultEffect;

function arrayEffect(arr1, arr2, p, start, end) {
  if (typeof arr1 === 'string') {
    arr1 = Object(_utils__WEBPACK_IMPORTED_MODULE_10__["parseStringFloat"])(arr1);
  }

  if (typeof arr2 === 'string') {
    arr2 = Object(_utils__WEBPACK_IMPORTED_MODULE_10__["parseStringFloat"])(arr2);
  }

  if (Array.isArray(arr1)) {
    return arr1.map(function (o, i) {
      return defaultEffect(o, arr2[i], p, start, end);
    });
  }

  return defaultEffect(arr1, arr2, p, start, end);
}

function objectEffect(obj1, obj2, p, start, end) {
  var t1 = Object.assign({}, obj2, obj1),
      t2 = Object.assign({}, obj1, obj2);
  Object.entries(t1).forEach(function (_ref) {
    var _ref2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_7___default()(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];

    t1[key] = arrayEffect(value, t2[key], p, start, end);
  });
  return t1;
}

function getTransformMatrix(trans) {
  var matrix = new sprite_math__WEBPACK_IMPORTED_MODULE_9__["Matrix"]();
  Object.entries(trans).forEach(function (_ref3) {
    var _ref4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_7___default()(_ref3, 2),
        key = _ref4[0],
        val = _ref4[1];

    if (key === 'matrix') {
      matrix = new sprite_math__WEBPACK_IMPORTED_MODULE_9__["Matrix"](val);
    } else if (Array.isArray(val)) {
      var _matrix;

      (_matrix = matrix)[key].apply(_matrix, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_6___default()(val));
    } else if (key === 'scale') {
      matrix.scale(val, val);
    } else {
      matrix[key](val);
    }
  });
  return matrix.m;
}

function arrayEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
}

function transformEffect(trans1, trans2, p, start, end) {
  trans1 = Object(_utils__WEBPACK_IMPORTED_MODULE_10__["parseStringTransform"])(trans1);
  trans2 = Object(_utils__WEBPACK_IMPORTED_MODULE_10__["parseStringTransform"])(trans2);

  if (!arrayEqual(Object.keys(trans1), Object.keys(trans2))) {
    trans1 = getTransformMatrix(trans1);
    trans2 = getTransformMatrix(trans2);
  }

  if (Array.isArray(trans1) || Array.isArray(trans2)) {
    return arrayEffect(trans1, trans2, p, start, end);
  }

  return objectEffect(trans1, trans2, p, start, end);
}

function colorEffect(color1, color2, p, start, end) {
  var c1 = Object(_utils__WEBPACK_IMPORTED_MODULE_10__["parseColor"])(color1);
  var c2 = Object(_utils__WEBPACK_IMPORTED_MODULE_10__["parseColor"])(color2);

  if (c1.model === c2.model) {
    c1.value = arrayEffect(c1.value, c2.value, p, start, end).map(function (c, i) {
      return i < 3 ? Math.round(c) : Math.round(c * 100) / 100;
    });
    return c1.str;
  }

  return defaultEffect(color1, color2, p, start, end);
}

Object.assign(sprite_animator__WEBPACK_IMPORTED_MODULE_8__["Effects"], {
  arrayEffect: arrayEffect,
  transformEffect: transformEffect,
  colorEffect: colorEffect,
  pos: arrayEffect,
  size: arrayEffect,
  transform: transformEffect,
  bgcolor: colorEffect,
  border: function border(v1, v2, p, start, end) {
    return {
      width: defaultEffect(v1.width, v2.width, p, start, end),
      color: colorEffect(v1.color, v2.color, p, start, end),
      style: arrayEffect(v1.style, v2.style, p, start, end)
    };
  },
  scale: arrayEffect,
  translate: arrayEffect,
  skew: arrayEffect,
  padding: arrayEffect,
  margin: arrayEffect,
  color: colorEffect,
  strokeColor: colorEffect,
  fillColor: colorEffect
});

var _default =
/*#__PURE__*/
function (_Animator) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(_default, _Animator);

  function _default(sprite, frames, timing, setter) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, _default);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(_default).call(this, sprite.attr(), frames, timing));
    _this.target = sprite;

    _this.setter = setter || function (frame, target) {
      target.attr(frame);
    };

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(_default, [{
    key: "finish",
    value: function finish() {
      // finish should change attrs synchronously
      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(_default.prototype), "finish", this).call(this);

      Object(_helpers_fast_animation_frame__WEBPACK_IMPORTED_MODULE_11__["cancelAnimationFrame"])(this.requestId);
      this.setter(this.frame, this.target);
    }
  }, {
    key: "play",
    value: function play() {
      if (!this.target.parent || this.playState === 'running') {
        return;
      }

      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(_default.prototype), "play", this).call(this);

      this.setter(this.frame, this.target);
      var that = this;
      this.ready.then(function () {
        that.setter(that.frame, that.target);
        that.requestId = Object(_helpers_fast_animation_frame__WEBPACK_IMPORTED_MODULE_11__["requestAnimationFrame"])(function update() {
          var target = that.target;

          if (typeof document !== 'undefined' && document.documentElement && document.documentElement.contains && target.layer && target.layer.canvas && !document.documentElement.contains(target.layer.canvas)) {
            // if dom element has been removed stop animation.
            // it usually occurs in single page applications.
            that.cancel();
            return;
          }

          var playState = that.playState;
          that.setter(that.frame, that.target);
          if (playState === 'idle') return;

          if (playState === 'running') {
            that.requestId = Object(_helpers_fast_animation_frame__WEBPACK_IMPORTED_MODULE_11__["requestAnimationFrame"])(update);
          } else if (playState === 'paused' || playState === 'pending' && that.timeline.currentTime < 0) {
            // playbackRate < 0 will cause playState reset to pending...
            that.ready.then(function () {
              that.setter(that.frame, that.target);
              that.requestId = Object(_helpers_fast_animation_frame__WEBPACK_IMPORTED_MODULE_11__["requestAnimationFrame"])(update);
            });
          }
        });
      });
    }
  }, {
    key: "cancel",
    value: function cancel() {
      var preserveState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      Object(_helpers_fast_animation_frame__WEBPACK_IMPORTED_MODULE_11__["cancelAnimationFrame"])(this.requestId);

      if (preserveState) {
        this.setter(this.frame, this.target);

        _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(_default.prototype), "cancel", this).call(this);
      } else {
        _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(_default.prototype), "cancel", this).call(this);

        this.setter(this.frame, this.target);
      }
    }
  }, {
    key: "playState",
    get: function get() {
      if (!this.target.parent) {
        return 'idle';
      }

      return _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(_default.prototype), "playState", this);
    }
  }, {
    key: "finished",
    get: function get() {
      var _this2 = this;

      // set last frame when finished
      // because while the web page is not focused
      // requestAnimationFrame will not trigger while deferTime of
      // the animator is still running
      return _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(_default.prototype), "finished", this).then(function () {
        var that = _this2;
        return new Promise(function (resolve) {
          function update() {
            that.setter(that.frame, that.target);
            var playState = that.playState;

            if (playState === 'finished' || playState === 'idle') {
              Object(_helpers_fast_animation_frame__WEBPACK_IMPORTED_MODULE_11__["cancelAnimationFrame"])(that.requestId);
              resolve();
            } else {
              Object(_helpers_fast_animation_frame__WEBPACK_IMPORTED_MODULE_11__["requestAnimationFrame"])(update);
            }
          }

          update();
        });
      });
    }
  }]);

  return _default;
}(sprite_animator__WEBPACK_IMPORTED_MODULE_8__["Animator"]);



/***/ }),
/* 144 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestAnimationFrame", function() { return requestAnimationFrame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cancelAnimationFrame", function() { return cancelAnimationFrame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeline", function() { return timeline; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var sprite_animator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);




var _requestAnimationFrame, _cancelAnimationFrame;

if (typeof global.requestAnimationFrame === 'undefined') {
  _requestAnimationFrame = function _requestAnimationFrame(fn) {
    return setTimeout(function () {
      fn(Date.now());
    }, 16);
  };

  _cancelAnimationFrame = function _cancelAnimationFrame(id) {
    return clearTimeout(id);
  };
} else {
  _requestAnimationFrame = global.requestAnimationFrame;
  _cancelAnimationFrame = global.cancelAnimationFrame;
}

var steps = new Map();
var timerId;
var currentTime = Date.now();

var requestAnimationFrame = function requestAnimationFrame(step) {
  var id = Symbol('requestId');
  steps.set(id, step);

  if (timerId == null) {
    if (steps.size === 1) {
      currentTime = Date.now();
    }

    timerId = _requestAnimationFrame(function (t) {
      timerId = null;
      currentTime = Date.now();

      _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(steps).forEach(function (_ref) {
        var _ref2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref, 2),
            id = _ref2[0],
            callback = _ref2[1];

        callback(t);
        steps.delete(id);
      });
    });
  }

  return id;
};

var cancelAnimationFrame = function cancelAnimationFrame(id) {
  steps.delete(id);

  if (!steps.size && timerId) {
    _cancelAnimationFrame(timerId);

    timerId = null;
  }
};

var timeline = new sprite_animator__WEBPACK_IMPORTED_MODULE_2__["Timeline"]({
  nowtime: function nowtime() {
    return steps.size ? currentTime : Date.now();
  }
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(145)))

/***/ }),
/* 145 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 146 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(120);

// http://www.runoob.com/cssref/css3-pr-filter.html

/* harmony default export */ __webpack_exports__["default"] = ({
  blur: function blur(px) {
    return "blur(".concat(Object(_utils__WEBPACK_IMPORTED_MODULE_1__["appendUnit"])(px), ")");
  },
  brightness: function brightness(percent) {
    return "brightness(".concat(percent, ")");
  },
  contrast: function contrast(percent) {
    return "contrast(".concat(percent, ")");
  },
  dropShadow: function dropShadow(_ref) {
    var _ref2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref, 4),
        offsetX = _ref2[0],
        offsetY = _ref2[1],
        shadowRadius = _ref2[2],
        color = _ref2[3];

    return "drop-shadow(".concat(Object(_utils__WEBPACK_IMPORTED_MODULE_1__["appendUnit"])(offsetX), " ").concat(Object(_utils__WEBPACK_IMPORTED_MODULE_1__["appendUnit"])(offsetY), " ").concat(Object(_utils__WEBPACK_IMPORTED_MODULE_1__["appendUnit"])(shadowRadius), " ").concat(color, ")");
  },
  grayscale: function grayscale(percent) {
    return "grayscale(".concat(percent, ")");
  },
  hueRotate: function hueRotate(value) {
    return "hue-rotate(".concat(Object(_utils__WEBPACK_IMPORTED_MODULE_1__["appendUnit"])(value, 'deg'), ")");
  },
  invert: function invert(percent) {
    return "invert(".concat(percent, ")");
  },
  opacity: function opacity(percent) {
    return "opacity(".concat(percent, ")");
  },
  saturate: function saturate(percent) {
    return "saturate(".concat(percent, ")");
  },
  sepia: function sepia(percent) {
    return "sepia(".concat(percent, ")");
  },
  url: function url(path) {
    return "url(".concat(path, ")");
  },
  compile: function compile() {
    var _this = this;

    var filter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return Object.entries(filter).reduce(function (accumulator, curVal) {
      return accumulator.concat(_this[curVal[0]](curVal[1]));
    }, []).join(' ');
  }
});

/***/ }),
/* 147 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Sprite; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_set__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(148);
/* harmony import */ var _babel_runtime_helpers_set__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_set__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(134);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(138);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(12);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(132);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(133);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(136);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(139);
/* harmony import */ var _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(120);
/* harmony import */ var _basesprite__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(129);
/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(146);












var _class, _class2, _class3, _temp;





var _texturesCache = Symbol('_texturesCache');

var _images = Symbol('_images');

var TextureAttr = (_class =
/*#__PURE__*/
function (_BaseSprite$Attr) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_9___default()(TextureAttr, _BaseSprite$Attr);

  function TextureAttr(subject) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5___default()(this, TextureAttr);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8___default()(TextureAttr).call(this, subject));

    _this.setDefault({
      textures: [],
      enableCache: true
    });

    return _this;
  }
  /*
    {
      image: ...,  //texture resource
      srcRect: ..., //texture clip
      rect: ....,  //texture in sprite offset
      filter: ...  //texture filters
    }
   */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6___default()(TextureAttr, [{
    key: "loadTextures",
    value: function loadTextures(textures) {
      var subject = this.subject; // adaptive textures

      var width = 0,
          height = 0;
      subject.images = textures.map(function (texture) {
        var image = texture.image,
            rect = texture.rect,
            srcRect = texture.srcRect;
        var w, h;

        if (rect) {
          w = rect[2] + rect[0];
          h = rect[3] + rect[1];
        } else if (srcRect) {
          w = srcRect[2];
          h = srcRect[3];
        } else {
          w = image.width;
          h = image.height;
        }

        if (width < w) {
          width = w;
        }

        if (height < h) {
          height = h;
        }

        delete texture.image;
        return image;
      });
      var texturesSize = subject.texturesSize;

      if (!texturesSize || texturesSize[0] !== width || texturesSize[1] !== height) {
        var attrSize = subject.attrSize;

        if (attrSize[0] === '' || attrSize[1] === '') {
          subject.reflow();
          subject.clearLayout();
        }
      }

      subject.texturesSize = [width, height];
      return textures;
    }
  }, {
    key: "textures",
    set: function set(textures) {
      if (!Array.isArray(textures)) {
        textures = [textures];
      }

      textures = textures.map(function (texture) {
        if (!texture.image) {
          texture = {
            image: texture
          };
        }

        texture.__tag = Object(_utils__WEBPACK_IMPORTED_MODULE_11__["generateID"])(texture.image); // prevent JSON.stringify ignorance

        return texture;
      });
      this.loadTextures(textures);
      this.set('textures', textures);
    }
  }]);

  return TextureAttr;
}(_basesprite__WEBPACK_IMPORTED_MODULE_12__["default"].Attr), (_babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_10___default()(_class.prototype, "textures", [_utils__WEBPACK_IMPORTED_MODULE_11__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, "textures"), _class.prototype)), _class);
var Sprite = (_class2 = (_temp = _class3 =
/*#__PURE__*/
function (_BaseSprite) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_9___default()(Sprite, _BaseSprite);

  /**
    new Sprite({
      attr: {
        ...
      },
      attributeChangedCallback: function(prop, oldValue, newValue){
       }
    })
   */
  function Sprite(attr) {
    var _this2;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5___default()(this, Sprite);

    if (attr && attr.constructor !== Object) {
      attr = {
        textures: [attr]
      };
    }

    _this2 = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8___default()(Sprite).call(this));
    _this2[_texturesCache] = new Map();

    if (attr) {
      _this2.attr(attr);
    }

    return _this2;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6___default()(Sprite, [{
    key: "cloneNode",
    value: function cloneNode() {
      var _this3 = this;

      var node = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8___default()(Sprite.prototype), "cloneNode", this).call(this);

      if (this.images) {
        node.textures = this.textures.map(function (texture, i) {
          texture.image = _this3.images[i];
          return texture;
        });
      }

      return node;
    }
  }, {
    key: "pointCollision",
    value: function pointCollision(evt) {
      var _this4 = this;

      if (_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8___default()(Sprite.prototype), "pointCollision", this).call(this, evt)) {
        var textures = this.textures;

        if (textures) {
          var offsetX = evt.offsetX,
              offsetY = evt.offsetY;
          if (offsetX == null && offsetY == null) return true;
          evt.targetTextures = [];

          var _this$attr = this.attr('anchor'),
              _this$attr2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_this$attr, 2),
              anchorX = _this$attr2[0],
              anchorY = _this$attr2[1],
              _this$contentSize = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(this.contentSize, 2),
              width = _this$contentSize[0],
              height = _this$contentSize[1];

          offsetX += width * anchorX;
          offsetY += height * anchorY;
          textures.forEach(function (texture) {
            var _ref = texture.rect || [0, 0].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(_this4.innerSize)),
                _ref2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_ref, 4),
                x = _ref2[0],
                y = _ref2[1],
                w = _ref2[2],
                h = _ref2[3];

            if (offsetX >= x && offsetX - x < w && offsetY >= y && offsetY - y < h) {
              // touched textures
              evt.targetTextures.push(texture);
            }
          });
        }

        return true;
      }

      return false;
    }
  }, {
    key: "render",
    value: function render(t, drawingContext) {
      var _this5 = this;

      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8___default()(Sprite.prototype), "render", this).call(this, t, drawingContext);

      var textures = this.textures;
      var cliped = !this.attr('clipOverflow');

      if (this.images && this.images.length) {
        textures.forEach(function (texture, i) {
          var img = _this5.images[i];

          var _this5$contentSize = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_this5.contentSize, 2),
              w = _this5$contentSize[0],
              h = _this5$contentSize[1];

          var rect = texture.rect || [0, 0, w, h];
          var srcRect = texture.srcRect;

          if (!cliped && texture.rect && (rect[2] > w || rect[3] > h)) {
            cliped = true;
            drawingContext.beginPath();
            drawingContext.rect(0, 0, w, h);
            drawingContext.clip();
          }

          drawingContext.save();

          if (texture.filter) {
            Object(_utils__WEBPACK_IMPORTED_MODULE_11__["setDeprecation"])('texture.filter', 'Instead use sprite.attr({filter}).');
            var imgRect = srcRect ? [0, 0, srcRect[2], srcRect[3]] : [0, 0, img.width, img.height];
            var sx = rect[2] / imgRect[2],
                sy = rect[3] / imgRect[3];
            drawingContext.filter = _filters__WEBPACK_IMPORTED_MODULE_13__["default"].compile(texture.filter);

            if (srcRect) {
              drawingContext.drawImage.apply(drawingContext, [img].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(srcRect), [sx * imgRect[0] + rect[0], sy * imgRect[1] + rect[1], sx * srcRect[2], sy * srcRect[3]]));
            } else {
              drawingContext.drawImage(img, sx * imgRect[0] + rect[0], sy * imgRect[1] + rect[1], sx * img.width, sy * img.height);
            }
          } else if (srcRect) {
            drawingContext.drawImage.apply(drawingContext, [img].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(srcRect), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(rect)));
          } else {
            drawingContext.drawImage.apply(drawingContext, [img].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(rect)));
          }

          drawingContext.restore();
        });
      }
    }
  }, {
    key: "images",
    set: function set(images) {
      this[_images] = images;
    },
    get: function get() {
      return this[_images];
    }
  }, {
    key: "textures",
    set: function set(textures) {
      this.attr('textures', textures);
    },
    get: function get() {
      return this.attr('textures');
    } // override to adapt textures' size

  }, {
    key: "contentSize",
    get: function get() {
      var _this$attrSize = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(this.attrSize, 2),
          width = _this$attrSize[0],
          height = _this$attrSize[1];

      var boxSize = this.texturesSize || [0, 0];
      var w = width,
          h = height;

      if (width === '') {
        w = boxSize[0] | 0;

        if (height !== '' && boxSize[1]) {
          w *= height / boxSize[1];
        }
      }

      if (height === '') {
        h = boxSize[1] | 0;

        if (width !== '' && boxSize[0]) {
          h *= width / boxSize[0];
        }
      }

      return [w, h];
    }
  }, {
    key: "cache",
    get: function get() {
      var bg = this.attr('bgcolor') || this.attr('gradients').bgcolor;

      if (!bg && this.textures.length <= 1) {
        return false;
      }

      return _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8___default()(Sprite.prototype), "cache", this);
    },
    set: function set(context) {
      _babel_runtime_helpers_set__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8___default()(Sprite.prototype), "cache", context, this, true);
    }
  }]);

  return Sprite;
}(_basesprite__WEBPACK_IMPORTED_MODULE_12__["default"]), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_class3, "Attr", TextureAttr), _temp), (_babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_10___default()(_class2.prototype, "contentSize", [_utils__WEBPACK_IMPORTED_MODULE_11__["flow"]], Object.getOwnPropertyDescriptor(_class2.prototype, "contentSize"), _class2.prototype)), _class2);


/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__(133);

var superPropBase = __webpack_require__(135);

var defineProperty = __webpack_require__(138);

function set(target, property, value, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.set) {
    set = Reflect.set;
  } else {
    set = function set(target, property, value, receiver) {
      var base = superPropBase(target, property);
      var desc;

      if (base) {
        desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.set) {
          desc.set.call(receiver, value);
          return true;
        } else if (!desc.writable) {
          return false;
        }
      }

      desc = Object.getOwnPropertyDescriptor(receiver, property);

      if (desc) {
        if (!desc.writable) {
          return false;
        }

        desc.value = value;
        Object.defineProperty(receiver, property, desc);
      } else {
        defineProperty(receiver, property, value);
      }

      return true;
    };
  }

  return set(target, property, value, receiver);
}

function _set(target, property, value, receiver, isStrict) {
  var s = set(target, property, value, receiver || target);

  if (!s && isStrict) {
    throw new Error('failed to set property');
  }

  return value;
}

module.exports = _set;

/***/ }),
/* 149 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Label; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(131);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(134);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(138);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(12);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(132);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(133);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(136);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(139);
/* harmony import */ var _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var css_line_break__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(150);
/* harmony import */ var css_line_break__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(css_line_break__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(120);
/* harmony import */ var _basesprite__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(129);
/* harmony import */ var _helpers_render__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(128);












var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _class, _class2, _class3, _temp;






var _boxSize = Symbol('boxSize'),
    _outputText = Symbol('outputText');

var measureText = function measureText(node, text, font) {
  var lineHeight = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
  var ctx = node.context;

  if (!ctx) {
    return [0, 0];
  }

  ctx.save();
  ctx.font = font;

  var _ctx$measureText = ctx.measureText(text),
      width = _ctx$measureText.width;

  ctx.restore();
  var letterSpacing = node.attr('letterSpacing');

  if (letterSpacing) {
    width += letterSpacing * (text.length - 1);
  }

  var _parseFont = Object(_utils__WEBPACK_IMPORTED_MODULE_12__["parseFont"])(font),
      size = _parseFont.size;

  var height = lineHeight || size * 1.2;
  return [width, height].map(Math.round);
};

function calculTextboxSize(node) {
  if (!node.context) return '';
  var text = node.text,
      font = node.attr('font'),
      lineHeight = node.attr('lineHeight'),
      textIndent = node.attr('textIndent');
  var lines = [];
  var width = 0,
      height = 0;
  node[_outputText] = text;
  var lineBreak = node.attr('lineBreak'),
      textboxWidth = node.hasLayout ? node.attr('layoutWidth') : node.attr('width');

  if (lineBreak !== '' && textboxWidth !== '') {
    var wordBreak = node.attr('wordBreak');
    text.split(/\n/).forEach(function (line) {
      var breaker = Object(css_line_break__WEBPACK_IMPORTED_MODULE_11__["LineBreaker"])(line, {
        lineBreak: lineBreak,
        wordBreak: wordBreak
      });
      var words = [];
      var bk = breaker.next();

      while (!bk.done) {
        words.push(bk.value.slice());
        bk = breaker.next();
      }

      var l = '';
      words.forEach(function (word) {
        if (!l) {
          l = word;
        } else {
          var ll = "".concat(l).concat(word);

          var _measureText = measureText(node, ll, font),
              _measureText2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_10___default()(_measureText, 1),
              w = _measureText2[0];

          if (w > (lines.length === 0 ? textboxWidth - textIndent : textboxWidth)) {
            lines.push(l);
            l = word;
          } else {
            l = ll;
          }
        }
      });
      lines.push(l);
    }); // lines = node[_outputText].split(/\n/)

    node[_outputText] = lines.join('\n');
  } else {
    lines = text.split(/\n/);
  }

  lines.forEach(function (line, idx) {
    var _measureText3 = measureText(node, line, font, lineHeight),
        _measureText4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_10___default()(_measureText3, 2),
        w = _measureText4[0],
        h = _measureText4[1];

    if (idx === 0) w += textIndent;
    width = Math.max(width, w);
    height += h;
  });
  var boxSize = node[_boxSize];

  if (!boxSize || boxSize[0] !== width || boxSize[1] !== height) {
    var attrSize = node.attrSize;

    if (attrSize[0] === '' || attrSize[1] === '') {
      node.reflow();
      node.clearLayout();
    }
  }

  node[_boxSize] = [width, height];
}

function setFontPart(font, part) {
  var _Object$assign = Object.assign(Object(_utils__WEBPACK_IMPORTED_MODULE_12__["parseFont"])(font), part),
      style = _Object$assign.style,
      variant = _Object$assign.variant,
      weight = _Object$assign.weight,
      size0 = _Object$assign.size0,
      unit = _Object$assign.unit,
      family = _Object$assign.family;

  return "".concat(style, " ").concat(variant, " ").concat(weight, " ").concat(size0).concat(unit, " ").concat(family);
}

var LabelSpriteAttr = (_dec = Object(_utils__WEBPACK_IMPORTED_MODULE_12__["inherit"])('normal normal normal 16px Arial'), _dec2 = Object(_utils__WEBPACK_IMPORTED_MODULE_12__["parseValue"])(parseFloat), _dec3 = Object(_utils__WEBPACK_IMPORTED_MODULE_12__["inherit"])(''), _dec4 = Object(_utils__WEBPACK_IMPORTED_MODULE_12__["inherit"])('left'), _dec5 = Object(_utils__WEBPACK_IMPORTED_MODULE_12__["parseValue"])(_utils__WEBPACK_IMPORTED_MODULE_12__["parseColorString"]), _dec6 = Object(_utils__WEBPACK_IMPORTED_MODULE_12__["inherit"])(''), _dec7 = Object(_utils__WEBPACK_IMPORTED_MODULE_12__["parseValue"])(_utils__WEBPACK_IMPORTED_MODULE_12__["parseColorString"]), _dec8 = Object(_utils__WEBPACK_IMPORTED_MODULE_12__["inherit"])(''), _dec9 = Object(_utils__WEBPACK_IMPORTED_MODULE_12__["inherit"])(''), _dec10 = Object(_utils__WEBPACK_IMPORTED_MODULE_12__["inherit"])(''), _dec11 = Object(_utils__WEBPACK_IMPORTED_MODULE_12__["parseValue"])(parseFloat), _dec12 = Object(_utils__WEBPACK_IMPORTED_MODULE_12__["inherit"])(0), _dec13 = Object(_utils__WEBPACK_IMPORTED_MODULE_12__["parseValue"])(parseFloat), _dec14 = Object(_utils__WEBPACK_IMPORTED_MODULE_12__["inherit"])(0), _dec15 = Object(_utils__WEBPACK_IMPORTED_MODULE_12__["relative"])('width'), _dec16 = Object(_utils__WEBPACK_IMPORTED_MODULE_12__["relative"])('height'), (_class =
/*#__PURE__*/
function (_BaseSprite$Attr) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8___default()(LabelSpriteAttr, _BaseSprite$Attr);

  function LabelSpriteAttr(subject) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4___default()(this, LabelSpriteAttr);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(LabelSpriteAttr).call(this, subject));

    _this.setDefault({
      font: 'inherit',
      textAlign: 'inherit',
      strokeColor: 'inherit',
      fillColor: 'inherit',
      lineHeight: 'inherit',
      text: '',
      flexible: false,
      lineBreak: 'inherit',
      wordBreak: 'inherit',
      letterSpacing: 'inherit',
      textIndent: 'inherit'
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5___default()(LabelSpriteAttr, [{
    key: "text",
    set: function set(val) {
      val = String(val);
      this.set('text', val);
      this.subject.retypesetting();
    }
  }, {
    key: "font",
    set: function set(val) {
      this.set('font', val);
      this.subject.retypesetting();
    }
  }, {
    key: "fontSize",
    set: function set(val) {
      if (val == null) val = '16px';
      var unit = 'px';

      if (typeof val === 'string') {
        var unitReg = /^([\d.]+)(\w+)/;
        var matches = val.match(unitReg);

        if (!matches) {
          return null;
        }

        val = parseFloat(matches[1]);
        unit = matches[2];
      }

      this.font = setFontPart(this.font, {
        size0: val,
        unit: unit
      });
    },
    get: function get() {
      var font = this.font;

      var _parseFont2 = Object(_utils__WEBPACK_IMPORTED_MODULE_12__["parseFont"])(font),
          size0 = _parseFont2.size0,
          unit = _parseFont2.unit;

      return "".concat(size0).concat(unit);
    }
  }, {
    key: "fontFamily",
    set: function set(val) {
      if (val == null) val = 'Arial';
      this.font = setFontPart(this.font, {
        family: val
      });
    },
    get: function get() {
      return Object(_utils__WEBPACK_IMPORTED_MODULE_12__["parseFont"])(this.font).family;
    }
  }, {
    key: "fontStyle",
    set: function set(val) {
      if (val == null) val = 'normal';
      this.font = setFontPart(this.font, {
        style: val
      });
    },
    get: function get() {
      return Object(_utils__WEBPACK_IMPORTED_MODULE_12__["parseFont"])(this.font).style;
    }
  }, {
    key: "fontVariant",
    set: function set(val) {
      if (val == null) val = 'normal';
      this.font = setFontPart(this.font, {
        variant: val
      });
    },
    get: function get() {
      return Object(_utils__WEBPACK_IMPORTED_MODULE_12__["parseFont"])(this.font).variant;
    }
  }, {
    key: "fontWeight",
    set: function set(val) {
      if (val == null) val = 'normal';
      this.font = setFontPart(this.font, {
        weight: val
      });
    },
    get: function get() {
      return Object(_utils__WEBPACK_IMPORTED_MODULE_12__["parseFont"])(this.font).weight;
    }
  }, {
    key: "lineHeight",
    set: function set(val) {
      this.set('lineHeight', val);
      this.subject.retypesetting();
    }
  }, {
    key: "textAlign",
    set: function set(val) {
      this.set('textAlign', val);
      this.subject.retypesetting();
    }
  }, {
    key: "color",
    set: function set(val) {
      this.fillColor = val;
    },
    get: function get() {
      return this.fillColor;
    }
  }, {
    key: "strokeColor",
    set: function set(val) {
      this.set('strokeColor', val);
    }
  }, {
    key: "fillColor",
    set: function set(val) {
      this.set('fillColor', val);
    }
  }, {
    key: "flexible",
    set: function set(val) {
      this.set('flexible', val);
    }
  }, {
    key: "lineBreak",
    set: function set(val) {
      // normal, strict, none
      this.set('lineBreak', val);
      this.subject.retypesetting();
    }
  }, {
    key: "wordBreak",
    set: function set(val) {
      // normal | break-all | break-word | keep-all
      this.set('wordBreak', val);
      this.subject.retypesetting();
    }
  }, {
    key: "letterSpacing",
    set: function set(value) {
      this.set('letterSpacing', value);
      this.subject.retypesetting();
    }
  }, {
    key: "textIndent",
    set: function set(value) {
      this.set('textIndent', value);
      this.subject.retypesetting();
    }
  }, {
    key: "width",
    set: function set(val) {
      this.set('width', val);
      if (this.lineBreak !== '') this.subject.retypesetting();
    }
  }, {
    key: "layoutWidth",
    set: function set(val) {
      this.set('layoutWidth', val);
      if (this.lineBreak !== '') this.subject.retypesetting();
    }
  }]);

  return LabelSpriteAttr;
}(_basesprite__WEBPACK_IMPORTED_MODULE_13__["default"].Attr), (_babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_9___default()(_class.prototype, "text", [_utils__WEBPACK_IMPORTED_MODULE_12__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, "text"), _class.prototype), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_9___default()(_class.prototype, "font", [_utils__WEBPACK_IMPORTED_MODULE_12__["attr"], _dec], Object.getOwnPropertyDescriptor(_class.prototype, "font"), _class.prototype), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_9___default()(_class.prototype, "fontSize", [_utils__WEBPACK_IMPORTED_MODULE_12__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, "fontSize"), _class.prototype), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_9___default()(_class.prototype, "fontFamily", [_utils__WEBPACK_IMPORTED_MODULE_12__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, "fontFamily"), _class.prototype), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_9___default()(_class.prototype, "fontStyle", [_utils__WEBPACK_IMPORTED_MODULE_12__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, "fontStyle"), _class.prototype), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_9___default()(_class.prototype, "fontVariant", [_utils__WEBPACK_IMPORTED_MODULE_12__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, "fontVariant"), _class.prototype), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_9___default()(_class.prototype, "fontWeight", [_utils__WEBPACK_IMPORTED_MODULE_12__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, "fontWeight"), _class.prototype), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_9___default()(_class.prototype, "lineHeight", [_dec2, _utils__WEBPACK_IMPORTED_MODULE_12__["attr"], _dec3], Object.getOwnPropertyDescriptor(_class.prototype, "lineHeight"), _class.prototype), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_9___default()(_class.prototype, "textAlign", [_utils__WEBPACK_IMPORTED_MODULE_12__["attr"], _dec4], Object.getOwnPropertyDescriptor(_class.prototype, "textAlign"), _class.prototype), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_9___default()(_class.prototype, "color", [_utils__WEBPACK_IMPORTED_MODULE_12__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, "color"), _class.prototype), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_9___default()(_class.prototype, "strokeColor", [_dec5, _utils__WEBPACK_IMPORTED_MODULE_12__["attr"], _dec6], Object.getOwnPropertyDescriptor(_class.prototype, "strokeColor"), _class.prototype), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_9___default()(_class.prototype, "fillColor", [_dec7, _utils__WEBPACK_IMPORTED_MODULE_12__["attr"], _dec8], Object.getOwnPropertyDescriptor(_class.prototype, "fillColor"), _class.prototype), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_9___default()(_class.prototype, "flexible", [_utils__WEBPACK_IMPORTED_MODULE_12__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, "flexible"), _class.prototype), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_9___default()(_class.prototype, "lineBreak", [_utils__WEBPACK_IMPORTED_MODULE_12__["attr"], _dec9], Object.getOwnPropertyDescriptor(_class.prototype, "lineBreak"), _class.prototype), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_9___default()(_class.prototype, "wordBreak", [_utils__WEBPACK_IMPORTED_MODULE_12__["attr"], _dec10], Object.getOwnPropertyDescriptor(_class.prototype, "wordBreak"), _class.prototype), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_9___default()(_class.prototype, "letterSpacing", [_dec11, _utils__WEBPACK_IMPORTED_MODULE_12__["attr"], _dec12], Object.getOwnPropertyDescriptor(_class.prototype, "letterSpacing"), _class.prototype), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_9___default()(_class.prototype, "textIndent", [_dec13, _utils__WEBPACK_IMPORTED_MODULE_12__["attr"], _dec14], Object.getOwnPropertyDescriptor(_class.prototype, "textIndent"), _class.prototype), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_9___default()(_class.prototype, "width", [_utils__WEBPACK_IMPORTED_MODULE_12__["attr"], _dec15], Object.getOwnPropertyDescriptor(_class.prototype, "width"), _class.prototype), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_9___default()(_class.prototype, "layoutWidth", [_utils__WEBPACK_IMPORTED_MODULE_12__["attr"], _dec16], Object.getOwnPropertyDescriptor(_class.prototype, "layoutWidth"), _class.prototype)), _class));
var Label = (_class2 = (_temp = _class3 =
/*#__PURE__*/
function (_BaseSprite) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8___default()(Label, _BaseSprite);

  function Label(attr) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4___default()(this, Label);

    if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default()(attr) !== 'object') {
      attr = {
        text: String(attr)
      };
    }

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(Label).call(this, attr));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5___default()(Label, [{
    key: "retypesetting",
    value: function retypesetting() {
      // calculTextboxSize(this);
      this[_boxSize] = false;
      this[_outputText] = null;
      this.reflow();
      this.forceUpdate(true);
    }
  }, {
    key: "restyle",
    value: function restyle() {
      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(Label.prototype), "restyle", this).call(this);

      this.retypesetting();
    }
  }, {
    key: "render",
    value: function render(t, drawingContext) {
      var _this2 = this;

      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(Label.prototype), "render", this).call(this, t, drawingContext);

      var textAlign = this.attr('textAlign'),
          flexible = this.attr('flexible'),
          font = flexible ? this.flexibleFont : this.attr('font'),
          lineHeight = this.attr('lineHeight');
      var text = this.text;

      if (text) {
        var _this$contentSize = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_10___default()(this.contentSize, 2),
            w = _this$contentSize[0],
            h = _this$contentSize[1];

        if (!this[_outputText]) calculTextboxSize(this);
        text = this[_outputText] || this.text;

        if ((this.textboxSize[0] > w || this.textboxSize[1] > h) && this.attr('clipOverflow')) {
          drawingContext.beginPath();
          drawingContext.rect(0, 0, w, h);
          drawingContext.clip();
        }

        drawingContext.font = font;
        var lines = text.split(/\n/);
        drawingContext.textBaseline = 'top';
        var align = textAlign;
        drawingContext.textBaseline = 'middle';
        var strokeColor = Object(_helpers_render__WEBPACK_IMPORTED_MODULE_14__["findColor"])(drawingContext, this, 'strokeColor');

        if (strokeColor) {
          drawingContext.strokeStyle = strokeColor;
        }

        var fillColor = Object(_helpers_render__WEBPACK_IMPORTED_MODULE_14__["findColor"])(drawingContext, this, 'fillColor');

        if (!strokeColor && !fillColor) {
          fillColor = Object(_utils__WEBPACK_IMPORTED_MODULE_12__["parseColorString"])('black');
        }

        if (fillColor) {
          drawingContext.fillStyle = fillColor;
        }

        var top = 0;
        var width = this.contentSize[0];
        var letterSpacing = this.attr('letterSpacing'),
            textIndent = this.attr('textIndent');
        lines.forEach(function (line, idx) {
          var _measureText5 = measureText(_this2, line, font, lineHeight),
              _measureText6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_10___default()(_measureText5, 2),
              w = _measureText6[0],
              h = _measureText6[1];

          var left = 0;

          if (align === 'center') {
            left = (width - w) / 2;
          } else if (align === 'right') {
            left = width - w;
          }

          var indent = 0;

          if (textIndent && idx === 0 && align !== 'right') {
            indent = textIndent;
          }

          if (letterSpacing) {
            var l = left;

            _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(line).forEach(function (letter, i) {
              if (idx === 0 && i === 0) {
                l += indent;
              }

              if (fillColor) {
                drawingContext.fillText(letter, l, top + h / 2);
              }

              if (strokeColor) {
                drawingContext.strokeText(letter, l, top + h / 2);
              }

              l += measureText(_this2, letter, font)[0] + letterSpacing;
            });
          } else {
            if (fillColor) {
              drawingContext.fillText(line, left + indent, top + h / 2);
            }

            if (strokeColor) {
              drawingContext.strokeText(line, left + indent, top + h / 2);
            }
          }

          top += h;
        });
      }
    }
  }, {
    key: "text",
    set: function set(val) {
      this.attr('text', val);
    },
    get: function get() {
      return this.attr('text');
    }
  }, {
    key: "textboxSize",
    get: function get() {
      if (!this[_boxSize]) calculTextboxSize(this);
      return this[_boxSize];
    }
  }, {
    key: "flexibleFont",
    get: function get() {
      var font = this.attr('font');
      if (this.attr('width') === '' && this.attr('layoutWidth') === '') return font;
      var textboxSize = this.textboxSize,
          contentSize = this.contentSize;

      var _parseFont3 = Object(_utils__WEBPACK_IMPORTED_MODULE_12__["parseFont"])(font),
          style = _parseFont3.style,
          variant = _parseFont3.variant,
          weight = _parseFont3.weight,
          size = _parseFont3.size,
          family = _parseFont3.family;

      size *= contentSize[0] / textboxSize[0];
      return "".concat(style, " ").concat(variant, " ").concat(weight, " ").concat(Math.floor(size), "px \"").concat(family, "\"");
    } // override to adapt content size

  }, {
    key: "contentSize",
    get: function get() {
      var _this$attrSize = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_10___default()(this.attrSize, 2),
          width = _this$attrSize[0],
          height = _this$attrSize[1];

      if (width === '' || height === '') {
        var textboxSize = this.textboxSize;
        if (!textboxSize) return [0, 0];
        width = width || textboxSize[0];
        height = height || textboxSize[1];
      }

      if (this.attr('flexible') && this.attr('height') === '' && this.attr('layoutHeight') === '') {
        height = Math.ceil(height * width / this.textboxSize[0]);
      }

      return [width, height];
    }
  }]);

  return Label;
}(_basesprite__WEBPACK_IMPORTED_MODULE_13__["default"]), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(_class3, "Attr", LabelSpriteAttr), _temp), (_babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_9___default()(_class2.prototype, "contentSize", [_utils__WEBPACK_IMPORTED_MODULE_12__["flow"]], Object.getOwnPropertyDescriptor(_class2.prototype, "contentSize"), _class2.prototype)), _class2);


/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Util = __webpack_require__(151);

Object.defineProperty(exports, 'toCodePoints', {
  enumerable: true,
  get: function get() {
    return _Util.toCodePoints;
  }
});
Object.defineProperty(exports, 'fromCodePoint', {
  enumerable: true,
  get: function get() {
    return _Util.fromCodePoint;
  }
});

var _LineBreak = __webpack_require__(152);

Object.defineProperty(exports, 'LineBreaker', {
  enumerable: true,
  get: function get() {
    return _LineBreak.LineBreaker;
  }
});

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var toCodePoints = exports.toCodePoints = function toCodePoints(str) {
    var codePoints = [];
    var i = 0;
    var length = str.length;
    while (i < length) {
        var value = str.charCodeAt(i++);
        if (value >= 0xd800 && value <= 0xdbff && i < length) {
            var extra = str.charCodeAt(i++);
            if ((extra & 0xfc00) === 0xdc00) {
                codePoints.push(((value & 0x3ff) << 10) + (extra & 0x3ff) + 0x10000);
            } else {
                codePoints.push(value);
                i--;
            }
        } else {
            codePoints.push(value);
        }
    }
    return codePoints;
};

var fromCodePoint = exports.fromCodePoint = function fromCodePoint() {
    if (String.fromCodePoint) {
        return String.fromCodePoint.apply(String, arguments);
    }

    var length = arguments.length;
    if (!length) {
        return '';
    }

    var codeUnits = [];

    var index = -1;
    var result = '';
    while (++index < length) {
        var codePoint = arguments.length <= index ? undefined : arguments[index];
        if (codePoint <= 0xffff) {
            codeUnits.push(codePoint);
        } else {
            codePoint -= 0x10000;
            codeUnits.push((codePoint >> 10) + 0xd800, codePoint % 0x400 + 0xdc00);
        }
        if (index + 1 === length || codeUnits.length > 0x4000) {
            result += String.fromCharCode.apply(String, codeUnits);
            codeUnits.length = 0;
        }
    }
    return result;
};

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

// Use a lookup table to find the index.
var lookup = typeof Uint8Array === 'undefined' ? [] : new Uint8Array(256);
for (var i = 0; i < chars.length; i++) {
    lookup[chars.charCodeAt(i)] = i;
}

var decode = exports.decode = function decode(base64) {
    var bufferLength = base64.length * 0.75,
        len = base64.length,
        i = void 0,
        p = 0,
        encoded1 = void 0,
        encoded2 = void 0,
        encoded3 = void 0,
        encoded4 = void 0;

    if (base64[base64.length - 1] === '=') {
        bufferLength--;
        if (base64[base64.length - 2] === '=') {
            bufferLength--;
        }
    }

    var buffer = typeof ArrayBuffer !== 'undefined' && typeof Uint8Array !== 'undefined' && typeof Uint8Array.prototype.slice !== 'undefined' ? new ArrayBuffer(bufferLength) : new Array(bufferLength);
    var bytes = Array.isArray(buffer) ? buffer : new Uint8Array(buffer);

    for (i = 0; i < len; i += 4) {
        encoded1 = lookup[base64.charCodeAt(i)];
        encoded2 = lookup[base64.charCodeAt(i + 1)];
        encoded3 = lookup[base64.charCodeAt(i + 2)];
        encoded4 = lookup[base64.charCodeAt(i + 3)];

        bytes[p++] = encoded1 << 2 | encoded2 >> 4;
        bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
        bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
    }

    return buffer;
};

var polyUint16Array = exports.polyUint16Array = function polyUint16Array(buffer) {
    var length = buffer.length;
    var bytes = [];
    for (var _i = 0; _i < length; _i += 2) {
        bytes.push(buffer[_i + 1] << 8 | buffer[_i]);
    }
    return bytes;
};

var polyUint32Array = exports.polyUint32Array = function polyUint32Array(buffer) {
    var length = buffer.length;
    var bytes = [];
    for (var _i2 = 0; _i2 < length; _i2 += 4) {
        bytes.push(buffer[_i2 + 3] << 24 | buffer[_i2 + 2] << 16 | buffer[_i2 + 1] << 8 | buffer[_i2]);
    }
    return bytes;
};

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LineBreaker = exports.inlineBreakOpportunities = exports.lineBreakAtIndex = exports.codePointsToCharacterClasses = exports.UnicodeTrie = exports.BREAK_ALLOWED = exports.BREAK_NOT_ALLOWED = exports.BREAK_MANDATORY = exports.classes = exports.LETTER_NUMBER_MODIFIER = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _Trie = __webpack_require__(153);

var _linebreakTrie = __webpack_require__(154);

var _linebreakTrie2 = _interopRequireDefault(_linebreakTrie);

var _Util = __webpack_require__(151);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LETTER_NUMBER_MODIFIER = exports.LETTER_NUMBER_MODIFIER = 50;

// Non-tailorable Line Breaking Classes
var BK = 1; //  Cause a line break (after)
var CR = 2; //  Cause a line break (after), except between CR and LF
var LF = 3; //  Cause a line break (after)
var CM = 4; //  Prohibit a line break between the character and the preceding character
var NL = 5; //  Cause a line break (after)
var SG = 6; //  Do not occur in well-formed text
var WJ = 7; //  Prohibit line breaks before and after
var ZW = 8; //  Provide a break opportunity
var GL = 9; //  Prohibit line breaks before and after
var SP = 10; // Enable indirect line breaks
var ZWJ = 11; // Prohibit line breaks within joiner sequences
// Break Opportunities
var B2 = 12; //  Provide a line break opportunity before and after the character
var BA = 13; //  Generally provide a line break opportunity after the character
var BB = 14; //  Generally provide a line break opportunity before the character
var HY = 15; //  Provide a line break opportunity after the character, except in numeric context
var CB = 16; //   Provide a line break opportunity contingent on additional information
// Characters Prohibiting Certain Breaks
var CL = 17; //  Prohibit line breaks before
var CP = 18; //  Prohibit line breaks before
var EX = 19; //  Prohibit line breaks before
var IN = 20; //  Allow only indirect line breaks between pairs
var NS = 21; //  Allow only indirect line breaks before
var OP = 22; //  Prohibit line breaks after
var QU = 23; //  Act like they are both opening and closing
// Numeric Context
var IS = 24; //  Prevent breaks after any and before numeric
var NU = 25; //  Form numeric expressions for line breaking purposes
var PO = 26; //  Do not break following a numeric expression
var PR = 27; //  Do not break in front of a numeric expression
var SY = 28; //  Prevent a break before; and allow a break after
// Other Characters
var AI = 29; //  Act like AL when the resolvedEAW is N; otherwise; act as ID
var AL = 30; //  Are alphabetic characters or symbols that are used with alphabetic characters
var CJ = 31; //  Treat as NS or ID for strict or normal breaking.
var EB = 32; //  Do not break from following Emoji Modifier
var EM = 33; //  Do not break from preceding Emoji Base
var H2 = 34; //  Form Korean syllable blocks
var H3 = 35; //  Form Korean syllable blocks
var HL = 36; //  Do not break around a following hyphen; otherwise act as Alphabetic
var ID = 37; //  Break before or after; except in some numeric context
var JL = 38; //  Form Korean syllable blocks
var JV = 39; //  Form Korean syllable blocks
var JT = 40; //  Form Korean syllable blocks
var RI = 41; //  Keep pairs together. For pairs; break before and after other classes
var SA = 42; //  Provide a line break opportunity contingent on additional, language-specific context analysis
var XX = 43; //  Have as yet unknown line breaking behavior or unassigned code positions

var classes = exports.classes = {
    BK: BK,
    CR: CR,
    LF: LF,
    CM: CM,
    NL: NL,
    SG: SG,
    WJ: WJ,
    ZW: ZW,
    GL: GL,
    SP: SP,
    ZWJ: ZWJ,
    B2: B2,
    BA: BA,
    BB: BB,
    HY: HY,
    CB: CB,
    CL: CL,
    CP: CP,
    EX: EX,
    IN: IN,
    NS: NS,
    OP: OP,
    QU: QU,
    IS: IS,
    NU: NU,
    PO: PO,
    PR: PR,
    SY: SY,
    AI: AI,
    AL: AL,
    CJ: CJ,
    EB: EB,
    EM: EM,
    H2: H2,
    H3: H3,
    HL: HL,
    ID: ID,
    JL: JL,
    JV: JV,
    JT: JT,
    RI: RI,
    SA: SA,
    XX: XX
};

var BREAK_MANDATORY = exports.BREAK_MANDATORY = '!';
var BREAK_NOT_ALLOWED = exports.BREAK_NOT_ALLOWED = '×';
var BREAK_ALLOWED = exports.BREAK_ALLOWED = '÷';
var UnicodeTrie = exports.UnicodeTrie = (0, _Trie.createTrieFromBase64)(_linebreakTrie2.default);

var ALPHABETICS = [AL, HL];
var HARD_LINE_BREAKS = [BK, CR, LF, NL];
var SPACE = [SP, ZW];
var PREFIX_POSTFIX = [PR, PO];
var LINE_BREAKS = HARD_LINE_BREAKS.concat(SPACE);
var KOREAN_SYLLABLE_BLOCK = [JL, JV, JT, H2, H3];
var HYPHEN = [HY, BA];

var codePointsToCharacterClasses = exports.codePointsToCharacterClasses = function codePointsToCharacterClasses(codePoints) {
    var lineBreak = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'strict';

    var types = [];
    var indicies = [];
    var categories = [];
    codePoints.forEach(function (codePoint, index) {
        var classType = UnicodeTrie.get(codePoint);
        if (classType > LETTER_NUMBER_MODIFIER) {
            categories.push(true);
            classType -= LETTER_NUMBER_MODIFIER;
        } else {
            categories.push(false);
        }

        if (['normal', 'auto', 'loose'].indexOf(lineBreak) !== -1) {
            // U+2010, – U+2013, 〜 U+301C, ゠ U+30A0
            if ([0x2010, 0x2013, 0x301c, 0x30a0].indexOf(codePoint) !== -1) {
                indicies.push(index);
                return types.push(CB);
            }
        }

        if (classType === CM || classType === ZWJ) {
            // LB10 Treat any remaining combining mark or ZWJ as AL.
            if (index === 0) {
                indicies.push(index);
                return types.push(AL);
            }

            // LB9 Do not break a combining character sequence; treat it as if it has the line breaking class of
            // the base character in all of the following rules. Treat ZWJ as if it were CM.
            var prev = types[index - 1];
            if (LINE_BREAKS.indexOf(prev) === -1) {
                indicies.push(indicies[index - 1]);
                return types.push(prev);
            }
            indicies.push(index);
            return types.push(AL);
        }

        indicies.push(index);

        if (classType === CJ) {
            return types.push(lineBreak === 'strict' ? NS : ID);
        }

        if (classType === SA) {
            return types.push(AL);
        }

        if (classType === AI) {
            return types.push(AL);
        }

        // For supplementary characters, a useful default is to treat characters in the range 10000..1FFFD as AL
        // and characters in the ranges 20000..2FFFD and 30000..3FFFD as ID, until the implementation can be revised
        // to take into account the actual line breaking properties for these characters.
        if (classType === XX) {
            if (codePoint >= 0x20000 && codePoint <= 0x2fffd || codePoint >= 0x30000 && codePoint <= 0x3fffd) {
                return types.push(ID);
            } else {
                return types.push(AL);
            }
        }

        types.push(classType);
    });

    return [indicies, types, categories];
};

var isAdjacentWithSpaceIgnored = function isAdjacentWithSpaceIgnored(a, b, currentIndex, classTypes) {
    var current = classTypes[currentIndex];
    if (Array.isArray(a) ? a.indexOf(current) !== -1 : a === current) {
        var i = currentIndex;
        while (i <= classTypes.length) {
            i++;
            var next = classTypes[i];

            if (next === b) {
                return true;
            }

            if (next !== SP) {
                break;
            }
        }
    }

    if (current === SP) {
        var _i = currentIndex;

        while (_i > 0) {
            _i--;
            var prev = classTypes[_i];

            if (Array.isArray(a) ? a.indexOf(prev) !== -1 : a === prev) {
                var n = currentIndex;
                while (n <= classTypes.length) {
                    n++;
                    var _next = classTypes[n];

                    if (_next === b) {
                        return true;
                    }

                    if (_next !== SP) {
                        break;
                    }
                }
            }

            if (prev !== SP) {
                break;
            }
        }
    }
    return false;
};

var previousNonSpaceClassType = function previousNonSpaceClassType(currentIndex, classTypes) {
    var i = currentIndex;
    while (i >= 0) {
        var type = classTypes[i];
        if (type === SP) {
            i--;
        } else {
            return type;
        }
    }
    return 0;
};

var _lineBreakAtIndex = function _lineBreakAtIndex(codePoints, classTypes, indicies, index, forbiddenBreaks) {
    if (indicies[index] === 0) {
        return BREAK_NOT_ALLOWED;
    }

    var currentIndex = index - 1;
    if (Array.isArray(forbiddenBreaks) && forbiddenBreaks[currentIndex] === true) {
        return BREAK_NOT_ALLOWED;
    }

    var beforeIndex = currentIndex - 1;
    var afterIndex = currentIndex + 1;
    var current = classTypes[currentIndex];

    // LB4 Always break after hard line breaks.
    // LB5 Treat CR followed by LF, as well as CR, LF, and NL as hard line breaks.
    var before = beforeIndex >= 0 ? classTypes[beforeIndex] : 0;
    var next = classTypes[afterIndex];

    if (current === CR && next === LF) {
        return BREAK_NOT_ALLOWED;
    }

    if (HARD_LINE_BREAKS.indexOf(current) !== -1) {
        return BREAK_MANDATORY;
    }

    // LB6 Do not break before hard line breaks.
    if (HARD_LINE_BREAKS.indexOf(next) !== -1) {
        return BREAK_NOT_ALLOWED;
    }

    // LB7 Do not break before spaces or zero width space.
    if (SPACE.indexOf(next) !== -1) {
        return BREAK_NOT_ALLOWED;
    }

    // LB8 Break before any character following a zero-width space, even if one or more spaces intervene.
    if (previousNonSpaceClassType(currentIndex, classTypes) === ZW) {
        return BREAK_ALLOWED;
    }

    // LB8a Do not break between a zero width joiner and an ideograph, emoji base or emoji modifier.
    if (UnicodeTrie.get(codePoints[currentIndex]) === ZWJ && (next === ID || next === EB || next === EM)) {
        return BREAK_NOT_ALLOWED;
    }

    // LB11 Do not break before or after Word joiner and related characters.
    if (current === WJ || next === WJ) {
        return BREAK_NOT_ALLOWED;
    }

    // LB12 Do not break after NBSP and related characters.
    if (current === GL) {
        return BREAK_NOT_ALLOWED;
    }

    // LB12a Do not break before NBSP and related characters, except after spaces and hyphens.
    if ([SP, BA, HY].indexOf(current) === -1 && next === GL) {
        return BREAK_NOT_ALLOWED;
    }

    // LB13 Do not break before ‘]’ or ‘!’ or ‘;’ or ‘/’, even after spaces.
    if ([CL, CP, EX, IS, SY].indexOf(next) !== -1) {
        return BREAK_NOT_ALLOWED;
    }

    // LB14 Do not break after ‘[’, even after spaces.
    if (previousNonSpaceClassType(currentIndex, classTypes) === OP) {
        return BREAK_NOT_ALLOWED;
    }

    // LB15 Do not break within ‘”[’, even with intervening spaces.
    if (isAdjacentWithSpaceIgnored(QU, OP, currentIndex, classTypes)) {
        return BREAK_NOT_ALLOWED;
    }

    // LB16 Do not break between closing punctuation and a nonstarter (lb=NS), even with intervening spaces.
    if (isAdjacentWithSpaceIgnored([CL, CP], NS, currentIndex, classTypes)) {
        return BREAK_NOT_ALLOWED;
    }

    // LB17 Do not break within ‘——’, even with intervening spaces.
    if (isAdjacentWithSpaceIgnored(B2, B2, currentIndex, classTypes)) {
        return BREAK_NOT_ALLOWED;
    }

    // LB18 Break after spaces.
    if (current === SP) {
        return BREAK_ALLOWED;
    }

    // LB19 Do not break before or after quotation marks, such as ‘ ” ’.
    if (current === QU || next === QU) {
        return BREAK_NOT_ALLOWED;
    }

    // LB20 Break before and after unresolved CB.
    if (next === CB || current === CB) {
        return BREAK_ALLOWED;
    }

    // LB21 Do not break before hyphen-minus, other hyphens, fixed-width spaces, small kana, and other non-starters, or after acute accents.
    if ([BA, HY, NS].indexOf(next) !== -1 || current === BB) {
        return BREAK_NOT_ALLOWED;
    }

    // LB21a Don't break after Hebrew + Hyphen.
    if (before === HL && HYPHEN.indexOf(current) !== -1) {
        return BREAK_NOT_ALLOWED;
    }

    // LB21b Don’t break between Solidus and Hebrew letters.
    if (current === SY && next === HL) {
        return BREAK_NOT_ALLOWED;
    }

    // LB22 Do not break between two ellipses, or between letters, numbers or exclamations and ellipsis.
    if (next === IN && ALPHABETICS.concat(IN, EX, NU, ID, EB, EM).indexOf(current) !== -1) {
        return BREAK_NOT_ALLOWED;
    }

    // LB23 Do not break between digits and letters.
    if (ALPHABETICS.indexOf(next) !== -1 && current === NU || ALPHABETICS.indexOf(current) !== -1 && next === NU) {
        return BREAK_NOT_ALLOWED;
    }

    // LB23a Do not break between numeric prefixes and ideographs, or between ideographs and numeric postfixes.
    if (current === PR && [ID, EB, EM].indexOf(next) !== -1 || [ID, EB, EM].indexOf(current) !== -1 && next === PO) {
        return BREAK_NOT_ALLOWED;
    }

    // LB24 Do not break between numeric prefix/postfix and letters, or between letters and prefix/postfix.
    if (ALPHABETICS.indexOf(current) !== -1 && PREFIX_POSTFIX.indexOf(next) !== -1 || PREFIX_POSTFIX.indexOf(current) !== -1 && ALPHABETICS.indexOf(next) !== -1) {
        return BREAK_NOT_ALLOWED;
    }

    // LB25 Do not break between the following pairs of classes relevant to numbers:
    if (
    // (PR | PO) × ( OP | HY )? NU
    [PR, PO].indexOf(current) !== -1 && (next === NU || [OP, HY].indexOf(next) !== -1 && classTypes[afterIndex + 1] === NU) ||
    // ( OP | HY ) × NU
    [OP, HY].indexOf(current) !== -1 && next === NU ||
    // NU ×	(NU | SY | IS)
    current === NU && [NU, SY, IS].indexOf(next) !== -1) {
        return BREAK_NOT_ALLOWED;
    }

    // NU (NU | SY | IS)* × (NU | SY | IS | CL | CP)
    if ([NU, SY, IS, CL, CP].indexOf(next) !== -1) {
        var prevIndex = currentIndex;
        while (prevIndex >= 0) {
            var type = classTypes[prevIndex];
            if (type === NU) {
                return BREAK_NOT_ALLOWED;
            } else if ([SY, IS].indexOf(type) !== -1) {
                prevIndex--;
            } else {
                break;
            }
        }
    }

    // NU (NU | SY | IS)* (CL | CP)? × (PO | PR))
    if ([PR, PO].indexOf(next) !== -1) {
        var _prevIndex = [CL, CP].indexOf(current) !== -1 ? beforeIndex : currentIndex;
        while (_prevIndex >= 0) {
            var _type = classTypes[_prevIndex];
            if (_type === NU) {
                return BREAK_NOT_ALLOWED;
            } else if ([SY, IS].indexOf(_type) !== -1) {
                _prevIndex--;
            } else {
                break;
            }
        }
    }

    // LB26 Do not break a Korean syllable.
    if (JL === current && [JL, JV, H2, H3].indexOf(next) !== -1 || [JV, H2].indexOf(current) !== -1 && [JV, JT].indexOf(next) !== -1 || [JT, H3].indexOf(current) !== -1 && next === JT) {
        return BREAK_NOT_ALLOWED;
    }

    // LB27 Treat a Korean Syllable Block the same as ID.
    if (KOREAN_SYLLABLE_BLOCK.indexOf(current) !== -1 && [IN, PO].indexOf(next) !== -1 || KOREAN_SYLLABLE_BLOCK.indexOf(next) !== -1 && current === PR) {
        return BREAK_NOT_ALLOWED;
    }

    // LB28 Do not break between alphabetics (“at”).
    if (ALPHABETICS.indexOf(current) !== -1 && ALPHABETICS.indexOf(next) !== -1) {
        return BREAK_NOT_ALLOWED;
    }

    // LB29 Do not break between numeric punctuation and alphabetics (“e.g.”).
    if (current === IS && ALPHABETICS.indexOf(next) !== -1) {
        return BREAK_NOT_ALLOWED;
    }

    // LB30 Do not break between letters, numbers, or ordinary symbols and opening or closing parentheses.
    if (ALPHABETICS.concat(NU).indexOf(current) !== -1 && next === OP || ALPHABETICS.concat(NU).indexOf(next) !== -1 && current === CP) {
        return BREAK_NOT_ALLOWED;
    }

    // LB30a Break between two regional indicator symbols if and only if there are an even number of regional
    // indicators preceding the position of the break.
    if (current === RI && next === RI) {
        var i = indicies[currentIndex];
        var count = 1;
        while (i > 0) {
            i--;
            if (classTypes[i] === RI) {
                count++;
            } else {
                break;
            }
        }
        if (count % 2 !== 0) {
            return BREAK_NOT_ALLOWED;
        }
    }

    // LB30b Do not break between an emoji base and an emoji modifier.
    if (current === EB && next === EM) {
        return BREAK_NOT_ALLOWED;
    }

    return BREAK_ALLOWED;
};

var lineBreakAtIndex = exports.lineBreakAtIndex = function lineBreakAtIndex(codePoints, index) {
    // LB2 Never break at the start of text.
    if (index === 0) {
        return BREAK_NOT_ALLOWED;
    }

    // LB3 Always break at the end of text.
    if (index >= codePoints.length) {
        return BREAK_MANDATORY;
    }

    var _codePointsToCharacte = codePointsToCharacterClasses(codePoints),
        _codePointsToCharacte2 = _slicedToArray(_codePointsToCharacte, 2),
        indicies = _codePointsToCharacte2[0],
        classTypes = _codePointsToCharacte2[1];

    return _lineBreakAtIndex(codePoints, classTypes, indicies, index);
};

var cssFormattedClasses = function cssFormattedClasses(codePoints, options) {
    if (!options) {
        options = { lineBreak: 'normal', wordBreak: 'normal' };
    }

    var _codePointsToCharacte3 = codePointsToCharacterClasses(codePoints, options.lineBreak),
        _codePointsToCharacte4 = _slicedToArray(_codePointsToCharacte3, 3),
        indicies = _codePointsToCharacte4[0],
        classTypes = _codePointsToCharacte4[1],
        isLetterNumber = _codePointsToCharacte4[2];

    if (options.wordBreak === 'break-all' || options.wordBreak === 'break-word') {
        classTypes = classTypes.map(function (type) {
            return [NU, AL, SA].indexOf(type) !== -1 ? ID : type;
        });
    }

    var forbiddenBreakpoints = options.wordBreak === 'keep-all' ? isLetterNumber.map(function (isLetterNumber, i) {
        return isLetterNumber && codePoints[i] >= 0x4e00 && codePoints[i] <= 0x9fff;
    }) : null;

    return [indicies, classTypes, forbiddenBreakpoints];
};

var inlineBreakOpportunities = exports.inlineBreakOpportunities = function inlineBreakOpportunities(str, options) {
    var codePoints = (0, _Util.toCodePoints)(str);
    var output = BREAK_NOT_ALLOWED;

    var _cssFormattedClasses = cssFormattedClasses(codePoints, options),
        _cssFormattedClasses2 = _slicedToArray(_cssFormattedClasses, 3),
        indicies = _cssFormattedClasses2[0],
        classTypes = _cssFormattedClasses2[1],
        forbiddenBreakpoints = _cssFormattedClasses2[2];

    codePoints.forEach(function (codePoint, i) {
        output += (0, _Util.fromCodePoint)(codePoint) + (i >= codePoints.length - 1 ? BREAK_MANDATORY : _lineBreakAtIndex(codePoints, classTypes, indicies, i + 1, forbiddenBreakpoints));
    });

    return output;
};

var Break = function () {
    function Break(codePoints, lineBreak, start, end) {
        _classCallCheck(this, Break);

        this._codePoints = codePoints;
        this.required = lineBreak === BREAK_MANDATORY;
        this.start = start;
        this.end = end;
    }

    _createClass(Break, [{
        key: 'slice',
        value: function slice() {
            return _Util.fromCodePoint.apply(undefined, _toConsumableArray(this._codePoints.slice(this.start, this.end)));
        }
    }]);

    return Break;
}();

var LineBreaker = exports.LineBreaker = function LineBreaker(str, options) {
    var codePoints = (0, _Util.toCodePoints)(str);

    var _cssFormattedClasses3 = cssFormattedClasses(codePoints, options),
        _cssFormattedClasses4 = _slicedToArray(_cssFormattedClasses3, 3),
        indicies = _cssFormattedClasses4[0],
        classTypes = _cssFormattedClasses4[1],
        forbiddenBreakpoints = _cssFormattedClasses4[2];

    var length = codePoints.length;
    var lastEnd = 0;
    var nextIndex = 0;

    return {
        next: function next() {
            if (nextIndex >= length) {
                return { done: true };
            }
            var lineBreak = BREAK_NOT_ALLOWED;
            while (nextIndex < length && (lineBreak = _lineBreakAtIndex(codePoints, classTypes, indicies, ++nextIndex, forbiddenBreakpoints)) === BREAK_NOT_ALLOWED) {}

            if (lineBreak !== BREAK_NOT_ALLOWED || nextIndex === length) {
                var value = new Break(codePoints, lineBreak, lastEnd, nextIndex);
                lastEnd = nextIndex;
                return { value: value, done: false };
            }

            return { done: true };
        }
    };
};

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Trie = exports.createTrieFromBase64 = exports.UTRIE2_INDEX_2_MASK = exports.UTRIE2_INDEX_2_BLOCK_LENGTH = exports.UTRIE2_OMITTED_BMP_INDEX_1_LENGTH = exports.UTRIE2_INDEX_1_OFFSET = exports.UTRIE2_UTF8_2B_INDEX_2_LENGTH = exports.UTRIE2_UTF8_2B_INDEX_2_OFFSET = exports.UTRIE2_INDEX_2_BMP_LENGTH = exports.UTRIE2_LSCP_INDEX_2_LENGTH = exports.UTRIE2_DATA_MASK = exports.UTRIE2_DATA_BLOCK_LENGTH = exports.UTRIE2_LSCP_INDEX_2_OFFSET = exports.UTRIE2_SHIFT_1_2 = exports.UTRIE2_INDEX_SHIFT = exports.UTRIE2_SHIFT_1 = exports.UTRIE2_SHIFT_2 = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Util = __webpack_require__(151);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/** Shift size for getting the index-2 table offset. */
var UTRIE2_SHIFT_2 = exports.UTRIE2_SHIFT_2 = 5;

/** Shift size for getting the index-1 table offset. */
var UTRIE2_SHIFT_1 = exports.UTRIE2_SHIFT_1 = 6 + 5;

/**
 * Shift size for shifting left the index array values.
 * Increases possible data size with 16-bit index values at the cost
 * of compactability.
 * This requires data blocks to be aligned by UTRIE2_DATA_GRANULARITY.
 */
var UTRIE2_INDEX_SHIFT = exports.UTRIE2_INDEX_SHIFT = 2;

/**
 * Difference between the two shift sizes,
 * for getting an index-1 offset from an index-2 offset. 6=11-5
 */
var UTRIE2_SHIFT_1_2 = exports.UTRIE2_SHIFT_1_2 = UTRIE2_SHIFT_1 - UTRIE2_SHIFT_2;

/**
 * The part of the index-2 table for U+D800..U+DBFF stores values for
 * lead surrogate code _units_ not code _points_.
 * Values for lead surrogate code _points_ are indexed with this portion of the table.
 * Length=32=0x20=0x400>>UTRIE2_SHIFT_2. (There are 1024=0x400 lead surrogates.)
 */
var UTRIE2_LSCP_INDEX_2_OFFSET = exports.UTRIE2_LSCP_INDEX_2_OFFSET = 0x10000 >> UTRIE2_SHIFT_2;

/** Number of entries in a data block. 32=0x20 */
var UTRIE2_DATA_BLOCK_LENGTH = exports.UTRIE2_DATA_BLOCK_LENGTH = 1 << UTRIE2_SHIFT_2;
/** Mask for getting the lower bits for the in-data-block offset. */
var UTRIE2_DATA_MASK = exports.UTRIE2_DATA_MASK = UTRIE2_DATA_BLOCK_LENGTH - 1;

var UTRIE2_LSCP_INDEX_2_LENGTH = exports.UTRIE2_LSCP_INDEX_2_LENGTH = 0x400 >> UTRIE2_SHIFT_2;
/** Count the lengths of both BMP pieces. 2080=0x820 */
var UTRIE2_INDEX_2_BMP_LENGTH = exports.UTRIE2_INDEX_2_BMP_LENGTH = UTRIE2_LSCP_INDEX_2_OFFSET + UTRIE2_LSCP_INDEX_2_LENGTH;
/**
 * The 2-byte UTF-8 version of the index-2 table follows at offset 2080=0x820.
 * Length 32=0x20 for lead bytes C0..DF, regardless of UTRIE2_SHIFT_2.
 */
var UTRIE2_UTF8_2B_INDEX_2_OFFSET = exports.UTRIE2_UTF8_2B_INDEX_2_OFFSET = UTRIE2_INDEX_2_BMP_LENGTH;
var UTRIE2_UTF8_2B_INDEX_2_LENGTH = exports.UTRIE2_UTF8_2B_INDEX_2_LENGTH = 0x800 >> 6; /* U+0800 is the first code point after 2-byte UTF-8 */
/**
 * The index-1 table, only used for supplementary code points, at offset 2112=0x840.
 * Variable length, for code points up to highStart, where the last single-value range starts.
 * Maximum length 512=0x200=0x100000>>UTRIE2_SHIFT_1.
 * (For 0x100000 supplementary code points U+10000..U+10ffff.)
 *
 * The part of the index-2 table for supplementary code points starts
 * after this index-1 table.
 *
 * Both the index-1 table and the following part of the index-2 table
 * are omitted completely if there is only BMP data.
 */
var UTRIE2_INDEX_1_OFFSET = exports.UTRIE2_INDEX_1_OFFSET = UTRIE2_UTF8_2B_INDEX_2_OFFSET + UTRIE2_UTF8_2B_INDEX_2_LENGTH;

/**
 * Number of index-1 entries for the BMP. 32=0x20
 * This part of the index-1 table is omitted from the serialized form.
 */
var UTRIE2_OMITTED_BMP_INDEX_1_LENGTH = exports.UTRIE2_OMITTED_BMP_INDEX_1_LENGTH = 0x10000 >> UTRIE2_SHIFT_1;

/** Number of entries in an index-2 block. 64=0x40 */
var UTRIE2_INDEX_2_BLOCK_LENGTH = exports.UTRIE2_INDEX_2_BLOCK_LENGTH = 1 << UTRIE2_SHIFT_1_2;
/** Mask for getting the lower bits for the in-index-2-block offset. */
var UTRIE2_INDEX_2_MASK = exports.UTRIE2_INDEX_2_MASK = UTRIE2_INDEX_2_BLOCK_LENGTH - 1;

var createTrieFromBase64 = exports.createTrieFromBase64 = function createTrieFromBase64(base64) {
    var buffer = (0, _Util.decode)(base64);
    var view32 = Array.isArray(buffer) ? (0, _Util.polyUint32Array)(buffer) : new Uint32Array(buffer);
    var view16 = Array.isArray(buffer) ? (0, _Util.polyUint16Array)(buffer) : new Uint16Array(buffer);
    var headerLength = 24;

    var index = view16.slice(headerLength / 2, view32[4] / 2);
    var data = view32[5] === 2 ? view16.slice((headerLength + view32[4]) / 2) : view32.slice(Math.ceil((headerLength + view32[4]) / 4));

    return new Trie(view32[0], view32[1], view32[2], view32[3], index, data);
};

var Trie = exports.Trie = function () {
    function Trie(initialValue, errorValue, highStart, highValueIndex, index, data) {
        _classCallCheck(this, Trie);

        this.initialValue = initialValue;
        this.errorValue = errorValue;
        this.highStart = highStart;
        this.highValueIndex = highValueIndex;
        this.index = index;
        this.data = data;
    }

    /**
     * Get the value for a code point as stored in the Trie.
     *
     * @param codePoint the code point
     * @return the value
     */


    _createClass(Trie, [{
        key: 'get',
        value: function get(codePoint) {
            var ix = void 0;
            if (codePoint >= 0) {
                if (codePoint < 0x0d800 || codePoint > 0x0dbff && codePoint <= 0x0ffff) {
                    // Ordinary BMP code point, excluding leading surrogates.
                    // BMP uses a single level lookup.  BMP index starts at offset 0 in the Trie2 index.
                    // 16 bit data is stored in the index array itself.
                    ix = this.index[codePoint >> UTRIE2_SHIFT_2];
                    ix = (ix << UTRIE2_INDEX_SHIFT) + (codePoint & UTRIE2_DATA_MASK);
                    return this.data[ix];
                }

                if (codePoint <= 0xffff) {
                    // Lead Surrogate Code Point.  A Separate index section is stored for
                    // lead surrogate code units and code points.
                    //   The main index has the code unit data.
                    //   For this function, we need the code point data.
                    // Note: this expression could be refactored for slightly improved efficiency, but
                    //       surrogate code points will be so rare in practice that it's not worth it.
                    ix = this.index[UTRIE2_LSCP_INDEX_2_OFFSET + (codePoint - 0xd800 >> UTRIE2_SHIFT_2)];
                    ix = (ix << UTRIE2_INDEX_SHIFT) + (codePoint & UTRIE2_DATA_MASK);
                    return this.data[ix];
                }

                if (codePoint < this.highStart) {
                    // Supplemental code point, use two-level lookup.
                    ix = UTRIE2_INDEX_1_OFFSET - UTRIE2_OMITTED_BMP_INDEX_1_LENGTH + (codePoint >> UTRIE2_SHIFT_1);
                    ix = this.index[ix];
                    ix += codePoint >> UTRIE2_SHIFT_2 & UTRIE2_INDEX_2_MASK;
                    ix = this.index[ix];
                    ix = (ix << UTRIE2_INDEX_SHIFT) + (codePoint & UTRIE2_DATA_MASK);
                    return this.data[ix];
                }
                if (codePoint <= 0x10ffff) {
                    return this.data[this.highValueIndex];
                }
            }

            // Fall through.  The code point is outside of the legal range of 0..0x10ffff.
            return this.errorValue;
        }
    }]);

    return Trie;
}();

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = 'KwAAAAAAAAAACA4AIDoAAPAfAAACAAAAAAAIABAAGABAAEgAUABYAF4AZgBeAGYAYABoAHAAeABeAGYAfACEAIAAiACQAJgAoACoAK0AtQC9AMUAXgBmAF4AZgBeAGYAzQDVAF4AZgDRANkA3gDmAOwA9AD8AAQBDAEUARoBIgGAAIgAJwEvATcBPwFFAU0BTAFUAVwBZAFsAXMBewGDATAAiwGTAZsBogGkAawBtAG8AcIBygHSAdoB4AHoAfAB+AH+AQYCDgIWAv4BHgImAi4CNgI+AkUCTQJTAlsCYwJrAnECeQKBAk0CiQKRApkCoQKoArACuALAAsQCzAIwANQC3ALkAjAA7AL0AvwCAQMJAxADGAMwACADJgMuAzYDPgOAAEYDSgNSA1IDUgNaA1oDYANiA2IDgACAAGoDgAByA3YDfgOAAIQDgACKA5IDmgOAAIAAogOqA4AAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAK8DtwOAAIAAvwPHA88D1wPfAyAD5wPsA/QD/AOAAIAABAQMBBIEgAAWBB4EJgQuBDMEIAM7BEEEXgBJBCADUQRZBGEEaQQwADAAcQQ+AXkEgQSJBJEEgACYBIAAoASoBK8EtwQwAL8ExQSAAIAAgACAAIAAgACgAM0EXgBeAF4AXgBeAF4AXgBeANUEXgDZBOEEXgDpBPEE+QQBBQkFEQUZBSEFKQUxBTUFPQVFBUwFVAVcBV4AYwVeAGsFcwV7BYMFiwWSBV4AmgWgBacFXgBeAF4AXgBeAKsFXgCyBbEFugW7BcIFwgXIBcIFwgXQBdQF3AXkBesF8wX7BQMGCwYTBhsGIwYrBjMGOwZeAD8GRwZNBl4AVAZbBl4AXgBeAF4AXgBeAF4AXgBeAF4AXgBeAGMGXgBqBnEGXgBeAF4AXgBeAF4AXgBeAF4AXgB5BoAG4wSGBo4GkwaAAIADHgR5AF4AXgBeAJsGgABGA4AAowarBrMGswagALsGwwbLBjAA0wbaBtoG3QbaBtoG2gbaBtoG2gblBusG8wb7BgMHCwcTBxsHCwcjBysHMAc1BzUHOgdCB9oGSgdSB1oHYAfaBloHaAfaBlIH2gbaBtoG2gbaBtoG2gbaBjUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHbQdeAF4ANQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQd1B30HNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B4MH2gaKB68EgACAAIAAgACAAIAAgACAAI8HlwdeAJ8HpweAAIAArwe3B14AXgC/B8UHygcwANAH2AfgB4AA6AfwBz4B+AcACFwBCAgPCBcIogEYAR8IJwiAAC8INwg/CCADRwhPCFcIXwhnCEoDGgSAAIAAgABvCHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIhAiLCI4IMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAANQc1BzUHNQc1BzUHNQc1BzUHNQc1B54INQc1B6II2gaqCLIIugiAAIAAvgjGCIAAgACAAIAAgACAAIAAgACAAIAAywiHAYAA0wiAANkI3QjlCO0I9Aj8CIAAgACAAAIJCgkSCRoJIgknCTYHLwk3CZYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiAAIAAAAFAAXgBeAGAAcABeAHwAQACQAKAArQC9AJ4AXgBeAE0A3gBRAN4A7AD8AMwBGgEAAKcBNwEFAUwBXAF4QkhCmEKnArcCgAHHAsABz4LAAcABwAHAAd+C6ABoAG+C/4LAAcABwAHAAc+DF4MAAcAB54M3gweDV4Nng3eDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEeDqABVg6WDqABoQ6gAaABoAHXDvcONw/3DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DncPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB7cPPwlGCU4JMACAAIAAgABWCV4JYQmAAGkJcAl4CXwJgAkwADAAMAAwAIgJgACLCZMJgACZCZ8JowmrCYAAswkwAF4AXgB8AIAAuwkABMMJyQmAAM4JgADVCTAAMAAwADAAgACAAIAAgACAAIAAgACAAIAAqwYWBNkIMAAwADAAMADdCeAJ6AnuCR4E9gkwAP4JBQoNCjAAMACAABUK0wiAAB0KJAosCjQKgAAwADwKQwqAAEsKvQmdCVMKWwowADAAgACAALcEMACAAGMKgABrCjAAMAAwADAAMAAwADAAMAAwADAAMAAeBDAAMAAwADAAMAAwADAAMAAwADAAMAAwAIkEPQFzCnoKiQSCCooKkAqJBJgKoAqkCokEGAGsCrQKvArBCjAAMADJCtEKFQHZCuEK/gHpCvEKMAAwADAAMACAAIwE+QowAIAAPwEBCzAAMAAwADAAMACAAAkLEQswAIAAPwEZCyELgAAOCCkLMAAxCzkLMAAwADAAMAAwADAAXgBeAEELMAAwADAAMAAwADAAMAAwAEkLTQtVC4AAXAtkC4AAiQkwADAAMAAwADAAMAAwADAAbAtxC3kLgAuFC4sLMAAwAJMLlwufCzAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAApwswADAAMACAAIAAgACvC4AAgACAAIAAgACAALcLMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAvwuAAMcLgACAAIAAgACAAIAAyguAAIAAgACAAIAA0QswADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAANkLgACAAIAA4AswADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACJCR4E6AswADAAhwHwC4AA+AsADAgMEAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMACAAIAAGAwdDCUMMAAwAC0MNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQw1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHPQwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADUHNQc1BzUHNQc1BzUHNQc2BzAAMAA5DDUHNQc1BzUHNQc1BzUHNQc1BzUHNQdFDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAgACAAIAATQxSDFoMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAF4AXgBeAF4AXgBeAF4AYgxeAGoMXgBxDHkMfwxeAIUMXgBeAI0MMAAwADAAMAAwAF4AXgCVDJ0MMAAwADAAMABeAF4ApQxeAKsMswy7DF4Awgy9DMoMXgBeAF4AXgBeAF4AXgBeAF4AXgDRDNkMeQBqCeAM3Ax8AOYM7Az0DPgMXgBeAF4AXgBeAF4AXgBeAF4AXgBeAF4AXgBeAF4AXgCgAAANoAAHDQ4NFg0wADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAeDSYNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIAAgACAAIAAgACAAC4NMABeAF4ANg0wADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAD4NRg1ODVYNXg1mDTAAbQ0wADAAMAAwADAAMAAwADAA2gbaBtoG2gbaBtoG2gbaBnUNeg3CBYANwgWFDdoGjA3aBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gaUDZwNpA2oDdoG2gawDbcNvw3HDdoG2gbPDdYN3A3fDeYN2gbsDfMN2gbaBvoN/g3aBgYODg7aBl4AXgBeABYOXgBeACUG2gYeDl4AJA5eACwO2w3aBtoGMQ45DtoG2gbaBtoGQQ7aBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gZJDjUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B1EO2gY1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQdZDjUHNQc1BzUHNQc1B2EONQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHaA41BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B3AO2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gY1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B2EO2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gZJDtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBkkOeA6gAKAAoAAwADAAMAAwAKAAoACgAKAAoACgAKAAgA4wADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAD//wQABAAEAAQABAAEAAQABAAEAA0AAwABAAEAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAKABMAFwAeABsAGgAeABcAFgASAB4AGwAYAA8AGAAcAEsASwBLAEsASwBLAEsASwBLAEsAGAAYAB4AHgAeABMAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAFgAbABIAHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYADQARAB4ABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkAFgAaABsAGwAbAB4AHQAdAB4ATwAXAB4ADQAeAB4AGgAbAE8ATwAOAFAAHQAdAB0ATwBPABcATwBPAE8AFgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwArAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAAQABAANAA0ASwBLAEsASwBLAEsASwBLAEsASwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUAArACsABABQAAQABAAEAAQABAAEAAQAKwArAAQABAArACsABAAEAAQAUAArACsAKwArACsAKwArACsABAArACsAKwArAFAAUAArAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAGgAaAFAAUABQAFAAUABMAB4AGwBQAB4AKwArACsABAAEAAQAKwBQAFAAUABQAFAAUAArACsAKwArAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUAArAFAAUAArACsABAArAAQABAAEAAQABAArACsAKwArAAQABAArACsABAAEAAQAKwArACsABAArACsAKwArACsAKwArAFAAUABQAFAAKwBQACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwAEAAQAUABQAFAABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUAArACsABABQAAQABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQAKwArAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwAeABsAKwArACsAKwArACsAKwBQAAQABAAEAAQABAAEACsABAAEAAQAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwArAAQABAArACsABAAEAAQAKwArACsAKwArACsAKwArAAQABAArACsAKwArAFAAUAArAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwAeAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwAEAFAAKwBQAFAAUABQAFAAUAArACsAKwBQAFAAUAArAFAAUABQAFAAKwArACsAUABQACsAUAArAFAAUAArACsAKwBQAFAAKwArACsAUABQAFAAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQAKwArACsABAAEAAQAKwAEAAQABAAEACsAKwBQACsAKwArACsAKwArAAQAKwArACsAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAB4AHgAeAB4AHgAeABsAHgArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABAArACsAKwArACsAKwArAAQABAArAFAAUABQACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAB4AUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABAArACsAKwArACsAKwArAAQABAArACsAKwArACsAKwArAFAAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwArAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAKwBcAFwAKwBcACsAKwBcACsAKwArACsAKwArAFwAXABcAFwAKwBcAFwAXABcAFwAXABcACsAXABcAFwAKwBcACsAXAArACsAXABcACsAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgArACoAKgBcACsAKwBcAFwAXABcAFwAKwBcACsAKgAqACoAKgAqACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAFwAXABcAFwAUAAOAA4ADgAOAB4ADgAOAAkADgAOAA0ACQATABMAEwATABMACQAeABMAHgAeAB4ABAAEAB4AHgAeAB4AHgAeAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUAANAAQAHgAEAB4ABAAWABEAFgARAAQABABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAAQABAAEAAQABAANAAQABABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsADQANAB4AHgAeAB4AHgAeAAQAHgAeAB4AHgAeAB4AKwAeAB4ADgAOAA0ADgAeAB4AHgAeAB4ACQAJACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgAeAB4AHgBcAFwAXABcAFwAXAAqACoAKgAqAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAKgAqACoAKgAqACoAKgBcAFwAXAAqACoAKgAqAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAXAAqAEsASwBLAEsASwBLAEsASwBLAEsAKgAqACoAKgAqACoAUABQAFAAUABQAFAAKwBQACsAKwArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQACsAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwAEAAQABAAeAA0AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAEQArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAADQANAA0AUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAA0ADQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoADQANABUAXAANAB4ADQAbAFwAKgArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAB4AHgATABMADQANAA4AHgATABMAHgAEAAQABAAJACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAUABQAFAAUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwAeACsAKwArABMAEwBLAEsASwBLAEsASwBLAEsASwBLAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwBcAFwAXABcAFwAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcACsAKwArACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwAeAB4AXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgArACsABABLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKgAqACoAKgAqACoAKgBcACoAKgAqACoAKgAqACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAUABQAFAAUABQAFAAUAArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4ADQANAA0ADQAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAHgAeAB4AHgBQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwANAA0ADQANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwBQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsABAAEAAQAHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAABABQAFAAUABQAAQABAAEAFAAUAAEAAQABAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAKwBQACsAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAKwArAB4AHgAeAB4AHgAeACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAUABQAFAAKwAeAB4AHgAeAB4AHgAeAA4AHgArAA0ADQANAA0ADQANAA0ACQANAA0ADQAIAAQACwAEAAQADQAJAA0ADQAMAB0AHQAeABcAFwAWABcAFwAXABYAFwAdAB0AHgAeABQAFAAUAA0AAQABAAQABAAEAAQABAAJABoAGgAaABoAGgAaABoAGgAeABcAFwAdABUAFQAeAB4AHgAeAB4AHgAYABYAEQAVABUAFQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgANAB4ADQANAA0ADQAeAA0ADQANAAcAHgAeAB4AHgArAAQABAAEAAQABAAEAAQABAAEAAQAUABQACsAKwBPAFAAUABQAFAAUAAeAB4AHgAWABEATwBQAE8ATwBPAE8AUABQAFAAUABQAB4AHgAeABYAEQArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAGwAbABsAGwAbABsAGwAaABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAaABsAGwAbABsAGgAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgBQABoAHgAdAB4AUAAeABoAHgAeAB4AHgAeAB4AHgAeAB4ATwAeAFAAGwAeAB4AUABQAFAAUABQAB4AHgAeAB0AHQAeAFAAHgBQAB4AUAAeAFAATwBQAFAAHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AUABQAFAAUABPAE8AUABQAFAAUABQAE8AUABQAE8AUABPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAE8ATwBPAE8ATwBPAE8ATwBPAE8AUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAATwAeAB4AKwArACsAKwAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB0AHQAeAB4AHgAdAB0AHgAeAB0AHgAeAB4AHQAeAB0AGwAbAB4AHQAeAB4AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB0AHgAdAB4AHQAdAB0AHQAdAB0AHgAdAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAdAB0AHQAdAB4AHgAdAB0AHgAeAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABQAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAlACUAHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBQAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAeAB4AHgAeAB0AHQAeAB4AHgAeAB0AHQAdAB4AHgAdAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB0AHQAeAB4AHQAeAB4AHgAeAB0AHQAeAB4AHgAeACUAJQAdAB0AJQAeACUAJQAlACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAHgAeAB4AHgAdAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHQAdAB0AHgAdACUAHQAdAB4AHQAdAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHQAdAB0AHQAlAB4AJQAlACUAHQAlACUAHQAdAB0AJQAlAB0AHQAlAB0AHQAlACUAJQAeAB0AHgAeAB4AHgAdAB0AJQAdAB0AHQAdAB0AHQAlACUAJQAlACUAHQAlACUAIAAlAB0AHQAlACUAJQAlACUAJQAlACUAHgAeAB4AJQAlACAAIAAgACAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeABcAFwAXABcAFwAXAB4AEwATACUAHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwArACUAJQBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAKwArACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAE8ATwBPAE8ATwBPAE8ATwAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeACsAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUAArACsAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQBQAFAAUABQACsAKwArACsAUABQAFAAUABQAFAAUABQAA0AUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQACsAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgBQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAABAAEAAQAKwAEAAQAKwArACsAKwArAAQABAAEAAQAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsABAAEAAQAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsADQANAA0ADQANAA0ADQANAB4AKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AUABQAFAAUABQAFAAUABQAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAUABQAFAAUABQAA0ADQANAA0ADQANABQAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwANAA0ADQANAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAeAAQABAAEAB4AKwArAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLACsADQArAB4AKwArAAQABAAEAAQAUABQAB4AUAArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwAEAAQABAAEAAQABAAEAAQABAAOAA0ADQATABMAHgAeAB4ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0AUABQAFAAUAAEAAQAKwArAAQADQANAB4AUAArACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXABcAA0ADQANACoASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUAArACsAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANACsADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEcARwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQACsAKwAeAAQABAANAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAEAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUAArACsAUAArACsAUABQACsAKwBQAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AKwArAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAeAB4ADQANAA0ADQAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAArAAQABAArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAEAAQABAAEAAQABAAEACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAFgAWAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAKwBQACsAKwArACsAKwArAFAAKwArACsAKwBQACsAUAArAFAAKwBQAFAAUAArAFAAUAArAFAAKwArAFAAKwBQACsAUAArAFAAKwBQACsAUABQACsAUAArACsAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAUABQAFAAUAArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUAArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAlACUAJQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeACUAJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeACUAJQAlACUAJQAeACUAJQAlACUAJQAgACAAIAAlACUAIAAlACUAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIQAhACEAIQAhACUAJQAgACAAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAgACAAIAAlACUAJQAlACAAJQAgACAAIAAgACAAIAAgACAAIAAlACUAJQAgACUAJQAlACUAIAAgACAAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeACUAHgAlAB4AJQAlACUAJQAlACAAJQAlACUAJQAeACUAHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAgACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAlACUAJQAlACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAIAAgACAAJQAlACUAIAAgACAAIAAgAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFwAXABcAFQAVABUAHgAeAB4AHgAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAgACAAJQAlACUAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAlACAAIAAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsA';

/***/ }),
/* 155 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layer; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(134);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(130);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(138);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(12);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(132);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(133);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(136);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(139);
/* harmony import */ var _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var sprite_animator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1);
/* harmony import */ var _helpers_fast_animation_frame__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(144);
/* harmony import */ var _basenode__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(142);
/* harmony import */ var _basesprite__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(129);
/* harmony import */ var _batch__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(156);
/* harmony import */ var _group__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(157);
/* harmony import */ var _helpers_group__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(161);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(120);












var _dec, _class;







 // import stylesheet from './stylesheet';



var _zOrder = Symbol('zOrder'),
    _timeline = Symbol('timeline'),
    _renderDeferer = Symbol('renderDeferrer'),
    _drawTask = Symbol('drawTask'),
    _autoRender = Symbol('autoRender'),
    _adjustTimer = Symbol('adjustTimer');

var LayerAttr = (_dec = Object(_utils__WEBPACK_IMPORTED_MODULE_18__["parseValue"])(_utils__WEBPACK_IMPORTED_MODULE_18__["parseColorString"]), (_class =
/*#__PURE__*/
function (_BaseNode$Attr) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_9___default()(LayerAttr, _BaseNode$Attr);

  function LayerAttr(subject) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5___default()(this, LayerAttr);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8___default()(LayerAttr).call(this, subject));

    _this.setDefault({
      bgcolor: ''
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6___default()(LayerAttr, [{
    key: "bgcolor",
    set: function set(val) {
      this.set('bgcolor', val);
      var subject = this.subject;

      if (subject.canvas && subject.canvas.style) {
        if (val != null) {
          this.quietSet('canvasBgColor', subject.canvas.style.backgroundColor);
          subject.canvas.style.backgroundColor = val;
        } else {
          subject.canvas.style.backgroundColor = this.get('canvasBgColor');
        }
      }
    }
  }]);

  return LayerAttr;
}(_basenode__WEBPACK_IMPORTED_MODULE_13__["default"].Attr), (_babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_10___default()(_class.prototype, "bgcolor", [_dec, _utils__WEBPACK_IMPORTED_MODULE_18__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, "bgcolor"), _class.prototype)), _class));

var Layer =
/*#__PURE__*/
function (_BaseNode) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_9___default()(Layer, _BaseNode);

  function Layer() {
    var _this2;

    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        context = _ref.context,
        _ref$evaluateFPS = _ref.evaluateFPS,
        evaluateFPS = _ref$evaluateFPS === void 0 ? false : _ref$evaluateFPS,
        _ref$renderMode = _ref.renderMode,
        renderMode = _ref$renderMode === void 0 ? 'repaintAll' : _ref$renderMode,
        _ref$autoRender = _ref.autoRender,
        autoRender = _ref$autoRender === void 0 ? true : _ref$autoRender,
        _ref$useDocumentCSS = _ref.useDocumentCSS,
        useDocumentCSS = _ref$useDocumentCSS === void 0 ? false : _ref$useDocumentCSS;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5___default()(this, Layer);

    _this2 = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8___default()(Layer).call(this));
    _this2[_autoRender] = autoRender; // renderMode: repaintAll | repaintDirty

    if (renderMode === 'repaintDirty') {
      Object(_utils__WEBPACK_IMPORTED_MODULE_18__["setDeprecation"])('renderRepaintDirty');
    }

    if (evaluateFPS !== false) {
      Object(_utils__WEBPACK_IMPORTED_MODULE_18__["setDeprecation"])('evaluateFPS');
    }

    _this2.outputContext = context;
    if (context.canvas) context.canvas.layer_ = _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this2));
    _this2.childNodes = [];
    _this2.sortedChildNodes = [];
    _this2[_zOrder] = 0;
    _this2[_timeline] = new sprite_animator__WEBPACK_IMPORTED_MODULE_11__["Timeline"](_helpers_fast_animation_frame__WEBPACK_IMPORTED_MODULE_12__["timeline"]);
    _this2[_renderDeferer] = null;
    _this2.touchedTargets = {}; // auto release

    /* istanbul ignore if  */

    if (context.canvas && context.canvas.addEventListener) {
      context.canvas.addEventListener('DOMNodeRemovedFromDocument', function () {
        var _this3;

        _this2._savePlaybackRate = _this2.timeline.playbackRate;
        _this2._saveChildren = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(_this2.childNodes);

        (_this3 = _this2).remove.apply(_this3, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(_this2.childNodes));

        _this2.timeline.playbackRate = 0;
      });
      context.canvas.addEventListener('DOMNodeInsertedIntoDocument', function () {
        if (_this2._saveChildren) {
          var _this4;

          _this2.timeline.playbackRate = _this2._savePlaybackRate;

          (_this4 = _this2).append.apply(_this4, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(_this2._saveChildren));

          delete _this2._saveChildren;
        }
      });
    }

    if (useDocumentCSS) {
      _this2.fromDocumentCSS();
    }

    return _this2;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6___default()(Layer, [{
    key: "fromDocumentCSS",
    value: function fromDocumentCSS() {// stylesheet.fromDocumentCSS();
    }
  }, {
    key: "clearContext",
    value: function clearContext() {
      var context = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.outputContext;

      if (context.canvas) {
        var _context$canvas = context.canvas,
            width = _context$canvas.width,
            height = _context$canvas.height;
        context.clearRect(0, 0, width, height);
      }
    }
  }, {
    key: "prepareRender",
    value: function prepareRender() {
      var _this5 = this;

      if (!this[_renderDeferer]) {
        this[_renderDeferer] = {};
        this[_renderDeferer].promise = new Promise(function (resolve, reject) {
          Object.assign(_this5[_renderDeferer], {
            resolve: resolve,
            reject: reject
          });

          if (_this5.autoRender) {
            _this5[_drawTask] = Object(_helpers_fast_animation_frame__WEBPACK_IMPORTED_MODULE_12__["requestAnimationFrame"])(function () {
              delete _this5[_drawTask];

              _this5.draw();
            });
          }
        }); // .catch(ex => console.error(ex.message))
      }

      return this[_renderDeferer] ? this[_renderDeferer].promise : Promise.resolve();
    }
  }, {
    key: "forceUpdate",
    value: function forceUpdate() {
      return this.prepareRender();
    }
  }, {
    key: "restyle",
    value: function restyle() {
      var bgcolor = this.style.bgcolor;

      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8___default()(Layer.prototype), "restyle", this).call(this);

      if (bgcolor) {
        var color = this.attr('bgcolor');

        if (color !== bgcolor && this.canvas && this.canvas.style) {
          this.canvas.style = color;
        }
      }
    }
  }, {
    key: "draw",
    value: function draw() {
      var clearContext = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      // if(this.__styleNeedUpdate) {
      //   stylesheet.computeStyle(this);
      // }
      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8___default()(Layer.prototype), "draw", this).call(this);

      var renderDeferrer = this[_renderDeferer];
      this[_renderDeferer] = null;

      if (this[_drawTask]) {
        Object(_helpers_fast_animation_frame__WEBPACK_IMPORTED_MODULE_12__["cancelAnimationFrame"])(this[_drawTask]);
        delete this[_drawTask];
      }

      var currentTime = this.timeline.currentTime;
      this.repaint(currentTime, clearContext);

      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8___default()(Layer.prototype), "dispatchEvent", this).call(this, 'update', {
        target: this,
        timeline: this.timeline,
        renderTime: currentTime
      }, true, true);

      if (renderDeferrer) {
        renderDeferrer.resolve();
      }
    }
  }, {
    key: "update",
    value: function update(target) {
      if (target && target.isDirty) return;

      if (target) {
        target.isDirty = true;
      }

      this.prepareRender();
    }
  }, {
    key: "isVisible",
    value: function isVisible() {
      if (this.canvas) {
        return this.canvas.width > 0 && this.canvas.height > 0;
      }

      return true;
    }
  }, {
    key: "drawSprites",
    value: function drawSprites(renderEls, t) {
      if (this.beforeDrawTransform) {
        this.outputContext.save();
        this.beforeDrawTransform();
      }

      for (var i = 0; i < renderEls.length; i++) {
        var child = renderEls[i],
            isDirty = child.isDirty;
        child.isDirty = false;

        if (child.parent === this) {
          child.draw(t);

          if (isDirty) {
            child.dispatchEvent('update', {
              target: child,
              renderTime: t
            }, true, true);
          }
        }
      }

      if (this.beforeDrawTransform) {
        this.outputContext.restore();
      }
    }
  }, {
    key: "repaint",
    value: function repaint(t) {
      var clearContext = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var renderEls = this.sortedChildNodes;
      var outputContext = this.outputContext;
      if (clearContext) this.clearContext(outputContext);
      this.drawSprites(renderEls, t);
    }
  }, {
    key: "pointCollision",
    value: function pointCollision(evt) {
      if (this.outputContext.canvas) {
        var layerX = evt.layerX,
            layerY = evt.layerY;
        var _this$outputContext$c = this.outputContext.canvas,
            width = _this$outputContext$c.width,
            height = _this$outputContext$c.height;

        if (layerX == null && layerY == null || layerX >= 0 && layerY >= 0 && layerX < width && layerY < height) {
          return true;
        }

        return false;
      }
      /* istanbul ignore next  */


      return true;
    }
  }, {
    key: "dispatchEvent",
    value: function dispatchEvent(type, evt) {
      var _this6 = this;

      var collisionState = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var swallow = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

      if (swallow && this.getEventHandlers(type).length === 0) {
        return;
      }

      if (!swallow && !evt.terminated && type !== 'mouseenter') {
        var isCollision = collisionState || this.pointCollision(evt);
        var changedTouches = evt.originalEvent && evt.originalEvent.changedTouches;

        if (changedTouches && (type === 'touchend' || type === 'touchmove')) {
          isCollision = true;
        }

        if (isCollision || type === 'mouseleave') {
          var sprites = this.sortedChildNodes.slice(0).reverse(),
              targetSprites = [];

          if (changedTouches && (type === 'touchend' || type === 'touchmove')) {
            var touch = changedTouches[0];

            if (touch && touch.identifier != null) {
              var targets = this.layer.touchedTargets[touch.identifier];

              if (targets) {
                targets.forEach(function (target) {
                  if (target !== _this6 && target.layer === _this6) {
                    var _target$getParentXY = target.getParentXY(evt.layerX, evt.layerY),
                        _target$getParentXY2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_target$getParentXY, 2),
                        parentX = _target$getParentXY2[0],
                        parentY = _target$getParentXY2[1];

                    var _parentX = evt.parentX;
                    var _parentY = evt.parentY;
                    evt.parentX = parentX;
                    evt.parentY = parentY;
                    target.dispatchEvent(type, evt, true, true);
                    evt.parentX = _parentX;
                    evt.parentY = _parentY;
                  }
                });
                if (type === 'touchend') delete this.layer.touchedTargets[touch.identifier];
              }
            }
          } else {
            for (var i = 0; i < sprites.length; i++) {
              var sprite = sprites[i];
              var hit = sprite.dispatchEvent(type, evt, collisionState, swallow);

              if (hit) {
                if (evt.targetSprites) {
                  targetSprites.push.apply(targetSprites, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(evt.targetSprites));
                  delete evt.targetSprites;
                } // detect mouseenter/mouseleave


                targetSprites.push(sprite);
              }

              if (evt.terminated && type !== 'mousemove') {
                break;
              }
            }
          }

          evt.targetSprites = targetSprites; // stopDispatch can only terminate event in the same level

          evt.terminated = false;
          collisionState = isCollision;
        }
      }

      evt.targetSprites = evt.targetSprites || [];

      if (evt.cancelBubble) {
        // stop bubbling
        return false;
      }

      if (evt.targetSprites.length > 0) {
        // bubbling
        collisionState = true;
      }

      var layerX = evt.layerX,
          layerY = evt.layerY;

      if (layerX != null && layerY != null) {
        evt.offsetX = layerX + this.offset[0];
        evt.offsetY = layerY + this.offset[1];
      }

      return _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8___default()(Layer.prototype), "dispatchEvent", this).call(this, type, evt, collisionState, swallow);
    }
  }, {
    key: "group",
    value: function group() {
      var group = new _group__WEBPACK_IMPORTED_MODULE_16__["default"]();
      group.append.apply(group, arguments);
      this.appendChild(group);
      return group;
    }
  }, {
    key: "batch",
    value: function batch() {
      var _this7 = this;

      for (var _len = arguments.length, sprites = new Array(_len), _key = 0; _key < _len; _key++) {
        sprites[_key] = arguments[_key];
      }

      sprites.forEach(function (sprite) {
        if (sprite.layer !== _this7) {
          _this7.appendChild(sprite);
        }
      });
      var batch = new _batch__WEBPACK_IMPORTED_MODULE_15__["default"](this);
      batch.add.apply(batch, sprites);
      return batch;
    }
  }, {
    key: "adjust",
    value: function adjust(handler)
    /* istanbul ignore next  */
    {
      var _this8 = this;

      var update = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      if (!update) return;
      var outputContext = this.outputContext;
      var shadowContext = this.adjustContext || outputContext.canvas.cloneNode().getContext('2d');

      if (!this[_adjustTimer]) {
        this.autoRender = false;
        shadowContext.clearRect(0, 0, shadowContext.canvas.width, shadowContext.canvas.height);
        shadowContext._clearTag = false;
        shadowContext.drawImage(outputContext.canvas, 0, 0);
        this.adjustContext = shadowContext;
      } else {
        clearTimeout(this[_adjustTimer]);
      }

      this[_adjustTimer] = setTimeout(function () {
        _this8.autoRender = true;
        delete _this8[_adjustTimer];
      }, 100);

      if (shadowContext.canvas.width > 0 && shadowContext.canvas.height > 0) {
        this.clearContext(outputContext);
        outputContext.save();
        handler.call(this, outputContext);
        outputContext.drawImage(shadowContext.canvas, 0, 0);
        outputContext.restore();
      }
    }
  }, {
    key: "resolution",
    get: function get() {
      return [this.canvas.width, this.canvas.height];
    }
  }, {
    key: "autoRender",
    set: function set(value) {
      this[_autoRender] = value;

      if (value) {
        this.draw();
      }
    },
    get: function get() {
      return this[_autoRender];
    }
  }, {
    key: "layer",
    get: function get() {
      return this;
    }
  }, {
    key: "children",
    get: function get() {
      return this.childNodes.filter(function (child) {
        return child instanceof _basesprite__WEBPACK_IMPORTED_MODULE_14__["default"];
      });
    }
  }, {
    key: "timeline",
    get: function get() {
      return this[_timeline];
    }
  }, {
    key: "context",
    get: function get() {
      return this.outputContext;
    }
  }, {
    key: "canvas",
    get: function get() {
      return this.outputContext.canvas;
    }
  }, {
    key: "offset",
    get: function get() {
      return [0, 0];
    }
  }]);

  return Layer;
}(_basenode__WEBPACK_IMPORTED_MODULE_13__["default"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(Layer, "Attr", LayerAttr);


Object.assign(Layer.prototype, _helpers_group__WEBPACK_IMPORTED_MODULE_17__["default"]);

/***/ }),
/* 156 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Batch; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_render__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(128);





var _batch = Symbol('batch');

var Batch =
/*#__PURE__*/
function () {
  function Batch(layer) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Batch);

    this.layer = layer;
    this[_batch] = new Set();
    this.cache = null;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Batch, [{
    key: "add",
    value: function add() {
      var _this = this;

      for (var _len = arguments.length, nodes = new Array(_len), _key = 0; _key < _len; _key++) {
        nodes[_key] = arguments[_key];
      }

      nodes.forEach(function (node) {
        if (!node.layer || node.layer !== _this.layer) {
          /* istanbul ignore next  */
          throw new Error('Batch node must append to this layer first!');
        }

        if (node[_batch]) {
          /* istanbul ignore next  */
          throw new Error('Node already batched!');
        }

        var that = _this;
        Object.defineProperty(node, 'cache', {
          configurable: true,
          get: function get() {
            return that.cache;
          },
          set: function set(context) {
            if (that.baseNode === this) {
              if (that.cache && context !== that.cache) {
                _helpers_render__WEBPACK_IMPORTED_MODULE_3__["cacheContextPool"].put(that.cache);
              }

              that.cache = context;
            } else if (context == null) {
              throw new Error('Cannot set non-cachable attributes to batch members.Use batch.baseNode.attr(...)');
            }
          }
        });
        node[_batch] = _this;

        _this[_batch].add(node);
      });
    }
  }, {
    key: "remove",
    value: function remove() {
      var _this2 = this;

      for (var _len2 = arguments.length, nodes = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        nodes[_key2] = arguments[_key2];
      }

      nodes.forEach(function (node) {
        if (_this2[_batch].has(node)) {
          delete node[_batch];
          delete node.cache;

          _this2[_batch].delete(node);
        }
      });
    }
  }, {
    key: "baseNode",
    get: function get() {
      var batchNodes = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(this[_batch]);

      var baseNode = batchNodes[0],
          zOrder = Infinity,
          zIndex = Infinity;

      for (var i = 0; i < batchNodes.length; i++) {
        var node = batchNodes[i];

        if (zIndex > node.zIndex) {
          zIndex = node.zIndex;
          zOrder = node.zOrder;
          baseNode = node;
        } else if (zIndex === node.zIndex && zOrder > node.zOrder) {
          zOrder = node.zOrder;
          baseNode = node;
        }
      }

      return baseNode;
    }
  }]);

  return Batch;
}();



/***/ }),
/* 157 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Group; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(134);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(132);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(133);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(136);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(130);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(138);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(139);
/* harmony import */ var _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(120);
/* harmony import */ var _basesprite__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(129);
/* harmony import */ var _helpers_path__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(158);
/* harmony import */ var _helpers_group__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(161);












var _dec, _dec2, _dec3, _dec4, _class, _class2, _temp, _class3, _class4, _temp2;






var _zOrder = Symbol('zOrder'),
    _layoutTag = Symbol('layoutTag');

var GroupAttr = (_dec = Object(_utils__WEBPACK_IMPORTED_MODULE_11__["relative"])('width'), _dec2 = Object(_utils__WEBPACK_IMPORTED_MODULE_11__["relative"])('height'), _dec3 = Object(_utils__WEBPACK_IMPORTED_MODULE_11__["parseValue"])(parseFloat), _dec4 = Object(_utils__WEBPACK_IMPORTED_MODULE_11__["parseValue"])(parseFloat), (_class = (_temp = _class2 =
/*#__PURE__*/
function (_BaseSprite$Attr) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default()(GroupAttr, _BaseSprite$Attr);

  function GroupAttr(subject) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, GroupAttr);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(GroupAttr).call(this, subject));

    _this.setDefault({
      clip: null,
      scrollTop: 0,
      scrollLeft: 0
    });

    GroupAttr.inits.forEach(function (init) {
      init(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8___default()(_this)), subject);
    });
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(GroupAttr, [{
    key: "clip",
    set: function set(val) {
      this.clearFlow();

      if (val) {
        val = typeof val === 'string' ? {
          d: val
        } : val;
        this.subject.svg = Object(_helpers_path__WEBPACK_IMPORTED_MODULE_13__["createSvgPath"])(val);
        this.set('clip', val);
      } else {
        this.subject.svg = null;
        this.set('clip', null);
      }
    } // @attr
    // @relative('width')
    // set width(value) {
    //   this.clearLayout();
    //   this.set('width', value);
    // }
    // @attr
    // @relative('height')
    // set height(value) {
    //   this.clearLayout();
    //   this.set('height', value);
    // }

  }, {
    key: "layoutWidth",
    set: function set(value) {
      this.clearLayout();
      this.set('layoutWidth', value);
    }
  }, {
    key: "layoutHeight",
    set: function set(value) {
      this.clearLayout();
      this.set('layoutHeight', value);
    }
  }, {
    key: "display",
    set: function set(value) {
      this.clearLayout();
      this.set('display', value);
    }
  }, {
    key: "scrollLeft",
    set: function set(value) {
      this.set('scrollLeft', value);
    }
  }, {
    key: "scrollTop",
    set: function set(value) {
      this.set('scrollTop', value);
    }
  }]);

  return GroupAttr;
}(_basesprite__WEBPACK_IMPORTED_MODULE_12__["default"].Attr), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(_class2, "inits", []), _temp), (_babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_10___default()(_class.prototype, "clip", [_utils__WEBPACK_IMPORTED_MODULE_11__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, "clip"), _class.prototype), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_10___default()(_class.prototype, "layoutWidth", [_utils__WEBPACK_IMPORTED_MODULE_11__["attr"], _dec], Object.getOwnPropertyDescriptor(_class.prototype, "layoutWidth"), _class.prototype), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_10___default()(_class.prototype, "layoutHeight", [_utils__WEBPACK_IMPORTED_MODULE_11__["attr"], _dec2], Object.getOwnPropertyDescriptor(_class.prototype, "layoutHeight"), _class.prototype), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_10___default()(_class.prototype, "display", [_utils__WEBPACK_IMPORTED_MODULE_11__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, "display"), _class.prototype), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_10___default()(_class.prototype, "scrollLeft", [_dec3, _utils__WEBPACK_IMPORTED_MODULE_11__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, "scrollLeft"), _class.prototype), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_10___default()(_class.prototype, "scrollTop", [_dec4, _utils__WEBPACK_IMPORTED_MODULE_11__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, "scrollTop"), _class.prototype)), _class));

var _layout = Symbol('layout');

var Group = (_class3 = (_temp2 = _class4 =
/*#__PURE__*/
function (_BaseSprite) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default()(Group, _BaseSprite);

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(Group, null, [{
    key: "applyLayout",
    value: function applyLayout(name, layout) {
      this[_layout] = this[_layout] || {};
      var attrs = layout.attrs,
          relayout = layout.relayout;

      if (attrs.init) {
        GroupAttr.inits.push(attrs.init);
      }

      Group.addAttributes(attrs);
      this[_layout][name] = relayout;
    }
  }]);

  function Group() {
    var _this2;

    var attr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, Group);

    _this2 = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Group).call(this, attr));
    _this2.childNodes = [];
    _this2.sortedChildNodes = [];
    _this2[_zOrder] = 0;
    _this2[_layoutTag] = false;
    return _this2;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(Group, [{
    key: "scrollTo",
    value: function scrollTo(x, y) {
      this.attr('scrollLeft', x);
      this.attr('scrollTop', y);
    }
  }, {
    key: "scrollBy",
    value: function scrollBy(dx, dy) {
      var x = this.attr('scrollLeft'),
          y = this.attr('scrollTop');
      this.scrollTo(x + dx, y + dy);
    }
  }, {
    key: "cloneNode",
    value: function cloneNode(deepCopy) {
      var node = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Group.prototype), "cloneNode", this).call(this);

      if (deepCopy) {
        var children = this.childNodes;
        children.forEach(function (child) {
          var subNode = child.cloneNode(deepCopy);
          node.append(subNode);
        });
      }

      return node;
    }
  }, {
    key: "update",
    value: function update(child) {
      child.isDirty = true;
      var attrSize = this.attrSize;

      if (attrSize[0] === '' || attrSize[1] === '') {
        this.reflow();
      }

      this.forceUpdate(true);
    }
  }, {
    key: "pointCollision",
    value: function pointCollision(evt) {
      if (_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Group.prototype), "pointCollision", this).call(this, evt) || this.isVirtual) {
        if (this.svg) {
          var offsetX = evt.offsetX,
              offsetY = evt.offsetY;
          if (offsetX == null && offsetY == null) return true;
          var rect = this.originalRect;
          evt.isInClip = this.svg.isPointInPath(offsetX - rect[0], offsetY - rect[1]);
        }

        return true;
      }

      return false;
    }
  }, {
    key: "dispatchEvent",
    value: function dispatchEvent(type, evt) {
      var collisionState = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var swallow = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

      if (swallow && this.getEventHandlers(type).length === 0) {
        return;
      }

      if (!swallow && !evt.terminated && type !== 'mouseenter') {
        var isCollision = collisionState || this.pointCollision(evt);

        if (isCollision || type === 'mouseleave') {
          var scrollLeft = this.attr('scrollLeft'),
              scrollTop = this.attr('scrollTop'),
              borderWidth = this.attr('border').width,
              padding = this.attr('padding');
          var parentX, parentY;
          if ('offsetX' in evt) parentX = evt.offsetX - this.originalRect[0] - borderWidth - padding[3] + scrollLeft;
          if ('offsetY' in evt) parentY = evt.offsetY - this.originalRect[1] - borderWidth - padding[0] + scrollTop;
          var _parentX = evt.parentX,
              _parentY = evt.parentY;
          evt.parentX = parentX;
          evt.parentY = parentY;
          var sprites = this.sortedChildNodes.slice(0).reverse();
          var targetSprites = [];

          for (var i = 0; i < sprites.length && evt.isInClip !== false; i++) {
            var sprite = sprites[i];
            var hit = sprite.dispatchEvent(type, evt, collisionState, swallow);

            if (hit) {
              if (evt.targetSprites) {
                targetSprites.push.apply(targetSprites, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(evt.targetSprites));
                delete evt.targetSprites;
              }

              targetSprites.push(sprite);
            }

            if (evt.terminated && type !== 'mousemove') {
              break;
            }
          }

          evt.targetSprites = targetSprites; // stopDispatch can only terminate event in the same level

          evt.terminated = false;
          evt.parentX = _parentX;
          evt.parentY = _parentY;
          collisionState = isCollision;
        }
      }

      evt.targetSprites = evt.targetSprites || [];

      if (evt.cancelBubble) {
        // stop bubbling
        return false;
      }

      if (evt.targetSprites.length > 0) {
        // bubbling
        collisionState = true;
      }

      return _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Group.prototype), "dispatchEvent", this).call(this, type, evt, collisionState, swallow);
    }
  }, {
    key: "relayout",
    value: function relayout() {
      var items = this.childNodes.filter(function (child) {
        if (child.hasLayout) {
          child.attr('layoutWidth', null);
          child.attr('layoutHeight', null);
          child.attr('layoutX', null);
          child.attr('layoutY', null);
        }

        if (child.relayout) {
          var _display = child.attr('display');

          if (_display !== '' && _display !== 'static') {
            child.relayout();
          }
        }

        return child.hasLayout && child.attr('display') !== 'none';
      });
      var display = this.attr('display');
      var doLayout = Group[_layout][display];

      if (doLayout) {
        doLayout(this, items);
      }
    }
  }, {
    key: "clearLayout",
    value: function clearLayout() {
      this[_layoutTag] = false;
      if (this.hasLayout) this.parent.clearLayout();
    }
  }, {
    key: "draw",
    value: function draw(t) {
      var drawingContext = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.context;
      // must relayout before draw
      // prevent originalRect changing when rendering.
      var display = this.attr('display');

      if (display !== '' && display !== 'static' && !this[_layoutTag]) {
        this.relayout();
        this[_layoutTag] = true;
      }

      return _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Group.prototype), "draw", this).call(this, t, drawingContext);
    }
  }, {
    key: "render",
    value: function render(t, drawingContext) {
      var clipPath = this.attr('clip');

      if (clipPath) {
        this.svg.beginPath().to(drawingContext);
        drawingContext.clip();
      }

      if (!this.isVirtual) {
        _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Group.prototype), "render", this).call(this, t, drawingContext);

        if (this.attr('clipOverflow')) {
          drawingContext.beginPath();
          drawingContext.rect(0, 0, this.contentSize[0], this.contentSize[1]);
          drawingContext.clip();
        }
      }

      drawingContext.save();
      var scrollLeft = this.attr('scrollLeft'),
          scrollTop = this.attr('scrollTop');
      drawingContext.translate(-scrollLeft, -scrollTop);
      var sprites = this.sortedChildNodes;

      for (var i = 0; i < sprites.length; i++) {
        var child = sprites[i],
            isDirty = child.isDirty;
        child.isDirty = false;
        child.draw(t, drawingContext);

        if (isDirty) {
          child.dispatchEvent('update', {
            target: child,
            renderTime: t
          }, true, true);
        }
      }

      drawingContext.restore();
    }
  }, {
    key: "isVirtual",
    get: function get() {
      var display = this.attr('display');
      if (display !== '' && display !== 'none') return false;

      var _this$attr = this.attr('border'),
          borderWidth = _this$attr.width,
          borderRadius = this.attr('borderRadius'),
          bgcolor = this.attr('bgcolor'),
          _this$attr2 = this.attr('gradients'),
          bgGradient = _this$attr2.bgcolor,
          _this$attrSize = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(this.attrSize, 2),
          width = _this$attrSize[0],
          height = _this$attrSize[1],
          _this$attr3 = this.attr('anchor'),
          _this$attr4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_this$attr3, 2),
          anchorX = _this$attr4[0],
          anchorY = _this$attr4[1],
          bgimage = this.attr('bgimage'),
          _this$attr5 = this.attr('padding'),
          _this$attr6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_this$attr5, 4),
          paddingTop = _this$attr6[0],
          paddingRight = _this$attr6[1],
          paddingBottom = _this$attr6[2],
          paddingLeft = _this$attr6[3];

      return !anchorX && !anchorY && !width && !height && !borderRadius && !borderWidth && !bgcolor && !bgGradient && !bgimage && !paddingTop && !paddingRight && !paddingBottom && !paddingLeft;
    }
  }, {
    key: "children",
    get: function get() {
      var children = this.childNodes || [];
      return children.filter(function (child) {
        return child instanceof _basesprite__WEBPACK_IMPORTED_MODULE_12__["default"];
      });
    }
  }, {
    key: "contentSize",
    get: function get() {
      if (this.isVirtual) return [0, 0];

      var _this$attrSize2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(this.attrSize, 2),
          width = _this$attrSize2[0],
          height = _this$attrSize2[1];

      if (width === '' || height === '') {
        if (this.attr('clip')) {
          var svg = this.svg;
          var bounds = svg.bounds;
          width = width || bounds[2];
          height = height || bounds[3];
        } else {
          var right, bottom;
          right = 0;
          bottom = 0;
          this.childNodes.forEach(function (sprite) {
            if (sprite.attr('display') !== 'none') {
              var renderBox = sprite.renderBox;

              if (renderBox) {
                right = Math.max(right, renderBox[2]);
                bottom = Math.max(bottom, renderBox[3]);
              }
            }
          });
          width = width || right;
          height = height || bottom;
        }
      }

      return [width, height];
    }
  }]);

  return Group;
}(_basesprite__WEBPACK_IMPORTED_MODULE_12__["default"]), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(_class4, "Attr", GroupAttr), _temp2), (_babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_10___default()(_class3.prototype, "contentSize", [_utils__WEBPACK_IMPORTED_MODULE_11__["flow"]], Object.getOwnPropertyDescriptor(_class3.prototype, "contentSize"), _class3.prototype)), _class3);

Object.assign(Group.prototype, _helpers_group__WEBPACK_IMPORTED_MODULE_14__["default"]);
Group.setAttributeEffects({
  clip: function clip(clip1, clip2, p, start, end) {
    clip1 = Object(_helpers_path__WEBPACK_IMPORTED_MODULE_13__["createSvgPath"])(clip1);
    clip2 = Object(_helpers_path__WEBPACK_IMPORTED_MODULE_13__["createSvgPath"])(clip2);
    return Object(_helpers_path__WEBPACK_IMPORTED_MODULE_13__["pathEffect"])(clip1.d, clip2.d, p, start, end);
  }
});

/***/ }),
/* 158 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pathEffect", function() { return pathEffect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSvgPath", function() { return createSvgPath; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_toArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(159);
/* harmony import */ var _babel_runtime_helpers_toArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var svg_path_to_canvas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19);
/* harmony import */ var svg_path_to_canvas__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(svg_path_to_canvas__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _sort__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(160);



// https://github.com/AlloyTeam/pasition



function _subShapes(shapes, count) {
  var _loop = function _loop(i) {
    var shape = shapes[shapes.length - 1];
    var newShape = [];
    var x = shape[0][0],
        y = shape[0][1];
    shape.forEach(function () {
      newShape.push([x, y, x, y, x, y, x, y]);
    });
    shapes.push(newShape);
  };

  for (var i = 0; i < count; i++) {
    _loop(i);
  }
}

function _upShapes(shapes, count) {
  var _loop2 = function _loop2(i) {
    var shape = shapes[shapes.length - 1];
    var newShape = [];
    shape.forEach(function (curve) {
      newShape.push(curve.slice(0));
    });
    shapes.push(newShape);
  };

  for (var i = 0; i < count; i++) {
    _loop2(i);
  }
}

function split(x1, y1, x2, y2, x3, y3, x4, y4, t) {
  return {
    left: _split(x1, y1, x2, y2, x3, y3, x4, y4, t),
    right: _split(x4, y4, x3, y3, x2, y2, x1, y1, 1 - t, true)
  };
}

function _split(x1, y1, x2, y2, x3, y3, x4, y4, t, reverse) {
  var x12 = (x2 - x1) * t + x1;
  var y12 = (y2 - y1) * t + y1;
  var x23 = (x3 - x2) * t + x2;
  var y23 = (y3 - y2) * t + y2;
  var x34 = (x4 - x3) * t + x3;
  var y34 = (y4 - y3) * t + y3;
  var x123 = (x23 - x12) * t + x12;
  var y123 = (y23 - y12) * t + y12;
  var x234 = (x34 - x23) * t + x23;
  var y234 = (y34 - y23) * t + y23;
  var x1234 = (x234 - x123) * t + x123;
  var y1234 = (y234 - y123) * t + y123;

  if (reverse) {
    return [x1234, y1234, x123, y123, x12, y12, x1, y1];
  }

  return [x1, y1, x12, y12, x123, y123, x1234, y1234];
}

function _splitCurves(curves, count) {
  var i = 0,
      index = 0;

  for (; i < count; i++) {
    var curve = curves[index];
    var cs = split(curve[0], curve[1], curve[2], curve[3], curve[4], curve[5], curve[6], curve[7], 0.5);
    curves.splice(index, 1);
    curves.splice(index, 0, cs.left, cs.right);
    index += 2;

    if (index >= curves.length - 1) {
      index = 0;
    }
  }
}

function pathToShapes(path) {
  var x = 0,
      y = 0;
  var shapes = [];
  path.forEach(function (p) {
    var _p = _babel_runtime_helpers_toArray__WEBPACK_IMPORTED_MODULE_2___default()(p),
        cmd = _p[0],
        points = _p.slice(1);

    if (cmd === 'M') {
      x = points[0];
      y = points[1];
    } else {
      shapes.push([x, y].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(points)));
      x = points[4];
      y = points[5];
    }
  });
  return [shapes];
} // match two path


function match(pathA, pathB) {
  var minCurves = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 100;
  var shapesA = pathToShapes(pathA.path);
  var shapesB = pathToShapes(pathB.path);
  var lenA = shapesA.length,
      lenB = shapesB.length;

  if (lenA > lenB) {
    _subShapes(shapesB, lenA - lenB);
  } else if (lenA < lenB) {
    _upShapes(shapesA, lenB - lenA);
  }

  shapesA = Object(_sort__WEBPACK_IMPORTED_MODULE_4__["sort"])(shapesA, shapesB);
  shapesA.forEach(function (curves, index) {
    var lenA = curves.length,
        lenB = shapesB[index].length;

    if (lenA > lenB) {
      if (lenA < minCurves) {
        _splitCurves(curves, minCurves - lenA);

        _splitCurves(shapesB[index], minCurves - lenB);
      } else {
        _splitCurves(shapesB[index], lenA - lenB);
      }
    } else if (lenA < lenB) {
      if (lenB < minCurves) {
        _splitCurves(curves, minCurves - lenA);

        _splitCurves(shapesB[index], minCurves - lenB);
      } else {
        _splitCurves(curves, lenB - lenA);
      }
    }
  });
  shapesA.forEach(function (curves, index) {
    shapesA[index] = Object(_sort__WEBPACK_IMPORTED_MODULE_4__["sortCurves"])(curves, shapesB[index]);
  });
  return [shapesA, shapesB];
}

function lerpPoints(x1, y1, x2, y2, t) {
  return [x1 + (x2 - x1) * t, y1 + (y2 - y1) * t];
}

function lerpCurve(curveA, curveB, t) {
  return lerpPoints(curveA[0], curveA[1], curveB[0], curveB[1], t).concat(lerpPoints(curveA[2], curveA[3], curveB[2], curveB[3], t)).concat(lerpPoints(curveA[4], curveA[5], curveB[4], curveB[5], t)).concat(lerpPoints(curveA[6], curveA[7], curveB[6], curveB[7], t));
}

function lerp(pathA, pathB, t) {
  var _match = match(pathA, pathB),
      _match2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_match, 2),
      shapesA = _match2[0],
      shapesB = _match2[1];

  var closed = /z$/img.test(pathB.d) ? 'z' : '';
  return "".concat(shapesA.map(function (shapeA, i) {
    var shapeB = shapesB[i];
    return shapeA.map(function (curveA, i) {
      var curveB = shapeB[i];
      var curve = lerpCurve(curveA, curveB, t);

      if (i === 0) {
        return "M".concat(curve[0], " ").concat(curve[1], " C").concat(curve[2], " ").concat(curve[3], ", ").concat(curve[4], " ").concat(curve[5], ", ").concat(curve[6], " ").concat(curve[7]);
      }

      return "".concat(curve[2], " ").concat(curve[3], ", ").concat(curve[4], " ").concat(curve[5], ", ").concat(curve[6], " ").concat(curve[7]);
    });
  }).join(' ')).concat(closed);
}

function pathEffect(pathA, pathB, p, s, e) {
  var ep = (p - s) / (e - s);
  if (ep <= 0) return pathA;
  if (ep >= 1) return pathB;
  pathA = new svg_path_to_canvas__WEBPACK_IMPORTED_MODULE_3___default.a(pathA);
  pathB = new svg_path_to_canvas__WEBPACK_IMPORTED_MODULE_3___default.a(pathB);
  return lerp(pathA, pathB, ep);
}
function createSvgPath(path) {
  if (typeof path === 'string') path = {
    d: path
  };
  var p = new svg_path_to_canvas__WEBPACK_IMPORTED_MODULE_3___default.a(path.d);

  if (path.transform || path.trim) {
    if (path.transform) {
      Object.entries(path.transform).forEach(function (_ref) {
        var _ref2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref, 2),
            key = _ref2[0],
            value = _ref2[1];

        if (!Array.isArray(value)) value = [value];
        p[key].apply(p, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(value));
      });
    }

    if (path.trim) {
      p.trim();
    }
  }

  return p;
}

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(4);

var iterableToArray = __webpack_require__(9);

var nonIterableRest = __webpack_require__(6);

function _toArray(arr) {
  return arrayWithHoles(arr) || iterableToArray(arr) || nonIterableRest();
}

module.exports = _toArray;

/***/ }),
/* 160 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sort", function() { return sort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortCurves", function() { return sortCurves; });
// https://github.com/AlloyTeam/pasition
function shapeBox(shape) {
  var minX = shape[0][0],
      minY = shape[0][1],
      maxX = minX,
      maxY = minY;
  shape.forEach(function (curve) {
    var x1 = curve[0],
        x2 = curve[2],
        x3 = curve[4],
        x4 = curve[6],
        y1 = curve[1],
        y2 = curve[3],
        y3 = curve[5],
        y4 = curve[7];
    minX = Math.min(minX, x1, x2, x3, x4);
    minY = Math.min(minY, y1, y2, y3, y4);
    maxX = Math.max(maxX, x1, x2, x3, x4);
    maxY = Math.max(maxY, y1, y2, y3, y4);
  });
  return [minX, minY, maxX, maxY];
}

function boxDistance(boxA, boxB) {
  return Math.sqrt(Math.pow(boxA[0] - boxB[0], 2) + Math.pow(boxA[1] - boxB[1], 2)) + Math.sqrt(Math.pow(boxA[2] - boxB[2], 2) + Math.pow(boxA[3] - boxB[3], 2));
}

function curveDistance(curveA, curveB) {
  var x1 = curveA[0],
      x2 = curveA[2],
      x3 = curveA[4],
      x4 = curveA[6],
      y1 = curveA[1],
      y2 = curveA[3],
      y3 = curveA[5],
      y4 = curveA[7],
      xb1 = curveB[0],
      xb2 = curveB[2],
      xb3 = curveB[4],
      xb4 = curveB[6],
      yb1 = curveB[1],
      yb2 = curveB[3],
      yb3 = curveB[5],
      yb4 = curveB[7];
  return Math.sqrt(Math.pow(xb1 - x1, 2) + Math.pow(yb1 - y1, 2)) + Math.sqrt(Math.pow(xb2 - x2, 2) + Math.pow(yb2 - y2, 2)) + Math.sqrt(Math.pow(xb3 - x3, 2) + Math.pow(yb3 - y3, 2)) + Math.sqrt(Math.pow(xb4 - x4, 2) + Math.pow(yb4 - y4, 2));
}

function sortCurves(curvesA, curvesB) {
  var arrList = permuteCurveNum(curvesA.length);
  var list = [];
  arrList.forEach(function (arr) {
    var distance = 0;
    var i = 0;
    arr.forEach(function (index) {
      distance += curveDistance(curvesA[index], curvesB[i++]);
    });
    list.push({
      index: arr,
      distance: distance
    });
  });
  list.sort(function (a, b) {
    return a.distance - b.distance;
  });
  var result = [];
  list[0].index.forEach(function (index) {
    result.push(curvesA[index]);
  });
  return result;
}

function sort(pathA, pathB) {
  var arrList = permuteNum(pathA.length);
  var list = [];
  arrList.forEach(function (arr) {
    var distance = 0;
    arr.forEach(function (index) {
      distance += boxDistance(shapeBox(pathA[index]), shapeBox(pathB[index]));
    });
    list.push({
      index: arr,
      distance: distance
    });
  });
  list.sort(function (a, b) {
    return a.distance - b.distance;
  });
  var result = [];
  list[0].index.forEach(function (index) {
    result.push(pathA[index]);
  });
  return result;
}

function permuteCurveNum(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    var indexArr = [];

    for (var j = 0; j < num; j++) {
      var index = j + i;
      if (index > num - 1) index -= num;
      indexArr[index] = j;
    }

    arr.push(indexArr);
  }

  return arr;
}

function permuteNum(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push(i);
  }

  return permute(arr);
}

function permute(input) {
  var permArr = [],
      usedChars = [];

  function main(input) {
    var i, ch;

    for (i = 0; i < input.length; i++) {
      ch = input.splice(i, 1)[0];
      usedChars.push(ch);

      if (input.length === 0) {
        permArr.push(usedChars.slice());
      }

      main(input);
      input.splice(i, 0, ch);
      usedChars.pop();
    }

    return permArr;
  }

  return main(input);
}



/***/ }),
/* 161 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(162);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(165);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(120);




var _zOrder = Symbol('zOrder');

var _removeTask = Symbol('removeTask');

/* harmony default export */ __webpack_exports__["default"] = ({
  appendChild: function appendChild(sprite) {
    var _this = this;

    var update = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    var _append = function _append() {
      var children = _this.childNodes;
      children.push(sprite);
      _this[_zOrder] = _this[_zOrder] || 0;
      sprite.connect(_this, _this[_zOrder]++);
      _this.sortedChildNodes = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["sortOrderedSprites"])(_this.childNodes); // for(let i = children.length - 1; i > 0; i--) {
      //   const a = children[i],
      //     b = children[i - 1];
      //   if(a.zIndex < b.zIndex) {
      //     children[i] = b;
      //     children[i - 1] = a;
      //   }
      // }

      if (update) {
        sprite.forceUpdate();
      }

      if (sprite.layer) {
        return sprite.enter();
      }

      return sprite;
    };

    var _remove = sprite.remove();

    if (_remove && _remove.promise) {
      // deferred
      if (_remove.resolve) _remove.resolve();

      _remove.promise.then(function () {
        return _append();
      });

      return _remove;
    }

    return _append();
  },
  append: function append() {
    var _this2 = this;

    for (var _len = arguments.length, sprites = new Array(_len), _key = 0; _key < _len; _key++) {
      sprites[_key] = arguments[_key];
    }

    sprites.forEach(function (sprite) {
      _this2.appendChild(sprite);
    });
    return this;
  },
  removeChild: function removeChild(child) {
    if (child[_removeTask]) return child[_removeTask];
    var idx = this.childNodes.indexOf(child);

    if (idx === -1) {
      return null;
    }

    var that = this;

    function remove(sprite) {
      delete child[_removeTask]; // re-calculate index because it's async...

      var idx = that.childNodes.indexOf(child);

      if (idx === -1) {
        return null;
      }

      that.childNodes.splice(idx, 1);
      that.sortedChildNodes = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["sortOrderedSprites"])(that.childNodes);

      if (sprite.isVisible() || sprite.lastRenderBox) {
        sprite.forceUpdate();
      }

      sprite.disconnect(that);
      return sprite;
    }

    var action = child.exit();

    if (action.promise) {
      child[_removeTask] = action;
      action.promise.then(function () {
        return remove(child);
      });
      return action;
    }

    return remove(child);
  },
  clear: function clear() {
    var _this3 = this;

    var children = this.childNodes.slice(0);
    children.forEach(function (child) {
      return _this3.removeChild(child);
    });
    return this;
  },
  remove: function remove() {
    var _this4 = this;

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    if (args.length === 0) {
      if (!this.parent) return null;
      return this.parent.removeChild(this);
    }

    args.forEach(function (sprite) {
      _this4.removeChild(sprite);
    });
    return this;
  },
  insertBefore: function insertBefore(newchild, refchild) {
    var _this5 = this;

    if (refchild == null) {
      return this.appendChild(newchild);
    }

    var idx = this.childNodes.indexOf(refchild);
    var refZOrder = refchild.zOrder;

    if (idx >= 0) {
      var _insert = function _insert() {
        for (var i = 0; i < _this5.childNodes.length; i++) {
          var child = _this5.childNodes[i],
              zOrder = child.zOrder;

          if (zOrder >= refZOrder) {
            delete child.zOrder;
            Object.defineProperty(child, 'zOrder', {
              value: zOrder + 1,
              writable: false,
              configurable: true
            });
          }
        }

        _this5.childNodes.splice(idx, 0, newchild);

        newchild.connect(_this5, refZOrder);
        _this5.sortedChildNodes = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["sortOrderedSprites"])(_this5.childNodes);
        newchild.forceUpdate();
        _this5[_zOrder] = _this5[_zOrder] || 0;
        _this5[_zOrder]++;

        if (_this5.layer) {
          return newchild.enter();
        }
      };

      var _remove = this.removeChild(newchild);

      if (_remove && _remove.promise) {
        if (_remove.resolve) _remove.resolve();

        _remove.promise.then(function () {
          return _insert();
        });

        return _remove;
      }

      return _insert();
    }

    return null;
  },
  replaceChild: function () {
    var _replaceChild = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(newChild, oldChild) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.insertBefore(newChild, oldChild);

            case 2:
              this.removeChild(oldChild);

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function replaceChild(_x, _x2) {
      return _replaceChild.apply(this, arguments);
    }

    return replaceChild;
  }()
});

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(163);


/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() {
  return this || (typeof self === "object" && self);
})() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(164);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),
/* 164 */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() {
    return this || (typeof self === "object" && self);
  })() || Function("return this")()
);


/***/ }),
/* 165 */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),
/* 166 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Path; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(134);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(138);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(132);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(133);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(136);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(139);
/* harmony import */ var _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(120);
/* harmony import */ var _basesprite__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(129);
/* harmony import */ var _helpers_render__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(128);
/* harmony import */ var _helpers_path__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(158);










var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _class3, _temp;





var PathSpriteAttr = (_dec = Object(_utils__WEBPACK_IMPORTED_MODULE_9__["inherit"])(1), _dec2 = Object(_utils__WEBPACK_IMPORTED_MODULE_9__["parseValue"])(_utils__WEBPACK_IMPORTED_MODULE_9__["parseStringFloat"]), _dec3 = Object(_utils__WEBPACK_IMPORTED_MODULE_9__["parseValue"])(parseFloat), _dec4 = Object(_utils__WEBPACK_IMPORTED_MODULE_9__["inherit"])('butt'), _dec5 = Object(_utils__WEBPACK_IMPORTED_MODULE_9__["inherit"])('miter'), _dec6 = Object(_utils__WEBPACK_IMPORTED_MODULE_9__["inherit"])(''), _dec7 = Object(_utils__WEBPACK_IMPORTED_MODULE_9__["inherit"])(''), _dec8 = Object(_utils__WEBPACK_IMPORTED_MODULE_9__["inherit"])('box'), (_class =
/*#__PURE__*/
function (_BaseSprite$Attr) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default()(PathSpriteAttr, _BaseSprite$Attr);

  function PathSpriteAttr(subject) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, PathSpriteAttr);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(PathSpriteAttr).call(this, subject));

    _this.setDefault({
      lineWidth: 'inherit',
      lineDash: null,
      lineDashOffset: 0,
      lineCap: 'inherit',
      lineJoin: 'inherit',
      strokeColor: 'inherit',
      fillColor: 'inherit',
      bounding: 'inherit'
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(PathSpriteAttr, [{
    key: "path",
    set: function set(val) {
      this.clearFlow();

      if (val) {
        val = typeof val === 'string' ? {
          d: val
        } : val;
        this.subject.svg = Object(_helpers_path__WEBPACK_IMPORTED_MODULE_12__["createSvgPath"])(val);
        this.set('path', val);
      } else {
        this.subject.svg = null;
        this.set('path', null);
      }
    }
  }, {
    key: "d",
    set: function set(val) {
      if (val) {
        var path = this.get('path');

        if (!path) {
          this.path = {
            d: val
          };
        } else {
          this.path = Object.assign(path, {
            d: val
          });
        }
      } else {
        this.path = null;
      }
    },
    get: function get() {
      return this.path ? this.path.d : null;
    }
  }, {
    key: "lineWidth",
    set: function set(val) {
      if (typeof val === 'string') val = parseFloat(val);
      this.clearFlow();
      this.set('lineWidth', Math.round(val));
    }
  }, {
    key: "lineDash",
    set: function set(val) {
      if (typeof val === 'number') val = [val];
      this.set('lineDash', val);
    }
  }, {
    key: "lineDashOffset",
    set: function set(val) {
      this.set('lineDashOffset', val);
    }
    /**
      lineCap: butt|round|square
     */

  }, {
    key: "lineCap",
    set: function set(val) {
      this.set('lineCap', val);
    }
    /**
      lineJoin: miter|round|bevel
     */

  }, {
    key: "lineJoin",
    set: function set(val) {
      this.set('lineJoin', val);
    }
  }, {
    key: "strokeColor",
    set: function set(val) {
      this.set('strokeColor', Object(_utils__WEBPACK_IMPORTED_MODULE_9__["parseColorString"])(val));
    }
  }, {
    key: "fillColor",
    set: function set(val) {
      this.set('fillColor', Object(_utils__WEBPACK_IMPORTED_MODULE_9__["parseColorString"])(val));
    }
  }, {
    key: "flexible",
    set: function set(val) {
      this.clearFlow();
      this.set('flexible', val);
    }
  }, {
    key: "bounding",
    set: function set(val) {
      // box | path
      this.quietSet('bounding', val);
    }
  }, {
    key: "color",
    set: function set(val) {
      this.strokeColor = val;
    },
    get: function get() {
      return this.strokeColor;
    }
  }]);

  return PathSpriteAttr;
}(_basesprite__WEBPACK_IMPORTED_MODULE_10__["default"].Attr), (_babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_8___default()(_class.prototype, "path", [_utils__WEBPACK_IMPORTED_MODULE_9__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, "path"), _class.prototype), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_8___default()(_class.prototype, "d", [_utils__WEBPACK_IMPORTED_MODULE_9__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, "d"), _class.prototype), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_8___default()(_class.prototype, "lineWidth", [_utils__WEBPACK_IMPORTED_MODULE_9__["attr"], _dec], Object.getOwnPropertyDescriptor(_class.prototype, "lineWidth"), _class.prototype), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_8___default()(_class.prototype, "lineDash", [_dec2, _utils__WEBPACK_IMPORTED_MODULE_9__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, "lineDash"), _class.prototype), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_8___default()(_class.prototype, "lineDashOffset", [_dec3, _utils__WEBPACK_IMPORTED_MODULE_9__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, "lineDashOffset"), _class.prototype), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_8___default()(_class.prototype, "lineCap", [_utils__WEBPACK_IMPORTED_MODULE_9__["attr"], _dec4], Object.getOwnPropertyDescriptor(_class.prototype, "lineCap"), _class.prototype), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_8___default()(_class.prototype, "lineJoin", [_utils__WEBPACK_IMPORTED_MODULE_9__["attr"], _dec5], Object.getOwnPropertyDescriptor(_class.prototype, "lineJoin"), _class.prototype), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_8___default()(_class.prototype, "strokeColor", [_utils__WEBPACK_IMPORTED_MODULE_9__["attr"], _dec6], Object.getOwnPropertyDescriptor(_class.prototype, "strokeColor"), _class.prototype), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_8___default()(_class.prototype, "fillColor", [_utils__WEBPACK_IMPORTED_MODULE_9__["attr"], _dec7], Object.getOwnPropertyDescriptor(_class.prototype, "fillColor"), _class.prototype), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_8___default()(_class.prototype, "flexible", [_utils__WEBPACK_IMPORTED_MODULE_9__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, "flexible"), _class.prototype), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_8___default()(_class.prototype, "bounding", [_utils__WEBPACK_IMPORTED_MODULE_9__["attr"], _dec8], Object.getOwnPropertyDescriptor(_class.prototype, "bounding"), _class.prototype), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_8___default()(_class.prototype, "color", [_utils__WEBPACK_IMPORTED_MODULE_9__["attr"]], Object.getOwnPropertyDescriptor(_class.prototype, "color"), _class.prototype)), _class));
var Path = (_class2 = (_temp = _class3 =
/*#__PURE__*/
function (_BaseSprite) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default()(Path, _BaseSprite);

  function Path(attr) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, Path);

    if (typeof attr === 'string') {
      attr = {
        d: attr
      };
    }

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Path).call(this, attr));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(Path, [{
    key: "getPointAtLength",
    value: function getPointAtLength(length) {
      if (this.svg) {
        return this.svg.getPointAtLength(length);
      }

      return [0, 0];
    }
  }, {
    key: "getPathLength",
    value: function getPathLength() {
      if (this.svg) {
        return this.svg.getTotalLength();
      }

      return 0;
    }
  }, {
    key: "findPath",
    value: function findPath(offsetX, offsetY) {
      var rect = this.originalRect;
      var pathOffset = this.pathOffset;

      if (this.svg && this.svg.isPointInPath(offsetX - rect[0] - pathOffset[0], offsetY - rect[1] - pathOffset[1])) {
        return [this.svg];
      }

      return [];
    }
  }, {
    key: "pointCollision",
    value: function pointCollision(evt) {
      if (_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_1___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Path.prototype), "pointCollision", this).call(this, evt)) {
        var offsetX = evt.offsetX,
            offsetY = evt.offsetY;
        if (offsetX == null && offsetY == null) return true;
        var svg = this.svg;

        if (svg) {
          var bounds = svg.bounds;
          offsetX += Math.min(0, bounds[0]);
          offsetY += Math.min(0, bounds[1]);
        }

        evt.targetPaths = this.findPath(offsetX, offsetY);

        if (this.attr('bounding') === 'path') {
          return evt.targetPaths.length > 0;
        }

        return true;
      }

      return false;
    }
  }, {
    key: "render",
    value: function render(t, drawingContext) {
      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_1___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Path.prototype), "render", this).call(this, t, drawingContext);

      var d = this.attr('d'),
          lineWidth = this.attr('lineWidth'),
          lineCap = this.attr('lineCap'),
          lineJoin = this.attr('lineJoin'),
          lineDash = this.attr('lineDash'),
          flexible = this.attr('flexible');

      if (d) {
        var svg = this.svg;

        var _svg$bounds = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(svg.bounds, 4),
            ox = _svg$bounds[0],
            oy = _svg$bounds[1],
            ow = _svg$bounds[2],
            oh = _svg$bounds[3];

        var _this$pathOffset = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(this.pathOffset, 2),
            px = _this$pathOffset[0],
            py = _this$pathOffset[1];

        var _this$contentSize = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(this.contentSize, 2),
            w = _this$contentSize[0],
            h = _this$contentSize[1];

        if ((w < ow || h < oh) && this.attr('clipOverflow')) {
          drawingContext.beginPath();
          drawingContext.rect(0, 0, w, h);
          drawingContext.clip();
        }

        if (flexible) {
          svg.save();
          var sw = w / (ow - Math.min(0, ox) + 2 * px);
          svg.scale(sw, sw);
          ox *= sw;
          oy *= sw;
          px *= sw;
          py *= sw;
        }

        if (ox < 0 || oy < 0) {
          drawingContext.translate(-Math.min(0, ox), -Math.min(0, oy));
        }

        drawingContext.translate(px, py);
        svg.beginPath().to(drawingContext);

        if (flexible) {
          svg.restore();
        }

        drawingContext.lineWidth = lineWidth;
        drawingContext.lineCap = lineCap;
        drawingContext.lineJoin = lineJoin;

        if (lineDash != null) {
          drawingContext.setLineDash(lineDash);
          var lineDashOffset = this.attr('lineDashOffset');
          drawingContext.lineDashOffset = lineDashOffset;
        }

        var fillColor = Object(_helpers_render__WEBPACK_IMPORTED_MODULE_11__["findColor"])(drawingContext, this, 'fillColor');

        if (fillColor) {
          drawingContext.fillStyle = fillColor;
        }

        var strokeColor = Object(_helpers_render__WEBPACK_IMPORTED_MODULE_11__["findColor"])(drawingContext, this, 'strokeColor');

        if (!strokeColor && !fillColor) {
          strokeColor = Object(_utils__WEBPACK_IMPORTED_MODULE_9__["parseColorString"])('black');
        }

        if (strokeColor) {
          drawingContext.strokeStyle = strokeColor;
        }

        if (fillColor) {
          drawingContext.fill();
        }

        if (strokeColor) {
          drawingContext.stroke();
        }
      }
    }
  }, {
    key: "path",
    set: function set(val) {
      this.attr('path', val);
    },
    get: function get() {
      return this.attr('path');
    }
  }, {
    key: "lineWidth",
    get: function get() {
      var lineWidth = this.attr('lineWidth'),
          gradients = this.attr('gradients'),
          fillColor = this.attr('fillColor'),
          strokeColor = this.attr('strokeColor');
      var hasStrokeColor = strokeColor || gradients && gradients.strokeColor,
          hasFillColor = fillColor || gradients && gradients.fillColor;

      if (!hasStrokeColor && hasFillColor) {
        // fill: ignore stroke
        return 0;
      }

      return lineWidth;
    }
  }, {
    key: "pathOffset",
    get: function get() {
      var lw = Math.round(this.lineWidth);
      return [lw, lw];
    }
  }, {
    key: "pathSize",
    get: function get() {
      return this.svg ? this.svg.size : [0, 0];
    }
  }, {
    key: "contentSize",
    get: function get() {
      if (!this.svg) return _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_1___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Path.prototype), "contentSize", this);
      var bounds = this.svg.bounds;

      var _this$attrSize = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(this.attrSize, 2),
          width = _this$attrSize[0],
          height = _this$attrSize[1];

      var pathOffset = this.pathOffset;

      if (width === '') {
        width = bounds[2] - Math.min(0, bounds[0]) + 2 * pathOffset[0];
      }

      if (height === '') {
        height = bounds[3] - Math.min(0, bounds[1]) + 2 * pathOffset[1];
      }

      if (this.attr('flexible') && this.attr('height') === '' && this.attr('layoutHeight') === '') {
        height = Math.ceil(height * width / (bounds[2] - Math.min(0, bounds[0]) + 2 * pathOffset[0]));
      }

      return [width, height].map(Math.ceil);
    }
  }, {
    key: "originalRect",
    get: function get() {
      var svg = this.svg;

      if (svg) {
        var bounds = svg.bounds,
            offset = this.pathOffset;

        var _this$offsetSize = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(this.offsetSize, 2),
            width = _this$offsetSize[0],
            height = _this$offsetSize[1],
            _this$attr = this.attr('anchor'),
            _this$attr2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_this$attr, 2),
            anchorX = _this$attr2[0],
            anchorY = _this$attr2[1];

        var rect = [0, 0, width, height],
            offsetX = Math.min(0, bounds[0]),
            offsetY = Math.min(0, bounds[1]);
        rect[0] = offsetX - offset[0] - anchorX * (width + offsetX - 2 * offset[0]);
        rect[1] = offsetY - offset[1] - anchorY * (height + offsetY - 2 * offset[1]);
        return rect;
      }

      return _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_1___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Path.prototype), "originalRect", this);
    }
  }]);

  return Path;
}(_basesprite__WEBPACK_IMPORTED_MODULE_10__["default"]), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(_class3, "Attr", PathSpriteAttr), _temp), (_babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_8___default()(_class2.prototype, "contentSize", [_utils__WEBPACK_IMPORTED_MODULE_9__["flow"]], Object.getOwnPropertyDescriptor(_class2.prototype, "contentSize"), _class2.prototype), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_8___default()(_class2.prototype, "originalRect", [_utils__WEBPACK_IMPORTED_MODULE_9__["flow"]], Object.getOwnPropertyDescriptor(_class2.prototype, "originalRect"), _class2.prototype)), _class2);

Path.setAttributeEffects({
  d: _helpers_path__WEBPACK_IMPORTED_MODULE_12__["pathEffect"],
  path: function path(path1, path2, p, start, end) {
    path1 = Object(_helpers_path__WEBPACK_IMPORTED_MODULE_12__["createSvgPath"])(path1);
    path2 = Object(_helpers_path__WEBPACK_IMPORTED_MODULE_12__["createSvgPath"])(path2);
    return Object(_helpers_path__WEBPACK_IMPORTED_MODULE_12__["pathEffect"])(path1.d, path2.d, p, start, end);
  }
});

/***/ }),
/* 167 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return use; });
var installed = new WeakMap();

var _merged = Symbol('merged');

var target = null;
function use(plugin) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var merge = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  if (!target) {
    target = Object.assign({}, this);
    target.__spritejs = this; // target.use = use.bind(target);

    target.use = function (plugin) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var merge = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      return use.call(target, plugin, options, merge);
    };
  }

  if (typeof options === 'boolean') {
    merge = options;
    options = null;
  }

  if (installed.has(plugin)) {
    var _ret = installed.get(plugin);

    if (merge && !_ret[_merged]) {
      Object.assign(target, _ret);
      _ret[_merged] = true;
    }

    return _ret;
  }

  var install = plugin.install || plugin;
  var ret = install.call(plugin, target, options) || {};
  installed.set(plugin, ret);

  if (merge) {
    Object.assign(target.__spritejs, ret);
    ret[_merged] = true;
  }

  return ret;
}

/***/ })
/******/ ]);
});