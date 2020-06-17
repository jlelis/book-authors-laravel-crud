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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/custom.js":
/*!********************************!*\
  !*** ./resources/js/custom.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function (win, doc) {\n  'use strict'; //Delete\n\n  function confirmDel(event) {\n    event.preventDefault(); //console.log(event.target.parentNode.href);\n\n    var token = doc.getElementsByName(\"_token\")[0].value;\n\n    if (confirm(\"Deseja mesmo apagar?\")) {\n      var ajax = new XMLHttpRequest();\n      ajax.open(\"DELETE\", event.target.parentNode.href);\n      ajax.setRequestHeader('X-CSRF-TOKEN', token);\n\n      ajax.onreadystatechange = function () {\n        if (ajax.readyState === 4 && ajax.status === 200) {\n          win.location.href = \"books\";\n        }\n      };\n\n      ajax.send();\n    } else {\n      return false;\n    }\n  }\n\n  if (doc.querySelector('.js-del')) {\n    var btn = doc.querySelectorAll('.js-del');\n\n    for (var i = 0; i < btn.length; i++) {\n      btn[i].addEventListener('click', confirmDel, false);\n    }\n  }\n})(window, document);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY3VzdG9tLmpzP2IxZDIiXSwibmFtZXMiOlsid2luIiwiZG9jIiwiY29uZmlybURlbCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ0b2tlbiIsImdldEVsZW1lbnRzQnlOYW1lIiwidmFsdWUiLCJjb25maXJtIiwiYWpheCIsIlhNTEh0dHBSZXF1ZXN0Iiwib3BlbiIsInRhcmdldCIsInBhcmVudE5vZGUiLCJocmVmIiwic2V0UmVxdWVzdEhlYWRlciIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsInJlYWR5U3RhdGUiLCJzdGF0dXMiLCJsb2NhdGlvbiIsInNlbmQiLCJxdWVyeVNlbGVjdG9yIiwiYnRuIiwicXVlcnlTZWxlY3RvckFsbCIsImkiLCJsZW5ndGgiLCJhZGRFdmVudExpc3RlbmVyIiwid2luZG93IiwiZG9jdW1lbnQiXSwibWFwcGluZ3MiOiJBQUFBLENBQUMsVUFBVUEsR0FBVixFQUFlQyxHQUFmLEVBQW9CO0FBQ2pCLGVBRGlCLENBR2pCOztBQUNBLFdBQVNDLFVBQVQsQ0FBb0JDLEtBQXBCLEVBQTJCO0FBQ3ZCQSxTQUFLLENBQUNDLGNBQU4sR0FEdUIsQ0FFdkI7O0FBQ0EsUUFBSUMsS0FBSyxHQUFHSixHQUFHLENBQUNLLGlCQUFKLENBQXNCLFFBQXRCLEVBQWdDLENBQWhDLEVBQW1DQyxLQUEvQzs7QUFDQSxRQUFJQyxPQUFPLENBQUMsc0JBQUQsQ0FBWCxFQUFxQztBQUNqQyxVQUFJQyxJQUFJLEdBQUcsSUFBSUMsY0FBSixFQUFYO0FBQ0FELFVBQUksQ0FBQ0UsSUFBTCxDQUFVLFFBQVYsRUFBb0JSLEtBQUssQ0FBQ1MsTUFBTixDQUFhQyxVQUFiLENBQXdCQyxJQUE1QztBQUNBTCxVQUFJLENBQUNNLGdCQUFMLENBQXNCLGNBQXRCLEVBQXNDVixLQUF0Qzs7QUFDQUksVUFBSSxDQUFDTyxrQkFBTCxHQUEwQixZQUFZO0FBQ2xDLFlBQUlQLElBQUksQ0FBQ1EsVUFBTCxLQUFvQixDQUFwQixJQUF5QlIsSUFBSSxDQUFDUyxNQUFMLEtBQWdCLEdBQTdDLEVBQWtEO0FBQzlDbEIsYUFBRyxDQUFDbUIsUUFBSixDQUFhTCxJQUFiLEdBQW9CLE9BQXBCO0FBQ0g7QUFDSixPQUpEOztBQUtBTCxVQUFJLENBQUNXLElBQUw7QUFDSCxLQVZELE1BVU87QUFDSCxhQUFPLEtBQVA7QUFDSDtBQUNKOztBQUNELE1BQUluQixHQUFHLENBQUNvQixhQUFKLENBQWtCLFNBQWxCLENBQUosRUFBa0M7QUFDOUIsUUFBSUMsR0FBRyxHQUFHckIsR0FBRyxDQUFDc0IsZ0JBQUosQ0FBcUIsU0FBckIsQ0FBVjs7QUFDQSxTQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdGLEdBQUcsQ0FBQ0csTUFBeEIsRUFBZ0NELENBQUMsRUFBakMsRUFBcUM7QUFDakNGLFNBQUcsQ0FBQ0UsQ0FBRCxDQUFILENBQU9FLGdCQUFQLENBQXdCLE9BQXhCLEVBQWlDeEIsVUFBakMsRUFBNkMsS0FBN0M7QUFDSDtBQUNKO0FBQ0osQ0E1QkQsRUE0Qkd5QixNQTVCSCxFQTRCV0MsUUE1QlgiLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvY3VzdG9tLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uICh3aW4sIGRvYykge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIC8vRGVsZXRlXG4gICAgZnVuY3Rpb24gY29uZmlybURlbChldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAvL2NvbnNvbGUubG9nKGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLmhyZWYpO1xuICAgICAgICBsZXQgdG9rZW4gPSBkb2MuZ2V0RWxlbWVudHNCeU5hbWUoXCJfdG9rZW5cIilbMF0udmFsdWU7XG4gICAgICAgIGlmIChjb25maXJtKFwiRGVzZWphIG1lc21vIGFwYWdhcj9cIikpIHtcbiAgICAgICAgICAgIGxldCBhamF4ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgICAgICBhamF4Lm9wZW4oXCJERUxFVEVcIiwgZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUuaHJlZik7XG4gICAgICAgICAgICBhamF4LnNldFJlcXVlc3RIZWFkZXIoJ1gtQ1NSRi1UT0tFTicsIHRva2VuKTtcbiAgICAgICAgICAgIGFqYXgub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmIChhamF4LnJlYWR5U3RhdGUgPT09IDQgJiYgYWpheC5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICB3aW4ubG9jYXRpb24uaHJlZiA9IFwiYm9va3NcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgYWpheC5zZW5kKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGRvYy5xdWVyeVNlbGVjdG9yKCcuanMtZGVsJykpIHtcbiAgICAgICAgbGV0IGJ0biA9IGRvYy5xdWVyeVNlbGVjdG9yQWxsKCcuanMtZGVsJyk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYnRuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBidG5baV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjb25maXJtRGVsLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9XG59KSh3aW5kb3csIGRvY3VtZW50KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/js/custom.js\n");

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc2Fzcy9hcHAuc2Nzcz8wZTE1Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Ii4vcmVzb3VyY2VzL3Nhc3MvYXBwLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/sass/app.scss\n");

/***/ }),

/***/ 0:
/*!****************************************************************!*\
  !*** multi ./resources/js/custom.js ./resources/sass/app.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/jeferson/Documentos/Projeto estudo site webFoco/blog/resources/js/custom.js */"./resources/js/custom.js");
module.exports = __webpack_require__(/*! /home/jeferson/Documentos/Projeto estudo site webFoco/blog/resources/sass/app.scss */"./resources/sass/app.scss");


/***/ })

/******/ });