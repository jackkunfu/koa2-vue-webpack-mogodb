webpackJsonp([14],{

/***/ 130:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(131);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(22)("5104372c", content, true);

/***/ }),

/***/ 131:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(21)(false);
// imports


// module
exports.push([module.i, ".top[data-v-0cd400dc]{background-image:url(" + __webpack_require__(132) + ");background-size:100% 100%;height:9.6rem;color:#fff;padding-top:1rem}.top .fee[data-v-0cd400dc]{font-size:2rem;line-height:4rem;margin-top:1.6rem;font-weight:700}", ""]);

// exports


/***/ }),

/***/ 132:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/bg2.343d2be.png";

/***/ }),

/***/ 133:
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

exports.default = {
    name: 'set-count',
    data: function data() {},

    methods: {
        pay: function pay() {}
    }
};

/***/ }),

/***/ 134:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "setCount"
  }, [_vm._m(0), _c('div', {
    staticClass: "sort",
    staticStyle: {
      "margin-top": "0.5rem"
    }
  }, [_vm._v("绑定说明")]), _c('div', {
    staticClass: "fix-bottom",
    on: {
      "click": _vm.pay
    }
  }, [_c('div', [_vm._v("立即支付")])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "top"
  }, [_vm._v("绑定账户费用（元）"), _c('div', {
    staticClass: "fee"
  }, [_vm._v("0.01")])])
}]}

/***/ }),

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(130)
}
var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(133),
  /* template */
  __webpack_require__(134),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-0cd400dc",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ })

});