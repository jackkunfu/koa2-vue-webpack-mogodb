webpackJsonp([3],{

/***/ 148:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(149);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(22)("0d06719e", content, true);

/***/ }),

/***/ 149:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(21)(false);
// imports


// module
exports.push([module.i, ".sort[data-v-ac7b04e0]{border-bottom:1px solid #e7e7e7}.file[data-v-ac7b04e0]{position:relative}.file input[data-v-ac7b04e0]{position:absolute;width:100%;height:100%;top:0;left:0;opacity:0}.file span[data-v-ac7b04e0]{height:2.1rem;margin-top:.2rem}.file img[data-v-ac7b04e0]{max-width:100%;max-height:100%}.edit-input[data-v-ac7b04e0]{font-size:1rem;width:100%;background:#fff;padding-left:.3rem;margin-top:.5rem;height:2.5rem;border:none}.edit-input+span[data-v-ac7b04e0]{float:right;margin-right:.5rem}", ""]);

// exports


/***/ }),

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mapMix = __webpack_require__(64);

var _mapMix2 = _interopRequireDefault(_mapMix);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'teamSet',
    mixins: [_mapMix2.default],
    data: function data() {
        return {
            team: {
                image: '',
                name: '',
                address: [],
                tags: []
            },
            newTag: '',
            id: this.$route.query.id,
            isMapShow: false,
            editKey: '',
            editStr: '',
            editName: '',
            editSign: ''
        };
    },
    mounted: function mounted() {
        var _this2 = this;

        this.$nextTick(function () {

            _this2.cmFun.ajax('get', '/group/view/' + _this2.id + '/' + localStorage.aliSportUserId, {}, function (d) {
                if (d.code != 1) {
                    alert(d.msg);
                    return;
                }
                _this2.team = d.data;

                // address，tags可能为null， 导致报错，这里初始化下
                if (!_this2.team.address) {
                    _this2.team.address = [];
                }
                if (!_this2.team.tags) {
                    _this2.team.tags = [];
                }

                _this2.team.signature = _this2.team.signature.length > 36 ? _this2.team.signature.substring(0, 35) + '...' : _this2.team.signature;
            });
        });
    },

    methods: {
        changeImg: function changeImg() {
            var _this3 = this;

            var _this = this;
            this.cmFun.upFile('file', '', function (d) {
                _this3.cmFun.ajax('post', '/group/setup/' + _this.id + '/' + localStorage.aliSportUserId, {
                    image: d.data
                }, function (res) {
                    if (res.code != 1) alert(res.msg);
                    if (res.code == 1) _this3.team.image = d.data;
                });
            });
        },
        edit: function edit(str) {
            this.editKey = str;
            if (str == 'name') this.editStr = '团名称';else if (str == 'signature') this.editStr = '团签名';
            // if(str == 'remarks') this.editStr = '团介绍'
        },
        editSure: function editSure() {
            var _this4 = this;

            var options = {
                id: this.id,
                userId: localStorage.aliSportUserId
            };
            if (this.editKey == 'name') {
                var newName = this.editName.replace(/\s+/g, '');
                if (newName == '' || newName.length > 20) {
                    alert('名称为1-20个字');
                    return;
                }
                options.name = newName;
            }
            if (this.editKey == 'signature') {
                var newSign = this.editSign.replace(/\s+/g, '');
                if (newSign == '' || newSign.length > 50) {
                    alert('签名为1-50个字');
                    return;
                }
                options.signature = newSign;
            }
            this.updateTeam(options, function (d) {
                if (d.code != 1) {
                    alert(d.msg);
                    return;
                }
                if (_this4.editKey == 'name') _this4.team[_this4.editKey] = _this4.editName;
                if (_this4.editKey == 'signature') _this4.team[_this4.editKey] = _this4.editSign;
                _this4.editKey = '';
            });
        },
        addTag: function addTag() {
            var _this5 = this;

            var tag = this.newTag.trim();
            if (tag == '') return;
            if (tag.length > 5) {
                alert('标签长度不能大于5');
                return;
            }
            var tags = this.team.tags.map(function (v) {
                return v.tag;
            });
            if (tags.indexOf(tag) >= 0) {
                alert('已存在该标签');
                return;
            }
            this.cmFun.ajax('post', '/tag/save', {
                tag: tag,
                groupId: this.id,
                userId: localStorage.aliSportUserId
            }, function (d) {
                if (d.code != 1) alert(d.msg);
                if (d.code == 1) _this5.team.tags.push(d.data);
            });
        },
        delTag: function delTag(id, i) {
            var _this6 = this;

            this.cmFun.ajax('post', '/tag/delete/' + id, {}, function (d) {
                if (d.code != 1) alert(d.msg);
                if (d.code == 1) _this6.team.tags.splice(i, 1);
            });
        },
        delAddress: function delAddress(id, i) {
            var _this7 = this;

            this.cmFun.ajax('post', '/group/address/delete/' + id, {}, function (d) {
                if (d.code != 1) alert(d.msg);
                if (d.code == 1) _this7.team.address.splice(i, 1);
            });
        },
        goBack: function goBack() {
            window.history.go(-1);
        },
        changeChoose: function changeChoose() {
            var _this8 = this;

            this.updateTeam({
                id: this.id,
                userId: localStorage.aliSportUserId,
                joinway: this.team.joinway == 1 ? 0 : 1
            }, function (d) {
                if (d.code != 1) {
                    alert(d.msg);
                    return;
                }
                if (_this8.team.joinway == 1) {
                    _this8.team.joinway = 0;
                } else {
                    _this8.team.joinway = 1;
                }
            });
        },
        updateTeam: function updateTeam(options, cb) {
            this.cmFun.ajax('post', '/group/setup/' + this.id + '/' + localStorage.aliSportUserId, options, function (d) {
                if (d.code != 1) alert(d.msg);
                if (d.code == 1) cb(d);
            });
        },
        chooseMapCallback: function chooseMapCallback(data, lng, lat) {
            var _this9 = this;

            var d = data.regeocode.addressComponent;
            var add = {
                groupId: this.id,
                longitude: lng,
                latitude: lat,
                province: d.province,
                city: typeof d.city == 'string' ? d.city : '',
                area: d.district,
                address: data.regeocode.formatted_address
            };
            this.cmFun.ajax('post', '/group/address/save', add, function (d) {
                if (d.code != 1) {
                    alert(d.msg);
                    return;
                }
                $('.amap-sug-result').remove();
                _this9.team.address.push(add);
                _this9.isMapShow = false;
            });
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "addTeam"
  }, [(_vm.editKey == '') ? _c('div', [_c('div', {
    staticClass: "form"
  }, [_c('div', {
    staticClass: "sort file"
  }, [_vm._v("头像"), _c('span', [_c('img', {
    attrs: {
      "src": _vm.team.image
    }
  })]), _c('input', {
    attrs: {
      "type": "file",
      "id": "file"
    },
    on: {
      "change": _vm.changeImg
    }
  })]), _c('div', {
    staticClass: "sort"
  }, [_vm._v("团名称"), _c('span', {
    on: {
      "click": function($event) {
        _vm.edit('name')
      }
    }
  }, [_vm._v(_vm._s(_vm.team.name))])]), _c('div', {
    staticClass: "sort"
  }, [_vm._v("团签名"), _c('span', {
    on: {
      "click": function($event) {
        _vm.edit('signature')
      }
    }
  }, [_vm._v(_vm._s(_vm.team.signature))])]), _c('div', {
    staticClass: "row address"
  }, [_c('label', [_vm._v("常活动地址")]), _c('div', {
    staticClass: "fr"
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(52)
    },
    on: {
      "click": _vm.showMap
    }
  })])]), _c('div', {
    staticClass: "row"
  }, _vm._l((_vm.team.address), function(add, i) {
    return _c('div', {
      staticClass: "address"
    }, [_c('span', [_vm._v(_vm._s(add.address))]), _c('img', {
      attrs: {
        "src": __webpack_require__(51)
      },
      on: {
        "click": function($event) {
          _vm.delAddress(add.id, i)
        }
      }
    })])
  })), _c('div', {
    staticClass: "row"
  }, [_c('label', [_vm._v("标签")]), _c('div', {
    staticClass: "tag"
  }, [_vm._l((_vm.team.tags), function(tag, i) {
    return _c('div', {
      staticClass: "tag-box"
    }, [_c('span', [_vm._v(_vm._s(tag.tag))]), _c('div', {
      staticClass: "x",
      on: {
        "click": function($event) {
          _vm.delTag(tag.id, i)
        }
      }
    }, [_vm._v("x")])])
  }), _c('div', {
    staticClass: "add-tag"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.newTag),
      expression: "newTag"
    }],
    attrs: {
      "type": "text",
      "placeholder": "标签"
    },
    domProps: {
      "value": _vm.newTag,
      "value": (_vm.newTag)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.newTag = $event.target.value
      }
    }
  }), _c('div', {
    staticClass: "add",
    on: {
      "click": _vm.addTag
    }
  }, [_vm._v("贴上")])])], 2)]), _c('div', {
    staticClass: "row"
  }, [_c('label', [_vm._v("入团是否需要验证")]), _c('div', {
    staticClass: "fr"
  }, [_c('div', {
    staticClass: "switch",
    class: _vm.team.joinway == 1 ? 'sure' : '',
    on: {
      "click": _vm.changeChoose
    }
  })])]), _c('div', {
    staticClass: "sort"
  }, [_c('router-link', {
    attrs: {
      "to": {
        path: '/memberList',
        query: {
          id: _vm.id,
          type: 1
        }
      }
    }
  }, [_c('div', [_vm._v("待审核成员"), _c('span', [_vm._v(_vm._s(_vm.team.sign))])])])], 1), _c('div', {
    staticClass: "sort"
  }, [_c('router-link', {
    attrs: {
      "to": {
        path: '/memberList',
        query: {
          id: _vm.id,
          type: 0
        }
      }
    }
  }, [_c('div', [_vm._v("全部成员"), _c('span', [_vm._v(_vm._s(_vm.team.sign))])])])], 1), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isMapShow),
      expression: "isMapShow"
    }],
    staticClass: "map-ctn"
  }, [_c('div', {
    staticClass: "page-title"
  }, [_c('img', {
    staticClass: "back",
    attrs: {
      "src": __webpack_require__(47)
    },
    on: {
      "click": function($event) {
        _vm.isMapShow = false
      }
    }
  }), _vm._v("地图")]), _c('div', {
    staticClass: "map"
  }, [_c('div', {
    attrs: {
      "id": "map"
    }
  }), _c('div', {
    staticClass: "area-list"
  }, _vm._l((_vm.areaList), function(item, i) {
    return _c('div', {
      staticClass: "item",
      on: {
        "click": function($event) {
          _vm.getAddressInfo(item.location.lng, item.location.lat)
        }
      }
    }, [_c('div', {
      staticClass: "name"
    }, [_vm._v(_vm._s(item.name))]), _c('div', {
      staticClass: "address"
    }, [_vm._v(_vm._s(item.address))])])
  }))])])])]) : _vm._e(), (_vm.editKey != '') ? _c('div', [_c('div', {
    staticClass: "page-title"
  }, [_c('img', {
    staticClass: "back",
    attrs: {
      "src": __webpack_require__(47)
    },
    on: {
      "click": function($event) {
        _vm.editName = _vm.editSign = _vm.editKey = '';
      }
    }
  }), _c('span', [_vm._v(_vm._s(_vm.editStr))]), _c('div', {
    staticClass: "features",
    on: {
      "click": _vm.editSure
    }
  }, [_vm._v("确定")])]), (_vm.editKey == 'name') ? _c('div', [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.editName),
      expression: "editName"
    }],
    staticClass: "edit-input",
    attrs: {
      "type": "text",
      "placeholder": "请输入团名称",
      "value": "editName"
    },
    domProps: {
      "value": (_vm.editName)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.editName = $event.target.value
      }
    }
  }), _c('span', [_vm._v(_vm._s(20 - (_vm.editName.replace(/\s+/g, '').length)))])]) : _vm._e(), (_vm.editKey == 'signature') ? _c('div', [_c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.editSign),
      expression: "editSign"
    }],
    staticClass: "edit-input",
    attrs: {
      "placeholder": "请输入团签名",
      "value": "editSign"
    },
    domProps: {
      "value": (_vm.editSign)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.editSign = $event.target.value
      }
    }
  }), _c('span', [_vm._v(_vm._s(50 - (_vm.editSign.replace(/\s+/g, '').length)))])]) : _vm._e()]) : _vm._e()])
},staticRenderFns: []}

