webpackJsonp([13],{

/***/ 144:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(145);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(22)("091eab3c", content, true);

/***/ }),

/***/ 145:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(21)(false);
// imports


// module
exports.push([module.i, ".team-detail[data-v-42dcfb13]{padding-top:.5rem;padding-bottom:2rem}.team-detail .team-item[data-v-42dcfb13]{padding:.5rem;border-radius:0}.team-detail .team-item img[data-v-42dcfb13]{width:5.15rem;height:5.15rem}.team-detail .team-item .tags[data-v-42dcfb13]{margin-left:5.5rem}.team-detail .team-item .img img[data-v-42dcfb13]{width:5.8rem;height:5.8rem;background:#eee;margin-right:.4rem}.status[data-v-42dcfb13]{color:#fff}.over[data-v-42dcfb13]{background:#c1c1c1}.ing[data-v-42dcfb13]{background:#0ae}.more[data-v-42dcfb13]{font-size:.8rem}.more[data-v-42dcfb13]:after{content:\">\";-webkit-transform:scaleY(1.5) rotate(90deg);transform:scaleY(1.5) rotate(90deg)}.desc[data-v-42dcfb13]{padding:.5rem;text-align:left;font-size:.9rem;background:#fff}", ""]);

// exports


/***/ }),

/***/ 146:
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

var addZero = function addZero(v) {
    return (v + '').length == 1 ? '0' + v : v;
};
exports.default = {
    name: 'teamDetail',
    filters: {
        age: function age(v) {
            var y = new Date().getFullYear();
            var vy = new Date(v).getFullYear();
            return y - vy + 1;
        },
        time: function time(v) {
            var t = new Date(v);
            return addZero(t.getMonth() + 1) + '-' + addZero(t.getDate()) + ' ' + addZero(t.getHours()) + ':' + addZero(t.getMinutes());
        }
    },
    data: function data() {
        return {
            item: {},
            colors: ['#ffce00', '#168ff2', '#ff6c2f', '#6ac302', '#bd9100'],
            showMore: false,
            ActivityArr: [],
            id: this.$route.query.id,
            remark: '',
            isShowCenter: false // 隐藏框里的退团框显示状态
        };
    },
    mounted: function mounted() {
        var _this = this;

        this.cmFun.ajax('get', '/group/detail/' + this.id + '/' + localStorage.aliSportUserId, {}, function (d) {
            console.log(d);
            _this.item = d.data.group;
            _this.item.admin = d.data.admin;
            _this.item.ingroup = d.data.ingroup;
            _this.ActivityArr = d.data.actives.slice(0, 2);
        });
    },

    methods: {
        moreDesc: function moreDesc() {
            this.remark = item.remarks;
        },
        quitTeam: function quitTeam() {
            this.cmFun.ajax('post', '/group/quit/' + this.item.id + '/' + localStorage.aliSportUserId, {}, function (d) {
                d.code == 1 || alert(d.msg);
                d.code == 1 && location.reload();
                // this.$router.push('/');
            });
        },
        goBack: function goBack() {
            window.history.go(-1);
        },
        gotoDetail: function gotoDetail(id, groupId) {
            this.$router.push({ path: '/activityDetail', query: { id: id, groupId: groupId } });
        },
        applyIn: function applyIn() {
            if (localStorage.aliSportUserId && localStorage.aliSportUserId != 'undefined') {
                // this.$router.push({ path: '/applyIn', query: {id: this.id}})
                this.$router.push({ path: '/applyIn', query: { item: this.item, id: this.item.id } });
            } else {
                if (confirm('还没登录~去登陆？')) {
                    this.$router.push({ path: '/sign', query: { url: '/teamDetail?id=' + this.id } });
                    return;
                }
            }
        }
    }
};

/***/ }),

