// { "framework": "Vue"} 

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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 236);
/******/ })
/************************************************************************/
/******/ ({

/***/ 106:
/***/ (function(module, exports) {

module.exports = {
  "message": {
    "padding": 16,
    "flexDirection": "row",
    "backgroundColor": "#ffffff",
    "justifyContent": "flex-start"
  },
  "message-mine": {
    "padding": 16,
    "flexDirection": "row",
    "backgroundColor": "#ffffff",
    "justifyContent": "flex-end"
  },
  "body": {
    "padding": 20,
    "borderRadius": 12,
    "color": "#333333",
    "borderWidth": 2,
    "borderStyle": "solid",
    "borderColor": "#dddddd"
  },
  "body-mine": {
    "padding": 20,
    "borderRadius": 12,
    "color": "#333333",
    "borderWidth": 2,
    "borderStyle": "solid",
    "borderColor": "#dddddd",
    "backgroundColor": "#ddffdd"
  }
}

/***/ }),

/***/ 115:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: _vm.messageClassNames
  }, [_c('text', {
    class: _vm.bodyClassNames
  }, [_vm._v(_vm._s(_vm.nameWithSuffix) + _vm._s(_vm.body))])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 236:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(106)
)

/* script */
__vue_exports__ = __webpack_require__(89)

/* template */
var __vue_template__ = __webpack_require__(115)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/fengfeng/Desktop/bb8/front/bb8-weex/src/page/chat/message.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-e4570d9a"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__
module.exports.el = 'true'
new Vue(module.exports)


/***/ }),

/***/ 89:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//

exports.default = {
  props: ['body', 'name', 'mine'],
  computed: {
    messageClassNames: function messageClassNames() {
      var classBase = 'message';
      if (this.mine) {
        classBase += '-mine';
      }
      return [classBase];
    },
    bodyClassNames: function bodyClassNames() {
      var classBase = 'body';
      if (this.mine) {
        classBase += '-mine';
      }
      return [classBase];
    },
    nameWithSuffix: function nameWithSuffix() {
      if (this.mine) {
        return '';
      } else {
        return this.name + ': ';
      }
    }
  }
};

/***/ })

/******/ });