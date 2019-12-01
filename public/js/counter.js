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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
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

/***/ "./src/js/counter.js":
/*!***************************!*\
  !*** ./src/js/counter.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Counter; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var imask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! imask */ "./node_modules/imask/dist/imask.esm.js");




var Counter =
/*#__PURE__*/
function () {
  function Counter(elem) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Counter);

    this.counter = elem;
    this.counterInput = this.counter.querySelector("input");
    this.counterOptions = this.counter.querySelector("ul");
    this.counterOptionsClass = this.counterOptions.className;
    this.counterOptionsItems = this.counterOptions.querySelectorAll("li");
    this.counterOptionArbitary = this.counterOptions.querySelector(".".concat(this.counterOptionsClass, "-item_arbitary"));
    this.addOpenOptionEventHandler = this.addOpenOptionEvent.bind(this);
    this.init();
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Counter, [{
    key: "init",
    value: function init() {
      var _this = this;

      var numberMask = IMask(this.counterInput, {
        mask: Number,
        min: 1,
        max: 1000,
        thousandsSeparator: " "
      });
      document.body.addEventListener("click", function (event) {
        if (event.target !== _this.counterInput) {
          _this.counterOptions.classList.remove("".concat(_this.counterOptionsClass, "_active"));
        }
      });
      this.counterInput.value = "1";
      this.counter.addEventListener("click", this.addOpenOptionEventHandler);
      this.counterOptionsItems.forEach(function (item) {
        item.addEventListener("click", item.fn = function (event) {
          _this.setInputValue(event, item);
        });
      });
      this.counterOptionArbitary.addEventListener("click", function (event) {
        _this.counterInput.removeAttribute("readonly");

        _this.counter.removeEventListener("click", _this.addOpenOptionEventHandler);

        _this.counterInput.focus();
      });
      this.counterInput.addEventListener("blur", function (event) {
        var value = Number(_this.counterInput.value);

        if (value <= 9) {
          _this.counter.addEventListener("click", _this.addOpenOptionEventHandler);

          _this.counterInput.setAttribute("readonly", true);
        }
      });
    }
  }, {
    key: "addOpenOptionEvent",
    value: function addOpenOptionEvent(event) {
      event.stopPropagation();
      this.counterOptions.classList.add("".concat(this.counterOptionsClass, "_active"));
    }
  }, {
    key: "setInputValue",
    value: function setInputValue(event, item) {
      event.stopPropagation();
      var regExp = /[^\d]/g;
      this.counterInput.value = item.querySelector("span").innerText.replace(regExp, "");
      this.counterOptions.classList.remove("".concat(this.counterOptionsClass, "_active"));
    }
  }]);

  return Counter;
}();



/***/ }),