/***/ 147:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "team-detail"
  }, [_c('div', {
    staticClass: "page-title"
  }, [_c('img', {
    staticClass: "back",
    attrs: {
      "src": __webpack_require__(47)
    },
    on: {
      "click": _vm.goBack
    }
  }), _vm._v("跑团详情"), _c('div', {
    staticClass: "features",
    on: {
      "click": function($event) {
        _vm.showMore = !_vm.showMore
      }
    }
  }, [_vm._v("...")])]), _c('router-link', {
    attrs: {
      "to": {
        path: '/teamCard',
        query: {
          id: _vm.id
        }
      }
    }
  }, [_c('div', {
    staticClass: "team-item"
  }, [_c('img', {
    attrs: {
      "src": _vm.item.image
    }
  }), _c('div', {
    staticClass: "name"
  }, [_vm._v(_vm._s(_vm.item.name))]), _c('div', {
    staticClass: "num"
  }, [_vm._v(_vm._s(_vm.item.userNum || 0) + "人")]), _c('div', {
    staticClass: "age"
  }, [_vm._v("团龄：" + _vm._s(_vm._f("age")(_vm.item.createDate)) + "年")]), _c('div', {
    staticClass: "tags"
  }, _vm._l((_vm.item.tags), function(it, j) {
    return _c('div', {
      staticClass: "tag",
      style: ({
        background: _vm.colors[j]
      })
    }, [_vm._v(_vm._s(it.tag))])
  }))])]), _c('div', {
    staticClass: "sort"
  }, [_vm._v("团活动"), _c('router-link', {
    attrs: {
      "to": {
        path: '/activityList',
        query: {
          id: _vm.id
        }
      }
    }
  }, [_c('span', [_vm._v("更多")])])], 1), (_vm.ActivityArr.length == 0) ? _c('div', {
    staticStyle: {
      "background": "#FFF",
      "line-height": "8rem",
      "font-size": "1rem",
      "color": "#666"
    }
  }, [_vm._v("暂无活动")]) : _vm._e(), _vm._l((_vm.ActivityArr), function(it) {
    return _c('div', {
      staticClass: "team-item m0",
      on: {
        "click": function($event) {
          _vm.gotoDetail(it.id, _vm.id)
        }
      }
    }, [_c('div', {
      staticClass: "img"
    }, [_c('img', {
      attrs: {
        "src": it.image
      }
    }), (it.status == 3) ? _c('div', {
      staticClass: "status over"
    }, [_vm._v("报名未开始")]) : _vm._e(), (it.status == 4) ? _c('div', {
      staticClass: "status ing"
    }, [_vm._v("报名中")]) : _vm._e(), (it.status == 5) ? _c('div', {
      staticClass: "status over"
    }, [_vm._v("报名已结束")]) : _vm._e(), (it.status == 1) ? _c('div', {
      staticClass: "status over"
    }, [_vm._v("活动已取消")]) : _vm._e(), (it.status == 7) ? _c('div', {
      staticClass: "status over"
    }, [_vm._v("活动未开始")]) : _vm._e(), (it.status == 8) ? _c('div', {
      staticClass: "status ing"
    }, [_vm._v("活动进行中")]) : _vm._e(), (it.status == 9) ? _c('div', {
      staticClass: "status over"
    }, [_vm._v("活动已结束")]) : _vm._e()]), _c('div', {
      staticClass: "name"
    }, [_vm._v(_vm._s(it.name))]), _c('div', {
      staticClass: "time"
    }, [_vm._v("时间：" + _vm._s(_vm._f("time")(it.matchStartDate)) + " ~~ " + _vm._s(_vm._f("time")(it.matchEndDate)))]), _c('div', {
      staticClass: "address"
    }, [_vm._v("地点: " + _vm._s(it.address))]), _c('div', {
      staticClass: "tags"
    }, _vm._l((it.tags), function(t, j) {
      return _c('div', {
        staticClass: "tag",
        style: ({
          background: _vm.colors[j]
        })
      }, [_vm._v(_vm._s(t.tag))])
    }))])
  }), _c('div', {
    staticClass: "sort",
    staticStyle: {
      "margin-top": "0.5rem"
    }
  }, [_vm._v("团介绍")]), _c('div', {
    staticClass: "desc",
    domProps: {
      "innerHTML": _vm._s(_vm.item.remarks)
    }
  }), (_vm.item.remarks && _vm.item.remarks.length > 50) ? _c('div', {
    staticClass: "more",
    on: {
      "click": _vm.moreDesc
    }
  }, [_vm._v("查看更多")]) : _vm._e(), _c('div', {
    staticClass: "btm-hide",
    class: _vm.showMore ? 'show' : 'hide',
    on: {
      "click": function($event) {
        _vm.showMore = false
      }
    }
  }, [_c('div', {
    staticClass: "btm"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("选择项目")]), _c('ul', [(_vm.item.admin) ? _c('router-link', {
    attrs: {
      "to": {
        path: '/teamSet',
        query: {
          id: _vm.id
        }
      }
    }
  }, [_c('li', [_vm._v("设置")])]) : _vm._e(), _c('li', [_vm._v("分享")]), (!_vm.item.admin && _vm.item.ingroup) ? _c('li', {
    on: {
      "click": function($event) {
        _vm.isShowCenter = true;
      }
    }
  }, [_vm._v("退出跑团")]) : _vm._e()], 1)])]), _c('div', {
    staticClass: "btm-hide",
    class: _vm.isShowCenter ? 'show' : 'hide',
    on: {
      "click": function($event) {
        _vm.isShowCenter = false
      }
    }
  }, [_c('div', {
    staticClass: "center",
    class: _vm.isShowCenter ? 'show' : 'hide'
  }, [_c('div', {
    staticClass: "text"
  }, [_vm._v("是否退出跑团")]), _c('div', {
    staticClass: "bt bt1",
    on: {
      "click": _vm.quitTeam
    }
  }, [_vm._v("确定")]), _c('div', {
    staticClass: "bt"
  }, [_vm._v("取消")])])]), (_vm.item.admin) ? _c('router-link', {
    attrs: {
      "to": {
        path: '/addActivity',
        query: {
          id: _vm.id
        }
      }
    }
  }, [_c('div', {
    staticClass: "fix-bottom"
  }, [_c('div', [_vm._v("创建活动")])])]) : _vm._e(), (!_vm.item.admin && !_vm.item.ingroup) ? _c('div', {
    staticClass: "fix-bottom",
    on: {
      "click": _vm.applyIn
    }
  }, [_c('div', [_vm._v("申请加入跑团")])]) : _vm._e()], 2)
},staticRenderFns: []}

