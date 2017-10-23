webpackJsonp([6],{

/***/ 135:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(136);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(22)("ac8e128c", content, true);

/***/ }),

/***/ 136:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(21)(false);
// imports


// module
exports.push([module.i, ".list[data-v-7aa2ec56]{padding-bottom:4rem}.team-item[data-v-7aa2ec56]{border-radius:0;margin:0 0 .5rem;border-bottom:1px solid #c1c1c1}", ""]);

// exports


/***/ }),

/***/ 137:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'hotList',
    filters: {
        age: function age(v) {
            var y = new Date().getFullYear();
            var vy = new Date(v).getFullYear();
            return y - vy + 1;
        }
    },
    data: function data() {
        return {
            teamArr: [
                // {img: '', name: 'xxx', num: '1234', age: 5, tags: ['定向赛', '免费', '美女', '麻豆跑团', '奖牌']},
            ],
            colors: ['#ffce00', '#168ff2', '#ff6c2f', '#6ac302', '#bd9100'], //  标签颜色
            page: 1, // 当前页码
            done: true, // 请求完成状态
            isMore: true // 是否到底部且没数据了
        };
    },
    mounted: function mounted() {
        var _this = this;

        this.$nextTick(function () {
            // 热门跑团
            _this.ajaxHot(_this.page);

            // 底部
            (0, _jquery2.default)(window).scroll(function () {
                if ((0, _jquery2.default)(document).height() - (0, _jquery2.default)(document).scrollTop() - (0, _jquery2.default)(window).height() == 0) {
                    console.log('到底啦');
                    if (_this.isMore && _this.done) {
                        _this.page++;
                    }
                }
            });
        });
    },

    methods: {
        ajaxHot: function ajaxHot(p) {
            var _this2 = this;

            this.done = false;
            this.cmFun.ajax('get', '/group/hot', {
                page: p, rows: 10
            }, function (d) {
                _this2.teamArr = _this2.teamArr.concat(d.data.list);
                _this2.done = true;

                if (d.data.list.length < 10) {
                    _this2.isMore = false;
                }
            });
        },
        goDetail: function goDetail(id) {
            this.$router.push({ path: '/teamDetail', query: { id: id } });
        },
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
    },
    watch: {
        page: function page(v) {
            this.ajaxHot(v);
        }
    }
}; //
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

/***/ }),

/***/ 138:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "list"
  }, [_c('div', {
    staticClass: "team-list"
  }, [(_vm.teamArr.length == 0) ? _c('div', {
    staticClass: "none"
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(69)
    }
  }), _c('span', [_vm._v("暂无热门跑团")])]) : _vm._e(), _vm._l((_vm.teamArr), function(item) {
    return _c('div', {
      staticClass: "team-item",
      on: {
        "click": function($event) {
          _vm.goDetail(item.id)
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
    }, [_vm._v("园龄：" + _vm._s(item.age) + "年")]), _c('div', {
      staticClass: "km"
    }, [_vm._v(_vm._s(item.km) + "Km")]), _c('div', {
      staticClass: "tags"
    }, _vm._l((item.tags), function(it, j) {
      return _c('div', {
        staticClass: "tag",
        style: ({
          background: _vm.colors[j]
        })
      }, [_vm._v(_vm._s(it.tag))])
    }))])
  })], 2), _c('div', {
    staticClass: "more"
  }, [(_vm.isMore) ? _c('img', {
    attrs: {
      "src": "more.png"
    }
  }) : _c('div', [_vm._v("没有更多了")])]), _c('div', {
    staticClass: "bottom"
  }, [_c('div', {
    staticClass: "cur"
  }, [_c('router-link', {
    attrs: {
      "to": {
        path: '/'
      }
    }
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(48)
    }
  }), _vm._v("跑团")])], 1), _c('div', {
    on: {
      "click": _vm.gotomy
    }
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(49)
    }
  }), _vm._v("我的")])])])
},staticRenderFns: []}

/***/ }),

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(135)
}
var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(137),
  /* template */
  __webpack_require__(138),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-7aa2ec56",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 48:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 49:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxMzggNzkuMTU5ODI0LCAyMDE2LzA5LzE0LTAxOjA5OjAxICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+IEmuOgAAA/ZJREFUaIHt2duLVVUcB/DPzByd8UJolzGNHgqiIhDqWA+R2MWSioh0lDDohjaNFHaBeumh/oCKomwqGsIuUuQUYWBFZfeHToRBZRBkYDfLhG42OaM9/NbhiMzt7LWZGcIvbH777LN+3/X77rXWb102RzC10FKtVsvmnInLcQnOxomYi1+wHa9gI/4so7JarQYqZZAlnIUeXI3Zw/zfiYvTdS9W4t2yKm8tgaOCh1HDGiHiDazHmTgWbTgeq7EVxyX7Ju5BSxlB5GID1qb7XjyEHcOU+xmb0tWHG7A0XbvxRE4QuS2ySLQCja41nIjDcaMYS9em37dmxpEtZI3oFr34rEnffXgu3Z8humBh5ApZkuwjBf0P4GPxMk7JCSRXyMnJfpPBcSDZtpxAcoRUMB1DGMjgaU82hyNLyCD+FW+yfYyyo6Ez2d0ZHNlda0+yx2RwHH0YVyHkCqmn2tMK+k8XE+h+mUuWXCFfJXt6Qf9Sxgf5Qo5K9veC/n/gU9EqWavXHCFz0ZXu38/g+SDZOzI4soTMQAd+xM4Mnvpkek4GR5aQPTiI+Zk8Q8lO2oQ4IFa0MC+D54Rkf8jgyB7snye7NIOjPs4+yQkkV8jmZDfitYL+69P9szmB5Ap5Smxbv8NlOLcJ37uwXHTPlSINF0aukCHchxfS78VN+NbLrsVLmXGUsmcnUjCRwcaL+gSY1RJ1lCWknnEWNFHvfJG+fysjgLJbZKHxbVl7k92Of8oIoCwhH+FtnIrHxih7khgXg7ilpPpLEzKEa8RyvEssz0fCecluwocl1V+akJl4RuOg7eAoZeuLxGV4Nflmoywh3WJ2r+BJ0TIj4VsxEXbiiuSbjTKEzBGTG6zATePw6Upl4e7EkYVcIbPxuDjX3YL+Jnz7k888cVw63MH3uFFEyBzcjvewF6vEkr6nAFcPfhVLlL2J8zYFWqgZIQtF/t+FB8QSoyJO1Rel581il/iGsjVxLcaD6XlvqnNcGEvINPG2tonJqxuzRJdYIdLspfJ2iDsTx3QxdrakOrpTndvS82mjkYz0WWGBODG/WWPj82Ui3YAvMgIfCftFNtssDrXX4XxxvrwE34tW6jPMJuzQT2/tuCoJuFBj6/mO+Fz2qMa2dKLQJmb/K3FBejaUYupDf61WG6AhZDXuF9mnjhdT4dcnJuYxsUy85FWHPPsJd9ZqtedbqtXqdXg6/fEWXhYC9k1klE2gQwhajovSs+tbqtXqDrHYW2fsBd9UQ48Ys1+3ivMpiu25Jxv1mGe0asyof01SMDn4O9lZrRrZaaIzUhkYTLZS1up30tEqsgAlbTknGPWYOyoa3yimarodD9r/N13rCKYa/gOlMru7/BvQFQAAAABJRU5ErkJggg=="

/***/ }),

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/zanwupaotuan@2x.f9a9769.png";

/***/ })

});