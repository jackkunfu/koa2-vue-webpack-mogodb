webpackJsonp([18],{

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(157);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(22)("e697eef0", content, true);

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(21)(false);
// imports


// module
exports.push([module.i, ".row[data-v-0e22f6fe]{border-bottom:none}.row label[data-v-0e22f6fe]{line-height:2rem}.row textarea[data-v-0e22f6fe]{height:10rem}", ""]);

// exports


/***/ }),

/***/ 158:
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

exports.default = {
    name: 'applyIn',
    data: function data() {
        return {
            item: this.$route.query.item,
            colors: ['#ffce00', '#168ff2', '#ff6c2f', '#6ac302', '#bd9100'],
            content: '',
            groupId: this.$route.query.id
        };
    },
    mounted: function mounted() {
        var _this = this;

        this.$nextTick(function () {

            if (!_this.item.id) {
                // 当前手动刷新时 item为空，做重新请求处理
                _this.cmFun.ajax('get', '/group/view/' + _this.groupId + '/' + localStorage.aliSportUserId, {}, function (d) {
                    if (d.code != 1) {
                        alert(d.msg);
                        return;
                    }
                    _this.item = d.data;
                });
            }
        });
    },

    methods: {
        goBack: function goBack() {
            window.history.go(-1);
        },
        applyIn: function applyIn() {
            var _this2 = this;

            if (!localStorage.aliSportUserId) {
                if (confirm('还没登陆，去登陆？')) this.$router.push('/login');
                return;
            }
            this.content = this.content.replace(/\s+/g, '');
            if (this.content.length == 0 || this.content.length > 50) {
                alert('内容为1-50个字');
                return;
            }
            this.cmFun.ajax('post', '/group/apply/save', {
                userId: localStorage.aliSportUserId,
                content: this.content,
                groupId: this.groupId
            }, function (d) {
                d.code == 1 || alert(d.msg);
                d.code == 1 && _this2.$router.push('/teamDetail?id=' + _this2.item.id);
            });
        }
    }
};

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "apply-in"
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
  }), _vm._v("申请入团"), _c('div', {
    staticClass: "features",
    on: {
      "click": _vm.applyIn
    }
  }, [_vm._v("发送")])]), _c('div', {
    staticClass: "team-item"
  }, [_c('img', {
    attrs: {
      "src": _vm.item.image
    }
  }), _c('div', {
    staticClass: "name"
  }, [_vm._v(_vm._s(_vm.item.name))]), _c('div', {
    staticClass: "num"
  }, [_vm._v(_vm._s(_vm.item.userNum) + "人")]), _c('div', {
    staticClass: "age"
  }, [_vm._v("团龄：" + _vm._s(_vm.item.age) + "年")]), _c('div', {
    staticClass: "tags"
  }, _vm._l((_vm.item.tags), function(it, j) {
    return _c('div', {
      staticClass: "tag",
      style: ({
        background: _vm.colors[j]
      })
    }, [_vm._v(_vm._s(it.tag))])
  }))]), _c('div', {
    staticClass: "form"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('label', [_vm._v("个人介绍")]), _c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.content),
      expression: "content"
    }],
    staticClass: "edit-input",
    staticStyle: {
      "resize": "none"
    },
    attrs: {
      "value": "content"
    },
    domProps: {
      "value": (_vm.content)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.content = $event.target.value
      }
    }
  }), _c('span', {
    staticStyle: {
      "position": "relative",
      "float": "right",
      "top": "-1.5rem",
      "right": "0.5rem",
      "color": "#666"
    }
  }, [_vm._v(_vm._s(50 - (_vm.content.replace(/\s+/g, '').length)))]), _c('div', {
    staticStyle: {
      "text-align": "left",
      "font-size": "0.8rem",
      "margin-top": "0.5rem",
      "color": "#666"
    }
  }, [_vm._v("个人介绍需发送给团长验证")])])])])
},staticRenderFns: []}

/***/ }),

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(156)
}
var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(158),
  /* template */
  __webpack_require__(159),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-0e22f6fe",
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