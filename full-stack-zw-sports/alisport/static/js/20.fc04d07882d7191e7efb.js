webpackJsonp([20],{

/***/ 174:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(175);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(22)("02f9ef93", content, true);

/***/ }),

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(21)(false);
// imports


// module
exports.push([module.i, ".page-title .features[data-v-521f5598]{margin-right:3rem}.addSuccess[data-v-521f5598]{background:#fff;padding:1rem 0}.addSuccess img[data-v-521f5598]{margin:2rem auto;width:3rem}.addSuccess div[data-v-521f5598]{font-size:.9rem;line-height:1.2rem}.message[data-v-521f5598]{font-size:1rem;background:#fff;padding-top:.8rem;margin-top:.5rem;padding-bottom:2rem}.message .detail[data-v-521f5598]{height:4.5rem;width:16rem;margin:0 auto}.message .detail .fl[data-v-521f5598]{float:left}.message .detail .fl img[data-v-521f5598]{width:4rem;height:4rem;background:#eee}.message .detail .fr[data-v-521f5598]{font-size:1rem;float:left;width:10rem;padding-left:.5rem;text-align:left}.message .detail .fr .address[data-v-521f5598]{margin-top:.5rem;font-size:.8rem;overflow:hidden;display:block;text-overflow:ellipsis;white-space:nowrap}.message .qr-code[data-v-521f5598]{width:16rem;margin:.6rem auto;text-align:center;border:1px solid #c1c1c1;border-radius:1rem}.message .qr-code img[data-v-521f5598]{display:block;width:14rem;height:14rem;background:#eee;margin:1rem auto}.message .tip[data-v-521f5598]{width:16rem;font-size:.8rem;margin:0 auto;color:#666}.in[data-v-521f5598]{margin:.5rem .96rem;line-height:2.5rem;background:#ff6c2f;color:#fff;font-size:1rem;border-radius:.5rem}", ""]);

// exports


/***/ }),

/***/ 176:
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

exports.default = {
    name: 'activeSuccess',
    filters: {
        desc: function desc(v) {
            return v.substring(1, v.length - 1);
        }
    },
    data: function data() {
        return {
            team: {
                image: '',
                name: '',
                address: '',
                need: true

            },
            qrUrl: '',
            id: this.$route.query.id,
            name: this.$route.query.name,
            image: this.$route.query.image,
            address: this.$route.query.address,
            // options: this.$route.query.options,
            groupId: this.$route.query.groupId
        };
    },
    mounted: function mounted() {
        var _this = this;

        this.$nextTick(function () {

            _this.team = _this.options;
            _this.cmFun.ajax('get', '/active/view/' + _this.id, {}, function (res) {
                var url = 'http://qr.liantu.com/api.php?text==http://ali.hpaopao.com/#/activityDetail?id=' + res.id;
                _this.qrUrl = url;
            });
        });
    },

    methods: {
        goBack: function goBack() {
            window.history.go(-1);
        },
        gotomy: function gotomy() {
            if (localStorage.aliSportUserId && localStorage.aliSportUserId != 'undefined') {
                this.$router.push({ path: '/my', query: {} });
            } else {
                if (confirm('还没登录~去登陆？')) {
                    this.$router.push({ path: '/sign', query: {} });
                    return;
                }
            }
        }
    }
};

/***/ }),

/***/ 177:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "addTeam"
  }, [_c('div', {
    staticClass: "addSuccess"
  }, [_c('img', {
    staticClass: "back",
    attrs: {
      "src": __webpack_require__(70)
    },
    on: {
      "click": function($event) {}
    }
  }), _c('div', [_vm._v("恭喜创建跑团活动成功")]), _c('div', [_vm._v("现在可以邀请小伙伴加入哦")])]), _c('div', {
    staticClass: "message"
  }, [_c('div', {
    staticClass: "detail"
  }, [_c('div', {
    staticClass: "fl"
  }, [_c('img', {
    attrs: {
      "src": _vm.image
    }
  })]), _c('div', {
    staticClass: "fr"
  }, [_c('div', {
    staticClass: "name"
  }, [_vm._v(_vm._s(_vm.name))]), _c('div', {
    staticClass: "address"
  }, [_vm._v("地址: " + _vm._s(_vm._f("desc")(_vm.address)))])])]), _c('div', {
    staticClass: "qr-code"
  }, [_c('img', {
    attrs: {
      "src": _vm.qrUrl
    }
  })]), _c('div', {
    staticClass: "tip"
  }, [_vm._v("扫描二维码加入跑团，点击长按保存二维码")]), _c('router-link', {
    attrs: {
      "to": {
        path: '/activityDetail',
        query: {
          id: _vm.id,
          groupId: _vm.groupId
        }
      }
    }
  }, [_c('div', {
    staticClass: "in"
  }, [_vm._v("进入活动")])])], 1)])
},staticRenderFns: []}

/***/ }),

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(174)
}
var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(176),
  /* template */
  __webpack_require__(177),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-521f5598",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 70:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ })

});