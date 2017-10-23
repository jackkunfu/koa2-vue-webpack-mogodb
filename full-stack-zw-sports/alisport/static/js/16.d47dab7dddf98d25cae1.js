webpackJsonp([16],{

/***/ 114:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(115);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(22)("5ec96dac", content, true);

/***/ }),

/***/ 115:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(21)(false);
// imports


// module
exports.push([module.i, ".form .row .img .upimg[data-v-6cae86ff]{left:50%;-webkit-transform:translate(-50%);transform:translate(-50%);background:#fff;height:100%}.edit-input[data-v-6cae86ff]{font-size:1rem;width:100%;background:#fff;padding-left:.3rem;margin-top:.5rem;height:2.5rem;border:none}.edit-input+span[data-v-6cae86ff]{float:right;margin-right:.5rem}.map-ctn #map[data-v-6cae86ff],.map-ctn .close[data-v-6cae86ff],.map-ctn .search[data-v-6cae86ff]{position:fixed}.map-ctn #map[data-v-6cae86ff]{width:100%;height:100%;top:0;left:0}.map-ctn .search[data-v-6cae86ff]{width:20rem;height:2.5rem;top:3rem;left:50%;margin-left:-10rem}.map-ctn .search input[data-v-6cae86ff]{width:100%;height:100%;background:#fff;font-size:1rem}.map-ctn .close[data-v-6cae86ff]{width:5rem;height:5rem;font-size:4rem;text-align:center;background:#fff;border:1px solid #c1c1c1;top:10rem;left:50%;margin-left:20rem}", ""]);

// exports


/***/ }),