/***/ 2:
/*!*********************************!*\
  !*** multi ./src/js/counter.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Nikita\projects\venskijPekar\src\js\counter.js */"./src/js/counter.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ltYXNrL2Rpc3QvaW1hc2suZXNtLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvdW50ZXIuanMiXSwibmFtZXMiOlsiX2NsYXNzQ2FsbENoZWNrIiwiaW5zdGFuY2UiLCJDb25zdHJ1Y3RvciIsIlR5cGVFcnJvciIsIm1vZHVsZSIsImV4cG9ydHMiLCJfZGVmaW5lUHJvcGVydGllcyIsInRhcmdldCIsInByb3BzIiwiaSIsImxlbmd0aCIsImRlc2NyaXB0b3IiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImtleSIsIl9jcmVhdGVDbGFzcyIsInByb3RvUHJvcHMiLCJzdGF0aWNQcm9wcyIsInByb3RvdHlwZSIsIl90eXBlb2YiLCJvYmoiLCJTeW1ib2wiLCJpdGVyYXRvciIsImNvbnN0cnVjdG9yIiwiX2RlZmluZVByb3BlcnR5IiwidmFsdWUiLCJfaW5oZXJpdHMiLCJzdWJDbGFzcyIsInN1cGVyQ2xhc3MiLCJjcmVhdGUiLCJfc2V0UHJvdG90eXBlT2YiLCJfZ2V0UHJvdG90eXBlT2YiLCJvIiwic2V0UHJvdG90eXBlT2YiLCJnZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsInAiLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSIsInNvdXJjZSIsImV4Y2x1ZGVkIiwic291cmNlS2V5cyIsImtleXMiLCJpbmRleE9mIiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwic291cmNlU3ltYm9sS2V5cyIsInByb3BlcnR5SXNFbnVtZXJhYmxlIiwiY2FsbCIsIl9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQiLCJzZWxmIiwiUmVmZXJlbmNlRXJyb3IiLCJfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiIsIl9zdXBlclByb3BCYXNlIiwib2JqZWN0IiwicHJvcGVydHkiLCJoYXNPd25Qcm9wZXJ0eSIsIl9nZXQiLCJyZWNlaXZlciIsIlJlZmxlY3QiLCJnZXQiLCJiYXNlIiwiZGVzYyIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsInNldCIsIl9zZXQiLCJpc1N0cmljdCIsInMiLCJFcnJvciIsIl9zbGljZWRUb0FycmF5IiwiYXJyIiwiX2FycmF5V2l0aEhvbGVzIiwiX2l0ZXJhYmxlVG9BcnJheUxpbWl0IiwiX25vbkl0ZXJhYmxlUmVzdCIsIkFycmF5IiwiaXNBcnJheSIsIl9hcnIiLCJfbiIsIl9kIiwiX2UiLCJ1bmRlZmluZWQiLCJfaSIsIl9zIiwibmV4dCIsImRvbmUiLCJwdXNoIiwiZXJyIiwiaXNTdHJpbmciLCJzdHIiLCJTdHJpbmciLCJESVJFQ1RJT04iLCJOT05FIiwiTEVGVCIsIkZPUkNFX0xFRlQiLCJSSUdIVCIsIkZPUkNFX1JJR0hUIiwiZm9yY2VEaXJlY3Rpb24iLCJkaXJlY3Rpb24iLCJlc2NhcGVSZWdFeHAiLCJyZXBsYWNlIiwib2JqZWN0SW5jbHVkZXMiLCJiIiwiYSIsImFyckEiLCJhcnJCIiwiZGF0ZUEiLCJEYXRlIiwiZGF0ZUIiLCJnZXRUaW1lIiwicmVnZXhwQSIsIlJlZ0V4cCIsInJlZ2V4cEIiLCJ0b1N0cmluZyIsImciLCJ3aW5kb3ciLCJnbG9iYWwiLCJBY3Rpb25EZXRhaWxzIiwiY3Vyc29yUG9zIiwib2xkVmFsdWUiLCJvbGRTZWxlY3Rpb24iLCJzbGljZSIsInN0YXJ0Q2hhbmdlUG9zIiwic3RhcnQiLCJNYXRoIiwibWluIiwic3Vic3RyIiwiaW5zZXJ0ZWRDb3VudCIsIm1heCIsImVuZCIsInJlbW92ZWRDb3VudCIsInN1YnN0cmluZyIsIkNoYW5nZURldGFpbHMiLCJkZXRhaWxzIiwiYXNzaWduIiwiaW5zZXJ0ZWQiLCJyYXdJbnNlcnRlZCIsInNraXAiLCJ0YWlsU2hpZnQiLCJhZ2dyZWdhdGUiLCJDb250aW51b3VzVGFpbERldGFpbHMiLCJhcmd1bWVudHMiLCJmcm9tIiwic3RvcCIsImV4dGVuZCIsInRhaWwiLCJhcHBlbmRUbyIsIm1hc2tlZCIsImFwcGVuZCIsIl9hcHBlbmRQbGFjZWhvbGRlciIsInNoaWZ0QmVmb3JlIiwicG9zIiwic2hpZnRDaGFyIiwic3RhdGUiLCJNYXNrZWQiLCJvcHRzIiwiX3ZhbHVlIiwiX3VwZGF0ZSIsImlzSW5pdGlhbGl6ZWQiLCJ1cGRhdGVPcHRpb25zIiwid2l0aFZhbHVlUmVmcmVzaCIsImJpbmQiLCJyZXNldCIsInJlc29sdmUiLCJpbnB1dCIsImRvQ29tbWl0IiwibmVhcmVzdElucHV0UG9zIiwiZXh0cmFjdElucHV0IiwiZnJvbVBvcyIsInRvUG9zIiwiZXh0cmFjdFRhaWwiLCJhcHBlbmRUYWlsIiwiX2FwcGVuZENoYXJSYXciLCJjaCIsImZsYWdzIiwiZG9QcmVwYXJlIiwiX2FwcGVuZENoYXIiLCJjaGVja1RhaWwiLCJjb25zaXN0ZW50U3RhdGUiLCJjb25zaXN0ZW50VGFpbCIsImFwcGVuZGVkIiwiZG9WYWxpZGF0ZSIsImJlZm9yZVRhaWxTdGF0ZSIsIm92ZXJ3cml0ZSIsInRhaWxEZXRhaWxzIiwiX2JlZm9yZVRhaWxTdGF0ZSIsImNpIiwicmVtb3ZlIiwiZm4iLCJfcmVmcmVzaGluZyIsInVubWFza2VkIiwidW5tYXNrZWRWYWx1ZSIsInJldCIsInByZXBhcmUiLCJ2YWxpZGF0ZSIsInBhcmVudCIsImNvbW1pdCIsInNwbGljZSIsImRlbGV0ZUNvdW50IiwicmVtb3ZlRGlyZWN0aW9uIiwidGFpbFBvcyIsImNoYW5nZURldGFpbHMiLCJyYXciLCJtYXNrZWRDbGFzcyIsIm1hc2siLCJJTWFzayIsIk1hc2tlZFJlZ0V4cCIsIk1hc2tlZFBhdHRlcm4iLCJNYXNrZWREYXRlIiwiTnVtYmVyIiwiTWFza2VkTnVtYmVyIiwiTWFza2VkRHluYW1pYyIsIkZ1bmN0aW9uIiwiTWFza2VkRnVuY3Rpb24iLCJjb25zb2xlIiwid2FybiIsImNyZWF0ZU1hc2siLCJNYXNrZWRDbGFzcyIsIkRFRkFVTFRfSU5QVVRfREVGSU5JVElPTlMiLCJQYXR0ZXJuSW5wdXREZWZpbml0aW9uIiwiYmxvY2tPcHRzIiwiX2lzRmlsbGVkIiwiaXNPcHRpb25hbCIsImxhenkiLCJwbGFjZWhvbGRlckNoYXIiLCJCb29sZWFuIiwiX3RoaXMkbWFza2VkIiwiYXBwbHkiLCJfdGhpcyRtYXNrZWQyIiwiX3RoaXMkbWFza2VkMyIsIm1pblBvcyIsIm1heFBvcyIsImJvdW5kUG9zIiwiaXNDb21wbGV0ZSIsIl90aGlzJG1hc2tlZDQiLCJfdGhpcyRwYXJlbnQiLCJQYXR0ZXJuRml4ZWREZWZpbml0aW9uIiwiX2lzUmF3SW5wdXQiLCJjaGFyIiwiaXNSZXNvbHZlZCIsImlzVW5tYXNraW5nIiwiQ2h1bmtzVGFpbERldGFpbHMiLCJjaHVua3MiLCJtYXAiLCJqb2luIiwidGFpbENodW5rIiwibGFzdENodW5rIiwiZXh0ZW5kTGFzdCIsImZpcnN0VGFpbENodW5rIiwic2hpZnQiLCJibG9ja0luZGV4IiwiY2h1bmsiLCJsYXN0QmxvY2tJdGVyIiwiX21hcFBvc1RvQmxvY2siLCJjaHVua0Jsb2NrIiwiaW5kZXgiLCJfc3RvcHMiLCJfYmxvY2tzIiwicmVtYWluQ2hhcnMiLCJjaHVua1NoaWZ0UG9zIiwiYyIsImNzdGF0ZSIsIl9NYXNrZWQiLCJkZWZpbml0aW9ucyIsIkRFRkFVTFRTIiwiX3JlYnVpbGRNYXNrIiwiX3RoaXMiLCJkZWZzIiwiX21hc2tlZEJsb2NrcyIsInBhdHRlcm4iLCJ1bm1hc2tpbmdCbG9jayIsIm9wdGlvbmFsQmxvY2siLCJibG9ja3MiLCJfcmV0IiwiYk5hbWVzIiwiZmlsdGVyIiwiYk5hbWUiLCJzb3J0IiwibWFza2VkQmxvY2siLCJfaXNJbnB1dCIsIlNUT1BfQ0hBUiIsIkVTQ0FQRV9DSEFSIiwiZGVmIiwiZm9yRWFjaCIsImJsb2NrSXRlciIsImJpIiwiX2Jsb2NrIiwiYmxvY2tEZXRhaWxzIiwiX3RoaXMyIiwiY2h1bmtUYWlsIiwiX2ZvckVhY2hCbG9ja3NJblJhbmdlIiwiYkZyb21Qb3MiLCJiVG9Qb3MiLCJibG9ja0NodW5rIiwiX2ZpbmRTdG9wQmVmb3JlIiwiX2Jsb2NrU3RhcnRQb3MiLCJfIiwic3RvcEJlZm9yZSIsInNpIiwidG9CbG9ja0luZGV4IiwiX3RoaXMzIiwic3RhcnRCbG9ja0l0ZXIiLCJzdGFydEJsb2NrSW5kZXgiLCJlbmRCbG9ja0luZGV4IiwiYXJncyIsImJEZXRhaWxzIiwiYWNjVmFsIiwiX2Jsb2NrMiIsImJsb2NrU3RhcnRQb3MiLCJvZmZzZXQiLCJyZWR1Y2UiLCJmcm9tQmxvY2tJdGVyIiwidG9CbG9ja0l0ZXIiLCJpc1NhbWVCbG9jayIsImZyb21CbG9ja1N0YXJ0UG9zIiwiZnJvbUJsb2NrRW5kUG9zIiwicmVtb3ZlRGV0YWlscyIsImJlZ2luQmxvY2tEYXRhIiwiYmVnaW5CbG9ja09mZnNldCIsImJlZ2luQmxvY2tJbmRleCIsImJlZ2luQmxvY2siLCJiZWdpbkJsb2NrQ3Vyc29yUG9zIiwiY3Vyc29yQXRSaWdodCIsImN1cnNvckF0TGVmdCIsInNlYXJjaEJsb2NrSW5kZXgiLCJibG9ja0luZGV4QXRMZWZ0IiwiYmxvY2tBdExlZnQiLCJibG9ja0lucHV0UG9zIiwiZmlyc3RJbnB1dEF0UmlnaHQiLCJibG9ja0F0UmlnaHQiLCJfYmxvY2tJbnB1dFBvcyIsIl9iaSIsIl9ibG9jazMiLCJfYmxvY2tJbnB1dFBvczIiLCJmaXJzdEZpbGxlZEJsb2NrSW5kZXhBdFJpZ2h0IiwiX2JpMiIsImZpbGxlZEJsb2NrIiwiX2Jsb2NrSW5wdXRQb3MzIiwiZmlyc3RGaWxsZWRJbnB1dEJsb2NrSW5kZXgiLCJmaXJzdEVtcHR5SW5wdXRCbG9ja0luZGV4IiwiX2JpMyIsIl9ibG9jazQiLCJfYmxvY2tJbnB1dFBvczQiLCJfYmk0IiwiX2Jsb2NrNSIsIl9ibG9ja0lucHV0UG9zNSIsImJsb2NrQWxpZ25lZFBvcyIsImlzSW5wdXQiLCJfYmk1IiwiX2Jsb2NrNiIsIl9ibG9ja0lucHV0UG9zNiIsImZpcnN0SW5wdXRCbG9ja0FsaWduZWRJbmRleCIsImZpcnN0SW5wdXRCbG9ja0FsaWduZWRQb3MiLCJfYmk2IiwiX2Jsb2NrNyIsIl9ibG9ja0lucHV0UG9zNyIsIl9iaTciLCJfYmxvY2s4IiwiX2Jsb2NrSW5wdXRQb3M4IiwiX2JpOCIsIl9ibG9jazkiLCJfYmxvY2tJbnB1dFBvczkiLCJhbGlnbmVkUG9zIiwibmFtZSIsIm1hc2tlZEJsb2NrcyIsIl90aGlzNCIsImluZGljZXMiLCJnaSIsIm1hc2tlZFN0YXRlIiwiZXZlcnkiLCJJbnB1dERlZmluaXRpb24iLCJGaXhlZERlZmluaXRpb24iLCJibG9jayIsIk1hc2tlZFJhbmdlIiwiX01hc2tlZFBhdHRlcm4iLCJ0byIsIm1heExlbmd0aCIsImZyb21TdHIiLCJwYWRTdGFydCIsInRvU3RyIiwic2FtZUNoYXJzQ291bnQiLCJyZXBlYXQiLCJib3VuZGFyaWVzIiwibWluc3RyIiwibWF4c3RyIiwiX3JlZiIsIm1hdGNoIiwiX3JlZjIiLCJwbGFjZWhvbGRlciIsIm51bSIsInBhZEVuZCIsImF1dG9maXgiLCJ2YWwiLCJwcmVwU3RyIiwibmV4dFZhbCIsIl90aGlzJGJvdW5kYXJpZXMiLCJfdGhpcyRib3VuZGFyaWVzMiIsIl9nZXQyIiwiZmlyc3ROb25aZXJvIiwic2VhcmNoIiwiX21hdGNoRnJvbSIsIl90aGlzJGJvdW5kYXJpZXMzIiwiX3RoaXMkYm91bmRhcmllczQiLCJfbGVuIiwiX2tleSIsImNvbmNhdCIsIkdFVF9ERUZBVUxUX0JMT0NLUyIsIlkiLCJnZXRGdWxsWWVhciIsIm0iLCJnZXRNb250aCIsImQiLCJnZXREYXRlIiwiYmsiLCJkYXRlIiwiaXNEYXRlRXhpc3QiLCJmb3JtYXQiLCJwYXJzZSIsImRheSIsIm1vbnRoIiwieWVhciIsIl9zdHIkc3BsaXQiLCJzcGxpdCIsIl9zdHIkc3BsaXQyIiwiTWFza0VsZW1lbnQiLCJzZWxlY3QiLCJzZWxlY3Rpb25TdGFydCIsInNlbGVjdGlvbkVuZCIsIl91bnNhZmVTZWxlY3QiLCJlIiwiYmluZEV2ZW50cyIsImhhbmRsZXJzIiwidW5iaW5kRXZlbnRzIiwiX3Vuc2FmZVNlbGVjdGlvblN0YXJ0IiwiX3Vuc2FmZVNlbGVjdGlvbkVuZCIsIkhUTUxNYXNrRWxlbWVudCIsIl9NYXNrRWxlbWVudCIsIl9oYW5kbGVycyIsInNldFNlbGVjdGlvblJhbmdlIiwiZXZlbnQiLCJfdG9nZ2xlRXZlbnRIYW5kbGVyIiwiRVZFTlRTX01BUCIsImhhbmRsZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsImRvY3VtZW50IiwiYWN0aXZlRWxlbWVudCIsInNlbGVjdGlvbkNoYW5nZSIsImRyb3AiLCJjbGljayIsImZvY3VzIiwiSW5wdXRNYXNrIiwiZWwiLCJfbGlzdGVuZXJzIiwiX3VubWFza2VkVmFsdWUiLCJfc2F2ZVNlbGVjdGlvbiIsIl9vbklucHV0IiwiX29uQ2hhbmdlIiwiX29uRHJvcCIsIl9vbkZvY3VzIiwiYWxpZ25DdXJzb3IiLCJhbGlnbkN1cnNvckZyaWVuZGx5IiwiX2JpbmRFdmVudHMiLCJ1cGRhdGVWYWx1ZSIsIm1hc2tFcXVhbHMiLCJfdW5iaW5kRXZlbnRzIiwiX2ZpcmVFdmVudCIsImV2IiwibGlzdGVuZXJzIiwibCIsIl9zZWxlY3Rpb24iLCJ1cGRhdGVDb250cm9sIiwibmV3VW5tYXNrZWRWYWx1ZSIsIm5ld1ZhbHVlIiwiaXNDaGFuZ2VkIiwiX2ZpcmVDaGFuZ2VFdmVudHMiLCJyZXN0T3B0cyIsInVwZGF0ZU1hc2siLCJ1cGRhdGVPcHRzIiwidXBkYXRlQ3Vyc29yIiwiX2RlbGF5VXBkYXRlQ3Vyc29yIiwiX2Fib3J0VXBkYXRlQ3Vyc29yIiwiX2NoYW5naW5nQ3Vyc29yUG9zIiwiX2N1cnNvckNoYW5naW5nIiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsIm9uIiwib2ZmIiwiaEluZGV4Iiwib2xkUmF3VmFsdWUiLCJyYXdJbnB1dFZhbHVlIiwicmVtb3ZlZCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiZGVzdHJveSIsInR5cGVkVmFsdWUiLCJpc0FjdGl2ZSIsIk1hc2tlZEVudW0iLCJlbnVtIiwic29tZSIsIl91cGRhdGVSZWdFeHBzIiwiYWxsb3dOZWdhdGl2ZSIsIm1pZElucHV0IiwibWlkIiwic2NhbGUiLCJyYWRpeCIsIl9udW1iZXJSZWdFeHBJbnB1dCIsIl9udW1iZXJSZWdFeHAiLCJfbWFwVG9SYWRpeFJlZ0V4cCIsIm1hcFRvUmFkaXgiLCJfdGhvdXNhbmRzU2VwYXJhdG9yUmVnRXhwIiwidGhvdXNhbmRzU2VwYXJhdG9yIiwiX3JlbW92ZVRob3VzYW5kc1NlcGFyYXRvcnMiLCJfaW5zZXJ0VGhvdXNhbmRzU2VwYXJhdG9ycyIsInBhcnRzIiwiX3NlcGFyYXRvcnNDb3VudCIsImV4dGVuZE9uU2VwYXJhdG9ycyIsImNvdW50IiwiX3NlcGFyYXRvcnNDb3VudEZyb21TbGljZSIsIl90aGlzJF9hZGp1c3RSYW5nZVdpdCIsIl9hZGp1c3RSYW5nZVdpdGhTZXBhcmF0b3JzIiwiX3RoaXMkX2FkanVzdFJhbmdlV2l0MiIsInByZXZCZWZvcmVUYWlsVmFsdWUiLCJwcmV2QmVmb3JlVGFpbFNlcGFyYXRvcnNDb3VudCIsImFwcGVuZERldGFpbHMiLCJiZWZvcmVUYWlsVmFsdWUiLCJiZWZvcmVUYWlsU2VwYXJhdG9yc0NvdW50IiwiX2ZpbmRTZXBhcmF0b3JBcm91bmQiLCJzZWFyY2hGcm9tIiwic2VwYXJhdG9yUG9zIiwic2VwYXJhdG9yQXJvdW5kRnJvbVBvcyIsInNlcGFyYXRvckFyb3VuZFRvUG9zIiwiX3RoaXMkX2FkanVzdFJhbmdlV2l0MyIsIl90aGlzJF9hZGp1c3RSYW5nZVdpdDQiLCJ2YWx1ZUJlZm9yZVBvcyIsInZhbHVlQWZ0ZXJQb3MiLCJzZXBhcmF0b3JBdExlZnRQb3MiLCJzZXBhcmF0b3JBdExlZnRFbmRQb3MiLCJzZXBhcmF0b3JBdFJpZ2h0UG9zIiwicmVnZXhwIiwidmFsaWQiLCJ0ZXN0IiwibnVtYmVyIiwiaXNOYU4iLCJ2YWxpZG51bSIsImZvcm1hdHRlZCIsIm5vcm1hbGl6ZVplcm9zIiwiX25vcm1hbGl6ZVplcm9zIiwicGFkRnJhY3Rpb25hbFplcm9zIiwiX3BhZEZyYWN0aW9uYWxaZXJvcyIsInNpZ24iLCJ6ZXJvcyIsInNpZ25lZCIsImN1cnJlbnRNYXNrIiwiY29tcGlsZWRNYXNrcyIsIl9hcHBseURpc3BhdGNoIiwiX3RoaXMkY3VycmVudE1hc2siLCJwcmV2VmFsdWVCZWZvcmVUYWlsIiwiaW5wdXRWYWx1ZSIsImluc2VydFZhbHVlIiwiX3Jhd0lucHV0VmFsdWUiLCJ0YWlsVmFsdWUiLCJwcmV2TWFzayIsInByZXZNYXNrU3RhdGUiLCJkb0Rpc3BhdGNoIiwiZGlzcGF0Y2giLCJfdGhpcyRjdXJyZW50TWFzazIiLCJfdGhpcyRjdXJyZW50TWFzazMiLCJfdGhpcyRjdXJyZW50TWFzazQiLCJfdGhpcyRjdXJyZW50TWFzazUiLCJfZ2V0MyIsIl9sZW4yIiwiX2tleTIiLCJfdGhpcyRjdXJyZW50TWFzazYiLCJfZ2V0NCIsIl9sZW4zIiwiX2tleTMiLCJjdXJyZW50TWFza1JlZiIsIm1pIiwiaW5wdXRzIiwid2VpZ2h0IiwiaTEiLCJpMiIsIkNvdW50ZXIiLCJlbGVtIiwiY291bnRlciIsImNvdW50ZXJJbnB1dCIsInF1ZXJ5U2VsZWN0b3IiLCJjb3VudGVyT3B0aW9ucyIsImNvdW50ZXJPcHRpb25zQ2xhc3MiLCJjbGFzc05hbWUiLCJjb3VudGVyT3B0aW9uc0l0ZW1zIiwicXVlcnlTZWxlY3RvckFsbCIsImNvdW50ZXJPcHRpb25BcmJpdGFyeSIsImFkZE9wZW5PcHRpb25FdmVudEhhbmRsZXIiLCJhZGRPcGVuT3B0aW9uRXZlbnQiLCJpbml0IiwibnVtYmVyTWFzayIsImJvZHkiLCJjbGFzc0xpc3QiLCJpdGVtIiwic2V0SW5wdXRWYWx1ZSIsInJlbW92ZUF0dHJpYnV0ZSIsInNl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RyxRQUFiO0FBQ0EsV0FBS25CLFlBQUwsQ0FBa0IvaUIsS0FBbEIsR0FBMEI2akIsSUFBSSxDQUMzQmIsYUFEdUIsQ0FDVCxNQURTLEVBRXZCbUIsU0FGdUIsQ0FFYjFmLE9BRmEsQ0FFTHlmLE1BRkssRUFFRyxFQUZILENBQTFCO0FBR0EsV0FBS2pCLGNBQUwsQ0FBb0JXLFNBQXBCLENBQThCNVosTUFBOUIsV0FBd0MsS0FBS2taLG1CQUE3QztBQUNEIiwiZmlsZSI6ImNvdW50ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMik7XG4iLCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jbGFzc0NhbGxDaGVjazsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NyZWF0ZUNsYXNzOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIF90eXBlb2YgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIF90eXBlb2YgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgICByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pO1xuICB9O1xuICByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pO1xufVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICBvLl9fcHJvdG9fXyA9IHA7XG4gICAgcmV0dXJuIG87XG4gIH07XG5cbiAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTtcbn1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgdmFyIHRhcmdldCA9IHt9O1xuICB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gIHZhciBrZXksIGk7XG5cbiAgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBrZXkgPSBzb3VyY2VLZXlzW2ldO1xuICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuXG4gIHZhciB0YXJnZXQgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKTtcblxuICB2YXIga2V5LCBpO1xuXG4gIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgdmFyIHNvdXJjZVN5bWJvbEtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSk7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgc291cmNlU3ltYm9sS2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAga2V5ID0gc291cmNlU3ltYm9sS2V5c1tpXTtcbiAgICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzb3VyY2UsIGtleSkpIGNvbnRpbnVlO1xuICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHtcbiAgaWYgKHNlbGYgPT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBzZWxmO1xufVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7XG4gIGlmIChjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkge1xuICAgIHJldHVybiBjYWxsO1xuICB9XG5cbiAgcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7XG59XG5cbmZ1bmN0aW9uIF9zdXBlclByb3BCYXNlKG9iamVjdCwgcHJvcGVydHkpIHtcbiAgd2hpbGUgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSkpIHtcbiAgICBvYmplY3QgPSBfZ2V0UHJvdG90eXBlT2Yob2JqZWN0KTtcbiAgICBpZiAob2JqZWN0ID09PSBudWxsKSBicmVhaztcbiAgfVxuXG4gIHJldHVybiBvYmplY3Q7XG59XG5cbmZ1bmN0aW9uIF9nZXQodGFyZ2V0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpIHtcbiAgaWYgKHR5cGVvZiBSZWZsZWN0ICE9PSBcInVuZGVmaW5lZFwiICYmIFJlZmxlY3QuZ2V0KSB7XG4gICAgX2dldCA9IFJlZmxlY3QuZ2V0O1xuICB9IGVsc2Uge1xuICAgIF9nZXQgPSBmdW5jdGlvbiBfZ2V0KHRhcmdldCwgcHJvcGVydHksIHJlY2VpdmVyKSB7XG4gICAgICB2YXIgYmFzZSA9IF9zdXBlclByb3BCYXNlKHRhcmdldCwgcHJvcGVydHkpO1xuXG4gICAgICBpZiAoIWJhc2UpIHJldHVybjtcbiAgICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihiYXNlLCBwcm9wZXJ0eSk7XG5cbiAgICAgIGlmIChkZXNjLmdldCkge1xuICAgICAgICByZXR1cm4gZGVzYy5nZXQuY2FsbChyZWNlaXZlcik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkZXNjLnZhbHVlO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX2dldCh0YXJnZXQsIHByb3BlcnR5LCByZWNlaXZlciB8fCB0YXJnZXQpO1xufVxuXG5mdW5jdGlvbiBzZXQodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUsIHJlY2VpdmVyKSB7XG4gIGlmICh0eXBlb2YgUmVmbGVjdCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBSZWZsZWN0LnNldCkge1xuICAgIHNldCA9IFJlZmxlY3Quc2V0O1xuICB9IGVsc2Uge1xuICAgIHNldCA9IGZ1bmN0aW9uIHNldCh0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSwgcmVjZWl2ZXIpIHtcbiAgICAgIHZhciBiYXNlID0gX3N1cGVyUHJvcEJhc2UodGFyZ2V0LCBwcm9wZXJ0eSk7XG5cbiAgICAgIHZhciBkZXNjO1xuXG4gICAgICBpZiAoYmFzZSkge1xuICAgICAgICBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihiYXNlLCBwcm9wZXJ0eSk7XG5cbiAgICAgICAgaWYgKGRlc2Muc2V0KSB7XG4gICAgICAgICAgZGVzYy5zZXQuY2FsbChyZWNlaXZlciwgdmFsdWUpO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKCFkZXNjLndyaXRhYmxlKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHJlY2VpdmVyLCBwcm9wZXJ0eSk7XG5cbiAgICAgIGlmIChkZXNjKSB7XG4gICAgICAgIGlmICghZGVzYy53cml0YWJsZSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRlc2MudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlY2VpdmVyLCBwcm9wZXJ0eSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfZGVmaW5lUHJvcGVydHkocmVjZWl2ZXIsIHByb3BlcnR5LCB2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gc2V0KHRhcmdldCwgcHJvcGVydHksIHZhbHVlLCByZWNlaXZlcik7XG59XG5cbmZ1bmN0aW9uIF9zZXQodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUsIHJlY2VpdmVyLCBpc1N0cmljdCkge1xuICB2YXIgcyA9IHNldCh0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSwgcmVjZWl2ZXIgfHwgdGFyZ2V0KTtcblxuICBpZiAoIXMgJiYgaXNTdHJpY3QpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2ZhaWxlZCB0byBzZXQgcHJvcGVydHknKTtcbiAgfVxuXG4gIHJldHVybiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7XG4gIHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7XG59XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjtcbn1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkge1xuICB2YXIgX2FyciA9IFtdO1xuICB2YXIgX24gPSB0cnVlO1xuICB2YXIgX2QgPSBmYWxzZTtcbiAgdmFyIF9lID0gdW5kZWZpbmVkO1xuXG4gIHRyeSB7XG4gICAgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkge1xuICAgICAgX2Fyci5wdXNoKF9zLnZhbHVlKTtcblxuICAgICAgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgX2QgPSB0cnVlO1xuICAgIF9lID0gZXJyO1xuICB9IGZpbmFsbHkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlmIChfZCkgdGhyb3cgX2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIF9hcnI7XG59XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlXCIpO1xufVxuXG4vKiogQ2hlY2tzIGlmIHZhbHVlIGlzIHN0cmluZyAqL1xuZnVuY3Rpb24gaXNTdHJpbmcoc3RyKSB7XG4gIHJldHVybiB0eXBlb2Ygc3RyID09PSAnc3RyaW5nJyB8fCBzdHIgaW5zdGFuY2VvZiBTdHJpbmc7XG59XG4vKipcclxuICBEaXJlY3Rpb25cclxuICBAcHJvcCB7c3RyaW5nfSBOT05FXHJcbiAgQHByb3Age3N0cmluZ30gTEVGVFxyXG4gIEBwcm9wIHtzdHJpbmd9IEZPUkNFX0xFRlRcclxuICBAcHJvcCB7c3RyaW5nfSBSSUdIVFxyXG4gIEBwcm9wIHtzdHJpbmd9IEZPUkNFX1JJR0hUXHJcbiovXG5cbnZhciBESVJFQ1RJT04gPSB7XG4gIE5PTkU6ICdOT05FJyxcbiAgTEVGVDogJ0xFRlQnLFxuICBGT1JDRV9MRUZUOiAnRk9SQ0VfTEVGVCcsXG4gIFJJR0hUOiAnUklHSFQnLFxuICBGT1JDRV9SSUdIVDogJ0ZPUkNFX1JJR0hUJ1xuICAvKipcclxuICAgIERpcmVjdGlvblxyXG4gICAgQGVudW0ge3N0cmluZ31cclxuICAqL1xuXG59O1xuLyoqICovXG5cbmZ1bmN0aW9uIGZvcmNlRGlyZWN0aW9uKGRpcmVjdGlvbikge1xuICBzd2l0Y2ggKGRpcmVjdGlvbikge1xuICAgIGNhc2UgRElSRUNUSU9OLkxFRlQ6XG4gICAgICByZXR1cm4gRElSRUNUSU9OLkZPUkNFX0xFRlQ7XG5cbiAgICBjYXNlIERJUkVDVElPTi5SSUdIVDpcbiAgICAgIHJldHVybiBESVJFQ1RJT04uRk9SQ0VfUklHSFQ7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGRpcmVjdGlvbjtcbiAgfVxufVxuLyoqIEVzY2FwZXMgcmVndWxhciBleHByZXNzaW9uIGNvbnRyb2wgY2hhcnMgKi9cblxuZnVuY3Rpb24gZXNjYXBlUmVnRXhwKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbLiorP149IToke30oKXxbXFxdL1xcXFxdKS9nLCAnXFxcXCQxJyk7XG59IC8vIGNsb25lZCBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9lcG9iZXJlemtpbi9mYXN0LWRlZXAtZXF1YWwgd2l0aCBzbWFsbCBjaGFuZ2VzXG5cbmZ1bmN0aW9uIG9iamVjdEluY2x1ZGVzKGIsIGEpIHtcbiAgaWYgKGEgPT09IGIpIHJldHVybiB0cnVlO1xuICB2YXIgYXJyQSA9IEFycmF5LmlzQXJyYXkoYSksXG4gICAgICBhcnJCID0gQXJyYXkuaXNBcnJheShiKSxcbiAgICAgIGk7XG5cbiAgaWYgKGFyckEgJiYgYXJyQikge1xuICAgIGlmIChhLmxlbmd0aCAhPSBiLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IGEubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICghb2JqZWN0SW5jbHVkZXMoYVtpXSwgYltpXSkpIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmIChhcnJBICE9IGFyckIpIHJldHVybiBmYWxzZTtcblxuICBpZiAoYSAmJiBiICYmIF90eXBlb2YoYSkgPT09ICdvYmplY3QnICYmIF90eXBlb2YoYikgPT09ICdvYmplY3QnKSB7XG4gICAgdmFyIGRhdGVBID0gYSBpbnN0YW5jZW9mIERhdGUsXG4gICAgICAgIGRhdGVCID0gYiBpbnN0YW5jZW9mIERhdGU7XG4gICAgaWYgKGRhdGVBICYmIGRhdGVCKSByZXR1cm4gYS5nZXRUaW1lKCkgPT0gYi5nZXRUaW1lKCk7XG4gICAgaWYgKGRhdGVBICE9IGRhdGVCKSByZXR1cm4gZmFsc2U7XG4gICAgdmFyIHJlZ2V4cEEgPSBhIGluc3RhbmNlb2YgUmVnRXhwLFxuICAgICAgICByZWdleHBCID0gYiBpbnN0YW5jZW9mIFJlZ0V4cDtcbiAgICBpZiAocmVnZXhwQSAmJiByZWdleHBCKSByZXR1cm4gYS50b1N0cmluZygpID09IGIudG9TdHJpbmcoKTtcbiAgICBpZiAocmVnZXhwQSAhPSByZWdleHBCKSByZXR1cm4gZmFsc2U7XG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhhKTsgLy8gaWYgKGtleXMubGVuZ3RoICE9PSBPYmplY3Qua2V5cyhiKS5sZW5ndGgpIHJldHVybiBmYWxzZTtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBrZXlzW2ldKSkgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGZvciAoaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoIW9iamVjdEluY2x1ZGVzKGJba2V5c1tpXV0sIGFba2V5c1tpXV0pKSByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSBpZiAoYSAmJiBiICYmIHR5cGVvZiBhID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBiID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIGEudG9TdHJpbmcoKSA9PT0gYi50b1N0cmluZygpO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWYgKi9cblxudmFyIGcgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cgfHwgdHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcgJiYgZ2xvYmFsLmdsb2JhbCA9PT0gZ2xvYmFsICYmIGdsb2JhbCB8fCB0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5zZWxmID09PSBzZWxmICYmIHNlbGYgfHwge307XG4vKiBlc2xpbnQtZW5hYmxlIG5vLXVuZGVmICovXG5cbi8qKiBTZWxlY3Rpb24gcmFuZ2UgKi9cblxuLyoqIFByb3ZpZGVzIGRldGFpbHMgb2YgY2hhbmdpbmcgaW5wdXQgKi9cblxudmFyIEFjdGlvbkRldGFpbHMgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICAvKiogQ3VycmVudCBpbnB1dCB2YWx1ZSAqL1xuXG4gIC8qKiBDdXJyZW50IGN1cnNvciBwb3NpdGlvbiAqL1xuXG4gIC8qKiBPbGQgaW5wdXQgdmFsdWUgKi9cblxuICAvKiogT2xkIHNlbGVjdGlvbiAqL1xuICBmdW5jdGlvbiBBY3Rpb25EZXRhaWxzKHZhbHVlLCBjdXJzb3JQb3MsIG9sZFZhbHVlLCBvbGRTZWxlY3Rpb24pIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQWN0aW9uRGV0YWlscyk7XG5cbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5jdXJzb3JQb3MgPSBjdXJzb3JQb3M7XG4gICAgdGhpcy5vbGRWYWx1ZSA9IG9sZFZhbHVlO1xuICAgIHRoaXMub2xkU2VsZWN0aW9uID0gb2xkU2VsZWN0aW9uOyAvLyBkb3VibGUgY2hlY2sgaWYgbGVmdCBwYXJ0IHdhcyBjaGFuZ2VkIChhdXRvZmlsbGluZywgb3RoZXIgbm9uLXN0YW5kYXJkIGlucHV0IHRyaWdnZXJzKVxuXG4gICAgd2hpbGUgKHRoaXMudmFsdWUuc2xpY2UoMCwgdGhpcy5zdGFydENoYW5nZVBvcykgIT09IHRoaXMub2xkVmFsdWUuc2xpY2UoMCwgdGhpcy5zdGFydENoYW5nZVBvcykpIHtcbiAgICAgIC0tdGhpcy5vbGRTZWxlY3Rpb24uc3RhcnQ7XG4gICAgfVxuICB9XG4gIC8qKlxyXG4gICAgU3RhcnQgY2hhbmdpbmcgcG9zaXRpb25cclxuICAgIEByZWFkb25seVxyXG4gICovXG5cblxuICBfY3JlYXRlQ2xhc3MoQWN0aW9uRGV0YWlscywgW3tcbiAgICBrZXk6IFwic3RhcnRDaGFuZ2VQb3NcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBNYXRoLm1pbih0aGlzLmN1cnNvclBvcywgdGhpcy5vbGRTZWxlY3Rpb24uc3RhcnQpO1xuICAgIH1cbiAgICAvKipcclxuICAgICAgSW5zZXJ0ZWQgc3ltYm9scyBjb3VudFxyXG4gICAgICBAcmVhZG9ubHlcclxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJpbnNlcnRlZENvdW50XCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5jdXJzb3JQb3MgLSB0aGlzLnN0YXJ0Q2hhbmdlUG9zO1xuICAgIH1cbiAgICAvKipcclxuICAgICAgSW5zZXJ0ZWQgc3ltYm9sc1xyXG4gICAgICBAcmVhZG9ubHlcclxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJpbnNlcnRlZFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMudmFsdWUuc3Vic3RyKHRoaXMuc3RhcnRDaGFuZ2VQb3MsIHRoaXMuaW5zZXJ0ZWRDb3VudCk7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICBSZW1vdmVkIHN5bWJvbHMgY291bnRcclxuICAgICAgQHJlYWRvbmx5XHJcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwicmVtb3ZlZENvdW50XCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAvLyBNYXRoLm1heCBmb3Igb3Bwb3NpdGUgb3BlcmF0aW9uXG4gICAgICByZXR1cm4gTWF0aC5tYXgodGhpcy5vbGRTZWxlY3Rpb24uZW5kIC0gdGhpcy5zdGFydENoYW5nZVBvcyB8fCAvLyBmb3IgRGVsZXRlXG4gICAgICB0aGlzLm9sZFZhbHVlLmxlbmd0aCAtIHRoaXMudmFsdWUubGVuZ3RoLCAwKTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgIFJlbW92ZWQgc3ltYm9sc1xyXG4gICAgICBAcmVhZG9ubHlcclxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJyZW1vdmVkXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5vbGRWYWx1ZS5zdWJzdHIodGhpcy5zdGFydENoYW5nZVBvcywgdGhpcy5yZW1vdmVkQ291bnQpO1xuICAgIH1cbiAgICAvKipcclxuICAgICAgVW5jaGFuZ2VkIGhlYWQgc3ltYm9sc1xyXG4gICAgICBAcmVhZG9ubHlcclxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJoZWFkXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy52YWx1ZS5zdWJzdHJpbmcoMCwgdGhpcy5zdGFydENoYW5nZVBvcyk7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICBVbmNoYW5nZWQgdGFpbCBzeW1ib2xzXHJcbiAgICAgIEByZWFkb25seVxyXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInRhaWxcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLnZhbHVlLnN1YnN0cmluZyh0aGlzLnN0YXJ0Q2hhbmdlUG9zICsgdGhpcy5pbnNlcnRlZENvdW50KTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgIFJlbW92ZSBkaXJlY3Rpb25cclxuICAgICAgQHJlYWRvbmx5XHJcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwicmVtb3ZlRGlyZWN0aW9uXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICBpZiAoIXRoaXMucmVtb3ZlZENvdW50IHx8IHRoaXMuaW5zZXJ0ZWRDb3VudCkgcmV0dXJuIERJUkVDVElPTi5OT05FOyAvLyBhbGlnbiByaWdodCBpZiBkZWxldGUgYXQgcmlnaHQgb3IgaWYgcmFuZ2UgcmVtb3ZlZCAoZXZlbnQgd2l0aCBiYWNrc3BhY2UpXG5cbiAgICAgIHJldHVybiB0aGlzLm9sZFNlbGVjdGlvbi5lbmQgPT09IHRoaXMuY3Vyc29yUG9zIHx8IHRoaXMub2xkU2VsZWN0aW9uLnN0YXJ0ID09PSB0aGlzLmN1cnNvclBvcyA/IERJUkVDVElPTi5SSUdIVCA6IERJUkVDVElPTi5MRUZUO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBBY3Rpb25EZXRhaWxzO1xufSgpO1xuXG4vKipcclxuICBQcm92aWRlcyBkZXRhaWxzIG9mIGNoYW5naW5nIG1vZGVsIHZhbHVlXHJcbiAgQHBhcmFtIHtPYmplY3R9IFtkZXRhaWxzXVxyXG4gIEBwYXJhbSB7c3RyaW5nfSBbZGV0YWlscy5pbnNlcnRlZF0gLSBJbnNlcnRlZCBzeW1ib2xzXHJcbiAgQHBhcmFtIHtib29sZWFufSBbZGV0YWlscy5za2lwXSAtIENhbiBza2lwIGNoYXJzXHJcbiAgQHBhcmFtIHtudW1iZXJ9IFtkZXRhaWxzLnJlbW92ZUNvdW50XSAtIFJlbW92ZWQgc3ltYm9scyBjb3VudFxyXG4gIEBwYXJhbSB7bnVtYmVyfSBbZGV0YWlscy50YWlsU2hpZnRdIC0gQWRkaXRpb25hbCBvZmZzZXQgaWYgYW55IGNoYW5nZXMgb2NjdXJyZWQgYmVmb3JlIHRhaWxcclxuKi9cbnZhciBDaGFuZ2VEZXRhaWxzID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgLyoqIEluc2VydGVkIHN5bWJvbHMgKi9cblxuICAvKiogQ2FuIHNraXAgY2hhcnMgKi9cblxuICAvKiogQWRkaXRpb25hbCBvZmZzZXQgaWYgYW55IGNoYW5nZXMgb2NjdXJyZWQgYmVmb3JlIHRhaWwgKi9cblxuICAvKiogUmF3IGluc2VydGVkIGlzIHVzZWQgYnkgZHluYW1pYyBtYXNrICovXG4gIGZ1bmN0aW9uIENoYW5nZURldGFpbHMoZGV0YWlscykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDaGFuZ2VEZXRhaWxzKTtcblxuICAgIE9iamVjdC5hc3NpZ24odGhpcywge1xuICAgICAgaW5zZXJ0ZWQ6ICcnLFxuICAgICAgcmF3SW5zZXJ0ZWQ6ICcnLFxuICAgICAgc2tpcDogZmFsc2UsXG4gICAgICB0YWlsU2hpZnQ6IDBcbiAgICB9LCBkZXRhaWxzKTtcbiAgfVxuICAvKipcclxuICAgIEFnZ3JlZ2F0ZSBjaGFuZ2VzXHJcbiAgICBAcmV0dXJucyB7Q2hhbmdlRGV0YWlsc30gYHRoaXNgXHJcbiAgKi9cblxuXG4gIF9jcmVhdGVDbGFzcyhDaGFuZ2VEZXRhaWxzLCBbe1xuICAgIGtleTogXCJhZ2dyZWdhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWdncmVnYXRlKGRldGFpbHMpIHtcbiAgICAgIHRoaXMucmF3SW5zZXJ0ZWQgKz0gZGV0YWlscy5yYXdJbnNlcnRlZDtcbiAgICAgIHRoaXMuc2tpcCA9IHRoaXMuc2tpcCB8fCBkZXRhaWxzLnNraXA7XG4gICAgICB0aGlzLmluc2VydGVkICs9IGRldGFpbHMuaW5zZXJ0ZWQ7XG4gICAgICB0aGlzLnRhaWxTaGlmdCArPSBkZXRhaWxzLnRhaWxTaGlmdDtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKiogVG90YWwgb2Zmc2V0IGNvbnNpZGVyaW5nIGFsbCBjaGFuZ2VzICovXG5cbiAgfSwge1xuICAgIGtleTogXCJvZmZzZXRcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLnRhaWxTaGlmdCArIHRoaXMuaW5zZXJ0ZWQubGVuZ3RoO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBDaGFuZ2VEZXRhaWxzO1xufSgpO1xuXG4vKiogUHJvdmlkZXMgZGV0YWlscyBvZiBjb250aW51b3VzIGV4dHJhY3RlZCB0YWlsICovXG52YXIgQ29udGludW91c1RhaWxEZXRhaWxzID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgLyoqIFRhaWwgdmFsdWUgYXMgc3RyaW5nICovXG5cbiAgLyoqIFRhaWwgc3RhcnQgcG9zaXRpb24gKi9cblxuICAvKiogU3RhcnQgcG9zaXRpb24gKi9cbiAgZnVuY3Rpb24gQ29udGludW91c1RhaWxEZXRhaWxzKCkge1xuICAgIHZhciB2YWx1ZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogJyc7XG4gICAgdmFyIGZyb20gPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IDA7XG4gICAgdmFyIHN0b3AgPSBhcmd1bWVudHMubGVuZ3RoID4gMiA/IGFyZ3VtZW50c1syXSA6IHVuZGVmaW5lZDtcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDb250aW51b3VzVGFpbERldGFpbHMpO1xuXG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMuZnJvbSA9IGZyb207XG4gICAgdGhpcy5zdG9wID0gc3RvcDtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhDb250aW51b3VzVGFpbERldGFpbHMsIFt7XG4gICAga2V5OiBcInRvU3RyaW5nXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImV4dGVuZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBleHRlbmQodGFpbCkge1xuICAgICAgdGhpcy52YWx1ZSArPSBTdHJpbmcodGFpbCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImFwcGVuZFRvXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFwcGVuZFRvKG1hc2tlZCkge1xuICAgICAgcmV0dXJuIG1hc2tlZC5hcHBlbmQodGhpcy50b1N0cmluZygpLCB7XG4gICAgICAgIHRhaWw6IHRydWVcbiAgICAgIH0pLmFnZ3JlZ2F0ZShtYXNrZWQuX2FwcGVuZFBsYWNlaG9sZGVyKCkpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzaGlmdEJlZm9yZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzaGlmdEJlZm9yZShwb3MpIHtcbiAgICAgIGlmICh0aGlzLmZyb20gPj0gcG9zIHx8ICF0aGlzLnZhbHVlLmxlbmd0aCkgcmV0dXJuICcnO1xuICAgICAgdmFyIHNoaWZ0Q2hhciA9IHRoaXMudmFsdWVbMF07XG4gICAgICB0aGlzLnZhbHVlID0gdGhpcy52YWx1ZS5zbGljZSgxKTtcbiAgICAgIHJldHVybiBzaGlmdENoYXI7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInN0YXRlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB2YWx1ZTogdGhpcy52YWx1ZSxcbiAgICAgICAgZnJvbTogdGhpcy5mcm9tLFxuICAgICAgICBzdG9wOiB0aGlzLnN0b3BcbiAgICAgIH07XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldChzdGF0ZSkge1xuICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBzdGF0ZSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIENvbnRpbnVvdXNUYWlsRGV0YWlscztcbn0oKTtcblxuLyoqIFByb3ZpZGVzIGNvbW1vbiBtYXNraW5nIHN0dWZmICovXG52YXIgTWFza2VkID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgLy8gJFNoYXBlPE1hc2tlZE9wdGlvbnM+OyBUT0RPIGFmdGVyIGZpeCBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svZmxvdy9pc3N1ZXMvNDc3M1xuXG4gIC8qKiBAdHlwZSB7TWFza30gKi9cblxuICAvKiogKi9cbiAgLy8gJEZsb3dGaXhNZSBubyBpZGVhc1xuXG4gIC8qKiBUcmFuc2Zvcm1zIHZhbHVlIGJlZm9yZSBtYXNrIHByb2Nlc3NpbmcgKi9cblxuICAvKiogVmFsaWRhdGVzIGlmIHZhbHVlIGlzIGFjY2VwdGFibGUgKi9cblxuICAvKiogRG9lcyBhZGRpdGlvbmFsIHByb2Nlc3NpbmcgaW4gdGhlIGVuZCBvZiBlZGl0aW5nICovXG5cbiAgLyoqIEVuYWJsZSBjaGFyYWN0ZXJzIG92ZXJ3cml0aW5nICovXG5cbiAgLyoqICovXG4gIGZ1bmN0aW9uIE1hc2tlZChvcHRzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1hc2tlZCk7XG5cbiAgICB0aGlzLl92YWx1ZSA9ICcnO1xuXG4gICAgdGhpcy5fdXBkYXRlKG9wdHMpO1xuXG4gICAgdGhpcy5pc0luaXRpYWxpemVkID0gdHJ1ZTtcbiAgfVxuICAvKiogU2V0cyBhbmQgYXBwbGllcyBuZXcgb3B0aW9ucyAqL1xuXG5cbiAgX2NyZWF0ZUNsYXNzKE1hc2tlZCwgW3tcbiAgICBrZXk6IFwidXBkYXRlT3B0aW9uc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB1cGRhdGVPcHRpb25zKG9wdHMpIHtcbiAgICAgIGlmICghT2JqZWN0LmtleXMob3B0cykubGVuZ3RoKSByZXR1cm47XG4gICAgICB0aGlzLndpdGhWYWx1ZVJlZnJlc2godGhpcy5fdXBkYXRlLmJpbmQodGhpcywgb3B0cykpO1xuICAgIH1cbiAgICAvKipcclxuICAgICAgU2V0cyBuZXcgb3B0aW9uc1xyXG4gICAgICBAcHJvdGVjdGVkXHJcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiX3VwZGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfdXBkYXRlKG9wdHMpIHtcbiAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgb3B0cyk7XG4gICAgfVxuICAgIC8qKiBNYXNrIHN0YXRlICovXG5cbiAgfSwge1xuICAgIGtleTogXCJyZXNldFwiLFxuXG4gICAgLyoqIFJlc2V0cyB2YWx1ZSAqL1xuICAgIHZhbHVlOiBmdW5jdGlvbiByZXNldCgpIHtcbiAgICAgIHRoaXMuX3ZhbHVlID0gJyc7XG4gICAgfVxuICAgIC8qKiAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwicmVzb2x2ZVwiLFxuXG4gICAgLyoqIFJlc29sdmUgbmV3IHZhbHVlICovXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlc29sdmUodmFsdWUpIHtcbiAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgIHRoaXMuYXBwZW5kKHZhbHVlLCB7XG4gICAgICAgIGlucHV0OiB0cnVlXG4gICAgICB9LCAnJyk7XG4gICAgICB0aGlzLmRvQ29tbWl0KCk7XG4gICAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgICB9XG4gICAgLyoqICovXG5cbiAgfSwge1xuICAgIGtleTogXCJuZWFyZXN0SW5wdXRQb3NcIixcblxuICAgIC8qKiBGaW5kcyBuZWFyZXN0IGlucHV0IHBvc2l0aW9uIGluIGRpcmVjdGlvbiAqL1xuICAgIHZhbHVlOiBmdW5jdGlvbiBuZWFyZXN0SW5wdXRQb3MoY3Vyc29yUG9zLCBkaXJlY3Rpb24pIHtcbiAgICAgIHJldHVybiBjdXJzb3JQb3M7XG4gICAgfVxuICAgIC8qKiBFeHRyYWN0cyB2YWx1ZSBpbiByYW5nZSBjb25zaWRlcmluZyBmbGFncyAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZXh0cmFjdElucHV0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGV4dHJhY3RJbnB1dCgpIHtcbiAgICAgIHZhciBmcm9tUG9zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAwO1xuICAgICAgdmFyIHRvUG9zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB0aGlzLnZhbHVlLmxlbmd0aDtcbiAgICAgIHJldHVybiB0aGlzLnZhbHVlLnNsaWNlKGZyb21Qb3MsIHRvUG9zKTtcbiAgICB9XG4gICAgLyoqIEV4dHJhY3RzIHRhaWwgaW4gcmFuZ2UgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImV4dHJhY3RUYWlsXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGV4dHJhY3RUYWlsKCkge1xuICAgICAgdmFyIGZyb21Qb3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IDA7XG4gICAgICB2YXIgdG9Qb3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHRoaXMudmFsdWUubGVuZ3RoO1xuICAgICAgcmV0dXJuIG5ldyBDb250aW51b3VzVGFpbERldGFpbHModGhpcy5leHRyYWN0SW5wdXQoZnJvbVBvcywgdG9Qb3MpLCBmcm9tUG9zKTtcbiAgICB9XG4gICAgLyoqIEFwcGVuZHMgdGFpbCAqL1xuICAgIC8vICRGbG93Rml4TWUgbm8gaWRlYXNcblxuICB9LCB7XG4gICAga2V5OiBcImFwcGVuZFRhaWxcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYXBwZW5kVGFpbCh0YWlsKSB7XG4gICAgICBpZiAoaXNTdHJpbmcodGFpbCkpIHRhaWwgPSBuZXcgQ29udGludW91c1RhaWxEZXRhaWxzKFN0cmluZyh0YWlsKSk7XG4gICAgICByZXR1cm4gdGFpbC5hcHBlbmRUbyh0aGlzKTtcbiAgICB9XG4gICAgLyoqIEFwcGVuZHMgY2hhciAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiX2FwcGVuZENoYXJSYXdcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2FwcGVuZENoYXJSYXcoY2gpIHtcbiAgICAgIHZhciBmbGFncyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgICBjaCA9IHRoaXMuZG9QcmVwYXJlKGNoLCBmbGFncyk7XG4gICAgICBpZiAoIWNoKSByZXR1cm4gbmV3IENoYW5nZURldGFpbHMoKTtcbiAgICAgIHRoaXMuX3ZhbHVlICs9IGNoO1xuICAgICAgcmV0dXJuIG5ldyBDaGFuZ2VEZXRhaWxzKHtcbiAgICAgICAgaW5zZXJ0ZWQ6IGNoLFxuICAgICAgICByYXdJbnNlcnRlZDogY2hcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvKiogQXBwZW5kcyBjaGFyICovXG5cbiAgfSwge1xuICAgIGtleTogXCJfYXBwZW5kQ2hhclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfYXBwZW5kQ2hhcihjaCkge1xuICAgICAgdmFyIGZsYWdzID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICAgIHZhciBjaGVja1RhaWwgPSBhcmd1bWVudHMubGVuZ3RoID4gMiA/IGFyZ3VtZW50c1syXSA6IHVuZGVmaW5lZDtcbiAgICAgIHZhciBjb25zaXN0ZW50U3RhdGUgPSB0aGlzLnN0YXRlO1xuXG4gICAgICB2YXIgZGV0YWlscyA9IHRoaXMuX2FwcGVuZENoYXJSYXcoY2gsIGZsYWdzKTtcblxuICAgICAgaWYgKGRldGFpbHMuaW5zZXJ0ZWQpIHtcbiAgICAgICAgdmFyIGNvbnNpc3RlbnRUYWlsO1xuICAgICAgICB2YXIgYXBwZW5kZWQgPSB0aGlzLmRvVmFsaWRhdGUoZmxhZ3MpICE9PSBmYWxzZTtcblxuICAgICAgICBpZiAoYXBwZW5kZWQgJiYgY2hlY2tUYWlsICE9IG51bGwpIHtcbiAgICAgICAgICAvLyB2YWxpZGF0aW9uIG9rLCBjaGVjayB0YWlsXG4gICAgICAgICAgdmFyIGJlZm9yZVRhaWxTdGF0ZSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgICBpZiAodGhpcy5vdmVyd3JpdGUpIHtcbiAgICAgICAgICAgIGNvbnNpc3RlbnRUYWlsID0gY2hlY2tUYWlsLnN0YXRlO1xuICAgICAgICAgICAgY2hlY2tUYWlsLnNoaWZ0QmVmb3JlKHRoaXMudmFsdWUubGVuZ3RoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgdGFpbERldGFpbHMgPSB0aGlzLmFwcGVuZFRhaWwoY2hlY2tUYWlsKTtcbiAgICAgICAgICBhcHBlbmRlZCA9IHRhaWxEZXRhaWxzLnJhd0luc2VydGVkID09PSBjaGVja1RhaWwudG9TdHJpbmcoKTsgLy8gaWYgb2ssIHJvbGxiYWNrIHN0YXRlIGFmdGVyIHRhaWxcblxuICAgICAgICAgIGlmIChhcHBlbmRlZCAmJiB0YWlsRGV0YWlscy5pbnNlcnRlZCkgdGhpcy5zdGF0ZSA9IGJlZm9yZVRhaWxTdGF0ZTtcbiAgICAgICAgfSAvLyByZXZlcnQgYWxsIGlmIHNvbWV0aGluZyB3ZW50IHdyb25nXG5cblxuICAgICAgICBpZiAoIWFwcGVuZGVkKSB7XG4gICAgICAgICAgZGV0YWlscy5yYXdJbnNlcnRlZCA9IGRldGFpbHMuaW5zZXJ0ZWQgPSAnJztcbiAgICAgICAgICB0aGlzLnN0YXRlID0gY29uc2lzdGVudFN0YXRlO1xuICAgICAgICAgIGlmIChjaGVja1RhaWwgJiYgY29uc2lzdGVudFRhaWwpIGNoZWNrVGFpbC5zdGF0ZSA9IGNvbnNpc3RlbnRUYWlsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkZXRhaWxzO1xuICAgIH1cbiAgICAvKiogQXBwZW5kcyBvcHRpb25hbCBwbGFjZWhvbGRlciBhdCBlbmQgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIl9hcHBlbmRQbGFjZWhvbGRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfYXBwZW5kUGxhY2Vob2xkZXIoKSB7XG4gICAgICByZXR1cm4gbmV3IENoYW5nZURldGFpbHMoKTtcbiAgICB9XG4gICAgLyoqIEFwcGVuZHMgc3ltYm9scyBjb25zaWRlcmluZyBmbGFncyAqL1xuICAgIC8vICRGbG93Rml4TWUgbm8gaWRlYXNcblxuICB9LCB7XG4gICAga2V5OiBcImFwcGVuZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhcHBlbmQoc3RyLCBmbGFncywgdGFpbCkge1xuICAgICAgaWYgKCFpc1N0cmluZyhzdHIpKSB0aHJvdyBuZXcgRXJyb3IoJ3ZhbHVlIHNob3VsZCBiZSBzdHJpbmcnKTtcbiAgICAgIHZhciBkZXRhaWxzID0gbmV3IENoYW5nZURldGFpbHMoKTtcbiAgICAgIHZhciBjaGVja1RhaWwgPSBpc1N0cmluZyh0YWlsKSA/IG5ldyBDb250aW51b3VzVGFpbERldGFpbHMoU3RyaW5nKHRhaWwpKSA6IHRhaWw7XG4gICAgICBpZiAoZmxhZ3MudGFpbCkgZmxhZ3MuX2JlZm9yZVRhaWxTdGF0ZSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgIGZvciAodmFyIGNpID0gMDsgY2kgPCBzdHIubGVuZ3RoOyArK2NpKSB7XG4gICAgICAgIGRldGFpbHMuYWdncmVnYXRlKHRoaXMuX2FwcGVuZENoYXIoc3RyW2NpXSwgZmxhZ3MsIGNoZWNrVGFpbCkpO1xuICAgICAgfSAvLyBhcHBlbmQgdGFpbCBidXQgYWdncmVnYXRlIG9ubHkgdGFpbFNoaWZ0XG5cblxuICAgICAgaWYgKGNoZWNrVGFpbCAhPSBudWxsKSB7XG4gICAgICAgIGRldGFpbHMudGFpbFNoaWZ0ICs9IHRoaXMuYXBwZW5kVGFpbChjaGVja1RhaWwpLnRhaWxTaGlmdDsgLy8gVE9ETyBpdCdzIGEgZ29vZCBpZGVhIHRvIGNsZWFyIHN0YXRlIGFmdGVyIGFwcGVuZGluZyBlbmRzXG4gICAgICAgIC8vIGJ1dCBpdCBjYXVzZXMgYnVncyB3aGVuIG9uZSBhcHBlbmQgY2FsbHMgYW5vdGhlciAod2hlbiBkeW5hbWljIGRpc3BhdGNoIHNldCByYXdJbnB1dFZhbHVlKVxuICAgICAgICAvLyB0aGlzLl9yZXNldEJlZm9yZVRhaWxTdGF0ZSgpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGV0YWlscztcbiAgICB9XG4gICAgLyoqICovXG5cbiAgfSwge1xuICAgIGtleTogXCJyZW1vdmVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgdmFyIGZyb21Qb3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IDA7XG4gICAgICB2YXIgdG9Qb3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHRoaXMudmFsdWUubGVuZ3RoO1xuICAgICAgdGhpcy5fdmFsdWUgPSB0aGlzLnZhbHVlLnNsaWNlKDAsIGZyb21Qb3MpICsgdGhpcy52YWx1ZS5zbGljZSh0b1Bvcyk7XG4gICAgICByZXR1cm4gbmV3IENoYW5nZURldGFpbHMoKTtcbiAgICB9XG4gICAgLyoqIENhbGxzIGZ1bmN0aW9uIGFuZCByZWFwcGxpZXMgY3VycmVudCB2YWx1ZSAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwid2l0aFZhbHVlUmVmcmVzaFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB3aXRoVmFsdWVSZWZyZXNoKGZuKSB7XG4gICAgICBpZiAodGhpcy5fcmVmcmVzaGluZyB8fCAhdGhpcy5pc0luaXRpYWxpemVkKSByZXR1cm4gZm4oKTtcbiAgICAgIHRoaXMuX3JlZnJlc2hpbmcgPSB0cnVlO1xuICAgICAgdmFyIHVubWFza2VkID0gdGhpcy51bm1hc2tlZFZhbHVlO1xuICAgICAgdmFyIHZhbHVlID0gdGhpcy52YWx1ZTtcbiAgICAgIHZhciByZXQgPSBmbigpOyAvLyB0cnkgdG8gdXBkYXRlIHdpdGggcmF3IHZhbHVlIGZpcnN0IHRvIGtlZXAgZml4ZWQgY2hhcnNcblxuICAgICAgaWYgKHRoaXMucmVzb2x2ZSh2YWx1ZSkgIT09IHZhbHVlKSB7XG4gICAgICAgIC8vIG9yIGZhbGxiYWNrIHRvIHVubWFza2VkXG4gICAgICAgIHRoaXMudW5tYXNrZWRWYWx1ZSA9IHVubWFza2VkO1xuICAgICAgfVxuXG4gICAgICBkZWxldGUgdGhpcy5fcmVmcmVzaGluZztcbiAgICAgIHJldHVybiByZXQ7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICBQcmVwYXJlcyBzdHJpbmcgYmVmb3JlIG1hc2sgcHJvY2Vzc2luZ1xyXG4gICAgICBAcHJvdGVjdGVkXHJcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZG9QcmVwYXJlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRvUHJlcGFyZShzdHIpIHtcbiAgICAgIHZhciBmbGFncyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgICByZXR1cm4gdGhpcy5wcmVwYXJlID8gdGhpcy5wcmVwYXJlKHN0ciwgdGhpcywgZmxhZ3MpIDogc3RyO1xuICAgIH1cbiAgICAvKipcclxuICAgICAgVmFsaWRhdGVzIGlmIHZhbHVlIGlzIGFjY2VwdGFibGVcclxuICAgICAgQHByb3RlY3RlZFxyXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImRvVmFsaWRhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZG9WYWxpZGF0ZShmbGFncykge1xuICAgICAgcmV0dXJuICghdGhpcy52YWxpZGF0ZSB8fCB0aGlzLnZhbGlkYXRlKHRoaXMudmFsdWUsIHRoaXMsIGZsYWdzKSkgJiYgKCF0aGlzLnBhcmVudCB8fCB0aGlzLnBhcmVudC5kb1ZhbGlkYXRlKGZsYWdzKSk7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICBEb2VzIGFkZGl0aW9uYWwgcHJvY2Vzc2luZyBpbiB0aGUgZW5kIG9mIGVkaXRpbmdcclxuICAgICAgQHByb3RlY3RlZFxyXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImRvQ29tbWl0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRvQ29tbWl0KCkge1xuICAgICAgaWYgKHRoaXMuY29tbWl0KSB0aGlzLmNvbW1pdCh0aGlzLnZhbHVlLCB0aGlzKTtcbiAgICB9XG4gICAgLyoqICovXG5cbiAgfSwge1xuICAgIGtleTogXCJzcGxpY2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCwgaW5zZXJ0ZWQsIHJlbW92ZURpcmVjdGlvbikge1xuICAgICAgdmFyIHRhaWxQb3MgPSBzdGFydCArIGRlbGV0ZUNvdW50O1xuICAgICAgdmFyIHRhaWwgPSB0aGlzLmV4dHJhY3RUYWlsKHRhaWxQb3MpO1xuICAgICAgdmFyIHN0YXJ0Q2hhbmdlUG9zID0gdGhpcy5uZWFyZXN0SW5wdXRQb3Moc3RhcnQsIHJlbW92ZURpcmVjdGlvbik7XG4gICAgICB2YXIgY2hhbmdlRGV0YWlscyA9IG5ldyBDaGFuZ2VEZXRhaWxzKHtcbiAgICAgICAgdGFpbFNoaWZ0OiBzdGFydENoYW5nZVBvcyAtIHN0YXJ0IC8vIGFkanVzdCB0YWlsU2hpZnQgaWYgc3RhcnQgd2FzIGFsaWduZWRcblxuICAgICAgfSkuYWdncmVnYXRlKHRoaXMucmVtb3ZlKHN0YXJ0Q2hhbmdlUG9zKSkuYWdncmVnYXRlKHRoaXMuYXBwZW5kKGluc2VydGVkLCB7XG4gICAgICAgIGlucHV0OiB0cnVlXG4gICAgICB9LCB0YWlsKSk7XG4gICAgICByZXR1cm4gY2hhbmdlRGV0YWlscztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic3RhdGVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIF92YWx1ZTogdGhpcy52YWx1ZVxuICAgICAgfTtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHN0YXRlKSB7XG4gICAgICB0aGlzLl92YWx1ZSA9IHN0YXRlLl92YWx1ZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidmFsdWVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHZhbHVlKSB7XG4gICAgICB0aGlzLnJlc29sdmUodmFsdWUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ1bm1hc2tlZFZhbHVlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHZhbHVlKSB7XG4gICAgICB0aGlzLnJlc2V0KCk7XG4gICAgICB0aGlzLmFwcGVuZCh2YWx1ZSwge30sICcnKTtcbiAgICAgIHRoaXMuZG9Db21taXQoKTtcbiAgICB9XG4gICAgLyoqICovXG5cbiAgfSwge1xuICAgIGtleTogXCJ0eXBlZFZhbHVlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy51bm1hc2tlZFZhbHVlO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsdWUpIHtcbiAgICAgIHRoaXMudW5tYXNrZWRWYWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgICAvKiogVmFsdWUgdGhhdCBpbmNsdWRlcyByYXcgdXNlciBpbnB1dCAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwicmF3SW5wdXRWYWx1ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuZXh0cmFjdElucHV0KDAsIHRoaXMudmFsdWUubGVuZ3RoLCB7XG4gICAgICAgIHJhdzogdHJ1ZVxuICAgICAgfSk7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2YWx1ZSkge1xuICAgICAgdGhpcy5yZXNldCgpO1xuICAgICAgdGhpcy5hcHBlbmQodmFsdWUsIHtcbiAgICAgICAgcmF3OiB0cnVlXG4gICAgICB9LCAnJyk7XG4gICAgICB0aGlzLmRvQ29tbWl0KCk7XG4gICAgfVxuICAgIC8qKiAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiaXNDb21wbGV0ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIE1hc2tlZDtcbn0oKTtcblxuLyoqIEdldCBNYXNrZWQgY2xhc3MgYnkgbWFzayB0eXBlICovXG5mdW5jdGlvbiBtYXNrZWRDbGFzcyhtYXNrKSB7XG4gIGlmIChtYXNrID09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ21hc2sgcHJvcGVydHkgc2hvdWxkIGJlIGRlZmluZWQnKTtcbiAgfVxuXG4gIGlmIChtYXNrIGluc3RhbmNlb2YgUmVnRXhwKSByZXR1cm4gZy5JTWFzay5NYXNrZWRSZWdFeHA7XG4gIGlmIChpc1N0cmluZyhtYXNrKSkgcmV0dXJuIGcuSU1hc2suTWFza2VkUGF0dGVybjtcbiAgaWYgKG1hc2sgaW5zdGFuY2VvZiBEYXRlIHx8IG1hc2sgPT09IERhdGUpIHJldHVybiBnLklNYXNrLk1hc2tlZERhdGU7XG4gIGlmIChtYXNrIGluc3RhbmNlb2YgTnVtYmVyIHx8IHR5cGVvZiBtYXNrID09PSAnbnVtYmVyJyB8fCBtYXNrID09PSBOdW1iZXIpIHJldHVybiBnLklNYXNrLk1hc2tlZE51bWJlcjtcbiAgaWYgKEFycmF5LmlzQXJyYXkobWFzaykgfHwgbWFzayA9PT0gQXJyYXkpIHJldHVybiBnLklNYXNrLk1hc2tlZER5bmFtaWM7IC8vICRGbG93Rml4TWVcblxuICBpZiAobWFzay5wcm90b3R5cGUgaW5zdGFuY2VvZiBnLklNYXNrLk1hc2tlZCkgcmV0dXJuIG1hc2s7IC8vICRGbG93Rml4TWVcblxuICBpZiAobWFzayBpbnN0YW5jZW9mIEZ1bmN0aW9uKSByZXR1cm4gZy5JTWFzay5NYXNrZWRGdW5jdGlvbjtcbiAgY29uc29sZS53YXJuKCdNYXNrIG5vdCBmb3VuZCBmb3IgbWFzaycsIG1hc2spOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcblxuICByZXR1cm4gZy5JTWFzay5NYXNrZWQ7XG59XG4vKiogQ3JlYXRlcyBuZXcge0BsaW5rIE1hc2tlZH0gZGVwZW5kaW5nIG9uIG1hc2sgdHlwZSAqL1xuXG5mdW5jdGlvbiBjcmVhdGVNYXNrKG9wdHMpIHtcbiAgb3B0cyA9IE9iamVjdC5hc3NpZ24oe30sIG9wdHMpO1xuICB2YXIgbWFzayA9IG9wdHMubWFzaztcbiAgaWYgKG1hc2sgaW5zdGFuY2VvZiBnLklNYXNrLk1hc2tlZCkgcmV0dXJuIG1hc2s7XG4gIHZhciBNYXNrZWRDbGFzcyA9IG1hc2tlZENsYXNzKG1hc2spO1xuICByZXR1cm4gbmV3IE1hc2tlZENsYXNzKG9wdHMpO1xufVxuXG52YXIgREVGQVVMVF9JTlBVVF9ERUZJTklUSU9OUyA9IHtcbiAgJzAnOiAvXFxkLyxcbiAgJ2EnOiAvW1xcdTAwNDEtXFx1MDA1QVxcdTAwNjEtXFx1MDA3QVxcdTAwQUFcXHUwMEI1XFx1MDBCQVxcdTAwQzAtXFx1MDBENlxcdTAwRDgtXFx1MDBGNlxcdTAwRjgtXFx1MDJDMVxcdTAyQzYtXFx1MDJEMVxcdTAyRTAtXFx1MDJFNFxcdTAyRUNcXHUwMkVFXFx1MDM3MC1cXHUwMzc0XFx1MDM3NlxcdTAzNzdcXHUwMzdBLVxcdTAzN0RcXHUwMzg2XFx1MDM4OC1cXHUwMzhBXFx1MDM4Q1xcdTAzOEUtXFx1MDNBMVxcdTAzQTMtXFx1MDNGNVxcdTAzRjctXFx1MDQ4MVxcdTA0OEEtXFx1MDUyN1xcdTA1MzEtXFx1MDU1NlxcdTA1NTlcXHUwNTYxLVxcdTA1ODdcXHUwNUQwLVxcdTA1RUFcXHUwNUYwLVxcdTA1RjJcXHUwNjIwLVxcdTA2NEFcXHUwNjZFXFx1MDY2RlxcdTA2NzEtXFx1MDZEM1xcdTA2RDVcXHUwNkU1XFx1MDZFNlxcdTA2RUVcXHUwNkVGXFx1MDZGQS1cXHUwNkZDXFx1MDZGRlxcdTA3MTBcXHUwNzEyLVxcdTA3MkZcXHUwNzRELVxcdTA3QTVcXHUwN0IxXFx1MDdDQS1cXHUwN0VBXFx1MDdGNFxcdTA3RjVcXHUwN0ZBXFx1MDgwMC1cXHUwODE1XFx1MDgxQVxcdTA4MjRcXHUwODI4XFx1MDg0MC1cXHUwODU4XFx1MDhBMFxcdTA4QTItXFx1MDhBQ1xcdTA5MDQtXFx1MDkzOVxcdTA5M0RcXHUwOTUwXFx1MDk1OC1cXHUwOTYxXFx1MDk3MS1cXHUwOTc3XFx1MDk3OS1cXHUwOTdGXFx1MDk4NS1cXHUwOThDXFx1MDk4RlxcdTA5OTBcXHUwOTkzLVxcdTA5QThcXHUwOUFBLVxcdTA5QjBcXHUwOUIyXFx1MDlCNi1cXHUwOUI5XFx1MDlCRFxcdTA5Q0VcXHUwOURDXFx1MDlERFxcdTA5REYtXFx1MDlFMVxcdTA5RjBcXHUwOUYxXFx1MEEwNS1cXHUwQTBBXFx1MEEwRlxcdTBBMTBcXHUwQTEzLVxcdTBBMjhcXHUwQTJBLVxcdTBBMzBcXHUwQTMyXFx1MEEzM1xcdTBBMzVcXHUwQTM2XFx1MEEzOFxcdTBBMzlcXHUwQTU5LVxcdTBBNUNcXHUwQTVFXFx1MEE3Mi1cXHUwQTc0XFx1MEE4NS1cXHUwQThEXFx1MEE4Ri1cXHUwQTkxXFx1MEE5My1cXHUwQUE4XFx1MEFBQS1cXHUwQUIwXFx1MEFCMlxcdTBBQjNcXHUwQUI1LVxcdTBBQjlcXHUwQUJEXFx1MEFEMFxcdTBBRTBcXHUwQUUxXFx1MEIwNS1cXHUwQjBDXFx1MEIwRlxcdTBCMTBcXHUwQjEzLVxcdTBCMjhcXHUwQjJBLVxcdTBCMzBcXHUwQjMyXFx1MEIzM1xcdTBCMzUtXFx1MEIzOVxcdTBCM0RcXHUwQjVDXFx1MEI1RFxcdTBCNUYtXFx1MEI2MVxcdTBCNzFcXHUwQjgzXFx1MEI4NS1cXHUwQjhBXFx1MEI4RS1cXHUwQjkwXFx1MEI5Mi1cXHUwQjk1XFx1MEI5OVxcdTBCOUFcXHUwQjlDXFx1MEI5RVxcdTBCOUZcXHUwQkEzXFx1MEJBNFxcdTBCQTgtXFx1MEJBQVxcdTBCQUUtXFx1MEJCOVxcdTBCRDBcXHUwQzA1LVxcdTBDMENcXHUwQzBFLVxcdTBDMTBcXHUwQzEyLVxcdTBDMjhcXHUwQzJBLVxcdTBDMzNcXHUwQzM1LVxcdTBDMzlcXHUwQzNEXFx1MEM1OFxcdTBDNTlcXHUwQzYwXFx1MEM2MVxcdTBDODUtXFx1MEM4Q1xcdTBDOEUtXFx1MEM5MFxcdTBDOTItXFx1MENBOFxcdTBDQUEtXFx1MENCM1xcdTBDQjUtXFx1MENCOVxcdTBDQkRcXHUwQ0RFXFx1MENFMFxcdTBDRTFcXHUwQ0YxXFx1MENGMlxcdTBEMDUtXFx1MEQwQ1xcdTBEMEUtXFx1MEQxMFxcdTBEMTItXFx1MEQzQVxcdTBEM0RcXHUwRDRFXFx1MEQ2MFxcdTBENjFcXHUwRDdBLVxcdTBEN0ZcXHUwRDg1LVxcdTBEOTZcXHUwRDlBLVxcdTBEQjFcXHUwREIzLVxcdTBEQkJcXHUwREJEXFx1MERDMC1cXHUwREM2XFx1MEUwMS1cXHUwRTMwXFx1MEUzMlxcdTBFMzNcXHUwRTQwLVxcdTBFNDZcXHUwRTgxXFx1MEU4MlxcdTBFODRcXHUwRTg3XFx1MEU4OFxcdTBFOEFcXHUwRThEXFx1MEU5NC1cXHUwRTk3XFx1MEU5OS1cXHUwRTlGXFx1MEVBMS1cXHUwRUEzXFx1MEVBNVxcdTBFQTdcXHUwRUFBXFx1MEVBQlxcdTBFQUQtXFx1MEVCMFxcdTBFQjJcXHUwRUIzXFx1MEVCRFxcdTBFQzAtXFx1MEVDNFxcdTBFQzZcXHUwRURDLVxcdTBFREZcXHUwRjAwXFx1MEY0MC1cXHUwRjQ3XFx1MEY0OS1cXHUwRjZDXFx1MEY4OC1cXHUwRjhDXFx1MTAwMC1cXHUxMDJBXFx1MTAzRlxcdTEwNTAtXFx1MTA1NVxcdTEwNUEtXFx1MTA1RFxcdTEwNjFcXHUxMDY1XFx1MTA2NlxcdTEwNkUtXFx1MTA3MFxcdTEwNzUtXFx1MTA4MVxcdTEwOEVcXHUxMEEwLVxcdTEwQzVcXHUxMEM3XFx1MTBDRFxcdTEwRDAtXFx1MTBGQVxcdTEwRkMtXFx1MTI0OFxcdTEyNEEtXFx1MTI0RFxcdTEyNTAtXFx1MTI1NlxcdTEyNThcXHUxMjVBLVxcdTEyNURcXHUxMjYwLVxcdTEyODhcXHUxMjhBLVxcdTEyOERcXHUxMjkwLVxcdTEyQjBcXHUxMkIyLVxcdTEyQjVcXHUxMkI4LVxcdTEyQkVcXHUxMkMwXFx1MTJDMi1cXHUxMkM1XFx1MTJDOC1cXHUxMkQ2XFx1MTJEOC1cXHUxMzEwXFx1MTMxMi1cXHUxMzE1XFx1MTMxOC1cXHUxMzVBXFx1MTM4MC1cXHUxMzhGXFx1MTNBMC1cXHUxM0Y0XFx1MTQwMS1cXHUxNjZDXFx1MTY2Ri1cXHUxNjdGXFx1MTY4MS1cXHUxNjlBXFx1MTZBMC1cXHUxNkVBXFx1MTcwMC1cXHUxNzBDXFx1MTcwRS1cXHUxNzExXFx1MTcyMC1cXHUxNzMxXFx1MTc0MC1cXHUxNzUxXFx1MTc2MC1cXHUxNzZDXFx1MTc2RS1cXHUxNzcwXFx1MTc4MC1cXHUxN0IzXFx1MTdEN1xcdTE3RENcXHUxODIwLVxcdTE4NzdcXHUxODgwLVxcdTE4QThcXHUxOEFBXFx1MThCMC1cXHUxOEY1XFx1MTkwMC1cXHUxOTFDXFx1MTk1MC1cXHUxOTZEXFx1MTk3MC1cXHUxOTc0XFx1MTk4MC1cXHUxOUFCXFx1MTlDMS1cXHUxOUM3XFx1MUEwMC1cXHUxQTE2XFx1MUEyMC1cXHUxQTU0XFx1MUFBN1xcdTFCMDUtXFx1MUIzM1xcdTFCNDUtXFx1MUI0QlxcdTFCODMtXFx1MUJBMFxcdTFCQUVcXHUxQkFGXFx1MUJCQS1cXHUxQkU1XFx1MUMwMC1cXHUxQzIzXFx1MUM0RC1cXHUxQzRGXFx1MUM1QS1cXHUxQzdEXFx1MUNFOS1cXHUxQ0VDXFx1MUNFRS1cXHUxQ0YxXFx1MUNGNVxcdTFDRjZcXHUxRDAwLVxcdTFEQkZcXHUxRTAwLVxcdTFGMTVcXHUxRjE4LVxcdTFGMURcXHUxRjIwLVxcdTFGNDVcXHUxRjQ4LVxcdTFGNERcXHUxRjUwLVxcdTFGNTdcXHUxRjU5XFx1MUY1QlxcdTFGNURcXHUxRjVGLVxcdTFGN0RcXHUxRjgwLVxcdTFGQjRcXHUxRkI2LVxcdTFGQkNcXHUxRkJFXFx1MUZDMi1cXHUxRkM0XFx1MUZDNi1cXHUxRkNDXFx1MUZEMC1cXHUxRkQzXFx1MUZENi1cXHUxRkRCXFx1MUZFMC1cXHUxRkVDXFx1MUZGMi1cXHUxRkY0XFx1MUZGNi1cXHUxRkZDXFx1MjA3MVxcdTIwN0ZcXHUyMDkwLVxcdTIwOUNcXHUyMTAyXFx1MjEwN1xcdTIxMEEtXFx1MjExM1xcdTIxMTVcXHUyMTE5LVxcdTIxMURcXHUyMTI0XFx1MjEyNlxcdTIxMjhcXHUyMTJBLVxcdTIxMkRcXHUyMTJGLVxcdTIxMzlcXHUyMTNDLVxcdTIxM0ZcXHUyMTQ1LVxcdTIxNDlcXHUyMTRFXFx1MjE4M1xcdTIxODRcXHUyQzAwLVxcdTJDMkVcXHUyQzMwLVxcdTJDNUVcXHUyQzYwLVxcdTJDRTRcXHUyQ0VCLVxcdTJDRUVcXHUyQ0YyXFx1MkNGM1xcdTJEMDAtXFx1MkQyNVxcdTJEMjdcXHUyRDJEXFx1MkQzMC1cXHUyRDY3XFx1MkQ2RlxcdTJEODAtXFx1MkQ5NlxcdTJEQTAtXFx1MkRBNlxcdTJEQTgtXFx1MkRBRVxcdTJEQjAtXFx1MkRCNlxcdTJEQjgtXFx1MkRCRVxcdTJEQzAtXFx1MkRDNlxcdTJEQzgtXFx1MkRDRVxcdTJERDAtXFx1MkRENlxcdTJERDgtXFx1MkRERVxcdTJFMkZcXHUzMDA1XFx1MzAwNlxcdTMwMzEtXFx1MzAzNVxcdTMwM0JcXHUzMDNDXFx1MzA0MS1cXHUzMDk2XFx1MzA5RC1cXHUzMDlGXFx1MzBBMS1cXHUzMEZBXFx1MzBGQy1cXHUzMEZGXFx1MzEwNS1cXHUzMTJEXFx1MzEzMS1cXHUzMThFXFx1MzFBMC1cXHUzMUJBXFx1MzFGMC1cXHUzMUZGXFx1MzQwMC1cXHU0REI1XFx1NEUwMC1cXHU5RkNDXFx1QTAwMC1cXHVBNDhDXFx1QTREMC1cXHVBNEZEXFx1QTUwMC1cXHVBNjBDXFx1QTYxMC1cXHVBNjFGXFx1QTYyQVxcdUE2MkJcXHVBNjQwLVxcdUE2NkVcXHVBNjdGLVxcdUE2OTdcXHVBNkEwLVxcdUE2RTVcXHVBNzE3LVxcdUE3MUZcXHVBNzIyLVxcdUE3ODhcXHVBNzhCLVxcdUE3OEVcXHVBNzkwLVxcdUE3OTNcXHVBN0EwLVxcdUE3QUFcXHVBN0Y4LVxcdUE4MDFcXHVBODAzLVxcdUE4MDVcXHVBODA3LVxcdUE4MEFcXHVBODBDLVxcdUE4MjJcXHVBODQwLVxcdUE4NzNcXHVBODgyLVxcdUE4QjNcXHVBOEYyLVxcdUE4RjdcXHVBOEZCXFx1QTkwQS1cXHVBOTI1XFx1QTkzMC1cXHVBOTQ2XFx1QTk2MC1cXHVBOTdDXFx1QTk4NC1cXHVBOUIyXFx1QTlDRlxcdUFBMDAtXFx1QUEyOFxcdUFBNDAtXFx1QUE0MlxcdUFBNDQtXFx1QUE0QlxcdUFBNjAtXFx1QUE3NlxcdUFBN0FcXHVBQTgwLVxcdUFBQUZcXHVBQUIxXFx1QUFCNVxcdUFBQjZcXHVBQUI5LVxcdUFBQkRcXHVBQUMwXFx1QUFDMlxcdUFBREItXFx1QUFERFxcdUFBRTAtXFx1QUFFQVxcdUFBRjItXFx1QUFGNFxcdUFCMDEtXFx1QUIwNlxcdUFCMDktXFx1QUIwRVxcdUFCMTEtXFx1QUIxNlxcdUFCMjAtXFx1QUIyNlxcdUFCMjgtXFx1QUIyRVxcdUFCQzAtXFx1QUJFMlxcdUFDMDAtXFx1RDdBM1xcdUQ3QjAtXFx1RDdDNlxcdUQ3Q0ItXFx1RDdGQlxcdUY5MDAtXFx1RkE2RFxcdUZBNzAtXFx1RkFEOVxcdUZCMDAtXFx1RkIwNlxcdUZCMTMtXFx1RkIxN1xcdUZCMURcXHVGQjFGLVxcdUZCMjhcXHVGQjJBLVxcdUZCMzZcXHVGQjM4LVxcdUZCM0NcXHVGQjNFXFx1RkI0MFxcdUZCNDFcXHVGQjQzXFx1RkI0NFxcdUZCNDYtXFx1RkJCMVxcdUZCRDMtXFx1RkQzRFxcdUZENTAtXFx1RkQ4RlxcdUZEOTItXFx1RkRDN1xcdUZERjAtXFx1RkRGQlxcdUZFNzAtXFx1RkU3NFxcdUZFNzYtXFx1RkVGQ1xcdUZGMjEtXFx1RkYzQVxcdUZGNDEtXFx1RkY1QVxcdUZGNjYtXFx1RkZCRVxcdUZGQzItXFx1RkZDN1xcdUZGQ0EtXFx1RkZDRlxcdUZGRDItXFx1RkZEN1xcdUZGREEtXFx1RkZEQ10vLFxuICAvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yMjA3NTA3MFxuICAnKic6IC8uL1xufTtcbi8qKiAqL1xuXG52YXIgUGF0dGVybklucHV0RGVmaW5pdGlvbiA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIC8qKiAqL1xuXG4gIC8qKiAqL1xuXG4gIC8qKiAqL1xuXG4gIC8qKiAqL1xuXG4gIC8qKiAqL1xuXG4gIC8qKiAqL1xuICBmdW5jdGlvbiBQYXR0ZXJuSW5wdXREZWZpbml0aW9uKG9wdHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUGF0dGVybklucHV0RGVmaW5pdGlvbik7XG5cbiAgICB2YXIgbWFzayA9IG9wdHMubWFzayxcbiAgICAgICAgYmxvY2tPcHRzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9wdHMsIFtcIm1hc2tcIl0pO1xuXG4gICAgdGhpcy5tYXNrZWQgPSBjcmVhdGVNYXNrKHtcbiAgICAgIG1hc2s6IG1hc2tcbiAgICB9KTtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGJsb2NrT3B0cyk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoUGF0dGVybklucHV0RGVmaW5pdGlvbiwgW3tcbiAgICBrZXk6IFwicmVzZXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgICB0aGlzLl9pc0ZpbGxlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5tYXNrZWQucmVzZXQoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVtb3ZlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHZhciBmcm9tUG9zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAwO1xuICAgICAgdmFyIHRvUG9zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB0aGlzLnZhbHVlLmxlbmd0aDtcblxuICAgICAgaWYgKGZyb21Qb3MgPT09IDAgJiYgdG9Qb3MgPj0gMSkge1xuICAgICAgICB0aGlzLl9pc0ZpbGxlZCA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gdGhpcy5tYXNrZWQucmVtb3ZlKGZyb21Qb3MsIHRvUG9zKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5ldyBDaGFuZ2VEZXRhaWxzKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIl9hcHBlbmRDaGFyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9hcHBlbmRDaGFyKHN0cikge1xuICAgICAgdmFyIGZsYWdzID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICAgIGlmICh0aGlzLl9pc0ZpbGxlZCkgcmV0dXJuIG5ldyBDaGFuZ2VEZXRhaWxzKCk7XG4gICAgICB2YXIgc3RhdGUgPSB0aGlzLm1hc2tlZC5zdGF0ZTsgLy8gc2ltdWxhdGUgaW5wdXRcblxuICAgICAgdmFyIGRldGFpbHMgPSB0aGlzLm1hc2tlZC5fYXBwZW5kQ2hhcihzdHIsIGZsYWdzKTtcblxuICAgICAgaWYgKGRldGFpbHMuaW5zZXJ0ZWQgJiYgdGhpcy5kb1ZhbGlkYXRlKGZsYWdzKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgZGV0YWlscy5pbnNlcnRlZCA9IGRldGFpbHMucmF3SW5zZXJ0ZWQgPSAnJztcbiAgICAgICAgdGhpcy5tYXNrZWQuc3RhdGUgPSBzdGF0ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFkZXRhaWxzLmluc2VydGVkICYmICF0aGlzLmlzT3B0aW9uYWwgJiYgIXRoaXMubGF6eSAmJiAhZmxhZ3MuaW5wdXQpIHtcbiAgICAgICAgZGV0YWlscy5pbnNlcnRlZCA9IHRoaXMucGxhY2Vob2xkZXJDaGFyO1xuICAgICAgfVxuXG4gICAgICBkZXRhaWxzLnNraXAgPSAhZGV0YWlscy5pbnNlcnRlZCAmJiAhdGhpcy5pc09wdGlvbmFsO1xuICAgICAgdGhpcy5faXNGaWxsZWQgPSBCb29sZWFuKGRldGFpbHMuaW5zZXJ0ZWQpO1xuICAgICAgcmV0dXJuIGRldGFpbHM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImFwcGVuZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhcHBlbmQoKSB7XG4gICAgICB2YXIgX3RoaXMkbWFza2VkO1xuXG4gICAgICByZXR1cm4gKF90aGlzJG1hc2tlZCA9IHRoaXMubWFza2VkKS5hcHBlbmQuYXBwbHkoX3RoaXMkbWFza2VkLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJfYXBwZW5kUGxhY2Vob2xkZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2FwcGVuZFBsYWNlaG9sZGVyKCkge1xuICAgICAgdmFyIGRldGFpbHMgPSBuZXcgQ2hhbmdlRGV0YWlscygpO1xuICAgICAgaWYgKHRoaXMuX2lzRmlsbGVkIHx8IHRoaXMuaXNPcHRpb25hbCkgcmV0dXJuIGRldGFpbHM7XG4gICAgICB0aGlzLl9pc0ZpbGxlZCA9IHRydWU7XG4gICAgICBkZXRhaWxzLmluc2VydGVkID0gdGhpcy5wbGFjZWhvbGRlckNoYXI7XG4gICAgICByZXR1cm4gZGV0YWlscztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZXh0cmFjdFRhaWxcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZXh0cmFjdFRhaWwoKSB7XG4gICAgICB2YXIgX3RoaXMkbWFza2VkMjtcblxuICAgICAgcmV0dXJuIChfdGhpcyRtYXNrZWQyID0gdGhpcy5tYXNrZWQpLmV4dHJhY3RUYWlsLmFwcGx5KF90aGlzJG1hc2tlZDIsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImFwcGVuZFRhaWxcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYXBwZW5kVGFpbCgpIHtcbiAgICAgIHZhciBfdGhpcyRtYXNrZWQzO1xuXG4gICAgICByZXR1cm4gKF90aGlzJG1hc2tlZDMgPSB0aGlzLm1hc2tlZCkuYXBwZW5kVGFpbC5hcHBseShfdGhpcyRtYXNrZWQzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJleHRyYWN0SW5wdXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZXh0cmFjdElucHV0KCkge1xuICAgICAgdmFyIGZyb21Qb3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IDA7XG4gICAgICB2YXIgdG9Qb3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHRoaXMudmFsdWUubGVuZ3RoO1xuICAgICAgdmFyIGZsYWdzID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgPyBhcmd1bWVudHNbMl0gOiB1bmRlZmluZWQ7XG4gICAgICByZXR1cm4gdGhpcy5tYXNrZWQuZXh0cmFjdElucHV0KGZyb21Qb3MsIHRvUG9zLCBmbGFncyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIm5lYXJlc3RJbnB1dFBvc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBuZWFyZXN0SW5wdXRQb3MoY3Vyc29yUG9zKSB7XG4gICAgICB2YXIgZGlyZWN0aW9uID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBESVJFQ1RJT04uTk9ORTtcbiAgICAgIHZhciBtaW5Qb3MgPSAwO1xuICAgICAgdmFyIG1heFBvcyA9IHRoaXMudmFsdWUubGVuZ3RoO1xuICAgICAgdmFyIGJvdW5kUG9zID0gTWF0aC5taW4oTWF0aC5tYXgoY3Vyc29yUG9zLCBtaW5Qb3MpLCBtYXhQb3MpO1xuXG4gICAgICBzd2l0Y2ggKGRpcmVjdGlvbikge1xuICAgICAgICBjYXNlIERJUkVDVElPTi5MRUZUOlxuICAgICAgICBjYXNlIERJUkVDVElPTi5GT1JDRV9MRUZUOlxuICAgICAgICAgIHJldHVybiB0aGlzLmlzQ29tcGxldGUgPyBib3VuZFBvcyA6IG1pblBvcztcblxuICAgICAgICBjYXNlIERJUkVDVElPTi5SSUdIVDpcbiAgICAgICAgY2FzZSBESVJFQ1RJT04uRk9SQ0VfUklHSFQ6XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaXNDb21wbGV0ZSA/IGJvdW5kUG9zIDogbWF4UG9zO1xuXG4gICAgICAgIGNhc2UgRElSRUNUSU9OLk5PTkU6XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIGJvdW5kUG9zO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJkb1ZhbGlkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRvVmFsaWRhdGUoKSB7XG4gICAgICB2YXIgX3RoaXMkbWFza2VkNCwgX3RoaXMkcGFyZW50O1xuXG4gICAgICByZXR1cm4gKF90aGlzJG1hc2tlZDQgPSB0aGlzLm1hc2tlZCkuZG9WYWxpZGF0ZS5hcHBseShfdGhpcyRtYXNrZWQ0LCBhcmd1bWVudHMpICYmICghdGhpcy5wYXJlbnQgfHwgKF90aGlzJHBhcmVudCA9IHRoaXMucGFyZW50KS5kb1ZhbGlkYXRlLmFwcGx5KF90aGlzJHBhcmVudCwgYXJndW1lbnRzKSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImRvQ29tbWl0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRvQ29tbWl0KCkge1xuICAgICAgdGhpcy5tYXNrZWQuZG9Db21taXQoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidmFsdWVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLm1hc2tlZC52YWx1ZSB8fCAodGhpcy5faXNGaWxsZWQgJiYgIXRoaXMuaXNPcHRpb25hbCA/IHRoaXMucGxhY2Vob2xkZXJDaGFyIDogJycpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ1bm1hc2tlZFZhbHVlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5tYXNrZWQudW5tYXNrZWRWYWx1ZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaXNDb21wbGV0ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIEJvb2xlYW4odGhpcy5tYXNrZWQudmFsdWUpIHx8IHRoaXMuaXNPcHRpb25hbDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic3RhdGVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG1hc2tlZDogdGhpcy5tYXNrZWQuc3RhdGUsXG4gICAgICAgIF9pc0ZpbGxlZDogdGhpcy5faXNGaWxsZWRcbiAgICAgIH07XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldChzdGF0ZSkge1xuICAgICAgdGhpcy5tYXNrZWQuc3RhdGUgPSBzdGF0ZS5tYXNrZWQ7XG4gICAgICB0aGlzLl9pc0ZpbGxlZCA9IHN0YXRlLl9pc0ZpbGxlZDtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gUGF0dGVybklucHV0RGVmaW5pdGlvbjtcbn0oKTtcblxudmFyIFBhdHRlcm5GaXhlZERlZmluaXRpb24gPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICAvKiogKi9cblxuICAvKiogKi9cblxuICAvKiogKi9cblxuICAvKiogKi9cbiAgZnVuY3Rpb24gUGF0dGVybkZpeGVkRGVmaW5pdGlvbihvcHRzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFBhdHRlcm5GaXhlZERlZmluaXRpb24pO1xuXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBvcHRzKTtcbiAgICB0aGlzLl92YWx1ZSA9ICcnO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFBhdHRlcm5GaXhlZERlZmluaXRpb24sIFt7XG4gICAga2V5OiBcInJlc2V0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlc2V0KCkge1xuICAgICAgdGhpcy5faXNSYXdJbnB1dCA9IGZhbHNlO1xuICAgICAgdGhpcy5fdmFsdWUgPSAnJztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVtb3ZlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHZhciBmcm9tUG9zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAwO1xuICAgICAgdmFyIHRvUG9zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB0aGlzLl92YWx1ZS5sZW5ndGg7XG4gICAgICB0aGlzLl92YWx1ZSA9IHRoaXMuX3ZhbHVlLnNsaWNlKDAsIGZyb21Qb3MpICsgdGhpcy5fdmFsdWUuc2xpY2UodG9Qb3MpO1xuICAgICAgaWYgKCF0aGlzLl92YWx1ZSkgdGhpcy5faXNSYXdJbnB1dCA9IGZhbHNlO1xuICAgICAgcmV0dXJuIG5ldyBDaGFuZ2VEZXRhaWxzKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIm5lYXJlc3RJbnB1dFBvc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBuZWFyZXN0SW5wdXRQb3MoY3Vyc29yUG9zKSB7XG4gICAgICB2YXIgZGlyZWN0aW9uID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBESVJFQ1RJT04uTk9ORTtcbiAgICAgIHZhciBtaW5Qb3MgPSAwO1xuICAgICAgdmFyIG1heFBvcyA9IHRoaXMuX3ZhbHVlLmxlbmd0aDtcblxuICAgICAgc3dpdGNoIChkaXJlY3Rpb24pIHtcbiAgICAgICAgY2FzZSBESVJFQ1RJT04uTEVGVDpcbiAgICAgICAgY2FzZSBESVJFQ1RJT04uRk9SQ0VfTEVGVDpcbiAgICAgICAgICByZXR1cm4gbWluUG9zO1xuXG4gICAgICAgIGNhc2UgRElSRUNUSU9OLk5PTkU6XG4gICAgICAgIGNhc2UgRElSRUNUSU9OLlJJR0hUOlxuICAgICAgICBjYXNlIERJUkVDVElPTi5GT1JDRV9SSUdIVDpcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gbWF4UG9zO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJleHRyYWN0SW5wdXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZXh0cmFjdElucHV0KCkge1xuICAgICAgdmFyIGZyb21Qb3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IDA7XG4gICAgICB2YXIgdG9Qb3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHRoaXMuX3ZhbHVlLmxlbmd0aDtcbiAgICAgIHZhciBmbGFncyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG4gICAgICByZXR1cm4gZmxhZ3MucmF3ICYmIHRoaXMuX2lzUmF3SW5wdXQgJiYgdGhpcy5fdmFsdWUuc2xpY2UoZnJvbVBvcywgdG9Qb3MpIHx8ICcnO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJfYXBwZW5kQ2hhclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfYXBwZW5kQ2hhcihzdHIpIHtcbiAgICAgIHZhciBmbGFncyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgICB2YXIgZGV0YWlscyA9IG5ldyBDaGFuZ2VEZXRhaWxzKCk7XG4gICAgICBpZiAodGhpcy5fdmFsdWUpIHJldHVybiBkZXRhaWxzO1xuICAgICAgdmFyIGFwcGVuZGVkID0gdGhpcy5jaGFyID09PSBzdHJbMF07XG4gICAgICB2YXIgaXNSZXNvbHZlZCA9IGFwcGVuZGVkICYmICh0aGlzLmlzVW5tYXNraW5nIHx8IGZsYWdzLmlucHV0IHx8IGZsYWdzLnJhdykgJiYgIWZsYWdzLnRhaWw7XG4gICAgICBpZiAoaXNSZXNvbHZlZCkgZGV0YWlscy5yYXdJbnNlcnRlZCA9IHRoaXMuY2hhcjtcbiAgICAgIHRoaXMuX3ZhbHVlID0gZGV0YWlscy5pbnNlcnRlZCA9IHRoaXMuY2hhcjtcbiAgICAgIHRoaXMuX2lzUmF3SW5wdXQgPSBpc1Jlc29sdmVkICYmIChmbGFncy5yYXcgfHwgZmxhZ3MuaW5wdXQpO1xuICAgICAgcmV0dXJuIGRldGFpbHM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIl9hcHBlbmRQbGFjZWhvbGRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfYXBwZW5kUGxhY2Vob2xkZXIoKSB7XG4gICAgICB2YXIgZGV0YWlscyA9IG5ldyBDaGFuZ2VEZXRhaWxzKCk7XG4gICAgICBpZiAodGhpcy5fdmFsdWUpIHJldHVybiBkZXRhaWxzO1xuICAgICAgdGhpcy5fdmFsdWUgPSBkZXRhaWxzLmluc2VydGVkID0gdGhpcy5jaGFyO1xuICAgICAgcmV0dXJuIGRldGFpbHM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImV4dHJhY3RUYWlsXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGV4dHJhY3RUYWlsKCkge1xuICAgICAgdmFyIHRvUG9zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB0aGlzLnZhbHVlLmxlbmd0aDtcbiAgICAgIHJldHVybiBuZXcgQ29udGludW91c1RhaWxEZXRhaWxzKCcnKTtcbiAgICB9IC8vICRGbG93Rml4TWUgbm8gaWRlYXNcblxuICB9LCB7XG4gICAga2V5OiBcImFwcGVuZFRhaWxcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYXBwZW5kVGFpbCh0YWlsKSB7XG4gICAgICBpZiAoaXNTdHJpbmcodGFpbCkpIHRhaWwgPSBuZXcgQ29udGludW91c1RhaWxEZXRhaWxzKFN0cmluZyh0YWlsKSk7XG4gICAgICByZXR1cm4gdGFpbC5hcHBlbmRUbyh0aGlzKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiYXBwZW5kXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFwcGVuZChzdHIsIGZsYWdzLCB0YWlsKSB7XG4gICAgICB2YXIgZGV0YWlscyA9IHRoaXMuX2FwcGVuZENoYXIoc3RyLCBmbGFncyk7XG5cbiAgICAgIGlmICh0YWlsICE9IG51bGwpIHtcbiAgICAgICAgZGV0YWlscy50YWlsU2hpZnQgKz0gdGhpcy5hcHBlbmRUYWlsKHRhaWwpLnRhaWxTaGlmdDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRldGFpbHM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImRvQ29tbWl0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRvQ29tbWl0KCkge31cbiAgfSwge1xuICAgIGtleTogXCJ2YWx1ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ1bm1hc2tlZFZhbHVlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pc1VubWFza2luZyA/IHRoaXMudmFsdWUgOiAnJztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaXNDb21wbGV0ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInN0YXRlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBfdmFsdWU6IHRoaXMuX3ZhbHVlLFxuICAgICAgICBfaXNSYXdJbnB1dDogdGhpcy5faXNSYXdJbnB1dFxuICAgICAgfTtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHN0YXRlKSB7XG4gICAgICBPYmplY3QuYXNzaWduKHRoaXMsIHN0YXRlKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gUGF0dGVybkZpeGVkRGVmaW5pdGlvbjtcbn0oKTtcblxudmFyIENodW5rc1RhaWxEZXRhaWxzID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgLyoqICovXG4gIGZ1bmN0aW9uIENodW5rc1RhaWxEZXRhaWxzKCkge1xuICAgIHZhciBjaHVua3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IFtdO1xuICAgIHZhciBmcm9tID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAwO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENodW5rc1RhaWxEZXRhaWxzKTtcblxuICAgIHRoaXMuY2h1bmtzID0gY2h1bmtzO1xuICAgIHRoaXMuZnJvbSA9IGZyb207XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoQ2h1bmtzVGFpbERldGFpbHMsIFt7XG4gICAga2V5OiBcInRvU3RyaW5nXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgICAgcmV0dXJuIHRoaXMuY2h1bmtzLm1hcChTdHJpbmcpLmpvaW4oJycpO1xuICAgIH0gLy8gJEZsb3dGaXhNZSBubyBpZGVhc1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZXh0ZW5kXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGV4dGVuZCh0YWlsQ2h1bmspIHtcbiAgICAgIGlmICghU3RyaW5nKHRhaWxDaHVuaykpIHJldHVybjtcbiAgICAgIGlmIChpc1N0cmluZyh0YWlsQ2h1bmspKSB0YWlsQ2h1bmsgPSBuZXcgQ29udGludW91c1RhaWxEZXRhaWxzKFN0cmluZyh0YWlsQ2h1bmspKTtcbiAgICAgIHZhciBsYXN0Q2h1bmsgPSB0aGlzLmNodW5rc1t0aGlzLmNodW5rcy5sZW5ndGggLSAxXTtcbiAgICAgIHZhciBleHRlbmRMYXN0ID0gbGFzdENodW5rICYmICggLy8gaWYgc3RvcHMgYXJlIHNhbWUgb3IgdGFpbCBoYXMgbm8gc3RvcFxuICAgICAgbGFzdENodW5rLnN0b3AgPT09IHRhaWxDaHVuay5zdG9wIHx8IHRhaWxDaHVuay5zdG9wID09IG51bGwpICYmIC8vIGlmIHRhaWwgY2h1bmsgZ29lcyBqdXN0IGFmdGVyIGxhc3QgY2h1bmtcbiAgICAgIHRhaWxDaHVuay5mcm9tID09PSBsYXN0Q2h1bmsuZnJvbSArIGxhc3RDaHVuay50b1N0cmluZygpLmxlbmd0aDtcblxuICAgICAgaWYgKHRhaWxDaHVuayBpbnN0YW5jZW9mIENvbnRpbnVvdXNUYWlsRGV0YWlscykge1xuICAgICAgICAvLyBjaGVjayB0aGUgYWJpbGl0eSB0byBleHRlbmQgcHJldmlvdXMgY2h1bmtcbiAgICAgICAgaWYgKGV4dGVuZExhc3QpIHtcbiAgICAgICAgICAvLyBleHRlbmQgcHJldmlvdXMgY2h1bmtcbiAgICAgICAgICBsYXN0Q2h1bmsuZXh0ZW5kKHRhaWxDaHVuay50b1N0cmluZygpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBhcHBlbmQgbmV3IGNodW5rXG4gICAgICAgICAgdGhpcy5jaHVua3MucHVzaCh0YWlsQ2h1bmspO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHRhaWxDaHVuayBpbnN0YW5jZW9mIENodW5rc1RhaWxEZXRhaWxzKSB7XG4gICAgICAgIGlmICh0YWlsQ2h1bmsuc3RvcCA9PSBudWxsKSB7XG4gICAgICAgICAgLy8gdW53cmFwIGZsb2F0aW5nIGNodW5rcyB0byBwYXJlbnQsIGtlZXBpbmcgYGZyb21gIHBvc1xuICAgICAgICAgIHZhciBmaXJzdFRhaWxDaHVuaztcblxuICAgICAgICAgIHdoaWxlICh0YWlsQ2h1bmsuY2h1bmtzLmxlbmd0aCAmJiB0YWlsQ2h1bmsuY2h1bmtzWzBdLnN0b3AgPT0gbnVsbCkge1xuICAgICAgICAgICAgZmlyc3RUYWlsQ2h1bmsgPSB0YWlsQ2h1bmsuY2h1bmtzLnNoaWZ0KCk7XG4gICAgICAgICAgICBmaXJzdFRhaWxDaHVuay5mcm9tICs9IHRhaWxDaHVuay5mcm9tO1xuICAgICAgICAgICAgdGhpcy5leHRlbmQoZmlyc3RUYWlsQ2h1bmspO1xuICAgICAgICAgIH1cbiAgICAgICAgfSAvLyBpZiB0YWlsIGNodW5rIHN0aWxsIGhhcyB2YWx1ZVxuXG5cbiAgICAgICAgaWYgKHRhaWxDaHVuay50b1N0cmluZygpKSB7XG4gICAgICAgICAgLy8gaWYgY2h1bmtzIGNvbnRhaW5zIHN0b3BzLCB0aGVuIHBvcHVwIHN0b3AgdG8gY29udGFpbmVyXG4gICAgICAgICAgdGFpbENodW5rLnN0b3AgPSB0YWlsQ2h1bmsuYmxvY2tJbmRleDtcbiAgICAgICAgICB0aGlzLmNodW5rcy5wdXNoKHRhaWxDaHVuayk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiYXBwZW5kVG9cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYXBwZW5kVG8obWFza2VkKSB7XG4gICAgICBpZiAoIShtYXNrZWQgaW5zdGFuY2VvZiBnLklNYXNrLk1hc2tlZFBhdHRlcm4pKSB7XG4gICAgICAgIHZhciB0YWlsID0gbmV3IENvbnRpbnVvdXNUYWlsRGV0YWlscyh0aGlzLnRvU3RyaW5nKCkpO1xuICAgICAgICByZXR1cm4gdGFpbC5hcHBlbmRUbyhtYXNrZWQpO1xuICAgICAgfVxuXG4gICAgICB2YXIgZGV0YWlscyA9IG5ldyBDaGFuZ2VEZXRhaWxzKCk7XG5cbiAgICAgIGZvciAodmFyIGNpID0gMDsgY2kgPCB0aGlzLmNodW5rcy5sZW5ndGggJiYgIWRldGFpbHMuc2tpcDsgKytjaSkge1xuICAgICAgICB2YXIgY2h1bmsgPSB0aGlzLmNodW5rc1tjaV07XG5cbiAgICAgICAgdmFyIGxhc3RCbG9ja0l0ZXIgPSBtYXNrZWQuX21hcFBvc1RvQmxvY2sobWFza2VkLnZhbHVlLmxlbmd0aCk7XG5cbiAgICAgICAgdmFyIHN0b3AgPSBjaHVuay5zdG9wO1xuICAgICAgICB2YXIgY2h1bmtCbG9jayA9IHZvaWQgMDtcblxuICAgICAgICBpZiAoc3RvcCAmJiAoIC8vIGlmIGJsb2NrIG5vdCBmb3VuZCBvciBzdG9wIGlzIGJlaGluZCBsYXN0QmxvY2tcbiAgICAgICAgIWxhc3RCbG9ja0l0ZXIgfHwgbGFzdEJsb2NrSXRlci5pbmRleCA8PSBzdG9wKSkge1xuICAgICAgICAgIGlmIChjaHVuayBpbnN0YW5jZW9mIENodW5rc1RhaWxEZXRhaWxzIHx8IC8vIGZvciBjb250aW51b3VzIGJsb2NrIGFsc28gY2hlY2sgaWYgc3RvcCBpcyBleGlzdFxuICAgICAgICAgIG1hc2tlZC5fc3RvcHMuaW5kZXhPZihzdG9wKSA+PSAwKSB7XG4gICAgICAgICAgICBkZXRhaWxzLmFnZ3JlZ2F0ZShtYXNrZWQuX2FwcGVuZFBsYWNlaG9sZGVyKHN0b3ApKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjaHVua0Jsb2NrID0gY2h1bmsgaW5zdGFuY2VvZiBDaHVua3NUYWlsRGV0YWlscyAmJiBtYXNrZWQuX2Jsb2Nrc1tzdG9wXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjaHVua0Jsb2NrKSB7XG4gICAgICAgICAgdmFyIHRhaWxEZXRhaWxzID0gY2h1bmtCbG9jay5hcHBlbmRUYWlsKGNodW5rKTtcbiAgICAgICAgICB0YWlsRGV0YWlscy5za2lwID0gZmFsc2U7IC8vIGFsd2F5cyBpZ25vcmUgc2tpcCwgaXQgd2lsbCBiZSBzZXQgb24gbGFzdFxuXG4gICAgICAgICAgZGV0YWlscy5hZ2dyZWdhdGUodGFpbERldGFpbHMpO1xuICAgICAgICAgIG1hc2tlZC5fdmFsdWUgKz0gdGFpbERldGFpbHMuaW5zZXJ0ZWQ7IC8vIGdldCBub3QgaW5zZXJ0ZWQgY2hhcnNcblxuICAgICAgICAgIHZhciByZW1haW5DaGFycyA9IGNodW5rLnRvU3RyaW5nKCkuc2xpY2UodGFpbERldGFpbHMucmF3SW5zZXJ0ZWQubGVuZ3RoKTtcbiAgICAgICAgICBpZiAocmVtYWluQ2hhcnMpIGRldGFpbHMuYWdncmVnYXRlKG1hc2tlZC5hcHBlbmQocmVtYWluQ2hhcnMsIHtcbiAgICAgICAgICAgIHRhaWw6IHRydWVcbiAgICAgICAgICB9KSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGV0YWlscy5hZ2dyZWdhdGUobWFza2VkLmFwcGVuZChjaHVuay50b1N0cmluZygpLCB7XG4gICAgICAgICAgICB0YWlsOiB0cnVlXG4gICAgICAgICAgfSkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZGV0YWlscztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2hpZnRCZWZvcmVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2hpZnRCZWZvcmUocG9zKSB7XG4gICAgICBpZiAodGhpcy5mcm9tID49IHBvcyB8fCAhdGhpcy5jaHVua3MubGVuZ3RoKSByZXR1cm4gJyc7XG4gICAgICB2YXIgY2h1bmtTaGlmdFBvcyA9IHBvcyAtIHRoaXMuZnJvbTtcbiAgICAgIHZhciBjaSA9IDA7XG5cbiAgICAgIHdoaWxlIChjaSA8IHRoaXMuY2h1bmtzLmxlbmd0aCkge1xuICAgICAgICB2YXIgY2h1bmsgPSB0aGlzLmNodW5rc1tjaV07XG4gICAgICAgIHZhciBzaGlmdENoYXIgPSBjaHVuay5zaGlmdEJlZm9yZShjaHVua1NoaWZ0UG9zKTtcblxuICAgICAgICBpZiAoY2h1bmsudG9TdHJpbmcoKSkge1xuICAgICAgICAgIC8vIGNodW5rIHN0aWxsIGNvbnRhaW5zIHZhbHVlXG4gICAgICAgICAgLy8gYnV0IG5vdCBzaGlmdGVkIC0gbWVhbnMgbm8gbW9yZSBhdmFpbGFibGUgY2hhcnMgdG8gc2hpZnRcbiAgICAgICAgICBpZiAoIXNoaWZ0Q2hhcikgYnJlYWs7XG4gICAgICAgICAgKytjaTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBjbGVhbiBpZiBjaHVuayBoYXMgbm8gdmFsdWVcbiAgICAgICAgICB0aGlzLmNodW5rcy5zcGxpY2UoY2ksIDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNoaWZ0Q2hhcikgcmV0dXJuIHNoaWZ0Q2hhcjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzdGF0ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgY2h1bmtzOiB0aGlzLmNodW5rcy5tYXAoZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgICByZXR1cm4gYy5zdGF0ZTtcbiAgICAgICAgfSksXG4gICAgICAgIGZyb206IHRoaXMuZnJvbSxcbiAgICAgICAgc3RvcDogdGhpcy5zdG9wLFxuICAgICAgICBibG9ja0luZGV4OiB0aGlzLmJsb2NrSW5kZXhcbiAgICAgIH07XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldChzdGF0ZSkge1xuICAgICAgdmFyIGNodW5rcyA9IHN0YXRlLmNodW5rcyxcbiAgICAgICAgICBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhzdGF0ZSwgW1wiY2h1bmtzXCJdKTtcblxuICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBwcm9wcyk7XG4gICAgICB0aGlzLmNodW5rcyA9IGNodW5rcy5tYXAoZnVuY3Rpb24gKGNzdGF0ZSkge1xuICAgICAgICB2YXIgY2h1bmsgPSBcImNodW5rc1wiIGluIGNzdGF0ZSA/IG5ldyBDaHVua3NUYWlsRGV0YWlscygpIDogbmV3IENvbnRpbnVvdXNUYWlsRGV0YWlscygpOyAvLyAkRmxvd0ZpeE1lIGFscmVhZHkgY2hlY2tlZCBhYm92ZVxuXG4gICAgICAgIGNodW5rLnN0YXRlID0gY3N0YXRlO1xuICAgICAgICByZXR1cm4gY2h1bms7XG4gICAgICB9KTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gQ2h1bmtzVGFpbERldGFpbHM7XG59KCk7XG5cbi8qKlxyXG4gIFBhdHRlcm4gbWFza1xyXG4gIEBwYXJhbSB7T2JqZWN0fSBvcHRzXHJcbiAgQHBhcmFtIHtPYmplY3R9IG9wdHMuYmxvY2tzXHJcbiAgQHBhcmFtIHtPYmplY3R9IG9wdHMuZGVmaW5pdGlvbnNcclxuICBAcGFyYW0ge3N0cmluZ30gb3B0cy5wbGFjZWhvbGRlckNoYXJcclxuICBAcGFyYW0ge2Jvb2xlYW59IG9wdHMubGF6eVxyXG4qL1xudmFyIE1hc2tlZFBhdHRlcm4gPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9NYXNrZWQpIHtcbiAgX2luaGVyaXRzKE1hc2tlZFBhdHRlcm4sIF9NYXNrZWQpO1xuXG4gIC8qKiAqL1xuXG4gIC8qKiAqL1xuXG4gIC8qKiBTaW5nbGUgY2hhciBmb3IgZW1wdHkgaW5wdXQgKi9cblxuICAvKiogU2hvdyBwbGFjZWhvbGRlciBvbmx5IHdoZW4gbmVlZGVkICovXG4gIGZ1bmN0aW9uIE1hc2tlZFBhdHRlcm4oKSB7XG4gICAgdmFyIG9wdHMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1hc2tlZFBhdHRlcm4pO1xuXG4gICAgLy8gVE9ETyB0eXBlICRTaGFwZTxNYXNrZWRQYXR0ZXJuT3B0aW9ucz49e30gZG9lcyBub3Qgd29ya1xuICAgIG9wdHMuZGVmaW5pdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBERUZBVUxUX0lOUFVUX0RFRklOSVRJT05TLCBvcHRzLmRlZmluaXRpb25zKTtcbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX2dldFByb3RvdHlwZU9mKE1hc2tlZFBhdHRlcm4pLmNhbGwodGhpcywgT2JqZWN0LmFzc2lnbih7fSwgTWFza2VkUGF0dGVybi5ERUZBVUxUUywge30sIG9wdHMpKSk7XG4gIH1cbiAgLyoqXHJcbiAgICBAb3ZlcnJpZGVcclxuICAgIEBwYXJhbSB7T2JqZWN0fSBvcHRzXHJcbiAgKi9cblxuXG4gIF9jcmVhdGVDbGFzcyhNYXNrZWRQYXR0ZXJuLCBbe1xuICAgIGtleTogXCJfdXBkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF91cGRhdGUoKSB7XG4gICAgICB2YXIgb3B0cyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gICAgICBvcHRzLmRlZmluaXRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5kZWZpbml0aW9ucywgb3B0cy5kZWZpbml0aW9ucyk7XG5cbiAgICAgIF9nZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZFBhdHRlcm4ucHJvdG90eXBlKSwgXCJfdXBkYXRlXCIsIHRoaXMpLmNhbGwodGhpcywgb3B0cyk7XG5cbiAgICAgIHRoaXMuX3JlYnVpbGRNYXNrKCk7XG4gICAgfVxuICAgIC8qKiAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiX3JlYnVpbGRNYXNrXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9yZWJ1aWxkTWFzaygpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIHZhciBkZWZzID0gdGhpcy5kZWZpbml0aW9ucztcbiAgICAgIHRoaXMuX2Jsb2NrcyA9IFtdO1xuICAgICAgdGhpcy5fc3RvcHMgPSBbXTtcbiAgICAgIHRoaXMuX21hc2tlZEJsb2NrcyA9IHt9O1xuICAgICAgdmFyIHBhdHRlcm4gPSB0aGlzLm1hc2s7XG4gICAgICBpZiAoIXBhdHRlcm4gfHwgIWRlZnMpIHJldHVybjtcbiAgICAgIHZhciB1bm1hc2tpbmdCbG9jayA9IGZhbHNlO1xuICAgICAgdmFyIG9wdGlvbmFsQmxvY2sgPSBmYWxzZTtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXR0ZXJuLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIGlmICh0aGlzLmJsb2Nrcykge1xuICAgICAgICAgIHZhciBfcmV0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHAgPSBwYXR0ZXJuLnNsaWNlKGkpO1xuICAgICAgICAgICAgdmFyIGJOYW1lcyA9IE9iamVjdC5rZXlzKF90aGlzLmJsb2NrcykuZmlsdGVyKGZ1bmN0aW9uIChiTmFtZSkge1xuICAgICAgICAgICAgICByZXR1cm4gcC5pbmRleE9mKGJOYW1lKSA9PT0gMDtcbiAgICAgICAgICAgIH0pOyAvLyBvcmRlciBieSBrZXkgbGVuZ3RoXG5cbiAgICAgICAgICAgIGJOYW1lcy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICAgIHJldHVybiBiLmxlbmd0aCAtIGEubGVuZ3RoO1xuICAgICAgICAgICAgfSk7IC8vIHVzZSBibG9jayBuYW1lIHdpdGggbWF4IGxlbmd0aFxuXG4gICAgICAgICAgICB2YXIgYk5hbWUgPSBiTmFtZXNbMF07XG5cbiAgICAgICAgICAgIGlmIChiTmFtZSkge1xuICAgICAgICAgICAgICB2YXIgbWFza2VkQmxvY2sgPSBjcmVhdGVNYXNrKE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgICAgIHBhcmVudDogX3RoaXMsXG4gICAgICAgICAgICAgICAgbGF6eTogX3RoaXMubGF6eSxcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlckNoYXI6IF90aGlzLnBsYWNlaG9sZGVyQ2hhcixcbiAgICAgICAgICAgICAgICBvdmVyd3JpdGU6IF90aGlzLm92ZXJ3cml0ZVxuICAgICAgICAgICAgICB9LCBfdGhpcy5ibG9ja3NbYk5hbWVdKSk7XG5cbiAgICAgICAgICAgICAgaWYgKG1hc2tlZEJsb2NrKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuX2Jsb2Nrcy5wdXNoKG1hc2tlZEJsb2NrKTsgLy8gc3RvcmUgYmxvY2sgaW5kZXhcblxuXG4gICAgICAgICAgICAgICAgaWYgKCFfdGhpcy5fbWFza2VkQmxvY2tzW2JOYW1lXSkgX3RoaXMuX21hc2tlZEJsb2Nrc1tiTmFtZV0gPSBbXTtcblxuICAgICAgICAgICAgICAgIF90aGlzLl9tYXNrZWRCbG9ja3NbYk5hbWVdLnB1c2goX3RoaXMuX2Jsb2Nrcy5sZW5ndGggLSAxKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGkgKz0gYk5hbWUubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgICAgcmV0dXJuIFwiY29udGludWVcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KCk7XG5cbiAgICAgICAgICBpZiAoX3JldCA9PT0gXCJjb250aW51ZVwiKSBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBjaGFyID0gcGF0dGVybltpXTtcblxuICAgICAgICB2YXIgX2lzSW5wdXQgPSBjaGFyIGluIGRlZnM7XG5cbiAgICAgICAgaWYgKGNoYXIgPT09IE1hc2tlZFBhdHRlcm4uU1RPUF9DSEFSKSB7XG4gICAgICAgICAgdGhpcy5fc3RvcHMucHVzaCh0aGlzLl9ibG9ja3MubGVuZ3RoKTtcblxuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNoYXIgPT09ICd7JyB8fCBjaGFyID09PSAnfScpIHtcbiAgICAgICAgICB1bm1hc2tpbmdCbG9jayA9ICF1bm1hc2tpbmdCbG9jaztcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjaGFyID09PSAnWycgfHwgY2hhciA9PT0gJ10nKSB7XG4gICAgICAgICAgb3B0aW9uYWxCbG9jayA9ICFvcHRpb25hbEJsb2NrO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNoYXIgPT09IE1hc2tlZFBhdHRlcm4uRVNDQVBFX0NIQVIpIHtcbiAgICAgICAgICArK2k7XG4gICAgICAgICAgY2hhciA9IHBhdHRlcm5baV07XG4gICAgICAgICAgaWYgKCFjaGFyKSBicmVhaztcbiAgICAgICAgICBfaXNJbnB1dCA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGRlZiA9IF9pc0lucHV0ID8gbmV3IFBhdHRlcm5JbnB1dERlZmluaXRpb24oe1xuICAgICAgICAgIHBhcmVudDogdGhpcyxcbiAgICAgICAgICBsYXp5OiB0aGlzLmxhenksXG4gICAgICAgICAgcGxhY2Vob2xkZXJDaGFyOiB0aGlzLnBsYWNlaG9sZGVyQ2hhcixcbiAgICAgICAgICBtYXNrOiBkZWZzW2NoYXJdLFxuICAgICAgICAgIGlzT3B0aW9uYWw6IG9wdGlvbmFsQmxvY2tcbiAgICAgICAgfSkgOiBuZXcgUGF0dGVybkZpeGVkRGVmaW5pdGlvbih7XG4gICAgICAgICAgY2hhcjogY2hhcixcbiAgICAgICAgICBpc1VubWFza2luZzogdW5tYXNraW5nQmxvY2tcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5fYmxvY2tzLnB1c2goZGVmKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLyoqXHJcbiAgICAgIEBvdmVycmlkZVxyXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInJlc2V0XCIsXG5cbiAgICAvKipcclxuICAgICAgQG92ZXJyaWRlXHJcbiAgICAqL1xuICAgIHZhbHVlOiBmdW5jdGlvbiByZXNldCgpIHtcbiAgICAgIF9nZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZFBhdHRlcm4ucHJvdG90eXBlKSwgXCJyZXNldFwiLCB0aGlzKS5jYWxsKHRoaXMpO1xuXG4gICAgICB0aGlzLl9ibG9ja3MuZm9yRWFjaChmdW5jdGlvbiAoYikge1xuICAgICAgICByZXR1cm4gYi5yZXNldCgpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICBAb3ZlcnJpZGVcclxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJkb0NvbW1pdFwiLFxuXG4gICAgLyoqXHJcbiAgICAgIEBvdmVycmlkZVxyXG4gICAgKi9cbiAgICB2YWx1ZTogZnVuY3Rpb24gZG9Db21taXQoKSB7XG4gICAgICB0aGlzLl9ibG9ja3MuZm9yRWFjaChmdW5jdGlvbiAoYikge1xuICAgICAgICByZXR1cm4gYi5kb0NvbW1pdCgpO1xuICAgICAgfSk7XG5cbiAgICAgIF9nZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZFBhdHRlcm4ucHJvdG90eXBlKSwgXCJkb0NvbW1pdFwiLCB0aGlzKS5jYWxsKHRoaXMpO1xuICAgIH1cbiAgICAvKipcclxuICAgICAgQG92ZXJyaWRlXHJcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiYXBwZW5kVGFpbFwiLFxuXG4gICAgLyoqXHJcbiAgICAgIEBvdmVycmlkZVxyXG4gICAgKi9cbiAgICB2YWx1ZTogZnVuY3Rpb24gYXBwZW5kVGFpbCh0YWlsKSB7XG4gICAgICByZXR1cm4gX2dldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkUGF0dGVybi5wcm90b3R5cGUpLCBcImFwcGVuZFRhaWxcIiwgdGhpcykuY2FsbCh0aGlzLCB0YWlsKS5hZ2dyZWdhdGUodGhpcy5fYXBwZW5kUGxhY2Vob2xkZXIoKSk7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICBAb3ZlcnJpZGVcclxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJfYXBwZW5kQ2hhclJhd1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfYXBwZW5kQ2hhclJhdyhjaCkge1xuICAgICAgdmFyIGZsYWdzID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICAgIGNoID0gdGhpcy5kb1ByZXBhcmUoY2gsIGZsYWdzKTtcblxuICAgICAgdmFyIGJsb2NrSXRlciA9IHRoaXMuX21hcFBvc1RvQmxvY2sodGhpcy52YWx1ZS5sZW5ndGgpO1xuXG4gICAgICB2YXIgZGV0YWlscyA9IG5ldyBDaGFuZ2VEZXRhaWxzKCk7XG4gICAgICBpZiAoIWJsb2NrSXRlcikgcmV0dXJuIGRldGFpbHM7XG5cbiAgICAgIGZvciAodmFyIGJpID0gYmxvY2tJdGVyLmluZGV4OzsgKytiaSkge1xuICAgICAgICB2YXIgX2Jsb2NrID0gdGhpcy5fYmxvY2tzW2JpXTtcbiAgICAgICAgaWYgKCFfYmxvY2spIGJyZWFrO1xuXG4gICAgICAgIHZhciBibG9ja0RldGFpbHMgPSBfYmxvY2suX2FwcGVuZENoYXIoY2gsIGZsYWdzKTtcblxuICAgICAgICB2YXIgc2tpcCA9IGJsb2NrRGV0YWlscy5za2lwO1xuICAgICAgICBkZXRhaWxzLmFnZ3JlZ2F0ZShibG9ja0RldGFpbHMpO1xuICAgICAgICBpZiAoc2tpcCB8fCBibG9ja0RldGFpbHMucmF3SW5zZXJ0ZWQpIGJyZWFrOyAvLyBnbyBuZXh0IGNoYXJcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRldGFpbHM7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICBAb3ZlcnJpZGVcclxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJleHRyYWN0VGFpbFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBleHRyYWN0VGFpbCgpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB2YXIgZnJvbVBvcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogMDtcbiAgICAgIHZhciB0b1BvcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogdGhpcy52YWx1ZS5sZW5ndGg7XG4gICAgICB2YXIgY2h1bmtUYWlsID0gbmV3IENodW5rc1RhaWxEZXRhaWxzKCk7XG4gICAgICBpZiAoZnJvbVBvcyA9PT0gdG9Qb3MpIHJldHVybiBjaHVua1RhaWw7XG5cbiAgICAgIHRoaXMuX2ZvckVhY2hCbG9ja3NJblJhbmdlKGZyb21Qb3MsIHRvUG9zLCBmdW5jdGlvbiAoYiwgYmksIGJGcm9tUG9zLCBiVG9Qb3MpIHtcbiAgICAgICAgdmFyIGJsb2NrQ2h1bmsgPSBiLmV4dHJhY3RUYWlsKGJGcm9tUG9zLCBiVG9Qb3MpO1xuICAgICAgICBibG9ja0NodW5rLnN0b3AgPSBfdGhpczIuX2ZpbmRTdG9wQmVmb3JlKGJpKTtcbiAgICAgICAgYmxvY2tDaHVuay5mcm9tID0gX3RoaXMyLl9ibG9ja1N0YXJ0UG9zKGJpKTtcbiAgICAgICAgaWYgKGJsb2NrQ2h1bmsgaW5zdGFuY2VvZiBDaHVua3NUYWlsRGV0YWlscykgYmxvY2tDaHVuay5ibG9ja0luZGV4ID0gYmk7XG4gICAgICAgIGNodW5rVGFpbC5leHRlbmQoYmxvY2tDaHVuayk7XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIGNodW5rVGFpbDtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgIEBvdmVycmlkZVxyXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImV4dHJhY3RJbnB1dFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBleHRyYWN0SW5wdXQoKSB7XG4gICAgICB2YXIgZnJvbVBvcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogMDtcbiAgICAgIHZhciB0b1BvcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogdGhpcy52YWx1ZS5sZW5ndGg7XG4gICAgICB2YXIgZmxhZ3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHt9O1xuICAgICAgaWYgKGZyb21Qb3MgPT09IHRvUG9zKSByZXR1cm4gJyc7XG4gICAgICB2YXIgaW5wdXQgPSAnJztcblxuICAgICAgdGhpcy5fZm9yRWFjaEJsb2Nrc0luUmFuZ2UoZnJvbVBvcywgdG9Qb3MsIGZ1bmN0aW9uIChiLCBfLCBmcm9tUG9zLCB0b1Bvcykge1xuICAgICAgICBpbnB1dCArPSBiLmV4dHJhY3RJbnB1dChmcm9tUG9zLCB0b1BvcywgZmxhZ3MpO1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBpbnB1dDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiX2ZpbmRTdG9wQmVmb3JlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9maW5kU3RvcEJlZm9yZShibG9ja0luZGV4KSB7XG4gICAgICB2YXIgc3RvcEJlZm9yZTtcblxuICAgICAgZm9yICh2YXIgc2kgPSAwOyBzaSA8IHRoaXMuX3N0b3BzLmxlbmd0aDsgKytzaSkge1xuICAgICAgICB2YXIgc3RvcCA9IHRoaXMuX3N0b3BzW3NpXTtcbiAgICAgICAgaWYgKHN0b3AgPD0gYmxvY2tJbmRleCkgc3RvcEJlZm9yZSA9IHN0b3A7ZWxzZSBicmVhaztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHN0b3BCZWZvcmU7XG4gICAgfVxuICAgIC8qKiBBcHBlbmRzIHBsYWNlaG9sZGVyIGRlcGVuZGluZyBvbiBsYXppbmVzcyAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiX2FwcGVuZFBsYWNlaG9sZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9hcHBlbmRQbGFjZWhvbGRlcih0b0Jsb2NrSW5kZXgpIHtcbiAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICB2YXIgZGV0YWlscyA9IG5ldyBDaGFuZ2VEZXRhaWxzKCk7XG4gICAgICBpZiAodGhpcy5sYXp5ICYmIHRvQmxvY2tJbmRleCA9PSBudWxsKSByZXR1cm4gZGV0YWlscztcblxuICAgICAgdmFyIHN0YXJ0QmxvY2tJdGVyID0gdGhpcy5fbWFwUG9zVG9CbG9jayh0aGlzLnZhbHVlLmxlbmd0aCk7XG5cbiAgICAgIGlmICghc3RhcnRCbG9ja0l0ZXIpIHJldHVybiBkZXRhaWxzO1xuICAgICAgdmFyIHN0YXJ0QmxvY2tJbmRleCA9IHN0YXJ0QmxvY2tJdGVyLmluZGV4O1xuICAgICAgdmFyIGVuZEJsb2NrSW5kZXggPSB0b0Jsb2NrSW5kZXggIT0gbnVsbCA/IHRvQmxvY2tJbmRleCA6IHRoaXMuX2Jsb2Nrcy5sZW5ndGg7XG5cbiAgICAgIHRoaXMuX2Jsb2Nrcy5zbGljZShzdGFydEJsb2NrSW5kZXgsIGVuZEJsb2NrSW5kZXgpLmZvckVhY2goZnVuY3Rpb24gKGIpIHtcbiAgICAgICAgaWYgKCFiLmxhenkgfHwgdG9CbG9ja0luZGV4ICE9IG51bGwpIHtcbiAgICAgICAgICAvLyAkRmxvd0ZpeE1lIGBfYmxvY2tzYCBtYXkgbm90IGJlIHByZXNlbnRcbiAgICAgICAgICB2YXIgYXJncyA9IGIuX2Jsb2NrcyAhPSBudWxsID8gW2IuX2Jsb2Nrcy5sZW5ndGhdIDogW107XG5cbiAgICAgICAgICB2YXIgYkRldGFpbHMgPSBiLl9hcHBlbmRQbGFjZWhvbGRlci5hcHBseShiLCBhcmdzKTtcblxuICAgICAgICAgIF90aGlzMy5fdmFsdWUgKz0gYkRldGFpbHMuaW5zZXJ0ZWQ7XG4gICAgICAgICAgZGV0YWlscy5hZ2dyZWdhdGUoYkRldGFpbHMpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIGRldGFpbHM7XG4gICAgfVxuICAgIC8qKiBGaW5kcyBibG9jayBpbiBwb3MgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIl9tYXBQb3NUb0Jsb2NrXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9tYXBQb3NUb0Jsb2NrKHBvcykge1xuICAgICAgdmFyIGFjY1ZhbCA9ICcnO1xuXG4gICAgICBmb3IgKHZhciBiaSA9IDA7IGJpIDwgdGhpcy5fYmxvY2tzLmxlbmd0aDsgKytiaSkge1xuICAgICAgICB2YXIgX2Jsb2NrMiA9IHRoaXMuX2Jsb2Nrc1tiaV07XG4gICAgICAgIHZhciBibG9ja1N0YXJ0UG9zID0gYWNjVmFsLmxlbmd0aDtcbiAgICAgICAgYWNjVmFsICs9IF9ibG9jazIudmFsdWU7XG5cbiAgICAgICAgaWYgKHBvcyA8PSBhY2NWYWwubGVuZ3RoKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGluZGV4OiBiaSxcbiAgICAgICAgICAgIG9mZnNldDogcG9zIC0gYmxvY2tTdGFydFBvc1xuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLyoqICovXG5cbiAgfSwge1xuICAgIGtleTogXCJfYmxvY2tTdGFydFBvc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfYmxvY2tTdGFydFBvcyhibG9ja0luZGV4KSB7XG4gICAgICByZXR1cm4gdGhpcy5fYmxvY2tzLnNsaWNlKDAsIGJsb2NrSW5kZXgpLnJlZHVjZShmdW5jdGlvbiAocG9zLCBiKSB7XG4gICAgICAgIHJldHVybiBwb3MgKz0gYi52YWx1ZS5sZW5ndGg7XG4gICAgICB9LCAwKTtcbiAgICB9XG4gICAgLyoqICovXG5cbiAgfSwge1xuICAgIGtleTogXCJfZm9yRWFjaEJsb2Nrc0luUmFuZ2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2ZvckVhY2hCbG9ja3NJblJhbmdlKGZyb21Qb3MpIHtcbiAgICAgIHZhciB0b1BvcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogdGhpcy52YWx1ZS5sZW5ndGg7XG4gICAgICB2YXIgZm4gPSBhcmd1bWVudHMubGVuZ3RoID4gMiA/IGFyZ3VtZW50c1syXSA6IHVuZGVmaW5lZDtcblxuICAgICAgdmFyIGZyb21CbG9ja0l0ZXIgPSB0aGlzLl9tYXBQb3NUb0Jsb2NrKGZyb21Qb3MpO1xuXG4gICAgICBpZiAoZnJvbUJsb2NrSXRlcikge1xuICAgICAgICB2YXIgdG9CbG9ja0l0ZXIgPSB0aGlzLl9tYXBQb3NUb0Jsb2NrKHRvUG9zKTsgLy8gcHJvY2VzcyBmaXJzdCBibG9ja1xuXG5cbiAgICAgICAgdmFyIGlzU2FtZUJsb2NrID0gdG9CbG9ja0l0ZXIgJiYgZnJvbUJsb2NrSXRlci5pbmRleCA9PT0gdG9CbG9ja0l0ZXIuaW5kZXg7XG4gICAgICAgIHZhciBmcm9tQmxvY2tTdGFydFBvcyA9IGZyb21CbG9ja0l0ZXIub2Zmc2V0O1xuICAgICAgICB2YXIgZnJvbUJsb2NrRW5kUG9zID0gdG9CbG9ja0l0ZXIgJiYgaXNTYW1lQmxvY2sgPyB0b0Jsb2NrSXRlci5vZmZzZXQgOiB0aGlzLl9ibG9ja3NbZnJvbUJsb2NrSXRlci5pbmRleF0udmFsdWUubGVuZ3RoO1xuICAgICAgICBmbih0aGlzLl9ibG9ja3NbZnJvbUJsb2NrSXRlci5pbmRleF0sIGZyb21CbG9ja0l0ZXIuaW5kZXgsIGZyb21CbG9ja1N0YXJ0UG9zLCBmcm9tQmxvY2tFbmRQb3MpO1xuXG4gICAgICAgIGlmICh0b0Jsb2NrSXRlciAmJiAhaXNTYW1lQmxvY2spIHtcbiAgICAgICAgICAvLyBwcm9jZXNzIGludGVybWVkaWF0ZSBibG9ja3NcbiAgICAgICAgICBmb3IgKHZhciBiaSA9IGZyb21CbG9ja0l0ZXIuaW5kZXggKyAxOyBiaSA8IHRvQmxvY2tJdGVyLmluZGV4OyArK2JpKSB7XG4gICAgICAgICAgICBmbih0aGlzLl9ibG9ja3NbYmldLCBiaSwgMCwgdGhpcy5fYmxvY2tzW2JpXS52YWx1ZS5sZW5ndGgpO1xuICAgICAgICAgIH0gLy8gcHJvY2VzcyBsYXN0IGJsb2NrXG5cblxuICAgICAgICAgIGZuKHRoaXMuX2Jsb2Nrc1t0b0Jsb2NrSXRlci5pbmRleF0sIHRvQmxvY2tJdGVyLmluZGV4LCAwLCB0b0Jsb2NrSXRlci5vZmZzZXQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICBAb3ZlcnJpZGVcclxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJyZW1vdmVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgdmFyIGZyb21Qb3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IDA7XG4gICAgICB2YXIgdG9Qb3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHRoaXMudmFsdWUubGVuZ3RoO1xuXG4gICAgICB2YXIgcmVtb3ZlRGV0YWlscyA9IF9nZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZFBhdHRlcm4ucHJvdG90eXBlKSwgXCJyZW1vdmVcIiwgdGhpcykuY2FsbCh0aGlzLCBmcm9tUG9zLCB0b1Bvcyk7XG5cbiAgICAgIHRoaXMuX2ZvckVhY2hCbG9ja3NJblJhbmdlKGZyb21Qb3MsIHRvUG9zLCBmdW5jdGlvbiAoYiwgXywgYkZyb21Qb3MsIGJUb1Bvcykge1xuICAgICAgICByZW1vdmVEZXRhaWxzLmFnZ3JlZ2F0ZShiLnJlbW92ZShiRnJvbVBvcywgYlRvUG9zKSk7XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIHJlbW92ZURldGFpbHM7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICBAb3ZlcnJpZGVcclxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJuZWFyZXN0SW5wdXRQb3NcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbmVhcmVzdElucHV0UG9zKGN1cnNvclBvcykge1xuICAgICAgdmFyIGRpcmVjdGlvbiA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogRElSRUNUSU9OLk5PTkU7XG4gICAgICAvLyBUT0RPIHJlZmFjdG9yIC0gZXh0cmFjdCBhbGlnbmJsb2NrXG4gICAgICB2YXIgYmVnaW5CbG9ja0RhdGEgPSB0aGlzLl9tYXBQb3NUb0Jsb2NrKGN1cnNvclBvcykgfHwge1xuICAgICAgICBpbmRleDogMCxcbiAgICAgICAgb2Zmc2V0OiAwXG4gICAgICB9O1xuICAgICAgdmFyIGJlZ2luQmxvY2tPZmZzZXQgPSBiZWdpbkJsb2NrRGF0YS5vZmZzZXQsXG4gICAgICAgICAgYmVnaW5CbG9ja0luZGV4ID0gYmVnaW5CbG9ja0RhdGEuaW5kZXg7XG4gICAgICB2YXIgYmVnaW5CbG9jayA9IHRoaXMuX2Jsb2Nrc1tiZWdpbkJsb2NrSW5kZXhdO1xuICAgICAgaWYgKCFiZWdpbkJsb2NrKSByZXR1cm4gY3Vyc29yUG9zO1xuICAgICAgdmFyIGJlZ2luQmxvY2tDdXJzb3JQb3MgPSBiZWdpbkJsb2NrT2Zmc2V0OyAvLyBpZiBwb3NpdGlvbiBpbnNpZGUgYmxvY2sgLSB0cnkgdG8gYWRqdXN0IGl0XG5cbiAgICAgIGlmIChiZWdpbkJsb2NrQ3Vyc29yUG9zICE9PSAwICYmIGJlZ2luQmxvY2tDdXJzb3JQb3MgPCBiZWdpbkJsb2NrLnZhbHVlLmxlbmd0aCkge1xuICAgICAgICBiZWdpbkJsb2NrQ3Vyc29yUG9zID0gYmVnaW5CbG9jay5uZWFyZXN0SW5wdXRQb3MoYmVnaW5CbG9ja09mZnNldCwgZm9yY2VEaXJlY3Rpb24oZGlyZWN0aW9uKSk7XG4gICAgICB9XG5cbiAgICAgIHZhciBjdXJzb3JBdFJpZ2h0ID0gYmVnaW5CbG9ja0N1cnNvclBvcyA9PT0gYmVnaW5CbG9jay52YWx1ZS5sZW5ndGg7XG4gICAgICB2YXIgY3Vyc29yQXRMZWZ0ID0gYmVnaW5CbG9ja0N1cnNvclBvcyA9PT0gMDsgLy8gIGN1cnNvciBpcyBJTlNJREUgZmlyc3QgYmxvY2sgKG5vdCBhdCBib3VuZHMpXG5cbiAgICAgIGlmICghY3Vyc29yQXRMZWZ0ICYmICFjdXJzb3JBdFJpZ2h0KSByZXR1cm4gdGhpcy5fYmxvY2tTdGFydFBvcyhiZWdpbkJsb2NrSW5kZXgpICsgYmVnaW5CbG9ja0N1cnNvclBvcztcbiAgICAgIHZhciBzZWFyY2hCbG9ja0luZGV4ID0gY3Vyc29yQXRSaWdodCA/IGJlZ2luQmxvY2tJbmRleCArIDEgOiBiZWdpbkJsb2NrSW5kZXg7XG5cbiAgICAgIGlmIChkaXJlY3Rpb24gPT09IERJUkVDVElPTi5OT05FKSB7XG4gICAgICAgIC8vIE5PTkUgZGlyZWN0aW9uIHVzZWQgdG8gY2FsY3VsYXRlIHN0YXJ0IGlucHV0IHBvc2l0aW9uIGlmIG5vIGNoYXJzIHdlcmUgcmVtb3ZlZFxuICAgICAgICAvLyBGT1IgTk9ORTpcbiAgICAgICAgLy8gLVxuICAgICAgICAvLyBpbnB1dHxhbnlcbiAgICAgICAgLy8gLT5cbiAgICAgICAgLy8gIGFueXxpbnB1dFxuICAgICAgICAvLyA8LVxuICAgICAgICAvLyAgZmlsbGVkLWlucHV0fGFueVxuICAgICAgICAvLyBjaGVjayBpZiBmaXJzdCBibG9jayBhdCBsZWZ0IGlzIGlucHV0XG4gICAgICAgIGlmIChzZWFyY2hCbG9ja0luZGV4ID4gMCkge1xuICAgICAgICAgIHZhciBibG9ja0luZGV4QXRMZWZ0ID0gc2VhcmNoQmxvY2tJbmRleCAtIDE7XG4gICAgICAgICAgdmFyIGJsb2NrQXRMZWZ0ID0gdGhpcy5fYmxvY2tzW2Jsb2NrSW5kZXhBdExlZnRdO1xuICAgICAgICAgIHZhciBibG9ja0lucHV0UG9zID0gYmxvY2tBdExlZnQubmVhcmVzdElucHV0UG9zKDAsIERJUkVDVElPTi5OT05FKTsgLy8gaXMgaW5wdXRcblxuICAgICAgICAgIGlmICghYmxvY2tBdExlZnQudmFsdWUubGVuZ3RoIHx8IGJsb2NrSW5wdXRQb3MgIT09IGJsb2NrQXRMZWZ0LnZhbHVlLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2Jsb2NrU3RhcnRQb3Moc2VhcmNoQmxvY2tJbmRleCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IC8vIC0+XG5cblxuICAgICAgICB2YXIgZmlyc3RJbnB1dEF0UmlnaHQgPSBzZWFyY2hCbG9ja0luZGV4O1xuXG4gICAgICAgIGZvciAodmFyIGJpID0gZmlyc3RJbnB1dEF0UmlnaHQ7IGJpIDwgdGhpcy5fYmxvY2tzLmxlbmd0aDsgKytiaSkge1xuICAgICAgICAgIHZhciBibG9ja0F0UmlnaHQgPSB0aGlzLl9ibG9ja3NbYmldO1xuXG4gICAgICAgICAgdmFyIF9ibG9ja0lucHV0UG9zID0gYmxvY2tBdFJpZ2h0Lm5lYXJlc3RJbnB1dFBvcygwLCBESVJFQ1RJT04uTk9ORSk7XG5cbiAgICAgICAgICBpZiAoIWJsb2NrQXRSaWdodC52YWx1ZS5sZW5ndGggfHwgX2Jsb2NrSW5wdXRQb3MgIT09IGJsb2NrQXRSaWdodC52YWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9ibG9ja1N0YXJ0UG9zKGJpKSArIF9ibG9ja0lucHV0UG9zO1xuICAgICAgICAgIH1cbiAgICAgICAgfSAvLyA8LVxuICAgICAgICAvLyBmaW5kIGZpcnN0IG5vbi1maXhlZCBzeW1ib2xcblxuXG4gICAgICAgIGZvciAodmFyIF9iaSA9IHNlYXJjaEJsb2NrSW5kZXggLSAxOyBfYmkgPj0gMDsgLS1fYmkpIHtcbiAgICAgICAgICB2YXIgX2Jsb2NrMyA9IHRoaXMuX2Jsb2Nrc1tfYmldO1xuXG4gICAgICAgICAgdmFyIF9ibG9ja0lucHV0UG9zMiA9IF9ibG9jazMubmVhcmVzdElucHV0UG9zKDAsIERJUkVDVElPTi5OT05FKTsgLy8gaXMgaW5wdXRcblxuXG4gICAgICAgICAgaWYgKCFfYmxvY2szLnZhbHVlLmxlbmd0aCB8fCBfYmxvY2tJbnB1dFBvczIgIT09IF9ibG9jazMudmFsdWUubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fYmxvY2tTdGFydFBvcyhfYmkpICsgX2Jsb2NrMy52YWx1ZS5sZW5ndGg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGN1cnNvclBvcztcbiAgICAgIH1cblxuICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gRElSRUNUSU9OLkxFRlQgfHwgZGlyZWN0aW9uID09PSBESVJFQ1RJT04uRk9SQ0VfTEVGVCkge1xuICAgICAgICAvLyAtXG4gICAgICAgIC8vICBhbnl8ZmlsbGVkLWlucHV0XG4gICAgICAgIC8vIDwtXG4gICAgICAgIC8vICBhbnl8Zmlyc3Qgbm90IGVtcHR5IGlzIG5vdC1sZW4tYWxpZ25lZFxuICAgICAgICAvLyAgbm90LTAtYWxpZ25lZHxhbnlcbiAgICAgICAgLy8gLT5cbiAgICAgICAgLy8gIGFueXxub3QtbGVuLWFsaWduZWQgb3IgZW5kXG4gICAgICAgIC8vIGNoZWNrIGlmIGZpcnN0IGJsb2NrIGF0IHJpZ2h0IGlzIGZpbGxlZCBpbnB1dFxuICAgICAgICB2YXIgZmlyc3RGaWxsZWRCbG9ja0luZGV4QXRSaWdodDtcblxuICAgICAgICBmb3IgKHZhciBfYmkyID0gc2VhcmNoQmxvY2tJbmRleDsgX2JpMiA8IHRoaXMuX2Jsb2Nrcy5sZW5ndGg7ICsrX2JpMikge1xuICAgICAgICAgIGlmICh0aGlzLl9ibG9ja3NbX2JpMl0udmFsdWUpIHtcbiAgICAgICAgICAgIGZpcnN0RmlsbGVkQmxvY2tJbmRleEF0UmlnaHQgPSBfYmkyO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGZpcnN0RmlsbGVkQmxvY2tJbmRleEF0UmlnaHQgIT0gbnVsbCkge1xuICAgICAgICAgIHZhciBmaWxsZWRCbG9jayA9IHRoaXMuX2Jsb2Nrc1tmaXJzdEZpbGxlZEJsb2NrSW5kZXhBdFJpZ2h0XTtcblxuICAgICAgICAgIHZhciBfYmxvY2tJbnB1dFBvczMgPSBmaWxsZWRCbG9jay5uZWFyZXN0SW5wdXRQb3MoMCwgRElSRUNUSU9OLlJJR0hUKTtcblxuICAgICAgICAgIGlmIChfYmxvY2tJbnB1dFBvczMgPT09IDAgJiYgZmlsbGVkQmxvY2sudW5tYXNrZWRWYWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIC8vIGZpbGxlZCBibG9jayBpcyBpbnB1dFxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2Jsb2NrU3RhcnRQb3MoZmlyc3RGaWxsZWRCbG9ja0luZGV4QXRSaWdodCkgKyBfYmxvY2tJbnB1dFBvczM7XG4gICAgICAgICAgfVxuICAgICAgICB9IC8vIDwtXG4gICAgICAgIC8vIGZpbmQgdGhpcyB2YXJzXG5cblxuICAgICAgICB2YXIgZmlyc3RGaWxsZWRJbnB1dEJsb2NrSW5kZXggPSAtMTtcbiAgICAgICAgdmFyIGZpcnN0RW1wdHlJbnB1dEJsb2NrSW5kZXg7IC8vIFRPRE8gY29uc2lkZXIgbmVzdGVkIGVtcHR5IGlucHV0c1xuXG4gICAgICAgIGZvciAodmFyIF9iaTMgPSBzZWFyY2hCbG9ja0luZGV4IC0gMTsgX2JpMyA+PSAwOyAtLV9iaTMpIHtcbiAgICAgICAgICB2YXIgX2Jsb2NrNCA9IHRoaXMuX2Jsb2Nrc1tfYmkzXTtcblxuICAgICAgICAgIHZhciBfYmxvY2tJbnB1dFBvczQgPSBfYmxvY2s0Lm5lYXJlc3RJbnB1dFBvcyhfYmxvY2s0LnZhbHVlLmxlbmd0aCwgRElSRUNUSU9OLkZPUkNFX0xFRlQpO1xuXG4gICAgICAgICAgaWYgKCFfYmxvY2s0LnZhbHVlIHx8IF9ibG9ja0lucHV0UG9zNCAhPT0gMCkgZmlyc3RFbXB0eUlucHV0QmxvY2tJbmRleCA9IF9iaTM7XG5cbiAgICAgICAgICBpZiAoX2Jsb2NrSW5wdXRQb3M0ICE9PSAwKSB7XG4gICAgICAgICAgICBpZiAoX2Jsb2NrSW5wdXRQb3M0ICE9PSBfYmxvY2s0LnZhbHVlLmxlbmd0aCkge1xuICAgICAgICAgICAgICAvLyBhbGlnbmVkIGluc2lkZSBibG9jayAtIHJldHVybiBpbW1lZGlhdGVseVxuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fYmxvY2tTdGFydFBvcyhfYmkzKSArIF9ibG9ja0lucHV0UG9zNDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vIGZvdW5kIGZpbGxlZFxuICAgICAgICAgICAgICBmaXJzdEZpbGxlZElucHV0QmxvY2tJbmRleCA9IF9iaTM7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT09IERJUkVDVElPTi5MRUZUKSB7XG4gICAgICAgICAgLy8gdHJ5IGZpbmQgZmlyc3QgZW1wdHkgaW5wdXQgYmVmb3JlIHN0YXJ0IHNlYXJjaGluZyBwb3NpdGlvbiBvbmx5IHdoZW4gbm90IGZvcmNlZFxuICAgICAgICAgIGZvciAodmFyIF9iaTQgPSBmaXJzdEZpbGxlZElucHV0QmxvY2tJbmRleCArIDE7IF9iaTQgPD0gTWF0aC5taW4oc2VhcmNoQmxvY2tJbmRleCwgdGhpcy5fYmxvY2tzLmxlbmd0aCAtIDEpOyArK19iaTQpIHtcbiAgICAgICAgICAgIHZhciBfYmxvY2s1ID0gdGhpcy5fYmxvY2tzW19iaTRdO1xuXG4gICAgICAgICAgICB2YXIgX2Jsb2NrSW5wdXRQb3M1ID0gX2Jsb2NrNS5uZWFyZXN0SW5wdXRQb3MoMCwgRElSRUNUSU9OLk5PTkUpO1xuXG4gICAgICAgICAgICB2YXIgYmxvY2tBbGlnbmVkUG9zID0gdGhpcy5fYmxvY2tTdGFydFBvcyhfYmk0KSArIF9ibG9ja0lucHV0UG9zNTtcblxuICAgICAgICAgICAgaWYgKGJsb2NrQWxpZ25lZFBvcyA+IGN1cnNvclBvcykgYnJlYWs7IC8vIGlmIGJsb2NrIGlzIG5vdCBsYXp5IGlucHV0XG5cbiAgICAgICAgICAgIGlmIChfYmxvY2tJbnB1dFBvczUgIT09IF9ibG9jazUudmFsdWUubGVuZ3RoKSByZXR1cm4gYmxvY2tBbGlnbmVkUG9zO1xuICAgICAgICAgIH1cbiAgICAgICAgfSAvLyBwcm9jZXNzIG92ZXJmbG93XG5cblxuICAgICAgICBpZiAoZmlyc3RGaWxsZWRJbnB1dEJsb2NrSW5kZXggPj0gMCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLl9ibG9ja1N0YXJ0UG9zKGZpcnN0RmlsbGVkSW5wdXRCbG9ja0luZGV4KSArIHRoaXMuX2Jsb2Nrc1tmaXJzdEZpbGxlZElucHV0QmxvY2tJbmRleF0udmFsdWUubGVuZ3RoO1xuICAgICAgICB9IC8vIGZvciBsYXp5IGlmIGhhcyBhbGlnbmVkIGxlZnQgaW5zaWRlIGZpeGVkIGFuZCBoYXMgY2FtZSB0byB0aGUgc3RhcnQgLSB1c2Ugc3RhcnQgcG9zaXRpb25cblxuXG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT09IERJUkVDVElPTi5GT1JDRV9MRUZUIHx8IHRoaXMubGF6eSAmJiAhdGhpcy5leHRyYWN0SW5wdXQoKSAmJiAhaXNJbnB1dCh0aGlzLl9ibG9ja3Nbc2VhcmNoQmxvY2tJbmRleF0pKSB7XG4gICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZmlyc3RFbXB0eUlucHV0QmxvY2tJbmRleCAhPSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX2Jsb2NrU3RhcnRQb3MoZmlyc3RFbXB0eUlucHV0QmxvY2tJbmRleCk7XG4gICAgICAgIH0gLy8gZmluZCBmaXJzdCBpbnB1dFxuXG5cbiAgICAgICAgZm9yICh2YXIgX2JpNSA9IHNlYXJjaEJsb2NrSW5kZXg7IF9iaTUgPCB0aGlzLl9ibG9ja3MubGVuZ3RoOyArK19iaTUpIHtcbiAgICAgICAgICB2YXIgX2Jsb2NrNiA9IHRoaXMuX2Jsb2Nrc1tfYmk1XTtcblxuICAgICAgICAgIHZhciBfYmxvY2tJbnB1dFBvczYgPSBfYmxvY2s2Lm5lYXJlc3RJbnB1dFBvcygwLCBESVJFQ1RJT04uTk9ORSk7IC8vIGlzIGlucHV0XG5cblxuICAgICAgICAgIGlmICghX2Jsb2NrNi52YWx1ZS5sZW5ndGggfHwgX2Jsb2NrSW5wdXRQb3M2ICE9PSBfYmxvY2s2LnZhbHVlLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2Jsb2NrU3RhcnRQb3MoX2JpNSkgKyBfYmxvY2tJbnB1dFBvczY7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgICB9XG5cbiAgICAgIGlmIChkaXJlY3Rpb24gPT09IERJUkVDVElPTi5SSUdIVCB8fCBkaXJlY3Rpb24gPT09IERJUkVDVElPTi5GT1JDRV9SSUdIVCkge1xuICAgICAgICAvLyAtPlxuICAgICAgICAvLyAgYW55fG5vdC1sZW4tYWxpZ25lZCBhbmQgZmlsbGVkXG4gICAgICAgIC8vICBhbnl8bm90LWxlbi1hbGlnbmVkXG4gICAgICAgIC8vIDwtXG4gICAgICAgIC8vICBub3QtMC1hbGlnbmVkIG9yIHN0YXJ0fGFueVxuICAgICAgICB2YXIgZmlyc3RJbnB1dEJsb2NrQWxpZ25lZEluZGV4O1xuICAgICAgICB2YXIgZmlyc3RJbnB1dEJsb2NrQWxpZ25lZFBvcztcblxuICAgICAgICBmb3IgKHZhciBfYmk2ID0gc2VhcmNoQmxvY2tJbmRleDsgX2JpNiA8IHRoaXMuX2Jsb2Nrcy5sZW5ndGg7ICsrX2JpNikge1xuICAgICAgICAgIHZhciBfYmxvY2s3ID0gdGhpcy5fYmxvY2tzW19iaTZdO1xuXG4gICAgICAgICAgdmFyIF9ibG9ja0lucHV0UG9zNyA9IF9ibG9jazcubmVhcmVzdElucHV0UG9zKDAsIERJUkVDVElPTi5OT05FKTtcblxuICAgICAgICAgIGlmIChfYmxvY2tJbnB1dFBvczcgIT09IF9ibG9jazcudmFsdWUubGVuZ3RoKSB7XG4gICAgICAgICAgICBmaXJzdElucHV0QmxvY2tBbGlnbmVkUG9zID0gdGhpcy5fYmxvY2tTdGFydFBvcyhfYmk2KSArIF9ibG9ja0lucHV0UG9zNztcbiAgICAgICAgICAgIGZpcnN0SW5wdXRCbG9ja0FsaWduZWRJbmRleCA9IF9iaTY7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZmlyc3RJbnB1dEJsb2NrQWxpZ25lZEluZGV4ICE9IG51bGwgJiYgZmlyc3RJbnB1dEJsb2NrQWxpZ25lZFBvcyAhPSBudWxsKSB7XG4gICAgICAgICAgZm9yICh2YXIgX2JpNyA9IGZpcnN0SW5wdXRCbG9ja0FsaWduZWRJbmRleDsgX2JpNyA8IHRoaXMuX2Jsb2Nrcy5sZW5ndGg7ICsrX2JpNykge1xuICAgICAgICAgICAgdmFyIF9ibG9jazggPSB0aGlzLl9ibG9ja3NbX2JpN107XG5cbiAgICAgICAgICAgIHZhciBfYmxvY2tJbnB1dFBvczggPSBfYmxvY2s4Lm5lYXJlc3RJbnB1dFBvcygwLCBESVJFQ1RJT04uRk9SQ0VfUklHSFQpO1xuXG4gICAgICAgICAgICBpZiAoX2Jsb2NrSW5wdXRQb3M4ICE9PSBfYmxvY2s4LnZhbHVlLmxlbmd0aCkge1xuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fYmxvY2tTdGFydFBvcyhfYmk3KSArIF9ibG9ja0lucHV0UG9zODtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gZGlyZWN0aW9uID09PSBESVJFQ1RJT04uRk9SQ0VfUklHSFQgPyB0aGlzLnZhbHVlLmxlbmd0aCA6IGZpcnN0SW5wdXRCbG9ja0FsaWduZWRQb3M7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHZhciBfYmk4ID0gTWF0aC5taW4oc2VhcmNoQmxvY2tJbmRleCwgdGhpcy5fYmxvY2tzLmxlbmd0aCAtIDEpOyBfYmk4ID49IDA7IC0tX2JpOCkge1xuICAgICAgICAgIHZhciBfYmxvY2s5ID0gdGhpcy5fYmxvY2tzW19iaThdO1xuXG4gICAgICAgICAgdmFyIF9ibG9ja0lucHV0UG9zOSA9IF9ibG9jazkubmVhcmVzdElucHV0UG9zKF9ibG9jazkudmFsdWUubGVuZ3RoLCBESVJFQ1RJT04uTEVGVCk7XG5cbiAgICAgICAgICBpZiAoX2Jsb2NrSW5wdXRQb3M5ICE9PSAwKSB7XG4gICAgICAgICAgICB2YXIgYWxpZ25lZFBvcyA9IHRoaXMuX2Jsb2NrU3RhcnRQb3MoX2JpOCkgKyBfYmxvY2tJbnB1dFBvczk7XG5cbiAgICAgICAgICAgIGlmIChhbGlnbmVkUG9zID49IGN1cnNvclBvcykgcmV0dXJuIGFsaWduZWRQb3M7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGN1cnNvclBvcztcbiAgICB9XG4gICAgLyoqIEdldCBibG9jayBieSBuYW1lICovXG5cbiAgfSwge1xuICAgIGtleTogXCJtYXNrZWRCbG9ja1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBtYXNrZWRCbG9jayhuYW1lKSB7XG4gICAgICByZXR1cm4gdGhpcy5tYXNrZWRCbG9ja3MobmFtZSlbMF07XG4gICAgfVxuICAgIC8qKiBHZXQgYWxsIGJsb2NrcyBieSBuYW1lICovXG5cbiAgfSwge1xuICAgIGtleTogXCJtYXNrZWRCbG9ja3NcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbWFza2VkQmxvY2tzKG5hbWUpIHtcbiAgICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgICB2YXIgaW5kaWNlcyA9IHRoaXMuX21hc2tlZEJsb2Nrc1tuYW1lXTtcbiAgICAgIGlmICghaW5kaWNlcykgcmV0dXJuIFtdO1xuICAgICAgcmV0dXJuIGluZGljZXMubWFwKGZ1bmN0aW9uIChnaSkge1xuICAgICAgICByZXR1cm4gX3RoaXM0Ll9ibG9ja3NbZ2ldO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInN0YXRlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgX2dldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkUGF0dGVybi5wcm90b3R5cGUpLCBcInN0YXRlXCIsIHRoaXMpLCB7XG4gICAgICAgIF9ibG9ja3M6IHRoaXMuX2Jsb2Nrcy5tYXAoZnVuY3Rpb24gKGIpIHtcbiAgICAgICAgICByZXR1cm4gYi5zdGF0ZTtcbiAgICAgICAgfSlcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQoc3RhdGUpIHtcbiAgICAgIHZhciBfYmxvY2tzID0gc3RhdGUuX2Jsb2NrcyxcbiAgICAgICAgICBtYXNrZWRTdGF0ZSA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhzdGF0ZSwgW1wiX2Jsb2Nrc1wiXSk7XG5cbiAgICAgIHRoaXMuX2Jsb2Nrcy5mb3JFYWNoKGZ1bmN0aW9uIChiLCBiaSkge1xuICAgICAgICByZXR1cm4gYi5zdGF0ZSA9IF9ibG9ja3NbYmldO1xuICAgICAgfSk7XG5cbiAgICAgIF9zZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZFBhdHRlcm4ucHJvdG90eXBlKSwgXCJzdGF0ZVwiLCBtYXNrZWRTdGF0ZSwgdGhpcywgdHJ1ZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImlzQ29tcGxldGVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9ibG9ja3MuZXZlcnkoZnVuY3Rpb24gKGIpIHtcbiAgICAgICAgcmV0dXJuIGIuaXNDb21wbGV0ZTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ1bm1hc2tlZFZhbHVlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fYmxvY2tzLnJlZHVjZShmdW5jdGlvbiAoc3RyLCBiKSB7XG4gICAgICAgIHJldHVybiBzdHIgKz0gYi51bm1hc2tlZFZhbHVlO1xuICAgICAgfSwgJycpO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQodW5tYXNrZWRWYWx1ZSkge1xuICAgICAgX3NldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkUGF0dGVybi5wcm90b3R5cGUpLCBcInVubWFza2VkVmFsdWVcIiwgdW5tYXNrZWRWYWx1ZSwgdGhpcywgdHJ1ZSk7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICBAb3ZlcnJpZGVcclxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJ2YWx1ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgLy8gVE9ETyByZXR1cm4gX3ZhbHVlIHdoZW4gbm90IGluIGNoYW5nZT9cbiAgICAgIHJldHVybiB0aGlzLl9ibG9ja3MucmVkdWNlKGZ1bmN0aW9uIChzdHIsIGIpIHtcbiAgICAgICAgcmV0dXJuIHN0ciArPSBiLnZhbHVlO1xuICAgICAgfSwgJycpO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsdWUpIHtcbiAgICAgIF9zZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZFBhdHRlcm4ucHJvdG90eXBlKSwgXCJ2YWx1ZVwiLCB2YWx1ZSwgdGhpcywgdHJ1ZSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIE1hc2tlZFBhdHRlcm47XG59KE1hc2tlZCk7XG5NYXNrZWRQYXR0ZXJuLkRFRkFVTFRTID0ge1xuICBsYXp5OiB0cnVlLFxuICBwbGFjZWhvbGRlckNoYXI6ICdfJ1xufTtcbk1hc2tlZFBhdHRlcm4uU1RPUF9DSEFSID0gJ2AnO1xuTWFza2VkUGF0dGVybi5FU0NBUEVfQ0hBUiA9ICdcXFxcJztcbk1hc2tlZFBhdHRlcm4uSW5wdXREZWZpbml0aW9uID0gUGF0dGVybklucHV0RGVmaW5pdGlvbjtcbk1hc2tlZFBhdHRlcm4uRml4ZWREZWZpbml0aW9uID0gUGF0dGVybkZpeGVkRGVmaW5pdGlvbjtcblxuZnVuY3Rpb24gaXNJbnB1dChibG9jaykge1xuICBpZiAoIWJsb2NrKSByZXR1cm4gZmFsc2U7XG4gIHZhciB2YWx1ZSA9IGJsb2NrLnZhbHVlO1xuICByZXR1cm4gIXZhbHVlIHx8IGJsb2NrLm5lYXJlc3RJbnB1dFBvcygwLCBESVJFQ1RJT04uTk9ORSkgIT09IHZhbHVlLmxlbmd0aDtcbn1cblxuLyoqIFBhdHRlcm4gd2hpY2ggYWNjZXB0cyByYW5nZXMgKi9cbnZhciBNYXNrZWRSYW5nZSA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoX01hc2tlZFBhdHRlcm4pIHtcbiAgX2luaGVyaXRzKE1hc2tlZFJhbmdlLCBfTWFza2VkUGF0dGVybik7XG5cbiAgZnVuY3Rpb24gTWFza2VkUmFuZ2UoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1hc2tlZFJhbmdlKTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfZ2V0UHJvdG90eXBlT2YoTWFza2VkUmFuZ2UpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKE1hc2tlZFJhbmdlLCBbe1xuICAgIGtleTogXCJfdXBkYXRlXCIsXG5cbiAgICAvKipcclxuICAgICAgQG92ZXJyaWRlXHJcbiAgICAqL1xuICAgIHZhbHVlOiBmdW5jdGlvbiBfdXBkYXRlKG9wdHMpIHtcbiAgICAgIC8vIFRPRE8gdHlwZVxuICAgICAgb3B0cyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgICB0bzogdGhpcy50byB8fCAwLFxuICAgICAgICBmcm9tOiB0aGlzLmZyb20gfHwgMFxuICAgICAgfSwgb3B0cyk7XG4gICAgICB2YXIgbWF4TGVuZ3RoID0gU3RyaW5nKG9wdHMudG8pLmxlbmd0aDtcbiAgICAgIGlmIChvcHRzLm1heExlbmd0aCAhPSBudWxsKSBtYXhMZW5ndGggPSBNYXRoLm1heChtYXhMZW5ndGgsIG9wdHMubWF4TGVuZ3RoKTtcbiAgICAgIG9wdHMubWF4TGVuZ3RoID0gbWF4TGVuZ3RoO1xuICAgICAgdmFyIGZyb21TdHIgPSBTdHJpbmcob3B0cy5mcm9tKS5wYWRTdGFydChtYXhMZW5ndGgsICcwJyk7XG4gICAgICB2YXIgdG9TdHIgPSBTdHJpbmcob3B0cy50bykucGFkU3RhcnQobWF4TGVuZ3RoLCAnMCcpO1xuICAgICAgdmFyIHNhbWVDaGFyc0NvdW50ID0gMDtcblxuICAgICAgd2hpbGUgKHNhbWVDaGFyc0NvdW50IDwgdG9TdHIubGVuZ3RoICYmIHRvU3RyW3NhbWVDaGFyc0NvdW50XSA9PT0gZnJvbVN0cltzYW1lQ2hhcnNDb3VudF0pIHtcbiAgICAgICAgKytzYW1lQ2hhcnNDb3VudDtcbiAgICAgIH1cblxuICAgICAgb3B0cy5tYXNrID0gdG9TdHIuc2xpY2UoMCwgc2FtZUNoYXJzQ291bnQpLnJlcGxhY2UoLzAvZywgJ1xcXFwwJykgKyAnMCcucmVwZWF0KG1heExlbmd0aCAtIHNhbWVDaGFyc0NvdW50KTtcblxuICAgICAgX2dldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkUmFuZ2UucHJvdG90eXBlKSwgXCJfdXBkYXRlXCIsIHRoaXMpLmNhbGwodGhpcywgb3B0cyk7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICBAb3ZlcnJpZGVcclxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJib3VuZGFyaWVzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGJvdW5kYXJpZXMoc3RyKSB7XG4gICAgICB2YXIgbWluc3RyID0gJyc7XG4gICAgICB2YXIgbWF4c3RyID0gJyc7XG5cbiAgICAgIHZhciBfcmVmID0gc3RyLm1hdGNoKC9eKFxcRCopKFxcZCopKFxcRCopLykgfHwgW10sXG4gICAgICAgICAgX3JlZjIgPSBfc2xpY2VkVG9BcnJheShfcmVmLCAzKSxcbiAgICAgICAgICBwbGFjZWhvbGRlciA9IF9yZWYyWzFdLFxuICAgICAgICAgIG51bSA9IF9yZWYyWzJdO1xuXG4gICAgICBpZiAobnVtKSB7XG4gICAgICAgIG1pbnN0ciA9ICcwJy5yZXBlYXQocGxhY2Vob2xkZXIubGVuZ3RoKSArIG51bTtcbiAgICAgICAgbWF4c3RyID0gJzknLnJlcGVhdChwbGFjZWhvbGRlci5sZW5ndGgpICsgbnVtO1xuICAgICAgfVxuXG4gICAgICBtaW5zdHIgPSBtaW5zdHIucGFkRW5kKHRoaXMubWF4TGVuZ3RoLCAnMCcpO1xuICAgICAgbWF4c3RyID0gbWF4c3RyLnBhZEVuZCh0aGlzLm1heExlbmd0aCwgJzknKTtcbiAgICAgIHJldHVybiBbbWluc3RyLCBtYXhzdHJdO1xuICAgIH1cbiAgICAvKipcclxuICAgICAgQG92ZXJyaWRlXHJcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZG9QcmVwYXJlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRvUHJlcGFyZShzdHIpIHtcbiAgICAgIHZhciBmbGFncyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgICBzdHIgPSBfZ2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWRSYW5nZS5wcm90b3R5cGUpLCBcImRvUHJlcGFyZVwiLCB0aGlzKS5jYWxsKHRoaXMsIHN0ciwgZmxhZ3MpLnJlcGxhY2UoL1xcRC9nLCAnJyk7XG4gICAgICBpZiAoIXRoaXMuYXV0b2ZpeCkgcmV0dXJuIHN0cjtcbiAgICAgIHZhciBmcm9tU3RyID0gU3RyaW5nKHRoaXMuZnJvbSkucGFkU3RhcnQodGhpcy5tYXhMZW5ndGgsICcwJyk7XG4gICAgICB2YXIgdG9TdHIgPSBTdHJpbmcodGhpcy50bykucGFkU3RhcnQodGhpcy5tYXhMZW5ndGgsICcwJyk7XG4gICAgICB2YXIgdmFsID0gdGhpcy52YWx1ZTtcbiAgICAgIHZhciBwcmVwU3RyID0gJyc7XG5cbiAgICAgIGZvciAodmFyIGNpID0gMDsgY2kgPCBzdHIubGVuZ3RoOyArK2NpKSB7XG4gICAgICAgIHZhciBuZXh0VmFsID0gdmFsICsgcHJlcFN0ciArIHN0cltjaV07XG5cbiAgICAgICAgdmFyIF90aGlzJGJvdW5kYXJpZXMgPSB0aGlzLmJvdW5kYXJpZXMobmV4dFZhbCksXG4gICAgICAgICAgICBfdGhpcyRib3VuZGFyaWVzMiA9IF9zbGljZWRUb0FycmF5KF90aGlzJGJvdW5kYXJpZXMsIDIpLFxuICAgICAgICAgICAgbWluc3RyID0gX3RoaXMkYm91bmRhcmllczJbMF0sXG4gICAgICAgICAgICBtYXhzdHIgPSBfdGhpcyRib3VuZGFyaWVzMlsxXTtcblxuICAgICAgICBpZiAoTnVtYmVyKG1heHN0cikgPCB0aGlzLmZyb20pIHByZXBTdHIgKz0gZnJvbVN0cltuZXh0VmFsLmxlbmd0aCAtIDFdO2Vsc2UgaWYgKE51bWJlcihtaW5zdHIpID4gdGhpcy50bykgcHJlcFN0ciArPSB0b1N0cltuZXh0VmFsLmxlbmd0aCAtIDFdO2Vsc2UgcHJlcFN0ciArPSBzdHJbY2ldO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJlcFN0cjtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgIEBvdmVycmlkZVxyXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImRvVmFsaWRhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZG9WYWxpZGF0ZSgpIHtcbiAgICAgIHZhciBfZ2V0MjtcblxuICAgICAgdmFyIHN0ciA9IHRoaXMudmFsdWU7XG4gICAgICB2YXIgZmlyc3ROb25aZXJvID0gc3RyLnNlYXJjaCgvW14wXS8pO1xuICAgICAgaWYgKGZpcnN0Tm9uWmVybyA9PT0gLTEgJiYgc3RyLmxlbmd0aCA8PSB0aGlzLl9tYXRjaEZyb20pIHJldHVybiB0cnVlO1xuXG4gICAgICB2YXIgX3RoaXMkYm91bmRhcmllczMgPSB0aGlzLmJvdW5kYXJpZXMoc3RyKSxcbiAgICAgICAgICBfdGhpcyRib3VuZGFyaWVzNCA9IF9zbGljZWRUb0FycmF5KF90aGlzJGJvdW5kYXJpZXMzLCAyKSxcbiAgICAgICAgICBtaW5zdHIgPSBfdGhpcyRib3VuZGFyaWVzNFswXSxcbiAgICAgICAgICBtYXhzdHIgPSBfdGhpcyRib3VuZGFyaWVzNFsxXTtcblxuICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmZyb20gPD0gTnVtYmVyKG1heHN0cikgJiYgTnVtYmVyKG1pbnN0cikgPD0gdGhpcy50byAmJiAoX2dldDIgPSBfZ2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWRSYW5nZS5wcm90b3R5cGUpLCBcImRvVmFsaWRhdGVcIiwgdGhpcykpLmNhbGwuYXBwbHkoX2dldDIsIFt0aGlzXS5jb25jYXQoYXJncykpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJfbWF0Y2hGcm9tXCIsXG5cbiAgICAvKipcclxuICAgICAgT3B0aW9uYWxseSBzZXRzIG1heCBsZW5ndGggb2YgcGF0dGVybi5cclxuICAgICAgVXNlZCB3aGVuIHBhdHRlcm4gbGVuZ3RoIGlzIGxvbmdlciB0aGVuIGB0b2AgcGFyYW0gbGVuZ3RoLiBQYWRzIHplcm9zIGF0IHN0YXJ0IGluIHRoaXMgY2FzZS5cclxuICAgICovXG5cbiAgICAvKiogTWluIGJvdW5kICovXG5cbiAgICAvKiogTWF4IGJvdW5kICovXG5cbiAgICAvKiogKi9cbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLm1heExlbmd0aCAtIFN0cmluZyh0aGlzLmZyb20pLmxlbmd0aDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaXNDb21wbGV0ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIF9nZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZFJhbmdlLnByb3RvdHlwZSksIFwiaXNDb21wbGV0ZVwiLCB0aGlzKSAmJiBCb29sZWFuKHRoaXMudmFsdWUpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBNYXNrZWRSYW5nZTtcbn0oTWFza2VkUGF0dGVybik7XG5cbi8qKiBEYXRlIG1hc2sgKi9cblxudmFyIE1hc2tlZERhdGUgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9NYXNrZWRQYXR0ZXJuKSB7XG4gIF9pbmhlcml0cyhNYXNrZWREYXRlLCBfTWFza2VkUGF0dGVybik7XG5cbiAgLyoqIFBhcnNlIHN0cmluZyB0byBEYXRlICovXG5cbiAgLyoqIEZvcm1hdCBEYXRlIHRvIHN0cmluZyAqL1xuXG4gIC8qKiBQYXR0ZXJuIG1hc2sgZm9yIGRhdGUgYWNjb3JkaW5nIHRvIHtAbGluayBNYXNrZWREYXRlI2Zvcm1hdH0gKi9cblxuICAvKiogU3RhcnQgZGF0ZSAqL1xuXG4gIC8qKiBFbmQgZGF0ZSAqL1xuXG4gIC8qKiAqL1xuXG4gIC8qKlxyXG4gICAgQHBhcmFtIHtPYmplY3R9IG9wdHNcclxuICAqL1xuICBmdW5jdGlvbiBNYXNrZWREYXRlKG9wdHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTWFza2VkRGF0ZSk7XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX2dldFByb3RvdHlwZU9mKE1hc2tlZERhdGUpLmNhbGwodGhpcywgT2JqZWN0LmFzc2lnbih7fSwgTWFza2VkRGF0ZS5ERUZBVUxUUywge30sIG9wdHMpKSk7XG4gIH1cbiAgLyoqXHJcbiAgICBAb3ZlcnJpZGVcclxuICAqL1xuXG5cbiAgX2NyZWF0ZUNsYXNzKE1hc2tlZERhdGUsIFt7XG4gICAga2V5OiBcIl91cGRhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX3VwZGF0ZShvcHRzKSB7XG4gICAgICBpZiAob3B0cy5tYXNrID09PSBEYXRlKSBkZWxldGUgb3B0cy5tYXNrO1xuICAgICAgaWYgKG9wdHMucGF0dGVybikgb3B0cy5tYXNrID0gb3B0cy5wYXR0ZXJuO1xuICAgICAgdmFyIGJsb2NrcyA9IG9wdHMuYmxvY2tzO1xuICAgICAgb3B0cy5ibG9ja3MgPSBPYmplY3QuYXNzaWduKHt9LCBNYXNrZWREYXRlLkdFVF9ERUZBVUxUX0JMT0NLUygpKTsgLy8gYWRqdXN0IHllYXIgYmxvY2tcblxuICAgICAgaWYgKG9wdHMubWluKSBvcHRzLmJsb2Nrcy5ZLmZyb20gPSBvcHRzLm1pbi5nZXRGdWxsWWVhcigpO1xuICAgICAgaWYgKG9wdHMubWF4KSBvcHRzLmJsb2Nrcy5ZLnRvID0gb3B0cy5tYXguZ2V0RnVsbFllYXIoKTtcblxuICAgICAgaWYgKG9wdHMubWluICYmIG9wdHMubWF4ICYmIG9wdHMuYmxvY2tzLlkuZnJvbSA9PT0gb3B0cy5ibG9ja3MuWS50bykge1xuICAgICAgICBvcHRzLmJsb2Nrcy5tLmZyb20gPSBvcHRzLm1pbi5nZXRNb250aCgpICsgMTtcbiAgICAgICAgb3B0cy5ibG9ja3MubS50byA9IG9wdHMubWF4LmdldE1vbnRoKCkgKyAxO1xuXG4gICAgICAgIGlmIChvcHRzLmJsb2Nrcy5tLmZyb20gPT09IG9wdHMuYmxvY2tzLm0udG8pIHtcbiAgICAgICAgICBvcHRzLmJsb2Nrcy5kLmZyb20gPSBvcHRzLm1pbi5nZXREYXRlKCk7XG4gICAgICAgICAgb3B0cy5ibG9ja3MuZC50byA9IG9wdHMubWF4LmdldERhdGUoKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBPYmplY3QuYXNzaWduKG9wdHMuYmxvY2tzLCBibG9ja3MpOyAvLyBhZGQgYXV0b2ZpeFxuXG4gICAgICBPYmplY3Qua2V5cyhvcHRzLmJsb2NrcykuZm9yRWFjaChmdW5jdGlvbiAoYmspIHtcbiAgICAgICAgdmFyIGIgPSBvcHRzLmJsb2Nrc1tia107XG4gICAgICAgIGlmICghKCdhdXRvZml4JyBpbiBiKSkgYi5hdXRvZml4ID0gb3B0cy5hdXRvZml4O1xuICAgICAgfSk7XG5cbiAgICAgIF9nZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZERhdGUucHJvdG90eXBlKSwgXCJfdXBkYXRlXCIsIHRoaXMpLmNhbGwodGhpcywgb3B0cyk7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICBAb3ZlcnJpZGVcclxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJkb1ZhbGlkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRvVmFsaWRhdGUoKSB7XG4gICAgICB2YXIgX2dldDI7XG5cbiAgICAgIHZhciBkYXRlID0gdGhpcy5kYXRlO1xuXG4gICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIChfZ2V0MiA9IF9nZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZERhdGUucHJvdG90eXBlKSwgXCJkb1ZhbGlkYXRlXCIsIHRoaXMpKS5jYWxsLmFwcGx5KF9nZXQyLCBbdGhpc10uY29uY2F0KGFyZ3MpKSAmJiAoIXRoaXMuaXNDb21wbGV0ZSB8fCB0aGlzLmlzRGF0ZUV4aXN0KHRoaXMudmFsdWUpICYmIGRhdGUgIT0gbnVsbCAmJiAodGhpcy5taW4gPT0gbnVsbCB8fCB0aGlzLm1pbiA8PSBkYXRlKSAmJiAodGhpcy5tYXggPT0gbnVsbCB8fCBkYXRlIDw9IHRoaXMubWF4KSk7XG4gICAgfVxuICAgIC8qKiBDaGVja3MgaWYgZGF0ZSBpcyBleGlzdHMgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImlzRGF0ZUV4aXN0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGlzRGF0ZUV4aXN0KHN0cikge1xuICAgICAgcmV0dXJuIHRoaXMuZm9ybWF0KHRoaXMucGFyc2Uoc3RyKSkgPT09IHN0cjtcbiAgICB9XG4gICAgLyoqIFBhcnNlZCBEYXRlICovXG5cbiAgfSwge1xuICAgIGtleTogXCJkYXRlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pc0NvbXBsZXRlID8gdGhpcy5wYXJzZSh0aGlzLnZhbHVlKSA6IG51bGw7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldChkYXRlKSB7XG4gICAgICB0aGlzLnZhbHVlID0gdGhpcy5mb3JtYXQoZGF0ZSk7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICBAb3ZlcnJpZGVcclxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJ0eXBlZFZhbHVlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5kYXRlO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsdWUpIHtcbiAgICAgIHRoaXMuZGF0ZSA9IHZhbHVlO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBNYXNrZWREYXRlO1xufShNYXNrZWRQYXR0ZXJuKTtcbk1hc2tlZERhdGUuREVGQVVMVFMgPSB7XG4gIHBhdHRlcm46ICdkey59YG17Ln1gWScsXG4gIGZvcm1hdDogZnVuY3Rpb24gZm9ybWF0KGRhdGUpIHtcbiAgICB2YXIgZGF5ID0gU3RyaW5nKGRhdGUuZ2V0RGF0ZSgpKS5wYWRTdGFydCgyLCAnMCcpO1xuICAgIHZhciBtb250aCA9IFN0cmluZyhkYXRlLmdldE1vbnRoKCkgKyAxKS5wYWRTdGFydCgyLCAnMCcpO1xuICAgIHZhciB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgIHJldHVybiBbZGF5LCBtb250aCwgeWVhcl0uam9pbignLicpO1xuICB9LFxuICBwYXJzZTogZnVuY3Rpb24gcGFyc2Uoc3RyKSB7XG4gICAgdmFyIF9zdHIkc3BsaXQgPSBzdHIuc3BsaXQoJy4nKSxcbiAgICAgICAgX3N0ciRzcGxpdDIgPSBfc2xpY2VkVG9BcnJheShfc3RyJHNwbGl0LCAzKSxcbiAgICAgICAgZGF5ID0gX3N0ciRzcGxpdDJbMF0sXG4gICAgICAgIG1vbnRoID0gX3N0ciRzcGxpdDJbMV0sXG4gICAgICAgIHllYXIgPSBfc3RyJHNwbGl0MlsyXTtcblxuICAgIHJldHVybiBuZXcgRGF0ZSh5ZWFyLCBtb250aCAtIDEsIGRheSk7XG4gIH1cbn07XG5cbk1hc2tlZERhdGUuR0VUX0RFRkFVTFRfQkxPQ0tTID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4ge1xuICAgIGQ6IHtcbiAgICAgIG1hc2s6IE1hc2tlZFJhbmdlLFxuICAgICAgZnJvbTogMSxcbiAgICAgIHRvOiAzMSxcbiAgICAgIG1heExlbmd0aDogMlxuICAgIH0sXG4gICAgbToge1xuICAgICAgbWFzazogTWFza2VkUmFuZ2UsXG4gICAgICBmcm9tOiAxLFxuICAgICAgdG86IDEyLFxuICAgICAgbWF4TGVuZ3RoOiAyXG4gICAgfSxcbiAgICBZOiB7XG4gICAgICBtYXNrOiBNYXNrZWRSYW5nZSxcbiAgICAgIGZyb206IDE5MDAsXG4gICAgICB0bzogOTk5OVxuICAgIH1cbiAgfTtcbn07XG5cbi8qKlxyXG4gIEdlbmVyaWMgZWxlbWVudCBBUEkgdG8gdXNlIHdpdGggbWFza1xyXG4gIEBpbnRlcmZhY2VcclxuKi9cbnZhciBNYXNrRWxlbWVudCA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIE1hc2tFbGVtZW50KCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNYXNrRWxlbWVudCk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoTWFza0VsZW1lbnQsIFt7XG4gICAga2V5OiBcInNlbGVjdFwiLFxuXG4gICAgLyoqIFNhZmVseSBzZXRzIGVsZW1lbnQgc2VsZWN0aW9uICovXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNlbGVjdChzdGFydCwgZW5kKSB7XG4gICAgICBpZiAoc3RhcnQgPT0gbnVsbCB8fCBlbmQgPT0gbnVsbCB8fCBzdGFydCA9PT0gdGhpcy5zZWxlY3Rpb25TdGFydCAmJiBlbmQgPT09IHRoaXMuc2VsZWN0aW9uRW5kKSByZXR1cm47XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXMuX3Vuc2FmZVNlbGVjdChzdGFydCwgZW5kKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgfVxuICAgIC8qKiBTaG91bGQgYmUgb3ZlcnJpZGVuIGluIHN1YmNsYXNzZXMgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIl91bnNhZmVTZWxlY3RcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX3Vuc2FmZVNlbGVjdChzdGFydCwgZW5kKSB7fVxuICAgIC8qKiBTaG91bGQgYmUgb3ZlcnJpZGVuIGluIHN1YmNsYXNzZXMgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImJpbmRFdmVudHNcIixcblxuICAgIC8qKiBTaG91bGQgYmUgb3ZlcnJpZGVuIGluIHN1YmNsYXNzZXMgKi9cbiAgICB2YWx1ZTogZnVuY3Rpb24gYmluZEV2ZW50cyhoYW5kbGVycykge31cbiAgICAvKiogU2hvdWxkIGJlIG92ZXJyaWRlbiBpbiBzdWJjbGFzc2VzICovXG5cbiAgfSwge1xuICAgIGtleTogXCJ1bmJpbmRFdmVudHNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdW5iaW5kRXZlbnRzKCkge31cbiAgfSwge1xuICAgIGtleTogXCJzZWxlY3Rpb25TdGFydFwiLFxuXG4gICAgLyoqICovXG5cbiAgICAvKiogKi9cblxuICAgIC8qKiAqL1xuXG4gICAgLyoqIFNhZmVseSByZXR1cm5zIHNlbGVjdGlvbiBzdGFydCAqL1xuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgdmFyIHN0YXJ0O1xuXG4gICAgICB0cnkge1xuICAgICAgICBzdGFydCA9IHRoaXMuX3Vuc2FmZVNlbGVjdGlvblN0YXJ0O1xuICAgICAgfSBjYXRjaCAoZSkge31cblxuICAgICAgcmV0dXJuIHN0YXJ0ICE9IG51bGwgPyBzdGFydCA6IHRoaXMudmFsdWUubGVuZ3RoO1xuICAgIH1cbiAgICAvKiogU2FmZWx5IHJldHVybnMgc2VsZWN0aW9uIGVuZCAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwic2VsZWN0aW9uRW5kXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICB2YXIgZW5kO1xuXG4gICAgICB0cnkge1xuICAgICAgICBlbmQgPSB0aGlzLl91bnNhZmVTZWxlY3Rpb25FbmQ7XG4gICAgICB9IGNhdGNoIChlKSB7fVxuXG4gICAgICByZXR1cm4gZW5kICE9IG51bGwgPyBlbmQgOiB0aGlzLnZhbHVlLmxlbmd0aDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaXNBY3RpdmVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gTWFza0VsZW1lbnQ7XG59KCk7XG5cbi8qKiBCcmlkZ2UgYmV0d2VlbiBIVE1MRWxlbWVudCBhbmQge0BsaW5rIE1hc2tlZH0gKi9cblxudmFyIEhUTUxNYXNrRWxlbWVudCA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoX01hc2tFbGVtZW50KSB7XG4gIF9pbmhlcml0cyhIVE1MTWFza0VsZW1lbnQsIF9NYXNrRWxlbWVudCk7XG5cbiAgLyoqIE1hcHBpbmcgYmV0d2VlbiBIVE1MRWxlbWVudCBldmVudHMgYW5kIG1hc2sgaW50ZXJuYWwgZXZlbnRzICovXG5cbiAgLyoqIEhUTUxFbGVtZW50IHRvIHVzZSBtYXNrIG9uICovXG5cbiAgLyoqXHJcbiAgICBAcGFyYW0ge0hUTUxJbnB1dEVsZW1lbnR8SFRNTFRleHRBcmVhRWxlbWVudH0gaW5wdXRcclxuICAqL1xuICBmdW5jdGlvbiBIVE1MTWFza0VsZW1lbnQoaW5wdXQpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSFRNTE1hc2tFbGVtZW50KTtcblxuICAgIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX2dldFByb3RvdHlwZU9mKEhUTUxNYXNrRWxlbWVudCkuY2FsbCh0aGlzKSk7XG4gICAgX3RoaXMuaW5wdXQgPSBpbnB1dDtcbiAgICBfdGhpcy5faGFuZGxlcnMgPSB7fTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cbiAgLyoqXHJcbiAgICBJcyBlbGVtZW50IGluIGZvY3VzXHJcbiAgICBAcmVhZG9ubHlcclxuICAqL1xuXG5cbiAgX2NyZWF0ZUNsYXNzKEhUTUxNYXNrRWxlbWVudCwgW3tcbiAgICBrZXk6IFwiX3Vuc2FmZVNlbGVjdFwiLFxuXG4gICAgLyoqXHJcbiAgICAgIFNldHMgSFRNTEVsZW1lbnQgc2VsZWN0aW9uXHJcbiAgICAgIEBvdmVycmlkZVxyXG4gICAgKi9cbiAgICB2YWx1ZTogZnVuY3Rpb24gX3Vuc2FmZVNlbGVjdChzdGFydCwgZW5kKSB7XG4gICAgICB0aGlzLmlucHV0LnNldFNlbGVjdGlvblJhbmdlKHN0YXJ0LCBlbmQpO1xuICAgIH1cbiAgICAvKipcclxuICAgICAgSFRNTEVsZW1lbnQgdmFsdWVcclxuICAgICAgQG92ZXJyaWRlXHJcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiYmluZEV2ZW50c1wiLFxuXG4gICAgLyoqXHJcbiAgICAgIEJpbmRzIEhUTUxFbGVtZW50IGV2ZW50cyB0byBtYXNrIGludGVybmFsIGV2ZW50c1xyXG4gICAgICBAb3ZlcnJpZGVcclxuICAgICovXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGJpbmRFdmVudHMoaGFuZGxlcnMpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICBPYmplY3Qua2V5cyhoYW5kbGVycykuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzMi5fdG9nZ2xlRXZlbnRIYW5kbGVyKEhUTUxNYXNrRWxlbWVudC5FVkVOVFNfTUFQW2V2ZW50XSwgaGFuZGxlcnNbZXZlbnRdKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcclxuICAgICAgVW5iaW5kcyBIVE1MRWxlbWVudCBldmVudHMgdG8gbWFzayBpbnRlcm5hbCBldmVudHNcclxuICAgICAgQG92ZXJyaWRlXHJcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwidW5iaW5kRXZlbnRzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVuYmluZEV2ZW50cygpIHtcbiAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICBPYmplY3Qua2V5cyh0aGlzLl9oYW5kbGVycykuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzMy5fdG9nZ2xlRXZlbnRIYW5kbGVyKGV2ZW50KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvKiogKi9cblxuICB9LCB7XG4gICAga2V5OiBcIl90b2dnbGVFdmVudEhhbmRsZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX3RvZ2dsZUV2ZW50SGFuZGxlcihldmVudCwgaGFuZGxlcikge1xuICAgICAgaWYgKHRoaXMuX2hhbmRsZXJzW2V2ZW50XSkge1xuICAgICAgICB0aGlzLmlucHV0LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIHRoaXMuX2hhbmRsZXJzW2V2ZW50XSk7XG4gICAgICAgIGRlbGV0ZSB0aGlzLl9oYW5kbGVyc1tldmVudF07XG4gICAgICB9XG5cbiAgICAgIGlmIChoYW5kbGVyKSB7XG4gICAgICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlcik7XG4gICAgICAgIHRoaXMuX2hhbmRsZXJzW2V2ZW50XSA9IGhhbmRsZXI7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImlzQWN0aXZlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pbnB1dCA9PT0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgIFJldHVybnMgSFRNTEVsZW1lbnQgc2VsZWN0aW9uIHN0YXJ0XHJcbiAgICAgIEBvdmVycmlkZVxyXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIl91bnNhZmVTZWxlY3Rpb25TdGFydFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuaW5wdXQuc2VsZWN0aW9uU3RhcnQ7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICBSZXR1cm5zIEhUTUxFbGVtZW50IHNlbGVjdGlvbiBlbmRcclxuICAgICAgQG92ZXJyaWRlXHJcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiX3Vuc2FmZVNlbGVjdGlvbkVuZFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuaW5wdXQuc2VsZWN0aW9uRW5kO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ2YWx1ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuaW5wdXQudmFsdWU7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2YWx1ZSkge1xuICAgICAgdGhpcy5pbnB1dC52YWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBIVE1MTWFza0VsZW1lbnQ7XG59KE1hc2tFbGVtZW50KTtcbkhUTUxNYXNrRWxlbWVudC5FVkVOVFNfTUFQID0ge1xuICBzZWxlY3Rpb25DaGFuZ2U6ICdrZXlkb3duJyxcbiAgaW5wdXQ6ICdpbnB1dCcsXG4gIGRyb3A6ICdkcm9wJyxcbiAgY2xpY2s6ICdjbGljaycsXG4gIGZvY3VzOiAnZm9jdXMnLFxuICBjb21taXQ6ICdibHVyJ1xufTtcblxuLyoqIExpc3RlbnMgdG8gZWxlbWVudCBldmVudHMgYW5kIGNvbnRyb2xzIGNoYW5nZXMgYmV0d2VlbiBlbGVtZW50IGFuZCB7QGxpbmsgTWFza2VkfSAqL1xuXG52YXIgSW5wdXRNYXNrID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgLyoqXHJcbiAgICBWaWV3IGVsZW1lbnRcclxuICAgIEByZWFkb25seVxyXG4gICovXG5cbiAgLyoqXHJcbiAgICBJbnRlcm5hbCB7QGxpbmsgTWFza2VkfSBtb2RlbFxyXG4gICAgQHJlYWRvbmx5XHJcbiAgKi9cblxuICAvKipcclxuICAgIEBwYXJhbSB7TWFza0VsZW1lbnR8SFRNTElucHV0RWxlbWVudHxIVE1MVGV4dEFyZWFFbGVtZW50fSBlbFxyXG4gICAgQHBhcmFtIHtPYmplY3R9IG9wdHNcclxuICAqL1xuICBmdW5jdGlvbiBJbnB1dE1hc2soZWwsIG9wdHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSW5wdXRNYXNrKTtcblxuICAgIHRoaXMuZWwgPSBlbCBpbnN0YW5jZW9mIE1hc2tFbGVtZW50ID8gZWwgOiBuZXcgSFRNTE1hc2tFbGVtZW50KGVsKTtcbiAgICB0aGlzLm1hc2tlZCA9IGNyZWF0ZU1hc2sob3B0cyk7XG4gICAgdGhpcy5fbGlzdGVuZXJzID0ge307XG4gICAgdGhpcy5fdmFsdWUgPSAnJztcbiAgICB0aGlzLl91bm1hc2tlZFZhbHVlID0gJyc7XG4gICAgdGhpcy5fc2F2ZVNlbGVjdGlvbiA9IHRoaXMuX3NhdmVTZWxlY3Rpb24uYmluZCh0aGlzKTtcbiAgICB0aGlzLl9vbklucHV0ID0gdGhpcy5fb25JbnB1dC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX29uQ2hhbmdlID0gdGhpcy5fb25DaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9vbkRyb3AgPSB0aGlzLl9vbkRyb3AuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9vbkZvY3VzID0gdGhpcy5fb25Gb2N1cy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuYWxpZ25DdXJzb3IgPSB0aGlzLmFsaWduQ3Vyc29yLmJpbmQodGhpcyk7XG4gICAgdGhpcy5hbGlnbkN1cnNvckZyaWVuZGx5ID0gdGhpcy5hbGlnbkN1cnNvckZyaWVuZGx5LmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLl9iaW5kRXZlbnRzKCk7IC8vIHJlZnJlc2hcblxuXG4gICAgdGhpcy51cGRhdGVWYWx1ZSgpO1xuXG4gICAgdGhpcy5fb25DaGFuZ2UoKTtcbiAgfVxuICAvKiogUmVhZCBvciB1cGRhdGUgbWFzayAqL1xuXG5cbiAgX2NyZWF0ZUNsYXNzKElucHV0TWFzaywgW3tcbiAgICBrZXk6IFwibWFza0VxdWFsc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBtYXNrRXF1YWxzKG1hc2spIHtcbiAgICAgIHJldHVybiBtYXNrID09IG51bGwgfHwgbWFzayA9PT0gdGhpcy5tYXNrZWQubWFzayB8fCBtYXNrID09PSBEYXRlICYmIHRoaXMubWFza2VkIGluc3RhbmNlb2YgTWFza2VkRGF0ZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiX2JpbmRFdmVudHNcIixcblxuICAgIC8qKlxyXG4gICAgICBTdGFydHMgbGlzdGVuaW5nIHRvIGVsZW1lbnQgZXZlbnRzXHJcbiAgICAgIEBwcm90ZWN0ZWRcclxuICAgICovXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9iaW5kRXZlbnRzKCkge1xuICAgICAgdGhpcy5lbC5iaW5kRXZlbnRzKHtcbiAgICAgICAgc2VsZWN0aW9uQ2hhbmdlOiB0aGlzLl9zYXZlU2VsZWN0aW9uLFxuICAgICAgICBpbnB1dDogdGhpcy5fb25JbnB1dCxcbiAgICAgICAgZHJvcDogdGhpcy5fb25Ecm9wLFxuICAgICAgICBjbGljazogdGhpcy5hbGlnbkN1cnNvckZyaWVuZGx5LFxuICAgICAgICBmb2N1czogdGhpcy5fb25Gb2N1cyxcbiAgICAgICAgY29tbWl0OiB0aGlzLl9vbkNoYW5nZVxuICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICBTdG9wcyBsaXN0ZW5pbmcgdG8gZWxlbWVudCBldmVudHNcclxuICAgICAgQHByb3RlY3RlZFxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJfdW5iaW5kRXZlbnRzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF91bmJpbmRFdmVudHMoKSB7XG4gICAgICB0aGlzLmVsLnVuYmluZEV2ZW50cygpO1xuICAgIH1cbiAgICAvKipcclxuICAgICAgRmlyZXMgY3VzdG9tIGV2ZW50XHJcbiAgICAgIEBwcm90ZWN0ZWRcclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiX2ZpcmVFdmVudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfZmlyZUV2ZW50KGV2KSB7XG4gICAgICB2YXIgbGlzdGVuZXJzID0gdGhpcy5fbGlzdGVuZXJzW2V2XTtcbiAgICAgIGlmICghbGlzdGVuZXJzKSByZXR1cm47XG4gICAgICBsaXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbiAobCkge1xuICAgICAgICByZXR1cm4gbCgpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICBDdXJyZW50IHNlbGVjdGlvbiBzdGFydFxyXG4gICAgICBAcmVhZG9ubHlcclxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJfc2F2ZVNlbGVjdGlvblwiLFxuXG4gICAgLyoqXHJcbiAgICAgIFN0b3JlcyBjdXJyZW50IHNlbGVjdGlvblxyXG4gICAgICBAcHJvdGVjdGVkXHJcbiAgICAqL1xuICAgIHZhbHVlOiBmdW5jdGlvbiBfc2F2ZVNlbGVjdGlvbigpXG4gICAgLyogZXYgKi9cbiAgICB7XG4gICAgICBpZiAodGhpcy52YWx1ZSAhPT0gdGhpcy5lbC52YWx1ZSkge1xuICAgICAgICBjb25zb2xlLndhcm4oJ0VsZW1lbnQgdmFsdWUgd2FzIGNoYW5nZWQgb3V0c2lkZSBvZiBtYXNrLiBTeW5jcm9uaXplIG1hc2sgdXNpbmcgYG1hc2sudXBkYXRlVmFsdWUoKWAgdG8gd29yayBwcm9wZXJseS4nKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3NlbGVjdGlvbiA9IHtcbiAgICAgICAgc3RhcnQ6IHRoaXMuc2VsZWN0aW9uU3RhcnQsXG4gICAgICAgIGVuZDogdGhpcy5jdXJzb3JQb3NcbiAgICAgIH07XG4gICAgfVxuICAgIC8qKiBTeW5jcm9uaXplcyBtb2RlbCB2YWx1ZSBmcm9tIHZpZXcgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInVwZGF0ZVZhbHVlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZVZhbHVlKCkge1xuICAgICAgdGhpcy5tYXNrZWQudmFsdWUgPSB0aGlzLmVsLnZhbHVlO1xuICAgICAgdGhpcy5fdmFsdWUgPSB0aGlzLm1hc2tlZC52YWx1ZTtcbiAgICB9XG4gICAgLyoqIFN5bmNyb25pemVzIHZpZXcgZnJvbSBtb2RlbCB2YWx1ZSwgZmlyZXMgY2hhbmdlIGV2ZW50cyAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwidXBkYXRlQ29udHJvbFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB1cGRhdGVDb250cm9sKCkge1xuICAgICAgdmFyIG5ld1VubWFza2VkVmFsdWUgPSB0aGlzLm1hc2tlZC51bm1hc2tlZFZhbHVlO1xuICAgICAgdmFyIG5ld1ZhbHVlID0gdGhpcy5tYXNrZWQudmFsdWU7XG4gICAgICB2YXIgaXNDaGFuZ2VkID0gdGhpcy51bm1hc2tlZFZhbHVlICE9PSBuZXdVbm1hc2tlZFZhbHVlIHx8IHRoaXMudmFsdWUgIT09IG5ld1ZhbHVlO1xuICAgICAgdGhpcy5fdW5tYXNrZWRWYWx1ZSA9IG5ld1VubWFza2VkVmFsdWU7XG4gICAgICB0aGlzLl92YWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgaWYgKHRoaXMuZWwudmFsdWUgIT09IG5ld1ZhbHVlKSB0aGlzLmVsLnZhbHVlID0gbmV3VmFsdWU7XG4gICAgICBpZiAoaXNDaGFuZ2VkKSB0aGlzLl9maXJlQ2hhbmdlRXZlbnRzKCk7XG4gICAgfVxuICAgIC8qKiBVcGRhdGVzIG9wdGlvbnMgd2l0aCBkZWVwIGVxdWFsIGNoZWNrLCByZWNyZWF0ZXMgQHtsaW5rIE1hc2tlZH0gbW9kZWwgaWYgbWFzayB0eXBlIGNoYW5nZXMgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInVwZGF0ZU9wdGlvbnNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdXBkYXRlT3B0aW9ucyhvcHRzKSB7XG4gICAgICB2YXIgbWFzayA9IG9wdHMubWFzayxcbiAgICAgICAgICByZXN0T3B0cyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvcHRzLCBbXCJtYXNrXCJdKTtcblxuICAgICAgdmFyIHVwZGF0ZU1hc2sgPSAhdGhpcy5tYXNrRXF1YWxzKG1hc2spO1xuICAgICAgdmFyIHVwZGF0ZU9wdHMgPSAhb2JqZWN0SW5jbHVkZXModGhpcy5tYXNrZWQsIHJlc3RPcHRzKTtcbiAgICAgIGlmICh1cGRhdGVNYXNrKSB0aGlzLm1hc2sgPSBtYXNrO1xuICAgICAgaWYgKHVwZGF0ZU9wdHMpIHRoaXMubWFza2VkLnVwZGF0ZU9wdGlvbnMocmVzdE9wdHMpO1xuICAgICAgaWYgKHVwZGF0ZU1hc2sgfHwgdXBkYXRlT3B0cykgdGhpcy51cGRhdGVDb250cm9sKCk7XG4gICAgfVxuICAgIC8qKiBVcGRhdGVzIGN1cnNvciAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwidXBkYXRlQ3Vyc29yXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZUN1cnNvcihjdXJzb3JQb3MpIHtcbiAgICAgIGlmIChjdXJzb3JQb3MgPT0gbnVsbCkgcmV0dXJuO1xuICAgICAgdGhpcy5jdXJzb3JQb3MgPSBjdXJzb3JQb3M7IC8vIGFsc28gcXVldWUgY2hhbmdlIGN1cnNvciBmb3IgbW9iaWxlIGJyb3dzZXJzXG5cbiAgICAgIHRoaXMuX2RlbGF5VXBkYXRlQ3Vyc29yKGN1cnNvclBvcyk7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICBEZWxheXMgY3Vyc29yIHVwZGF0ZSB0byBzdXBwb3J0IG1vYmlsZSBicm93c2Vyc1xyXG4gICAgICBAcHJpdmF0ZVxyXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIl9kZWxheVVwZGF0ZUN1cnNvclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfZGVsYXlVcGRhdGVDdXJzb3IoY3Vyc29yUG9zKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICB0aGlzLl9hYm9ydFVwZGF0ZUN1cnNvcigpO1xuXG4gICAgICB0aGlzLl9jaGFuZ2luZ0N1cnNvclBvcyA9IGN1cnNvclBvcztcbiAgICAgIHRoaXMuX2N1cnNvckNoYW5naW5nID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghX3RoaXMuZWwpIHJldHVybjsgLy8gaWYgd2FzIGRlc3Ryb3llZFxuXG4gICAgICAgIF90aGlzLmN1cnNvclBvcyA9IF90aGlzLl9jaGFuZ2luZ0N1cnNvclBvcztcblxuICAgICAgICBfdGhpcy5fYWJvcnRVcGRhdGVDdXJzb3IoKTtcbiAgICAgIH0sIDEwKTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgIEZpcmVzIGN1c3RvbSBldmVudHNcclxuICAgICAgQHByb3RlY3RlZFxyXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIl9maXJlQ2hhbmdlRXZlbnRzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9maXJlQ2hhbmdlRXZlbnRzKCkge1xuICAgICAgdGhpcy5fZmlyZUV2ZW50KCdhY2NlcHQnKTtcblxuICAgICAgaWYgKHRoaXMubWFza2VkLmlzQ29tcGxldGUpIHRoaXMuX2ZpcmVFdmVudCgnY29tcGxldGUnKTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgIEFib3J0cyBkZWxheWVkIGN1cnNvciB1cGRhdGVcclxuICAgICAgQHByaXZhdGVcclxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJfYWJvcnRVcGRhdGVDdXJzb3JcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2Fib3J0VXBkYXRlQ3Vyc29yKCkge1xuICAgICAgaWYgKHRoaXMuX2N1cnNvckNoYW5naW5nKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9jdXJzb3JDaGFuZ2luZyk7XG4gICAgICAgIGRlbGV0ZSB0aGlzLl9jdXJzb3JDaGFuZ2luZztcbiAgICAgIH1cbiAgICB9XG4gICAgLyoqIEFsaWducyBjdXJzb3IgdG8gbmVhcmVzdCBhdmFpbGFibGUgcG9zaXRpb24gKi9cblxuICB9LCB7XG4gICAga2V5OiBcImFsaWduQ3Vyc29yXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFsaWduQ3Vyc29yKCkge1xuICAgICAgdGhpcy5jdXJzb3JQb3MgPSB0aGlzLm1hc2tlZC5uZWFyZXN0SW5wdXRQb3ModGhpcy5jdXJzb3JQb3MsIERJUkVDVElPTi5MRUZUKTtcbiAgICB9XG4gICAgLyoqIEFsaWducyBjdXJzb3Igb25seSBpZiBzZWxlY3Rpb24gaXMgZW1wdHkgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImFsaWduQ3Vyc29yRnJpZW5kbHlcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWxpZ25DdXJzb3JGcmllbmRseSgpIHtcbiAgICAgIGlmICh0aGlzLnNlbGVjdGlvblN0YXJ0ICE9PSB0aGlzLmN1cnNvclBvcykgcmV0dXJuOyAvLyBza2lwIGlmIHJhbmdlIGlzIHNlbGVjdGVkXG5cbiAgICAgIHRoaXMuYWxpZ25DdXJzb3IoKTtcbiAgICB9XG4gICAgLyoqIEFkZHMgbGlzdGVuZXIgb24gY3VzdG9tIGV2ZW50ICovXG5cbiAgfSwge1xuICAgIGtleTogXCJvblwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbihldiwgaGFuZGxlcikge1xuICAgICAgaWYgKCF0aGlzLl9saXN0ZW5lcnNbZXZdKSB0aGlzLl9saXN0ZW5lcnNbZXZdID0gW107XG5cbiAgICAgIHRoaXMuX2xpc3RlbmVyc1tldl0ucHVzaChoYW5kbGVyKTtcblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKiBSZW1vdmVzIGN1c3RvbSBldmVudCBsaXN0ZW5lciAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwib2ZmXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9mZihldiwgaGFuZGxlcikge1xuICAgICAgaWYgKCF0aGlzLl9saXN0ZW5lcnNbZXZdKSByZXR1cm4gdGhpcztcblxuICAgICAgaWYgKCFoYW5kbGVyKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLl9saXN0ZW5lcnNbZXZdO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cblxuICAgICAgdmFyIGhJbmRleCA9IHRoaXMuX2xpc3RlbmVyc1tldl0uaW5kZXhPZihoYW5kbGVyKTtcblxuICAgICAgaWYgKGhJbmRleCA+PSAwKSB0aGlzLl9saXN0ZW5lcnNbZXZdLnNwbGljZShoSW5kZXgsIDEpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKiBIYW5kbGVzIHZpZXcgaW5wdXQgZXZlbnQgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIl9vbklucHV0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9vbklucHV0KCkge1xuICAgICAgdGhpcy5fYWJvcnRVcGRhdGVDdXJzb3IoKTsgLy8gZml4IHN0cmFuZ2UgSUUgYmVoYXZpb3JcblxuXG4gICAgICBpZiAoIXRoaXMuX3NlbGVjdGlvbikgcmV0dXJuIHRoaXMudXBkYXRlVmFsdWUoKTtcbiAgICAgIHZhciBkZXRhaWxzID0gbmV3IEFjdGlvbkRldGFpbHMoIC8vIG5ldyBzdGF0ZVxuICAgICAgdGhpcy5lbC52YWx1ZSwgdGhpcy5jdXJzb3JQb3MsIC8vIG9sZCBzdGF0ZVxuICAgICAgdGhpcy52YWx1ZSwgdGhpcy5fc2VsZWN0aW9uKTtcbiAgICAgIHZhciBvbGRSYXdWYWx1ZSA9IHRoaXMubWFza2VkLnJhd0lucHV0VmFsdWU7XG4gICAgICB2YXIgb2Zmc2V0ID0gdGhpcy5tYXNrZWQuc3BsaWNlKGRldGFpbHMuc3RhcnRDaGFuZ2VQb3MsIGRldGFpbHMucmVtb3ZlZC5sZW5ndGgsIGRldGFpbHMuaW5zZXJ0ZWQsIGRldGFpbHMucmVtb3ZlRGlyZWN0aW9uKS5vZmZzZXQ7IC8vIGZvcmNlIGFsaWduIGluIHJlbW92ZSBkaXJlY3Rpb24gb25seSBpZiBubyBpbnB1dCBjaGFycyB3ZXJlIHJlbW92ZWRcbiAgICAgIC8vIG90aGVyd2lzZSB3ZSBzdGlsbCBuZWVkIHRvIGFsaWduIHdpdGggTk9ORSAodG8gZ2V0IG91dCBmcm9tIGZpeGVkIHN5bWJvbHMgZm9yIGluc3RhbmNlKVxuXG4gICAgICB2YXIgcmVtb3ZlRGlyZWN0aW9uID0gb2xkUmF3VmFsdWUgPT09IHRoaXMubWFza2VkLnJhd0lucHV0VmFsdWUgPyBkZXRhaWxzLnJlbW92ZURpcmVjdGlvbiA6IERJUkVDVElPTi5OT05FO1xuICAgICAgdmFyIGN1cnNvclBvcyA9IHRoaXMubWFza2VkLm5lYXJlc3RJbnB1dFBvcyhkZXRhaWxzLnN0YXJ0Q2hhbmdlUG9zICsgb2Zmc2V0LCByZW1vdmVEaXJlY3Rpb24pO1xuICAgICAgdGhpcy51cGRhdGVDb250cm9sKCk7XG4gICAgICB0aGlzLnVwZGF0ZUN1cnNvcihjdXJzb3JQb3MpO1xuICAgIH1cbiAgICAvKiogSGFuZGxlcyB2aWV3IGNoYW5nZSBldmVudCBhbmQgY29tbWl0cyBtb2RlbCB2YWx1ZSAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiX29uQ2hhbmdlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9vbkNoYW5nZSgpIHtcbiAgICAgIGlmICh0aGlzLnZhbHVlICE9PSB0aGlzLmVsLnZhbHVlKSB7XG4gICAgICAgIHRoaXMudXBkYXRlVmFsdWUoKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5tYXNrZWQuZG9Db21taXQoKTtcbiAgICAgIHRoaXMudXBkYXRlQ29udHJvbCgpO1xuXG4gICAgICB0aGlzLl9zYXZlU2VsZWN0aW9uKCk7XG4gICAgfVxuICAgIC8qKiBIYW5kbGVzIHZpZXcgZHJvcCBldmVudCwgcHJldmVudHMgYnkgZGVmYXVsdCAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiX29uRHJvcFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfb25Ecm9wKGV2KSB7XG4gICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuICAgIC8qKiBSZXN0b3JlIGxhc3Qgc2VsZWN0aW9uIG9uIGZvY3VzICovXG5cbiAgfSwge1xuICAgIGtleTogXCJfb25Gb2N1c1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfb25Gb2N1cyhldikge1xuICAgICAgaWYgKHRoaXMuc2VsZWN0aW9uU3RhcnQgIT09IHRoaXMuY3Vyc29yUG9zKSByZXR1cm47IC8vIHNraXAgaWYgcmFuZ2UgaXMgc2VsZWN0ZWRcblxuICAgICAgaWYgKHRoaXMuX3NlbGVjdGlvbikgdGhpcy5jdXJzb3JQb3MgPSB0aGlzLl9zZWxlY3Rpb24uZW5kO1xuICAgICAgdGhpcy5hbGlnbkN1cnNvckZyaWVuZGx5KCk7XG4gICAgfVxuICAgIC8qKiBVbmJpbmQgdmlldyBldmVudHMgYW5kIHJlbW92ZXMgZWxlbWVudCByZWZlcmVuY2UgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImRlc3Ryb3lcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAgIHRoaXMuX3VuYmluZEV2ZW50cygpOyAvLyAkRmxvd0ZpeE1lIHdoeSBub3QgZG8gc28/XG5cblxuICAgICAgdGhpcy5fbGlzdGVuZXJzLmxlbmd0aCA9IDA7XG4gICAgICBkZWxldGUgdGhpcy5lbDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwibWFza1wiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMubWFza2VkLm1hc2s7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldChtYXNrKSB7XG4gICAgICBpZiAodGhpcy5tYXNrRXF1YWxzKG1hc2spKSByZXR1cm47XG5cbiAgICAgIGlmICh0aGlzLm1hc2tlZC5jb25zdHJ1Y3RvciA9PT0gbWFza2VkQ2xhc3MobWFzaykpIHtcbiAgICAgICAgdGhpcy5tYXNrZWQudXBkYXRlT3B0aW9ucyh7XG4gICAgICAgICAgbWFzazogbWFza1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgbWFza2VkID0gY3JlYXRlTWFzayh7XG4gICAgICAgIG1hc2s6IG1hc2tcbiAgICAgIH0pO1xuICAgICAgbWFza2VkLnVubWFza2VkVmFsdWUgPSB0aGlzLm1hc2tlZC51bm1hc2tlZFZhbHVlO1xuICAgICAgdGhpcy5tYXNrZWQgPSBtYXNrZWQ7XG4gICAgfVxuICAgIC8qKiBSYXcgdmFsdWUgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInZhbHVlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldChzdHIpIHtcbiAgICAgIHRoaXMubWFza2VkLnZhbHVlID0gc3RyO1xuICAgICAgdGhpcy51cGRhdGVDb250cm9sKCk7XG4gICAgICB0aGlzLmFsaWduQ3Vyc29yKCk7XG4gICAgfVxuICAgIC8qKiBVbm1hc2tlZCB2YWx1ZSAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwidW5tYXNrZWRWYWx1ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3VubWFza2VkVmFsdWU7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldChzdHIpIHtcbiAgICAgIHRoaXMubWFza2VkLnVubWFza2VkVmFsdWUgPSBzdHI7XG4gICAgICB0aGlzLnVwZGF0ZUNvbnRyb2woKTtcbiAgICAgIHRoaXMuYWxpZ25DdXJzb3IoKTtcbiAgICB9XG4gICAgLyoqIFR5cGVkIHVubWFza2VkIHZhbHVlICovXG5cbiAgfSwge1xuICAgIGtleTogXCJ0eXBlZFZhbHVlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5tYXNrZWQudHlwZWRWYWx1ZTtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHZhbCkge1xuICAgICAgdGhpcy5tYXNrZWQudHlwZWRWYWx1ZSA9IHZhbDtcbiAgICAgIHRoaXMudXBkYXRlQ29udHJvbCgpO1xuICAgICAgdGhpcy5hbGlnbkN1cnNvcigpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzZWxlY3Rpb25TdGFydFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2N1cnNvckNoYW5naW5nID8gdGhpcy5fY2hhbmdpbmdDdXJzb3JQb3MgOiB0aGlzLmVsLnNlbGVjdGlvblN0YXJ0O1xuICAgIH1cbiAgICAvKiogQ3VycmVudCBjdXJzb3IgcG9zaXRpb24gKi9cblxuICB9LCB7XG4gICAga2V5OiBcImN1cnNvclBvc1wiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2N1cnNvckNoYW5naW5nID8gdGhpcy5fY2hhbmdpbmdDdXJzb3JQb3MgOiB0aGlzLmVsLnNlbGVjdGlvbkVuZDtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHBvcykge1xuICAgICAgaWYgKCF0aGlzLmVsLmlzQWN0aXZlKSByZXR1cm47XG4gICAgICB0aGlzLmVsLnNlbGVjdChwb3MsIHBvcyk7XG5cbiAgICAgIHRoaXMuX3NhdmVTZWxlY3Rpb24oKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gSW5wdXRNYXNrO1xufSgpO1xuXG4vKiogUGF0dGVybiB3aGljaCB2YWxpZGF0ZXMgZW51bSB2YWx1ZXMgKi9cblxudmFyIE1hc2tlZEVudW0gPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9NYXNrZWRQYXR0ZXJuKSB7XG4gIF9pbmhlcml0cyhNYXNrZWRFbnVtLCBfTWFza2VkUGF0dGVybik7XG5cbiAgZnVuY3Rpb24gTWFza2VkRW51bSgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTWFza2VkRW51bSk7XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX2dldFByb3RvdHlwZU9mKE1hc2tlZEVudW0pLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKE1hc2tlZEVudW0sIFt7XG4gICAga2V5OiBcIl91cGRhdGVcIixcblxuICAgIC8qKlxyXG4gICAgICBAb3ZlcnJpZGVcclxuICAgICAgQHBhcmFtIHtPYmplY3R9IG9wdHNcclxuICAgICovXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF91cGRhdGUob3B0cykge1xuICAgICAgLy8gVE9ETyB0eXBlXG4gICAgICBpZiAob3B0cy5lbnVtKSBvcHRzLm1hc2sgPSAnKicucmVwZWF0KG9wdHMuZW51bVswXS5sZW5ndGgpO1xuXG4gICAgICBfZ2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWRFbnVtLnByb3RvdHlwZSksIFwiX3VwZGF0ZVwiLCB0aGlzKS5jYWxsKHRoaXMsIG9wdHMpO1xuICAgIH1cbiAgICAvKipcclxuICAgICAgQG92ZXJyaWRlXHJcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZG9WYWxpZGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkb1ZhbGlkYXRlKCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcyxcbiAgICAgICAgICBfZ2V0MjtcblxuICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmVudW0uc29tZShmdW5jdGlvbiAoZSkge1xuICAgICAgICByZXR1cm4gZS5pbmRleE9mKF90aGlzLnVubWFza2VkVmFsdWUpID49IDA7XG4gICAgICB9KSAmJiAoX2dldDIgPSBfZ2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWRFbnVtLnByb3RvdHlwZSksIFwiZG9WYWxpZGF0ZVwiLCB0aGlzKSkuY2FsbC5hcHBseShfZ2V0MiwgW3RoaXNdLmNvbmNhdChhcmdzKSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIE1hc2tlZEVudW07XG59KE1hc2tlZFBhdHRlcm4pO1xuXG4vKipcclxuICBOdW1iZXIgbWFza1xyXG4gIEBwYXJhbSB7T2JqZWN0fSBvcHRzXHJcbiAgQHBhcmFtIHtzdHJpbmd9IG9wdHMucmFkaXggLSBTaW5nbGUgY2hhclxyXG4gIEBwYXJhbSB7c3RyaW5nfSBvcHRzLnRob3VzYW5kc1NlcGFyYXRvciAtIFNpbmdsZSBjaGFyXHJcbiAgQHBhcmFtIHtBcnJheTxzdHJpbmc+fSBvcHRzLm1hcFRvUmFkaXggLSBBcnJheSBvZiBzaW5nbGUgY2hhcnNcclxuICBAcGFyYW0ge251bWJlcn0gb3B0cy5taW5cclxuICBAcGFyYW0ge251bWJlcn0gb3B0cy5tYXhcclxuICBAcGFyYW0ge251bWJlcn0gb3B0cy5zY2FsZSAtIERpZ2l0cyBhZnRlciBwb2ludFxyXG4gIEBwYXJhbSB7Ym9vbGVhbn0gb3B0cy5zaWduZWQgLSBBbGxvdyBuZWdhdGl2ZVxyXG4gIEBwYXJhbSB7Ym9vbGVhbn0gb3B0cy5ub3JtYWxpemVaZXJvcyAtIEZsYWcgdG8gcmVtb3ZlIGxlYWRpbmcgYW5kIHRyYWlsaW5nIHplcm9zIGluIHRoZSBlbmQgb2YgZWRpdGluZ1xyXG4gIEBwYXJhbSB7Ym9vbGVhbn0gb3B0cy5wYWRGcmFjdGlvbmFsWmVyb3MgLSBGbGFnIHRvIHBhZCB0cmFpbGluZyB6ZXJvcyBhZnRlciBwb2ludCBpbiB0aGUgZW5kIG9mIGVkaXRpbmdcclxuKi9cbnZhciBNYXNrZWROdW1iZXIgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9NYXNrZWQpIHtcbiAgX2luaGVyaXRzKE1hc2tlZE51bWJlciwgX01hc2tlZCk7XG5cbiAgLyoqIFNpbmdsZSBjaGFyICovXG5cbiAgLyoqIFNpbmdsZSBjaGFyICovXG5cbiAgLyoqIEFycmF5IG9mIHNpbmdsZSBjaGFycyAqL1xuXG4gIC8qKiAqL1xuXG4gIC8qKiAqL1xuXG4gIC8qKiBEaWdpdHMgYWZ0ZXIgcG9pbnQgKi9cblxuICAvKiogKi9cblxuICAvKiogRmxhZyB0byByZW1vdmUgbGVhZGluZyBhbmQgdHJhaWxpbmcgemVyb3MgaW4gdGhlIGVuZCBvZiBlZGl0aW5nICovXG5cbiAgLyoqIEZsYWcgdG8gcGFkIHRyYWlsaW5nIHplcm9zIGFmdGVyIHBvaW50IGluIHRoZSBlbmQgb2YgZWRpdGluZyAqL1xuICBmdW5jdGlvbiBNYXNrZWROdW1iZXIob3B0cykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNYXNrZWROdW1iZXIpO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9nZXRQcm90b3R5cGVPZihNYXNrZWROdW1iZXIpLmNhbGwodGhpcywgT2JqZWN0LmFzc2lnbih7fSwgTWFza2VkTnVtYmVyLkRFRkFVTFRTLCB7fSwgb3B0cykpKTtcbiAgfVxuICAvKipcclxuICAgIEBvdmVycmlkZVxyXG4gICovXG5cblxuICBfY3JlYXRlQ2xhc3MoTWFza2VkTnVtYmVyLCBbe1xuICAgIGtleTogXCJfdXBkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF91cGRhdGUob3B0cykge1xuICAgICAgX2dldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkTnVtYmVyLnByb3RvdHlwZSksIFwiX3VwZGF0ZVwiLCB0aGlzKS5jYWxsKHRoaXMsIG9wdHMpO1xuXG4gICAgICB0aGlzLl91cGRhdGVSZWdFeHBzKCk7XG4gICAgfVxuICAgIC8qKiAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiX3VwZGF0ZVJlZ0V4cHNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX3VwZGF0ZVJlZ0V4cHMoKSB7XG4gICAgICAvLyB1c2UgZGlmZmVyZW50IHJlZ2V4cCB0byBwcm9jZXNzIHVzZXIgaW5wdXQgKG1vcmUgc3RyaWN0LCBpbnB1dCBzdWZmaXgpIGFuZCB0YWlsIHNoaWZ0aW5nXG4gICAgICB2YXIgc3RhcnQgPSAnXicgKyAodGhpcy5hbGxvd05lZ2F0aXZlID8gJ1srfFxcXFwtXT8nIDogJycpO1xuICAgICAgdmFyIG1pZElucHV0ID0gJygwfChbMS05XStcXFxcZCopKT8nO1xuICAgICAgdmFyIG1pZCA9ICdcXFxcZConO1xuICAgICAgdmFyIGVuZCA9ICh0aGlzLnNjYWxlID8gJygnICsgZXNjYXBlUmVnRXhwKHRoaXMucmFkaXgpICsgJ1xcXFxkezAsJyArIHRoaXMuc2NhbGUgKyAnfSk/JyA6ICcnKSArICckJztcbiAgICAgIHRoaXMuX251bWJlclJlZ0V4cElucHV0ID0gbmV3IFJlZ0V4cChzdGFydCArIG1pZElucHV0ICsgZW5kKTtcbiAgICAgIHRoaXMuX251bWJlclJlZ0V4cCA9IG5ldyBSZWdFeHAoc3RhcnQgKyBtaWQgKyBlbmQpO1xuICAgICAgdGhpcy5fbWFwVG9SYWRpeFJlZ0V4cCA9IG5ldyBSZWdFeHAoJ1snICsgdGhpcy5tYXBUb1JhZGl4Lm1hcChlc2NhcGVSZWdFeHApLmpvaW4oJycpICsgJ10nLCAnZycpO1xuICAgICAgdGhpcy5fdGhvdXNhbmRzU2VwYXJhdG9yUmVnRXhwID0gbmV3IFJlZ0V4cChlc2NhcGVSZWdFeHAodGhpcy50aG91c2FuZHNTZXBhcmF0b3IpLCAnZycpO1xuICAgIH1cbiAgICAvKiogKi9cblxuICB9LCB7XG4gICAga2V5OiBcIl9yZW1vdmVUaG91c2FuZHNTZXBhcmF0b3JzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9yZW1vdmVUaG91c2FuZHNTZXBhcmF0b3JzKHZhbHVlKSB7XG4gICAgICByZXR1cm4gdmFsdWUucmVwbGFjZSh0aGlzLl90aG91c2FuZHNTZXBhcmF0b3JSZWdFeHAsICcnKTtcbiAgICB9XG4gICAgLyoqICovXG5cbiAgfSwge1xuICAgIGtleTogXCJfaW5zZXJ0VGhvdXNhbmRzU2VwYXJhdG9yc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfaW5zZXJ0VGhvdXNhbmRzU2VwYXJhdG9ycyh2YWx1ZSkge1xuICAgICAgLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjkwMTEwMi9ob3ctdG8tcHJpbnQtYS1udW1iZXItd2l0aC1jb21tYXMtYXMtdGhvdXNhbmRzLXNlcGFyYXRvcnMtaW4tamF2YXNjcmlwdFxuICAgICAgdmFyIHBhcnRzID0gdmFsdWUuc3BsaXQodGhpcy5yYWRpeCk7XG4gICAgICBwYXJ0c1swXSA9IHBhcnRzWzBdLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csIHRoaXMudGhvdXNhbmRzU2VwYXJhdG9yKTtcbiAgICAgIHJldHVybiBwYXJ0cy5qb2luKHRoaXMucmFkaXgpO1xuICAgIH1cbiAgICAvKipcclxuICAgICAgQG92ZXJyaWRlXHJcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZG9QcmVwYXJlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRvUHJlcGFyZShzdHIpIHtcbiAgICAgIHZhciBfZ2V0MjtcblxuICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIChfZ2V0MiA9IF9nZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZE51bWJlci5wcm90b3R5cGUpLCBcImRvUHJlcGFyZVwiLCB0aGlzKSkuY2FsbC5hcHBseShfZ2V0MiwgW3RoaXMsIHRoaXMuX3JlbW92ZVRob3VzYW5kc1NlcGFyYXRvcnMoc3RyLnJlcGxhY2UodGhpcy5fbWFwVG9SYWRpeFJlZ0V4cCwgdGhpcy5yYWRpeCkpXS5jb25jYXQoYXJncykpO1xuICAgIH1cbiAgICAvKiogKi9cblxuICB9LCB7XG4gICAga2V5OiBcIl9zZXBhcmF0b3JzQ291bnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX3NlcGFyYXRvcnNDb3VudCh0bykge1xuICAgICAgdmFyIGV4dGVuZE9uU2VwYXJhdG9ycyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogZmFsc2U7XG4gICAgICB2YXIgY291bnQgPSAwO1xuXG4gICAgICBmb3IgKHZhciBwb3MgPSAwOyBwb3MgPCB0bzsgKytwb3MpIHtcbiAgICAgICAgaWYgKHRoaXMuX3ZhbHVlLmluZGV4T2YodGhpcy50aG91c2FuZHNTZXBhcmF0b3IsIHBvcykgPT09IHBvcykge1xuICAgICAgICAgICsrY291bnQ7XG4gICAgICAgICAgaWYgKGV4dGVuZE9uU2VwYXJhdG9ycykgdG8gKz0gdGhpcy50aG91c2FuZHNTZXBhcmF0b3IubGVuZ3RoO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb3VudDtcbiAgICB9XG4gICAgLyoqICovXG5cbiAgfSwge1xuICAgIGtleTogXCJfc2VwYXJhdG9yc0NvdW50RnJvbVNsaWNlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9zZXBhcmF0b3JzQ291bnRGcm9tU2xpY2UoKSB7XG4gICAgICB2YXIgc2xpY2UgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHRoaXMuX3ZhbHVlO1xuICAgICAgcmV0dXJuIHRoaXMuX3NlcGFyYXRvcnNDb3VudCh0aGlzLl9yZW1vdmVUaG91c2FuZHNTZXBhcmF0b3JzKHNsaWNlKS5sZW5ndGgsIHRydWUpO1xuICAgIH1cbiAgICAvKipcclxuICAgICAgQG92ZXJyaWRlXHJcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZXh0cmFjdElucHV0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGV4dHJhY3RJbnB1dCgpIHtcbiAgICAgIHZhciBmcm9tUG9zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAwO1xuICAgICAgdmFyIHRvUG9zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB0aGlzLnZhbHVlLmxlbmd0aDtcbiAgICAgIHZhciBmbGFncyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyID8gYXJndW1lbnRzWzJdIDogdW5kZWZpbmVkO1xuXG4gICAgICB2YXIgX3RoaXMkX2FkanVzdFJhbmdlV2l0ID0gdGhpcy5fYWRqdXN0UmFuZ2VXaXRoU2VwYXJhdG9ycyhmcm9tUG9zLCB0b1Bvcyk7XG5cbiAgICAgIHZhciBfdGhpcyRfYWRqdXN0UmFuZ2VXaXQyID0gX3NsaWNlZFRvQXJyYXkoX3RoaXMkX2FkanVzdFJhbmdlV2l0LCAyKTtcblxuICAgICAgZnJvbVBvcyA9IF90aGlzJF9hZGp1c3RSYW5nZVdpdDJbMF07XG4gICAgICB0b1BvcyA9IF90aGlzJF9hZGp1c3RSYW5nZVdpdDJbMV07XG4gICAgICByZXR1cm4gdGhpcy5fcmVtb3ZlVGhvdXNhbmRzU2VwYXJhdG9ycyhfZ2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWROdW1iZXIucHJvdG90eXBlKSwgXCJleHRyYWN0SW5wdXRcIiwgdGhpcykuY2FsbCh0aGlzLCBmcm9tUG9zLCB0b1BvcywgZmxhZ3MpKTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgIEBvdmVycmlkZVxyXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIl9hcHBlbmRDaGFyUmF3XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9hcHBlbmRDaGFyUmF3KGNoKSB7XG4gICAgICB2YXIgZmxhZ3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgICAgaWYgKCF0aGlzLnRob3VzYW5kc1NlcGFyYXRvcikgcmV0dXJuIF9nZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZE51bWJlci5wcm90b3R5cGUpLCBcIl9hcHBlbmRDaGFyUmF3XCIsIHRoaXMpLmNhbGwodGhpcywgY2gsIGZsYWdzKTtcbiAgICAgIHZhciBwcmV2QmVmb3JlVGFpbFZhbHVlID0gZmxhZ3MudGFpbCAmJiBmbGFncy5fYmVmb3JlVGFpbFN0YXRlID8gZmxhZ3MuX2JlZm9yZVRhaWxTdGF0ZS5fdmFsdWUgOiB0aGlzLl92YWx1ZTtcblxuICAgICAgdmFyIHByZXZCZWZvcmVUYWlsU2VwYXJhdG9yc0NvdW50ID0gdGhpcy5fc2VwYXJhdG9yc0NvdW50RnJvbVNsaWNlKHByZXZCZWZvcmVUYWlsVmFsdWUpO1xuXG4gICAgICB0aGlzLl92YWx1ZSA9IHRoaXMuX3JlbW92ZVRob3VzYW5kc1NlcGFyYXRvcnModGhpcy52YWx1ZSk7XG5cbiAgICAgIHZhciBhcHBlbmREZXRhaWxzID0gX2dldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkTnVtYmVyLnByb3RvdHlwZSksIFwiX2FwcGVuZENoYXJSYXdcIiwgdGhpcykuY2FsbCh0aGlzLCBjaCwgZmxhZ3MpO1xuXG4gICAgICB0aGlzLl92YWx1ZSA9IHRoaXMuX2luc2VydFRob3VzYW5kc1NlcGFyYXRvcnModGhpcy5fdmFsdWUpO1xuICAgICAgdmFyIGJlZm9yZVRhaWxWYWx1ZSA9IGZsYWdzLnRhaWwgJiYgZmxhZ3MuX2JlZm9yZVRhaWxTdGF0ZSA/IGZsYWdzLl9iZWZvcmVUYWlsU3RhdGUuX3ZhbHVlIDogdGhpcy5fdmFsdWU7XG5cbiAgICAgIHZhciBiZWZvcmVUYWlsU2VwYXJhdG9yc0NvdW50ID0gdGhpcy5fc2VwYXJhdG9yc0NvdW50RnJvbVNsaWNlKGJlZm9yZVRhaWxWYWx1ZSk7XG5cbiAgICAgIGFwcGVuZERldGFpbHMudGFpbFNoaWZ0ICs9IChiZWZvcmVUYWlsU2VwYXJhdG9yc0NvdW50IC0gcHJldkJlZm9yZVRhaWxTZXBhcmF0b3JzQ291bnQpICogdGhpcy50aG91c2FuZHNTZXBhcmF0b3IubGVuZ3RoO1xuICAgICAgcmV0dXJuIGFwcGVuZERldGFpbHM7XG4gICAgfVxuICAgIC8qKiAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiX2ZpbmRTZXBhcmF0b3JBcm91bmRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2ZpbmRTZXBhcmF0b3JBcm91bmQocG9zKSB7XG4gICAgICBpZiAodGhpcy50aG91c2FuZHNTZXBhcmF0b3IpIHtcbiAgICAgICAgdmFyIHNlYXJjaEZyb20gPSBwb3MgLSB0aGlzLnRob3VzYW5kc1NlcGFyYXRvci5sZW5ndGggKyAxO1xuICAgICAgICB2YXIgc2VwYXJhdG9yUG9zID0gdGhpcy52YWx1ZS5pbmRleE9mKHRoaXMudGhvdXNhbmRzU2VwYXJhdG9yLCBzZWFyY2hGcm9tKTtcbiAgICAgICAgaWYgKHNlcGFyYXRvclBvcyA8PSBwb3MpIHJldHVybiBzZXBhcmF0b3JQb3M7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAtMTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiX2FkanVzdFJhbmdlV2l0aFNlcGFyYXRvcnNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2FkanVzdFJhbmdlV2l0aFNlcGFyYXRvcnMoZnJvbSwgdG8pIHtcbiAgICAgIHZhciBzZXBhcmF0b3JBcm91bmRGcm9tUG9zID0gdGhpcy5fZmluZFNlcGFyYXRvckFyb3VuZChmcm9tKTtcblxuICAgICAgaWYgKHNlcGFyYXRvckFyb3VuZEZyb21Qb3MgPj0gMCkgZnJvbSA9IHNlcGFyYXRvckFyb3VuZEZyb21Qb3M7XG5cbiAgICAgIHZhciBzZXBhcmF0b3JBcm91bmRUb1BvcyA9IHRoaXMuX2ZpbmRTZXBhcmF0b3JBcm91bmQodG8pO1xuXG4gICAgICBpZiAoc2VwYXJhdG9yQXJvdW5kVG9Qb3MgPj0gMCkgdG8gPSBzZXBhcmF0b3JBcm91bmRUb1BvcyArIHRoaXMudGhvdXNhbmRzU2VwYXJhdG9yLmxlbmd0aDtcbiAgICAgIHJldHVybiBbZnJvbSwgdG9dO1xuICAgIH1cbiAgICAvKipcclxuICAgICAgQG92ZXJyaWRlXHJcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwicmVtb3ZlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHZhciBmcm9tUG9zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAwO1xuICAgICAgdmFyIHRvUG9zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB0aGlzLnZhbHVlLmxlbmd0aDtcblxuICAgICAgdmFyIF90aGlzJF9hZGp1c3RSYW5nZVdpdDMgPSB0aGlzLl9hZGp1c3RSYW5nZVdpdGhTZXBhcmF0b3JzKGZyb21Qb3MsIHRvUG9zKTtcblxuICAgICAgdmFyIF90aGlzJF9hZGp1c3RSYW5nZVdpdDQgPSBfc2xpY2VkVG9BcnJheShfdGhpcyRfYWRqdXN0UmFuZ2VXaXQzLCAyKTtcblxuICAgICAgZnJvbVBvcyA9IF90aGlzJF9hZGp1c3RSYW5nZVdpdDRbMF07XG4gICAgICB0b1BvcyA9IF90aGlzJF9hZGp1c3RSYW5nZVdpdDRbMV07XG4gICAgICB2YXIgdmFsdWVCZWZvcmVQb3MgPSB0aGlzLnZhbHVlLnNsaWNlKDAsIGZyb21Qb3MpO1xuICAgICAgdmFyIHZhbHVlQWZ0ZXJQb3MgPSB0aGlzLnZhbHVlLnNsaWNlKHRvUG9zKTtcblxuICAgICAgdmFyIHByZXZCZWZvcmVUYWlsU2VwYXJhdG9yc0NvdW50ID0gdGhpcy5fc2VwYXJhdG9yc0NvdW50KHZhbHVlQmVmb3JlUG9zLmxlbmd0aCk7XG5cbiAgICAgIHRoaXMuX3ZhbHVlID0gdGhpcy5faW5zZXJ0VGhvdXNhbmRzU2VwYXJhdG9ycyh0aGlzLl9yZW1vdmVUaG91c2FuZHNTZXBhcmF0b3JzKHZhbHVlQmVmb3JlUG9zICsgdmFsdWVBZnRlclBvcykpO1xuXG4gICAgICB2YXIgYmVmb3JlVGFpbFNlcGFyYXRvcnNDb3VudCA9IHRoaXMuX3NlcGFyYXRvcnNDb3VudEZyb21TbGljZSh2YWx1ZUJlZm9yZVBvcyk7XG5cbiAgICAgIHJldHVybiBuZXcgQ2hhbmdlRGV0YWlscyh7XG4gICAgICAgIHRhaWxTaGlmdDogKGJlZm9yZVRhaWxTZXBhcmF0b3JzQ291bnQgLSBwcmV2QmVmb3JlVGFpbFNlcGFyYXRvcnNDb3VudCkgKiB0aGlzLnRob3VzYW5kc1NlcGFyYXRvci5sZW5ndGhcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcclxuICAgICAgQG92ZXJyaWRlXHJcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwibmVhcmVzdElucHV0UG9zXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG5lYXJlc3RJbnB1dFBvcyhjdXJzb3JQb3MsIGRpcmVjdGlvbikge1xuICAgICAgaWYgKCF0aGlzLnRob3VzYW5kc1NlcGFyYXRvcikgcmV0dXJuIGN1cnNvclBvcztcblxuICAgICAgc3dpdGNoIChkaXJlY3Rpb24pIHtcbiAgICAgICAgY2FzZSBESVJFQ1RJT04uTk9ORTpcbiAgICAgICAgY2FzZSBESVJFQ1RJT04uTEVGVDpcbiAgICAgICAgY2FzZSBESVJFQ1RJT04uRk9SQ0VfTEVGVDpcbiAgICAgICAgICB7XG4gICAgICAgICAgICB2YXIgc2VwYXJhdG9yQXRMZWZ0UG9zID0gdGhpcy5fZmluZFNlcGFyYXRvckFyb3VuZChjdXJzb3JQb3MgLSAxKTtcblxuICAgICAgICAgICAgaWYgKHNlcGFyYXRvckF0TGVmdFBvcyA+PSAwKSB7XG4gICAgICAgICAgICAgIHZhciBzZXBhcmF0b3JBdExlZnRFbmRQb3MgPSBzZXBhcmF0b3JBdExlZnRQb3MgKyB0aGlzLnRob3VzYW5kc1NlcGFyYXRvci5sZW5ndGg7XG5cbiAgICAgICAgICAgICAgaWYgKGN1cnNvclBvcyA8IHNlcGFyYXRvckF0TGVmdEVuZFBvcyB8fCB0aGlzLnZhbHVlLmxlbmd0aCA8PSBzZXBhcmF0b3JBdExlZnRFbmRQb3MgfHwgZGlyZWN0aW9uID09PSBESVJFQ1RJT04uRk9SQ0VfTEVGVCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzZXBhcmF0b3JBdExlZnRQb3M7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgRElSRUNUSU9OLlJJR0hUOlxuICAgICAgICBjYXNlIERJUkVDVElPTi5GT1JDRV9SSUdIVDpcbiAgICAgICAgICB7XG4gICAgICAgICAgICB2YXIgc2VwYXJhdG9yQXRSaWdodFBvcyA9IHRoaXMuX2ZpbmRTZXBhcmF0b3JBcm91bmQoY3Vyc29yUG9zKTtcblxuICAgICAgICAgICAgaWYgKHNlcGFyYXRvckF0UmlnaHRQb3MgPj0gMCkge1xuICAgICAgICAgICAgICByZXR1cm4gc2VwYXJhdG9yQXRSaWdodFBvcyArIHRoaXMudGhvdXNhbmRzU2VwYXJhdG9yLmxlbmd0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjdXJzb3JQb3M7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICBAb3ZlcnJpZGVcclxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJkb1ZhbGlkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRvVmFsaWRhdGUoZmxhZ3MpIHtcbiAgICAgIHZhciByZWdleHAgPSBmbGFncy5pbnB1dCA/IHRoaXMuX251bWJlclJlZ0V4cElucHV0IDogdGhpcy5fbnVtYmVyUmVnRXhwOyAvLyB2YWxpZGF0ZSBhcyBzdHJpbmdcblxuICAgICAgdmFyIHZhbGlkID0gcmVnZXhwLnRlc3QodGhpcy5fcmVtb3ZlVGhvdXNhbmRzU2VwYXJhdG9ycyh0aGlzLnZhbHVlKSk7XG5cbiAgICAgIGlmICh2YWxpZCkge1xuICAgICAgICAvLyB2YWxpZGF0ZSBhcyBudW1iZXJcbiAgICAgICAgdmFyIG51bWJlciA9IHRoaXMubnVtYmVyO1xuICAgICAgICB2YWxpZCA9IHZhbGlkICYmICFpc05hTihudW1iZXIpICYmICggLy8gY2hlY2sgbWluIGJvdW5kIGZvciBuZWdhdGl2ZSB2YWx1ZXNcbiAgICAgICAgdGhpcy5taW4gPT0gbnVsbCB8fCB0aGlzLm1pbiA+PSAwIHx8IHRoaXMubWluIDw9IHRoaXMubnVtYmVyKSAmJiAoIC8vIGNoZWNrIG1heCBib3VuZCBmb3IgcG9zaXRpdmUgdmFsdWVzXG4gICAgICAgIHRoaXMubWF4ID09IG51bGwgfHwgdGhpcy5tYXggPD0gMCB8fCB0aGlzLm51bWJlciA8PSB0aGlzLm1heCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB2YWxpZCAmJiBfZ2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWROdW1iZXIucHJvdG90eXBlKSwgXCJkb1ZhbGlkYXRlXCIsIHRoaXMpLmNhbGwodGhpcywgZmxhZ3MpO1xuICAgIH1cbiAgICAvKipcclxuICAgICAgQG92ZXJyaWRlXHJcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZG9Db21taXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZG9Db21taXQoKSB7XG4gICAgICBpZiAodGhpcy52YWx1ZSkge1xuICAgICAgICB2YXIgbnVtYmVyID0gdGhpcy5udW1iZXI7XG4gICAgICAgIHZhciB2YWxpZG51bSA9IG51bWJlcjsgLy8gY2hlY2sgYm91bmRzXG5cbiAgICAgICAgaWYgKHRoaXMubWluICE9IG51bGwpIHZhbGlkbnVtID0gTWF0aC5tYXgodmFsaWRudW0sIHRoaXMubWluKTtcbiAgICAgICAgaWYgKHRoaXMubWF4ICE9IG51bGwpIHZhbGlkbnVtID0gTWF0aC5taW4odmFsaWRudW0sIHRoaXMubWF4KTtcbiAgICAgICAgaWYgKHZhbGlkbnVtICE9PSBudW1iZXIpIHRoaXMudW5tYXNrZWRWYWx1ZSA9IFN0cmluZyh2YWxpZG51bSk7XG4gICAgICAgIHZhciBmb3JtYXR0ZWQgPSB0aGlzLnZhbHVlO1xuICAgICAgICBpZiAodGhpcy5ub3JtYWxpemVaZXJvcykgZm9ybWF0dGVkID0gdGhpcy5fbm9ybWFsaXplWmVyb3MoZm9ybWF0dGVkKTtcbiAgICAgICAgaWYgKHRoaXMucGFkRnJhY3Rpb25hbFplcm9zKSBmb3JtYXR0ZWQgPSB0aGlzLl9wYWRGcmFjdGlvbmFsWmVyb3MoZm9ybWF0dGVkKTtcbiAgICAgICAgdGhpcy5fdmFsdWUgPSBmb3JtYXR0ZWQ7XG4gICAgICB9XG5cbiAgICAgIF9nZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZE51bWJlci5wcm90b3R5cGUpLCBcImRvQ29tbWl0XCIsIHRoaXMpLmNhbGwodGhpcyk7XG4gICAgfVxuICAgIC8qKiAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiX25vcm1hbGl6ZVplcm9zXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9ub3JtYWxpemVaZXJvcyh2YWx1ZSkge1xuICAgICAgdmFyIHBhcnRzID0gdGhpcy5fcmVtb3ZlVGhvdXNhbmRzU2VwYXJhdG9ycyh2YWx1ZSkuc3BsaXQodGhpcy5yYWRpeCk7IC8vIHJlbW92ZSBsZWFkaW5nIHplcm9zXG5cblxuICAgICAgcGFydHNbMF0gPSBwYXJ0c1swXS5yZXBsYWNlKC9eKFxcRCopKDAqKShcXGQqKS8sIGZ1bmN0aW9uIChtYXRjaCwgc2lnbiwgemVyb3MsIG51bSkge1xuICAgICAgICByZXR1cm4gc2lnbiArIG51bTtcbiAgICAgIH0pOyAvLyBhZGQgbGVhZGluZyB6ZXJvXG5cbiAgICAgIGlmICh2YWx1ZS5sZW5ndGggJiYgIS9cXGQkLy50ZXN0KHBhcnRzWzBdKSkgcGFydHNbMF0gPSBwYXJ0c1swXSArICcwJztcblxuICAgICAgaWYgKHBhcnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgcGFydHNbMV0gPSBwYXJ0c1sxXS5yZXBsYWNlKC8wKiQvLCAnJyk7IC8vIHJlbW92ZSB0cmFpbGluZyB6ZXJvc1xuXG4gICAgICAgIGlmICghcGFydHNbMV0ubGVuZ3RoKSBwYXJ0cy5sZW5ndGggPSAxOyAvLyByZW1vdmUgZnJhY3Rpb25hbFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5faW5zZXJ0VGhvdXNhbmRzU2VwYXJhdG9ycyhwYXJ0cy5qb2luKHRoaXMucmFkaXgpKTtcbiAgICB9XG4gICAgLyoqICovXG5cbiAgfSwge1xuICAgIGtleTogXCJfcGFkRnJhY3Rpb25hbFplcm9zXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9wYWRGcmFjdGlvbmFsWmVyb3ModmFsdWUpIHtcbiAgICAgIGlmICghdmFsdWUpIHJldHVybiB2YWx1ZTtcbiAgICAgIHZhciBwYXJ0cyA9IHZhbHVlLnNwbGl0KHRoaXMucmFkaXgpO1xuICAgICAgaWYgKHBhcnRzLmxlbmd0aCA8IDIpIHBhcnRzLnB1c2goJycpO1xuICAgICAgcGFydHNbMV0gPSBwYXJ0c1sxXS5wYWRFbmQodGhpcy5zY2FsZSwgJzAnKTtcbiAgICAgIHJldHVybiBwYXJ0cy5qb2luKHRoaXMucmFkaXgpO1xuICAgIH1cbiAgICAvKipcclxuICAgICAgQG92ZXJyaWRlXHJcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwidW5tYXNrZWRWYWx1ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlbW92ZVRob3VzYW5kc1NlcGFyYXRvcnModGhpcy5fbm9ybWFsaXplWmVyb3ModGhpcy52YWx1ZSkpLnJlcGxhY2UodGhpcy5yYWRpeCwgJy4nKTtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHVubWFza2VkVmFsdWUpIHtcbiAgICAgIF9zZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZE51bWJlci5wcm90b3R5cGUpLCBcInVubWFza2VkVmFsdWVcIiwgdW5tYXNrZWRWYWx1ZS5yZXBsYWNlKCcuJywgdGhpcy5yYWRpeCksIHRoaXMsIHRydWUpO1xuICAgIH1cbiAgICAvKiogUGFyc2VkIE51bWJlciAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwibnVtYmVyXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gTnVtYmVyKHRoaXMudW5tYXNrZWRWYWx1ZSk7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldChudW1iZXIpIHtcbiAgICAgIHRoaXMudW5tYXNrZWRWYWx1ZSA9IFN0cmluZyhudW1iZXIpO1xuICAgIH1cbiAgICAvKipcclxuICAgICAgQG92ZXJyaWRlXHJcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwidHlwZWRWYWx1ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMubnVtYmVyO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsdWUpIHtcbiAgICAgIHRoaXMubnVtYmVyID0gdmFsdWU7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICBJcyBuZWdhdGl2ZSBhbGxvd2VkXHJcbiAgICAgIEByZWFkb25seVxyXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImFsbG93TmVnYXRpdmVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLnNpZ25lZCB8fCB0aGlzLm1pbiAhPSBudWxsICYmIHRoaXMubWluIDwgMCB8fCB0aGlzLm1heCAhPSBudWxsICYmIHRoaXMubWF4IDwgMDtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gTWFza2VkTnVtYmVyO1xufShNYXNrZWQpO1xuTWFza2VkTnVtYmVyLkRFRkFVTFRTID0ge1xuICByYWRpeDogJywnLFxuICB0aG91c2FuZHNTZXBhcmF0b3I6ICcnLFxuICBtYXBUb1JhZGl4OiBbJy4nXSxcbiAgc2NhbGU6IDIsXG4gIHNpZ25lZDogZmFsc2UsXG4gIG5vcm1hbGl6ZVplcm9zOiB0cnVlLFxuICBwYWRGcmFjdGlvbmFsWmVyb3M6IGZhbHNlXG59O1xuXG4vKiogTWFza2luZyBieSBSZWdFeHAgKi9cblxudmFyIE1hc2tlZFJlZ0V4cCA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoX01hc2tlZCkge1xuICBfaW5oZXJpdHMoTWFza2VkUmVnRXhwLCBfTWFza2VkKTtcblxuICBmdW5jdGlvbiBNYXNrZWRSZWdFeHAoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1hc2tlZFJlZ0V4cCk7XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX2dldFByb3RvdHlwZU9mKE1hc2tlZFJlZ0V4cCkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoTWFza2VkUmVnRXhwLCBbe1xuICAgIGtleTogXCJfdXBkYXRlXCIsXG5cbiAgICAvKipcclxuICAgICAgQG92ZXJyaWRlXHJcbiAgICAgIEBwYXJhbSB7T2JqZWN0fSBvcHRzXHJcbiAgICAqL1xuICAgIHZhbHVlOiBmdW5jdGlvbiBfdXBkYXRlKG9wdHMpIHtcbiAgICAgIGlmIChvcHRzLm1hc2spIG9wdHMudmFsaWRhdGUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlLnNlYXJjaChvcHRzLm1hc2spID49IDA7XG4gICAgICB9O1xuXG4gICAgICBfZ2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWRSZWdFeHAucHJvdG90eXBlKSwgXCJfdXBkYXRlXCIsIHRoaXMpLmNhbGwodGhpcywgb3B0cyk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIE1hc2tlZFJlZ0V4cDtcbn0oTWFza2VkKTtcblxuLyoqIE1hc2tpbmcgYnkgY3VzdG9tIEZ1bmN0aW9uICovXG5cbnZhciBNYXNrZWRGdW5jdGlvbiA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoX01hc2tlZCkge1xuICBfaW5oZXJpdHMoTWFza2VkRnVuY3Rpb24sIF9NYXNrZWQpO1xuXG4gIGZ1bmN0aW9uIE1hc2tlZEZ1bmN0aW9uKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNYXNrZWRGdW5jdGlvbik7XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX2dldFByb3RvdHlwZU9mKE1hc2tlZEZ1bmN0aW9uKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhNYXNrZWRGdW5jdGlvbiwgW3tcbiAgICBrZXk6IFwiX3VwZGF0ZVwiLFxuXG4gICAgLyoqXHJcbiAgICAgIEBvdmVycmlkZVxyXG4gICAgICBAcGFyYW0ge09iamVjdH0gb3B0c1xyXG4gICAgKi9cbiAgICB2YWx1ZTogZnVuY3Rpb24gX3VwZGF0ZShvcHRzKSB7XG4gICAgICBpZiAob3B0cy5tYXNrKSBvcHRzLnZhbGlkYXRlID0gb3B0cy5tYXNrO1xuXG4gICAgICBfZ2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWRGdW5jdGlvbi5wcm90b3R5cGUpLCBcIl91cGRhdGVcIiwgdGhpcykuY2FsbCh0aGlzLCBvcHRzKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gTWFza2VkRnVuY3Rpb247XG59KE1hc2tlZCk7XG5cbi8qKiBEeW5hbWljIG1hc2sgZm9yIGNob29zaW5nIGFwcm9wcmlhdGUgbWFzayBpbiBydW4tdGltZSAqL1xudmFyIE1hc2tlZER5bmFtaWMgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9NYXNrZWQpIHtcbiAgX2luaGVyaXRzKE1hc2tlZER5bmFtaWMsIF9NYXNrZWQpO1xuXG4gIC8qKiBDdXJyZW50bHkgY2hvc2VuIG1hc2sgKi9cblxuICAvKiogQ29tcGxpbGVkIHtAbGluayBNYXNrZWR9IG9wdGlvbnMgKi9cblxuICAvKiogQ2hvb3NlcyB7QGxpbmsgTWFza2VkfSBkZXBlbmRpbmcgb24gaW5wdXQgdmFsdWUgKi9cblxuICAvKipcclxuICAgIEBwYXJhbSB7T2JqZWN0fSBvcHRzXHJcbiAgKi9cbiAgZnVuY3Rpb24gTWFza2VkRHluYW1pYyhvcHRzKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1hc2tlZER5bmFtaWMpO1xuXG4gICAgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfZ2V0UHJvdG90eXBlT2YoTWFza2VkRHluYW1pYykuY2FsbCh0aGlzLCBPYmplY3QuYXNzaWduKHt9LCBNYXNrZWREeW5hbWljLkRFRkFVTFRTLCB7fSwgb3B0cykpKTtcbiAgICBfdGhpcy5jdXJyZW50TWFzayA9IG51bGw7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG4gIC8qKlxyXG4gICAgQG92ZXJyaWRlXHJcbiAgKi9cblxuXG4gIF9jcmVhdGVDbGFzcyhNYXNrZWREeW5hbWljLCBbe1xuICAgIGtleTogXCJfdXBkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF91cGRhdGUob3B0cykge1xuICAgICAgX2dldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkRHluYW1pYy5wcm90b3R5cGUpLCBcIl91cGRhdGVcIiwgdGhpcykuY2FsbCh0aGlzLCBvcHRzKTtcblxuICAgICAgaWYgKCdtYXNrJyBpbiBvcHRzKSB7XG4gICAgICAgIC8vIG1hc2sgY291bGQgYmUgdG90YWxseSBkeW5hbWljIHdpdGggb25seSBgZGlzcGF0Y2hgIG9wdGlvblxuICAgICAgICB0aGlzLmNvbXBpbGVkTWFza3MgPSBBcnJheS5pc0FycmF5KG9wdHMubWFzaykgPyBvcHRzLm1hc2subWFwKGZ1bmN0aW9uIChtKSB7XG4gICAgICAgICAgcmV0dXJuIGNyZWF0ZU1hc2sobSk7XG4gICAgICAgIH0pIDogW107XG4gICAgICB9XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICBAb3ZlcnJpZGVcclxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJfYXBwZW5kQ2hhclJhd1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfYXBwZW5kQ2hhclJhdygpIHtcbiAgICAgIHZhciBkZXRhaWxzID0gdGhpcy5fYXBwbHlEaXNwYXRjaC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXG4gICAgICBpZiAodGhpcy5jdXJyZW50TWFzaykge1xuICAgICAgICB2YXIgX3RoaXMkY3VycmVudE1hc2s7XG5cbiAgICAgICAgZGV0YWlscy5hZ2dyZWdhdGUoKF90aGlzJGN1cnJlbnRNYXNrID0gdGhpcy5jdXJyZW50TWFzaykuX2FwcGVuZENoYXIuYXBwbHkoX3RoaXMkY3VycmVudE1hc2ssIGFyZ3VtZW50cykpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGV0YWlscztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiX2FwcGx5RGlzcGF0Y2hcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2FwcGx5RGlzcGF0Y2goKSB7XG4gICAgICB2YXIgYXBwZW5kZWQgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6ICcnO1xuICAgICAgdmFyIGZsYWdzID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICAgIHZhciBwcmV2VmFsdWVCZWZvcmVUYWlsID0gZmxhZ3MudGFpbCAmJiBmbGFncy5fYmVmb3JlVGFpbFN0YXRlICE9IG51bGwgPyBmbGFncy5fYmVmb3JlVGFpbFN0YXRlLl92YWx1ZSA6IHRoaXMudmFsdWU7XG4gICAgICB2YXIgaW5wdXRWYWx1ZSA9IHRoaXMucmF3SW5wdXRWYWx1ZTtcbiAgICAgIHZhciBpbnNlcnRWYWx1ZSA9IGZsYWdzLnRhaWwgJiYgZmxhZ3MuX2JlZm9yZVRhaWxTdGF0ZSAhPSBudWxsID8gLy8gJEZsb3dGaXhNZSAtIHRpcmVkIHRvIGZpZ2h0IHdpdGggdHlwZSBzeXN0ZW1cbiAgICAgIGZsYWdzLl9iZWZvcmVUYWlsU3RhdGUuX3Jhd0lucHV0VmFsdWUgOiBpbnB1dFZhbHVlO1xuICAgICAgdmFyIHRhaWxWYWx1ZSA9IGlucHV0VmFsdWUuc2xpY2UoaW5zZXJ0VmFsdWUubGVuZ3RoKTtcbiAgICAgIHZhciBwcmV2TWFzayA9IHRoaXMuY3VycmVudE1hc2s7XG4gICAgICB2YXIgZGV0YWlscyA9IG5ldyBDaGFuZ2VEZXRhaWxzKCk7XG4gICAgICB2YXIgcHJldk1hc2tTdGF0ZSA9IHByZXZNYXNrICYmIHByZXZNYXNrLnN0YXRlOyAvLyBjbG9uZSBmbGFncyB0byBwcmV2ZW50IG92ZXJ3cml0aW5nIGBfYmVmb3JlVGFpbFN0YXRlYFxuXG4gICAgICB0aGlzLmN1cnJlbnRNYXNrID0gdGhpcy5kb0Rpc3BhdGNoKGFwcGVuZGVkLCBPYmplY3QuYXNzaWduKHt9LCBmbGFncykpOyAvLyByZXN0b3JlIHN0YXRlIGFmdGVyIGRpc3BhdGNoXG5cbiAgICAgIGlmICh0aGlzLmN1cnJlbnRNYXNrKSB7XG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRNYXNrICE9PSBwcmV2TWFzaykge1xuICAgICAgICAgIC8vIGlmIG1hc2sgY2hhbmdlZCByZWFwcGx5IGlucHV0XG4gICAgICAgICAgdGhpcy5jdXJyZW50TWFzay5yZXNldCgpOyAvLyAkRmxvd0ZpeE1lIC0gaXQncyBvaywgd2UgZG9uJ3QgY2hhbmdlIGN1cnJlbnQgbWFzayBhYm92ZVxuXG4gICAgICAgICAgdmFyIGQgPSB0aGlzLmN1cnJlbnRNYXNrLmFwcGVuZChpbnNlcnRWYWx1ZSwge1xuICAgICAgICAgICAgcmF3OiB0cnVlXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgZGV0YWlscy50YWlsU2hpZnQgPSBkLmluc2VydGVkLmxlbmd0aCAtIHByZXZWYWx1ZUJlZm9yZVRhaWwubGVuZ3RoO1xuXG4gICAgICAgICAgaWYgKHRhaWxWYWx1ZSkge1xuICAgICAgICAgICAgLy8gJEZsb3dGaXhNZSAtIGl0J3Mgb2ssIHdlIGRvbid0IGNoYW5nZSBjdXJyZW50IG1hc2sgYWJvdmVcbiAgICAgICAgICAgIGRldGFpbHMudGFpbFNoaWZ0ICs9IHRoaXMuY3VycmVudE1hc2suYXBwZW5kKHRhaWxWYWx1ZSwge1xuICAgICAgICAgICAgICByYXc6IHRydWUsXG4gICAgICAgICAgICAgIHRhaWw6IHRydWVcbiAgICAgICAgICAgIH0pLnRhaWxTaGlmdDtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gRGlzcGF0Y2ggY2FuIGRvIHNvbWV0aGluZyBiYWQgd2l0aCBzdGF0ZSwgc29cbiAgICAgICAgICAvLyByZXN0b3JlIHByZXYgbWFzayBzdGF0ZVxuICAgICAgICAgIHRoaXMuY3VycmVudE1hc2suc3RhdGUgPSBwcmV2TWFza1N0YXRlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkZXRhaWxzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJfYXBwZW5kUGxhY2Vob2xkZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2FwcGVuZFBsYWNlaG9sZGVyKCkge1xuICAgICAgdmFyIGRldGFpbHMgPSB0aGlzLl9hcHBseURpc3BhdGNoLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cbiAgICAgIGlmICh0aGlzLmN1cnJlbnRNYXNrKSB7XG4gICAgICAgIGRldGFpbHMuYWdncmVnYXRlKHRoaXMuY3VycmVudE1hc2suX2FwcGVuZFBsYWNlaG9sZGVyKCkpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGV0YWlscztcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgIEBvdmVycmlkZVxyXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImRvRGlzcGF0Y2hcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZG9EaXNwYXRjaChhcHBlbmRlZCkge1xuICAgICAgdmFyIGZsYWdzID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICAgIHJldHVybiB0aGlzLmRpc3BhdGNoKGFwcGVuZGVkLCB0aGlzLCBmbGFncyk7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICBAb3ZlcnJpZGVcclxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJkb1ZhbGlkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRvVmFsaWRhdGUoKSB7XG4gICAgICB2YXIgX2dldDIsIF90aGlzJGN1cnJlbnRNYXNrMjtcblxuICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAoX2dldDIgPSBfZ2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWREeW5hbWljLnByb3RvdHlwZSksIFwiZG9WYWxpZGF0ZVwiLCB0aGlzKSkuY2FsbC5hcHBseShfZ2V0MiwgW3RoaXNdLmNvbmNhdChhcmdzKSkgJiYgKCF0aGlzLmN1cnJlbnRNYXNrIHx8IChfdGhpcyRjdXJyZW50TWFzazIgPSB0aGlzLmN1cnJlbnRNYXNrKS5kb1ZhbGlkYXRlLmFwcGx5KF90aGlzJGN1cnJlbnRNYXNrMiwgYXJncykpO1xuICAgIH1cbiAgICAvKipcclxuICAgICAgQG92ZXJyaWRlXHJcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwicmVzZXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgICBpZiAodGhpcy5jdXJyZW50TWFzaykgdGhpcy5jdXJyZW50TWFzay5yZXNldCgpO1xuICAgICAgdGhpcy5jb21waWxlZE1hc2tzLmZvckVhY2goZnVuY3Rpb24gKG0pIHtcbiAgICAgICAgcmV0dXJuIG0ucmVzZXQoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcclxuICAgICAgQG92ZXJyaWRlXHJcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwicmVtb3ZlXCIsXG5cbiAgICAvKipcclxuICAgICAgQG92ZXJyaWRlXHJcbiAgICAqL1xuICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICB2YXIgZGV0YWlscyA9IG5ldyBDaGFuZ2VEZXRhaWxzKCk7XG5cbiAgICAgIGlmICh0aGlzLmN1cnJlbnRNYXNrKSB7XG4gICAgICAgIHZhciBfdGhpcyRjdXJyZW50TWFzazM7XG5cbiAgICAgICAgZGV0YWlscy5hZ2dyZWdhdGUoKF90aGlzJGN1cnJlbnRNYXNrMyA9IHRoaXMuY3VycmVudE1hc2spLnJlbW92ZS5hcHBseShfdGhpcyRjdXJyZW50TWFzazMsIGFyZ3VtZW50cykpIC8vIHVwZGF0ZSB3aXRoIGRpc3BhdGNoXG4gICAgICAgIC5hZ2dyZWdhdGUodGhpcy5fYXBwbHlEaXNwYXRjaCgpKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRldGFpbHM7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICBAb3ZlcnJpZGVcclxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJleHRyYWN0SW5wdXRcIixcblxuICAgIC8qKlxyXG4gICAgICBAb3ZlcnJpZGVcclxuICAgICovXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGV4dHJhY3RJbnB1dCgpIHtcbiAgICAgIHZhciBfdGhpcyRjdXJyZW50TWFzazQ7XG5cbiAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRNYXNrID8gKF90aGlzJGN1cnJlbnRNYXNrNCA9IHRoaXMuY3VycmVudE1hc2spLmV4dHJhY3RJbnB1dC5hcHBseShfdGhpcyRjdXJyZW50TWFzazQsIGFyZ3VtZW50cykgOiAnJztcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgIEBvdmVycmlkZVxyXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImV4dHJhY3RUYWlsXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGV4dHJhY3RUYWlsKCkge1xuICAgICAgdmFyIF90aGlzJGN1cnJlbnRNYXNrNSwgX2dldDM7XG5cbiAgICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgICBhcmdzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRNYXNrID8gKF90aGlzJGN1cnJlbnRNYXNrNSA9IHRoaXMuY3VycmVudE1hc2spLmV4dHJhY3RUYWlsLmFwcGx5KF90aGlzJGN1cnJlbnRNYXNrNSwgYXJncykgOiAoX2dldDMgPSBfZ2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWREeW5hbWljLnByb3RvdHlwZSksIFwiZXh0cmFjdFRhaWxcIiwgdGhpcykpLmNhbGwuYXBwbHkoX2dldDMsIFt0aGlzXS5jb25jYXQoYXJncykpO1xuICAgIH1cbiAgICAvKipcclxuICAgICAgQG92ZXJyaWRlXHJcbiAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZG9Db21taXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZG9Db21taXQoKSB7XG4gICAgICBpZiAodGhpcy5jdXJyZW50TWFzaykgdGhpcy5jdXJyZW50TWFzay5kb0NvbW1pdCgpO1xuXG4gICAgICBfZ2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWREeW5hbWljLnByb3RvdHlwZSksIFwiZG9Db21taXRcIiwgdGhpcykuY2FsbCh0aGlzKTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgIEBvdmVycmlkZVxyXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIm5lYXJlc3RJbnB1dFBvc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBuZWFyZXN0SW5wdXRQb3MoKSB7XG4gICAgICB2YXIgX3RoaXMkY3VycmVudE1hc2s2LCBfZ2V0NDtcblxuICAgICAgZm9yICh2YXIgX2xlbjMgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4zKSwgX2tleTMgPSAwOyBfa2V5MyA8IF9sZW4zOyBfa2V5MysrKSB7XG4gICAgICAgIGFyZ3NbX2tleTNdID0gYXJndW1lbnRzW19rZXkzXTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY3VycmVudE1hc2sgPyAoX3RoaXMkY3VycmVudE1hc2s2ID0gdGhpcy5jdXJyZW50TWFzaykubmVhcmVzdElucHV0UG9zLmFwcGx5KF90aGlzJGN1cnJlbnRNYXNrNiwgYXJncykgOiAoX2dldDQgPSBfZ2V0KF9nZXRQcm90b3R5cGVPZihNYXNrZWREeW5hbWljLnByb3RvdHlwZSksIFwibmVhcmVzdElucHV0UG9zXCIsIHRoaXMpKS5jYWxsLmFwcGx5KF9nZXQ0LCBbdGhpc10uY29uY2F0KGFyZ3MpKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidmFsdWVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRNYXNrID8gdGhpcy5jdXJyZW50TWFzay52YWx1ZSA6ICcnO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsdWUpIHtcbiAgICAgIF9zZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZER5bmFtaWMucHJvdG90eXBlKSwgXCJ2YWx1ZVwiLCB2YWx1ZSwgdGhpcywgdHJ1ZSk7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICBAb3ZlcnJpZGVcclxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJ1bm1hc2tlZFZhbHVlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5jdXJyZW50TWFzayA/IHRoaXMuY3VycmVudE1hc2sudW5tYXNrZWRWYWx1ZSA6ICcnO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQodW5tYXNrZWRWYWx1ZSkge1xuICAgICAgX3NldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkRHluYW1pYy5wcm90b3R5cGUpLCBcInVubWFza2VkVmFsdWVcIiwgdW5tYXNrZWRWYWx1ZSwgdGhpcywgdHJ1ZSk7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICBAb3ZlcnJpZGVcclxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJ0eXBlZFZhbHVlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5jdXJyZW50TWFzayA/IHRoaXMuY3VycmVudE1hc2sudHlwZWRWYWx1ZSA6ICcnO1xuICAgIH0gLy8gcHJvYmFibHkgdHlwZWRWYWx1ZSBzaG91bGQgbm90IGJlIHVzZWQgd2l0aCBkeW5hbWljXG4gICAgLFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHZhbHVlKSB7XG4gICAgICB2YXIgdW5tYXNrZWRWYWx1ZSA9IFN0cmluZyh2YWx1ZSk7IC8vIGRvdWJsZSBjaGVjayBpdFxuXG4gICAgICBpZiAodGhpcy5jdXJyZW50TWFzaykge1xuICAgICAgICB0aGlzLmN1cnJlbnRNYXNrLnR5cGVkVmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdW5tYXNrZWRWYWx1ZSA9IHRoaXMuY3VycmVudE1hc2sudW5tYXNrZWRWYWx1ZTtcbiAgICAgIH1cblxuICAgICAgdGhpcy51bm1hc2tlZFZhbHVlID0gdW5tYXNrZWRWYWx1ZTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgIEBvdmVycmlkZVxyXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImlzQ29tcGxldGVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiAhIXRoaXMuY3VycmVudE1hc2sgJiYgdGhpcy5jdXJyZW50TWFzay5pc0NvbXBsZXRlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzdGF0ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIF9nZXQoX2dldFByb3RvdHlwZU9mKE1hc2tlZER5bmFtaWMucHJvdG90eXBlKSwgXCJzdGF0ZVwiLCB0aGlzKSwge1xuICAgICAgICBfcmF3SW5wdXRWYWx1ZTogdGhpcy5yYXdJbnB1dFZhbHVlLFxuICAgICAgICBjb21waWxlZE1hc2tzOiB0aGlzLmNvbXBpbGVkTWFza3MubWFwKGZ1bmN0aW9uIChtKSB7XG4gICAgICAgICAgcmV0dXJuIG0uc3RhdGU7XG4gICAgICAgIH0pLFxuICAgICAgICBjdXJyZW50TWFza1JlZjogdGhpcy5jdXJyZW50TWFzayxcbiAgICAgICAgY3VycmVudE1hc2s6IHRoaXMuY3VycmVudE1hc2sgJiYgdGhpcy5jdXJyZW50TWFzay5zdGF0ZVxuICAgICAgfSk7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldChzdGF0ZSkge1xuICAgICAgdmFyIGNvbXBpbGVkTWFza3MgPSBzdGF0ZS5jb21waWxlZE1hc2tzLFxuICAgICAgICAgIGN1cnJlbnRNYXNrUmVmID0gc3RhdGUuY3VycmVudE1hc2tSZWYsXG4gICAgICAgICAgY3VycmVudE1hc2sgPSBzdGF0ZS5jdXJyZW50TWFzayxcbiAgICAgICAgICBtYXNrZWRTdGF0ZSA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhzdGF0ZSwgW1wiY29tcGlsZWRNYXNrc1wiLCBcImN1cnJlbnRNYXNrUmVmXCIsIFwiY3VycmVudE1hc2tcIl0pO1xuXG4gICAgICB0aGlzLmNvbXBpbGVkTWFza3MuZm9yRWFjaChmdW5jdGlvbiAobSwgbWkpIHtcbiAgICAgICAgcmV0dXJuIG0uc3RhdGUgPSBjb21waWxlZE1hc2tzW21pXTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoY3VycmVudE1hc2tSZWYgIT0gbnVsbCkge1xuICAgICAgICB0aGlzLmN1cnJlbnRNYXNrID0gY3VycmVudE1hc2tSZWY7XG4gICAgICAgIHRoaXMuY3VycmVudE1hc2suc3RhdGUgPSBjdXJyZW50TWFzaztcbiAgICAgIH1cblxuICAgICAgX3NldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkRHluYW1pYy5wcm90b3R5cGUpLCBcInN0YXRlXCIsIG1hc2tlZFN0YXRlLCB0aGlzLCB0cnVlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwib3ZlcndyaXRlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5jdXJyZW50TWFzayA/IHRoaXMuY3VycmVudE1hc2sub3ZlcndyaXRlIDogX2dldChfZ2V0UHJvdG90eXBlT2YoTWFza2VkRHluYW1pYy5wcm90b3R5cGUpLCBcIm92ZXJ3cml0ZVwiLCB0aGlzKTtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KG92ZXJ3cml0ZSkge1xuICAgICAgY29uc29sZS53YXJuKCdcIm92ZXJ3cml0ZVwiIG9wdGlvbiBpcyBub3QgYXZhaWxhYmxlIGluIGR5bmFtaWMgbWFzaywgdXNlIHRoaXMgb3B0aW9uIGluIHNpYmxpbmdzJyk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIE1hc2tlZER5bmFtaWM7XG59KE1hc2tlZCk7XG5NYXNrZWREeW5hbWljLkRFRkFVTFRTID0ge1xuICBkaXNwYXRjaDogZnVuY3Rpb24gZGlzcGF0Y2goYXBwZW5kZWQsIG1hc2tlZCwgZmxhZ3MpIHtcbiAgICBpZiAoIW1hc2tlZC5jb21waWxlZE1hc2tzLmxlbmd0aCkgcmV0dXJuO1xuICAgIHZhciBpbnB1dFZhbHVlID0gbWFza2VkLnJhd0lucHV0VmFsdWU7IC8vIHNpbXVsYXRlIGlucHV0XG5cbiAgICB2YXIgaW5wdXRzID0gbWFza2VkLmNvbXBpbGVkTWFza3MubWFwKGZ1bmN0aW9uIChtLCBpbmRleCkge1xuICAgICAgbS5yZXNldCgpO1xuICAgICAgbS5hcHBlbmQoaW5wdXRWYWx1ZSwge1xuICAgICAgICByYXc6IHRydWVcbiAgICAgIH0pO1xuICAgICAgbS5hcHBlbmQoYXBwZW5kZWQsIGZsYWdzKTtcbiAgICAgIHZhciB3ZWlnaHQgPSBtLnJhd0lucHV0VmFsdWUubGVuZ3RoO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgd2VpZ2h0OiB3ZWlnaHQsXG4gICAgICAgIGluZGV4OiBpbmRleFxuICAgICAgfTtcbiAgICB9KTsgLy8gcG9wIG1hc2tzIHdpdGggbG9uZ2VyIHZhbHVlcyBmaXJzdFxuXG4gICAgaW5wdXRzLnNvcnQoZnVuY3Rpb24gKGkxLCBpMikge1xuICAgICAgcmV0dXJuIGkyLndlaWdodCAtIGkxLndlaWdodDtcbiAgICB9KTtcbiAgICByZXR1cm4gbWFza2VkLmNvbXBpbGVkTWFza3NbaW5wdXRzWzBdLmluZGV4XTtcbiAgfVxufTtcblxuLyoqXHJcbiAqIEFwcGxpZXMgbWFzayBvbiBlbGVtZW50LlxyXG4gKiBAY29uc3RydWN0b3JcclxuICogQHBhcmFtIHtIVE1MSW5wdXRFbGVtZW50fEhUTUxUZXh0QXJlYUVsZW1lbnR8TWFza0VsZW1lbnR9IGVsIC0gRWxlbWVudCB0byBhcHBseSBtYXNrXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gQ3VzdG9tIG1hc2sgb3B0aW9uc1xyXG4gKiBAcmV0dXJuIHtJbnB1dE1hc2t9XHJcbiAqL1xuXG5mdW5jdGlvbiBJTWFzayhlbCkge1xuICB2YXIgb3B0cyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gIC8vIGN1cnJlbnRseSBhdmFpbGFibGUgb25seSBmb3IgaW5wdXQtbGlrZSBlbGVtZW50c1xuICByZXR1cm4gbmV3IElucHV0TWFzayhlbCwgb3B0cyk7XG59XG4vKioge0BsaW5rIElucHV0TWFza30gKi9cblxuXG5JTWFzay5JbnB1dE1hc2sgPSBJbnB1dE1hc2s7XG4vKioge0BsaW5rIE1hc2tlZH0gKi9cblxuSU1hc2suTWFza2VkID0gTWFza2VkO1xuLyoqIHtAbGluayBNYXNrZWRQYXR0ZXJufSAqL1xuXG5JTWFzay5NYXNrZWRQYXR0ZXJuID0gTWFza2VkUGF0dGVybjtcbi8qKiB7QGxpbmsgTWFza2VkRW51bX0gKi9cblxuSU1hc2suTWFza2VkRW51bSA9IE1hc2tlZEVudW07XG4vKioge0BsaW5rIE1hc2tlZFJhbmdlfSAqL1xuXG5JTWFzay5NYXNrZWRSYW5nZSA9IE1hc2tlZFJhbmdlO1xuLyoqIHtAbGluayBNYXNrZWROdW1iZXJ9ICovXG5cbklNYXNrLk1hc2tlZE51bWJlciA9IE1hc2tlZE51bWJlcjtcbi8qKiB7QGxpbmsgTWFza2VkRGF0ZX0gKi9cblxuSU1hc2suTWFza2VkRGF0ZSA9IE1hc2tlZERhdGU7XG4vKioge0BsaW5rIE1hc2tlZFJlZ0V4cH0gKi9cblxuSU1hc2suTWFza2VkUmVnRXhwID0gTWFza2VkUmVnRXhwO1xuLyoqIHtAbGluayBNYXNrZWRGdW5jdGlvbn0gKi9cblxuSU1hc2suTWFza2VkRnVuY3Rpb24gPSBNYXNrZWRGdW5jdGlvbjtcbi8qKiB7QGxpbmsgTWFza2VkRHluYW1pY30gKi9cblxuSU1hc2suTWFza2VkRHluYW1pYyA9IE1hc2tlZER5bmFtaWM7XG4vKioge0BsaW5rIGNyZWF0ZU1hc2t9ICovXG5cbklNYXNrLmNyZWF0ZU1hc2sgPSBjcmVhdGVNYXNrO1xuLyoqIHtAbGluayBNYXNrRWxlbWVudH0gKi9cblxuSU1hc2suTWFza0VsZW1lbnQgPSBNYXNrRWxlbWVudDtcbi8qKiB7QGxpbmsgSFRNTE1hc2tFbGVtZW50fSAqL1xuXG5JTWFzay5IVE1MTWFza0VsZW1lbnQgPSBIVE1MTWFza0VsZW1lbnQ7XG5nLklNYXNrID0gSU1hc2s7XG5cbmV4cG9ydCBkZWZhdWx0IElNYXNrO1xuZXhwb3J0IHsgSFRNTE1hc2tFbGVtZW50LCBJbnB1dE1hc2ssIE1hc2tFbGVtZW50LCBNYXNrZWQsIE1hc2tlZERhdGUsIE1hc2tlZER5bmFtaWMsIE1hc2tlZEVudW0sIE1hc2tlZEZ1bmN0aW9uLCBNYXNrZWROdW1iZXIsIE1hc2tlZFBhdHRlcm4sIE1hc2tlZFJhbmdlLCBNYXNrZWRSZWdFeHAsIGNyZWF0ZU1hc2sgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWltYXNrLmVzbS5qcy5tYXBcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsImltcG9ydCBJbWFzayBmcm9tIFwiaW1hc2tcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvdW50ZXIge1xyXG4gIGNvbnN0cnVjdG9yKGVsZW0pIHtcclxuICAgIHRoaXMuY291bnRlciA9IGVsZW07XHJcblxyXG4gICAgdGhpcy5jb3VudGVySW5wdXQgPSB0aGlzLmNvdW50ZXIucXVlcnlTZWxlY3RvcihcImlucHV0XCIpO1xyXG4gICAgdGhpcy5jb3VudGVyT3B0aW9ucyA9IHRoaXMuY291bnRlci5xdWVyeVNlbGVjdG9yKFwidWxcIik7XHJcbiAgICB0aGlzLmNvdW50ZXJPcHRpb25zQ2xhc3MgPSB0aGlzLmNvdW50ZXJPcHRpb25zLmNsYXNzTmFtZTtcclxuICAgIHRoaXMuY291bnRlck9wdGlvbnNJdGVtcyA9IHRoaXMuY291bnRlck9wdGlvbnMucXVlcnlTZWxlY3RvckFsbChcImxpXCIpO1xyXG4gICAgdGhpcy5jb3VudGVyT3B0aW9uQXJiaXRhcnkgPSB0aGlzLmNvdW50ZXJPcHRpb25zLnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgIGAuJHt0aGlzLmNvdW50ZXJPcHRpb25zQ2xhc3N9LWl0ZW1fYXJiaXRhcnlgXHJcbiAgICApO1xyXG5cclxuICAgIHRoaXMuYWRkT3Blbk9wdGlvbkV2ZW50SGFuZGxlciA9IHRoaXMuYWRkT3Blbk9wdGlvbkV2ZW50LmJpbmQodGhpcyk7XHJcblxyXG4gICAgdGhpcy5pbml0KCk7XHJcbiAgfVxyXG5cclxuICBpbml0KCkge1xyXG4gICAgbGV0IG51bWJlck1hc2sgPSBJTWFzayh0aGlzLmNvdW50ZXJJbnB1dCwge1xyXG4gICAgICBtYXNrOiBOdW1iZXIsXHJcbiAgICAgIG1pbjogMSxcclxuICAgICAgbWF4OiAxMDAwLFxyXG4gICAgICB0aG91c2FuZHNTZXBhcmF0b3I6IFwiIFwiXHJcbiAgICB9KTtcclxuXHJcbiAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudCA9PiB7XHJcbiAgICAgIGlmIChldmVudC50YXJnZXQgIT09IHRoaXMuY291bnRlcklucHV0KSB7XHJcbiAgICAgICAgdGhpcy5jb3VudGVyT3B0aW9ucy5jbGFzc0xpc3QucmVtb3ZlKFxyXG4gICAgICAgICAgYCR7dGhpcy5jb3VudGVyT3B0aW9uc0NsYXNzfV9hY3RpdmVgXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5jb3VudGVySW5wdXQudmFsdWUgPSBcIjFcIjtcclxuXHJcbiAgICB0aGlzLmNvdW50ZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuYWRkT3Blbk9wdGlvbkV2ZW50SGFuZGxlcik7XHJcblxyXG4gICAgdGhpcy5jb3VudGVyT3B0aW9uc0l0ZW1zLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgICBcImNsaWNrXCIsXHJcbiAgICAgICAgKGl0ZW0uZm4gPSBldmVudCA9PiB7XHJcbiAgICAgICAgICB0aGlzLnNldElucHV0VmFsdWUoZXZlbnQsIGl0ZW0pO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmNvdW50ZXJPcHRpb25BcmJpdGFyeS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnQgPT4ge1xyXG4gICAgICB0aGlzLmNvdW50ZXJJbnB1dC5yZW1vdmVBdHRyaWJ1dGUoXCJyZWFkb25seVwiKTtcclxuICAgICAgdGhpcy5jb3VudGVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmFkZE9wZW5PcHRpb25FdmVudEhhbmRsZXIpO1xyXG4gICAgICB0aGlzLmNvdW50ZXJJbnB1dC5mb2N1cygpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5jb3VudGVySW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgZXZlbnQgPT4ge1xyXG4gICAgICBsZXQgdmFsdWUgPSBOdW1iZXIodGhpcy5jb3VudGVySW5wdXQudmFsdWUpO1xyXG5cclxuICAgICAgaWYgKHZhbHVlIDw9IDkpIHtcclxuICAgICAgICB0aGlzLmNvdW50ZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuYWRkT3Blbk9wdGlvbkV2ZW50SGFuZGxlcik7XHJcbiAgICAgICAgdGhpcy5jb3VudGVySW5wdXQuc2V0QXR0cmlidXRlKFwicmVhZG9ubHlcIiwgdHJ1ZSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgYWRkT3Blbk9wdGlvbkV2ZW50KGV2ZW50KSB7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIHRoaXMuY291bnRlck9wdGlvbnMuY2xhc3NMaXN0LmFkZChgJHt0aGlzLmNvdW50ZXJPcHRpb25zQ2xhc3N9X2FjdGl2ZWApO1xyXG4gIH1cclxuXHJcbiAgc2V0SW5wdXRWYWx1ZShldmVudCwgaXRlbSkge1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgbGV0IHJlZ0V4cCA9IC9bXlxcZF0vZztcclxuICAgIHRoaXMuY291bnRlcklucHV0LnZhbHVlID0gaXRlbVxyXG4gICAgICAucXVlcnlTZWxlY3RvcihcInNwYW5cIilcclxuICAgICAgLmlubmVyVGV4dC5yZXBsYWNlKHJlZ0V4cCwgXCJcIik7XHJcbiAgICB0aGlzLmNvdW50ZXJPcHRpb25zLmNsYXNzTGlzdC5yZW1vdmUoYCR7dGhpcy5jb3VudGVyT3B0aW9uc0NsYXNzfV9hY3RpdmVgKTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==