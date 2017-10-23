webpackJsonp([11],{

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(161);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(22)("365799fb", content, true);

/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(21)(false);
// imports


// module
exports.push([module.i, "body[data-v-e27c6946]{background:#fff}.member-search[data-v-e27c6946]{font-size:1rem;padding:.4rem;border-bottom:1px solid #c1c1c1}.member-search input[data-v-e27c6946]{width:15rem;font-size:1rem;height:2rem;border:1px solid #c1c1c1;margin-right:1rem;padding-left:.5rem}.member-search span[data-v-e27c6946]{display:inline-block;line-height:2rem}.membox[data-v-e27c6946]{overflow:hidden;padding:.5rem;font-size:1.2rem;line-height:2rem;text-align:left;border-bottom:1px solid #c1c1c1;background:#fff;position:relative}.membox img[data-v-e27c6946]{float:left;width:4rem;height:4rem;margin-right:1rem}.membox img.sex[data-v-e27c6946]{width:1rem;height:1rem;float:none}.membox .age[data-v-e27c6946],.membox .name[data-v-e27c6946],.membox .sex[data-v-e27c6946]{display:inline-block;margin-right:1rem}.membox .id[data-v-e27c6946],.membox .see-info[data-v-e27c6946]{font-size:.8rem;display:inline-block;margin-right:1rem}.membox .btn[data-v-e27c6946]{position:absolute;width:3.5rem;line-height:1.6rem;font-size:.9rem;color:#fff;background:#c1c1c1;float:right;top:.5rem;right:5rem;text-align:center;border-radius:1rem}.membox .btn.yes[data-v-e27c6946]{background:#0ae;right:1rem}.membox .level[data-v-e27c6946]{display:inline-block;color:#0ae;color:1rem;margin-left:1rem}.btm-hide .center .text[data-v-e27c6946]{color:#0ae}.btm-hide .center .info[data-v-e27c6946]{font-size:.9rem;line-height:1.5rem;padding:1rem;color:#666;text-align:left}", ""]);

// exports


/***/ }),

/***/ 162:
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

exports.default = {
    name: 'memberList',
    data: function data() {
        return {
            list: [],
            searchVal: '',
            type: this.$route.query.type, //0-全部成员   1-待审核成员
            id: this.$route.query.id, // group id
            isShowCenter: false,
            curMan: {}
        };
    },
    mounted: function mounted() {
        var _this = this;

        this.$nextTick(function () {
            if (_this.type == '0') {
                // 全部成员
                _this.cmFun.ajax('get', '/group/user', { groupId: _this.id }, function (d) {
                    _this.list = d.data.list;
                });
            } else if (_this.type == '1') {
                _this.cmFun.ajax('get', '/group/apply/', { groupId: _this.id, apply: 0 }, function (d) {
                    _this.list = d.data.list;
                });
            }
        });
    },

    methods: {
        pressItem: function pressItem(item) {
            // item.showUl = true;
            if (this.type == 1) {
                // 审核成员时按压不显示
                this.isShowCenter = true;
            }
        },
        search: function search() {
            var _this2 = this;

            if (this.searchVal.trim() == '') {
                this.cmFun.ajax('get', '/group/user', { groupId: this.id }, function (d) {
                    _this2.list = d.data.list;
                });
                return;
            }
            var options = {};
            options.groupId = this.id;
            options.nameandcode = this.searchVal.replace(/\s+/g, '');
            this.cmFun.ajax('get', '/group/user', options, function (d) {
                if (d.code != 1) alert(d.msg);
                if (d.code == 1) {
                    _this2.list = d.data.list;
                }
            });
        },
        goBack: function goBack() {
            window.history.go(-1);
        },
        manage: function manage(str, applyId) {
            //   管理同意拒绝
            var options = {};
            if (str == 1) {
                options.apply = 1;
            } else if (str == 2) {
                options.apply = 2;
            }
            options.id = applyId;

            this.cmFun.ajax('post', '/group/apply/apply', options, function (d) {
                if (d.code != 1) alert(d.msg);
                if (d.code == 1) {
                    location.reload();
                }
            });
        }
    }
};

