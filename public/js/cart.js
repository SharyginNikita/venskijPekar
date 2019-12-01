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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
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

/***/ "./src/js/cart.js":
/*!************************!*\
  !*** ./src/js/cart.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./material-input */ "./src/js/material-input.js");

var materialInputName = new _material_input__WEBPACK_IMPORTED_MODULE_0__["default"](document.getElementById("material-input-name"), {
  activeClass: "material-input_active"
});
var materialInputEmail = new _material_input__WEBPACK_IMPORTED_MODULE_0__["default"](document.getElementById("material-input-email"), {
  activeClass: "material-input_active"
});
var materialInputPhone = new _material_input__WEBPACK_IMPORTED_MODULE_0__["default"](document.getElementById("material-input-phone"), {
  activeClass: "material-input_active",
  phone: true
});
var materialInputDelivery = new _material_input__WEBPACK_IMPORTED_MODULE_0__["default"](document.getElementById("material-input-delivery"), {
  activeClass: "material-input_active",
  date: true
});
var materialTextArea = new _material_input__WEBPACK_IMPORTED_MODULE_0__["default"](document.getElementById("material-textarea"), {
  activeClass: "material-textarea_active",
  textarea: true
});
var logInName = new _material_input__WEBPACK_IMPORTED_MODULE_0__["default"](document.getElementById("modal-logIn__name"), {
  activeClass: "material-input_active"
});
var logInPassword = new _material_input__WEBPACK_IMPORTED_MODULE_0__["default"](document.getElementById("modal-logIn__password"), {
  activeClass: "material-input_active"
});
var signUpName = new _material_input__WEBPACK_IMPORTED_MODULE_0__["default"](document.getElementById("modal-signUp__name"), {
  activeClass: "material-input_active"
});
var signUpEmail = new _material_input__WEBPACK_IMPORTED_MODULE_0__["default"](document.getElementById("modal-signUp__email"), {
  activeClass: "material-input_active"
});
var signUpPassword = new _material_input__WEBPACK_IMPORTED_MODULE_0__["default"](document.getElementById("modal-signUp__password"), {
  activeClass: "material-input_active"
});
var signUpPasswordRepeat = new _material_input__WEBPACK_IMPORTED_MODULE_0__["default"](document.getElementById("modal-signUp__password-repeat"), {
  activeClass: "material-input_active"
});

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

/***/ 1:
/*!******************************!*\
  !*** multi ./src/js/cart.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Nikita\projects\venskijPekar\src\js\cart.js */"./src/js/cart.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ltYXNrL2Rpc3QvaW1hc2suZXNtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9qcy1kYXRlcGlja2VyL2Rpc3QvZGF0ZXBpY2tlci5taW4uanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY2FydC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbWF0ZXJpYWwtaW5wdXQuanMiXSwibmFtZXMiOlsiX2NsYXNzQ2FsbENoZWNrIiwiaW5zdGFuY2UiLCJDb25zdHJ1Y3RvciIsIlR5cGVFcnJvciIsIm1vZHVsZSIsImV4cG9ydHMiLCJfZGVmaW5lUHJvcGVydGllcyIsInRhcmdldCIsInByb3BzIiwiaSIsImxlbmd0aCIsImRlc2NyaXB0b3IiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImtleSIsIl9jcmVhdGVDbGFzcyIsInByb3RvUHJvcHMiLCJzdGF0aWNQcm9wcyIsInByb3RvdHlwZSIsIl90eXBlb2YiLCJvYmoiLCJTeW1ib2wiLCJpdGVyYXRvciIsImNvbnN0cnVjdG9yIiwiX2RlZmluZVByb3BlcnR5IiwidmFsdWUiLCJfaW5oZXJpdHMiLCJzdWJDbGFzcyIsInN1cGVyQ2xhc3MiLCJjcmVhdGUiLCJfc2V0UHJvdG90eXBlT2YiLCJfZ2V0UHJvdG90eXBlT2YiLCJvIiwic2V0UHJvdG90eXBlT2YiLCJnZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsInAiLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSIsInNvdXJjZSIsImV4Y2x1ZGVkIiwic291cmNlS2V5cyIsImtleXMiLCJpbmRleE9mIiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwic291cmNlU3ltYm9sS2V5cyIsInByb3BlcnR5SXNFbnVtZXJhYmxlIiwiY2FsbCIsIl9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQiLCJzZWxmIiwiUmVmZXJlbmNlRXJyb3IiLCJfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiIsIl9zdXBlclByb3BCYXNlIiwib2JqZWN0IiwicHJvcGVydHkiLCJoYXNPd25Qcm9wZXJ0eSIsIl9nZXQiLCJyZWNlaXZlciIsIlJlZmxlY3QiLCJnZXQiLCJiYXNlIiwiZGVzYyIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsInNldCIsIl9zZXQiLCJpc1N0cmljdCIsInMiLCJFcnJvciIsIl9zbGljZWRUb0FycmF5IiwiYXJyIiwiX2FycmF5V2l0aEhvbGVzIiwiX2l0ZXJhYmxlVG9BcnJheUxpbWl0IiwiX25vbkl0ZXJhYmxlUmVzdCIsIkFycmF5IiwiaXNBcnJheSIsIl9hcnIiLCJfbiIsIl9kIiwiX2UiLCJ1bmRlZmluZWQiLCJfaSIsIl9zIiwibmV4dCIsImRvbmUiLCJwdXNoIiwiZXJyIiwiaXNTdHJpbmciLCJzdHIiLCJTdHJpbmciLCJESVJFQ1RJT04iLCJOT05FIiwiTEVGVCIsIkZPUkNFX0xFRlQiLCJSSUdIVCIsIkZPUkNFX1JJR0hUIiwiZm9yY2VEaXJlY3Rpb24iLCJkaXJlY3Rpb24iLCJlc2NhcGVSZWdFeHAiLCJyZXBsYWNlIiwib2JqZWN0SW5jbHVkZXMiLCJiIiwiYSIsImFyckEiLCJhcnJCIiwiZGF0ZUEiLCJEYXRlIiwiZGF0ZUIiLCJnZXRUaW1lIiwicmVnZXhwQSIsIlJlZ0V4cCIsInJlZ2V4cEIiLCJ0b1N0cmluZyIsImciLCJ3aW5kb3ciLCJnbG9iYWwiLCJBY3Rpb25EZXRhaWxzIiwiY3Vyc29yUG9zIiwib2xkVmFsdWUiLCJvbGRTZWxlY3Rpb24iLCJzbGljZSIsInN0YXJ0Q2hhbmdlUG9zIiwic3RhcnQiLCJNYXRoIiwibWluIiwic3Vic3RyIiwiaW5zZXJ0ZWRDb3VudCIsIm1heCIsImVuZCIsInJlbW92ZWRDb3VudCIsInN1YnN0cmluZyIsIkNoYW5nZURldGFpbHMiLCJkZXRhaWxzIiwiYXNzaWduIiwiaW5zZXJ0ZWQiLCJyYXdJbnNlcnRlZCIsInNraXAiLCJ0YWlsU2hpZnQiLCJhZ2dyZWdhdGUiLCJDb250aW51b3VzVGFpbERldGFpbHMiLCJhcmd1bWVudHMiLCJmcm9tIiwic3RvcCIsImV4dGVuZCIsInRhaWwiLCJhcHBlbmRUbyIsIm1hc2tlZCIsImFwcGVuZCIsIl9hcHBlbmRQbGFjZWhvbGRlciIsInNoaWZ0QmVmb3JlIiwicG9zIiwic2hpZnRDaGFyIiwic3RhdGUiLCJNYXNrZWQiLCJvcHRzIiwiX3ZhbHVlIiwiX3VwZGF0ZSIsImlzSW5pdGlhbGl6ZWQiLCJ1cGRhdGVPcHRpb25zIiwid2l0aFZhbHVlUmVmcmVzaCIsImJpbmQiLCJyZXNldCIsInJlc29sdmUiLCJpbnB1dCIsImRvQ29tbWl0IiwibmVhcmVzdElucHV0UG9zIiwiZXh0cmFjdElucHV0IiwiZnJvbVBvcyIsInRvUG9zIiwiZXh0cmFjdFRhaWwiLCJhcHBlbmRUYWlsIiwiX2FwcGVuZENoYXJSYXciLCJjaCIsImZsYWdzIiwiZG9QcmVwYXJlIiwiX2FwcGVuZENoYXIiLCJjaGVja1RhaWwiLCJjb25zaXN0ZW50U3RhdGUiLCJjb25zaXN0ZW50VGFpbCIsImFwcGVuZGVkIiwiZG9WYWxpZGF0ZSIsImJlZm9yZVRhaWxTdGF0ZSIsIm92ZXJ3cml0ZSIsInRhaWxEZXRhaWxzIiwiX2JlZm9yZVRhaWxTdGF0ZSIsImNpIiwicmVtb3ZlIiwiZm4iLCJfcmVmcmVzaGluZyIsInVubWFza2VkIiwidW5tYXNrZWRWYWx1ZSIsInJldCIsInByZXBhcmUiLCJ2YWxpZGF0ZSIsInBhcmVudCIsImNvbW1pdCIsInNwbGljZSIsImRlbGV0ZUNvdW50IiwicmVtb3ZlRGlyZWN0aW9uIiwidGFpbFBvcyIsImNoYW5nZURldGFpbHMiLCJyYXciLCJtYXNrZWRDbGFzcyIsIm1hc2siLCJJTWFzayIsIk1hc2tlZFJlZ0V4cCIsIk1hc2tlZFBhdHRlcm4iLCJNYXNrZWREYXRlIiwiTnVtYmVyIiwiTWFza2VkTnVtYmVyIiwiTWFza2VkRHluYW1pYyIsIkZ1bmN0aW9uIiwiTWFza2VkRnVuY3Rpb24iLCJjb25zb2xlIiwid2FybiIsImNyZWF0ZU1hc2siLCJNYXNrZWRDbGFzcyIsIkRFRkFVTFRfSU5QVVRfREVGSU5JVElPTlMiLCJQYXR0ZXJuSW5wdXREZWZpbml0aW9uIiwiYmxvY2tPcHRzIiwiX2lzRmlsbGVkIiwiaXNPcHRpb25hbCIsImxhenkiLCJwbGFjZWhvbGRlckNoYXIiLCJCb29sZWFuIiwiX3RoaXMkbWFza2VkIiwiYXBwbHkiLCJfdGhpcyRtYXNrZWQyIiwiX3RoaXMkbWFza2VkMyIsIm1pblBvcyIsIm1heFBvcyIsImJvdW5kUG9zIiwiaXNDb21wbGV0ZSIsIl90aGlzJG1hc2tlZDQiLCJfdGhpcyRwYXJlbnQiLCJQYXR0ZXJuRml4ZWREZWZpbml0aW9uIiwiX2lzUmF3SW5wdXQiLCJjaGFyIiwiaXNSZXNvbHZlZCIsImlzVW5tYXNraW5nIiwiQ2h1bmtzVGFpbERldGFpbHMiLCJjaHVua3MiLCJtYXAiLCJqb2luIiwidGFpbENodW5rIiwibGFzdENodW5rIiwiZXh0ZW5kTGFzdCIsImZpcnN0VGFpbENodW5rIiwic2hpZnQiLCJibG9ja0luZGV4IiwiY2h1bmsiLCJsYXN0QmxvY2tJdGVyIiwiX21hcFBvc1RvQmxvY2siLCJjaHVua0Jsb2NrIiwiaW5kZXgiLCJfc3RvcHMiLCJfYmxvY2tzIiwicmVtYWluQ2hhcnMiLCJjaHVua1NoaWZ0UG9zIiwiYyIsImNzdGF0ZSIsIl9NYXNrZWQiLCJkZWZpbml0aW9ucyIsIkRFRkFVTFRTIiwiX3JlYnVpbGRNYXNrIiwiX3RoaXMiLCJkZWZzIiwiX21hc2tlZEJsb2NrcyIsInBhdHRlcm4iLCJ1bm1hc2tpbmdCbG9jayIsIm9wdGlvbmFsQmxvY2siLCJibG9ja3MiLCJfcmV0IiwiYk5hbWVzIiwiZmlsdGVyIiwiYk5hbWUiLCJzb3J0IiwibWFza2VkQmxvY2siLCJfaXNJbnB1dCIsIlNUT1BfQ0hBUiIsIkVTQ0FQRV9DSEFSIiwiZGVmIiwiZm9yRWFjaCIsImJsb2NrSXRlciIsImJpIiwiX2Jsb2NrIiwiYmxvY2tEZXRhaWxzIiwiX3RoaXMyIiwiY2h1bmtUYWlsIiwiX2ZvckVhY2hCbG9ja3NJblJhbmdlIiwiYkZyb21Qb3MiLCJiVG9Qb3MiLCJibG9ja0NodW5rIiwiX2ZpbmRTdG9wQmVmb3JlIiwiX2Jsb2NrU3RhcnRQb3MiLCJfIiwic3RvcEJlZm9yZSIsInNpIiwidG9CbG9ja0luZGV4IiwiX3RoaXMzIiwic3RhcnRCbG9ja0l0ZXIiLCJzdGFydEJsb2NrSW5kZXgiLCJlbmRCbG9ja0luZGV4IiwiYXJncyIsImJEZXRhaWxzIiwiYWNjVmFsIiwiX2Jsb2NrMiIsImJsb2NrU3RhcnRQb3MiLCJvZmZzZXQiLCJyZWR1Y2UiLCJmcm9tQmxvY2tJdGVyIiwidG9CbG9ja0l0ZXIiLCJpc1NhbWVCbG9jayIsImZyb21CbG9ja1N0YXJ0UG9zIiwiZnJvbUJsb2NrRW5kUG9zIiwicmVtb3ZlRGV0YWlscyIsImJlZ2luQmxvY2tEYXRhIiwiYmVnaW5CbG9ja09mZnNldCIsImJlZ2luQmxvY2tJbmRleCIsImJlZ2luQmxvY2siLCJiZWdpbkJsb2NrQ3Vyc29yUG9zIiwiY3Vyc29yQXRSaWdodCIsImN1cnNvckF0TGVmdCIsInNlYXJjaEJsb2NrSW5kZXgiLCJibG9ja0luZGV4QXRMZWZ0IiwiYmxvY2tBdExlZnQiLCJibG9ja0lucHV0UG9zIiwiZmlyc3RJbnB1dEF0UmlnaHQiLCJibG9ja0F0UmlnaHQiLCJfYmxvY2tJbnB1dFBvcyIsIl9iaSIsIl9ibG9jazMiLCJfYmxvY2tJbnB1dFBvczIiLCJmaXJzdEZpbGxlZEJsb2NrSW5kZXhBdFJpZ2h0IiwiX2JpMiIsImZpbGxlZEJsb2NrIiwiX2Jsb2NrSW5wdXRQb3MzIiwiZmlyc3RGaWxsZWRJbnB1dEJsb2NrSW5kZXgiLCJmaXJzdEVtcHR5SW5wdXRCbG9ja0luZGV4IiwiX2JpMyIsIl9ibG9jazQiLCJfYmxvY2tJbnB1dFBvczQiLCJfYmk0IiwiX2Jsb2NrNSIsIl9ibG9ja0lucHV0UG9zNSIsImJsb2NrQWxpZ25lZFBvcyIsImlzSW5wdXQiLCJfYmk1IiwiX2Jsb2NrNiIsIl9ibG9ja0lucHV0UG9zNiIsImZpcnN0SW5wdXRCbG9ja0FsaWduZWRJbmRleCIsImZpcnN0SW5wdXRCbG9ja0FsaWduZWRQb3MiLCJfYmk2IiwiX2Jsb2NrNyIsIl9ibG9ja0lucHV0UG9zNyIsIl9iaTciLCJfYmxvY2s4IiwiX2Jsb2NrSW5wdXRQb3M4IiwiX2JpOCIsIl9ibG9jazkiLCJfYmxvY2tJbnB1dFBvczkiLCJhbGlnbmVkUG9zIiwibmFtZSIsIm1hc2tlZEJsb2NrcyIsIl90aGlzNCIsImluZGljZXMiLCJnaSIsIm1hc2tlZFN0YXRlIiwiZXZlcnkiLCJJbnB1dERlZmluaXRpb24iLCJGaXhlZERlZmluaXRpb24iLCJibG9jayIsIk1hc2tlZFJhbmdlIiwiX01hc2tlZFBhdHRlcm4iLCJ0byIsIm1heExlbmd0aCIsImZyb21TdHIiLCJwYWRTdGFydCIsInRvU3RyIiwic2FtZUNoYXJzQ291bnQiLCJyZXBlYXQiLCJib3VuZGFyaWVzIiwibWluc3RyIiwibWF4c3RyIiwiX3JlZiIsIm1hdGNoIiwiX3JlZjIiLCJwbGFjZWhvbGRlciIsIm51bSIsInBhZEVuZCIsImF1dG9maXgiLCJ2YWwiLCJwcmVwU3RyIiwibmV4dFZhbCIsIl90aGlzJGJvdW5kYXJpZXMiLCJfdGhpcyRib3VuZGFyaWVzMiIsIl9nZXQyIiwiZmlyc3ROb25aZXJvIiwic2VhcmNoIiwiX21hdGNoRnJvbSIsIl90aGlzJGJvdW5kYXJpZXMzIiwiX3RoaXMkYm91bmRhcmllczQiLCJfbGVuIiwiX2tleSIsImNvbmNhdCIsIkdFVF9ERUZBVUxUX0JMT0NLUyIsIlkiLCJnZXRGdWxsWWVhciIsIm0iLCJnZXRNb250aCIsImQiLCJnZXREYXRlIiwiYmsiLCJkYXRlIiwiaXNEYXRlRXhpc3QiLCJmb3JtYXQiLCJwYXJzZSIsImRheSIsIm1vbnRoIiwieWVhciIsIl9zdHIkc3BsaXQiLCJzcGxpdCIsIl9zdHIkc3BsaXQyIiwiTWFza0VsZW1lbnQiLCJzZWxlY3QiLCJzZWxlY3Rpb25TdGFydCIsInNlbGVjdGlvbkVuZCIsIl91bnNhZmVTZWxlY3QiLCJlIiwiYmluZEV2ZW50cyIsImhhbmRsZXJzIiwidW5iaW5kRXZlbnRzIiwiX3Vuc2FmZVNlbGVjdGlvblN0YXJ0IiwiX3Vuc2FmZVNlbGVjdGlvbkVuZCIsIkhUTUxNYXNrRWxlbWVudCIsIl9NYXNrRWxlbWVudCIsIl9oYW5kbGVycyIsInNldFNlbGVjdGlvblJhbmdlIiwiZXZlbnQiLCJfdG9nZ2xlRXZlbnRIYW5kbGVyIiwiRVZFTlRTX01BUCIsImhhbmRsZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsImRvY3VtZW50IiwiYWN0aXZlRWxlbWVudCIsInNlbGVjdGlvbkNoYW5nZSIsImRyb3AiLCJjbGljayIsImZvY3VzIiwiSW5wdXRNYXNrIiwiZWwiLCJfbGlzdGVuZXJzIiwiX3VubWFza2VkVmFsdWUiLCJfc2F2ZVNlbGVjdGlvbiIsIl9vbklucHV0IiwiX29uQ2hhbmdlIiwiX29uRHJvcCIsIl9vbkZvY3VzIiwiYWxpZ25DdXJzb3IiLCJhbGlnbkN1cnNvckZyaWVuZGx5IiwiX2JpbmRFdmVudHMiLCJ1cGRhdGVWYWx1ZSIsIm1hc2tFcXVhbHMiLCJfdW5iaW5kRXZlbnRzIiwiX2ZpcmVFdmVudCIsImV2IiwibGlzdGVuZXJzIiwibCIsIl9zZWxlY3Rpb24iLCJ1cGRhdGVDb250cm9sIiwibmV3VW5tYXNrZWRWYWx1ZSIsIm5ld1ZhbHVlIiwiaXNDaGFuZ2VkIiwiX2ZpcmVDaGFuZ2VFdmVudHMiLCJyZXN0T3B0cyIsInVwZGF0ZU1hc2siLCJ1cGRhdGVPcHRzIiwidXBkYXRlQ3Vyc29yIiwiX2RlbGF5VXBkYXRlQ3Vyc29yIiwiX2Fib3J0VXBkYXRlQ3Vyc29yIiwiX2NoYW5naW5nQ3Vyc29yUG9zIiwiX2N1cnNvckNoYW5naW5nIiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsIm9uIiwib2ZmIiwiaEluZGV4Iiwib2xkUmF3VmFsdWUiLCJyYXdJbnB1dFZhbHVlIiwicmVtb3ZlZCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiZGVzdHJveSIsInR5cGVkVmFsdWUiLCJpc0FjdGl2ZSIsIk1hc2tlZEVudW0iLCJlbnVtIiwic29tZSIsIl91cGRhdGVSZWdFeHBzIiwiYWxsb3dOZWdhdGl2ZSIsIm1pZElucHV0IiwibWlkIiwic2NhbGUiLCJyYWRpeCIsIl9udW1iZXJSZWdFeHBJbnB1dCIsIl9udW1iZXJSZWdFeHAiLCJfbWFwVG9SYWRpeFJlZ0V4cCIsIm1hcFRvUmFkaXgiLCJfdGhvdXNhbmRzU2VwYXJhdG9yUmVnRXhwIiwidGhvdXNhbmRzU2VwYXJhdG9yIiwiX3JlbW92ZVRob3VzYW5kc1NlcGFyYXRvcnMiLCJfaW5zZXJ0VGhvdXNhbmRzU2VwYXJhdG9ycyIsInBhcnRzIiwiX3NlcGFyYXRvcnNDb3VudCIsImV4dGVuZE9uU2VwYXJhdG9ycyIsImNvdW50IiwiX3NlcGFyYXRvcnNDb3VudEZyb21TbGljZSIsIl90aGlzJF9hZGp1c3RSYW5nZVdpdCIsIl9hZGp1c3RSYW5nZVdpdGhTZXBhcmF0b3JzIiwiX3RoaXMkX2FkanVzdFJhbmdlV2l0MiIsInByZXZCZWZvcmVUYWlsVmFsdWUiLCJwcmV2QmVmb3JlVGFpbFNlcGFyYXRvcnNDb3VudCIsImFwcGVuZERldGFpbHMiLCJiZWZvcmVUYWlsVmFsdWUiLCJiZWZvcmVUYWlsU2VwYXJhdG9yc0NvdW50IiwiX2ZpbmRTZXBhcmF0b3JBcm91bmQiLCJzZWFyY2hGcm9tIiwic2VwYXJhdG9yUG9zIiwic2VwYXJhdG9yQXJvdW5kRnJvbVBvcyIsInNlcGFyYXRvckFyb3VuZFRvUG9zIiwiX3RoaXMkX2FkanVzdFJhbmdlV2l0MyIsIl90aGlzJF9hZGp1c3RSYW5nZVdpdDQiLCJ2YWx1ZUJlZm9yZVBvcyIsInZhbHVlQWZ0ZXJQb3MiLCJzZXBhcmF0b3JBdExlZnRQb3MiLCJzZXBhcmF0b3JBdExlZnRFbmRQb3MiLCJzZXBhcmF0b3JBdFJpZ2h0UG9zIiwicmVnZXhwIiwidmFsaWQiLCJ0ZXN0IiwibnVtYmVyIiwiaXNOYU4iLCJ2YWxpZG51bSIsImZvcm1hdHRlZCIsIm5vcm1hbGl6ZVplcm9zIiwiX25vcm1hbGl6ZVplcm9zIiwicGFkRnJhY3Rpb25hbFplcm9zIiwiX3BhZEZyYWN0aW9uYWxaZXJvcyIsInNpZ24iLCJ6ZXJvcyIsInNpZ25lZCIsImN1cnJlbnRNYXNrIiwiY29tcGlsZWRNYXNrcyIsIl9hcHBseURpc3BhdGNoIiwiX3RoaXMkY3VycmVudE1hc2siLCJwcmV2VmFsdWVCZWZvcmVUYWlsIiwiaW5wdXRWYWx1ZSIsImluc2VydFZhbHVlIiwiX3Jhd0lucHV0VmFsdWUiLCJ0YWlsVmFsdWUiLCJwcmV2TWFzayIsInByZXZNYXNrU3RhdGUiLCJkb0Rpc3BhdGNoIiwiZGlzcGF0Y2giLCJfdGhpcyRjdXJyZW50TWFzazIiLCJfdGhpcyRjdXJyZW50TWFzazMiLCJfdGhpcyRjdXJyZW50TWFzazQiLCJfdGhpcyRjdXJyZW50TWFzazUiLCJfZ2V0MyIsIl9sZW4yIiwiX2tleTIiLCJfdGhpcyRjdXJyZW50TWFzazYiLCJfZ2V0NCIsIl9sZW4zIiwiX2tleTMiLCJjdXJyZW50TWFza1JlZiIsIm1pIiwiaW5wdXRzIiwid2VpZ2h0IiwiaTEiLCJpMiIsInQiLCJuIiwiciIsInRvU3RyaW5nVGFnIiwiX19lc01vZHVsZSIsImRlZmF1bHQiLCJyZXR1cm4iLCJ1IiwiY2FsZW5kYXIiLCJxdWVyeVNlbGVjdG9yIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJjdXJyZW50WWVhciIsImN1cnJlbnRNb250aCIsImlubmVySFRNTCIsImgiLCJmIiwidiIsIk0iLCJtb250aHMiLCJkYXRlU2VsZWN0ZWQiLCJtYXhEYXRlIiwibWluRGF0ZSIsInNob3dBbGxEYXRlcyIsImRheXMiLCJkaXNhYmxlZERhdGVzIiwiZGlzYWJsZXIiLCJub1dlZWtlbmRzIiwic3RhcnREYXkiLCJ3ZWVrZW5kSW5kaWNlcyIsImV2ZW50cyIsInkiLCJnZXRSYW5nZSIsIkQiLCJ3IiwicSIsInNldERhdGUiLCJTIiwiZ2V0RGF5Iiwic2V0TW9udGgiLCJ4IiwiTCIsIlAiLCJqIiwiayIsIk8iLCJDIiwiTiIsIkUiLCJBIiwiSSIsIlQiLCJGIiwiaW5jbHVkZXMiLCJSIiwidW5zaGlmdCIsIm92ZXJsYXlQbGFjZWhvbGRlciIsIm92ZXJsYXlCdXR0b24iLCJvdmVybGF5TW9udGhzIiwib25TZWxlY3QiLCJyZXNwZWN0RGlzYWJsZWRSZWFkT25seSIsInNpYmxpbmciLCJ0ZXh0Q29udGVudCIsImRpc2FibGVkIiwicmVhZE9ubHkiLCJhZGQiLCJkZXNlbGVjdCIsImZpcnN0Iiwib3JpZ2luYWxNaW5EYXRlIiwib3JpZ2luYWxNYXhEYXRlIiwibm9uSW5wdXQiLCJmb3JtYXR0ZXIiLCJ0b0RhdGVTdHJpbmciLCJjdXJyZW50TW9udGhOYW1lIiwib25Nb250aENoYW5nZSIsIm5vUG9zaXRpb24iLCJjYWxlbmRhckNvbnRhaW5lciIsInBvc2l0aW9uIiwidG9wIiwicmlnaHQiLCJjZW50ZXJlZCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInNjcm9sbFRvcCIsImhlaWdodCIsImxlZnQiLCJ3aWR0aCIsInN0eWxlIiwic2V0UHJvcGVydHkiLCJhbHdheXNTaG93Iiwib25IaWRlIiwib25TaG93Iiwic2V0RnVsbFllYXIiLCJ3aGljaCIsImtleUNvZGUiLCJ0eXBlIiwiaXNNb2JpbGUiLCJkaXNhYmxlTW9iaWxlIiwiZGlzYWJsZVllYXJPdmVybGF5IiwiZGF0YXNldCIsIm1vbnRoTnVtIiwibm9kZU5hbWUiLCJwYXJlbnROb2RlIiwidG9Mb3dlckNhc2UiLCJpbmxpbmVQb3NpdGlvbiIsImdldEVsZW1lbnRCeUlkIiwiaWQiLCJzdGFydERhdGUiLCJzZWNvbmQiLCJjdXN0b21EYXlzIiwiYm9keSIsInBhcmVudEVsZW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwic2V0TWluIiwic2V0TWF4Iiwic2hvdyIsImhpZGUiLCJnZXRDb21wdXRlZFN0eWxlIiwiYXBwZW5kQ2hpbGQiLCJtYXRlcmlhbElucHV0TmFtZSIsIk1hdGVyaWFsSW5wdXQiLCJhY3RpdmVDbGFzcyIsIm1hdGVyaWFsSW5wdXRFbWFpbCIsIm1hdGVyaWFsSW5wdXRQaG9uZSIsInBob25lIiwibWF0ZXJpYWxJbnB1dERlbGl2ZXJ5IiwibWF0ZXJpYWxUZXh0QXJlYSIsInRleHRhcmVhIiwibG9nSW5OYW1lIiwibG9nSW5QYXNzd29yZCIsInNpZ25VcE5hbWUiLCJzaWduVXBFbWFpbCIsInNpZ25VcFBhc3N3b3JkIiwic2lnblVwUGFzc3dvcmRSZXBlYXQiLCJlbGVtZW50Iiwib3B0aW9ucyIsImFkZEV2ZW50cyIsImFkZFBob25lTWFzayIsImFkZERhdGVQaWNrZXIiLCJhZGRBdXRvUmVzaXplIiwiSW1hc2siLCJkYXRlcGlja2VyIiwidG9Mb2NhbGVTdHJpbmciLCJjdXN0b21Nb250aHMiLCJhdXRvUmVzaXplIiwib3V0ZXJIZWlnaHQiLCJwYXJzZUludCIsImRpZmYiLCJjbGllbnRIZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJsb2ciXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FB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QUFMLEtBQUs7QUFBQSxlQUFJLE1BQUksQ0FBQ2dTLFVBQUwsQ0FBZ0JqQixRQUFoQixDQUFKO0FBQUEsT0FBeEM7QUFDQW5sQixZQUFNLENBQUN5VSxnQkFBUCxDQUF3QixRQUF4QixFQUFrQyxVQUFBTCxLQUFLO0FBQUEsZUFBSSxNQUFJLENBQUNnUyxVQUFMLENBQWdCakIsUUFBaEIsQ0FBSjtBQUFBLE9BQXZDO0FBQ0g7OzsrQkFFVU8sTyxFQUFTO0FBQ2hCLFVBQUlXLFdBQVcsR0FBR0MsUUFBUSxDQUFDdG1CLE1BQU0sQ0FBQ3lrQixnQkFBUCxDQUF3QmlCLE9BQXhCLEVBQWlDbkQsTUFBbEMsRUFBMEMsRUFBMUMsQ0FBMUI7QUFFQSxVQUFJZ0UsSUFBSSxHQUFHRixXQUFXLEdBQUdYLE9BQU8sQ0FBQ2MsWUFBakM7QUFDQWQsYUFBTyxDQUFDaEQsS0FBUixDQUFjSCxNQUFkLEdBQXVCLE1BQXZCO0FBQ0FtRCxhQUFPLENBQUNoRCxLQUFSLENBQWNILE1BQWQsR0FBdUJtRCxPQUFPLENBQUNlLFlBQVIsR0FBdUJGLElBQXZCLEdBQThCLElBQXJEO0FBQ0g7OztnQ0FFVy9yQixLLEVBQU87QUFDZjJMLGFBQU8sQ0FBQ3VnQixHQUFSLENBQVlsc0IsS0FBWjs7QUFDQSxVQUFJQSxLQUFKLEVBQVc7QUFFUCxhQUFLa3JCLE9BQUwsQ0FBYTVILFNBQWIsQ0FBdUJ1RCxHQUF2QixDQUEyQixLQUFLc0UsT0FBTCxDQUFhZCxXQUF4QztBQUNILE9BSEQsTUFHTztBQUNILGFBQUthLE9BQUwsQ0FBYTVILFNBQWIsQ0FBdUJ0WixNQUF2QixDQUE4QixLQUFLbWhCLE9BQUwsQ0FBYWQsV0FBM0M7QUFDSDtBQUNKOzs7Ozs7QUFHVUQsNEVBQWYsRSIsImZpbGUiOiJjYXJ0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEpO1xuIiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NDYWxsQ2hlY2s7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jcmVhdGVDbGFzczsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBfdHlwZW9mID0gZnVuY3Rpb24gKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBfdHlwZW9mID0gZnVuY3Rpb24gKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO1xuICB9XG5cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7XG59XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gIF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gICAgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTtcbiAgfTtcbiAgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTtcbn1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgby5fX3Byb3RvX18gPSBwO1xuICAgIHJldHVybiBvO1xuICB9O1xuXG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG59XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSB7fTtcbiAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICB2YXIga2V5LCBpO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAga2V5ID0gc291cmNlS2V5c1tpXTtcbiAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcblxuICB2YXIgdGFyZ2V0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCk7XG5cbiAgdmFyIGtleSwgaTtcblxuICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgIHZhciBzb3VyY2VTeW1ib2xLZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IHNvdXJjZVN5bWJvbEtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGtleSA9IHNvdXJjZVN5bWJvbEtleXNbaV07XG4gICAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoc291cmNlLCBrZXkpKSBjb250aW51ZTtcbiAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7XG4gIGlmIChzZWxmID09PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gc2VsZjtcbn1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkge1xuICBpZiAoY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHtcbiAgICByZXR1cm4gY2FsbDtcbiAgfVxuXG4gIHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpO1xufVxuXG5mdW5jdGlvbiBfc3VwZXJQcm9wQmFzZShvYmplY3QsIHByb3BlcnR5KSB7XG4gIHdoaWxlICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpKSB7XG4gICAgb2JqZWN0ID0gX2dldFByb3RvdHlwZU9mKG9iamVjdCk7XG4gICAgaWYgKG9iamVjdCA9PT0gbnVsbCkgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gb2JqZWN0O1xufVxuXG5mdW5jdGlvbiBfZ2V0KHRhcmdldCwgcHJvcGVydHksIHJlY2VpdmVyKSB7XG4gIGlmICh0eXBlb2YgUmVmbGVjdCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBSZWZsZWN0LmdldCkge1xuICAgIF9nZXQgPSBSZWZsZWN0LmdldDtcbiAgfSBlbHNlIHtcbiAgICBfZ2V0ID0gZnVuY3Rpb24gX2dldCh0YXJnZXQsIHByb3BlcnR5LCByZWNlaXZlcikge1xuICAgICAgdmFyIGJhc2UgPSBfc3VwZXJQcm9wQmFzZSh0YXJnZXQsIHByb3BlcnR5KTtcblxuICAgICAgaWYgKCFiYXNlKSByZXR1cm47XG4gICAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoYmFzZSwgcHJvcGVydHkpO1xuXG4gICAgICBpZiAoZGVzYy5nZXQpIHtcbiAgICAgICAgcmV0dXJuIGRlc2MuZ2V0LmNhbGwocmVjZWl2ZXIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGVzYy52YWx1ZTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF9nZXQodGFyZ2V0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIgfHwgdGFyZ2V0KTtcbn1cblxuZnVuY3Rpb24gc2V0KHRhcmdldCwgcHJvcGVydHksIHZhbHVlLCByZWNlaXZlcikge1xuICBpZiAodHlwZW9mIFJlZmxlY3QgIT09IFwidW5kZWZpbmVkXCIgJiYgUmVmbGVjdC5zZXQpIHtcbiAgICBzZXQgPSBSZWZsZWN0LnNldDtcbiAgfSBlbHNlIHtcbiAgICBzZXQgPSBmdW5jdGlvbiBzZXQodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUsIHJlY2VpdmVyKSB7XG4gICAgICB2YXIgYmFzZSA9IF9zdXBlclByb3BCYXNlKHRhcmdldCwgcHJvcGVydHkpO1xuXG4gICAgICB2YXIgZGVzYztcblxuICAgICAgaWYgKGJhc2UpIHtcbiAgICAgICAgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoYmFzZSwgcHJvcGVydHkpO1xuXG4gICAgICAgIGlmIChkZXNjLnNldCkge1xuICAgICAgICAgIGRlc2Muc2V0LmNhbGwocmVjZWl2ZXIsIHZhbHVlKTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmICghZGVzYy53cml0YWJsZSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihyZWNlaXZlciwgcHJvcGVydHkpO1xuXG4gICAgICBpZiAoZGVzYykge1xuICAgICAgICBpZiAoIWRlc2Mud3JpdGFibGUpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBkZXNjLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZWNlaXZlciwgcHJvcGVydHksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgX2RlZmluZVByb3BlcnR5KHJlY2VpdmVyLCBwcm9wZXJ0eSwgdmFsdWUpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHNldCh0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSwgcmVjZWl2ZXIpO1xufVxuXG5mdW5jdGlvbiBfc2V0KHRhcmdldCwgcHJvcGVydHksIHZhbHVlLCByZWNlaXZlciwgaXNTdHJpY3QpIHtcbiAgdmFyIHMgPSBzZXQodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUsIHJlY2VpdmVyIHx8IHRhcmdldCk7XG5cbiAgaWYgKCFzICYmIGlzU3RyaWN0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdmYWlsZWQgdG8gc2V0IHByb3BlcnR5Jyk7XG4gIH1cblxuICByZXR1cm4gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkge1xuICByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpO1xufVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7XG59XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHtcbiAgdmFyIF9hcnIgPSBbXTtcbiAgdmFyIF9uID0gdHJ1ZTtcbiAgdmFyIF9kID0gZmFsc2U7XG4gIHZhciBfZSA9IHVuZGVmaW5lZDtcblxuICB0cnkge1xuICAgIGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHtcbiAgICAgIF9hcnIucHVzaChfcy52YWx1ZSk7XG5cbiAgICAgIGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhaztcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIF9kID0gdHJ1ZTtcbiAgICBfZSA9IGVycjtcbiAgfSBmaW5hbGx5IHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoX2QpIHRocm93IF9lO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBfYXJyO1xufVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZVwiKTtcbn1cblxuLyoqIENoZWNrcyBpZiB2YWx1ZSBpcyBzdHJpbmcgKi9cbmZ1bmN0aW9uIGlzU3RyaW5nKHN0cikge1xuICByZXR1cm4gdHlwZW9mIHN0ciA9PT0gJ3N0cmluZycgfHwgc3RyIGluc3RhbmNlb2YgU3RyaW5nO1xufVxuLyoqXHJcbiAgRGlyZWN0aW9uXHJcbiAgQHByb3Age3N0cmluZ30gTk9ORVxyXG4gIEBwcm9wIHtzdHJpbmd9IExFRlRcclxuICBAcHJvcCB7c3RyaW5nfSBGT1JDRV9MRUZUXHJcbiAgQHByb3Age3N0cmluZ30gUklHSFRcclxuICBAcHJvcCB7c3RyaW5nfSBGT1JDRV9SSUdIVFxyXG4qL1xuXG52YXIgRElSRUNUSU9OID0ge1xuICBOT05FOiAnTk9ORScsXG4gIExFRlQ6ICdMRUZUJyxcbiAgRk9SQ0VfTEVGVDogJ0ZPUkNFX0xFRlQnLFxuICBSSUdIVDogJ1JJR0hUJyxcbiAgRk9SQ0VfUklHSFQ6ICdGT1JDRV9SSUdIVCdcbiAgLyoqXHJcbiAgICBEaXJlY3Rpb25cclxuICAgIEBlbnVtIHtzdHJpbmd9XHJcbiAgKi9cblxufTtcbi8qKiAqL1xuXG5mdW5jdGlvbiBmb3JjZURpcmVjdGlvbihkaXJlY3Rpb24pIHtcbiAgc3dpdGNoIChkaXJlY3Rpb24pIHtcbiAgICBjYXNlIERJUkVDVElPTi5MRUZUOlxuICAgICAgcmV0dXJuIERJUkVDVElPTi5GT1JDRV9MRUZUO1xuXG4gICAgY2FzZSBESVJFQ1RJT04uUklHSFQ6XG4gICAgICByZXR1cm4gRElSRUNUSU9OLkZPUkNFX1JJR0hUO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBkaXJlY3Rpb247XG4gIH1cbn1cbi8qKiBFc2NhcGVzIHJlZ3VsYXIgZXhwcmVzc2lvbiBjb250cm9sIGNoYXJzICovXG5cbmZ1bmN0aW9uIGVzY2FwZVJlZ0V4cChzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oWy4qKz9ePSE6JHt9KCl8W1xcXS9cXFxcXSkvZywgJ1xcXFwkMScpO1xufSAvLyBjbG9uZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vZXBvYmVyZXpraW4vZmFzdC1kZWVwLWVxdWFsIHdpdGggc21hbGwgY2hhbmdlc1xuXG5mdW5jdGlvbiBvYmplY3RJbmNsdWRlcyhiLCBhKSB7XG4gIGlmIChhID09PSBiKSByZXR1cm4gdHJ1ZTtcbiAgdmFyIGFyckEgPSBBcnJheS5pc0FycmF5KGEpLFxuICAgICAgYXJyQiA9IEFycmF5LmlzQXJyYXkoYiksXG4gICAgICBpO1xuXG4gIGlmIChhcnJBICYmIGFyckIpIHtcbiAgICBpZiAoYS5sZW5ndGggIT0gYi5sZW5ndGgpIHJldHVybiBmYWxzZTtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBhLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoIW9iamVjdEluY2x1ZGVzKGFbaV0sIGJbaV0pKSByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAoYXJyQSAhPSBhcnJCKSByZXR1cm4gZmFsc2U7XG5cbiAgaWYgKGEgJiYgYiAmJiBfdHlwZW9mKGEpID09PSAnb2JqZWN0JyAmJiBfdHlwZW9mKGIpID09PSAnb2JqZWN0Jykge1xuICAgIHZhciBkYXRlQSA9IGEgaW5zdGFuY2VvZiBEYXRlLFxuICAgICAgICBkYXRlQiA9IGIgaW5zdGFuY2VvZiBEYXRlO1xuICAgIGlmIChkYXRlQSAmJiBkYXRlQikgcmV0dXJuIGEuZ2V0VGltZSgpID09IGIuZ2V0VGltZSgpO1xuICAgIGlmIChkYXRlQSAhPSBkYXRlQikgcmV0dXJuIGZhbHNlO1xuICAgIHZhciByZWdleHBBID0gYSBpbnN0YW5jZW9mIFJlZ0V4cCxcbiAgICAgICAgcmVnZXhwQiA9IGIgaW5zdGFuY2VvZiBSZWdFeHA7XG4gICAgaWYgKHJlZ2V4cEEgJiYgcmVnZXhwQikgcmV0dXJuIGEudG9TdHJpbmcoKSA9PSBiLnRvU3RyaW5nKCk7XG4gICAgaWYgKHJlZ2V4cEEgIT0gcmVnZXhwQikgcmV0dXJuIGZhbHNlO1xuICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoYSk7IC8vIGlmIChrZXlzLmxlbmd0aCAhPT0gT2JqZWN0LmtleXMoYikubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwga2V5c1tpXSkpIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKCFvYmplY3RJbmNsdWRlcyhiW2tleXNbaV1dLCBhW2tleXNbaV1dKSkgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2UgaWYgKGEgJiYgYiAmJiB0eXBlb2YgYSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgYiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBhLnRvU3RyaW5nKCkgPT09IGIudG9TdHJpbmcoKTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmICovXG5cbnZhciBnID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93IHx8IHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnICYmIGdsb2JhbC5nbG9iYWwgPT09IGdsb2JhbCAmJiBnbG9iYWwgfHwgdHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYuc2VsZiA9PT0gc2VsZiAmJiBzZWxmIHx8IHt9O1xuLyogZXNsaW50LWVuYWJsZSBuby11bmRlZiAqL1xuXG4vKiogU2VsZWN0aW9uIHJhbmdlICovXG5cbi8qKiBQcm92aWRlcyBkZXRhaWxzIG9mIGNoYW5naW5nIGlucHV0ICovXG5cbnZhciBBY3Rpb25EZXRhaWxzID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgLyoqIEN1cnJlbnQgaW5wdXQgdmFsdWUgKi9cblxuICAvKiogQ3VycmVudCBjdXJzb3IgcG9zaXRpb24gKi9cblxuICAvKiogT2xkIGlucHV0IHZhbHVlICovXG5cbiAgLyoqIE9sZCBzZWxlY3Rpb24gKi9cbiAgZnVuY3Rpb24gQWN0aW9uRGV0YWlscyh2YWx1ZSwgY3Vyc29yUG9zLCBvbGRWYWx1ZSwgb2xkU2VsZWN0aW9uKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEFjdGlvbkRldGFpbHMpO1xuXG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMuY3Vyc29yUG9zID0gY3Vyc29yUG9zO1xuICAgIHRoaXMub2xkVmFsdWUgPSBvbGRWYWx1ZTtcbiAgICB0aGlzLm9sZFNlbGVjdGlvbiA9IG9sZFNlbGVjdGlvbjsgLy8gZG91YmxlIGNoZWNrIGlmIGxlZnQgcGFydCB3YXMgY2hhbmdlZCAoYXV0b2ZpbGxpbmcsIG90aGVyIG5vbi1zdGFuZGFyZCBpbnB1dCB0cmlnZ2VycylcblxuICAgIHdoaWxlICh0aGlzLnZhbHVlLnNsaWNlKDAsIHRoaXMuc3RhcnRDaGFuZ2VQb3MpICE9PSB0aGlzLm9sZFZhbHVlLnNsaWNlKDAsIHRoaXMuc3RhcnRDaGFuZ2VQb3MpKSB7XG4gICAgICAtLXRoaXMub2xkU2VsZWN0aW9uLnN0YXJ0O1xuICAgIH1cbiAgfVxuICAvKipcclxuICAgIFN0YXJ0IGNoYW5naW5nIHBvc2l0aW9uXHJcbiAgICBAcmVhZG9ubHlcclxuICAqL1xuXG5cbiAgX2NyZWF0ZUNsYXNzKEFjdGlvbkRldGFpbHMsIFt7XG4gICAga2V5OiBcInN0YXJ0Q2hhbmdlUG9zXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gTWF0aC5taW4odGhpcy5jdXJzb3JQb3MsIHRoaXMub2xkU2VsZWN0aW9uLnN0YXJ0KTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgIEluc2VydGVkIHN5bWJvbHMgY291bnRcclxuICAgICAgQHJlYWRvbmx5XHJcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiaW5zZXJ0ZWRDb3VudFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuY3Vyc29yUG9zIC0gdGhpcy5zdGFydENoYW5nZVBvcztcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgIEluc2VydGVkIHN5bWJvbHNcclxuICAgICAgQHJlYWRvbmx5XHJcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiaW5zZXJ0ZWRcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLnZhbHVlLnN1YnN0cih0aGlzLnN0YXJ0Q2hhbmdlUG9zLCB0aGlzLmluc2VydGVkQ291bnQpO1xuICAgIH1cbiAgICAvKipcclxuICAgICAgUmVtb3ZlZCBzeW1ib2xzIGNvdW50XHJcbiAgICAgIEByZWFkb25seVxyXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInJlbW92ZWRDb3VudFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgLy8gTWF0aC5tYXggZm9yIG9wcG9zaXRlIG9wZXJhdGlvblxuICAgICAgcmV0dXJuIE1hdGgubWF4KHRoaXMub2xkU2VsZWN0aW9uLmVuZCAtIHRoaXMuc3RhcnRDaGFuZ2VQb3MgfHwgLy8gZm9yIERlbGV0ZVxuICAgICAgdGhpcy5vbGRWYWx1ZS5sZW5ndGggLSB0aGlzLnZhbHVlLmxlbmd0aCwgMCk7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICBSZW1vdmVkIHN5bWJvbHNcclxuICAgICAgQHJlYWRvbmx5XHJcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwicmVtb3ZlZFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMub2xkVmFsdWUuc3Vic3RyKHRoaXMuc3RhcnRDaGFuZ2VQb3MsIHRoaXMucmVtb3ZlZENvdW50KTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgIFVuY2hhbmdlZCBoZWFkIHN5bWJvbHNcclxuICAgICAgQHJlYWRvbmx5XHJcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiaGVhZFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMudmFsdWUuc3Vic3RyaW5nKDAsIHRoaXMuc3RhcnRDaGFuZ2VQb3MpO1xuICAgIH1cbiAgICAvKipcclxuICAgICAgVW5jaGFuZ2VkIHRhaWwgc3ltYm9sc1xyXG4gICAgICBAcmVhZG9ubHlcclxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJ0YWlsXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy52YWx1ZS5zdWJzdHJpbmcodGhpcy5zdGFydENoYW5nZVBvcyArIHRoaXMuaW5zZXJ0ZWRDb3VudCk7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICBSZW1vdmUgZGlyZWN0aW9uXHJcbiAgICAgIEByZWFkb25seVxyXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInJlbW92ZURpcmVjdGlvblwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgaWYgKCF0aGlzLnJlbW92ZWRDb3VudCB8fCB0aGlzLmluc2VydGVkQ291bnQpIHJldHVybiBESVJFQ1RJT04uTk9ORTsgLy8gYWxpZ24gcmlnaHQgaWYgZGVsZXRlIGF0IHJpZ2h0IG9yIGlmIHJhbmdlIHJlbW92ZWQgKGV2ZW50IHdpdGggYmFja3NwYWNlKVxuXG4gICAgICByZXR1cm4gdGhpcy5vbGRTZWxlY3Rpb24uZW5kID09PSB0aGlzLmN1cnNvclBvcyB8fCB0aGlzLm9sZFNlbGVjdGlvbi5zdGFydCA9PT0gdGhpcy5jdXJzb3JQb3MgPyBESVJFQ1RJT04uUklHSFQgOiBESVJFQ1RJT04uTEVGVDtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gQWN0aW9uRGV0YWlscztcbn0oKTtcblxuLyoqXHJcbiAgUHJvdmlkZXMgZGV0YWlscyBvZiBjaGFuZ2luZyBtb2RlbCB2YWx1ZVxyXG4gIEBwYXJhbSB7T2JqZWN0fSBbZGV0YWlsc11cclxuICBAcGFyYW0ge3N0cmluZ30gW2RldGFpbHMuaW5zZXJ0ZWRdIC0gSW5zZXJ0ZWQgc3ltYm9sc1xyXG4gIEBwYXJhbSB7Ym9vbGVhbn0gW2RldGFpbHMuc2tpcF0gLSBDYW4gc2tpcCBjaGFyc1xyXG4gIEBwYXJhbSB7bnVtYmVyfSBbZGV0YWlscy5yZW1vdmVDb3VudF0gLSBSZW1vdmVkIHN5bWJvbHMgY291bnRcclxuICBAcGFyYW0ge251bWJlcn0gW2RldGFpbHMudGFpbFNoaWZ0XSAtIEFkZGl0aW9uYWwgb2Zmc2V0IGlmIGFueSBjaGFuZ2VzIG9jY3VycmVkIGJlZm9yZSB0YWlsXHJcbiovXG52YXIgQ2hhbmdlRGV0YWlscyA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIC8qKiBJbnNlcnRlZCBzeW1ib2xzICovXG5cbiAgLyoqIENhbiBza2lwIGNoYXJzICovXG5cbiAgLyoqIEFkZGl0aW9uYWwgb2Zmc2V0IGlmIGFueSBjaGFuZ2VzIG9jY3VycmVkIGJlZm9yZSB0YWlsICovXG5cbiAgLyoqIFJhdyBpbnNlcnRlZCBpcyB1c2VkIGJ5IGR5bmFtaWMgbWFzayAqL1xuICBmdW5jdGlvbiBDaGFuZ2VEZXRhaWxzKGRldGFpbHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ2hhbmdlRGV0YWlscyk7XG5cbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIHtcbiAgICAgIGluc2VydGVkOiAnJyxcbiAgICAgIHJhd0luc2VydGVkOiAnJyxcbiAgICAgIHNraXA6IGZhbHNlLFxuICAgICAgdGFpbFNoaWZ0OiAwXG4gICAgfSwgZGV0YWlscyk7XG4gIH1cbiAgLyoqXHJcbiAgICBBZ2dyZWdhdGUgY2hhbmdlc1xyXG4gICAgQHJldHVybnMge0NoYW5nZURldGFpbHN9IGB0aGlzYFxyXG4gICovXG5cblxuICBfY3JlYXRlQ2xhc3MoQ2hhbmdlRGV0YWlscywgW3tcbiAgICBrZXk6IFwiYWdncmVnYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFnZ3JlZ2F0ZShkZXRhaWxzKSB7XG4gICAgICB0aGlzLnJhd0luc2VydGVkICs9IGRldGFpbHMucmF3SW5zZXJ0ZWQ7XG4gICAgICB0aGlzLnNraXAgPSB0aGlzLnNraXAgfHwgZGV0YWlscy5za2lwO1xuICAgICAgdGhpcy5pbnNlcnRlZCArPSBkZXRhaWxzLmluc2VydGVkO1xuICAgICAgdGhpcy50YWlsU2hpZnQgKz0gZGV0YWlscy50YWlsU2hpZnQ7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqIFRvdGFsIG9mZnNldCBjb25zaWRlcmluZyBhbGwgY2hhbmdlcyAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwib2Zmc2V0XCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy50YWlsU2hpZnQgKyB0aGlzLmluc2VydGVkLmxlbmd0aDtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gQ2hhbmdlRGV0YWlscztcbn0oKTtcblxuLyoqIFByb3ZpZGVzIGRldGFpbHMgb2YgY29udGludW91cyBleHRyYWN0ZWQgdGFpbCAqL1xudmFyIENvbnRpbnVvdXNUYWlsRGV0YWlscyA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIC8qKiBUYWlsIHZhbHVlIGFzIHN0cmluZyAqL1xuXG4gIC8qKiBUYWlsIHN0YXJ0IHBvc2l0aW9uICovXG5cbiAgLyoqIFN0YXJ0IHBvc2l0aW9uICovXG4gIGZ1bmN0aW9uIENvbnRpbnVvdXNUYWlsRGV0YWlscygpIHtcbiAgICB2YXIgdmFsdWUgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6ICcnO1xuICAgIHZhciBmcm9tID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAwO1xuICAgIHZhciBzdG9wID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgPyBhcmd1bWVudHNbMl0gOiB1bmRlZmluZWQ7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ29udGludW91c1RhaWxEZXRhaWxzKTtcblxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLmZyb20gPSBmcm9tO1xuICAgIHRoaXMuc3RvcCA9IHN0b3A7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoQ29udGludW91c1RhaWxEZXRhaWxzLCBbe1xuICAgIGtleTogXCJ0b1N0cmluZ1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJleHRlbmRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZXh0ZW5kKHRhaWwpIHtcbiAgICAgIHRoaXMudmFsdWUgKz0gU3RyaW5nKHRhaWwpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJhcHBlbmRUb1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhcHBlbmRUbyhtYXNrZWQpIHtcbiAgICAgIHJldHVybiBtYXNrZWQuYXBwZW5kKHRoaXMudG9TdHJpbmcoKSwge1xuICAgICAgICB0YWlsOiB0cnVlXG4gICAgICB9KS5hZ2dyZWdhdGUobWFza2VkLl9hcHBlbmRQbGFjZWhvbGRlcigpKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2hpZnRCZWZvcmVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2hpZnRCZWZvcmUocG9zKSB7XG4gICAgICBpZiAodGhpcy5mcm9tID49IHBvcyB8fCAhdGhpcy52YWx1ZS5sZW5ndGgpIHJldHVybiAnJztcbiAgICAgIHZhciBzaGlmdENoYXIgPSB0aGlzLnZhbHVlWzBdO1xuICAgICAgdGhpcy52YWx1ZSA9IHRoaXMudmFsdWUuc2xpY2UoMSk7XG4gICAgICByZXR1cm4gc2hpZnRDaGFyO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzdGF0ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdmFsdWU6IHRoaXMudmFsdWUsXG4gICAgICAgIGZyb206IHRoaXMuZnJvbSxcbiAgICAgICAgc3RvcDogdGhpcy5zdG9wXG4gICAgICB9O1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQoc3RhdGUpIHtcbiAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgc3RhdGUpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBDb250aW51b3VzVGFpbERldGFpbHM7XG59KCk7XG5cbi8qKiBQcm92aWRlcyBjb21tb24gbWFza2luZyBzdHVmZiAqL1xudmFyIE1hc2tlZCA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIC8vICRTaGFwZTxNYXNrZWRPcHRpb25zPjsgVE9ETyBhZnRlciBmaXggaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL2Zsb3cvaXNzdWVzLzQ3NzNcblxuICAvKiogQHR5cGUge01hc2t9ICovXG5cbiAgLyoqICovXG4gIC8vICRGbG93Rml4TWUgbm8gaWRlYXNcblxuICAvKiogVHJhbnNmb3JtcyB2YWx1ZSBiZWZvcmUgbWFzayBwcm9jZXNzaW5nICovXG5cbiAgLyoqIFZhbGlkYXRlcyBpZiB2YWx1ZSBpcyBhY2NlcHRhYmxlICovXG5cbiAgLyoqIERvZXMgYWRkaXRpb25hbCBwcm9jZXNzaW5nIGluIHRoZSBlbmQgb2YgZWRpdGluZyAqL1xuXG4gIC8qKiBFbmFibGUgY2hhcmFjdGVycyBvdmVyd3JpdGluZyAqL1xuXG4gIC8qKiAqL1xuICBmdW5jdGlvbiBNYXNrZWQob3B0cykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNYXNrZWQpO1xuXG4gICAgdGhpcy5fdmFsdWUgPSAnJztcblxuICAgIHRoaXMuX3VwZGF0ZShvcHRzKTtcblxuICAgIHRoaXMuaXNJbml0aWFsaXplZCA9IHRydWU7XG4gIH1cbiAgLyoqIFNldHMgYW5kIGFwcGxpZXMgbmV3IG9wdGlvbnMgKi9cblxuXG4gIF9jcmVhdGVDbGFzcyhNYXNrZWQsIFt7XG4gICAga2V5OiBcInVwZGF0ZU9wdGlvbnNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdXBkYXRlT3B0aW9ucyhvcHRzKSB7XG4gICAgICBpZiAoIU9iamVjdC5rZXlzKG9wdHMpLmxlbmd0aCkgcmV0dXJuO1xuICAgICAgdGhpcy53aXRoVmFsdWVSZWZyZXNoKHRoaXMuX3VwZGF0ZS5iaW5kKHRoaXMsIG9wdHMpKTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgIFNldHMgbmV3IG9wdGlvbnNcclxuICAgICAgQHByb3RlY3RlZFxyXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIl91cGRhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX3VwZGF0ZShvcHRzKSB7XG4gICAgICBPYmplY3QuYXNzaWduKHRoaXMsIG9wdHMpO1xuICAgIH1cbiAgICAvKiogTWFzayBzdGF0ZSAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwicmVzZXRcIixcblxuICAgIC8qKiBSZXNldHMgdmFsdWUgKi9cbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgICB0aGlzLl92YWx1ZSA9ICcnO1xuICAgIH1cbiAgICAvKiogKi9cblxuICB9LCB7XG4gICAga2V5OiBcInJlc29sdmVcIixcblxuICAgIC8qKiBSZXNvbHZlIG5ldyB2YWx1ZSAqL1xuICAgIHZhbHVlOiBmdW5jdGlvbiByZXNvbHZlKHZhbHVlKSB7XG4gICAgICB0aGlzLnJlc2V0KCk7XG4gICAgICB0aGlzLmFwcGVuZCh2YWx1ZSwge1xuICAgICAgICBpbnB1dDogdHJ1ZVxuICAgICAgfSwgJycpO1xuICAgICAgdGhpcy5kb0NvbW1pdCgpO1xuICAgICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gICAgfVxuICAgIC8qKiAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwibmVhcmVzdElucHV0UG9zXCIsXG5cbiAgICAvKiogRmluZHMgbmVhcmVzdCBpbnB1dCBwb3NpdGlvbiBpbiBkaXJlY3Rpb24gKi9cbiAgICB2YWx1ZTogZnVuY3Rpb24gbmVhcmVzdElucHV0UG9zKGN1cnNvclBvcywgZGlyZWN0aW9uKSB7XG4gICAgICByZXR1cm4gY3Vyc29yUG9zO1xuICAgIH1cbiAgICAvKiogRXh0cmFjdHMgdmFsdWUgaW4gcmFuZ2UgY29uc2lkZXJpbmcgZmxhZ3MgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImV4dHJhY3RJbnB1dFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBleHRyYWN0SW5wdXQoKSB7XG4gICAgICB2YXIgZnJvbVBvcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogMDtcbiAgICAgIHZhciB0b1BvcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogdGhpcy52YWx1ZS5sZW5ndGg7XG4gICAgICByZXR1cm4gdGhpcy52YWx1ZS5zbGljZShmcm9tUG9zLCB0b1Bvcyk7XG4gICAgfVxuICAgIC8qKiBFeHRyYWN0cyB0YWlsIGluIHJhbmdlICovXG5cbiAgfSwge1xuICAgIGtleTogXCJleHRyYWN0VGFpbFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBleHRyYWN0VGFpbCgpIHtcbiAgICAgIHZhciBmcm9tUG9zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAwO1xuICAgICAgdmFyIHRvUG9zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB0aGlzLnZhbHVlLmxlbmd0aDtcbiAgICAgIHJldHVybiBuZXcgQ29udGludW91c1RhaWxEZXRhaWxzKHRoaXMuZXh0cmFjdElucHV0KGZyb21Qb3MsIHRvUG9zKSwgZnJvbVBvcyk7XG4gICAgfVxuICAgIC8qKiBBcHBlbmRzIHRhaWwgKi9cbiAgICAvLyAkRmxvd0ZpeE1lIG5vIGlkZWFzXG5cbiAgfSwge1xuICAgIGtleTogXCJhcHBlbmRUYWlsXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFwcGVuZFRhaWwodGFpbCkge1xuICAgICAgaWYgKGlzU3RyaW5nKHRhaWwpKSB0YWlsID0gbmV3IENvbnRpbnVvdXNUYWlsRGV0YWlscyhTdHJpbmcodGFpbCkpO1xuICAgICAgcmV0dXJuIHRhaWwuYXBwZW5kVG8odGhpcyk7XG4gICAgfVxuICAgIC8qKiBBcHBlbmRzIGNoYXIgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIl9hcHBlbmRDaGFyUmF3XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9hcHBlbmRDaGFyUmF3KGNoKSB7XG4gICAgICB2YXIgZmxhZ3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgICAgY2ggPSB0aGlzLmRvUHJlcGFyZShjaCwgZmxhZ3MpO1xuICAgICAgaWYgKCFjaCkgcmV0dXJuIG5ldyBDaGFuZ2VEZXRhaWxzKCk7XG4gICAgICB0aGlzLl92YWx1ZSArPSBjaDtcbiAgICAgIHJldHVybiBuZXcgQ2hhbmdlRGV0YWlscyh7XG4gICAgICAgIGluc2VydGVkOiBjaCxcbiAgICAgICAgcmF3SW5zZXJ0ZWQ6IGNoXG4gICAgICB9KTtcbiAgICB9XG4gICAgLyoqIEFwcGVuZHMgY2hhciAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiX2FwcGVuZENoYXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2FwcGVuZENoYXIoY2gpIHtcbiAgICAgIHZhciBmbGFncyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgICB2YXIgY2hlY2tUYWlsID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgPyBhcmd1bWVudHNbMl0gOiB1bmRlZmluZWQ7XG4gICAgICB2YXIgY29uc2lzdGVudFN0YXRlID0gdGhpcy5zdGF0ZTtcblxuICAgICAgdmFyIGRldGFpbHMgPSB0aGlzLl9hcHBlbmRDaGFyUmF3KGNoLCBmbGFncyk7XG5cbiAgICAgIGlmIChkZXRhaWxzLmluc2VydGVkKSB7XG4gICAgICAgIHZhciBjb25zaXN0ZW50VGFpbDtcbiAgICAgICAgdmFyIGFwcGVuZGVkID0gdGhpcy5kb1ZhbGlkYXRlKGZsYWdzKSAhPT0gZmFsc2U7XG5cbiAgICAgICAgaWYgKGFwcGVuZGVkICYmIGNoZWNrVGFpbCAhPSBudWxsKSB7XG4gICAgICAgICAgLy8gdmFsaWRhdGlvbiBvaywgY2hlY2sgdGFpbFxuICAgICAgICAgIHZhciBiZWZvcmVUYWlsU3RhdGUgPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgICAgaWYgKHRoaXMub3ZlcndyaXRlKSB7XG4gICAgICAgICAgICBjb25zaXN0ZW50VGFpbCA9IGNoZWNrVGFpbC5zdGF0ZTtcbiAgICAgICAgICAgIGNoZWNrVGFpbC5zaGlmdEJlZm9yZSh0aGlzLnZhbHVlLmxlbmd0aCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIHRhaWxEZXRhaWxzID0gdGhpcy5hcHBlbmRUYWlsKGNoZWNrVGFpbCk7XG4gICAgICAgICAgYXBwZW5kZWQgPSB0YWlsRGV0YWlscy5yYXdJbnNlcnRlZCA9PT0gY2hlY2tUYWlsLnRvU3RyaW5nKCk7IC8vIGlmIG9rLCByb2xsYmFjayBzdGF0ZSBhZnRlciB0YWlsXG5cbiAgICAgICAgICBpZiAoYXBwZW5kZWQgJiYgdGFpbERldGFpbHMuaW5zZXJ0ZWQpIHRoaXMuc3RhdGUgPSBiZWZvcmVUYWlsU3RhdGU7XG4gICAgICAgIH0gLy8gcmV2ZXJ0IGFsbCBpZiBzb21ldGhpbmcgd2VudCB3cm9uZ1xuXG5cbiAgICAgICAgaWYgKCFhcHBlbmRlZCkge1xuICAgICAgICAgIGRldGFpbHMucmF3SW5zZXJ0ZWQgPSBkZXRhaWxzLmluc2VydGVkID0gJyc7XG4gICAgICAgICAgdGhpcy5zdGF0ZSA9IGNvbnNpc3RlbnRTdGF0ZTtcbiAgICAgICAgICBpZiAoY2hlY2tUYWlsICYmIGNvbnNpc3RlbnRUYWlsKSBjaGVja1RhaWwuc3RhdGUgPSBjb25zaXN0ZW50VGFpbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGV0YWlscztcbiAgICB9XG4gICAgLyoqIEFwcGVuZHMgb3B0aW9uYWwgcGxhY2Vob2xkZXIgYXQgZW5kICovXG5cbiAgfSwge1xuICAgIGtleTogXCJfYXBwZW5kUGxhY2Vob2xkZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2FwcGVuZFBsYWNlaG9sZGVyKCkge1xuICAgICAgcmV0dXJuIG5ldyBDaGFuZ2VEZXRhaWxzKCk7XG4gICAgfVxuICAgIC8qKiBBcHBlbmRzIHN5bWJvbHMgY29uc2lkZXJpbmcgZmxhZ3MgKi9cbiAgICAvLyAkRmxvd0ZpeE1lIG5vIGlkZWFzXG5cbiAgfSwge1xuICAgIGtleTogXCJhcHBlbmRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYXBwZW5kKHN0ciwgZmxhZ3MsIHRhaWwpIHtcbiAgICAgIGlmICghaXNTdHJpbmcoc3RyKSkgdGhyb3cgbmV3IEVycm9yKCd2YWx1ZSBzaG91bGQgYmUgc3RyaW5nJyk7XG4gICAgICB2YXIgZGV0YWlscyA9IG5ldyBDaGFuZ2VEZXRhaWxzKCk7XG4gICAgICB2YXIgY2hlY2tUYWlsID0gaXNTdHJpbmcodGFpbCkgPyBuZXcgQ29udGludW91c1RhaWxEZXRhaWxzKFN0cmluZyh0YWlsKSkgOiB0YWlsO1xuICAgICAgaWYgKGZsYWdzLnRhaWwpIGZsYWdzLl9iZWZvcmVUYWlsU3RhdGUgPSB0aGlzLnN0YXRlO1xuXG4gICAgICBmb3IgKHZhciBjaSA9IDA7IGNpIDwgc3RyLmxlbmd0aDsgKytjaSkge1xuICAgICAgICBkZXRhaWxzLmFnZ3JlZ2F0ZSh0aGlzLl9hcHBlbmRDaGFyKHN0cltjaV0sIGZsYWdzLCBjaGVja1RhaWwpKTtcbiAgICAgIH0gLy8gYXBwZW5kIHRhaWwgYnV0IGFnZ3JlZ2F0ZSBvbmx5IHRhaWxTaGlmdFxuXG5cbiAgICAgIGlmIChjaGVja1RhaWwgIT0gbnVsbCkge1xuICAgICAgICBkZXRhaWxzLnRhaWxTaGlmdCArPSB0aGlzLmFwcGVuZFRhaWwoY2hlY2tUYWlsKS50YWlsU2hpZnQ7IC8vIFRPRE8gaXQncyBhIGdvb2QgaWRlYSB0byBjbGVhciBzdGF0ZSBhZnRlciBhcHBlbmRpbmcgZW5kc1xuICAgICAgICAvLyBidXQgaXQgY2F1c2VzIGJ1Z3Mgd2hlbiBvbmUgYXBwZW5kIGNhbGxzIGFub3RoZXIgKHdoZW4gZHluYW1pYyBkaXNwYXRjaCBzZXQgcmF3SW5wdXRWYWx1ZSlcbiAgICAgICAgLy8gdGhpcy5fcmVzZXRCZWZvcmVUYWlsU3RhdGUoKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRldGFpbHM7XG4gICAgfVxuICAgIC8qKiAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwicmVtb3ZlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHZhciBmcm9tUG9zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAwO1xuICAgICAgdmFyIHRvUG9zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB0aGlzLnZhbHVlLmxlbmd0aDtcbiAgICAgIHRoaXMuX3ZhbHVlID0gdGhpcy52YWx1ZS5zbGljZSgwLCBmcm9tUG9zKSArIHRoaXMudmFsdWUuc2xpY2UodG9Qb3MpO1xuICAgICAgcmV0dXJuIG5ldyBDaGFuZ2VEZXRhaWxzKCk7XG4gICAgfVxuICAgIC8qKiBDYWxscyBmdW5jdGlvbiBhbmQgcmVhcHBsaWVzIGN1cnJlbnQgdmFsdWUgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIndpdGhWYWx1ZVJlZnJlc2hcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gd2l0aFZhbHVlUmVmcmVzaChmbikge1xuICAgICAgaWYgKHRoaXMuX3JlZnJlc2hpbmcgfHwgIXRoaXMuaXNJbml0aWFsaXplZCkgcmV0dXJuIGZuKCk7XG4gICAgICB0aGlzLl9yZWZyZXNoaW5nID0gdHJ1ZTtcbiAgICAgIHZhciB1bm1hc2tlZCA9IHRoaXMudW5tYXNrZWRWYWx1ZTtcbiAgICAgIHZhciB2YWx1ZSA9IHRoaXMudmFsdWU7XG4gICAgICB2YXIgcmV0ID0gZm4oKTsgLy8gdHJ5IHRvIHVwZGF0ZSB3aXRoIHJhdyB2YWx1ZSBmaXJzdCB0byBrZWVwIGZpeGVkIGNoYXJzXG5cbiAgICAgIGlmICh0aGlzLnJlc29sdmUodmFsdWUpICE9PSB2YWx1ZSkge1xuICAgICAgICAvLyBvciBmYWxsYmFjayB0byB1bm1hc2tlZFxuICAgICAgICB0aGlzLnVubWFza2VkVmFsdWUgPSB1bm1hc2tlZDtcbiAgICAgIH1cblxuICAgICAgZGVsZXRlIHRoaXMuX3JlZnJlc2hpbmc7XG4gICAgICByZXR1cm4gcmV0O1xuICAgIH1cbiAgICAvKipcclxuICAgICAgUHJlcGFyZXMgc3RyaW5nIGJlZm9yZSBtYXNrIHByb2Nlc3NpbmdcclxuICAgICAgQHByb3RlY3RlZFxyXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImRvUHJlcGFyZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkb1ByZXBhcmUoc3RyKSB7XG4gICAgICB2YXIgZmxhZ3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgICAgcmV0dXJuIHRoaXMucHJlcGFyZSA/IHRoaXMucHJlcGFyZShzdHIsIHRoaXMsIGZsYWdzKSA6IHN0cjtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgIFZhbGlkYXRlcyBpZiB2YWx1ZSBpcyBhY2NlcHRhYmxlXHJcbiAgICAgIEBwcm90ZWN0ZWRcclxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJkb1ZhbGlkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRvVmFsaWRhdGUoZmxhZ3MpIHtcbiAgICAgIHJldHVybiAoIXRoaXMudmFsaWRhdGUgfHwgdGhpcy52YWxpZGF0ZSh0aGlzLnZhbHVlLCB0aGlzLCBmbGFncykpICYmICghdGhpcy5wYXJlbnQgfHwgdGhpcy5wYXJlbnQuZG9WYWxpZGF0ZShmbGFncykpO1xuICAgIH1cbiAgICAvKipcclxuICAgICAgRG9lcyBhZGRpdGlvbmFsIHByb2Nlc3NpbmcgaW4gdGhlIGVuZCBvZiBlZGl0aW5nXHJcbiAgICAgIEBwcm90ZWN0ZWRcclxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJkb0NvbW1pdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkb0NvbW1pdCgpIHtcbiAgICAgIGlmICh0aGlzLmNvbW1pdCkgdGhpcy5jb21taXQodGhpcy52YWx1ZSwgdGhpcyk7XG4gICAgfVxuICAgIC8qKiAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwic3BsaWNlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNwbGljZShzdGFydCwgZGVsZXRlQ291bnQsIGluc2VydGVkLCByZW1vdmVEaXJlY3Rpb24pIHtcbiAgICAgIHZhciB0YWlsUG9zID0gc3RhcnQgKyBkZWxldGVDb3VudDtcbiAgICAgIHZhciB0YWlsID0gdGhpcy5leHRyYWN0VGFpbCh0YWlsUG9zKTtcbiAgICAgIHZhciBzdGFydENoYW5nZVBvcyA9IHRoaXMubmVhcmVzdElucHV0UG9zKHN0YXJ0LCByZW1vdmVEaXJlY3Rpb24pO1xuICAgICAgdmFyIGNoYW5nZURldGFpbHMgPSBuZXcgQ2hhbmdlRGV0YWlscyh7XG4gICAgICAgIHRhaWxTaGlmdDogc3RhcnRDaGFuZ2VQb3MgLSBzdGFydCAvLyBhZGp1c3QgdGFpbFNoaWZ0IGlmIHN0YXJ0IHdhcyBhbGlnbmVkXG5cbiAgICAgIH0pLmFnZ3JlZ2F0ZSh0aGlzLnJlbW92ZShzdGFydENoYW5nZVBvcykpLmFnZ3JlZ2F0ZSh0aGlzLmFwcGVuZChpbnNlcnRlZCwge1xuICAgICAgICBpbnB1dDogdHJ1ZVxuICAgICAgfSwgdGFpbCkpO1xuICAgICAgcmV0dXJuIGNoYW5nZURldGFpbHM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInN0YXRlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBfdmFsdWU6IHRoaXMudmFsdWVcbiAgICAgIH07XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldChzdGF0ZSkge1xuICAgICAgdGhpcy5fdmFsdWUgPSBzdGF0ZS5fdmFsdWU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInZhbHVlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2YWx1ZSkge1xuICAgICAgdGhpcy5yZXNvbHZlKHZhbHVlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidW5tYXNrZWRWYWx1ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2YWx1ZSkge1xuICAgICAgdGhpcy5yZXNldCgpO1xuICAgICAgdGhpcy5hcHBlbmQodmFsdWUsIHt9LCAnJyk7XG4gICAgICB0aGlzLmRvQ29tbWl0KCk7XG4gICAgfVxuICAgIC8qKiAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwidHlwZWRWYWx1ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMudW5tYXNrZWRWYWx1ZTtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHZhbHVlKSB7XG4gICAgICB0aGlzLnVubWFza2VkVmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gICAgLyoqIFZhbHVlIHRoYXQgaW5jbHVkZXMgcmF3IHVzZXIgaW5wdXQgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInJhd0lucHV0VmFsdWVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmV4dHJhY3RJbnB1dCgwLCB0aGlzLnZhbHVlLmxlbmd0aCwge1xuICAgICAgICByYXc6IHRydWVcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsdWUpIHtcbiAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgIHRoaXMuYXBwZW5kKHZhbHVlLCB7XG4gICAgICAgIHJhdzogdHJ1ZVxuICAgICAgfSwgJycpO1xuICAgICAgdGhpcy5kb0NvbW1pdCgpO1xuICAgIH1cbiAgICAvKiogKi9cblxuICB9LCB7XG4gICAga2V5OiBcImlzQ29tcGxldGVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBNYXNrZWQ7XG59KCk7XG5cbi8qKiBHZXQgTWFza2VkIGNsYXNzIGJ5IG1hc2sgdHlwZSAqL1xuZnVuY3Rpb24gbWFza2VkQ2xhc3MobWFzaykge1xuICBpZiAobWFzayA9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdtYXNrIHByb3BlcnR5IHNob3VsZCBiZSBkZWZpbmVkJyk7XG4gIH1cblxuICBpZiAobWFzayBpbnN0YW5jZW9mIFJlZ0V4cCkgcmV0dXJuIGcuSU1hc2suTWFza2VkUmVnRXhwO1xuICBpZiAoaXNTdHJpbmcobWFzaykpIHJldHVybiBnLklNYXNrLk1hc2tlZFBhdHRlcm47XG4gIGlmIChtYXNrIGluc3RhbmNlb2YgRGF0ZSB8fCBtYXNrID09PSBEYXRlKSByZXR1cm4gZy5JTWFzay5NYXNrZWREYXRlO1xuICBpZiAobWFzayBpbnN0YW5jZW9mIE51bWJlciB8fCB0eXBlb2YgbWFzayA9PT0gJ251bWJlcicgfHwgbWFzayA9PT0gTnVtYmVyKSByZXR1cm4gZy5JTWFzay5NYXNrZWROdW1iZXI7XG4gIGlmIChBcnJheS5pc0FycmF5KG1hc2spIHx8IG1hc2sgPT09IEFycmF5KSByZXR1cm4gZy5JTWFzay5NYXNrZWREeW5hbWljOyAvLyAkRmxvd0ZpeE1lXG5cbiAgaWYgKG1hc2sucHJvdG90eXBlIGluc3RhbmNlb2YgZy5JTWFzay5NYXNrZWQpIHJldHVybiBtYXNrOyAvLyAkRmxvd0ZpeE1lXG5cbiAgaWYgKG1hc2sgaW5zdGFuY2VvZiBGdW5jdGlvbikgcmV0dXJuIGcuSU1hc2suTWFza2VkRnVuY3Rpb247XG4gIGNvbnNvbGUud2FybignTWFzayBub3QgZm91bmQgZm9yIG1hc2snLCBtYXNrKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG5cbiAgcmV0dXJuIGcuSU1hc2suTWFza2VkO1xufVxuLyoqIENyZWF0ZXMgbmV3IHtAbGluayBNYXNrZWR9IGRlcGVuZGluZyBvbiBtYXNrIHR5cGUgKi9cblxuZnVuY3Rpb24gY3JlYXRlTWFzayhvcHRzKSB7XG4gIG9wdHMgPSBPYmplY3QuYXNzaWduKHt9LCBvcHRzKTtcbiAgdmFyIG1hc2sgPSBvcHRzLm1hc2s7XG4gIGlmIChtYXNrIGluc3RhbmNlb2YgZy5JTWFzay5NYXNrZWQpIHJldHVybiBtYXNrO1xuICB2YXIgTWFza2VkQ2xhc3MgPSBtYXNrZWRDbGFzcyhtYXNrKTtcbiAgcmV0dXJuIG5ldyBNYXNrZWRDbGFzcyhvcHRzKTtcbn1cblxudmFyIERFRkFVTFRfSU5QVVRfREVGSU5JVElPTlMgPSB7XG4gICcwJzogL1xcZC8sXG4gICdhJzogL1tcXHUwMDQxLVxcdTAwNUFcXHUwMDYxLVxcdTAwN0FcXHUwMEFBXFx1MDBCNVxcdTAwQkFcXHUwMEMwLVxcdTAwRDZcXHUwMEQ4LVxcdTAwRjZcXHUwMEY4LVxcdTAyQzFcXHUwMkM2LVxcdTAyRDFcXHUwMkUwLVxcdTAyRTRcXHUwMkVDXFx1MDJFRVxcdTAzNzAtXFx1MDM3NFxcdTAzNzZcXHUwMzc3XFx1MDM3QS1cXHUwMzdEXFx1MDM4NlxcdTAzODgtXFx1MDM4QVxcdTAzOENcXHUwMzhFLVxcdTAzQTFcXHUwM0EzLVxcdTAzRjVcXHUwM0Y3LVxcdTA0ODFcXHUwNDhBLVxcdTA1MjdcXHUwNTMxLVxcdTA1NTZcXHUwNTU5XFx1MDU2MS1cXHUwNTg3XFx1MDVEMC1cXHUwNUVBXFx1MDVGMC1cXHUwNUYyXFx1MDYyMC1cXHUwNjRBXFx1MDY2RVxcdTA2NkZcXHUwNjcxLVxcdTA2RDNcXHUwNkQ1XFx1MDZFNVxcdTA2RTZcXHUwNkVFXFx1MDZFRlxcdTA2RkEtXFx1MDZGQ1xcdTA2RkZcXHUwNzEwXFx1MDcxMi1cXHUwNzJGXFx1MDc0RC1cXHUwN0E1XFx1MDdCMVxcdTA3Q0EtXFx1MDdFQVxcdTA3RjRcXHUwN0Y1XFx1MDdGQVxcdTA4MDAtXFx1MDgxNVxcdTA4MUFcXHUwODI0XFx1MDgyOFxcdTA4NDAtXFx1MDg1OFxcdTA4QTBcXHUwOEEyLVxcdTA4QUNcXHUwOTA0LVxcdTA5MzlcXHUwOTNEXFx1MDk1MFxcdTA5NTgtXFx1MDk2MVxcdTA5NzEtXFx1MDk3N1xcdTA5NzktXFx1MDk3RlxcdTA5ODUtXFx1MDk4Q1xcdTA5OEZcXHUwOTkwXFx1MDk5My1cXHUwOUE4XFx1MDlBQS1cXHUwOUIwXFx1MDlCMlxcdTA5QjYtXFx1MDlCOVxcdTA5QkRcXHUwOUNFXFx1MDlEQ1xcdTA5RERcXHUwOURGLVxcdTA5RTFcXHUwOUYwXFx1MDlGMVxcdTBBMDUtXFx1MEEwQVxcdTBBMEZcXHUwQTEwXFx1MEExMy1cXHUwQTI4XFx1MEEyQS1cXHUwQTMwXFx1MEEzMlxcdTBBMzNcXHUwQTM1XFx1MEEzNlxcdTBBMzhcXHUwQTM5XFx1MEE1OS1cXHUwQTVDXFx1MEE1RVxcdTBBNzItXFx1MEE3NFxcdTBBODUtXFx1MEE4RFxcdTBBOEYtXFx1MEE5MVxcdTBBOTMtXFx1MEFBOFxcdTBBQUEtXFx1MEFCMFxcdTBBQjJcXHUwQUIzXFx1MEFCNS1cXHUwQUI5XFx1MEFCRFxcdTBBRDBcXHUwQUUwXFx1MEFFMVxcdTBCMDUtXFx1MEIwQ1xcdTBCMEZcXHUwQjEwXFx1MEIxMy1cXHUwQjI4XFx1MEIyQS1cXHUwQjMwXFx1MEIzMlxcdTBCMzNcXHUwQjM1LVxcdTBCMzlcXHUwQjNEXFx1MEI1Q1xcdTBCNURcXHUwQjVGLVxcdTBCNjFcXHUwQjcxXFx1MEI4M1xcdTBCODUtXFx1MEI4QVxcdTBCOEUtXFx1MEI5MFxcdTBCOTItXFx1MEI5NVxcdTBCOTlcXHUwQjlBXFx1MEI5Q1xcdTBCOUVcXHUwQjlGXFx1MEJBM1xcdTBCQTRcXHUwQkE4LVxcdTBCQUFcXHUwQkFFLVxcdTBCQjlcXHUwQkQwXFx1MEMwNS1cXHUwQzBDXFx1MEMwRS1cXHUwQzEwXFx1MEMxMi1cXHUwQzI4XFx1MEMyQS1cXHUwQzMzXFx1MEMzNS1cXHUwQzM5XFx1MEMzRFxcdTBDNThcXHUwQzU5XFx1MEM2MFxcdTBDNjFcXHUwQzg1LVxcdTBDOENcXHUwQzhFLVxcdTBDOTBcXHUwQzkyLVxcdTBDQThcXHUwQ0FBLVxcdTBDQjNcXHUwQ0I1LVxcdTBDQjlcXHUwQ0JEXFx1MENERVxcdTBDRTBcXHUwQ0UxXFx1MENGMVxcdTBDRjJcXHUwRDA1LVxcdTBEMENcXHUwRDBFLVxcdTBEMTBcXHUwRDEyLVxcdTBEM0FcXHUwRDNEXFx1MEQ0RVxcdTBENjBcXHUwRDYxXFx1MEQ3QS1cXHUwRDdGXFx1MEQ4NS1cXHUwRDk2XFx1MEQ5QS1cXHUwREIxXFx1MERCMy1cXHUwREJCXFx1MERCRFxcdTBEQzAtXFx1MERDNlxcdTBFMDEtXFx1MEUzMFxcdTBFMzJcXHUwRTMzXFx1MEU0MC1cXHUwRTQ2XFx1MEU4MVxcdTBFODJcXHUwRTg0XFx1MEU4N1xcdTBFODhcXHUwRThBXFx1MEU4RFxcdTBFOTQtXFx1MEU5N1xcdTBFOTktXFx1MEU5RlxcdTBFQTEtXFx1MEVBM1xcdTBFQTVcXHUwRUE3XFx1MEVBQVxcdTBFQUJcXHUwRUFELVxcdTBFQjBcXHUwRUIyXFx1MEVCM1xcdTBFQkRcXHUwRUMwLVxcdTBFQzRcXHUwRUM2XFx1MEVEQy1cXHUwRURGXFx1MEYwMFxcdTBGNDAtXFx1MEY0N1xcdTBGNDktXFx1MEY2Q1xcdTBGODgtXFx1MEY4Q1xcdTEwMDAtXFx1MTAyQVxcdTEwM0ZcXHUxMDUwLVxcdTEwNTVcXHUxMDVBLVxcdTEwNURcXHUxMDYxXFx1MTA2NVxcdTEwNjZcXHUxMDZFLVxcdTEwNzBcXHUxMDc1LVxcdTEwODFcXHUxMDhFXFx1MTBBMC1cXHUxMEM1XFx1MTBDN1xcdTEwQ0RcXHUxMEQwLVxcdTEwRkFcXHUxMEZDLVxcdTEyNDhcXHUxMjRBLVxcdTEyNERcXHUxMjUwLVxcdTEyNTZcXHUxMjU4XFx1MTI1QS1cXHUxMjVEXFx1MTI2MC1cXHUxMjg4XFx1MTI4QS1cXHUxMjhEXFx1MTI5MC1cXHUxMkIwXFx1MTJCMi1cXHUxMkI1XFx1MTJCOC1cXHUxMkJFXFx1MTJDMFxcdTEyQzItXFx1MTJDNVxcdTEyQzgtXFx1MTJENlxcdTEyRDgtXFx1MTMxMFxcdTEzMTItXFx1MTMxNVxcdTEzMTgtXFx1MTM1QVxcdTEzODAtXFx1MTM4RlxcdTEzQTAtXFx1MTNGNFxcdTE0MDEtXFx1MTY2Q1xcdTE2NkYtXFx1MTY3RlxcdTE2ODEtXFx1MTY5QVxcdTE2QTAtXFx1MTZFQVxcdTE3MDAtXFx1MTcwQ1xcdTE3MEUtXFx1MTcxMVxcdTE3MjAtXFx1MTczMVxcdTE3NDAtXFx1MTc1MVxcdTE3NjAtXFx1MTc2Q1xcdTE3NkUtXFx1MTc3MFxcdTE3ODAtXFx1MTdCM1xcdTE3RDdcXHUxN0RDXFx1MTgyMC1cXHUxODc3XFx1MTg4MC1cXHUxOEE4XFx1MThBQVxcdTE4QjAtXFx1MThGNVxcdTE5MDAtXFx1MTkxQ1xcdTE5NTAtXFx1MTk2RFxcdTE5NzAtXFx1MTk3NFxcdTE5ODAtXFx1MTlBQlxcdTE5QzEtXFx1MTlDN1xcdTFBMDAtXFx1MUExNlxcdTFBMjAtXFx1MUE1NFxcdTFBQTdcXHUxQjA1LVxcdTFCMzNcXHUxQjQ1LVxcdTFCNEJcXHUxQjgzLVxcdTFCQTBcXHUxQkFFXFx1MUJBRlxcdTFCQkEtXFx1MUJFNVxcdTFDMDAtXFx1MUMyM1xcdTFDNEQtXFx1MUM0RlxcdTFDNUEtXFx1MUM3RFxcdTFDRTktXFx1MUNFQ1xcdTFDRUUtXFx1MUNGMVxcdTFDRjVcXHUxQ0Y2XFx1MUQwMC1cXHUxREJGXFx1MUUwMC1cXHUxRjE1XFx1MUYxOC1cXHUxRjFEXFx1MUYyMC1cXHUxRjQ1XFx1MUY0OC1cXHUxRjREXFx1MUY1MC1cXHUxRjU3XFx1MUY1OVxcdTFGNUJcXHUxRjVEXFx1MUY1Ri1cXHUxRjdEXFx1MUY4MC1cXHUxRkI0XFx1MUZCNi1cXHUxRkJDXFx1MUZCRVxcdTFGQzItXFx1MUZDNFxcdTFGQzYtXFx1MUZDQ1xcdTFGRDAtXFx1MUZEM1xcdTFGRDYtXFx1MUZEQlxcdTFGRTAtXFx1MUZFQ1xcdTFGRjItXFx1MUZGNFxcdTFGRjYtXFx1MUZGQ1xcdTIwNzFcXHUyMDdGXFx1MjA5MC1cXHUyMDlDXFx1MjEwMlxcdTIxMDdcXHUyMTBBLVxcdTIxMTNcXHUyMTE1XFx1MjExOS1cXHUyMTFEXFx1MjEyNFxcdTIxMjZcXHUyMTI4XFx1MjEyQS1cXHUyMTJEXFx1MjEyRi1cXHUyMTM5XFx1MjEzQy1cXHUyMTNGXFx1MjE0NS1cXHUyMTQ5XFx1MjE0RVxcdTIxODNcXHUyMTg0XFx1MkMwMC1cXHUyQzJFXFx1MkMzMC1cXHUyQzVFXFx1MkM2MC1cXHUyQ0U0XFx1MkNFQi1cXHUyQ0VFXFx1MkNGMlxcdTJDRjNcXHUyRDAwLVxcdTJEMjVcXHUyRDI3XFx1MkQyRFxcdTJEMzAtXFx1MkQ2N1xcdTJENkZcXHUyRDgwLVxcdTJEOTZcXHUyREEwLVxcdTJEQTZcXHUyREE4LVxcdTJEQUVcXHUyREIwLVxcdTJEQjZcXHUyREI4LVxcdTJEQkVcXHUyREMwLVxcdTJEQzZcXHUyREM4LVxcdTJEQ0VcXHUyREQwLVxcdTJERDZcXHUyREQ4LVxcdTJEREVcXHUyRTJGXFx1MzAwNVxcdTMwMDZcXHUzMDMxLVxcdTMwMzVcXHUzMDNCXFx1MzAzQ1xcdTMwNDEtXFx1MzA5NlxcdTMwOUQtXFx1MzA5RlxcdTMwQTEtXFx1MzBGQVxcdTMwRkMtXFx1MzBGRlxcdTMxMDUtXFx1MzEyRFxcdTMxMzEtXFx1MzE4RVxcdTMxQTAtXFx1MzFCQVxcdTMxRjAtXFx1MzFGRlxcdTM0MDAtXFx1NERCNVxcdTRFMDAtXFx1OUZDQ1xcdUEwMDAtXFx1QTQ4Q1xcdUE0RDAtXFx1QTRGRFxcdUE1MDAtXFx1QTYwQ1xcdUE2MTAtXFx1QTYxRlxcdUE2MkFcXHVBNjJCXFx1QTY0MC1cXHVBNjZFXFx1QTY3Ri1cXHVBNjk3XFx1QTZBMC1cXHVBNkU1XFx1QTcxNy1cXHVBNzFGXFx1QTcyMi1cXHVBNzg4XFx1QTc4Qi1cXHVBNzhFXFx1QTc5MC1cXHVBNzkzXFx1QTdBMC1cXHVBN0FBXFx1QTdGOC1cXHVBODAxXFx1QTgwMy1cXHVBODA1XFx1QTgwNy1cXHVBODBBXFx1QTgwQy1cXHVBODIyXFx1QTg0MC1cXHVBODczXFx1QTg4Mi1cXHVBOEIzXFx1QThGMi1cXHVBOEY3XFx1QThGQlxcdUE5MEEtXFx1QTkyNVxcdUE5MzAtXFx1QTk0NlxcdUE5NjAtXFx1QTk3Q1xcdUE5ODQtXFx1QTlCMlxcdUE5Q0ZcXHVBQTAwLVxcdUFBMjhcXHVBQTQwLVxcdUFBNDJcXHVBQTQ0LVxcdUFBNEJcXHVBQTYwLVxcdUFBNzZcXHVBQTdBXFx1QUE4MC1cXHVBQUFGXFx1QUFCMVxcdUFBQjVcXHVBQUI2XFx1QUFCOS1cXHVBQUJEXFx1QUFDMFxcdUFBQzJcXHVBQURCLVxcdUFBRERcXHVBQUUwLVxcdUFBRUFcXHVBQUYyLVxcdUFBRjRcXHVBQjAxLVxcdUFCMDZcXHVBQjA5LVxcdUFCMEVcXHVBQjExLVxcdUFCMTZcXHVBQjIwLVxcdUFCMjZcXHVBQjI4LVxcdUFCMkVcXHVBQkMwLVxcdUFCRTJcXHVBQzAwLVxcdUQ3QTNcXHVEN0IwLVxcdUQ3QzZcXHVEN0NCLVxcdUQ3RkJcXHVGOTAwLVxcdUZBNkRcXHVGQTcwLVxcdUZBRDlcXHVGQjAwLVxcdUZCMDZcXHVGQjEzLVxcdUZCMTdcXHVGQjFEXFx1RkIxRi1cXHVGQjI4XFx1RkIyQS1cXHVGQjM2XFx1RkIzOC1cXHVGQjNDXFx1RkIzRVxcdUZCNDBcXHVGQjQxXFx1RkI0M1xcdUZCNDRcXHVGQjQ2LVxcdUZCQjFcXHVGQkQzLVxcdUZEM0RcXHVGRDUwLVxcdUZEOEZcXHVGRDkyLVxcdUZEQzdcXHVGREYwLVxcdUZERkJcXHVGRTcwLVxcdUZFNzRcXHVGRTc2LVxcdUZFRkNcXHVGRjIxLVxcdUZGM0FcXHVGRjQxLVxcdUZGNUFcXHVGRjY2LVxcdUZGQkVcXHVGRkMyLVxcdUZGQzdcXHVGRkNBLVxcdUZGQ0ZcXHVGRkQyLVxcdUZGRDdcXHVGRkRBLVxcdUZGRENdLyxcbiAgLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjIwNzUwNzBcbiAgJyonOiAvLi9cbn07XG4vKiogKi9cblxudmFyIFBhdHRlcm5JbnB1dERlZmluaXRpb24gPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICAvKiogKi9cblxuICAvKiogKi9cblxuICAvKiogKi9cblxuICAvKiogKi9cblxuICAvKiogKi9cblxuICAvKiogKi9cbiAgZnVuY3Rpb24gUGF0dGVybklucHV0RGVmaW5pdGlvbihvcHRzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFBhdHRlcm5JbnB1dERlZmluaXRpb24pO1xuXG4gICAgdmFyIG1hc2sgPSBvcHRzLm1hc2ssXG4gICAgICAgIGJsb2NrT3B0cyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvcHRzLCBbXCJtYXNrXCJdKTtcblxuICAgIHRoaXMubWFza2VkID0gY3JlYXRlTWFzayh7XG4gICAgICBtYXNrOiBtYXNrXG4gICAgfSk7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBibG9ja09wdHMpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFBhdHRlcm5JbnB1dERlZmluaXRpb24sIFt7XG4gICAga2V5OiBcInJlc2V0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlc2V0KCkge1xuICAgICAgdGhpcy5faXNGaWxsZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMubWFza2VkLnJlc2V0KCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbW92ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICB2YXIgZnJvbVBvcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogMDtcbiAgICAgIHZhciB0b1BvcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogdGhpcy52YWx1ZS5sZW5ndGg7XG5cbiAgICAgIGlmIChmcm9tUG9zID09PSAwICYmIHRvUG9zID49IDEpIHtcbiAgICAgICAgdGhpcy5faXNGaWxsZWQgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIHRoaXMubWFza2VkLnJlbW92ZShmcm9tUG9zLCB0b1Bvcyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXcgQ2hhbmdlRGV0YWlscygpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJfYXBwZW5kQ2hhclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfYXBwZW5kQ2hhcihzdHIpIHtcbiAgICAgIHZhciBmbGFncyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgICBpZiAodGhpcy5faXNGaWxsZWQpIHJldHVybiBuZXcgQ2hhbmdlRGV0YWlscygpO1xuICAgICAgdmFyIHN0YXRlID0gdGhpcy5tYXNrZWQuc3RhdGU7IC8vIHNpbXVsYXRlIGlucHV0XG5cbiAgICAgIHZhciBkZXRhaWxzID0gdGhpcy5tYXNrZWQuX2FwcGVuZENoYXIoc3RyLCBmbGFncyk7XG5cbiAgICAgIGlmIChkZXRhaWxzLmluc2VydGVkICYmIHRoaXMuZG9WYWxpZGF0ZShmbGFncykgPT09IGZhbHNlKSB7XG4gICAgICAgIGRldGFpbHMuaW5zZXJ0ZWQgPSBkZXRhaWxzLnJhd0luc2VydGVkID0gJyc7XG4gICAgICAgIHRoaXMubWFza2VkLnN0YXRlID0gc3RhdGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghZGV0YWlscy5pbnNlcnRlZCAmJiAhdGhpcy5pc09wdGlvbmFsICYmICF0aGlzLmxhenkgJiYgIWZsYWdzLmlucHV0KSB7XG4gICAgICAgIGRldGFpbHMuaW5zZXJ0ZWQgPSB0aGlzLnBsYWNlaG9sZGVyQ2hhcjtcbiAgICAgIH1cblxuICAgICAgZGV0YWlscy5za2lwID0gIWRldGFpbHMuaW5zZXJ0ZWQgJiYgIXRoaXMuaXNPcHRpb25hbDtcbiAgICAgIHRoaXMuX2lzRmlsbGVkID0gQm9vbGVhbihkZXRhaWxzLmluc2VydGVkKTtcbiAgICAgIHJldHVybiBkZXRhaWxzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJhcHBlbmRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYXBwZW5kKCkge1xuICAgICAgdmFyIF90aGlzJG1hc2tlZDtcblxuICAgICAgcmV0dXJuIChfdGhpcyRtYXNrZWQgPSB0aGlzLm1hc2tlZCkuYXBwZW5kLmFwcGx5KF90aGlzJG1hc2tlZCwgYXJndW1lbnRzKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiX2FwcGVuZFBsYWNlaG9sZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9hcHBlbmRQbGFjZWhvbGRlcigpIHtcbiAgICAgIHZhciBkZXRhaWxzID0gbmV3IENoYW5nZURldGFpbHMoKTtcbiAgICAgIGlmICh0aGlzLl9pc0ZpbGxlZCB8fCB0aGlzLmlzT3B0aW9uYWwpIHJldHVybiBkZXRhaWxzO1xuICAgICAgdGhpcy5faXNGaWxsZWQgPSB0cnVlO1xuICAgICAgZGV0YWlscy5pbnNlcnRlZCA9IHRoaXMucGxhY2Vob2xkZXJDaGFyO1xuICAgICAgcmV0dXJuIGRldGFpbHM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImV4dHJhY3RUYWlsXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGV4dHJhY3RUYWlsKCkge1xuICAgICAgdmFyIF90aGlzJG1hc2tlZDI7XG5cbiAgICAgIHJldHVybiAoX3RoaXMkbWFza2VkMiA9IHRoaXMubWFza2VkKS5leHRyYWN0VGFpbC5hcHBseShfdGhpcyRtYXNrZWQyLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJhcHBlbmRUYWlsXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFwcGVuZFRhaWwoKSB7XG4gICAgICB2YXIgX3RoaXMkbWFza2VkMztcblxuICAgICAgcmV0dXJuIChfdGhpcyRtYXNrZWQzID0gdGhpcy5tYXNrZWQpLmFwcGVuZFRhaWwuYXBwbHkoX3RoaXMkbWFza2VkMywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZXh0cmFjdElucHV0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGV4dHJhY3RJbnB1dCgpIHtcbiAgICAgIHZhciBmcm9tUG9zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAwO1xuICAgICAgdmFyIHRvUG9zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB0aGlzLnZhbHVlLmxlbmd0aDtcbiAgICAgIHZhciBmbGFncyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyID8gYXJndW1lbnRzWzJdIDogdW5kZWZpbmVkO1xuICAgICAgcmV0dXJuIHRoaXMubWFza2VkLmV4dHJhY3RJbnB1dChmcm9tUG9zLCB0b1BvcywgZmxhZ3MpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJuZWFyZXN0SW5wdXRQb3NcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbmVhcmVzdElucHV0UG9zKGN1cnNvclBvcykge1xuICAgICAgdmFyIGRpcmVjdGlvbiA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogRElSRUNUSU9OLk5PTkU7XG4gICAgICB2YXIgbWluUG9zID0gMDtcbiAgICAgIHZhciBtYXhQb3MgPSB0aGlzLnZhbHVlLmxlbmd0aDtcbiAgICAgIHZhciBib3VuZFBvcyA9IE1hdGgubWluKE1hdGgubWF4KGN1cnNvclBvcywgbWluUG9zKSwgbWF4UG9zKTtcblxuICAgICAgc3dpdGNoIChkaXJlY3Rpb24pIHtcbiAgICAgICAgY2FzZSBESVJFQ1RJT04uTEVGVDpcbiAgICAgICAgY2FzZSBESVJFQ1RJT04uRk9SQ0VfTEVGVDpcbiAgICAgICAgICByZXR1cm4gdGhpcy5pc0NvbXBsZXRlID8gYm91bmRQb3MgOiBtaW5Qb3M7XG5cbiAgICAgICAgY2FzZSBESVJFQ1RJT04uUklHSFQ6XG4gICAgICAgIGNhc2UgRElSRUNUSU9OLkZPUkNFX1JJR0hUOlxuICAgICAgICAgIHJldHVybiB0aGlzLmlzQ29tcGxldGUgPyBib3VuZFBvcyA6IG1heFBvcztcblxuICAgICAgICBjYXNlIERJUkVDVElPTi5OT05FOlxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiBib3VuZFBvcztcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZG9WYWxpZGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkb1ZhbGlkYXRlKCkge1xuICAgICAgdmFyIF90aGlzJG1hc2tlZDQsIF90aGlzJHBhcmVudDtcblxuICAgICAgcmV0dXJuIChfdGhpcyRtYXNrZWQ0ID0gdGhpcy5tYXNrZWQpLmRvVmFsaWRhdGUuYXBwbHkoX3RoaXMkbWFza2VkNCwgYXJndW1lbnRzKSAmJiAoIXRoaXMucGFyZW50IHx8IChfdGhpcyRwYXJlbnQgPSB0aGlzLnBhcmVudCkuZG9WYWxpZGF0ZS5hcHBseShfdGhpcyRwYXJlbnQsIGFyZ3VtZW50cykpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJkb0NvbW1pdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkb0NvbW1pdCgpIHtcbiAgICAgIHRoaXMubWFza2VkLmRvQ29tbWl0KCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInZhbHVlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5tYXNrZWQudmFsdWUgfHwgKHRoaXMuX2lzRmlsbGVkICYmICF0aGlzLmlzT3B0aW9uYWwgPyB0aGlzLnBsYWNlaG9sZGVyQ2hhciA6ICcnKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidW5tYXNrZWRWYWx1ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMubWFza2VkLnVubWFza2VkVmFsdWU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImlzQ29tcGxldGVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBCb29sZWFuKHRoaXMubWFza2VkLnZhbHVlKSB8fCB0aGlzLmlzT3B0aW9uYWw7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInN0YXRlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBtYXNrZWQ6IHRoaXMubWFza2VkLnN0YXRlLFxuICAgICAgICBfaXNGaWxsZWQ6IHRoaXMuX2lzRmlsbGVkXG4gICAgICB9O1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQoc3RhdGUpIHtcbiAgICAgIHRoaXMubWFza2VkLnN0YXRlID0gc3RhdGUubWFza2VkO1xuICAgICAgdGhpcy5faXNGaWxsZWQgPSBzdGF0ZS5faXNGaWxsZWQ7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFBhdHRlcm5JbnB1dERlZmluaXRpb247XG59KCk7XG5cbnZhciBQYXR0ZXJuRml4ZWREZWZpbml0aW9uID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgLyoqICovXG5cbiAgLyoqICovXG5cbiAgLyoqICovXG5cbiAgLyoqICovXG4gIGZ1bmN0aW9uIFBhdHRlcm5GaXhlZERlZmluaXRpb24ob3B0cykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQYXR0ZXJuRml4ZWREZWZpbml0aW9uKTtcblxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgb3B0cyk7XG4gICAgdGhpcy5fdmFsdWUgPSAnJztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhQYXR0ZXJuRml4ZWREZWZpbml0aW9uLCBbe1xuICAgIGtleTogXCJyZXNldFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZXNldCgpIHtcbiAgICAgIHRoaXMuX2lzUmF3SW5wdXQgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3ZhbHVlID0gJyc7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbW92ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICB2YXIgZnJvbVBvcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogMDtcbiAgICAgIHZhciB0b1BvcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogdGhpcy5fdmFsdWUubGVuZ3RoO1xuICAgICAgdGhpcy5fdmFsdWUgPSB0aGlzLl92YWx1ZS5zbGljZSgwLCBmcm9tUG9zKSArIHRoaXMuX3ZhbHVlLnNsaWNlKHRvUG9zKTtcbiAgICAgIGlmICghdGhpcy5fdmFsdWUpIHRoaXMuX2lzUmF3SW5wdXQgPSBmYWxzZTtcbiAgICAgIHJldHVybiBuZXcgQ2hhbmdlRGV0YWlscygpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJuZWFyZXN0SW5wdXRQb3NcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbmVhcmVzdElucHV0UG9zKGN1cnNvclBvcykge1xuICAgICAgdmFyIGRpcmVjdGlvbiA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogRElSRUNUSU9OLk5PTkU7XG4gICAgICB2YXIgbWluUG9zID0gMDtcbiAgICAgIHZhciBtYXhQb3MgPSB0aGlzLl92YWx1ZS5sZW5ndGg7XG5cbiAgICAgIHN3aXRjaCAoZGlyZWN0aW9uKSB7XG4gICAgICAgIGNhc2UgRElSRUNUSU9OLkxFRlQ6XG4gICAgICAgIGNhc2UgRElSRUNUSU9OLkZPUkNFX0xFRlQ6XG4gICAgICAgICAgcmV0dXJuIG1pblBvcztcblxuICAgICAgICBjYXNlIERJUkVDVElPTi5OT05FOlxuICAgICAgICBjYXNlIERJUkVDVElPTi5SSUdIVDpcbiAgICAgICAgY2FzZSBESVJFQ1RJT04uRk9SQ0VfUklHSFQ6XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIG1heFBvcztcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZXh0cmFjdElucHV0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGV4dHJhY3RJbnB1dCgpIHtcbiAgICAgIHZhciBmcm9tUG9zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAwO1xuICAgICAgdmFyIHRvUG9zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB0aGlzLl92YWx1ZS5sZW5ndGg7XG4gICAgICB2YXIgZmxhZ3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHt9O1xuICAgICAgcmV0dXJuIGZsYWdzLnJhdyAmJiB0aGlzLl9pc1Jhd0lucHV0ICYmIHRoaXMuX3ZhbHVlLnNsaWNlKGZyb21Qb3MsIHRvUG9zKSB8fCAnJztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiX2FwcGVuZENoYXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2FwcGVuZENoYXIoc3RyKSB7XG4gICAgICB2YXIgZmxhZ3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgICAgdmFyIGRldGFpbHMgPSBuZXcgQ2hhbmdlRGV0YWlscygpO1xuICAgICAgaWYgKHRoaXMuX3ZhbHVlKSByZXR1cm4gZGV0YWlscztcbiAgICAgIHZhciBhcHBlbmRlZCA9IHRoaXMuY2hhciA9PT0gc3RyWzBdO1xuICAgICAgdmFyIGlzUmVzb2x2ZWQgPSBhcHBlbmRlZCAmJiAodGhpcy5pc1VubWFza2luZyB8fCBmbGFncy5pbnB1dCB8fCBmbGFncy5yYXcpICYmICFmbGFncy50YWlsO1xuICAgICAgaWYgKGlzUmVzb2x2ZWQpIGRldGFpbHMucmF3SW5zZXJ0ZWQgPSB0aGlzLmNoYXI7XG4gICAgICB0aGlzLl92YWx1ZSA9IGRldGFpbHMuaW5zZXJ0ZWQgPSB0aGlzLmNoYXI7XG4gICAgICB0aGlzLl9pc1Jhd0lucHV0ID0gaXNSZXNvbHZlZCAmJiAoZmxhZ3MucmF3IHx8IGZsYWdzLmlucHV0KTtcbiAgICAgIHJldHVybiBkZXRhaWxzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJfYXBwZW5kUGxhY2Vob2xkZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2FwcGVuZFBsYWNlaG9sZGVyKCkge1xuICAgICAgdmFyIGRldGFpbHMgPSBuZXcgQ2hhbmdlRGV0YWlscygpO1xuICAgICAgaWYgKHRoaXMuX3ZhbHVlKSByZXR1cm4gZGV0YWlscztcbiAgICAgIHRoaXMuX3ZhbHVlID0gZGV0YWlscy5pbnNlcnRlZCA9IHRoaXMuY2hhcjtcbiAgICAgIHJldHVybiBkZXRhaWxzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJleHRyYWN0VGFpbFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBleHRyYWN0VGFpbCgpIHtcbiAgICAgIHZhciB0b1BvcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogdGhpcy52YWx1ZS5sZW5ndGg7XG4gICAgICByZXR1cm4gbmV3IENvbnRpbnVvdXNUYWlsRGV0YWlscygnJyk7XG4gICAgfSAvLyAkRmxvd0ZpeE1lIG5vIGlkZWFzXG5cbiAgfSwge1xuICAgIGtleTogXCJhcHBlbmRUYWlsXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFwcGVuZFRhaWwodGFpbCkge1xuICAgICAgaWYgKGlzU3RyaW5nKHRhaWwpKSB0YWlsID0gbmV3IENvbnRpbnVvdXNUYWlsRGV0YWlscyhTdHJpbmcodGFpbCkpO1xuICAgICAgcmV0dXJuIHRhaWwuYXBwZW5kVG8odGhpcyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImFwcGVuZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhcHBlbmQoc3RyLCBmbGFncywgdGFpbCkge1xuICAgICAgdmFyIGRldGFpbHMgPSB0aGlzLl9hcHBlbmRDaGFyKHN0ciwgZmxhZ3MpO1xuXG4gICAgICBpZiAodGFpbCAhPSBudWxsKSB7XG4gICAgICAgIGRldGFpbHMudGFpbFNoaWZ0ICs9IHRoaXMuYXBwZW5kVGFpbCh0YWlsKS50YWlsU2hpZnQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkZXRhaWxzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJkb0NvbW1pdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkb0NvbW1pdCgpIHt9XG4gIH0sIHtcbiAgICBrZXk6IFwidmFsdWVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidW5tYXNrZWRWYWx1ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuaXNVbm1hc2tpbmcgPyB0aGlzLnZhbHVlIDogJyc7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImlzQ29tcGxldGVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzdGF0ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgX3ZhbHVlOiB0aGlzLl92YWx1ZSxcbiAgICAgICAgX2lzUmF3SW5wdXQ6IHRoaXMuX2lzUmF3SW5wdXRcbiAgICAgIH07XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldChzdGF0ZSkge1xuICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBzdGF0ZSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFBhdHRlcm5GaXhlZERlZmluaXRpb247XG59KCk7XG5cbnZhciBDaHVua3NUYWlsRGV0YWlscyA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIC8qKiAqL1xuICBmdW5jdGlvbiBDaHVua3NUYWlsRGV0YWlscygpIHtcbiAgICB2YXIgY2h1bmtzID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBbXTtcbiAgICB2YXIgZnJvbSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogMDtcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDaHVua3NUYWlsRGV0YWlscyk7XG5cbiAgICB0aGlzLmNodW5rcyA9IGNodW5rcztcbiAgICB0aGlzLmZyb20gPSBmcm9tO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKENodW5rc1RhaWxEZXRhaWxzLCBbe1xuICAgIGtleTogXCJ0b1N0cmluZ1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICAgIHJldHVybiB0aGlzLmNodW5rcy5tYXAoU3RyaW5nKS5qb2luKCcnKTtcbiAgICB9IC8vICRGbG93Rml4TWUgbm8gaWRlYXNcblxuICB9LCB7XG4gICAga2V5OiBcImV4dGVuZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBleHRlbmQodGFpbENodW5rKSB7XG4gICAgICBpZiAoIVN0cmluZyh0YWlsQ2h1bmspKSByZXR1cm47XG4gICAgICBpZiAoaXNTdHJpbmcodGFpbENodW5rKSkgdGFpbENodW5rID0gbmV3IENvbnRpbnVvdXNUYWlsRGV0YWlscyhTdHJpbmcodGFpbENodW5rKSk7XG4gICAgICB2YXIgbGFzdENodW5rID0gdGhpcy5jaHVua3NbdGhpcy5jaHVua3MubGVuZ3RoIC0gMV07XG4gICAgICB2YXIgZXh0ZW5kTGFzdCA9IGxhc3RDaHVuayAmJiAoIC8vIGlmIHN0b3BzIGFyZSBzYW1lIG9yIHRhaWwgaGFzIG5vIHN0b3BcbiAgICAgIGxhc3RDaHVuay5zdG9wID09PSB0YWlsQ2h1bmsuc3RvcCB8fCB0YWlsQ2h1bmsuc3RvcCA9PSBudWxsKSAmJiAvLyBpZiB0YWlsIGNodW5rIGdvZXMganVzdCBhZnRlciBsYXN0IGNodW5rXG4gICAgICB0YWlsQ2h1bmsuZnJvbSA9PT0gbGFzdENodW5rLmZyb20gKyBsYXN0Q2h1bmsudG9TdHJpbmcoKS5sZW5ndGg7XG5cbiAgICAgIGlmICh0YWlsQ2h1bmsgaW5zdGFuY2VvZiBDb250aW51b3VzVGFpbERldGFpbHMpIHtcbiAgICAgICAgLy8gY2hlY2sgdGhlIGFiaWxpdHkgdG8gZXh0ZW5kIHByZXZpb3VzIGNodW5rXG4gICAgICAgIGlmIChleHRlbmRMYXN0KSB7XG4gICAgICAgICAgLy8gZXh0ZW5kIHByZXZpb3VzIGNodW5rXG4gICAgICAgICAgbGFzdENodW5rLmV4dGVuZCh0YWlsQ2h1bmsudG9TdHJpbmcoKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gYXBwZW5kIG5ldyBjaHVua1xuICAgICAgICAgIHRoaXMuY2h1bmtzLnB1c2godGFpbENodW5rKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0YWlsQ2h1bmsgaW5zdGFuY2VvZiBDaHVua3NUYWlsRGV0YWlscykge1xuICAgICAgICBpZiAodGFpbENodW5rLnN0b3AgPT0gbnVsbCkge1xuICAgICAgICAgIC8vIHVud3JhcCBmbG9hdGluZyBjaHVua3MgdG8gcGFyZW50LCBrZWVwaW5nIGBmcm9tYCBwb3NcbiAgICAgICAgICB2YXIgZmlyc3RUYWlsQ2h1bms7XG5cbiAgICAgICAgICB3aGlsZSAodGFpbENodW5rLmNodW5rcy5sZW5ndGggJiYgdGFpbENodW5rLmNodW5rc1swXS5zdG9wID09IG51bGwpIHtcbiAgICAgICAgICAgIGZpcnN0VGFpbENodW5rID0gdGFpbENodW5rLmNodW5rcy5zaGlmdCgpO1xuICAgICAgICAgICAgZmlyc3RUYWlsQ2h1bmsuZnJvbSArPSB0YWlsQ2h1bmsuZnJvbTtcbiAgICAgICAgICAgIHRoaXMuZXh0ZW5kKGZpcnN0VGFpbENodW5rKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gLy8gaWYgdGFpbCBjaHVuayBzdGlsbCBoYXMgdmFsdWVcblxuXG4gICAgICAgIGlmICh0YWlsQ2h1bmsudG9TdHJpbmcoKSkge1xuICAgICAgICAgIC8vIGlmIGNodW5rcyBjb250YWlucyBzdG9wcywgdGhlbiBwb3B1cCBzdG9wIHRvIGNvbnRhaW5lclxuICAgICAgICAgIHRhaWxDaHVuay5zdG9wID0gdGFpbENodW5rLmJsb2NrSW5kZXg7XG4gICAgICAgICAgdGhpcy5jaHVua3MucHVzaCh0YWlsQ2h1bmspO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImFwcGVuZFRvXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFwcGVuZFRvKG1hc2tlZCkge1xuICAgICAgaWYgKCEobWFza2VkIGluc3RhbmNlb2YgZy5JTWFzay5NYXNrZWRQYXR0ZXJuKSkge1xuICAgICAgICB2YXIgdGFpbCA9IG5ldyBDb250aW51b3VzVGFpbERldGFpbHModGhpcy50b1N0cmluZygpKTtcbiAgICAgICAgcmV0dXJuIHRhaWwuYXBwZW5kVG8obWFza2VkKTtcbiAgICAgIH1cblxuICAgICAgdmFyIGRldGFpbHMgPSBuZXcgQ2hhbmdlRGV0YWlscygpO1xuXG4gICAgICBmb3IgKHZhciBjaSA9IDA7IGNpIDwgdGhpcy5jaHVua3MubGVuZ3RoICYmICFkZXRhaWxzLnNraXA7ICsrY2kpIHtcbiAgICAgICAgdmFyIGNodW5rID0gdGhpcy5jaHVua3NbY2ldO1xuXG4gICAgICAgIHZhciBsYXN0QmxvY2tJdGVyID0gbWFza2VkLl9tYXBQb3NUb0Jsb2NrKG1hc2tlZC52YWx1ZS5sZW5ndGgpO1xuXG4gICAgICAgIHZhciBzdG9wID0gY2h1bmsuc3RvcDtcbiAgICAgICAgdmFyIGNodW5rQmxvY2sgPSB2b2lkIDA7XG5cbiAgICAgICAgaWYgKHN0b3AgJiYgKCAvLyBpZiBibG9jayBub3QgZm91bmQgb3Igc3RvcCBpcyBiZWhpbmQgbGFzdEJsb2NrXG4gICAgICAgICFsYXN0QmxvY2tJdGVyIHx8IGxhc3RCbG9ja0l0ZXIuaW5kZXggPD0gc3RvcCkpIHtcbiAgICAgICAgICBpZiAoY2h1bmsgaW5zdGFuY2VvZiBDaHVua3NUYWlsRGV0YWlscyB8fCAvLyBmb3IgY29udGludW91cyBibG9jayBhbHNvIGNoZWNrIGlmIHN0b3AgaXMgZXhpc3RcbiAgICAgICAgICBtYXNrZWQuX3N0b3BzLmluZGV4T2Yoc3RvcCkgPj0gMCkge1xuICAgICAgICAgICAgZGV0YWlscy5hZ2dyZWdhdGUobWFza2VkLl9hcHBlbmRQbGFjZWhvbGRlcihzdG9wKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY2h1bmtCbG9jayA9IGNodW5rIGluc3RhbmNlb2YgQ2h1bmtzVGFpbERldGFpbHMgJiYgbWFza2VkLl9ibG9ja3Nbc3RvcF07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2h1bmtCbG9jaykge1xuICAgICAgICAgIHZhciB0YWlsRGV0YWlscyA9IGNodW5rQmxvY2suYXBwZW5kVGFpbChjaHVuayk7XG4gICAgICAgICAgdGFpbERldGFpbHMuc2tpcCA9IGZhbHNlOyAvLyBhbHdheXMgaWdub3JlIHNraXAsIGl0IHdpbGwgYmUgc2V0IG9uIGxhc3RcblxuICAgICAgICAgIGRldGFpbHMuYWdncmVnYXRlKHRhaWxEZXRhaWxzKTtcbiAgICAgICAgICBtYXNrZWQuX3ZhbHVlICs9IHRhaWxEZXRhaWxzLmluc2VydGVkOyAvLyBnZXQgbm90IGluc2VydGVkIGNoYXJzXG5cbiAgICAgICAgICB2YXIgcmVtYWluQ2hhcnMgPSBjaHVuay50b1N0cmluZygpLnNsaWNlKHRhaWxEZXRhaWxzLnJhd0luc2VydGVkLmxlbmd0aCk7XG4gICAgICAgICAgaWYgKHJlbWFpbkNoYXJzKSBkZXRhaWxzLmFnZ3JlZ2F0ZShtYXNrZWQuYXBwZW5kKHJlbWFpbkNoYXJzLCB7XG4gICAgICAgICAgICB0YWlsOiB0cnVlXG4gICAgICAgICAgfSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRldGFpbHMuYWdncmVnYXRlKG1hc2tlZC5hcHBlbmQoY2h1bmsudG9TdHJpbmcoKSwge1xuICAgICAgICAgICAgdGFpbDogdHJ1ZVxuICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGRldGFpbHM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNoaWZ0QmVmb3JlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNoaWZ0QmVmb3JlKHBvcykge1xuICAgICAgaWYgKHRoaXMuZnJvbSA+PSBwb3MgfHwgIXRoaXMuY2h1bmtzLmxlbmd0aCkgcmV0dXJuICcnO1xuICAgICAgdmFyIGNodW5rU2hpZnRQb3MgPSBwb3MgLSB0aGlzLmZyb207XG4gICAgICB2YXIgY2kgPSAwO1xuXG4gICAgICB3aGlsZSAoY2kgPCB0aGlzLmNodW5rcy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGNodW5rID0gdGhpcy5jaHVua3NbY2ldO1xuICAgICAgICB2YXIgc2hpZnRDaGFyID0gY2h1bmsuc2hpZnRCZWZvcmUoY2h1bmtTaGlmdFBvcyk7XG5cbiAgICAgICAgaWYgKGNodW5rLnRvU3RyaW5nKCkpIHtcbiAgICAgICAgICAvLyBjaHVuayBzdGlsbCBjb250YWlucyB2YWx1ZVxuICAgICAgICAgIC8vIGJ1dCBub3Qgc2hpZnRlZCAtIG1lYW5zIG5vIG1vcmUgYXZhaWxhYmxlIGNoYXJzIHRvIHNoaWZ0XG4gICAgICAgICAgaWYgKCFzaGlmdENoYXIpIGJyZWFrO1xuICAgICAgICAgICsrY2k7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gY2xlYW4gaWYgY2h1bmsgaGFzIG5vIHZhbHVlXG4gICAgICAgICAgdGhpcy5jaHVua3Muc3BsaWNlKGNpLCAxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzaGlmdENoYXIpIHJldHVybiBzaGlmdENoYXI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic3RhdGVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGNodW5rczogdGhpcy5jaHVua3MubWFwKGZ1bmN0aW9uIChjKSB7XG4gICAgICAgICAgcmV0dXJuIGMuc3RhdGU7XG4gICAgICAgIH0pLFxuICAgICAgICBmcm9tOiB0aGlzLmZyb20sXG4gICAgICAgIHN0b3A6IHRoaXMuc3RvcCxcbiAgICAgICAgYmxvY2tJbmRleDogdGhpcy5ibG9ja0luZGV4XG4gICAgICB9O1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQoc3RhdGUpIHtcbiAgICAgIHZhciBjaHVua3MgPSBzdGF0ZS5jaHVua3MsXG4gICAgICAgICAgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoc3RhdGUsIFtcImNodW5rc1wiXSk7XG5cbiAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgcHJvcHMpO1xuICAgICAgdGhpcy5jaHVua3MgPSBjaHVua3MubWFwKGZ1bmN0aW9uIChjc3RhdGUpIHtcbiAgICAgICAgdmFyIGNodW5rID0gXCJjaHVua3NcIiBpbiBjc3RhdGUgPyBuZXcgQ2h1bmtzVGFpbERldGFpbHMoKSA6IG5ldyBDb250aW51b3VzVGFpbERldGFpbHMoKTsgLy8gJEZsb3dGaXhNZSBhbHJlYWR5IGNoZWNrZWQgYWJvdmVcblxuICAgICAgICBjaHVuay5zdGF0ZSA9IGNzdGF0ZTtcbiAgICAgICAgcmV0dXJuIGNodW5rO1xuICAgICAgfSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIENodW5rc1RhaWxEZXRhaWxzO1xufSgpO1xuXG4vKipcclxuICBQYXR0ZXJuIG1hc2tcclxuICBAcGFyYW0ge09iamVjdH0gb3B0c1xyXG4gIEBwYXJhbSB7T2JqZWN0fSBvcHRzLmJsb2Nrc1xyXG4gIEBwYXJhbSB7T2JqZWN0fSBvcHRzLmRlZmluaXRpb25zXHJcbiAgQHBhcmFtIHtzdHJpbmd9IG9wdHMucGxhY2Vob2xkZXJDaGFyXHJcbiAgQHBhcmFtIHtib29sZWFufSBvcHRzLmxhenlcclxuKi9cbnZhciBNYXNrZWRQYXR0ZXJuID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfTWFza2VkKSB7XG4gIF9pbmhlcml0cyhNYXNrZWRQYXR0ZXJuLCBfTWFza2VkKTtcblxuICAvKiogKi9cblxuICAvKiogKi9cblxuICAvKiogU2luZ2xlIGNoYXIgZm9yIGVtcHR5IGlucHV0ICovXG5cbiAgLyoqIFNob3cgcGxhY2Vob2xkZXIgb25seSB3aGVuIG5lZWRlZCAqL1xuICBmdW5jdGlvbiBNYXNrZWRQYXR0ZXJuKCkge1xuICAgIHZhciBvcHRzID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNYXNrZWRQYXR0ZXJuKTtcblxuICAgIC8vIFRPRE8gdHlwZSAkU2hhcGU8TWFza2VkUGF0dGVybk9wdGlvbnM+PXt9IGRvZXMgbm90IHdvcmtcbiAgICBvcHRzLmRlZmluaXRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgREVGQVVMVF9JTlBVVF9ERUZJTklUSU9OUywgb3B0cy5kZWZpbml0aW9ucyk7XG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9nZXRQcm90b3R5cGVPZihNYXNrZWRQYXR0ZXJuKS5jYWxsKHRoaXMsIE9iamVjdC5hc3NpZ24oe30sIE1hc2tlZFBhdHRlcm4uREVGQVVMVFMsIHt9LCBvcHRzKSkpO1xuICB9XG4gIC8qKlxyXG4gICAgQG92ZXJyaWRlXHJcbiAgICBAcGFyYW0ge09iamVjdH0gb3B0c1xyXG4gICovXG5cblxuICBfY3JlYXRlQ2xhc3MoTWFza2VkUGF0dGVybiwgW3tcbiAgICBrZXk6IFwiX3VwZGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfdXBkYXRlKCkge1xuICAgICAgdmFyIG9wdHMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICAgICAgb3B0cy5kZWZpbml0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuZGVmaW5pdGlvbnMsIG9wdHMuZGVmaW5pdGlvbnMpO1xuXG4gICAgICBfZ2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWRQYXR0ZXJuLnByb3RvdHlwZSksIFwiX3VwZGF0ZVwiLCB0aGlzKS5jYWxsKHRoaXMsIG9wdHMpO1xuXG4gICAgICB0aGlzLl9yZWJ1aWxkTWFzaygpO1xuICAgIH1cbiAgICAvKiogKi9cblxuICB9LCB7XG4gICAga2V5OiBcIl9yZWJ1aWxkTWFza1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfcmVidWlsZE1hc2soKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICB2YXIgZGVmcyA9IHRoaXMuZGVmaW5pdGlvbnM7XG4gICAgICB0aGlzLl9ibG9ja3MgPSBbXTtcbiAgICAgIHRoaXMuX3N0b3BzID0gW107XG4gICAgICB0aGlzLl9tYXNrZWRCbG9ja3MgPSB7fTtcbiAgICAgIHZhciBwYXR0ZXJuID0gdGhpcy5tYXNrO1xuICAgICAgaWYgKCFwYXR0ZXJuIHx8ICFkZWZzKSByZXR1cm47XG4gICAgICB2YXIgdW5tYXNraW5nQmxvY2sgPSBmYWxzZTtcbiAgICAgIHZhciBvcHRpb25hbEJsb2NrID0gZmFsc2U7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGF0dGVybi5sZW5ndGg7ICsraSkge1xuICAgICAgICBpZiAodGhpcy5ibG9ja3MpIHtcbiAgICAgICAgICB2YXIgX3JldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBwID0gcGF0dGVybi5zbGljZShpKTtcbiAgICAgICAgICAgIHZhciBiTmFtZXMgPSBPYmplY3Qua2V5cyhfdGhpcy5ibG9ja3MpLmZpbHRlcihmdW5jdGlvbiAoYk5hbWUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHAuaW5kZXhPZihiTmFtZSkgPT09IDA7XG4gICAgICAgICAgICB9KTsgLy8gb3JkZXIgYnkga2V5IGxlbmd0aFxuXG4gICAgICAgICAgICBiTmFtZXMuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgICByZXR1cm4gYi5sZW5ndGggLSBhLmxlbmd0aDtcbiAgICAgICAgICAgIH0pOyAvLyB1c2UgYmxvY2sgbmFtZSB3aXRoIG1heCBsZW5ndGhcblxuICAgICAgICAgICAgdmFyIGJOYW1lID0gYk5hbWVzWzBdO1xuXG4gICAgICAgICAgICBpZiAoYk5hbWUpIHtcbiAgICAgICAgICAgICAgdmFyIG1hc2tlZEJsb2NrID0gY3JlYXRlTWFzayhPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgICAgICBwYXJlbnQ6IF90aGlzLFxuICAgICAgICAgICAgICAgIGxhenk6IF90aGlzLmxhenksXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXJDaGFyOiBfdGhpcy5wbGFjZWhvbGRlckNoYXIsXG4gICAgICAgICAgICAgICAgb3ZlcndyaXRlOiBfdGhpcy5vdmVyd3JpdGVcbiAgICAgICAgICAgICAgfSwgX3RoaXMuYmxvY2tzW2JOYW1lXSkpO1xuXG4gICAgICAgICAgICAgIGlmIChtYXNrZWRCbG9jaykge1xuICAgICAgICAgICAgICAgIF90aGlzLl9ibG9ja3MucHVzaChtYXNrZWRCbG9jayk7IC8vIHN0b3JlIGJsb2NrIGluZGV4XG5cblxuICAgICAgICAgICAgICAgIGlmICghX3RoaXMuX21hc2tlZEJsb2Nrc1tiTmFtZV0pIF90aGlzLl9tYXNrZWRCbG9ja3NbYk5hbWVdID0gW107XG5cbiAgICAgICAgICAgICAgICBfdGhpcy5fbWFza2VkQmxvY2tzW2JOYW1lXS5wdXNoKF90aGlzLl9ibG9ja3MubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpICs9IGJOYW1lLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAgIHJldHVybiBcImNvbnRpbnVlXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSgpO1xuXG4gICAgICAgICAgaWYgKF9yZXQgPT09IFwiY29udGludWVcIikgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgY2hhciA9IHBhdHRlcm5baV07XG5cbiAgICAgICAgdmFyIF9pc0lucHV0ID0gY2hhciBpbiBkZWZzO1xuXG4gICAgICAgIGlmIChjaGFyID09PSBNYXNrZWRQYXR0ZXJuLlNUT1BfQ0hBUikge1xuICAgICAgICAgIHRoaXMuX3N0b3BzLnB1c2godGhpcy5fYmxvY2tzLmxlbmd0aCk7XG5cbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjaGFyID09PSAneycgfHwgY2hhciA9PT0gJ30nKSB7XG4gICAgICAgICAgdW5tYXNraW5nQmxvY2sgPSAhdW5tYXNraW5nQmxvY2s7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2hhciA9PT0gJ1snIHx8IGNoYXIgPT09ICddJykge1xuICAgICAgICAgIG9wdGlvbmFsQmxvY2sgPSAhb3B0aW9uYWxCbG9jaztcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjaGFyID09PSBNYXNrZWRQYXR0ZXJuLkVTQ0FQRV9DSEFSKSB7XG4gICAgICAgICAgKytpO1xuICAgICAgICAgIGNoYXIgPSBwYXR0ZXJuW2ldO1xuICAgICAgICAgIGlmICghY2hhcikgYnJlYWs7XG4gICAgICAgICAgX2lzSW5wdXQgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBkZWYgPSBfaXNJbnB1dCA/IG5ldyBQYXR0ZXJuSW5wdXREZWZpbml0aW9uKHtcbiAgICAgICAgICBwYXJlbnQ6IHRoaXMsXG4gICAgICAgICAgbGF6eTogdGhpcy5sYXp5LFxuICAgICAgICAgIHBsYWNlaG9sZGVyQ2hhcjogdGhpcy5wbGFjZWhvbGRlckNoYXIsXG4gICAgICAgICAgbWFzazogZGVmc1tjaGFyXSxcbiAgICAgICAgICBpc09wdGlvbmFsOiBvcHRpb25hbEJsb2NrXG4gICAgICAgIH0pIDogbmV3IFBhdHRlcm5GaXhlZERlZmluaXRpb24oe1xuICAgICAgICAgIGNoYXI6IGNoYXIsXG4gICAgICAgICAgaXNVbm1hc2tpbmc6IHVubWFza2luZ0Jsb2NrXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuX2Jsb2Nrcy5wdXNoKGRlZik7XG4gICAgICB9XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICBAb3ZlcnJpZGVcclxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJyZXNldFwiLFxuXG4gICAgLyoqXHJcbiAgICAgIEBvdmVycmlkZVxyXG4gICAgKi9cbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgICBfZ2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWRQYXR0ZXJuLnByb3RvdHlwZSksIFwicmVzZXRcIiwgdGhpcykuY2FsbCh0aGlzKTtcblxuICAgICAgdGhpcy5fYmxvY2tzLmZvckVhY2goZnVuY3Rpb24gKGIpIHtcbiAgICAgICAgcmV0dXJuIGIucmVzZXQoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcclxuICAgICAgQG92ZXJyaWRlXHJcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZG9Db21taXRcIixcblxuICAgIC8qKlxyXG4gICAgICBAb3ZlcnJpZGVcclxuICAgICovXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRvQ29tbWl0KCkge1xuICAgICAgdGhpcy5fYmxvY2tzLmZvckVhY2goZnVuY3Rpb24gKGIpIHtcbiAgICAgICAgcmV0dXJuIGIuZG9Db21taXQoKTtcbiAgICAgIH0pO1xuXG4gICAgICBfZ2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWRQYXR0ZXJuLnByb3RvdHlwZSksIFwiZG9Db21taXRcIiwgdGhpcykuY2FsbCh0aGlzKTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgIEBvdmVycmlkZVxyXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImFwcGVuZFRhaWxcIixcblxuICAgIC8qKlxyXG4gICAgICBAb3ZlcnJpZGVcclxuICAgICovXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFwcGVuZFRhaWwodGFpbCkge1xuICAgICAgcmV0dXJuIF9nZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZFBhdHRlcm4ucHJvdG90eXBlKSwgXCJhcHBlbmRUYWlsXCIsIHRoaXMpLmNhbGwodGhpcywgdGFpbCkuYWdncmVnYXRlKHRoaXMuX2FwcGVuZFBsYWNlaG9sZGVyKCkpO1xuICAgIH1cbiAgICAvKipcclxuICAgICAgQG92ZXJyaWRlXHJcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiX2FwcGVuZENoYXJSYXdcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2FwcGVuZENoYXJSYXcoY2gpIHtcbiAgICAgIHZhciBmbGFncyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgICBjaCA9IHRoaXMuZG9QcmVwYXJlKGNoLCBmbGFncyk7XG5cbiAgICAgIHZhciBibG9ja0l0ZXIgPSB0aGlzLl9tYXBQb3NUb0Jsb2NrKHRoaXMudmFsdWUubGVuZ3RoKTtcblxuICAgICAgdmFyIGRldGFpbHMgPSBuZXcgQ2hhbmdlRGV0YWlscygpO1xuICAgICAgaWYgKCFibG9ja0l0ZXIpIHJldHVybiBkZXRhaWxzO1xuXG4gICAgICBmb3IgKHZhciBiaSA9IGJsb2NrSXRlci5pbmRleDs7ICsrYmkpIHtcbiAgICAgICAgdmFyIF9ibG9jayA9IHRoaXMuX2Jsb2Nrc1tiaV07XG4gICAgICAgIGlmICghX2Jsb2NrKSBicmVhaztcblxuICAgICAgICB2YXIgYmxvY2tEZXRhaWxzID0gX2Jsb2NrLl9hcHBlbmRDaGFyKGNoLCBmbGFncyk7XG5cbiAgICAgICAgdmFyIHNraXAgPSBibG9ja0RldGFpbHMuc2tpcDtcbiAgICAgICAgZGV0YWlscy5hZ2dyZWdhdGUoYmxvY2tEZXRhaWxzKTtcbiAgICAgICAgaWYgKHNraXAgfHwgYmxvY2tEZXRhaWxzLnJhd0luc2VydGVkKSBicmVhazsgLy8gZ28gbmV4dCBjaGFyXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkZXRhaWxzO1xuICAgIH1cbiAgICAvKipcclxuICAgICAgQG92ZXJyaWRlXHJcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZXh0cmFjdFRhaWxcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZXh0cmFjdFRhaWwoKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgdmFyIGZyb21Qb3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IDA7XG4gICAgICB2YXIgdG9Qb3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHRoaXMudmFsdWUubGVuZ3RoO1xuICAgICAgdmFyIGNodW5rVGFpbCA9IG5ldyBDaHVua3NUYWlsRGV0YWlscygpO1xuICAgICAgaWYgKGZyb21Qb3MgPT09IHRvUG9zKSByZXR1cm4gY2h1bmtUYWlsO1xuXG4gICAgICB0aGlzLl9mb3JFYWNoQmxvY2tzSW5SYW5nZShmcm9tUG9zLCB0b1BvcywgZnVuY3Rpb24gKGIsIGJpLCBiRnJvbVBvcywgYlRvUG9zKSB7XG4gICAgICAgIHZhciBibG9ja0NodW5rID0gYi5leHRyYWN0VGFpbChiRnJvbVBvcywgYlRvUG9zKTtcbiAgICAgICAgYmxvY2tDaHVuay5zdG9wID0gX3RoaXMyLl9maW5kU3RvcEJlZm9yZShiaSk7XG4gICAgICAgIGJsb2NrQ2h1bmsuZnJvbSA9IF90aGlzMi5fYmxvY2tTdGFydFBvcyhiaSk7XG4gICAgICAgIGlmIChibG9ja0NodW5rIGluc3RhbmNlb2YgQ2h1bmtzVGFpbERldGFpbHMpIGJsb2NrQ2h1bmsuYmxvY2tJbmRleCA9IGJpO1xuICAgICAgICBjaHVua1RhaWwuZXh0ZW5kKGJsb2NrQ2h1bmspO1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBjaHVua1RhaWw7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICBAb3ZlcnJpZGVcclxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJleHRyYWN0SW5wdXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZXh0cmFjdElucHV0KCkge1xuICAgICAgdmFyIGZyb21Qb3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IDA7XG4gICAgICB2YXIgdG9Qb3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHRoaXMudmFsdWUubGVuZ3RoO1xuICAgICAgdmFyIGZsYWdzID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fTtcbiAgICAgIGlmIChmcm9tUG9zID09PSB0b1BvcykgcmV0dXJuICcnO1xuICAgICAgdmFyIGlucHV0ID0gJyc7XG5cbiAgICAgIHRoaXMuX2ZvckVhY2hCbG9ja3NJblJhbmdlKGZyb21Qb3MsIHRvUG9zLCBmdW5jdGlvbiAoYiwgXywgZnJvbVBvcywgdG9Qb3MpIHtcbiAgICAgICAgaW5wdXQgKz0gYi5leHRyYWN0SW5wdXQoZnJvbVBvcywgdG9Qb3MsIGZsYWdzKTtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gaW5wdXQ7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIl9maW5kU3RvcEJlZm9yZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfZmluZFN0b3BCZWZvcmUoYmxvY2tJbmRleCkge1xuICAgICAgdmFyIHN0b3BCZWZvcmU7XG5cbiAgICAgIGZvciAodmFyIHNpID0gMDsgc2kgPCB0aGlzLl9zdG9wcy5sZW5ndGg7ICsrc2kpIHtcbiAgICAgICAgdmFyIHN0b3AgPSB0aGlzLl9zdG9wc1tzaV07XG4gICAgICAgIGlmIChzdG9wIDw9IGJsb2NrSW5kZXgpIHN0b3BCZWZvcmUgPSBzdG9wO2Vsc2UgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzdG9wQmVmb3JlO1xuICAgIH1cbiAgICAvKiogQXBwZW5kcyBwbGFjZWhvbGRlciBkZXBlbmRpbmcgb24gbGF6aW5lc3MgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIl9hcHBlbmRQbGFjZWhvbGRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfYXBwZW5kUGxhY2Vob2xkZXIodG9CbG9ja0luZGV4KSB7XG4gICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgdmFyIGRldGFpbHMgPSBuZXcgQ2hhbmdlRGV0YWlscygpO1xuICAgICAgaWYgKHRoaXMubGF6eSAmJiB0b0Jsb2NrSW5kZXggPT0gbnVsbCkgcmV0dXJuIGRldGFpbHM7XG5cbiAgICAgIHZhciBzdGFydEJsb2NrSXRlciA9IHRoaXMuX21hcFBvc1RvQmxvY2sodGhpcy52YWx1ZS5sZW5ndGgpO1xuXG4gICAgICBpZiAoIXN0YXJ0QmxvY2tJdGVyKSByZXR1cm4gZGV0YWlscztcbiAgICAgIHZhciBzdGFydEJsb2NrSW5kZXggPSBzdGFydEJsb2NrSXRlci5pbmRleDtcbiAgICAgIHZhciBlbmRCbG9ja0luZGV4ID0gdG9CbG9ja0luZGV4ICE9IG51bGwgPyB0b0Jsb2NrSW5kZXggOiB0aGlzLl9ibG9ja3MubGVuZ3RoO1xuXG4gICAgICB0aGlzLl9ibG9ja3Muc2xpY2Uoc3RhcnRCbG9ja0luZGV4LCBlbmRCbG9ja0luZGV4KS5mb3JFYWNoKGZ1bmN0aW9uIChiKSB7XG4gICAgICAgIGlmICghYi5sYXp5IHx8IHRvQmxvY2tJbmRleCAhPSBudWxsKSB7XG4gICAgICAgICAgLy8gJEZsb3dGaXhNZSBgX2Jsb2Nrc2AgbWF5IG5vdCBiZSBwcmVzZW50XG4gICAgICAgICAgdmFyIGFyZ3MgPSBiLl9ibG9ja3MgIT0gbnVsbCA/IFtiLl9ibG9ja3MubGVuZ3RoXSA6IFtdO1xuXG4gICAgICAgICAgdmFyIGJEZXRhaWxzID0gYi5fYXBwZW5kUGxhY2Vob2xkZXIuYXBwbHkoYiwgYXJncyk7XG5cbiAgICAgICAgICBfdGhpczMuX3ZhbHVlICs9IGJEZXRhaWxzLmluc2VydGVkO1xuICAgICAgICAgIGRldGFpbHMuYWdncmVnYXRlKGJEZXRhaWxzKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBkZXRhaWxzO1xuICAgIH1cbiAgICAvKiogRmluZHMgYmxvY2sgaW4gcG9zICovXG5cbiAgfSwge1xuICAgIGtleTogXCJfbWFwUG9zVG9CbG9ja1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfbWFwUG9zVG9CbG9jayhwb3MpIHtcbiAgICAgIHZhciBhY2NWYWwgPSAnJztcblxuICAgICAgZm9yICh2YXIgYmkgPSAwOyBiaSA8IHRoaXMuX2Jsb2Nrcy5sZW5ndGg7ICsrYmkpIHtcbiAgICAgICAgdmFyIF9ibG9jazIgPSB0aGlzLl9ibG9ja3NbYmldO1xuICAgICAgICB2YXIgYmxvY2tTdGFydFBvcyA9IGFjY1ZhbC5sZW5ndGg7XG4gICAgICAgIGFjY1ZhbCArPSBfYmxvY2syLnZhbHVlO1xuXG4gICAgICAgIGlmIChwb3MgPD0gYWNjVmFsLmxlbmd0aCkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpbmRleDogYmksXG4gICAgICAgICAgICBvZmZzZXQ6IHBvcyAtIGJsb2NrU3RhcnRQb3NcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC8qKiAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiX2Jsb2NrU3RhcnRQb3NcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2Jsb2NrU3RhcnRQb3MoYmxvY2tJbmRleCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2Jsb2Nrcy5zbGljZSgwLCBibG9ja0luZGV4KS5yZWR1Y2UoZnVuY3Rpb24gKHBvcywgYikge1xuICAgICAgICByZXR1cm4gcG9zICs9IGIudmFsdWUubGVuZ3RoO1xuICAgICAgfSwgMCk7XG4gICAgfVxuICAgIC8qKiAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiX2ZvckVhY2hCbG9ja3NJblJhbmdlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9mb3JFYWNoQmxvY2tzSW5SYW5nZShmcm9tUG9zKSB7XG4gICAgICB2YXIgdG9Qb3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHRoaXMudmFsdWUubGVuZ3RoO1xuICAgICAgdmFyIGZuID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgPyBhcmd1bWVudHNbMl0gOiB1bmRlZmluZWQ7XG5cbiAgICAgIHZhciBmcm9tQmxvY2tJdGVyID0gdGhpcy5fbWFwUG9zVG9CbG9jayhmcm9tUG9zKTtcblxuICAgICAgaWYgKGZyb21CbG9ja0l0ZXIpIHtcbiAgICAgICAgdmFyIHRvQmxvY2tJdGVyID0gdGhpcy5fbWFwUG9zVG9CbG9jayh0b1Bvcyk7IC8vIHByb2Nlc3MgZmlyc3QgYmxvY2tcblxuXG4gICAgICAgIHZhciBpc1NhbWVCbG9jayA9IHRvQmxvY2tJdGVyICYmIGZyb21CbG9ja0l0ZXIuaW5kZXggPT09IHRvQmxvY2tJdGVyLmluZGV4O1xuICAgICAgICB2YXIgZnJvbUJsb2NrU3RhcnRQb3MgPSBmcm9tQmxvY2tJdGVyLm9mZnNldDtcbiAgICAgICAgdmFyIGZyb21CbG9ja0VuZFBvcyA9IHRvQmxvY2tJdGVyICYmIGlzU2FtZUJsb2NrID8gdG9CbG9ja0l0ZXIub2Zmc2V0IDogdGhpcy5fYmxvY2tzW2Zyb21CbG9ja0l0ZXIuaW5kZXhdLnZhbHVlLmxlbmd0aDtcbiAgICAgICAgZm4odGhpcy5fYmxvY2tzW2Zyb21CbG9ja0l0ZXIuaW5kZXhdLCBmcm9tQmxvY2tJdGVyLmluZGV4LCBmcm9tQmxvY2tTdGFydFBvcywgZnJvbUJsb2NrRW5kUG9zKTtcblxuICAgICAgICBpZiAodG9CbG9ja0l0ZXIgJiYgIWlzU2FtZUJsb2NrKSB7XG4gICAgICAgICAgLy8gcHJvY2VzcyBpbnRlcm1lZGlhdGUgYmxvY2tzXG4gICAgICAgICAgZm9yICh2YXIgYmkgPSBmcm9tQmxvY2tJdGVyLmluZGV4ICsgMTsgYmkgPCB0b0Jsb2NrSXRlci5pbmRleDsgKytiaSkge1xuICAgICAgICAgICAgZm4odGhpcy5fYmxvY2tzW2JpXSwgYmksIDAsIHRoaXMuX2Jsb2Nrc1tiaV0udmFsdWUubGVuZ3RoKTtcbiAgICAgICAgICB9IC8vIHByb2Nlc3MgbGFzdCBibG9ja1xuXG5cbiAgICAgICAgICBmbih0aGlzLl9ibG9ja3NbdG9CbG9ja0l0ZXIuaW5kZXhdLCB0b0Jsb2NrSXRlci5pbmRleCwgMCwgdG9CbG9ja0l0ZXIub2Zmc2V0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAvKipcclxuICAgICAgQG92ZXJyaWRlXHJcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwicmVtb3ZlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHZhciBmcm9tUG9zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAwO1xuICAgICAgdmFyIHRvUG9zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB0aGlzLnZhbHVlLmxlbmd0aDtcblxuICAgICAgdmFyIHJlbW92ZURldGFpbHMgPSBfZ2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWRQYXR0ZXJuLnByb3RvdHlwZSksIFwicmVtb3ZlXCIsIHRoaXMpLmNhbGwodGhpcywgZnJvbVBvcywgdG9Qb3MpO1xuXG4gICAgICB0aGlzLl9mb3JFYWNoQmxvY2tzSW5SYW5nZShmcm9tUG9zLCB0b1BvcywgZnVuY3Rpb24gKGIsIF8sIGJGcm9tUG9zLCBiVG9Qb3MpIHtcbiAgICAgICAgcmVtb3ZlRGV0YWlscy5hZ2dyZWdhdGUoYi5yZW1vdmUoYkZyb21Qb3MsIGJUb1BvcykpO1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiByZW1vdmVEZXRhaWxzO1xuICAgIH1cbiAgICAvKipcclxuICAgICAgQG92ZXJyaWRlXHJcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwibmVhcmVzdElucHV0UG9zXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG5lYXJlc3RJbnB1dFBvcyhjdXJzb3JQb3MpIHtcbiAgICAgIHZhciBkaXJlY3Rpb24gPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IERJUkVDVElPTi5OT05FO1xuICAgICAgLy8gVE9ETyByZWZhY3RvciAtIGV4dHJhY3QgYWxpZ25ibG9ja1xuICAgICAgdmFyIGJlZ2luQmxvY2tEYXRhID0gdGhpcy5fbWFwUG9zVG9CbG9jayhjdXJzb3JQb3MpIHx8IHtcbiAgICAgICAgaW5kZXg6IDAsXG4gICAgICAgIG9mZnNldDogMFxuICAgICAgfTtcbiAgICAgIHZhciBiZWdpbkJsb2NrT2Zmc2V0ID0gYmVnaW5CbG9ja0RhdGEub2Zmc2V0LFxuICAgICAgICAgIGJlZ2luQmxvY2tJbmRleCA9IGJlZ2luQmxvY2tEYXRhLmluZGV4O1xuICAgICAgdmFyIGJlZ2luQmxvY2sgPSB0aGlzLl9ibG9ja3NbYmVnaW5CbG9ja0luZGV4XTtcbiAgICAgIGlmICghYmVnaW5CbG9jaykgcmV0dXJuIGN1cnNvclBvcztcbiAgICAgIHZhciBiZWdpbkJsb2NrQ3Vyc29yUG9zID0gYmVnaW5CbG9ja09mZnNldDsgLy8gaWYgcG9zaXRpb24gaW5zaWRlIGJsb2NrIC0gdHJ5IHRvIGFkanVzdCBpdFxuXG4gICAgICBpZiAoYmVnaW5CbG9ja0N1cnNvclBvcyAhPT0gMCAmJiBiZWdpbkJsb2NrQ3Vyc29yUG9zIDwgYmVnaW5CbG9jay52YWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgYmVnaW5CbG9ja0N1cnNvclBvcyA9IGJlZ2luQmxvY2submVhcmVzdElucHV0UG9zKGJlZ2luQmxvY2tPZmZzZXQsIGZvcmNlRGlyZWN0aW9uKGRpcmVjdGlvbikpO1xuICAgICAgfVxuXG4gICAgICB2YXIgY3Vyc29yQXRSaWdodCA9IGJlZ2luQmxvY2tDdXJzb3JQb3MgPT09IGJlZ2luQmxvY2sudmFsdWUubGVuZ3RoO1xuICAgICAgdmFyIGN1cnNvckF0TGVmdCA9IGJlZ2luQmxvY2tDdXJzb3JQb3MgPT09IDA7IC8vICBjdXJzb3IgaXMgSU5TSURFIGZpcnN0IGJsb2NrIChub3QgYXQgYm91bmRzKVxuXG4gICAgICBpZiAoIWN1cnNvckF0TGVmdCAmJiAhY3Vyc29yQXRSaWdodCkgcmV0dXJuIHRoaXMuX2Jsb2NrU3RhcnRQb3MoYmVnaW5CbG9ja0luZGV4KSArIGJlZ2luQmxvY2tDdXJzb3JQb3M7XG4gICAgICB2YXIgc2VhcmNoQmxvY2tJbmRleCA9IGN1cnNvckF0UmlnaHQgPyBiZWdpbkJsb2NrSW5kZXggKyAxIDogYmVnaW5CbG9ja0luZGV4O1xuXG4gICAgICBpZiAoZGlyZWN0aW9uID09PSBESVJFQ1RJT04uTk9ORSkge1xuICAgICAgICAvLyBOT05FIGRpcmVjdGlvbiB1c2VkIHRvIGNhbGN1bGF0ZSBzdGFydCBpbnB1dCBwb3NpdGlvbiBpZiBubyBjaGFycyB3ZXJlIHJlbW92ZWRcbiAgICAgICAgLy8gRk9SIE5PTkU6XG4gICAgICAgIC8vIC1cbiAgICAgICAgLy8gaW5wdXR8YW55XG4gICAgICAgIC8vIC0+XG4gICAgICAgIC8vICBhbnl8aW5wdXRcbiAgICAgICAgLy8gPC1cbiAgICAgICAgLy8gIGZpbGxlZC1pbnB1dHxhbnlcbiAgICAgICAgLy8gY2hlY2sgaWYgZmlyc3QgYmxvY2sgYXQgbGVmdCBpcyBpbnB1dFxuICAgICAgICBpZiAoc2VhcmNoQmxvY2tJbmRleCA+IDApIHtcbiAgICAgICAgICB2YXIgYmxvY2tJbmRleEF0TGVmdCA9IHNlYXJjaEJsb2NrSW5kZXggLSAxO1xuICAgICAgICAgIHZhciBibG9ja0F0TGVmdCA9IHRoaXMuX2Jsb2Nrc1tibG9ja0luZGV4QXRMZWZ0XTtcbiAgICAgICAgICB2YXIgYmxvY2tJbnB1dFBvcyA9IGJsb2NrQXRMZWZ0Lm5lYXJlc3RJbnB1dFBvcygwLCBESVJFQ1RJT04uTk9ORSk7IC8vIGlzIGlucHV0XG5cbiAgICAgICAgICBpZiAoIWJsb2NrQXRMZWZ0LnZhbHVlLmxlbmd0aCB8fCBibG9ja0lucHV0UG9zICE9PSBibG9ja0F0TGVmdC52YWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9ibG9ja1N0YXJ0UG9zKHNlYXJjaEJsb2NrSW5kZXgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSAvLyAtPlxuXG5cbiAgICAgICAgdmFyIGZpcnN0SW5wdXRBdFJpZ2h0ID0gc2VhcmNoQmxvY2tJbmRleDtcblxuICAgICAgICBmb3IgKHZhciBiaSA9IGZpcnN0SW5wdXRBdFJpZ2h0OyBiaSA8IHRoaXMuX2Jsb2Nrcy5sZW5ndGg7ICsrYmkpIHtcbiAgICAgICAgICB2YXIgYmxvY2tBdFJpZ2h0ID0gdGhpcy5fYmxvY2tzW2JpXTtcblxuICAgICAgICAgIHZhciBfYmxvY2tJbnB1dFBvcyA9IGJsb2NrQXRSaWdodC5uZWFyZXN0SW5wdXRQb3MoMCwgRElSRUNUSU9OLk5PTkUpO1xuXG4gICAgICAgICAgaWYgKCFibG9ja0F0UmlnaHQudmFsdWUubGVuZ3RoIHx8IF9ibG9ja0lucHV0UG9zICE9PSBibG9ja0F0UmlnaHQudmFsdWUubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fYmxvY2tTdGFydFBvcyhiaSkgKyBfYmxvY2tJbnB1dFBvcztcbiAgICAgICAgICB9XG4gICAgICAgIH0gLy8gPC1cbiAgICAgICAgLy8gZmluZCBmaXJzdCBub24tZml4ZWQgc3ltYm9sXG5cblxuICAgICAgICBmb3IgKHZhciBfYmkgPSBzZWFyY2hCbG9ja0luZGV4IC0gMTsgX2JpID49IDA7IC0tX2JpKSB7XG4gICAgICAgICAgdmFyIF9ibG9jazMgPSB0aGlzLl9ibG9ja3NbX2JpXTtcblxuICAgICAgICAgIHZhciBfYmxvY2tJbnB1dFBvczIgPSBfYmxvY2szLm5lYXJlc3RJbnB1dFBvcygwLCBESVJFQ1RJT04uTk9ORSk7IC8vIGlzIGlucHV0XG5cblxuICAgICAgICAgIGlmICghX2Jsb2NrMy52YWx1ZS5sZW5ndGggfHwgX2Jsb2NrSW5wdXRQb3MyICE9PSBfYmxvY2szLnZhbHVlLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2Jsb2NrU3RhcnRQb3MoX2JpKSArIF9ibG9jazMudmFsdWUubGVuZ3RoO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjdXJzb3JQb3M7XG4gICAgICB9XG5cbiAgICAgIGlmIChkaXJlY3Rpb24gPT09IERJUkVDVElPTi5MRUZUIHx8IGRpcmVjdGlvbiA9PT0gRElSRUNUSU9OLkZPUkNFX0xFRlQpIHtcbiAgICAgICAgLy8gLVxuICAgICAgICAvLyAgYW55fGZpbGxlZC1pbnB1dFxuICAgICAgICAvLyA8LVxuICAgICAgICAvLyAgYW55fGZpcnN0IG5vdCBlbXB0eSBpcyBub3QtbGVuLWFsaWduZWRcbiAgICAgICAgLy8gIG5vdC0wLWFsaWduZWR8YW55XG4gICAgICAgIC8vIC0+XG4gICAgICAgIC8vICBhbnl8bm90LWxlbi1hbGlnbmVkIG9yIGVuZFxuICAgICAgICAvLyBjaGVjayBpZiBmaXJzdCBibG9jayBhdCByaWdodCBpcyBmaWxsZWQgaW5wdXRcbiAgICAgICAgdmFyIGZpcnN0RmlsbGVkQmxvY2tJbmRleEF0UmlnaHQ7XG5cbiAgICAgICAgZm9yICh2YXIgX2JpMiA9IHNlYXJjaEJsb2NrSW5kZXg7IF9iaTIgPCB0aGlzLl9ibG9ja3MubGVuZ3RoOyArK19iaTIpIHtcbiAgICAgICAgICBpZiAodGhpcy5fYmxvY2tzW19iaTJdLnZhbHVlKSB7XG4gICAgICAgICAgICBmaXJzdEZpbGxlZEJsb2NrSW5kZXhBdFJpZ2h0ID0gX2JpMjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChmaXJzdEZpbGxlZEJsb2NrSW5kZXhBdFJpZ2h0ICE9IG51bGwpIHtcbiAgICAgICAgICB2YXIgZmlsbGVkQmxvY2sgPSB0aGlzLl9ibG9ja3NbZmlyc3RGaWxsZWRCbG9ja0luZGV4QXRSaWdodF07XG5cbiAgICAgICAgICB2YXIgX2Jsb2NrSW5wdXRQb3MzID0gZmlsbGVkQmxvY2submVhcmVzdElucHV0UG9zKDAsIERJUkVDVElPTi5SSUdIVCk7XG5cbiAgICAgICAgICBpZiAoX2Jsb2NrSW5wdXRQb3MzID09PSAwICYmIGZpbGxlZEJsb2NrLnVubWFza2VkVmFsdWUubGVuZ3RoKSB7XG4gICAgICAgICAgICAvLyBmaWxsZWQgYmxvY2sgaXMgaW5wdXRcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9ibG9ja1N0YXJ0UG9zKGZpcnN0RmlsbGVkQmxvY2tJbmRleEF0UmlnaHQpICsgX2Jsb2NrSW5wdXRQb3MzO1xuICAgICAgICAgIH1cbiAgICAgICAgfSAvLyA8LVxuICAgICAgICAvLyBmaW5kIHRoaXMgdmFyc1xuXG5cbiAgICAgICAgdmFyIGZpcnN0RmlsbGVkSW5wdXRCbG9ja0luZGV4ID0gLTE7XG4gICAgICAgIHZhciBmaXJzdEVtcHR5SW5wdXRCbG9ja0luZGV4OyAvLyBUT0RPIGNvbnNpZGVyIG5lc3RlZCBlbXB0eSBpbnB1dHNcblxuICAgICAgICBmb3IgKHZhciBfYmkzID0gc2VhcmNoQmxvY2tJbmRleCAtIDE7IF9iaTMgPj0gMDsgLS1fYmkzKSB7XG4gICAgICAgICAgdmFyIF9ibG9jazQgPSB0aGlzLl9ibG9ja3NbX2JpM107XG5cbiAgICAgICAgICB2YXIgX2Jsb2NrSW5wdXRQb3M0ID0gX2Jsb2NrNC5uZWFyZXN0SW5wdXRQb3MoX2Jsb2NrNC52YWx1ZS5sZW5ndGgsIERJUkVDVElPTi5GT1JDRV9MRUZUKTtcblxuICAgICAgICAgIGlmICghX2Jsb2NrNC52YWx1ZSB8fCBfYmxvY2tJbnB1dFBvczQgIT09IDApIGZpcnN0RW1wdHlJbnB1dEJsb2NrSW5kZXggPSBfYmkzO1xuXG4gICAgICAgICAgaWYgKF9ibG9ja0lucHV0UG9zNCAhPT0gMCkge1xuICAgICAgICAgICAgaWYgKF9ibG9ja0lucHV0UG9zNCAhPT0gX2Jsb2NrNC52YWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgLy8gYWxpZ25lZCBpbnNpZGUgYmxvY2sgLSByZXR1cm4gaW1tZWRpYXRlbHlcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2Jsb2NrU3RhcnRQb3MoX2JpMykgKyBfYmxvY2tJbnB1dFBvczQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAvLyBmb3VuZCBmaWxsZWRcbiAgICAgICAgICAgICAgZmlyc3RGaWxsZWRJbnB1dEJsb2NrSW5kZXggPSBfYmkzO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGlyZWN0aW9uID09PSBESVJFQ1RJT04uTEVGVCkge1xuICAgICAgICAgIC8vIHRyeSBmaW5kIGZpcnN0IGVtcHR5IGlucHV0IGJlZm9yZSBzdGFydCBzZWFyY2hpbmcgcG9zaXRpb24gb25seSB3aGVuIG5vdCBmb3JjZWRcbiAgICAgICAgICBmb3IgKHZhciBfYmk0ID0gZmlyc3RGaWxsZWRJbnB1dEJsb2NrSW5kZXggKyAxOyBfYmk0IDw9IE1hdGgubWluKHNlYXJjaEJsb2NrSW5kZXgsIHRoaXMuX2Jsb2Nrcy5sZW5ndGggLSAxKTsgKytfYmk0KSB7XG4gICAgICAgICAgICB2YXIgX2Jsb2NrNSA9IHRoaXMuX2Jsb2Nrc1tfYmk0XTtcblxuICAgICAgICAgICAgdmFyIF9ibG9ja0lucHV0UG9zNSA9IF9ibG9jazUubmVhcmVzdElucHV0UG9zKDAsIERJUkVDVElPTi5OT05FKTtcblxuICAgICAgICAgICAgdmFyIGJsb2NrQWxpZ25lZFBvcyA9IHRoaXMuX2Jsb2NrU3RhcnRQb3MoX2JpNCkgKyBfYmxvY2tJbnB1dFBvczU7XG5cbiAgICAgICAgICAgIGlmIChibG9ja0FsaWduZWRQb3MgPiBjdXJzb3JQb3MpIGJyZWFrOyAvLyBpZiBibG9jayBpcyBub3QgbGF6eSBpbnB1dFxuXG4gICAgICAgICAgICBpZiAoX2Jsb2NrSW5wdXRQb3M1ICE9PSBfYmxvY2s1LnZhbHVlLmxlbmd0aCkgcmV0dXJuIGJsb2NrQWxpZ25lZFBvcztcbiAgICAgICAgICB9XG4gICAgICAgIH0gLy8gcHJvY2VzcyBvdmVyZmxvd1xuXG5cbiAgICAgICAgaWYgKGZpcnN0RmlsbGVkSW5wdXRCbG9ja0luZGV4ID49IDApIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5fYmxvY2tTdGFydFBvcyhmaXJzdEZpbGxlZElucHV0QmxvY2tJbmRleCkgKyB0aGlzLl9ibG9ja3NbZmlyc3RGaWxsZWRJbnB1dEJsb2NrSW5kZXhdLnZhbHVlLmxlbmd0aDtcbiAgICAgICAgfSAvLyBmb3IgbGF6eSBpZiBoYXMgYWxpZ25lZCBsZWZ0IGluc2lkZSBmaXhlZCBhbmQgaGFzIGNhbWUgdG8gdGhlIHN0YXJ0IC0gdXNlIHN0YXJ0IHBvc2l0aW9uXG5cblxuICAgICAgICBpZiAoZGlyZWN0aW9uID09PSBESVJFQ1RJT04uRk9SQ0VfTEVGVCB8fCB0aGlzLmxhenkgJiYgIXRoaXMuZXh0cmFjdElucHV0KCkgJiYgIWlzSW5wdXQodGhpcy5fYmxvY2tzW3NlYXJjaEJsb2NrSW5kZXhdKSkge1xuICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGZpcnN0RW1wdHlJbnB1dEJsb2NrSW5kZXggIT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLl9ibG9ja1N0YXJ0UG9zKGZpcnN0RW1wdHlJbnB1dEJsb2NrSW5kZXgpO1xuICAgICAgICB9IC8vIGZpbmQgZmlyc3QgaW5wdXRcblxuXG4gICAgICAgIGZvciAodmFyIF9iaTUgPSBzZWFyY2hCbG9ja0luZGV4OyBfYmk1IDwgdGhpcy5fYmxvY2tzLmxlbmd0aDsgKytfYmk1KSB7XG4gICAgICAgICAgdmFyIF9ibG9jazYgPSB0aGlzLl9ibG9ja3NbX2JpNV07XG5cbiAgICAgICAgICB2YXIgX2Jsb2NrSW5wdXRQb3M2ID0gX2Jsb2NrNi5uZWFyZXN0SW5wdXRQb3MoMCwgRElSRUNUSU9OLk5PTkUpOyAvLyBpcyBpbnB1dFxuXG5cbiAgICAgICAgICBpZiAoIV9ibG9jazYudmFsdWUubGVuZ3RoIHx8IF9ibG9ja0lucHV0UG9zNiAhPT0gX2Jsb2NrNi52YWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9ibG9ja1N0YXJ0UG9zKF9iaTUpICsgX2Jsb2NrSW5wdXRQb3M2O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAwO1xuICAgICAgfVxuXG4gICAgICBpZiAoZGlyZWN0aW9uID09PSBESVJFQ1RJT04uUklHSFQgfHwgZGlyZWN0aW9uID09PSBESVJFQ1RJT04uRk9SQ0VfUklHSFQpIHtcbiAgICAgICAgLy8gLT5cbiAgICAgICAgLy8gIGFueXxub3QtbGVuLWFsaWduZWQgYW5kIGZpbGxlZFxuICAgICAgICAvLyAgYW55fG5vdC1sZW4tYWxpZ25lZFxuICAgICAgICAvLyA8LVxuICAgICAgICAvLyAgbm90LTAtYWxpZ25lZCBvciBzdGFydHxhbnlcbiAgICAgICAgdmFyIGZpcnN0SW5wdXRCbG9ja0FsaWduZWRJbmRleDtcbiAgICAgICAgdmFyIGZpcnN0SW5wdXRCbG9ja0FsaWduZWRQb3M7XG5cbiAgICAgICAgZm9yICh2YXIgX2JpNiA9IHNlYXJjaEJsb2NrSW5kZXg7IF9iaTYgPCB0aGlzLl9ibG9ja3MubGVuZ3RoOyArK19iaTYpIHtcbiAgICAgICAgICB2YXIgX2Jsb2NrNyA9IHRoaXMuX2Jsb2Nrc1tfYmk2XTtcblxuICAgICAgICAgIHZhciBfYmxvY2tJbnB1dFBvczcgPSBfYmxvY2s3Lm5lYXJlc3RJbnB1dFBvcygwLCBESVJFQ1RJT04uTk9ORSk7XG5cbiAgICAgICAgICBpZiAoX2Jsb2NrSW5wdXRQb3M3ICE9PSBfYmxvY2s3LnZhbHVlLmxlbmd0aCkge1xuICAgICAgICAgICAgZmlyc3RJbnB1dEJsb2NrQWxpZ25lZFBvcyA9IHRoaXMuX2Jsb2NrU3RhcnRQb3MoX2JpNikgKyBfYmxvY2tJbnB1dFBvczc7XG4gICAgICAgICAgICBmaXJzdElucHV0QmxvY2tBbGlnbmVkSW5kZXggPSBfYmk2O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGZpcnN0SW5wdXRCbG9ja0FsaWduZWRJbmRleCAhPSBudWxsICYmIGZpcnN0SW5wdXRCbG9ja0FsaWduZWRQb3MgIT0gbnVsbCkge1xuICAgICAgICAgIGZvciAodmFyIF9iaTcgPSBmaXJzdElucHV0QmxvY2tBbGlnbmVkSW5kZXg7IF9iaTcgPCB0aGlzLl9ibG9ja3MubGVuZ3RoOyArK19iaTcpIHtcbiAgICAgICAgICAgIHZhciBfYmxvY2s4ID0gdGhpcy5fYmxvY2tzW19iaTddO1xuXG4gICAgICAgICAgICB2YXIgX2Jsb2NrSW5wdXRQb3M4ID0gX2Jsb2NrOC5uZWFyZXN0SW5wdXRQb3MoMCwgRElSRUNUSU9OLkZPUkNFX1JJR0hUKTtcblxuICAgICAgICAgICAgaWYgKF9ibG9ja0lucHV0UG9zOCAhPT0gX2Jsb2NrOC52YWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2Jsb2NrU3RhcnRQb3MoX2JpNykgKyBfYmxvY2tJbnB1dFBvczg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGRpcmVjdGlvbiA9PT0gRElSRUNUSU9OLkZPUkNFX1JJR0hUID8gdGhpcy52YWx1ZS5sZW5ndGggOiBmaXJzdElucHV0QmxvY2tBbGlnbmVkUG9zO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICh2YXIgX2JpOCA9IE1hdGgubWluKHNlYXJjaEJsb2NrSW5kZXgsIHRoaXMuX2Jsb2Nrcy5sZW5ndGggLSAxKTsgX2JpOCA+PSAwOyAtLV9iaTgpIHtcbiAgICAgICAgICB2YXIgX2Jsb2NrOSA9IHRoaXMuX2Jsb2Nrc1tfYmk4XTtcblxuICAgICAgICAgIHZhciBfYmxvY2tJbnB1dFBvczkgPSBfYmxvY2s5Lm5lYXJlc3RJbnB1dFBvcyhfYmxvY2s5LnZhbHVlLmxlbmd0aCwgRElSRUNUSU9OLkxFRlQpO1xuXG4gICAgICAgICAgaWYgKF9ibG9ja0lucHV0UG9zOSAhPT0gMCkge1xuICAgICAgICAgICAgdmFyIGFsaWduZWRQb3MgPSB0aGlzLl9ibG9ja1N0YXJ0UG9zKF9iaTgpICsgX2Jsb2NrSW5wdXRQb3M5O1xuXG4gICAgICAgICAgICBpZiAoYWxpZ25lZFBvcyA+PSBjdXJzb3JQb3MpIHJldHVybiBhbGlnbmVkUG9zO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjdXJzb3JQb3M7XG4gICAgfVxuICAgIC8qKiBHZXQgYmxvY2sgYnkgbmFtZSAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwibWFza2VkQmxvY2tcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbWFza2VkQmxvY2sobmFtZSkge1xuICAgICAgcmV0dXJuIHRoaXMubWFza2VkQmxvY2tzKG5hbWUpWzBdO1xuICAgIH1cbiAgICAvKiogR2V0IGFsbCBibG9ja3MgYnkgbmFtZSAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwibWFza2VkQmxvY2tzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG1hc2tlZEJsb2NrcyhuYW1lKSB7XG4gICAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgICAgdmFyIGluZGljZXMgPSB0aGlzLl9tYXNrZWRCbG9ja3NbbmFtZV07XG4gICAgICBpZiAoIWluZGljZXMpIHJldHVybiBbXTtcbiAgICAgIHJldHVybiBpbmRpY2VzLm1hcChmdW5jdGlvbiAoZ2kpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzNC5fYmxvY2tzW2dpXTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzdGF0ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIF9nZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZFBhdHRlcm4ucHJvdG90eXBlKSwgXCJzdGF0ZVwiLCB0aGlzKSwge1xuICAgICAgICBfYmxvY2tzOiB0aGlzLl9ibG9ja3MubWFwKGZ1bmN0aW9uIChiKSB7XG4gICAgICAgICAgcmV0dXJuIGIuc3RhdGU7XG4gICAgICAgIH0pXG4gICAgICB9KTtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHN0YXRlKSB7XG4gICAgICB2YXIgX2Jsb2NrcyA9IHN0YXRlLl9ibG9ja3MsXG4gICAgICAgICAgbWFza2VkU3RhdGUgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoc3RhdGUsIFtcIl9ibG9ja3NcIl0pO1xuXG4gICAgICB0aGlzLl9ibG9ja3MuZm9yRWFjaChmdW5jdGlvbiAoYiwgYmkpIHtcbiAgICAgICAgcmV0dXJuIGIuc3RhdGUgPSBfYmxvY2tzW2JpXTtcbiAgICAgIH0pO1xuXG4gICAgICBfc2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWRQYXR0ZXJuLnByb3RvdHlwZSksIFwic3RhdGVcIiwgbWFza2VkU3RhdGUsIHRoaXMsIHRydWUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJpc0NvbXBsZXRlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fYmxvY2tzLmV2ZXJ5KGZ1bmN0aW9uIChiKSB7XG4gICAgICAgIHJldHVybiBiLmlzQ29tcGxldGU7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidW5tYXNrZWRWYWx1ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2Jsb2Nrcy5yZWR1Y2UoZnVuY3Rpb24gKHN0ciwgYikge1xuICAgICAgICByZXR1cm4gc3RyICs9IGIudW5tYXNrZWRWYWx1ZTtcbiAgICAgIH0sICcnKTtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHVubWFza2VkVmFsdWUpIHtcbiAgICAgIF9zZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZFBhdHRlcm4ucHJvdG90eXBlKSwgXCJ1bm1hc2tlZFZhbHVlXCIsIHVubWFza2VkVmFsdWUsIHRoaXMsIHRydWUpO1xuICAgIH1cbiAgICAvKipcclxuICAgICAgQG92ZXJyaWRlXHJcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwidmFsdWVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIC8vIFRPRE8gcmV0dXJuIF92YWx1ZSB3aGVuIG5vdCBpbiBjaGFuZ2U/XG4gICAgICByZXR1cm4gdGhpcy5fYmxvY2tzLnJlZHVjZShmdW5jdGlvbiAoc3RyLCBiKSB7XG4gICAgICAgIHJldHVybiBzdHIgKz0gYi52YWx1ZTtcbiAgICAgIH0sICcnKTtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHZhbHVlKSB7XG4gICAgICBfc2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWRQYXR0ZXJuLnByb3RvdHlwZSksIFwidmFsdWVcIiwgdmFsdWUsIHRoaXMsIHRydWUpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBNYXNrZWRQYXR0ZXJuO1xufShNYXNrZWQpO1xuTWFza2VkUGF0dGVybi5ERUZBVUxUUyA9IHtcbiAgbGF6eTogdHJ1ZSxcbiAgcGxhY2Vob2xkZXJDaGFyOiAnXydcbn07XG5NYXNrZWRQYXR0ZXJuLlNUT1BfQ0hBUiA9ICdgJztcbk1hc2tlZFBhdHRlcm4uRVNDQVBFX0NIQVIgPSAnXFxcXCc7XG5NYXNrZWRQYXR0ZXJuLklucHV0RGVmaW5pdGlvbiA9IFBhdHRlcm5JbnB1dERlZmluaXRpb247XG5NYXNrZWRQYXR0ZXJuLkZpeGVkRGVmaW5pdGlvbiA9IFBhdHRlcm5GaXhlZERlZmluaXRpb247XG5cbmZ1bmN0aW9uIGlzSW5wdXQoYmxvY2spIHtcbiAgaWYgKCFibG9jaykgcmV0dXJuIGZhbHNlO1xuICB2YXIgdmFsdWUgPSBibG9jay52YWx1ZTtcbiAgcmV0dXJuICF2YWx1ZSB8fCBibG9jay5uZWFyZXN0SW5wdXRQb3MoMCwgRElSRUNUSU9OLk5PTkUpICE9PSB2YWx1ZS5sZW5ndGg7XG59XG5cbi8qKiBQYXR0ZXJuIHdoaWNoIGFjY2VwdHMgcmFuZ2VzICovXG52YXIgTWFza2VkUmFuZ2UgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9NYXNrZWRQYXR0ZXJuKSB7XG4gIF9pbmhlcml0cyhNYXNrZWRSYW5nZSwgX01hc2tlZFBhdHRlcm4pO1xuXG4gIGZ1bmN0aW9uIE1hc2tlZFJhbmdlKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNYXNrZWRSYW5nZSk7XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX2dldFByb3RvdHlwZU9mKE1hc2tlZFJhbmdlKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhNYXNrZWRSYW5nZSwgW3tcbiAgICBrZXk6IFwiX3VwZGF0ZVwiLFxuXG4gICAgLyoqXHJcbiAgICAgIEBvdmVycmlkZVxyXG4gICAgKi9cbiAgICB2YWx1ZTogZnVuY3Rpb24gX3VwZGF0ZShvcHRzKSB7XG4gICAgICAvLyBUT0RPIHR5cGVcbiAgICAgIG9wdHMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgdG86IHRoaXMudG8gfHwgMCxcbiAgICAgICAgZnJvbTogdGhpcy5mcm9tIHx8IDBcbiAgICAgIH0sIG9wdHMpO1xuICAgICAgdmFyIG1heExlbmd0aCA9IFN0cmluZyhvcHRzLnRvKS5sZW5ndGg7XG4gICAgICBpZiAob3B0cy5tYXhMZW5ndGggIT0gbnVsbCkgbWF4TGVuZ3RoID0gTWF0aC5tYXgobWF4TGVuZ3RoLCBvcHRzLm1heExlbmd0aCk7XG4gICAgICBvcHRzLm1heExlbmd0aCA9IG1heExlbmd0aDtcbiAgICAgIHZhciBmcm9tU3RyID0gU3RyaW5nKG9wdHMuZnJvbSkucGFkU3RhcnQobWF4TGVuZ3RoLCAnMCcpO1xuICAgICAgdmFyIHRvU3RyID0gU3RyaW5nKG9wdHMudG8pLnBhZFN0YXJ0KG1heExlbmd0aCwgJzAnKTtcbiAgICAgIHZhciBzYW1lQ2hhcnNDb3VudCA9IDA7XG5cbiAgICAgIHdoaWxlIChzYW1lQ2hhcnNDb3VudCA8IHRvU3RyLmxlbmd0aCAmJiB0b1N0cltzYW1lQ2hhcnNDb3VudF0gPT09IGZyb21TdHJbc2FtZUNoYXJzQ291bnRdKSB7XG4gICAgICAgICsrc2FtZUNoYXJzQ291bnQ7XG4gICAgICB9XG5cbiAgICAgIG9wdHMubWFzayA9IHRvU3RyLnNsaWNlKDAsIHNhbWVDaGFyc0NvdW50KS5yZXBsYWNlKC8wL2csICdcXFxcMCcpICsgJzAnLnJlcGVhdChtYXhMZW5ndGggLSBzYW1lQ2hhcnNDb3VudCk7XG5cbiAgICAgIF9nZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZFJhbmdlLnByb3RvdHlwZSksIFwiX3VwZGF0ZVwiLCB0aGlzKS5jYWxsKHRoaXMsIG9wdHMpO1xuICAgIH1cbiAgICAvKipcclxuICAgICAgQG92ZXJyaWRlXHJcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiYm91bmRhcmllc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBib3VuZGFyaWVzKHN0cikge1xuICAgICAgdmFyIG1pbnN0ciA9ICcnO1xuICAgICAgdmFyIG1heHN0ciA9ICcnO1xuXG4gICAgICB2YXIgX3JlZiA9IHN0ci5tYXRjaCgvXihcXEQqKShcXGQqKShcXEQqKS8pIHx8IFtdLFxuICAgICAgICAgIF9yZWYyID0gX3NsaWNlZFRvQXJyYXkoX3JlZiwgMyksXG4gICAgICAgICAgcGxhY2Vob2xkZXIgPSBfcmVmMlsxXSxcbiAgICAgICAgICBudW0gPSBfcmVmMlsyXTtcblxuICAgICAgaWYgKG51bSkge1xuICAgICAgICBtaW5zdHIgPSAnMCcucmVwZWF0KHBsYWNlaG9sZGVyLmxlbmd0aCkgKyBudW07XG4gICAgICAgIG1heHN0ciA9ICc5Jy5yZXBlYXQocGxhY2Vob2xkZXIubGVuZ3RoKSArIG51bTtcbiAgICAgIH1cblxuICAgICAgbWluc3RyID0gbWluc3RyLnBhZEVuZCh0aGlzLm1heExlbmd0aCwgJzAnKTtcbiAgICAgIG1heHN0ciA9IG1heHN0ci5wYWRFbmQodGhpcy5tYXhMZW5ndGgsICc5Jyk7XG4gICAgICByZXR1cm4gW21pbnN0ciwgbWF4c3RyXTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgIEBvdmVycmlkZVxyXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImRvUHJlcGFyZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkb1ByZXBhcmUoc3RyKSB7XG4gICAgICB2YXIgZmxhZ3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgICAgc3RyID0gX2dldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkUmFuZ2UucHJvdG90eXBlKSwgXCJkb1ByZXBhcmVcIiwgdGhpcykuY2FsbCh0aGlzLCBzdHIsIGZsYWdzKS5yZXBsYWNlKC9cXEQvZywgJycpO1xuICAgICAgaWYgKCF0aGlzLmF1dG9maXgpIHJldHVybiBzdHI7XG4gICAgICB2YXIgZnJvbVN0ciA9IFN0cmluZyh0aGlzLmZyb20pLnBhZFN0YXJ0KHRoaXMubWF4TGVuZ3RoLCAnMCcpO1xuICAgICAgdmFyIHRvU3RyID0gU3RyaW5nKHRoaXMudG8pLnBhZFN0YXJ0KHRoaXMubWF4TGVuZ3RoLCAnMCcpO1xuICAgICAgdmFyIHZhbCA9IHRoaXMudmFsdWU7XG4gICAgICB2YXIgcHJlcFN0ciA9ICcnO1xuXG4gICAgICBmb3IgKHZhciBjaSA9IDA7IGNpIDwgc3RyLmxlbmd0aDsgKytjaSkge1xuICAgICAgICB2YXIgbmV4dFZhbCA9IHZhbCArIHByZXBTdHIgKyBzdHJbY2ldO1xuXG4gICAgICAgIHZhciBfdGhpcyRib3VuZGFyaWVzID0gdGhpcy5ib3VuZGFyaWVzKG5leHRWYWwpLFxuICAgICAgICAgICAgX3RoaXMkYm91bmRhcmllczIgPSBfc2xpY2VkVG9BcnJheShfdGhpcyRib3VuZGFyaWVzLCAyKSxcbiAgICAgICAgICAgIG1pbnN0ciA9IF90aGlzJGJvdW5kYXJpZXMyWzBdLFxuICAgICAgICAgICAgbWF4c3RyID0gX3RoaXMkYm91bmRhcmllczJbMV07XG5cbiAgICAgICAgaWYgKE51bWJlcihtYXhzdHIpIDwgdGhpcy5mcm9tKSBwcmVwU3RyICs9IGZyb21TdHJbbmV4dFZhbC5sZW5ndGggLSAxXTtlbHNlIGlmIChOdW1iZXIobWluc3RyKSA+IHRoaXMudG8pIHByZXBTdHIgKz0gdG9TdHJbbmV4dFZhbC5sZW5ndGggLSAxXTtlbHNlIHByZXBTdHIgKz0gc3RyW2NpXTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXBTdHI7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICBAb3ZlcnJpZGVcclxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJkb1ZhbGlkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRvVmFsaWRhdGUoKSB7XG4gICAgICB2YXIgX2dldDI7XG5cbiAgICAgIHZhciBzdHIgPSB0aGlzLnZhbHVlO1xuICAgICAgdmFyIGZpcnN0Tm9uWmVybyA9IHN0ci5zZWFyY2goL1teMF0vKTtcbiAgICAgIGlmIChmaXJzdE5vblplcm8gPT09IC0xICYmIHN0ci5sZW5ndGggPD0gdGhpcy5fbWF0Y2hGcm9tKSByZXR1cm4gdHJ1ZTtcblxuICAgICAgdmFyIF90aGlzJGJvdW5kYXJpZXMzID0gdGhpcy5ib3VuZGFyaWVzKHN0ciksXG4gICAgICAgICAgX3RoaXMkYm91bmRhcmllczQgPSBfc2xpY2VkVG9BcnJheShfdGhpcyRib3VuZGFyaWVzMywgMiksXG4gICAgICAgICAgbWluc3RyID0gX3RoaXMkYm91bmRhcmllczRbMF0sXG4gICAgICAgICAgbWF4c3RyID0gX3RoaXMkYm91bmRhcmllczRbMV07XG5cbiAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5mcm9tIDw9IE51bWJlcihtYXhzdHIpICYmIE51bWJlcihtaW5zdHIpIDw9IHRoaXMudG8gJiYgKF9nZXQyID0gX2dldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkUmFuZ2UucHJvdG90eXBlKSwgXCJkb1ZhbGlkYXRlXCIsIHRoaXMpKS5jYWxsLmFwcGx5KF9nZXQyLCBbdGhpc10uY29uY2F0KGFyZ3MpKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiX21hdGNoRnJvbVwiLFxuXG4gICAgLyoqXHJcbiAgICAgIE9wdGlvbmFsbHkgc2V0cyBtYXggbGVuZ3RoIG9mIHBhdHRlcm4uXHJcbiAgICAgIFVzZWQgd2hlbiBwYXR0ZXJuIGxlbmd0aCBpcyBsb25nZXIgdGhlbiBgdG9gIHBhcmFtIGxlbmd0aC4gUGFkcyB6ZXJvcyBhdCBzdGFydCBpbiB0aGlzIGNhc2UuXHJcbiAgICAqL1xuXG4gICAgLyoqIE1pbiBib3VuZCAqL1xuXG4gICAgLyoqIE1heCBib3VuZCAqL1xuXG4gICAgLyoqICovXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5tYXhMZW5ndGggLSBTdHJpbmcodGhpcy5mcm9tKS5sZW5ndGg7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImlzQ29tcGxldGVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBfZ2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWRSYW5nZS5wcm90b3R5cGUpLCBcImlzQ29tcGxldGVcIiwgdGhpcykgJiYgQm9vbGVhbih0aGlzLnZhbHVlKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gTWFza2VkUmFuZ2U7XG59KE1hc2tlZFBhdHRlcm4pO1xuXG4vKiogRGF0ZSBtYXNrICovXG5cbnZhciBNYXNrZWREYXRlID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfTWFza2VkUGF0dGVybikge1xuICBfaW5oZXJpdHMoTWFza2VkRGF0ZSwgX01hc2tlZFBhdHRlcm4pO1xuXG4gIC8qKiBQYXJzZSBzdHJpbmcgdG8gRGF0ZSAqL1xuXG4gIC8qKiBGb3JtYXQgRGF0ZSB0byBzdHJpbmcgKi9cblxuICAvKiogUGF0dGVybiBtYXNrIGZvciBkYXRlIGFjY29yZGluZyB0byB7QGxpbmsgTWFza2VkRGF0ZSNmb3JtYXR9ICovXG5cbiAgLyoqIFN0YXJ0IGRhdGUgKi9cblxuICAvKiogRW5kIGRhdGUgKi9cblxuICAvKiogKi9cblxuICAvKipcclxuICAgIEBwYXJhbSB7T2JqZWN0fSBvcHRzXHJcbiAgKi9cbiAgZnVuY3Rpb24gTWFza2VkRGF0ZShvcHRzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1hc2tlZERhdGUpO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9nZXRQcm90b3R5cGVPZihNYXNrZWREYXRlKS5jYWxsKHRoaXMsIE9iamVjdC5hc3NpZ24oe30sIE1hc2tlZERhdGUuREVGQVVMVFMsIHt9LCBvcHRzKSkpO1xuICB9XG4gIC8qKlxyXG4gICAgQG92ZXJyaWRlXHJcbiAgKi9cblxuXG4gIF9jcmVhdGVDbGFzcyhNYXNrZWREYXRlLCBbe1xuICAgIGtleTogXCJfdXBkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF91cGRhdGUob3B0cykge1xuICAgICAgaWYgKG9wdHMubWFzayA9PT0gRGF0ZSkgZGVsZXRlIG9wdHMubWFzaztcbiAgICAgIGlmIChvcHRzLnBhdHRlcm4pIG9wdHMubWFzayA9IG9wdHMucGF0dGVybjtcbiAgICAgIHZhciBibG9ja3MgPSBvcHRzLmJsb2NrcztcbiAgICAgIG9wdHMuYmxvY2tzID0gT2JqZWN0LmFzc2lnbih7fSwgTWFza2VkRGF0ZS5HRVRfREVGQVVMVF9CTE9DS1MoKSk7IC8vIGFkanVzdCB5ZWFyIGJsb2NrXG5cbiAgICAgIGlmIChvcHRzLm1pbikgb3B0cy5ibG9ja3MuWS5mcm9tID0gb3B0cy5taW4uZ2V0RnVsbFllYXIoKTtcbiAgICAgIGlmIChvcHRzLm1heCkgb3B0cy5ibG9ja3MuWS50byA9IG9wdHMubWF4LmdldEZ1bGxZZWFyKCk7XG5cbiAgICAgIGlmIChvcHRzLm1pbiAmJiBvcHRzLm1heCAmJiBvcHRzLmJsb2Nrcy5ZLmZyb20gPT09IG9wdHMuYmxvY2tzLlkudG8pIHtcbiAgICAgICAgb3B0cy5ibG9ja3MubS5mcm9tID0gb3B0cy5taW4uZ2V0TW9udGgoKSArIDE7XG4gICAgICAgIG9wdHMuYmxvY2tzLm0udG8gPSBvcHRzLm1heC5nZXRNb250aCgpICsgMTtcblxuICAgICAgICBpZiAob3B0cy5ibG9ja3MubS5mcm9tID09PSBvcHRzLmJsb2Nrcy5tLnRvKSB7XG4gICAgICAgICAgb3B0cy5ibG9ja3MuZC5mcm9tID0gb3B0cy5taW4uZ2V0RGF0ZSgpO1xuICAgICAgICAgIG9wdHMuYmxvY2tzLmQudG8gPSBvcHRzLm1heC5nZXREYXRlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgT2JqZWN0LmFzc2lnbihvcHRzLmJsb2NrcywgYmxvY2tzKTsgLy8gYWRkIGF1dG9maXhcblxuICAgICAgT2JqZWN0LmtleXMob3B0cy5ibG9ja3MpLmZvckVhY2goZnVuY3Rpb24gKGJrKSB7XG4gICAgICAgIHZhciBiID0gb3B0cy5ibG9ja3NbYmtdO1xuICAgICAgICBpZiAoISgnYXV0b2ZpeCcgaW4gYikpIGIuYXV0b2ZpeCA9IG9wdHMuYXV0b2ZpeDtcbiAgICAgIH0pO1xuXG4gICAgICBfZ2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWREYXRlLnByb3RvdHlwZSksIFwiX3VwZGF0ZVwiLCB0aGlzKS5jYWxsKHRoaXMsIG9wdHMpO1xuICAgIH1cbiAgICAvKipcclxuICAgICAgQG92ZXJyaWRlXHJcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZG9WYWxpZGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkb1ZhbGlkYXRlKCkge1xuICAgICAgdmFyIF9nZXQyO1xuXG4gICAgICB2YXIgZGF0ZSA9IHRoaXMuZGF0ZTtcblxuICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAoX2dldDIgPSBfZ2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWREYXRlLnByb3RvdHlwZSksIFwiZG9WYWxpZGF0ZVwiLCB0aGlzKSkuY2FsbC5hcHBseShfZ2V0MiwgW3RoaXNdLmNvbmNhdChhcmdzKSkgJiYgKCF0aGlzLmlzQ29tcGxldGUgfHwgdGhpcy5pc0RhdGVFeGlzdCh0aGlzLnZhbHVlKSAmJiBkYXRlICE9IG51bGwgJiYgKHRoaXMubWluID09IG51bGwgfHwgdGhpcy5taW4gPD0gZGF0ZSkgJiYgKHRoaXMubWF4ID09IG51bGwgfHwgZGF0ZSA8PSB0aGlzLm1heCkpO1xuICAgIH1cbiAgICAvKiogQ2hlY2tzIGlmIGRhdGUgaXMgZXhpc3RzICovXG5cbiAgfSwge1xuICAgIGtleTogXCJpc0RhdGVFeGlzdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpc0RhdGVFeGlzdChzdHIpIHtcbiAgICAgIHJldHVybiB0aGlzLmZvcm1hdCh0aGlzLnBhcnNlKHN0cikpID09PSBzdHI7XG4gICAgfVxuICAgIC8qKiBQYXJzZWQgRGF0ZSAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZGF0ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuaXNDb21wbGV0ZSA/IHRoaXMucGFyc2UodGhpcy52YWx1ZSkgOiBudWxsO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQoZGF0ZSkge1xuICAgICAgdGhpcy52YWx1ZSA9IHRoaXMuZm9ybWF0KGRhdGUpO1xuICAgIH1cbiAgICAvKipcclxuICAgICAgQG92ZXJyaWRlXHJcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwidHlwZWRWYWx1ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuZGF0ZTtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHZhbHVlKSB7XG4gICAgICB0aGlzLmRhdGUgPSB2YWx1ZTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gTWFza2VkRGF0ZTtcbn0oTWFza2VkUGF0dGVybik7XG5NYXNrZWREYXRlLkRFRkFVTFRTID0ge1xuICBwYXR0ZXJuOiAnZHsufWBtey59YFknLFxuICBmb3JtYXQ6IGZ1bmN0aW9uIGZvcm1hdChkYXRlKSB7XG4gICAgdmFyIGRheSA9IFN0cmluZyhkYXRlLmdldERhdGUoKSkucGFkU3RhcnQoMiwgJzAnKTtcbiAgICB2YXIgbW9udGggPSBTdHJpbmcoZGF0ZS5nZXRNb250aCgpICsgMSkucGFkU3RhcnQoMiwgJzAnKTtcbiAgICB2YXIgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICByZXR1cm4gW2RheSwgbW9udGgsIHllYXJdLmpvaW4oJy4nKTtcbiAgfSxcbiAgcGFyc2U6IGZ1bmN0aW9uIHBhcnNlKHN0cikge1xuICAgIHZhciBfc3RyJHNwbGl0ID0gc3RyLnNwbGl0KCcuJyksXG4gICAgICAgIF9zdHIkc3BsaXQyID0gX3NsaWNlZFRvQXJyYXkoX3N0ciRzcGxpdCwgMyksXG4gICAgICAgIGRheSA9IF9zdHIkc3BsaXQyWzBdLFxuICAgICAgICBtb250aCA9IF9zdHIkc3BsaXQyWzFdLFxuICAgICAgICB5ZWFyID0gX3N0ciRzcGxpdDJbMl07XG5cbiAgICByZXR1cm4gbmV3IERhdGUoeWVhciwgbW9udGggLSAxLCBkYXkpO1xuICB9XG59O1xuXG5NYXNrZWREYXRlLkdFVF9ERUZBVUxUX0JMT0NLUyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHtcbiAgICBkOiB7XG4gICAgICBtYXNrOiBNYXNrZWRSYW5nZSxcbiAgICAgIGZyb206IDEsXG4gICAgICB0bzogMzEsXG4gICAgICBtYXhMZW5ndGg6IDJcbiAgICB9LFxuICAgIG06IHtcbiAgICAgIG1hc2s6IE1hc2tlZFJhbmdlLFxuICAgICAgZnJvbTogMSxcbiAgICAgIHRvOiAxMixcbiAgICAgIG1heExlbmd0aDogMlxuICAgIH0sXG4gICAgWToge1xuICAgICAgbWFzazogTWFza2VkUmFuZ2UsXG4gICAgICBmcm9tOiAxOTAwLFxuICAgICAgdG86IDk5OTlcbiAgICB9XG4gIH07XG59O1xuXG4vKipcclxuICBHZW5lcmljIGVsZW1lbnQgQVBJIHRvIHVzZSB3aXRoIG1hc2tcclxuICBAaW50ZXJmYWNlXHJcbiovXG52YXIgTWFza0VsZW1lbnQgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBNYXNrRWxlbWVudCgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTWFza0VsZW1lbnQpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKE1hc2tFbGVtZW50LCBbe1xuICAgIGtleTogXCJzZWxlY3RcIixcblxuICAgIC8qKiBTYWZlbHkgc2V0cyBlbGVtZW50IHNlbGVjdGlvbiAqL1xuICAgIHZhbHVlOiBmdW5jdGlvbiBzZWxlY3Qoc3RhcnQsIGVuZCkge1xuICAgICAgaWYgKHN0YXJ0ID09IG51bGwgfHwgZW5kID09IG51bGwgfHwgc3RhcnQgPT09IHRoaXMuc2VsZWN0aW9uU3RhcnQgJiYgZW5kID09PSB0aGlzLnNlbGVjdGlvbkVuZCkgcmV0dXJuO1xuXG4gICAgICB0cnkge1xuICAgICAgICB0aGlzLl91bnNhZmVTZWxlY3Qoc3RhcnQsIGVuZCk7XG4gICAgICB9IGNhdGNoIChlKSB7fVxuICAgIH1cbiAgICAvKiogU2hvdWxkIGJlIG92ZXJyaWRlbiBpbiBzdWJjbGFzc2VzICovXG5cbiAgfSwge1xuICAgIGtleTogXCJfdW5zYWZlU2VsZWN0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF91bnNhZmVTZWxlY3Qoc3RhcnQsIGVuZCkge31cbiAgICAvKiogU2hvdWxkIGJlIG92ZXJyaWRlbiBpbiBzdWJjbGFzc2VzICovXG5cbiAgfSwge1xuICAgIGtleTogXCJiaW5kRXZlbnRzXCIsXG5cbiAgICAvKiogU2hvdWxkIGJlIG92ZXJyaWRlbiBpbiBzdWJjbGFzc2VzICovXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGJpbmRFdmVudHMoaGFuZGxlcnMpIHt9XG4gICAgLyoqIFNob3VsZCBiZSBvdmVycmlkZW4gaW4gc3ViY2xhc3NlcyAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwidW5iaW5kRXZlbnRzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVuYmluZEV2ZW50cygpIHt9XG4gIH0sIHtcbiAgICBrZXk6IFwic2VsZWN0aW9uU3RhcnRcIixcblxuICAgIC8qKiAqL1xuXG4gICAgLyoqICovXG5cbiAgICAvKiogKi9cblxuICAgIC8qKiBTYWZlbHkgcmV0dXJucyBzZWxlY3Rpb24gc3RhcnQgKi9cbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHZhciBzdGFydDtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgc3RhcnQgPSB0aGlzLl91bnNhZmVTZWxlY3Rpb25TdGFydDtcbiAgICAgIH0gY2F0Y2ggKGUpIHt9XG5cbiAgICAgIHJldHVybiBzdGFydCAhPSBudWxsID8gc3RhcnQgOiB0aGlzLnZhbHVlLmxlbmd0aDtcbiAgICB9XG4gICAgLyoqIFNhZmVseSByZXR1cm5zIHNlbGVjdGlvbiBlbmQgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInNlbGVjdGlvbkVuZFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgdmFyIGVuZDtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgZW5kID0gdGhpcy5fdW5zYWZlU2VsZWN0aW9uRW5kO1xuICAgICAgfSBjYXRjaCAoZSkge31cblxuICAgICAgcmV0dXJuIGVuZCAhPSBudWxsID8gZW5kIDogdGhpcy52YWx1ZS5sZW5ndGg7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImlzQWN0aXZlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIE1hc2tFbGVtZW50O1xufSgpO1xuXG4vKiogQnJpZGdlIGJldHdlZW4gSFRNTEVsZW1lbnQgYW5kIHtAbGluayBNYXNrZWR9ICovXG5cbnZhciBIVE1MTWFza0VsZW1lbnQgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9NYXNrRWxlbWVudCkge1xuICBfaW5oZXJpdHMoSFRNTE1hc2tFbGVtZW50LCBfTWFza0VsZW1lbnQpO1xuXG4gIC8qKiBNYXBwaW5nIGJldHdlZW4gSFRNTEVsZW1lbnQgZXZlbnRzIGFuZCBtYXNrIGludGVybmFsIGV2ZW50cyAqL1xuXG4gIC8qKiBIVE1MRWxlbWVudCB0byB1c2UgbWFzayBvbiAqL1xuXG4gIC8qKlxyXG4gICAgQHBhcmFtIHtIVE1MSW5wdXRFbGVtZW50fEhUTUxUZXh0QXJlYUVsZW1lbnR9IGlucHV0XHJcbiAgKi9cbiAgZnVuY3Rpb24gSFRNTE1hc2tFbGVtZW50KGlucHV0KSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEhUTUxNYXNrRWxlbWVudCk7XG5cbiAgICBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9nZXRQcm90b3R5cGVPZihIVE1MTWFza0VsZW1lbnQpLmNhbGwodGhpcykpO1xuICAgIF90aGlzLmlucHV0ID0gaW5wdXQ7XG4gICAgX3RoaXMuX2hhbmRsZXJzID0ge307XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG4gIC8qKlxyXG4gICAgSXMgZWxlbWVudCBpbiBmb2N1c1xyXG4gICAgQHJlYWRvbmx5XHJcbiAgKi9cblxuXG4gIF9jcmVhdGVDbGFzcyhIVE1MTWFza0VsZW1lbnQsIFt7XG4gICAga2V5OiBcIl91bnNhZmVTZWxlY3RcIixcblxuICAgIC8qKlxyXG4gICAgICBTZXRzIEhUTUxFbGVtZW50IHNlbGVjdGlvblxyXG4gICAgICBAb3ZlcnJpZGVcclxuICAgICovXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF91bnNhZmVTZWxlY3Qoc3RhcnQsIGVuZCkge1xuICAgICAgdGhpcy5pbnB1dC5zZXRTZWxlY3Rpb25SYW5nZShzdGFydCwgZW5kKTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgIEhUTUxFbGVtZW50IHZhbHVlXHJcbiAgICAgIEBvdmVycmlkZVxyXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImJpbmRFdmVudHNcIixcblxuICAgIC8qKlxyXG4gICAgICBCaW5kcyBIVE1MRWxlbWVudCBldmVudHMgdG8gbWFzayBpbnRlcm5hbCBldmVudHNcclxuICAgICAgQG92ZXJyaWRlXHJcbiAgICAqL1xuICAgIHZhbHVlOiBmdW5jdGlvbiBiaW5kRXZlbnRzKGhhbmRsZXJzKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgT2JqZWN0LmtleXMoaGFuZGxlcnMpLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHJldHVybiBfdGhpczIuX3RvZ2dsZUV2ZW50SGFuZGxlcihIVE1MTWFza0VsZW1lbnQuRVZFTlRTX01BUFtldmVudF0sIGhhbmRsZXJzW2V2ZW50XSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgIFVuYmluZHMgSFRNTEVsZW1lbnQgZXZlbnRzIHRvIG1hc2sgaW50ZXJuYWwgZXZlbnRzXHJcbiAgICAgIEBvdmVycmlkZVxyXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInVuYmluZEV2ZW50c1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB1bmJpbmRFdmVudHMoKSB7XG4gICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgT2JqZWN0LmtleXModGhpcy5faGFuZGxlcnMpLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHJldHVybiBfdGhpczMuX3RvZ2dsZUV2ZW50SGFuZGxlcihldmVudCk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgLyoqICovXG5cbiAgfSwge1xuICAgIGtleTogXCJfdG9nZ2xlRXZlbnRIYW5kbGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF90b2dnbGVFdmVudEhhbmRsZXIoZXZlbnQsIGhhbmRsZXIpIHtcbiAgICAgIGlmICh0aGlzLl9oYW5kbGVyc1tldmVudF0pIHtcbiAgICAgICAgdGhpcy5pbnB1dC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCB0aGlzLl9oYW5kbGVyc1tldmVudF0pO1xuICAgICAgICBkZWxldGUgdGhpcy5faGFuZGxlcnNbZXZlbnRdO1xuICAgICAgfVxuXG4gICAgICBpZiAoaGFuZGxlcikge1xuICAgICAgICB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIpO1xuICAgICAgICB0aGlzLl9oYW5kbGVyc1tldmVudF0gPSBoYW5kbGVyO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJpc0FjdGl2ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuaW5wdXQgPT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICBSZXR1cm5zIEhUTUxFbGVtZW50IHNlbGVjdGlvbiBzdGFydFxyXG4gICAgICBAb3ZlcnJpZGVcclxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJfdW5zYWZlU2VsZWN0aW9uU3RhcnRcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmlucHV0LnNlbGVjdGlvblN0YXJ0O1xuICAgIH1cbiAgICAvKipcclxuICAgICAgUmV0dXJucyBIVE1MRWxlbWVudCBzZWxlY3Rpb24gZW5kXHJcbiAgICAgIEBvdmVycmlkZVxyXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIl91bnNhZmVTZWxlY3Rpb25FbmRcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmlucHV0LnNlbGVjdGlvbkVuZDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidmFsdWVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmlucHV0LnZhbHVlO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsdWUpIHtcbiAgICAgIHRoaXMuaW5wdXQudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gSFRNTE1hc2tFbGVtZW50O1xufShNYXNrRWxlbWVudCk7XG5IVE1MTWFza0VsZW1lbnQuRVZFTlRTX01BUCA9IHtcbiAgc2VsZWN0aW9uQ2hhbmdlOiAna2V5ZG93bicsXG4gIGlucHV0OiAnaW5wdXQnLFxuICBkcm9wOiAnZHJvcCcsXG4gIGNsaWNrOiAnY2xpY2snLFxuICBmb2N1czogJ2ZvY3VzJyxcbiAgY29tbWl0OiAnYmx1cidcbn07XG5cbi8qKiBMaXN0ZW5zIHRvIGVsZW1lbnQgZXZlbnRzIGFuZCBjb250cm9scyBjaGFuZ2VzIGJldHdlZW4gZWxlbWVudCBhbmQge0BsaW5rIE1hc2tlZH0gKi9cblxudmFyIElucHV0TWFzayA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIC8qKlxyXG4gICAgVmlldyBlbGVtZW50XHJcbiAgICBAcmVhZG9ubHlcclxuICAqL1xuXG4gIC8qKlxyXG4gICAgSW50ZXJuYWwge0BsaW5rIE1hc2tlZH0gbW9kZWxcclxuICAgIEByZWFkb25seVxyXG4gICovXG5cbiAgLyoqXHJcbiAgICBAcGFyYW0ge01hc2tFbGVtZW50fEhUTUxJbnB1dEVsZW1lbnR8SFRNTFRleHRBcmVhRWxlbWVudH0gZWxcclxuICAgIEBwYXJhbSB7T2JqZWN0fSBvcHRzXHJcbiAgKi9cbiAgZnVuY3Rpb24gSW5wdXRNYXNrKGVsLCBvcHRzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIElucHV0TWFzayk7XG5cbiAgICB0aGlzLmVsID0gZWwgaW5zdGFuY2VvZiBNYXNrRWxlbWVudCA/IGVsIDogbmV3IEhUTUxNYXNrRWxlbWVudChlbCk7XG4gICAgdGhpcy5tYXNrZWQgPSBjcmVhdGVNYXNrKG9wdHMpO1xuICAgIHRoaXMuX2xpc3RlbmVycyA9IHt9O1xuICAgIHRoaXMuX3ZhbHVlID0gJyc7XG4gICAgdGhpcy5fdW5tYXNrZWRWYWx1ZSA9ICcnO1xuICAgIHRoaXMuX3NhdmVTZWxlY3Rpb24gPSB0aGlzLl9zYXZlU2VsZWN0aW9uLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fb25JbnB1dCA9IHRoaXMuX29uSW5wdXQuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9vbkNoYW5nZSA9IHRoaXMuX29uQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fb25Ecm9wID0gdGhpcy5fb25Ecm9wLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fb25Gb2N1cyA9IHRoaXMuX29uRm9jdXMuYmluZCh0aGlzKTtcbiAgICB0aGlzLmFsaWduQ3Vyc29yID0gdGhpcy5hbGlnbkN1cnNvci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuYWxpZ25DdXJzb3JGcmllbmRseSA9IHRoaXMuYWxpZ25DdXJzb3JGcmllbmRseS5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5fYmluZEV2ZW50cygpOyAvLyByZWZyZXNoXG5cblxuICAgIHRoaXMudXBkYXRlVmFsdWUoKTtcblxuICAgIHRoaXMuX29uQ2hhbmdlKCk7XG4gIH1cbiAgLyoqIFJlYWQgb3IgdXBkYXRlIG1hc2sgKi9cblxuXG4gIF9jcmVhdGVDbGFzcyhJbnB1dE1hc2ssIFt7XG4gICAga2V5OiBcIm1hc2tFcXVhbHNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbWFza0VxdWFscyhtYXNrKSB7XG4gICAgICByZXR1cm4gbWFzayA9PSBudWxsIHx8IG1hc2sgPT09IHRoaXMubWFza2VkLm1hc2sgfHwgbWFzayA9PT0gRGF0ZSAmJiB0aGlzLm1hc2tlZCBpbnN0YW5jZW9mIE1hc2tlZERhdGU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIl9iaW5kRXZlbnRzXCIsXG5cbiAgICAvKipcclxuICAgICAgU3RhcnRzIGxpc3RlbmluZyB0byBlbGVtZW50IGV2ZW50c1xyXG4gICAgICBAcHJvdGVjdGVkXHJcbiAgICAqL1xuICAgIHZhbHVlOiBmdW5jdGlvbiBfYmluZEV2ZW50cygpIHtcbiAgICAgIHRoaXMuZWwuYmluZEV2ZW50cyh7XG4gICAgICAgIHNlbGVjdGlvbkNoYW5nZTogdGhpcy5fc2F2ZVNlbGVjdGlvbixcbiAgICAgICAgaW5wdXQ6IHRoaXMuX29uSW5wdXQsXG4gICAgICAgIGRyb3A6IHRoaXMuX29uRHJvcCxcbiAgICAgICAgY2xpY2s6IHRoaXMuYWxpZ25DdXJzb3JGcmllbmRseSxcbiAgICAgICAgZm9jdXM6IHRoaXMuX29uRm9jdXMsXG4gICAgICAgIGNvbW1pdDogdGhpcy5fb25DaGFuZ2VcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcclxuICAgICAgU3RvcHMgbGlzdGVuaW5nIHRvIGVsZW1lbnQgZXZlbnRzXHJcbiAgICAgIEBwcm90ZWN0ZWRcclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiX3VuYmluZEV2ZW50c1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfdW5iaW5kRXZlbnRzKCkge1xuICAgICAgdGhpcy5lbC51bmJpbmRFdmVudHMoKTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgIEZpcmVzIGN1c3RvbSBldmVudFxyXG4gICAgICBAcHJvdGVjdGVkXHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIl9maXJlRXZlbnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2ZpcmVFdmVudChldikge1xuICAgICAgdmFyIGxpc3RlbmVycyA9IHRoaXMuX2xpc3RlbmVyc1tldl07XG4gICAgICBpZiAoIWxpc3RlbmVycykgcmV0dXJuO1xuICAgICAgbGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24gKGwpIHtcbiAgICAgICAgcmV0dXJuIGwoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcclxuICAgICAgQ3VycmVudCBzZWxlY3Rpb24gc3RhcnRcclxuICAgICAgQHJlYWRvbmx5XHJcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiX3NhdmVTZWxlY3Rpb25cIixcblxuICAgIC8qKlxyXG4gICAgICBTdG9yZXMgY3VycmVudCBzZWxlY3Rpb25cclxuICAgICAgQHByb3RlY3RlZFxyXG4gICAgKi9cbiAgICB2YWx1ZTogZnVuY3Rpb24gX3NhdmVTZWxlY3Rpb24oKVxuICAgIC8qIGV2ICovXG4gICAge1xuICAgICAgaWYgKHRoaXMudmFsdWUgIT09IHRoaXMuZWwudmFsdWUpIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdFbGVtZW50IHZhbHVlIHdhcyBjaGFuZ2VkIG91dHNpZGUgb2YgbWFzay4gU3luY3Jvbml6ZSBtYXNrIHVzaW5nIGBtYXNrLnVwZGF0ZVZhbHVlKClgIHRvIHdvcmsgcHJvcGVybHkuJyk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuICAgICAgfVxuXG4gICAgICB0aGlzLl9zZWxlY3Rpb24gPSB7XG4gICAgICAgIHN0YXJ0OiB0aGlzLnNlbGVjdGlvblN0YXJ0LFxuICAgICAgICBlbmQ6IHRoaXMuY3Vyc29yUG9zXG4gICAgICB9O1xuICAgIH1cbiAgICAvKiogU3luY3Jvbml6ZXMgbW9kZWwgdmFsdWUgZnJvbSB2aWV3ICovXG5cbiAgfSwge1xuICAgIGtleTogXCJ1cGRhdGVWYWx1ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB1cGRhdGVWYWx1ZSgpIHtcbiAgICAgIHRoaXMubWFza2VkLnZhbHVlID0gdGhpcy5lbC52YWx1ZTtcbiAgICAgIHRoaXMuX3ZhbHVlID0gdGhpcy5tYXNrZWQudmFsdWU7XG4gICAgfVxuICAgIC8qKiBTeW5jcm9uaXplcyB2aWV3IGZyb20gbW9kZWwgdmFsdWUsIGZpcmVzIGNoYW5nZSBldmVudHMgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInVwZGF0ZUNvbnRyb2xcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdXBkYXRlQ29udHJvbCgpIHtcbiAgICAgIHZhciBuZXdVbm1hc2tlZFZhbHVlID0gdGhpcy5tYXNrZWQudW5tYXNrZWRWYWx1ZTtcbiAgICAgIHZhciBuZXdWYWx1ZSA9IHRoaXMubWFza2VkLnZhbHVlO1xuICAgICAgdmFyIGlzQ2hhbmdlZCA9IHRoaXMudW5tYXNrZWRWYWx1ZSAhPT0gbmV3VW5tYXNrZWRWYWx1ZSB8fCB0aGlzLnZhbHVlICE9PSBuZXdWYWx1ZTtcbiAgICAgIHRoaXMuX3VubWFza2VkVmFsdWUgPSBuZXdVbm1hc2tlZFZhbHVlO1xuICAgICAgdGhpcy5fdmFsdWUgPSBuZXdWYWx1ZTtcbiAgICAgIGlmICh0aGlzLmVsLnZhbHVlICE9PSBuZXdWYWx1ZSkgdGhpcy5lbC52YWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgaWYgKGlzQ2hhbmdlZCkgdGhpcy5fZmlyZUNoYW5nZUV2ZW50cygpO1xuICAgIH1cbiAgICAvKiogVXBkYXRlcyBvcHRpb25zIHdpdGggZGVlcCBlcXVhbCBjaGVjaywgcmVjcmVhdGVzIEB7bGluayBNYXNrZWR9IG1vZGVsIGlmIG1hc2sgdHlwZSBjaGFuZ2VzICovXG5cbiAgfSwge1xuICAgIGtleTogXCJ1cGRhdGVPcHRpb25zXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZU9wdGlvbnMob3B0cykge1xuICAgICAgdmFyIG1hc2sgPSBvcHRzLm1hc2ssXG4gICAgICAgICAgcmVzdE9wdHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob3B0cywgW1wibWFza1wiXSk7XG5cbiAgICAgIHZhciB1cGRhdGVNYXNrID0gIXRoaXMubWFza0VxdWFscyhtYXNrKTtcbiAgICAgIHZhciB1cGRhdGVPcHRzID0gIW9iamVjdEluY2x1ZGVzKHRoaXMubWFza2VkLCByZXN0T3B0cyk7XG4gICAgICBpZiAodXBkYXRlTWFzaykgdGhpcy5tYXNrID0gbWFzaztcbiAgICAgIGlmICh1cGRhdGVPcHRzKSB0aGlzLm1hc2tlZC51cGRhdGVPcHRpb25zKHJlc3RPcHRzKTtcbiAgICAgIGlmICh1cGRhdGVNYXNrIHx8IHVwZGF0ZU9wdHMpIHRoaXMudXBkYXRlQ29udHJvbCgpO1xuICAgIH1cbiAgICAvKiogVXBkYXRlcyBjdXJzb3IgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInVwZGF0ZUN1cnNvclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB1cGRhdGVDdXJzb3IoY3Vyc29yUG9zKSB7XG4gICAgICBpZiAoY3Vyc29yUG9zID09IG51bGwpIHJldHVybjtcbiAgICAgIHRoaXMuY3Vyc29yUG9zID0gY3Vyc29yUG9zOyAvLyBhbHNvIHF1ZXVlIGNoYW5nZSBjdXJzb3IgZm9yIG1vYmlsZSBicm93c2Vyc1xuXG4gICAgICB0aGlzLl9kZWxheVVwZGF0ZUN1cnNvcihjdXJzb3JQb3MpO1xuICAgIH1cbiAgICAvKipcclxuICAgICAgRGVsYXlzIGN1cnNvciB1cGRhdGUgdG8gc3VwcG9ydCBtb2JpbGUgYnJvd3NlcnNcclxuICAgICAgQHByaXZhdGVcclxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJfZGVsYXlVcGRhdGVDdXJzb3JcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2RlbGF5VXBkYXRlQ3Vyc29yKGN1cnNvclBvcykge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgdGhpcy5fYWJvcnRVcGRhdGVDdXJzb3IoKTtcblxuICAgICAgdGhpcy5fY2hhbmdpbmdDdXJzb3JQb3MgPSBjdXJzb3JQb3M7XG4gICAgICB0aGlzLl9jdXJzb3JDaGFuZ2luZyA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIV90aGlzLmVsKSByZXR1cm47IC8vIGlmIHdhcyBkZXN0cm95ZWRcblxuICAgICAgICBfdGhpcy5jdXJzb3JQb3MgPSBfdGhpcy5fY2hhbmdpbmdDdXJzb3JQb3M7XG5cbiAgICAgICAgX3RoaXMuX2Fib3J0VXBkYXRlQ3Vyc29yKCk7XG4gICAgICB9LCAxMCk7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICBGaXJlcyBjdXN0b20gZXZlbnRzXHJcbiAgICAgIEBwcm90ZWN0ZWRcclxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJfZmlyZUNoYW5nZUV2ZW50c1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfZmlyZUNoYW5nZUV2ZW50cygpIHtcbiAgICAgIHRoaXMuX2ZpcmVFdmVudCgnYWNjZXB0Jyk7XG5cbiAgICAgIGlmICh0aGlzLm1hc2tlZC5pc0NvbXBsZXRlKSB0aGlzLl9maXJlRXZlbnQoJ2NvbXBsZXRlJyk7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICBBYm9ydHMgZGVsYXllZCBjdXJzb3IgdXBkYXRlXHJcbiAgICAgIEBwcml2YXRlXHJcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiX2Fib3J0VXBkYXRlQ3Vyc29yXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9hYm9ydFVwZGF0ZUN1cnNvcigpIHtcbiAgICAgIGlmICh0aGlzLl9jdXJzb3JDaGFuZ2luZykge1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5fY3Vyc29yQ2hhbmdpbmcpO1xuICAgICAgICBkZWxldGUgdGhpcy5fY3Vyc29yQ2hhbmdpbmc7XG4gICAgICB9XG4gICAgfVxuICAgIC8qKiBBbGlnbnMgY3Vyc29yIHRvIG5lYXJlc3QgYXZhaWxhYmxlIHBvc2l0aW9uICovXG5cbiAgfSwge1xuICAgIGtleTogXCJhbGlnbkN1cnNvclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhbGlnbkN1cnNvcigpIHtcbiAgICAgIHRoaXMuY3Vyc29yUG9zID0gdGhpcy5tYXNrZWQubmVhcmVzdElucHV0UG9zKHRoaXMuY3Vyc29yUG9zLCBESVJFQ1RJT04uTEVGVCk7XG4gICAgfVxuICAgIC8qKiBBbGlnbnMgY3Vyc29yIG9ubHkgaWYgc2VsZWN0aW9uIGlzIGVtcHR5ICovXG5cbiAgfSwge1xuICAgIGtleTogXCJhbGlnbkN1cnNvckZyaWVuZGx5XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFsaWduQ3Vyc29yRnJpZW5kbHkoKSB7XG4gICAgICBpZiAodGhpcy5zZWxlY3Rpb25TdGFydCAhPT0gdGhpcy5jdXJzb3JQb3MpIHJldHVybjsgLy8gc2tpcCBpZiByYW5nZSBpcyBzZWxlY3RlZFxuXG4gICAgICB0aGlzLmFsaWduQ3Vyc29yKCk7XG4gICAgfVxuICAgIC8qKiBBZGRzIGxpc3RlbmVyIG9uIGN1c3RvbSBldmVudCAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwib25cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gb24oZXYsIGhhbmRsZXIpIHtcbiAgICAgIGlmICghdGhpcy5fbGlzdGVuZXJzW2V2XSkgdGhpcy5fbGlzdGVuZXJzW2V2XSA9IFtdO1xuXG4gICAgICB0aGlzLl9saXN0ZW5lcnNbZXZdLnB1c2goaGFuZGxlcik7XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKiogUmVtb3ZlcyBjdXN0b20gZXZlbnQgbGlzdGVuZXIgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIm9mZlwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvZmYoZXYsIGhhbmRsZXIpIHtcbiAgICAgIGlmICghdGhpcy5fbGlzdGVuZXJzW2V2XSkgcmV0dXJuIHRoaXM7XG5cbiAgICAgIGlmICghaGFuZGxlcikge1xuICAgICAgICBkZWxldGUgdGhpcy5fbGlzdGVuZXJzW2V2XTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG5cbiAgICAgIHZhciBoSW5kZXggPSB0aGlzLl9saXN0ZW5lcnNbZXZdLmluZGV4T2YoaGFuZGxlcik7XG5cbiAgICAgIGlmIChoSW5kZXggPj0gMCkgdGhpcy5fbGlzdGVuZXJzW2V2XS5zcGxpY2UoaEluZGV4LCAxKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKiogSGFuZGxlcyB2aWV3IGlucHV0IGV2ZW50ICovXG5cbiAgfSwge1xuICAgIGtleTogXCJfb25JbnB1dFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfb25JbnB1dCgpIHtcbiAgICAgIHRoaXMuX2Fib3J0VXBkYXRlQ3Vyc29yKCk7IC8vIGZpeCBzdHJhbmdlIElFIGJlaGF2aW9yXG5cblxuICAgICAgaWYgKCF0aGlzLl9zZWxlY3Rpb24pIHJldHVybiB0aGlzLnVwZGF0ZVZhbHVlKCk7XG4gICAgICB2YXIgZGV0YWlscyA9IG5ldyBBY3Rpb25EZXRhaWxzKCAvLyBuZXcgc3RhdGVcbiAgICAgIHRoaXMuZWwudmFsdWUsIHRoaXMuY3Vyc29yUG9zLCAvLyBvbGQgc3RhdGVcbiAgICAgIHRoaXMudmFsdWUsIHRoaXMuX3NlbGVjdGlvbik7XG4gICAgICB2YXIgb2xkUmF3VmFsdWUgPSB0aGlzLm1hc2tlZC5yYXdJbnB1dFZhbHVlO1xuICAgICAgdmFyIG9mZnNldCA9IHRoaXMubWFza2VkLnNwbGljZShkZXRhaWxzLnN0YXJ0Q2hhbmdlUG9zLCBkZXRhaWxzLnJlbW92ZWQubGVuZ3RoLCBkZXRhaWxzLmluc2VydGVkLCBkZXRhaWxzLnJlbW92ZURpcmVjdGlvbikub2Zmc2V0OyAvLyBmb3JjZSBhbGlnbiBpbiByZW1vdmUgZGlyZWN0aW9uIG9ubHkgaWYgbm8gaW5wdXQgY2hhcnMgd2VyZSByZW1vdmVkXG4gICAgICAvLyBvdGhlcndpc2Ugd2Ugc3RpbGwgbmVlZCB0byBhbGlnbiB3aXRoIE5PTkUgKHRvIGdldCBvdXQgZnJvbSBmaXhlZCBzeW1ib2xzIGZvciBpbnN0YW5jZSlcblxuICAgICAgdmFyIHJlbW92ZURpcmVjdGlvbiA9IG9sZFJhd1ZhbHVlID09PSB0aGlzLm1hc2tlZC5yYXdJbnB1dFZhbHVlID8gZGV0YWlscy5yZW1vdmVEaXJlY3Rpb24gOiBESVJFQ1RJT04uTk9ORTtcbiAgICAgIHZhciBjdXJzb3JQb3MgPSB0aGlzLm1hc2tlZC5uZWFyZXN0SW5wdXRQb3MoZGV0YWlscy5zdGFydENoYW5nZVBvcyArIG9mZnNldCwgcmVtb3ZlRGlyZWN0aW9uKTtcbiAgICAgIHRoaXMudXBkYXRlQ29udHJvbCgpO1xuICAgICAgdGhpcy51cGRhdGVDdXJzb3IoY3Vyc29yUG9zKTtcbiAgICB9XG4gICAgLyoqIEhhbmRsZXMgdmlldyBjaGFuZ2UgZXZlbnQgYW5kIGNvbW1pdHMgbW9kZWwgdmFsdWUgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIl9vbkNoYW5nZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfb25DaGFuZ2UoKSB7XG4gICAgICBpZiAodGhpcy52YWx1ZSAhPT0gdGhpcy5lbC52YWx1ZSkge1xuICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlKCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMubWFza2VkLmRvQ29tbWl0KCk7XG4gICAgICB0aGlzLnVwZGF0ZUNvbnRyb2woKTtcblxuICAgICAgdGhpcy5fc2F2ZVNlbGVjdGlvbigpO1xuICAgIH1cbiAgICAvKiogSGFuZGxlcyB2aWV3IGRyb3AgZXZlbnQsIHByZXZlbnRzIGJ5IGRlZmF1bHQgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIl9vbkRyb3BcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX29uRHJvcChldikge1xuICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cbiAgICAvKiogUmVzdG9yZSBsYXN0IHNlbGVjdGlvbiBvbiBmb2N1cyAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiX29uRm9jdXNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX29uRm9jdXMoZXYpIHtcbiAgICAgIGlmICh0aGlzLnNlbGVjdGlvblN0YXJ0ICE9PSB0aGlzLmN1cnNvclBvcykgcmV0dXJuOyAvLyBza2lwIGlmIHJhbmdlIGlzIHNlbGVjdGVkXG5cbiAgICAgIGlmICh0aGlzLl9zZWxlY3Rpb24pIHRoaXMuY3Vyc29yUG9zID0gdGhpcy5fc2VsZWN0aW9uLmVuZDtcbiAgICAgIHRoaXMuYWxpZ25DdXJzb3JGcmllbmRseSgpO1xuICAgIH1cbiAgICAvKiogVW5iaW5kIHZpZXcgZXZlbnRzIGFuZCByZW1vdmVzIGVsZW1lbnQgcmVmZXJlbmNlICovXG5cbiAgfSwge1xuICAgIGtleTogXCJkZXN0cm95XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgICB0aGlzLl91bmJpbmRFdmVudHMoKTsgLy8gJEZsb3dGaXhNZSB3aHkgbm90IGRvIHNvP1xuXG5cbiAgICAgIHRoaXMuX2xpc3RlbmVycy5sZW5ndGggPSAwO1xuICAgICAgZGVsZXRlIHRoaXMuZWw7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIm1hc2tcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLm1hc2tlZC5tYXNrO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQobWFzaykge1xuICAgICAgaWYgKHRoaXMubWFza0VxdWFscyhtYXNrKSkgcmV0dXJuO1xuXG4gICAgICBpZiAodGhpcy5tYXNrZWQuY29uc3RydWN0b3IgPT09IG1hc2tlZENsYXNzKG1hc2spKSB7XG4gICAgICAgIHRoaXMubWFza2VkLnVwZGF0ZU9wdGlvbnMoe1xuICAgICAgICAgIG1hc2s6IG1hc2tcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIG1hc2tlZCA9IGNyZWF0ZU1hc2soe1xuICAgICAgICBtYXNrOiBtYXNrXG4gICAgICB9KTtcbiAgICAgIG1hc2tlZC51bm1hc2tlZFZhbHVlID0gdGhpcy5tYXNrZWQudW5tYXNrZWRWYWx1ZTtcbiAgICAgIHRoaXMubWFza2VkID0gbWFza2VkO1xuICAgIH1cbiAgICAvKiogUmF3IHZhbHVlICovXG5cbiAgfSwge1xuICAgIGtleTogXCJ2YWx1ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQoc3RyKSB7XG4gICAgICB0aGlzLm1hc2tlZC52YWx1ZSA9IHN0cjtcbiAgICAgIHRoaXMudXBkYXRlQ29udHJvbCgpO1xuICAgICAgdGhpcy5hbGlnbkN1cnNvcigpO1xuICAgIH1cbiAgICAvKiogVW5tYXNrZWQgdmFsdWUgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInVubWFza2VkVmFsdWVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl91bm1hc2tlZFZhbHVlO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQoc3RyKSB7XG4gICAgICB0aGlzLm1hc2tlZC51bm1hc2tlZFZhbHVlID0gc3RyO1xuICAgICAgdGhpcy51cGRhdGVDb250cm9sKCk7XG4gICAgICB0aGlzLmFsaWduQ3Vyc29yKCk7XG4gICAgfVxuICAgIC8qKiBUeXBlZCB1bm1hc2tlZCB2YWx1ZSAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwidHlwZWRWYWx1ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMubWFza2VkLnR5cGVkVmFsdWU7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2YWwpIHtcbiAgICAgIHRoaXMubWFza2VkLnR5cGVkVmFsdWUgPSB2YWw7XG4gICAgICB0aGlzLnVwZGF0ZUNvbnRyb2woKTtcbiAgICAgIHRoaXMuYWxpZ25DdXJzb3IoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2VsZWN0aW9uU3RhcnRcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9jdXJzb3JDaGFuZ2luZyA/IHRoaXMuX2NoYW5naW5nQ3Vyc29yUG9zIDogdGhpcy5lbC5zZWxlY3Rpb25TdGFydDtcbiAgICB9XG4gICAgLyoqIEN1cnJlbnQgY3Vyc29yIHBvc2l0aW9uICovXG5cbiAgfSwge1xuICAgIGtleTogXCJjdXJzb3JQb3NcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9jdXJzb3JDaGFuZ2luZyA/IHRoaXMuX2NoYW5naW5nQ3Vyc29yUG9zIDogdGhpcy5lbC5zZWxlY3Rpb25FbmQ7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldChwb3MpIHtcbiAgICAgIGlmICghdGhpcy5lbC5pc0FjdGl2ZSkgcmV0dXJuO1xuICAgICAgdGhpcy5lbC5zZWxlY3QocG9zLCBwb3MpO1xuXG4gICAgICB0aGlzLl9zYXZlU2VsZWN0aW9uKCk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIElucHV0TWFzaztcbn0oKTtcblxuLyoqIFBhdHRlcm4gd2hpY2ggdmFsaWRhdGVzIGVudW0gdmFsdWVzICovXG5cbnZhciBNYXNrZWRFbnVtID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfTWFza2VkUGF0dGVybikge1xuICBfaW5oZXJpdHMoTWFza2VkRW51bSwgX01hc2tlZFBhdHRlcm4pO1xuXG4gIGZ1bmN0aW9uIE1hc2tlZEVudW0oKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1hc2tlZEVudW0pO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9nZXRQcm90b3R5cGVPZihNYXNrZWRFbnVtKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhNYXNrZWRFbnVtLCBbe1xuICAgIGtleTogXCJfdXBkYXRlXCIsXG5cbiAgICAvKipcclxuICAgICAgQG92ZXJyaWRlXHJcbiAgICAgIEBwYXJhbSB7T2JqZWN0fSBvcHRzXHJcbiAgICAqL1xuICAgIHZhbHVlOiBmdW5jdGlvbiBfdXBkYXRlKG9wdHMpIHtcbiAgICAgIC8vIFRPRE8gdHlwZVxuICAgICAgaWYgKG9wdHMuZW51bSkgb3B0cy5tYXNrID0gJyonLnJlcGVhdChvcHRzLmVudW1bMF0ubGVuZ3RoKTtcblxuICAgICAgX2dldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkRW51bS5wcm90b3R5cGUpLCBcIl91cGRhdGVcIiwgdGhpcykuY2FsbCh0aGlzLCBvcHRzKTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgIEBvdmVycmlkZVxyXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImRvVmFsaWRhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZG9WYWxpZGF0ZSgpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXMsXG4gICAgICAgICAgX2dldDI7XG5cbiAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5lbnVtLnNvbWUoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgcmV0dXJuIGUuaW5kZXhPZihfdGhpcy51bm1hc2tlZFZhbHVlKSA+PSAwO1xuICAgICAgfSkgJiYgKF9nZXQyID0gX2dldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkRW51bS5wcm90b3R5cGUpLCBcImRvVmFsaWRhdGVcIiwgdGhpcykpLmNhbGwuYXBwbHkoX2dldDIsIFt0aGlzXS5jb25jYXQoYXJncykpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBNYXNrZWRFbnVtO1xufShNYXNrZWRQYXR0ZXJuKTtcblxuLyoqXHJcbiAgTnVtYmVyIG1hc2tcclxuICBAcGFyYW0ge09iamVjdH0gb3B0c1xyXG4gIEBwYXJhbSB7c3RyaW5nfSBvcHRzLnJhZGl4IC0gU2luZ2xlIGNoYXJcclxuICBAcGFyYW0ge3N0cmluZ30gb3B0cy50aG91c2FuZHNTZXBhcmF0b3IgLSBTaW5nbGUgY2hhclxyXG4gIEBwYXJhbSB7QXJyYXk8c3RyaW5nPn0gb3B0cy5tYXBUb1JhZGl4IC0gQXJyYXkgb2Ygc2luZ2xlIGNoYXJzXHJcbiAgQHBhcmFtIHtudW1iZXJ9IG9wdHMubWluXHJcbiAgQHBhcmFtIHtudW1iZXJ9IG9wdHMubWF4XHJcbiAgQHBhcmFtIHtudW1iZXJ9IG9wdHMuc2NhbGUgLSBEaWdpdHMgYWZ0ZXIgcG9pbnRcclxuICBAcGFyYW0ge2Jvb2xlYW59IG9wdHMuc2lnbmVkIC0gQWxsb3cgbmVnYXRpdmVcclxuICBAcGFyYW0ge2Jvb2xlYW59IG9wdHMubm9ybWFsaXplWmVyb3MgLSBGbGFnIHRvIHJlbW92ZSBsZWFkaW5nIGFuZCB0cmFpbGluZyB6ZXJvcyBpbiB0aGUgZW5kIG9mIGVkaXRpbmdcclxuICBAcGFyYW0ge2Jvb2xlYW59IG9wdHMucGFkRnJhY3Rpb25hbFplcm9zIC0gRmxhZyB0byBwYWQgdHJhaWxpbmcgemVyb3MgYWZ0ZXIgcG9pbnQgaW4gdGhlIGVuZCBvZiBlZGl0aW5nXHJcbiovXG52YXIgTWFza2VkTnVtYmVyID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfTWFza2VkKSB7XG4gIF9pbmhlcml0cyhNYXNrZWROdW1iZXIsIF9NYXNrZWQpO1xuXG4gIC8qKiBTaW5nbGUgY2hhciAqL1xuXG4gIC8qKiBTaW5nbGUgY2hhciAqL1xuXG4gIC8qKiBBcnJheSBvZiBzaW5nbGUgY2hhcnMgKi9cblxuICAvKiogKi9cblxuICAvKiogKi9cblxuICAvKiogRGlnaXRzIGFmdGVyIHBvaW50ICovXG5cbiAgLyoqICovXG5cbiAgLyoqIEZsYWcgdG8gcmVtb3ZlIGxlYWRpbmcgYW5kIHRyYWlsaW5nIHplcm9zIGluIHRoZSBlbmQgb2YgZWRpdGluZyAqL1xuXG4gIC8qKiBGbGFnIHRvIHBhZCB0cmFpbGluZyB6ZXJvcyBhZnRlciBwb2ludCBpbiB0aGUgZW5kIG9mIGVkaXRpbmcgKi9cbiAgZnVuY3Rpb24gTWFza2VkTnVtYmVyKG9wdHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTWFza2VkTnVtYmVyKTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfZ2V0UHJvdG90eXBlT2YoTWFza2VkTnVtYmVyKS5jYWxsKHRoaXMsIE9iamVjdC5hc3NpZ24oe30sIE1hc2tlZE51bWJlci5ERUZBVUxUUywge30sIG9wdHMpKSk7XG4gIH1cbiAgLyoqXHJcbiAgICBAb3ZlcnJpZGVcclxuICAqL1xuXG5cbiAgX2NyZWF0ZUNsYXNzKE1hc2tlZE51bWJlciwgW3tcbiAgICBrZXk6IFwiX3VwZGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfdXBkYXRlKG9wdHMpIHtcbiAgICAgIF9nZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZE51bWJlci5wcm90b3R5cGUpLCBcIl91cGRhdGVcIiwgdGhpcykuY2FsbCh0aGlzLCBvcHRzKTtcblxuICAgICAgdGhpcy5fdXBkYXRlUmVnRXhwcygpO1xuICAgIH1cbiAgICAvKiogKi9cblxuICB9LCB7XG4gICAga2V5OiBcIl91cGRhdGVSZWdFeHBzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF91cGRhdGVSZWdFeHBzKCkge1xuICAgICAgLy8gdXNlIGRpZmZlcmVudCByZWdleHAgdG8gcHJvY2VzcyB1c2VyIGlucHV0IChtb3JlIHN0cmljdCwgaW5wdXQgc3VmZml4KSBhbmQgdGFpbCBzaGlmdGluZ1xuICAgICAgdmFyIHN0YXJ0ID0gJ14nICsgKHRoaXMuYWxsb3dOZWdhdGl2ZSA/ICdbK3xcXFxcLV0/JyA6ICcnKTtcbiAgICAgIHZhciBtaWRJbnB1dCA9ICcoMHwoWzEtOV0rXFxcXGQqKSk/JztcbiAgICAgIHZhciBtaWQgPSAnXFxcXGQqJztcbiAgICAgIHZhciBlbmQgPSAodGhpcy5zY2FsZSA/ICcoJyArIGVzY2FwZVJlZ0V4cCh0aGlzLnJhZGl4KSArICdcXFxcZHswLCcgKyB0aGlzLnNjYWxlICsgJ30pPycgOiAnJykgKyAnJCc7XG4gICAgICB0aGlzLl9udW1iZXJSZWdFeHBJbnB1dCA9IG5ldyBSZWdFeHAoc3RhcnQgKyBtaWRJbnB1dCArIGVuZCk7XG4gICAgICB0aGlzLl9udW1iZXJSZWdFeHAgPSBuZXcgUmVnRXhwKHN0YXJ0ICsgbWlkICsgZW5kKTtcbiAgICAgIHRoaXMuX21hcFRvUmFkaXhSZWdFeHAgPSBuZXcgUmVnRXhwKCdbJyArIHRoaXMubWFwVG9SYWRpeC5tYXAoZXNjYXBlUmVnRXhwKS5qb2luKCcnKSArICddJywgJ2cnKTtcbiAgICAgIHRoaXMuX3Rob3VzYW5kc1NlcGFyYXRvclJlZ0V4cCA9IG5ldyBSZWdFeHAoZXNjYXBlUmVnRXhwKHRoaXMudGhvdXNhbmRzU2VwYXJhdG9yKSwgJ2cnKTtcbiAgICB9XG4gICAgLyoqICovXG5cbiAgfSwge1xuICAgIGtleTogXCJfcmVtb3ZlVGhvdXNhbmRzU2VwYXJhdG9yc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfcmVtb3ZlVGhvdXNhbmRzU2VwYXJhdG9ycyh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHZhbHVlLnJlcGxhY2UodGhpcy5fdGhvdXNhbmRzU2VwYXJhdG9yUmVnRXhwLCAnJyk7XG4gICAgfVxuICAgIC8qKiAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiX2luc2VydFRob3VzYW5kc1NlcGFyYXRvcnNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2luc2VydFRob3VzYW5kc1NlcGFyYXRvcnModmFsdWUpIHtcbiAgICAgIC8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzI5MDExMDIvaG93LXRvLXByaW50LWEtbnVtYmVyLXdpdGgtY29tbWFzLWFzLXRob3VzYW5kcy1zZXBhcmF0b3JzLWluLWphdmFzY3JpcHRcbiAgICAgIHZhciBwYXJ0cyA9IHZhbHVlLnNwbGl0KHRoaXMucmFkaXgpO1xuICAgICAgcGFydHNbMF0gPSBwYXJ0c1swXS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCB0aGlzLnRob3VzYW5kc1NlcGFyYXRvcik7XG4gICAgICByZXR1cm4gcGFydHMuam9pbih0aGlzLnJhZGl4KTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgIEBvdmVycmlkZVxyXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImRvUHJlcGFyZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkb1ByZXBhcmUoc3RyKSB7XG4gICAgICB2YXIgX2dldDI7XG5cbiAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAoX2dldDIgPSBfZ2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWROdW1iZXIucHJvdG90eXBlKSwgXCJkb1ByZXBhcmVcIiwgdGhpcykpLmNhbGwuYXBwbHkoX2dldDIsIFt0aGlzLCB0aGlzLl9yZW1vdmVUaG91c2FuZHNTZXBhcmF0b3JzKHN0ci5yZXBsYWNlKHRoaXMuX21hcFRvUmFkaXhSZWdFeHAsIHRoaXMucmFkaXgpKV0uY29uY2F0KGFyZ3MpKTtcbiAgICB9XG4gICAgLyoqICovXG5cbiAgfSwge1xuICAgIGtleTogXCJfc2VwYXJhdG9yc0NvdW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9zZXBhcmF0b3JzQ291bnQodG8pIHtcbiAgICAgIHZhciBleHRlbmRPblNlcGFyYXRvcnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IGZhbHNlO1xuICAgICAgdmFyIGNvdW50ID0gMDtcblxuICAgICAgZm9yICh2YXIgcG9zID0gMDsgcG9zIDwgdG87ICsrcG9zKSB7XG4gICAgICAgIGlmICh0aGlzLl92YWx1ZS5pbmRleE9mKHRoaXMudGhvdXNhbmRzU2VwYXJhdG9yLCBwb3MpID09PSBwb3MpIHtcbiAgICAgICAgICArK2NvdW50O1xuICAgICAgICAgIGlmIChleHRlbmRPblNlcGFyYXRvcnMpIHRvICs9IHRoaXMudGhvdXNhbmRzU2VwYXJhdG9yLmxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gY291bnQ7XG4gICAgfVxuICAgIC8qKiAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiX3NlcGFyYXRvcnNDb3VudEZyb21TbGljZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfc2VwYXJhdG9yc0NvdW50RnJvbVNsaWNlKCkge1xuICAgICAgdmFyIHNsaWNlID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB0aGlzLl92YWx1ZTtcbiAgICAgIHJldHVybiB0aGlzLl9zZXBhcmF0b3JzQ291bnQodGhpcy5fcmVtb3ZlVGhvdXNhbmRzU2VwYXJhdG9ycyhzbGljZSkubGVuZ3RoLCB0cnVlKTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgIEBvdmVycmlkZVxyXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImV4dHJhY3RJbnB1dFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBleHRyYWN0SW5wdXQoKSB7XG4gICAgICB2YXIgZnJvbVBvcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogMDtcbiAgICAgIHZhciB0b1BvcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogdGhpcy52YWx1ZS5sZW5ndGg7XG4gICAgICB2YXIgZmxhZ3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMiA/IGFyZ3VtZW50c1syXSA6IHVuZGVmaW5lZDtcblxuICAgICAgdmFyIF90aGlzJF9hZGp1c3RSYW5nZVdpdCA9IHRoaXMuX2FkanVzdFJhbmdlV2l0aFNlcGFyYXRvcnMoZnJvbVBvcywgdG9Qb3MpO1xuXG4gICAgICB2YXIgX3RoaXMkX2FkanVzdFJhbmdlV2l0MiA9IF9zbGljZWRUb0FycmF5KF90aGlzJF9hZGp1c3RSYW5nZVdpdCwgMik7XG5cbiAgICAgIGZyb21Qb3MgPSBfdGhpcyRfYWRqdXN0UmFuZ2VXaXQyWzBdO1xuICAgICAgdG9Qb3MgPSBfdGhpcyRfYWRqdXN0UmFuZ2VXaXQyWzFdO1xuICAgICAgcmV0dXJuIHRoaXMuX3JlbW92ZVRob3VzYW5kc1NlcGFyYXRvcnMoX2dldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkTnVtYmVyLnByb3RvdHlwZSksIFwiZXh0cmFjdElucHV0XCIsIHRoaXMpLmNhbGwodGhpcywgZnJvbVBvcywgdG9Qb3MsIGZsYWdzKSk7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICBAb3ZlcnJpZGVcclxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJfYXBwZW5kQ2hhclJhd1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfYXBwZW5kQ2hhclJhdyhjaCkge1xuICAgICAgdmFyIGZsYWdzID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICAgIGlmICghdGhpcy50aG91c2FuZHNTZXBhcmF0b3IpIHJldHVybiBfZ2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWROdW1iZXIucHJvdG90eXBlKSwgXCJfYXBwZW5kQ2hhclJhd1wiLCB0aGlzKS5jYWxsKHRoaXMsIGNoLCBmbGFncyk7XG4gICAgICB2YXIgcHJldkJlZm9yZVRhaWxWYWx1ZSA9IGZsYWdzLnRhaWwgJiYgZmxhZ3MuX2JlZm9yZVRhaWxTdGF0ZSA/IGZsYWdzLl9iZWZvcmVUYWlsU3RhdGUuX3ZhbHVlIDogdGhpcy5fdmFsdWU7XG5cbiAgICAgIHZhciBwcmV2QmVmb3JlVGFpbFNlcGFyYXRvcnNDb3VudCA9IHRoaXMuX3NlcGFyYXRvcnNDb3VudEZyb21TbGljZShwcmV2QmVmb3JlVGFpbFZhbHVlKTtcblxuICAgICAgdGhpcy5fdmFsdWUgPSB0aGlzLl9yZW1vdmVUaG91c2FuZHNTZXBhcmF0b3JzKHRoaXMudmFsdWUpO1xuXG4gICAgICB2YXIgYXBwZW5kRGV0YWlscyA9IF9nZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZE51bWJlci5wcm90b3R5cGUpLCBcIl9hcHBlbmRDaGFyUmF3XCIsIHRoaXMpLmNhbGwodGhpcywgY2gsIGZsYWdzKTtcblxuICAgICAgdGhpcy5fdmFsdWUgPSB0aGlzLl9pbnNlcnRUaG91c2FuZHNTZXBhcmF0b3JzKHRoaXMuX3ZhbHVlKTtcbiAgICAgIHZhciBiZWZvcmVUYWlsVmFsdWUgPSBmbGFncy50YWlsICYmIGZsYWdzLl9iZWZvcmVUYWlsU3RhdGUgPyBmbGFncy5fYmVmb3JlVGFpbFN0YXRlLl92YWx1ZSA6IHRoaXMuX3ZhbHVlO1xuXG4gICAgICB2YXIgYmVmb3JlVGFpbFNlcGFyYXRvcnNDb3VudCA9IHRoaXMuX3NlcGFyYXRvcnNDb3VudEZyb21TbGljZShiZWZvcmVUYWlsVmFsdWUpO1xuXG4gICAgICBhcHBlbmREZXRhaWxzLnRhaWxTaGlmdCArPSAoYmVmb3JlVGFpbFNlcGFyYXRvcnNDb3VudCAtIHByZXZCZWZvcmVUYWlsU2VwYXJhdG9yc0NvdW50KSAqIHRoaXMudGhvdXNhbmRzU2VwYXJhdG9yLmxlbmd0aDtcbiAgICAgIHJldHVybiBhcHBlbmREZXRhaWxzO1xuICAgIH1cbiAgICAvKiogKi9cblxuICB9LCB7XG4gICAga2V5OiBcIl9maW5kU2VwYXJhdG9yQXJvdW5kXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9maW5kU2VwYXJhdG9yQXJvdW5kKHBvcykge1xuICAgICAgaWYgKHRoaXMudGhvdXNhbmRzU2VwYXJhdG9yKSB7XG4gICAgICAgIHZhciBzZWFyY2hGcm9tID0gcG9zIC0gdGhpcy50aG91c2FuZHNTZXBhcmF0b3IubGVuZ3RoICsgMTtcbiAgICAgICAgdmFyIHNlcGFyYXRvclBvcyA9IHRoaXMudmFsdWUuaW5kZXhPZih0aGlzLnRob3VzYW5kc1NlcGFyYXRvciwgc2VhcmNoRnJvbSk7XG4gICAgICAgIGlmIChzZXBhcmF0b3JQb3MgPD0gcG9zKSByZXR1cm4gc2VwYXJhdG9yUG9zO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gLTE7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIl9hZGp1c3RSYW5nZVdpdGhTZXBhcmF0b3JzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9hZGp1c3RSYW5nZVdpdGhTZXBhcmF0b3JzKGZyb20sIHRvKSB7XG4gICAgICB2YXIgc2VwYXJhdG9yQXJvdW5kRnJvbVBvcyA9IHRoaXMuX2ZpbmRTZXBhcmF0b3JBcm91bmQoZnJvbSk7XG5cbiAgICAgIGlmIChzZXBhcmF0b3JBcm91bmRGcm9tUG9zID49IDApIGZyb20gPSBzZXBhcmF0b3JBcm91bmRGcm9tUG9zO1xuXG4gICAgICB2YXIgc2VwYXJhdG9yQXJvdW5kVG9Qb3MgPSB0aGlzLl9maW5kU2VwYXJhdG9yQXJvdW5kKHRvKTtcblxuICAgICAgaWYgKHNlcGFyYXRvckFyb3VuZFRvUG9zID49IDApIHRvID0gc2VwYXJhdG9yQXJvdW5kVG9Qb3MgKyB0aGlzLnRob3VzYW5kc1NlcGFyYXRvci5sZW5ndGg7XG4gICAgICByZXR1cm4gW2Zyb20sIHRvXTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgIEBvdmVycmlkZVxyXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInJlbW92ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICB2YXIgZnJvbVBvcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogMDtcbiAgICAgIHZhciB0b1BvcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogdGhpcy52YWx1ZS5sZW5ndGg7XG5cbiAgICAgIHZhciBfdGhpcyRfYWRqdXN0UmFuZ2VXaXQzID0gdGhpcy5fYWRqdXN0UmFuZ2VXaXRoU2VwYXJhdG9ycyhmcm9tUG9zLCB0b1Bvcyk7XG5cbiAgICAgIHZhciBfdGhpcyRfYWRqdXN0UmFuZ2VXaXQ0ID0gX3NsaWNlZFRvQXJyYXkoX3RoaXMkX2FkanVzdFJhbmdlV2l0MywgMik7XG5cbiAgICAgIGZyb21Qb3MgPSBfdGhpcyRfYWRqdXN0UmFuZ2VXaXQ0WzBdO1xuICAgICAgdG9Qb3MgPSBfdGhpcyRfYWRqdXN0UmFuZ2VXaXQ0WzFdO1xuICAgICAgdmFyIHZhbHVlQmVmb3JlUG9zID0gdGhpcy52YWx1ZS5zbGljZSgwLCBmcm9tUG9zKTtcbiAgICAgIHZhciB2YWx1ZUFmdGVyUG9zID0gdGhpcy52YWx1ZS5zbGljZSh0b1Bvcyk7XG5cbiAgICAgIHZhciBwcmV2QmVmb3JlVGFpbFNlcGFyYXRvcnNDb3VudCA9IHRoaXMuX3NlcGFyYXRvcnNDb3VudCh2YWx1ZUJlZm9yZVBvcy5sZW5ndGgpO1xuXG4gICAgICB0aGlzLl92YWx1ZSA9IHRoaXMuX2luc2VydFRob3VzYW5kc1NlcGFyYXRvcnModGhpcy5fcmVtb3ZlVGhvdXNhbmRzU2VwYXJhdG9ycyh2YWx1ZUJlZm9yZVBvcyArIHZhbHVlQWZ0ZXJQb3MpKTtcblxuICAgICAgdmFyIGJlZm9yZVRhaWxTZXBhcmF0b3JzQ291bnQgPSB0aGlzLl9zZXBhcmF0b3JzQ291bnRGcm9tU2xpY2UodmFsdWVCZWZvcmVQb3MpO1xuXG4gICAgICByZXR1cm4gbmV3IENoYW5nZURldGFpbHMoe1xuICAgICAgICB0YWlsU2hpZnQ6IChiZWZvcmVUYWlsU2VwYXJhdG9yc0NvdW50IC0gcHJldkJlZm9yZVRhaWxTZXBhcmF0b3JzQ291bnQpICogdGhpcy50aG91c2FuZHNTZXBhcmF0b3IubGVuZ3RoXG4gICAgICB9KTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgIEBvdmVycmlkZVxyXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIm5lYXJlc3RJbnB1dFBvc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBuZWFyZXN0SW5wdXRQb3MoY3Vyc29yUG9zLCBkaXJlY3Rpb24pIHtcbiAgICAgIGlmICghdGhpcy50aG91c2FuZHNTZXBhcmF0b3IpIHJldHVybiBjdXJzb3JQb3M7XG5cbiAgICAgIHN3aXRjaCAoZGlyZWN0aW9uKSB7XG4gICAgICAgIGNhc2UgRElSRUNUSU9OLk5PTkU6XG4gICAgICAgIGNhc2UgRElSRUNUSU9OLkxFRlQ6XG4gICAgICAgIGNhc2UgRElSRUNUSU9OLkZPUkNFX0xFRlQ6XG4gICAgICAgICAge1xuICAgICAgICAgICAgdmFyIHNlcGFyYXRvckF0TGVmdFBvcyA9IHRoaXMuX2ZpbmRTZXBhcmF0b3JBcm91bmQoY3Vyc29yUG9zIC0gMSk7XG5cbiAgICAgICAgICAgIGlmIChzZXBhcmF0b3JBdExlZnRQb3MgPj0gMCkge1xuICAgICAgICAgICAgICB2YXIgc2VwYXJhdG9yQXRMZWZ0RW5kUG9zID0gc2VwYXJhdG9yQXRMZWZ0UG9zICsgdGhpcy50aG91c2FuZHNTZXBhcmF0b3IubGVuZ3RoO1xuXG4gICAgICAgICAgICAgIGlmIChjdXJzb3JQb3MgPCBzZXBhcmF0b3JBdExlZnRFbmRQb3MgfHwgdGhpcy52YWx1ZS5sZW5ndGggPD0gc2VwYXJhdG9yQXRMZWZ0RW5kUG9zIHx8IGRpcmVjdGlvbiA9PT0gRElSRUNUSU9OLkZPUkNFX0xFRlQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2VwYXJhdG9yQXRMZWZ0UG9zO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICBjYXNlIERJUkVDVElPTi5SSUdIVDpcbiAgICAgICAgY2FzZSBESVJFQ1RJT04uRk9SQ0VfUklHSFQ6XG4gICAgICAgICAge1xuICAgICAgICAgICAgdmFyIHNlcGFyYXRvckF0UmlnaHRQb3MgPSB0aGlzLl9maW5kU2VwYXJhdG9yQXJvdW5kKGN1cnNvclBvcyk7XG5cbiAgICAgICAgICAgIGlmIChzZXBhcmF0b3JBdFJpZ2h0UG9zID49IDApIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHNlcGFyYXRvckF0UmlnaHRQb3MgKyB0aGlzLnRob3VzYW5kc1NlcGFyYXRvci5sZW5ndGg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gY3Vyc29yUG9zO1xuICAgIH1cbiAgICAvKipcclxuICAgICAgQG92ZXJyaWRlXHJcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZG9WYWxpZGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkb1ZhbGlkYXRlKGZsYWdzKSB7XG4gICAgICB2YXIgcmVnZXhwID0gZmxhZ3MuaW5wdXQgPyB0aGlzLl9udW1iZXJSZWdFeHBJbnB1dCA6IHRoaXMuX251bWJlclJlZ0V4cDsgLy8gdmFsaWRhdGUgYXMgc3RyaW5nXG5cbiAgICAgIHZhciB2YWxpZCA9IHJlZ2V4cC50ZXN0KHRoaXMuX3JlbW92ZVRob3VzYW5kc1NlcGFyYXRvcnModGhpcy52YWx1ZSkpO1xuXG4gICAgICBpZiAodmFsaWQpIHtcbiAgICAgICAgLy8gdmFsaWRhdGUgYXMgbnVtYmVyXG4gICAgICAgIHZhciBudW1iZXIgPSB0aGlzLm51bWJlcjtcbiAgICAgICAgdmFsaWQgPSB2YWxpZCAmJiAhaXNOYU4obnVtYmVyKSAmJiAoIC8vIGNoZWNrIG1pbiBib3VuZCBmb3IgbmVnYXRpdmUgdmFsdWVzXG4gICAgICAgIHRoaXMubWluID09IG51bGwgfHwgdGhpcy5taW4gPj0gMCB8fCB0aGlzLm1pbiA8PSB0aGlzLm51bWJlcikgJiYgKCAvLyBjaGVjayBtYXggYm91bmQgZm9yIHBvc2l0aXZlIHZhbHVlc1xuICAgICAgICB0aGlzLm1heCA9PSBudWxsIHx8IHRoaXMubWF4IDw9IDAgfHwgdGhpcy5udW1iZXIgPD0gdGhpcy5tYXgpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdmFsaWQgJiYgX2dldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkTnVtYmVyLnByb3RvdHlwZSksIFwiZG9WYWxpZGF0ZVwiLCB0aGlzKS5jYWxsKHRoaXMsIGZsYWdzKTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgIEBvdmVycmlkZVxyXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImRvQ29tbWl0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRvQ29tbWl0KCkge1xuICAgICAgaWYgKHRoaXMudmFsdWUpIHtcbiAgICAgICAgdmFyIG51bWJlciA9IHRoaXMubnVtYmVyO1xuICAgICAgICB2YXIgdmFsaWRudW0gPSBudW1iZXI7IC8vIGNoZWNrIGJvdW5kc1xuXG4gICAgICAgIGlmICh0aGlzLm1pbiAhPSBudWxsKSB2YWxpZG51bSA9IE1hdGgubWF4KHZhbGlkbnVtLCB0aGlzLm1pbik7XG4gICAgICAgIGlmICh0aGlzLm1heCAhPSBudWxsKSB2YWxpZG51bSA9IE1hdGgubWluKHZhbGlkbnVtLCB0aGlzLm1heCk7XG4gICAgICAgIGlmICh2YWxpZG51bSAhPT0gbnVtYmVyKSB0aGlzLnVubWFza2VkVmFsdWUgPSBTdHJpbmcodmFsaWRudW0pO1xuICAgICAgICB2YXIgZm9ybWF0dGVkID0gdGhpcy52YWx1ZTtcbiAgICAgICAgaWYgKHRoaXMubm9ybWFsaXplWmVyb3MpIGZvcm1hdHRlZCA9IHRoaXMuX25vcm1hbGl6ZVplcm9zKGZvcm1hdHRlZCk7XG4gICAgICAgIGlmICh0aGlzLnBhZEZyYWN0aW9uYWxaZXJvcykgZm9ybWF0dGVkID0gdGhpcy5fcGFkRnJhY3Rpb25hbFplcm9zKGZvcm1hdHRlZCk7XG4gICAgICAgIHRoaXMuX3ZhbHVlID0gZm9ybWF0dGVkO1xuICAgICAgfVxuXG4gICAgICBfZ2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWROdW1iZXIucHJvdG90eXBlKSwgXCJkb0NvbW1pdFwiLCB0aGlzKS5jYWxsKHRoaXMpO1xuICAgIH1cbiAgICAvKiogKi9cblxuICB9LCB7XG4gICAga2V5OiBcIl9ub3JtYWxpemVaZXJvc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfbm9ybWFsaXplWmVyb3ModmFsdWUpIHtcbiAgICAgIHZhciBwYXJ0cyA9IHRoaXMuX3JlbW92ZVRob3VzYW5kc1NlcGFyYXRvcnModmFsdWUpLnNwbGl0KHRoaXMucmFkaXgpOyAvLyByZW1vdmUgbGVhZGluZyB6ZXJvc1xuXG5cbiAgICAgIHBhcnRzWzBdID0gcGFydHNbMF0ucmVwbGFjZSgvXihcXEQqKSgwKikoXFxkKikvLCBmdW5jdGlvbiAobWF0Y2gsIHNpZ24sIHplcm9zLCBudW0pIHtcbiAgICAgICAgcmV0dXJuIHNpZ24gKyBudW07XG4gICAgICB9KTsgLy8gYWRkIGxlYWRpbmcgemVyb1xuXG4gICAgICBpZiAodmFsdWUubGVuZ3RoICYmICEvXFxkJC8udGVzdChwYXJ0c1swXSkpIHBhcnRzWzBdID0gcGFydHNbMF0gKyAnMCc7XG5cbiAgICAgIGlmIChwYXJ0cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIHBhcnRzWzFdID0gcGFydHNbMV0ucmVwbGFjZSgvMCokLywgJycpOyAvLyByZW1vdmUgdHJhaWxpbmcgemVyb3NcblxuICAgICAgICBpZiAoIXBhcnRzWzFdLmxlbmd0aCkgcGFydHMubGVuZ3RoID0gMTsgLy8gcmVtb3ZlIGZyYWN0aW9uYWxcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuX2luc2VydFRob3VzYW5kc1NlcGFyYXRvcnMocGFydHMuam9pbih0aGlzLnJhZGl4KSk7XG4gICAgfVxuICAgIC8qKiAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiX3BhZEZyYWN0aW9uYWxaZXJvc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfcGFkRnJhY3Rpb25hbFplcm9zKHZhbHVlKSB7XG4gICAgICBpZiAoIXZhbHVlKSByZXR1cm4gdmFsdWU7XG4gICAgICB2YXIgcGFydHMgPSB2YWx1ZS5zcGxpdCh0aGlzLnJhZGl4KTtcbiAgICAgIGlmIChwYXJ0cy5sZW5ndGggPCAyKSBwYXJ0cy5wdXNoKCcnKTtcbiAgICAgIHBhcnRzWzFdID0gcGFydHNbMV0ucGFkRW5kKHRoaXMuc2NhbGUsICcwJyk7XG4gICAgICByZXR1cm4gcGFydHMuam9pbih0aGlzLnJhZGl4KTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgIEBvdmVycmlkZVxyXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInVubWFza2VkVmFsdWVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZW1vdmVUaG91c2FuZHNTZXBhcmF0b3JzKHRoaXMuX25vcm1hbGl6ZVplcm9zKHRoaXMudmFsdWUpKS5yZXBsYWNlKHRoaXMucmFkaXgsICcuJyk7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldCh1bm1hc2tlZFZhbHVlKSB7XG4gICAgICBfc2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWROdW1iZXIucHJvdG90eXBlKSwgXCJ1bm1hc2tlZFZhbHVlXCIsIHVubWFza2VkVmFsdWUucmVwbGFjZSgnLicsIHRoaXMucmFkaXgpLCB0aGlzLCB0cnVlKTtcbiAgICB9XG4gICAgLyoqIFBhcnNlZCBOdW1iZXIgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIm51bWJlclwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIE51bWJlcih0aGlzLnVubWFza2VkVmFsdWUpO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQobnVtYmVyKSB7XG4gICAgICB0aGlzLnVubWFza2VkVmFsdWUgPSBTdHJpbmcobnVtYmVyKTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgIEBvdmVycmlkZVxyXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInR5cGVkVmFsdWVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLm51bWJlcjtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHZhbHVlKSB7XG4gICAgICB0aGlzLm51bWJlciA9IHZhbHVlO1xuICAgIH1cbiAgICAvKipcclxuICAgICAgSXMgbmVnYXRpdmUgYWxsb3dlZFxyXG4gICAgICBAcmVhZG9ubHlcclxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJhbGxvd05lZ2F0aXZlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5zaWduZWQgfHwgdGhpcy5taW4gIT0gbnVsbCAmJiB0aGlzLm1pbiA8IDAgfHwgdGhpcy5tYXggIT0gbnVsbCAmJiB0aGlzLm1heCA8IDA7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIE1hc2tlZE51bWJlcjtcbn0oTWFza2VkKTtcbk1hc2tlZE51bWJlci5ERUZBVUxUUyA9IHtcbiAgcmFkaXg6ICcsJyxcbiAgdGhvdXNhbmRzU2VwYXJhdG9yOiAnJyxcbiAgbWFwVG9SYWRpeDogWycuJ10sXG4gIHNjYWxlOiAyLFxuICBzaWduZWQ6IGZhbHNlLFxuICBub3JtYWxpemVaZXJvczogdHJ1ZSxcbiAgcGFkRnJhY3Rpb25hbFplcm9zOiBmYWxzZVxufTtcblxuLyoqIE1hc2tpbmcgYnkgUmVnRXhwICovXG5cbnZhciBNYXNrZWRSZWdFeHAgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9NYXNrZWQpIHtcbiAgX2luaGVyaXRzKE1hc2tlZFJlZ0V4cCwgX01hc2tlZCk7XG5cbiAgZnVuY3Rpb24gTWFza2VkUmVnRXhwKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNYXNrZWRSZWdFeHApO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9nZXRQcm90b3R5cGVPZihNYXNrZWRSZWdFeHApLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKE1hc2tlZFJlZ0V4cCwgW3tcbiAgICBrZXk6IFwiX3VwZGF0ZVwiLFxuXG4gICAgLyoqXHJcbiAgICAgIEBvdmVycmlkZVxyXG4gICAgICBAcGFyYW0ge09iamVjdH0gb3B0c1xyXG4gICAgKi9cbiAgICB2YWx1ZTogZnVuY3Rpb24gX3VwZGF0ZShvcHRzKSB7XG4gICAgICBpZiAob3B0cy5tYXNrKSBvcHRzLnZhbGlkYXRlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZS5zZWFyY2gob3B0cy5tYXNrKSA+PSAwO1xuICAgICAgfTtcblxuICAgICAgX2dldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkUmVnRXhwLnByb3RvdHlwZSksIFwiX3VwZGF0ZVwiLCB0aGlzKS5jYWxsKHRoaXMsIG9wdHMpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBNYXNrZWRSZWdFeHA7XG59KE1hc2tlZCk7XG5cbi8qKiBNYXNraW5nIGJ5IGN1c3RvbSBGdW5jdGlvbiAqL1xuXG52YXIgTWFza2VkRnVuY3Rpb24gPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9NYXNrZWQpIHtcbiAgX2luaGVyaXRzKE1hc2tlZEZ1bmN0aW9uLCBfTWFza2VkKTtcblxuICBmdW5jdGlvbiBNYXNrZWRGdW5jdGlvbigpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTWFza2VkRnVuY3Rpb24pO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9nZXRQcm90b3R5cGVPZihNYXNrZWRGdW5jdGlvbikuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoTWFza2VkRnVuY3Rpb24sIFt7XG4gICAga2V5OiBcIl91cGRhdGVcIixcblxuICAgIC8qKlxyXG4gICAgICBAb3ZlcnJpZGVcclxuICAgICAgQHBhcmFtIHtPYmplY3R9IG9wdHNcclxuICAgICovXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF91cGRhdGUob3B0cykge1xuICAgICAgaWYgKG9wdHMubWFzaykgb3B0cy52YWxpZGF0ZSA9IG9wdHMubWFzaztcblxuICAgICAgX2dldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkRnVuY3Rpb24ucHJvdG90eXBlKSwgXCJfdXBkYXRlXCIsIHRoaXMpLmNhbGwodGhpcywgb3B0cyk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIE1hc2tlZEZ1bmN0aW9uO1xufShNYXNrZWQpO1xuXG4vKiogRHluYW1pYyBtYXNrIGZvciBjaG9vc2luZyBhcHJvcHJpYXRlIG1hc2sgaW4gcnVuLXRpbWUgKi9cbnZhciBNYXNrZWREeW5hbWljID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfTWFza2VkKSB7XG4gIF9pbmhlcml0cyhNYXNrZWREeW5hbWljLCBfTWFza2VkKTtcblxuICAvKiogQ3VycmVudGx5IGNob3NlbiBtYXNrICovXG5cbiAgLyoqIENvbXBsaWxlZCB7QGxpbmsgTWFza2VkfSBvcHRpb25zICovXG5cbiAgLyoqIENob29zZXMge0BsaW5rIE1hc2tlZH0gZGVwZW5kaW5nIG9uIGlucHV0IHZhbHVlICovXG5cbiAgLyoqXHJcbiAgICBAcGFyYW0ge09iamVjdH0gb3B0c1xyXG4gICovXG4gIGZ1bmN0aW9uIE1hc2tlZER5bmFtaWMob3B0cykge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNYXNrZWREeW5hbWljKTtcblxuICAgIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX2dldFByb3RvdHlwZU9mKE1hc2tlZER5bmFtaWMpLmNhbGwodGhpcywgT2JqZWN0LmFzc2lnbih7fSwgTWFza2VkRHluYW1pYy5ERUZBVUxUUywge30sIG9wdHMpKSk7XG4gICAgX3RoaXMuY3VycmVudE1hc2sgPSBudWxsO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuICAvKipcclxuICAgIEBvdmVycmlkZVxyXG4gICovXG5cblxuICBfY3JlYXRlQ2xhc3MoTWFza2VkRHluYW1pYywgW3tcbiAgICBrZXk6IFwiX3VwZGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfdXBkYXRlKG9wdHMpIHtcbiAgICAgIF9nZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZER5bmFtaWMucHJvdG90eXBlKSwgXCJfdXBkYXRlXCIsIHRoaXMpLmNhbGwodGhpcywgb3B0cyk7XG5cbiAgICAgIGlmICgnbWFzaycgaW4gb3B0cykge1xuICAgICAgICAvLyBtYXNrIGNvdWxkIGJlIHRvdGFsbHkgZHluYW1pYyB3aXRoIG9ubHkgYGRpc3BhdGNoYCBvcHRpb25cbiAgICAgICAgdGhpcy5jb21waWxlZE1hc2tzID0gQXJyYXkuaXNBcnJheShvcHRzLm1hc2spID8gb3B0cy5tYXNrLm1hcChmdW5jdGlvbiAobSkge1xuICAgICAgICAgIHJldHVybiBjcmVhdGVNYXNrKG0pO1xuICAgICAgICB9KSA6IFtdO1xuICAgICAgfVxuICAgIH1cbiAgICAvKipcclxuICAgICAgQG92ZXJyaWRlXHJcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiX2FwcGVuZENoYXJSYXdcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2FwcGVuZENoYXJSYXcoKSB7XG4gICAgICB2YXIgZGV0YWlscyA9IHRoaXMuX2FwcGx5RGlzcGF0Y2guYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblxuICAgICAgaWYgKHRoaXMuY3VycmVudE1hc2spIHtcbiAgICAgICAgdmFyIF90aGlzJGN1cnJlbnRNYXNrO1xuXG4gICAgICAgIGRldGFpbHMuYWdncmVnYXRlKChfdGhpcyRjdXJyZW50TWFzayA9IHRoaXMuY3VycmVudE1hc2spLl9hcHBlbmRDaGFyLmFwcGx5KF90aGlzJGN1cnJlbnRNYXNrLCBhcmd1bWVudHMpKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRldGFpbHM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIl9hcHBseURpc3BhdGNoXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9hcHBseURpc3BhdGNoKCkge1xuICAgICAgdmFyIGFwcGVuZGVkID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAnJztcbiAgICAgIHZhciBmbGFncyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgICB2YXIgcHJldlZhbHVlQmVmb3JlVGFpbCA9IGZsYWdzLnRhaWwgJiYgZmxhZ3MuX2JlZm9yZVRhaWxTdGF0ZSAhPSBudWxsID8gZmxhZ3MuX2JlZm9yZVRhaWxTdGF0ZS5fdmFsdWUgOiB0aGlzLnZhbHVlO1xuICAgICAgdmFyIGlucHV0VmFsdWUgPSB0aGlzLnJhd0lucHV0VmFsdWU7XG4gICAgICB2YXIgaW5zZXJ0VmFsdWUgPSBmbGFncy50YWlsICYmIGZsYWdzLl9iZWZvcmVUYWlsU3RhdGUgIT0gbnVsbCA/IC8vICRGbG93Rml4TWUgLSB0aXJlZCB0byBmaWdodCB3aXRoIHR5cGUgc3lzdGVtXG4gICAgICBmbGFncy5fYmVmb3JlVGFpbFN0YXRlLl9yYXdJbnB1dFZhbHVlIDogaW5wdXRWYWx1ZTtcbiAgICAgIHZhciB0YWlsVmFsdWUgPSBpbnB1dFZhbHVlLnNsaWNlKGluc2VydFZhbHVlLmxlbmd0aCk7XG4gICAgICB2YXIgcHJldk1hc2sgPSB0aGlzLmN1cnJlbnRNYXNrO1xuICAgICAgdmFyIGRldGFpbHMgPSBuZXcgQ2hhbmdlRGV0YWlscygpO1xuICAgICAgdmFyIHByZXZNYXNrU3RhdGUgPSBwcmV2TWFzayAmJiBwcmV2TWFzay5zdGF0ZTsgLy8gY2xvbmUgZmxhZ3MgdG8gcHJldmVudCBvdmVyd3JpdGluZyBgX2JlZm9yZVRhaWxTdGF0ZWBcblxuICAgICAgdGhpcy5jdXJyZW50TWFzayA9IHRoaXMuZG9EaXNwYXRjaChhcHBlbmRlZCwgT2JqZWN0LmFzc2lnbih7fSwgZmxhZ3MpKTsgLy8gcmVzdG9yZSBzdGF0ZSBhZnRlciBkaXNwYXRjaFxuXG4gICAgICBpZiAodGhpcy5jdXJyZW50TWFzaykge1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50TWFzayAhPT0gcHJldk1hc2spIHtcbiAgICAgICAgICAvLyBpZiBtYXNrIGNoYW5nZWQgcmVhcHBseSBpbnB1dFxuICAgICAgICAgIHRoaXMuY3VycmVudE1hc2sucmVzZXQoKTsgLy8gJEZsb3dGaXhNZSAtIGl0J3Mgb2ssIHdlIGRvbid0IGNoYW5nZSBjdXJyZW50IG1hc2sgYWJvdmVcblxuICAgICAgICAgIHZhciBkID0gdGhpcy5jdXJyZW50TWFzay5hcHBlbmQoaW5zZXJ0VmFsdWUsIHtcbiAgICAgICAgICAgIHJhdzogdHJ1ZVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGRldGFpbHMudGFpbFNoaWZ0ID0gZC5pbnNlcnRlZC5sZW5ndGggLSBwcmV2VmFsdWVCZWZvcmVUYWlsLmxlbmd0aDtcblxuICAgICAgICAgIGlmICh0YWlsVmFsdWUpIHtcbiAgICAgICAgICAgIC8vICRGbG93Rml4TWUgLSBpdCdzIG9rLCB3ZSBkb24ndCBjaGFuZ2UgY3VycmVudCBtYXNrIGFib3ZlXG4gICAgICAgICAgICBkZXRhaWxzLnRhaWxTaGlmdCArPSB0aGlzLmN1cnJlbnRNYXNrLmFwcGVuZCh0YWlsVmFsdWUsIHtcbiAgICAgICAgICAgICAgcmF3OiB0cnVlLFxuICAgICAgICAgICAgICB0YWlsOiB0cnVlXG4gICAgICAgICAgICB9KS50YWlsU2hpZnQ7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIERpc3BhdGNoIGNhbiBkbyBzb21ldGhpbmcgYmFkIHdpdGggc3RhdGUsIHNvXG4gICAgICAgICAgLy8gcmVzdG9yZSBwcmV2IG1hc2sgc3RhdGVcbiAgICAgICAgICB0aGlzLmN1cnJlbnRNYXNrLnN0YXRlID0gcHJldk1hc2tTdGF0ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGV0YWlscztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiX2FwcGVuZFBsYWNlaG9sZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9hcHBlbmRQbGFjZWhvbGRlcigpIHtcbiAgICAgIHZhciBkZXRhaWxzID0gdGhpcy5fYXBwbHlEaXNwYXRjaC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXG4gICAgICBpZiAodGhpcy5jdXJyZW50TWFzaykge1xuICAgICAgICBkZXRhaWxzLmFnZ3JlZ2F0ZSh0aGlzLmN1cnJlbnRNYXNrLl9hcHBlbmRQbGFjZWhvbGRlcigpKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRldGFpbHM7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICBAb3ZlcnJpZGVcclxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJkb0Rpc3BhdGNoXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRvRGlzcGF0Y2goYXBwZW5kZWQpIHtcbiAgICAgIHZhciBmbGFncyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgICByZXR1cm4gdGhpcy5kaXNwYXRjaChhcHBlbmRlZCwgdGhpcywgZmxhZ3MpO1xuICAgIH1cbiAgICAvKipcclxuICAgICAgQG92ZXJyaWRlXHJcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZG9WYWxpZGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkb1ZhbGlkYXRlKCkge1xuICAgICAgdmFyIF9nZXQyLCBfdGhpcyRjdXJyZW50TWFzazI7XG5cbiAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gKF9nZXQyID0gX2dldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkRHluYW1pYy5wcm90b3R5cGUpLCBcImRvVmFsaWRhdGVcIiwgdGhpcykpLmNhbGwuYXBwbHkoX2dldDIsIFt0aGlzXS5jb25jYXQoYXJncykpICYmICghdGhpcy5jdXJyZW50TWFzayB8fCAoX3RoaXMkY3VycmVudE1hc2syID0gdGhpcy5jdXJyZW50TWFzaykuZG9WYWxpZGF0ZS5hcHBseShfdGhpcyRjdXJyZW50TWFzazIsIGFyZ3MpKTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgIEBvdmVycmlkZVxyXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInJlc2V0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlc2V0KCkge1xuICAgICAgaWYgKHRoaXMuY3VycmVudE1hc2spIHRoaXMuY3VycmVudE1hc2sucmVzZXQoKTtcbiAgICAgIHRoaXMuY29tcGlsZWRNYXNrcy5mb3JFYWNoKGZ1bmN0aW9uIChtKSB7XG4gICAgICAgIHJldHVybiBtLnJlc2V0KCk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgIEBvdmVycmlkZVxyXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInJlbW92ZVwiLFxuXG4gICAgLyoqXHJcbiAgICAgIEBvdmVycmlkZVxyXG4gICAgKi9cbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgdmFyIGRldGFpbHMgPSBuZXcgQ2hhbmdlRGV0YWlscygpO1xuXG4gICAgICBpZiAodGhpcy5jdXJyZW50TWFzaykge1xuICAgICAgICB2YXIgX3RoaXMkY3VycmVudE1hc2szO1xuXG4gICAgICAgIGRldGFpbHMuYWdncmVnYXRlKChfdGhpcyRjdXJyZW50TWFzazMgPSB0aGlzLmN1cnJlbnRNYXNrKS5yZW1vdmUuYXBwbHkoX3RoaXMkY3VycmVudE1hc2szLCBhcmd1bWVudHMpKSAvLyB1cGRhdGUgd2l0aCBkaXNwYXRjaFxuICAgICAgICAuYWdncmVnYXRlKHRoaXMuX2FwcGx5RGlzcGF0Y2goKSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkZXRhaWxzO1xuICAgIH1cbiAgICAvKipcclxuICAgICAgQG92ZXJyaWRlXHJcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZXh0cmFjdElucHV0XCIsXG5cbiAgICAvKipcclxuICAgICAgQG92ZXJyaWRlXHJcbiAgICAqL1xuICAgIHZhbHVlOiBmdW5jdGlvbiBleHRyYWN0SW5wdXQoKSB7XG4gICAgICB2YXIgX3RoaXMkY3VycmVudE1hc2s0O1xuXG4gICAgICByZXR1cm4gdGhpcy5jdXJyZW50TWFzayA/IChfdGhpcyRjdXJyZW50TWFzazQgPSB0aGlzLmN1cnJlbnRNYXNrKS5leHRyYWN0SW5wdXQuYXBwbHkoX3RoaXMkY3VycmVudE1hc2s0LCBhcmd1bWVudHMpIDogJyc7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICBAb3ZlcnJpZGVcclxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJleHRyYWN0VGFpbFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBleHRyYWN0VGFpbCgpIHtcbiAgICAgIHZhciBfdGhpcyRjdXJyZW50TWFzazUsIF9nZXQzO1xuXG4gICAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgYXJnc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jdXJyZW50TWFzayA/IChfdGhpcyRjdXJyZW50TWFzazUgPSB0aGlzLmN1cnJlbnRNYXNrKS5leHRyYWN0VGFpbC5hcHBseShfdGhpcyRjdXJyZW50TWFzazUsIGFyZ3MpIDogKF9nZXQzID0gX2dldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkRHluYW1pYy5wcm90b3R5cGUpLCBcImV4dHJhY3RUYWlsXCIsIHRoaXMpKS5jYWxsLmFwcGx5KF9nZXQzLCBbdGhpc10uY29uY2F0KGFyZ3MpKTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgIEBvdmVycmlkZVxyXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImRvQ29tbWl0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRvQ29tbWl0KCkge1xuICAgICAgaWYgKHRoaXMuY3VycmVudE1hc2spIHRoaXMuY3VycmVudE1hc2suZG9Db21taXQoKTtcblxuICAgICAgX2dldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkRHluYW1pYy5wcm90b3R5cGUpLCBcImRvQ29tbWl0XCIsIHRoaXMpLmNhbGwodGhpcyk7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICBAb3ZlcnJpZGVcclxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJuZWFyZXN0SW5wdXRQb3NcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbmVhcmVzdElucHV0UG9zKCkge1xuICAgICAgdmFyIF90aGlzJGN1cnJlbnRNYXNrNiwgX2dldDQ7XG5cbiAgICAgIGZvciAodmFyIF9sZW4zID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMyksIF9rZXkzID0gMDsgX2tleTMgPCBfbGVuMzsgX2tleTMrKykge1xuICAgICAgICBhcmdzW19rZXkzXSA9IGFyZ3VtZW50c1tfa2V5M107XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRNYXNrID8gKF90aGlzJGN1cnJlbnRNYXNrNiA9IHRoaXMuY3VycmVudE1hc2spLm5lYXJlc3RJbnB1dFBvcy5hcHBseShfdGhpcyRjdXJyZW50TWFzazYsIGFyZ3MpIDogKF9nZXQ0ID0gX2dldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkRHluYW1pYy5wcm90b3R5cGUpLCBcIm5lYXJlc3RJbnB1dFBvc1wiLCB0aGlzKSkuY2FsbC5hcHBseShfZ2V0NCwgW3RoaXNdLmNvbmNhdChhcmdzKSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInZhbHVlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5jdXJyZW50TWFzayA/IHRoaXMuY3VycmVudE1hc2sudmFsdWUgOiAnJztcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHZhbHVlKSB7XG4gICAgICBfc2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWREeW5hbWljLnByb3RvdHlwZSksIFwidmFsdWVcIiwgdmFsdWUsIHRoaXMsIHRydWUpO1xuICAgIH1cbiAgICAvKipcclxuICAgICAgQG92ZXJyaWRlXHJcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwidW5tYXNrZWRWYWx1ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuY3VycmVudE1hc2sgPyB0aGlzLmN1cnJlbnRNYXNrLnVubWFza2VkVmFsdWUgOiAnJztcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHVubWFza2VkVmFsdWUpIHtcbiAgICAgIF9zZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZER5bmFtaWMucHJvdG90eXBlKSwgXCJ1bm1hc2tlZFZhbHVlXCIsIHVubWFza2VkVmFsdWUsIHRoaXMsIHRydWUpO1xuICAgIH1cbiAgICAvKipcclxuICAgICAgQG92ZXJyaWRlXHJcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwidHlwZWRWYWx1ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuY3VycmVudE1hc2sgPyB0aGlzLmN1cnJlbnRNYXNrLnR5cGVkVmFsdWUgOiAnJztcbiAgICB9IC8vIHByb2JhYmx5IHR5cGVkVmFsdWUgc2hvdWxkIG5vdCBiZSB1c2VkIHdpdGggZHluYW1pY1xuICAgICxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2YWx1ZSkge1xuICAgICAgdmFyIHVubWFza2VkVmFsdWUgPSBTdHJpbmcodmFsdWUpOyAvLyBkb3VibGUgY2hlY2sgaXRcblxuICAgICAgaWYgKHRoaXMuY3VycmVudE1hc2spIHtcbiAgICAgICAgdGhpcy5jdXJyZW50TWFzay50eXBlZFZhbHVlID0gdmFsdWU7XG4gICAgICAgIHVubWFza2VkVmFsdWUgPSB0aGlzLmN1cnJlbnRNYXNrLnVubWFza2VkVmFsdWU7XG4gICAgICB9XG5cbiAgICAgIHRoaXMudW5tYXNrZWRWYWx1ZSA9IHVubWFza2VkVmFsdWU7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICBAb3ZlcnJpZGVcclxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJpc0NvbXBsZXRlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gISF0aGlzLmN1cnJlbnRNYXNrICYmIHRoaXMuY3VycmVudE1hc2suaXNDb21wbGV0ZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic3RhdGVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBfZ2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWREeW5hbWljLnByb3RvdHlwZSksIFwic3RhdGVcIiwgdGhpcyksIHtcbiAgICAgICAgX3Jhd0lucHV0VmFsdWU6IHRoaXMucmF3SW5wdXRWYWx1ZSxcbiAgICAgICAgY29tcGlsZWRNYXNrczogdGhpcy5jb21waWxlZE1hc2tzLm1hcChmdW5jdGlvbiAobSkge1xuICAgICAgICAgIHJldHVybiBtLnN0YXRlO1xuICAgICAgICB9KSxcbiAgICAgICAgY3VycmVudE1hc2tSZWY6IHRoaXMuY3VycmVudE1hc2ssXG4gICAgICAgIGN1cnJlbnRNYXNrOiB0aGlzLmN1cnJlbnRNYXNrICYmIHRoaXMuY3VycmVudE1hc2suc3RhdGVcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQoc3RhdGUpIHtcbiAgICAgIHZhciBjb21waWxlZE1hc2tzID0gc3RhdGUuY29tcGlsZWRNYXNrcyxcbiAgICAgICAgICBjdXJyZW50TWFza1JlZiA9IHN0YXRlLmN1cnJlbnRNYXNrUmVmLFxuICAgICAgICAgIGN1cnJlbnRNYXNrID0gc3RhdGUuY3VycmVudE1hc2ssXG4gICAgICAgICAgbWFza2VkU3RhdGUgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoc3RhdGUsIFtcImNvbXBpbGVkTWFza3NcIiwgXCJjdXJyZW50TWFza1JlZlwiLCBcImN1cnJlbnRNYXNrXCJdKTtcblxuICAgICAgdGhpcy5jb21waWxlZE1hc2tzLmZvckVhY2goZnVuY3Rpb24gKG0sIG1pKSB7XG4gICAgICAgIHJldHVybiBtLnN0YXRlID0gY29tcGlsZWRNYXNrc1ttaV07XG4gICAgICB9KTtcblxuICAgICAgaWYgKGN1cnJlbnRNYXNrUmVmICE9IG51bGwpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50TWFzayA9IGN1cnJlbnRNYXNrUmVmO1xuICAgICAgICB0aGlzLmN1cnJlbnRNYXNrLnN0YXRlID0gY3VycmVudE1hc2s7XG4gICAgICB9XG5cbiAgICAgIF9zZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZER5bmFtaWMucHJvdG90eXBlKSwgXCJzdGF0ZVwiLCBtYXNrZWRTdGF0ZSwgdGhpcywgdHJ1ZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIm92ZXJ3cml0ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuY3VycmVudE1hc2sgPyB0aGlzLmN1cnJlbnRNYXNrLm92ZXJ3cml0ZSA6IF9nZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZER5bmFtaWMucHJvdG90eXBlKSwgXCJvdmVyd3JpdGVcIiwgdGhpcyk7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldChvdmVyd3JpdGUpIHtcbiAgICAgIGNvbnNvbGUud2FybignXCJvdmVyd3JpdGVcIiBvcHRpb24gaXMgbm90IGF2YWlsYWJsZSBpbiBkeW5hbWljIG1hc2ssIHVzZSB0aGlzIG9wdGlvbiBpbiBzaWJsaW5ncycpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBNYXNrZWREeW5hbWljO1xufShNYXNrZWQpO1xuTWFza2VkRHluYW1pYy5ERUZBVUxUUyA9IHtcbiAgZGlzcGF0Y2g6IGZ1bmN0aW9uIGRpc3BhdGNoKGFwcGVuZGVkLCBtYXNrZWQsIGZsYWdzKSB7XG4gICAgaWYgKCFtYXNrZWQuY29tcGlsZWRNYXNrcy5sZW5ndGgpIHJldHVybjtcbiAgICB2YXIgaW5wdXRWYWx1ZSA9IG1hc2tlZC5yYXdJbnB1dFZhbHVlOyAvLyBzaW11bGF0ZSBpbnB1dFxuXG4gICAgdmFyIGlucHV0cyA9IG1hc2tlZC5jb21waWxlZE1hc2tzLm1hcChmdW5jdGlvbiAobSwgaW5kZXgpIHtcbiAgICAgIG0ucmVzZXQoKTtcbiAgICAgIG0uYXBwZW5kKGlucHV0VmFsdWUsIHtcbiAgICAgICAgcmF3OiB0cnVlXG4gICAgICB9KTtcbiAgICAgIG0uYXBwZW5kKGFwcGVuZGVkLCBmbGFncyk7XG4gICAgICB2YXIgd2VpZ2h0ID0gbS5yYXdJbnB1dFZhbHVlLmxlbmd0aDtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHdlaWdodDogd2VpZ2h0LFxuICAgICAgICBpbmRleDogaW5kZXhcbiAgICAgIH07XG4gICAgfSk7IC8vIHBvcCBtYXNrcyB3aXRoIGxvbmdlciB2YWx1ZXMgZmlyc3RcblxuICAgIGlucHV0cy5zb3J0KGZ1bmN0aW9uIChpMSwgaTIpIHtcbiAgICAgIHJldHVybiBpMi53ZWlnaHQgLSBpMS53ZWlnaHQ7XG4gICAgfSk7XG4gICAgcmV0dXJuIG1hc2tlZC5jb21waWxlZE1hc2tzW2lucHV0c1swXS5pbmRleF07XG4gIH1cbn07XG5cbi8qKlxyXG4gKiBBcHBsaWVzIG1hc2sgb24gZWxlbWVudC5cclxuICogQGNvbnN0cnVjdG9yXHJcbiAqIEBwYXJhbSB7SFRNTElucHV0RWxlbWVudHxIVE1MVGV4dEFyZWFFbGVtZW50fE1hc2tFbGVtZW50fSBlbCAtIEVsZW1lbnQgdG8gYXBwbHkgbWFza1xyXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIEN1c3RvbSBtYXNrIG9wdGlvbnNcclxuICogQHJldHVybiB7SW5wdXRNYXNrfVxyXG4gKi9cblxuZnVuY3Rpb24gSU1hc2soZWwpIHtcbiAgdmFyIG9wdHMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAvLyBjdXJyZW50bHkgYXZhaWxhYmxlIG9ubHkgZm9yIGlucHV0LWxpa2UgZWxlbWVudHNcbiAgcmV0dXJuIG5ldyBJbnB1dE1hc2soZWwsIG9wdHMpO1xufVxuLyoqIHtAbGluayBJbnB1dE1hc2t9ICovXG5cblxuSU1hc2suSW5wdXRNYXNrID0gSW5wdXRNYXNrO1xuLyoqIHtAbGluayBNYXNrZWR9ICovXG5cbklNYXNrLk1hc2tlZCA9IE1hc2tlZDtcbi8qKiB7QGxpbmsgTWFza2VkUGF0dGVybn0gKi9cblxuSU1hc2suTWFza2VkUGF0dGVybiA9IE1hc2tlZFBhdHRlcm47XG4vKioge0BsaW5rIE1hc2tlZEVudW19ICovXG5cbklNYXNrLk1hc2tlZEVudW0gPSBNYXNrZWRFbnVtO1xuLyoqIHtAbGluayBNYXNrZWRSYW5nZX0gKi9cblxuSU1hc2suTWFza2VkUmFuZ2UgPSBNYXNrZWRSYW5nZTtcbi8qKiB7QGxpbmsgTWFza2VkTnVtYmVyfSAqL1xuXG5JTWFzay5NYXNrZWROdW1iZXIgPSBNYXNrZWROdW1iZXI7XG4vKioge0BsaW5rIE1hc2tlZERhdGV9ICovXG5cbklNYXNrLk1hc2tlZERhdGUgPSBNYXNrZWREYXRlO1xuLyoqIHtAbGluayBNYXNrZWRSZWdFeHB9ICovXG5cbklNYXNrLk1hc2tlZFJlZ0V4cCA9IE1hc2tlZFJlZ0V4cDtcbi8qKiB7QGxpbmsgTWFza2VkRnVuY3Rpb259ICovXG5cbklNYXNrLk1hc2tlZEZ1bmN0aW9uID0gTWFza2VkRnVuY3Rpb247XG4vKioge0BsaW5rIE1hc2tlZER5bmFtaWN9ICovXG5cbklNYXNrLk1hc2tlZER5bmFtaWMgPSBNYXNrZWREeW5hbWljO1xuLyoqIHtAbGluayBjcmVhdGVNYXNrfSAqL1xuXG5JTWFzay5jcmVhdGVNYXNrID0gY3JlYXRlTWFzaztcbi8qKiB7QGxpbmsgTWFza0VsZW1lbnR9ICovXG5cbklNYXNrLk1hc2tFbGVtZW50ID0gTWFza0VsZW1lbnQ7XG4vKioge0BsaW5rIEhUTUxNYXNrRWxlbWVudH0gKi9cblxuSU1hc2suSFRNTE1hc2tFbGVtZW50ID0gSFRNTE1hc2tFbGVtZW50O1xuZy5JTWFzayA9IElNYXNrO1xuXG5leHBvcnQgZGVmYXVsdCBJTWFzaztcbmV4cG9ydCB7IEhUTUxNYXNrRWxlbWVudCwgSW5wdXRNYXNrLCBNYXNrRWxlbWVudCwgTWFza2VkLCBNYXNrZWREYXRlLCBNYXNrZWREeW5hbWljLCBNYXNrZWRFbnVtLCBNYXNrZWRGdW5jdGlvbiwgTWFza2VkTnVtYmVyLCBNYXNrZWRQYXR0ZXJuLCBNYXNrZWRSYW5nZSwgTWFza2VkUmVnRXhwLCBjcmVhdGVNYXNrIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbWFzay5lc20uanMubWFwXG4iLCIhZnVuY3Rpb24oZSx0KXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz10KCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXSx0KTpcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9leHBvcnRzLmRhdGVwaWNrZXI9dCgpOmUuZGF0ZXBpY2tlcj10KCl9KHdpbmRvdywoZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24oZSl7dmFyIHQ9e307ZnVuY3Rpb24gbihhKXtpZih0W2FdKXJldHVybiB0W2FdLmV4cG9ydHM7dmFyIHI9dFthXT17aTphLGw6ITEsZXhwb3J0czp7fX07cmV0dXJuIGVbYV0uY2FsbChyLmV4cG9ydHMscixyLmV4cG9ydHMsbiksci5sPSEwLHIuZXhwb3J0c31yZXR1cm4gbi5tPWUsbi5jPXQsbi5kPWZ1bmN0aW9uKGUsdCxhKXtuLm8oZSx0KXx8T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsdCx7ZW51bWVyYWJsZTohMCxnZXQ6YX0pfSxuLnI9ZnVuY3Rpb24oZSl7XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmU3ltYm9sLnRvU3RyaW5nVGFnJiZPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxTeW1ib2wudG9TdHJpbmdUYWcse3ZhbHVlOlwiTW9kdWxlXCJ9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KX0sbi50PWZ1bmN0aW9uKGUsdCl7aWYoMSZ0JiYoZT1uKGUpKSw4JnQpcmV0dXJuIGU7aWYoNCZ0JiZcIm9iamVjdFwiPT10eXBlb2YgZSYmZSYmZS5fX2VzTW9kdWxlKXJldHVybiBlO3ZhciBhPU9iamVjdC5jcmVhdGUobnVsbCk7aWYobi5yKGEpLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShhLFwiZGVmYXVsdFwiLHtlbnVtZXJhYmxlOiEwLHZhbHVlOmV9KSwyJnQmJlwic3RyaW5nXCIhPXR5cGVvZiBlKWZvcih2YXIgciBpbiBlKW4uZChhLHIsZnVuY3Rpb24odCl7cmV0dXJuIGVbdF19LmJpbmQobnVsbCxyKSk7cmV0dXJuIGF9LG4ubj1mdW5jdGlvbihlKXt2YXIgdD1lJiZlLl9fZXNNb2R1bGU/ZnVuY3Rpb24oKXtyZXR1cm4gZS5kZWZhdWx0fTpmdW5jdGlvbigpe3JldHVybiBlfTtyZXR1cm4gbi5kKHQsXCJhXCIsdCksdH0sbi5vPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLHQpfSxuLnA9XCJcIixuKG4ucz0wKX0oW2Z1bmN0aW9uKGUsdCxuKXtlLmV4cG9ydHM9bigxKX0sZnVuY3Rpb24oZSx0LG4pe2Z1bmN0aW9uIGEoZSx0KXtyZXR1cm4gZnVuY3Rpb24oZSl7aWYoQXJyYXkuaXNBcnJheShlKSlyZXR1cm4gZX0oZSl8fGZ1bmN0aW9uKGUsdCl7aWYoIShTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGUpfHxcIltvYmplY3QgQXJndW1lbnRzXVwiPT09T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGUpKSlyZXR1cm47dmFyIG49W10sYT0hMCxyPSExLGk9dm9pZCAwO3RyeXtmb3IodmFyIG8scz1lW1N5bWJvbC5pdGVyYXRvcl0oKTshKGE9KG89cy5uZXh0KCkpLmRvbmUpJiYobi5wdXNoKG8udmFsdWUpLCF0fHxuLmxlbmd0aCE9PXQpO2E9ITApO31jYXRjaChlKXtyPSEwLGk9ZX1maW5hbGx5e3RyeXthfHxudWxsPT1zLnJldHVybnx8cy5yZXR1cm4oKX1maW5hbGx5e2lmKHIpdGhyb3cgaX19cmV0dXJuIG59KGUsdCl8fGZ1bmN0aW9uKCl7dGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2VcIil9KCl9bigyKTt2YXIgcj1bXSxpPVtcIlN1blwiLFwiTW9uXCIsXCJUdWVcIixcIldlZFwiLFwiVGh1XCIsXCJGcmlcIixcIlNhdFwiXSxvPVtcIkphbnVhcnlcIixcIkZlYnJ1YXJ5XCIsXCJNYXJjaFwiLFwiQXByaWxcIixcIk1heVwiLFwiSnVuZVwiLFwiSnVseVwiLFwiQXVndXN0XCIsXCJTZXB0ZW1iZXJcIixcIk9jdG9iZXJcIixcIk5vdmVtYmVyXCIsXCJEZWNlbWJlclwiXSxzPXt0OlwidG9wXCIscjpcInJpZ2h0XCIsYjpcImJvdHRvbVwiLGw6XCJsZWZ0XCIsYzpcImNlbnRlcmVkXCJ9LGM9ZnVuY3Rpb24oKXt9LGw9W1wiY2xpY2tcIixcImZvY3VzaW5cIixcImtleWRvd25cIixcImlucHV0XCJdO2Z1bmN0aW9uIGQoZSl7cmV0dXJuIEFycmF5LmlzQXJyYXkoZSk/ZS5tYXAoZCk6XCJbb2JqZWN0IE9iamVjdF1cIj09PXt9LnRvU3RyaW5nLmNhbGwoZSk/T2JqZWN0LmtleXMoZSkucmVkdWNlKChmdW5jdGlvbih0LG4pe3JldHVybiB0W25dPWQoZVtuXSksdH0pLHt9KTplfWZ1bmN0aW9uIHUoZSx0KXt2YXIgbj1lLmNhbGVuZGFyLnF1ZXJ5U2VsZWN0b3IoXCIucXMtb3ZlcmxheVwiKSxhPW4mJiFuLmNsYXNzTGlzdC5jb250YWlucyhcInFzLWhpZGRlblwiKTt0PXR8fG5ldyBEYXRlKGUuY3VycmVudFllYXIsZS5jdXJyZW50TW9udGgpLGUuY2FsZW5kYXIuaW5uZXJIVE1MPVtoKHQsZSxhKSxmKHQsZSxhKSx2KGUsYSldLmpvaW4oXCJcIiksYSYmc2V0VGltZW91dCgoZnVuY3Rpb24oKXtyZXR1cm4gTSghMCxlKX0pLDEwKX1mdW5jdGlvbiBoKGUsdCxuKXtyZXR1cm4nXFxuICAgIDxkaXYgY2xhc3M9XCJxcy1jb250cm9scyAnLmNvbmNhdChuP1wicXMtYmx1clwiOlwiXCIsJ1wiPlxcbiAgICAgIDxkaXYgY2xhc3M9XCJxcy1hcnJvdyBxcy1sZWZ0XCI+PC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cInFzLW1vbnRoLXllYXJcIj5cXG4gICAgICAgIDxzcGFuIGNsYXNzPVwicXMtbW9udGhcIj4nKS5jb25jYXQodC5tb250aHNbZS5nZXRNb250aCgpXSwnPC9zcGFuPlxcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJxcy15ZWFyXCI+JykuY29uY2F0KGUuZ2V0RnVsbFllYXIoKSwnPC9zcGFuPlxcbiAgICAgIDwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XCJxcy1hcnJvdyBxcy1yaWdodFwiPjwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gICcpfWZ1bmN0aW9uIGYoZSx0LG4pe3ZhciBhPXQuY3VycmVudE1vbnRoLHI9dC5jdXJyZW50WWVhcixpPXQuZGF0ZVNlbGVjdGVkLG89dC5tYXhEYXRlLHM9dC5taW5EYXRlLGM9dC5zaG93QWxsRGF0ZXMsbD10LmRheXMsZD10LmRpc2FibGVkRGF0ZXMsdT10LmRpc2FibGVyLGg9dC5ub1dlZWtlbmRzLGY9dC5zdGFydERheSx2PXQud2Vla2VuZEluZGljZXMsbT10LmV2ZW50cyx5PXQuZ2V0UmFuZ2UmJnQuZ2V0UmFuZ2UoKXx8e30scD0reS5zdGFydCxiPSt5LmVuZCxEPW5ldyBEYXRlLGc9cj09PUQuZ2V0RnVsbFllYXIoKSYmYT09PUQuZ2V0TW9udGgoKSx3PXEobmV3IERhdGUoZSkuc2V0RGF0ZSgxKSksUz13LmdldERheSgpLWYsTT1TPDA/NzowO3cuc2V0TW9udGgody5nZXRNb250aCgpKzEpLHcuc2V0RGF0ZSgwKTt2YXIgeD13LmdldERhdGUoKSxMPVtdLFA9TSs3KigoUyt4KS83fDApO1ArPShTK3gpJTc/NzowLDAhPT1mJiYwPT09UyYmKFArPTcpO2Zvcih2YXIgaj0xO2o8PVA7aisrKXt2YXIgaz0oai0xKSU3LE89bFtrXSxDPWotKFM+PTA/Uzo3K1MpLFk9bmV3IERhdGUocixhLEMpLE49bVsrWV0sRT1ZLmdldERhdGUoKSxBPUM8MXx8Qz54LEk9XCJcIixUPSc8c3BhbiBjbGFzcz1cInFzLW51bVwiPicuY29uY2F0KEUsXCI8L3NwYW4+XCIpLEY9cCYmYiYmK1k+PXAmJitZPD1iO0E/KEk9XCJxcy1lbXB0eSBxcy1vdXRzaWRlLWN1cnJlbnQtbW9udGhcIixjPyhOJiYoSSs9XCIgcXMtZXZlbnRcIiksSSs9XCIgcXMtZGlzYWJsZWRcIik6VD1cIlwiKTooKHMmJlk8c3x8byYmWT5vfHx1KFkpfHxkLmluY2x1ZGVzKCtZKXx8aCYmdi5pbmNsdWRlcyhrKSkmJihJPVwicXMtZGlzYWJsZWRcIiksTiYmKEkrPVwiIHFzLWV2ZW50XCIpLGcmJkM9PT1ELmdldERhdGUoKSYmKEkrPVwiIHFzLWN1cnJlbnRcIiksK1k9PStpJiYoSSs9XCIgcXMtYWN0aXZlXCIpLEYmJihJKz1cIiBxcy1yYW5nZS1kYXRlLVwiLmNvbmNhdChrKSxwIT09YiYmKEkrPStZPT09cD9cIiBxcy1yYW5nZS1kYXRlLXN0YXJ0IHFzLWFjdGl2ZVwiOitZPT09Yj9cIiBxcy1yYW5nZS1kYXRlLWVuZCBxcy1hY3RpdmVcIjpcIiBxcy1yYW5nZS1kYXRlLW1pZGRsZVwiKSkpLEwucHVzaCgnPGRpdiBjbGFzcz1cInFzLXNxdWFyZSBxcy1udW0gJy5jb25jYXQoTyxcIiBcIikuY29uY2F0KEksJ1wiPicpLmNvbmNhdChULFwiPC9kaXY+XCIpKX12YXIgUj1sLm1hcCgoZnVuY3Rpb24oZSl7cmV0dXJuJzxkaXYgY2xhc3M9XCJxcy1zcXVhcmUgcXMtZGF5XCI+Jy5jb25jYXQoZSxcIjwvZGl2PlwiKX0pKS5jb25jYXQoTCk7aWYoUi5sZW5ndGglNyE9MCl0aHJvd1wiQ2FsZW5kYXIgbm90IGNvbnN0cnVjdGVkIHByb3Blcmx5LiBUaGUgIyBvZiBzcXVhcmVzIHNob3VsZCBiZSBhIG11bHRpcGxlIG9mIDcuXCI7cmV0dXJuIFIudW5zaGlmdCgnPGRpdiBjbGFzcz1cInFzLXNxdWFyZXMgJy5jb25jYXQobj9cInFzLWJsdXJcIjpcIlwiLCdcIj4nKSksUi5wdXNoKFwiPC9kaXY+XCIpLFIuam9pbihcIlwiKX1mdW5jdGlvbiB2KGUsdCl7dmFyIG49ZS5vdmVybGF5UGxhY2Vob2xkZXIsYT1lLm92ZXJsYXlCdXR0b24scj1lLm92ZXJsYXlNb250aHMubWFwKChmdW5jdGlvbihlLHQpe3JldHVybidcXG4gICAgICA8ZGl2IGNsYXNzPVwicXMtb3ZlcmxheS1tb250aFwiIGRhdGEtbW9udGgtbnVtPVwiJy5jb25jYXQodCwnXCI+XFxuICAgICAgICA8c3BhbiBkYXRhLW1vbnRoLW51bT1cIicpLmNvbmNhdCh0LCdcIj4nKS5jb25jYXQoZSxcIjwvc3Bhbj5cXG4gICAgICA8L2Rpdj5cXG4gIFwiKX0pKS5qb2luKFwiXCIpO3JldHVybidcXG4gICAgPGRpdiBjbGFzcz1cInFzLW92ZXJsYXkgJy5jb25jYXQodD9cIlwiOlwicXMtaGlkZGVuXCIsJ1wiPlxcbiAgICAgIDxkaXY+XFxuICAgICAgICA8aW5wdXQgY2xhc3M9XCJxcy1vdmVybGF5LXllYXJcIiBwbGFjZWhvbGRlcj1cIicpLmNvbmNhdChuLCdcIiAvPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cInFzLWNsb3NlXCI+JiMxMDAwNTs8L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVwicXMtb3ZlcmxheS1tb250aC1jb250YWluZXJcIj4nKS5jb25jYXQociwnPC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cInFzLXN1Ym1pdCBxcy1kaXNhYmxlZFwiPicpLmNvbmNhdChhLFwiPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgXCIpfWZ1bmN0aW9uIG0oZSx0LG4pe3ZhciBhPXQuY3VycmVudE1vbnRoLHI9dC5jdXJyZW50WWVhcixpPXQuY2FsZW5kYXIsbz10LmVsLHM9dC5vblNlbGVjdCxjPXQucmVzcGVjdERpc2FibGVkUmVhZE9ubHksbD10LnNpYmxpbmcsZD1pLnF1ZXJ5U2VsZWN0b3IoXCIucXMtYWN0aXZlXCIpLGg9ZS50ZXh0Q29udGVudDsoby5kaXNhYmxlZHx8by5yZWFkT25seSkmJmN8fCh0LmRhdGVTZWxlY3RlZD1uP3ZvaWQgMDpuZXcgRGF0ZShyLGEsaCksZCYmZC5jbGFzc0xpc3QucmVtb3ZlKFwicXMtYWN0aXZlXCIpLG58fGUuY2xhc3NMaXN0LmFkZChcInFzLWFjdGl2ZVwiKSxwKG8sdCxuKSwhbiYmdyh0KSxsJiYoeSh7aW5zdGFuY2U6dCxkZXNlbGVjdDpufSksdSh0KSx1KGwpKSxzKHQsbj92b2lkIDA6bmV3IERhdGUodC5kYXRlU2VsZWN0ZWQpKSl9ZnVuY3Rpb24geShlKXt2YXIgdD1lLmluc3RhbmNlLG49ZS5kZXNlbGVjdCxhPXQuZmlyc3Q/dDp0LnNpYmxpbmcscj1hLnNpYmxpbmc7YT09PXQ/bj8oYS5taW5EYXRlPWEub3JpZ2luYWxNaW5EYXRlLHIubWluRGF0ZT1yLm9yaWdpbmFsTWluRGF0ZSk6ci5taW5EYXRlPWEuZGF0ZVNlbGVjdGVkOm4/KHIubWF4RGF0ZT1yLm9yaWdpbmFsTWF4RGF0ZSxhLm1heERhdGU9YS5vcmlnaW5hbE1heERhdGUpOmEubWF4RGF0ZT1yLmRhdGVTZWxlY3RlZH1mdW5jdGlvbiBwKGUsdCxuKXtpZighdC5ub25JbnB1dClyZXR1cm4gbj9lLnZhbHVlPVwiXCI6dC5mb3JtYXR0ZXIhPT1jP3QuZm9ybWF0dGVyKGUsdC5kYXRlU2VsZWN0ZWQsdCk6dm9pZChlLnZhbHVlPXQuZGF0ZVNlbGVjdGVkLnRvRGF0ZVN0cmluZygpKX1mdW5jdGlvbiBiKGUsdCxuLGEpe258fGE/KG4mJih0LmN1cnJlbnRZZWFyPW4pLGEmJih0LmN1cnJlbnRNb250aD0rYSkpOih0LmN1cnJlbnRNb250aCs9ZS5jb250YWlucyhcInFzLXJpZ2h0XCIpPzE6LTEsMTI9PT10LmN1cnJlbnRNb250aD8odC5jdXJyZW50TW9udGg9MCx0LmN1cnJlbnRZZWFyKyspOi0xPT09dC5jdXJyZW50TW9udGgmJih0LmN1cnJlbnRNb250aD0xMSx0LmN1cnJlbnRZZWFyLS0pKSx0LmN1cnJlbnRNb250aE5hbWU9dC5tb250aHNbdC5jdXJyZW50TW9udGhdLHUodCksdC5vbk1vbnRoQ2hhbmdlKHQpfWZ1bmN0aW9uIEQoZSl7aWYoIWUubm9Qb3NpdGlvbil7dmFyIHQ9ZS5lbCxuPWUuY2FsZW5kYXJDb250YWluZXIscj1lLnBvc2l0aW9uLGk9ZS5wYXJlbnQsbz1yLnRvcCxzPXIucmlnaHQ7aWYoci5jZW50ZXJlZClyZXR1cm4gbi5jbGFzc0xpc3QuYWRkKFwicXMtY2VudGVyZWRcIik7dmFyIGM9YShbaSx0LG5dLm1hcCgoZnVuY3Rpb24oZSl7cmV0dXJuIGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCl9KSksMyksbD1jWzBdLGQ9Y1sxXSx1PWNbMl0saD1kLnRvcC1sLnRvcCtpLnNjcm9sbFRvcCxmPVwiXCIuY29uY2F0KGgtKG8/dS5oZWlnaHQ6LTEqZC5oZWlnaHQpLFwicHhcIiksdj1cIlwiLmNvbmNhdChkLmxlZnQtbC5sZWZ0KyhzP2Qud2lkdGgtdS53aWR0aDowKSxcInB4XCIpO24uc3R5bGUuc2V0UHJvcGVydHkoXCJ0b3BcIixmKSxuLnN0eWxlLnNldFByb3BlcnR5KFwibGVmdFwiLHYpfX1mdW5jdGlvbiBnKGUpe3JldHVyblwiW29iamVjdCBEYXRlXVwiPT09e30udG9TdHJpbmcuY2FsbChlKSYmXCJJbnZhbGlkIERhdGVcIiE9PWUudG9TdHJpbmcoKX1mdW5jdGlvbiBxKGUpe2lmKGcoZSl8fFwibnVtYmVyXCI9PXR5cGVvZiBlJiYhaXNOYU4oZSkpe3ZhciB0PW5ldyBEYXRlKCtlKTtyZXR1cm4gbmV3IERhdGUodC5nZXRGdWxsWWVhcigpLHQuZ2V0TW9udGgoKSx0LmdldERhdGUoKSl9fWZ1bmN0aW9uIHcoZSl7ZS5kaXNhYmxlZHx8IWUuY2FsZW5kYXJDb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKFwicXMtaGlkZGVuXCIpJiYhZS5hbHdheXNTaG93JiYoTSghMCxlKSxlLmNhbGVuZGFyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJxcy1oaWRkZW5cIiksZS5vbkhpZGUoZSkpfWZ1bmN0aW9uIFMoZSl7ZS5kaXNhYmxlZHx8KGUuY2FsZW5kYXJDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcInFzLWhpZGRlblwiKSxEKGUpLGUub25TaG93KGUpKX1mdW5jdGlvbiBNKGUsdCl7dmFyIG49dC5jYWxlbmRhcjtpZihuKXt2YXIgYT1uLnF1ZXJ5U2VsZWN0b3IoXCIucXMtb3ZlcmxheVwiKSxyPWEucXVlcnlTZWxlY3RvcihcIi5xcy1vdmVybGF5LXllYXJcIiksaT1uLnF1ZXJ5U2VsZWN0b3IoXCIucXMtY29udHJvbHNcIiksbz1uLnF1ZXJ5U2VsZWN0b3IoXCIucXMtc3F1YXJlc1wiKTtlPyhhLmNsYXNzTGlzdC5hZGQoXCJxcy1oaWRkZW5cIiksaS5jbGFzc0xpc3QucmVtb3ZlKFwicXMtYmx1clwiKSxvLmNsYXNzTGlzdC5yZW1vdmUoXCJxcy1ibHVyXCIpLHIudmFsdWU9XCJcIik6KGEuY2xhc3NMaXN0LnJlbW92ZShcInFzLWhpZGRlblwiKSxpLmNsYXNzTGlzdC5hZGQoXCJxcy1ibHVyXCIpLG8uY2xhc3NMaXN0LmFkZChcInFzLWJsdXJcIiksci5mb2N1cygpKX19ZnVuY3Rpb24geChlLHQsbixhKXt2YXIgcj1pc05hTigrKG5ldyBEYXRlKS5zZXRGdWxsWWVhcih0LnZhbHVlfHx2b2lkIDApKSxpPXI/bnVsbDp0LnZhbHVlO2lmKDEzPT09KGUud2hpY2h8fGUua2V5Q29kZSl8fFwiY2xpY2tcIj09PWUudHlwZSlhP2IobnVsbCxuLGksYSk6cnx8dC5jbGFzc0xpc3QuY29udGFpbnMoXCJxcy1kaXNhYmxlZFwiKXx8YihudWxsLG4saSxhKTtlbHNlIGlmKG4uY2FsZW5kYXIuY29udGFpbnModCkpe24uY2FsZW5kYXIucXVlcnlTZWxlY3RvcihcIi5xcy1zdWJtaXRcIikuY2xhc3NMaXN0W3I/XCJhZGRcIjpcInJlbW92ZVwiXShcInFzLWRpc2FibGVkXCIpfX1mdW5jdGlvbiBMKGUpe3ZhciB0PWUudHlwZSxuPWUudGFyZ2V0LGk9bi5jbGFzc0xpc3Qsbz1hKHIuZmlsdGVyKChmdW5jdGlvbihlKXt2YXIgdD1lLmNhbGVuZGFyLGE9ZS5lbDtyZXR1cm4gdC5jb250YWlucyhuKXx8YT09PW59KSksMSlbMF0scz1vJiZvLmNhbGVuZGFyLmNvbnRhaW5zKG4pO2lmKCEobyYmby5pc01vYmlsZSYmby5kaXNhYmxlTW9iaWxlKSlpZihcImNsaWNrXCI9PT10KXtpZighbylyZXR1cm4gci5mb3JFYWNoKHcpO2lmKG8uZGlzYWJsZWQpcmV0dXJuO3ZhciBjPW8uY2FsZW5kYXIsbD1vLmNhbGVuZGFyQ29udGFpbmVyLGQ9by5kaXNhYmxlWWVhck92ZXJsYXksdT1vLm5vbklucHV0LGg9Yy5xdWVyeVNlbGVjdG9yKFwiLnFzLW92ZXJsYXkteWVhclwiKSxmPSEhYy5xdWVyeVNlbGVjdG9yKFwiLnFzLWhpZGRlblwiKSx2PWMucXVlcnlTZWxlY3RvcihcIi5xcy1tb250aC15ZWFyXCIpLmNvbnRhaW5zKG4pLHk9bi5kYXRhc2V0Lm1vbnRoTnVtO2lmKG8ubm9Qb3NpdGlvbiYmIXMpKGwuY2xhc3NMaXN0LmNvbnRhaW5zKFwicXMtaGlkZGVuXCIpP1M6dykobyk7ZWxzZSBpZihpLmNvbnRhaW5zKFwicXMtYXJyb3dcIikpYihpLG8pO2Vsc2UgaWYodnx8aS5jb250YWlucyhcInFzLWNsb3NlXCIpKSFkJiZNKCFmLG8pO2Vsc2UgaWYoeSl4KGUsaCxvLHkpO2Vsc2V7aWYoaS5jb250YWlucyhcInFzLW51bVwiKSl7dmFyIHA9XCJTUEFOXCI9PT1uLm5vZGVOYW1lP24ucGFyZW50Tm9kZTpuLEQ9W1wicXMtZGlzYWJsZWRcIixcInFzLWVtcHR5XCJdLnNvbWUoKGZ1bmN0aW9uKGUpe3JldHVybiBwLmNsYXNzTGlzdC5jb250YWlucyhlKX0pKTtyZXR1cm4gcC5jbGFzc0xpc3QuY29udGFpbnMoXCJxcy1hY3RpdmVcIik/bShwLG8sITApOiFEJiZtKHAsbyl9aS5jb250YWlucyhcInFzLXN1Ym1pdFwiKSYmIWkuY29udGFpbnMoXCJxcy1kaXNhYmxlZFwiKT94KGUsaCxvKTp1JiZuPT09by5lbCYmUyhvKX19ZWxzZSBpZihcImZvY3VzaW5cIj09PXQmJm8pUyhvKSxyLmZvckVhY2goKGZ1bmN0aW9uKGUpe3JldHVybiBlIT09byYmdyhlKX0pKTtlbHNlIGlmKFwia2V5ZG93blwiPT09dCYmbyYmIW8uZGlzYWJsZWQpe3ZhciBnPSFvLmNhbGVuZGFyLnF1ZXJ5U2VsZWN0b3IoXCIucXMtb3ZlcmxheVwiKS5jbGFzc0xpc3QuY29udGFpbnMoXCJxcy1oaWRkZW5cIik7MTM9PT0oZS53aGljaHx8ZS5rZXlDb2RlKSYmZyYmcz94KGUsbixvKToyNz09PShlLndoaWNofHxlLmtleUNvZGUpJiZnJiZzJiZNKCEwLG8pfWVsc2UgaWYoXCJpbnB1dFwiPT09dCl7aWYoIW98fCFvLmNhbGVuZGFyLmNvbnRhaW5zKG4pKXJldHVybjt2YXIgcT1vLmNhbGVuZGFyLnF1ZXJ5U2VsZWN0b3IoXCIucXMtc3VibWl0XCIpLEw9bi52YWx1ZS5zcGxpdChcIlwiKS5yZWR1Y2UoKGZ1bmN0aW9uKGUsdCl7cmV0dXJuIGV8fFwiMFwiIT09dD9lKyh0Lm1hdGNoKC9bMC05XS8pP3Q6XCJcIik6XCJcIn0pLFwiXCIpLnNsaWNlKDAsNCk7bi52YWx1ZT1MLHEuY2xhc3NMaXN0WzQ9PT1MLmxlbmd0aD9cInJlbW92ZVwiOlwiYWRkXCJdKFwicXMtZGlzYWJsZWRcIil9fWZ1bmN0aW9uIFAoKXtTKHRoaXMpfWZ1bmN0aW9uIGooKXt3KHRoaXMpfWZ1bmN0aW9uIGsoZSx0KXt2YXIgbj1xKGUpLGE9dGhpcy5jdXJyZW50WWVhcixyPXRoaXMuY3VycmVudE1vbnRoLGk9dGhpcy5zaWJsaW5nO2lmKG51bGw9PWUpcmV0dXJuIHRoaXMuZGF0ZVNlbGVjdGVkPXZvaWQgMCxwKHRoaXMuZWwsdGhpcywhMCksaSYmKHkoe2luc3RhbmNlOnRoaXMsZGVzZWxlY3Q6ITB9KSx1KGkpKSx1KHRoaXMpLHRoaXM7aWYoIWcoZSkpdGhyb3dcImBzZXREYXRlYCBuZWVkcyBhIEphdmFTY3JpcHQgRGF0ZSBvYmplY3QuXCI7aWYodGhpcy5kaXNhYmxlZERhdGVzLnNvbWUoKGZ1bmN0aW9uKGUpe3JldHVybitlPT0rbn0pKXx8bjx0aGlzLm1pbkRhdGV8fG4+dGhpcy5tYXhEYXRlKXRocm93XCJZb3UgY2FuJ3QgbWFudWFsbHkgc2V0IGEgZGF0ZSB0aGF0J3MgZGlzYWJsZWQuXCI7cmV0dXJuIHRoaXMuY3VycmVudFllYXI9bi5nZXRGdWxsWWVhcigpLHRoaXMuY3VycmVudE1vbnRoPW4uZ2V0TW9udGgoKSx0aGlzLmN1cnJlbnRNb250aE5hbWU9dGhpcy5tb250aHNbbi5nZXRNb250aCgpXSx0aGlzLmRhdGVTZWxlY3RlZD1uLHAodGhpcy5lbCx0aGlzKSxpJiYoeSh7aW5zdGFuY2U6dGhpc30pLHUoaSxuKSksKGE9PT1uLmdldEZ1bGxZZWFyKCkmJnI9PT1uLmdldE1vbnRoKCl8fHR8fGkpJiZ1KHRoaXMsbiksdGhpc31mdW5jdGlvbiBPKGUpe3JldHVybiBZKHRoaXMsZSwhMCl9ZnVuY3Rpb24gQyhlKXtyZXR1cm4gWSh0aGlzLGUpfWZ1bmN0aW9uIFkoZSx0LG4pe3ZhciBhPWUuZGF0ZVNlbGVjdGVkLHI9ZS5maXJzdCxpPWUuc2libGluZyxvPWUubWluRGF0ZSxzPWUubWF4RGF0ZSxjPXEodCksbD1uP1wiTWluXCI6XCJNYXhcIixkPWZ1bmN0aW9uKCl7cmV0dXJuXCJvcmlnaW5hbFwiLmNvbmNhdChsLFwiRGF0ZVwiKX0saD1mdW5jdGlvbigpe3JldHVyblwiXCIuY29uY2F0KGwudG9Mb3dlckNhc2UoKSxcIkRhdGVcIil9LGY9ZnVuY3Rpb24oKXtyZXR1cm5cInNldFwiLmNvbmNhdChsKX0sdj1mdW5jdGlvbigpe3Rocm93XCJPdXQtb2YtcmFuZ2UgZGF0ZSBwYXNzZWQgdG8gXCIuY29uY2F0KGYoKSl9O2lmKG51bGw9PXQpZVtkKCldPXZvaWQgMCxpPyhpW2QoKV09dm9pZCAwLG4/KHImJiFhfHwhciYmIWkuZGF0ZVNlbGVjdGVkKSYmKGUubWluRGF0ZT12b2lkIDAsaS5taW5EYXRlPXZvaWQgMCk6KHImJiFpLmRhdGVTZWxlY3RlZHx8IXImJiFhKSYmKGUubWF4RGF0ZT12b2lkIDAsaS5tYXhEYXRlPXZvaWQgMCkpOmVbaCgpXT12b2lkIDA7ZWxzZXtpZighZyh0KSl0aHJvd1wiSW52YWxpZCBkYXRlIHBhc3NlZCB0byBcIi5jb25jYXQoZigpKTtpPygociYmbiYmYz4oYXx8cyl8fHImJiFuJiZjPChpLmRhdGVTZWxlY3RlZHx8byl8fCFyJiZuJiZjPihpLmRhdGVTZWxlY3RlZHx8cyl8fCFyJiYhbiYmYzwoYXx8bykpJiZ2KCksZVtkKCldPWMsaVtkKCldPWMsKG4mJihyJiYhYXx8IXImJiFpLmRhdGVTZWxlY3RlZCl8fCFuJiYociYmIWkuZGF0ZVNlbGVjdGVkfHwhciYmIWEpKSYmKGVbaCgpXT1jLGlbaCgpXT1jKSk6KChuJiZjPihhfHxzKXx8IW4mJmM8KGF8fG8pKSYmdigpLGVbaCgpXT1jKX1yZXR1cm4gaSYmdShpKSx1KGUpLGV9ZnVuY3Rpb24gTigpe3ZhciBlPXRoaXMuZmlyc3Q/dGhpczp0aGlzLnNpYmxpbmcsdD1lLnNpYmxpbmc7cmV0dXJue3N0YXJ0OmUuZGF0ZVNlbGVjdGVkLGVuZDp0LmRhdGVTZWxlY3RlZH19ZnVuY3Rpb24gRSgpe3ZhciBlPXRoaXMsdD10aGlzLmlubGluZVBvc2l0aW9uLG49dGhpcy5wYXJlbnQsYT10aGlzLmNhbGVuZGFyQ29udGFpbmVyLGk9dGhpcy5lbCxvPXRoaXMuc2libGluZzt0JiYoci5zb21lKChmdW5jdGlvbih0KXtyZXR1cm4gdCE9PWUmJnQucGFyZW50PT09bn0pKXx8bi5zdHlsZS5zZXRQcm9wZXJ0eShcInBvc2l0aW9uXCIsbnVsbCkpO2Zvcih2YXIgcyBpbiBhLnJlbW92ZSgpLHI9ci5maWx0ZXIoKGZ1bmN0aW9uKGUpe3JldHVybiBlLmVsIT09aX0pKSxvJiZkZWxldGUgby5zaWJsaW5nLHRoaXMpZGVsZXRlIHRoaXNbc107ci5sZW5ndGh8fGwuZm9yRWFjaCgoZnVuY3Rpb24oZSl7cmV0dXJuIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZSxMKX0pKX1lLmV4cG9ydHM9ZnVuY3Rpb24oZSx0KXtyLmxlbmd0aHx8bC5mb3JFYWNoKChmdW5jdGlvbihlKXtyZXR1cm4gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihlLEwpfSkpO3ZhciBuPWZ1bmN0aW9uKGUsdCl7dmFyIG49ZTtcInN0cmluZ1wiPT10eXBlb2YgbiYmKG49XCIjXCI9PT1uWzBdP2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKG4uc2xpY2UoMSkpOmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IobikpO3ZhciBsPWZ1bmN0aW9uKGUsdCl7aWYoci5zb21lKChmdW5jdGlvbihlKXtyZXR1cm4gZS5lbD09PXR9KSkpdGhyb3dcIkEgZGF0ZXBpY2tlciBhbHJlYWR5IGV4aXN0cyBvbiB0aGF0IGVsZW1lbnQuXCI7dmFyIG49ZChlKTtuLmV2ZW50cyYmKG4uZXZlbnRzPW4uZXZlbnRzLnJlZHVjZSgoZnVuY3Rpb24oZSx0KXtpZighZyh0KSl0aHJvdydcIm9wdGlvbnMuZXZlbnRzXCIgbXVzdCBvbmx5IGNvbnRhaW4gdmFsaWQgSmF2YVNjcmlwdCBEYXRlIG9iamVjdHMuJztyZXR1cm4gZVsrcSh0KV09ITAsZX0pLHt9KSk7W1wic3RhcnREYXRlXCIsXCJkYXRlU2VsZWN0ZWRcIixcIm1pbkRhdGVcIixcIm1heERhdGVcIl0uZm9yRWFjaCgoZnVuY3Rpb24oZSl7dmFyIHQ9bltlXTtpZih0JiYhZyh0KSl0aHJvdydcIm9wdGlvbnMuJy5jb25jYXQoZSwnXCIgbmVlZHMgdG8gYmUgYSB2YWxpZCBKYXZhU2NyaXB0IERhdGUgb2JqZWN0LicpO25bZV09cSh0KX0pKTt2YXIgbz1uLnBvc2l0aW9uLGw9bi5tYXhEYXRlLHU9bi5taW5EYXRlLGg9bi5kYXRlU2VsZWN0ZWQsZj1uLm92ZXJsYXlQbGFjZWhvbGRlcix2PW4ub3ZlcmxheUJ1dHRvbixtPW4uc3RhcnREYXkseT1uLmlkO2lmKG4uc3RhcnREYXRlPXEobi5zdGFydERhdGV8fGh8fG5ldyBEYXRlKSxuLmRpc2FibGVkRGF0ZXM9KG4uZGlzYWJsZWREYXRlc3x8W10pLm1hcCgoZnVuY3Rpb24oZSl7dmFyIHQ9K3EoZSk7aWYoIWcoZSkpdGhyb3cnWW91IHN1cHBsaWVkIGFuIGludmFsaWQgZGF0ZSB0byBcIm9wdGlvbnMuZGlzYWJsZWREYXRlc1wiLic7aWYodD09PStxKGgpKXRocm93J1wiZGlzYWJsZWREYXRlc1wiIGNhbm5vdCBjb250YWluIHRoZSBzYW1lIGRhdGUgYXMgXCJkYXRlU2VsZWN0ZWRcIi4nO3JldHVybiB0fSkpLG4uaGFzT3duUHJvcGVydHkoXCJpZFwiKSYmbnVsbD09eSl0aHJvd1wiSWQgY2Fubm90IGJlIGBudWxsYCBvciBgdW5kZWZpbmVkYFwiO2lmKHl8fDA9PT15KXt2YXIgcD1yLmZpbHRlcigoZnVuY3Rpb24oZSl7cmV0dXJuIGUuaWQ9PT15fSkpO2lmKHAubGVuZ3RoPjEpdGhyb3dcIk9ubHkgdHdvIGRhdGVwaWNrZXJzIGNhbiBzaGFyZSBhbiBpZC5cIjtwLmxlbmd0aD8obi5zZWNvbmQ9ITAsbi5zaWJsaW5nPXBbMF0pOm4uZmlyc3Q9ITB9dmFyIGI9W1widHJcIixcInRsXCIsXCJiclwiLFwiYmxcIixcImNcIl0uc29tZSgoZnVuY3Rpb24oZSl7cmV0dXJuIG89PT1lfSkpO2lmKG8mJiFiKXRocm93J1wib3B0aW9ucy5wb3NpdGlvblwiIG11c3QgYmUgb25lIG9mIHRoZSBmb2xsb3dpbmc6IHRsLCB0ciwgYmwsIGJyLCBvciBjLic7aWYobi5wb3NpdGlvbj1mdW5jdGlvbihlKXt2YXIgdD1hKGUsMiksbj10WzBdLHI9dFsxXSxpPXt9O2lbc1tuXV09MSxyJiYoaVtzW3JdXT0xKTtyZXR1cm4gaX0ob3x8XCJibFwiKSxsPHUpdGhyb3cnXCJtYXhEYXRlXCIgaW4gb3B0aW9ucyBpcyBsZXNzIHRoYW4gXCJtaW5EYXRlXCIuJztpZihoKXt2YXIgRD1mdW5jdGlvbihlKXt0aHJvdydcImRhdGVTZWxlY3RlZFwiIGluIG9wdGlvbnMgaXMgJy5jb25jYXQoZT9cImxlc3NcIjpcImdyZWF0ZXJcIiwnIHRoYW4gXCInKS5jb25jYXQoZXx8XCJtYWNcIiwnRGF0ZVwiLicpfTt1PmgmJkQoXCJtaW5cIiksbDxoJiZEKCl9aWYoW1wib25TZWxlY3RcIixcIm9uU2hvd1wiLFwib25IaWRlXCIsXCJvbk1vbnRoQ2hhbmdlXCIsXCJmb3JtYXR0ZXJcIixcImRpc2FibGVyXCJdLmZvckVhY2goKGZ1bmN0aW9uKGUpe1wiZnVuY3Rpb25cIiE9dHlwZW9mIG5bZV0mJihuW2VdPWMpfSkpLFtcImN1c3RvbURheXNcIixcImN1c3RvbU1vbnRoc1wiLFwiY3VzdG9tT3ZlcmxheU1vbnRoc1wiXS5mb3JFYWNoKChmdW5jdGlvbihlLHQpe3ZhciBhPW5bZV0scj10PzEyOjc7aWYoYSl7aWYoIUFycmF5LmlzQXJyYXkoYSl8fGEubGVuZ3RoIT09cnx8YS5zb21lKChmdW5jdGlvbihlKXtyZXR1cm5cInN0cmluZ1wiIT10eXBlb2YgZX0pKSl0aHJvdydcIicuY29uY2F0KGUsJ1wiIG11c3QgYmUgYW4gYXJyYXkgd2l0aCAnKS5jb25jYXQocixcIiBzdHJpbmdzLlwiKTtuW3Q/dDwyP1wibW9udGhzXCI6XCJvdmVybGF5TW9udGhzXCI6XCJkYXlzXCJdPWF9fSkpLG0mJm0+MCYmbTw3KXt2YXIgdz0obi5jdXN0b21EYXlzfHxpKS5zbGljZSgpLFM9dy5zcGxpY2UoMCxtKTtuLmN1c3RvbURheXM9dy5jb25jYXQoUyksbi5zdGFydERheT0rbSxuLndlZWtlbmRJbmRpY2VzPVt3Lmxlbmd0aC0xLHcubGVuZ3RoXX1lbHNlIG4uc3RhcnREYXk9MCxuLndlZWtlbmRJbmRpY2VzPVs2LDBdO1wic3RyaW5nXCIhPXR5cGVvZiBmJiZkZWxldGUgbi5vdmVybGF5UGxhY2Vob2xkZXI7XCJzdHJpbmdcIiE9dHlwZW9mIHYmJmRlbGV0ZSBuLm92ZXJsYXlCdXR0b247cmV0dXJuIG59KHR8fHtzdGFydERhdGU6cShuZXcgRGF0ZSkscG9zaXRpb246XCJibFwifSxuKSx1PWwuc3RhcnREYXRlLGg9bC5kYXRlU2VsZWN0ZWQsZj1sLnNpYmxpbmcsdj1uPT09ZG9jdW1lbnQuYm9keSxtPXY/ZG9jdW1lbnQuYm9keTpuLnBhcmVudEVsZW1lbnQseT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLGI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTt5LmNsYXNzTmFtZT1cInFzLWRhdGVwaWNrZXItY29udGFpbmVyIHFzLWhpZGRlblwiLGIuY2xhc3NOYW1lPVwicXMtZGF0ZXBpY2tlclwiO3ZhciBEPXtlbDpuLHBhcmVudDptLG5vbklucHV0OlwiSU5QVVRcIiE9PW4ubm9kZU5hbWUsbm9Qb3NpdGlvbjp2LHBvc2l0aW9uOiF2JiZsLnBvc2l0aW9uLHN0YXJ0RGF0ZTp1LGRhdGVTZWxlY3RlZDpoLGRpc2FibGVkRGF0ZXM6bC5kaXNhYmxlZERhdGVzLG1pbkRhdGU6bC5taW5EYXRlLG1heERhdGU6bC5tYXhEYXRlLG5vV2Vla2VuZHM6ISFsLm5vV2Vla2VuZHMsd2Vla2VuZEluZGljZXM6bC53ZWVrZW5kSW5kaWNlcyxjYWxlbmRhckNvbnRhaW5lcjp5LGNhbGVuZGFyOmIsY3VycmVudE1vbnRoOih1fHxoKS5nZXRNb250aCgpLGN1cnJlbnRNb250aE5hbWU6KGwubW9udGhzfHxvKVsodXx8aCkuZ2V0TW9udGgoKV0sY3VycmVudFllYXI6KHV8fGgpLmdldEZ1bGxZZWFyKCksZXZlbnRzOmwuZXZlbnRzfHx7fSxzZXREYXRlOmsscmVtb3ZlOkUsc2V0TWluOk8sc2V0TWF4OkMsc2hvdzpQLGhpZGU6aixvblNlbGVjdDpsLm9uU2VsZWN0LG9uU2hvdzpsLm9uU2hvdyxvbkhpZGU6bC5vbkhpZGUsb25Nb250aENoYW5nZTpsLm9uTW9udGhDaGFuZ2UsZm9ybWF0dGVyOmwuZm9ybWF0dGVyLGRpc2FibGVyOmwuZGlzYWJsZXIsbW9udGhzOmwubW9udGhzfHxvLGRheXM6bC5jdXN0b21EYXlzfHxpLHN0YXJ0RGF5Omwuc3RhcnREYXksb3ZlcmxheU1vbnRoczpsLm92ZXJsYXlNb250aHN8fChsLm1vbnRoc3x8bykubWFwKChmdW5jdGlvbihlKXtyZXR1cm4gZS5zbGljZSgwLDMpfSkpLG92ZXJsYXlQbGFjZWhvbGRlcjpsLm92ZXJsYXlQbGFjZWhvbGRlcnx8XCI0LWRpZ2l0IHllYXJcIixvdmVybGF5QnV0dG9uOmwub3ZlcmxheUJ1dHRvbnx8XCJTdWJtaXRcIixkaXNhYmxlWWVhck92ZXJsYXk6ISFsLmRpc2FibGVZZWFyT3ZlcmxheSxkaXNhYmxlTW9iaWxlOiEhbC5kaXNhYmxlTW9iaWxlLGlzTW9iaWxlOlwib250b3VjaHN0YXJ0XCJpbiB3aW5kb3csYWx3YXlzU2hvdzohIWwuYWx3YXlzU2hvdyxpZDpsLmlkLHNob3dBbGxEYXRlczohIWwuc2hvd0FsbERhdGVzLHJlc3BlY3REaXNhYmxlZFJlYWRPbmx5OiEhbC5yZXNwZWN0RGlzYWJsZWRSZWFkT25seSxmaXJzdDpsLmZpcnN0LHNlY29uZDpsLnNlY29uZH07aWYoZil7dmFyIHc9ZixNPUQseD13Lm1pbkRhdGV8fE0ubWluRGF0ZSxMPXcubWF4RGF0ZXx8TS5tYXhEYXRlO00uc2libGluZz13LHcuc2libGluZz1NLHcubWluRGF0ZT14LHcubWF4RGF0ZT1MLE0ubWluRGF0ZT14LE0ubWF4RGF0ZT1MLHcub3JpZ2luYWxNaW5EYXRlPXgsdy5vcmlnaW5hbE1heERhdGU9TCxNLm9yaWdpbmFsTWluRGF0ZT14LE0ub3JpZ2luYWxNYXhEYXRlPUwsdy5nZXRSYW5nZT1OLE0uZ2V0UmFuZ2U9Tn1oJiZwKG4sRCk7dmFyIFk9Z2V0Q29tcHV0ZWRTdHlsZShtKS5wb3NpdGlvbjt2fHxZJiZcInN0YXRpY1wiIT09WXx8KEQuaW5saW5lUG9zaXRpb249ITAsbS5zdHlsZS5zZXRQcm9wZXJ0eShcInBvc2l0aW9uXCIsXCJyZWxhdGl2ZVwiKSk7RC5pbmxpbmVQb3NpdGlvbiYmci5mb3JFYWNoKChmdW5jdGlvbihlKXtlLnBhcmVudD09PUQucGFyZW50JiYoZS5pbmxpbmVQb3NpdGlvbj0hMCl9KSk7cmV0dXJuIHIucHVzaChEKSx5LmFwcGVuZENoaWxkKGIpLG0uYXBwZW5kQ2hpbGQoeSksRC5hbHdheXNTaG93JiZTKEQpLER9KGUsdCksaD1uLnN0YXJ0RGF0ZSxmPW4uZGF0ZVNlbGVjdGVkLHY9bi5hbHdheXNTaG93O2lmKG4uc2Vjb25kKXt2YXIgbT1uLnNpYmxpbmc7eSh7aW5zdGFuY2U6bixkZXNlbGVjdDohZn0pLHkoe2luc3RhbmNlOm0sZGVzZWxlY3Q6IW0uZGF0ZVNlbGVjdGVkfSksdShtKX1yZXR1cm4gdShuLGh8fGYpLHYmJkQobiksbn19LGZ1bmN0aW9uKGUsdCxuKXt9XSl9KSk7IiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwiaW1wb3J0IE1hdGVyaWFsSW5wdXQgZnJvbSBcIi4vbWF0ZXJpYWwtaW5wdXRcIjtcclxuXHJcbmxldCBtYXRlcmlhbElucHV0TmFtZSA9IG5ldyBNYXRlcmlhbElucHV0KFxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYXRlcmlhbC1pbnB1dC1uYW1lXCIpLFxyXG4gICAge1xyXG4gICAgICAgIGFjdGl2ZUNsYXNzOiBcIm1hdGVyaWFsLWlucHV0X2FjdGl2ZVwiXHJcbiAgICB9XHJcbik7XHJcblxyXG5sZXQgbWF0ZXJpYWxJbnB1dEVtYWlsID0gbmV3IE1hdGVyaWFsSW5wdXQoXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1hdGVyaWFsLWlucHV0LWVtYWlsXCIpLFxyXG4gICAge1xyXG4gICAgICAgIGFjdGl2ZUNsYXNzOiBcIm1hdGVyaWFsLWlucHV0X2FjdGl2ZVwiXHJcbiAgICB9XHJcbik7XHJcblxyXG5sZXQgbWF0ZXJpYWxJbnB1dFBob25lID0gbmV3IE1hdGVyaWFsSW5wdXQoXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1hdGVyaWFsLWlucHV0LXBob25lXCIpLFxyXG4gICAge1xyXG4gICAgICAgIGFjdGl2ZUNsYXNzOiBcIm1hdGVyaWFsLWlucHV0X2FjdGl2ZVwiLFxyXG4gICAgICAgIHBob25lOiB0cnVlXHJcbiAgICB9XHJcbik7XHJcblxyXG5sZXQgbWF0ZXJpYWxJbnB1dERlbGl2ZXJ5ID0gbmV3IE1hdGVyaWFsSW5wdXQoXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1hdGVyaWFsLWlucHV0LWRlbGl2ZXJ5XCIpLFxyXG4gICAge1xyXG4gICAgICAgIGFjdGl2ZUNsYXNzOiBcIm1hdGVyaWFsLWlucHV0X2FjdGl2ZVwiLFxyXG4gICAgICAgIGRhdGU6IHRydWVcclxuICAgIH1cclxuKTtcclxuXHJcbmxldCBtYXRlcmlhbFRleHRBcmVhID0gbmV3IE1hdGVyaWFsSW5wdXQoXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1hdGVyaWFsLXRleHRhcmVhXCIpLFxyXG4gICAge1xyXG4gICAgICAgIGFjdGl2ZUNsYXNzOiBcIm1hdGVyaWFsLXRleHRhcmVhX2FjdGl2ZVwiLFxyXG4gICAgICAgIHRleHRhcmVhOiB0cnVlXHJcbiAgICB9XHJcbik7XHJcblxyXG5sZXQgbG9nSW5OYW1lID0gbmV3IE1hdGVyaWFsSW5wdXQoXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsLWxvZ0luX19uYW1lXCIpLFxyXG4gICAge1xyXG4gICAgICAgIGFjdGl2ZUNsYXNzOiBcIm1hdGVyaWFsLWlucHV0X2FjdGl2ZVwiLFxyXG4gICAgfVxyXG4pO1xyXG5cclxubGV0IGxvZ0luUGFzc3dvcmQgPSBuZXcgTWF0ZXJpYWxJbnB1dChcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWwtbG9nSW5fX3Bhc3N3b3JkXCIpLFxyXG4gICAge1xyXG4gICAgICAgIGFjdGl2ZUNsYXNzOiBcIm1hdGVyaWFsLWlucHV0X2FjdGl2ZVwiLFxyXG4gICAgfVxyXG4pO1xyXG5cclxubGV0IHNpZ25VcE5hbWUgPSBuZXcgTWF0ZXJpYWxJbnB1dChcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWwtc2lnblVwX19uYW1lXCIpLFxyXG4gICAge1xyXG4gICAgICAgIGFjdGl2ZUNsYXNzOiBcIm1hdGVyaWFsLWlucHV0X2FjdGl2ZVwiLFxyXG4gICAgfVxyXG4pO1xyXG5cclxubGV0IHNpZ25VcEVtYWlsID0gbmV3IE1hdGVyaWFsSW5wdXQoXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsLXNpZ25VcF9fZW1haWxcIiksXHJcbiAgICB7XHJcbiAgICAgICAgYWN0aXZlQ2xhc3M6IFwibWF0ZXJpYWwtaW5wdXRfYWN0aXZlXCIsXHJcbiAgICB9XHJcbik7XHJcblxyXG5sZXQgc2lnblVwUGFzc3dvcmQgPSBuZXcgTWF0ZXJpYWxJbnB1dChcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWwtc2lnblVwX19wYXNzd29yZFwiKSxcclxuICAgIHtcclxuICAgICAgICBhY3RpdmVDbGFzczogXCJtYXRlcmlhbC1pbnB1dF9hY3RpdmVcIixcclxuICAgIH1cclxuKTtcclxuXHJcbmxldCBzaWduVXBQYXNzd29yZFJlcGVhdCA9IG5ldyBNYXRlcmlhbElucHV0KFxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbC1zaWduVXBfX3Bhc3N3b3JkLXJlcGVhdFwiKSxcclxuICAgIHtcclxuICAgICAgICBhY3RpdmVDbGFzczogXCJtYXRlcmlhbC1pbnB1dF9hY3RpdmVcIixcclxuICAgIH1cclxuKTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgSW1hc2sgZnJvbSBcImltYXNrXCI7XHJcbmltcG9ydCBkYXRlcGlja2VyIGZyb20gXCJqcy1kYXRlcGlja2VyXCI7XHJcblxyXG4vKipcclxuICogU2ltcGxlIGNsYXNzIGZvIGNyZWF0aW5nXHJcbiAqIG1hdGVyaWFsaXplIGlucHV0cyBhbmQgdGV4dGFyZWFzXHJcbiAqXHJcbiAqIEBjbGFzcyBNYXRlcmlhbElucHV0XHJcbiAqL1xyXG5jbGFzcyBNYXRlcmlhbElucHV0IHtcclxuICAgIC8qKlxyXG4gICAgICpDcmVhdGVzIGFuIGluc3RhbmNlIG9mIE1hdGVyaWFsSW5wdXQuXHJcbiAgICAgKiBAcGFyYW0geyp9IGVsZW1lbnRcclxuICAgICAqIEBwYXJhbSB7Kn0gb3B0aW9uc1xyXG4gICAgICogQG1lbWJlcm9mIE1hdGVyaWFsSW5wdXRcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoZWxlbWVudCwgb3B0aW9ucykge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcclxuICAgICAgICB0aGlzLm1hc2sgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy5kYXRlID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHRoaXMuYWRkRXZlbnRzKGVsZW1lbnQpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy52YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlKHRoaXMudmFsdWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG9wdGlvbnMucGhvbmUpIHtcclxuICAgICAgICAgICAgdGhpcy5hZGRQaG9uZU1hc2soKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChvcHRpb25zLmRhdGUpIHtcclxuICAgICAgICAgICAgdGhpcy5hZGREYXRlUGlja2VyKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAob3B0aW9ucy50ZXh0YXJlYSkge1xyXG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwidGV4dGFyZWFcIikudmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkQXV0b1Jlc2l6ZSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKS52YWx1ZTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVWYWx1ZSh0aGlzLnZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYWRkRXZlbnRzKGVsKSB7XHJcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGV2ZW50ID0+XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVmFsdWUoZXZlbnQudGFyZ2V0LnZhbHVlKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkUGhvbmVNYXNrKCkge1xyXG4gICAgICAgIGxldCBpbnB1dCA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIik7XHJcbiAgICAgICAgdGhpcy5tYXNrID0gSW1hc2soaW5wdXQsIHtcclxuICAgICAgICAgICAgbWFzazogXCIrezd9KDAwMCkwMDAtMDAtMDBcIixcclxuICAgICAgICAgICAgLy8gbGF6eTogZmFsc2UsXHJcbiAgICAgICAgICAgIC8vIHBsYWNlaG9sZGVyQ2hhcjogXCIqXCJcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBhZGREYXRlUGlja2VyKCkge1xyXG4gICAgICAgIGxldCBpbnB1dCA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIik7XHJcbiAgICAgICAgdGhpcy5kYXRlID0gZGF0ZXBpY2tlcihpbnB1dCwge1xyXG4gICAgICAgICAgICBmb3JtYXR0ZXI6IChpbnB1dCwgZGF0ZSwgaW5zdGFuY2UpID0+IHtcclxuICAgICAgICAgICAgICAgIGlucHV0LnZhbHVlID0gZGF0ZS50b0xvY2FsZVN0cmluZygncnUnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgeWVhcjogJ251bWVyaWMnLFxyXG4gICAgICAgICAgICAgICAgICAgIG1vbnRoOiAnbG9uZycsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF5OiAnbnVtZXJpYydcclxuICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY3VzdG9tRGF5czogWyfQn9CdJywgJ9CS0KInLCAn0KHQoCcsICfQp9CiJywgJ9Cf0KInLCAn0KHQkScsICfQktChJ10sXHJcbiAgICAgICAgICAgIGN1c3RvbU1vbnRoczogWyfQr9C90LLQsNGA0YwnLCAn0KTQtdCy0YDQsNC70YwnLCAn0JzQsNGA0YInLCAn0JDQv9GA0LXQu9GMJywgJ9Cc0LDQuScsICfQmNGO0L3RjCcsICfQmNGO0LvRjCcsICfQkNCy0LPRg9GB0YInLCAn0KHQtdC90YLRj9Cx0YDRjCcsICfQntC60YLRj9Cx0YDRjCcsICfQndC+0Y/QsdGA0YwnLCAn0JTQtdC60LDQsdGA0YwnXSxcclxuICAgICAgICAgICAgb3ZlcmxheUJ1dHRvbjogJ9Cf0LXRgNC10LnRgtC4JyxcclxuICBvdmVybGF5UGxhY2Vob2xkZXI6ICfQktCy0LXQtNC40YLQtSDQs9C+0LQgKDQg0YbQuNGE0YDRiyknLFxyXG4gICAgICAgICAgICBvblNlbGVjdDogKGluc3RhbmNlLCBkYXRlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlKGRhdGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkQXV0b1Jlc2l6ZSgpIHtcclxuICAgICAgICBsZXQgdGV4dGFyZWEgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcInRleHRhcmVhXCIpO1xyXG4gICAgICAgIHRleHRhcmVhLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBldmVudCA9PiB0aGlzLmF1dG9SZXNpemUodGV4dGFyZWEpKTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBldmVudCA9PiB0aGlzLmF1dG9SZXNpemUodGV4dGFyZWEpKTtcclxuICAgIH1cclxuXHJcbiAgICBhdXRvUmVzaXplKGVsZW1lbnQpIHtcclxuICAgICAgICBsZXQgb3V0ZXJIZWlnaHQgPSBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5oZWlnaHQsIDEwKTtcclxuXHJcbiAgICAgICAgbGV0IGRpZmYgPSBvdXRlckhlaWdodCAtIGVsZW1lbnQuY2xpZW50SGVpZ2h0O1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gXCJhdXRvXCI7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5oZWlnaHQgPSBlbGVtZW50LnNjcm9sbEhlaWdodCArIGRpZmYgKyBcInB4XCI7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlVmFsdWUodmFsdWUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XHJcbiAgICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLm9wdGlvbnMuYWN0aXZlQ2xhc3MpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMub3B0aW9ucy5hY3RpdmVDbGFzcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYXRlcmlhbElucHV0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9