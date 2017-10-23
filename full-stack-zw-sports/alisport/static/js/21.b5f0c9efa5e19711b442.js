webpackJsonp([21],{

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(71)
}
var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(73),
  /* template */
  __webpack_require__(74),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 71:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(72);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(22)("41a35e8e", content, true);

/***/ }),

/***/ 72:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(21)(false);
// imports


// module
exports.push([module.i, ".sign .sign-in{width:16rem;margin:3rem auto}.sign .sign-in .lf{font-size:1rem;line-height:1.5rem;color:#333;margin-top:1rem;text-align:left}.sign .sign-in input{font-size:1rem;padding:.3rem .5rem;color:#666;border:1px solid #c1c1c1;border-radius:.3rem;display:block;width:100%}.sign .sign-in .btn{width:8rem;line-height:2rem;margin:1rem auto;background:#0ae;color:#fff;border-radius:.5rem}", ""]);

// exports


/***/ }),

/***/ 73:
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

exports.default = {
    name: 'sign',
    data: function data() {
        return {
            user: {}
        };
    },
    mounted: function mounted() {
        localStorage.aliSportUserId = null;
    },

    methods: {
        login: function login() {
            var _this = this;

            this.user.mobile = this.user.mobile.replace(/\s+/g, '');
            this.user.pass = this.user.pass.replace(/\s+/g, '');
            if (this.user.mobile == '') {
                alert('手机不能为空');
                return;
            }
            if (!/^1(3|4|5|7|8)\d{9}$/.test(this.user.mobile)) {
                alert('手机格式不正确');
                return;
            }
            if (this.user.pass == '' || this.user.pass.length < 6 || this.user.pass.length > 12) {
                alert('密码须6-12个字母或数字');
                return;
            }
            this.cmFun.ajax('post', '/login', this.user, function (d) {
                if (d.code != 1) alert(d.msg);
                if (d.code == 1) {
                    localStorage.aliSportUserId = d.data.id;
                    if (_this.$route.query.url) {
                        _this.$router.push(_this.$route.query.url);
                        return;
                    }
                    _this.$router.push('/');
                }
            });
        },
        logup: function logup() {
            var _this2 = this;

            this.user.mobile = this.user.mobile.replace(/\s+/g, '');
            this.user.pass = this.user.pass.replace(/\s+/g, '');
            if (this.user.mobile == '') {
                alert('手机不能为空');
                return;
            }
            if (!/^1(3|4|5|7|8)\d{9}$/.test(this.user.mobile)) {
                alert('手机格式不正确');
                return;
            }
            if (this.user.pass == '' || this.user.pass.length < 6 || this.user.pass.length > 12) {
                alert('密码须6-12个字母或数字');
                return;
            }
            this.cmFun.ajax('post', '/reg', this.user, function (d) {
                if (d.code != 1) alert(d.msg);
                // 如果成功自动登录
                if (d.code == 1) {
                    _this2.login();
                }
            });
        }
    }
};

/***/ }),

/***/ 74:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "sign"
  }, [_c('div', {
    staticClass: "sign-in"
  }, [_c('div', {
    staticClass: "lf"
  }, [_vm._v("手机")]), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.user.mobile),
      expression: "user.mobile"
    }],
    attrs: {
      "type": "text",
      "value": "user.phone"
    },
    domProps: {
      "value": (_vm.user.mobile)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.user.mobile = $event.target.value
      }
    }
  }), _c('div', {
    staticClass: "lf"
  }, [_vm._v("密码")]), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.user.pass),
      expression: "user.pass"
    }],
    attrs: {
      "type": "password",
      "value": "user.phone"
    },
    domProps: {
      "value": (_vm.user.pass)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.user.pass = $event.target.value
      }
    }
  }), _c('div', {
    staticClass: "btn",
    on: {
      "click": _vm.login
    }
  }, [_vm._v("登陆")]), _c('div', {
    staticClass: "btn",
    on: {
      "click": _vm.logup
    }
  }, [_vm._v("注册")])])])
},staticRenderFns: []}

/***/ })

});