/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "members"
  }, [(_vm.type == 0) ? _c('div', {
    staticClass: "member-search"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.searchVal),
      expression: "searchVal"
    }],
    attrs: {
      "type": "text",
      "placeholder": "名字/ID"
    },
    domProps: {
      "value": (_vm.searchVal)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.searchVal = $event.target.value
      }
    }
  }), _c('span', {
    on: {
      "click": _vm.search
    }
  }, [_vm._v("搜索")])]) : _vm._e(), _vm._l((_vm.list), function(item) {
    return _c('div', {
      staticClass: "membox"
    }, [_c('v-touch', {
      on: {
        "press": function($event) {
          _vm.pressItem(item)
        }
      }
    }, [_c('img', {
      attrs: {
        "src": item.user.image
      }
    }), (_vm.type == 0) ? _c('div', [_c('div', {
      staticClass: "name"
    }, [_vm._v(_vm._s(item.user.name))]), _c('div', {
      staticClass: "level"
    }, [_vm._v(_vm._s(item.type == 1 ? '(管理员)' : item.type == 2 ? '(团长)' : ''))]), _c('div'), _c('div', {
      staticClass: "id"
    }, [_vm._v("ID:" + _vm._s(item.user.code))]), _c('div', {
      staticClass: "see-info",
      on: {
        "click": function($event) {
          _vm.isShowCenter = true;
          _vm.curMan = item.user;
        }
      }
    }, [_vm._v("查看详情")])]) : _c('div', [_c('div', {
      staticClass: "name"
    }, [_vm._v(_vm._s(item.user.name))]), (item.user.sex == '1') ? _c('img', {
      staticClass: "sex",
      attrs: {
        "src": __webpack_require__(164)
      }
    }) : _c('img', {
      staticClass: "sex",
      attrs: {
        "src": __webpack_require__(165)
      }
    }), _c('div', {
      staticClass: "age"
    }, [_vm._v(_vm._s(item.user.age))])]), _c('div', {
      staticClass: "desc"
    }, [_vm._v(_vm._s(item.content))]), (_vm.type == 1) ? _c('div', {
      staticClass: "btn yes",
      on: {
        "click": function($event) {
          _vm.manage(1, item.id)
        }
      }
    }, [_vm._v("同意")]) : _vm._e(), (_vm.type == 1) ? _c('div', {
      staticClass: "btn",
      on: {
        "click": function($event) {
          _vm.manage(2, item.id)
        }
      }
    }, [_vm._v("拒绝")]) : _vm._e()])], 1)
  }), (_vm.list.length == 0) ? _c('div', {
    staticStyle: {
      "font-size": "1rem",
      "line-height": "4rem"
    }
  }, [_vm._v("暂无" + _vm._s(_vm.type == 0 ? '' : '待审核') + "成员")]) : _vm._e(), _c('div', {
    staticClass: "btm-hide",
    class: _vm.isShowCenter ? 'show' : 'hide',
    on: {
      "click": function($event) {
        _vm.isShowCenter = false
      }
    }
  }, [_c('div', {
    staticClass: "center"
  }, [_c('div', {
    staticClass: "text"
  }, [_vm._v("个人资料")]), _c('div', {
    staticClass: "info"
  }, [_c('div', [_vm._v("昵称: " + _vm._s(_vm.curMan.nick))]), _c('div', [_vm._v("真实姓名: " + _vm._s(_vm.curMan.name))]), _c('div', [_vm._v("手机号: " + _vm._s(_vm.curMan.mobile))]), _c('div', [_vm._v("性别: " + _vm._s(_vm.curMan.sex == '0' ? '女' : '男'))]), _c('div', [_vm._v("详情地址: " + _vm._s(_vm.curMan.address))]), _c('div', [_vm._v("邮箱: " + _vm._s(_vm.curMan.email))])])])])], 2)
},staticRenderFns: []}