/***/ }),

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(144)
}
var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(146),
  /* template */
  __webpack_require__(147),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-42dcfb13",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 47:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAArCAYAAADhXXHAAAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxMzggNzkuMTU5ODI0LCAyMDE2LzA5LzE0LTAxOjA5OjAxICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+IEmuOgAAAgtJREFUWIXt1ztrFGEYhuErBxVFQUGbrewELRfUQkEQPIBiPGEjBpIgKmJhYauInY1FEJRoPKBBEBQlmEBAEH+CB/wFBmwEjahEYvElknyTmewuk5kgc8Oyy7MM3OzOPO/7UVFRUQFt9Xq9leu2YhAbcR1X8lNKp72Fa3ZgDJuxCpexKU+pNJqV3YlXWBPly/LRyaYZ2V0Yweoof4B3eQll0ajsbgwLf/tsHqEnV6MMGpHdgxeSovfRjT95S6WxkOw+PJcUHUSvAkXJlt0viK6M8gEliJIue1AQXRHlt3AaU4splcZ8sl14iuVRfhNnlSRKUvYonkiK9uO8EkWZK3scQ5KiN3BByaLQOf1+QujMjuj7O7iKtUVKRUzhK2GRSRNdSoyjp61er3/B+rJtGuBzK1tXabQLT3nhBd8k4+jtFKqqHQ8l79sBXCpYLObfAzbTBkOYxONZGfThOy5aAtXVUavVZj5/mH51mfsLb8c6jBarlmS2LHzEexw2V3gbNginhNKYrw2e4Rh+R/k5YT9oW2ypNNKq6yWO4FeUn8FtJQln9eywcP/+jPI+oSUKn3gLDYURQfhHlPcIe0Ohwo1MsFEckhTuxj0FCjc6bsdwQFL4JO7mapRBM7vBa+FcNhHlp7AlN6MMml1k3ggn3m9RPpmPTjatbF1vsVeYdhO4hk95SlVUVFT8R/wFRURXGecH2+wAAAAASUVORK5CYII="

/***/ })

});