/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(148)
}
var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(150),
  /* template */
  __webpack_require__(151),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-ac7b04e0",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 47:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAArCAYAAADhXXHAAAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxMzggNzkuMTU5ODI0LCAyMDE2LzA5LzE0LTAxOjA5OjAxICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+IEmuOgAAAgtJREFUWIXt1ztrFGEYhuErBxVFQUGbrewELRfUQkEQPIBiPGEjBpIgKmJhYauInY1FEJRoPKBBEBQlmEBAEH+CB/wFBmwEjahEYvElknyTmewuk5kgc8Oyy7MM3OzOPO/7UVFRUQFt9Xq9leu2YhAbcR1X8lNKp72Fa3ZgDJuxCpexKU+pNJqV3YlXWBPly/LRyaYZ2V0Yweoof4B3eQll0ajsbgwLf/tsHqEnV6MMGpHdgxeSovfRjT95S6WxkOw+PJcUHUSvAkXJlt0viK6M8gEliJIue1AQXRHlt3AaU4splcZ8sl14iuVRfhNnlSRKUvYonkiK9uO8EkWZK3scQ5KiN3BByaLQOf1+QujMjuj7O7iKtUVKRUzhK2GRSRNdSoyjp61er3/B+rJtGuBzK1tXabQLT3nhBd8k4+jtFKqqHQ8l79sBXCpYLObfAzbTBkOYxONZGfThOy5aAtXVUavVZj5/mH51mfsLb8c6jBarlmS2LHzEexw2V3gbNginhNKYrw2e4Rh+R/k5YT9oW2ypNNKq6yWO4FeUn8FtJQln9eywcP/+jPI+oSUKn3gLDYURQfhHlPcIe0Ohwo1MsFEckhTuxj0FCjc6bsdwQFL4JO7mapRBM7vBa+FcNhHlp7AlN6MMml1k3ggn3m9RPpmPTjatbF1vsVeYdhO4hk95SlVUVFT8R/wFRURXGecH2+wAAAAASUVORK5CYII="

