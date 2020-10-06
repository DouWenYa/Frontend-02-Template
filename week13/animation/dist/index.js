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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./animation.js":
/*!**********************!*\
  !*** ./animation.js ***!
  \**********************/
/*! exports provided: TimeLine, Animation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TimeLine\", function() { return TimeLine; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Animation\", function() { return Animation; });\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar TICK = Symbol('tick');\nvar TICK_HANDLER = Symbol('tick-handler');\nvar ANIMATIONS = Symbol('animations');\nvar START_TIME = Symbol('start-time');\nvar POUSE_TIME = Symbol('pouse-time');\nvar POUSE_START = Symbol('pouse-start');\n\nvar TimeLine = /*#__PURE__*/function () {\n  function TimeLine() {\n    _classCallCheck(this, TimeLine);\n\n    this[ANIMATIONS] = new Set();\n    this[START_TIME] = new Map();\n    this.state = \"inited\";\n  }\n\n  _createClass(TimeLine, [{\n    key: \"start\",\n    value: function start() {\n      var _this = this;\n\n      if (this.state !== \"inited\") {\n        return;\n      }\n\n      this.state = 'start';\n      var startTime = Date.now();\n      this[POUSE_TIME] = 0;\n\n      this[TICK] = function () {\n        var now = Date.now();\n\n        var _iterator = _createForOfIteratorHelper(_this[ANIMATIONS]),\n            _step;\n\n        try {\n          for (_iterator.s(); !(_step = _iterator.n()).done;) {\n            var animate = _step.value;\n            var t = void 0;\n\n            if (_this[START_TIME].get(animate) < startTime) {\n              t = now - startTime - _this[POUSE_TIME] - animate.delay;\n            } else {\n              t = now - _this[START_TIME].get(animate) - _this[POUSE_TIME] - animate.delay;\n            }\n\n            if (animate.duration < t) {\n              _this[ANIMATIONS][\"delete\"](animate);\n\n              t = animate.duration;\n            }\n\n            if (t > 0) {\n              animate.receive(t);\n            }\n          }\n        } catch (err) {\n          _iterator.e(err);\n        } finally {\n          _iterator.f();\n        }\n\n        _this[TICK_HANDLER] = requestAnimationFrame(_this[TICK]);\n      };\n\n      this[TICK]();\n    }\n  }, {\n    key: \"pouse\",\n    value: function pouse() {\n      if (this.state !== 'start') {\n        return;\n      }\n\n      this.state = 'pouse';\n      this[POUSE_START] = Date.now();\n      cancelAnimationFrame(this[TICK_HANDLER]);\n    }\n  }, {\n    key: \"resume\",\n    value: function resume() {\n      if (this.state !== 'pouse') {\n        return;\n      }\n\n      this.state = 'start';\n      this[POUSE_TIME] += Date.now() - this[POUSE_START];\n      this[TICK]();\n    }\n  }, {\n    key: \"reset\",\n    value: function reset() {\n      this.state = 'inited';\n      this.pouse();\n      this[POUSE_TIME] = 0;\n      this[POUSE_START] = 0;\n      this[TICK_HANDLER] = null;\n      this[ANIMATIONS] = new Set();\n      this[START_TIME] = new Map();\n    }\n  }, {\n    key: \"add\",\n    value: function add(animate, delay) {\n      if (arguments.length < 2) {\n        delay = Date.now();\n      }\n\n      this[ANIMATIONS].add(animate);\n      this[START_TIME].set(animate, delay);\n    }\n  }]);\n\n  return TimeLine;\n}(); ///\n\n\nvar Animation = /*#__PURE__*/function () {\n  function Animation(obj, prop, startValue, endValue, duration, delay, timeFn, template) {\n    _classCallCheck(this, Animation);\n\n    this.obj = obj;\n    this.prop = prop;\n    this.startValue = startValue;\n    this.endValue = endValue;\n    this.duration = duration;\n    this.delay = delay;\n\n    this.timeFn = timeFn || function (v) {\n      return v;\n    };\n\n    this.template = template || function (v) {\n      return v;\n    };\n  }\n\n  _createClass(Animation, [{\n    key: \"receive\",\n    value: function receive(time) {\n      console.log(time);\n      var gut = this.endValue - this.startValue;\n      var progress = this.timeFn(time / this.duration);\n      this.obj[this.prop] = this.template(this.startValue + gut * progress);\n    }\n  }]);\n\n  return Animation;\n}();\n\n\n\n//# sourceURL=webpack:///./animation.js?");

/***/ }),

