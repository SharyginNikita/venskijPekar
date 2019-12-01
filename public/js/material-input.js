/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
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

/***/ "./node_modules/imask/dist/imask.esm.js":
/*!**********************************************!*\
  !*** ./node_modules/imask/dist/imask.esm.js ***!
  \**********************************************/
/*! exports provided: default, HTMLMaskElement, InputMask, MaskElement, Masked, MaskedDate, MaskedDynamic, MaskedEnum, MaskedFunction, MaskedNumber, MaskedPattern, MaskedRange, MaskedRegExp, createMask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLMaskElement", function() { return HTMLMaskElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputMask", function() { return InputMask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaskElement", function() { return MaskElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Masked", function() { return Masked; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaskedDate", function() { return MaskedDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaskedDynamic", function() { return MaskedDynamic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaskedEnum", function() { return MaskedEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaskedFunction", function() { return MaskedFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaskedNumber", function() { return MaskedNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaskedPattern", function() { return MaskedPattern; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaskedRange", function() { return MaskedRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaskedRegExp", function() { return MaskedRegExp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMask", function() { return createMask; });
function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

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
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = _getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get;
  } else {
    _get = function _get(target, property, receiver) {
      var base = _superPropBase(target, property);

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

function set(target, property, value, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.set) {
    set = Reflect.set;
  } else {
    set = function set(target, property, value, receiver) {
      var base = _superPropBase(target, property);

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
        _defineProperty(receiver, property, value);
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

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

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

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}
/** Checks if value is string */


function isString(str) {
  return typeof str === 'string' || str instanceof String;
}
/**
  Direction
  @prop {string} NONE
  @prop {string} LEFT
  @prop {string} FORCE_LEFT
  @prop {string} RIGHT
  @prop {string} FORCE_RIGHT
*/


var DIRECTION = {
  NONE: 'NONE',
  LEFT: 'LEFT',
  FORCE_LEFT: 'FORCE_LEFT',
  RIGHT: 'RIGHT',
  FORCE_RIGHT: 'FORCE_RIGHT'
  /**
    Direction
    @enum {string}
  */

};
/** */

function forceDirection(direction) {
  switch (direction) {
    case DIRECTION.LEFT:
      return DIRECTION.FORCE_LEFT;

    case DIRECTION.RIGHT:
      return DIRECTION.FORCE_RIGHT;

    default:
      return direction;
  }
}
/** Escapes regular expression control chars */


function escapeRegExp(str) {
  return str.replace(/([.*+?^=!:${}()|[\]/\\])/g, '\\$1');
} // cloned from https://github.com/epoberezkin/fast-deep-equal with small changes


function objectIncludes(b, a) {
  if (a === b) return true;
  var arrA = Array.isArray(a),
      arrB = Array.isArray(b),
      i;

  if (arrA && arrB) {
    if (a.length != b.length) return false;

    for (i = 0; i < a.length; i++) {
      if (!objectIncludes(a[i], b[i])) return false;
    }

    return true;
  }

  if (arrA != arrB) return false;

  if (a && b && _typeof(a) === 'object' && _typeof(b) === 'object') {
    var dateA = a instanceof Date,
        dateB = b instanceof Date;
    if (dateA && dateB) return a.getTime() == b.getTime();
    if (dateA != dateB) return false;
    var regexpA = a instanceof RegExp,
        regexpB = b instanceof RegExp;
    if (regexpA && regexpB) return a.toString() == b.toString();
    if (regexpA != regexpB) return false;
    var keys = Object.keys(a); // if (keys.length !== Object.keys(b).length) return false;

    for (i = 0; i < keys.length; i++) {
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
    }

    for (i = 0; i < keys.length; i++) {
      if (!objectIncludes(b[keys[i]], a[keys[i]])) return false;
    }

    return true;
  } else if (a && b && typeof a === 'function' && typeof b === 'function') {
    return a.toString() === b.toString();
  }

  return false;
}
/* eslint-disable no-undef */


var g = typeof window !== 'undefined' && window || typeof global !== 'undefined' && global.global === global && global || typeof self !== 'undefined' && self.self === self && self || {};
/* eslint-enable no-undef */

/** Selection range */

/** Provides details of changing input */

var ActionDetails =
/*#__PURE__*/
function () {
  /** Current input value */

  /** Current cursor position */

  /** Old input value */

  /** Old selection */
  function ActionDetails(value, cursorPos, oldValue, oldSelection) {
    _classCallCheck(this, ActionDetails);

    this.value = value;
    this.cursorPos = cursorPos;
    this.oldValue = oldValue;
    this.oldSelection = oldSelection; // double check if left part was changed (autofilling, other non-standard input triggers)

    while (this.value.slice(0, this.startChangePos) !== this.oldValue.slice(0, this.startChangePos)) {
      --this.oldSelection.start;
    }
  }
  /**
    Start changing position
    @readonly
  */


  _createClass(ActionDetails, [{
    key: "startChangePos",
    get: function get() {
      return Math.min(this.cursorPos, this.oldSelection.start);
    }
    /**
      Inserted symbols count
      @readonly
    */

  }, {
    key: "insertedCount",
    get: function get() {
      return this.cursorPos - this.startChangePos;
    }
    /**
      Inserted symbols
      @readonly
    */

  }, {
    key: "inserted",
    get: function get() {
      return this.value.substr(this.startChangePos, this.insertedCount);
    }
    /**
      Removed symbols count
      @readonly
    */

  }, {
    key: "removedCount",
    get: function get() {
      // Math.max for opposite operation
      return Math.max(this.oldSelection.end - this.startChangePos || // for Delete
      this.oldValue.length - this.value.length, 0);
    }
    /**
      Removed symbols
      @readonly
    */

  }, {
    key: "removed",
    get: function get() {
      return this.oldValue.substr(this.startChangePos, this.removedCount);
    }
    /**
      Unchanged head symbols
      @readonly
    */

  }, {
    key: "head",
    get: function get() {
      return this.value.substring(0, this.startChangePos);
    }
    /**
      Unchanged tail symbols
      @readonly
    */

  }, {
    key: "tail",
    get: function get() {
      return this.value.substring(this.startChangePos + this.insertedCount);
    }
    /**
      Remove direction
      @readonly
    */

  }, {
    key: "removeDirection",
    get: function get() {
      if (!this.removedCount || this.insertedCount) return DIRECTION.NONE; // align right if delete at right or if range removed (event with backspace)

      return this.oldSelection.end === this.cursorPos || this.oldSelection.start === this.cursorPos ? DIRECTION.RIGHT : DIRECTION.LEFT;
    }
  }]);

  return ActionDetails;
}();
/**
  Provides details of changing model value
  @param {Object} [details]
  @param {string} [details.inserted] - Inserted symbols
  @param {boolean} [details.skip] - Can skip chars
  @param {number} [details.removeCount] - Removed symbols count
  @param {number} [details.tailShift] - Additional offset if any changes occurred before tail
*/


var ChangeDetails =
/*#__PURE__*/
function () {
  /** Inserted symbols */

  /** Can skip chars */

  /** Additional offset if any changes occurred before tail */

  /** Raw inserted is used by dynamic mask */
  function ChangeDetails(details) {
    _classCallCheck(this, ChangeDetails);

    Object.assign(this, {
      inserted: '',
      rawInserted: '',
      skip: false,
      tailShift: 0
    }, details);
  }
  /**
    Aggregate changes
    @returns {ChangeDetails} `this`
  */


  _createClass(ChangeDetails, [{
    key: "aggregate",
    value: function aggregate(details) {
      this.rawInserted += details.rawInserted;
      this.skip = this.skip || details.skip;
      this.inserted += details.inserted;
      this.tailShift += details.tailShift;
      return this;
    }
    /** Total offset considering all changes */

  }, {
    key: "offset",
    get: function get() {
      return this.tailShift + this.inserted.length;
    }
  }]);

  return ChangeDetails;
}();
/** Provides details of continuous extracted tail */


var ContinuousTailDetails =
/*#__PURE__*/
function () {
  /** Tail value as string */

  /** Tail start position */

  /** Start position */
  function ContinuousTailDetails() {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var stop = arguments.length > 2 ? arguments[2] : undefined;

    _classCallCheck(this, ContinuousTailDetails);

    this.value = value;
    this.from = from;
    this.stop = stop;
  }

  _createClass(ContinuousTailDetails, [{
    key: "toString",
    value: function toString() {
      return this.value;
    }
  }, {
    key: "extend",
    value: function extend(tail) {
      this.value += String(tail);
    }
  }, {
    key: "appendTo",
    value: function appendTo(masked) {
      return masked.append(this.toString(), {
        tail: true
      }).aggregate(masked._appendPlaceholder());
    }
  }, {
    key: "shiftBefore",
    value: function shiftBefore(pos) {
      if (this.from >= pos || !this.value.length) return '';
      var shiftChar = this.value[0];
      this.value = this.value.slice(1);
      return shiftChar;
    }
  }, {
    key: "state",
    get: function get() {
      return {
        value: this.value,
        from: this.from,
        stop: this.stop
      };
    },
    set: function set(state) {
      Object.assign(this, state);
    }
  }]);

  return ContinuousTailDetails;
}();
/** Provides common masking stuff */


var Masked =
/*#__PURE__*/
function () {
  // $Shape<MaskedOptions>; TODO after fix https://github.com/facebook/flow/issues/4773

  /** @type {Mask} */

  /** */
  // $FlowFixMe no ideas

  /** Transforms value before mask processing */

  /** Validates if value is acceptable */

  /** Does additional processing in the end of editing */

  /** Enable characters overwriting */

  /** */
  function Masked(opts) {
    _classCallCheck(this, Masked);

    this._value = '';

    this._update(opts);

    this.isInitialized = true;
  }
  /** Sets and applies new options */


  _createClass(Masked, [{
    key: "updateOptions",
    value: function updateOptions(opts) {
      if (!Object.keys(opts).length) return;
      this.withValueRefresh(this._update.bind(this, opts));
    }
    /**
      Sets new options
      @protected
    */

  }, {
    key: "_update",
    value: function _update(opts) {
      Object.assign(this, opts);
    }
    /** Mask state */

  }, {
    key: "reset",

    /** Resets value */
    value: function reset() {
      this._value = '';
    }
    /** */

  }, {
    key: "resolve",

    /** Resolve new value */
    value: function resolve(value) {
      this.reset();
      this.append(value, {
        input: true
      }, '');
      this.doCommit();
      return this.value;
    }
    /** */

  }, {
    key: "nearestInputPos",

    /** Finds nearest input position in direction */
    value: function nearestInputPos(cursorPos, direction) {
      return cursorPos;
    }
    /** Extracts value in range considering flags */

  }, {
    key: "extractInput",
    value: function extractInput() {
      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
      return this.value.slice(fromPos, toPos);
    }
    /** Extracts tail in range */

  }, {
    key: "extractTail",
    value: function extractTail() {
      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
      return new ContinuousTailDetails(this.extractInput(fromPos, toPos), fromPos);
    }
    /** Appends tail */
    // $FlowFixMe no ideas

  }, {
    key: "appendTail",
    value: function appendTail(tail) {
      if (isString(tail)) tail = new ContinuousTailDetails(String(tail));
      return tail.appendTo(this);
    }
    /** Appends char */

  }, {
    key: "_appendCharRaw",
    value: function _appendCharRaw(ch) {
      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      ch = this.doPrepare(ch, flags);
      if (!ch) return new ChangeDetails();
      this._value += ch;
      return new ChangeDetails({
        inserted: ch,
        rawInserted: ch
      });
    }
    /** Appends char */

  }, {
    key: "_appendChar",
    value: function _appendChar(ch) {
      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var checkTail = arguments.length > 2 ? arguments[2] : undefined;
      var consistentState = this.state;

      var details = this._appendCharRaw(ch, flags);

      if (details.inserted) {
        var consistentTail;
        var appended = this.doValidate(flags) !== false;

        if (appended && checkTail != null) {
          // validation ok, check tail
          var beforeTailState = this.state;

          if (this.overwrite) {
            consistentTail = checkTail.state;
            checkTail.shiftBefore(this.value.length);
          }

          var tailDetails = this.appendTail(checkTail);
          appended = tailDetails.rawInserted === checkTail.toString(); // if ok, rollback state after tail

          if (appended && tailDetails.inserted) this.state = beforeTailState;
        } // revert all if something went wrong


        if (!appended) {
          details.rawInserted = details.inserted = '';
          this.state = consistentState;
          if (checkTail && consistentTail) checkTail.state = consistentTail;
        }
      }

      return details;
    }
    /** Appends optional placeholder at end */

  }, {
    key: "_appendPlaceholder",
    value: function _appendPlaceholder() {
      return new ChangeDetails();
    }
    /** Appends symbols considering flags */
    // $FlowFixMe no ideas

  }, {
    key: "append",
    value: function append(str, flags, tail) {
      if (!isString(str)) throw new Error('value should be string');
      var details = new ChangeDetails();
      var checkTail = isString(tail) ? new ContinuousTailDetails(String(tail)) : tail;
      if (flags.tail) flags._beforeTailState = this.state;

      for (var ci = 0; ci < str.length; ++ci) {
        details.aggregate(this._appendChar(str[ci], flags, checkTail));
      } // append tail but aggregate only tailShift


      if (checkTail != null) {
        details.tailShift += this.appendTail(checkTail).tailShift; // TODO it's a good idea to clear state after appending ends
        // but it causes bugs when one append calls another (when dynamic dispatch set rawInputValue)
        // this._resetBeforeTailState();
      }

      return details;
    }
    /** */

  }, {
    key: "remove",
    value: function remove() {
      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
      this._value = this.value.slice(0, fromPos) + this.value.slice(toPos);
      return new ChangeDetails();
    }
    /** Calls function and reapplies current value */

  }, {
    key: "withValueRefresh",
    value: function withValueRefresh(fn) {
      if (this._refreshing || !this.isInitialized) return fn();
      this._refreshing = true;
      var unmasked = this.unmaskedValue;
      var value = this.value;
      var ret = fn(); // try to update with raw value first to keep fixed chars

      if (this.resolve(value) !== value) {
        // or fallback to unmasked
        this.unmaskedValue = unmasked;
      }

      delete this._refreshing;
      return ret;
    }
    /**
      Prepares string before mask processing
      @protected
    */

  }, {
    key: "doPrepare",
    value: function doPrepare(str) {
      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.prepare ? this.prepare(str, this, flags) : str;
    }
    /**
      Validates if value is acceptable
      @protected
    */

  }, {
    key: "doValidate",
    value: function doValidate(flags) {
      return (!this.validate || this.validate(this.value, this, flags)) && (!this.parent || this.parent.doValidate(flags));
    }
    /**
      Does additional processing in the end of editing
      @protected
    */

  }, {
    key: "doCommit",
    value: function doCommit() {
      if (this.commit) this.commit(this.value, this);
    }
    /** */

  }, {
    key: "splice",
    value: function splice(start, deleteCount, inserted, removeDirection) {
      var tailPos = start + deleteCount;
      var tail = this.extractTail(tailPos);
      var startChangePos = this.nearestInputPos(start, removeDirection);
      var changeDetails = new ChangeDetails({
        tailShift: startChangePos - start // adjust tailShift if start was aligned

      }).aggregate(this.remove(startChangePos)).aggregate(this.append(inserted, {
        input: true
      }, tail));
      return changeDetails;
    }
  }, {
    key: "state",
    get: function get() {
      return {
        _value: this.value
      };
    },
    set: function set(state) {
      this._value = state._value;
    }
  }, {
    key: "value",
    get: function get() {
      return this._value;
    },
    set: function set(value) {
      this.resolve(value);
    }
  }, {
    key: "unmaskedValue",
    get: function get() {
      return this.value;
    },
    set: function set(value) {
      this.reset();
      this.append(value, {}, '');
      this.doCommit();
    }
    /** */

  }, {
    key: "typedValue",
    get: function get() {
      return this.unmaskedValue;
    },
    set: function set(value) {
      this.unmaskedValue = value;
    }
    /** Value that includes raw user input */

  }, {
    key: "rawInputValue",
    get: function get() {
      return this.extractInput(0, this.value.length, {
        raw: true
      });
    },
    set: function set(value) {
      this.reset();
      this.append(value, {
        raw: true
      }, '');
      this.doCommit();
    }
    /** */

  }, {
    key: "isComplete",
    get: function get() {
      return true;
    }
  }]);

  return Masked;
}();
/** Get Masked class by mask type */


function maskedClass(mask) {
  if (mask == null) {
    throw new Error('mask property should be defined');
  }

  if (mask instanceof RegExp) return g.IMask.MaskedRegExp;
  if (isString(mask)) return g.IMask.MaskedPattern;
  if (mask instanceof Date || mask === Date) return g.IMask.MaskedDate;
  if (mask instanceof Number || typeof mask === 'number' || mask === Number) return g.IMask.MaskedNumber;
  if (Array.isArray(mask) || mask === Array) return g.IMask.MaskedDynamic; // $FlowFixMe

  if (mask.prototype instanceof g.IMask.Masked) return mask; // $FlowFixMe

  if (mask instanceof Function) return g.IMask.MaskedFunction;
  console.warn('Mask not found for mask', mask); // eslint-disable-line no-console

  return g.IMask.Masked;
}
/** Creates new {@link Masked} depending on mask type */


function createMask(opts) {
  opts = Object.assign({}, opts);
  var mask = opts.mask;
  if (mask instanceof g.IMask.Masked) return mask;
  var MaskedClass = maskedClass(mask);
  return new MaskedClass(opts);
}

var DEFAULT_INPUT_DEFINITIONS = {
  '0': /\d/,
  'a': /[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
  // http://stackoverflow.com/a/22075070
  '*': /./
};
/** */

var PatternInputDefinition =
/*#__PURE__*/
function () {
  /** */

  /** */

  /** */

  /** */

  /** */

  /** */
  function PatternInputDefinition(opts) {
    _classCallCheck(this, PatternInputDefinition);

    var mask = opts.mask,
        blockOpts = _objectWithoutProperties(opts, ["mask"]);

    this.masked = createMask({
      mask: mask
    });
    Object.assign(this, blockOpts);
  }

  _createClass(PatternInputDefinition, [{
    key: "reset",
    value: function reset() {
      this._isFilled = false;
      this.masked.reset();
    }
  }, {
    key: "remove",
    value: function remove() {
      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;

      if (fromPos === 0 && toPos >= 1) {
        this._isFilled = false;
        return this.masked.remove(fromPos, toPos);
      }

      return new ChangeDetails();
    }
  }, {
    key: "_appendChar",
    value: function _appendChar(str) {
      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      if (this._isFilled) return new ChangeDetails();
      var state = this.masked.state; // simulate input

      var details = this.masked._appendChar(str, flags);

      if (details.inserted && this.doValidate(flags) === false) {
        details.inserted = details.rawInserted = '';
        this.masked.state = state;
      }

      if (!details.inserted && !this.isOptional && !this.lazy && !flags.input) {
        details.inserted = this.placeholderChar;
      }

      details.skip = !details.inserted && !this.isOptional;
      this._isFilled = Boolean(details.inserted);
      return details;
    }
  }, {
    key: "append",
    value: function append() {
      var _this$masked;

      return (_this$masked = this.masked).append.apply(_this$masked, arguments);
    }
  }, {
    key: "_appendPlaceholder",
    value: function _appendPlaceholder() {
      var details = new ChangeDetails();
      if (this._isFilled || this.isOptional) return details;
      this._isFilled = true;
      details.inserted = this.placeholderChar;
      return details;
    }
  }, {
    key: "extractTail",
    value: function extractTail() {
      var _this$masked2;

      return (_this$masked2 = this.masked).extractTail.apply(_this$masked2, arguments);
    }
  }, {
    key: "appendTail",
    value: function appendTail() {
      var _this$masked3;

      return (_this$masked3 = this.masked).appendTail.apply(_this$masked3, arguments);
    }
  }, {
    key: "extractInput",
    value: function extractInput() {
      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
      var flags = arguments.length > 2 ? arguments[2] : undefined;
      return this.masked.extractInput(fromPos, toPos, flags);
    }
  }, {
    key: "nearestInputPos",
    value: function nearestInputPos(cursorPos) {
      var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DIRECTION.NONE;
      var minPos = 0;
      var maxPos = this.value.length;
      var boundPos = Math.min(Math.max(cursorPos, minPos), maxPos);

      switch (direction) {
        case DIRECTION.LEFT:
        case DIRECTION.FORCE_LEFT:
          return this.isComplete ? boundPos : minPos;

        case DIRECTION.RIGHT:
        case DIRECTION.FORCE_RIGHT:
          return this.isComplete ? boundPos : maxPos;

        case DIRECTION.NONE:
        default:
          return boundPos;
      }
    }
  }, {
    key: "doValidate",
    value: function doValidate() {
      var _this$masked4, _this$parent;

      return (_this$masked4 = this.masked).doValidate.apply(_this$masked4, arguments) && (!this.parent || (_this$parent = this.parent).doValidate.apply(_this$parent, arguments));
    }
  }, {
    key: "doCommit",
    value: function doCommit() {
      this.masked.doCommit();
    }
  }, {
    key: "value",
    get: function get() {
      return this.masked.value || (this._isFilled && !this.isOptional ? this.placeholderChar : '');
    }
  }, {
    key: "unmaskedValue",
    get: function get() {
      return this.masked.unmaskedValue;
    }
  }, {
    key: "isComplete",
    get: function get() {
      return Boolean(this.masked.value) || this.isOptional;
    }
  }, {
    key: "state",
    get: function get() {
      return {
        masked: this.masked.state,
        _isFilled: this._isFilled
      };
    },
    set: function set(state) {
      this.masked.state = state.masked;
      this._isFilled = state._isFilled;
    }
  }]);

  return PatternInputDefinition;
}();

var PatternFixedDefinition =
/*#__PURE__*/
function () {
  /** */

  /** */

  /** */

  /** */
  function PatternFixedDefinition(opts) {
    _classCallCheck(this, PatternFixedDefinition);

    Object.assign(this, opts);
    this._value = '';
  }

  _createClass(PatternFixedDefinition, [{
    key: "reset",
    value: function reset() {
      this._isRawInput = false;
      this._value = '';
    }
  }, {
    key: "remove",
    value: function remove() {
      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._value.length;
      this._value = this._value.slice(0, fromPos) + this._value.slice(toPos);
      if (!this._value) this._isRawInput = false;
      return new ChangeDetails();
    }
  }, {
    key: "nearestInputPos",
    value: function nearestInputPos(cursorPos) {
      var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DIRECTION.NONE;
      var minPos = 0;
      var maxPos = this._value.length;

      switch (direction) {
        case DIRECTION.LEFT:
        case DIRECTION.FORCE_LEFT:
          return minPos;

        case DIRECTION.NONE:
        case DIRECTION.RIGHT:
        case DIRECTION.FORCE_RIGHT:
        default:
          return maxPos;
      }
    }
  }, {
    key: "extractInput",
    value: function extractInput() {
      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._value.length;
      var flags = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return flags.raw && this._isRawInput && this._value.slice(fromPos, toPos) || '';
    }
  }, {
    key: "_appendChar",
    value: function _appendChar(str) {
      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var details = new ChangeDetails();
      if (this._value) return details;
      var appended = this.char === str[0];
      var isResolved = appended && (this.isUnmasking || flags.input || flags.raw) && !flags.tail;
      if (isResolved) details.rawInserted = this.char;
      this._value = details.inserted = this.char;
      this._isRawInput = isResolved && (flags.raw || flags.input);
      return details;
    }
  }, {
    key: "_appendPlaceholder",
    value: function _appendPlaceholder() {
      var details = new ChangeDetails();
      if (this._value) return details;
      this._value = details.inserted = this.char;
      return details;
    }
  }, {
    key: "extractTail",
    value: function extractTail() {
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
      return new ContinuousTailDetails('');
    } // $FlowFixMe no ideas

  }, {
    key: "appendTail",
    value: function appendTail(tail) {
      if (isString(tail)) tail = new ContinuousTailDetails(String(tail));
      return tail.appendTo(this);
    }
  }, {
    key: "append",
    value: function append(str, flags, tail) {
      var details = this._appendChar(str, flags);

      if (tail != null) {
        details.tailShift += this.appendTail(tail).tailShift;
      }

      return details;
    }
  }, {
    key: "doCommit",
    value: function doCommit() {}
  }, {
    key: "value",
    get: function get() {
      return this._value;
    }
  }, {
    key: "unmaskedValue",
    get: function get() {
      return this.isUnmasking ? this.value : '';
    }
  }, {
    key: "isComplete",
    get: function get() {
      return true;
    }
  }, {
    key: "state",
    get: function get() {
      return {
        _value: this._value,
        _isRawInput: this._isRawInput
      };
    },
    set: function set(state) {
      Object.assign(this, state);
    }
  }]);

  return PatternFixedDefinition;
}();

var ChunksTailDetails =
/*#__PURE__*/
function () {
  /** */
  function ChunksTailDetails() {
    var chunks = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    _classCallCheck(this, ChunksTailDetails);

    this.chunks = chunks;
    this.from = from;
  }

  _createClass(ChunksTailDetails, [{
    key: "toString",
    value: function toString() {
      return this.chunks.map(String).join('');
    } // $FlowFixMe no ideas

  }, {
    key: "extend",
    value: function extend(tailChunk) {
      if (!String(tailChunk)) return;
      if (isString(tailChunk)) tailChunk = new ContinuousTailDetails(String(tailChunk));
      var lastChunk = this.chunks[this.chunks.length - 1];
      var extendLast = lastChunk && ( // if stops are same or tail has no stop
      lastChunk.stop === tailChunk.stop || tailChunk.stop == null) && // if tail chunk goes just after last chunk
      tailChunk.from === lastChunk.from + lastChunk.toString().length;

      if (tailChunk instanceof ContinuousTailDetails) {
        // check the ability to extend previous chunk
        if (extendLast) {
          // extend previous chunk
          lastChunk.extend(tailChunk.toString());
        } else {
          // append new chunk
          this.chunks.push(tailChunk);
        }
      } else if (tailChunk instanceof ChunksTailDetails) {
        if (tailChunk.stop == null) {
          // unwrap floating chunks to parent, keeping `from` pos
          var firstTailChunk;

          while (tailChunk.chunks.length && tailChunk.chunks[0].stop == null) {
            firstTailChunk = tailChunk.chunks.shift();
            firstTailChunk.from += tailChunk.from;
            this.extend(firstTailChunk);
          }
        } // if tail chunk still has value


        if (tailChunk.toString()) {
          // if chunks contains stops, then popup stop to container
          tailChunk.stop = tailChunk.blockIndex;
          this.chunks.push(tailChunk);
        }
      }
    }
  }, {
    key: "appendTo",
    value: function appendTo(masked) {
      if (!(masked instanceof g.IMask.MaskedPattern)) {
        var tail = new ContinuousTailDetails(this.toString());
        return tail.appendTo(masked);
      }

      var details = new ChangeDetails();

      for (var ci = 0; ci < this.chunks.length && !details.skip; ++ci) {
        var chunk = this.chunks[ci];

        var lastBlockIter = masked._mapPosToBlock(masked.value.length);

        var stop = chunk.stop;
        var chunkBlock = void 0;

        if (stop && ( // if block not found or stop is behind lastBlock
        !lastBlockIter || lastBlockIter.index <= stop)) {
          if (chunk instanceof ChunksTailDetails || // for continuous block also check if stop is exist
          masked._stops.indexOf(stop) >= 0) {
            details.aggregate(masked._appendPlaceholder(stop));
          }

          chunkBlock = chunk instanceof ChunksTailDetails && masked._blocks[stop];
        }

        if (chunkBlock) {
          var tailDetails = chunkBlock.appendTail(chunk);
          tailDetails.skip = false; // always ignore skip, it will be set on last

          details.aggregate(tailDetails);
          masked._value += tailDetails.inserted; // get not inserted chars

          var remainChars = chunk.toString().slice(tailDetails.rawInserted.length);
          if (remainChars) details.aggregate(masked.append(remainChars, {
            tail: true
          }));
        } else {
          details.aggregate(masked.append(chunk.toString(), {
            tail: true
          }));
        }
      }

      return details;
    }
  }, {
    key: "shiftBefore",
    value: function shiftBefore(pos) {
      if (this.from >= pos || !this.chunks.length) return '';
      var chunkShiftPos = pos - this.from;
      var ci = 0;

      while (ci < this.chunks.length) {
        var chunk = this.chunks[ci];
        var shiftChar = chunk.shiftBefore(chunkShiftPos);

        if (chunk.toString()) {
          // chunk still contains value
          // but not shifted - means no more available chars to shift
          if (!shiftChar) break;
          ++ci;
        } else {
          // clean if chunk has no value
          this.chunks.splice(ci, 1);
        }

        if (shiftChar) return shiftChar;
      }

      return '';
    }
  }, {
    key: "state",
    get: function get() {
      return {
        chunks: this.chunks.map(function (c) {
          return c.state;
        }),
        from: this.from,
        stop: this.stop,
        blockIndex: this.blockIndex
      };
    },
    set: function set(state) {
      var chunks = state.chunks,
          props = _objectWithoutProperties(state, ["chunks"]);

      Object.assign(this, props);
      this.chunks = chunks.map(function (cstate) {
        var chunk = "chunks" in cstate ? new ChunksTailDetails() : new ContinuousTailDetails(); // $FlowFixMe already checked above

        chunk.state = cstate;
        return chunk;
      });
    }
  }]);

  return ChunksTailDetails;
}();
/**
  Pattern mask
  @param {Object} opts
  @param {Object} opts.blocks
  @param {Object} opts.definitions
  @param {string} opts.placeholderChar
  @param {boolean} opts.lazy
*/


var MaskedPattern =
/*#__PURE__*/
function (_Masked) {
  _inherits(MaskedPattern, _Masked);
  /** */

  /** */

  /** Single char for empty input */

  /** Show placeholder only when needed */


  function MaskedPattern() {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, MaskedPattern); // TODO type $Shape<MaskedPatternOptions>={} does not work


    opts.definitions = Object.assign({}, DEFAULT_INPUT_DEFINITIONS, opts.definitions);
    return _possibleConstructorReturn(this, _getPrototypeOf(MaskedPattern).call(this, Object.assign({}, MaskedPattern.DEFAULTS, {}, opts)));
  }
  /**
    @override
    @param {Object} opts
  */


  _createClass(MaskedPattern, [{
    key: "_update",
    value: function _update() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      opts.definitions = Object.assign({}, this.definitions, opts.definitions);

      _get(_getPrototypeOf(MaskedPattern.prototype), "_update", this).call(this, opts);

      this._rebuildMask();
    }
    /** */

  }, {
    key: "_rebuildMask",
    value: function _rebuildMask() {
      var _this = this;

      var defs = this.definitions;
      this._blocks = [];
      this._stops = [];
      this._maskedBlocks = {};
      var pattern = this.mask;
      if (!pattern || !defs) return;
      var unmaskingBlock = false;
      var optionalBlock = false;

      for (var i = 0; i < pattern.length; ++i) {
        if (this.blocks) {
          var _ret = function () {
            var p = pattern.slice(i);
            var bNames = Object.keys(_this.blocks).filter(function (bName) {
              return p.indexOf(bName) === 0;
            }); // order by key length

            bNames.sort(function (a, b) {
              return b.length - a.length;
            }); // use block name with max length

            var bName = bNames[0];

            if (bName) {
              var maskedBlock = createMask(Object.assign({
                parent: _this,
                lazy: _this.lazy,
                placeholderChar: _this.placeholderChar,
                overwrite: _this.overwrite
              }, _this.blocks[bName]));

              if (maskedBlock) {
                _this._blocks.push(maskedBlock); // store block index


                if (!_this._maskedBlocks[bName]) _this._maskedBlocks[bName] = [];

                _this._maskedBlocks[bName].push(_this._blocks.length - 1);
              }

              i += bName.length - 1;
              return "continue";
            }
          }();

          if (_ret === "continue") continue;
        }

        var char = pattern[i];

        var _isInput = char in defs;

        if (char === MaskedPattern.STOP_CHAR) {
          this._stops.push(this._blocks.length);

          continue;
        }

        if (char === '{' || char === '}') {
          unmaskingBlock = !unmaskingBlock;
          continue;
        }

        if (char === '[' || char === ']') {
          optionalBlock = !optionalBlock;
          continue;
        }

        if (char === MaskedPattern.ESCAPE_CHAR) {
          ++i;
          char = pattern[i];
          if (!char) break;
          _isInput = false;
        }

        var def = _isInput ? new PatternInputDefinition({
          parent: this,
          lazy: this.lazy,
          placeholderChar: this.placeholderChar,
          mask: defs[char],
          isOptional: optionalBlock
        }) : new PatternFixedDefinition({
          char: char,
          isUnmasking: unmaskingBlock
        });

        this._blocks.push(def);
      }
    }
    /**
      @override
    */

  }, {
    key: "reset",

    /**
      @override
    */
    value: function reset() {
      _get(_getPrototypeOf(MaskedPattern.prototype), "reset", this).call(this);

      this._blocks.forEach(function (b) {
        return b.reset();
      });
    }
    /**
      @override
    */

  }, {
    key: "doCommit",

    /**
      @override
    */
    value: function doCommit() {
      this._blocks.forEach(function (b) {
        return b.doCommit();
      });

      _get(_getPrototypeOf(MaskedPattern.prototype), "doCommit", this).call(this);
    }
    /**
      @override
    */

  }, {
    key: "appendTail",

    /**
      @override
    */
    value: function appendTail(tail) {
      return _get(_getPrototypeOf(MaskedPattern.prototype), "appendTail", this).call(this, tail).aggregate(this._appendPlaceholder());
    }
    /**
      @override
    */

  }, {
    key: "_appendCharRaw",
    value: function _appendCharRaw(ch) {
      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      ch = this.doPrepare(ch, flags);

      var blockIter = this._mapPosToBlock(this.value.length);

      var details = new ChangeDetails();
      if (!blockIter) return details;

      for (var bi = blockIter.index;; ++bi) {
        var _block = this._blocks[bi];
        if (!_block) break;

        var blockDetails = _block._appendChar(ch, flags);

        var skip = blockDetails.skip;
        details.aggregate(blockDetails);
        if (skip || blockDetails.rawInserted) break; // go next char
      }

      return details;
    }
    /**
      @override
    */

  }, {
    key: "extractTail",
    value: function extractTail() {
      var _this2 = this;

      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
      var chunkTail = new ChunksTailDetails();
      if (fromPos === toPos) return chunkTail;

      this._forEachBlocksInRange(fromPos, toPos, function (b, bi, bFromPos, bToPos) {
        var blockChunk = b.extractTail(bFromPos, bToPos);
        blockChunk.stop = _this2._findStopBefore(bi);
        blockChunk.from = _this2._blockStartPos(bi);
        if (blockChunk instanceof ChunksTailDetails) blockChunk.blockIndex = bi;
        chunkTail.extend(blockChunk);
      });

      return chunkTail;
    }
    /**
      @override
    */

  }, {
    key: "extractInput",
    value: function extractInput() {
      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
      var flags = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      if (fromPos === toPos) return '';
      var input = '';

      this._forEachBlocksInRange(fromPos, toPos, function (b, _, fromPos, toPos) {
        input += b.extractInput(fromPos, toPos, flags);
      });

      return input;
    }
  }, {
    key: "_findStopBefore",
    value: function _findStopBefore(blockIndex) {
      var stopBefore;

      for (var si = 0; si < this._stops.length; ++si) {
        var stop = this._stops[si];
        if (stop <= blockIndex) stopBefore = stop;else break;
      }

      return stopBefore;
    }
    /** Appends placeholder depending on laziness */

  }, {
    key: "_appendPlaceholder",
    value: function _appendPlaceholder(toBlockIndex) {
      var _this3 = this;

      var details = new ChangeDetails();
      if (this.lazy && toBlockIndex == null) return details;

      var startBlockIter = this._mapPosToBlock(this.value.length);

      if (!startBlockIter) return details;
      var startBlockIndex = startBlockIter.index;
      var endBlockIndex = toBlockIndex != null ? toBlockIndex : this._blocks.length;

      this._blocks.slice(startBlockIndex, endBlockIndex).forEach(function (b) {
        if (!b.lazy || toBlockIndex != null) {
          // $FlowFixMe `_blocks` may not be present
          var args = b._blocks != null ? [b._blocks.length] : [];

          var bDetails = b._appendPlaceholder.apply(b, args);

          _this3._value += bDetails.inserted;
          details.aggregate(bDetails);
        }
      });

      return details;
    }
    /** Finds block in pos */

  }, {
    key: "_mapPosToBlock",
    value: function _mapPosToBlock(pos) {
      var accVal = '';

      for (var bi = 0; bi < this._blocks.length; ++bi) {
        var _block2 = this._blocks[bi];
        var blockStartPos = accVal.length;
        accVal += _block2.value;

        if (pos <= accVal.length) {
          return {
            index: bi,
            offset: pos - blockStartPos
          };
        }
      }
    }
    /** */

  }, {
    key: "_blockStartPos",
    value: function _blockStartPos(blockIndex) {
      return this._blocks.slice(0, blockIndex).reduce(function (pos, b) {
        return pos += b.value.length;
      }, 0);
    }
    /** */

  }, {
    key: "_forEachBlocksInRange",
    value: function _forEachBlocksInRange(fromPos) {
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
      var fn = arguments.length > 2 ? arguments[2] : undefined;

      var fromBlockIter = this._mapPosToBlock(fromPos);

      if (fromBlockIter) {
        var toBlockIter = this._mapPosToBlock(toPos); // process first block


        var isSameBlock = toBlockIter && fromBlockIter.index === toBlockIter.index;
        var fromBlockStartPos = fromBlockIter.offset;
        var fromBlockEndPos = toBlockIter && isSameBlock ? toBlockIter.offset : this._blocks[fromBlockIter.index].value.length;
        fn(this._blocks[fromBlockIter.index], fromBlockIter.index, fromBlockStartPos, fromBlockEndPos);

        if (toBlockIter && !isSameBlock) {
          // process intermediate blocks
          for (var bi = fromBlockIter.index + 1; bi < toBlockIter.index; ++bi) {
            fn(this._blocks[bi], bi, 0, this._blocks[bi].value.length);
          } // process last block


          fn(this._blocks[toBlockIter.index], toBlockIter.index, 0, toBlockIter.offset);
        }
      }
    }
    /**
      @override
    */

  }, {
    key: "remove",
    value: function remove() {
      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;

      var removeDetails = _get(_getPrototypeOf(MaskedPattern.prototype), "remove", this).call(this, fromPos, toPos);

      this._forEachBlocksInRange(fromPos, toPos, function (b, _, bFromPos, bToPos) {
        removeDetails.aggregate(b.remove(bFromPos, bToPos));
      });

      return removeDetails;
    }
    /**
      @override
    */

  }, {
    key: "nearestInputPos",
    value: function nearestInputPos(cursorPos) {
      var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DIRECTION.NONE; // TODO refactor - extract alignblock

      var beginBlockData = this._mapPosToBlock(cursorPos) || {
        index: 0,
        offset: 0
      };
      var beginBlockOffset = beginBlockData.offset,
          beginBlockIndex = beginBlockData.index;
      var beginBlock = this._blocks[beginBlockIndex];
      if (!beginBlock) return cursorPos;
      var beginBlockCursorPos = beginBlockOffset; // if position inside block - try to adjust it

      if (beginBlockCursorPos !== 0 && beginBlockCursorPos < beginBlock.value.length) {
        beginBlockCursorPos = beginBlock.nearestInputPos(beginBlockOffset, forceDirection(direction));
      }

      var cursorAtRight = beginBlockCursorPos === beginBlock.value.length;
      var cursorAtLeft = beginBlockCursorPos === 0; //  cursor is INSIDE first block (not at bounds)

      if (!cursorAtLeft && !cursorAtRight) return this._blockStartPos(beginBlockIndex) + beginBlockCursorPos;
      var searchBlockIndex = cursorAtRight ? beginBlockIndex + 1 : beginBlockIndex;

      if (direction === DIRECTION.NONE) {
        // NONE direction used to calculate start input position if no chars were removed
        // FOR NONE:
        // -
        // input|any
        // ->
        //  any|input
        // <-
        //  filled-input|any
        // check if first block at left is input
        if (searchBlockIndex > 0) {
          var blockIndexAtLeft = searchBlockIndex - 1;
          var blockAtLeft = this._blocks[blockIndexAtLeft];
          var blockInputPos = blockAtLeft.nearestInputPos(0, DIRECTION.NONE); // is input

          if (!blockAtLeft.value.length || blockInputPos !== blockAtLeft.value.length) {
            return this._blockStartPos(searchBlockIndex);
          }
        } // ->


        var firstInputAtRight = searchBlockIndex;

        for (var bi = firstInputAtRight; bi < this._blocks.length; ++bi) {
          var blockAtRight = this._blocks[bi];

          var _blockInputPos = blockAtRight.nearestInputPos(0, DIRECTION.NONE);

          if (!blockAtRight.value.length || _blockInputPos !== blockAtRight.value.length) {
            return this._blockStartPos(bi) + _blockInputPos;
          }
        } // <-
        // find first non-fixed symbol


        for (var _bi = searchBlockIndex - 1; _bi >= 0; --_bi) {
          var _block3 = this._blocks[_bi];

          var _blockInputPos2 = _block3.nearestInputPos(0, DIRECTION.NONE); // is input


          if (!_block3.value.length || _blockInputPos2 !== _block3.value.length) {
            return this._blockStartPos(_bi) + _block3.value.length;
          }
        }

        return cursorPos;
      }

      if (direction === DIRECTION.LEFT || direction === DIRECTION.FORCE_LEFT) {
        // -
        //  any|filled-input
        // <-
        //  any|first not empty is not-len-aligned
        //  not-0-aligned|any
        // ->
        //  any|not-len-aligned or end
        // check if first block at right is filled input
        var firstFilledBlockIndexAtRight;

        for (var _bi2 = searchBlockIndex; _bi2 < this._blocks.length; ++_bi2) {
          if (this._blocks[_bi2].value) {
            firstFilledBlockIndexAtRight = _bi2;
            break;
          }
        }

        if (firstFilledBlockIndexAtRight != null) {
          var filledBlock = this._blocks[firstFilledBlockIndexAtRight];

          var _blockInputPos3 = filledBlock.nearestInputPos(0, DIRECTION.RIGHT);

          if (_blockInputPos3 === 0 && filledBlock.unmaskedValue.length) {
            // filled block is input
            return this._blockStartPos(firstFilledBlockIndexAtRight) + _blockInputPos3;
          }
        } // <-
        // find this vars


        var firstFilledInputBlockIndex = -1;
        var firstEmptyInputBlockIndex; // TODO consider nested empty inputs

        for (var _bi3 = searchBlockIndex - 1; _bi3 >= 0; --_bi3) {
          var _block4 = this._blocks[_bi3];

          var _blockInputPos4 = _block4.nearestInputPos(_block4.value.length, DIRECTION.FORCE_LEFT);

          if (!_block4.value || _blockInputPos4 !== 0) firstEmptyInputBlockIndex = _bi3;

          if (_blockInputPos4 !== 0) {
            if (_blockInputPos4 !== _block4.value.length) {
              // aligned inside block - return immediately
              return this._blockStartPos(_bi3) + _blockInputPos4;
            } else {
              // found filled
              firstFilledInputBlockIndex = _bi3;
              break;
            }
          }
        }

        if (direction === DIRECTION.LEFT) {
          // try find first empty input before start searching position only when not forced
          for (var _bi4 = firstFilledInputBlockIndex + 1; _bi4 <= Math.min(searchBlockIndex, this._blocks.length - 1); ++_bi4) {
            var _block5 = this._blocks[_bi4];

            var _blockInputPos5 = _block5.nearestInputPos(0, DIRECTION.NONE);

            var blockAlignedPos = this._blockStartPos(_bi4) + _blockInputPos5;

            if (blockAlignedPos > cursorPos) break; // if block is not lazy input

            if (_blockInputPos5 !== _block5.value.length) return blockAlignedPos;
          }
        } // process overflow


        if (firstFilledInputBlockIndex >= 0) {
          return this._blockStartPos(firstFilledInputBlockIndex) + this._blocks[firstFilledInputBlockIndex].value.length;
        } // for lazy if has aligned left inside fixed and has came to the start - use start position


        if (direction === DIRECTION.FORCE_LEFT || this.lazy && !this.extractInput() && !isInput(this._blocks[searchBlockIndex])) {
          return 0;
        }

        if (firstEmptyInputBlockIndex != null) {
          return this._blockStartPos(firstEmptyInputBlockIndex);
        } // find first input


        for (var _bi5 = searchBlockIndex; _bi5 < this._blocks.length; ++_bi5) {
          var _block6 = this._blocks[_bi5];

          var _blockInputPos6 = _block6.nearestInputPos(0, DIRECTION.NONE); // is input


          if (!_block6.value.length || _blockInputPos6 !== _block6.value.length) {
            return this._blockStartPos(_bi5) + _blockInputPos6;
          }
        }

        return 0;
      }

      if (direction === DIRECTION.RIGHT || direction === DIRECTION.FORCE_RIGHT) {
        // ->
        //  any|not-len-aligned and filled
        //  any|not-len-aligned
        // <-
        //  not-0-aligned or start|any
        var firstInputBlockAlignedIndex;
        var firstInputBlockAlignedPos;

        for (var _bi6 = searchBlockIndex; _bi6 < this._blocks.length; ++_bi6) {
          var _block7 = this._blocks[_bi6];

          var _blockInputPos7 = _block7.nearestInputPos(0, DIRECTION.NONE);

          if (_blockInputPos7 !== _block7.value.length) {
            firstInputBlockAlignedPos = this._blockStartPos(_bi6) + _blockInputPos7;
            firstInputBlockAlignedIndex = _bi6;
            break;
          }
        }

        if (firstInputBlockAlignedIndex != null && firstInputBlockAlignedPos != null) {
          for (var _bi7 = firstInputBlockAlignedIndex; _bi7 < this._blocks.length; ++_bi7) {
            var _block8 = this._blocks[_bi7];

            var _blockInputPos8 = _block8.nearestInputPos(0, DIRECTION.FORCE_RIGHT);

            if (_blockInputPos8 !== _block8.value.length) {
              return this._blockStartPos(_bi7) + _blockInputPos8;
            }
          }

          return direction === DIRECTION.FORCE_RIGHT ? this.value.length : firstInputBlockAlignedPos;
        }

        for (var _bi8 = Math.min(searchBlockIndex, this._blocks.length - 1); _bi8 >= 0; --_bi8) {
          var _block9 = this._blocks[_bi8];

          var _blockInputPos9 = _block9.nearestInputPos(_block9.value.length, DIRECTION.LEFT);

          if (_blockInputPos9 !== 0) {
            var alignedPos = this._blockStartPos(_bi8) + _blockInputPos9;

            if (alignedPos >= cursorPos) return alignedPos;
            break;
          }
        }
      }

      return cursorPos;
    }
    /** Get block by name */

  }, {
    key: "maskedBlock",
    value: function maskedBlock(name) {
      return this.maskedBlocks(name)[0];
    }
    /** Get all blocks by name */

  }, {
    key: "maskedBlocks",
    value: function maskedBlocks(name) {
      var _this4 = this;

      var indices = this._maskedBlocks[name];
      if (!indices) return [];
      return indices.map(function (gi) {
        return _this4._blocks[gi];
      });
    }
  }, {
    key: "state",
    get: function get() {
      return Object.assign({}, _get(_getPrototypeOf(MaskedPattern.prototype), "state", this), {
        _blocks: this._blocks.map(function (b) {
          return b.state;
        })
      });
    },
    set: function set(state) {
      var _blocks = state._blocks,
          maskedState = _objectWithoutProperties(state, ["_blocks"]);

      this._blocks.forEach(function (b, bi) {
        return b.state = _blocks[bi];
      });

      _set(_getPrototypeOf(MaskedPattern.prototype), "state", maskedState, this, true);
    }
  }, {
    key: "isComplete",
    get: function get() {
      return this._blocks.every(function (b) {
        return b.isComplete;
      });
    }
  }, {
    key: "unmaskedValue",
    get: function get() {
      return this._blocks.reduce(function (str, b) {
        return str += b.unmaskedValue;
      }, '');
    },
    set: function set(unmaskedValue) {
      _set(_getPrototypeOf(MaskedPattern.prototype), "unmaskedValue", unmaskedValue, this, true);
    }
    /**
      @override
    */

  }, {
    key: "value",
    get: function get() {
      // TODO return _value when not in change?
      return this._blocks.reduce(function (str, b) {
        return str += b.value;
      }, '');
    },
    set: function set(value) {
      _set(_getPrototypeOf(MaskedPattern.prototype), "value", value, this, true);
    }
  }]);

  return MaskedPattern;
}(Masked);

MaskedPattern.DEFAULTS = {
  lazy: true,
  placeholderChar: '_'
};
MaskedPattern.STOP_CHAR = '`';
MaskedPattern.ESCAPE_CHAR = '\\';
MaskedPattern.InputDefinition = PatternInputDefinition;
MaskedPattern.FixedDefinition = PatternFixedDefinition;

function isInput(block) {
  if (!block) return false;
  var value = block.value;
  return !value || block.nearestInputPos(0, DIRECTION.NONE) !== value.length;
}
/** Pattern which accepts ranges */


var MaskedRange =
/*#__PURE__*/
function (_MaskedPattern) {
  _inherits(MaskedRange, _MaskedPattern);

  function MaskedRange() {
    _classCallCheck(this, MaskedRange);

    return _possibleConstructorReturn(this, _getPrototypeOf(MaskedRange).apply(this, arguments));
  }

  _createClass(MaskedRange, [{
    key: "_update",

    /**
      @override
    */
    value: function _update(opts) {
      // TODO type
      opts = Object.assign({
        to: this.to || 0,
        from: this.from || 0
      }, opts);
      var maxLength = String(opts.to).length;
      if (opts.maxLength != null) maxLength = Math.max(maxLength, opts.maxLength);
      opts.maxLength = maxLength;
      var fromStr = String(opts.from).padStart(maxLength, '0');
      var toStr = String(opts.to).padStart(maxLength, '0');
      var sameCharsCount = 0;

      while (sameCharsCount < toStr.length && toStr[sameCharsCount] === fromStr[sameCharsCount]) {
        ++sameCharsCount;
      }

      opts.mask = toStr.slice(0, sameCharsCount).replace(/0/g, '\\0') + '0'.repeat(maxLength - sameCharsCount);

      _get(_getPrototypeOf(MaskedRange.prototype), "_update", this).call(this, opts);
    }
    /**
      @override
    */

  }, {
    key: "boundaries",
    value: function boundaries(str) {
      var minstr = '';
      var maxstr = '';

      var _ref = str.match(/^(\D*)(\d*)(\D*)/) || [],
          _ref2 = _slicedToArray(_ref, 3),
          placeholder = _ref2[1],
          num = _ref2[2];

      if (num) {
        minstr = '0'.repeat(placeholder.length) + num;
        maxstr = '9'.repeat(placeholder.length) + num;
      }

      minstr = minstr.padEnd(this.maxLength, '0');
      maxstr = maxstr.padEnd(this.maxLength, '9');
      return [minstr, maxstr];
    }
    /**
      @override
    */

  }, {
    key: "doPrepare",
    value: function doPrepare(str) {
      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      str = _get(_getPrototypeOf(MaskedRange.prototype), "doPrepare", this).call(this, str, flags).replace(/\D/g, '');
      if (!this.autofix) return str;
      var fromStr = String(this.from).padStart(this.maxLength, '0');
      var toStr = String(this.to).padStart(this.maxLength, '0');
      var val = this.value;
      var prepStr = '';

      for (var ci = 0; ci < str.length; ++ci) {
        var nextVal = val + prepStr + str[ci];

        var _this$boundaries = this.boundaries(nextVal),
            _this$boundaries2 = _slicedToArray(_this$boundaries, 2),
            minstr = _this$boundaries2[0],
            maxstr = _this$boundaries2[1];

        if (Number(maxstr) < this.from) prepStr += fromStr[nextVal.length - 1];else if (Number(minstr) > this.to) prepStr += toStr[nextVal.length - 1];else prepStr += str[ci];
      }

      return prepStr;
    }
    /**
      @override
    */

  }, {
    key: "doValidate",
    value: function doValidate() {
      var _get2;

      var str = this.value;
      var firstNonZero = str.search(/[^0]/);
      if (firstNonZero === -1 && str.length <= this._matchFrom) return true;

      var _this$boundaries3 = this.boundaries(str),
          _this$boundaries4 = _slicedToArray(_this$boundaries3, 2),
          minstr = _this$boundaries4[0],
          maxstr = _this$boundaries4[1];

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return this.from <= Number(maxstr) && Number(minstr) <= this.to && (_get2 = _get(_getPrototypeOf(MaskedRange.prototype), "doValidate", this)).call.apply(_get2, [this].concat(args));
    }
  }, {
    key: "_matchFrom",

    /**
      Optionally sets max length of pattern.
      Used when pattern length is longer then `to` param length. Pads zeros at start in this case.
    */

    /** Min bound */

    /** Max bound */

    /** */
    get: function get() {
      return this.maxLength - String(this.from).length;
    }
  }, {
    key: "isComplete",
    get: function get() {
      return _get(_getPrototypeOf(MaskedRange.prototype), "isComplete", this) && Boolean(this.value);
    }
  }]);

  return MaskedRange;
}(MaskedPattern);
/** Date mask */


var MaskedDate =
/*#__PURE__*/
function (_MaskedPattern) {
  _inherits(MaskedDate, _MaskedPattern);
  /** Parse string to Date */

  /** Format Date to string */

  /** Pattern mask for date according to {@link MaskedDate#format} */

  /** Start date */

  /** End date */

  /** */

  /**
    @param {Object} opts
  */


  function MaskedDate(opts) {
    _classCallCheck(this, MaskedDate);

    return _possibleConstructorReturn(this, _getPrototypeOf(MaskedDate).call(this, Object.assign({}, MaskedDate.DEFAULTS, {}, opts)));
  }
  /**
    @override
  */


  _createClass(MaskedDate, [{
    key: "_update",
    value: function _update(opts) {
      if (opts.mask === Date) delete opts.mask;
      if (opts.pattern) opts.mask = opts.pattern;
      var blocks = opts.blocks;
      opts.blocks = Object.assign({}, MaskedDate.GET_DEFAULT_BLOCKS()); // adjust year block

      if (opts.min) opts.blocks.Y.from = opts.min.getFullYear();
      if (opts.max) opts.blocks.Y.to = opts.max.getFullYear();

      if (opts.min && opts.max && opts.blocks.Y.from === opts.blocks.Y.to) {
        opts.blocks.m.from = opts.min.getMonth() + 1;
        opts.blocks.m.to = opts.max.getMonth() + 1;

        if (opts.blocks.m.from === opts.blocks.m.to) {
          opts.blocks.d.from = opts.min.getDate();
          opts.blocks.d.to = opts.max.getDate();
        }
      }

      Object.assign(opts.blocks, blocks); // add autofix

      Object.keys(opts.blocks).forEach(function (bk) {
        var b = opts.blocks[bk];
        if (!('autofix' in b)) b.autofix = opts.autofix;
      });

      _get(_getPrototypeOf(MaskedDate.prototype), "_update", this).call(this, opts);
    }
    /**
      @override
    */

  }, {
    key: "doValidate",
    value: function doValidate() {
      var _get2;

      var date = this.date;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return (_get2 = _get(_getPrototypeOf(MaskedDate.prototype), "doValidate", this)).call.apply(_get2, [this].concat(args)) && (!this.isComplete || this.isDateExist(this.value) && date != null && (this.min == null || this.min <= date) && (this.max == null || date <= this.max));
    }
    /** Checks if date is exists */

  }, {
    key: "isDateExist",
    value: function isDateExist(str) {
      return this.format(this.parse(str)) === str;
    }
    /** Parsed Date */

  }, {
    key: "date",
    get: function get() {
      return this.isComplete ? this.parse(this.value) : null;
    },
    set: function set(date) {
      this.value = this.format(date);
    }
    /**
      @override
    */

  }, {
    key: "typedValue",
    get: function get() {
      return this.date;
    },
    set: function set(value) {
      this.date = value;
    }
  }]);

  return MaskedDate;
}(MaskedPattern);

MaskedDate.DEFAULTS = {
  pattern: 'd{.}`m{.}`Y',
  format: function format(date) {
    var day = String(date.getDate()).padStart(2, '0');
    var month = String(date.getMonth() + 1).padStart(2, '0');
    var year = date.getFullYear();
    return [day, month, year].join('.');
  },
  parse: function parse(str) {
    var _str$split = str.split('.'),
        _str$split2 = _slicedToArray(_str$split, 3),
        day = _str$split2[0],
        month = _str$split2[1],
        year = _str$split2[2];

    return new Date(year, month - 1, day);
  }
};

MaskedDate.GET_DEFAULT_BLOCKS = function () {
  return {
    d: {
      mask: MaskedRange,
      from: 1,
      to: 31,
      maxLength: 2
    },
    m: {
      mask: MaskedRange,
      from: 1,
      to: 12,
      maxLength: 2
    },
    Y: {
      mask: MaskedRange,
      from: 1900,
      to: 9999
    }
  };
};
/**
  Generic element API to use with mask
  @interface
*/


var MaskElement =
/*#__PURE__*/
function () {
  function MaskElement() {
    _classCallCheck(this, MaskElement);
  }

  _createClass(MaskElement, [{
    key: "select",

    /** Safely sets element selection */
    value: function select(start, end) {
      if (start == null || end == null || start === this.selectionStart && end === this.selectionEnd) return;

      try {
        this._unsafeSelect(start, end);
      } catch (e) {}
    }
    /** Should be overriden in subclasses */

  }, {
    key: "_unsafeSelect",
    value: function _unsafeSelect(start, end) {}
    /** Should be overriden in subclasses */

  }, {
    key: "bindEvents",

    /** Should be overriden in subclasses */
    value: function bindEvents(handlers) {}
    /** Should be overriden in subclasses */

  }, {
    key: "unbindEvents",
    value: function unbindEvents() {}
  }, {
    key: "selectionStart",

    /** */

    /** */

    /** */

    /** Safely returns selection start */
    get: function get() {
      var start;

      try {
        start = this._unsafeSelectionStart;
      } catch (e) {}

      return start != null ? start : this.value.length;
    }
    /** Safely returns selection end */

  }, {
    key: "selectionEnd",
    get: function get() {
      var end;

      try {
        end = this._unsafeSelectionEnd;
      } catch (e) {}

      return end != null ? end : this.value.length;
    }
  }, {
    key: "isActive",
    get: function get() {
      return false;
    }
  }]);

  return MaskElement;
}();
/** Bridge between HTMLElement and {@link Masked} */


var HTMLMaskElement =
/*#__PURE__*/
function (_MaskElement) {
  _inherits(HTMLMaskElement, _MaskElement);
  /** Mapping between HTMLElement events and mask internal events */

  /** HTMLElement to use mask on */

  /**
    @param {HTMLInputElement|HTMLTextAreaElement} input
  */


  function HTMLMaskElement(input) {
    var _this;

    _classCallCheck(this, HTMLMaskElement);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(HTMLMaskElement).call(this));
    _this.input = input;
    _this._handlers = {};
    return _this;
  }
  /**
    Is element in focus
    @readonly
  */


  _createClass(HTMLMaskElement, [{
    key: "_unsafeSelect",

    /**
      Sets HTMLElement selection
      @override
    */
    value: function _unsafeSelect(start, end) {
      this.input.setSelectionRange(start, end);
    }
    /**
      HTMLElement value
      @override
    */

  }, {
    key: "bindEvents",

    /**
      Binds HTMLElement events to mask internal events
      @override
    */
    value: function bindEvents(handlers) {
      var _this2 = this;

      Object.keys(handlers).forEach(function (event) {
        return _this2._toggleEventHandler(HTMLMaskElement.EVENTS_MAP[event], handlers[event]);
      });
    }
    /**
      Unbinds HTMLElement events to mask internal events
      @override
    */

  }, {
    key: "unbindEvents",
    value: function unbindEvents() {
      var _this3 = this;

      Object.keys(this._handlers).forEach(function (event) {
        return _this3._toggleEventHandler(event);
      });
    }
    /** */

  }, {
    key: "_toggleEventHandler",
    value: function _toggleEventHandler(event, handler) {
      if (this._handlers[event]) {
        this.input.removeEventListener(event, this._handlers[event]);
        delete this._handlers[event];
      }

      if (handler) {
        this.input.addEventListener(event, handler);
        this._handlers[event] = handler;
      }
    }
  }, {
    key: "isActive",
    get: function get() {
      return this.input === document.activeElement;
    }
    /**
      Returns HTMLElement selection start
      @override
    */

  }, {
    key: "_unsafeSelectionStart",
    get: function get() {
      return this.input.selectionStart;
    }
    /**
      Returns HTMLElement selection end
      @override
    */

  }, {
    key: "_unsafeSelectionEnd",
    get: function get() {
      return this.input.selectionEnd;
    }
  }, {
    key: "value",
    get: function get() {
      return this.input.value;
    },
    set: function set(value) {
      this.input.value = value;
    }
  }]);

  return HTMLMaskElement;
}(MaskElement);

HTMLMaskElement.EVENTS_MAP = {
  selectionChange: 'keydown',
  input: 'input',
  drop: 'drop',
  click: 'click',
  focus: 'focus',
  commit: 'blur'
};
/** Listens to element events and controls changes between element and {@link Masked} */

var InputMask =
/*#__PURE__*/
function () {
  /**
    View element
    @readonly
  */

  /**
    Internal {@link Masked} model
    @readonly
  */

  /**
    @param {MaskElement|HTMLInputElement|HTMLTextAreaElement} el
    @param {Object} opts
  */
  function InputMask(el, opts) {
    _classCallCheck(this, InputMask);

    this.el = el instanceof MaskElement ? el : new HTMLMaskElement(el);
    this.masked = createMask(opts);
    this._listeners = {};
    this._value = '';
    this._unmaskedValue = '';
    this._saveSelection = this._saveSelection.bind(this);
    this._onInput = this._onInput.bind(this);
    this._onChange = this._onChange.bind(this);
    this._onDrop = this._onDrop.bind(this);
    this._onFocus = this._onFocus.bind(this);
    this.alignCursor = this.alignCursor.bind(this);
    this.alignCursorFriendly = this.alignCursorFriendly.bind(this);

    this._bindEvents(); // refresh


    this.updateValue();

    this._onChange();
  }
  /** Read or update mask */


  _createClass(InputMask, [{
    key: "maskEquals",
    value: function maskEquals(mask) {
      return mask == null || mask === this.masked.mask || mask === Date && this.masked instanceof MaskedDate;
    }
  }, {
    key: "_bindEvents",

    /**
      Starts listening to element events
      @protected
    */
    value: function _bindEvents() {
      this.el.bindEvents({
        selectionChange: this._saveSelection,
        input: this._onInput,
        drop: this._onDrop,
        click: this.alignCursorFriendly,
        focus: this._onFocus,
        commit: this._onChange
      });
    }
    /**
      Stops listening to element events
      @protected
     */

  }, {
    key: "_unbindEvents",
    value: function _unbindEvents() {
      this.el.unbindEvents();
    }
    /**
      Fires custom event
      @protected
     */

  }, {
    key: "_fireEvent",
    value: function _fireEvent(ev) {
      var listeners = this._listeners[ev];
      if (!listeners) return;
      listeners.forEach(function (l) {
        return l();
      });
    }
    /**
      Current selection start
      @readonly
    */

  }, {
    key: "_saveSelection",

    /**
      Stores current selection
      @protected
    */
    value: function _saveSelection()
    /* ev */
    {
      if (this.value !== this.el.value) {
        console.warn('Element value was changed outside of mask. Syncronize mask using `mask.updateValue()` to work properly.'); // eslint-disable-line no-console
      }

      this._selection = {
        start: this.selectionStart,
        end: this.cursorPos
      };
    }
    /** Syncronizes model value from view */

  }, {
    key: "updateValue",
    value: function updateValue() {
      this.masked.value = this.el.value;
      this._value = this.masked.value;
    }
    /** Syncronizes view from model value, fires change events */

  }, {
    key: "updateControl",
    value: function updateControl() {
      var newUnmaskedValue = this.masked.unmaskedValue;
      var newValue = this.masked.value;
      var isChanged = this.unmaskedValue !== newUnmaskedValue || this.value !== newValue;
      this._unmaskedValue = newUnmaskedValue;
      this._value = newValue;
      if (this.el.value !== newValue) this.el.value = newValue;
      if (isChanged) this._fireChangeEvents();
    }
    /** Updates options with deep equal check, recreates @{link Masked} model if mask type changes */

  }, {
    key: "updateOptions",
    value: function updateOptions(opts) {
      var mask = opts.mask,
          restOpts = _objectWithoutProperties(opts, ["mask"]);

      var updateMask = !this.maskEquals(mask);
      var updateOpts = !objectIncludes(this.masked, restOpts);
      if (updateMask) this.mask = mask;
      if (updateOpts) this.masked.updateOptions(restOpts);
      if (updateMask || updateOpts) this.updateControl();
    }
    /** Updates cursor */

  }, {
    key: "updateCursor",
    value: function updateCursor(cursorPos) {
      if (cursorPos == null) return;
      this.cursorPos = cursorPos; // also queue change cursor for mobile browsers

      this._delayUpdateCursor(cursorPos);
    }
    /**
      Delays cursor update to support mobile browsers
      @private
    */

  }, {
    key: "_delayUpdateCursor",
    value: function _delayUpdateCursor(cursorPos) {
      var _this = this;

      this._abortUpdateCursor();

      this._changingCursorPos = cursorPos;
      this._cursorChanging = setTimeout(function () {
        if (!_this.el) return; // if was destroyed

        _this.cursorPos = _this._changingCursorPos;

        _this._abortUpdateCursor();
      }, 10);
    }
    /**
      Fires custom events
      @protected
    */

  }, {
    key: "_fireChangeEvents",
    value: function _fireChangeEvents() {
      this._fireEvent('accept');

      if (this.masked.isComplete) this._fireEvent('complete');
    }
    /**
      Aborts delayed cursor update
      @private
    */

  }, {
    key: "_abortUpdateCursor",
    value: function _abortUpdateCursor() {
      if (this._cursorChanging) {
        clearTimeout(this._cursorChanging);
        delete this._cursorChanging;
      }
    }
    /** Aligns cursor to nearest available position */

  }, {
    key: "alignCursor",
    value: function alignCursor() {
      this.cursorPos = this.masked.nearestInputPos(this.cursorPos, DIRECTION.LEFT);
    }
    /** Aligns cursor only if selection is empty */

  }, {
    key: "alignCursorFriendly",
    value: function alignCursorFriendly() {
      if (this.selectionStart !== this.cursorPos) return; // skip if range is selected

      this.alignCursor();
    }
    /** Adds listener on custom event */

  }, {
    key: "on",
    value: function on(ev, handler) {
      if (!this._listeners[ev]) this._listeners[ev] = [];

      this._listeners[ev].push(handler);

      return this;
    }
    /** Removes custom event listener */

  }, {
    key: "off",
    value: function off(ev, handler) {
      if (!this._listeners[ev]) return this;

      if (!handler) {
        delete this._listeners[ev];
        return this;
      }

      var hIndex = this._listeners[ev].indexOf(handler);

      if (hIndex >= 0) this._listeners[ev].splice(hIndex, 1);
      return this;
    }
    /** Handles view input event */

  }, {
    key: "_onInput",
    value: function _onInput() {
      this._abortUpdateCursor(); // fix strange IE behavior


      if (!this._selection) return this.updateValue();
      var details = new ActionDetails( // new state
      this.el.value, this.cursorPos, // old state
      this.value, this._selection);
      var oldRawValue = this.masked.rawInputValue;
      var offset = this.masked.splice(details.startChangePos, details.removed.length, details.inserted, details.removeDirection).offset; // force align in remove direction only if no input chars were removed
      // otherwise we still need to align with NONE (to get out from fixed symbols for instance)

      var removeDirection = oldRawValue === this.masked.rawInputValue ? details.removeDirection : DIRECTION.NONE;
      var cursorPos = this.masked.nearestInputPos(details.startChangePos + offset, removeDirection);
      this.updateControl();
      this.updateCursor(cursorPos);
    }
    /** Handles view change event and commits model value */

  }, {
    key: "_onChange",
    value: function _onChange() {
      if (this.value !== this.el.value) {
        this.updateValue();
      }

      this.masked.doCommit();
      this.updateControl();

      this._saveSelection();
    }
    /** Handles view drop event, prevents by default */

  }, {
    key: "_onDrop",
    value: function _onDrop(ev) {
      ev.preventDefault();
      ev.stopPropagation();
    }
    /** Restore last selection on focus */

  }, {
    key: "_onFocus",
    value: function _onFocus(ev) {
      if (this.selectionStart !== this.cursorPos) return; // skip if range is selected

      if (this._selection) this.cursorPos = this._selection.end;
      this.alignCursorFriendly();
    }
    /** Unbind view events and removes element reference */

  }, {
    key: "destroy",
    value: function destroy() {
      this._unbindEvents(); // $FlowFixMe why not do so?


      this._listeners.length = 0;
      delete this.el;
    }
  }, {
    key: "mask",
    get: function get() {
      return this.masked.mask;
    },
    set: function set(mask) {
      if (this.maskEquals(mask)) return;

      if (this.masked.constructor === maskedClass(mask)) {
        this.masked.updateOptions({
          mask: mask
        });
        return;
      }

      var masked = createMask({
        mask: mask
      });
      masked.unmaskedValue = this.masked.unmaskedValue;
      this.masked = masked;
    }
    /** Raw value */

  }, {
    key: "value",
    get: function get() {
      return this._value;
    },
    set: function set(str) {
      this.masked.value = str;
      this.updateControl();
      this.alignCursor();
    }
    /** Unmasked value */

  }, {
    key: "unmaskedValue",
    get: function get() {
      return this._unmaskedValue;
    },
    set: function set(str) {
      this.masked.unmaskedValue = str;
      this.updateControl();
      this.alignCursor();
    }
    /** Typed unmasked value */

  }, {
    key: "typedValue",
    get: function get() {
      return this.masked.typedValue;
    },
    set: function set(val) {
      this.masked.typedValue = val;
      this.updateControl();
      this.alignCursor();
    }
  }, {
    key: "selectionStart",
    get: function get() {
      return this._cursorChanging ? this._changingCursorPos : this.el.selectionStart;
    }
    /** Current cursor position */

  }, {
    key: "cursorPos",
    get: function get() {
      return this._cursorChanging ? this._changingCursorPos : this.el.selectionEnd;
    },
    set: function set(pos) {
      if (!this.el.isActive) return;
      this.el.select(pos, pos);

      this._saveSelection();
    }
  }]);

  return InputMask;
}();
/** Pattern which validates enum values */


var MaskedEnum =
/*#__PURE__*/
function (_MaskedPattern) {
  _inherits(MaskedEnum, _MaskedPattern);

  function MaskedEnum() {
    _classCallCheck(this, MaskedEnum);

    return _possibleConstructorReturn(this, _getPrototypeOf(MaskedEnum).apply(this, arguments));
  }

  _createClass(MaskedEnum, [{
    key: "_update",

    /**
      @override
      @param {Object} opts
    */
    value: function _update(opts) {
      // TODO type
      if (opts.enum) opts.mask = '*'.repeat(opts.enum[0].length);

      _get(_getPrototypeOf(MaskedEnum.prototype), "_update", this).call(this, opts);
    }
    /**
      @override
    */

  }, {
    key: "doValidate",
    value: function doValidate() {
      var _this = this,
          _get2;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return this.enum.some(function (e) {
        return e.indexOf(_this.unmaskedValue) >= 0;
      }) && (_get2 = _get(_getPrototypeOf(MaskedEnum.prototype), "doValidate", this)).call.apply(_get2, [this].concat(args));
    }
  }]);

  return MaskedEnum;
}(MaskedPattern);
/**
  Number mask
  @param {Object} opts
  @param {string} opts.radix - Single char
  @param {string} opts.thousandsSeparator - Single char
  @param {Array<string>} opts.mapToRadix - Array of single chars
  @param {number} opts.min
  @param {number} opts.max
  @param {number} opts.scale - Digits after point
  @param {boolean} opts.signed - Allow negative
  @param {boolean} opts.normalizeZeros - Flag to remove leading and trailing zeros in the end of editing
  @param {boolean} opts.padFractionalZeros - Flag to pad trailing zeros after point in the end of editing
*/


var MaskedNumber =
/*#__PURE__*/
function (_Masked) {
  _inherits(MaskedNumber, _Masked);
  /** Single char */

  /** Single char */

  /** Array of single chars */

  /** */

  /** */

  /** Digits after point */

  /** */

  /** Flag to remove leading and trailing zeros in the end of editing */

  /** Flag to pad trailing zeros after point in the end of editing */


  function MaskedNumber(opts) {
    _classCallCheck(this, MaskedNumber);

    return _possibleConstructorReturn(this, _getPrototypeOf(MaskedNumber).call(this, Object.assign({}, MaskedNumber.DEFAULTS, {}, opts)));
  }
  /**
    @override
  */


  _createClass(MaskedNumber, [{
    key: "_update",
    value: function _update(opts) {
      _get(_getPrototypeOf(MaskedNumber.prototype), "_update", this).call(this, opts);

      this._updateRegExps();
    }
    /** */

  }, {
    key: "_updateRegExps",
    value: function _updateRegExps() {
      // use different regexp to process user input (more strict, input suffix) and tail shifting
      var start = '^' + (this.allowNegative ? '[+|\\-]?' : '');
      var midInput = '(0|([1-9]+\\d*))?';
      var mid = '\\d*';
      var end = (this.scale ? '(' + escapeRegExp(this.radix) + '\\d{0,' + this.scale + '})?' : '') + '$';
      this._numberRegExpInput = new RegExp(start + midInput + end);
      this._numberRegExp = new RegExp(start + mid + end);
      this._mapToRadixRegExp = new RegExp('[' + this.mapToRadix.map(escapeRegExp).join('') + ']', 'g');
      this._thousandsSeparatorRegExp = new RegExp(escapeRegExp(this.thousandsSeparator), 'g');
    }
    /** */

  }, {
    key: "_removeThousandsSeparators",
    value: function _removeThousandsSeparators(value) {
      return value.replace(this._thousandsSeparatorRegExp, '');
    }
    /** */

  }, {
    key: "_insertThousandsSeparators",
    value: function _insertThousandsSeparators(value) {
      // https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
      var parts = value.split(this.radix);
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, this.thousandsSeparator);
      return parts.join(this.radix);
    }
    /**
      @override
    */

  }, {
    key: "doPrepare",
    value: function doPrepare(str) {
      var _get2;

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      return (_get2 = _get(_getPrototypeOf(MaskedNumber.prototype), "doPrepare", this)).call.apply(_get2, [this, this._removeThousandsSeparators(str.replace(this._mapToRadixRegExp, this.radix))].concat(args));
    }
    /** */

  }, {
    key: "_separatorsCount",
    value: function _separatorsCount(to) {
      var extendOnSeparators = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var count = 0;

      for (var pos = 0; pos < to; ++pos) {
        if (this._value.indexOf(this.thousandsSeparator, pos) === pos) {
          ++count;
          if (extendOnSeparators) to += this.thousandsSeparator.length;
        }
      }

      return count;
    }
    /** */

  }, {
    key: "_separatorsCountFromSlice",
    value: function _separatorsCountFromSlice() {
      var slice = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._value;
      return this._separatorsCount(this._removeThousandsSeparators(slice).length, true);
    }
    /**
      @override
    */

  }, {
    key: "extractInput",
    value: function extractInput() {
      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
      var flags = arguments.length > 2 ? arguments[2] : undefined;

      var _this$_adjustRangeWit = this._adjustRangeWithSeparators(fromPos, toPos);

      var _this$_adjustRangeWit2 = _slicedToArray(_this$_adjustRangeWit, 2);

      fromPos = _this$_adjustRangeWit2[0];
      toPos = _this$_adjustRangeWit2[1];
      return this._removeThousandsSeparators(_get(_getPrototypeOf(MaskedNumber.prototype), "extractInput", this).call(this, fromPos, toPos, flags));
    }
    /**
      @override
    */

  }, {
    key: "_appendCharRaw",
    value: function _appendCharRaw(ch) {
      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      if (!this.thousandsSeparator) return _get(_getPrototypeOf(MaskedNumber.prototype), "_appendCharRaw", this).call(this, ch, flags);
      var prevBeforeTailValue = flags.tail && flags._beforeTailState ? flags._beforeTailState._value : this._value;

      var prevBeforeTailSeparatorsCount = this._separatorsCountFromSlice(prevBeforeTailValue);

      this._value = this._removeThousandsSeparators(this.value);

      var appendDetails = _get(_getPrototypeOf(MaskedNumber.prototype), "_appendCharRaw", this).call(this, ch, flags);

      this._value = this._insertThousandsSeparators(this._value);
      var beforeTailValue = flags.tail && flags._beforeTailState ? flags._beforeTailState._value : this._value;

      var beforeTailSeparatorsCount = this._separatorsCountFromSlice(beforeTailValue);

      appendDetails.tailShift += (beforeTailSeparatorsCount - prevBeforeTailSeparatorsCount) * this.thousandsSeparator.length;
      return appendDetails;
    }
    /** */

  }, {
    key: "_findSeparatorAround",
    value: function _findSeparatorAround(pos) {
      if (this.thousandsSeparator) {
        var searchFrom = pos - this.thousandsSeparator.length + 1;
        var separatorPos = this.value.indexOf(this.thousandsSeparator, searchFrom);
        if (separatorPos <= pos) return separatorPos;
      }

      return -1;
    }
  }, {
    key: "_adjustRangeWithSeparators",
    value: function _adjustRangeWithSeparators(from, to) {
      var separatorAroundFromPos = this._findSeparatorAround(from);

      if (separatorAroundFromPos >= 0) from = separatorAroundFromPos;

      var separatorAroundToPos = this._findSeparatorAround(to);

      if (separatorAroundToPos >= 0) to = separatorAroundToPos + this.thousandsSeparator.length;
      return [from, to];
    }
    /**
      @override
    */

  }, {
    key: "remove",
    value: function remove() {
      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;

      var _this$_adjustRangeWit3 = this._adjustRangeWithSeparators(fromPos, toPos);

      var _this$_adjustRangeWit4 = _slicedToArray(_this$_adjustRangeWit3, 2);

      fromPos = _this$_adjustRangeWit4[0];
      toPos = _this$_adjustRangeWit4[1];
      var valueBeforePos = this.value.slice(0, fromPos);
      var valueAfterPos = this.value.slice(toPos);

      var prevBeforeTailSeparatorsCount = this._separatorsCount(valueBeforePos.length);

      this._value = this._insertThousandsSeparators(this._removeThousandsSeparators(valueBeforePos + valueAfterPos));

      var beforeTailSeparatorsCount = this._separatorsCountFromSlice(valueBeforePos);

      return new ChangeDetails({
        tailShift: (beforeTailSeparatorsCount - prevBeforeTailSeparatorsCount) * this.thousandsSeparator.length
      });
    }
    /**
      @override
    */

  }, {
    key: "nearestInputPos",
    value: function nearestInputPos(cursorPos, direction) {
      if (!this.thousandsSeparator) return cursorPos;

      switch (direction) {
        case DIRECTION.NONE:
        case DIRECTION.LEFT:
        case DIRECTION.FORCE_LEFT:
          {
            var separatorAtLeftPos = this._findSeparatorAround(cursorPos - 1);

            if (separatorAtLeftPos >= 0) {
              var separatorAtLeftEndPos = separatorAtLeftPos + this.thousandsSeparator.length;

              if (cursorPos < separatorAtLeftEndPos || this.value.length <= separatorAtLeftEndPos || direction === DIRECTION.FORCE_LEFT) {
                return separatorAtLeftPos;
              }
            }

            break;
          }

        case DIRECTION.RIGHT:
        case DIRECTION.FORCE_RIGHT:
          {
            var separatorAtRightPos = this._findSeparatorAround(cursorPos);

            if (separatorAtRightPos >= 0) {
              return separatorAtRightPos + this.thousandsSeparator.length;
            }
          }
      }

      return cursorPos;
    }
    /**
      @override
    */

  }, {
    key: "doValidate",
    value: function doValidate(flags) {
      var regexp = flags.input ? this._numberRegExpInput : this._numberRegExp; // validate as string

      var valid = regexp.test(this._removeThousandsSeparators(this.value));

      if (valid) {
        // validate as number
        var number = this.number;
        valid = valid && !isNaN(number) && ( // check min bound for negative values
        this.min == null || this.min >= 0 || this.min <= this.number) && ( // check max bound for positive values
        this.max == null || this.max <= 0 || this.number <= this.max);
      }

      return valid && _get(_getPrototypeOf(MaskedNumber.prototype), "doValidate", this).call(this, flags);
    }
    /**
      @override
    */

  }, {
    key: "doCommit",
    value: function doCommit() {
      if (this.value) {
        var number = this.number;
        var validnum = number; // check bounds

        if (this.min != null) validnum = Math.max(validnum, this.min);
        if (this.max != null) validnum = Math.min(validnum, this.max);
        if (validnum !== number) this.unmaskedValue = String(validnum);
        var formatted = this.value;
        if (this.normalizeZeros) formatted = this._normalizeZeros(formatted);
        if (this.padFractionalZeros) formatted = this._padFractionalZeros(formatted);
        this._value = formatted;
      }

      _get(_getPrototypeOf(MaskedNumber.prototype), "doCommit", this).call(this);
    }
    /** */

  }, {
    key: "_normalizeZeros",
    value: function _normalizeZeros(value) {
      var parts = this._removeThousandsSeparators(value).split(this.radix); // remove leading zeros


      parts[0] = parts[0].replace(/^(\D*)(0*)(\d*)/, function (match, sign, zeros, num) {
        return sign + num;
      }); // add leading zero

      if (value.length && !/\d$/.test(parts[0])) parts[0] = parts[0] + '0';

      if (parts.length > 1) {
        parts[1] = parts[1].replace(/0*$/, ''); // remove trailing zeros

        if (!parts[1].length) parts.length = 1; // remove fractional
      }

      return this._insertThousandsSeparators(parts.join(this.radix));
    }
    /** */

  }, {
    key: "_padFractionalZeros",
    value: function _padFractionalZeros(value) {
      if (!value) return value;
      var parts = value.split(this.radix);
      if (parts.length < 2) parts.push('');
      parts[1] = parts[1].padEnd(this.scale, '0');
      return parts.join(this.radix);
    }
    /**
      @override
    */

  }, {
    key: "unmaskedValue",
    get: function get() {
      return this._removeThousandsSeparators(this._normalizeZeros(this.value)).replace(this.radix, '.');
    },
    set: function set(unmaskedValue) {
      _set(_getPrototypeOf(MaskedNumber.prototype), "unmaskedValue", unmaskedValue.replace('.', this.radix), this, true);
    }
    /** Parsed Number */

  }, {
    key: "number",
    get: function get() {
      return Number(this.unmaskedValue);
    },
    set: function set(number) {
      this.unmaskedValue = String(number);
    }
    /**
      @override
    */

  }, {
    key: "typedValue",
    get: function get() {
      return this.number;
    },
    set: function set(value) {
      this.number = value;
    }
    /**
      Is negative allowed
      @readonly
    */

  }, {
    key: "allowNegative",
    get: function get() {
      return this.signed || this.min != null && this.min < 0 || this.max != null && this.max < 0;
    }
  }]);

  return MaskedNumber;
}(Masked);

MaskedNumber.DEFAULTS = {
  radix: ',',
  thousandsSeparator: '',
  mapToRadix: ['.'],
  scale: 2,
  signed: false,
  normalizeZeros: true,
  padFractionalZeros: false
};
/** Masking by RegExp */

var MaskedRegExp =
/*#__PURE__*/
function (_Masked) {
  _inherits(MaskedRegExp, _Masked);

  function MaskedRegExp() {
    _classCallCheck(this, MaskedRegExp);

    return _possibleConstructorReturn(this, _getPrototypeOf(MaskedRegExp).apply(this, arguments));
  }

  _createClass(MaskedRegExp, [{
    key: "_update",

    /**
      @override
      @param {Object} opts
    */
    value: function _update(opts) {
      if (opts.mask) opts.validate = function (value) {
        return value.search(opts.mask) >= 0;
      };

      _get(_getPrototypeOf(MaskedRegExp.prototype), "_update", this).call(this, opts);
    }
  }]);

  return MaskedRegExp;
}(Masked);
/** Masking by custom Function */


var MaskedFunction =
/*#__PURE__*/
function (_Masked) {
  _inherits(MaskedFunction, _Masked);

  function MaskedFunction() {
    _classCallCheck(this, MaskedFunction);

    return _possibleConstructorReturn(this, _getPrototypeOf(MaskedFunction).apply(this, arguments));
  }

  _createClass(MaskedFunction, [{
    key: "_update",

    /**
      @override
      @param {Object} opts
    */
    value: function _update(opts) {
      if (opts.mask) opts.validate = opts.mask;

      _get(_getPrototypeOf(MaskedFunction.prototype), "_update", this).call(this, opts);
    }
  }]);

  return MaskedFunction;
}(Masked);
/** Dynamic mask for choosing apropriate mask in run-time */


var MaskedDynamic =
/*#__PURE__*/
function (_Masked) {
  _inherits(MaskedDynamic, _Masked);
  /** Currently chosen mask */

  /** Compliled {@link Masked} options */

  /** Chooses {@link Masked} depending on input value */

  /**
    @param {Object} opts
  */


  function MaskedDynamic(opts) {
    var _this;

    _classCallCheck(this, MaskedDynamic);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MaskedDynamic).call(this, Object.assign({}, MaskedDynamic.DEFAULTS, {}, opts)));
    _this.currentMask = null;
    return _this;
  }
  /**
    @override
  */


  _createClass(MaskedDynamic, [{
    key: "_update",
    value: function _update(opts) {
      _get(_getPrototypeOf(MaskedDynamic.prototype), "_update", this).call(this, opts);

      if ('mask' in opts) {
        // mask could be totally dynamic with only `dispatch` option
        this.compiledMasks = Array.isArray(opts.mask) ? opts.mask.map(function (m) {
          return createMask(m);
        }) : [];
      }
    }
    /**
      @override
    */

  }, {
    key: "_appendCharRaw",
    value: function _appendCharRaw() {
      var details = this._applyDispatch.apply(this, arguments);

      if (this.currentMask) {
        var _this$currentMask;

        details.aggregate((_this$currentMask = this.currentMask)._appendChar.apply(_this$currentMask, arguments));
      }

      return details;
    }
  }, {
    key: "_applyDispatch",
    value: function _applyDispatch() {
      var appended = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var prevValueBeforeTail = flags.tail && flags._beforeTailState != null ? flags._beforeTailState._value : this.value;
      var inputValue = this.rawInputValue;
      var insertValue = flags.tail && flags._beforeTailState != null ? // $FlowFixMe - tired to fight with type system
      flags._beforeTailState._rawInputValue : inputValue;
      var tailValue = inputValue.slice(insertValue.length);
      var prevMask = this.currentMask;
      var details = new ChangeDetails();
      var prevMaskState = prevMask && prevMask.state; // clone flags to prevent overwriting `_beforeTailState`

      this.currentMask = this.doDispatch(appended, Object.assign({}, flags)); // restore state after dispatch

      if (this.currentMask) {
        if (this.currentMask !== prevMask) {
          // if mask changed reapply input
          this.currentMask.reset(); // $FlowFixMe - it's ok, we don't change current mask above

          var d = this.currentMask.append(insertValue, {
            raw: true
          });
          details.tailShift = d.inserted.length - prevValueBeforeTail.length;

          if (tailValue) {
            // $FlowFixMe - it's ok, we don't change current mask above
            details.tailShift += this.currentMask.append(tailValue, {
              raw: true,
              tail: true
            }).tailShift;
          }
        } else {
          // Dispatch can do something bad with state, so
          // restore prev mask state
          this.currentMask.state = prevMaskState;
        }
      }

      return details;
    }
  }, {
    key: "_appendPlaceholder",
    value: function _appendPlaceholder() {
      var details = this._applyDispatch.apply(this, arguments);

      if (this.currentMask) {
        details.aggregate(this.currentMask._appendPlaceholder());
      }

      return details;
    }
    /**
      @override
    */

  }, {
    key: "doDispatch",
    value: function doDispatch(appended) {
      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.dispatch(appended, this, flags);
    }
    /**
      @override
    */

  }, {
    key: "doValidate",
    value: function doValidate() {
      var _get2, _this$currentMask2;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return (_get2 = _get(_getPrototypeOf(MaskedDynamic.prototype), "doValidate", this)).call.apply(_get2, [this].concat(args)) && (!this.currentMask || (_this$currentMask2 = this.currentMask).doValidate.apply(_this$currentMask2, args));
    }
    /**
      @override
    */

  }, {
    key: "reset",
    value: function reset() {
      if (this.currentMask) this.currentMask.reset();
      this.compiledMasks.forEach(function (m) {
        return m.reset();
      });
    }
    /**
      @override
    */

  }, {
    key: "remove",

    /**
      @override
    */
    value: function remove() {
      var details = new ChangeDetails();

      if (this.currentMask) {
        var _this$currentMask3;

        details.aggregate((_this$currentMask3 = this.currentMask).remove.apply(_this$currentMask3, arguments)) // update with dispatch
        .aggregate(this._applyDispatch());
      }

      return details;
    }
    /**
      @override
    */

  }, {
    key: "extractInput",

    /**
      @override
    */
    value: function extractInput() {
      var _this$currentMask4;

      return this.currentMask ? (_this$currentMask4 = this.currentMask).extractInput.apply(_this$currentMask4, arguments) : '';
    }
    /**
      @override
    */

  }, {
    key: "extractTail",
    value: function extractTail() {
      var _this$currentMask5, _get3;

      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return this.currentMask ? (_this$currentMask5 = this.currentMask).extractTail.apply(_this$currentMask5, args) : (_get3 = _get(_getPrototypeOf(MaskedDynamic.prototype), "extractTail", this)).call.apply(_get3, [this].concat(args));
    }
    /**
      @override
    */

  }, {
    key: "doCommit",
    value: function doCommit() {
      if (this.currentMask) this.currentMask.doCommit();

      _get(_getPrototypeOf(MaskedDynamic.prototype), "doCommit", this).call(this);
    }
    /**
      @override
    */

  }, {
    key: "nearestInputPos",
    value: function nearestInputPos() {
      var _this$currentMask6, _get4;

      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      return this.currentMask ? (_this$currentMask6 = this.currentMask).nearestInputPos.apply(_this$currentMask6, args) : (_get4 = _get(_getPrototypeOf(MaskedDynamic.prototype), "nearestInputPos", this)).call.apply(_get4, [this].concat(args));
    }
  }, {
    key: "value",
    get: function get() {
      return this.currentMask ? this.currentMask.value : '';
    },
    set: function set(value) {
      _set(_getPrototypeOf(MaskedDynamic.prototype), "value", value, this, true);
    }
    /**
      @override
    */

  }, {
    key: "unmaskedValue",
    get: function get() {
      return this.currentMask ? this.currentMask.unmaskedValue : '';
    },
    set: function set(unmaskedValue) {
      _set(_getPrototypeOf(MaskedDynamic.prototype), "unmaskedValue", unmaskedValue, this, true);
    }
    /**
      @override
    */

  }, {
    key: "typedValue",
    get: function get() {
      return this.currentMask ? this.currentMask.typedValue : '';
    } // probably typedValue should not be used with dynamic
    ,
    set: function set(value) {
      var unmaskedValue = String(value); // double check it

      if (this.currentMask) {
        this.currentMask.typedValue = value;
        unmaskedValue = this.currentMask.unmaskedValue;
      }

      this.unmaskedValue = unmaskedValue;
    }
    /**
      @override
    */

  }, {
    key: "isComplete",
    get: function get() {
      return !!this.currentMask && this.currentMask.isComplete;
    }
  }, {
    key: "state",
    get: function get() {
      return Object.assign({}, _get(_getPrototypeOf(MaskedDynamic.prototype), "state", this), {
        _rawInputValue: this.rawInputValue,
        compiledMasks: this.compiledMasks.map(function (m) {
          return m.state;
        }),
        currentMaskRef: this.currentMask,
        currentMask: this.currentMask && this.currentMask.state
      });
    },
    set: function set(state) {
      var compiledMasks = state.compiledMasks,
          currentMaskRef = state.currentMaskRef,
          currentMask = state.currentMask,
          maskedState = _objectWithoutProperties(state, ["compiledMasks", "currentMaskRef", "currentMask"]);

      this.compiledMasks.forEach(function (m, mi) {
        return m.state = compiledMasks[mi];
      });

      if (currentMaskRef != null) {
        this.currentMask = currentMaskRef;
        this.currentMask.state = currentMask;
      }

      _set(_getPrototypeOf(MaskedDynamic.prototype), "state", maskedState, this, true);
    }
  }, {
    key: "overwrite",
    get: function get() {
      return this.currentMask ? this.currentMask.overwrite : _get(_getPrototypeOf(MaskedDynamic.prototype), "overwrite", this);
    },
    set: function set(overwrite) {
      console.warn('"overwrite" option is not available in dynamic mask, use this option in siblings');
    }
  }]);

  return MaskedDynamic;
}(Masked);

MaskedDynamic.DEFAULTS = {
  dispatch: function dispatch(appended, masked, flags) {
    if (!masked.compiledMasks.length) return;
    var inputValue = masked.rawInputValue; // simulate input

    var inputs = masked.compiledMasks.map(function (m, index) {
      m.reset();
      m.append(inputValue, {
        raw: true
      });
      m.append(appended, flags);
      var weight = m.rawInputValue.length;
      return {
        weight: weight,
        index: index
      };
    }); // pop masks with longer values first

    inputs.sort(function (i1, i2) {
      return i2.weight - i1.weight;
    });
    return masked.compiledMasks[inputs[0].index];
  }
};
/**
 * Applies mask on element.
 * @constructor
 * @param {HTMLInputElement|HTMLTextAreaElement|MaskElement} el - Element to apply mask
 * @param {Object} opts - Custom mask options
 * @return {InputMask}
 */

function IMask(el) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}; // currently available only for input-like elements

  return new InputMask(el, opts);
}
/** {@link InputMask} */


IMask.InputMask = InputMask;
/** {@link Masked} */

IMask.Masked = Masked;
/** {@link MaskedPattern} */

IMask.MaskedPattern = MaskedPattern;
/** {@link MaskedEnum} */

IMask.MaskedEnum = MaskedEnum;
/** {@link MaskedRange} */

IMask.MaskedRange = MaskedRange;
/** {@link MaskedNumber} */

IMask.MaskedNumber = MaskedNumber;
/** {@link MaskedDate} */

IMask.MaskedDate = MaskedDate;
/** {@link MaskedRegExp} */

IMask.MaskedRegExp = MaskedRegExp;
/** {@link MaskedFunction} */

IMask.MaskedFunction = MaskedFunction;
/** {@link MaskedDynamic} */

IMask.MaskedDynamic = MaskedDynamic;
/** {@link createMask} */

IMask.createMask = createMask;
/** {@link MaskElement} */

IMask.MaskElement = MaskElement;
/** {@link HTMLMaskElement} */

IMask.HTMLMaskElement = HTMLMaskElement;
g.IMask = IMask;
/* harmony default export */ __webpack_exports__["default"] = (IMask);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/js-datepicker/dist/datepicker.min.js":
/*!***********************************************************!*\
  !*** ./node_modules/js-datepicker/dist/datepicker.min.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function (e, t) {
   true ? module.exports = t() : undefined;
}(window, function () {
  return function (e) {
    var t = {};

    function n(a) {
      if (t[a]) return t[a].exports;
      var r = t[a] = {
        i: a,
        l: !1,
        exports: {}
      };
      return e[a].call(r.exports, r, r.exports, n), r.l = !0, r.exports;
    }

    return n.m = e, n.c = t, n.d = function (e, t, a) {
      n.o(e, t) || Object.defineProperty(e, t, {
        enumerable: !0,
        get: a
      });
    }, n.r = function (e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(e, "__esModule", {
        value: !0
      });
    }, n.t = function (e, t) {
      if (1 & t && (e = n(e)), 8 & t) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var a = Object.create(null);
      if (n.r(a), Object.defineProperty(a, "default", {
        enumerable: !0,
        value: e
      }), 2 & t && "string" != typeof e) for (var r in e) n.d(a, r, function (t) {
        return e[t];
      }.bind(null, r));
      return a;
    }, n.n = function (e) {
      var t = e && e.__esModule ? function () {
        return e.default;
      } : function () {
        return e;
      };
      return n.d(t, "a", t), t;
    }, n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }, n.p = "", n(n.s = 0);
  }([function (e, t, n) {
    e.exports = n(1);
  }, function (e, t, n) {
    function a(e, t) {
      return function (e) {
        if (Array.isArray(e)) return e;
      }(e) || function (e, t) {
        if (!(Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e))) return;
        var n = [],
            a = !0,
            r = !1,
            i = void 0;

        try {
          for (var o, s = e[Symbol.iterator](); !(a = (o = s.next()).done) && (n.push(o.value), !t || n.length !== t); a = !0);
        } catch (e) {
          r = !0, i = e;
        } finally {
          try {
            a || null == s.return || s.return();
          } finally {
            if (r) throw i;
          }
        }

        return n;
      }(e, t) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }();
    }

    n(2);

    var r = [],
        i = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        o = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        s = {
      t: "top",
      r: "right",
      b: "bottom",
      l: "left",
      c: "centered"
    },
        c = function () {},
        l = ["click", "focusin", "keydown", "input"];

    function d(e) {
      return Array.isArray(e) ? e.map(d) : "[object Object]" === {}.toString.call(e) ? Object.keys(e).reduce(function (t, n) {
        return t[n] = d(e[n]), t;
      }, {}) : e;
    }

    function u(e, t) {
      var n = e.calendar.querySelector(".qs-overlay"),
          a = n && !n.classList.contains("qs-hidden");
      t = t || new Date(e.currentYear, e.currentMonth), e.calendar.innerHTML = [h(t, e, a), f(t, e, a), v(e, a)].join(""), a && setTimeout(function () {
        return M(!0, e);
      }, 10);
    }

    function h(e, t, n) {
      return '\n    <div class="qs-controls '.concat(n ? "qs-blur" : "", '">\n      <div class="qs-arrow qs-left"></div>\n      <div class="qs-month-year">\n        <span class="qs-month">').concat(t.months[e.getMonth()], '</span>\n        <span class="qs-year">').concat(e.getFullYear(), '</span>\n      </div>\n      <div class="qs-arrow qs-right"></div>\n    </div>\n  ');
    }

    function f(e, t, n) {
      var a = t.currentMonth,
          r = t.currentYear,
          i = t.dateSelected,
          o = t.maxDate,
          s = t.minDate,
          c = t.showAllDates,
          l = t.days,
          d = t.disabledDates,
          u = t.disabler,
          h = t.noWeekends,
          f = t.startDay,
          v = t.weekendIndices,
          m = t.events,
          y = t.getRange && t.getRange() || {},
          p = +y.start,
          b = +y.end,
          D = new Date(),
          g = r === D.getFullYear() && a === D.getMonth(),
          w = q(new Date(e).setDate(1)),
          S = w.getDay() - f,
          M = S < 0 ? 7 : 0;
      w.setMonth(w.getMonth() + 1), w.setDate(0);
      var x = w.getDate(),
          L = [],
          P = M + 7 * ((S + x) / 7 | 0);
      P += (S + x) % 7 ? 7 : 0, 0 !== f && 0 === S && (P += 7);

      for (var j = 1; j <= P; j++) {
        var k = (j - 1) % 7,
            O = l[k],
            C = j - (S >= 0 ? S : 7 + S),
            Y = new Date(r, a, C),
            N = m[+Y],
            E = Y.getDate(),
            A = C < 1 || C > x,
            I = "",
            T = '<span class="qs-num">'.concat(E, "</span>"),
            F = p && b && +Y >= p && +Y <= b;
        A ? (I = "qs-empty qs-outside-current-month", c ? (N && (I += " qs-event"), I += " qs-disabled") : T = "") : ((s && Y < s || o && Y > o || u(Y) || d.includes(+Y) || h && v.includes(k)) && (I = "qs-disabled"), N && (I += " qs-event"), g && C === D.getDate() && (I += " qs-current"), +Y == +i && (I += " qs-active"), F && (I += " qs-range-date-".concat(k), p !== b && (I += +Y === p ? " qs-range-date-start qs-active" : +Y === b ? " qs-range-date-end qs-active" : " qs-range-date-middle"))), L.push('<div class="qs-square qs-num '.concat(O, " ").concat(I, '">').concat(T, "</div>"));
      }

      var R = l.map(function (e) {
        return '<div class="qs-square qs-day">'.concat(e, "</div>");
      }).concat(L);
      if (R.length % 7 != 0) throw "Calendar not constructed properly. The # of squares should be a multiple of 7.";
      return R.unshift('<div class="qs-squares '.concat(n ? "qs-blur" : "", '">')), R.push("</div>"), R.join("");
    }

    function v(e, t) {
      var n = e.overlayPlaceholder,
          a = e.overlayButton,
          r = e.overlayMonths.map(function (e, t) {
        return '\n      <div class="qs-overlay-month" data-month-num="'.concat(t, '">\n        <span data-month-num="').concat(t, '">').concat(e, "</span>\n      </div>\n  ");
      }).join("");
      return '\n    <div class="qs-overlay '.concat(t ? "" : "qs-hidden", '">\n      <div>\n        <input class="qs-overlay-year" placeholder="').concat(n, '" />\n        <div class="qs-close">&#10005;</div>\n      </div>\n      <div class="qs-overlay-month-container">').concat(r, '</div>\n      <div class="qs-submit qs-disabled">').concat(a, "</div>\n    </div>\n  ");
    }

    function m(e, t, n) {
      var a = t.currentMonth,
          r = t.currentYear,
          i = t.calendar,
          o = t.el,
          s = t.onSelect,
          c = t.respectDisabledReadOnly,
          l = t.sibling,
          d = i.querySelector(".qs-active"),
          h = e.textContent;
      (o.disabled || o.readOnly) && c || (t.dateSelected = n ? void 0 : new Date(r, a, h), d && d.classList.remove("qs-active"), n || e.classList.add("qs-active"), p(o, t, n), !n && w(t), l && (y({
        instance: t,
        deselect: n
      }), u(t), u(l)), s(t, n ? void 0 : new Date(t.dateSelected)));
    }

    function y(e) {
      var t = e.instance,
          n = e.deselect,
          a = t.first ? t : t.sibling,
          r = a.sibling;
      a === t ? n ? (a.minDate = a.originalMinDate, r.minDate = r.originalMinDate) : r.minDate = a.dateSelected : n ? (r.maxDate = r.originalMaxDate, a.maxDate = a.originalMaxDate) : a.maxDate = r.dateSelected;
    }

    function p(e, t, n) {
      if (!t.nonInput) return n ? e.value = "" : t.formatter !== c ? t.formatter(e, t.dateSelected, t) : void (e.value = t.dateSelected.toDateString());
    }

    function b(e, t, n, a) {
      n || a ? (n && (t.currentYear = n), a && (t.currentMonth = +a)) : (t.currentMonth += e.contains("qs-right") ? 1 : -1, 12 === t.currentMonth ? (t.currentMonth = 0, t.currentYear++) : -1 === t.currentMonth && (t.currentMonth = 11, t.currentYear--)), t.currentMonthName = t.months[t.currentMonth], u(t), t.onMonthChange(t);
    }

    function D(e) {
      if (!e.noPosition) {
        var t = e.el,
            n = e.calendarContainer,
            r = e.position,
            i = e.parent,
            o = r.top,
            s = r.right;
        if (r.centered) return n.classList.add("qs-centered");
        var c = a([i, t, n].map(function (e) {
          return e.getBoundingClientRect();
        }), 3),
            l = c[0],
            d = c[1],
            u = c[2],
            h = d.top - l.top + i.scrollTop,
            f = "".concat(h - (o ? u.height : -1 * d.height), "px"),
            v = "".concat(d.left - l.left + (s ? d.width - u.width : 0), "px");
        n.style.setProperty("top", f), n.style.setProperty("left", v);
      }
    }

    function g(e) {
      return "[object Date]" === {}.toString.call(e) && "Invalid Date" !== e.toString();
    }

    function q(e) {
      if (g(e) || "number" == typeof e && !isNaN(e)) {
        var t = new Date(+e);
        return new Date(t.getFullYear(), t.getMonth(), t.getDate());
      }
    }

    function w(e) {
      e.disabled || !e.calendarContainer.classList.contains("qs-hidden") && !e.alwaysShow && (M(!0, e), e.calendarContainer.classList.add("qs-hidden"), e.onHide(e));
    }

    function S(e) {
      e.disabled || (e.calendarContainer.classList.remove("qs-hidden"), D(e), e.onShow(e));
    }

    function M(e, t) {
      var n = t.calendar;

      if (n) {
        var a = n.querySelector(".qs-overlay"),
            r = a.querySelector(".qs-overlay-year"),
            i = n.querySelector(".qs-controls"),
            o = n.querySelector(".qs-squares");
        e ? (a.classList.add("qs-hidden"), i.classList.remove("qs-blur"), o.classList.remove("qs-blur"), r.value = "") : (a.classList.remove("qs-hidden"), i.classList.add("qs-blur"), o.classList.add("qs-blur"), r.focus());
      }
    }

    function x(e, t, n, a) {
      var r = isNaN(+new Date().setFullYear(t.value || void 0)),
          i = r ? null : t.value;
      if (13 === (e.which || e.keyCode) || "click" === e.type) a ? b(null, n, i, a) : r || t.classList.contains("qs-disabled") || b(null, n, i, a);else if (n.calendar.contains(t)) {
        n.calendar.querySelector(".qs-submit").classList[r ? "add" : "remove"]("qs-disabled");
      }
    }

    function L(e) {
      var t = e.type,
          n = e.target,
          i = n.classList,
          o = a(r.filter(function (e) {
        var t = e.calendar,
            a = e.el;
        return t.contains(n) || a === n;
      }), 1)[0],
          s = o && o.calendar.contains(n);
      if (!(o && o.isMobile && o.disableMobile)) if ("click" === t) {
        if (!o) return r.forEach(w);
        if (o.disabled) return;
        var c = o.calendar,
            l = o.calendarContainer,
            d = o.disableYearOverlay,
            u = o.nonInput,
            h = c.querySelector(".qs-overlay-year"),
            f = !!c.querySelector(".qs-hidden"),
            v = c.querySelector(".qs-month-year").contains(n),
            y = n.dataset.monthNum;
        if (o.noPosition && !s) (l.classList.contains("qs-hidden") ? S : w)(o);else if (i.contains("qs-arrow")) b(i, o);else if (v || i.contains("qs-close")) !d && M(!f, o);else if (y) x(e, h, o, y);else {
          if (i.contains("qs-num")) {
            var p = "SPAN" === n.nodeName ? n.parentNode : n,
                D = ["qs-disabled", "qs-empty"].some(function (e) {
              return p.classList.contains(e);
            });
            return p.classList.contains("qs-active") ? m(p, o, !0) : !D && m(p, o);
          }

          i.contains("qs-submit") && !i.contains("qs-disabled") ? x(e, h, o) : u && n === o.el && S(o);
        }
      } else if ("focusin" === t && o) S(o), r.forEach(function (e) {
        return e !== o && w(e);
      });else if ("keydown" === t && o && !o.disabled) {
        var g = !o.calendar.querySelector(".qs-overlay").classList.contains("qs-hidden");
        13 === (e.which || e.keyCode) && g && s ? x(e, n, o) : 27 === (e.which || e.keyCode) && g && s && M(!0, o);
      } else if ("input" === t) {
        if (!o || !o.calendar.contains(n)) return;
        var q = o.calendar.querySelector(".qs-submit"),
            L = n.value.split("").reduce(function (e, t) {
          return e || "0" !== t ? e + (t.match(/[0-9]/) ? t : "") : "";
        }, "").slice(0, 4);
        n.value = L, q.classList[4 === L.length ? "remove" : "add"]("qs-disabled");
      }
    }

    function P() {
      S(this);
    }

    function j() {
      w(this);
    }

    function k(e, t) {
      var n = q(e),
          a = this.currentYear,
          r = this.currentMonth,
          i = this.sibling;
      if (null == e) return this.dateSelected = void 0, p(this.el, this, !0), i && (y({
        instance: this,
        deselect: !0
      }), u(i)), u(this), this;
      if (!g(e)) throw "`setDate` needs a JavaScript Date object.";
      if (this.disabledDates.some(function (e) {
        return +e == +n;
      }) || n < this.minDate || n > this.maxDate) throw "You can't manually set a date that's disabled.";
      return this.currentYear = n.getFullYear(), this.currentMonth = n.getMonth(), this.currentMonthName = this.months[n.getMonth()], this.dateSelected = n, p(this.el, this), i && (y({
        instance: this
      }), u(i, n)), (a === n.getFullYear() && r === n.getMonth() || t || i) && u(this, n), this;
    }

    function O(e) {
      return Y(this, e, !0);
    }

    function C(e) {
      return Y(this, e);
    }

    function Y(e, t, n) {
      var a = e.dateSelected,
          r = e.first,
          i = e.sibling,
          o = e.minDate,
          s = e.maxDate,
          c = q(t),
          l = n ? "Min" : "Max",
          d = function () {
        return "original".concat(l, "Date");
      },
          h = function () {
        return "".concat(l.toLowerCase(), "Date");
      },
          f = function () {
        return "set".concat(l);
      },
          v = function () {
        throw "Out-of-range date passed to ".concat(f());
      };

      if (null == t) e[d()] = void 0, i ? (i[d()] = void 0, n ? (r && !a || !r && !i.dateSelected) && (e.minDate = void 0, i.minDate = void 0) : (r && !i.dateSelected || !r && !a) && (e.maxDate = void 0, i.maxDate = void 0)) : e[h()] = void 0;else {
        if (!g(t)) throw "Invalid date passed to ".concat(f());
        i ? ((r && n && c > (a || s) || r && !n && c < (i.dateSelected || o) || !r && n && c > (i.dateSelected || s) || !r && !n && c < (a || o)) && v(), e[d()] = c, i[d()] = c, (n && (r && !a || !r && !i.dateSelected) || !n && (r && !i.dateSelected || !r && !a)) && (e[h()] = c, i[h()] = c)) : ((n && c > (a || s) || !n && c < (a || o)) && v(), e[h()] = c);
      }
      return i && u(i), u(e), e;
    }

    function N() {
      var e = this.first ? this : this.sibling,
          t = e.sibling;
      return {
        start: e.dateSelected,
        end: t.dateSelected
      };
    }

    function E() {
      var e = this,
          t = this.inlinePosition,
          n = this.parent,
          a = this.calendarContainer,
          i = this.el,
          o = this.sibling;
      t && (r.some(function (t) {
        return t !== e && t.parent === n;
      }) || n.style.setProperty("position", null));

      for (var s in a.remove(), r = r.filter(function (e) {
        return e.el !== i;
      }), o && delete o.sibling, this) delete this[s];

      r.length || l.forEach(function (e) {
        return document.removeEventListener(e, L);
      });
    }

    e.exports = function (e, t) {
      r.length || l.forEach(function (e) {
        return document.addEventListener(e, L);
      });

      var n = function (e, t) {
        var n = e;
        "string" == typeof n && (n = "#" === n[0] ? document.getElementById(n.slice(1)) : document.querySelector(n));

        var l = function (e, t) {
          if (r.some(function (e) {
            return e.el === t;
          })) throw "A datepicker already exists on that element.";
          var n = d(e);
          n.events && (n.events = n.events.reduce(function (e, t) {
            if (!g(t)) throw '"options.events" must only contain valid JavaScript Date objects.';
            return e[+q(t)] = !0, e;
          }, {}));
          ["startDate", "dateSelected", "minDate", "maxDate"].forEach(function (e) {
            var t = n[e];
            if (t && !g(t)) throw '"options.'.concat(e, '" needs to be a valid JavaScript Date object.');
            n[e] = q(t);
          });
          var o = n.position,
              l = n.maxDate,
              u = n.minDate,
              h = n.dateSelected,
              f = n.overlayPlaceholder,
              v = n.overlayButton,
              m = n.startDay,
              y = n.id;
          if (n.startDate = q(n.startDate || h || new Date()), n.disabledDates = (n.disabledDates || []).map(function (e) {
            var t = +q(e);
            if (!g(e)) throw 'You supplied an invalid date to "options.disabledDates".';
            if (t === +q(h)) throw '"disabledDates" cannot contain the same date as "dateSelected".';
            return t;
          }), n.hasOwnProperty("id") && null == y) throw "Id cannot be `null` or `undefined`";

          if (y || 0 === y) {
            var p = r.filter(function (e) {
              return e.id === y;
            });
            if (p.length > 1) throw "Only two datepickers can share an id.";
            p.length ? (n.second = !0, n.sibling = p[0]) : n.first = !0;
          }

          var b = ["tr", "tl", "br", "bl", "c"].some(function (e) {
            return o === e;
          });
          if (o && !b) throw '"options.position" must be one of the following: tl, tr, bl, br, or c.';
          if (n.position = function (e) {
            var t = a(e, 2),
                n = t[0],
                r = t[1],
                i = {};
            i[s[n]] = 1, r && (i[s[r]] = 1);
            return i;
          }(o || "bl"), l < u) throw '"maxDate" in options is less than "minDate".';

          if (h) {
            var D = function (e) {
              throw '"dateSelected" in options is '.concat(e ? "less" : "greater", ' than "').concat(e || "mac", 'Date".');
            };

            u > h && D("min"), l < h && D();
          }

          if (["onSelect", "onShow", "onHide", "onMonthChange", "formatter", "disabler"].forEach(function (e) {
            "function" != typeof n[e] && (n[e] = c);
          }), ["customDays", "customMonths", "customOverlayMonths"].forEach(function (e, t) {
            var a = n[e],
                r = t ? 12 : 7;

            if (a) {
              if (!Array.isArray(a) || a.length !== r || a.some(function (e) {
                return "string" != typeof e;
              })) throw '"'.concat(e, '" must be an array with ').concat(r, " strings.");
              n[t ? t < 2 ? "months" : "overlayMonths" : "days"] = a;
            }
          }), m && m > 0 && m < 7) {
            var w = (n.customDays || i).slice(),
                S = w.splice(0, m);
            n.customDays = w.concat(S), n.startDay = +m, n.weekendIndices = [w.length - 1, w.length];
          } else n.startDay = 0, n.weekendIndices = [6, 0];

          "string" != typeof f && delete n.overlayPlaceholder;
          "string" != typeof v && delete n.overlayButton;
          return n;
        }(t || {
          startDate: q(new Date()),
          position: "bl"
        }, n),
            u = l.startDate,
            h = l.dateSelected,
            f = l.sibling,
            v = n === document.body,
            m = v ? document.body : n.parentElement,
            y = document.createElement("div"),
            b = document.createElement("div");

        y.className = "qs-datepicker-container qs-hidden", b.className = "qs-datepicker";
        var D = {
          el: n,
          parent: m,
          nonInput: "INPUT" !== n.nodeName,
          noPosition: v,
          position: !v && l.position,
          startDate: u,
          dateSelected: h,
          disabledDates: l.disabledDates,
          minDate: l.minDate,
          maxDate: l.maxDate,
          noWeekends: !!l.noWeekends,
          weekendIndices: l.weekendIndices,
          calendarContainer: y,
          calendar: b,
          currentMonth: (u || h).getMonth(),
          currentMonthName: (l.months || o)[(u || h).getMonth()],
          currentYear: (u || h).getFullYear(),
          events: l.events || {},
          setDate: k,
          remove: E,
          setMin: O,
          setMax: C,
          show: P,
          hide: j,
          onSelect: l.onSelect,
          onShow: l.onShow,
          onHide: l.onHide,
          onMonthChange: l.onMonthChange,
          formatter: l.formatter,
          disabler: l.disabler,
          months: l.months || o,
          days: l.customDays || i,
          startDay: l.startDay,
          overlayMonths: l.overlayMonths || (l.months || o).map(function (e) {
            return e.slice(0, 3);
          }),
          overlayPlaceholder: l.overlayPlaceholder || "4-digit year",
          overlayButton: l.overlayButton || "Submit",
          disableYearOverlay: !!l.disableYearOverlay,
          disableMobile: !!l.disableMobile,
          isMobile: "ontouchstart" in window,
          alwaysShow: !!l.alwaysShow,
          id: l.id,
          showAllDates: !!l.showAllDates,
          respectDisabledReadOnly: !!l.respectDisabledReadOnly,
          first: l.first,
          second: l.second
        };

        if (f) {
          var w = f,
              M = D,
              x = w.minDate || M.minDate,
              L = w.maxDate || M.maxDate;
          M.sibling = w, w.sibling = M, w.minDate = x, w.maxDate = L, M.minDate = x, M.maxDate = L, w.originalMinDate = x, w.originalMaxDate = L, M.originalMinDate = x, M.originalMaxDate = L, w.getRange = N, M.getRange = N;
        }

        h && p(n, D);
        var Y = getComputedStyle(m).position;
        v || Y && "static" !== Y || (D.inlinePosition = !0, m.style.setProperty("position", "relative"));
        D.inlinePosition && r.forEach(function (e) {
          e.parent === D.parent && (e.inlinePosition = !0);
        });
        return r.push(D), y.appendChild(b), m.appendChild(y), D.alwaysShow && S(D), D;
      }(e, t),
          h = n.startDate,
          f = n.dateSelected,
          v = n.alwaysShow;

      if (n.second) {
        var m = n.sibling;
        y({
          instance: n,
          deselect: !f
        }), y({
          instance: m,
          deselect: !m.dateSelected
        }), u(m);
      }

      return u(n, h || f), v && D(n), n;
    };
  }, function (e, t, n) {}]);
});

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || new Function("return this")();
} catch (e) {
  // This works if the window reference is available
  if (typeof window === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;

/***/ }),

/***/ "./src/js/material-input.js":
/*!**********************************!*\
  !*** ./src/js/material-input.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var imask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! imask */ "./node_modules/imask/dist/imask.esm.js");
/* harmony import */ var js_datepicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-datepicker */ "./node_modules/js-datepicker/dist/datepicker.min.js");
/* harmony import */ var js_datepicker__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_datepicker__WEBPACK_IMPORTED_MODULE_3__);






/**
 * Simple class fo creating
 * materialize inputs and textareas
 *
 * @class MaterialInput
 */

var MaterialInput =
/*#__PURE__*/
function () {
  /**
   *Creates an instance of MaterialInput.
   * @param {*} element
   * @param {*} options
   * @memberof MaterialInput
   */
  function MaterialInput(element, options) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, MaterialInput);

    this.element = element;
    this.options = options;
    this.mask = undefined;
    this.date = undefined;
    this.addEvents(element);

    if (this.value) {
      this.updateValue(this.value);
    }

    if (options.phone) {
      this.addPhoneMask();
    }

    if (options.date) {
      this.addDatePicker();
    }

    if (options.textarea) {
      this.value = element.querySelector("textarea").value;
      this.addAutoResize();
    } else {
      this.value = element.querySelector("input").value;
      this.updateValue(this.value);
    }
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(MaterialInput, [{
    key: "addEvents",
    value: function addEvents(el) {
      var _this = this;

      el.addEventListener("input", function (event) {
        return _this.updateValue(event.target.value);
      });
    }
  }, {
    key: "addPhoneMask",
    value: function addPhoneMask() {
      var input = this.element.querySelector("input");
      this.mask = Object(imask__WEBPACK_IMPORTED_MODULE_2__["default"])(input, {
        mask: "+{7}(000)000-00-00" // lazy: false,
        // placeholderChar: "*"

      });
    }
  }, {
    key: "addDatePicker",
    value: function addDatePicker() {
      var _this2 = this;

      var input = this.element.querySelector("input");
      this.date = js_datepicker__WEBPACK_IMPORTED_MODULE_3___default()(input, {
        formatter: function formatter(input, date, instance) {
          input.value = date.toLocaleString('ru', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          });
        },
        customDays: ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'],
        customMonths: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        overlayButton: 'Перейти',
        overlayPlaceholder: 'Введите год (4 цифры)',
        onSelect: function onSelect(instance, date) {
          _this2.updateValue(date);
        }
      });
    }
  }, {
    key: "addAutoResize",
    value: function addAutoResize() {
      var _this3 = this;

      var textarea = this.element.querySelector("textarea");
      textarea.addEventListener("input", function (event) {
        return _this3.autoResize(textarea);
      });
      window.addEventListener("resize", function (event) {
        return _this3.autoResize(textarea);
      });
    }
  }, {
    key: "autoResize",
    value: function autoResize(element) {
      var outerHeight = parseInt(window.getComputedStyle(element).height, 10);
      var diff = outerHeight - element.clientHeight;
      element.style.height = "auto";
      element.style.height = element.scrollHeight + diff + "px";
    }
  }, {
    key: "updateValue",
    value: function updateValue(value) {
      console.log(value);

      if (value) {
        this.element.classList.add(this.options.activeClass);
      } else {
        this.element.classList.remove(this.options.activeClass);
      }
    }
  }]);

  return MaterialInput;
}();

/* harmony default export */ __webpack_exports__["default"] = (MaterialInput);

/***/ }),

/***/ 5:
/*!****************************************!*\
  !*** multi ./src/js/material-input.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Nikita\projects\venskijPekar\src\js\material-input.js */"./src/js/material-input.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ltYXNrL2Rpc3QvaW1hc2suZXNtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9qcy1kYXRlcGlja2VyL2Rpc3QvZGF0ZXBpY2tlci5taW4uanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbWF0ZXJpYWwtaW5wdXQuanMiXSwibmFtZXMiOlsiX2NsYXNzQ2FsbENoZWNrIiwiaW5zdGFuY2UiLCJDb25zdHJ1Y3RvciIsIlR5cGVFcnJvciIsIm1vZHVsZSIsImV4cG9ydHMiLCJfZGVmaW5lUHJvcGVydGllcyIsInRhcmdldCIsInByb3BzIiwiaSIsImxlbmd0aCIsImRlc2NyaXB0b3IiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImtleSIsIl9jcmVhdGVDbGFzcyIsInByb3RvUHJvcHMiLCJzdGF0aWNQcm9wcyIsInByb3RvdHlwZSIsIl90eXBlb2YiLCJvYmoiLCJTeW1ib2wiLCJpdGVyYXRvciIsImNvbnN0cnVjdG9yIiwiX2RlZmluZVByb3BlcnR5IiwidmFsdWUiLCJfaW5oZXJpdHMiLCJzdWJDbGFzcyIsInN1cGVyQ2xhc3MiLCJjcmVhdGUiLCJfc2V0UHJvdG90eXBlT2YiLCJfZ2V0UHJvdG90eXBlT2YiLCJvIiwic2V0UHJvdG90eXBlT2YiLCJnZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsInAiLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSIsInNvdXJjZSIsImV4Y2x1ZGVkIiwic291cmNlS2V5cyIsImtleXMiLCJpbmRleE9mIiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwic291cmNlU3ltYm9sS2V5cyIsInByb3BlcnR5SXNFbnVtZXJhYmxlIiwiY2FsbCIsIl9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQiLCJzZWxmIiwiUmVmZXJlbmNlRXJyb3IiLCJfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiIsIl9zdXBlclByb3BCYXNlIiwib2JqZWN0IiwicHJvcGVydHkiLCJoYXNPd25Qcm9wZXJ0eSIsIl9nZXQiLCJyZWNlaXZlciIsIlJlZmxlY3QiLCJnZXQiLCJiYXNlIiwiZGVzYyIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsInNldCIsIl9zZXQiLCJpc1N0cmljdCIsInMiLCJFcnJvciIsIl9zbGljZWRUb0FycmF5IiwiYXJyIiwiX2FycmF5V2l0aEhvbGVzIiwiX2l0ZXJhYmxlVG9BcnJheUxpbWl0IiwiX25vbkl0ZXJhYmxlUmVzdCIsIkFycmF5IiwiaXNBcnJheSIsIl9hcnIiLCJfbiIsIl9kIiwiX2UiLCJ1bmRlZmluZWQiLCJfaSIsIl9zIiwibmV4dCIsImRvbmUiLCJwdXNoIiwiZXJyIiwiaXNTdHJpbmciLCJzdHIiLCJTdHJpbmciLCJESVJFQ1RJT04iLCJOT05FIiwiTEVGVCIsIkZPUkNFX0xFRlQiLCJSSUdIVCIsIkZPUkNFX1JJR0hUIiwiZm9yY2VEaXJlY3Rpb24iLCJkaXJlY3Rpb24iLCJlc2NhcGVSZWdFeHAiLCJyZXBsYWNlIiwib2JqZWN0SW5jbHVkZXMiLCJiIiwiYSIsImFyckEiLCJhcnJCIiwiZGF0ZUEiLCJEYXRlIiwiZGF0ZUIiLCJnZXRUaW1lIiwicmVnZXhwQSIsIlJlZ0V4cCIsInJlZ2V4cEIiLCJ0b1N0cmluZyIsImciLCJ3aW5kb3ciLCJnbG9iYWwiLCJBY3Rpb25EZXRhaWxzIiwiY3Vyc29yUG9zIiwib2xkVmFsdWUiLCJvbGRTZWxlY3Rpb24iLCJzbGljZSIsInN0YXJ0Q2hhbmdlUG9zIiwic3RhcnQiLCJNYXRoIiwibWluIiwic3Vic3RyIiwiaW5zZXJ0ZWRDb3VudCIsIm1heCIsImVuZCIsInJlbW92ZWRDb3VudCIsInN1YnN0cmluZyIsIkNoYW5nZURldGFpbHMiLCJkZXRhaWxzIiwiYXNzaWduIiwiaW5zZXJ0ZWQiLCJyYXdJbnNlcnRlZCIsInNraXAiLCJ0YWlsU2hpZnQiLCJhZ2dyZWdhdGUiLCJDb250aW51b3VzVGFpbERldGFpbHMiLCJhcmd1bWVudHMiLCJmcm9tIiwic3RvcCIsImV4dGVuZCIsInRhaWwiLCJhcHBlbmRUbyIsIm1hc2tlZCIsImFwcGVuZCIsIl9hcHBlbmRQbGFjZWhvbGRlciIsInNoaWZ0QmVmb3JlIiwicG9zIiwic2hpZnRDaGFyIiwic3RhdGUiLCJNYXNrZWQiLCJvcHRzIiwiX3ZhbHVlIiwiX3VwZGF0ZSIsImlzSW5pdGlhbGl6ZWQiLCJ1cGRhdGVPcHRpb25zIiwid2l0aFZhbHVlUmVmcmVzaCIsImJpbmQiLCJyZXNldCIsInJlc29sdmUiLCJpbnB1dCIsImRvQ29tbWl0IiwibmVhcmVzdElucHV0UG9zIiwiZXh0cmFjdElucHV0IiwiZnJvbVBvcyIsInRvUG9zIiwiZXh0cmFjdFRhaWwiLCJhcHBlbmRUYWlsIiwiX2FwcGVuZENoYXJSYXciLCJjaCIsImZsYWdzIiwiZG9QcmVwYXJlIiwiX2FwcGVuZENoYXIiLCJjaGVja1RhaWwiLCJjb25zaXN0ZW50U3RhdGUiLCJjb25zaXN0ZW50VGFpbCIsImFwcGVuZGVkIiwiZG9WYWxpZGF0ZSIsImJlZm9yZVRhaWxTdGF0ZSIsIm92ZXJ3cml0ZSIsInRhaWxEZXRhaWxzIiwiX2JlZm9yZVRhaWxTdGF0ZSIsImNpIiwicmVtb3ZlIiwiZm4iLCJfcmVmcmVzaGluZyIsInVubWFza2VkIiwidW5tYXNrZWRWYWx1ZSIsInJldCIsInByZXBhcmUiLCJ2YWxpZGF0ZSIsInBhcmVudCIsImNvbW1pdCIsInNwbGljZSIsImRlbGV0ZUNvdW50IiwicmVtb3ZlRGlyZWN0aW9uIiwidGFpbFBvcyIsImNoYW5nZURldGFpbHMiLCJyYXciLCJtYXNrZWRDbGFzcyIsIm1hc2siLCJJTWFzayIsIk1hc2tlZFJlZ0V4cCIsIk1hc2tlZFBhdHRlcm4iLCJNYXNrZWREYXRlIiwiTnVtYmVyIiwiTWFza2VkTnVtYmVyIiwiTWFza2VkRHluYW1pYyIsIkZ1bmN0aW9uIiwiTWFza2VkRnVuY3Rpb24iLCJjb25zb2xlIiwid2FybiIsImNyZWF0ZU1hc2siLCJNYXNrZWRDbGFzcyIsIkRFRkFVTFRfSU5QVVRfREVGSU5JVElPTlMiLCJQYXR0ZXJuSW5wdXREZWZpbml0aW9uIiwiYmxvY2tPcHRzIiwiX2lzRmlsbGVkIiwiaXNPcHRpb25hbCIsImxhenkiLCJwbGFjZWhvbGRlckNoYXIiLCJCb29sZWFuIiwiX3RoaXMkbWFza2VkIiwiYXBwbHkiLCJfdGhpcyRtYXNrZWQyIiwiX3RoaXMkbWFza2VkMyIsIm1pblBvcyIsIm1heFBvcyIsImJvdW5kUG9zIiwiaXNDb21wbGV0ZSIsIl90aGlzJG1hc2tlZDQiLCJfdGhpcyRwYXJlbnQiLCJQYXR0ZXJuRml4ZWREZWZpbml0aW9uIiwiX2lzUmF3SW5wdXQiLCJjaGFyIiwiaXNSZXNvbHZlZCIsImlzVW5tYXNraW5nIiwiQ2h1bmtzVGFpbERldGFpbHMiLCJjaHVua3MiLCJtYXAiLCJqb2luIiwidGFpbENodW5rIiwibGFzdENodW5rIiwiZXh0ZW5kTGFzdCIsImZpcnN0VGFpbENodW5rIiwic2hpZnQiLCJibG9ja0luZGV4IiwiY2h1bmsiLCJsYXN0QmxvY2tJdGVyIiwiX21hcFBvc1RvQmxvY2siLCJjaHVua0Jsb2NrIiwiaW5kZXgiLCJfc3RvcHMiLCJfYmxvY2tzIiwicmVtYWluQ2hhcnMiLCJjaHVua1NoaWZ0UG9zIiwiYyIsImNzdGF0ZSIsIl9NYXNrZWQiLCJkZWZpbml0aW9ucyIsIkRFRkFVTFRTIiwiX3JlYnVpbGRNYXNrIiwiX3RoaXMiLCJkZWZzIiwiX21hc2tlZEJsb2NrcyIsInBhdHRlcm4iLCJ1bm1hc2tpbmdCbG9jayIsIm9wdGlvbmFsQmxvY2siLCJibG9ja3MiLCJfcmV0IiwiYk5hbWVzIiwiZmlsdGVyIiwiYk5hbWUiLCJzb3J0IiwibWFza2VkQmxvY2siLCJfaXNJbnB1dCIsIlNUT1BfQ0hBUiIsIkVTQ0FQRV9DSEFSIiwiZGVmIiwiZm9yRWFjaCIsImJsb2NrSXRlciIsImJpIiwiX2Jsb2NrIiwiYmxvY2tEZXRhaWxzIiwiX3RoaXMyIiwiY2h1bmtUYWlsIiwiX2ZvckVhY2hCbG9ja3NJblJhbmdlIiwiYkZyb21Qb3MiLCJiVG9Qb3MiLCJibG9ja0NodW5rIiwiX2ZpbmRTdG9wQmVmb3JlIiwiX2Jsb2NrU3RhcnRQb3MiLCJfIiwic3RvcEJlZm9yZSIsInNpIiwidG9CbG9ja0luZGV4IiwiX3RoaXMzIiwic3RhcnRCbG9ja0l0ZXIiLCJzdGFydEJsb2NrSW5kZXgiLCJlbmRCbG9ja0luZGV4IiwiYXJncyIsImJEZXRhaWxzIiwiYWNjVmFsIiwiX2Jsb2NrMiIsImJsb2NrU3RhcnRQb3MiLCJvZmZzZXQiLCJyZWR1Y2UiLCJmcm9tQmxvY2tJdGVyIiwidG9CbG9ja0l0ZXIiLCJpc1NhbWVCbG9jayIsImZyb21CbG9ja1N0YXJ0UG9zIiwiZnJvbUJsb2NrRW5kUG9zIiwicmVtb3ZlRGV0YWlscyIsImJlZ2luQmxvY2tEYXRhIiwiYmVnaW5CbG9ja09mZnNldCIsImJlZ2luQmxvY2tJbmRleCIsImJlZ2luQmxvY2siLCJiZWdpbkJsb2NrQ3Vyc29yUG9zIiwiY3Vyc29yQXRSaWdodCIsImN1cnNvckF0TGVmdCIsInNlYXJjaEJsb2NrSW5kZXgiLCJibG9ja0luZGV4QXRMZWZ0IiwiYmxvY2tBdExlZnQiLCJibG9ja0lucHV0UG9zIiwiZmlyc3RJbnB1dEF0UmlnaHQiLCJibG9ja0F0UmlnaHQiLCJfYmxvY2tJbnB1dFBvcyIsIl9iaSIsIl9ibG9jazMiLCJfYmxvY2tJbnB1dFBvczIiLCJmaXJzdEZpbGxlZEJsb2NrSW5kZXhBdFJpZ2h0IiwiX2JpMiIsImZpbGxlZEJsb2NrIiwiX2Jsb2NrSW5wdXRQb3MzIiwiZmlyc3RGaWxsZWRJbnB1dEJsb2NrSW5kZXgiLCJmaXJzdEVtcHR5SW5wdXRCbG9ja0luZGV4IiwiX2JpMyIsIl9ibG9jazQiLCJfYmxvY2tJbnB1dFBvczQiLCJfYmk0IiwiX2Jsb2NrNSIsIl9ibG9ja0lucHV0UG9zNSIsImJsb2NrQWxpZ25lZFBvcyIsImlzSW5wdXQiLCJfYmk1IiwiX2Jsb2NrNiIsIl9ibG9ja0lucHV0UG9zNiIsImZpcnN0SW5wdXRCbG9ja0FsaWduZWRJbmRleCIsImZpcnN0SW5wdXRCbG9ja0FsaWduZWRQb3MiLCJfYmk2IiwiX2Jsb2NrNyIsIl9ibG9ja0lucHV0UG9zNyIsIl9iaTciLCJfYmxvY2s4IiwiX2Jsb2NrSW5wdXRQb3M4IiwiX2JpOCIsIl9ibG9jazkiLCJfYmxvY2tJbnB1dFBvczkiLCJhbGlnbmVkUG9zIiwibmFtZSIsIm1hc2tlZEJsb2NrcyIsIl90aGlzNCIsImluZGljZXMiLCJnaSIsIm1hc2tlZFN0YXRlIiwiZXZlcnkiLCJJbnB1dERlZmluaXRpb24iLCJGaXhlZERlZmluaXRpb24iLCJibG9jayIsIk1hc2tlZFJhbmdlIiwiX01hc2tlZFBhdHRlcm4iLCJ0byIsIm1heExlbmd0aCIsImZyb21TdHIiLCJwYWRTdGFydCIsInRvU3RyIiwic2FtZUNoYXJzQ291bnQiLCJyZXBlYXQiLCJib3VuZGFyaWVzIiwibWluc3RyIiwibWF4c3RyIiwiX3JlZiIsIm1hdGNoIiwiX3JlZjIiLCJwbGFjZWhvbGRlciIsIm51bSIsInBhZEVuZCIsImF1dG9maXgiLCJ2YWwiLCJwcmVwU3RyIiwibmV4dFZhbCIsIl90aGlzJGJvdW5kYXJpZXMiLCJfdGhpcyRib3VuZGFyaWVzMiIsIl9nZXQyIiwiZmlyc3ROb25aZXJvIiwic2VhcmNoIiwiX21hdGNoRnJvbSIsIl90aGlzJGJvdW5kYXJpZXMzIiwiX3RoaXMkYm91bmRhcmllczQiLCJfbGVuIiwiX2tleSIsImNvbmNhdCIsIkdFVF9ERUZBVUxUX0JMT0NLUyIsIlkiLCJnZXRGdWxsWWVhciIsIm0iLCJnZXRNb250aCIsImQiLCJnZXREYXRlIiwiYmsiLCJkYXRlIiwiaXNEYXRlRXhpc3QiLCJmb3JtYXQiLCJwYXJzZSIsImRheSIsIm1vbnRoIiwieWVhciIsIl9zdHIkc3BsaXQiLCJzcGxpdCIsIl9zdHIkc3BsaXQyIiwiTWFza0VsZW1lbnQiLCJzZWxlY3QiLCJzZWxlY3Rpb25TdGFydCIsInNlbGVjdGlvbkVuZCIsIl91bnNhZmVTZWxlY3QiLCJlIiwiYmluZEV2ZW50cyIsImhhbmRsZXJzIiwidW5iaW5kRXZlbnRzIiwiX3Vuc2FmZVNlbGVjdGlvblN0YXJ0IiwiX3Vuc2FmZVNlbGVjdGlvbkVuZCIsIkhUTUxNYXNrRWxlbWVudCIsIl9NYXNrRWxlbWVudCIsIl9oYW5kbGVycyIsInNldFNlbGVjdGlvblJhbmdlIiwiZXZlbnQiLCJfdG9nZ2xlRXZlbnRIYW5kbGVyIiwiRVZFTlRTX01BUCIsImhhbmRsZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsImRvY3VtZW50IiwiYWN0aXZlRWxlbWVudCIsInNlbGVjdGlvbkNoYW5nZSIsImRyb3AiLCJjbGljayIsImZvY3VzIiwiSW5wdXRNYXNrIiwiZWwiLCJfbGlzdGVuZXJzIiwiX3VubWFza2VkVmFsdWUiLCJfc2F2ZVNlbGVjdGlvbiIsIl9vbklucHV0IiwiX29uQ2hhbmdlIiwiX29uRHJvcCIsIl9vbkZvY3VzIiwiYWxpZ25DdXJzb3IiLCJhbGlnbkN1cnNvckZyaWVuZGx5IiwiX2JpbmRFdmVudHMiLCJ1cGRhdGVWYWx1ZSIsIm1hc2tFcXVhbHMiLCJfdW5iaW5kRXZlbnRzIiwiX2ZpcmVFdmVudCIsImV2IiwibGlzdGVuZXJzIiwibCIsIl9zZWxlY3Rpb24iLCJ1cGRhdGVDb250cm9sIiwibmV3VW5tYXNrZWRWYWx1ZSIsIm5ld1ZhbHVlIiwiaXNDaGFuZ2VkIiwiX2ZpcmVDaGFuZ2VFdmVudHMiLCJyZXN0T3B0cyIsInVwZGF0ZU1hc2siLCJ1cGRhdGVPcHRzIiwidXBkYXRlQ3Vyc29yIiwiX2RlbGF5VXBkYXRlQ3Vyc29yIiwiX2Fib3J0VXBkYXRlQ3Vyc29yIiwiX2NoYW5naW5nQ3Vyc29yUG9zIiwiX2N1cnNvckNoYW5naW5nIiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsIm9uIiwib2ZmIiwiaEluZGV4Iiwib2xkUmF3VmFsdWUiLCJyYXdJbnB1dFZhbHVlIiwicmVtb3ZlZCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiZGVzdHJveSIsInR5cGVkVmFsdWUiLCJpc0FjdGl2ZSIsIk1hc2tlZEVudW0iLCJlbnVtIiwic29tZSIsIl91cGRhdGVSZWdFeHBzIiwiYWxsb3dOZWdhdGl2ZSIsIm1pZElucHV0IiwibWlkIiwic2NhbGUiLCJyYWRpeCIsIl9udW1iZXJSZWdFeHBJbnB1dCIsIl9udW1iZXJSZWdFeHAiLCJfbWFwVG9SYWRpeFJlZ0V4cCIsIm1hcFRvUmFkaXgiLCJfdGhvdXNhbmRzU2VwYXJhdG9yUmVnRXhwIiwidGhvdXNhbmRzU2VwYXJhdG9yIiwiX3JlbW92ZVRob3VzYW5kc1NlcGFyYXRvcnMiLCJfaW5zZXJ0VGhvdXNhbmRzU2VwYXJhdG9ycyIsInBhcnRzIiwiX3NlcGFyYXRvcnNDb3VudCIsImV4dGVuZE9uU2VwYXJhdG9ycyIsImNvdW50IiwiX3NlcGFyYXRvcnNDb3VudEZyb21TbGljZSIsIl90aGlzJF9hZGp1c3RSYW5nZVdpdCIsIl9hZGp1c3RSYW5nZVdpdGhTZXBhcmF0b3JzIiwiX3RoaXMkX2FkanVzdFJhbmdlV2l0MiIsInByZXZCZWZvcmVUYWlsVmFsdWUiLCJwcmV2QmVmb3JlVGFpbFNlcGFyYXRvcnNDb3VudCIsImFwcGVuZERldGFpbHMiLCJiZWZvcmVUYWlsVmFsdWUiLCJiZWZvcmVUYWlsU2VwYXJhdG9yc0NvdW50IiwiX2ZpbmRTZXBhcmF0b3JBcm91bmQiLCJzZWFyY2hGcm9tIiwic2VwYXJhdG9yUG9zIiwic2VwYXJhdG9yQXJvdW5kRnJvbVBvcyIsInNlcGFyYXRvckFyb3VuZFRvUG9zIiwiX3RoaXMkX2FkanVzdFJhbmdlV2l0MyIsIl90aGlzJF9hZGp1c3RSYW5nZVdpdDQiLCJ2YWx1ZUJlZm9yZVBvcyIsInZhbHVlQWZ0ZXJQb3MiLCJzZXBhcmF0b3JBdExlZnRQb3MiLCJzZXBhcmF0b3JBdExlZnRFbmRQb3MiLCJzZXBhcmF0b3JBdFJpZ2h0UG9zIiwicmVnZXhwIiwidmFsaWQiLCJ0ZXN0IiwibnVtYmVyIiwiaXNOYU4iLCJ2YWxpZG51bSIsImZvcm1hdHRlZCIsIm5vcm1hbGl6ZVplcm9zIiwiX25vcm1hbGl6ZVplcm9zIiwicGFkRnJhY3Rpb25hbFplcm9zIiwiX3BhZEZyYWN0aW9uYWxaZXJvcyIsInNpZ24iLCJ6ZXJvcyIsInNpZ25lZCIsImN1cnJlbnRNYXNrIiwiY29tcGlsZWRNYXNrcyIsIl9hcHBseURpc3BhdGNoIiwiX3RoaXMkY3VycmVudE1hc2siLCJwcmV2VmFsdWVCZWZvcmVUYWlsIiwiaW5wdXRWYWx1ZSIsImluc2VydFZhbHVlIiwiX3Jhd0lucHV0VmFsdWUiLCJ0YWlsVmFsdWUiLCJwcmV2TWFzayIsInByZXZNYXNrU3RhdGUiLCJkb0Rpc3BhdGNoIiwiZGlzcGF0Y2giLCJfdGhpcyRjdXJyZW50TWFzazIiLCJfdGhpcyRjdXJyZW50TWFzazMiLCJfdGhpcyRjdXJyZW50TWFzazQiLCJfdGhpcyRjdXJyZW50TWFzazUiLCJfZ2V0MyIsIl9sZW4yIiwiX2tleTIiLCJfdGhpcyRjdXJyZW50TWFzazYiLCJfZ2V0NCIsIl9sZW4zIiwiX2tleTMiLCJjdXJyZW50TWFza1JlZiIsIm1pIiwiaW5wdXRzIiwid2VpZ2h0IiwiaTEiLCJpMiIsInQiLCJuIiwiciIsInRvU3RyaW5nVGFnIiwiX19lc01vZHVsZSIsImRlZmF1bHQiLCJyZXR1cm4iLCJ1IiwiY2FsZW5kYXIiLCJxdWVyeVNlbGVjdG9yIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJjdXJyZW50WWVhciIsImN1cnJlbnRNb250aCIsImlubmVySFRNTCIsImgiLCJmIiwidiIsIk0iLCJtb250aHMiLCJkYXRlU2VsZWN0ZWQiLCJtYXhEYXRlIiwibWluRGF0ZSIsInNob3dBbGxEYXRlcyIsImRheXMiLCJkaXNhYmxlZERhdGVzIiwiZGlzYWJsZXIiLCJub1dlZWtlbmRzIiwic3RhcnREYXkiLCJ3ZWVrZW5kSW5kaWNlcyIsImV2ZW50cyIsInkiLCJnZXRSYW5nZSIsIkQiLCJ3IiwicSIsInNldERhdGUiLCJTIiwiZ2V0RGF5Iiwic2V0TW9udGgiLCJ4IiwiTCIsIlAiLCJqIiwiayIsIk8iLCJDIiwiTiIsIkUiLCJBIiwiSSIsIlQiLCJGIiwiaW5jbHVkZXMiLCJSIiwidW5zaGlmdCIsIm92ZXJsYXlQbGFjZWhvbGRlciIsIm92ZXJsYXlCdXR0b24iLCJvdmVybGF5TW9udGhzIiwib25TZWxlY3QiLCJyZXNwZWN0RGlzYWJsZWRSZWFkT25seSIsInNpYmxpbmciLCJ0ZXh0Q29udGVudCIsImRpc2FibGVkIiwicmVhZE9ubHkiLCJhZGQiLCJkZXNlbGVjdCIsImZpcnN0Iiwib3JpZ2luYWxNaW5EYXRlIiwib3JpZ2luYWxNYXhEYXRlIiwibm9uSW5wdXQiLCJmb3JtYXR0ZXIiLCJ0b0RhdGVTdHJpbmciLCJjdXJyZW50TW9udGhOYW1lIiwib25Nb250aENoYW5nZSIsIm5vUG9zaXRpb24iLCJjYWxlbmRhckNvbnRhaW5lciIsInBvc2l0aW9uIiwidG9wIiwicmlnaHQiLCJjZW50ZXJlZCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInNjcm9sbFRvcCIsImhlaWdodCIsImxlZnQiLCJ3aWR0aCIsInN0eWxlIiwic2V0UHJvcGVydHkiLCJhbHdheXNTaG93Iiwib25IaWRlIiwib25TaG93Iiwic2V0RnVsbFllYXIiLCJ3aGljaCIsImtleUNvZGUiLCJ0eXBlIiwiaXNNb2JpbGUiLCJkaXNhYmxlTW9iaWxlIiwiZGlzYWJsZVllYXJPdmVybGF5IiwiZGF0YXNldCIsIm1vbnRoTnVtIiwibm9kZU5hbWUiLCJwYXJlbnROb2RlIiwidG9Mb3dlckNhc2UiLCJpbmxpbmVQb3NpdGlvbiIsImdldEVsZW1lbnRCeUlkIiwiaWQiLCJzdGFydERhdGUiLCJzZWNvbmQiLCJjdXN0b21EYXlzIiwiYm9keSIsInBhcmVudEVsZW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwic2V0TWluIiwic2V0TWF4Iiwic2hvdyIsImhpZGUiLCJnZXRDb21wdXRlZFN0eWxlIiwiYXBwZW5kQ2hpbGQiLCJNYXRlcmlhbElucHV0IiwiZWxlbWVudCIsIm9wdGlvbnMiLCJhZGRFdmVudHMiLCJwaG9uZSIsImFkZFBob25lTWFzayIsImFkZERhdGVQaWNrZXIiLCJ0ZXh0YXJlYSIsImFkZEF1dG9SZXNpemUiLCJJbWFzayIsImRhdGVwaWNrZXIiLCJ0b0xvY2FsZVN0cmluZyIsImN1c3RvbU1vbnRocyIsImF1dG9SZXNpemUiLCJvdXRlckhlaWdodCIsInBhcnNlSW50IiwiZGlmZiIsImNsaWVudEhlaWdodCIsInNjcm9sbEhlaWdodCIsImxvZyIsImFjdGl2ZUNsYXNzIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkEsU0FBU0EsZUFBVCxDQUF5QkMsUUFBekIsRUFB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O0FBQ0g7QUFDSjs7Ozs7O0FBR1VwQiw0RUFBZixFIiwiZmlsZSI6Im1hdGVyaWFsLWlucHV0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDUpO1xuIiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NDYWxsQ2hlY2s7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jcmVhdGVDbGFzczsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBfdHlwZW9mID0gZnVuY3Rpb24gKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBfdHlwZW9mID0gZnVuY3Rpb24gKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO1xuICB9XG5cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7XG59XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gIF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gICAgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTtcbiAgfTtcbiAgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTtcbn1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgby5fX3Byb3RvX18gPSBwO1xuICAgIHJldHVybiBvO1xuICB9O1xuXG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG59XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSB7fTtcbiAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICB2YXIga2V5LCBpO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAga2V5ID0gc291cmNlS2V5c1tpXTtcbiAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcblxuICB2YXIgdGFyZ2V0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCk7XG5cbiAgdmFyIGtleSwgaTtcblxuICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgIHZhciBzb3VyY2VTeW1ib2xLZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IHNvdXJjZVN5bWJvbEtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGtleSA9IHNvdXJjZVN5bWJvbEtleXNbaV07XG4gICAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoc291cmNlLCBrZXkpKSBjb250aW51ZTtcbiAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7XG4gIGlmIChzZWxmID09PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gc2VsZjtcbn1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkge1xuICBpZiAoY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHtcbiAgICByZXR1cm4gY2FsbDtcbiAgfVxuXG4gIHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpO1xufVxuXG5mdW5jdGlvbiBfc3VwZXJQcm9wQmFzZShvYmplY3QsIHByb3BlcnR5KSB7XG4gIHdoaWxlICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpKSB7XG4gICAgb2JqZWN0ID0gX2dldFByb3RvdHlwZU9mKG9iamVjdCk7XG4gICAgaWYgKG9iamVjdCA9PT0gbnVsbCkgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gb2JqZWN0O1xufVxuXG5mdW5jdGlvbiBfZ2V0KHRhcmdldCwgcHJvcGVydHksIHJlY2VpdmVyKSB7XG4gIGlmICh0eXBlb2YgUmVmbGVjdCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBSZWZsZWN0LmdldCkge1xuICAgIF9nZXQgPSBSZWZsZWN0LmdldDtcbiAgfSBlbHNlIHtcbiAgICBfZ2V0ID0gZnVuY3Rpb24gX2dldCh0YXJnZXQsIHByb3BlcnR5LCByZWNlaXZlcikge1xuICAgICAgdmFyIGJhc2UgPSBfc3VwZXJQcm9wQmFzZSh0YXJnZXQsIHByb3BlcnR5KTtcblxuICAgICAgaWYgKCFiYXNlKSByZXR1cm47XG4gICAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoYmFzZSwgcHJvcGVydHkpO1xuXG4gICAgICBpZiAoZGVzYy5nZXQpIHtcbiAgICAgICAgcmV0dXJuIGRlc2MuZ2V0LmNhbGwocmVjZWl2ZXIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGVzYy52YWx1ZTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF9nZXQodGFyZ2V0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIgfHwgdGFyZ2V0KTtcbn1cblxuZnVuY3Rpb24gc2V0KHRhcmdldCwgcHJvcGVydHksIHZhbHVlLCByZWNlaXZlcikge1xuICBpZiAodHlwZW9mIFJlZmxlY3QgIT09IFwidW5kZWZpbmVkXCIgJiYgUmVmbGVjdC5zZXQpIHtcbiAgICBzZXQgPSBSZWZsZWN0LnNldDtcbiAgfSBlbHNlIHtcbiAgICBzZXQgPSBmdW5jdGlvbiBzZXQodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUsIHJlY2VpdmVyKSB7XG4gICAgICB2YXIgYmFzZSA9IF9zdXBlclByb3BCYXNlKHRhcmdldCwgcHJvcGVydHkpO1xuXG4gICAgICB2YXIgZGVzYztcblxuICAgICAgaWYgKGJhc2UpIHtcbiAgICAgICAgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoYmFzZSwgcHJvcGVydHkpO1xuXG4gICAgICAgIGlmIChkZXNjLnNldCkge1xuICAgICAgICAgIGRlc2Muc2V0LmNhbGwocmVjZWl2ZXIsIHZhbHVlKTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmICghZGVzYy53cml0YWJsZSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihyZWNlaXZlciwgcHJvcGVydHkpO1xuXG4gICAgICBpZiAoZGVzYykge1xuICAgICAgICBpZiAoIWRlc2Mud3JpdGFibGUpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBkZXNjLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZWNlaXZlciwgcHJvcGVydHksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgX2RlZmluZVByb3BlcnR5KHJlY2VpdmVyLCBwcm9wZXJ0eSwgdmFsdWUpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHNldCh0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSwgcmVjZWl2ZXIpO1xufVxuXG5mdW5jdGlvbiBfc2V0KHRhcmdldCwgcHJvcGVydHksIHZhbHVlLCByZWNlaXZlciwgaXNTdHJpY3QpIHtcbiAgdmFyIHMgPSBzZXQodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUsIHJlY2VpdmVyIHx8IHRhcmdldCk7XG5cbiAgaWYgKCFzICYmIGlzU3RyaWN0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdmYWlsZWQgdG8gc2V0IHByb3BlcnR5Jyk7XG4gIH1cblxuICByZXR1cm4gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkge1xuICByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpO1xufVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7XG59XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHtcbiAgdmFyIF9hcnIgPSBbXTtcbiAgdmFyIF9uID0gdHJ1ZTtcbiAgdmFyIF9kID0gZmFsc2U7XG4gIHZhciBfZSA9IHVuZGVmaW5lZDtcblxuICB0cnkge1xuICAgIGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHtcbiAgICAgIF9hcnIucHVzaChfcy52YWx1ZSk7XG5cbiAgICAgIGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhaztcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIF9kID0gdHJ1ZTtcbiAgICBfZSA9IGVycjtcbiAgfSBmaW5hbGx5IHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoX2QpIHRocm93IF9lO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBfYXJyO1xufVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZVwiKTtcbn1cblxuLyoqIENoZWNrcyBpZiB2YWx1ZSBpcyBzdHJpbmcgKi9cbmZ1bmN0aW9uIGlzU3RyaW5nKHN0cikge1xuICByZXR1cm4gdHlwZW9mIHN0ciA9PT0gJ3N0cmluZycgfHwgc3RyIGluc3RhbmNlb2YgU3RyaW5nO1xufVxuLyoqXHJcbiAgRGlyZWN0aW9uXHJcbiAgQHByb3Age3N0cmluZ30gTk9ORVxyXG4gIEBwcm9wIHtzdHJpbmd9IExFRlRcclxuICBAcHJvcCB7c3RyaW5nfSBGT1JDRV9MRUZUXHJcbiAgQHByb3Age3N0cmluZ30gUklHSFRcclxuICBAcHJvcCB7c3RyaW5nfSBGT1JDRV9SSUdIVFxyXG4qL1xuXG52YXIgRElSRUNUSU9OID0ge1xuICBOT05FOiAnTk9ORScsXG4gIExFRlQ6ICdMRUZUJyxcbiAgRk9SQ0VfTEVGVDogJ0ZPUkNFX0xFRlQnLFxuICBSSUdIVDogJ1JJR0hUJyxcbiAgRk9SQ0VfUklHSFQ6ICdGT1JDRV9SSUdIVCdcbiAgLyoqXHJcbiAgICBEaXJlY3Rpb25cclxuICAgIEBlbnVtIHtzdHJpbmd9XHJcbiAgKi9cblxufTtcbi8qKiAqL1xuXG5mdW5jdGlvbiBmb3JjZURpcmVjdGlvbihkaXJlY3Rpb24pIHtcbiAgc3dpdGNoIChkaXJlY3Rpb24pIHtcbiAgICBjYXNlIERJUkVDVElPTi5MRUZUOlxuICAgICAgcmV0dXJuIERJUkVDVElPTi5GT1JDRV9MRUZUO1xuXG4gICAgY2FzZSBESVJFQ1RJT04uUklHSFQ6XG4gICAgICByZXR1cm4gRElSRUNUSU9OLkZPUkNFX1JJR0hUO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBkaXJlY3Rpb247XG4gIH1cbn1cbi8qKiBFc2NhcGVzIHJlZ3VsYXIgZXhwcmVzc2lvbiBjb250cm9sIGNoYXJzICovXG5cbmZ1bmN0aW9uIGVzY2FwZVJlZ0V4cChzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oWy4qKz9ePSE6JHt9KCl8W1xcXS9cXFxcXSkvZywgJ1xcXFwkMScpO1xufSAvLyBjbG9uZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vZXBvYmVyZXpraW4vZmFzdC1kZWVwLWVxdWFsIHdpdGggc21hbGwgY2hhbmdlc1xuXG5mdW5jdGlvbiBvYmplY3RJbmNsdWRlcyhiLCBhKSB7XG4gIGlmIChhID09PSBiKSByZXR1cm4gdHJ1ZTtcbiAgdmFyIGFyckEgPSBBcnJheS5pc0FycmF5KGEpLFxuICAgICAgYXJyQiA9IEFycmF5LmlzQXJyYXkoYiksXG4gICAgICBpO1xuXG4gIGlmIChhcnJBICYmIGFyckIpIHtcbiAgICBpZiAoYS5sZW5ndGggIT0gYi5sZW5ndGgpIHJldHVybiBmYWxzZTtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBhLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoIW9iamVjdEluY2x1ZGVzKGFbaV0sIGJbaV0pKSByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAoYXJyQSAhPSBhcnJCKSByZXR1cm4gZmFsc2U7XG5cbiAgaWYgKGEgJiYgYiAmJiBfdHlwZW9mKGEpID09PSAnb2JqZWN0JyAmJiBfdHlwZW9mKGIpID09PSAnb2JqZWN0Jykge1xuICAgIHZhciBkYXRlQSA9IGEgaW5zdGFuY2VvZiBEYXRlLFxuICAgICAgICBkYXRlQiA9IGIgaW5zdGFuY2VvZiBEYXRlO1xuICAgIGlmIChkYXRlQSAmJiBkYXRlQikgcmV0dXJuIGEuZ2V0VGltZSgpID09IGIuZ2V0VGltZSgpO1xuICAgIGlmIChkYXRlQSAhPSBkYXRlQikgcmV0dXJuIGZhbHNlO1xuICAgIHZhciByZWdleHBBID0gYSBpbnN0YW5jZW9mIFJlZ0V4cCxcbiAgICAgICAgcmVnZXhwQiA9IGIgaW5zdGFuY2VvZiBSZWdFeHA7XG4gICAgaWYgKHJlZ2V4cEEgJiYgcmVnZXhwQikgcmV0dXJuIGEudG9TdHJpbmcoKSA9PSBiLnRvU3RyaW5nKCk7XG4gICAgaWYgKHJlZ2V4cEEgIT0gcmVnZXhwQikgcmV0dXJuIGZhbHNlO1xuICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoYSk7IC8vIGlmIChrZXlzLmxlbmd0aCAhPT0gT2JqZWN0LmtleXMoYikubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwga2V5c1tpXSkpIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKCFvYmplY3RJbmNsdWRlcyhiW2tleXNbaV1dLCBhW2tleXNbaV1dKSkgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2UgaWYgKGEgJiYgYiAmJiB0eXBlb2YgYSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgYiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBhLnRvU3RyaW5nKCkgPT09IGIudG9TdHJpbmcoKTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmICovXG5cbnZhciBnID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93IHx8IHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnICYmIGdsb2JhbC5nbG9iYWwgPT09IGdsb2JhbCAmJiBnbG9iYWwgfHwgdHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYuc2VsZiA9PT0gc2VsZiAmJiBzZWxmIHx8IHt9O1xuLyogZXNsaW50LWVuYWJsZSBuby11bmRlZiAqL1xuXG4vKiogU2VsZWN0aW9uIHJhbmdlICovXG5cbi8qKiBQcm92aWRlcyBkZXRhaWxzIG9mIGNoYW5naW5nIGlucHV0ICovXG5cbnZhciBBY3Rpb25EZXRhaWxzID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgLyoqIEN1cnJlbnQgaW5wdXQgdmFsdWUgKi9cblxuICAvKiogQ3VycmVudCBjdXJzb3IgcG9zaXRpb24gKi9cblxuICAvKiogT2xkIGlucHV0IHZhbHVlICovXG5cbiAgLyoqIE9sZCBzZWxlY3Rpb24gKi9cbiAgZnVuY3Rpb24gQWN0aW9uRGV0YWlscyh2YWx1ZSwgY3Vyc29yUG9zLCBvbGRWYWx1ZSwgb2xkU2VsZWN0aW9uKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEFjdGlvbkRldGFpbHMpO1xuXG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMuY3Vyc29yUG9zID0gY3Vyc29yUG9zO1xuICAgIHRoaXMub2xkVmFsdWUgPSBvbGRWYWx1ZTtcbiAgICB0aGlzLm9sZFNlbGVjdGlvbiA9IG9sZFNlbGVjdGlvbjsgLy8gZG91YmxlIGNoZWNrIGlmIGxlZnQgcGFydCB3YXMgY2hhbmdlZCAoYXV0b2ZpbGxpbmcsIG90aGVyIG5vbi1zdGFuZGFyZCBpbnB1dCB0cmlnZ2VycylcblxuICAgIHdoaWxlICh0aGlzLnZhbHVlLnNsaWNlKDAsIHRoaXMuc3RhcnRDaGFuZ2VQb3MpICE9PSB0aGlzLm9sZFZhbHVlLnNsaWNlKDAsIHRoaXMuc3RhcnRDaGFuZ2VQb3MpKSB7XG4gICAgICAtLXRoaXMub2xkU2VsZWN0aW9uLnN0YXJ0O1xuICAgIH1cbiAgfVxuICAvKipcclxuICAgIFN0YXJ0IGNoYW5naW5nIHBvc2l0aW9uXHJcbiAgICBAcmVhZG9ubHlcclxuICAqL1xuXG5cbiAgX2NyZWF0ZUNsYXNzKEFjdGlvbkRldGFpbHMsIFt7XG4gICAga2V5OiBcInN0YXJ0Q2hhbmdlUG9zXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gTWF0aC5taW4odGhpcy5jdXJzb3JQb3MsIHRoaXMub2xkU2VsZWN0aW9uLnN0YXJ0KTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgIEluc2VydGVkIHN5bWJvbHMgY291bnRcclxuICAgICAgQHJlYWRvbmx5XHJcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiaW5zZXJ0ZWRDb3VudFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuY3Vyc29yUG9zIC0gdGhpcy5zdGFydENoYW5nZVBvcztcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgIEluc2VydGVkIHN5bWJvbHNcclxuICAgICAgQHJlYWRvbmx5XHJcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiaW5zZXJ0ZWRcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLnZhbHVlLnN1YnN0cih0aGlzLnN0YXJ0Q2hhbmdlUG9zLCB0aGlzLmluc2VydGVkQ291bnQpO1xuICAgIH1cbiAgICAvKipcclxuICAgICAgUmVtb3ZlZCBzeW1ib2xzIGNvdW50XHJcbiAgICAgIEByZWFkb25seVxyXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInJlbW92ZWRDb3VudFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgLy8gTWF0aC5tYXggZm9yIG9wcG9zaXRlIG9wZXJhdGlvblxuICAgICAgcmV0dXJuIE1hdGgubWF4KHRoaXMub2xkU2VsZWN0aW9uLmVuZCAtIHRoaXMuc3RhcnRDaGFuZ2VQb3MgfHwgLy8gZm9yIERlbGV0ZVxuICAgICAgdGhpcy5vbGRWYWx1ZS5sZW5ndGggLSB0aGlzLnZhbHVlLmxlbmd0aCwgMCk7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICBSZW1vdmVkIHN5bWJvbHNcclxuICAgICAgQHJlYWRvbmx5XHJcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwicmVtb3ZlZFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMub2xkVmFsdWUuc3Vic3RyKHRoaXMuc3RhcnRDaGFuZ2VQb3MsIHRoaXMucmVtb3ZlZENvdW50KTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgIFVuY2hhbmdlZCBoZWFkIHN5bWJvbHNcclxuICAgICAgQHJlYWRvbmx5XHJcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiaGVhZFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMudmFsdWUuc3Vic3RyaW5nKDAsIHRoaXMuc3RhcnRDaGFuZ2VQb3MpO1xuICAgIH1cbiAgICAvKipcclxuICAgICAgVW5jaGFuZ2VkIHRhaWwgc3ltYm9sc1xyXG4gICAgICBAcmVhZG9ubHlcclxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJ0YWlsXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy52YWx1ZS5zdWJzdHJpbmcodGhpcy5zdGFydENoYW5nZVBvcyArIHRoaXMuaW5zZXJ0ZWRDb3VudCk7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICBSZW1vdmUgZGlyZWN0aW9uXHJcbiAgICAgIEByZWFkb25seVxyXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInJlbW92ZURpcmVjdGlvblwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgaWYgKCF0aGlzLnJlbW92ZWRDb3VudCB8fCB0aGlzLmluc2VydGVkQ291bnQpIHJldHVybiBESVJFQ1RJT04uTk9ORTsgLy8gYWxpZ24gcmlnaHQgaWYgZGVsZXRlIGF0IHJpZ2h0IG9yIGlmIHJhbmdlIHJlbW92ZWQgKGV2ZW50IHdpdGggYmFja3NwYWNlKVxuXG4gICAgICByZXR1cm4gdGhpcy5vbGRTZWxlY3Rpb24uZW5kID09PSB0aGlzLmN1cnNvclBvcyB8fCB0aGlzLm9sZFNlbGVjdGlvbi5zdGFydCA9PT0gdGhpcy5jdXJzb3JQb3MgPyBESVJFQ1RJT04uUklHSFQgOiBESVJFQ1RJT04uTEVGVDtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gQWN0aW9uRGV0YWlscztcbn0oKTtcblxuLyoqXHJcbiAgUHJvdmlkZXMgZGV0YWlscyBvZiBjaGFuZ2luZyBtb2RlbCB2YWx1ZVxyXG4gIEBwYXJhbSB7T2JqZWN0fSBbZGV0YWlsc11cclxuICBAcGFyYW0ge3N0cmluZ30gW2RldGFpbHMuaW5zZXJ0ZWRdIC0gSW5zZXJ0ZWQgc3ltYm9sc1xyXG4gIEBwYXJhbSB7Ym9vbGVhbn0gW2RldGFpbHMuc2tpcF0gLSBDYW4gc2tpcCBjaGFyc1xyXG4gIEBwYXJhbSB7bnVtYmVyfSBbZGV0YWlscy5yZW1vdmVDb3VudF0gLSBSZW1vdmVkIHN5bWJvbHMgY291bnRcclxuICBAcGFyYW0ge251bWJlcn0gW2RldGFpbHMudGFpbFNoaWZ0XSAtIEFkZGl0aW9uYWwgb2Zmc2V0IGlmIGFueSBjaGFuZ2VzIG9jY3VycmVkIGJlZm9yZSB0YWlsXHJcbiovXG52YXIgQ2hhbmdlRGV0YWlscyA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIC8qKiBJbnNlcnRlZCBzeW1ib2xzICovXG5cbiAgLyoqIENhbiBza2lwIGNoYXJzICovXG5cbiAgLyoqIEFkZGl0aW9uYWwgb2Zmc2V0IGlmIGFueSBjaGFuZ2VzIG9jY3VycmVkIGJlZm9yZSB0YWlsICovXG5cbiAgLyoqIFJhdyBpbnNlcnRlZCBpcyB1c2VkIGJ5IGR5bmFtaWMgbWFzayAqL1xuICBmdW5jdGlvbiBDaGFuZ2VEZXRhaWxzKGRldGFpbHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ2hhbmdlRGV0YWlscyk7XG5cbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIHtcbiAgICAgIGluc2VydGVkOiAnJyxcbiAgICAgIHJhd0luc2VydGVkOiAnJyxcbiAgICAgIHNraXA6IGZhbHNlLFxuICAgICAgdGFpbFNoaWZ0OiAwXG4gICAgfSwgZGV0YWlscyk7XG4gIH1cbiAgLyoqXHJcbiAgICBBZ2dyZWdhdGUgY2hhbmdlc1xyXG4gICAgQHJldHVybnMge0NoYW5nZURldGFpbHN9IGB0aGlzYFxyXG4gICovXG5cblxuICBfY3JlYXRlQ2xhc3MoQ2hhbmdlRGV0YWlscywgW3tcbiAgICBrZXk6IFwiYWdncmVnYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFnZ3JlZ2F0ZShkZXRhaWxzKSB7XG4gICAgICB0aGlzLnJhd0luc2VydGVkICs9IGRldGFpbHMucmF3SW5zZXJ0ZWQ7XG4gICAgICB0aGlzLnNraXAgPSB0aGlzLnNraXAgfHwgZGV0YWlscy5za2lwO1xuICAgICAgdGhpcy5pbnNlcnRlZCArPSBkZXRhaWxzLmluc2VydGVkO1xuICAgICAgdGhpcy50YWlsU2hpZnQgKz0gZGV0YWlscy50YWlsU2hpZnQ7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqIFRvdGFsIG9mZnNldCBjb25zaWRlcmluZyBhbGwgY2hhbmdlcyAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwib2Zmc2V0XCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy50YWlsU2hpZnQgKyB0aGlzLmluc2VydGVkLmxlbmd0aDtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gQ2hhbmdlRGV0YWlscztcbn0oKTtcblxuLyoqIFByb3ZpZGVzIGRldGFpbHMgb2YgY29udGludW91cyBleHRyYWN0ZWQgdGFpbCAqL1xudmFyIENvbnRpbnVvdXNUYWlsRGV0YWlscyA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIC8qKiBUYWlsIHZhbHVlIGFzIHN0cmluZyAqL1xuXG4gIC8qKiBUYWlsIHN0YXJ0IHBvc2l0aW9uICovXG5cbiAgLyoqIFN0YXJ0IHBvc2l0aW9uICovXG4gIGZ1bmN0aW9uIENvbnRpbnVvdXNUYWlsRGV0YWlscygpIHtcbiAgICB2YXIgdmFsdWUgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6ICcnO1xuICAgIHZhciBmcm9tID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAwO1xuICAgIHZhciBzdG9wID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgPyBhcmd1bWVudHNbMl0gOiB1bmRlZmluZWQ7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ29udGludW91c1RhaWxEZXRhaWxzKTtcblxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLmZyb20gPSBmcm9tO1xuICAgIHRoaXMuc3RvcCA9IHN0b3A7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoQ29udGludW91c1RhaWxEZXRhaWxzLCBbe1xuICAgIGtleTogXCJ0b1N0cmluZ1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJleHRlbmRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZXh0ZW5kKHRhaWwpIHtcbiAgICAgIHRoaXMudmFsdWUgKz0gU3RyaW5nKHRhaWwpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJhcHBlbmRUb1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhcHBlbmRUbyhtYXNrZWQpIHtcbiAgICAgIHJldHVybiBtYXNrZWQuYXBwZW5kKHRoaXMudG9TdHJpbmcoKSwge1xuICAgICAgICB0YWlsOiB0cnVlXG4gICAgICB9KS5hZ2dyZWdhdGUobWFza2VkLl9hcHBlbmRQbGFjZWhvbGRlcigpKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2hpZnRCZWZvcmVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2hpZnRCZWZvcmUocG9zKSB7XG4gICAgICBpZiAodGhpcy5mcm9tID49IHBvcyB8fCAhdGhpcy52YWx1ZS5sZW5ndGgpIHJldHVybiAnJztcbiAgICAgIHZhciBzaGlmdENoYXIgPSB0aGlzLnZhbHVlWzBdO1xuICAgICAgdGhpcy52YWx1ZSA9IHRoaXMudmFsdWUuc2xpY2UoMSk7XG4gICAgICByZXR1cm4gc2hpZnRDaGFyO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzdGF0ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdmFsdWU6IHRoaXMudmFsdWUsXG4gICAgICAgIGZyb206IHRoaXMuZnJvbSxcbiAgICAgICAgc3RvcDogdGhpcy5zdG9wXG4gICAgICB9O1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQoc3RhdGUpIHtcbiAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgc3RhdGUpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBDb250aW51b3VzVGFpbERldGFpbHM7XG59KCk7XG5cbi8qKiBQcm92aWRlcyBjb21tb24gbWFza2luZyBzdHVmZiAqL1xudmFyIE1hc2tlZCA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIC8vICRTaGFwZTxNYXNrZWRPcHRpb25zPjsgVE9ETyBhZnRlciBmaXggaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL2Zsb3cvaXNzdWVzLzQ3NzNcblxuICAvKiogQHR5cGUge01hc2t9ICovXG5cbiAgLyoqICovXG4gIC8vICRGbG93Rml4TWUgbm8gaWRlYXNcblxuICAvKiogVHJhbnNmb3JtcyB2YWx1ZSBiZWZvcmUgbWFzayBwcm9jZXNzaW5nICovXG5cbiAgLyoqIFZhbGlkYXRlcyBpZiB2YWx1ZSBpcyBhY2NlcHRhYmxlICovXG5cbiAgLyoqIERvZXMgYWRkaXRpb25hbCBwcm9jZXNzaW5nIGluIHRoZSBlbmQgb2YgZWRpdGluZyAqL1xuXG4gIC8qKiBFbmFibGUgY2hhcmFjdGVycyBvdmVyd3JpdGluZyAqL1xuXG4gIC8qKiAqL1xuICBmdW5jdGlvbiBNYXNrZWQob3B0cykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNYXNrZWQpO1xuXG4gICAgdGhpcy5fdmFsdWUgPSAnJztcblxuICAgIHRoaXMuX3VwZGF0ZShvcHRzKTtcblxuICAgIHRoaXMuaXNJbml0aWFsaXplZCA9IHRydWU7XG4gIH1cbiAgLyoqIFNldHMgYW5kIGFwcGxpZXMgbmV3IG9wdGlvbnMgKi9cblxuXG4gIF9jcmVhdGVDbGFzcyhNYXNrZWQsIFt7XG4gICAga2V5OiBcInVwZGF0ZU9wdGlvbnNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdXBkYXRlT3B0aW9ucyhvcHRzKSB7XG4gICAgICBpZiAoIU9iamVjdC5rZXlzKG9wdHMpLmxlbmd0aCkgcmV0dXJuO1xuICAgICAgdGhpcy53aXRoVmFsdWVSZWZyZXNoKHRoaXMuX3VwZGF0ZS5iaW5kKHRoaXMsIG9wdHMpKTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgIFNldHMgbmV3IG9wdGlvbnNcclxuICAgICAgQHByb3RlY3RlZFxyXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIl91cGRhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX3VwZGF0ZShvcHRzKSB7XG4gICAgICBPYmplY3QuYXNzaWduKHRoaXMsIG9wdHMpO1xuICAgIH1cbiAgICAvKiogTWFzayBzdGF0ZSAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwicmVzZXRcIixcblxuICAgIC8qKiBSZXNldHMgdmFsdWUgKi9cbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgICB0aGlzLl92YWx1ZSA9ICcnO1xuICAgIH1cbiAgICAvKiogKi9cblxuICB9LCB7XG4gICAga2V5OiBcInJlc29sdmVcIixcblxuICAgIC8qKiBSZXNvbHZlIG5ldyB2YWx1ZSAqL1xuICAgIHZhbHVlOiBmdW5jdGlvbiByZXNvbHZlKHZhbHVlKSB7XG4gICAgICB0aGlzLnJlc2V0KCk7XG4gICAgICB0aGlzLmFwcGVuZCh2YWx1ZSwge1xuICAgICAgICBpbnB1dDogdHJ1ZVxuICAgICAgfSwgJycpO1xuICAgICAgdGhpcy5kb0NvbW1pdCgpO1xuICAgICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gICAgfVxuICAgIC8qKiAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwibmVhcmVzdElucHV0UG9zXCIsXG5cbiAgICAvKiogRmluZHMgbmVhcmVzdCBpbnB1dCBwb3NpdGlvbiBpbiBkaXJlY3Rpb24gKi9cbiAgICB2YWx1ZTogZnVuY3Rpb24gbmVhcmVzdElucHV0UG9zKGN1cnNvclBvcywgZGlyZWN0aW9uKSB7XG4gICAgICByZXR1cm4gY3Vyc29yUG9zO1xuICAgIH1cbiAgICAvKiogRXh0cmFjdHMgdmFsdWUgaW4gcmFuZ2UgY29uc2lkZXJpbmcgZmxhZ3MgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImV4dHJhY3RJbnB1dFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBleHRyYWN0SW5wdXQoKSB7XG4gICAgICB2YXIgZnJvbVBvcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogMDtcbiAgICAgIHZhciB0b1BvcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogdGhpcy52YWx1ZS5sZW5ndGg7XG4gICAgICByZXR1cm4gdGhpcy52YWx1ZS5zbGljZShmcm9tUG9zLCB0b1Bvcyk7XG4gICAgfVxuICAgIC8qKiBFeHRyYWN0cyB0YWlsIGluIHJhbmdlICovXG5cbiAgfSwge1xuICAgIGtleTogXCJleHRyYWN0VGFpbFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBleHRyYWN0VGFpbCgpIHtcbiAgICAgIHZhciBmcm9tUG9zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAwO1xuICAgICAgdmFyIHRvUG9zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB0aGlzLnZhbHVlLmxlbmd0aDtcbiAgICAgIHJldHVybiBuZXcgQ29udGludW91c1RhaWxEZXRhaWxzKHRoaXMuZXh0cmFjdElucHV0KGZyb21Qb3MsIHRvUG9zKSwgZnJvbVBvcyk7XG4gICAgfVxuICAgIC8qKiBBcHBlbmRzIHRhaWwgKi9cbiAgICAvLyAkRmxvd0ZpeE1lIG5vIGlkZWFzXG5cbiAgfSwge1xuICAgIGtleTogXCJhcHBlbmRUYWlsXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFwcGVuZFRhaWwodGFpbCkge1xuICAgICAgaWYgKGlzU3RyaW5nKHRhaWwpKSB0YWlsID0gbmV3IENvbnRpbnVvdXNUYWlsRGV0YWlscyhTdHJpbmcodGFpbCkpO1xuICAgICAgcmV0dXJuIHRhaWwuYXBwZW5kVG8odGhpcyk7XG4gICAgfVxuICAgIC8qKiBBcHBlbmRzIGNoYXIgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIl9hcHBlbmRDaGFyUmF3XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9hcHBlbmRDaGFyUmF3KGNoKSB7XG4gICAgICB2YXIgZmxhZ3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgICAgY2ggPSB0aGlzLmRvUHJlcGFyZShjaCwgZmxhZ3MpO1xuICAgICAgaWYgKCFjaCkgcmV0dXJuIG5ldyBDaGFuZ2VEZXRhaWxzKCk7XG4gICAgICB0aGlzLl92YWx1ZSArPSBjaDtcbiAgICAgIHJldHVybiBuZXcgQ2hhbmdlRGV0YWlscyh7XG4gICAgICAgIGluc2VydGVkOiBjaCxcbiAgICAgICAgcmF3SW5zZXJ0ZWQ6IGNoXG4gICAgICB9KTtcbiAgICB9XG4gICAgLyoqIEFwcGVuZHMgY2hhciAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiX2FwcGVuZENoYXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2FwcGVuZENoYXIoY2gpIHtcbiAgICAgIHZhciBmbGFncyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgICB2YXIgY2hlY2tUYWlsID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgPyBhcmd1bWVudHNbMl0gOiB1bmRlZmluZWQ7XG4gICAgICB2YXIgY29uc2lzdGVudFN0YXRlID0gdGhpcy5zdGF0ZTtcblxuICAgICAgdmFyIGRldGFpbHMgPSB0aGlzLl9hcHBlbmRDaGFyUmF3KGNoLCBmbGFncyk7XG5cbiAgICAgIGlmIChkZXRhaWxzLmluc2VydGVkKSB7XG4gICAgICAgIHZhciBjb25zaXN0ZW50VGFpbDtcbiAgICAgICAgdmFyIGFwcGVuZGVkID0gdGhpcy5kb1ZhbGlkYXRlKGZsYWdzKSAhPT0gZmFsc2U7XG5cbiAgICAgICAgaWYgKGFwcGVuZGVkICYmIGNoZWNrVGFpbCAhPSBudWxsKSB7XG4gICAgICAgICAgLy8gdmFsaWRhdGlvbiBvaywgY2hlY2sgdGFpbFxuICAgICAgICAgIHZhciBiZWZvcmVUYWlsU3RhdGUgPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgICAgaWYgKHRoaXMub3ZlcndyaXRlKSB7XG4gICAgICAgICAgICBjb25zaXN0ZW50VGFpbCA9IGNoZWNrVGFpbC5zdGF0ZTtcbiAgICAgICAgICAgIGNoZWNrVGFpbC5zaGlmdEJlZm9yZSh0aGlzLnZhbHVlLmxlbmd0aCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIHRhaWxEZXRhaWxzID0gdGhpcy5hcHBlbmRUYWlsKGNoZWNrVGFpbCk7XG4gICAgICAgICAgYXBwZW5kZWQgPSB0YWlsRGV0YWlscy5yYXdJbnNlcnRlZCA9PT0gY2hlY2tUYWlsLnRvU3RyaW5nKCk7IC8vIGlmIG9rLCByb2xsYmFjayBzdGF0ZSBhZnRlciB0YWlsXG5cbiAgICAgICAgICBpZiAoYXBwZW5kZWQgJiYgdGFpbERldGFpbHMuaW5zZXJ0ZWQpIHRoaXMuc3RhdGUgPSBiZWZvcmVUYWlsU3RhdGU7XG4gICAgICAgIH0gLy8gcmV2ZXJ0IGFsbCBpZiBzb21ldGhpbmcgd2VudCB3cm9uZ1xuXG5cbiAgICAgICAgaWYgKCFhcHBlbmRlZCkge1xuICAgICAgICAgIGRldGFpbHMucmF3SW5zZXJ0ZWQgPSBkZXRhaWxzLmluc2VydGVkID0gJyc7XG4gICAgICAgICAgdGhpcy5zdGF0ZSA9IGNvbnNpc3RlbnRTdGF0ZTtcbiAgICAgICAgICBpZiAoY2hlY2tUYWlsICYmIGNvbnNpc3RlbnRUYWlsKSBjaGVja1RhaWwuc3RhdGUgPSBjb25zaXN0ZW50VGFpbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGV0YWlscztcbiAgICB9XG4gICAgLyoqIEFwcGVuZHMgb3B0aW9uYWwgcGxhY2Vob2xkZXIgYXQgZW5kICovXG5cbiAgfSwge1xuICAgIGtleTogXCJfYXBwZW5kUGxhY2Vob2xkZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2FwcGVuZFBsYWNlaG9sZGVyKCkge1xuICAgICAgcmV0dXJuIG5ldyBDaGFuZ2VEZXRhaWxzKCk7XG4gICAgfVxuICAgIC8qKiBBcHBlbmRzIHN5bWJvbHMgY29uc2lkZXJpbmcgZmxhZ3MgKi9cbiAgICAvLyAkRmxvd0ZpeE1lIG5vIGlkZWFzXG5cbiAgfSwge1xuICAgIGtleTogXCJhcHBlbmRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYXBwZW5kKHN0ciwgZmxhZ3MsIHRhaWwpIHtcbiAgICAgIGlmICghaXNTdHJpbmcoc3RyKSkgdGhyb3cgbmV3IEVycm9yKCd2YWx1ZSBzaG91bGQgYmUgc3RyaW5nJyk7XG4gICAgICB2YXIgZGV0YWlscyA9IG5ldyBDaGFuZ2VEZXRhaWxzKCk7XG4gICAgICB2YXIgY2hlY2tUYWlsID0gaXNTdHJpbmcodGFpbCkgPyBuZXcgQ29udGludW91c1RhaWxEZXRhaWxzKFN0cmluZyh0YWlsKSkgOiB0YWlsO1xuICAgICAgaWYgKGZsYWdzLnRhaWwpIGZsYWdzLl9iZWZvcmVUYWlsU3RhdGUgPSB0aGlzLnN0YXRlO1xuXG4gICAgICBmb3IgKHZhciBjaSA9IDA7IGNpIDwgc3RyLmxlbmd0aDsgKytjaSkge1xuICAgICAgICBkZXRhaWxzLmFnZ3JlZ2F0ZSh0aGlzLl9hcHBlbmRDaGFyKHN0cltjaV0sIGZsYWdzLCBjaGVja1RhaWwpKTtcbiAgICAgIH0gLy8gYXBwZW5kIHRhaWwgYnV0IGFnZ3JlZ2F0ZSBvbmx5IHRhaWxTaGlmdFxuXG5cbiAgICAgIGlmIChjaGVja1RhaWwgIT0gbnVsbCkge1xuICAgICAgICBkZXRhaWxzLnRhaWxTaGlmdCArPSB0aGlzLmFwcGVuZFRhaWwoY2hlY2tUYWlsKS50YWlsU2hpZnQ7IC8vIFRPRE8gaXQncyBhIGdvb2QgaWRlYSB0byBjbGVhciBzdGF0ZSBhZnRlciBhcHBlbmRpbmcgZW5kc1xuICAgICAgICAvLyBidXQgaXQgY2F1c2VzIGJ1Z3Mgd2hlbiBvbmUgYXBwZW5kIGNhbGxzIGFub3RoZXIgKHdoZW4gZHluYW1pYyBkaXNwYXRjaCBzZXQgcmF3SW5wdXRWYWx1ZSlcbiAgICAgICAgLy8gdGhpcy5fcmVzZXRCZWZvcmVUYWlsU3RhdGUoKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRldGFpbHM7XG4gICAgfVxuICAgIC8qKiAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwicmVtb3ZlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHZhciBmcm9tUG9zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAwO1xuICAgICAgdmFyIHRvUG9zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB0aGlzLnZhbHVlLmxlbmd0aDtcbiAgICAgIHRoaXMuX3ZhbHVlID0gdGhpcy52YWx1ZS5zbGljZSgwLCBmcm9tUG9zKSArIHRoaXMudmFsdWUuc2xpY2UodG9Qb3MpO1xuICAgICAgcmV0dXJuIG5ldyBDaGFuZ2VEZXRhaWxzKCk7XG4gICAgfVxuICAgIC8qKiBDYWxscyBmdW5jdGlvbiBhbmQgcmVhcHBsaWVzIGN1cnJlbnQgdmFsdWUgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIndpdGhWYWx1ZVJlZnJlc2hcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gd2l0aFZhbHVlUmVmcmVzaChmbikge1xuICAgICAgaWYgKHRoaXMuX3JlZnJlc2hpbmcgfHwgIXRoaXMuaXNJbml0aWFsaXplZCkgcmV0dXJuIGZuKCk7XG4gICAgICB0aGlzLl9yZWZyZXNoaW5nID0gdHJ1ZTtcbiAgICAgIHZhciB1bm1hc2tlZCA9IHRoaXMudW5tYXNrZWRWYWx1ZTtcbiAgICAgIHZhciB2YWx1ZSA9IHRoaXMudmFsdWU7XG4gICAgICB2YXIgcmV0ID0gZm4oKTsgLy8gdHJ5IHRvIHVwZGF0ZSB3aXRoIHJhdyB2YWx1ZSBmaXJzdCB0byBrZWVwIGZpeGVkIGNoYXJzXG5cbiAgICAgIGlmICh0aGlzLnJlc29sdmUodmFsdWUpICE9PSB2YWx1ZSkge1xuICAgICAgICAvLyBvciBmYWxsYmFjayB0byB1bm1hc2tlZFxuICAgICAgICB0aGlzLnVubWFza2VkVmFsdWUgPSB1bm1hc2tlZDtcbiAgICAgIH1cblxuICAgICAgZGVsZXRlIHRoaXMuX3JlZnJlc2hpbmc7XG4gICAgICByZXR1cm4gcmV0O1xuICAgIH1cbiAgICAvKipcclxuICAgICAgUHJlcGFyZXMgc3RyaW5nIGJlZm9yZSBtYXNrIHByb2Nlc3NpbmdcclxuICAgICAgQHByb3RlY3RlZFxyXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImRvUHJlcGFyZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkb1ByZXBhcmUoc3RyKSB7XG4gICAgICB2YXIgZmxhZ3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgICAgcmV0dXJuIHRoaXMucHJlcGFyZSA/IHRoaXMucHJlcGFyZShzdHIsIHRoaXMsIGZsYWdzKSA6IHN0cjtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgIFZhbGlkYXRlcyBpZiB2YWx1ZSBpcyBhY2NlcHRhYmxlXHJcbiAgICAgIEBwcm90ZWN0ZWRcclxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJkb1ZhbGlkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRvVmFsaWRhdGUoZmxhZ3MpIHtcbiAgICAgIHJldHVybiAoIXRoaXMudmFsaWRhdGUgfHwgdGhpcy52YWxpZGF0ZSh0aGlzLnZhbHVlLCB0aGlzLCBmbGFncykpICYmICghdGhpcy5wYXJlbnQgfHwgdGhpcy5wYXJlbnQuZG9WYWxpZGF0ZShmbGFncykpO1xuICAgIH1cbiAgICAvKipcclxuICAgICAgRG9lcyBhZGRpdGlvbmFsIHByb2Nlc3NpbmcgaW4gdGhlIGVuZCBvZiBlZGl0aW5nXHJcbiAgICAgIEBwcm90ZWN0ZWRcclxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJkb0NvbW1pdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkb0NvbW1pdCgpIHtcbiAgICAgIGlmICh0aGlzLmNvbW1pdCkgdGhpcy5jb21taXQodGhpcy52YWx1ZSwgdGhpcyk7XG4gICAgfVxuICAgIC8qKiAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwic3BsaWNlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNwbGljZShzdGFydCwgZGVsZXRlQ291bnQsIGluc2VydGVkLCByZW1vdmVEaXJlY3Rpb24pIHtcbiAgICAgIHZhciB0YWlsUG9zID0gc3RhcnQgKyBkZWxldGVDb3VudDtcbiAgICAgIHZhciB0YWlsID0gdGhpcy5leHRyYWN0VGFpbCh0YWlsUG9zKTtcbiAgICAgIHZhciBzdGFydENoYW5nZVBvcyA9IHRoaXMubmVhcmVzdElucHV0UG9zKHN0YXJ0LCByZW1vdmVEaXJlY3Rpb24pO1xuICAgICAgdmFyIGNoYW5nZURldGFpbHMgPSBuZXcgQ2hhbmdlRGV0YWlscyh7XG4gICAgICAgIHRhaWxTaGlmdDogc3RhcnRDaGFuZ2VQb3MgLSBzdGFydCAvLyBhZGp1c3QgdGFpbFNoaWZ0IGlmIHN0YXJ0IHdhcyBhbGlnbmVkXG5cbiAgICAgIH0pLmFnZ3JlZ2F0ZSh0aGlzLnJlbW92ZShzdGFydENoYW5nZVBvcykpLmFnZ3JlZ2F0ZSh0aGlzLmFwcGVuZChpbnNlcnRlZCwge1xuICAgICAgICBpbnB1dDogdHJ1ZVxuICAgICAgfSwgdGFpbCkpO1xuICAgICAgcmV0dXJuIGNoYW5nZURldGFpbHM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInN0YXRlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBfdmFsdWU6IHRoaXMudmFsdWVcbiAgICAgIH07XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldChzdGF0ZSkge1xuICAgICAgdGhpcy5fdmFsdWUgPSBzdGF0ZS5fdmFsdWU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInZhbHVlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2YWx1ZSkge1xuICAgICAgdGhpcy5yZXNvbHZlKHZhbHVlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidW5tYXNrZWRWYWx1ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2YWx1ZSkge1xuICAgICAgdGhpcy5yZXNldCgpO1xuICAgICAgdGhpcy5hcHBlbmQodmFsdWUsIHt9LCAnJyk7XG4gICAgICB0aGlzLmRvQ29tbWl0KCk7XG4gICAgfVxuICAgIC8qKiAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwidHlwZWRWYWx1ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMudW5tYXNrZWRWYWx1ZTtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHZhbHVlKSB7XG4gICAgICB0aGlzLnVubWFza2VkVmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gICAgLyoqIFZhbHVlIHRoYXQgaW5jbHVkZXMgcmF3IHVzZXIgaW5wdXQgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInJhd0lucHV0VmFsdWVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmV4dHJhY3RJbnB1dCgwLCB0aGlzLnZhbHVlLmxlbmd0aCwge1xuICAgICAgICByYXc6IHRydWVcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsdWUpIHtcbiAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgIHRoaXMuYXBwZW5kKHZhbHVlLCB7XG4gICAgICAgIHJhdzogdHJ1ZVxuICAgICAgfSwgJycpO1xuICAgICAgdGhpcy5kb0NvbW1pdCgpO1xuICAgIH1cbiAgICAvKiogKi9cblxuICB9LCB7XG4gICAga2V5OiBcImlzQ29tcGxldGVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBNYXNrZWQ7XG59KCk7XG5cbi8qKiBHZXQgTWFza2VkIGNsYXNzIGJ5IG1hc2sgdHlwZSAqL1xuZnVuY3Rpb24gbWFza2VkQ2xhc3MobWFzaykge1xuICBpZiAobWFzayA9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdtYXNrIHByb3BlcnR5IHNob3VsZCBiZSBkZWZpbmVkJyk7XG4gIH1cblxuICBpZiAobWFzayBpbnN0YW5jZW9mIFJlZ0V4cCkgcmV0dXJuIGcuSU1hc2suTWFza2VkUmVnRXhwO1xuICBpZiAoaXNTdHJpbmcobWFzaykpIHJldHVybiBnLklNYXNrLk1hc2tlZFBhdHRlcm47XG4gIGlmIChtYXNrIGluc3RhbmNlb2YgRGF0ZSB8fCBtYXNrID09PSBEYXRlKSByZXR1cm4gZy5JTWFzay5NYXNrZWREYXRlO1xuICBpZiAobWFzayBpbnN0YW5jZW9mIE51bWJlciB8fCB0eXBlb2YgbWFzayA9PT0gJ251bWJlcicgfHwgbWFzayA9PT0gTnVtYmVyKSByZXR1cm4gZy5JTWFzay5NYXNrZWROdW1iZXI7XG4gIGlmIChBcnJheS5pc0FycmF5KG1hc2spIHx8IG1hc2sgPT09IEFycmF5KSByZXR1cm4gZy5JTWFzay5NYXNrZWREeW5hbWljOyAvLyAkRmxvd0ZpeE1lXG5cbiAgaWYgKG1hc2sucHJvdG90eXBlIGluc3RhbmNlb2YgZy5JTWFzay5NYXNrZWQpIHJldHVybiBtYXNrOyAvLyAkRmxvd0ZpeE1lXG5cbiAgaWYgKG1hc2sgaW5zdGFuY2VvZiBGdW5jdGlvbikgcmV0dXJuIGcuSU1hc2suTWFza2VkRnVuY3Rpb247XG4gIGNvbnNvbGUud2FybignTWFzayBub3QgZm91bmQgZm9yIG1hc2snLCBtYXNrKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG5cbiAgcmV0dXJuIGcuSU1hc2suTWFza2VkO1xufVxuLyoqIENyZWF0ZXMgbmV3IHtAbGluayBNYXNrZWR9IGRlcGVuZGluZyBvbiBtYXNrIHR5cGUgKi9cblxuZnVuY3Rpb24gY3JlYXRlTWFzayhvcHRzKSB7XG4gIG9wdHMgPSBPYmplY3QuYXNzaWduKHt9LCBvcHRzKTtcbiAgdmFyIG1hc2sgPSBvcHRzLm1hc2s7XG4gIGlmIChtYXNrIGluc3RhbmNlb2YgZy5JTWFzay5NYXNrZWQpIHJldHVybiBtYXNrO1xuICB2YXIgTWFza2VkQ2xhc3MgPSBtYXNrZWRDbGFzcyhtYXNrKTtcbiAgcmV0dXJuIG5ldyBNYXNrZWRDbGFzcyhvcHRzKTtcbn1cblxudmFyIERFRkFVTFRfSU5QVVRfREVGSU5JVElPTlMgPSB7XG4gICcwJzogL1xcZC8sXG4gICdhJzogL1tcXHUwMDQxLVxcdTAwNUFcXHUwMDYxLVxcdTAwN0FcXHUwMEFBXFx1MDBCNVxcdTAwQkFcXHUwMEMwLVxcdTAwRDZcXHUwMEQ4LVxcdTAwRjZcXHUwMEY4LVxcdTAyQzFcXHUwMkM2LVxcdTAyRDFcXHUwMkUwLVxcdTAyRTRcXHUwMkVDXFx1MDJFRVxcdTAzNzAtXFx1MDM3NFxcdTAzNzZcXHUwMzc3XFx1MDM3QS1cXHUwMzdEXFx1MDM4NlxcdTAzODgtXFx1MDM4QVxcdTAzOENcXHUwMzhFLVxcdTAzQTFcXHUwM0EzLVxcdTAzRjVcXHUwM0Y3LVxcdTA0ODFcXHUwNDhBLVxcdTA1MjdcXHUwNTMxLVxcdTA1NTZcXHUwNTU5XFx1MDU2MS1cXHUwNTg3XFx1MDVEMC1cXHUwNUVBXFx1MDVGMC1cXHUwNUYyXFx1MDYyMC1cXHUwNjRBXFx1MDY2RVxcdTA2NkZcXHUwNjcxLVxcdTA2RDNcXHUwNkQ1XFx1MDZFNVxcdTA2RTZcXHUwNkVFXFx1MDZFRlxcdTA2RkEtXFx1MDZGQ1xcdTA2RkZcXHUwNzEwXFx1MDcxMi1cXHUwNzJGXFx1MDc0RC1cXHUwN0E1XFx1MDdCMVxcdTA3Q0EtXFx1MDdFQVxcdTA3RjRcXHUwN0Y1XFx1MDdGQVxcdTA4MDAtXFx1MDgxNVxcdTA4MUFcXHUwODI0XFx1MDgyOFxcdTA4NDAtXFx1MDg1OFxcdTA4QTBcXHUwOEEyLVxcdTA4QUNcXHUwOTA0LVxcdTA5MzlcXHUwOTNEXFx1MDk1MFxcdTA5NTgtXFx1MDk2MVxcdTA5NzEtXFx1MDk3N1xcdTA5NzktXFx1MDk3RlxcdTA5ODUtXFx1MDk4Q1xcdTA5OEZcXHUwOTkwXFx1MDk5My1cXHUwOUE4XFx1MDlBQS1cXHUwOUIwXFx1MDlCMlxcdTA5QjYtXFx1MDlCOVxcdTA5QkRcXHUwOUNFXFx1MDlEQ1xcdTA5RERcXHUwOURGLVxcdTA5RTFcXHUwOUYwXFx1MDlGMVxcdTBBMDUtXFx1MEEwQVxcdTBBMEZcXHUwQTEwXFx1MEExMy1cXHUwQTI4XFx1MEEyQS1cXHUwQTMwXFx1MEEzMlxcdTBBMzNcXHUwQTM1XFx1MEEzNlxcdTBBMzhcXHUwQTM5XFx1MEE1OS1cXHUwQTVDXFx1MEE1RVxcdTBBNzItXFx1MEE3NFxcdTBBODUtXFx1MEE4RFxcdTBBOEYtXFx1MEE5MVxcdTBBOTMtXFx1MEFBOFxcdTBBQUEtXFx1MEFCMFxcdTBBQjJcXHUwQUIzXFx1MEFCNS1cXHUwQUI5XFx1MEFCRFxcdTBBRDBcXHUwQUUwXFx1MEFFMVxcdTBCMDUtXFx1MEIwQ1xcdTBCMEZcXHUwQjEwXFx1MEIxMy1cXHUwQjI4XFx1MEIyQS1cXHUwQjMwXFx1MEIzMlxcdTBCMzNcXHUwQjM1LVxcdTBCMzlcXHUwQjNEXFx1MEI1Q1xcdTBCNURcXHUwQjVGLVxcdTBCNjFcXHUwQjcxXFx1MEI4M1xcdTBCODUtXFx1MEI4QVxcdTBCOEUtXFx1MEI5MFxcdTBCOTItXFx1MEI5NVxcdTBCOTlcXHUwQjlBXFx1MEI5Q1xcdTBCOUVcXHUwQjlGXFx1MEJBM1xcdTBCQTRcXHUwQkE4LVxcdTBCQUFcXHUwQkFFLVxcdTBCQjlcXHUwQkQwXFx1MEMwNS1cXHUwQzBDXFx1MEMwRS1cXHUwQzEwXFx1MEMxMi1cXHUwQzI4XFx1MEMyQS1cXHUwQzMzXFx1MEMzNS1cXHUwQzM5XFx1MEMzRFxcdTBDNThcXHUwQzU5XFx1MEM2MFxcdTBDNjFcXHUwQzg1LVxcdTBDOENcXHUwQzhFLVxcdTBDOTBcXHUwQzkyLVxcdTBDQThcXHUwQ0FBLVxcdTBDQjNcXHUwQ0I1LVxcdTBDQjlcXHUwQ0JEXFx1MENERVxcdTBDRTBcXHUwQ0UxXFx1MENGMVxcdTBDRjJcXHUwRDA1LVxcdTBEMENcXHUwRDBFLVxcdTBEMTBcXHUwRDEyLVxcdTBEM0FcXHUwRDNEXFx1MEQ0RVxcdTBENjBcXHUwRDYxXFx1MEQ3QS1cXHUwRDdGXFx1MEQ4NS1cXHUwRDk2XFx1MEQ5QS1cXHUwREIxXFx1MERCMy1cXHUwREJCXFx1MERCRFxcdTBEQzAtXFx1MERDNlxcdTBFMDEtXFx1MEUzMFxcdTBFMzJcXHUwRTMzXFx1MEU0MC1cXHUwRTQ2XFx1MEU4MVxcdTBFODJcXHUwRTg0XFx1MEU4N1xcdTBFODhcXHUwRThBXFx1MEU4RFxcdTBFOTQtXFx1MEU5N1xcdTBFOTktXFx1MEU5RlxcdTBFQTEtXFx1MEVBM1xcdTBFQTVcXHUwRUE3XFx1MEVBQVxcdTBFQUJcXHUwRUFELVxcdTBFQjBcXHUwRUIyXFx1MEVCM1xcdTBFQkRcXHUwRUMwLVxcdTBFQzRcXHUwRUM2XFx1MEVEQy1cXHUwRURGXFx1MEYwMFxcdTBGNDAtXFx1MEY0N1xcdTBGNDktXFx1MEY2Q1xcdTBGODgtXFx1MEY4Q1xcdTEwMDAtXFx1MTAyQVxcdTEwM0ZcXHUxMDUwLVxcdTEwNTVcXHUxMDVBLVxcdTEwNURcXHUxMDYxXFx1MTA2NVxcdTEwNjZcXHUxMDZFLVxcdTEwNzBcXHUxMDc1LVxcdTEwODFcXHUxMDhFXFx1MTBBMC1cXHUxMEM1XFx1MTBDN1xcdTEwQ0RcXHUxMEQwLVxcdTEwRkFcXHUxMEZDLVxcdTEyNDhcXHUxMjRBLVxcdTEyNERcXHUxMjUwLVxcdTEyNTZcXHUxMjU4XFx1MTI1QS1cXHUxMjVEXFx1MTI2MC1cXHUxMjg4XFx1MTI4QS1cXHUxMjhEXFx1MTI5MC1cXHUxMkIwXFx1MTJCMi1cXHUxMkI1XFx1MTJCOC1cXHUxMkJFXFx1MTJDMFxcdTEyQzItXFx1MTJDNVxcdTEyQzgtXFx1MTJENlxcdTEyRDgtXFx1MTMxMFxcdTEzMTItXFx1MTMxNVxcdTEzMTgtXFx1MTM1QVxcdTEzODAtXFx1MTM4RlxcdTEzQTAtXFx1MTNGNFxcdTE0MDEtXFx1MTY2Q1xcdTE2NkYtXFx1MTY3RlxcdTE2ODEtXFx1MTY5QVxcdTE2QTAtXFx1MTZFQVxcdTE3MDAtXFx1MTcwQ1xcdTE3MEUtXFx1MTcxMVxcdTE3MjAtXFx1MTczMVxcdTE3NDAtXFx1MTc1MVxcdTE3NjAtXFx1MTc2Q1xcdTE3NkUtXFx1MTc3MFxcdTE3ODAtXFx1MTdCM1xcdTE3RDdcXHUxN0RDXFx1MTgyMC1cXHUxODc3XFx1MTg4MC1cXHUxOEE4XFx1MThBQVxcdTE4QjAtXFx1MThGNVxcdTE5MDAtXFx1MTkxQ1xcdTE5NTAtXFx1MTk2RFxcdTE5NzAtXFx1MTk3NFxcdTE5ODAtXFx1MTlBQlxcdTE5QzEtXFx1MTlDN1xcdTFBMDAtXFx1MUExNlxcdTFBMjAtXFx1MUE1NFxcdTFBQTdcXHUxQjA1LVxcdTFCMzNcXHUxQjQ1LVxcdTFCNEJcXHUxQjgzLVxcdTFCQTBcXHUxQkFFXFx1MUJBRlxcdTFCQkEtXFx1MUJFNVxcdTFDMDAtXFx1MUMyM1xcdTFDNEQtXFx1MUM0RlxcdTFDNUEtXFx1MUM3RFxcdTFDRTktXFx1MUNFQ1xcdTFDRUUtXFx1MUNGMVxcdTFDRjVcXHUxQ0Y2XFx1MUQwMC1cXHUxREJGXFx1MUUwMC1cXHUxRjE1XFx1MUYxOC1cXHUxRjFEXFx1MUYyMC1cXHUxRjQ1XFx1MUY0OC1cXHUxRjREXFx1MUY1MC1cXHUxRjU3XFx1MUY1OVxcdTFGNUJcXHUxRjVEXFx1MUY1Ri1cXHUxRjdEXFx1MUY4MC1cXHUxRkI0XFx1MUZCNi1cXHUxRkJDXFx1MUZCRVxcdTFGQzItXFx1MUZDNFxcdTFGQzYtXFx1MUZDQ1xcdTFGRDAtXFx1MUZEM1xcdTFGRDYtXFx1MUZEQlxcdTFGRTAtXFx1MUZFQ1xcdTFGRjItXFx1MUZGNFxcdTFGRjYtXFx1MUZGQ1xcdTIwNzFcXHUyMDdGXFx1MjA5MC1cXHUyMDlDXFx1MjEwMlxcdTIxMDdcXHUyMTBBLVxcdTIxMTNcXHUyMTE1XFx1MjExOS1cXHUyMTFEXFx1MjEyNFxcdTIxMjZcXHUyMTI4XFx1MjEyQS1cXHUyMTJEXFx1MjEyRi1cXHUyMTM5XFx1MjEzQy1cXHUyMTNGXFx1MjE0NS1cXHUyMTQ5XFx1MjE0RVxcdTIxODNcXHUyMTg0XFx1MkMwMC1cXHUyQzJFXFx1MkMzMC1cXHUyQzVFXFx1MkM2MC1cXHUyQ0U0XFx1MkNFQi1cXHUyQ0VFXFx1MkNGMlxcdTJDRjNcXHUyRDAwLVxcdTJEMjVcXHUyRDI3XFx1MkQyRFxcdTJEMzAtXFx1MkQ2N1xcdTJENkZcXHUyRDgwLVxcdTJEOTZcXHUyREEwLVxcdTJEQTZcXHUyREE4LVxcdTJEQUVcXHUyREIwLVxcdTJEQjZcXHUyREI4LVxcdTJEQkVcXHUyREMwLVxcdTJEQzZcXHUyREM4LVxcdTJEQ0VcXHUyREQwLVxcdTJERDZcXHUyREQ4LVxcdTJEREVcXHUyRTJGXFx1MzAwNVxcdTMwMDZcXHUzMDMxLVxcdTMwMzVcXHUzMDNCXFx1MzAzQ1xcdTMwNDEtXFx1MzA5NlxcdTMwOUQtXFx1MzA5RlxcdTMwQTEtXFx1MzBGQVxcdTMwRkMtXFx1MzBGRlxcdTMxMDUtXFx1MzEyRFxcdTMxMzEtXFx1MzE4RVxcdTMxQTAtXFx1MzFCQVxcdTMxRjAtXFx1MzFGRlxcdTM0MDAtXFx1NERCNVxcdTRFMDAtXFx1OUZDQ1xcdUEwMDAtXFx1QTQ4Q1xcdUE0RDAtXFx1QTRGRFxcdUE1MDAtXFx1QTYwQ1xcdUE2MTAtXFx1QTYxRlxcdUE2MkFcXHVBNjJCXFx1QTY0MC1cXHVBNjZFXFx1QTY3Ri1cXHVBNjk3XFx1QTZBMC1cXHVBNkU1XFx1QTcxNy1cXHVBNzFGXFx1QTcyMi1cXHVBNzg4XFx1QTc4Qi1cXHVBNzhFXFx1QTc5MC1cXHVBNzkzXFx1QTdBMC1cXHVBN0FBXFx1QTdGOC1cXHVBODAxXFx1QTgwMy1cXHVBODA1XFx1QTgwNy1cXHVBODBBXFx1QTgwQy1cXHVBODIyXFx1QTg0MC1cXHVBODczXFx1QTg4Mi1cXHVBOEIzXFx1QThGMi1cXHVBOEY3XFx1QThGQlxcdUE5MEEtXFx1QTkyNVxcdUE5MzAtXFx1QTk0NlxcdUE5NjAtXFx1QTk3Q1xcdUE5ODQtXFx1QTlCMlxcdUE5Q0ZcXHVBQTAwLVxcdUFBMjhcXHVBQTQwLVxcdUFBNDJcXHVBQTQ0LVxcdUFBNEJcXHVBQTYwLVxcdUFBNzZcXHVBQTdBXFx1QUE4MC1cXHVBQUFGXFx1QUFCMVxcdUFBQjVcXHVBQUI2XFx1QUFCOS1cXHVBQUJEXFx1QUFDMFxcdUFBQzJcXHVBQURCLVxcdUFBRERcXHVBQUUwLVxcdUFBRUFcXHVBQUYyLVxcdUFBRjRcXHVBQjAxLVxcdUFCMDZcXHVBQjA5LVxcdUFCMEVcXHVBQjExLVxcdUFCMTZcXHVBQjIwLVxcdUFCMjZcXHVBQjI4LVxcdUFCMkVcXHVBQkMwLVxcdUFCRTJcXHVBQzAwLVxcdUQ3QTNcXHVEN0IwLVxcdUQ3QzZcXHVEN0NCLVxcdUQ3RkJcXHVGOTAwLVxcdUZBNkRcXHVGQTcwLVxcdUZBRDlcXHVGQjAwLVxcdUZCMDZcXHVGQjEzLVxcdUZCMTdcXHVGQjFEXFx1RkIxRi1cXHVGQjI4XFx1RkIyQS1cXHVGQjM2XFx1RkIzOC1cXHVGQjNDXFx1RkIzRVxcdUZCNDBcXHVGQjQxXFx1RkI0M1xcdUZCNDRcXHVGQjQ2LVxcdUZCQjFcXHVGQkQzLVxcdUZEM0RcXHVGRDUwLVxcdUZEOEZcXHVGRDkyLVxcdUZEQzdcXHVGREYwLVxcdUZERkJcXHVGRTcwLVxcdUZFNzRcXHVGRTc2LVxcdUZFRkNcXHVGRjIxLVxcdUZGM0FcXHVGRjQxLVxcdUZGNUFcXHVGRjY2LVxcdUZGQkVcXHVGRkMyLVxcdUZGQzdcXHVGRkNBLVxcdUZGQ0ZcXHVGRkQyLVxcdUZGRDdcXHVGRkRBLVxcdUZGRENdLyxcbiAgLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjIwNzUwNzBcbiAgJyonOiAvLi9cbn07XG4vKiogKi9cblxudmFyIFBhdHRlcm5JbnB1dERlZmluaXRpb24gPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICAvKiogKi9cblxuICAvKiogKi9cblxuICAvKiogKi9cblxuICAvKiogKi9cblxuICAvKiogKi9cblxuICAvKiogKi9cbiAgZnVuY3Rpb24gUGF0dGVybklucHV0RGVmaW5pdGlvbihvcHRzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFBhdHRlcm5JbnB1dERlZmluaXRpb24pO1xuXG4gICAgdmFyIG1hc2sgPSBvcHRzLm1hc2ssXG4gICAgICAgIGJsb2NrT3B0cyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvcHRzLCBbXCJtYXNrXCJdKTtcblxuICAgIHRoaXMubWFza2VkID0gY3JlYXRlTWFzayh7XG4gICAgICBtYXNrOiBtYXNrXG4gICAgfSk7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBibG9ja09wdHMpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFBhdHRlcm5JbnB1dERlZmluaXRpb24sIFt7XG4gICAga2V5OiBcInJlc2V0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlc2V0KCkge1xuICAgICAgdGhpcy5faXNGaWxsZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMubWFza2VkLnJlc2V0KCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbW92ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICB2YXIgZnJvbVBvcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogMDtcbiAgICAgIHZhciB0b1BvcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogdGhpcy52YWx1ZS5sZW5ndGg7XG5cbiAgICAgIGlmIChmcm9tUG9zID09PSAwICYmIHRvUG9zID49IDEpIHtcbiAgICAgICAgdGhpcy5faXNGaWxsZWQgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIHRoaXMubWFza2VkLnJlbW92ZShmcm9tUG9zLCB0b1Bvcyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXcgQ2hhbmdlRGV0YWlscygpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJfYXBwZW5kQ2hhclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfYXBwZW5kQ2hhcihzdHIpIHtcbiAgICAgIHZhciBmbGFncyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgICBpZiAodGhpcy5faXNGaWxsZWQpIHJldHVybiBuZXcgQ2hhbmdlRGV0YWlscygpO1xuICAgICAgdmFyIHN0YXRlID0gdGhpcy5tYXNrZWQuc3RhdGU7IC8vIHNpbXVsYXRlIGlucHV0XG5cbiAgICAgIHZhciBkZXRhaWxzID0gdGhpcy5tYXNrZWQuX2FwcGVuZENoYXIoc3RyLCBmbGFncyk7XG5cbiAgICAgIGlmIChkZXRhaWxzLmluc2VydGVkICYmIHRoaXMuZG9WYWxpZGF0ZShmbGFncykgPT09IGZhbHNlKSB7XG4gICAgICAgIGRldGFpbHMuaW5zZXJ0ZWQgPSBkZXRhaWxzLnJhd0luc2VydGVkID0gJyc7XG4gICAgICAgIHRoaXMubWFza2VkLnN0YXRlID0gc3RhdGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghZGV0YWlscy5pbnNlcnRlZCAmJiAhdGhpcy5pc09wdGlvbmFsICYmICF0aGlzLmxhenkgJiYgIWZsYWdzLmlucHV0KSB7XG4gICAgICAgIGRldGFpbHMuaW5zZXJ0ZWQgPSB0aGlzLnBsYWNlaG9sZGVyQ2hhcjtcbiAgICAgIH1cblxuICAgICAgZGV0YWlscy5za2lwID0gIWRldGFpbHMuaW5zZXJ0ZWQgJiYgIXRoaXMuaXNPcHRpb25hbDtcbiAgICAgIHRoaXMuX2lzRmlsbGVkID0gQm9vbGVhbihkZXRhaWxzLmluc2VydGVkKTtcbiAgICAgIHJldHVybiBkZXRhaWxzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJhcHBlbmRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYXBwZW5kKCkge1xuICAgICAgdmFyIF90aGlzJG1hc2tlZDtcblxuICAgICAgcmV0dXJuIChfdGhpcyRtYXNrZWQgPSB0aGlzLm1hc2tlZCkuYXBwZW5kLmFwcGx5KF90aGlzJG1hc2tlZCwgYXJndW1lbnRzKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiX2FwcGVuZFBsYWNlaG9sZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9hcHBlbmRQbGFjZWhvbGRlcigpIHtcbiAgICAgIHZhciBkZXRhaWxzID0gbmV3IENoYW5nZURldGFpbHMoKTtcbiAgICAgIGlmICh0aGlzLl9pc0ZpbGxlZCB8fCB0aGlzLmlzT3B0aW9uYWwpIHJldHVybiBkZXRhaWxzO1xuICAgICAgdGhpcy5faXNGaWxsZWQgPSB0cnVlO1xuICAgICAgZGV0YWlscy5pbnNlcnRlZCA9IHRoaXMucGxhY2Vob2xkZXJDaGFyO1xuICAgICAgcmV0dXJuIGRldGFpbHM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImV4dHJhY3RUYWlsXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGV4dHJhY3RUYWlsKCkge1xuICAgICAgdmFyIF90aGlzJG1hc2tlZDI7XG5cbiAgICAgIHJldHVybiAoX3RoaXMkbWFza2VkMiA9IHRoaXMubWFza2VkKS5leHRyYWN0VGFpbC5hcHBseShfdGhpcyRtYXNrZWQyLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJhcHBlbmRUYWlsXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFwcGVuZFRhaWwoKSB7XG4gICAgICB2YXIgX3RoaXMkbWFza2VkMztcblxuICAgICAgcmV0dXJuIChfdGhpcyRtYXNrZWQzID0gdGhpcy5tYXNrZWQpLmFwcGVuZFRhaWwuYXBwbHkoX3RoaXMkbWFza2VkMywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZXh0cmFjdElucHV0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGV4dHJhY3RJbnB1dCgpIHtcbiAgICAgIHZhciBmcm9tUG9zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAwO1xuICAgICAgdmFyIHRvUG9zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB0aGlzLnZhbHVlLmxlbmd0aDtcbiAgICAgIHZhciBmbGFncyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyID8gYXJndW1lbnRzWzJdIDogdW5kZWZpbmVkO1xuICAgICAgcmV0dXJuIHRoaXMubWFza2VkLmV4dHJhY3RJbnB1dChmcm9tUG9zLCB0b1BvcywgZmxhZ3MpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJuZWFyZXN0SW5wdXRQb3NcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbmVhcmVzdElucHV0UG9zKGN1cnNvclBvcykge1xuICAgICAgdmFyIGRpcmVjdGlvbiA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogRElSRUNUSU9OLk5PTkU7XG4gICAgICB2YXIgbWluUG9zID0gMDtcbiAgICAgIHZhciBtYXhQb3MgPSB0aGlzLnZhbHVlLmxlbmd0aDtcbiAgICAgIHZhciBib3VuZFBvcyA9IE1hdGgubWluKE1hdGgubWF4KGN1cnNvclBvcywgbWluUG9zKSwgbWF4UG9zKTtcblxuICAgICAgc3dpdGNoIChkaXJlY3Rpb24pIHtcbiAgICAgICAgY2FzZSBESVJFQ1RJT04uTEVGVDpcbiAgICAgICAgY2FzZSBESVJFQ1RJT04uRk9SQ0VfTEVGVDpcbiAgICAgICAgICByZXR1cm4gdGhpcy5pc0NvbXBsZXRlID8gYm91bmRQb3MgOiBtaW5Qb3M7XG5cbiAgICAgICAgY2FzZSBESVJFQ1RJT04uUklHSFQ6XG4gICAgICAgIGNhc2UgRElSRUNUSU9OLkZPUkNFX1JJR0hUOlxuICAgICAgICAgIHJldHVybiB0aGlzLmlzQ29tcGxldGUgPyBib3VuZFBvcyA6IG1heFBvcztcblxuICAgICAgICBjYXNlIERJUkVDVElPTi5OT05FOlxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiBib3VuZFBvcztcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZG9WYWxpZGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkb1ZhbGlkYXRlKCkge1xuICAgICAgdmFyIF90aGlzJG1hc2tlZDQsIF90aGlzJHBhcmVudDtcblxuICAgICAgcmV0dXJuIChfdGhpcyRtYXNrZWQ0ID0gdGhpcy5tYXNrZWQpLmRvVmFsaWRhdGUuYXBwbHkoX3RoaXMkbWFza2VkNCwgYXJndW1lbnRzKSAmJiAoIXRoaXMucGFyZW50IHx8IChfdGhpcyRwYXJlbnQgPSB0aGlzLnBhcmVudCkuZG9WYWxpZGF0ZS5hcHBseShfdGhpcyRwYXJlbnQsIGFyZ3VtZW50cykpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJkb0NvbW1pdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkb0NvbW1pdCgpIHtcbiAgICAgIHRoaXMubWFza2VkLmRvQ29tbWl0KCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInZhbHVlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5tYXNrZWQudmFsdWUgfHwgKHRoaXMuX2lzRmlsbGVkICYmICF0aGlzLmlzT3B0aW9uYWwgPyB0aGlzLnBsYWNlaG9sZGVyQ2hhciA6ICcnKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidW5tYXNrZWRWYWx1ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMubWFza2VkLnVubWFza2VkVmFsdWU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImlzQ29tcGxldGVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBCb29sZWFuKHRoaXMubWFza2VkLnZhbHVlKSB8fCB0aGlzLmlzT3B0aW9uYWw7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInN0YXRlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBtYXNrZWQ6IHRoaXMubWFza2VkLnN0YXRlLFxuICAgICAgICBfaXNGaWxsZWQ6IHRoaXMuX2lzRmlsbGVkXG4gICAgICB9O1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQoc3RhdGUpIHtcbiAgICAgIHRoaXMubWFza2VkLnN0YXRlID0gc3RhdGUubWFza2VkO1xuICAgICAgdGhpcy5faXNGaWxsZWQgPSBzdGF0ZS5faXNGaWxsZWQ7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFBhdHRlcm5JbnB1dERlZmluaXRpb247XG59KCk7XG5cbnZhciBQYXR0ZXJuRml4ZWREZWZpbml0aW9uID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgLyoqICovXG5cbiAgLyoqICovXG5cbiAgLyoqICovXG5cbiAgLyoqICovXG4gIGZ1bmN0aW9uIFBhdHRlcm5GaXhlZERlZmluaXRpb24ob3B0cykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQYXR0ZXJuRml4ZWREZWZpbml0aW9uKTtcblxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgb3B0cyk7XG4gICAgdGhpcy5fdmFsdWUgPSAnJztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhQYXR0ZXJuRml4ZWREZWZpbml0aW9uLCBbe1xuICAgIGtleTogXCJyZXNldFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZXNldCgpIHtcbiAgICAgIHRoaXMuX2lzUmF3SW5wdXQgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3ZhbHVlID0gJyc7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbW92ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICB2YXIgZnJvbVBvcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogMDtcbiAgICAgIHZhciB0b1BvcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogdGhpcy5fdmFsdWUubGVuZ3RoO1xuICAgICAgdGhpcy5fdmFsdWUgPSB0aGlzLl92YWx1ZS5zbGljZSgwLCBmcm9tUG9zKSArIHRoaXMuX3ZhbHVlLnNsaWNlKHRvUG9zKTtcbiAgICAgIGlmICghdGhpcy5fdmFsdWUpIHRoaXMuX2lzUmF3SW5wdXQgPSBmYWxzZTtcbiAgICAgIHJldHVybiBuZXcgQ2hhbmdlRGV0YWlscygpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJuZWFyZXN0SW5wdXRQb3NcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbmVhcmVzdElucHV0UG9zKGN1cnNvclBvcykge1xuICAgICAgdmFyIGRpcmVjdGlvbiA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogRElSRUNUSU9OLk5PTkU7XG4gICAgICB2YXIgbWluUG9zID0gMDtcbiAgICAgIHZhciBtYXhQb3MgPSB0aGlzLl92YWx1ZS5sZW5ndGg7XG5cbiAgICAgIHN3aXRjaCAoZGlyZWN0aW9uKSB7XG4gICAgICAgIGNhc2UgRElSRUNUSU9OLkxFRlQ6XG4gICAgICAgIGNhc2UgRElSRUNUSU9OLkZPUkNFX0xFRlQ6XG4gICAgICAgICAgcmV0dXJuIG1pblBvcztcblxuICAgICAgICBjYXNlIERJUkVDVElPTi5OT05FOlxuICAgICAgICBjYXNlIERJUkVDVElPTi5SSUdIVDpcbiAgICAgICAgY2FzZSBESVJFQ1RJT04uRk9SQ0VfUklHSFQ6XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIG1heFBvcztcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZXh0cmFjdElucHV0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGV4dHJhY3RJbnB1dCgpIHtcbiAgICAgIHZhciBmcm9tUG9zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAwO1xuICAgICAgdmFyIHRvUG9zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB0aGlzLl92YWx1ZS5sZW5ndGg7XG4gICAgICB2YXIgZmxhZ3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHt9O1xuICAgICAgcmV0dXJuIGZsYWdzLnJhdyAmJiB0aGlzLl9pc1Jhd0lucHV0ICYmIHRoaXMuX3ZhbHVlLnNsaWNlKGZyb21Qb3MsIHRvUG9zKSB8fCAnJztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiX2FwcGVuZENoYXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2FwcGVuZENoYXIoc3RyKSB7XG4gICAgICB2YXIgZmxhZ3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgICAgdmFyIGRldGFpbHMgPSBuZXcgQ2hhbmdlRGV0YWlscygpO1xuICAgICAgaWYgKHRoaXMuX3ZhbHVlKSByZXR1cm4gZGV0YWlscztcbiAgICAgIHZhciBhcHBlbmRlZCA9IHRoaXMuY2hhciA9PT0gc3RyWzBdO1xuICAgICAgdmFyIGlzUmVzb2x2ZWQgPSBhcHBlbmRlZCAmJiAodGhpcy5pc1VubWFza2luZyB8fCBmbGFncy5pbnB1dCB8fCBmbGFncy5yYXcpICYmICFmbGFncy50YWlsO1xuICAgICAgaWYgKGlzUmVzb2x2ZWQpIGRldGFpbHMucmF3SW5zZXJ0ZWQgPSB0aGlzLmNoYXI7XG4gICAgICB0aGlzLl92YWx1ZSA9IGRldGFpbHMuaW5zZXJ0ZWQgPSB0aGlzLmNoYXI7XG4gICAgICB0aGlzLl9pc1Jhd0lucHV0ID0gaXNSZXNvbHZlZCAmJiAoZmxhZ3MucmF3IHx8IGZsYWdzLmlucHV0KTtcbiAgICAgIHJldHVybiBkZXRhaWxzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJfYXBwZW5kUGxhY2Vob2xkZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2FwcGVuZFBsYWNlaG9sZGVyKCkge1xuICAgICAgdmFyIGRldGFpbHMgPSBuZXcgQ2hhbmdlRGV0YWlscygpO1xuICAgICAgaWYgKHRoaXMuX3ZhbHVlKSByZXR1cm4gZGV0YWlscztcbiAgICAgIHRoaXMuX3ZhbHVlID0gZGV0YWlscy5pbnNlcnRlZCA9IHRoaXMuY2hhcjtcbiAgICAgIHJldHVybiBkZXRhaWxzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJleHRyYWN0VGFpbFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBleHRyYWN0VGFpbCgpIHtcbiAgICAgIHZhciB0b1BvcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogdGhpcy52YWx1ZS5sZW5ndGg7XG4gICAgICByZXR1cm4gbmV3IENvbnRpbnVvdXNUYWlsRGV0YWlscygnJyk7XG4gICAgfSAvLyAkRmxvd0ZpeE1lIG5vIGlkZWFzXG5cbiAgfSwge1xuICAgIGtleTogXCJhcHBlbmRUYWlsXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFwcGVuZFRhaWwodGFpbCkge1xuICAgICAgaWYgKGlzU3RyaW5nKHRhaWwpKSB0YWlsID0gbmV3IENvbnRpbnVvdXNUYWlsRGV0YWlscyhTdHJpbmcodGFpbCkpO1xuICAgICAgcmV0dXJuIHRhaWwuYXBwZW5kVG8odGhpcyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImFwcGVuZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhcHBlbmQoc3RyLCBmbGFncywgdGFpbCkge1xuICAgICAgdmFyIGRldGFpbHMgPSB0aGlzLl9hcHBlbmRDaGFyKHN0ciwgZmxhZ3MpO1xuXG4gICAgICBpZiAodGFpbCAhPSBudWxsKSB7XG4gICAgICAgIGRldGFpbHMudGFpbFNoaWZ0ICs9IHRoaXMuYXBwZW5kVGFpbCh0YWlsKS50YWlsU2hpZnQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkZXRhaWxzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJkb0NvbW1pdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkb0NvbW1pdCgpIHt9XG4gIH0sIHtcbiAgICBrZXk6IFwidmFsdWVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidW5tYXNrZWRWYWx1ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuaXNVbm1hc2tpbmcgPyB0aGlzLnZhbHVlIDogJyc7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImlzQ29tcGxldGVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzdGF0ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgX3ZhbHVlOiB0aGlzLl92YWx1ZSxcbiAgICAgICAgX2lzUmF3SW5wdXQ6IHRoaXMuX2lzUmF3SW5wdXRcbiAgICAgIH07XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldChzdGF0ZSkge1xuICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBzdGF0ZSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFBhdHRlcm5GaXhlZERlZmluaXRpb247XG59KCk7XG5cbnZhciBDaHVua3NUYWlsRGV0YWlscyA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIC8qKiAqL1xuICBmdW5jdGlvbiBDaHVua3NUYWlsRGV0YWlscygpIHtcbiAgICB2YXIgY2h1bmtzID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBbXTtcbiAgICB2YXIgZnJvbSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogMDtcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDaHVua3NUYWlsRGV0YWlscyk7XG5cbiAgICB0aGlzLmNodW5rcyA9IGNodW5rcztcbiAgICB0aGlzLmZyb20gPSBmcm9tO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKENodW5rc1RhaWxEZXRhaWxzLCBbe1xuICAgIGtleTogXCJ0b1N0cmluZ1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICAgIHJldHVybiB0aGlzLmNodW5rcy5tYXAoU3RyaW5nKS5qb2luKCcnKTtcbiAgICB9IC8vICRGbG93Rml4TWUgbm8gaWRlYXNcblxuICB9LCB7XG4gICAga2V5OiBcImV4dGVuZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBleHRlbmQodGFpbENodW5rKSB7XG4gICAgICBpZiAoIVN0cmluZyh0YWlsQ2h1bmspKSByZXR1cm47XG4gICAgICBpZiAoaXNTdHJpbmcodGFpbENodW5rKSkgdGFpbENodW5rID0gbmV3IENvbnRpbnVvdXNUYWlsRGV0YWlscyhTdHJpbmcodGFpbENodW5rKSk7XG4gICAgICB2YXIgbGFzdENodW5rID0gdGhpcy5jaHVua3NbdGhpcy5jaHVua3MubGVuZ3RoIC0gMV07XG4gICAgICB2YXIgZXh0ZW5kTGFzdCA9IGxhc3RDaHVuayAmJiAoIC8vIGlmIHN0b3BzIGFyZSBzYW1lIG9yIHRhaWwgaGFzIG5vIHN0b3BcbiAgICAgIGxhc3RDaHVuay5zdG9wID09PSB0YWlsQ2h1bmsuc3RvcCB8fCB0YWlsQ2h1bmsuc3RvcCA9PSBudWxsKSAmJiAvLyBpZiB0YWlsIGNodW5rIGdvZXMganVzdCBhZnRlciBsYXN0IGNodW5rXG4gICAgICB0YWlsQ2h1bmsuZnJvbSA9PT0gbGFzdENodW5rLmZyb20gKyBsYXN0Q2h1bmsudG9TdHJpbmcoKS5sZW5ndGg7XG5cbiAgICAgIGlmICh0YWlsQ2h1bmsgaW5zdGFuY2VvZiBDb250aW51b3VzVGFpbERldGFpbHMpIHtcbiAgICAgICAgLy8gY2hlY2sgdGhlIGFiaWxpdHkgdG8gZXh0ZW5kIHByZXZpb3VzIGNodW5rXG4gICAgICAgIGlmIChleHRlbmRMYXN0KSB7XG4gICAgICAgICAgLy8gZXh0ZW5kIHByZXZpb3VzIGNodW5rXG4gICAgICAgICAgbGFzdENodW5rLmV4dGVuZCh0YWlsQ2h1bmsudG9TdHJpbmcoKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gYXBwZW5kIG5ldyBjaHVua1xuICAgICAgICAgIHRoaXMuY2h1bmtzLnB1c2godGFpbENodW5rKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0YWlsQ2h1bmsgaW5zdGFuY2VvZiBDaHVua3NUYWlsRGV0YWlscykge1xuICAgICAgICBpZiAodGFpbENodW5rLnN0b3AgPT0gbnVsbCkge1xuICAgICAgICAgIC8vIHVud3JhcCBmbG9hdGluZyBjaHVua3MgdG8gcGFyZW50LCBrZWVwaW5nIGBmcm9tYCBwb3NcbiAgICAgICAgICB2YXIgZmlyc3RUYWlsQ2h1bms7XG5cbiAgICAgICAgICB3aGlsZSAodGFpbENodW5rLmNodW5rcy5sZW5ndGggJiYgdGFpbENodW5rLmNodW5rc1swXS5zdG9wID09IG51bGwpIHtcbiAgICAgICAgICAgIGZpcnN0VGFpbENodW5rID0gdGFpbENodW5rLmNodW5rcy5zaGlmdCgpO1xuICAgICAgICAgICAgZmlyc3RUYWlsQ2h1bmsuZnJvbSArPSB0YWlsQ2h1bmsuZnJvbTtcbiAgICAgICAgICAgIHRoaXMuZXh0ZW5kKGZpcnN0VGFpbENodW5rKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gLy8gaWYgdGFpbCBjaHVuayBzdGlsbCBoYXMgdmFsdWVcblxuXG4gICAgICAgIGlmICh0YWlsQ2h1bmsudG9TdHJpbmcoKSkge1xuICAgICAgICAgIC8vIGlmIGNodW5rcyBjb250YWlucyBzdG9wcywgdGhlbiBwb3B1cCBzdG9wIHRvIGNvbnRhaW5lclxuICAgICAgICAgIHRhaWxDaHVuay5zdG9wID0gdGFpbENodW5rLmJsb2NrSW5kZXg7XG4gICAgICAgICAgdGhpcy5jaHVua3MucHVzaCh0YWlsQ2h1bmspO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImFwcGVuZFRvXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFwcGVuZFRvKG1hc2tlZCkge1xuICAgICAgaWYgKCEobWFza2VkIGluc3RhbmNlb2YgZy5JTWFzay5NYXNrZWRQYXR0ZXJuKSkge1xuICAgICAgICB2YXIgdGFpbCA9IG5ldyBDb250aW51b3VzVGFpbERldGFpbHModGhpcy50b1N0cmluZygpKTtcbiAgICAgICAgcmV0dXJuIHRhaWwuYXBwZW5kVG8obWFza2VkKTtcbiAgICAgIH1cblxuICAgICAgdmFyIGRldGFpbHMgPSBuZXcgQ2hhbmdlRGV0YWlscygpO1xuXG4gICAgICBmb3IgKHZhciBjaSA9IDA7IGNpIDwgdGhpcy5jaHVua3MubGVuZ3RoICYmICFkZXRhaWxzLnNraXA7ICsrY2kpIHtcbiAgICAgICAgdmFyIGNodW5rID0gdGhpcy5jaHVua3NbY2ldO1xuXG4gICAgICAgIHZhciBsYXN0QmxvY2tJdGVyID0gbWFza2VkLl9tYXBQb3NUb0Jsb2NrKG1hc2tlZC52YWx1ZS5sZW5ndGgpO1xuXG4gICAgICAgIHZhciBzdG9wID0gY2h1bmsuc3RvcDtcbiAgICAgICAgdmFyIGNodW5rQmxvY2sgPSB2b2lkIDA7XG5cbiAgICAgICAgaWYgKHN0b3AgJiYgKCAvLyBpZiBibG9jayBub3QgZm91bmQgb3Igc3RvcCBpcyBiZWhpbmQgbGFzdEJsb2NrXG4gICAgICAgICFsYXN0QmxvY2tJdGVyIHx8IGxhc3RCbG9ja0l0ZXIuaW5kZXggPD0gc3RvcCkpIHtcbiAgICAgICAgICBpZiAoY2h1bmsgaW5zdGFuY2VvZiBDaHVua3NUYWlsRGV0YWlscyB8fCAvLyBmb3IgY29udGludW91cyBibG9jayBhbHNvIGNoZWNrIGlmIHN0b3AgaXMgZXhpc3RcbiAgICAgICAgICBtYXNrZWQuX3N0b3BzLmluZGV4T2Yoc3RvcCkgPj0gMCkge1xuICAgICAgICAgICAgZGV0YWlscy5hZ2dyZWdhdGUobWFza2VkLl9hcHBlbmRQbGFjZWhvbGRlcihzdG9wKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY2h1bmtCbG9jayA9IGNodW5rIGluc3RhbmNlb2YgQ2h1bmtzVGFpbERldGFpbHMgJiYgbWFza2VkLl9ibG9ja3Nbc3RvcF07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2h1bmtCbG9jaykge1xuICAgICAgICAgIHZhciB0YWlsRGV0YWlscyA9IGNodW5rQmxvY2suYXBwZW5kVGFpbChjaHVuayk7XG4gICAgICAgICAgdGFpbERldGFpbHMuc2tpcCA9IGZhbHNlOyAvLyBhbHdheXMgaWdub3JlIHNraXAsIGl0IHdpbGwgYmUgc2V0IG9uIGxhc3RcblxuICAgICAgICAgIGRldGFpbHMuYWdncmVnYXRlKHRhaWxEZXRhaWxzKTtcbiAgICAgICAgICBtYXNrZWQuX3ZhbHVlICs9IHRhaWxEZXRhaWxzLmluc2VydGVkOyAvLyBnZXQgbm90IGluc2VydGVkIGNoYXJzXG5cbiAgICAgICAgICB2YXIgcmVtYWluQ2hhcnMgPSBjaHVuay50b1N0cmluZygpLnNsaWNlKHRhaWxEZXRhaWxzLnJhd0luc2VydGVkLmxlbmd0aCk7XG4gICAgICAgICAgaWYgKHJlbWFpbkNoYXJzKSBkZXRhaWxzLmFnZ3JlZ2F0ZShtYXNrZWQuYXBwZW5kKHJlbWFpbkNoYXJzLCB7XG4gICAgICAgICAgICB0YWlsOiB0cnVlXG4gICAgICAgICAgfSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRldGFpbHMuYWdncmVnYXRlKG1hc2tlZC5hcHBlbmQoY2h1bmsudG9TdHJpbmcoKSwge1xuICAgICAgICAgICAgdGFpbDogdHJ1ZVxuICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGRldGFpbHM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNoaWZ0QmVmb3JlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNoaWZ0QmVmb3JlKHBvcykge1xuICAgICAgaWYgKHRoaXMuZnJvbSA+PSBwb3MgfHwgIXRoaXMuY2h1bmtzLmxlbmd0aCkgcmV0dXJuICcnO1xuICAgICAgdmFyIGNodW5rU2hpZnRQb3MgPSBwb3MgLSB0aGlzLmZyb207XG4gICAgICB2YXIgY2kgPSAwO1xuXG4gICAgICB3aGlsZSAoY2kgPCB0aGlzLmNodW5rcy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGNodW5rID0gdGhpcy5jaHVua3NbY2ldO1xuICAgICAgICB2YXIgc2hpZnRDaGFyID0gY2h1bmsuc2hpZnRCZWZvcmUoY2h1bmtTaGlmdFBvcyk7XG5cbiAgICAgICAgaWYgKGNodW5rLnRvU3RyaW5nKCkpIHtcbiAgICAgICAgICAvLyBjaHVuayBzdGlsbCBjb250YWlucyB2YWx1ZVxuICAgICAgICAgIC8vIGJ1dCBub3Qgc2hpZnRlZCAtIG1lYW5zIG5vIG1vcmUgYXZhaWxhYmxlIGNoYXJzIHRvIHNoaWZ0XG4gICAgICAgICAgaWYgKCFzaGlmdENoYXIpIGJyZWFrO1xuICAgICAgICAgICsrY2k7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gY2xlYW4gaWYgY2h1bmsgaGFzIG5vIHZhbHVlXG4gICAgICAgICAgdGhpcy5jaHVua3Muc3BsaWNlKGNpLCAxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzaGlmdENoYXIpIHJldHVybiBzaGlmdENoYXI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic3RhdGVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGNodW5rczogdGhpcy5jaHVua3MubWFwKGZ1bmN0aW9uIChjKSB7XG4gICAgICAgICAgcmV0dXJuIGMuc3RhdGU7XG4gICAgICAgIH0pLFxuICAgICAgICBmcm9tOiB0aGlzLmZyb20sXG4gICAgICAgIHN0b3A6IHRoaXMuc3RvcCxcbiAgICAgICAgYmxvY2tJbmRleDogdGhpcy5ibG9ja0luZGV4XG4gICAgICB9O1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQoc3RhdGUpIHtcbiAgICAgIHZhciBjaHVua3MgPSBzdGF0ZS5jaHVua3MsXG4gICAgICAgICAgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoc3RhdGUsIFtcImNodW5rc1wiXSk7XG5cbiAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgcHJvcHMpO1xuICAgICAgdGhpcy5jaHVua3MgPSBjaHVua3MubWFwKGZ1bmN0aW9uIChjc3RhdGUpIHtcbiAgICAgICAgdmFyIGNodW5rID0gXCJjaHVua3NcIiBpbiBjc3RhdGUgPyBuZXcgQ2h1bmtzVGFpbERldGFpbHMoKSA6IG5ldyBDb250aW51b3VzVGFpbERldGFpbHMoKTsgLy8gJEZsb3dGaXhNZSBhbHJlYWR5IGNoZWNrZWQgYWJvdmVcblxuICAgICAgICBjaHVuay5zdGF0ZSA9IGNzdGF0ZTtcbiAgICAgICAgcmV0dXJuIGNodW5rO1xuICAgICAgfSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIENodW5rc1RhaWxEZXRhaWxzO1xufSgpO1xuXG4vKipcclxuICBQYXR0ZXJuIG1hc2tcclxuICBAcGFyYW0ge09iamVjdH0gb3B0c1xyXG4gIEBwYXJhbSB7T2JqZWN0fSBvcHRzLmJsb2Nrc1xyXG4gIEBwYXJhbSB7T2JqZWN0fSBvcHRzLmRlZmluaXRpb25zXHJcbiAgQHBhcmFtIHtzdHJpbmd9IG9wdHMucGxhY2Vob2xkZXJDaGFyXHJcbiAgQHBhcmFtIHtib29sZWFufSBvcHRzLmxhenlcclxuKi9cbnZhciBNYXNrZWRQYXR0ZXJuID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfTWFza2VkKSB7XG4gIF9pbmhlcml0cyhNYXNrZWRQYXR0ZXJuLCBfTWFza2VkKTtcblxuICAvKiogKi9cblxuICAvKiogKi9cblxuICAvKiogU2luZ2xlIGNoYXIgZm9yIGVtcHR5IGlucHV0ICovXG5cbiAgLyoqIFNob3cgcGxhY2Vob2xkZXIgb25seSB3aGVuIG5lZWRlZCAqL1xuICBmdW5jdGlvbiBNYXNrZWRQYXR0ZXJuKCkge1xuICAgIHZhciBvcHRzID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNYXNrZWRQYXR0ZXJuKTtcblxuICAgIC8vIFRPRE8gdHlwZSAkU2hhcGU8TWFza2VkUGF0dGVybk9wdGlvbnM+PXt9IGRvZXMgbm90IHdvcmtcbiAgICBvcHRzLmRlZmluaXRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgREVGQVVMVF9JTlBVVF9ERUZJTklUSU9OUywgb3B0cy5kZWZpbml0aW9ucyk7XG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9nZXRQcm90b3R5cGVPZihNYXNrZWRQYXR0ZXJuKS5jYWxsKHRoaXMsIE9iamVjdC5hc3NpZ24oe30sIE1hc2tlZFBhdHRlcm4uREVGQVVMVFMsIHt9LCBvcHRzKSkpO1xuICB9XG4gIC8qKlxyXG4gICAgQG92ZXJyaWRlXHJcbiAgICBAcGFyYW0ge09iamVjdH0gb3B0c1xyXG4gICovXG5cblxuICBfY3JlYXRlQ2xhc3MoTWFza2VkUGF0dGVybiwgW3tcbiAgICBrZXk6IFwiX3VwZGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfdXBkYXRlKCkge1xuICAgICAgdmFyIG9wdHMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICAgICAgb3B0cy5kZWZpbml0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuZGVmaW5pdGlvbnMsIG9wdHMuZGVmaW5pdGlvbnMpO1xuXG4gICAgICBfZ2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWRQYXR0ZXJuLnByb3RvdHlwZSksIFwiX3VwZGF0ZVwiLCB0aGlzKS5jYWxsKHRoaXMsIG9wdHMpO1xuXG4gICAgICB0aGlzLl9yZWJ1aWxkTWFzaygpO1xuICAgIH1cbiAgICAvKiogKi9cblxuICB9LCB7XG4gICAga2V5OiBcIl9yZWJ1aWxkTWFza1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfcmVidWlsZE1hc2soKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICB2YXIgZGVmcyA9IHRoaXMuZGVmaW5pdGlvbnM7XG4gICAgICB0aGlzLl9ibG9ja3MgPSBbXTtcbiAgICAgIHRoaXMuX3N0b3BzID0gW107XG4gICAgICB0aGlzLl9tYXNrZWRCbG9ja3MgPSB7fTtcbiAgICAgIHZhciBwYXR0ZXJuID0gdGhpcy5tYXNrO1xuICAgICAgaWYgKCFwYXR0ZXJuIHx8ICFkZWZzKSByZXR1cm47XG4gICAgICB2YXIgdW5tYXNraW5nQmxvY2sgPSBmYWxzZTtcbiAgICAgIHZhciBvcHRpb25hbEJsb2NrID0gZmFsc2U7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGF0dGVybi5sZW5ndGg7ICsraSkge1xuICAgICAgICBpZiAodGhpcy5ibG9ja3MpIHtcbiAgICAgICAgICB2YXIgX3JldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBwID0gcGF0dGVybi5zbGljZShpKTtcbiAgICAgICAgICAgIHZhciBiTmFtZXMgPSBPYmplY3Qua2V5cyhfdGhpcy5ibG9ja3MpLmZpbHRlcihmdW5jdGlvbiAoYk5hbWUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHAuaW5kZXhPZihiTmFtZSkgPT09IDA7XG4gICAgICAgICAgICB9KTsgLy8gb3JkZXIgYnkga2V5IGxlbmd0aFxuXG4gICAgICAgICAgICBiTmFtZXMuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgICByZXR1cm4gYi5sZW5ndGggLSBhLmxlbmd0aDtcbiAgICAgICAgICAgIH0pOyAvLyB1c2UgYmxvY2sgbmFtZSB3aXRoIG1heCBsZW5ndGhcblxuICAgICAgICAgICAgdmFyIGJOYW1lID0gYk5hbWVzWzBdO1xuXG4gICAgICAgICAgICBpZiAoYk5hbWUpIHtcbiAgICAgICAgICAgICAgdmFyIG1hc2tlZEJsb2NrID0gY3JlYXRlTWFzayhPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgICAgICBwYXJlbnQ6IF90aGlzLFxuICAgICAgICAgICAgICAgIGxhenk6IF90aGlzLmxhenksXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXJDaGFyOiBfdGhpcy5wbGFjZWhvbGRlckNoYXIsXG4gICAgICAgICAgICAgICAgb3ZlcndyaXRlOiBfdGhpcy5vdmVyd3JpdGVcbiAgICAgICAgICAgICAgfSwgX3RoaXMuYmxvY2tzW2JOYW1lXSkpO1xuXG4gICAgICAgICAgICAgIGlmIChtYXNrZWRCbG9jaykge1xuICAgICAgICAgICAgICAgIF90aGlzLl9ibG9ja3MucHVzaChtYXNrZWRCbG9jayk7IC8vIHN0b3JlIGJsb2NrIGluZGV4XG5cblxuICAgICAgICAgICAgICAgIGlmICghX3RoaXMuX21hc2tlZEJsb2Nrc1tiTmFtZV0pIF90aGlzLl9tYXNrZWRCbG9ja3NbYk5hbWVdID0gW107XG5cbiAgICAgICAgICAgICAgICBfdGhpcy5fbWFza2VkQmxvY2tzW2JOYW1lXS5wdXNoKF90aGlzLl9ibG9ja3MubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpICs9IGJOYW1lLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAgIHJldHVybiBcImNvbnRpbnVlXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSgpO1xuXG4gICAgICAgICAgaWYgKF9yZXQgPT09IFwiY29udGludWVcIikgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgY2hhciA9IHBhdHRlcm5baV07XG5cbiAgICAgICAgdmFyIF9pc0lucHV0ID0gY2hhciBpbiBkZWZzO1xuXG4gICAgICAgIGlmIChjaGFyID09PSBNYXNrZWRQYXR0ZXJuLlNUT1BfQ0hBUikge1xuICAgICAgICAgIHRoaXMuX3N0b3BzLnB1c2godGhpcy5fYmxvY2tzLmxlbmd0aCk7XG5cbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjaGFyID09PSAneycgfHwgY2hhciA9PT0gJ30nKSB7XG4gICAgICAgICAgdW5tYXNraW5nQmxvY2sgPSAhdW5tYXNraW5nQmxvY2s7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2hhciA9PT0gJ1snIHx8IGNoYXIgPT09ICddJykge1xuICAgICAgICAgIG9wdGlvbmFsQmxvY2sgPSAhb3B0aW9uYWxCbG9jaztcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjaGFyID09PSBNYXNrZWRQYXR0ZXJuLkVTQ0FQRV9DSEFSKSB7XG4gICAgICAgICAgKytpO1xuICAgICAgICAgIGNoYXIgPSBwYXR0ZXJuW2ldO1xuICAgICAgICAgIGlmICghY2hhcikgYnJlYWs7XG4gICAgICAgICAgX2lzSW5wdXQgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBkZWYgPSBfaXNJbnB1dCA/IG5ldyBQYXR0ZXJuSW5wdXREZWZpbml0aW9uKHtcbiAgICAgICAgICBwYXJlbnQ6IHRoaXMsXG4gICAgICAgICAgbGF6eTogdGhpcy5sYXp5LFxuICAgICAgICAgIHBsYWNlaG9sZGVyQ2hhcjogdGhpcy5wbGFjZWhvbGRlckNoYXIsXG4gICAgICAgICAgbWFzazogZGVmc1tjaGFyXSxcbiAgICAgICAgICBpc09wdGlvbmFsOiBvcHRpb25hbEJsb2NrXG4gICAgICAgIH0pIDogbmV3IFBhdHRlcm5GaXhlZERlZmluaXRpb24oe1xuICAgICAgICAgIGNoYXI6IGNoYXIsXG4gICAgICAgICAgaXNVbm1hc2tpbmc6IHVubWFza2luZ0Jsb2NrXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuX2Jsb2Nrcy5wdXNoKGRlZik7XG4gICAgICB9XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICBAb3ZlcnJpZGVcclxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJyZXNldFwiLFxuXG4gICAgLyoqXHJcbiAgICAgIEBvdmVycmlkZVxyXG4gICAgKi9cbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgICBfZ2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWRQYXR0ZXJuLnByb3RvdHlwZSksIFwicmVzZXRcIiwgdGhpcykuY2FsbCh0aGlzKTtcblxuICAgICAgdGhpcy5fYmxvY2tzLmZvckVhY2goZnVuY3Rpb24gKGIpIHtcbiAgICAgICAgcmV0dXJuIGIucmVzZXQoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcclxuICAgICAgQG92ZXJyaWRlXHJcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZG9Db21taXRcIixcblxuICAgIC8qKlxyXG4gICAgICBAb3ZlcnJpZGVcclxuICAgICovXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRvQ29tbWl0KCkge1xuICAgICAgdGhpcy5fYmxvY2tzLmZvckVhY2goZnVuY3Rpb24gKGIpIHtcbiAgICAgICAgcmV0dXJuIGIuZG9Db21taXQoKTtcbiAgICAgIH0pO1xuXG4gICAgICBfZ2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWRQYXR0ZXJuLnByb3RvdHlwZSksIFwiZG9Db21taXRcIiwgdGhpcykuY2FsbCh0aGlzKTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgIEBvdmVycmlkZVxyXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImFwcGVuZFRhaWxcIixcblxuICAgIC8qKlxyXG4gICAgICBAb3ZlcnJpZGVcclxuICAgICovXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFwcGVuZFRhaWwodGFpbCkge1xuICAgICAgcmV0dXJuIF9nZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZFBhdHRlcm4ucHJvdG90eXBlKSwgXCJhcHBlbmRUYWlsXCIsIHRoaXMpLmNhbGwodGhpcywgdGFpbCkuYWdncmVnYXRlKHRoaXMuX2FwcGVuZFBsYWNlaG9sZGVyKCkpO1xuICAgIH1cbiAgICAvKipcclxuICAgICAgQG92ZXJyaWRlXHJcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiX2FwcGVuZENoYXJSYXdcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2FwcGVuZENoYXJSYXcoY2gpIHtcbiAgICAgIHZhciBmbGFncyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgICBjaCA9IHRoaXMuZG9QcmVwYXJlKGNoLCBmbGFncyk7XG5cbiAgICAgIHZhciBibG9ja0l0ZXIgPSB0aGlzLl9tYXBQb3NUb0Jsb2NrKHRoaXMudmFsdWUubGVuZ3RoKTtcblxuICAgICAgdmFyIGRldGFpbHMgPSBuZXcgQ2hhbmdlRGV0YWlscygpO1xuICAgICAgaWYgKCFibG9ja0l0ZXIpIHJldHVybiBkZXRhaWxzO1xuXG4gICAgICBmb3IgKHZhciBiaSA9IGJsb2NrSXRlci5pbmRleDs7ICsrYmkpIHtcbiAgICAgICAgdmFyIF9ibG9jayA9IHRoaXMuX2Jsb2Nrc1tiaV07XG4gICAgICAgIGlmICghX2Jsb2NrKSBicmVhaztcblxuICAgICAgICB2YXIgYmxvY2tEZXRhaWxzID0gX2Jsb2NrLl9hcHBlbmRDaGFyKGNoLCBmbGFncyk7XG5cbiAgICAgICAgdmFyIHNraXAgPSBibG9ja0RldGFpbHMuc2tpcDtcbiAgICAgICAgZGV0YWlscy5hZ2dyZWdhdGUoYmxvY2tEZXRhaWxzKTtcbiAgICAgICAgaWYgKHNraXAgfHwgYmxvY2tEZXRhaWxzLnJhd0luc2VydGVkKSBicmVhazsgLy8gZ28gbmV4dCBjaGFyXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkZXRhaWxzO1xuICAgIH1cbiAgICAvKipcclxuICAgICAgQG92ZXJyaWRlXHJcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZXh0cmFjdFRhaWxcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZXh0cmFjdFRhaWwoKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgdmFyIGZyb21Qb3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IDA7XG4gICAgICB2YXIgdG9Qb3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHRoaXMudmFsdWUubGVuZ3RoO1xuICAgICAgdmFyIGNodW5rVGFpbCA9IG5ldyBDaHVua3NUYWlsRGV0YWlscygpO1xuICAgICAgaWYgKGZyb21Qb3MgPT09IHRvUG9zKSByZXR1cm4gY2h1bmtUYWlsO1xuXG4gICAgICB0aGlzLl9mb3JFYWNoQmxvY2tzSW5SYW5nZShmcm9tUG9zLCB0b1BvcywgZnVuY3Rpb24gKGIsIGJpLCBiRnJvbVBvcywgYlRvUG9zKSB7XG4gICAgICAgIHZhciBibG9ja0NodW5rID0gYi5leHRyYWN0VGFpbChiRnJvbVBvcywgYlRvUG9zKTtcbiAgICAgICAgYmxvY2tDaHVuay5zdG9wID0gX3RoaXMyLl9maW5kU3RvcEJlZm9yZShiaSk7XG4gICAgICAgIGJsb2NrQ2h1bmsuZnJvbSA9IF90aGlzMi5fYmxvY2tTdGFydFBvcyhiaSk7XG4gICAgICAgIGlmIChibG9ja0NodW5rIGluc3RhbmNlb2YgQ2h1bmtzVGFpbERldGFpbHMpIGJsb2NrQ2h1bmsuYmxvY2tJbmRleCA9IGJpO1xuICAgICAgICBjaHVua1RhaWwuZXh0ZW5kKGJsb2NrQ2h1bmspO1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBjaHVua1RhaWw7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICBAb3ZlcnJpZGVcclxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJleHRyYWN0SW5wdXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZXh0cmFjdElucHV0KCkge1xuICAgICAgdmFyIGZyb21Qb3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IDA7XG4gICAgICB2YXIgdG9Qb3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHRoaXMudmFsdWUubGVuZ3RoO1xuICAgICAgdmFyIGZsYWdzID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fTtcbiAgICAgIGlmIChmcm9tUG9zID09PSB0b1BvcykgcmV0dXJuICcnO1xuICAgICAgdmFyIGlucHV0ID0gJyc7XG5cbiAgICAgIHRoaXMuX2ZvckVhY2hCbG9ja3NJblJhbmdlKGZyb21Qb3MsIHRvUG9zLCBmdW5jdGlvbiAoYiwgXywgZnJvbVBvcywgdG9Qb3MpIHtcbiAgICAgICAgaW5wdXQgKz0gYi5leHRyYWN0SW5wdXQoZnJvbVBvcywgdG9Qb3MsIGZsYWdzKTtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gaW5wdXQ7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIl9maW5kU3RvcEJlZm9yZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfZmluZFN0b3BCZWZvcmUoYmxvY2tJbmRleCkge1xuICAgICAgdmFyIHN0b3BCZWZvcmU7XG5cbiAgICAgIGZvciAodmFyIHNpID0gMDsgc2kgPCB0aGlzLl9zdG9wcy5sZW5ndGg7ICsrc2kpIHtcbiAgICAgICAgdmFyIHN0b3AgPSB0aGlzLl9zdG9wc1tzaV07XG4gICAgICAgIGlmIChzdG9wIDw9IGJsb2NrSW5kZXgpIHN0b3BCZWZvcmUgPSBzdG9wO2Vsc2UgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzdG9wQmVmb3JlO1xuICAgIH1cbiAgICAvKiogQXBwZW5kcyBwbGFjZWhvbGRlciBkZXBlbmRpbmcgb24gbGF6aW5lc3MgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIl9hcHBlbmRQbGFjZWhvbGRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfYXBwZW5kUGxhY2Vob2xkZXIodG9CbG9ja0luZGV4KSB7XG4gICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgdmFyIGRldGFpbHMgPSBuZXcgQ2hhbmdlRGV0YWlscygpO1xuICAgICAgaWYgKHRoaXMubGF6eSAmJiB0b0Jsb2NrSW5kZXggPT0gbnVsbCkgcmV0dXJuIGRldGFpbHM7XG5cbiAgICAgIHZhciBzdGFydEJsb2NrSXRlciA9IHRoaXMuX21hcFBvc1RvQmxvY2sodGhpcy52YWx1ZS5sZW5ndGgpO1xuXG4gICAgICBpZiAoIXN0YXJ0QmxvY2tJdGVyKSByZXR1cm4gZGV0YWlscztcbiAgICAgIHZhciBzdGFydEJsb2NrSW5kZXggPSBzdGFydEJsb2NrSXRlci5pbmRleDtcbiAgICAgIHZhciBlbmRCbG9ja0luZGV4ID0gdG9CbG9ja0luZGV4ICE9IG51bGwgPyB0b0Jsb2NrSW5kZXggOiB0aGlzLl9ibG9ja3MubGVuZ3RoO1xuXG4gICAgICB0aGlzLl9ibG9ja3Muc2xpY2Uoc3RhcnRCbG9ja0luZGV4LCBlbmRCbG9ja0luZGV4KS5mb3JFYWNoKGZ1bmN0aW9uIChiKSB7XG4gICAgICAgIGlmICghYi5sYXp5IHx8IHRvQmxvY2tJbmRleCAhPSBudWxsKSB7XG4gICAgICAgICAgLy8gJEZsb3dGaXhNZSBgX2Jsb2Nrc2AgbWF5IG5vdCBiZSBwcmVzZW50XG4gICAgICAgICAgdmFyIGFyZ3MgPSBiLl9ibG9ja3MgIT0gbnVsbCA/IFtiLl9ibG9ja3MubGVuZ3RoXSA6IFtdO1xuXG4gICAgICAgICAgdmFyIGJEZXRhaWxzID0gYi5fYXBwZW5kUGxhY2Vob2xkZXIuYXBwbHkoYiwgYXJncyk7XG5cbiAgICAgICAgICBfdGhpczMuX3ZhbHVlICs9IGJEZXRhaWxzLmluc2VydGVkO1xuICAgICAgICAgIGRldGFpbHMuYWdncmVnYXRlKGJEZXRhaWxzKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBkZXRhaWxzO1xuICAgIH1cbiAgICAvKiogRmluZHMgYmxvY2sgaW4gcG9zICovXG5cbiAgfSwge1xuICAgIGtleTogXCJfbWFwUG9zVG9CbG9ja1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfbWFwUG9zVG9CbG9jayhwb3MpIHtcbiAgICAgIHZhciBhY2NWYWwgPSAnJztcblxuICAgICAgZm9yICh2YXIgYmkgPSAwOyBiaSA8IHRoaXMuX2Jsb2Nrcy5sZW5ndGg7ICsrYmkpIHtcbiAgICAgICAgdmFyIF9ibG9jazIgPSB0aGlzLl9ibG9ja3NbYmldO1xuICAgICAgICB2YXIgYmxvY2tTdGFydFBvcyA9IGFjY1ZhbC5sZW5ndGg7XG4gICAgICAgIGFjY1ZhbCArPSBfYmxvY2syLnZhbHVlO1xuXG4gICAgICAgIGlmIChwb3MgPD0gYWNjVmFsLmxlbmd0aCkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpbmRleDogYmksXG4gICAgICAgICAgICBvZmZzZXQ6IHBvcyAtIGJsb2NrU3RhcnRQb3NcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC8qKiAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiX2Jsb2NrU3RhcnRQb3NcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2Jsb2NrU3RhcnRQb3MoYmxvY2tJbmRleCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2Jsb2Nrcy5zbGljZSgwLCBibG9ja0luZGV4KS5yZWR1Y2UoZnVuY3Rpb24gKHBvcywgYikge1xuICAgICAgICByZXR1cm4gcG9zICs9IGIudmFsdWUubGVuZ3RoO1xuICAgICAgfSwgMCk7XG4gICAgfVxuICAgIC8qKiAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiX2ZvckVhY2hCbG9ja3NJblJhbmdlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9mb3JFYWNoQmxvY2tzSW5SYW5nZShmcm9tUG9zKSB7XG4gICAgICB2YXIgdG9Qb3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHRoaXMudmFsdWUubGVuZ3RoO1xuICAgICAgdmFyIGZuID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgPyBhcmd1bWVudHNbMl0gOiB1bmRlZmluZWQ7XG5cbiAgICAgIHZhciBmcm9tQmxvY2tJdGVyID0gdGhpcy5fbWFwUG9zVG9CbG9jayhmcm9tUG9zKTtcblxuICAgICAgaWYgKGZyb21CbG9ja0l0ZXIpIHtcbiAgICAgICAgdmFyIHRvQmxvY2tJdGVyID0gdGhpcy5fbWFwUG9zVG9CbG9jayh0b1Bvcyk7IC8vIHByb2Nlc3MgZmlyc3QgYmxvY2tcblxuXG4gICAgICAgIHZhciBpc1NhbWVCbG9jayA9IHRvQmxvY2tJdGVyICYmIGZyb21CbG9ja0l0ZXIuaW5kZXggPT09IHRvQmxvY2tJdGVyLmluZGV4O1xuICAgICAgICB2YXIgZnJvbUJsb2NrU3RhcnRQb3MgPSBmcm9tQmxvY2tJdGVyLm9mZnNldDtcbiAgICAgICAgdmFyIGZyb21CbG9ja0VuZFBvcyA9IHRvQmxvY2tJdGVyICYmIGlzU2FtZUJsb2NrID8gdG9CbG9ja0l0ZXIub2Zmc2V0IDogdGhpcy5fYmxvY2tzW2Zyb21CbG9ja0l0ZXIuaW5kZXhdLnZhbHVlLmxlbmd0aDtcbiAgICAgICAgZm4odGhpcy5fYmxvY2tzW2Zyb21CbG9ja0l0ZXIuaW5kZXhdLCBmcm9tQmxvY2tJdGVyLmluZGV4LCBmcm9tQmxvY2tTdGFydFBvcywgZnJvbUJsb2NrRW5kUG9zKTtcblxuICAgICAgICBpZiAodG9CbG9ja0l0ZXIgJiYgIWlzU2FtZUJsb2NrKSB7XG4gICAgICAgICAgLy8gcHJvY2VzcyBpbnRlcm1lZGlhdGUgYmxvY2tzXG4gICAgICAgICAgZm9yICh2YXIgYmkgPSBmcm9tQmxvY2tJdGVyLmluZGV4ICsgMTsgYmkgPCB0b0Jsb2NrSXRlci5pbmRleDsgKytiaSkge1xuICAgICAgICAgICAgZm4odGhpcy5fYmxvY2tzW2JpXSwgYmksIDAsIHRoaXMuX2Jsb2Nrc1tiaV0udmFsdWUubGVuZ3RoKTtcbiAgICAgICAgICB9IC8vIHByb2Nlc3MgbGFzdCBibG9ja1xuXG5cbiAgICAgICAgICBmbih0aGlzLl9ibG9ja3NbdG9CbG9ja0l0ZXIuaW5kZXhdLCB0b0Jsb2NrSXRlci5pbmRleCwgMCwgdG9CbG9ja0l0ZXIub2Zmc2V0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAvKipcclxuICAgICAgQG92ZXJyaWRlXHJcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwicmVtb3ZlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHZhciBmcm9tUG9zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAwO1xuICAgICAgdmFyIHRvUG9zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB0aGlzLnZhbHVlLmxlbmd0aDtcblxuICAgICAgdmFyIHJlbW92ZURldGFpbHMgPSBfZ2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWRQYXR0ZXJuLnByb3RvdHlwZSksIFwicmVtb3ZlXCIsIHRoaXMpLmNhbGwodGhpcywgZnJvbVBvcywgdG9Qb3MpO1xuXG4gICAgICB0aGlzLl9mb3JFYWNoQmxvY2tzSW5SYW5nZShmcm9tUG9zLCB0b1BvcywgZnVuY3Rpb24gKGIsIF8sIGJGcm9tUG9zLCBiVG9Qb3MpIHtcbiAgICAgICAgcmVtb3ZlRGV0YWlscy5hZ2dyZWdhdGUoYi5yZW1vdmUoYkZyb21Qb3MsIGJUb1BvcykpO1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiByZW1vdmVEZXRhaWxzO1xuICAgIH1cbiAgICAvKipcclxuICAgICAgQG92ZXJyaWRlXHJcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwibmVhcmVzdElucHV0UG9zXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG5lYXJlc3RJbnB1dFBvcyhjdXJzb3JQb3MpIHtcbiAgICAgIHZhciBkaXJlY3Rpb24gPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IERJUkVDVElPTi5OT05FO1xuICAgICAgLy8gVE9ETyByZWZhY3RvciAtIGV4dHJhY3QgYWxpZ25ibG9ja1xuICAgICAgdmFyIGJlZ2luQmxvY2tEYXRhID0gdGhpcy5fbWFwUG9zVG9CbG9jayhjdXJzb3JQb3MpIHx8IHtcbiAgICAgICAgaW5kZXg6IDAsXG4gICAgICAgIG9mZnNldDogMFxuICAgICAgfTtcbiAgICAgIHZhciBiZWdpbkJsb2NrT2Zmc2V0ID0gYmVnaW5CbG9ja0RhdGEub2Zmc2V0LFxuICAgICAgICAgIGJlZ2luQmxvY2tJbmRleCA9IGJlZ2luQmxvY2tEYXRhLmluZGV4O1xuICAgICAgdmFyIGJlZ2luQmxvY2sgPSB0aGlzLl9ibG9ja3NbYmVnaW5CbG9ja0luZGV4XTtcbiAgICAgIGlmICghYmVnaW5CbG9jaykgcmV0dXJuIGN1cnNvclBvcztcbiAgICAgIHZhciBiZWdpbkJsb2NrQ3Vyc29yUG9zID0gYmVnaW5CbG9ja09mZnNldDsgLy8gaWYgcG9zaXRpb24gaW5zaWRlIGJsb2NrIC0gdHJ5IHRvIGFkanVzdCBpdFxuXG4gICAgICBpZiAoYmVnaW5CbG9ja0N1cnNvclBvcyAhPT0gMCAmJiBiZWdpbkJsb2NrQ3Vyc29yUG9zIDwgYmVnaW5CbG9jay52YWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgYmVnaW5CbG9ja0N1cnNvclBvcyA9IGJlZ2luQmxvY2submVhcmVzdElucHV0UG9zKGJlZ2luQmxvY2tPZmZzZXQsIGZvcmNlRGlyZWN0aW9uKGRpcmVjdGlvbikpO1xuICAgICAgfVxuXG4gICAgICB2YXIgY3Vyc29yQXRSaWdodCA9IGJlZ2luQmxvY2tDdXJzb3JQb3MgPT09IGJlZ2luQmxvY2sudmFsdWUubGVuZ3RoO1xuICAgICAgdmFyIGN1cnNvckF0TGVmdCA9IGJlZ2luQmxvY2tDdXJzb3JQb3MgPT09IDA7IC8vICBjdXJzb3IgaXMgSU5TSURFIGZpcnN0IGJsb2NrIChub3QgYXQgYm91bmRzKVxuXG4gICAgICBpZiAoIWN1cnNvckF0TGVmdCAmJiAhY3Vyc29yQXRSaWdodCkgcmV0dXJuIHRoaXMuX2Jsb2NrU3RhcnRQb3MoYmVnaW5CbG9ja0luZGV4KSArIGJlZ2luQmxvY2tDdXJzb3JQb3M7XG4gICAgICB2YXIgc2VhcmNoQmxvY2tJbmRleCA9IGN1cnNvckF0UmlnaHQgPyBiZWdpbkJsb2NrSW5kZXggKyAxIDogYmVnaW5CbG9ja0luZGV4O1xuXG4gICAgICBpZiAoZGlyZWN0aW9uID09PSBESVJFQ1RJT04uTk9ORSkge1xuICAgICAgICAvLyBOT05FIGRpcmVjdGlvbiB1c2VkIHRvIGNhbGN1bGF0ZSBzdGFydCBpbnB1dCBwb3NpdGlvbiBpZiBubyBjaGFycyB3ZXJlIHJlbW92ZWRcbiAgICAgICAgLy8gRk9SIE5PTkU6XG4gICAgICAgIC8vIC1cbiAgICAgICAgLy8gaW5wdXR8YW55XG4gICAgICAgIC8vIC0+XG4gICAgICAgIC8vICBhbnl8aW5wdXRcbiAgICAgICAgLy8gPC1cbiAgICAgICAgLy8gIGZpbGxlZC1pbnB1dHxhbnlcbiAgICAgICAgLy8gY2hlY2sgaWYgZmlyc3QgYmxvY2sgYXQgbGVmdCBpcyBpbnB1dFxuICAgICAgICBpZiAoc2VhcmNoQmxvY2tJbmRleCA+IDApIHtcbiAgICAgICAgICB2YXIgYmxvY2tJbmRleEF0TGVmdCA9IHNlYXJjaEJsb2NrSW5kZXggLSAxO1xuICAgICAgICAgIHZhciBibG9ja0F0TGVmdCA9IHRoaXMuX2Jsb2Nrc1tibG9ja0luZGV4QXRMZWZ0XTtcbiAgICAgICAgICB2YXIgYmxvY2tJbnB1dFBvcyA9IGJsb2NrQXRMZWZ0Lm5lYXJlc3RJbnB1dFBvcygwLCBESVJFQ1RJT04uTk9ORSk7IC8vIGlzIGlucHV0XG5cbiAgICAgICAgICBpZiAoIWJsb2NrQXRMZWZ0LnZhbHVlLmxlbmd0aCB8fCBibG9ja0lucHV0UG9zICE9PSBibG9ja0F0TGVmdC52YWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9ibG9ja1N0YXJ0UG9zKHNlYXJjaEJsb2NrSW5kZXgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSAvLyAtPlxuXG5cbiAgICAgICAgdmFyIGZpcnN0SW5wdXRBdFJpZ2h0ID0gc2VhcmNoQmxvY2tJbmRleDtcblxuICAgICAgICBmb3IgKHZhciBiaSA9IGZpcnN0SW5wdXRBdFJpZ2h0OyBiaSA8IHRoaXMuX2Jsb2Nrcy5sZW5ndGg7ICsrYmkpIHtcbiAgICAgICAgICB2YXIgYmxvY2tBdFJpZ2h0ID0gdGhpcy5fYmxvY2tzW2JpXTtcblxuICAgICAgICAgIHZhciBfYmxvY2tJbnB1dFBvcyA9IGJsb2NrQXRSaWdodC5uZWFyZXN0SW5wdXRQb3MoMCwgRElSRUNUSU9OLk5PTkUpO1xuXG4gICAgICAgICAgaWYgKCFibG9ja0F0UmlnaHQudmFsdWUubGVuZ3RoIHx8IF9ibG9ja0lucHV0UG9zICE9PSBibG9ja0F0UmlnaHQudmFsdWUubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fYmxvY2tTdGFydFBvcyhiaSkgKyBfYmxvY2tJbnB1dFBvcztcbiAgICAgICAgICB9XG4gICAgICAgIH0gLy8gPC1cbiAgICAgICAgLy8gZmluZCBmaXJzdCBub24tZml4ZWQgc3ltYm9sXG5cblxuICAgICAgICBmb3IgKHZhciBfYmkgPSBzZWFyY2hCbG9ja0luZGV4IC0gMTsgX2JpID49IDA7IC0tX2JpKSB7XG4gICAgICAgICAgdmFyIF9ibG9jazMgPSB0aGlzLl9ibG9ja3NbX2JpXTtcblxuICAgICAgICAgIHZhciBfYmxvY2tJbnB1dFBvczIgPSBfYmxvY2szLm5lYXJlc3RJbnB1dFBvcygwLCBESVJFQ1RJT04uTk9ORSk7IC8vIGlzIGlucHV0XG5cblxuICAgICAgICAgIGlmICghX2Jsb2NrMy52YWx1ZS5sZW5ndGggfHwgX2Jsb2NrSW5wdXRQb3MyICE9PSBfYmxvY2szLnZhbHVlLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2Jsb2NrU3RhcnRQb3MoX2JpKSArIF9ibG9jazMudmFsdWUubGVuZ3RoO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjdXJzb3JQb3M7XG4gICAgICB9XG5cbiAgICAgIGlmIChkaXJlY3Rpb24gPT09IERJUkVDVElPTi5MRUZUIHx8IGRpcmVjdGlvbiA9PT0gRElSRUNUSU9OLkZPUkNFX0xFRlQpIHtcbiAgICAgICAgLy8gLVxuICAgICAgICAvLyAgYW55fGZpbGxlZC1pbnB1dFxuICAgICAgICAvLyA8LVxuICAgICAgICAvLyAgYW55fGZpcnN0IG5vdCBlbXB0eSBpcyBub3QtbGVuLWFsaWduZWRcbiAgICAgICAgLy8gIG5vdC0wLWFsaWduZWR8YW55XG4gICAgICAgIC8vIC0+XG4gICAgICAgIC8vICBhbnl8bm90LWxlbi1hbGlnbmVkIG9yIGVuZFxuICAgICAgICAvLyBjaGVjayBpZiBmaXJzdCBibG9jayBhdCByaWdodCBpcyBmaWxsZWQgaW5wdXRcbiAgICAgICAgdmFyIGZpcnN0RmlsbGVkQmxvY2tJbmRleEF0UmlnaHQ7XG5cbiAgICAgICAgZm9yICh2YXIgX2JpMiA9IHNlYXJjaEJsb2NrSW5kZXg7IF9iaTIgPCB0aGlzLl9ibG9ja3MubGVuZ3RoOyArK19iaTIpIHtcbiAgICAgICAgICBpZiAodGhpcy5fYmxvY2tzW19iaTJdLnZhbHVlKSB7XG4gICAgICAgICAgICBmaXJzdEZpbGxlZEJsb2NrSW5kZXhBdFJpZ2h0ID0gX2JpMjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChmaXJzdEZpbGxlZEJsb2NrSW5kZXhBdFJpZ2h0ICE9IG51bGwpIHtcbiAgICAgICAgICB2YXIgZmlsbGVkQmxvY2sgPSB0aGlzLl9ibG9ja3NbZmlyc3RGaWxsZWRCbG9ja0luZGV4QXRSaWdodF07XG5cbiAgICAgICAgICB2YXIgX2Jsb2NrSW5wdXRQb3MzID0gZmlsbGVkQmxvY2submVhcmVzdElucHV0UG9zKDAsIERJUkVDVElPTi5SSUdIVCk7XG5cbiAgICAgICAgICBpZiAoX2Jsb2NrSW5wdXRQb3MzID09PSAwICYmIGZpbGxlZEJsb2NrLnVubWFza2VkVmFsdWUubGVuZ3RoKSB7XG4gICAgICAgICAgICAvLyBmaWxsZWQgYmxvY2sgaXMgaW5wdXRcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9ibG9ja1N0YXJ0UG9zKGZpcnN0RmlsbGVkQmxvY2tJbmRleEF0UmlnaHQpICsgX2Jsb2NrSW5wdXRQb3MzO1xuICAgICAgICAgIH1cbiAgICAgICAgfSAvLyA8LVxuICAgICAgICAvLyBmaW5kIHRoaXMgdmFyc1xuXG5cbiAgICAgICAgdmFyIGZpcnN0RmlsbGVkSW5wdXRCbG9ja0luZGV4ID0gLTE7XG4gICAgICAgIHZhciBmaXJzdEVtcHR5SW5wdXRCbG9ja0luZGV4OyAvLyBUT0RPIGNvbnNpZGVyIG5lc3RlZCBlbXB0eSBpbnB1dHNcblxuICAgICAgICBmb3IgKHZhciBfYmkzID0gc2VhcmNoQmxvY2tJbmRleCAtIDE7IF9iaTMgPj0gMDsgLS1fYmkzKSB7XG4gICAgICAgICAgdmFyIF9ibG9jazQgPSB0aGlzLl9ibG9ja3NbX2JpM107XG5cbiAgICAgICAgICB2YXIgX2Jsb2NrSW5wdXRQb3M0ID0gX2Jsb2NrNC5uZWFyZXN0SW5wdXRQb3MoX2Jsb2NrNC52YWx1ZS5sZW5ndGgsIERJUkVDVElPTi5GT1JDRV9MRUZUKTtcblxuICAgICAgICAgIGlmICghX2Jsb2NrNC52YWx1ZSB8fCBfYmxvY2tJbnB1dFBvczQgIT09IDApIGZpcnN0RW1wdHlJbnB1dEJsb2NrSW5kZXggPSBfYmkzO1xuXG4gICAgICAgICAgaWYgKF9ibG9ja0lucHV0UG9zNCAhPT0gMCkge1xuICAgICAgICAgICAgaWYgKF9ibG9ja0lucHV0UG9zNCAhPT0gX2Jsb2NrNC52YWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgLy8gYWxpZ25lZCBpbnNpZGUgYmxvY2sgLSByZXR1cm4gaW1tZWRpYXRlbHlcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2Jsb2NrU3RhcnRQb3MoX2JpMykgKyBfYmxvY2tJbnB1dFBvczQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAvLyBmb3VuZCBmaWxsZWRcbiAgICAgICAgICAgICAgZmlyc3RGaWxsZWRJbnB1dEJsb2NrSW5kZXggPSBfYmkzO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGlyZWN0aW9uID09PSBESVJFQ1RJT04uTEVGVCkge1xuICAgICAgICAgIC8vIHRyeSBmaW5kIGZpcnN0IGVtcHR5IGlucHV0IGJlZm9yZSBzdGFydCBzZWFyY2hpbmcgcG9zaXRpb24gb25seSB3aGVuIG5vdCBmb3JjZWRcbiAgICAgICAgICBmb3IgKHZhciBfYmk0ID0gZmlyc3RGaWxsZWRJbnB1dEJsb2NrSW5kZXggKyAxOyBfYmk0IDw9IE1hdGgubWluKHNlYXJjaEJsb2NrSW5kZXgsIHRoaXMuX2Jsb2Nrcy5sZW5ndGggLSAxKTsgKytfYmk0KSB7XG4gICAgICAgICAgICB2YXIgX2Jsb2NrNSA9IHRoaXMuX2Jsb2Nrc1tfYmk0XTtcblxuICAgICAgICAgICAgdmFyIF9ibG9ja0lucHV0UG9zNSA9IF9ibG9jazUubmVhcmVzdElucHV0UG9zKDAsIERJUkVDVElPTi5OT05FKTtcblxuICAgICAgICAgICAgdmFyIGJsb2NrQWxpZ25lZFBvcyA9IHRoaXMuX2Jsb2NrU3RhcnRQb3MoX2JpNCkgKyBfYmxvY2tJbnB1dFBvczU7XG5cbiAgICAgICAgICAgIGlmIChibG9ja0FsaWduZWRQb3MgPiBjdXJzb3JQb3MpIGJyZWFrOyAvLyBpZiBibG9jayBpcyBub3QgbGF6eSBpbnB1dFxuXG4gICAgICAgICAgICBpZiAoX2Jsb2NrSW5wdXRQb3M1ICE9PSBfYmxvY2s1LnZhbHVlLmxlbmd0aCkgcmV0dXJuIGJsb2NrQWxpZ25lZFBvcztcbiAgICAgICAgICB9XG4gICAgICAgIH0gLy8gcHJvY2VzcyBvdmVyZmxvd1xuXG5cbiAgICAgICAgaWYgKGZpcnN0RmlsbGVkSW5wdXRCbG9ja0luZGV4ID49IDApIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5fYmxvY2tTdGFydFBvcyhmaXJzdEZpbGxlZElucHV0QmxvY2tJbmRleCkgKyB0aGlzLl9ibG9ja3NbZmlyc3RGaWxsZWRJbnB1dEJsb2NrSW5kZXhdLnZhbHVlLmxlbmd0aDtcbiAgICAgICAgfSAvLyBmb3IgbGF6eSBpZiBoYXMgYWxpZ25lZCBsZWZ0IGluc2lkZSBmaXhlZCBhbmQgaGFzIGNhbWUgdG8gdGhlIHN0YXJ0IC0gdXNlIHN0YXJ0IHBvc2l0aW9uXG5cblxuICAgICAgICBpZiAoZGlyZWN0aW9uID09PSBESVJFQ1RJT04uRk9SQ0VfTEVGVCB8fCB0aGlzLmxhenkgJiYgIXRoaXMuZXh0cmFjdElucHV0KCkgJiYgIWlzSW5wdXQodGhpcy5fYmxvY2tzW3NlYXJjaEJsb2NrSW5kZXhdKSkge1xuICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGZpcnN0RW1wdHlJbnB1dEJsb2NrSW5kZXggIT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLl9ibG9ja1N0YXJ0UG9zKGZpcnN0RW1wdHlJbnB1dEJsb2NrSW5kZXgpO1xuICAgICAgICB9IC8vIGZpbmQgZmlyc3QgaW5wdXRcblxuXG4gICAgICAgIGZvciAodmFyIF9iaTUgPSBzZWFyY2hCbG9ja0luZGV4OyBfYmk1IDwgdGhpcy5fYmxvY2tzLmxlbmd0aDsgKytfYmk1KSB7XG4gICAgICAgICAgdmFyIF9ibG9jazYgPSB0aGlzLl9ibG9ja3NbX2JpNV07XG5cbiAgICAgICAgICB2YXIgX2Jsb2NrSW5wdXRQb3M2ID0gX2Jsb2NrNi5uZWFyZXN0SW5wdXRQb3MoMCwgRElSRUNUSU9OLk5PTkUpOyAvLyBpcyBpbnB1dFxuXG5cbiAgICAgICAgICBpZiAoIV9ibG9jazYudmFsdWUubGVuZ3RoIHx8IF9ibG9ja0lucHV0UG9zNiAhPT0gX2Jsb2NrNi52YWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9ibG9ja1N0YXJ0UG9zKF9iaTUpICsgX2Jsb2NrSW5wdXRQb3M2O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAwO1xuICAgICAgfVxuXG4gICAgICBpZiAoZGlyZWN0aW9uID09PSBESVJFQ1RJT04uUklHSFQgfHwgZGlyZWN0aW9uID09PSBESVJFQ1RJT04uRk9SQ0VfUklHSFQpIHtcbiAgICAgICAgLy8gLT5cbiAgICAgICAgLy8gIGFueXxub3QtbGVuLWFsaWduZWQgYW5kIGZpbGxlZFxuICAgICAgICAvLyAgYW55fG5vdC1sZW4tYWxpZ25lZFxuICAgICAgICAvLyA8LVxuICAgICAgICAvLyAgbm90LTAtYWxpZ25lZCBvciBzdGFydHxhbnlcbiAgICAgICAgdmFyIGZpcnN0SW5wdXRCbG9ja0FsaWduZWRJbmRleDtcbiAgICAgICAgdmFyIGZpcnN0SW5wdXRCbG9ja0FsaWduZWRQb3M7XG5cbiAgICAgICAgZm9yICh2YXIgX2JpNiA9IHNlYXJjaEJsb2NrSW5kZXg7IF9iaTYgPCB0aGlzLl9ibG9ja3MubGVuZ3RoOyArK19iaTYpIHtcbiAgICAgICAgICB2YXIgX2Jsb2NrNyA9IHRoaXMuX2Jsb2Nrc1tfYmk2XTtcblxuICAgICAgICAgIHZhciBfYmxvY2tJbnB1dFBvczcgPSBfYmxvY2s3Lm5lYXJlc3RJbnB1dFBvcygwLCBESVJFQ1RJT04uTk9ORSk7XG5cbiAgICAgICAgICBpZiAoX2Jsb2NrSW5wdXRQb3M3ICE9PSBfYmxvY2s3LnZhbHVlLmxlbmd0aCkge1xuICAgICAgICAgICAgZmlyc3RJbnB1dEJsb2NrQWxpZ25lZFBvcyA9IHRoaXMuX2Jsb2NrU3RhcnRQb3MoX2JpNikgKyBfYmxvY2tJbnB1dFBvczc7XG4gICAgICAgICAgICBmaXJzdElucHV0QmxvY2tBbGlnbmVkSW5kZXggPSBfYmk2O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGZpcnN0SW5wdXRCbG9ja0FsaWduZWRJbmRleCAhPSBudWxsICYmIGZpcnN0SW5wdXRCbG9ja0FsaWduZWRQb3MgIT0gbnVsbCkge1xuICAgICAgICAgIGZvciAodmFyIF9iaTcgPSBmaXJzdElucHV0QmxvY2tBbGlnbmVkSW5kZXg7IF9iaTcgPCB0aGlzLl9ibG9ja3MubGVuZ3RoOyArK19iaTcpIHtcbiAgICAgICAgICAgIHZhciBfYmxvY2s4ID0gdGhpcy5fYmxvY2tzW19iaTddO1xuXG4gICAgICAgICAgICB2YXIgX2Jsb2NrSW5wdXRQb3M4ID0gX2Jsb2NrOC5uZWFyZXN0SW5wdXRQb3MoMCwgRElSRUNUSU9OLkZPUkNFX1JJR0hUKTtcblxuICAgICAgICAgICAgaWYgKF9ibG9ja0lucHV0UG9zOCAhPT0gX2Jsb2NrOC52YWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2Jsb2NrU3RhcnRQb3MoX2JpNykgKyBfYmxvY2tJbnB1dFBvczg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGRpcmVjdGlvbiA9PT0gRElSRUNUSU9OLkZPUkNFX1JJR0hUID8gdGhpcy52YWx1ZS5sZW5ndGggOiBmaXJzdElucHV0QmxvY2tBbGlnbmVkUG9zO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICh2YXIgX2JpOCA9IE1hdGgubWluKHNlYXJjaEJsb2NrSW5kZXgsIHRoaXMuX2Jsb2Nrcy5sZW5ndGggLSAxKTsgX2JpOCA+PSAwOyAtLV9iaTgpIHtcbiAgICAgICAgICB2YXIgX2Jsb2NrOSA9IHRoaXMuX2Jsb2Nrc1tfYmk4XTtcblxuICAgICAgICAgIHZhciBfYmxvY2tJbnB1dFBvczkgPSBfYmxvY2s5Lm5lYXJlc3RJbnB1dFBvcyhfYmxvY2s5LnZhbHVlLmxlbmd0aCwgRElSRUNUSU9OLkxFRlQpO1xuXG4gICAgICAgICAgaWYgKF9ibG9ja0lucHV0UG9zOSAhPT0gMCkge1xuICAgICAgICAgICAgdmFyIGFsaWduZWRQb3MgPSB0aGlzLl9ibG9ja1N0YXJ0UG9zKF9iaTgpICsgX2Jsb2NrSW5wdXRQb3M5O1xuXG4gICAgICAgICAgICBpZiAoYWxpZ25lZFBvcyA+PSBjdXJzb3JQb3MpIHJldHVybiBhbGlnbmVkUG9zO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjdXJzb3JQb3M7XG4gICAgfVxuICAgIC8qKiBHZXQgYmxvY2sgYnkgbmFtZSAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwibWFza2VkQmxvY2tcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbWFza2VkQmxvY2sobmFtZSkge1xuICAgICAgcmV0dXJuIHRoaXMubWFza2VkQmxvY2tzKG5hbWUpWzBdO1xuICAgIH1cbiAgICAvKiogR2V0IGFsbCBibG9ja3MgYnkgbmFtZSAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwibWFza2VkQmxvY2tzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG1hc2tlZEJsb2NrcyhuYW1lKSB7XG4gICAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgICAgdmFyIGluZGljZXMgPSB0aGlzLl9tYXNrZWRCbG9ja3NbbmFtZV07XG4gICAgICBpZiAoIWluZGljZXMpIHJldHVybiBbXTtcbiAgICAgIHJldHVybiBpbmRpY2VzLm1hcChmdW5jdGlvbiAoZ2kpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzNC5fYmxvY2tzW2dpXTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzdGF0ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIF9nZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZFBhdHRlcm4ucHJvdG90eXBlKSwgXCJzdGF0ZVwiLCB0aGlzKSwge1xuICAgICAgICBfYmxvY2tzOiB0aGlzLl9ibG9ja3MubWFwKGZ1bmN0aW9uIChiKSB7XG4gICAgICAgICAgcmV0dXJuIGIuc3RhdGU7XG4gICAgICAgIH0pXG4gICAgICB9KTtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHN0YXRlKSB7XG4gICAgICB2YXIgX2Jsb2NrcyA9IHN0YXRlLl9ibG9ja3MsXG4gICAgICAgICAgbWFza2VkU3RhdGUgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoc3RhdGUsIFtcIl9ibG9ja3NcIl0pO1xuXG4gICAgICB0aGlzLl9ibG9ja3MuZm9yRWFjaChmdW5jdGlvbiAoYiwgYmkpIHtcbiAgICAgICAgcmV0dXJuIGIuc3RhdGUgPSBfYmxvY2tzW2JpXTtcbiAgICAgIH0pO1xuXG4gICAgICBfc2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWRQYXR0ZXJuLnByb3RvdHlwZSksIFwic3RhdGVcIiwgbWFza2VkU3RhdGUsIHRoaXMsIHRydWUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJpc0NvbXBsZXRlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fYmxvY2tzLmV2ZXJ5KGZ1bmN0aW9uIChiKSB7XG4gICAgICAgIHJldHVybiBiLmlzQ29tcGxldGU7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidW5tYXNrZWRWYWx1ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2Jsb2Nrcy5yZWR1Y2UoZnVuY3Rpb24gKHN0ciwgYikge1xuICAgICAgICByZXR1cm4gc3RyICs9IGIudW5tYXNrZWRWYWx1ZTtcbiAgICAgIH0sICcnKTtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHVubWFza2VkVmFsdWUpIHtcbiAgICAgIF9zZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZFBhdHRlcm4ucHJvdG90eXBlKSwgXCJ1bm1hc2tlZFZhbHVlXCIsIHVubWFza2VkVmFsdWUsIHRoaXMsIHRydWUpO1xuICAgIH1cbiAgICAvKipcclxuICAgICAgQG92ZXJyaWRlXHJcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwidmFsdWVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIC8vIFRPRE8gcmV0dXJuIF92YWx1ZSB3aGVuIG5vdCBpbiBjaGFuZ2U/XG4gICAgICByZXR1cm4gdGhpcy5fYmxvY2tzLnJlZHVjZShmdW5jdGlvbiAoc3RyLCBiKSB7XG4gICAgICAgIHJldHVybiBzdHIgKz0gYi52YWx1ZTtcbiAgICAgIH0sICcnKTtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHZhbHVlKSB7XG4gICAgICBfc2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWRQYXR0ZXJuLnByb3RvdHlwZSksIFwidmFsdWVcIiwgdmFsdWUsIHRoaXMsIHRydWUpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBNYXNrZWRQYXR0ZXJuO1xufShNYXNrZWQpO1xuTWFza2VkUGF0dGVybi5ERUZBVUxUUyA9IHtcbiAgbGF6eTogdHJ1ZSxcbiAgcGxhY2Vob2xkZXJDaGFyOiAnXydcbn07XG5NYXNrZWRQYXR0ZXJuLlNUT1BfQ0hBUiA9ICdgJztcbk1hc2tlZFBhdHRlcm4uRVNDQVBFX0NIQVIgPSAnXFxcXCc7XG5NYXNrZWRQYXR0ZXJuLklucHV0RGVmaW5pdGlvbiA9IFBhdHRlcm5JbnB1dERlZmluaXRpb247XG5NYXNrZWRQYXR0ZXJuLkZpeGVkRGVmaW5pdGlvbiA9IFBhdHRlcm5GaXhlZERlZmluaXRpb247XG5cbmZ1bmN0aW9uIGlzSW5wdXQoYmxvY2spIHtcbiAgaWYgKCFibG9jaykgcmV0dXJuIGZhbHNlO1xuICB2YXIgdmFsdWUgPSBibG9jay52YWx1ZTtcbiAgcmV0dXJuICF2YWx1ZSB8fCBibG9jay5uZWFyZXN0SW5wdXRQb3MoMCwgRElSRUNUSU9OLk5PTkUpICE9PSB2YWx1ZS5sZW5ndGg7XG59XG5cbi8qKiBQYXR0ZXJuIHdoaWNoIGFjY2VwdHMgcmFuZ2VzICovXG52YXIgTWFza2VkUmFuZ2UgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9NYXNrZWRQYXR0ZXJuKSB7XG4gIF9pbmhlcml0cyhNYXNrZWRSYW5nZSwgX01hc2tlZFBhdHRlcm4pO1xuXG4gIGZ1bmN0aW9uIE1hc2tlZFJhbmdlKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNYXNrZWRSYW5nZSk7XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX2dldFByb3RvdHlwZU9mKE1hc2tlZFJhbmdlKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhNYXNrZWRSYW5nZSwgW3tcbiAgICBrZXk6IFwiX3VwZGF0ZVwiLFxuXG4gICAgLyoqXHJcbiAgICAgIEBvdmVycmlkZVxyXG4gICAgKi9cbiAgICB2YWx1ZTogZnVuY3Rpb24gX3VwZGF0ZShvcHRzKSB7XG4gICAgICAvLyBUT0RPIHR5cGVcbiAgICAgIG9wdHMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgdG86IHRoaXMudG8gfHwgMCxcbiAgICAgICAgZnJvbTogdGhpcy5mcm9tIHx8IDBcbiAgICAgIH0sIG9wdHMpO1xuICAgICAgdmFyIG1heExlbmd0aCA9IFN0cmluZyhvcHRzLnRvKS5sZW5ndGg7XG4gICAgICBpZiAob3B0cy5tYXhMZW5ndGggIT0gbnVsbCkgbWF4TGVuZ3RoID0gTWF0aC5tYXgobWF4TGVuZ3RoLCBvcHRzLm1heExlbmd0aCk7XG4gICAgICBvcHRzLm1heExlbmd0aCA9IG1heExlbmd0aDtcbiAgICAgIHZhciBmcm9tU3RyID0gU3RyaW5nKG9wdHMuZnJvbSkucGFkU3RhcnQobWF4TGVuZ3RoLCAnMCcpO1xuICAgICAgdmFyIHRvU3RyID0gU3RyaW5nKG9wdHMudG8pLnBhZFN0YXJ0KG1heExlbmd0aCwgJzAnKTtcbiAgICAgIHZhciBzYW1lQ2hhcnNDb3VudCA9IDA7XG5cbiAgICAgIHdoaWxlIChzYW1lQ2hhcnNDb3VudCA8IHRvU3RyLmxlbmd0aCAmJiB0b1N0cltzYW1lQ2hhcnNDb3VudF0gPT09IGZyb21TdHJbc2FtZUNoYXJzQ291bnRdKSB7XG4gICAgICAgICsrc2FtZUNoYXJzQ291bnQ7XG4gICAgICB9XG5cbiAgICAgIG9wdHMubWFzayA9IHRvU3RyLnNsaWNlKDAsIHNhbWVDaGFyc0NvdW50KS5yZXBsYWNlKC8wL2csICdcXFxcMCcpICsgJzAnLnJlcGVhdChtYXhMZW5ndGggLSBzYW1lQ2hhcnNDb3VudCk7XG5cbiAgICAgIF9nZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZFJhbmdlLnByb3RvdHlwZSksIFwiX3VwZGF0ZVwiLCB0aGlzKS5jYWxsKHRoaXMsIG9wdHMpO1xuICAgIH1cbiAgICAvKipcclxuICAgICAgQG92ZXJyaWRlXHJcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiYm91bmRhcmllc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBib3VuZGFyaWVzKHN0cikge1xuICAgICAgdmFyIG1pbnN0ciA9ICcnO1xuICAgICAgdmFyIG1heHN0ciA9ICcnO1xuXG4gICAgICB2YXIgX3JlZiA9IHN0ci5tYXRjaCgvXihcXEQqKShcXGQqKShcXEQqKS8pIHx8IFtdLFxuICAgICAgICAgIF9yZWYyID0gX3NsaWNlZFRvQXJyYXkoX3JlZiwgMyksXG4gICAgICAgICAgcGxhY2Vob2xkZXIgPSBfcmVmMlsxXSxcbiAgICAgICAgICBudW0gPSBfcmVmMlsyXTtcblxuICAgICAgaWYgKG51bSkge1xuICAgICAgICBtaW5zdHIgPSAnMCcucmVwZWF0KHBsYWNlaG9sZGVyLmxlbmd0aCkgKyBudW07XG4gICAgICAgIG1heHN0ciA9ICc5Jy5yZXBlYXQocGxhY2Vob2xkZXIubGVuZ3RoKSArIG51bTtcbiAgICAgIH1cblxuICAgICAgbWluc3RyID0gbWluc3RyLnBhZEVuZCh0aGlzLm1heExlbmd0aCwgJzAnKTtcbiAgICAgIG1heHN0ciA9IG1heHN0ci5wYWRFbmQodGhpcy5tYXhMZW5ndGgsICc5Jyk7XG4gICAgICByZXR1cm4gW21pbnN0ciwgbWF4c3RyXTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgIEBvdmVycmlkZVxyXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImRvUHJlcGFyZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkb1ByZXBhcmUoc3RyKSB7XG4gICAgICB2YXIgZmxhZ3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgICAgc3RyID0gX2dldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkUmFuZ2UucHJvdG90eXBlKSwgXCJkb1ByZXBhcmVcIiwgdGhpcykuY2FsbCh0aGlzLCBzdHIsIGZsYWdzKS5yZXBsYWNlKC9cXEQvZywgJycpO1xuICAgICAgaWYgKCF0aGlzLmF1dG9maXgpIHJldHVybiBzdHI7XG4gICAgICB2YXIgZnJvbVN0ciA9IFN0cmluZyh0aGlzLmZyb20pLnBhZFN0YXJ0KHRoaXMubWF4TGVuZ3RoLCAnMCcpO1xuICAgICAgdmFyIHRvU3RyID0gU3RyaW5nKHRoaXMudG8pLnBhZFN0YXJ0KHRoaXMubWF4TGVuZ3RoLCAnMCcpO1xuICAgICAgdmFyIHZhbCA9IHRoaXMudmFsdWU7XG4gICAgICB2YXIgcHJlcFN0ciA9ICcnO1xuXG4gICAgICBmb3IgKHZhciBjaSA9IDA7IGNpIDwgc3RyLmxlbmd0aDsgKytjaSkge1xuICAgICAgICB2YXIgbmV4dFZhbCA9IHZhbCArIHByZXBTdHIgKyBzdHJbY2ldO1xuXG4gICAgICAgIHZhciBfdGhpcyRib3VuZGFyaWVzID0gdGhpcy5ib3VuZGFyaWVzKG5leHRWYWwpLFxuICAgICAgICAgICAgX3RoaXMkYm91bmRhcmllczIgPSBfc2xpY2VkVG9BcnJheShfdGhpcyRib3VuZGFyaWVzLCAyKSxcbiAgICAgICAgICAgIG1pbnN0ciA9IF90aGlzJGJvdW5kYXJpZXMyWzBdLFxuICAgICAgICAgICAgbWF4c3RyID0gX3RoaXMkYm91bmRhcmllczJbMV07XG5cbiAgICAgICAgaWYgKE51bWJlcihtYXhzdHIpIDwgdGhpcy5mcm9tKSBwcmVwU3RyICs9IGZyb21TdHJbbmV4dFZhbC5sZW5ndGggLSAxXTtlbHNlIGlmIChOdW1iZXIobWluc3RyKSA+IHRoaXMudG8pIHByZXBTdHIgKz0gdG9TdHJbbmV4dFZhbC5sZW5ndGggLSAxXTtlbHNlIHByZXBTdHIgKz0gc3RyW2NpXTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXBTdHI7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICBAb3ZlcnJpZGVcclxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJkb1ZhbGlkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRvVmFsaWRhdGUoKSB7XG4gICAgICB2YXIgX2dldDI7XG5cbiAgICAgIHZhciBzdHIgPSB0aGlzLnZhbHVlO1xuICAgICAgdmFyIGZpcnN0Tm9uWmVybyA9IHN0ci5zZWFyY2goL1teMF0vKTtcbiAgICAgIGlmIChmaXJzdE5vblplcm8gPT09IC0xICYmIHN0ci5sZW5ndGggPD0gdGhpcy5fbWF0Y2hGcm9tKSByZXR1cm4gdHJ1ZTtcblxuICAgICAgdmFyIF90aGlzJGJvdW5kYXJpZXMzID0gdGhpcy5ib3VuZGFyaWVzKHN0ciksXG4gICAgICAgICAgX3RoaXMkYm91bmRhcmllczQgPSBfc2xpY2VkVG9BcnJheShfdGhpcyRib3VuZGFyaWVzMywgMiksXG4gICAgICAgICAgbWluc3RyID0gX3RoaXMkYm91bmRhcmllczRbMF0sXG4gICAgICAgICAgbWF4c3RyID0gX3RoaXMkYm91bmRhcmllczRbMV07XG5cbiAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5mcm9tIDw9IE51bWJlcihtYXhzdHIpICYmIE51bWJlcihtaW5zdHIpIDw9IHRoaXMudG8gJiYgKF9nZXQyID0gX2dldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkUmFuZ2UucHJvdG90eXBlKSwgXCJkb1ZhbGlkYXRlXCIsIHRoaXMpKS5jYWxsLmFwcGx5KF9nZXQyLCBbdGhpc10uY29uY2F0KGFyZ3MpKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiX21hdGNoRnJvbVwiLFxuXG4gICAgLyoqXHJcbiAgICAgIE9wdGlvbmFsbHkgc2V0cyBtYXggbGVuZ3RoIG9mIHBhdHRlcm4uXHJcbiAgICAgIFVzZWQgd2hlbiBwYXR0ZXJuIGxlbmd0aCBpcyBsb25nZXIgdGhlbiBgdG9gIHBhcmFtIGxlbmd0aC4gUGFkcyB6ZXJvcyBhdCBzdGFydCBpbiB0aGlzIGNhc2UuXHJcbiAgICAqL1xuXG4gICAgLyoqIE1pbiBib3VuZCAqL1xuXG4gICAgLyoqIE1heCBib3VuZCAqL1xuXG4gICAgLyoqICovXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5tYXhMZW5ndGggLSBTdHJpbmcodGhpcy5mcm9tKS5sZW5ndGg7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImlzQ29tcGxldGVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBfZ2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWRSYW5nZS5wcm90b3R5cGUpLCBcImlzQ29tcGxldGVcIiwgdGhpcykgJiYgQm9vbGVhbih0aGlzLnZhbHVlKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gTWFza2VkUmFuZ2U7XG59KE1hc2tlZFBhdHRlcm4pO1xuXG4vKiogRGF0ZSBtYXNrICovXG5cbnZhciBNYXNrZWREYXRlID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfTWFza2VkUGF0dGVybikge1xuICBfaW5oZXJpdHMoTWFza2VkRGF0ZSwgX01hc2tlZFBhdHRlcm4pO1xuXG4gIC8qKiBQYXJzZSBzdHJpbmcgdG8gRGF0ZSAqL1xuXG4gIC8qKiBGb3JtYXQgRGF0ZSB0byBzdHJpbmcgKi9cblxuICAvKiogUGF0dGVybiBtYXNrIGZvciBkYXRlIGFjY29yZGluZyB0byB7QGxpbmsgTWFza2VkRGF0ZSNmb3JtYXR9ICovXG5cbiAgLyoqIFN0YXJ0IGRhdGUgKi9cblxuICAvKiogRW5kIGRhdGUgKi9cblxuICAvKiogKi9cblxuICAvKipcclxuICAgIEBwYXJhbSB7T2JqZWN0fSBvcHRzXHJcbiAgKi9cbiAgZnVuY3Rpb24gTWFza2VkRGF0ZShvcHRzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1hc2tlZERhdGUpO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9nZXRQcm90b3R5cGVPZihNYXNrZWREYXRlKS5jYWxsKHRoaXMsIE9iamVjdC5hc3NpZ24oe30sIE1hc2tlZERhdGUuREVGQVVMVFMsIHt9LCBvcHRzKSkpO1xuICB9XG4gIC8qKlxyXG4gICAgQG92ZXJyaWRlXHJcbiAgKi9cblxuXG4gIF9jcmVhdGVDbGFzcyhNYXNrZWREYXRlLCBbe1xuICAgIGtleTogXCJfdXBkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF91cGRhdGUob3B0cykge1xuICAgICAgaWYgKG9wdHMubWFzayA9PT0gRGF0ZSkgZGVsZXRlIG9wdHMubWFzaztcbiAgICAgIGlmIChvcHRzLnBhdHRlcm4pIG9wdHMubWFzayA9IG9wdHMucGF0dGVybjtcbiAgICAgIHZhciBibG9ja3MgPSBvcHRzLmJsb2NrcztcbiAgICAgIG9wdHMuYmxvY2tzID0gT2JqZWN0LmFzc2lnbih7fSwgTWFza2VkRGF0ZS5HRVRfREVGQVVMVF9CTE9DS1MoKSk7IC8vIGFkanVzdCB5ZWFyIGJsb2NrXG5cbiAgICAgIGlmIChvcHRzLm1pbikgb3B0cy5ibG9ja3MuWS5mcm9tID0gb3B0cy5taW4uZ2V0RnVsbFllYXIoKTtcbiAgICAgIGlmIChvcHRzLm1heCkgb3B0cy5ibG9ja3MuWS50byA9IG9wdHMubWF4LmdldEZ1bGxZZWFyKCk7XG5cbiAgICAgIGlmIChvcHRzLm1pbiAmJiBvcHRzLm1heCAmJiBvcHRzLmJsb2Nrcy5ZLmZyb20gPT09IG9wdHMuYmxvY2tzLlkudG8pIHtcbiAgICAgICAgb3B0cy5ibG9ja3MubS5mcm9tID0gb3B0cy5taW4uZ2V0TW9udGgoKSArIDE7XG4gICAgICAgIG9wdHMuYmxvY2tzLm0udG8gPSBvcHRzLm1heC5nZXRNb250aCgpICsgMTtcblxuICAgICAgICBpZiAob3B0cy5ibG9ja3MubS5mcm9tID09PSBvcHRzLmJsb2Nrcy5tLnRvKSB7XG4gICAgICAgICAgb3B0cy5ibG9ja3MuZC5mcm9tID0gb3B0cy5taW4uZ2V0RGF0ZSgpO1xuICAgICAgICAgIG9wdHMuYmxvY2tzLmQudG8gPSBvcHRzLm1heC5nZXREYXRlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgT2JqZWN0LmFzc2lnbihvcHRzLmJsb2NrcywgYmxvY2tzKTsgLy8gYWRkIGF1dG9maXhcblxuICAgICAgT2JqZWN0LmtleXMob3B0cy5ibG9ja3MpLmZvckVhY2goZnVuY3Rpb24gKGJrKSB7XG4gICAgICAgIHZhciBiID0gb3B0cy5ibG9ja3NbYmtdO1xuICAgICAgICBpZiAoISgnYXV0b2ZpeCcgaW4gYikpIGIuYXV0b2ZpeCA9IG9wdHMuYXV0b2ZpeDtcbiAgICAgIH0pO1xuXG4gICAgICBfZ2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWREYXRlLnByb3RvdHlwZSksIFwiX3VwZGF0ZVwiLCB0aGlzKS5jYWxsKHRoaXMsIG9wdHMpO1xuICAgIH1cbiAgICAvKipcclxuICAgICAgQG92ZXJyaWRlXHJcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZG9WYWxpZGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkb1ZhbGlkYXRlKCkge1xuICAgICAgdmFyIF9nZXQyO1xuXG4gICAgICB2YXIgZGF0ZSA9IHRoaXMuZGF0ZTtcblxuICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAoX2dldDIgPSBfZ2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWREYXRlLnByb3RvdHlwZSksIFwiZG9WYWxpZGF0ZVwiLCB0aGlzKSkuY2FsbC5hcHBseShfZ2V0MiwgW3RoaXNdLmNvbmNhdChhcmdzKSkgJiYgKCF0aGlzLmlzQ29tcGxldGUgfHwgdGhpcy5pc0RhdGVFeGlzdCh0aGlzLnZhbHVlKSAmJiBkYXRlICE9IG51bGwgJiYgKHRoaXMubWluID09IG51bGwgfHwgdGhpcy5taW4gPD0gZGF0ZSkgJiYgKHRoaXMubWF4ID09IG51bGwgfHwgZGF0ZSA8PSB0aGlzLm1heCkpO1xuICAgIH1cbiAgICAvKiogQ2hlY2tzIGlmIGRhdGUgaXMgZXhpc3RzICovXG5cbiAgfSwge1xuICAgIGtleTogXCJpc0RhdGVFeGlzdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpc0RhdGVFeGlzdChzdHIpIHtcbiAgICAgIHJldHVybiB0aGlzLmZvcm1hdCh0aGlzLnBhcnNlKHN0cikpID09PSBzdHI7XG4gICAgfVxuICAgIC8qKiBQYXJzZWQgRGF0ZSAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZGF0ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuaXNDb21wbGV0ZSA/IHRoaXMucGFyc2UodGhpcy52YWx1ZSkgOiBudWxsO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQoZGF0ZSkge1xuICAgICAgdGhpcy52YWx1ZSA9IHRoaXMuZm9ybWF0KGRhdGUpO1xuICAgIH1cbiAgICAvKipcclxuICAgICAgQG92ZXJyaWRlXHJcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwidHlwZWRWYWx1ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuZGF0ZTtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHZhbHVlKSB7XG4gICAgICB0aGlzLmRhdGUgPSB2YWx1ZTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gTWFza2VkRGF0ZTtcbn0oTWFza2VkUGF0dGVybik7XG5NYXNrZWREYXRlLkRFRkFVTFRTID0ge1xuICBwYXR0ZXJuOiAnZHsufWBtey59YFknLFxuICBmb3JtYXQ6IGZ1bmN0aW9uIGZvcm1hdChkYXRlKSB7XG4gICAgdmFyIGRheSA9IFN0cmluZyhkYXRlLmdldERhdGUoKSkucGFkU3RhcnQoMiwgJzAnKTtcbiAgICB2YXIgbW9udGggPSBTdHJpbmcoZGF0ZS5nZXRNb250aCgpICsgMSkucGFkU3RhcnQoMiwgJzAnKTtcbiAgICB2YXIgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICByZXR1cm4gW2RheSwgbW9udGgsIHllYXJdLmpvaW4oJy4nKTtcbiAgfSxcbiAgcGFyc2U6IGZ1bmN0aW9uIHBhcnNlKHN0cikge1xuICAgIHZhciBfc3RyJHNwbGl0ID0gc3RyLnNwbGl0KCcuJyksXG4gICAgICAgIF9zdHIkc3BsaXQyID0gX3NsaWNlZFRvQXJyYXkoX3N0ciRzcGxpdCwgMyksXG4gICAgICAgIGRheSA9IF9zdHIkc3BsaXQyWzBdLFxuICAgICAgICBtb250aCA9IF9zdHIkc3BsaXQyWzFdLFxuICAgICAgICB5ZWFyID0gX3N0ciRzcGxpdDJbMl07XG5cbiAgICByZXR1cm4gbmV3IERhdGUoeWVhciwgbW9udGggLSAxLCBkYXkpO1xuICB9XG59O1xuXG5NYXNrZWREYXRlLkdFVF9ERUZBVUxUX0JMT0NLUyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHtcbiAgICBkOiB7XG4gICAgICBtYXNrOiBNYXNrZWRSYW5nZSxcbiAgICAgIGZyb206IDEsXG4gICAgICB0bzogMzEsXG4gICAgICBtYXhMZW5ndGg6IDJcbiAgICB9LFxuICAgIG06IHtcbiAgICAgIG1hc2s6IE1hc2tlZFJhbmdlLFxuICAgICAgZnJvbTogMSxcbiAgICAgIHRvOiAxMixcbiAgICAgIG1heExlbmd0aDogMlxuICAgIH0sXG4gICAgWToge1xuICAgICAgbWFzazogTWFza2VkUmFuZ2UsXG4gICAgICBmcm9tOiAxOTAwLFxuICAgICAgdG86IDk5OTlcbiAgICB9XG4gIH07XG59O1xuXG4vKipcclxuICBHZW5lcmljIGVsZW1lbnQgQVBJIHRvIHVzZSB3aXRoIG1hc2tcclxuICBAaW50ZXJmYWNlXHJcbiovXG52YXIgTWFza0VsZW1lbnQgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBNYXNrRWxlbWVudCgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTWFza0VsZW1lbnQpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKE1hc2tFbGVtZW50LCBbe1xuICAgIGtleTogXCJzZWxlY3RcIixcblxuICAgIC8qKiBTYWZlbHkgc2V0cyBlbGVtZW50IHNlbGVjdGlvbiAqL1xuICAgIHZhbHVlOiBmdW5jdGlvbiBzZWxlY3Qoc3RhcnQsIGVuZCkge1xuICAgICAgaWYgKHN0YXJ0ID09IG51bGwgfHwgZW5kID09IG51bGwgfHwgc3RhcnQgPT09IHRoaXMuc2VsZWN0aW9uU3RhcnQgJiYgZW5kID09PSB0aGlzLnNlbGVjdGlvbkVuZCkgcmV0dXJuO1xuXG4gICAgICB0cnkge1xuICAgICAgICB0aGlzLl91bnNhZmVTZWxlY3Qoc3RhcnQsIGVuZCk7XG4gICAgICB9IGNhdGNoIChlKSB7fVxuICAgIH1cbiAgICAvKiogU2hvdWxkIGJlIG92ZXJyaWRlbiBpbiBzdWJjbGFzc2VzICovXG5cbiAgfSwge1xuICAgIGtleTogXCJfdW5zYWZlU2VsZWN0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF91bnNhZmVTZWxlY3Qoc3RhcnQsIGVuZCkge31cbiAgICAvKiogU2hvdWxkIGJlIG92ZXJyaWRlbiBpbiBzdWJjbGFzc2VzICovXG5cbiAgfSwge1xuICAgIGtleTogXCJiaW5kRXZlbnRzXCIsXG5cbiAgICAvKiogU2hvdWxkIGJlIG92ZXJyaWRlbiBpbiBzdWJjbGFzc2VzICovXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGJpbmRFdmVudHMoaGFuZGxlcnMpIHt9XG4gICAgLyoqIFNob3VsZCBiZSBvdmVycmlkZW4gaW4gc3ViY2xhc3NlcyAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwidW5iaW5kRXZlbnRzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVuYmluZEV2ZW50cygpIHt9XG4gIH0sIHtcbiAgICBrZXk6IFwic2VsZWN0aW9uU3RhcnRcIixcblxuICAgIC8qKiAqL1xuXG4gICAgLyoqICovXG5cbiAgICAvKiogKi9cblxuICAgIC8qKiBTYWZlbHkgcmV0dXJucyBzZWxlY3Rpb24gc3RhcnQgKi9cbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHZhciBzdGFydDtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgc3RhcnQgPSB0aGlzLl91bnNhZmVTZWxlY3Rpb25TdGFydDtcbiAgICAgIH0gY2F0Y2ggKGUpIHt9XG5cbiAgICAgIHJldHVybiBzdGFydCAhPSBudWxsID8gc3RhcnQgOiB0aGlzLnZhbHVlLmxlbmd0aDtcbiAgICB9XG4gICAgLyoqIFNhZmVseSByZXR1cm5zIHNlbGVjdGlvbiBlbmQgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInNlbGVjdGlvbkVuZFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgdmFyIGVuZDtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgZW5kID0gdGhpcy5fdW5zYWZlU2VsZWN0aW9uRW5kO1xuICAgICAgfSBjYXRjaCAoZSkge31cblxuICAgICAgcmV0dXJuIGVuZCAhPSBudWxsID8gZW5kIDogdGhpcy52YWx1ZS5sZW5ndGg7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImlzQWN0aXZlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIE1hc2tFbGVtZW50O1xufSgpO1xuXG4vKiogQnJpZGdlIGJldHdlZW4gSFRNTEVsZW1lbnQgYW5kIHtAbGluayBNYXNrZWR9ICovXG5cbnZhciBIVE1MTWFza0VsZW1lbnQgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9NYXNrRWxlbWVudCkge1xuICBfaW5oZXJpdHMoSFRNTE1hc2tFbGVtZW50LCBfTWFza0VsZW1lbnQpO1xuXG4gIC8qKiBNYXBwaW5nIGJldHdlZW4gSFRNTEVsZW1lbnQgZXZlbnRzIGFuZCBtYXNrIGludGVybmFsIGV2ZW50cyAqL1xuXG4gIC8qKiBIVE1MRWxlbWVudCB0byB1c2UgbWFzayBvbiAqL1xuXG4gIC8qKlxyXG4gICAgQHBhcmFtIHtIVE1MSW5wdXRFbGVtZW50fEhUTUxUZXh0QXJlYUVsZW1lbnR9IGlucHV0XHJcbiAgKi9cbiAgZnVuY3Rpb24gSFRNTE1hc2tFbGVtZW50KGlucHV0KSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEhUTUxNYXNrRWxlbWVudCk7XG5cbiAgICBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9nZXRQcm90b3R5cGVPZihIVE1MTWFza0VsZW1lbnQpLmNhbGwodGhpcykpO1xuICAgIF90aGlzLmlucHV0ID0gaW5wdXQ7XG4gICAgX3RoaXMuX2hhbmRsZXJzID0ge307XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG4gIC8qKlxyXG4gICAgSXMgZWxlbWVudCBpbiBmb2N1c1xyXG4gICAgQHJlYWRvbmx5XHJcbiAgKi9cblxuXG4gIF9jcmVhdGVDbGFzcyhIVE1MTWFza0VsZW1lbnQsIFt7XG4gICAga2V5OiBcIl91bnNhZmVTZWxlY3RcIixcblxuICAgIC8qKlxyXG4gICAgICBTZXRzIEhUTUxFbGVtZW50IHNlbGVjdGlvblxyXG4gICAgICBAb3ZlcnJpZGVcclxuICAgICovXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF91bnNhZmVTZWxlY3Qoc3RhcnQsIGVuZCkge1xuICAgICAgdGhpcy5pbnB1dC5zZXRTZWxlY3Rpb25SYW5nZShzdGFydCwgZW5kKTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgIEhUTUxFbGVtZW50IHZhbHVlXHJcbiAgICAgIEBvdmVycmlkZVxyXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImJpbmRFdmVudHNcIixcblxuICAgIC8qKlxyXG4gICAgICBCaW5kcyBIVE1MRWxlbWVudCBldmVudHMgdG8gbWFzayBpbnRlcm5hbCBldmVudHNcclxuICAgICAgQG92ZXJyaWRlXHJcbiAgICAqL1xuICAgIHZhbHVlOiBmdW5jdGlvbiBiaW5kRXZlbnRzKGhhbmRsZXJzKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgT2JqZWN0LmtleXMoaGFuZGxlcnMpLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHJldHVybiBfdGhpczIuX3RvZ2dsZUV2ZW50SGFuZGxlcihIVE1MTWFza0VsZW1lbnQuRVZFTlRTX01BUFtldmVudF0sIGhhbmRsZXJzW2V2ZW50XSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgIFVuYmluZHMgSFRNTEVsZW1lbnQgZXZlbnRzIHRvIG1hc2sgaW50ZXJuYWwgZXZlbnRzXHJcbiAgICAgIEBvdmVycmlkZVxyXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInVuYmluZEV2ZW50c1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB1bmJpbmRFdmVudHMoKSB7XG4gICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgT2JqZWN0LmtleXModGhpcy5faGFuZGxlcnMpLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHJldHVybiBfdGhpczMuX3RvZ2dsZUV2ZW50SGFuZGxlcihldmVudCk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgLyoqICovXG5cbiAgfSwge1xuICAgIGtleTogXCJfdG9nZ2xlRXZlbnRIYW5kbGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF90b2dnbGVFdmVudEhhbmRsZXIoZXZlbnQsIGhhbmRsZXIpIHtcbiAgICAgIGlmICh0aGlzLl9oYW5kbGVyc1tldmVudF0pIHtcbiAgICAgICAgdGhpcy5pbnB1dC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCB0aGlzLl9oYW5kbGVyc1tldmVudF0pO1xuICAgICAgICBkZWxldGUgdGhpcy5faGFuZGxlcnNbZXZlbnRdO1xuICAgICAgfVxuXG4gICAgICBpZiAoaGFuZGxlcikge1xuICAgICAgICB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIpO1xuICAgICAgICB0aGlzLl9oYW5kbGVyc1tldmVudF0gPSBoYW5kbGVyO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJpc0FjdGl2ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuaW5wdXQgPT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICBSZXR1cm5zIEhUTUxFbGVtZW50IHNlbGVjdGlvbiBzdGFydFxyXG4gICAgICBAb3ZlcnJpZGVcclxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJfdW5zYWZlU2VsZWN0aW9uU3RhcnRcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmlucHV0LnNlbGVjdGlvblN0YXJ0O1xuICAgIH1cbiAgICAvKipcclxuICAgICAgUmV0dXJucyBIVE1MRWxlbWVudCBzZWxlY3Rpb24gZW5kXHJcbiAgICAgIEBvdmVycmlkZVxyXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIl91bnNhZmVTZWxlY3Rpb25FbmRcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmlucHV0LnNlbGVjdGlvbkVuZDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidmFsdWVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmlucHV0LnZhbHVlO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsdWUpIHtcbiAgICAgIHRoaXMuaW5wdXQudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gSFRNTE1hc2tFbGVtZW50O1xufShNYXNrRWxlbWVudCk7XG5IVE1MTWFza0VsZW1lbnQuRVZFTlRTX01BUCA9IHtcbiAgc2VsZWN0aW9uQ2hhbmdlOiAna2V5ZG93bicsXG4gIGlucHV0OiAnaW5wdXQnLFxuICBkcm9wOiAnZHJvcCcsXG4gIGNsaWNrOiAnY2xpY2snLFxuICBmb2N1czogJ2ZvY3VzJyxcbiAgY29tbWl0OiAnYmx1cidcbn07XG5cbi8qKiBMaXN0ZW5zIHRvIGVsZW1lbnQgZXZlbnRzIGFuZCBjb250cm9scyBjaGFuZ2VzIGJldHdlZW4gZWxlbWVudCBhbmQge0BsaW5rIE1hc2tlZH0gKi9cblxudmFyIElucHV0TWFzayA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIC8qKlxyXG4gICAgVmlldyBlbGVtZW50XHJcbiAgICBAcmVhZG9ubHlcclxuICAqL1xuXG4gIC8qKlxyXG4gICAgSW50ZXJuYWwge0BsaW5rIE1hc2tlZH0gbW9kZWxcclxuICAgIEByZWFkb25seVxyXG4gICovXG5cbiAgLyoqXHJcbiAgICBAcGFyYW0ge01hc2tFbGVtZW50fEhUTUxJbnB1dEVsZW1lbnR8SFRNTFRleHRBcmVhRWxlbWVudH0gZWxcclxuICAgIEBwYXJhbSB7T2JqZWN0fSBvcHRzXHJcbiAgKi9cbiAgZnVuY3Rpb24gSW5wdXRNYXNrKGVsLCBvcHRzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIElucHV0TWFzayk7XG5cbiAgICB0aGlzLmVsID0gZWwgaW5zdGFuY2VvZiBNYXNrRWxlbWVudCA/IGVsIDogbmV3IEhUTUxNYXNrRWxlbWVudChlbCk7XG4gICAgdGhpcy5tYXNrZWQgPSBjcmVhdGVNYXNrKG9wdHMpO1xuICAgIHRoaXMuX2xpc3RlbmVycyA9IHt9O1xuICAgIHRoaXMuX3ZhbHVlID0gJyc7XG4gICAgdGhpcy5fdW5tYXNrZWRWYWx1ZSA9ICcnO1xuICAgIHRoaXMuX3NhdmVTZWxlY3Rpb24gPSB0aGlzLl9zYXZlU2VsZWN0aW9uLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fb25JbnB1dCA9IHRoaXMuX29uSW5wdXQuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9vbkNoYW5nZSA9IHRoaXMuX29uQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fb25Ecm9wID0gdGhpcy5fb25Ecm9wLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fb25Gb2N1cyA9IHRoaXMuX29uRm9jdXMuYmluZCh0aGlzKTtcbiAgICB0aGlzLmFsaWduQ3Vyc29yID0gdGhpcy5hbGlnbkN1cnNvci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuYWxpZ25DdXJzb3JGcmllbmRseSA9IHRoaXMuYWxpZ25DdXJzb3JGcmllbmRseS5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5fYmluZEV2ZW50cygpOyAvLyByZWZyZXNoXG5cblxuICAgIHRoaXMudXBkYXRlVmFsdWUoKTtcblxuICAgIHRoaXMuX29uQ2hhbmdlKCk7XG4gIH1cbiAgLyoqIFJlYWQgb3IgdXBkYXRlIG1hc2sgKi9cblxuXG4gIF9jcmVhdGVDbGFzcyhJbnB1dE1hc2ssIFt7XG4gICAga2V5OiBcIm1hc2tFcXVhbHNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbWFza0VxdWFscyhtYXNrKSB7XG4gICAgICByZXR1cm4gbWFzayA9PSBudWxsIHx8IG1hc2sgPT09IHRoaXMubWFza2VkLm1hc2sgfHwgbWFzayA9PT0gRGF0ZSAmJiB0aGlzLm1hc2tlZCBpbnN0YW5jZW9mIE1hc2tlZERhdGU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIl9iaW5kRXZlbnRzXCIsXG5cbiAgICAvKipcclxuICAgICAgU3RhcnRzIGxpc3RlbmluZyB0byBlbGVtZW50IGV2ZW50c1xyXG4gICAgICBAcHJvdGVjdGVkXHJcbiAgICAqL1xuICAgIHZhbHVlOiBmdW5jdGlvbiBfYmluZEV2ZW50cygpIHtcbiAgICAgIHRoaXMuZWwuYmluZEV2ZW50cyh7XG4gICAgICAgIHNlbGVjdGlvbkNoYW5nZTogdGhpcy5fc2F2ZVNlbGVjdGlvbixcbiAgICAgICAgaW5wdXQ6IHRoaXMuX29uSW5wdXQsXG4gICAgICAgIGRyb3A6IHRoaXMuX29uRHJvcCxcbiAgICAgICAgY2xpY2s6IHRoaXMuYWxpZ25DdXJzb3JGcmllbmRseSxcbiAgICAgICAgZm9jdXM6IHRoaXMuX29uRm9jdXMsXG4gICAgICAgIGNvbW1pdDogdGhpcy5fb25DaGFuZ2VcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcclxuICAgICAgU3RvcHMgbGlzdGVuaW5nIHRvIGVsZW1lbnQgZXZlbnRzXHJcbiAgICAgIEBwcm90ZWN0ZWRcclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiX3VuYmluZEV2ZW50c1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfdW5iaW5kRXZlbnRzKCkge1xuICAgICAgdGhpcy5lbC51bmJpbmRFdmVudHMoKTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgIEZpcmVzIGN1c3RvbSBldmVudFxyXG4gICAgICBAcHJvdGVjdGVkXHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIl9maXJlRXZlbnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2ZpcmVFdmVudChldikge1xuICAgICAgdmFyIGxpc3RlbmVycyA9IHRoaXMuX2xpc3RlbmVyc1tldl07XG4gICAgICBpZiAoIWxpc3RlbmVycykgcmV0dXJuO1xuICAgICAgbGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24gKGwpIHtcbiAgICAgICAgcmV0dXJuIGwoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcclxuICAgICAgQ3VycmVudCBzZWxlY3Rpb24gc3RhcnRcclxuICAgICAgQHJlYWRvbmx5XHJcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiX3NhdmVTZWxlY3Rpb25cIixcblxuICAgIC8qKlxyXG4gICAgICBTdG9yZXMgY3VycmVudCBzZWxlY3Rpb25cclxuICAgICAgQHByb3RlY3RlZFxyXG4gICAgKi9cbiAgICB2YWx1ZTogZnVuY3Rpb24gX3NhdmVTZWxlY3Rpb24oKVxuICAgIC8qIGV2ICovXG4gICAge1xuICAgICAgaWYgKHRoaXMudmFsdWUgIT09IHRoaXMuZWwudmFsdWUpIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdFbGVtZW50IHZhbHVlIHdhcyBjaGFuZ2VkIG91dHNpZGUgb2YgbWFzay4gU3luY3Jvbml6ZSBtYXNrIHVzaW5nIGBtYXNrLnVwZGF0ZVZhbHVlKClgIHRvIHdvcmsgcHJvcGVybHkuJyk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuICAgICAgfVxuXG4gICAgICB0aGlzLl9zZWxlY3Rpb24gPSB7XG4gICAgICAgIHN0YXJ0OiB0aGlzLnNlbGVjdGlvblN0YXJ0LFxuICAgICAgICBlbmQ6IHRoaXMuY3Vyc29yUG9zXG4gICAgICB9O1xuICAgIH1cbiAgICAvKiogU3luY3Jvbml6ZXMgbW9kZWwgdmFsdWUgZnJvbSB2aWV3ICovXG5cbiAgfSwge1xuICAgIGtleTogXCJ1cGRhdGVWYWx1ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB1cGRhdGVWYWx1ZSgpIHtcbiAgICAgIHRoaXMubWFza2VkLnZhbHVlID0gdGhpcy5lbC52YWx1ZTtcbiAgICAgIHRoaXMuX3ZhbHVlID0gdGhpcy5tYXNrZWQudmFsdWU7XG4gICAgfVxuICAgIC8qKiBTeW5jcm9uaXplcyB2aWV3IGZyb20gbW9kZWwgdmFsdWUsIGZpcmVzIGNoYW5nZSBldmVudHMgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInVwZGF0ZUNvbnRyb2xcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdXBkYXRlQ29udHJvbCgpIHtcbiAgICAgIHZhciBuZXdVbm1hc2tlZFZhbHVlID0gdGhpcy5tYXNrZWQudW5tYXNrZWRWYWx1ZTtcbiAgICAgIHZhciBuZXdWYWx1ZSA9IHRoaXMubWFza2VkLnZhbHVlO1xuICAgICAgdmFyIGlzQ2hhbmdlZCA9IHRoaXMudW5tYXNrZWRWYWx1ZSAhPT0gbmV3VW5tYXNrZWRWYWx1ZSB8fCB0aGlzLnZhbHVlICE9PSBuZXdWYWx1ZTtcbiAgICAgIHRoaXMuX3VubWFza2VkVmFsdWUgPSBuZXdVbm1hc2tlZFZhbHVlO1xuICAgICAgdGhpcy5fdmFsdWUgPSBuZXdWYWx1ZTtcbiAgICAgIGlmICh0aGlzLmVsLnZhbHVlICE9PSBuZXdWYWx1ZSkgdGhpcy5lbC52YWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgaWYgKGlzQ2hhbmdlZCkgdGhpcy5fZmlyZUNoYW5nZUV2ZW50cygpO1xuICAgIH1cbiAgICAvKiogVXBkYXRlcyBvcHRpb25zIHdpdGggZGVlcCBlcXVhbCBjaGVjaywgcmVjcmVhdGVzIEB7bGluayBNYXNrZWR9IG1vZGVsIGlmIG1hc2sgdHlwZSBjaGFuZ2VzICovXG5cbiAgfSwge1xuICAgIGtleTogXCJ1cGRhdGVPcHRpb25zXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZU9wdGlvbnMob3B0cykge1xuICAgICAgdmFyIG1hc2sgPSBvcHRzLm1hc2ssXG4gICAgICAgICAgcmVzdE9wdHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob3B0cywgW1wibWFza1wiXSk7XG5cbiAgICAgIHZhciB1cGRhdGVNYXNrID0gIXRoaXMubWFza0VxdWFscyhtYXNrKTtcbiAgICAgIHZhciB1cGRhdGVPcHRzID0gIW9iamVjdEluY2x1ZGVzKHRoaXMubWFza2VkLCByZXN0T3B0cyk7XG4gICAgICBpZiAodXBkYXRlTWFzaykgdGhpcy5tYXNrID0gbWFzaztcbiAgICAgIGlmICh1cGRhdGVPcHRzKSB0aGlzLm1hc2tlZC51cGRhdGVPcHRpb25zKHJlc3RPcHRzKTtcbiAgICAgIGlmICh1cGRhdGVNYXNrIHx8IHVwZGF0ZU9wdHMpIHRoaXMudXBkYXRlQ29udHJvbCgpO1xuICAgIH1cbiAgICAvKiogVXBkYXRlcyBjdXJzb3IgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInVwZGF0ZUN1cnNvclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB1cGRhdGVDdXJzb3IoY3Vyc29yUG9zKSB7XG4gICAgICBpZiAoY3Vyc29yUG9zID09IG51bGwpIHJldHVybjtcbiAgICAgIHRoaXMuY3Vyc29yUG9zID0gY3Vyc29yUG9zOyAvLyBhbHNvIHF1ZXVlIGNoYW5nZSBjdXJzb3IgZm9yIG1vYmlsZSBicm93c2Vyc1xuXG4gICAgICB0aGlzLl9kZWxheVVwZGF0ZUN1cnNvcihjdXJzb3JQb3MpO1xuICAgIH1cbiAgICAvKipcclxuICAgICAgRGVsYXlzIGN1cnNvciB1cGRhdGUgdG8gc3VwcG9ydCBtb2JpbGUgYnJvd3NlcnNcclxuICAgICAgQHByaXZhdGVcclxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJfZGVsYXlVcGRhdGVDdXJzb3JcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2RlbGF5VXBkYXRlQ3Vyc29yKGN1cnNvclBvcykge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgdGhpcy5fYWJvcnRVcGRhdGVDdXJzb3IoKTtcblxuICAgICAgdGhpcy5fY2hhbmdpbmdDdXJzb3JQb3MgPSBjdXJzb3JQb3M7XG4gICAgICB0aGlzLl9jdXJzb3JDaGFuZ2luZyA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIV90aGlzLmVsKSByZXR1cm47IC8vIGlmIHdhcyBkZXN0cm95ZWRcblxuICAgICAgICBfdGhpcy5jdXJzb3JQb3MgPSBfdGhpcy5fY2hhbmdpbmdDdXJzb3JQb3M7XG5cbiAgICAgICAgX3RoaXMuX2Fib3J0VXBkYXRlQ3Vyc29yKCk7XG4gICAgICB9LCAxMCk7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICBGaXJlcyBjdXN0b20gZXZlbnRzXHJcbiAgICAgIEBwcm90ZWN0ZWRcclxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJfZmlyZUNoYW5nZUV2ZW50c1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfZmlyZUNoYW5nZUV2ZW50cygpIHtcbiAgICAgIHRoaXMuX2ZpcmVFdmVudCgnYWNjZXB0Jyk7XG5cbiAgICAgIGlmICh0aGlzLm1hc2tlZC5pc0NvbXBsZXRlKSB0aGlzLl9maXJlRXZlbnQoJ2NvbXBsZXRlJyk7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICBBYm9ydHMgZGVsYXllZCBjdXJzb3IgdXBkYXRlXHJcbiAgICAgIEBwcml2YXRlXHJcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiX2Fib3J0VXBkYXRlQ3Vyc29yXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9hYm9ydFVwZGF0ZUN1cnNvcigpIHtcbiAgICAgIGlmICh0aGlzLl9jdXJzb3JDaGFuZ2luZykge1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5fY3Vyc29yQ2hhbmdpbmcpO1xuICAgICAgICBkZWxldGUgdGhpcy5fY3Vyc29yQ2hhbmdpbmc7XG4gICAgICB9XG4gICAgfVxuICAgIC8qKiBBbGlnbnMgY3Vyc29yIHRvIG5lYXJlc3QgYXZhaWxhYmxlIHBvc2l0aW9uICovXG5cbiAgfSwge1xuICAgIGtleTogXCJhbGlnbkN1cnNvclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhbGlnbkN1cnNvcigpIHtcbiAgICAgIHRoaXMuY3Vyc29yUG9zID0gdGhpcy5tYXNrZWQubmVhcmVzdElucHV0UG9zKHRoaXMuY3Vyc29yUG9zLCBESVJFQ1RJT04uTEVGVCk7XG4gICAgfVxuICAgIC8qKiBBbGlnbnMgY3Vyc29yIG9ubHkgaWYgc2VsZWN0aW9uIGlzIGVtcHR5ICovXG5cbiAgfSwge1xuICAgIGtleTogXCJhbGlnbkN1cnNvckZyaWVuZGx5XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFsaWduQ3Vyc29yRnJpZW5kbHkoKSB7XG4gICAgICBpZiAodGhpcy5zZWxlY3Rpb25TdGFydCAhPT0gdGhpcy5jdXJzb3JQb3MpIHJldHVybjsgLy8gc2tpcCBpZiByYW5nZSBpcyBzZWxlY3RlZFxuXG4gICAgICB0aGlzLmFsaWduQ3Vyc29yKCk7XG4gICAgfVxuICAgIC8qKiBBZGRzIGxpc3RlbmVyIG9uIGN1c3RvbSBldmVudCAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwib25cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gb24oZXYsIGhhbmRsZXIpIHtcbiAgICAgIGlmICghdGhpcy5fbGlzdGVuZXJzW2V2XSkgdGhpcy5fbGlzdGVuZXJzW2V2XSA9IFtdO1xuXG4gICAgICB0aGlzLl9saXN0ZW5lcnNbZXZdLnB1c2goaGFuZGxlcik7XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKiogUmVtb3ZlcyBjdXN0b20gZXZlbnQgbGlzdGVuZXIgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIm9mZlwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvZmYoZXYsIGhhbmRsZXIpIHtcbiAgICAgIGlmICghdGhpcy5fbGlzdGVuZXJzW2V2XSkgcmV0dXJuIHRoaXM7XG5cbiAgICAgIGlmICghaGFuZGxlcikge1xuICAgICAgICBkZWxldGUgdGhpcy5fbGlzdGVuZXJzW2V2XTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG5cbiAgICAgIHZhciBoSW5kZXggPSB0aGlzLl9saXN0ZW5lcnNbZXZdLmluZGV4T2YoaGFuZGxlcik7XG5cbiAgICAgIGlmIChoSW5kZXggPj0gMCkgdGhpcy5fbGlzdGVuZXJzW2V2XS5zcGxpY2UoaEluZGV4LCAxKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKiogSGFuZGxlcyB2aWV3IGlucHV0IGV2ZW50ICovXG5cbiAgfSwge1xuICAgIGtleTogXCJfb25JbnB1dFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfb25JbnB1dCgpIHtcbiAgICAgIHRoaXMuX2Fib3J0VXBkYXRlQ3Vyc29yKCk7IC8vIGZpeCBzdHJhbmdlIElFIGJlaGF2aW9yXG5cblxuICAgICAgaWYgKCF0aGlzLl9zZWxlY3Rpb24pIHJldHVybiB0aGlzLnVwZGF0ZVZhbHVlKCk7XG4gICAgICB2YXIgZGV0YWlscyA9IG5ldyBBY3Rpb25EZXRhaWxzKCAvLyBuZXcgc3RhdGVcbiAgICAgIHRoaXMuZWwudmFsdWUsIHRoaXMuY3Vyc29yUG9zLCAvLyBvbGQgc3RhdGVcbiAgICAgIHRoaXMudmFsdWUsIHRoaXMuX3NlbGVjdGlvbik7XG4gICAgICB2YXIgb2xkUmF3VmFsdWUgPSB0aGlzLm1hc2tlZC5yYXdJbnB1dFZhbHVlO1xuICAgICAgdmFyIG9mZnNldCA9IHRoaXMubWFza2VkLnNwbGljZShkZXRhaWxzLnN0YXJ0Q2hhbmdlUG9zLCBkZXRhaWxzLnJlbW92ZWQubGVuZ3RoLCBkZXRhaWxzLmluc2VydGVkLCBkZXRhaWxzLnJlbW92ZURpcmVjdGlvbikub2Zmc2V0OyAvLyBmb3JjZSBhbGlnbiBpbiByZW1vdmUgZGlyZWN0aW9uIG9ubHkgaWYgbm8gaW5wdXQgY2hhcnMgd2VyZSByZW1vdmVkXG4gICAgICAvLyBvdGhlcndpc2Ugd2Ugc3RpbGwgbmVlZCB0byBhbGlnbiB3aXRoIE5PTkUgKHRvIGdldCBvdXQgZnJvbSBmaXhlZCBzeW1ib2xzIGZvciBpbnN0YW5jZSlcblxuICAgICAgdmFyIHJlbW92ZURpcmVjdGlvbiA9IG9sZFJhd1ZhbHVlID09PSB0aGlzLm1hc2tlZC5yYXdJbnB1dFZhbHVlID8gZGV0YWlscy5yZW1vdmVEaXJlY3Rpb24gOiBESVJFQ1RJT04uTk9ORTtcbiAgICAgIHZhciBjdXJzb3JQb3MgPSB0aGlzLm1hc2tlZC5uZWFyZXN0SW5wdXRQb3MoZGV0YWlscy5zdGFydENoYW5nZVBvcyArIG9mZnNldCwgcmVtb3ZlRGlyZWN0aW9uKTtcbiAgICAgIHRoaXMudXBkYXRlQ29udHJvbCgpO1xuICAgICAgdGhpcy51cGRhdGVDdXJzb3IoY3Vyc29yUG9zKTtcbiAgICB9XG4gICAgLyoqIEhhbmRsZXMgdmlldyBjaGFuZ2UgZXZlbnQgYW5kIGNvbW1pdHMgbW9kZWwgdmFsdWUgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIl9vbkNoYW5nZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfb25DaGFuZ2UoKSB7XG4gICAgICBpZiAodGhpcy52YWx1ZSAhPT0gdGhpcy5lbC52YWx1ZSkge1xuICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlKCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMubWFza2VkLmRvQ29tbWl0KCk7XG4gICAgICB0aGlzLnVwZGF0ZUNvbnRyb2woKTtcblxuICAgICAgdGhpcy5fc2F2ZVNlbGVjdGlvbigpO1xuICAgIH1cbiAgICAvKiogSGFuZGxlcyB2aWV3IGRyb3AgZXZlbnQsIHByZXZlbnRzIGJ5IGRlZmF1bHQgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIl9vbkRyb3BcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX29uRHJvcChldikge1xuICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cbiAgICAvKiogUmVzdG9yZSBsYXN0IHNlbGVjdGlvbiBvbiBmb2N1cyAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiX29uRm9jdXNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX29uRm9jdXMoZXYpIHtcbiAgICAgIGlmICh0aGlzLnNlbGVjdGlvblN0YXJ0ICE9PSB0aGlzLmN1cnNvclBvcykgcmV0dXJuOyAvLyBza2lwIGlmIHJhbmdlIGlzIHNlbGVjdGVkXG5cbiAgICAgIGlmICh0aGlzLl9zZWxlY3Rpb24pIHRoaXMuY3Vyc29yUG9zID0gdGhpcy5fc2VsZWN0aW9uLmVuZDtcbiAgICAgIHRoaXMuYWxpZ25DdXJzb3JGcmllbmRseSgpO1xuICAgIH1cbiAgICAvKiogVW5iaW5kIHZpZXcgZXZlbnRzIGFuZCByZW1vdmVzIGVsZW1lbnQgcmVmZXJlbmNlICovXG5cbiAgfSwge1xuICAgIGtleTogXCJkZXN0cm95XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgICB0aGlzLl91bmJpbmRFdmVudHMoKTsgLy8gJEZsb3dGaXhNZSB3aHkgbm90IGRvIHNvP1xuXG5cbiAgICAgIHRoaXMuX2xpc3RlbmVycy5sZW5ndGggPSAwO1xuICAgICAgZGVsZXRlIHRoaXMuZWw7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIm1hc2tcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLm1hc2tlZC5tYXNrO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQobWFzaykge1xuICAgICAgaWYgKHRoaXMubWFza0VxdWFscyhtYXNrKSkgcmV0dXJuO1xuXG4gICAgICBpZiAodGhpcy5tYXNrZWQuY29uc3RydWN0b3IgPT09IG1hc2tlZENsYXNzKG1hc2spKSB7XG4gICAgICAgIHRoaXMubWFza2VkLnVwZGF0ZU9wdGlvbnMoe1xuICAgICAgICAgIG1hc2s6IG1hc2tcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIG1hc2tlZCA9IGNyZWF0ZU1hc2soe1xuICAgICAgICBtYXNrOiBtYXNrXG4gICAgICB9KTtcbiAgICAgIG1hc2tlZC51bm1hc2tlZFZhbHVlID0gdGhpcy5tYXNrZWQudW5tYXNrZWRWYWx1ZTtcbiAgICAgIHRoaXMubWFza2VkID0gbWFza2VkO1xuICAgIH1cbiAgICAvKiogUmF3IHZhbHVlICovXG5cbiAgfSwge1xuICAgIGtleTogXCJ2YWx1ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQoc3RyKSB7XG4gICAgICB0aGlzLm1hc2tlZC52YWx1ZSA9IHN0cjtcbiAgICAgIHRoaXMudXBkYXRlQ29udHJvbCgpO1xuICAgICAgdGhpcy5hbGlnbkN1cnNvcigpO1xuICAgIH1cbiAgICAvKiogVW5tYXNrZWQgdmFsdWUgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInVubWFza2VkVmFsdWVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl91bm1hc2tlZFZhbHVlO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQoc3RyKSB7XG4gICAgICB0aGlzLm1hc2tlZC51bm1hc2tlZFZhbHVlID0gc3RyO1xuICAgICAgdGhpcy51cGRhdGVDb250cm9sKCk7XG4gICAgICB0aGlzLmFsaWduQ3Vyc29yKCk7XG4gICAgfVxuICAgIC8qKiBUeXBlZCB1bm1hc2tlZCB2YWx1ZSAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwidHlwZWRWYWx1ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMubWFza2VkLnR5cGVkVmFsdWU7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2YWwpIHtcbiAgICAgIHRoaXMubWFza2VkLnR5cGVkVmFsdWUgPSB2YWw7XG4gICAgICB0aGlzLnVwZGF0ZUNvbnRyb2woKTtcbiAgICAgIHRoaXMuYWxpZ25DdXJzb3IoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2VsZWN0aW9uU3RhcnRcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9jdXJzb3JDaGFuZ2luZyA/IHRoaXMuX2NoYW5naW5nQ3Vyc29yUG9zIDogdGhpcy5lbC5zZWxlY3Rpb25TdGFydDtcbiAgICB9XG4gICAgLyoqIEN1cnJlbnQgY3Vyc29yIHBvc2l0aW9uICovXG5cbiAgfSwge1xuICAgIGtleTogXCJjdXJzb3JQb3NcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9jdXJzb3JDaGFuZ2luZyA/IHRoaXMuX2NoYW5naW5nQ3Vyc29yUG9zIDogdGhpcy5lbC5zZWxlY3Rpb25FbmQ7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldChwb3MpIHtcbiAgICAgIGlmICghdGhpcy5lbC5pc0FjdGl2ZSkgcmV0dXJuO1xuICAgICAgdGhpcy5lbC5zZWxlY3QocG9zLCBwb3MpO1xuXG4gICAgICB0aGlzLl9zYXZlU2VsZWN0aW9uKCk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIElucHV0TWFzaztcbn0oKTtcblxuLyoqIFBhdHRlcm4gd2hpY2ggdmFsaWRhdGVzIGVudW0gdmFsdWVzICovXG5cbnZhciBNYXNrZWRFbnVtID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfTWFza2VkUGF0dGVybikge1xuICBfaW5oZXJpdHMoTWFza2VkRW51bSwgX01hc2tlZFBhdHRlcm4pO1xuXG4gIGZ1bmN0aW9uIE1hc2tlZEVudW0oKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1hc2tlZEVudW0pO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9nZXRQcm90b3R5cGVPZihNYXNrZWRFbnVtKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhNYXNrZWRFbnVtLCBbe1xuICAgIGtleTogXCJfdXBkYXRlXCIsXG5cbiAgICAvKipcclxuICAgICAgQG92ZXJyaWRlXHJcbiAgICAgIEBwYXJhbSB7T2JqZWN0fSBvcHRzXHJcbiAgICAqL1xuICAgIHZhbHVlOiBmdW5jdGlvbiBfdXBkYXRlKG9wdHMpIHtcbiAgICAgIC8vIFRPRE8gdHlwZVxuICAgICAgaWYgKG9wdHMuZW51bSkgb3B0cy5tYXNrID0gJyonLnJlcGVhdChvcHRzLmVudW1bMF0ubGVuZ3RoKTtcblxuICAgICAgX2dldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkRW51bS5wcm90b3R5cGUpLCBcIl91cGRhdGVcIiwgdGhpcykuY2FsbCh0aGlzLCBvcHRzKTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgIEBvdmVycmlkZVxyXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImRvVmFsaWRhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZG9WYWxpZGF0ZSgpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXMsXG4gICAgICAgICAgX2dldDI7XG5cbiAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5lbnVtLnNvbWUoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgcmV0dXJuIGUuaW5kZXhPZihfdGhpcy51bm1hc2tlZFZhbHVlKSA+PSAwO1xuICAgICAgfSkgJiYgKF9nZXQyID0gX2dldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkRW51bS5wcm90b3R5cGUpLCBcImRvVmFsaWRhdGVcIiwgdGhpcykpLmNhbGwuYXBwbHkoX2dldDIsIFt0aGlzXS5jb25jYXQoYXJncykpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBNYXNrZWRFbnVtO1xufShNYXNrZWRQYXR0ZXJuKTtcblxuLyoqXHJcbiAgTnVtYmVyIG1hc2tcclxuICBAcGFyYW0ge09iamVjdH0gb3B0c1xyXG4gIEBwYXJhbSB7c3RyaW5nfSBvcHRzLnJhZGl4IC0gU2luZ2xlIGNoYXJcclxuICBAcGFyYW0ge3N0cmluZ30gb3B0cy50aG91c2FuZHNTZXBhcmF0b3IgLSBTaW5nbGUgY2hhclxyXG4gIEBwYXJhbSB7QXJyYXk8c3RyaW5nPn0gb3B0cy5tYXBUb1JhZGl4IC0gQXJyYXkgb2Ygc2luZ2xlIGNoYXJzXHJcbiAgQHBhcmFtIHtudW1iZXJ9IG9wdHMubWluXHJcbiAgQHBhcmFtIHtudW1iZXJ9IG9wdHMubWF4XHJcbiAgQHBhcmFtIHtudW1iZXJ9IG9wdHMuc2NhbGUgLSBEaWdpdHMgYWZ0ZXIgcG9pbnRcclxuICBAcGFyYW0ge2Jvb2xlYW59IG9wdHMuc2lnbmVkIC0gQWxsb3cgbmVnYXRpdmVcclxuICBAcGFyYW0ge2Jvb2xlYW59IG9wdHMubm9ybWFsaXplWmVyb3MgLSBGbGFnIHRvIHJlbW92ZSBsZWFkaW5nIGFuZCB0cmFpbGluZyB6ZXJvcyBpbiB0aGUgZW5kIG9mIGVkaXRpbmdcclxuICBAcGFyYW0ge2Jvb2xlYW59IG9wdHMucGFkRnJhY3Rpb25hbFplcm9zIC0gRmxhZyB0byBwYWQgdHJhaWxpbmcgemVyb3MgYWZ0ZXIgcG9pbnQgaW4gdGhlIGVuZCBvZiBlZGl0aW5nXHJcbiovXG52YXIgTWFza2VkTnVtYmVyID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfTWFza2VkKSB7XG4gIF9pbmhlcml0cyhNYXNrZWROdW1iZXIsIF9NYXNrZWQpO1xuXG4gIC8qKiBTaW5nbGUgY2hhciAqL1xuXG4gIC8qKiBTaW5nbGUgY2hhciAqL1xuXG4gIC8qKiBBcnJheSBvZiBzaW5nbGUgY2hhcnMgKi9cblxuICAvKiogKi9cblxuICAvKiogKi9cblxuICAvKiogRGlnaXRzIGFmdGVyIHBvaW50ICovXG5cbiAgLyoqICovXG5cbiAgLyoqIEZsYWcgdG8gcmVtb3ZlIGxlYWRpbmcgYW5kIHRyYWlsaW5nIHplcm9zIGluIHRoZSBlbmQgb2YgZWRpdGluZyAqL1xuXG4gIC8qKiBGbGFnIHRvIHBhZCB0cmFpbGluZyB6ZXJvcyBhZnRlciBwb2ludCBpbiB0aGUgZW5kIG9mIGVkaXRpbmcgKi9cbiAgZnVuY3Rpb24gTWFza2VkTnVtYmVyKG9wdHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTWFza2VkTnVtYmVyKTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfZ2V0UHJvdG90eXBlT2YoTWFza2VkTnVtYmVyKS5jYWxsKHRoaXMsIE9iamVjdC5hc3NpZ24oe30sIE1hc2tlZE51bWJlci5ERUZBVUxUUywge30sIG9wdHMpKSk7XG4gIH1cbiAgLyoqXHJcbiAgICBAb3ZlcnJpZGVcclxuICAqL1xuXG5cbiAgX2NyZWF0ZUNsYXNzKE1hc2tlZE51bWJlciwgW3tcbiAgICBrZXk6IFwiX3VwZGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfdXBkYXRlKG9wdHMpIHtcbiAgICAgIF9nZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZE51bWJlci5wcm90b3R5cGUpLCBcIl91cGRhdGVcIiwgdGhpcykuY2FsbCh0aGlzLCBvcHRzKTtcblxuICAgICAgdGhpcy5fdXBkYXRlUmVnRXhwcygpO1xuICAgIH1cbiAgICAvKiogKi9cblxuICB9LCB7XG4gICAga2V5OiBcIl91cGRhdGVSZWdFeHBzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF91cGRhdGVSZWdFeHBzKCkge1xuICAgICAgLy8gdXNlIGRpZmZlcmVudCByZWdleHAgdG8gcHJvY2VzcyB1c2VyIGlucHV0IChtb3JlIHN0cmljdCwgaW5wdXQgc3VmZml4KSBhbmQgdGFpbCBzaGlmdGluZ1xuICAgICAgdmFyIHN0YXJ0ID0gJ14nICsgKHRoaXMuYWxsb3dOZWdhdGl2ZSA/ICdbK3xcXFxcLV0/JyA6ICcnKTtcbiAgICAgIHZhciBtaWRJbnB1dCA9ICcoMHwoWzEtOV0rXFxcXGQqKSk/JztcbiAgICAgIHZhciBtaWQgPSAnXFxcXGQqJztcbiAgICAgIHZhciBlbmQgPSAodGhpcy5zY2FsZSA/ICcoJyArIGVzY2FwZVJlZ0V4cCh0aGlzLnJhZGl4KSArICdcXFxcZHswLCcgKyB0aGlzLnNjYWxlICsgJ30pPycgOiAnJykgKyAnJCc7XG4gICAgICB0aGlzLl9udW1iZXJSZWdFeHBJbnB1dCA9IG5ldyBSZWdFeHAoc3RhcnQgKyBtaWRJbnB1dCArIGVuZCk7XG4gICAgICB0aGlzLl9udW1iZXJSZWdFeHAgPSBuZXcgUmVnRXhwKHN0YXJ0ICsgbWlkICsgZW5kKTtcbiAgICAgIHRoaXMuX21hcFRvUmFkaXhSZWdFeHAgPSBuZXcgUmVnRXhwKCdbJyArIHRoaXMubWFwVG9SYWRpeC5tYXAoZXNjYXBlUmVnRXhwKS5qb2luKCcnKSArICddJywgJ2cnKTtcbiAgICAgIHRoaXMuX3Rob3VzYW5kc1NlcGFyYXRvclJlZ0V4cCA9IG5ldyBSZWdFeHAoZXNjYXBlUmVnRXhwKHRoaXMudGhvdXNhbmRzU2VwYXJhdG9yKSwgJ2cnKTtcbiAgICB9XG4gICAgLyoqICovXG5cbiAgfSwge1xuICAgIGtleTogXCJfcmVtb3ZlVGhvdXNhbmRzU2VwYXJhdG9yc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfcmVtb3ZlVGhvdXNhbmRzU2VwYXJhdG9ycyh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHZhbHVlLnJlcGxhY2UodGhpcy5fdGhvdXNhbmRzU2VwYXJhdG9yUmVnRXhwLCAnJyk7XG4gICAgfVxuICAgIC8qKiAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiX2luc2VydFRob3VzYW5kc1NlcGFyYXRvcnNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2luc2VydFRob3VzYW5kc1NlcGFyYXRvcnModmFsdWUpIHtcbiAgICAgIC8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzI5MDExMDIvaG93LXRvLXByaW50LWEtbnVtYmVyLXdpdGgtY29tbWFzLWFzLXRob3VzYW5kcy1zZXBhcmF0b3JzLWluLWphdmFzY3JpcHRcbiAgICAgIHZhciBwYXJ0cyA9IHZhbHVlLnNwbGl0KHRoaXMucmFkaXgpO1xuICAgICAgcGFydHNbMF0gPSBwYXJ0c1swXS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCB0aGlzLnRob3VzYW5kc1NlcGFyYXRvcik7XG4gICAgICByZXR1cm4gcGFydHMuam9pbih0aGlzLnJhZGl4KTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgIEBvdmVycmlkZVxyXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImRvUHJlcGFyZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkb1ByZXBhcmUoc3RyKSB7XG4gICAgICB2YXIgX2dldDI7XG5cbiAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAoX2dldDIgPSBfZ2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWROdW1iZXIucHJvdG90eXBlKSwgXCJkb1ByZXBhcmVcIiwgdGhpcykpLmNhbGwuYXBwbHkoX2dldDIsIFt0aGlzLCB0aGlzLl9yZW1vdmVUaG91c2FuZHNTZXBhcmF0b3JzKHN0ci5yZXBsYWNlKHRoaXMuX21hcFRvUmFkaXhSZWdFeHAsIHRoaXMucmFkaXgpKV0uY29uY2F0KGFyZ3MpKTtcbiAgICB9XG4gICAgLyoqICovXG5cbiAgfSwge1xuICAgIGtleTogXCJfc2VwYXJhdG9yc0NvdW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9zZXBhcmF0b3JzQ291bnQodG8pIHtcbiAgICAgIHZhciBleHRlbmRPblNlcGFyYXRvcnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IGZhbHNlO1xuICAgICAgdmFyIGNvdW50ID0gMDtcblxuICAgICAgZm9yICh2YXIgcG9zID0gMDsgcG9zIDwgdG87ICsrcG9zKSB7XG4gICAgICAgIGlmICh0aGlzLl92YWx1ZS5pbmRleE9mKHRoaXMudGhvdXNhbmRzU2VwYXJhdG9yLCBwb3MpID09PSBwb3MpIHtcbiAgICAgICAgICArK2NvdW50O1xuICAgICAgICAgIGlmIChleHRlbmRPblNlcGFyYXRvcnMpIHRvICs9IHRoaXMudGhvdXNhbmRzU2VwYXJhdG9yLmxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gY291bnQ7XG4gICAgfVxuICAgIC8qKiAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiX3NlcGFyYXRvcnNDb3VudEZyb21TbGljZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfc2VwYXJhdG9yc0NvdW50RnJvbVNsaWNlKCkge1xuICAgICAgdmFyIHNsaWNlID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB0aGlzLl92YWx1ZTtcbiAgICAgIHJldHVybiB0aGlzLl9zZXBhcmF0b3JzQ291bnQodGhpcy5fcmVtb3ZlVGhvdXNhbmRzU2VwYXJhdG9ycyhzbGljZSkubGVuZ3RoLCB0cnVlKTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgIEBvdmVycmlkZVxyXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImV4dHJhY3RJbnB1dFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBleHRyYWN0SW5wdXQoKSB7XG4gICAgICB2YXIgZnJvbVBvcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogMDtcbiAgICAgIHZhciB0b1BvcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogdGhpcy52YWx1ZS5sZW5ndGg7XG4gICAgICB2YXIgZmxhZ3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMiA/IGFyZ3VtZW50c1syXSA6IHVuZGVmaW5lZDtcblxuICAgICAgdmFyIF90aGlzJF9hZGp1c3RSYW5nZVdpdCA9IHRoaXMuX2FkanVzdFJhbmdlV2l0aFNlcGFyYXRvcnMoZnJvbVBvcywgdG9Qb3MpO1xuXG4gICAgICB2YXIgX3RoaXMkX2FkanVzdFJhbmdlV2l0MiA9IF9zbGljZWRUb0FycmF5KF90aGlzJF9hZGp1c3RSYW5nZVdpdCwgMik7XG5cbiAgICAgIGZyb21Qb3MgPSBfdGhpcyRfYWRqdXN0UmFuZ2VXaXQyWzBdO1xuICAgICAgdG9Qb3MgPSBfdGhpcyRfYWRqdXN0UmFuZ2VXaXQyWzFdO1xuICAgICAgcmV0dXJuIHRoaXMuX3JlbW92ZVRob3VzYW5kc1NlcGFyYXRvcnMoX2dldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkTnVtYmVyLnByb3RvdHlwZSksIFwiZXh0cmFjdElucHV0XCIsIHRoaXMpLmNhbGwodGhpcywgZnJvbVBvcywgdG9Qb3MsIGZsYWdzKSk7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICBAb3ZlcnJpZGVcclxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJfYXBwZW5kQ2hhclJhd1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfYXBwZW5kQ2hhclJhdyhjaCkge1xuICAgICAgdmFyIGZsYWdzID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICAgIGlmICghdGhpcy50aG91c2FuZHNTZXBhcmF0b3IpIHJldHVybiBfZ2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWROdW1iZXIucHJvdG90eXBlKSwgXCJfYXBwZW5kQ2hhclJhd1wiLCB0aGlzKS5jYWxsKHRoaXMsIGNoLCBmbGFncyk7XG4gICAgICB2YXIgcHJldkJlZm9yZVRhaWxWYWx1ZSA9IGZsYWdzLnRhaWwgJiYgZmxhZ3MuX2JlZm9yZVRhaWxTdGF0ZSA/IGZsYWdzLl9iZWZvcmVUYWlsU3RhdGUuX3ZhbHVlIDogdGhpcy5fdmFsdWU7XG5cbiAgICAgIHZhciBwcmV2QmVmb3JlVGFpbFNlcGFyYXRvcnNDb3VudCA9IHRoaXMuX3NlcGFyYXRvcnNDb3VudEZyb21TbGljZShwcmV2QmVmb3JlVGFpbFZhbHVlKTtcblxuICAgICAgdGhpcy5fdmFsdWUgPSB0aGlzLl9yZW1vdmVUaG91c2FuZHNTZXBhcmF0b3JzKHRoaXMudmFsdWUpO1xuXG4gICAgICB2YXIgYXBwZW5kRGV0YWlscyA9IF9nZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZE51bWJlci5wcm90b3R5cGUpLCBcIl9hcHBlbmRDaGFyUmF3XCIsIHRoaXMpLmNhbGwodGhpcywgY2gsIGZsYWdzKTtcblxuICAgICAgdGhpcy5fdmFsdWUgPSB0aGlzLl9pbnNlcnRUaG91c2FuZHNTZXBhcmF0b3JzKHRoaXMuX3ZhbHVlKTtcbiAgICAgIHZhciBiZWZvcmVUYWlsVmFsdWUgPSBmbGFncy50YWlsICYmIGZsYWdzLl9iZWZvcmVUYWlsU3RhdGUgPyBmbGFncy5fYmVmb3JlVGFpbFN0YXRlLl92YWx1ZSA6IHRoaXMuX3ZhbHVlO1xuXG4gICAgICB2YXIgYmVmb3JlVGFpbFNlcGFyYXRvcnNDb3VudCA9IHRoaXMuX3NlcGFyYXRvcnNDb3VudEZyb21TbGljZShiZWZvcmVUYWlsVmFsdWUpO1xuXG4gICAgICBhcHBlbmREZXRhaWxzLnRhaWxTaGlmdCArPSAoYmVmb3JlVGFpbFNlcGFyYXRvcnNDb3VudCAtIHByZXZCZWZvcmVUYWlsU2VwYXJhdG9yc0NvdW50KSAqIHRoaXMudGhvdXNhbmRzU2VwYXJhdG9yLmxlbmd0aDtcbiAgICAgIHJldHVybiBhcHBlbmREZXRhaWxzO1xuICAgIH1cbiAgICAvKiogKi9cblxuICB9LCB7XG4gICAga2V5OiBcIl9maW5kU2VwYXJhdG9yQXJvdW5kXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9maW5kU2VwYXJhdG9yQXJvdW5kKHBvcykge1xuICAgICAgaWYgKHRoaXMudGhvdXNhbmRzU2VwYXJhdG9yKSB7XG4gICAgICAgIHZhciBzZWFyY2hGcm9tID0gcG9zIC0gdGhpcy50aG91c2FuZHNTZXBhcmF0b3IubGVuZ3RoICsgMTtcbiAgICAgICAgdmFyIHNlcGFyYXRvclBvcyA9IHRoaXMudmFsdWUuaW5kZXhPZih0aGlzLnRob3VzYW5kc1NlcGFyYXRvciwgc2VhcmNoRnJvbSk7XG4gICAgICAgIGlmIChzZXBhcmF0b3JQb3MgPD0gcG9zKSByZXR1cm4gc2VwYXJhdG9yUG9zO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gLTE7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIl9hZGp1c3RSYW5nZVdpdGhTZXBhcmF0b3JzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9hZGp1c3RSYW5nZVdpdGhTZXBhcmF0b3JzKGZyb20sIHRvKSB7XG4gICAgICB2YXIgc2VwYXJhdG9yQXJvdW5kRnJvbVBvcyA9IHRoaXMuX2ZpbmRTZXBhcmF0b3JBcm91bmQoZnJvbSk7XG5cbiAgICAgIGlmIChzZXBhcmF0b3JBcm91bmRGcm9tUG9zID49IDApIGZyb20gPSBzZXBhcmF0b3JBcm91bmRGcm9tUG9zO1xuXG4gICAgICB2YXIgc2VwYXJhdG9yQXJvdW5kVG9Qb3MgPSB0aGlzLl9maW5kU2VwYXJhdG9yQXJvdW5kKHRvKTtcblxuICAgICAgaWYgKHNlcGFyYXRvckFyb3VuZFRvUG9zID49IDApIHRvID0gc2VwYXJhdG9yQXJvdW5kVG9Qb3MgKyB0aGlzLnRob3VzYW5kc1NlcGFyYXRvci5sZW5ndGg7XG4gICAgICByZXR1cm4gW2Zyb20sIHRvXTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgIEBvdmVycmlkZVxyXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInJlbW92ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICB2YXIgZnJvbVBvcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogMDtcbiAgICAgIHZhciB0b1BvcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogdGhpcy52YWx1ZS5sZW5ndGg7XG5cbiAgICAgIHZhciBfdGhpcyRfYWRqdXN0UmFuZ2VXaXQzID0gdGhpcy5fYWRqdXN0UmFuZ2VXaXRoU2VwYXJhdG9ycyhmcm9tUG9zLCB0b1Bvcyk7XG5cbiAgICAgIHZhciBfdGhpcyRfYWRqdXN0UmFuZ2VXaXQ0ID0gX3NsaWNlZFRvQXJyYXkoX3RoaXMkX2FkanVzdFJhbmdlV2l0MywgMik7XG5cbiAgICAgIGZyb21Qb3MgPSBfdGhpcyRfYWRqdXN0UmFuZ2VXaXQ0WzBdO1xuICAgICAgdG9Qb3MgPSBfdGhpcyRfYWRqdXN0UmFuZ2VXaXQ0WzFdO1xuICAgICAgdmFyIHZhbHVlQmVmb3JlUG9zID0gdGhpcy52YWx1ZS5zbGljZSgwLCBmcm9tUG9zKTtcbiAgICAgIHZhciB2YWx1ZUFmdGVyUG9zID0gdGhpcy52YWx1ZS5zbGljZSh0b1Bvcyk7XG5cbiAgICAgIHZhciBwcmV2QmVmb3JlVGFpbFNlcGFyYXRvcnNDb3VudCA9IHRoaXMuX3NlcGFyYXRvcnNDb3VudCh2YWx1ZUJlZm9yZVBvcy5sZW5ndGgpO1xuXG4gICAgICB0aGlzLl92YWx1ZSA9IHRoaXMuX2luc2VydFRob3VzYW5kc1NlcGFyYXRvcnModGhpcy5fcmVtb3ZlVGhvdXNhbmRzU2VwYXJhdG9ycyh2YWx1ZUJlZm9yZVBvcyArIHZhbHVlQWZ0ZXJQb3MpKTtcblxuICAgICAgdmFyIGJlZm9yZVRhaWxTZXBhcmF0b3JzQ291bnQgPSB0aGlzLl9zZXBhcmF0b3JzQ291bnRGcm9tU2xpY2UodmFsdWVCZWZvcmVQb3MpO1xuXG4gICAgICByZXR1cm4gbmV3IENoYW5nZURldGFpbHMoe1xuICAgICAgICB0YWlsU2hpZnQ6IChiZWZvcmVUYWlsU2VwYXJhdG9yc0NvdW50IC0gcHJldkJlZm9yZVRhaWxTZXBhcmF0b3JzQ291bnQpICogdGhpcy50aG91c2FuZHNTZXBhcmF0b3IubGVuZ3RoXG4gICAgICB9KTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgIEBvdmVycmlkZVxyXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIm5lYXJlc3RJbnB1dFBvc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBuZWFyZXN0SW5wdXRQb3MoY3Vyc29yUG9zLCBkaXJlY3Rpb24pIHtcbiAgICAgIGlmICghdGhpcy50aG91c2FuZHNTZXBhcmF0b3IpIHJldHVybiBjdXJzb3JQb3M7XG5cbiAgICAgIHN3aXRjaCAoZGlyZWN0aW9uKSB7XG4gICAgICAgIGNhc2UgRElSRUNUSU9OLk5PTkU6XG4gICAgICAgIGNhc2UgRElSRUNUSU9OLkxFRlQ6XG4gICAgICAgIGNhc2UgRElSRUNUSU9OLkZPUkNFX0xFRlQ6XG4gICAgICAgICAge1xuICAgICAgICAgICAgdmFyIHNlcGFyYXRvckF0TGVmdFBvcyA9IHRoaXMuX2ZpbmRTZXBhcmF0b3JBcm91bmQoY3Vyc29yUG9zIC0gMSk7XG5cbiAgICAgICAgICAgIGlmIChzZXBhcmF0b3JBdExlZnRQb3MgPj0gMCkge1xuICAgICAgICAgICAgICB2YXIgc2VwYXJhdG9yQXRMZWZ0RW5kUG9zID0gc2VwYXJhdG9yQXRMZWZ0UG9zICsgdGhpcy50aG91c2FuZHNTZXBhcmF0b3IubGVuZ3RoO1xuXG4gICAgICAgICAgICAgIGlmIChjdXJzb3JQb3MgPCBzZXBhcmF0b3JBdExlZnRFbmRQb3MgfHwgdGhpcy52YWx1ZS5sZW5ndGggPD0gc2VwYXJhdG9yQXRMZWZ0RW5kUG9zIHx8IGRpcmVjdGlvbiA9PT0gRElSRUNUSU9OLkZPUkNFX0xFRlQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2VwYXJhdG9yQXRMZWZ0UG9zO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICBjYXNlIERJUkVDVElPTi5SSUdIVDpcbiAgICAgICAgY2FzZSBESVJFQ1RJT04uRk9SQ0VfUklHSFQ6XG4gICAgICAgICAge1xuICAgICAgICAgICAgdmFyIHNlcGFyYXRvckF0UmlnaHRQb3MgPSB0aGlzLl9maW5kU2VwYXJhdG9yQXJvdW5kKGN1cnNvclBvcyk7XG5cbiAgICAgICAgICAgIGlmIChzZXBhcmF0b3JBdFJpZ2h0UG9zID49IDApIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHNlcGFyYXRvckF0UmlnaHRQb3MgKyB0aGlzLnRob3VzYW5kc1NlcGFyYXRvci5sZW5ndGg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gY3Vyc29yUG9zO1xuICAgIH1cbiAgICAvKipcclxuICAgICAgQG92ZXJyaWRlXHJcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZG9WYWxpZGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkb1ZhbGlkYXRlKGZsYWdzKSB7XG4gICAgICB2YXIgcmVnZXhwID0gZmxhZ3MuaW5wdXQgPyB0aGlzLl9udW1iZXJSZWdFeHBJbnB1dCA6IHRoaXMuX251bWJlclJlZ0V4cDsgLy8gdmFsaWRhdGUgYXMgc3RyaW5nXG5cbiAgICAgIHZhciB2YWxpZCA9IHJlZ2V4cC50ZXN0KHRoaXMuX3JlbW92ZVRob3VzYW5kc1NlcGFyYXRvcnModGhpcy52YWx1ZSkpO1xuXG4gICAgICBpZiAodmFsaWQpIHtcbiAgICAgICAgLy8gdmFsaWRhdGUgYXMgbnVtYmVyXG4gICAgICAgIHZhciBudW1iZXIgPSB0aGlzLm51bWJlcjtcbiAgICAgICAgdmFsaWQgPSB2YWxpZCAmJiAhaXNOYU4obnVtYmVyKSAmJiAoIC8vIGNoZWNrIG1pbiBib3VuZCBmb3IgbmVnYXRpdmUgdmFsdWVzXG4gICAgICAgIHRoaXMubWluID09IG51bGwgfHwgdGhpcy5taW4gPj0gMCB8fCB0aGlzLm1pbiA8PSB0aGlzLm51bWJlcikgJiYgKCAvLyBjaGVjayBtYXggYm91bmQgZm9yIHBvc2l0aXZlIHZhbHVlc1xuICAgICAgICB0aGlzLm1heCA9PSBudWxsIHx8IHRoaXMubWF4IDw9IDAgfHwgdGhpcy5udW1iZXIgPD0gdGhpcy5tYXgpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdmFsaWQgJiYgX2dldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkTnVtYmVyLnByb3RvdHlwZSksIFwiZG9WYWxpZGF0ZVwiLCB0aGlzKS5jYWxsKHRoaXMsIGZsYWdzKTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgIEBvdmVycmlkZVxyXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImRvQ29tbWl0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRvQ29tbWl0KCkge1xuICAgICAgaWYgKHRoaXMudmFsdWUpIHtcbiAgICAgICAgdmFyIG51bWJlciA9IHRoaXMubnVtYmVyO1xuICAgICAgICB2YXIgdmFsaWRudW0gPSBudW1iZXI7IC8vIGNoZWNrIGJvdW5kc1xuXG4gICAgICAgIGlmICh0aGlzLm1pbiAhPSBudWxsKSB2YWxpZG51bSA9IE1hdGgubWF4KHZhbGlkbnVtLCB0aGlzLm1pbik7XG4gICAgICAgIGlmICh0aGlzLm1heCAhPSBudWxsKSB2YWxpZG51bSA9IE1hdGgubWluKHZhbGlkbnVtLCB0aGlzLm1heCk7XG4gICAgICAgIGlmICh2YWxpZG51bSAhPT0gbnVtYmVyKSB0aGlzLnVubWFza2VkVmFsdWUgPSBTdHJpbmcodmFsaWRudW0pO1xuICAgICAgICB2YXIgZm9ybWF0dGVkID0gdGhpcy52YWx1ZTtcbiAgICAgICAgaWYgKHRoaXMubm9ybWFsaXplWmVyb3MpIGZvcm1hdHRlZCA9IHRoaXMuX25vcm1hbGl6ZVplcm9zKGZvcm1hdHRlZCk7XG4gICAgICAgIGlmICh0aGlzLnBhZEZyYWN0aW9uYWxaZXJvcykgZm9ybWF0dGVkID0gdGhpcy5fcGFkRnJhY3Rpb25hbFplcm9zKGZvcm1hdHRlZCk7XG4gICAgICAgIHRoaXMuX3ZhbHVlID0gZm9ybWF0dGVkO1xuICAgICAgfVxuXG4gICAgICBfZ2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWROdW1iZXIucHJvdG90eXBlKSwgXCJkb0NvbW1pdFwiLCB0aGlzKS5jYWxsKHRoaXMpO1xuICAgIH1cbiAgICAvKiogKi9cblxuICB9LCB7XG4gICAga2V5OiBcIl9ub3JtYWxpemVaZXJvc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfbm9ybWFsaXplWmVyb3ModmFsdWUpIHtcbiAgICAgIHZhciBwYXJ0cyA9IHRoaXMuX3JlbW92ZVRob3VzYW5kc1NlcGFyYXRvcnModmFsdWUpLnNwbGl0KHRoaXMucmFkaXgpOyAvLyByZW1vdmUgbGVhZGluZyB6ZXJvc1xuXG5cbiAgICAgIHBhcnRzWzBdID0gcGFydHNbMF0ucmVwbGFjZSgvXihcXEQqKSgwKikoXFxkKikvLCBmdW5jdGlvbiAobWF0Y2gsIHNpZ24sIHplcm9zLCBudW0pIHtcbiAgICAgICAgcmV0dXJuIHNpZ24gKyBudW07XG4gICAgICB9KTsgLy8gYWRkIGxlYWRpbmcgemVyb1xuXG4gICAgICBpZiAodmFsdWUubGVuZ3RoICYmICEvXFxkJC8udGVzdChwYXJ0c1swXSkpIHBhcnRzWzBdID0gcGFydHNbMF0gKyAnMCc7XG5cbiAgICAgIGlmIChwYXJ0cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIHBhcnRzWzFdID0gcGFydHNbMV0ucmVwbGFjZSgvMCokLywgJycpOyAvLyByZW1vdmUgdHJhaWxpbmcgemVyb3NcblxuICAgICAgICBpZiAoIXBhcnRzWzFdLmxlbmd0aCkgcGFydHMubGVuZ3RoID0gMTsgLy8gcmVtb3ZlIGZyYWN0aW9uYWxcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuX2luc2VydFRob3VzYW5kc1NlcGFyYXRvcnMocGFydHMuam9pbih0aGlzLnJhZGl4KSk7XG4gICAgfVxuICAgIC8qKiAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiX3BhZEZyYWN0aW9uYWxaZXJvc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfcGFkRnJhY3Rpb25hbFplcm9zKHZhbHVlKSB7XG4gICAgICBpZiAoIXZhbHVlKSByZXR1cm4gdmFsdWU7XG4gICAgICB2YXIgcGFydHMgPSB2YWx1ZS5zcGxpdCh0aGlzLnJhZGl4KTtcbiAgICAgIGlmIChwYXJ0cy5sZW5ndGggPCAyKSBwYXJ0cy5wdXNoKCcnKTtcbiAgICAgIHBhcnRzWzFdID0gcGFydHNbMV0ucGFkRW5kKHRoaXMuc2NhbGUsICcwJyk7XG4gICAgICByZXR1cm4gcGFydHMuam9pbih0aGlzLnJhZGl4KTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgIEBvdmVycmlkZVxyXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInVubWFza2VkVmFsdWVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZW1vdmVUaG91c2FuZHNTZXBhcmF0b3JzKHRoaXMuX25vcm1hbGl6ZVplcm9zKHRoaXMudmFsdWUpKS5yZXBsYWNlKHRoaXMucmFkaXgsICcuJyk7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldCh1bm1hc2tlZFZhbHVlKSB7XG4gICAgICBfc2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWROdW1iZXIucHJvdG90eXBlKSwgXCJ1bm1hc2tlZFZhbHVlXCIsIHVubWFza2VkVmFsdWUucmVwbGFjZSgnLicsIHRoaXMucmFkaXgpLCB0aGlzLCB0cnVlKTtcbiAgICB9XG4gICAgLyoqIFBhcnNlZCBOdW1iZXIgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIm51bWJlclwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIE51bWJlcih0aGlzLnVubWFza2VkVmFsdWUpO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQobnVtYmVyKSB7XG4gICAgICB0aGlzLnVubWFza2VkVmFsdWUgPSBTdHJpbmcobnVtYmVyKTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgIEBvdmVycmlkZVxyXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInR5cGVkVmFsdWVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLm51bWJlcjtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHZhbHVlKSB7XG4gICAgICB0aGlzLm51bWJlciA9IHZhbHVlO1xuICAgIH1cbiAgICAvKipcclxuICAgICAgSXMgbmVnYXRpdmUgYWxsb3dlZFxyXG4gICAgICBAcmVhZG9ubHlcclxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJhbGxvd05lZ2F0aXZlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5zaWduZWQgfHwgdGhpcy5taW4gIT0gbnVsbCAmJiB0aGlzLm1pbiA8IDAgfHwgdGhpcy5tYXggIT0gbnVsbCAmJiB0aGlzLm1heCA8IDA7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIE1hc2tlZE51bWJlcjtcbn0oTWFza2VkKTtcbk1hc2tlZE51bWJlci5ERUZBVUxUUyA9IHtcbiAgcmFkaXg6ICcsJyxcbiAgdGhvdXNhbmRzU2VwYXJhdG9yOiAnJyxcbiAgbWFwVG9SYWRpeDogWycuJ10sXG4gIHNjYWxlOiAyLFxuICBzaWduZWQ6IGZhbHNlLFxuICBub3JtYWxpemVaZXJvczogdHJ1ZSxcbiAgcGFkRnJhY3Rpb25hbFplcm9zOiBmYWxzZVxufTtcblxuLyoqIE1hc2tpbmcgYnkgUmVnRXhwICovXG5cbnZhciBNYXNrZWRSZWdFeHAgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9NYXNrZWQpIHtcbiAgX2luaGVyaXRzKE1hc2tlZFJlZ0V4cCwgX01hc2tlZCk7XG5cbiAgZnVuY3Rpb24gTWFza2VkUmVnRXhwKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNYXNrZWRSZWdFeHApO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9nZXRQcm90b3R5cGVPZihNYXNrZWRSZWdFeHApLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKE1hc2tlZFJlZ0V4cCwgW3tcbiAgICBrZXk6IFwiX3VwZGF0ZVwiLFxuXG4gICAgLyoqXHJcbiAgICAgIEBvdmVycmlkZVxyXG4gICAgICBAcGFyYW0ge09iamVjdH0gb3B0c1xyXG4gICAgKi9cbiAgICB2YWx1ZTogZnVuY3Rpb24gX3VwZGF0ZShvcHRzKSB7XG4gICAgICBpZiAob3B0cy5tYXNrKSBvcHRzLnZhbGlkYXRlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZS5zZWFyY2gob3B0cy5tYXNrKSA+PSAwO1xuICAgICAgfTtcblxuICAgICAgX2dldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkUmVnRXhwLnByb3RvdHlwZSksIFwiX3VwZGF0ZVwiLCB0aGlzKS5jYWxsKHRoaXMsIG9wdHMpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBNYXNrZWRSZWdFeHA7XG59KE1hc2tlZCk7XG5cbi8qKiBNYXNraW5nIGJ5IGN1c3RvbSBGdW5jdGlvbiAqL1xuXG52YXIgTWFza2VkRnVuY3Rpb24gPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9NYXNrZWQpIHtcbiAgX2luaGVyaXRzKE1hc2tlZEZ1bmN0aW9uLCBfTWFza2VkKTtcblxuICBmdW5jdGlvbiBNYXNrZWRGdW5jdGlvbigpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTWFza2VkRnVuY3Rpb24pO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9nZXRQcm90b3R5cGVPZihNYXNrZWRGdW5jdGlvbikuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoTWFza2VkRnVuY3Rpb24sIFt7XG4gICAga2V5OiBcIl91cGRhdGVcIixcblxuICAgIC8qKlxyXG4gICAgICBAb3ZlcnJpZGVcclxuICAgICAgQHBhcmFtIHtPYmplY3R9IG9wdHNcclxuICAgICovXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF91cGRhdGUob3B0cykge1xuICAgICAgaWYgKG9wdHMubWFzaykgb3B0cy52YWxpZGF0ZSA9IG9wdHMubWFzaztcblxuICAgICAgX2dldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkRnVuY3Rpb24ucHJvdG90eXBlKSwgXCJfdXBkYXRlXCIsIHRoaXMpLmNhbGwodGhpcywgb3B0cyk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIE1hc2tlZEZ1bmN0aW9uO1xufShNYXNrZWQpO1xuXG4vKiogRHluYW1pYyBtYXNrIGZvciBjaG9vc2luZyBhcHJvcHJpYXRlIG1hc2sgaW4gcnVuLXRpbWUgKi9cbnZhciBNYXNrZWREeW5hbWljID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfTWFza2VkKSB7XG4gIF9pbmhlcml0cyhNYXNrZWREeW5hbWljLCBfTWFza2VkKTtcblxuICAvKiogQ3VycmVudGx5IGNob3NlbiBtYXNrICovXG5cbiAgLyoqIENvbXBsaWxlZCB7QGxpbmsgTWFza2VkfSBvcHRpb25zICovXG5cbiAgLyoqIENob29zZXMge0BsaW5rIE1hc2tlZH0gZGVwZW5kaW5nIG9uIGlucHV0IHZhbHVlICovXG5cbiAgLyoqXHJcbiAgICBAcGFyYW0ge09iamVjdH0gb3B0c1xyXG4gICovXG4gIGZ1bmN0aW9uIE1hc2tlZER5bmFtaWMob3B0cykge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNYXNrZWREeW5hbWljKTtcblxuICAgIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX2dldFByb3RvdHlwZU9mKE1hc2tlZER5bmFtaWMpLmNhbGwodGhpcywgT2JqZWN0LmFzc2lnbih7fSwgTWFza2VkRHluYW1pYy5ERUZBVUxUUywge30sIG9wdHMpKSk7XG4gICAgX3RoaXMuY3VycmVudE1hc2sgPSBudWxsO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuICAvKipcclxuICAgIEBvdmVycmlkZVxyXG4gICovXG5cblxuICBfY3JlYXRlQ2xhc3MoTWFza2VkRHluYW1pYywgW3tcbiAgICBrZXk6IFwiX3VwZGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfdXBkYXRlKG9wdHMpIHtcbiAgICAgIF9nZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZER5bmFtaWMucHJvdG90eXBlKSwgXCJfdXBkYXRlXCIsIHRoaXMpLmNhbGwodGhpcywgb3B0cyk7XG5cbiAgICAgIGlmICgnbWFzaycgaW4gb3B0cykge1xuICAgICAgICAvLyBtYXNrIGNvdWxkIGJlIHRvdGFsbHkgZHluYW1pYyB3aXRoIG9ubHkgYGRpc3BhdGNoYCBvcHRpb25cbiAgICAgICAgdGhpcy5jb21waWxlZE1hc2tzID0gQXJyYXkuaXNBcnJheShvcHRzLm1hc2spID8gb3B0cy5tYXNrLm1hcChmdW5jdGlvbiAobSkge1xuICAgICAgICAgIHJldHVybiBjcmVhdGVNYXNrKG0pO1xuICAgICAgICB9KSA6IFtdO1xuICAgICAgfVxuICAgIH1cbiAgICAvKipcclxuICAgICAgQG92ZXJyaWRlXHJcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiX2FwcGVuZENoYXJSYXdcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2FwcGVuZENoYXJSYXcoKSB7XG4gICAgICB2YXIgZGV0YWlscyA9IHRoaXMuX2FwcGx5RGlzcGF0Y2guYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblxuICAgICAgaWYgKHRoaXMuY3VycmVudE1hc2spIHtcbiAgICAgICAgdmFyIF90aGlzJGN1cnJlbnRNYXNrO1xuXG4gICAgICAgIGRldGFpbHMuYWdncmVnYXRlKChfdGhpcyRjdXJyZW50TWFzayA9IHRoaXMuY3VycmVudE1hc2spLl9hcHBlbmRDaGFyLmFwcGx5KF90aGlzJGN1cnJlbnRNYXNrLCBhcmd1bWVudHMpKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRldGFpbHM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIl9hcHBseURpc3BhdGNoXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9hcHBseURpc3BhdGNoKCkge1xuICAgICAgdmFyIGFwcGVuZGVkID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAnJztcbiAgICAgIHZhciBmbGFncyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgICB2YXIgcHJldlZhbHVlQmVmb3JlVGFpbCA9IGZsYWdzLnRhaWwgJiYgZmxhZ3MuX2JlZm9yZVRhaWxTdGF0ZSAhPSBudWxsID8gZmxhZ3MuX2JlZm9yZVRhaWxTdGF0ZS5fdmFsdWUgOiB0aGlzLnZhbHVlO1xuICAgICAgdmFyIGlucHV0VmFsdWUgPSB0aGlzLnJhd0lucHV0VmFsdWU7XG4gICAgICB2YXIgaW5zZXJ0VmFsdWUgPSBmbGFncy50YWlsICYmIGZsYWdzLl9iZWZvcmVUYWlsU3RhdGUgIT0gbnVsbCA/IC8vICRGbG93Rml4TWUgLSB0aXJlZCB0byBmaWdodCB3aXRoIHR5cGUgc3lzdGVtXG4gICAgICBmbGFncy5fYmVmb3JlVGFpbFN0YXRlLl9yYXdJbnB1dFZhbHVlIDogaW5wdXRWYWx1ZTtcbiAgICAgIHZhciB0YWlsVmFsdWUgPSBpbnB1dFZhbHVlLnNsaWNlKGluc2VydFZhbHVlLmxlbmd0aCk7XG4gICAgICB2YXIgcHJldk1hc2sgPSB0aGlzLmN1cnJlbnRNYXNrO1xuICAgICAgdmFyIGRldGFpbHMgPSBuZXcgQ2hhbmdlRGV0YWlscygpO1xuICAgICAgdmFyIHByZXZNYXNrU3RhdGUgPSBwcmV2TWFzayAmJiBwcmV2TWFzay5zdGF0ZTsgLy8gY2xvbmUgZmxhZ3MgdG8gcHJldmVudCBvdmVyd3JpdGluZyBgX2JlZm9yZVRhaWxTdGF0ZWBcblxuICAgICAgdGhpcy5jdXJyZW50TWFzayA9IHRoaXMuZG9EaXNwYXRjaChhcHBlbmRlZCwgT2JqZWN0LmFzc2lnbih7fSwgZmxhZ3MpKTsgLy8gcmVzdG9yZSBzdGF0ZSBhZnRlciBkaXNwYXRjaFxuXG4gICAgICBpZiAodGhpcy5jdXJyZW50TWFzaykge1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50TWFzayAhPT0gcHJldk1hc2spIHtcbiAgICAgICAgICAvLyBpZiBtYXNrIGNoYW5nZWQgcmVhcHBseSBpbnB1dFxuICAgICAgICAgIHRoaXMuY3VycmVudE1hc2sucmVzZXQoKTsgLy8gJEZsb3dGaXhNZSAtIGl0J3Mgb2ssIHdlIGRvbid0IGNoYW5nZSBjdXJyZW50IG1hc2sgYWJvdmVcblxuICAgICAgICAgIHZhciBkID0gdGhpcy5jdXJyZW50TWFzay5hcHBlbmQoaW5zZXJ0VmFsdWUsIHtcbiAgICAgICAgICAgIHJhdzogdHJ1ZVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGRldGFpbHMudGFpbFNoaWZ0ID0gZC5pbnNlcnRlZC5sZW5ndGggLSBwcmV2VmFsdWVCZWZvcmVUYWlsLmxlbmd0aDtcblxuICAgICAgICAgIGlmICh0YWlsVmFsdWUpIHtcbiAgICAgICAgICAgIC8vICRGbG93Rml4TWUgLSBpdCdzIG9rLCB3ZSBkb24ndCBjaGFuZ2UgY3VycmVudCBtYXNrIGFib3ZlXG4gICAgICAgICAgICBkZXRhaWxzLnRhaWxTaGlmdCArPSB0aGlzLmN1cnJlbnRNYXNrLmFwcGVuZCh0YWlsVmFsdWUsIHtcbiAgICAgICAgICAgICAgcmF3OiB0cnVlLFxuICAgICAgICAgICAgICB0YWlsOiB0cnVlXG4gICAgICAgICAgICB9KS50YWlsU2hpZnQ7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIERpc3BhdGNoIGNhbiBkbyBzb21ldGhpbmcgYmFkIHdpdGggc3RhdGUsIHNvXG4gICAgICAgICAgLy8gcmVzdG9yZSBwcmV2IG1hc2sgc3RhdGVcbiAgICAgICAgICB0aGlzLmN1cnJlbnRNYXNrLnN0YXRlID0gcHJldk1hc2tTdGF0ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGV0YWlscztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiX2FwcGVuZFBsYWNlaG9sZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9hcHBlbmRQbGFjZWhvbGRlcigpIHtcbiAgICAgIHZhciBkZXRhaWxzID0gdGhpcy5fYXBwbHlEaXNwYXRjaC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXG4gICAgICBpZiAodGhpcy5jdXJyZW50TWFzaykge1xuICAgICAgICBkZXRhaWxzLmFnZ3JlZ2F0ZSh0aGlzLmN1cnJlbnRNYXNrLl9hcHBlbmRQbGFjZWhvbGRlcigpKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRldGFpbHM7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICBAb3ZlcnJpZGVcclxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJkb0Rpc3BhdGNoXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRvRGlzcGF0Y2goYXBwZW5kZWQpIHtcbiAgICAgIHZhciBmbGFncyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgICByZXR1cm4gdGhpcy5kaXNwYXRjaChhcHBlbmRlZCwgdGhpcywgZmxhZ3MpO1xuICAgIH1cbiAgICAvKipcclxuICAgICAgQG92ZXJyaWRlXHJcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZG9WYWxpZGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkb1ZhbGlkYXRlKCkge1xuICAgICAgdmFyIF9nZXQyLCBfdGhpcyRjdXJyZW50TWFzazI7XG5cbiAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gKF9nZXQyID0gX2dldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkRHluYW1pYy5wcm90b3R5cGUpLCBcImRvVmFsaWRhdGVcIiwgdGhpcykpLmNhbGwuYXBwbHkoX2dldDIsIFt0aGlzXS5jb25jYXQoYXJncykpICYmICghdGhpcy5jdXJyZW50TWFzayB8fCAoX3RoaXMkY3VycmVudE1hc2syID0gdGhpcy5jdXJyZW50TWFzaykuZG9WYWxpZGF0ZS5hcHBseShfdGhpcyRjdXJyZW50TWFzazIsIGFyZ3MpKTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgIEBvdmVycmlkZVxyXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInJlc2V0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlc2V0KCkge1xuICAgICAgaWYgKHRoaXMuY3VycmVudE1hc2spIHRoaXMuY3VycmVudE1hc2sucmVzZXQoKTtcbiAgICAgIHRoaXMuY29tcGlsZWRNYXNrcy5mb3JFYWNoKGZ1bmN0aW9uIChtKSB7XG4gICAgICAgIHJldHVybiBtLnJlc2V0KCk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgIEBvdmVycmlkZVxyXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInJlbW92ZVwiLFxuXG4gICAgLyoqXHJcbiAgICAgIEBvdmVycmlkZVxyXG4gICAgKi9cbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgdmFyIGRldGFpbHMgPSBuZXcgQ2hhbmdlRGV0YWlscygpO1xuXG4gICAgICBpZiAodGhpcy5jdXJyZW50TWFzaykge1xuICAgICAgICB2YXIgX3RoaXMkY3VycmVudE1hc2szO1xuXG4gICAgICAgIGRldGFpbHMuYWdncmVnYXRlKChfdGhpcyRjdXJyZW50TWFzazMgPSB0aGlzLmN1cnJlbnRNYXNrKS5yZW1vdmUuYXBwbHkoX3RoaXMkY3VycmVudE1hc2szLCBhcmd1bWVudHMpKSAvLyB1cGRhdGUgd2l0aCBkaXNwYXRjaFxuICAgICAgICAuYWdncmVnYXRlKHRoaXMuX2FwcGx5RGlzcGF0Y2goKSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkZXRhaWxzO1xuICAgIH1cbiAgICAvKipcclxuICAgICAgQG92ZXJyaWRlXHJcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZXh0cmFjdElucHV0XCIsXG5cbiAgICAvKipcclxuICAgICAgQG92ZXJyaWRlXHJcbiAgICAqL1xuICAgIHZhbHVlOiBmdW5jdGlvbiBleHRyYWN0SW5wdXQoKSB7XG4gICAgICB2YXIgX3RoaXMkY3VycmVudE1hc2s0O1xuXG4gICAgICByZXR1cm4gdGhpcy5jdXJyZW50TWFzayA/IChfdGhpcyRjdXJyZW50TWFzazQgPSB0aGlzLmN1cnJlbnRNYXNrKS5leHRyYWN0SW5wdXQuYXBwbHkoX3RoaXMkY3VycmVudE1hc2s0LCBhcmd1bWVudHMpIDogJyc7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICBAb3ZlcnJpZGVcclxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJleHRyYWN0VGFpbFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBleHRyYWN0VGFpbCgpIHtcbiAgICAgIHZhciBfdGhpcyRjdXJyZW50TWFzazUsIF9nZXQzO1xuXG4gICAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgYXJnc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jdXJyZW50TWFzayA/IChfdGhpcyRjdXJyZW50TWFzazUgPSB0aGlzLmN1cnJlbnRNYXNrKS5leHRyYWN0VGFpbC5hcHBseShfdGhpcyRjdXJyZW50TWFzazUsIGFyZ3MpIDogKF9nZXQzID0gX2dldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkRHluYW1pYy5wcm90b3R5cGUpLCBcImV4dHJhY3RUYWlsXCIsIHRoaXMpKS5jYWxsLmFwcGx5KF9nZXQzLCBbdGhpc10uY29uY2F0KGFyZ3MpKTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgIEBvdmVycmlkZVxyXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImRvQ29tbWl0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRvQ29tbWl0KCkge1xuICAgICAgaWYgKHRoaXMuY3VycmVudE1hc2spIHRoaXMuY3VycmVudE1hc2suZG9Db21taXQoKTtcblxuICAgICAgX2dldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkRHluYW1pYy5wcm90b3R5cGUpLCBcImRvQ29tbWl0XCIsIHRoaXMpLmNhbGwodGhpcyk7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICBAb3ZlcnJpZGVcclxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJuZWFyZXN0SW5wdXRQb3NcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbmVhcmVzdElucHV0UG9zKCkge1xuICAgICAgdmFyIF90aGlzJGN1cnJlbnRNYXNrNiwgX2dldDQ7XG5cbiAgICAgIGZvciAodmFyIF9sZW4zID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMyksIF9rZXkzID0gMDsgX2tleTMgPCBfbGVuMzsgX2tleTMrKykge1xuICAgICAgICBhcmdzW19rZXkzXSA9IGFyZ3VtZW50c1tfa2V5M107XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRNYXNrID8gKF90aGlzJGN1cnJlbnRNYXNrNiA9IHRoaXMuY3VycmVudE1hc2spLm5lYXJlc3RJbnB1dFBvcy5hcHBseShfdGhpcyRjdXJyZW50TWFzazYsIGFyZ3MpIDogKF9nZXQ0ID0gX2dldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkRHluYW1pYy5wcm90b3R5cGUpLCBcIm5lYXJlc3RJbnB1dFBvc1wiLCB0aGlzKSkuY2FsbC5hcHBseShfZ2V0NCwgW3RoaXNdLmNvbmNhdChhcmdzKSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInZhbHVlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5jdXJyZW50TWFzayA/IHRoaXMuY3VycmVudE1hc2sudmFsdWUgOiAnJztcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHZhbHVlKSB7XG4gICAgICBfc2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWREeW5hbWljLnByb3RvdHlwZSksIFwidmFsdWVcIiwgdmFsdWUsIHRoaXMsIHRydWUpO1xuICAgIH1cbiAgICAvKipcclxuICAgICAgQG92ZXJyaWRlXHJcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwidW5tYXNrZWRWYWx1ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuY3VycmVudE1hc2sgPyB0aGlzLmN1cnJlbnRNYXNrLnVubWFza2VkVmFsdWUgOiAnJztcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHVubWFza2VkVmFsdWUpIHtcbiAgICAgIF9zZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZER5bmFtaWMucHJvdG90eXBlKSwgXCJ1bm1hc2tlZFZhbHVlXCIsIHVubWFza2VkVmFsdWUsIHRoaXMsIHRydWUpO1xuICAgIH1cbiAgICAvKipcclxuICAgICAgQG92ZXJyaWRlXHJcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwidHlwZWRWYWx1ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuY3VycmVudE1hc2sgPyB0aGlzLmN1cnJlbnRNYXNrLnR5cGVkVmFsdWUgOiAnJztcbiAgICB9IC8vIHByb2JhYmx5IHR5cGVkVmFsdWUgc2hvdWxkIG5vdCBiZSB1c2VkIHdpdGggZHluYW1pY1xuICAgICxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2YWx1ZSkge1xuICAgICAgdmFyIHVubWFza2VkVmFsdWUgPSBTdHJpbmcodmFsdWUpOyAvLyBkb3VibGUgY2hlY2sgaXRcblxuICAgICAgaWYgKHRoaXMuY3VycmVudE1hc2spIHtcbiAgICAgICAgdGhpcy5jdXJyZW50TWFzay50eXBlZFZhbHVlID0gdmFsdWU7XG4gICAgICAgIHVubWFza2VkVmFsdWUgPSB0aGlzLmN1cnJlbnRNYXNrLnVubWFza2VkVmFsdWU7XG4gICAgICB9XG5cbiAgICAgIHRoaXMudW5tYXNrZWRWYWx1ZSA9IHVubWFza2VkVmFsdWU7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICBAb3ZlcnJpZGVcclxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJpc0NvbXBsZXRlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gISF0aGlzLmN1cnJlbnRNYXNrICYmIHRoaXMuY3VycmVudE1hc2suaXNDb21wbGV0ZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic3RhdGVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBfZ2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWREeW5hbWljLnByb3RvdHlwZSksIFwic3RhdGVcIiwgdGhpcyksIHtcbiAgICAgICAgX3Jhd0lucHV0VmFsdWU6IHRoaXMucmF3SW5wdXRWYWx1ZSxcbiAgICAgICAgY29tcGlsZWRNYXNrczogdGhpcy5jb21waWxlZE1hc2tzLm1hcChmdW5jdGlvbiAobSkge1xuICAgICAgICAgIHJldHVybiBtLnN0YXRlO1xuICAgICAgICB9KSxcbiAgICAgICAgY3VycmVudE1hc2tSZWY6IHRoaXMuY3VycmVudE1hc2ssXG4gICAgICAgIGN1cnJlbnRNYXNrOiB0aGlzLmN1cnJlbnRNYXNrICYmIHRoaXMuY3VycmVudE1hc2suc3RhdGVcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQoc3RhdGUpIHtcbiAgICAgIHZhciBjb21waWxlZE1hc2tzID0gc3RhdGUuY29tcGlsZWRNYXNrcyxcbiAgICAgICAgICBjdXJyZW50TWFza1JlZiA9IHN0YXRlLmN1cnJlbnRNYXNrUmVmLFxuICAgICAgICAgIGN1cnJlbnRNYXNrID0gc3RhdGUuY3VycmVudE1hc2ssXG4gICAgICAgICAgbWFza2VkU3RhdGUgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoc3RhdGUsIFtcImNvbXBpbGVkTWFza3NcIiwgXCJjdXJyZW50TWFza1JlZlwiLCBcImN1cnJlbnRNYXNrXCJdKTtcblxuICAgICAgdGhpcy5jb21waWxlZE1hc2tzLmZvckVhY2goZnVuY3Rpb24gKG0sIG1pKSB7XG4gICAgICAgIHJldHVybiBtLnN0YXRlID0gY29tcGlsZWRNYXNrc1ttaV07XG4gICAgICB9KTtcblxuICAgICAgaWYgKGN1cnJlbnRNYXNrUmVmICE9IG51bGwpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50TWFzayA9IGN1cnJlbnRNYXNrUmVmO1xuICAgICAgICB0aGlzLmN1cnJlbnRNYXNrLnN0YXRlID0gY3VycmVudE1hc2s7XG4gICAgICB9XG5cbiAgICAgIF9zZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZER5bmFtaWMucHJvdG90eXBlKSwgXCJzdGF0ZVwiLCBtYXNrZWRTdGF0ZSwgdGhpcywgdHJ1ZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIm92ZXJ3cml0ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuY3VycmVudE1hc2sgPyB0aGlzLmN1cnJlbnRNYXNrLm92ZXJ3cml0ZSA6IF9nZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZER5bmFtaWMucHJvdG90eXBlKSwgXCJvdmVyd3JpdGVcIiwgdGhpcyk7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldChvdmVyd3JpdGUpIHtcbiAgICAgIGNvbnNvbGUud2FybignXCJvdmVyd3JpdGVcIiBvcHRpb24gaXMgbm90IGF2YWlsYWJsZSBpbiBkeW5hbWljIG1hc2ssIHVzZSB0aGlzIG9wdGlvbiBpbiBzaWJsaW5ncycpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBNYXNrZWREeW5hbWljO1xufShNYXNrZWQpO1xuTWFza2VkRHluYW1pYy5ERUZBVUxUUyA9IHtcbiAgZGlzcGF0Y2g6IGZ1bmN0aW9uIGRpc3BhdGNoKGFwcGVuZGVkLCBtYXNrZWQsIGZsYWdzKSB7XG4gICAgaWYgKCFtYXNrZWQuY29tcGlsZWRNYXNrcy5sZW5ndGgpIHJldHVybjtcbiAgICB2YXIgaW5wdXRWYWx1ZSA9IG1hc2tlZC5yYXdJbnB1dFZhbHVlOyAvLyBzaW11bGF0ZSBpbnB1dFxuXG4gICAgdmFyIGlucHV0cyA9IG1hc2tlZC5jb21waWxlZE1hc2tzLm1hcChmdW5jdGlvbiAobSwgaW5kZXgpIHtcbiAgICAgIG0ucmVzZXQoKTtcbiAgICAgIG0uYXBwZW5kKGlucHV0VmFsdWUsIHtcbiAgICAgICAgcmF3OiB0cnVlXG4gICAgICB9KTtcbiAgICAgIG0uYXBwZW5kKGFwcGVuZGVkLCBmbGFncyk7XG4gICAgICB2YXIgd2VpZ2h0ID0gbS5yYXdJbnB1dFZhbHVlLmxlbmd0aDtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHdlaWdodDogd2VpZ2h0LFxuICAgICAgICBpbmRleDogaW5kZXhcbiAgICAgIH07XG4gICAgfSk7IC8vIHBvcCBtYXNrcyB3aXRoIGxvbmdlciB2YWx1ZXMgZmlyc3RcblxuICAgIGlucHV0cy5zb3J0KGZ1bmN0aW9uIChpMSwgaTIpIHtcbiAgICAgIHJldHVybiBpMi53ZWlnaHQgLSBpMS53ZWlnaHQ7XG4gICAgfSk7XG4gICAgcmV0dXJuIG1hc2tlZC5jb21waWxlZE1hc2tzW2lucHV0c1swXS5pbmRleF07XG4gIH1cbn07XG5cbi8qKlxyXG4gKiBBcHBsaWVzIG1hc2sgb24gZWxlbWVudC5cclxuICogQGNvbnN0cnVjdG9yXHJcbiAqIEBwYXJhbSB7SFRNTElucHV0RWxlbWVudHxIVE1MVGV4dEFyZWFFbGVtZW50fE1hc2tFbGVtZW50fSBlbCAtIEVsZW1lbnQgdG8gYXBwbHkgbWFza1xyXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIEN1c3RvbSBtYXNrIG9wdGlvbnNcclxuICogQHJldHVybiB7SW5wdXRNYXNrfVxyXG4gKi9cblxuZnVuY3Rpb24gSU1hc2soZWwpIHtcbiAgdmFyIG9wdHMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAvLyBjdXJyZW50bHkgYXZhaWxhYmxlIG9ubHkgZm9yIGlucHV0LWxpa2UgZWxlbWVudHNcbiAgcmV0dXJuIG5ldyBJbnB1dE1hc2soZWwsIG9wdHMpO1xufVxuLyoqIHtAbGluayBJbnB1dE1hc2t9ICovXG5cblxuSU1hc2suSW5wdXRNYXNrID0gSW5wdXRNYXNrO1xuLyoqIHtAbGluayBNYXNrZWR9ICovXG5cbklNYXNrLk1hc2tlZCA9IE1hc2tlZDtcbi8qKiB7QGxpbmsgTWFza2VkUGF0dGVybn0gKi9cblxuSU1hc2suTWFza2VkUGF0dGVybiA9IE1hc2tlZFBhdHRlcm47XG4vKioge0BsaW5rIE1hc2tlZEVudW19ICovXG5cbklNYXNrLk1hc2tlZEVudW0gPSBNYXNrZWRFbnVtO1xuLyoqIHtAbGluayBNYXNrZWRSYW5nZX0gKi9cblxuSU1hc2suTWFza2VkUmFuZ2UgPSBNYXNrZWRSYW5nZTtcbi8qKiB7QGxpbmsgTWFza2VkTnVtYmVyfSAqL1xuXG5JTWFzay5NYXNrZWROdW1iZXIgPSBNYXNrZWROdW1iZXI7XG4vKioge0BsaW5rIE1hc2tlZERhdGV9ICovXG5cbklNYXNrLk1hc2tlZERhdGUgPSBNYXNrZWREYXRlO1xuLyoqIHtAbGluayBNYXNrZWRSZWdFeHB9ICovXG5cbklNYXNrLk1hc2tlZFJlZ0V4cCA9IE1hc2tlZFJlZ0V4cDtcbi8qKiB7QGxpbmsgTWFza2VkRnVuY3Rpb259ICovXG5cbklNYXNrLk1hc2tlZEZ1bmN0aW9uID0gTWFza2VkRnVuY3Rpb247XG4vKioge0BsaW5rIE1hc2tlZER5bmFtaWN9ICovXG5cbklNYXNrLk1hc2tlZER5bmFtaWMgPSBNYXNrZWREeW5hbWljO1xuLyoqIHtAbGluayBjcmVhdGVNYXNrfSAqL1xuXG5JTWFzay5jcmVhdGVNYXNrID0gY3JlYXRlTWFzaztcbi8qKiB7QGxpbmsgTWFza0VsZW1lbnR9ICovXG5cbklNYXNrLk1hc2tFbGVtZW50ID0gTWFza0VsZW1lbnQ7XG4vKioge0BsaW5rIEhUTUxNYXNrRWxlbWVudH0gKi9cblxuSU1hc2suSFRNTE1hc2tFbGVtZW50ID0gSFRNTE1hc2tFbGVtZW50O1xuZy5JTWFzayA9IElNYXNrO1xuXG5leHBvcnQgZGVmYXVsdCBJTWFzaztcbmV4cG9ydCB7IEhUTUxNYXNrRWxlbWVudCwgSW5wdXRNYXNrLCBNYXNrRWxlbWVudCwgTWFza2VkLCBNYXNrZWREYXRlLCBNYXNrZWREeW5hbWljLCBNYXNrZWRFbnVtLCBNYXNrZWRGdW5jdGlvbiwgTWFza2VkTnVtYmVyLCBNYXNrZWRQYXR0ZXJuLCBNYXNrZWRSYW5nZSwgTWFza2VkUmVnRXhwLCBjcmVhdGVNYXNrIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbWFzay5lc20uanMubWFwXG4iLCIhZnVuY3Rpb24oZSx0KXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz10KCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXSx0KTpcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9leHBvcnRzLmRhdGVwaWNrZXI9dCgpOmUuZGF0ZXBpY2tlcj10KCl9KHdpbmRvdywoZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24oZSl7dmFyIHQ9e307ZnVuY3Rpb24gbihhKXtpZih0W2FdKXJldHVybiB0W2FdLmV4cG9ydHM7dmFyIHI9dFthXT17aTphLGw6ITEsZXhwb3J0czp7fX07cmV0dXJuIGVbYV0uY2FsbChyLmV4cG9ydHMscixyLmV4cG9ydHMsbiksci5sPSEwLHIuZXhwb3J0c31yZXR1cm4gbi5tPWUsbi5jPXQsbi5kPWZ1bmN0aW9uKGUsdCxhKXtuLm8oZSx0KXx8T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsdCx7ZW51bWVyYWJsZTohMCxnZXQ6YX0pfSxuLnI9ZnVuY3Rpb24oZSl7XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmU3ltYm9sLnRvU3RyaW5nVGFnJiZPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxTeW1ib2wudG9TdHJpbmdUYWcse3ZhbHVlOlwiTW9kdWxlXCJ9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KX0sbi50PWZ1bmN0aW9uKGUsdCl7aWYoMSZ0JiYoZT1uKGUpKSw4JnQpcmV0dXJuIGU7aWYoNCZ0JiZcIm9iamVjdFwiPT10eXBlb2YgZSYmZSYmZS5fX2VzTW9kdWxlKXJldHVybiBlO3ZhciBhPU9iamVjdC5jcmVhdGUobnVsbCk7aWYobi5yKGEpLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShhLFwiZGVmYXVsdFwiLHtlbnVtZXJhYmxlOiEwLHZhbHVlOmV9KSwyJnQmJlwic3RyaW5nXCIhPXR5cGVvZiBlKWZvcih2YXIgciBpbiBlKW4uZChhLHIsZnVuY3Rpb24odCl7cmV0dXJuIGVbdF19LmJpbmQobnVsbCxyKSk7cmV0dXJuIGF9LG4ubj1mdW5jdGlvbihlKXt2YXIgdD1lJiZlLl9fZXNNb2R1bGU/ZnVuY3Rpb24oKXtyZXR1cm4gZS5kZWZhdWx0fTpmdW5jdGlvbigpe3JldHVybiBlfTtyZXR1cm4gbi5kKHQsXCJhXCIsdCksdH0sbi5vPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLHQpfSxuLnA9XCJcIixuKG4ucz0wKX0oW2Z1bmN0aW9uKGUsdCxuKXtlLmV4cG9ydHM9bigxKX0sZnVuY3Rpb24oZSx0LG4pe2Z1bmN0aW9uIGEoZSx0KXtyZXR1cm4gZnVuY3Rpb24oZSl7aWYoQXJyYXkuaXNBcnJheShlKSlyZXR1cm4gZX0oZSl8fGZ1bmN0aW9uKGUsdCl7aWYoIShTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGUpfHxcIltvYmplY3QgQXJndW1lbnRzXVwiPT09T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGUpKSlyZXR1cm47dmFyIG49W10sYT0hMCxyPSExLGk9dm9pZCAwO3RyeXtmb3IodmFyIG8scz1lW1N5bWJvbC5pdGVyYXRvcl0oKTshKGE9KG89cy5uZXh0KCkpLmRvbmUpJiYobi5wdXNoKG8udmFsdWUpLCF0fHxuLmxlbmd0aCE9PXQpO2E9ITApO31jYXRjaChlKXtyPSEwLGk9ZX1maW5hbGx5e3RyeXthfHxudWxsPT1zLnJldHVybnx8cy5yZXR1cm4oKX1maW5hbGx5e2lmKHIpdGhyb3cgaX19cmV0dXJuIG59KGUsdCl8fGZ1bmN0aW9uKCl7dGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2VcIil9KCl9bigyKTt2YXIgcj1bXSxpPVtcIlN1blwiLFwiTW9uXCIsXCJUdWVcIixcIldlZFwiLFwiVGh1XCIsXCJGcmlcIixcIlNhdFwiXSxvPVtcIkphbnVhcnlcIixcIkZlYnJ1YXJ5XCIsXCJNYXJjaFwiLFwiQXByaWxcIixcIk1heVwiLFwiSnVuZVwiLFwiSnVseVwiLFwiQXVndXN0XCIsXCJTZXB0ZW1iZXJcIixcIk9jdG9iZXJcIixcIk5vdmVtYmVyXCIsXCJEZWNlbWJlclwiXSxzPXt0OlwidG9wXCIscjpcInJpZ2h0XCIsYjpcImJvdHRvbVwiLGw6XCJsZWZ0XCIsYzpcImNlbnRlcmVkXCJ9LGM9ZnVuY3Rpb24oKXt9LGw9W1wiY2xpY2tcIixcImZvY3VzaW5cIixcImtleWRvd25cIixcImlucHV0XCJdO2Z1bmN0aW9uIGQoZSl7cmV0dXJuIEFycmF5LmlzQXJyYXkoZSk/ZS5tYXAoZCk6XCJbb2JqZWN0IE9iamVjdF1cIj09PXt9LnRvU3RyaW5nLmNhbGwoZSk/T2JqZWN0LmtleXMoZSkucmVkdWNlKChmdW5jdGlvbih0LG4pe3JldHVybiB0W25dPWQoZVtuXSksdH0pLHt9KTplfWZ1bmN0aW9uIHUoZSx0KXt2YXIgbj1lLmNhbGVuZGFyLnF1ZXJ5U2VsZWN0b3IoXCIucXMtb3ZlcmxheVwiKSxhPW4mJiFuLmNsYXNzTGlzdC5jb250YWlucyhcInFzLWhpZGRlblwiKTt0PXR8fG5ldyBEYXRlKGUuY3VycmVudFllYXIsZS5jdXJyZW50TW9udGgpLGUuY2FsZW5kYXIuaW5uZXJIVE1MPVtoKHQsZSxhKSxmKHQsZSxhKSx2KGUsYSldLmpvaW4oXCJcIiksYSYmc2V0VGltZW91dCgoZnVuY3Rpb24oKXtyZXR1cm4gTSghMCxlKX0pLDEwKX1mdW5jdGlvbiBoKGUsdCxuKXtyZXR1cm4nXFxuICAgIDxkaXYgY2xhc3M9XCJxcy1jb250cm9scyAnLmNvbmNhdChuP1wicXMtYmx1clwiOlwiXCIsJ1wiPlxcbiAgICAgIDxkaXYgY2xhc3M9XCJxcy1hcnJvdyBxcy1sZWZ0XCI+PC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cInFzLW1vbnRoLXllYXJcIj5cXG4gICAgICAgIDxzcGFuIGNsYXNzPVwicXMtbW9udGhcIj4nKS5jb25jYXQodC5tb250aHNbZS5nZXRNb250aCgpXSwnPC9zcGFuPlxcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJxcy15ZWFyXCI+JykuY29uY2F0KGUuZ2V0RnVsbFllYXIoKSwnPC9zcGFuPlxcbiAgICAgIDwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XCJxcy1hcnJvdyBxcy1yaWdodFwiPjwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gICcpfWZ1bmN0aW9uIGYoZSx0LG4pe3ZhciBhPXQuY3VycmVudE1vbnRoLHI9dC5jdXJyZW50WWVhcixpPXQuZGF0ZVNlbGVjdGVkLG89dC5tYXhEYXRlLHM9dC5taW5EYXRlLGM9dC5zaG93QWxsRGF0ZXMsbD10LmRheXMsZD10LmRpc2FibGVkRGF0ZXMsdT10LmRpc2FibGVyLGg9dC5ub1dlZWtlbmRzLGY9dC5zdGFydERheSx2PXQud2Vla2VuZEluZGljZXMsbT10LmV2ZW50cyx5PXQuZ2V0UmFuZ2UmJnQuZ2V0UmFuZ2UoKXx8e30scD0reS5zdGFydCxiPSt5LmVuZCxEPW5ldyBEYXRlLGc9cj09PUQuZ2V0RnVsbFllYXIoKSYmYT09PUQuZ2V0TW9udGgoKSx3PXEobmV3IERhdGUoZSkuc2V0RGF0ZSgxKSksUz13LmdldERheSgpLWYsTT1TPDA/NzowO3cuc2V0TW9udGgody5nZXRNb250aCgpKzEpLHcuc2V0RGF0ZSgwKTt2YXIgeD13LmdldERhdGUoKSxMPVtdLFA9TSs3KigoUyt4KS83fDApO1ArPShTK3gpJTc/NzowLDAhPT1mJiYwPT09UyYmKFArPTcpO2Zvcih2YXIgaj0xO2o8PVA7aisrKXt2YXIgaz0oai0xKSU3LE89bFtrXSxDPWotKFM+PTA/Uzo3K1MpLFk9bmV3IERhdGUocixhLEMpLE49bVsrWV0sRT1ZLmdldERhdGUoKSxBPUM8MXx8Qz54LEk9XCJcIixUPSc8c3BhbiBjbGFzcz1cInFzLW51bVwiPicuY29uY2F0KEUsXCI8L3NwYW4+XCIpLEY9cCYmYiYmK1k+PXAmJitZPD1iO0E/KEk9XCJxcy1lbXB0eSBxcy1vdXRzaWRlLWN1cnJlbnQtbW9udGhcIixjPyhOJiYoSSs9XCIgcXMtZXZlbnRcIiksSSs9XCIgcXMtZGlzYWJsZWRcIik6VD1cIlwiKTooKHMmJlk8c3x8byYmWT5vfHx1KFkpfHxkLmluY2x1ZGVzKCtZKXx8aCYmdi5pbmNsdWRlcyhrKSkmJihJPVwicXMtZGlzYWJsZWRcIiksTiYmKEkrPVwiIHFzLWV2ZW50XCIpLGcmJkM9PT1ELmdldERhdGUoKSYmKEkrPVwiIHFzLWN1cnJlbnRcIiksK1k9PStpJiYoSSs9XCIgcXMtYWN0aXZlXCIpLEYmJihJKz1cIiBxcy1yYW5nZS1kYXRlLVwiLmNvbmNhdChrKSxwIT09YiYmKEkrPStZPT09cD9cIiBxcy1yYW5nZS1kYXRlLXN0YXJ0IHFzLWFjdGl2ZVwiOitZPT09Yj9cIiBxcy1yYW5nZS1kYXRlLWVuZCBxcy1hY3RpdmVcIjpcIiBxcy1yYW5nZS1kYXRlLW1pZGRsZVwiKSkpLEwucHVzaCgnPGRpdiBjbGFzcz1cInFzLXNxdWFyZSBxcy1udW0gJy5jb25jYXQoTyxcIiBcIikuY29uY2F0KEksJ1wiPicpLmNvbmNhdChULFwiPC9kaXY+XCIpKX12YXIgUj1sLm1hcCgoZnVuY3Rpb24oZSl7cmV0dXJuJzxkaXYgY2xhc3M9XCJxcy1zcXVhcmUgcXMtZGF5XCI+Jy5jb25jYXQoZSxcIjwvZGl2PlwiKX0pKS5jb25jYXQoTCk7aWYoUi5sZW5ndGglNyE9MCl0aHJvd1wiQ2FsZW5kYXIgbm90IGNvbnN0cnVjdGVkIHByb3Blcmx5LiBUaGUgIyBvZiBzcXVhcmVzIHNob3VsZCBiZSBhIG11bHRpcGxlIG9mIDcuXCI7cmV0dXJuIFIudW5zaGlmdCgnPGRpdiBjbGFzcz1cInFzLXNxdWFyZXMgJy5jb25jYXQobj9cInFzLWJsdXJcIjpcIlwiLCdcIj4nKSksUi5wdXNoKFwiPC9kaXY+XCIpLFIuam9pbihcIlwiKX1mdW5jdGlvbiB2KGUsdCl7dmFyIG49ZS5vdmVybGF5UGxhY2Vob2xkZXIsYT1lLm92ZXJsYXlCdXR0b24scj1lLm92ZXJsYXlNb250aHMubWFwKChmdW5jdGlvbihlLHQpe3JldHVybidcXG4gICAgICA8ZGl2IGNsYXNzPVwicXMtb3ZlcmxheS1tb250aFwiIGRhdGEtbW9udGgtbnVtPVwiJy5jb25jYXQodCwnXCI+XFxuICAgICAgICA8c3BhbiBkYXRhLW1vbnRoLW51bT1cIicpLmNvbmNhdCh0LCdcIj4nKS5jb25jYXQoZSxcIjwvc3Bhbj5cXG4gICAgICA8L2Rpdj5cXG4gIFwiKX0pKS5qb2luKFwiXCIpO3JldHVybidcXG4gICAgPGRpdiBjbGFzcz1cInFzLW92ZXJsYXkgJy5jb25jYXQodD9cIlwiOlwicXMtaGlkZGVuXCIsJ1wiPlxcbiAgICAgIDxkaXY+XFxuICAgICAgICA8aW5wdXQgY2xhc3M9XCJxcy1vdmVybGF5LXllYXJcIiBwbGFjZWhvbGRlcj1cIicpLmNvbmNhdChuLCdcIiAvPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cInFzLWNsb3NlXCI+JiMxMDAwNTs8L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVwicXMtb3ZlcmxheS1tb250aC1jb250YWluZXJcIj4nKS5jb25jYXQociwnPC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cInFzLXN1Ym1pdCBxcy1kaXNhYmxlZFwiPicpLmNvbmNhdChhLFwiPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgXCIpfWZ1bmN0aW9uIG0oZSx0LG4pe3ZhciBhPXQuY3VycmVudE1vbnRoLHI9dC5jdXJyZW50WWVhcixpPXQuY2FsZW5kYXIsbz10LmVsLHM9dC5vblNlbGVjdCxjPXQucmVzcGVjdERpc2FibGVkUmVhZE9ubHksbD10LnNpYmxpbmcsZD1pLnF1ZXJ5U2VsZWN0b3IoXCIucXMtYWN0aXZlXCIpLGg9ZS50ZXh0Q29udGVudDsoby5kaXNhYmxlZHx8by5yZWFkT25seSkmJmN8fCh0LmRhdGVTZWxlY3RlZD1uP3ZvaWQgMDpuZXcgRGF0ZShyLGEsaCksZCYmZC5jbGFzc0xpc3QucmVtb3ZlKFwicXMtYWN0aXZlXCIpLG58fGUuY2xhc3NMaXN0LmFkZChcInFzLWFjdGl2ZVwiKSxwKG8sdCxuKSwhbiYmdyh0KSxsJiYoeSh7aW5zdGFuY2U6dCxkZXNlbGVjdDpufSksdSh0KSx1KGwpKSxzKHQsbj92b2lkIDA6bmV3IERhdGUodC5kYXRlU2VsZWN0ZWQpKSl9ZnVuY3Rpb24geShlKXt2YXIgdD1lLmluc3RhbmNlLG49ZS5kZXNlbGVjdCxhPXQuZmlyc3Q/dDp0LnNpYmxpbmcscj1hLnNpYmxpbmc7YT09PXQ/bj8oYS5taW5EYXRlPWEub3JpZ2luYWxNaW5EYXRlLHIubWluRGF0ZT1yLm9yaWdpbmFsTWluRGF0ZSk6ci5taW5EYXRlPWEuZGF0ZVNlbGVjdGVkOm4/KHIubWF4RGF0ZT1yLm9yaWdpbmFsTWF4RGF0ZSxhLm1heERhdGU9YS5vcmlnaW5hbE1heERhdGUpOmEubWF4RGF0ZT1yLmRhdGVTZWxlY3RlZH1mdW5jdGlvbiBwKGUsdCxuKXtpZighdC5ub25JbnB1dClyZXR1cm4gbj9lLnZhbHVlPVwiXCI6dC5mb3JtYXR0ZXIhPT1jP3QuZm9ybWF0dGVyKGUsdC5kYXRlU2VsZWN0ZWQsdCk6dm9pZChlLnZhbHVlPXQuZGF0ZVNlbGVjdGVkLnRvRGF0ZVN0cmluZygpKX1mdW5jdGlvbiBiKGUsdCxuLGEpe258fGE/KG4mJih0LmN1cnJlbnRZZWFyPW4pLGEmJih0LmN1cnJlbnRNb250aD0rYSkpOih0LmN1cnJlbnRNb250aCs9ZS5jb250YWlucyhcInFzLXJpZ2h0XCIpPzE6LTEsMTI9PT10LmN1cnJlbnRNb250aD8odC5jdXJyZW50TW9udGg9MCx0LmN1cnJlbnRZZWFyKyspOi0xPT09dC5jdXJyZW50TW9udGgmJih0LmN1cnJlbnRNb250aD0xMSx0LmN1cnJlbnRZZWFyLS0pKSx0LmN1cnJlbnRNb250aE5hbWU9dC5tb250aHNbdC5jdXJyZW50TW9udGhdLHUodCksdC5vbk1vbnRoQ2hhbmdlKHQpfWZ1bmN0aW9uIEQoZSl7aWYoIWUubm9Qb3NpdGlvbil7dmFyIHQ9ZS5lbCxuPWUuY2FsZW5kYXJDb250YWluZXIscj1lLnBvc2l0aW9uLGk9ZS5wYXJlbnQsbz1yLnRvcCxzPXIucmlnaHQ7aWYoci5jZW50ZXJlZClyZXR1cm4gbi5jbGFzc0xpc3QuYWRkKFwicXMtY2VudGVyZWRcIik7dmFyIGM9YShbaSx0LG5dLm1hcCgoZnVuY3Rpb24oZSl7cmV0dXJuIGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCl9KSksMyksbD1jWzBdLGQ9Y1sxXSx1PWNbMl0saD1kLnRvcC1sLnRvcCtpLnNjcm9sbFRvcCxmPVwiXCIuY29uY2F0KGgtKG8/dS5oZWlnaHQ6LTEqZC5oZWlnaHQpLFwicHhcIiksdj1cIlwiLmNvbmNhdChkLmxlZnQtbC5sZWZ0KyhzP2Qud2lkdGgtdS53aWR0aDowKSxcInB4XCIpO24uc3R5bGUuc2V0UHJvcGVydHkoXCJ0b3BcIixmKSxuLnN0eWxlLnNldFByb3BlcnR5KFwibGVmdFwiLHYpfX1mdW5jdGlvbiBnKGUpe3JldHVyblwiW29iamVjdCBEYXRlXVwiPT09e30udG9TdHJpbmcuY2FsbChlKSYmXCJJbnZhbGlkIERhdGVcIiE9PWUudG9TdHJpbmcoKX1mdW5jdGlvbiBxKGUpe2lmKGcoZSl8fFwibnVtYmVyXCI9PXR5cGVvZiBlJiYhaXNOYU4oZSkpe3ZhciB0PW5ldyBEYXRlKCtlKTtyZXR1cm4gbmV3IERhdGUodC5nZXRGdWxsWWVhcigpLHQuZ2V0TW9udGgoKSx0LmdldERhdGUoKSl9fWZ1bmN0aW9uIHcoZSl7ZS5kaXNhYmxlZHx8IWUuY2FsZW5kYXJDb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKFwicXMtaGlkZGVuXCIpJiYhZS5hbHdheXNTaG93JiYoTSghMCxlKSxlLmNhbGVuZGFyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJxcy1oaWRkZW5cIiksZS5vbkhpZGUoZSkpfWZ1bmN0aW9uIFMoZSl7ZS5kaXNhYmxlZHx8KGUuY2FsZW5kYXJDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcInFzLWhpZGRlblwiKSxEKGUpLGUub25TaG93KGUpKX1mdW5jdGlvbiBNKGUsdCl7dmFyIG49dC5jYWxlbmRhcjtpZihuKXt2YXIgYT1uLnF1ZXJ5U2VsZWN0b3IoXCIucXMtb3ZlcmxheVwiKSxyPWEucXVlcnlTZWxlY3RvcihcIi5xcy1vdmVybGF5LXllYXJcIiksaT1uLnF1ZXJ5U2VsZWN0b3IoXCIucXMtY29udHJvbHNcIiksbz1uLnF1ZXJ5U2VsZWN0b3IoXCIucXMtc3F1YXJlc1wiKTtlPyhhLmNsYXNzTGlzdC5hZGQoXCJxcy1oaWRkZW5cIiksaS5jbGFzc0xpc3QucmVtb3ZlKFwicXMtYmx1clwiKSxvLmNsYXNzTGlzdC5yZW1vdmUoXCJxcy1ibHVyXCIpLHIudmFsdWU9XCJcIik6KGEuY2xhc3NMaXN0LnJlbW92ZShcInFzLWhpZGRlblwiKSxpLmNsYXNzTGlzdC5hZGQoXCJxcy1ibHVyXCIpLG8uY2xhc3NMaXN0LmFkZChcInFzLWJsdXJcIiksci5mb2N1cygpKX19ZnVuY3Rpb24geChlLHQsbixhKXt2YXIgcj1pc05hTigrKG5ldyBEYXRlKS5zZXRGdWxsWWVhcih0LnZhbHVlfHx2b2lkIDApKSxpPXI/bnVsbDp0LnZhbHVlO2lmKDEzPT09KGUud2hpY2h8fGUua2V5Q29kZSl8fFwiY2xpY2tcIj09PWUudHlwZSlhP2IobnVsbCxuLGksYSk6cnx8dC5jbGFzc0xpc3QuY29udGFpbnMoXCJxcy1kaXNhYmxlZFwiKXx8YihudWxsLG4saSxhKTtlbHNlIGlmKG4uY2FsZW5kYXIuY29udGFpbnModCkpe24uY2FsZW5kYXIucXVlcnlTZWxlY3RvcihcIi5xcy1zdWJtaXRcIikuY2xhc3NMaXN0W3I/XCJhZGRcIjpcInJlbW92ZVwiXShcInFzLWRpc2FibGVkXCIpfX1mdW5jdGlvbiBMKGUpe3ZhciB0PWUudHlwZSxuPWUudGFyZ2V0LGk9bi5jbGFzc0xpc3Qsbz1hKHIuZmlsdGVyKChmdW5jdGlvbihlKXt2YXIgdD1lLmNhbGVuZGFyLGE9ZS5lbDtyZXR1cm4gdC5jb250YWlucyhuKXx8YT09PW59KSksMSlbMF0scz1vJiZvLmNhbGVuZGFyLmNvbnRhaW5zKG4pO2lmKCEobyYmby5pc01vYmlsZSYmby5kaXNhYmxlTW9iaWxlKSlpZihcImNsaWNrXCI9PT10KXtpZighbylyZXR1cm4gci5mb3JFYWNoKHcpO2lmKG8uZGlzYWJsZWQpcmV0dXJuO3ZhciBjPW8uY2FsZW5kYXIsbD1vLmNhbGVuZGFyQ29udGFpbmVyLGQ9by5kaXNhYmxlWWVhck92ZXJsYXksdT1vLm5vbklucHV0LGg9Yy5xdWVyeVNlbGVjdG9yKFwiLnFzLW92ZXJsYXkteWVhclwiKSxmPSEhYy5xdWVyeVNlbGVjdG9yKFwiLnFzLWhpZGRlblwiKSx2PWMucXVlcnlTZWxlY3RvcihcIi5xcy1tb250aC15ZWFyXCIpLmNvbnRhaW5zKG4pLHk9bi5kYXRhc2V0Lm1vbnRoTnVtO2lmKG8ubm9Qb3NpdGlvbiYmIXMpKGwuY2xhc3NMaXN0LmNvbnRhaW5zKFwicXMtaGlkZGVuXCIpP1M6dykobyk7ZWxzZSBpZihpLmNvbnRhaW5zKFwicXMtYXJyb3dcIikpYihpLG8pO2Vsc2UgaWYodnx8aS5jb250YWlucyhcInFzLWNsb3NlXCIpKSFkJiZNKCFmLG8pO2Vsc2UgaWYoeSl4KGUsaCxvLHkpO2Vsc2V7aWYoaS5jb250YWlucyhcInFzLW51bVwiKSl7dmFyIHA9XCJTUEFOXCI9PT1uLm5vZGVOYW1lP24ucGFyZW50Tm9kZTpuLEQ9W1wicXMtZGlzYWJsZWRcIixcInFzLWVtcHR5XCJdLnNvbWUoKGZ1bmN0aW9uKGUpe3JldHVybiBwLmNsYXNzTGlzdC5jb250YWlucyhlKX0pKTtyZXR1cm4gcC5jbGFzc0xpc3QuY29udGFpbnMoXCJxcy1hY3RpdmVcIik/bShwLG8sITApOiFEJiZtKHAsbyl9aS5jb250YWlucyhcInFzLXN1Ym1pdFwiKSYmIWkuY29udGFpbnMoXCJxcy1kaXNhYmxlZFwiKT94KGUsaCxvKTp1JiZuPT09by5lbCYmUyhvKX19ZWxzZSBpZihcImZvY3VzaW5cIj09PXQmJm8pUyhvKSxyLmZvckVhY2goKGZ1bmN0aW9uKGUpe3JldHVybiBlIT09byYmdyhlKX0pKTtlbHNlIGlmKFwia2V5ZG93blwiPT09dCYmbyYmIW8uZGlzYWJsZWQpe3ZhciBnPSFvLmNhbGVuZGFyLnF1ZXJ5U2VsZWN0b3IoXCIucXMtb3ZlcmxheVwiKS5jbGFzc0xpc3QuY29udGFpbnMoXCJxcy1oaWRkZW5cIik7MTM9PT0oZS53aGljaHx8ZS5rZXlDb2RlKSYmZyYmcz94KGUsbixvKToyNz09PShlLndoaWNofHxlLmtleUNvZGUpJiZnJiZzJiZNKCEwLG8pfWVsc2UgaWYoXCJpbnB1dFwiPT09dCl7aWYoIW98fCFvLmNhbGVuZGFyLmNvbnRhaW5zKG4pKXJldHVybjt2YXIgcT1vLmNhbGVuZGFyLnF1ZXJ5U2VsZWN0b3IoXCIucXMtc3VibWl0XCIpLEw9bi52YWx1ZS5zcGxpdChcIlwiKS5yZWR1Y2UoKGZ1bmN0aW9uKGUsdCl7cmV0dXJuIGV8fFwiMFwiIT09dD9lKyh0Lm1hdGNoKC9bMC05XS8pP3Q6XCJcIik6XCJcIn0pLFwiXCIpLnNsaWNlKDAsNCk7bi52YWx1ZT1MLHEuY2xhc3NMaXN0WzQ9PT1MLmxlbmd0aD9cInJlbW92ZVwiOlwiYWRkXCJdKFwicXMtZGlzYWJsZWRcIil9fWZ1bmN0aW9uIFAoKXtTKHRoaXMpfWZ1bmN0aW9uIGooKXt3KHRoaXMpfWZ1bmN0aW9uIGsoZSx0KXt2YXIgbj1xKGUpLGE9dGhpcy5jdXJyZW50WWVhcixyPXRoaXMuY3VycmVudE1vbnRoLGk9dGhpcy5zaWJsaW5nO2lmKG51bGw9PWUpcmV0dXJuIHRoaXMuZGF0ZVNlbGVjdGVkPXZvaWQgMCxwKHRoaXMuZWwsdGhpcywhMCksaSYmKHkoe2luc3RhbmNlOnRoaXMsZGVzZWxlY3Q6ITB9KSx1KGkpKSx1KHRoaXMpLHRoaXM7aWYoIWcoZSkpdGhyb3dcImBzZXREYXRlYCBuZWVkcyBhIEphdmFTY3JpcHQgRGF0ZSBvYmplY3QuXCI7aWYodGhpcy5kaXNhYmxlZERhdGVzLnNvbWUoKGZ1bmN0aW9uKGUpe3JldHVybitlPT0rbn0pKXx8bjx0aGlzLm1pbkRhdGV8fG4+dGhpcy5tYXhEYXRlKXRocm93XCJZb3UgY2FuJ3QgbWFudWFsbHkgc2V0IGEgZGF0ZSB0aGF0J3MgZGlzYWJsZWQuXCI7cmV0dXJuIHRoaXMuY3VycmVudFllYXI9bi5nZXRGdWxsWWVhcigpLHRoaXMuY3VycmVudE1vbnRoPW4uZ2V0TW9udGgoKSx0aGlzLmN1cnJlbnRNb250aE5hbWU9dGhpcy5tb250aHNbbi5nZXRNb250aCgpXSx0aGlzLmRhdGVTZWxlY3RlZD1uLHAodGhpcy5lbCx0aGlzKSxpJiYoeSh7aW5zdGFuY2U6dGhpc30pLHUoaSxuKSksKGE9PT1uLmdldEZ1bGxZZWFyKCkmJnI9PT1uLmdldE1vbnRoKCl8fHR8fGkpJiZ1KHRoaXMsbiksdGhpc31mdW5jdGlvbiBPKGUpe3JldHVybiBZKHRoaXMsZSwhMCl9ZnVuY3Rpb24gQyhlKXtyZXR1cm4gWSh0aGlzLGUpfWZ1bmN0aW9uIFkoZSx0LG4pe3ZhciBhPWUuZGF0ZVNlbGVjdGVkLHI9ZS5maXJzdCxpPWUuc2libGluZyxvPWUubWluRGF0ZSxzPWUubWF4RGF0ZSxjPXEodCksbD1uP1wiTWluXCI6XCJNYXhcIixkPWZ1bmN0aW9uKCl7cmV0dXJuXCJvcmlnaW5hbFwiLmNvbmNhdChsLFwiRGF0ZVwiKX0saD1mdW5jdGlvbigpe3JldHVyblwiXCIuY29uY2F0KGwudG9Mb3dlckNhc2UoKSxcIkRhdGVcIil9LGY9ZnVuY3Rpb24oKXtyZXR1cm5cInNldFwiLmNvbmNhdChsKX0sdj1mdW5jdGlvbigpe3Rocm93XCJPdXQtb2YtcmFuZ2UgZGF0ZSBwYXNzZWQgdG8gXCIuY29uY2F0KGYoKSl9O2lmKG51bGw9PXQpZVtkKCldPXZvaWQgMCxpPyhpW2QoKV09dm9pZCAwLG4/KHImJiFhfHwhciYmIWkuZGF0ZVNlbGVjdGVkKSYmKGUubWluRGF0ZT12b2lkIDAsaS5taW5EYXRlPXZvaWQgMCk6KHImJiFpLmRhdGVTZWxlY3RlZHx8IXImJiFhKSYmKGUubWF4RGF0ZT12b2lkIDAsaS5tYXhEYXRlPXZvaWQgMCkpOmVbaCgpXT12b2lkIDA7ZWxzZXtpZighZyh0KSl0aHJvd1wiSW52YWxpZCBkYXRlIHBhc3NlZCB0byBcIi5jb25jYXQoZigpKTtpPygociYmbiYmYz4oYXx8cyl8fHImJiFuJiZjPChpLmRhdGVTZWxlY3RlZHx8byl8fCFyJiZuJiZjPihpLmRhdGVTZWxlY3RlZHx8cyl8fCFyJiYhbiYmYzwoYXx8bykpJiZ2KCksZVtkKCldPWMsaVtkKCldPWMsKG4mJihyJiYhYXx8IXImJiFpLmRhdGVTZWxlY3RlZCl8fCFuJiYociYmIWkuZGF0ZVNlbGVjdGVkfHwhciYmIWEpKSYmKGVbaCgpXT1jLGlbaCgpXT1jKSk6KChuJiZjPihhfHxzKXx8IW4mJmM8KGF8fG8pKSYmdigpLGVbaCgpXT1jKX1yZXR1cm4gaSYmdShpKSx1KGUpLGV9ZnVuY3Rpb24gTigpe3ZhciBlPXRoaXMuZmlyc3Q/dGhpczp0aGlzLnNpYmxpbmcsdD1lLnNpYmxpbmc7cmV0dXJue3N0YXJ0OmUuZGF0ZVNlbGVjdGVkLGVuZDp0LmRhdGVTZWxlY3RlZH19ZnVuY3Rpb24gRSgpe3ZhciBlPXRoaXMsdD10aGlzLmlubGluZVBvc2l0aW9uLG49dGhpcy5wYXJlbnQsYT10aGlzLmNhbGVuZGFyQ29udGFpbmVyLGk9dGhpcy5lbCxvPXRoaXMuc2libGluZzt0JiYoci5zb21lKChmdW5jdGlvbih0KXtyZXR1cm4gdCE9PWUmJnQucGFyZW50PT09bn0pKXx8bi5zdHlsZS5zZXRQcm9wZXJ0eShcInBvc2l0aW9uXCIsbnVsbCkpO2Zvcih2YXIgcyBpbiBhLnJlbW92ZSgpLHI9ci5maWx0ZXIoKGZ1bmN0aW9uKGUpe3JldHVybiBlLmVsIT09aX0pKSxvJiZkZWxldGUgby5zaWJsaW5nLHRoaXMpZGVsZXRlIHRoaXNbc107ci5sZW5ndGh8fGwuZm9yRWFjaCgoZnVuY3Rpb24oZSl7cmV0dXJuIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZSxMKX0pKX1lLmV4cG9ydHM9ZnVuY3Rpb24oZSx0KXtyLmxlbmd0aHx8bC5mb3JFYWNoKChmdW5jdGlvbihlKXtyZXR1cm4gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihlLEwpfSkpO3ZhciBuPWZ1bmN0aW9uKGUsdCl7dmFyIG49ZTtcInN0cmluZ1wiPT10eXBlb2YgbiYmKG49XCIjXCI9PT1uWzBdP2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKG4uc2xpY2UoMSkpOmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IobikpO3ZhciBsPWZ1bmN0aW9uKGUsdCl7aWYoci5zb21lKChmdW5jdGlvbihlKXtyZXR1cm4gZS5lbD09PXR9KSkpdGhyb3dcIkEgZGF0ZXBpY2tlciBhbHJlYWR5IGV4aXN0cyBvbiB0aGF0IGVsZW1lbnQuXCI7dmFyIG49ZChlKTtuLmV2ZW50cyYmKG4uZXZlbnRzPW4uZXZlbnRzLnJlZHVjZSgoZnVuY3Rpb24oZSx0KXtpZighZyh0KSl0aHJvdydcIm9wdGlvbnMuZXZlbnRzXCIgbXVzdCBvbmx5IGNvbnRhaW4gdmFsaWQgSmF2YVNjcmlwdCBEYXRlIG9iamVjdHMuJztyZXR1cm4gZVsrcSh0KV09ITAsZX0pLHt9KSk7W1wic3RhcnREYXRlXCIsXCJkYXRlU2VsZWN0ZWRcIixcIm1pbkRhdGVcIixcIm1heERhdGVcIl0uZm9yRWFjaCgoZnVuY3Rpb24oZSl7dmFyIHQ9bltlXTtpZih0JiYhZyh0KSl0aHJvdydcIm9wdGlvbnMuJy5jb25jYXQoZSwnXCIgbmVlZHMgdG8gYmUgYSB2YWxpZCBKYXZhU2NyaXB0IERhdGUgb2JqZWN0LicpO25bZV09cSh0KX0pKTt2YXIgbz1uLnBvc2l0aW9uLGw9bi5tYXhEYXRlLHU9bi5taW5EYXRlLGg9bi5kYXRlU2VsZWN0ZWQsZj1uLm92ZXJsYXlQbGFjZWhvbGRlcix2PW4ub3ZlcmxheUJ1dHRvbixtPW4uc3RhcnREYXkseT1uLmlkO2lmKG4uc3RhcnREYXRlPXEobi5zdGFydERhdGV8fGh8fG5ldyBEYXRlKSxuLmRpc2FibGVkRGF0ZXM9KG4uZGlzYWJsZWREYXRlc3x8W10pLm1hcCgoZnVuY3Rpb24oZSl7dmFyIHQ9K3EoZSk7aWYoIWcoZSkpdGhyb3cnWW91IHN1cHBsaWVkIGFuIGludmFsaWQgZGF0ZSB0byBcIm9wdGlvbnMuZGlzYWJsZWREYXRlc1wiLic7aWYodD09PStxKGgpKXRocm93J1wiZGlzYWJsZWREYXRlc1wiIGNhbm5vdCBjb250YWluIHRoZSBzYW1lIGRhdGUgYXMgXCJkYXRlU2VsZWN0ZWRcIi4nO3JldHVybiB0fSkpLG4uaGFzT3duUHJvcGVydHkoXCJpZFwiKSYmbnVsbD09eSl0aHJvd1wiSWQgY2Fubm90IGJlIGBudWxsYCBvciBgdW5kZWZpbmVkYFwiO2lmKHl8fDA9PT15KXt2YXIgcD1yLmZpbHRlcigoZnVuY3Rpb24oZSl7cmV0dXJuIGUuaWQ9PT15fSkpO2lmKHAubGVuZ3RoPjEpdGhyb3dcIk9ubHkgdHdvIGRhdGVwaWNrZXJzIGNhbiBzaGFyZSBhbiBpZC5cIjtwLmxlbmd0aD8obi5zZWNvbmQ9ITAsbi5zaWJsaW5nPXBbMF0pOm4uZmlyc3Q9ITB9dmFyIGI9W1widHJcIixcInRsXCIsXCJiclwiLFwiYmxcIixcImNcIl0uc29tZSgoZnVuY3Rpb24oZSl7cmV0dXJuIG89PT1lfSkpO2lmKG8mJiFiKXRocm93J1wib3B0aW9ucy5wb3NpdGlvblwiIG11c3QgYmUgb25lIG9mIHRoZSBmb2xsb3dpbmc6IHRsLCB0ciwgYmwsIGJyLCBvciBjLic7aWYobi5wb3NpdGlvbj1mdW5jdGlvbihlKXt2YXIgdD1hKGUsMiksbj10WzBdLHI9dFsxXSxpPXt9O2lbc1tuXV09MSxyJiYoaVtzW3JdXT0xKTtyZXR1cm4gaX0ob3x8XCJibFwiKSxsPHUpdGhyb3cnXCJtYXhEYXRlXCIgaW4gb3B0aW9ucyBpcyBsZXNzIHRoYW4gXCJtaW5EYXRlXCIuJztpZihoKXt2YXIgRD1mdW5jdGlvbihlKXt0aHJvdydcImRhdGVTZWxlY3RlZFwiIGluIG9wdGlvbnMgaXMgJy5jb25jYXQoZT9cImxlc3NcIjpcImdyZWF0ZXJcIiwnIHRoYW4gXCInKS5jb25jYXQoZXx8XCJtYWNcIiwnRGF0ZVwiLicpfTt1PmgmJkQoXCJtaW5cIiksbDxoJiZEKCl9aWYoW1wib25TZWxlY3RcIixcIm9uU2hvd1wiLFwib25IaWRlXCIsXCJvbk1vbnRoQ2hhbmdlXCIsXCJmb3JtYXR0ZXJcIixcImRpc2FibGVyXCJdLmZvckVhY2goKGZ1bmN0aW9uKGUpe1wiZnVuY3Rpb25cIiE9dHlwZW9mIG5bZV0mJihuW2VdPWMpfSkpLFtcImN1c3RvbURheXNcIixcImN1c3RvbU1vbnRoc1wiLFwiY3VzdG9tT3ZlcmxheU1vbnRoc1wiXS5mb3JFYWNoKChmdW5jdGlvbihlLHQpe3ZhciBhPW5bZV0scj10PzEyOjc7aWYoYSl7aWYoIUFycmF5LmlzQXJyYXkoYSl8fGEubGVuZ3RoIT09cnx8YS5zb21lKChmdW5jdGlvbihlKXtyZXR1cm5cInN0cmluZ1wiIT10eXBlb2YgZX0pKSl0aHJvdydcIicuY29uY2F0KGUsJ1wiIG11c3QgYmUgYW4gYXJyYXkgd2l0aCAnKS5jb25jYXQocixcIiBzdHJpbmdzLlwiKTtuW3Q/dDwyP1wibW9udGhzXCI6XCJvdmVybGF5TW9udGhzXCI6XCJkYXlzXCJdPWF9fSkpLG0mJm0+MCYmbTw3KXt2YXIgdz0obi5jdXN0b21EYXlzfHxpKS5zbGljZSgpLFM9dy5zcGxpY2UoMCxtKTtuLmN1c3RvbURheXM9dy5jb25jYXQoUyksbi5zdGFydERheT0rbSxuLndlZWtlbmRJbmRpY2VzPVt3Lmxlbmd0aC0xLHcubGVuZ3RoXX1lbHNlIG4uc3RhcnREYXk9MCxuLndlZWtlbmRJbmRpY2VzPVs2LDBdO1wic3RyaW5nXCIhPXR5cGVvZiBmJiZkZWxldGUgbi5vdmVybGF5UGxhY2Vob2xkZXI7XCJzdHJpbmdcIiE9dHlwZW9mIHYmJmRlbGV0ZSBuLm92ZXJsYXlCdXR0b247cmV0dXJuIG59KHR8fHtzdGFydERhdGU6cShuZXcgRGF0ZSkscG9zaXRpb246XCJibFwifSxuKSx1PWwuc3RhcnREYXRlLGg9bC5kYXRlU2VsZWN0ZWQsZj1sLnNpYmxpbmcsdj1uPT09ZG9jdW1lbnQuYm9keSxtPXY/ZG9jdW1lbnQuYm9keTpuLnBhcmVudEVsZW1lbnQseT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLGI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTt5LmNsYXNzTmFtZT1cInFzLWRhdGVwaWNrZXItY29udGFpbmVyIHFzLWhpZGRlblwiLGIuY2xhc3NOYW1lPVwicXMtZGF0ZXBpY2tlclwiO3ZhciBEPXtlbDpuLHBhcmVudDptLG5vbklucHV0OlwiSU5QVVRcIiE9PW4ubm9kZU5hbWUsbm9Qb3NpdGlvbjp2LHBvc2l0aW9uOiF2JiZsLnBvc2l0aW9uLHN0YXJ0RGF0ZTp1LGRhdGVTZWxlY3RlZDpoLGRpc2FibGVkRGF0ZXM6bC5kaXNhYmxlZERhdGVzLG1pbkRhdGU6bC5taW5EYXRlLG1heERhdGU6bC5tYXhEYXRlLG5vV2Vla2VuZHM6ISFsLm5vV2Vla2VuZHMsd2Vla2VuZEluZGljZXM6bC53ZWVrZW5kSW5kaWNlcyxjYWxlbmRhckNvbnRhaW5lcjp5LGNhbGVuZGFyOmIsY3VycmVudE1vbnRoOih1fHxoKS5nZXRNb250aCgpLGN1cnJlbnRNb250aE5hbWU6KGwubW9udGhzfHxvKVsodXx8aCkuZ2V0TW9udGgoKV0sY3VycmVudFllYXI6KHV8fGgpLmdldEZ1bGxZZWFyKCksZXZlbnRzOmwuZXZlbnRzfHx7fSxzZXREYXRlOmsscmVtb3ZlOkUsc2V0TWluOk8sc2V0TWF4OkMsc2hvdzpQLGhpZGU6aixvblNlbGVjdDpsLm9uU2VsZWN0LG9uU2hvdzpsLm9uU2hvdyxvbkhpZGU6bC5vbkhpZGUsb25Nb250aENoYW5nZTpsLm9uTW9udGhDaGFuZ2UsZm9ybWF0dGVyOmwuZm9ybWF0dGVyLGRpc2FibGVyOmwuZGlzYWJsZXIsbW9udGhzOmwubW9udGhzfHxvLGRheXM6bC5jdXN0b21EYXlzfHxpLHN0YXJ0RGF5Omwuc3RhcnREYXksb3ZlcmxheU1vbnRoczpsLm92ZXJsYXlNb250aHN8fChsLm1vbnRoc3x8bykubWFwKChmdW5jdGlvbihlKXtyZXR1cm4gZS5zbGljZSgwLDMpfSkpLG92ZXJsYXlQbGFjZWhvbGRlcjpsLm92ZXJsYXlQbGFjZWhvbGRlcnx8XCI0LWRpZ2l0IHllYXJcIixvdmVybGF5QnV0dG9uOmwub3ZlcmxheUJ1dHRvbnx8XCJTdWJtaXRcIixkaXNhYmxlWWVhck92ZXJsYXk6ISFsLmRpc2FibGVZZWFyT3ZlcmxheSxkaXNhYmxlTW9iaWxlOiEhbC5kaXNhYmxlTW9iaWxlLGlzTW9iaWxlOlwib250b3VjaHN0YXJ0XCJpbiB3aW5kb3csYWx3YXlzU2hvdzohIWwuYWx3YXlzU2hvdyxpZDpsLmlkLHNob3dBbGxEYXRlczohIWwuc2hvd0FsbERhdGVzLHJlc3BlY3REaXNhYmxlZFJlYWRPbmx5OiEhbC5yZXNwZWN0RGlzYWJsZWRSZWFkT25seSxmaXJzdDpsLmZpcnN0LHNlY29uZDpsLnNlY29uZH07aWYoZil7dmFyIHc9ZixNPUQseD13Lm1pbkRhdGV8fE0ubWluRGF0ZSxMPXcubWF4RGF0ZXx8TS5tYXhEYXRlO00uc2libGluZz13LHcuc2libGluZz1NLHcubWluRGF0ZT14LHcubWF4RGF0ZT1MLE0ubWluRGF0ZT14LE0ubWF4RGF0ZT1MLHcub3JpZ2luYWxNaW5EYXRlPXgsdy5vcmlnaW5hbE1heERhdGU9TCxNLm9yaWdpbmFsTWluRGF0ZT14LE0ub3JpZ2luYWxNYXhEYXRlPUwsdy5nZXRSYW5nZT1OLE0uZ2V0UmFuZ2U9Tn1oJiZwKG4sRCk7dmFyIFk9Z2V0Q29tcHV0ZWRTdHlsZShtKS5wb3NpdGlvbjt2fHxZJiZcInN0YXRpY1wiIT09WXx8KEQuaW5saW5lUG9zaXRpb249ITAsbS5zdHlsZS5zZXRQcm9wZXJ0eShcInBvc2l0aW9uXCIsXCJyZWxhdGl2ZVwiKSk7RC5pbmxpbmVQb3NpdGlvbiYmci5mb3JFYWNoKChmdW5jdGlvbihlKXtlLnBhcmVudD09PUQucGFyZW50JiYoZS5pbmxpbmVQb3NpdGlvbj0hMCl9KSk7cmV0dXJuIHIucHVzaChEKSx5LmFwcGVuZENoaWxkKGIpLG0uYXBwZW5kQ2hpbGQoeSksRC5hbHdheXNTaG93JiZTKEQpLER9KGUsdCksaD1uLnN0YXJ0RGF0ZSxmPW4uZGF0ZVNlbGVjdGVkLHY9bi5hbHdheXNTaG93O2lmKG4uc2Vjb25kKXt2YXIgbT1uLnNpYmxpbmc7eSh7aW5zdGFuY2U6bixkZXNlbGVjdDohZn0pLHkoe2luc3RhbmNlOm0sZGVzZWxlY3Q6IW0uZGF0ZVNlbGVjdGVkfSksdShtKX1yZXR1cm4gdShuLGh8fGYpLHYmJkQobiksbn19LGZ1bmN0aW9uKGUsdCxuKXt9XSl9KSk7IiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgSW1hc2sgZnJvbSBcImltYXNrXCI7XHJcbmltcG9ydCBkYXRlcGlja2VyIGZyb20gXCJqcy1kYXRlcGlja2VyXCI7XHJcblxyXG4vKipcclxuICogU2ltcGxlIGNsYXNzIGZvIGNyZWF0aW5nXHJcbiAqIG1hdGVyaWFsaXplIGlucHV0cyBhbmQgdGV4dGFyZWFzXHJcbiAqXHJcbiAqIEBjbGFzcyBNYXRlcmlhbElucHV0XHJcbiAqL1xyXG5jbGFzcyBNYXRlcmlhbElucHV0IHtcclxuICAgIC8qKlxyXG4gICAgICpDcmVhdGVzIGFuIGluc3RhbmNlIG9mIE1hdGVyaWFsSW5wdXQuXHJcbiAgICAgKiBAcGFyYW0geyp9IGVsZW1lbnRcclxuICAgICAqIEBwYXJhbSB7Kn0gb3B0aW9uc1xyXG4gICAgICogQG1lbWJlcm9mIE1hdGVyaWFsSW5wdXRcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoZWxlbWVudCwgb3B0aW9ucykge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcclxuICAgICAgICB0aGlzLm1hc2sgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy5kYXRlID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHRoaXMuYWRkRXZlbnRzKGVsZW1lbnQpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy52YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlKHRoaXMudmFsdWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG9wdGlvbnMucGhvbmUpIHtcclxuICAgICAgICAgICAgdGhpcy5hZGRQaG9uZU1hc2soKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChvcHRpb25zLmRhdGUpIHtcclxuICAgICAgICAgICAgdGhpcy5hZGREYXRlUGlja2VyKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAob3B0aW9ucy50ZXh0YXJlYSkge1xyXG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwidGV4dGFyZWFcIikudmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkQXV0b1Jlc2l6ZSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKS52YWx1ZTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVWYWx1ZSh0aGlzLnZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYWRkRXZlbnRzKGVsKSB7XHJcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGV2ZW50ID0+XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVmFsdWUoZXZlbnQudGFyZ2V0LnZhbHVlKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkUGhvbmVNYXNrKCkge1xyXG4gICAgICAgIGxldCBpbnB1dCA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIik7XHJcbiAgICAgICAgdGhpcy5tYXNrID0gSW1hc2soaW5wdXQsIHtcclxuICAgICAgICAgICAgbWFzazogXCIrezd9KDAwMCkwMDAtMDAtMDBcIixcclxuICAgICAgICAgICAgLy8gbGF6eTogZmFsc2UsXHJcbiAgICAgICAgICAgIC8vIHBsYWNlaG9sZGVyQ2hhcjogXCIqXCJcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBhZGREYXRlUGlja2VyKCkge1xyXG4gICAgICAgIGxldCBpbnB1dCA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIik7XHJcbiAgICAgICAgdGhpcy5kYXRlID0gZGF0ZXBpY2tlcihpbnB1dCwge1xyXG4gICAgICAgICAgICBmb3JtYXR0ZXI6IChpbnB1dCwgZGF0ZSwgaW5zdGFuY2UpID0+IHtcclxuICAgICAgICAgICAgICAgIGlucHV0LnZhbHVlID0gZGF0ZS50b0xvY2FsZVN0cmluZygncnUnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgeWVhcjogJ251bWVyaWMnLFxyXG4gICAgICAgICAgICAgICAgICAgIG1vbnRoOiAnbG9uZycsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF5OiAnbnVtZXJpYydcclxuICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY3VzdG9tRGF5czogWyfQn9CdJywgJ9CS0KInLCAn0KHQoCcsICfQp9CiJywgJ9Cf0KInLCAn0KHQkScsICfQktChJ10sXHJcbiAgICAgICAgICAgIGN1c3RvbU1vbnRoczogWyfQr9C90LLQsNGA0YwnLCAn0KTQtdCy0YDQsNC70YwnLCAn0JzQsNGA0YInLCAn0JDQv9GA0LXQu9GMJywgJ9Cc0LDQuScsICfQmNGO0L3RjCcsICfQmNGO0LvRjCcsICfQkNCy0LPRg9GB0YInLCAn0KHQtdC90YLRj9Cx0YDRjCcsICfQntC60YLRj9Cx0YDRjCcsICfQndC+0Y/QsdGA0YwnLCAn0JTQtdC60LDQsdGA0YwnXSxcclxuICAgICAgICAgICAgb3ZlcmxheUJ1dHRvbjogJ9Cf0LXRgNC10LnRgtC4JyxcclxuICBvdmVybGF5UGxhY2Vob2xkZXI6ICfQktCy0LXQtNC40YLQtSDQs9C+0LQgKDQg0YbQuNGE0YDRiyknLFxyXG4gICAgICAgICAgICBvblNlbGVjdDogKGluc3RhbmNlLCBkYXRlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlKGRhdGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkQXV0b1Jlc2l6ZSgpIHtcclxuICAgICAgICBsZXQgdGV4dGFyZWEgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcInRleHRhcmVhXCIpO1xyXG4gICAgICAgIHRleHRhcmVhLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBldmVudCA9PiB0aGlzLmF1dG9SZXNpemUodGV4dGFyZWEpKTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBldmVudCA9PiB0aGlzLmF1dG9SZXNpemUodGV4dGFyZWEpKTtcclxuICAgIH1cclxuXHJcbiAgICBhdXRvUmVzaXplKGVsZW1lbnQpIHtcclxuICAgICAgICBsZXQgb3V0ZXJIZWlnaHQgPSBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5oZWlnaHQsIDEwKTtcclxuXHJcbiAgICAgICAgbGV0IGRpZmYgPSBvdXRlckhlaWdodCAtIGVsZW1lbnQuY2xpZW50SGVpZ2h0O1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gXCJhdXRvXCI7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5oZWlnaHQgPSBlbGVtZW50LnNjcm9sbEhlaWdodCArIGRpZmYgKyBcInB4XCI7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlVmFsdWUodmFsdWUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XHJcbiAgICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLm9wdGlvbnMuYWN0aXZlQ2xhc3MpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMub3B0aW9ucy5hY3RpdmVDbGFzcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYXRlcmlhbElucHV0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9