/***/ 116:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
// import datepickerMobile from '../../../node_modules/datepicker-mobile/src/datetimePicker.vue'
exports.default = {
    name: 'myInfo',
    filters: {
        birth: function birth(v) {
            if (!v) return '';
            var t = new Date(v);
            return addZero(t.getFullYear()) + '-' + addZero(t.getMonth()) + '-' + addZero(t.getDate());
        },
        address: function address(v) {
            if (!v) return '';
            return v.length > 20 ? v.substring(0, 20) + '...' : v;
        }
    },
    data: function data() {
        return {
            info: {},
            id: localStorage.aliSportUserId,
            editStatus: false, //  是不是点击编辑某一项的状态
            editKey: '', // 正在编辑的字段
            editStr: '', // 正在编辑的字段名称
            editNick: '', // 编辑中的昵称值
            editName: '', // 编辑中的真实姓名
            editEmail: '', // 编辑中的邮箱值，
            editCardno: '', // 编辑中的证件号
            editContact: '', // 编辑中的联系人值
            editContactNo: '', // 编辑中的联系人电话值
            showBtm: false, // 选择性别 证件类型  血型... 的btmhide
            btmKey: '', //  隐藏的列表项的展示key
            showDate: false,
            isMapShow: false,
            canChangeRealName: false
        };
    },

    components: {
        // datepickerMobile
    },
    mounted: function mounted() {
        var _this2 = this;

        this.cmFun.ajax('get', '/user/view/' + this.id, {}, function (d) {
            _this2.info = d;
            if (_this2.info.sex == 0) {
                _this2.info.sex = '女';
            } else if (_this2.info.sex == 1) {
                _this2.info.sex = '男';
            }
            if (!d.name || d.name.replace(/\s+/g, '') == '') _this2.canChangeRealName = true;
        });

        this.$nextTick(function () {
            var today = new Date();
            var todayStr = today.getFullYear() + '-' + (today.getMonth() + 1) + "-" + today.getDate();
            var endStr = '2099-1-1';
            var _this = _this2;
            var dp = new datePicker();
            dp.init({
                'trigger': '#birth', /* 按钮选择器，用于触发弹出插件*/
                'type': 'date', /* 模式：date日期；datetime日期时间；time时间；ym年月；*/
                'minDate': '1900-1-1', /* 最小日期*/
                // 'maxDate': new Date().format('yyyy-MM-dd'),/* 最大日期*/
                'maxDate': endStr, /* 最大日期*/
                /* 确认时触发事件*/
                'onSubmit': function onSubmit() {
                    _this.info.birth = this.value;
                },
                /* 取消时触发事件*/
                'onClose': function onClose() {}
            });
        });
    },

    methods: {
        save: function save() {
            var _this3 = this;

            if (!this.info.nick || this.info.nick.trim() == '') {
                alert('昵称没填~');
                return;
            }
            if (!this.info.name || this.info.name.trim() == '') {
                alert('真实姓名没填~');
                return;
            }
            if (!this.info.sex || this.info.sex == '') {
                alert('性别没选~');
                return;
            }
            if (!this.info.birth || this.info.birth == '') {
                alert('生日没选~');
                return;
            }
            if (!this.info.email || this.info.email.trim() == '') {
                alert('邮箱没填~');
                return;
            }
            if (!this.info.city || this.info.city == '') {
                alert('城市地址没选~');
                return;
            }
            if (!this.info.height || this.info.height == '') {
                alert('身高没选~');
                return;
            }
            if (!this.info.weight || this.info.weight == '') {
                alert('体重没选~');
                return;
            }
            if (!this.info.blood || this.info.blood == '') {
                alert('血型没选~');
                return;
            }
            if (!this.info.cardType || this.info.cardType == '') {
                alert('证件类型没选~');
                return;
            }
            if (!this.info.cardno || this.info.cardno.trim() == '') {
                alert('证件号没填~');
                return;
            }
            if (!this.info.colthSize || this.info.colthSize == '') {
                alert('服装尺寸没选~');
                return;
            }
            if (!this.info.contact || this.info.contact.trim() == '') {
                alert('紧急联系人没填~');
                return;
            }
            if (!this.info.contactNumber || this.info.contactNumber.trim() == '') {
                alert('紧急联系人电话没填~');
                return;
            }

            var options = $.extend(true, {}, this.info);
            if (options.sex == '男') {
                options.sex = 1;
            } else if (options.sex == '女') {
                options.sex = 0;
            }

            options.birth = new Date(options.birth).getTime();

            this.cmFun.ajax('post', '/user/save', options, function (d) {
                if (d.code != 1) {
                    alert(d.msg);
                    return;
                }
                _this3.info = {};
                _this3.$router.push({ path: '/my', query: { id: _this3.id } });
            });
        },
        updateMsg: function updateMsg(v) {
            var k = this.btmKey;
            var options = {};
            options[k] = v;
            this.info[k] = v;
            options.id = this.id;

            // this.cmFun.ajax('post', '/user/save', options, (res)=>{
            //     if(res.code != 1){
            //         alert(res.msg);
            //         return;
            //     }
            //     this.info[k] = v;
            //     this.btmKey = '';
            // })
        },
        edit: function edit(str) {
            if (str == 'name') {
                if (!this.canChangeRealName) return;
            }

            this.editKey = str;
            this.editStatus = true;
            if (str == 'nick') {
                this.editStr = '昵称';
            } else if (str == 'email') {
                this.editStr = '邮箱';
            } else if (str == 'contact') {
                this.editStr = '联系人姓名';
            } else if (str == 'contactNumber') {
                this.editStr = '联系人联系方式';
            } else if (str == 'cardno') {
                this.editStr = '证件号';
            }
        },
        editSure: function editSure() {
            var option = {};
            if (this.editKey == 'name') {
                var v = this.editName.trim();
                if (v == '') {
                    alert('真实姓名不能为空');
                    return;
                }
                option[this.editKey] = v;
                this.info[this.editKey] = v;
            } else if (this.editKey == 'nick') {
                var v = this.editNick.trim();
                if (v == '' || v.length > 13) {
                    alert('昵称长度为13个以内');
                    return;
                }
                option[this.editKey] = v;
                this.info[this.editKey] = v;
            } else if (this.editKey == 'email') {
                if (!/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(this.editEmail)) {
                    alert('邮箱格式不对~');
                    return;
                }
                option[this.editKey] = this.editEmail;
                this.info[this.editKey] = this.editEmail;
            } else if (this.editKey == 'contact') {
                var v = this.editContact.trim();
                if (v == '') {
                    alert('不能为空~');
                    return;
                }
                option[this.editKey] = this.editContact;
                this.info[this.editKey] = this.editContact;
            } else if (this.editKey == 'contactNumber') {
                if (!/^1[3|4|5|7|8][0-9]\d{8}$/.test(this.editContactNo)) {
                    alert('号码有误~');
                    return;
                }
                option[this.editKey] = this.editContactNo;
                this.info[this.editKey] = this.editContactNo;
            } else if (this.editKey == 'cardno') {
                var reg1 = /^[1-9]\d{5}[1-2]\d{10}([0-9]|x|X)$/; // 身份证
                var reg2 = /(^[a-zA-Z0-9]{3,21}$)|(^(P\d{7})|(G\d{8})$)/; // 护照
                var reg3 = /^[a-zA-Z0-9]{5,21}$/; // 港澳台/台胞证
                if (!(reg1.test(this.editCardno) || reg2.test(this.editCardno) || reg3.test(this.editCardno))) {
                    alert('证件号有误~');
                    return;
                }
                option[this.editKey] = this.editCardno;
                this.info[this.editKey] = this.editCardno;
            }

            this.editKey = '';
            this.editNick = this.editName = this.editEmail = this.editCardno = this.editContact = this.editContactNo = '';

            //   改成最后统一发送了
            // 发请求更新数据
            // this.cmFun.ajax('post', '/user/save', option, (d)=>{
            //     if(d.code != 1){
            //         alert(d.msg);
            //         return;
            //     }

            //     var v;
            //     if(this.editKey == 'nick'){
            //         v = this.editNick
            //     }else if(this.editKey == 'email'){
            //         v = this.editEmail
            //     }else if(this.editKey == 'contact'){
            //         v = this.editContact
            //     }else if(this.editKey == 'contactNumber'){
            //         v = this.editContactNo
            //     }
            //     this.info[this.editKey] = v;

            //     this.editKey = '';
            //     this.editNick = this.editEmail = this.editContact = this.editContactNo = '';
            // })
        },
        upImg: function upImg(id, key) {
            var _this4 = this;

            this.cmFun.upFile(id, 'dir', function (data) {
                if (data.code != 1) {
                    alert(data.msg);
                    return;
                }
                var options = {};
                options.id = _this4.id;
                options[key] = data.data;
                _this4.info[key] = data.data;

                // 暂注释改成统一请求
                // this.cmFun.ajax('post', '/user/save', options, (res)=>{
                //     if(res.code != 1){
                //         alert(res.msg);
                //         return;
                //     }
                //     this.info[key] = data.data;
                // })
            });
        },
        timeChange: function timeChange(t) {
            this.info.birth = t;
            this.showDate = false;
        },
        goBack: function goBack() {
            window.history.go(-1);
        },
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
                zoom: 12,
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
                        _this.info.city = add.city;
                        _this.info.address = add.address;
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
                    document.getElementById("longitude").value = e.poi.location.lng;
                    document.getElementById("latitude").value = e.poi.location.lat;
                    document.getElementById("address").value = e.poi.district + e.poi.district.address;
                }
            }
            // })
        }
    }
};

