webpackJsonp([15],{

/***/ 122:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(123);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(22)("764e69d4", content, true);

/***/ }),

/***/ 123:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(21)(false);
// imports


// module
exports.push([module.i, ".team-list[data-v-02c215a4]{padding-bottom:4rem}ul.tab[data-v-02c215a4]{overflow:hidden;border:1px solid #c1c1c1;background:#fff}ul.tab li[data-v-02c215a4]{width:32%;margin:0 9%;float:left;font-size:1rem;line-height:3rem}ul.tab li.cur[data-v-02c215a4]{color:#ff6c2f;border-bottom:2px solid #ff6c2f}.team-list .team-item[data-v-02c215a4]{-webkit-box-shadow:none;box-shadow:none;margin:0}.team-list .team-item .name[data-v-02c215a4]{margin-top:.8rem}.team-list .team-item .tags[data-v-02c215a4]{width:14rem}", ""]);

// exports


/***/ }),

/***/ 124:
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

exports.default = {
    name: 'myTeam',
    data: function data() {
        return {
            teamArr: [],
            colors: ['#ffce00', '#168ff2', '#ff6c2f', '#6ac302', '#bd9100'],
            curNum: 0,
            page: 1
        };
    },
    mounted: function mounted() {
        var _this = this;

        this.$nextTick(function () {

            // 加载获取我创建的跑团
            _this.getList('/group/onwer/');
        });
    },

    methods: {
        goBack: function goBack() {
            window.history.go(-1);
        },
        getList: function getList(url) {
            var _this2 = this;

            this.cmFun.ajax('get', url + localStorage.aliSportUserId, {
                // page: this.page, rows: 50
            }, function (d) {
                if (d.code != 1) {
                    alert(d.msg);
                }
                _this2.teamArr = d.data.list;
            });
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
    },
    watch: {
        curNum: function curNum(v) {
            if (v == 0) {
                this.getList('/group/onwer/');
            } else {
                this.getList('/group/join/');
            }
        }
    }
};

/***/ }),

/***/ 125:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "list"
  }, [_c('ul', {
    staticClass: "tab"
  }, [_c('li', {
    class: _vm.curNum == 0 ? 'cur' : '',
    on: {
      "click": function($event) {
        _vm.curNum = 0
      }
    }
  }, [_vm._v("我创建的跑团")]), _c('li', {
    class: _vm.curNum == 1 ? 'cur' : '',
    on: {
      "click": function($event) {
        _vm.curNum = 1
      }
    }
  }, [_vm._v("我加入的跑团")])]), _c('div', {
    staticClass: "team-list"
  }, [(_vm.teamArr.length == 0) ? _c('div', {
    staticClass: "none"
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(69)
    }
  }), _c('span', [_vm._v("暂无跑团")])]) : _vm._e(), _vm._l((_vm.teamArr), function(item) {
    return _c('div', {
      staticClass: "team-item",
      on: {
        "click": function($event) {
          _vm.$router.push({
            path: '/teamDetail',
            query: {
              id: item.id
            }
          })
        }
      }
    }, [_c('img', {
      attrs: {
        "src": item.image
      }
    }), _c('div', {
      staticClass: "name"
    }, [_vm._v(_vm._s(item.name))]), _c('div', {
      staticClass: "num"
    }, [_vm._v(_vm._s(item.userNum) + "人")]), _c('div', {
      staticClass: "age"
    }, [_vm._v("团龄：" + _vm._s(item.age) + "年")]), _c('div', {
      staticClass: "tags"
    }, _vm._l((item.tags), function(it, j) {
      return _c('div', {
        staticClass: "tag",
        style: ({
          background: _vm.colors[j]
        })
      }, [_vm._v(_vm._s(it.tag))])
    }))])
  })], 2)])
},staticRenderFns: []}

/***/ }),

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(122)
}
var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(124),
  /* template */
  __webpack_require__(125),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-02c215a4",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/zanwupaotuan@2x.f9a9769.png";

/***/ })

});