/***/ "./carousel.js":
/*!*********************!*\
  !*** ./carousel.js ***!
  \*********************/
/*! exports provided: Carousel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Carousel\", function() { return Carousel; });\n/* harmony import */ var _framework_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./framework.js */ \"./framework.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\nvar Carousel = /*#__PURE__*/function (_Component) {\n  _inherits(Carousel, _Component);\n\n  var _super = _createSuper(Carousel);\n\n  function Carousel() {\n    var _this;\n\n    _classCallCheck(this, Carousel);\n\n    _this = _super.call(this);\n    _this.attributes = Object.create(null);\n    return _this;\n  }\n\n  _createClass(Carousel, [{\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      this.root = document.createElement('div');\n      this.root.classList.add('container');\n\n      var _iterator = _createForOfIteratorHelper(this.attributes.src),\n          _step;\n\n      try {\n        for (_iterator.s(); !(_step = _iterator.n()).done;) {\n          var attr = _step.value;\n          var node = document.createElement('div');\n          node.style.backgroundImage = \"url(\".concat(attr, \")\");\n          this.root.append(node);\n        }\n        /* let curIndex = 0\r\n        setInterval(() => {\r\n          let childs = this.root.children\r\n          let nextIndex = (curIndex + 1) % childs.length\r\n          let curNode = childs[curIndex]\r\n          let nextNode = childs[nextIndex]\r\n          nextNode.style.transition = 'none'\r\n          nextNode.style.transform = `translateX(${100 - 100 * nextIndex}%)`\r\n          setTimeout(() => {\r\n            nextNode.style.transition = ''\r\n            curNode.style.transform = `translateX(-${100 + 100 * curIndex}%)`\r\n            nextNode.style.transform = `translateX(-${100 * nextIndex}%)`\r\n            curIndex = nextIndex\r\n          }, 16)\r\n          }, 2000) */\n\n      } catch (err) {\n        _iterator.e(err);\n      } finally {\n        _iterator.f();\n      }\n\n      var position = 0;\n      this.root.addEventListener('mousedown', function (e) {\n        var children = _this2.root.children;\n\n        var _children$0$getBoundi = children[0].getBoundingClientRect(),\n            width = _children$0$getBoundi.width;\n\n        var startX = e.clientX;\n\n        var move = function move(e) {\n          var x = e.clientX - startX;\n          var cur = position - (x - x % width) / width;\n\n          for (var _i = 0, _arr = [-1, 0, 1]; _i < _arr.length; _i++) {\n            var offset = _arr[_i];\n            var pos = cur + offset;\n            pos = (pos + children.length) % children.length;\n            children[pos].style.transition = 'none';\n            children[pos].style.transform = \"translateX(\".concat(-pos * width + offset * width + x % width, \"px)\");\n          }\n        };\n\n        var up = function up(e) {\n          var x = e.clientX - startX;\n          position = position - Math.round(x / width);\n\n          for (var _i2 = 0, _arr2 = [0, -Math.sign(Math.round(x / width) - x + width / 2 * Math.sign(x))]; _i2 < _arr2.length; _i2++) {\n            var offset = _arr2[_i2];\n            var pos = position + offset;\n            pos = (pos + children.length) % children.length;\n            children[pos].style.transition = '';\n            children[pos].style.transform = \"translateX(\".concat(-pos * width + offset * width, \"px)\");\n          }\n\n          document.removeEventListener('mouseup', up);\n          document.removeEventListener('mousemove', move);\n        };\n\n        document.addEventListener('mouseup', up);\n        document.addEventListener('mousemove', move);\n      });\n      return this.root;\n    }\n  }, {\n    key: \"setAttribute\",\n    value: function setAttribute(name, val) {\n      this.attributes[name] = val;\n    }\n  }, {\n    key: \"mountTo\",\n    value: function mountTo(el) {\n      el.appendChild(this.render());\n    }\n  }]);\n\n  return Carousel;\n}(_framework_js__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n//# sourceURL=webpack:///./carousel.js?");

