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
/******/ 	return __webpack_require__(__webpack_require__.s = 360);
/******/ })
/************************************************************************/
/******/ ({

/***/ 121:
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

exports.default = {
    data: function data() {
        return {};
    },
    created: function created() {},

    methods: {}
};

/***/ }),

/***/ 122:
/***/ (function(module, exports) {

module.exports = {
  "iconfont": {
    "fontFamily": "iconfont"
  },
  "wrapper": {
    "position": "fixed",
    "top": 0,
    "left": 0,
    "right": 0,
    "height": 114,
    "paddingTop": 44,
    "display": "flex",
    "flexWrap": "nowrap",
    "flexDirection": "row",
    "justifyContent": "space-around",
    "zIndex": 101,
    "backgroundColor": "#fafafa",
    "opacity": 0.99
  },
  "w-ipx": {
    "height": 154,
    "paddingTop": 84
  },
  "scan": {
    "height": 80,
    "width": 96
  },
  "notice": {
    "height": 80,
    "width": 96
  },
  "ic": {
    "textAlign": "center",
    "color": "#666666",
    "fontWeight": "300",
    "fontSize": 32
  },
  "txt": {
    "textAlign": "center",
    "color": "#666666",
    "fontWeight": "300",
    "fontSize": 18
  },
  "search": {
    "textAlign": "center",
    "color": "#666666",
    "fontWeight": "300",
    "flex": 1,
    "height": 60,
    "fontSize": 26,
    "paddingTop": 13,
    "backgroundColor": "#ededed",
    "borderRadius": 8
  }
}

/***/ }),

/***/ 124:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: ['wrapper', _vm.isIpx && _vm.isIpx() ? 'w-ipx' : '']
  }, [_vm._m(0), _c('text', {
    staticClass: ["iconfont"],
    on: {
      "click": function($event) {
        _vm.jumpWeb()
      }
    }
  }, [_vm._v("币行情")]), _vm._m(1)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["scan"]
  }, [_c('text', {
    staticClass: ["ic", "iconfont"]
  }, [_vm._v("")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["notice"]
  }, [_c('text', {
    staticClass: ["ic", "iconfont"]
  }, [_vm._v("")])])
}]}
module.exports.render._withStripped = true

/***/ }),

/***/ 129:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(122)
)

/* script */
__vue_exports__ = __webpack_require__(121)

/* template */
var __vue_template__ = __webpack_require__(124)
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
__vue_options__.__file = "/Users/fengfeng/Desktop/bb8/front/bb8-weex/src/page/home/header.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-041c062a"
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


/***/ }),

/***/ 134:
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

var dom = weex.requireModule('dom');
var animation = weex.requireModule('animation');
var modal = weex.requireModule('modal');

exports.default = {
    data: function data() {
        return {
            jLPosition: "left:30px;width:82px;",
            navIndex: 0,
            sortBy: '', // 筛选的条件
            Activity: [],
            Delivery: [],
            delivery_mode: null, // 选中的配送方式
            support_ids: [], // 选中的商铺活动列表
            filterNum: 0 // 所选中的所有样式的集合

        };
    },
    created: function created() {},
    mounted: function mounted() {
        // this.$router.push('/information');
        this.initJLine();
    },


    methods: {
        initJLine: function initJLine() {
            // if(!this.$refs.t0) return;
            // let l = this.$refs.t0.$el.offsetLeft;
            // let w = this.$refs.t0.$el.offsetWidth;
            // this.jLPosition = ["left:",l+30,"px;","width:",w-60,"px;"].join("");
        },

        chooseChannel: function chooseChannel(idx, event) {
            this.navIndex = idx;
            // modal.toast({ message: idx+'--',  duration: 1 });
            if (idx == 0) {
                //modal.toast({ message: '点击了标签页',  duration: 1 });
                this.$router.push('/information');
            } else if (idx == 1) {
                this.$router.push('/globalmedia');
            } else if (idx == 2) {
                this.$router.push('/exchangenotice');
            } else if (idx == 3) {
                this.$router.push('/exchangetwitter');
            } else if (idx == 4) {
                this.$router.push('/voice');
            } else if (idx == 5) {
                this.$router.push('/newcoin');
            } else if (idx == 6) {
                this.$router.push('/policy');
            } else if (idx == 7) {
                this.$router.push('/home');
            }

            var el = this.$refs['t' + idx];
            var result = dom.getComponentRect(el, function (option) {
                if (option.size.left > 420) {
                    dom.scrollToElement(el, { offset: -option.size.left / 2 });
                }
            });
        }

    }
};

/***/ }),

/***/ 147:
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "position": "fixed",
    "top": 114,
    "left": 0,
    "right": 0,
    "height": 54,
    "zIndex": 10,
    "backgroundColor": "#fafafa",
    "borderBottomWidth": 1,
    "borderBottomColor": "#d9d9d9"
  },
  "w-ipx": {
    "top": 154
  },
  "tab-i": {
    "flexFlow": "column",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "scroller": {
    "height": 60,
    "paddingRight": 50,
    "flexDirection": "row"
  },
  "i-c": {
    "paddingTop": 10,
    "paddingBottom": 6,
    "paddingLeft": 20,
    "paddingRight": 20,
    "fontSize": 25,
    "color": "#999999"
  },
  "c-act": {
    "color": "#000000"
  },
  "j-uline": {
    "width": 100,
    "height": 2,
    "backgroundColor": "#000000"
  },
  "more": {
    "position": "absolute",
    "top": 0,
    "right": 0,
    "height": 52,
    "width": 50,
    "backgroundColor": "#fafafa",
    "textAlign": "center",
    "paddingTop": 10,
    "opacity": 0.6,
    "boxShadow": "-6px -4px 4px #fafafa"
  }
}

