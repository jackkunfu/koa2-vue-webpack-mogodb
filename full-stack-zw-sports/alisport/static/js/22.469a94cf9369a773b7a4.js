webpackJsonp([22],{351:function(e,s,t){function i(e){t(400)}var r=t(127)(t(402),t(403),i,null,null);e.exports=r.exports},400:function(e,s,t){var i=t(401);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);t(350)("41a35e8e",i,!0)},401:function(e,s,t){s=e.exports=t(349)(!1),s.push([e.i,".sign .sign-in{width:16rem;margin:3rem auto}.sign .sign-in .lf{font-size:1rem;line-height:1.5rem;color:#333;margin-top:1rem;text-align:left}.sign .sign-in input{font-size:1rem;padding:.3rem .5rem;color:#666;border:1px solid #c1c1c1;border-radius:.3rem;display:block;width:100%}.sign .sign-in .btn{width:8rem;line-height:2rem;margin:1rem auto;background:#0ae;color:#fff;border-radius:.5rem}",""])},402:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={name:"sign",data:function(){return{user:{}}},mounted:function(){localStorage.aliSportUserId=null},methods:{login:function(){var e=this;return this.user.mobile=this.user.mobile.replace(/\s+/g,""),this.user.pass=this.user.pass.replace(/\s+/g,""),""==this.user.mobile?void alert("手机不能为空"):/^1(3|4|5|7|8)\d{9}$/.test(this.user.mobile)?""==this.user.pass||this.user.pass.length<6||this.user.pass.length>12?void alert("密码须6-12个字母或数字"):void this.cmFun.ajax("post","/login",this.user,function(s){if(1!=s.code&&alert(s.msg),1==s.code){if(localStorage.aliSportUserId=s.data.id,e.$route.query.url)return void e.$router.push(e.$route.query.url);e.$router.push("/")}}):void alert("手机格式不正确")},logup:function(){var e=this;return this.user.mobile=this.user.mobile.replace(/\s+/g,""),this.user.pass=this.user.pass.replace(/\s+/g,""),""==this.user.mobile?void alert("手机不能为空"):/^1(3|4|5|7|8)\d{9}$/.test(this.user.mobile)?""==this.user.pass||this.user.pass.length<6||this.user.pass.length>12?void alert("密码须6-12个字母或数字"):void this.cmFun.ajax("post","/reg",this.user,function(s){1!=s.code&&alert(s.msg),1==s.code&&e.login()}):void alert("手机格式不正确")}}}},403:function(e,s){e.exports={render:function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"sign"},[t("div",{staticClass:"sign-in"},[t("div",{staticClass:"lf"},[e._v("手机")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.mobile,expression:"user.mobile"}],attrs:{type:"text",value:"user.phone"},domProps:{value:e.user.mobile},on:{input:function(s){s.target.composing||(e.user.mobile=s.target.value)}}}),t("div",{staticClass:"lf"},[e._v("密码")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.pass,expression:"user.pass"}],attrs:{type:"password",value:"user.phone"},domProps:{value:e.user.pass},on:{input:function(s){s.target.composing||(e.user.pass=s.target.value)}}}),t("div",{staticClass:"btn",on:{click:e.login}},[e._v("登陆")]),t("div",{staticClass:"btn",on:{click:e.logup}},[e._v("注册")])])])},staticRenderFns:[]}}});