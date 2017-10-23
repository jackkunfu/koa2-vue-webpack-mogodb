webpackJsonp([4],{

/***/ 139:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(140);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(22)("4521961b", content, true);

/***/ }),

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(21)(false);
// imports


// module
exports.push([module.i, ".more[data-v-e5fa7140]{padding-bottom:4rem}.search-ctn[data-v-e5fa7140]{position:fixed;top:2.5rem;left:0;width:100%;z-index:1;border-top:1px solid #e7e7e7;border-bottom:1px solid #e7e7e7}.search-ctn .box[data-v-e5fa7140]{display:inline-block;font-size:1rem;line-height:2.5rem;width:33.3333%;border-right:1px solid #e7e7e7;border-bottom:1px solid #e7e7e7;background:#fff}.search-ctn .box[data-v-e5fa7140]:last-child{border-right:none}.search-ctn .box.cur[data-v-e5fa7140]{color:#ff6c2f}.search-ctn .box img[data-v-e5fa7140]{width:1.5rem;position:relative;top:.4rem;left:.3rem}.search-ctn .hidden-box[data-v-e5fa7140]{width:100%;height:80rem;background:rgba(0,0,0,.3);position:absolute;z-index:1;font-size:1rem;text-align:left;line-height:2rem}.search-ctn .hidden-box>div[data-v-e5fa7140]{background:#fff;padding:.5rem .5rem 0}.search-ctn .hidden-box .num[data-v-e5fa7140]{width:6.2rem;margin-right:1.3rem;margin-top:.5rem;display:inline-block;background:#f1f1f1;text-align:center;font-size:.8rem;color:#999}.search-ctn .hidden-box .num.cur[data-v-e5fa7140]{color:#ff6c2f;background:#fcf8f0}.search-ctn .hidden-box .btn[data-v-e5fa7140]{margin:0 -1rem}.search-ctn .hidden-box .btn>div[data-v-e5fa7140]{width:50%;display:inline-block;line-height:3rem;text-align:center;border-top:1px solid #c1c1c1;margin-top:2rem}.search-ctn .hidden-box .btn>div.sure[data-v-e5fa7140]{background:#ff6c2f;color:#fff}.team-item[data-v-e5fa7140]{border-radius:0;margin:0 0 .5rem;border-bottom:1px solid #c1c1c1}", ""]);

// exports


/***/ }),

/***/ 141:
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