/***/ }),

/***/ "./framework.js":
/*!**********************!*\
  !*** ./framework.js ***!
  \**********************/
/*! exports provided: createElement, Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createElement\", function() { return createElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Component\", function() { return Component; });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction createElement(el, attr) {\n  var element = null;\n\n  if (typeof el === 'string') {\n    element = new Elem(el);\n  } else {\n    element = new el();\n  }\n\n  for (var key in attr) {\n    element.setAttribute(key, attr[key]);\n  }\n\n  for (var _len = arguments.length, childs = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {\n    childs[_key - 2] = arguments[_key];\n  }\n\n  for (var _i = 0, _childs = childs; _i < _childs.length; _i++) {\n    var child = _childs[_i];\n\n    if (typeof child === 'string') {\n      child = new TextNode(child);\n    }\n\n    element.appendChild(child);\n  }\n\n  return element;\n}\nvar Component = /*#__PURE__*/function () {\n  function Component() {// this.root = this.render()\n\n    _classCallCheck(this, Component);\n  }\n\n  _createClass(Component, [{\n    key: \"setAttribute\",\n    value: function setAttribute(key, val) {\n      this.root.setAttribute(key, val);\n    }\n  }, {\n    key: \"appendChild\",\n    value: function appendChild(child) {\n      child.mountTo(this.root);\n    }\n  }, {\n    key: \"mountTo\",\n    value: function mountTo(el) {\n      el.appendChild(this.root);\n    }\n  }]);\n\n  return Component;\n}();\n\nvar Elem = /*#__PURE__*/function (_Component) {\n  _inherits(Elem, _Component);\n\n  var _super = _createSuper(Elem);\n\n  function Elem(type) {\n    var _this;\n\n    _classCallCheck(this, Elem);\n\n    _this.root = document.createElement(type);\n    return _possibleConstructorReturn(_this);\n  }\n\n  return Elem;\n}(Component);\n\nvar TextNode = /*#__PURE__*/function (_Component2) {\n  _inherits(TextNode, _Component2);\n\n  var _super2 = _createSuper(TextNode);\n\n  function TextNode(type) {\n    var _this2;\n\n    _classCallCheck(this, TextNode);\n\n    _this2.root = document.createTextNode(type);\n    return _possibleConstructorReturn(_this2);\n  }\n\n  return TextNode;\n}(Component); // class Div extends Component {\n//   constructor() {\n//     this.root = document.createElement('div')\n//   }\n// }\n\n//# sourceURL=webpack:///./framework.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _framework_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./framework.js */ \"./framework.js\");\n/* harmony import */ var _carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./carousel */ \"./carousel.js\");\n/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./animation */ \"./animation.js\");\n\n\n\nvar imgs = ['../image/1.jpg', '../image/2.jpg', '../image/3.jpg', '../image/4.jpg', '../image/5.jpeg'];\nvar a = Object(_framework_js__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(_carousel__WEBPACK_IMPORTED_MODULE_1__[\"Carousel\"], {\n  src: imgs\n});\na.mountTo(document.body);\nvar T = new _animation__WEBPACK_IMPORTED_MODULE_2__[\"TimeLine\"]();\nT.add(new _animation__WEBPACK_IMPORTED_MODULE_2__[\"Animation\"]({}, 'a', 0, 100, 1000, null));\nT.start();\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

/******/ });