webpackJsonp([5],{172:function(t,e,a){var l=a(67)(a(192),a(221),null,null);t.exports=l.exports},192:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l=a(14);e.default={data:function(){return{tableData:[],totalPage:1e3,currentPage:1}},mounted:function(){var t=this;this.$nextTick(function(){t.$store.state.topTip="用户管理",a.i(l.c)().then(function(e){t.tableData=e}),console.log(t.tableData)})},methods:{edit:function(t){console.log(t)},del:function(t){console.log(t)},getData:function(){return function(){a.i(l.c)().then(function(t){return t})}()}}}},221:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-col",[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,stripe:""}},[a("el-table-column",{attrs:{prop:"id",label:"用户ID",width:"70"}}),t._v(" "),a("el-table-column",{attrs:{prop:"name",label:"姓名",width:"80"}}),t._v(" "),a("el-table-column",{attrs:{prop:"avator",label:"头像",width:"100"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("img",{attrs:{src:t.row.avator,alt:"",width:"80",height:"80"}})]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"desc",label:"描述"}}),t._v(" "),a("el-table-column",{attrs:{prop:"role",label:"角色"}}),t._v(" "),a("el-table-column",{attrs:{prop:"type",label:"类型"}}),t._v(" "),a("el-table-column",{attrs:{prop:"date",label:"日期",width:"100"}}),t._v(" "),a("el-table-column",{attrs:{prop:"address",label:"地址"}}),t._v(" "),a("el-table-column",{attrs:{label:"管理",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("router-link",{attrs:{to:{name:"userChange",params:e.row}}},[a("el-button",{attrs:{type:"primary",icon:"edit",size:"small",title:"修改"}})],1),t._v(" "),a("el-button",{attrs:{type:"primary",icon:"delete",size:"small",title:"删除"},on:{click:function(a){t.del(e.row.id)}}})]}}])})],1),t._v(" "),a("el-pagination",{attrs:{layout:"prev, pager, next",total:t.totalPage,"page-size":10,"current-page":t.currentPage}})],1)},staticRenderFns:[]}}});