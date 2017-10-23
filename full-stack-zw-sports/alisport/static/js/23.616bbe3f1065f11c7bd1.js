webpackJsonp([23],{

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(92)
}
var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(94),
  /* template */
  __webpack_require__(95),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-4170dd01",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 92:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(93);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(22)("21d7c3f2", content, true);

/***/ }),

/***/ 93:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(21)(false);
// imports


// module
exports.push([module.i, ".title[data-v-4170dd01]{font-size:.9rem;background:#fff;border-bottom:1px solid #c1c1c1;color:#666;line-height:2rem;text-align:left;padding:0 .5rem}.key[data-v-4170dd01]{width:25%;text-align:center;font-size:1rem;padding:.3rem;display:inline-block;vertical-align:middle;background:#fff}.key.choose[data-v-4170dd01]{color:#0ae}.btn[data-v-4170dd01]{width:12rem;height:3rem;margin:2rem auto;text-align:center;line-height:3rem;background:#0ae;color:#fff;border-radius:.5rem}", ""]);

// exports


/***/ }),

/***/ 94:
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

exports.default = {
    name: 'downMemberList',
    data: function data() {
        return {
            id: this.$route.query.id,
            keys: [],
            key: [{ key: "name", str: '真实姓名' }, { key: "sex", str: '性别' }, { key: "mobile", str: '手机号' }, { key: "email", str: '邮箱' }, { key: "country", str: '国籍' }, { key: "city", str: '城市' }, { key: "address", str: '详细地址' }, { key: "blood", str: '血型' }, { key: "birth", str: '出生日期' }, { key: "cardType", str: '证件类型' }, { key: "cardno", str: '证件号' }, { key: "clothSize", str: '服装尺码' }, { key: "contact", str: '紧急联系人' }, { key: "contactNumber", str: '紧急联系人电话' }, { key: "raceCert", str: '完赛证明' }, { key: "healthCert", str: '健康证明' }]
        };
    },
    mounted: function mounted() {
        var _this = this;

        this.$nextTick(function () {

            _this.keys = _this.key.map(function (v, i) {
                _this.$set(v, 'isChoose', false);
                return v;
            });
        });
    },

    methods: {
        get: function get() {// 导出

        },
        goBack: function goBack() {
            window.history.go(-1);
        }
    }
};

/***/ }),

/***/ 95:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "down-member"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("点击选择到处的字段")]), _c('div', {
    staticStyle: {
      "background": "#fff"
    }
  }, _vm._l((_vm.keys), function(key) {
    return _c('div', {
      staticClass: "key",
      class: key.isChoose ? 'choose' : '',
      on: {
        "click": function($event) {
          key.isChoose = !key.isChoose
        }
      }
    }, [_vm._v(_vm._s(key.str))])
  })), _c('div', {
    staticClass: "btn",
    on: {
      "click": _vm.get
    }
  }, [_vm._v("确定导出")])])
},staticRenderFns: []}

/***/ })

});