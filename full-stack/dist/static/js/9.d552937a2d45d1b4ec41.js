webpackJsonp([9],{168:function(t,e,a){var l=a(67)(a(188),a(219),null,null);t.exports=l.exports},188:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{tableData:[],totalPage:100,currentPage:1}},mounted:function(){var t=this;this.$nextTick(function(){t.$store.state.topTip="优惠券列表",t._apiData.couponList().then(function(e){t.tableData=e})})},methods:{edit:function(t){console.log(t)},del:function(t){console.log(t)},use:function(t){}}}},219:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-col",[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,stripe:""}},[a("el-table-column",{attrs:{prop:"id",label:"ID"}}),t._v(" "),a("el-table-column",{attrs:{prop:"name",label:"名称"}}),t._v(" "),a("el-table-column",{attrs:{prop:"desc",label:"描述"}}),t._v(" "),a("el-table-column",{attrs:{prop:"date",label:"生效日期"}}),t._v(" "),a("el-table-column",{attrs:{prop:"date",label:"失效日期"}}),t._v(" "),a("el-table-column",{attrs:{label:"管理",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("router-link",{attrs:{to:{name:"couponChange",params:e.row}}},[a("el-button",{attrs:{type:"primary",size:"small"}},[t._v("修改")])],1),t._v(" "),a("el-button",{attrs:{type:"info",size:"small"},on:{click:function(a){t.use(e.row.id)}}},[t._v("使用")]),t._v(" "),a("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(a){t.del(e.row.id)}}},[t._v("删除")])]}}])})],1),t._v(" "),a("el-pagination",{attrs:{layout:"prev, pager, next",total:t.totalPage,"page-size":10,"current-page":t.currentPage}})],1)},staticRenderFns:[]}}});