/***/ }),

/***/ 164:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxMzggNzkuMTU5ODI0LCAyMDE2LzA5LzE0LTAxOjA5OjAxICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+IEmuOgAAAeRJREFUOI291N9rj2EYx/HXRpJmsiLLiXZkJ8SBH+UEpUYtSdOS0ooj7UjyH1DjYLJy4kBpMSJlWilJygFFUqP4OvCjsLam5Vf0dXDd33l6PN/1fB24Tq6n577v933dV5/r0wRGJpWMHgxj3hx7nutp65xfljh7iCsF4CZ0YwFWQ6Pgp+gtgJ5L0F+1S5sbBOejCWdwGKO4XluoB16EQ7iGcbzCAwxifWbfaRzBGPbgR22hqBV7UxXt+IkKptGBTehPF75N37fz0CLwUQxgIh26iKnM+jocF+qAu9iNr/nqsuCeBH2EnQnYkQM/xj7cSFWO4EvBq2d73IKzeI9d2IpPeIEtBeeGcUxIrD3zv5qvuA/LcBALcQEfcDK9oCgqmMQzrMQ30bo3WXA3PuMS1gg99golzBUv0YZtuCXUMcafVnTiIb6n3FICCvdSXptfqIGX42MJUD4mUm6tB57G4n8AL015ph54HBs0PuIbU35SD3xTtKOrQXCf0PGdeuDz4jkDwifKxAFsxpCCyauBJ8SoduJqCfgOYZUVnCjakO3pkJi+LtwX/pqPFTglLHJG+MRUwb6/TKhfiH47lghPmBGqWSUss1lofD9e13tSHlwVnjsoJqoq1NKKd7gsfGJUxhf+a/wG4nNrUN2x7k4AAAAASUVORK5CYII="

/***/ }),

/***/ 165:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxMzggNzkuMTU5ODI0LCAyMDE2LzA5LzE0LTAxOjA5OjAxICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+IEmuOgAAAflJREFUOI3N1FtojnEYAPDfNoc1jZiUHEtqLogruRFDQkhyozmURJMkrCHKqSYpF6SU2kokpZUc4kJSCkmkOV2IJoQSy3nNxfP/Pp+179u3O0+99fb2f3/v8z7/5/+UQGdDgx5iHNZgHqrTszYsx92ui0saG5X2AJZiL1qxHeW4hqv4jUqcQX1am40+BdAynMVStGAHHnezbisOYiJWojOTUb44kNB6LMmDwkI0oTb9lULwBGzBCRwq8HHowHo8xC4MLwTX4Rt29oBm4gc2iT1YWwiejwv4UCQMN/AuvdstXIYxuNULlNi0pxifDx6Y8M+9hOEThuSD20WPVhWJjcy5H4GP+eBfuIOpRaDT8ErUtQqTcS8fDOcwuABYjuPi4HzFA2wUJWzJhUv9nQFwBLexOA88VMyJN1iEYdiG1+KwZOFacbJ257zclLI4hooucBsGiV//jivoj3Wi/7Pw5QTvSdeABM8Sh+URNmAs+iZ0RlpzU3RCHS5mvpyB36MmJ+tWTEdzAitxFC/wU7TVdazCE8wRxz8budPtLRbgGUbjvpjBHSmzZZiNUfiCl2J8XhLt+U/kwhU4mZ61Y4qYVvvFzjenq6jIlKIfzmMmTokOeY592Fws1h18GnNF/64WbVMjanoYk3oLZ0pRndBaUVOipWqwImX/f8Qf88Ru6zY/6x8AAAAASUVORK5CYII="

/***/ }),

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(160)
}
var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(162),
  /* template */
  __webpack_require__(163),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-e27c6946",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ })

});