/***/ }),

/***/ 117:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "myInfo"
  }, [(_vm.editKey == '') ? _c('div', [_c('div', {
    staticClass: "page-title"
  }, [_c('img', {
    staticClass: "back",
    attrs: {
      "src": __webpack_require__(47)
    },
    on: {
      "click": _vm.goBack
    }
  }), _vm._v("个人设置"), _c('div', {
    staticClass: "features",
    on: {
      "click": _vm.save
    }
  }, [_vm._v("保存")])]), _c('div', {
    staticClass: "form"
  }, [_c('div', {
    staticClass: "row photo"
  }, [_c('label', [_vm._v("头像")]), _c('div', {
    staticClass: "fr"
  }, [_c('img', {
    attrs: {
      "src": _vm.info.image
    }
  }), _c('input', {
    attrs: {
      "type": "file",
      "accept": "image/*",
      "id": "file"
    },
    on: {
      "change": function($event) {
        _vm.upImg('file', 'image')
      }
    }
  })])])]), _c('div', {
    staticClass: "sort",
    on: {
      "click": function($event) {
        _vm.edit('nick')
      }
    }
  }, [_vm._v("昵称"), _c('span', [_vm._v(_vm._s(_vm.info.nick))])]), _c('div', {
    staticClass: "sort",
    on: {
      "click": function($event) {
        _vm.edit('name')
      }
    }
  }, [_vm._v("真实姓名"), _c('span', {
    class: _vm.canChangeRealName ? '' : 'none'
  }, [_vm._v(_vm._s(_vm.info.name))])]), _c('div', {
    staticClass: "sort",
    on: {
      "click": function($event) {
        _vm.btmKey = 'sex';
        _vm.showBtm = true;
      }
    }
  }, [_vm._v("性别"), _c('span', [_vm._v(_vm._s(_vm.info.sex))])]), _c('div', {
    staticClass: "sort",
    attrs: {
      "id": "birth"
    },
    on: {
      "click": function($event) {
        _vm.showDate = true;
      }
    }
  }, [_vm._v("生日"), _c('span', [_vm._v(_vm._s(_vm._f("birth")(_vm.info.birth)))])]), _c('div', {
    staticClass: "sort"
  }, [_vm._v("手机号"), _c('span', {
    staticClass: "none"
  }, [_vm._v(_vm._s(_vm.info.mobile))])]), _c('div', {
    staticClass: "sort",
    on: {
      "click": function($event) {
        _vm.edit('email')
      }
    }
  }, [_vm._v("邮箱"), _c('span', [_vm._v(_vm._s(_vm.info.email))])]), _c('div', {
    staticClass: "sort",
    on: {
      "click": _vm.showMap
    }
  }, [_vm._v("城市"), _c('span', [_vm._v(_vm._s(_vm.info.city))])]), _c('div', {
    staticClass: "sort"
  }, [_vm._v("详细地址"), _c('span', {
    staticClass: "none"
  }, [_vm._v(_vm._s(_vm._f("address")(_vm.info.address)))])]), _c('div', {
    staticClass: "sort",
    on: {
      "click": function($event) {
        _vm.btmKey = 'height';
        _vm.showBtm = true;
      }
    }
  }, [_vm._v("身高"), _c('span', [_vm._v(_vm._s(_vm.info.height))])]), _c('div', {
    staticClass: "sort",
    on: {
      "click": function($event) {
        _vm.btmKey = 'weight';
        _vm.showBtm = true;
      }
    }
  }, [_vm._v("体重"), _c('span', [_vm._v(_vm._s(_vm.info.weight))])]), _c('div', {
    staticClass: "sort",
    on: {
      "click": function($event) {
        _vm.btmKey = 'blood';
        _vm.showBtm = true;
      }
    }
  }, [_vm._v("血型"), _c('span', [_vm._v(_vm._s(_vm.info.blood))])]), _c('div', {
    staticClass: "sort",
    on: {
      "click": function($event) {
        _vm.btmKey = 'cardType';
        _vm.showBtm = true;
      }
    }
  }, [_vm._v("证件类型"), _c('span', [_vm._v(_vm._s(_vm.info.cardType))])]), _c('div', {
    staticClass: "sort",
    on: {
      "click": function($event) {
        _vm.edit('cardno')
      }
    }
  }, [_vm._v("证件号"), _c('span', [_vm._v(_vm._s(_vm.info.cardno))])]), _c('div', {
    staticClass: "sort",
    on: {
      "click": function($event) {
        _vm.btmKey = 'colthSize';
        _vm.showBtm = true;
      }
    }
  }, [_vm._v("服装尺寸"), _c('span', [_vm._v(_vm._s(_vm.info.colthSize))])]), _c('div', {
    staticClass: "sort",
    on: {
      "click": function($event) {
        _vm.edit('contact')
      }
    }
  }, [_vm._v("紧急联系人"), _c('span', [_vm._v(_vm._s(_vm.info.contact))])]), _c('div', {
    staticClass: "sort",
    on: {
      "click": function($event) {
        _vm.edit('contactNumber')
      }
    }
  }, [_vm._v("紧急联系人号码"), _c('span', [_vm._v(_vm._s(_vm.info.contactNumber))])]), _c('div', {
    staticClass: "form"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('label', [_vm._v("完赛证明")]), _c('div', {
    staticClass: "img"
  }, [_c('img', {
    staticClass: "upimg",
    attrs: {
      "src": _vm.info.healthCert
    }
  }), _c('span', {
    staticClass: "up-span"
  }, [_vm._v("+")]), _c('input', {
    staticClass: "up-file",
    attrs: {
      "type": "file",
      "id": "file1"
    },
    on: {
      "change": function($event) {
        _vm.upImg('file1', 'healthCert')
      }
    }
  })])])]), _c('div', {
    staticClass: "form"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('label', [_vm._v("健康证明")]), _c('div', {
    staticClass: "img"
  }, [_c('img', {
    staticClass: "upimg",
    attrs: {
      "src": _vm.info.raceCert
    }
  }), _c('span', {
    staticClass: "up-span"
  }, [_vm._v("+")]), _c('input', {
    staticClass: "up-file",
    attrs: {
      "type": "file",
      "id": "file2"
    },
    on: {
      "change": function($event) {
        _vm.upImg('file2', 'raceCert')
      }
    }
  })])])])]) : _vm._e(), (_vm.editKey != '') ? _c('div', [_c('div', {
    staticClass: "page-title"
  }, [_c('img', {
    staticClass: "back",
    attrs: {
      "src": __webpack_require__(47)
    },
    on: {
      "click": function($event) {
        _vm.editKey = '';
        _vm.editNick = _vm.editName = _vm.editEmail = _vm.editCardno = _vm.editContact = _vm.editContactNo = ''
      }
    }
  }), _c('span', [_vm._v(_vm._s(_vm.editStr))]), _c('div', {
    staticClass: "features",
    on: {
      "click": _vm.editSure
    }
  }, [_vm._v("确定")])]), (_vm.editKey == 'nick') ? _c('div', [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.editNick),
      expression: "editNick"
    }],
    staticClass: "edit-input",
    attrs: {
      "type": "text",
      "placeholder": "请输入昵称",
      "value": "editNick"
    },
    domProps: {
      "value": (_vm.editNick)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.editNick = $event.target.value
      }
    }
  }), _c('span', [_vm._v(_vm._s(13 - (_vm.editNick.replace(/\s+/g, '').length)))])]) : _vm._e(), (_vm.editKey == 'name') ? _c('div', [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.editName),
      expression: "editName"
    }],
    staticClass: "edit-input",
    attrs: {
      "type": "text",
      "placeholder": "请输入真实姓名",
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
  })]) : _vm._e(), (_vm.editKey == 'email') ? _c('div', [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.editEmail),
      expression: "editEmail"
    }],
    staticClass: "edit-input",
    attrs: {
      "type": "text",
      "placeholder": "请输入邮箱",
      "value": "editEmail"
    },
    domProps: {
      "value": (_vm.editEmail)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.editEmail = $event.target.value
      }
    }
  })]) : _vm._e(), (_vm.editKey == 'cardno') ? _c('div', [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.editCardno),
      expression: "editCardno"
    }],
    staticClass: "edit-input",
    attrs: {
      "type": "text",
      "placeholder": "请输入证件号",
      "value": "editCardno.slice(0,18)"
    },
    domProps: {
      "value": (_vm.editCardno)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.editCardno = $event.target.value
      }
    }
  })]) : _vm._e(), (_vm.editKey == 'contact') ? _c('div', [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.editContact),
      expression: "editContact"
    }],
    staticClass: "edit-input",
    attrs: {
      "type": "text",
      "placeholder": "请输入联系人姓名",
      "value": "editContact"
    },
    domProps: {
      "value": (_vm.editContact)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.editContact = $event.target.value
      }
    }
  })]) : _vm._e(), (_vm.editKey == 'contactNumber') ? _c('div', [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.editContactNo),
      expression: "editContactNo"
    }],
    staticClass: "edit-input",
    attrs: {
      "type": "text",
      "placeholder": "请输入联系人联系方式",
      "value": "editContactNo"
    },
    domProps: {
      "value": (_vm.editContactNo)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.editContactNo = $event.target.value
      }
    }
  })]) : _vm._e()]) : _vm._e(), _c('div', {
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
  }))]) : _vm._e(), (_vm.btmKey == 'colthSize') ? _c('div', {
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
  }), _vm._m(0)])])
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

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(114)
}
var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(116),
  /* template */
  __webpack_require__(117),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-6cae86ff",
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