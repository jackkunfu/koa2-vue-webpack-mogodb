webpackJsonp([4],{173:function(t,e,a){var o=a(67)(a(193),a(218),null,null);t.exports=o.exports},193:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a(20),r=a.n(o);!function(t){var e=t.toString().split(" ");t.getMonth();e[3],e[2]}(new Date);e.default={data:function(){return{isEdit:void 0!==this.$route.params.date,form:{},action:"新增"}},mounted:function(){var t=this;this.$nextTick(function(){if(t.$store.state.topTip="新增/编辑用户",console.log(t.$route.params),t.isEdit){var e=r.a.extend({},t.$route.params);t.form=e,t.action="更新"}})},methods:{onSubmit:function(){}}}},218:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-col",{staticStyle:{height:"100%",overflow:"auto",padding:"30px"},attrs:{span:13}},[a("el-form",{ref:"form",attrs:{model:t.form,"label-width":"120px"}},[a("el-form-item",{attrs:{label:"用户名称"}},[a("el-input",{model:{value:t.form.name,callback:function(e){t.form.name=e},expression:"form.name"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"头像"}},[a("img",{attrs:{src:t.form.avator||"http://img1.skqkw.cn:888/2014/12/06/09/jqvsm4tvqas-76270.jpg"}}),t._v(" "),a("el-upload",{staticClass:"upload-demo",attrs:{action:"https://jsonplaceholder.typicode.com/posts/"}},[a("el-button",{attrs:{size:"small",type:"primary"}},[t._v("更换")]),t._v(" "),a("div",{staticClass:"el-upload__tip",slot:"tip"},[t._v("只能上传jpg/png文件，且不超过500kb")])],1)],1),t._v(" "),a("el-form-item",{attrs:{label:"角色"}},[a("el-select",{model:{value:t.form.role,callback:function(e){t.form.role=e},expression:"form.role"}},[a("el-option",{attrs:{label:"管理员",value:"0"}}),t._v(" "),a("el-option",{attrs:{label:"会员",value:"1"}})],1)],1),t._v(" "),a("el-form-item",{attrs:{label:"日期"}},[a("el-input",{attrs:{disabled:!0},model:{value:t.form.date,callback:function(e){t.form.date=e},expression:"form.date"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"描述"}},[a("el-input",{attrs:{type:"textarea"},model:{value:t.form.desc,callback:function(e){t.form.desc=e},expression:"form.desc"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"地址"}},[a("el-input",{attrs:{type:"textarea"},model:{value:t.form.address,callback:function(e){t.form.address=e},expression:"form.address"}})],1),t._v(" "),a("el-form-item",{attrs:{"label-width":"120px"}},[a("el-button",{attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v("立即"+t._s(t.action))])],1)],1)],1)},staticRenderFns:[]}}});