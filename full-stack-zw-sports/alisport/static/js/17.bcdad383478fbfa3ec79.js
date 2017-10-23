webpackJsonp([17],{

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(153);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(22)("38b62574", content, true);

/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(21)(false);
// imports


// module
exports.push([module.i, ".activity-sign[data-v-4d7b712b]{padding-bottom:4rem}.row[data-v-4d7b712b]{border-bottom:1px solid #c1c1c1;padding:.5rem;background:#fff;text-align:left}.row label[data-v-4d7b712b]{font-size:1rem;line-height:1.5rem;color:red;display:block}.row label span[data-v-4d7b712b]{color:#333}.row img[data-v-4d7b712b]{float:right;margin:-1rem .5rem 0 0;width:1rem}.row input[data-v-4d7b712b]{width:80%;font-size:.8rem;height:1.5rem;color:#666;border:none}.map-ctn #map[data-v-4d7b712b],.map-ctn .close[data-v-4d7b712b],.map-ctn .search[data-v-4d7b712b]{position:fixed}.map-ctn #map[data-v-4d7b712b]{width:100%;height:100%;top:0;left:0}.map-ctn .search[data-v-4d7b712b]{width:20rem;height:2.5rem;top:3rem;left:50%;margin-left:-10rem}.map-ctn .search input[data-v-4d7b712b]{width:100%;height:100%;background:#fff;font-size:1rem}.map-ctn .close[data-v-4d7b712b]{width:5rem;height:5rem;font-size:4rem;text-align:center;background:#fff;border:1px solid #c1c1c1;top:10rem;left:50%;margin-left:20rem}.file[data-v-4d7b712b]{margin-right:.5rem;font-size:3rem;line-height:8rem;position:relative;text-align:center}.file img[data-v-4d7b712b],.file input[data-v-4d7b712b]{display:block;position:absolute;width:100%;height:100%;top:0;left:0;margin:0;border:none;z-index:1}.file input[data-v-4d7b712b]{z-index:2;opacity:0}.file img[data-v-4d7b712b]{width:auto;height:auto;max-width:100%;max-height:100%;left:50%;-webkit-transform:translate(-50%);transform:translate(-50%)}", ""]);

// exports


/***/ }),

