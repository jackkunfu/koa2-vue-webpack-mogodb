webpackJsonp([22],{

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(171);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(22)("78b36069", content, true);

/***/ }),

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(21)(false);
// imports


// module
exports.push([module.i, ".addSuccess[data-v-3c5008d2]{background:#fff;padding:1rem 0}.addSuccess img[data-v-3c5008d2]{margin:1rem auto;width:3rem}.addSuccess div[data-v-3c5008d2]{font-size:.9rem;line-height:1.2rem}.message[data-v-3c5008d2]{font-size:1rem;background:#fff;padding-top:.8rem;margin-top:.5rem;padding-bottom:1rem}.message .detail[data-v-3c5008d2]{margin-right:-4.4rem;height:4rem;width:16rem;margin:0 auto}.message .detail .fl[data-v-3c5008d2]{float:left}.message .detail .fl img[data-v-3c5008d2]{width:4rem;height:4rem;background:#eee}.message .detail .fr[data-v-3c5008d2]{font-size:1rem;float:left;width:10rem;padding-left:.5rem;text-align:left}.message .detail .fr .address[data-v-3c5008d2]{margin-top:.5rem;font-size:.8rem}.message .detail .fr .tags[data-v-3c5008d2]{margin-top:.3rem;margin-right:-4.4rem}.message .detail .fr .tags .tag[data-v-3c5008d2]{display:inline-block;padding:0 .2rem;margin-right:.2rem;border-radius:.2rem;font-size:.8rem;color:#fff}.message .qr-code[data-v-3c5008d2]{width:16rem;margin:.6rem auto;text-align:center;border:1px solid #c1c1c1;border-radius:1rem}.message .qr-code img[data-v-3c5008d2]{display:block;width:14rem;height:14rem;background:#eee;margin:1rem auto}.message .tip[data-v-3c5008d2]{width:16rem;font-size:.8rem;margin:0 auto;color:#666}.in[data-v-3c5008d2]{width:16rem;line-height:2.5rem;background:#0ae;color:#fff;font-size:1rem;margin:1rem auto 0;border-radius:.5rem}", ""]);

// exports


/***/ }),

/***/ 172:
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

exports.default = {
    name: 'teamSuccess',
    filters: {
        desc: function desc(d) {
            return d.length > 34 ? d.substr(0, 34) + '...' : d;
        }
    },
    data: function data() {
        return {
            team: {
                // image: '',
                name: '',
                sign: '',
                // remarks: '这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介这是简介',
                // tags: ['浙大户外', '华家池'],
                // tags: ['浙大户外', '华家池'],
                need: true,
                qrUrl: ''
            },
            id: this.$route.query.id,
            colors: ['#ffce00', '#168ff2', '#ff6c2f', '#6ac302', '#bd9100'] //  标签颜色

        };
    },
    mounted: function mounted() {
        var _this = this;

        this.$nextTick(function () {
            _this.cmFun.ajax('get', '/group/view/' + _this.id + '/' + localStorage.aliSportUserId, {}, function (res) {
                _this.team = res.data;
                var url = 'http://qr.liantu.com/api.php?text==http://ali.hpaopao.com/#/teamDetail?id=' + res.id;
                _this.team.qrUrl = url;
            });
        });
    },

    methods: {
        goBack: function goBack() {
            window.history.go(-1);
        }
    }
};

/***/ }),

/***/ 173:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "addTeam"
  }, [_c('div', {
    staticClass: "message"
  }, [_c('div', {
    staticClass: "detail"
  }, [_c('div', {
    staticClass: "fl"
  }, [_c('img', {
    attrs: {
      "src": _vm.team.image
    }
  })]), _c('div', {
    staticClass: "fr"
  }, [_c('div', {
    staticClass: "name"
  }, [_vm._v(_vm._s(_vm.team.name))]), _c('div', {
    staticClass: "tags"
  }, _vm._l((_vm.team.tags), function(it, j) {
    return _c('div', {
      staticClass: "tag",
      style: ({
        background: _vm.colors[j]
      })
    }, [_vm._v(_vm._s(it.tag))])
  }))])]), _c('div', {
    staticClass: "qr-code"
  }, [_c('img', {
    attrs: {
      "src": '' + _vm.team.qrUrl
    }
  })]), _c('div', {
    staticClass: "tip"
  }, [_vm._v("扫描二维码加入跑团，点击长按保存二维码")])])])
},staticRenderFns: []}

/***/ }),

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(170)
}
var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(172),
  /* template */
  __webpack_require__(173),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-3c5008d2",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ })

});