exports.default = {
    name: 'teamList',
    data: function data() {
        return {
            teamArr: [],
            numArr: ['<50人', '50人-100人', '100人-500人', '>500人'],
            colors: ['#ffce00', '#168ff2', '#ff6c2f', '#6ac302', '#bd9100'],
            cur: 1,
            show: false,
            curNum: -1,
            name: '',
            isMore: true,
            latitude: '',
            options: {
                row: 10,
                longitude: '',
                latitude: '',
                userId: localStorage.aliSportUserId
            },
            page: 1
        };
    },

    methods: {
        gotomy: function gotomy() {
            if (localStorage.aliSportUserId && localStorage.aliSportUserId != 'undefined') {
                this.$router.push({ path: '/my', query: {} });
            } else {
                if (confirm('还没登录~去登陆？')) {
                    this.$router.push({ path: '/sign', query: {} });
                    return;
                }
            }
        },
        goDetail: function goDetail(id) {
            this.$router.push({ path: '/teamDetail', query: { id: id } });
        },
        reset: function reset() {
            this.name = '';
            this.curNum = 4;
            this.show = false;
            delete this.options.minNum;
            delete this.options.maxNum;
            this.ajaxList();
        },
        list: function list() {
            this.options.symbol = '&lt;';
            this.options.maxNum = 50;
            // var options = this.options;
            if (this.curNum == 0) {
                this.options.symbol = '&lt;';
                this.options.maxNum = 50;
            }
            this.ajaxList();
        },
        goBack: function goBack() {
            window.history.go(-1);
        },
        ajaxList: function ajaxList() {
            var _this = this;

            this.options.page = this.page;
            this.done = false;
            this.cmFun.ajax('get', '/group/near', this.options, function (d) {
                _this.teamArr = d.data.list;
                _this.done = true;
                _this.show = false;

                if (d.data.list.length < 10) {
                    _this.isMore = false;
                }
            });
        },
        moreList: function moreList() {
            var _this2 = this;

            this.options.page = this.page;
            this.done = false;
            this.cmFun.ajax('get', '/group/near', this.options, function (d) {
                _this2.teamArr = _this2.teamArr.concat(d.data.list);
                _this2.done = true;

                if (d.data.list.length < 10) {
                    _this2.isMore = false;
                }
            });
        },
        search: function search() {
            var _this3 = this;

            if (this.name.replace(/\s+/g, '') == '') {
                delete this.options.name;
            } else {
                this.options.name = this.name.replace(/\s+/g, '');
            }

            // this.cur = 0;
            // this.curNum = -2;

            this.cmFun.ajax('get', '/group/near', this.options, function (d) {
                _this3.teamArr = d.data.list;
                _this3.done = true;

                if (d.data.list.length < 10) {
                    _this3.isMore = false;
                }
            });
        }
    },
    mounted: function mounted() {
        var _this4 = this;

        this.$nextTick(function () {

            _this4.options.searchType = 0; // 页面初始化时为 活动最多状态
            // 获取地理位置，获取附近跑团
            _this4.cmFun.getLocation(function (d) {
                _this4.isRefuse = false;
                _this4.options.longitude = d.coords.longitude || 120.180304;
                _this4.options.latitude = d.coords.latitude || 30.276887;
                _this4.ajaxList();
            }, function (e) {
                _this4.isRefuse = true;
                _this4.options.longitude = 120.180304;
                _this4.options.latitude = 30.276887;
                _this4.ajaxList();
            });

            var isDefault = true;
            if (isDefault) {
                _this4.options.longitude = 120.180304;
                _this4.options.latitude = 30.276887;
                _this4.ajaxList();
                _this4.ajaxList();
            }

            // 底部
            $(window).scroll(function () {
                if ($(document).height() - $(document).scrollTop() - $(window).height() == 0) {
                    console.log('到底啦');
                    if (_this4.isMore && _this4.done) {
                        _this4.page++;
                    }
                }
            });
        });
    },

    watch: {
        cur: function cur(v) {
            this.page = 1;
            if (v == 1) {
                // 活动最多
                this.options.searchType = 0;
                this.ajaxList();
            } else if (v == 2) {
                // 离我最近
                delete this.options.searchType;
                this.ajaxList();
            }
        },
        curNum: function curNum(v) {
            this.page = 1;
            this.options.latitude = this.options.latitude ? this.options.latitude : 30.276887;
            this.options.longitude = this.options.longitude ? this.options.longitude : 120.180304;

            if (v == -1) {
                delete this.options.symbol;
                delete this.options.maxNum;
                delete this.options.minNum;
                this.ajaxList();
            }
            if (this.curNum == 0) {
                this.options.symbol = '0'; // '0'表示小于
                this.options.maxNum = 50;
                delete this.options.minNum;
            } else if (this.curNum == 3) {
                this.options.minNum = 500;
                this.options.symbol = '1'; // '1'表示大于
                delete this.options.maxNum;
            } else if (this.curNum == 1 || this.curNum == 2) {
                this.options.minNum = this.curNum == 1 ? 50 : 100;
                this.options.maxNum = this.curNum == 1 ? 100 : 500;
                delete this.options.symbol;
            } else {
                delete this.options.symbol;
                delete this.options.maxNum;
                delete this.options.minNum;
            }
        },
        page: function page(v) {
            this.moreList();
        }
    }
};

/***/ }),