/***/ 154:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    name: 'enroll',
    data: function data() {
        return {
            options: {}, //  输入内容。最终要提交的申请的对象数据
            keyStr: this.$route.query.keys, //  该活动报名要求的字段
            keys: [], //  最终展示填写的keys
            isMapShow: false,
            showBtm: false,
            act: this.$route.query.act, // 活动基本信息
            info: {
                name: '',
                mobile: '',
                blood: '',
                birth: ''
            }, // 报名信息
            btmKey: '', // 当前隐藏框展示的对应的key
            // id: this.$route.query.id,    // 活动id
            activeId: this.$route.query.activeId, // 活动id
            aliActiveEventId: this.$route.query.eventId,
            allKey: [{ key: "name", str: '真实姓名' }, { key: "sex", str: '性别' }, { key: "mobile", str: '手机号' }, { key: "email", str: '邮箱' }, { key: "country", str: '国籍' }, { key: "city", str: '城市' }, { key: "address", str: '详细地址' }, { key: "blood", str: '血型' }, { key: "birth", str: '出生日期' }, { key: "cardType", str: '证件类型' }, { key: "cardno", str: '证件号' }, { key: "clothSize", str: '服装尺码' }, { key: "contact", str: '紧急联系人' }, { key: "contactNumber", str: '紧急联系人电话' }, { key: "raceCert", str: '完赛证明' }, { key: "healthCert", str: '健康证明' }]
        };
    },
    mounted: function mounted() {
        var _this2 = this;

        this.$nextTick(function () {

            var showBtmKeys = ['sex', 'height', 'weight', 'blood', 'cardType', 'clothSize', 'city', 'address'];
            var imgKeys = ['raceCert', 'healthCert'];

            _this2.keys = JSON.parse(_this2.keyStr);
            console.log(_this2.keys);

            _this2.keys = _this2.keys.map(function (v) {
                //  需要点击展示隐藏区域选择的key增加 valueType 为 true
                if (showBtmKeys.indexOf(v.key) >= 0) {
                    // 需要弹出框选择的
                    _this2.$set(v, 'valueType', 1);
                } else if (imgKeys.indexOf(v.key) >= 0) {
                    // 上传图片的
                    _this2.$set(v, 'valueType', 2);
                } else {
                    //  普通输入的
                    _this2.$set(v, 'valueType', 3);
                }
                return v;
            });

            var kArr = _this2.keys.map(function (v) {
                return v.key;
            });
            if (kArr.indexOf('birth') > -1) {
                var _this = _this2;
                setTimeout(function () {
                    new datePicker().init({
                        'trigger': '#birth', /* 按钮选择器，用于触发弹出插件*/
                        'type': 'date', /* 模式：date日期；datetime日期时间；time时间；ym年月；*/
                        'minDate': '1900-1-1', /* 最小日期*/
                        // 'maxDate': new Date().format('yyyy-MM-dd'),/* 最大日期*/
                        'maxDate': '2099-1-1', /* 最大日期*/
                        /* 确认时触发事件*/
                        'onSubmit': function onSubmit() {
                            _this.options.birth = this.value;
                        },
                        /* 取消时触发事件*/
                        'onClose': function onClose() {}
                    });
                }, 100);
            }
        });
    },

    methods: {
        change: function change(key) {
            var _this3 = this;

            this.cmFun.upFile(key, 'dir', function (data) {
                if (data.code != 1) {
                    alert(data.msg);
                    return;
                }
                // this.options[key] = data.data;
                _this3.$set(_this3.options, key, data.data);
            });
        },
        inputClick: function inputClick(item) {
            if (item.key == 'city' || item.key == 'address') {
                this.isMapShow = true;
                this.showMap();
            } else {
                this.showBtm = true;
                this.btmKey = item.key;
            }
        },
        updateMsg: function updateMsg(v) {
            this.options[this.btmKey] = v;
        },
        goBack: function goBack() {
            window.history.go(-1);
        },
        enroll: function enroll() {
            var _this4 = this;

            // var kArr = ['nick']
            // for(var i=0; i<kArr; i++){
            //     if(this.keys[kArr[i]]){
            //         if(!this.options[kArr[i]] || this.options[kArr[i]].trim() == ''){
            //             alert('昵称没填~');
            //             return;
            //         }
            //     }
            // }
            var kArr = this.keys.map(function (v) {
                return v.key;
            });
            // console.log(kArr)
            if (kArr.indexOf('nick') > -1) {
                if (!this.options.nick || this.options.nick.trim() == '') {
                    alert('昵称没填~');
                    return;
                }
            }

            if (kArr.indexOf('name') > -1) {
                if (!this.options.name || this.options.name.trim() == '') {
                    alert('真实姓名没填~');
                    return;
                }
            }
            if (kArr.indexOf('sex') > -1) {
                if (!this.options.sex || this.options.sex.trim() == '') {
                    alert('性别没选~');
                    return;
                }
            }
            if (kArr.indexOf('birth') > -1) {
                if (!this.options.birth || this.options.birth.trim() == '') {
                    alert('生日没选~');
                    return;
                }
            }
            if (kArr.indexOf('email') > -1) {
                if (!this.options.email || this.options.email.trim() == '') {
                    alert('邮箱没填~');
                    return;
                }
                this.options.email = this.options.email.trim();
                if (!/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(this.options.email)) {
                    alert('邮箱格式不对~');
                    return;
                }
            }
            if (kArr.indexOf('city') > -1) {
                if (!this.options.city || this.options.city.trim() == '') {
                    alert('城市地址没选~');
                    return;
                }
            }
            if (kArr.indexOf('height') > -1) {
                if (!this.options.height || this.options.height.trim() == '') {
                    alert('身高没选~');
                    return;
                }
            }
            if (kArr.indexOf('weight') > -1) {
                if (!this.options.weight || this.options.weight.trim() == '') {
                    alert('体重没选~');
                    return;
                }
            }
            if (kArr.indexOf('blood') > -1) {
                if (!this.options.blood || this.options.blood.trim() == '') {
                    alert('血型没选~');
                    return;
                }
            }
            if (kArr.indexOf('cardType') > -1) {
                if (!this.options.cardType || this.options.cardType.trim() == '') {
                    alert('证件类型没选~');
                    return;
                }
            }
            if (kArr.indexOf('cardno') > -1) {
                if (!this.options.cardno || this.options.cardno.trim() == '') {
                    alert('证件号没填~');
                    return;
                }
                this.options.cardno = this.options.cardno.trim();
                var reg1 = /^[1-9]\d{5}[1-2]\d{10}([0-9]|x|X)$/; // 身份证
                var reg2 = /(^[a-zA-Z0-9]{3,21}$)|(^(P\d{7})|(G\d{8})$)/; // 护照
                var reg3 = /^[a-zA-Z0-9]{5,21}$/; // 港澳台/台胞证
                if (!(reg1.test(this.options.cardno) || reg2.test(this.options.cardno) || reg3.test(this.options.cardno))) {
                    alert('证件号有误~');
                    return;
                }
            }
            if (kArr.indexOf('clothSize') > -1) {
                if (!this.options.clothSize || this.options.clothSize.trim() == '') {
                    alert('服装尺寸没选~');
                    return;
                }
            }
            if (kArr.indexOf('contact') > -1) {
                if (!this.options.contact || this.options.contact.trim() == '') {
                    alert('紧急联系人没填~');
                    return;
                }
            }
            if (kArr.indexOf('contactNumber') > -1) {
                if (!this.options.contactNumber || this.options.contactNumber.trim() == '') {
                    alert('紧急联系人电话没填~');
                    return;
                }
                this.options.contactNumber = this.options.contactNumber.trim();
                if (!/^1[3|4|5|7|8][0-9]\d{8}$/.test(this.options.contactNumber)) {
                    alert('紧急联系人电话有误~');
                    return;
                }
            }

            var options = this.options;
            options.aliActiveEventId = this.aliActiveEventId;
            options.activeId = this.activeId;
            options.userId = localStorage.aliSportUserId;

            if (options.sex) {
                options.sex = options.sex == '男' ? '1' : '0';
            }
            if (options.birth) {
                options.birth = new Date(options.birth).getTime();
            }

            this.cmFun.ajax('post', '/active/user/save', options, function (d) {
                alert(d.msg);
                if (d.code == 1) {
                    _this4.$router.push({ path: '/activityDetail', query: { id: _this4.activeId, isEnroll: true } });
                }
            });
        },
        chooseTime: function chooseTime() {},
        showMap: function showMap() {
            var _this5 = this;

            var isDefault = true,
                selfL;
            this.cmFun.getLocation(function (d) {
                _this5.lng = d.coords.longitude;
                _this5.lat = d.coords.latitude;
                selfL = [d.coords.longitude, d.coords.latitude];
                isDefault = false;
            });

            this.isMapShow = true;
            var map = new AMap.Map('map', {
                resizeEnable: true,
                zoom: 13,
                center: isDefault ? [120.180304, 30.276887] : selfL
            });

            var _this = this;
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
                        console.log(data);
                        var d = data.regeocode.addressComponent;
                        var add = {
                            longitude: lng,
                            latitude: lat,
                            province: d.province,
                            city: typeof d.city == 'string' ? d.city : '',
                            area: d.district,
                            address: data.regeocode.formatted_address
                        };
                        $('.amap-sug-result').remove();
                        _this.options.address = add.address;
                        _this.options.city = add.city;
                        _this.options.longitude = add.longitude;
                        _this.options.latitude = add.latitude;
                        _this.isMapShow = false;
                    }
                });
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
        }
    }
};

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "activity-sign"
  }, [_c('div', {
    staticClass: "team-item",
    attrs: {
      "id": "aa"
    }
  }, [_c('div', {
    staticClass: "img"
  }, [_c('img', {
    attrs: {
      "src": _vm.act.image
    }
  })]), _c('div', {
    staticClass: "name"
  }, [_vm._v(_vm._s(_vm.act.name))]), _c('div', {
    staticClass: "address"
  }, [_vm._v(_vm._s(_vm.act.address))])]), _vm._l((_vm.keys), function(item) {
    return _c('div', {
      staticClass: "row"
    }, [_c('label', [_vm._v("*"), _c('span', [_vm._v(_vm._s(item.str))])]), (item.valueType == 1) ? _c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: (_vm.options[item.key]),
        expression: "options[item.key]"
      }],
      attrs: {
        "type": "text",
        "placeholder": '请选择' + item.str,
        "readonly": "readonly"
      },
      domProps: {
        "value": _vm.options[item.key],
        "value": (_vm.options[item.key])
      },
      on: {
        "click": function($event) {
          _vm.inputClick(item)
        },
        "input": function($event) {
          if ($event.target.composing) { return; }
          _vm.$set(_vm.options, item.key, $event.target.value)
        }
      }
    }) : _vm._e(), (item.valueType == 2) ? _c('div', {
      staticClass: "file"
    }, [_c('span', [_vm._v("+")]), _c('img', {
      attrs: {
        "src": _vm.options[item.key]
      }
    }), _c('input', {
      attrs: {
        "type": "file",
        "id": item.key
      },
      on: {
        "change": function($event) {
          _vm.change(item.key)
        }
      }
    })]) : _vm._e(), (item.valueType == 3) ? _c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: (_vm.options[item.key]),
        expression: "options[item.key]"
      }],
      attrs: {
        "type": "text",
        "placeholder": '请输入' + item.str,
        "id": item.key == 'birth' ? 'birth' : ''
      },
      domProps: {
        "value": _vm.options[item.key],
        "value": (_vm.options[item.key])
      },
      on: {
        "input": function($event) {
          if ($event.target.composing) { return; }
          _vm.$set(_vm.options, item.key, $event.target.value)
        }
      }
    }) : _vm._e()])
  }), _c('div', {
    staticClass: "btm-hide",
    class: _vm.showBtm ? 'show' : 'hide',
    on: {
      "click": function($event) {
        _vm.showBtm = false;
      }
    }
  }, [(_vm.btmKey == 'sex') ? _c('div', {
    staticClass: "btm"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("选择性别")]), _c('ul', [_c('li', {
    on: {
      "click": function($event) {
        _vm.updateMsg('男')
      }
    }
  }, [_vm._v("男")]), _c('li', {
    on: {
      "click": function($event) {
        _vm.updateMsg('女')
      }
    }
  }, [_vm._v("女")])])]) : _vm._e(), (_vm.btmKey == 'height') ? _c('div', {
    staticClass: "btm"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("选择身高")]), _c('ul', _vm._l(([140, 145, 150, 155, 160, 165, 170, 175, 180, 185, 190, 195]), function(item) {
    return _c('li', {
      on: {
        "click": function($event) {
          _vm.updateMsg(item)
        }
      }
    }, [_vm._v(_vm._s(item))])
  }))]) : _vm._e(), (_vm.btmKey == 'weight') ? _c('div', {
    staticClass: "btm"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("选择体重")]), _c('ul', _vm._l(([50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120]), function(item) {
    return _c('li', {
      on: {
        "click": function($event) {
          _vm.updateMsg(item)
        }
      }
    }, [_vm._v(_vm._s(item))])
  }))]) : _vm._e(), (_vm.btmKey == 'blood') ? _c('div', {
    staticClass: "btm"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("血型")]), _c('ul', _vm._l((['O', 'AB', 'A', 'B']), function(item) {
    return _c('li', {
      on: {
        "click": function($event) {
          _vm.updateMsg(item)
        }
      }
    }, [_vm._v(_vm._s(item))])
  }))]) : _vm._e(), (_vm.btmKey == 'cardType') ? _c('div', {
    staticClass: "btm"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("证件类型")]), _c('ul', _vm._l((['身份证', '港澳台通行证', '台胞证', '护照']), function(item) {
    return _c('li', {
      on: {
        "click": function($event) {
          _vm.updateMsg(item)
        }
      }
    }, [_vm._v(_vm._s(item))])
  }))]) : _vm._e(), (_vm.btmKey == 'clothSize') ? _c('div', {
    staticClass: "btm"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("服装尺码")]), _c('ul', _vm._l((['S', 'M', 'L', 'XL', 'XXL']), function(item) {
    return _c('li', {
      on: {
        "click": function($event) {
          _vm.updateMsg(item)
        }
      }
    }, [_vm._v(_vm._s(item))])
  }))]) : _vm._e()]), _c('div', {
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
    attrs: {
      "id": "map"
    }
  }), _vm._m(0)]), _c('div', {
    staticClass: "fix-bottom",
    on: {
      "click": _vm.enroll
    }
  }, [_c('div', [_vm._v("确定")])])], 2)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "search"
  }, [_c('input', {
    attrs: {
      "type": "text",
      "id": "searchkey",
      "placeholder": "输入搜索地址！"
    }
  })])
}]}

/***/ }),

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(152)
}
var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(154),
  /* template */
  __webpack_require__(155),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-4d7b712b",
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