/***/ }),

/***/ 158:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: ['wrapper', _vm.isIpx() ? 'w-ipx' : '']
  }, [_c('scroller', {
    staticClass: ["scroller"],
    attrs: {
      "scrollDirection": "horizontal",
      "loadmoreoffset": "750px",
      "showScrollbar": "false"
    }
  }, [_c('div', {
    staticClass: ["tab-i"]
  }, [_c('text', {
    ref: "t0",
    class: ['i-c', _vm.navIndex == 0 ? 'c-act' : ''],
    on: {
      "click": function($event) {
        _vm.chooseChannel(0)
      }
    }
  }, [_vm._v("资讯")]), (_vm.navIndex == 0) ? _c('div', {
    staticClass: ["j-uline"]
  }) : _vm._e()]), _c('div', {
    staticClass: ["tab-i"]
  }, [_c('text', {
    ref: "t1",
    class: ['i-c', _vm.navIndex == 1 ? 'c-act' : ''],
    on: {
      "click": function($event) {
        _vm.chooseChannel(1)
      }
    }
  }, [_vm._v("全球媒体")]), (_vm.navIndex == 1) ? _c('div', {
    staticClass: ["j-uline"]
  }) : _vm._e()]), _c('div', {
    staticClass: ["tab-i"]
  }, [_c('text', {
    ref: "t2",
    class: ['i-c', _vm.navIndex == 2 ? 'c-act' : ''],
    on: {
      "click": function($event) {
        _vm.chooseChannel(2)
      }
    }
  }, [_vm._v("交易所公告")]), (_vm.navIndex == 2) ? _c('div', {
    staticClass: ["j-uline"]
  }) : _vm._e()]), _c('div', {
    staticClass: ["tab-i"]
  }, [_c('text', {
    ref: "t3",
    class: ['i-c', _vm.navIndex == 3 ? 'c-act' : ''],
    on: {
      "click": function($event) {
        _vm.chooseChannel(3)
      }
    }
  }, [_vm._v("交易所推特")]), (_vm.navIndex == 3) ? _c('div', {
    staticClass: ["j-uline"]
  }) : _vm._e()]), _c('div', {
    staticClass: ["tab-i"]
  }, [_c('text', {
    ref: "t4",
    class: ['i-c', _vm.navIndex == 4 ? 'c-act' : ''],
    on: {
      "click": function($event) {
        _vm.chooseChannel(4)
      }
    }
  }, [_vm._v("大V声音")]), (_vm.navIndex == 4) ? _c('div', {
    staticClass: ["j-uline"]
  }) : _vm._e()]), _c('div', {
    staticClass: ["tab-i"]
  }, [_c('text', {
    ref: "t5",
    class: ['i-c', _vm.navIndex == 5 ? 'c-act' : ''],
    on: {
      "click": function($event) {
        _vm.chooseChannel(5)
      }
    }
  }, [_vm._v("新币时讯")]), (_vm.navIndex == 5) ? _c('div', {
    staticClass: ["j-uline"]
  }) : _vm._e()]), _c('div', {
    staticClass: ["tab-i"]
  }, [_c('text', {
    ref: "t6",
    class: ['i-c', _vm.navIndex == 6 ? 'c-act' : ''],
    on: {
      "click": function($event) {
        _vm.chooseChannel(6)
      }
    }
  }, [_vm._v("监管政策")]), (_vm.navIndex == 6) ? _c('div', {
    staticClass: ["j-uline"]
  }) : _vm._e()]), _c('div', {
    staticClass: ["tab-i"]
  }, [_c('text', {
    ref: "t7",
    class: ['i-c', _vm.navIndex == 7 ? 'c-act' : ''],
    on: {
      "click": function($event) {
        _vm.chooseChannel(7)
      }
    }
  }, [_vm._v("返回主页")]), (_vm.navIndex == 7) ? _c('div', {
    staticClass: ["j-uline"]
  }) : _vm._e()])])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 198:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _header = __webpack_require__(129);

var _header2 = _interopRequireDefault(_header);

var _topTab = __webpack_require__(302);

var _topTab2 = _interopRequireDefault(_topTab);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import topTab from '../home/topChannel.vue';
//
//
//
//
//
//
//
//

exports.default = {
    components: {
        'home-header': _header2.default,
        'top-tab': _topTab2.default
    },
    data: function data() {
        return {
            YXBanners: [],
            goodsList: [],
            showLoading: 'hide'
        };
    },
    created: function created() {},

    methods: {}
};

/***/ }),

/***/ 267:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('home-header'), _c('top-tab'), _c('router-view')], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 302:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(147)
)

/* script */
__vue_exports__ = __webpack_require__(134)

/* template */
var __vue_template__ = __webpack_require__(158)
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
__vue_options__.__file = "/Users/fengfeng/Desktop/bb8/front/bb8-weex/src/page/flashnews/topTab.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-51f1c7a2"
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


/***/ }),

/***/ 360:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* script */
__vue_exports__ = __webpack_require__(198)

/* template */
var __vue_template__ = __webpack_require__(267)
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
__vue_options__.__file = "/Users/fengfeng/Desktop/bb8/front/bb8-weex/src/page/flashnews/flash-news.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
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


/***/ })

/******/ });