/***/ }),

/***/ 51:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxMzggNzkuMTU5ODI0LCAyMDE2LzA5LzE0LTAxOjA5OjAxICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+IEmuOgAAAmVJREFUWIXN2b9PE2EYwPEPl8KAsggORHQhgTAZI/wBMBOMiwRl0gH8xcyuiztEMcYJFScTEuMmu+AOJMZBCAtMqENJ0OHekv44jra2Pb9Jh7v3vff5tnd9+zxP275fvaYOIoxgFMMYwCWcC+O/sIttbGAN6ziuNVBbjYJ9eIg7uFxjrB94g0XsVHtRVOW87rDwN8zXISdcMx/WWAxrNkTwFjbxAB11iJXTEdbaxORZk9MEc3iO9+hpgFg5PVgJMXKnTTpNsBMfMNt4rwpmQ6zOpMEkwRzeYbyJUuWMh5gVn2SS4AImmm2UwESIXUK54CRmWqKTzAymik8UC3ZLeAcZsICLhYNiwaea822tlQt4UjgoCF7BvUx0krkrdjoRvI/2zHQqaRc7icJrOlOdZKYRFbKSvoxlkujDSISxrE1SGI1wPWuLFIYjDGZtkcJgDr1nTGprssSflLHeCF1NFvgXuqrNqDMjwmHWEikc5rAnvT5Ie0aazV6ErQwFzmIrwtesLVLYiMRF9f/KWoQvaiikW8gO1iNxO2I5Y5kklnFc2AcXkc9Qppy82OkkYd3Bq8x0KnktPHbFzaNu8ZZTVc+kiRyIE5gDSoumAzzKwqiMOUGOyrp4BUst1SnlJd4Wn0hKFuaw2hKdUlbxuPxkkmBeXN1/arZRER9DzIqd5LR06zduaM3tXsLNELOCtHzwSNwam8J+473s43aIcXTapGoS1hUM4YXGbOb5sNaQuOWWSrUZ9b640u/HM3EHv1Z2w7X9Ya2q7kqtXf4ChYJ/TFy2DogL7fNh/Kf4l2BbnM59VuffEH8BT31pkY2z9GMAAAAASUVORK5CYII="

