webpackJsonp([28],{126:function(e,t,a){"use strict";function n(e){aliPayOk(function(){AlipayJSBridge.call("setTitle",{title:e})})}function i(e,t,a,n){aliPayOk(function(){e?AlipayJSBridge.call("setOptionMenu",{title:e,redDot:n||"-1",color:t||"#333",override:a||!1}):""==e?AlipayJSBridge.call("setOptionMenu",{reset:!0}):AlipayJSBridge.call("hideOptionMenu"),AlipayJSBridge.call("showOptionMenu")})}function r(e,t){aliPayOk(function(){e?AlipayJSBridge.call("hideLoading"):AlipayJSBridge.call("showLoading",{text:t||"加载中"})})}function d(e){aliPayOk(function(){AlipayJSBridge.call("getCurrentLocation",{cacheTimeout:cacheTimeout,requestType:requestType,timeout:timeout,bizType:bizType},function(e){alert((0,u.default)(e))})})}function o(e){aliPayOk(function(){AlipayJSBridge.call("startShare",{bizType:"testShareBizType",onlySelectChannel:["ALPContact","Weixin","Weibo","QQ","WeixinTimeLine"]},function(t){e&&e(t)})})}function l(e,t){aliPayOk(function(){AlipayJSBridge.call("chooseImage",{sourceType:["camera","album"],count:1},function(e){t(e)})})}function s(e,t){aliPayOk(function(){AlipayJSBridge.call("photo",{},function(e){t(e)})})}Object.defineProperty(t,"__esModule",{value:!0});var c=a(128),u=function(e){return e&&e.__esModule?e:{default:e}}(c);t.default={setTitle:n,setOptBtn:i,getLocation:d,share:o,openImage:l,openPhoto:s,loading:r}},129:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={apiBasicUrl:"http://test.hpaopao.com",upFileUrl:"http://test.hpaopao.com/uploadImage"}},130:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}a(131);var i=a(125),r=n(i),d=a(336),o=n(d),l=a(341),s=n(l),c=a(126),u=n(c),v=a(91),m=n(v),h=a(345),g=n(h),p=a(346),f=n(p);a(348),window.aliPayNative=u.default,window.$=window.jQuery=m.default,r.default.use(f.default,{name:"v-touch"}),r.default.config.productionTip=!1,r.default.prototype.$=m.default,r.default.prototype.cmFun=g.default,new r.default({el:"#app",router:s.default,template:"<App/>",components:{App:o.default}}),String.prototype.trim||(String.prototype.trim=function(){return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}),Array.prototype.filter||(Array.prototype.filter=function(e){if(void 0===this||null===this)throw new TypeError;var t=Object(this),a=t.length>>>0;if("function"!=typeof e)throw new TypeError;for(var n=[],i=arguments.length>=2?arguments[1]:void 0,r=0;r<a;r++)if(r in t){var d=t[r];e.call(i,d,r,t)&&n.push(d)}return n}),Array.prototype.map||(Array.prototype.map=function(e,t){var a,n,i;if(null==this)throw new TypeError(" this is null or not defined");var r=Object(this),d=r.length>>>0;if("[object Function]"!=Object.prototype.toString.call(e))throw new TypeError(e+" is not a function");for(t&&(a=t),n=new Array(d),i=0;i<d;){var o,l;i in r&&(o=r[i],l=e.call(a,o,i,r),n[i]=l),i++}return n})},336:function(e,t,a){function n(e){a(337)}var i=a(127)(a(339),a(340),n,null,null);e.exports=i.exports},337:function(e,t){},339:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"app"}},340:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},staticRenderFns:[]}},341:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=a(125),r=n(i),d=a(342),o=n(d);r.default.use(o.default);var l=function(e){return a.e(22).then(function(){return e(a(351))}.bind(null,a)).catch(a.oe)},s=function(e){return a.e(17).then(function(){return e(a(352))}.bind(null,a)).catch(a.oe)},c=function(e){return a.e(1).then(function(){return e(a(353))}.bind(null,a)).catch(a.oe)},u=function(e){return a.e(0).then(function(){return e(a(354))}.bind(null,a)).catch(a.oe)},v=function(e){return a.e(10).then(function(){return e(a(355))}.bind(null,a)).catch(a.oe)},m=function(e){return a.e(25).then(function(){return e(a(356))}.bind(null,a)).catch(a.oe)},h=function(e){return a.e(3).then(function(){return e(a(357))}.bind(null,a)).catch(a.oe)},g=function(e){return a.e(11).then(function(){return e(a(358))}.bind(null,a)).catch(a.oe)},p=function(e){return a.e(2).then(function(){return e(a(359))}.bind(null,a)).catch(a.oe)},f=function(e){return a.e(16).then(function(){return e(a(360))}.bind(null,a)).catch(a.oe)},_=function(e){return a.e(4).then(function(){return e(a(361))}.bind(null,a)).catch(a.oe)},y=function(e){return a.e(12).then(function(){return e(a(362))}.bind(null,a)).catch(a.oe)},b=function(e){return a.e(6).then(function(){return e(a(363))}.bind(null,a)).catch(a.oe)},L=function(e){return a.e(19).then(function(){return e(a(364))}.bind(null,a)).catch(a.oe)},E=function(e){return a.e(8).then(function(){return e(a(365))}.bind(null,a)).catch(a.oe)},D=function(e){return a.e(18).then(function(){return e(a(366))}.bind(null,a)).catch(a.oe)},w=function(e){return a.e(14).then(function(){return e(a(367))}.bind(null,a)).catch(a.oe)},S=function(e){return a.e(9).then(function(){return e(a(368))}.bind(null,a)).catch(a.oe)},k=function(e){return a.e(7).then(function(){return e(a(369))}.bind(null,a)).catch(a.oe)},A=function(e){return a.e(23).then(function(){return e(a(370))}.bind(null,a)).catch(a.oe)},x=function(e){return a.e(5).then(function(){return e(a(371))}.bind(null,a)).catch(a.oe)},M=function(e){return a.e(15).then(function(){return e(a(372))}.bind(null,a)).catch(a.oe)},q=function(e){return a.e(26).then(function(){return e(a(373))}.bind(null,a)).catch(a.oe)},I=function(e){return a.e(13).then(function(){return e(a(374))}.bind(null,a)).catch(a.oe)},T=function(e){return a.e(20).then(function(){return e(a(375))}.bind(null,a)).catch(a.oe)},Y=function(e){return a.e(24).then(function(){return e(a(376))}.bind(null,a)).catch(a.oe)},C=function(e){return a.e(21).then(function(){return e(a(377))}.bind(null,a)).catch(a.oe)},O=new o.default({routes:[{path:"/",name:"index",component:s},{path:"/sign",name:"sign",component:l},{path:"/my",name:"my",component:_},{path:"/myInfo",name:"myInfo",component:y},{path:"/myActivity",name:"myActivity",component:b},{path:"/myTeam",name:"myTeam",component:L},{path:"/feeList",name:"feeList",component:w},{path:"/myCount",name:"myCount",component:E},{path:"/setCount",name:"setCount",component:D},{path:"/addTeam",name:"addTeam",component:c},{path:"/addTeamSuccess",name:"addTeamSuccess",component:T},{path:"/addActivitySuccess",name:"addActivitySuccess",component:C},{path:"/addActivity",name:"addActivity",component:u},{path:"/tempList",name:"tempList",component:g},{path:"/addOrUpdateTemplet",name:"addOrUpdateTemplet",component:h},{path:"/teamList",name:"teamList",component:k},{path:"/teamCard",name:"teamCard",component:Y},{path:"/getActiveMember",name:"getActiveMember",component:m},{path:"/activityList",name:"activityList",component:v},{path:"/activityDetail",name:"activityDetail",component:f},{path:"/activeSet",name:"activeSet",component:p},{path:"/teamDetail",name:"teamDetail",component:A},{path:"/teamSet",name:"teamSet",component:x},{path:"/applyIn",name:"applyIn",component:q},{path:"/enroll",name:"enroll",component:M},{path:"/memberList",name:"memberList",component:I},{path:"/hotList",name:"hotList",component:S}]}),P=[];O.beforeEach(function(e,t,a){P.indexOf(e.path)>=0?a():window.localStorage.aliSportUserId&&window.localStorage.aliuid?a():(window.location.href="https://h5.m.taobao.com/tiyu/auth-third.html?historyUrl=http://ali.hpaopao.com/#/",a())}),t.default=O},345:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=a(129),r=n(i),d=a(91),o=n(d),l=a(126),s=n(l);t.default={ajax:function(e,t,a,n,i){var d=i?t:r.default.apiBasicUrl+t;s.default.loading(),o.default.ajax({type:e,url:d,data:a,dataType:"json"}).done(function(e){s.default.loading(!0),n(e)}).fail(function(e){s.default.loading(!0),console.log("ajax "+t+"失败，如下："),console.log(e)})},upFile:function(e,t,a){var n=new FormData;n.append("upfile",document.getElementById(e).files[0]),s.default.loading(!1,"上传中"),o.default.ajax({type:"POST",url:r.default.upFileUrl,data:n,contentType:!1,processData:!1,success:function(e){s.default.loading(!0),console.log(e),a(e)},error:function(e){s.default.loading(!0),alert("上传图片出错")}})},getLocation:function(e,t){navigator.geolocation&&(console.log("定位中......"),navigator.geolocation.getCurrentPosition(function(t){console.log("获取位置成功"),e&&e(t)},function(e){console.log("获取位置失败"),t&&t(e)}))}}},348:function(e,t,a){"use strict";window.datePicker=function(){var e=function(){this.gearDate,this.minY=1900,this.minM=1,this.minD=1,this.maxY=2099,this.maxM=12,this.maxD=31,this.value=""},t=document.createElement("style");return t.type="text/css",t.appendChild(document.createTextNode('.gearYM,.gearDate,.gearDatetime,.gearTime{font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size:10px;background-color:rgba(0,0,0,0.2);display:block;position:fixed;top:0;left:0;width:100%;height:100%;z-index:9900;overflow:hidden;-webkit-animation-fill-mode:both;animation-fill-mode:both}.date_ctrl{vertical-align:middle;background-color:#d5d8df;color:#000;margin:0;height:auto;width:100%;position:absolute;left:0;bottom:0;z-index:9901;overflow:hidden;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}.slideInUp{animation:slideInUp .3s ease;-webkit-animation:slideInUp .3s ease;}@-webkit-keyframes slideInUp{from{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}to{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}.ym_roll,.date_roll,.datetime_roll,.time_roll{display:-webkit-box;width:100%;height:auto;overflow:hidden;font-weight:bold;background-color:transparent;-webkit-mask:-webkit-gradient(linear,0% 50%,0% 100%,from(#debb47),to(rgba(36,142,36,0)));-webkit-mask:-webkit-linear-gradient(top,#debb47 50%,rgba(36,142,36,0))}.ym_roll>div,.date_roll>div,.datetime_roll>div,.time_roll>div{font-size:2.3em;height:6em;float:left;background-color:transparent;position:relative;overflow:hidden;-webkit-box-flex:4}.ym_roll>div .gear,.date_roll>div .gear,.datetime_roll>div .gear,.time_roll>div .gear{width:100%;float:left;position:absolute;z-index:9902;margin-top:-6em}.date_roll_mask{-webkit-mask:-webkit-gradient(linear,0% 40%,0% 0%,from(#debb47),to(rgba(36,142,36,0)));-webkit-mask:-webkit-linear-gradient(bottom,#debb47 50%,rgba(36,142,36,0));padding:0 0 3em 0}.date_roll>div:nth-child(2){-webkit-box-flex:2}.date_roll>div:nth-child(1),.datetime_roll>div:nth-child(1){-webkit-box-flex:4}.datetime_roll>div:first-child{-webkit-box-flex:6}.datetime_roll>div:last-child{-webkit-box-flex:6}.date_grid{position:relative;top:2em;width:100%;height:2em;margin:0;box-sizing:border-box;z-index:0;border-top:1px solid #abaeb5;border-bottom:1px solid #abaeb5}.date_grid>div{color:#000;position:absolute;right:0;top:0;font-size:.8em;line-height:2.5em}.date_roll>div:nth-child(3) .date_grid>div{left:42%}.datetime_roll>div .date_grid>div{right:0}.datetime_roll>div:first-child .date_grid>div{left:auto;right:0%}.datetime_roll>div:last-child .date_grid>div{left:50%}.time_roll>div:nth-child(1) .date_grid>div{right:1em}.ym_roll>div:nth-child(1) .date_grid>div{right:.1em}.ym_roll>div .date_grid>div,.time_roll>div .date_grid>div{right:5em}.date_btn{color:#0575f2;font-size:1.6em;font-weight:bold;line-height:1em;text-align:center;padding:.8em 1em}.date_btn_box:before,.date_btn_box:after{content:"";position:absolute;height:1px;width:100%;display:block;background-color:#96979b;z-index:15;-webkit-transform:scaleY(0.33);transform:scaleY(0.33)}.date_btn_box{display:-webkit-box;-webkit-box-pack:justify;-webkit-box-align:stretch;background-color:#f1f2f4;position:relative}.date_btn_box:before{left:0;top:0;-webkit-transform-origin:50% 20%;transform-origin:50% 20%}.date_btn_box:after{left:0;bottom:0;-webkit-transform-origin:50% 70%;transform-origin:50% 70%}.date_roll>div:nth-child(1) .gear{text-indent:20%}.date_roll>div:nth-child(2) .gear{text-indent:-20%}.date_roll>div:nth-child(3) .gear{text-indent:-55%}.datetime_roll>div .gear{width:100%;text-indent:-25%}.datetime_roll>div:first-child .gear{text-indent:-10%}.datetime_roll>div:last-child .gear{text-indent:-50%}.ym_roll>div .gear,.time_roll>div .gear{width:100%;text-indent:-70%}.ym_roll>div:nth-child(1) .gear,.time_roll>div:nth-child(1) .gear{width:100%;text-indent:10%}.tooth{height:2em;line-height:2em;text-align:center}')),document.getElementsByTagName("head")[0].appendChild(t),e.prototype={init:function(e){if(this.type=e.type,this.trigger=document.querySelector(e.trigger),null!=this.trigger.getAttribute("data-lcalendar")){var t=this.trigger.getAttribute("data-lcalendar").split(","),a=t[0].split("-");this.minY=~~a[0],this.minM=~~a[1],this.minD=~~a[2];var n=t[1].split("-");this.maxY=~~n[0],this.maxM=~~n[1],this.maxD=~~n[2]}if(e.minDate){var a=e.minDate.split("-");this.minY=~~a[0],this.minM=~~a[1],this.minD=~~a[2]}if(e.maxDate){var n=e.maxDate.split("-");this.maxY=~~n[0],this.maxM=~~n[1],this.maxD=~~n[2]}this.onClose=e.onClose,this.onSubmit=e.onSubmit,this.onChange=e.onChange,this.bindEvent(this.type)},bindEvent:function(e){function t(e){w.gearDate=document.createElement("div"),w.gearDate.className="gearDate",w.gearDate.innerHTML='<div class="date_ctrl slideInUp"><div class="date_btn_box"><div class="date_btn lcalendar_cancel">取消</div><div class="date_btn lcalendar_finish">确定</div></div><div class="date_roll_mask"><div class="date_roll"><div><div class="gear date_yy" data-datetype="date_yy"></div><div class="date_grid"><div>年</div></div></div><div><div class="gear date_mm" data-datetype="date_mm"></div><div class="date_grid"><div>月</div></div></div><div><div class="gear date_dd" data-datetype="date_dd"></div><div class="date_grid"><div>日</div></div></div></div></div></div><div class="date_bg" style="width:100%;height:100%;"></div>',document.body.appendChild(w.gearDate),a();var t=w.gearDate.querySelector(".lcalendar_cancel");t.addEventListener("touchstart",_);var n=w.gearDate.querySelector(".lcalendar_finish");n.addEventListener("touchstart",y),w.gearDate.querySelector(".date_bg").addEventListener("click",_);var i=w.gearDate.querySelector(".date_yy"),r=w.gearDate.querySelector(".date_mm"),d=w.gearDate.querySelector(".date_dd");i.addEventListener("touchstart",v),r.addEventListener("touchstart",v),d.addEventListener("touchstart",v),i.addEventListener("touchmove",m),r.addEventListener("touchmove",m),d.addEventListener("touchmove",m),i.addEventListener("touchend",h),r.addEventListener("touchend",h),d.addEventListener("touchend",h),t.addEventListener("click",_),n.addEventListener("click",y),i.addEventListener("mousedown",v),r.addEventListener("mousedown",v),d.addEventListener("mousedown",v),i.addEventListener("mousemove",m),r.addEventListener("mousemove",m),d.addEventListener("mousemove",m),i.addEventListener("mouseup",h),r.addEventListener("mouseup",h),d.addEventListener("mouseup",h),w.gearDate.querySelector(".date_roll_mask").addEventListener("mouseleave",g),w.gearDate.querySelector(".date_roll_mask").addEventListener("mouseup",g)}function a(){var e=new Date,t={yy:e.getYear(),mm:e.getMonth(),dd:e.getDate()-1};if(/^\d{4}-\d{1,2}-\d{1,2}$/.test(w.trigger.innerHTML)){var a=w.trigger.innerHTML.match(/(^|-)\d{1,4}/g);t.yy=a[0]-w.minY,t.mm=a[1].replace(/-/g,"")-1,t.dd=a[2].replace(/-/g,"")-1}else t.yy=t.yy+1900-w.minY;w.gearDate.querySelector(".date_yy").setAttribute("val",t.yy),w.gearDate.querySelector(".date_mm").setAttribute("val",t.mm),w.gearDate.querySelector(".date_dd").setAttribute("val",t.dd),s()}function n(e){w.gearDate=document.createElement("div"),w.gearDate.className="gearDate",w.gearDate.innerHTML='<div class="date_ctrl slideInUp"><div class="date_btn_box"><div class="date_btn lcalendar_cancel">取消</div><div class="date_btn lcalendar_finish">确定</div></div><div class="date_roll_mask"><div class="ym_roll"><div><div class="gear date_yy" data-datetype="date_yy"></div><div class="date_grid"><div>年</div></div></div><div><div class="gear date_mm" data-datetype="date_mm"></div><div class="date_grid"><div>月</div></div></div></div></div></div><div class="date_bg" style="width:100%;height:100%;"></div>',document.body.appendChild(w.gearDate),i();var t=w.gearDate.querySelector(".lcalendar_cancel");t.addEventListener("touchstart",_);var a=w.gearDate.querySelector(".lcalendar_finish");a.addEventListener("touchstart",b),w.gearDate.querySelector(".date_bg").addEventListener("click",_);var n=w.gearDate.querySelector(".date_yy"),r=w.gearDate.querySelector(".date_mm");n.addEventListener("touchstart",v),r.addEventListener("touchstart",v),n.addEventListener("touchmove",m),r.addEventListener("touchmove",m),n.addEventListener("touchend",h),r.addEventListener("touchend",h),t.addEventListener("click",_),a.addEventListener("click",b),n.addEventListener("mousedown",v),r.addEventListener("mousedown",v),n.addEventListener("mousemove",m),r.addEventListener("mousemove",m),n.addEventListener("mouseup",h),r.addEventListener("mouseup",h),w.gearDate.querySelector(".date_roll_mask").addEventListener("mouseleave",g),w.gearDate.querySelector(".date_roll_mask").addEventListener("mouseup",g)}function i(){var e=new Date,t={yy:e.getYear(),mm:e.getMonth()};if(/^\d{4}-\d{1,2}$/.test(w.trigger.value)){var a=w.trigger.value.match(/(^|-)\d{1,4}/g);t.yy=a[0]-w.minY,t.mm=a[1].replace(/-/g,"")-1}else t.yy=t.yy+1900-w.minY;w.gearDate.querySelector(".date_yy").setAttribute("val",t.yy),w.gearDate.querySelector(".date_mm").setAttribute("val",t.mm),s()}function r(e){w.gearDate=document.createElement("div"),w.gearDate.className="gearDatetime",w.gearDate.innerHTML='<div class="date_ctrl slideInUp"><div class="date_btn_box"><div class="date_btn lcalendar_cancel">取消</div><div class="date_btn lcalendar_finish">确定</div></div><div class="date_roll_mask"><div class="datetime_roll"><div><div class="gear date_yy" data-datetype="date_yy"></div><div class="date_grid"><div>年</div></div></div><div><div class="gear date_mm" data-datetype="date_mm"></div><div class="date_grid"><div>月</div></div></div><div><div class="gear date_dd" data-datetype="date_dd"></div><div class="date_grid"><div>日</div></div></div><div><div class="gear time_hh" data-datetype="time_hh"></div><div class="date_grid"><div>时</div></div></div><div><div class="gear time_mm" data-datetype="time_mm"></div><div class="date_grid"><div>分</div></div></div></div></div></div><div class="date_bg" style="width:100%;height:100%;"></div>',document.body.appendChild(w.gearDate),d();var t=w.gearDate.querySelector(".lcalendar_cancel");t.addEventListener("touchstart",_);var a=w.gearDate.querySelector(".lcalendar_finish");a.addEventListener("touchstart",L),w.gearDate.querySelector(".date_bg").addEventListener("click",_);var n=w.gearDate.querySelector(".date_yy"),i=w.gearDate.querySelector(".date_mm"),r=w.gearDate.querySelector(".date_dd"),o=w.gearDate.querySelector(".time_hh"),l=w.gearDate.querySelector(".time_mm");n.addEventListener("touchstart",v),i.addEventListener("touchstart",v),r.addEventListener("touchstart",v),o.addEventListener("touchstart",v),l.addEventListener("touchstart",v),n.addEventListener("touchmove",m),i.addEventListener("touchmove",m),r.addEventListener("touchmove",m),o.addEventListener("touchmove",m),l.addEventListener("touchmove",m),n.addEventListener("touchend",h),i.addEventListener("touchend",h),r.addEventListener("touchend",h),o.addEventListener("touchend",h),l.addEventListener("touchend",h),t.addEventListener("click",_),a.addEventListener("click",L),n.addEventListener("mousedown",v),i.addEventListener("mousedown",v),r.addEventListener("mousedown",v),o.addEventListener("mousedown",v),l.addEventListener("mousedown",v),n.addEventListener("mousemove",m),i.addEventListener("mousemove",m),r.addEventListener("mousemove",m),o.addEventListener("mousemove",m),l.addEventListener("mousemove",m),n.addEventListener("mouseup",h),i.addEventListener("mouseup",h),r.addEventListener("mouseup",h),o.addEventListener("mouseup",h),l.addEventListener("mouseup",h),w.gearDate.querySelector(".date_roll_mask").addEventListener("mouseleave",g),w.gearDate.querySelector(".date_roll_mask").addEventListener("mouseup",g)}function d(){var e=new Date,t={yy:e.getYear(),mm:e.getMonth(),dd:e.getDate()-1,hh:e.getHours(),mi:e.getMinutes()};if(/^\d{4}-\d{1,2}-\d{1,2}\s\d{2}:\d{2}$/.test(w.trigger.value)){var a=w.trigger.value.match(/(^|-|\s|:)\d{1,4}/g);t.yy=a[0]-w.minY,t.mm=a[1].replace(/-/g,"")-1,t.dd=a[2].replace(/-/g,"")-1,t.hh=parseInt(a[3].replace(/\s0?/g,"")),t.mi=parseInt(a[4].replace(/:0?/g,""))}else t.yy=t.yy+1900-w.minY;w.gearDate.querySelector(".date_yy").setAttribute("val",t.yy),w.gearDate.querySelector(".date_mm").setAttribute("val",t.mm),w.gearDate.querySelector(".date_dd").setAttribute("val",t.dd),s(),w.gearDate.querySelector(".time_hh").setAttribute("val",t.hh),w.gearDate.querySelector(".time_mm").setAttribute("val",t.mi),c()}function o(e){w.gearDate=document.createElement("div"),w.gearDate.className="gearDate",w.gearDate.innerHTML='<div class="date_ctrl slideInUp"><div class="date_btn_box"><div class="date_btn lcalendar_cancel">取消</div><div class="date_btn lcalendar_finish">确定</div></div><div class="date_roll_mask"><div class="time_roll"><div><div class="gear time_hh" data-datetype="time_hh"></div><div class="date_grid"><div>时</div></div></div><div><div class="gear time_mm" data-datetype="time_mm"></div><div class="date_grid"><div>分</div></div></div></div></div></div><div class="date_bg" style="width:100%;height:100%;"></div>',document.body.appendChild(w.gearDate),l();var t=w.gearDate.querySelector(".lcalendar_cancel");t.addEventListener("touchstart",_);var a=w.gearDate.querySelector(".lcalendar_finish");a.addEventListener("touchstart",E),w.gearDate.querySelector(".date_bg").addEventListener("click",_);var n=w.gearDate.querySelector(".time_hh"),i=w.gearDate.querySelector(".time_mm");n.addEventListener("touchstart",v),i.addEventListener("touchstart",v),n.addEventListener("touchmove",m),i.addEventListener("touchmove",m),n.addEventListener("touchend",h),i.addEventListener("touchend",h),t.addEventListener("click",_),a.addEventListener("click",E),n.addEventListener("mousedown",v),i.addEventListener("mousedown",v),n.addEventListener("mousemove",m),i.addEventListener("mousemove",m),n.addEventListener("mouseup",h),i.addEventListener("mouseup",h),w.gearDate.querySelector(".date_roll_mask").addEventListener("mouseleave",g),w.gearDate.querySelector(".date_roll_mask").addEventListener("mouseup",g)}function l(){var e=new Date,t={hh:e.getHours(),mm:e.getMinutes()};if(/^\d{2}:\d{2}$/.test(w.trigger.value)){var a=w.trigger.value.match(/(^|:)\d{2}/g);t.hh=parseInt(a[0].replace(/^0?/g,"")),t.mm=parseInt(a[1].replace(/:0?/g,""))}w.gearDate.querySelector(".time_hh").setAttribute("val",t.hh),w.gearDate.querySelector(".time_mm").setAttribute("val",t.mm),c()}function s(){var e=w.maxY-w.minY+1,t=w.gearDate.querySelector(".date_yy"),a="";if(t&&t.getAttribute("val")){for(var n=parseInt(t.getAttribute("val")),i=0;i<=e-1;i++)a+="<div class='tooth'>"+(w.minY+i)+"</div>";t.innerHTML=a;var r=Math.floor(parseFloat(t.getAttribute("top")));if(isNaN(r))t.style["-webkit-transform"]="translate3d(0,"+(8-2*n)+"em,0)",t.setAttribute("top",8-2*n+"em");else{r%2==0?r=r:r+=1,r>8&&(r=8);var d=8-2*(e-1);r<d&&(r=d),t.style["-webkit-transform"]="translate3d(0,"+r+"em,0)",t.setAttribute("top",r+"em"),n=Math.abs(r-8)/2,t.setAttribute("val",n)}var o=w.gearDate.querySelector(".date_mm");if(o&&o.getAttribute("val")){a="";var l=parseInt(o.getAttribute("val")),s=11,c=0;n==e-1&&(s=w.maxM-1),0==n&&(c=w.minM-1);for(var i=0;i<s-c+1;i++)a+="<div class='tooth'>"+(c+i+1)+"</div>";o.innerHTML=a,l>s?(l=s,o.setAttribute("val",l)):l<c&&(l=s,o.setAttribute("val",l)),o.style["-webkit-transform"]="translate3d(0,"+(8-2*(l-c))+"em,0)",o.setAttribute("top",8-2*(l-c)+"em");var v=w.gearDate.querySelector(".date_dd");if(v&&v.getAttribute("val")){a="";var m=parseInt(v.getAttribute("val")),h=u(n,l),g=h-1,p=0;n==e-1&&w.maxM==l+1&&(g=w.maxD-1),0==n&&w.minM==l+1&&(p=w.minD-1);for(var i=0;i<g-p+1;i++)a+="<div class='tooth'>"+(p+i+1)+"</div>";v.innerHTML=a,m>g?(m=g,v.setAttribute("val",m)):m<p&&(m=p,v.setAttribute("val",m)),v.style["-webkit-transform"]="translate3d(0,"+(8-2*(m-p))+"em,0)",v.setAttribute("top",8-2*(m-p)+"em")}}}}function c(){var e=w.gearDate.querySelector(".time_hh");if(e&&e.getAttribute("val")){for(var t="",a=parseInt(e.getAttribute("val")),n=0;n<=23;n++)t+="<div class='tooth'>"+n+"</div>";e.innerHTML=t,e.style["-webkit-transform"]="translate3d(0,"+(8-2*a)+"em,0)",e.setAttribute("top",8-2*a+"em");var i=w.gearDate.querySelector(".time_mm");if(i&&i.getAttribute("val")){for(var t="",r=parseInt(i.getAttribute("val")),n=0;n<=59;n++)t+="<div class='tooth'>"+n+"</div>";i.innerHTML=t,i.style["-webkit-transform"]="translate3d(0,"+(8-2*r)+"em,0)",i.setAttribute("top",8-2*r+"em")}}}function u(e,t){return 1==t?(e+=w.minY,e%4==0&&e%100!=0||e%400==0&&e%4e3!=0?29:28):3==t||5==t||8==t||10==t?30:31}function v(e){if(!k&&!S){S=!0,e.preventDefault();for(var t=e.target;;){if(t.classList.contains("gear"))break;t=t.parentElement}clearInterval(t["int_"+t.id]),t["old_"+t.id]=e.targetTouches?e.targetTouches[0].screenY:e.pageY,t["o_t_"+t.id]=(new Date).getTime();var a=t.getAttribute("top");t["o_d_"+t.id]=a?parseFloat(a.replace(/em/g,"")):0,D=e}}function m(e){if(S){if(k=!0,e.preventDefault(),D)var t=D.target;else var t=e.target;for(;;){if(t.classList.contains("gear"))break;t=t.parentElement}t["new_"+t.id]=e.targetTouches?e.targetTouches[0].screenY:e.pageY,t["n_t_"+t.id]=(new Date).getTime();var a=18*(t["new_"+t.id]-t["old_"+t.id])/370;t["pos_"+t.id]=t["o_d_"+t.id]+a,t.style["-webkit-transform"]="translate3d(0,"+t["pos_"+t.id]+"em,0)",t.setAttribute("top",t["pos_"+t.id]+"em")}}function h(e){if(!S||!k)return void(S=k=!1);if(S=k=!1,e.preventDefault(),D)var t=D.target;else var t=e.target;for(;;){if(t.classList.contains("gear"))break;t=t.parentElement}var a=(t["new_"+t.id]-t["old_"+t.id])/(t["n_t_"+t.id]-t["o_t_"+t.id]);Math.abs(a)<=.2?t["spd_"+t.id]=a<0?-.08:.08:Math.abs(a)<=.5?t["spd_"+t.id]=a<0?-.16:.16:t["spd_"+t.id]=a/2,t["pos_"+t.id]||(t["pos_"+t.id]=0),p(t),D=null}function g(e){h(D)}function p(e){var t=0,a=!1,n=w.maxY-w.minY+1;clearInterval(e["int_"+e.id]),e["int_"+e.id]=setInterval(function(){var i=e["pos_"+e.id],r=e["spd_"+e.id]*Math.exp(-.1*t);if(i+=r,Math.abs(r)>.1);else{r=.1;var d=2*Math.round(i/2);Math.abs(i-d)<.05?a=!0:i>d?i-=r:i+=r}switch(i>8&&(i=8,a=!0),e.dataset.datetype){case"date_yy":var o=8-2*(n-1);if(i<o&&(i=o,a=!0),a){var l=Math.abs(i-8)/2;f(e,l),clearInterval(e["int_"+e.id])}break;case"date_mm":var s=w.gearDate.querySelector(".date_yy"),c=parseInt(s.getAttribute("val")),v=11,m=0;c==n-1&&(v=w.maxM-1),0==c&&(m=w.minM-1);var o=8-2*(v-m);if(i<o&&(i=o,a=!0),a){var l=Math.abs(i-8)/2+m;f(e,l),clearInterval(e["int_"+e.id])}break;case"date_dd":var s=w.gearDate.querySelector(".date_yy"),h=w.gearDate.querySelector(".date_mm"),c=parseInt(s.getAttribute("val")),g=parseInt(h.getAttribute("val")),p=u(c,g),_=p-1,y=0;c==n-1&&w.maxM==g+1&&(_=w.maxD-1),0==c&&w.minM==g+1&&(y=w.minD-1);var o=8-2*(_-y);if(i<o&&(i=o,a=!0),a){var l=Math.abs(i-8)/2+y;f(e,l),clearInterval(e["int_"+e.id])}break;case"time_hh":if(i<-38&&(i=-38,a=!0),a){var l=Math.abs(i-8)/2;f(e,l),clearInterval(e["int_"+e.id])}break;case"time_mm":if(i<-110&&(i=-110,a=!0),a){var l=Math.abs(i-8)/2;f(e,l),clearInterval(e["int_"+e.id])}}e["pos_"+e.id]=i,e.style["-webkit-transform"]="translate3d(0,"+i+"em,0)",e.setAttribute("top",i+"em"),t++},30)}function f(e,t){t=Math.round(t),e.setAttribute("val",t),/date/.test(e.dataset.datetype)?s():c()}function _(e){e.preventDefault(),S=k=!1,w.onClose&&w.onClose();var t=new CustomEvent("input");w.trigger.dispatchEvent(t),document.body.removeChild(w.gearDate)}function y(e){var t=w.maxY-w.minY+1,a=parseInt(Math.round(w.gearDate.querySelector(".date_yy").getAttribute("val"))),n=parseInt(Math.round(w.gearDate.querySelector(".date_mm").getAttribute("val")))+1;n=n>9?n:"0"+n;var i=parseInt(Math.round(w.gearDate.querySelector(".date_dd").getAttribute("val")))+1;i=i>9?i:"0"+i,w.trigger.value=a%t+w.minY+"-"+n+"-"+i,w.value=w.trigger.value,w.onSubmit&&w.onSubmit(),_(e)}function b(e){var t=w.maxY-w.minY+1,a=parseInt(Math.round(w.gearDate.querySelector(".date_yy").getAttribute("val"))),n=parseInt(Math.round(w.gearDate.querySelector(".date_mm").getAttribute("val")))+1;n=n>9?n:"0"+n,w.trigger.value=a%t+w.minY+"-"+n,w.value=w.trigger.value,w.onSubmit&&w.onSubmit(),_(e)}function L(e){var t=w.maxY-w.minY+1,a=parseInt(Math.round(w.gearDate.querySelector(".date_yy").getAttribute("val"))),n=parseInt(Math.round(w.gearDate.querySelector(".date_mm").getAttribute("val")))+1;n=n>9?n:"0"+n;var i=parseInt(Math.round(w.gearDate.querySelector(".date_dd").getAttribute("val")))+1;i=i>9?i:"0"+i;var r=parseInt(Math.round(w.gearDate.querySelector(".time_hh").getAttribute("val")));r=r>9?r:"0"+r;var d=parseInt(Math.round(w.gearDate.querySelector(".time_mm").getAttribute("val")));d=d>9?d:"0"+d,w.trigger.value=a%t+w.minY+"-"+n+"-"+i+" "+(r.length<2?"0":"")+r+(d.length<2?":0":":")+d,w.value=w.trigger.value,w.onSubmit&&w.onSubmit(),_(e)}function E(e){var t=parseInt(Math.round(w.gearDate.querySelector(".time_hh").getAttribute("val")));t=t>9?t:"0"+t;var a=parseInt(Math.round(w.gearDate.querySelector(".time_mm").getAttribute("val")));a=a>9?a:"0"+a,w.trigger.value=(t.length<2?"0":"")+t+(a.length<2?":0":":")+a,w.value=w.trigger.value,w.onSubmit&&w.onSubmit(),_(e)}var D,w=this,S=!1,k=!1;w.trigger.addEventListener("click",{ym:n,date:t,datetime:r,time:o}[e])}},e}()}},[130]);