/***/ 142:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "list",
    staticStyle: {
      "position": "relative",
      "padding-top": "5rem"
    }
  }, [_c('div', {
    staticClass: "page-title"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.name),
      expression: "name"
    }],
    attrs: {
      "type": "text",
      "placeholder": "请输入跑团名称"
    },
    domProps: {
      "value": _vm.name,
      "value": (_vm.name)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.name = $event.target.value
      }
    }
  }), _c('div', {
    staticClass: "search",
    on: {
      "click": _vm.search
    }
  }, [_vm._v("搜索")])]), _c('div', {
    staticClass: "search-ctn"
  }, [_c('div', {
    staticClass: "box",
    class: _vm.cur == 1 ? 'cur' : '',
    on: {
      "click": function($event) {
        _vm.cur = 1
      }
    }
  }, [_vm._v("活动最多")]), _c('div', {
    staticClass: "box",
    class: _vm.cur == 2 ? 'cur' : '',
    on: {
      "click": function($event) {
        _vm.cur = 2
      }
    }
  }, [_vm._v("离我最近")]), _c('div', {
    staticClass: "box",
    on: {
      "click": function($event) {
        _vm.show = true;
      }
    }
  }, [_vm._v("筛选"), _c('img', {
    attrs: {
      "src": __webpack_require__(143)
    }
  })]), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.show),
      expression: "show"
    }],
    staticClass: "hidden-box"
  }, [_c('div', [_vm._v("规模")]), _c('div', _vm._l((_vm.numArr), function(item, i) {
    return _c('div', {
      staticClass: "num",
      class: _vm.curNum == i ? 'cur' : '',
      on: {
        "click": function($event) {
          _vm.curNum = i;
        }
      }
    }, [_vm._v(_vm._s(item))])
  })), _c('div', {
    staticClass: "btn"
  }, [_c('div', {
    staticClass: "cancel",
    on: {
      "click": _vm.reset
    }
  }, [_vm._v("重置")]), _c('div', {
    staticClass: "sure",
    on: {
      "click": function($event) {
        _vm.ajaxList();
        _vm.show = false
      }
    }
  }, [_vm._v("完成")])])])]), _c('div', {
    staticClass: "team-list"
  }, _vm._l((_vm.teamArr), function(item) {
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
    }, [_vm._v("团龄：" + _vm._s(item.age) + "年")]), _c('div', {
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
  })), _c('div', {
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

/***/ 143:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAABoUlEQVRIie3Wv0tVYRzH8ZfXm0GLQ9RwgxZdq+EOQUvgFEVBLWoOQkLQf2AO4SDRZEPQj6G2qCEaSgpqa3O++B/opoGIQpDa8HxvyOGePEcehMoPHM6F5/P9vHnu832+nL52u/0CU+h3ONrGyyZuB3QN63sMP7CVGTqIYYw38QDz2MRlLGeG7YV+i9+zDTzGI5zFpzDk1gDe43yw5huxMIPXOBeGgYzQPrzCSDBmoAvexSQ+hOGtfM32EBORPRms32BSt41jETfxJAN0Op7FyN7uLjQKxi1cRQf3ouigmpB228E1hRtSBMP3gC9H4d0DQEekc12JrLWioRdYQK9gFU9xowb0gtSg65HR83qWgWEJ16VB8gYXK0CH8RXHonapzPgnMKkpRtHEgnTdynQKn6U5MBq1pdoPLIB3cFIaMKd7eI7jI4bCu7BfaH+r1arA1pH+8lvSjorBcxjDfTyrElhlx111A8/0WLsU7+dVw+qAs+bkAtfWEfgI/H+Df2JHpi/PZg3vpjT8O4cNhnc5oPwlZ/xvgOuecZm+4AQ2qhb8AiR3TXMvaogGAAAAAElFTkSuQmCC"

/***/ }),

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(139)
}
var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(141),
  /* template */
  __webpack_require__(142),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-e5fa7140",
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

/***/ })

});