/***/ }),

/***/ 52:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    data: function data() {
        return {
            areaList: []
        };
    },

    methods: {
        showNearList: function showNearList(position) {
            this.areaList = position.regeocode.pois;
        },
        getAddressInfo: function getAddressInfo(lng, lat) {
            var _this = this;
            $.ajax({
                type: 'GET',
                url: 'https://restapi.amap.com/v3/geocode/regeo',
                dataType: 'JSON',
                data: {
                    "output": "JSON",
                    "location": lng + "," + lat,
                    "key": "5b384bd6b1c25c86a18cdef18c82c679",
                    "radius": 10,
                    "extensions": "base"
                },
                success: function success(data) {
                    _this.chooseMapCallback && _this.chooseMapCallback(data, lng, lat);
                }
            });
        },
        showMap: function showMap() {
            var _this2 = this;

            var isDefault = true,
                selfL;
            this.cmFun.getLocation(function (d) {
                _this2.lng = d.coords.longitude;
                _this2.lat = d.coords.latitude;
                selfL = [d.coords.longitude, d.coords.latitude];
                isDefault = false;
            });

            this.isMapShow = true;
            var _this = this;
            AMapUI.loadUI(['misc/PositionPicker'], function (PositionPicker) {
                var map = new AMap.Map('map', {
                    zoom: 16,
                    scrollWheel: false
                });
                var positionPicker = new PositionPicker({
                    mode: 'dragMap',
                    map: map
                });
                positionPicker.start();
                map.panBy(0, 1);

                positionPicker.on('success', function (positionResult) {
                    console.log(positionResult);
                    _this.showNearList(positionResult);
                });

                var auto = new AMap.Autocomplete({
                    input: "searchkey"
                });
                AMap.event.addListener(auto, "select", select); //注册监听，当选中某条记录时会触发
                function select(e) {
                    if (e.poi && e.poi.location) {
                        map.setZoom(15);
                        map.setCenter(e.poi.location);
                        marker.setPosition(new AMap.LngLat(e.poi.location.lng, e.poi.location.lat));
                    }
                }

                var clickEventListener = map.on('click', function (e) {
                    var lng = e.lnglat.getLng();
                    var lat = e.lnglat.getLat();
                    $.ajax({
                        type: 'GET',
                        url: 'https://restapi.amap.com/v3/geocode/regeo',
                        dataType: 'JSON',
                        data: {
                            "output": "JSON",
                            "location": lng + "," + lat,
                            "key": "5b384bd6b1c25c86a18cdef18c82c679",
                            "radius": 10,
                            "extensions": "base"
                        },
                        success: function success(data) {
                            _this.chooseMapCallback && _this.chooseMapCallback(data, lng, lat);
                        }
                    });
                });
            });
        }
    }
};

/***/ })

});