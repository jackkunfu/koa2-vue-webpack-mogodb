import Vue from "vue";
import App from "./App";
import router from "./router";
import store from "./store/";
import ElementUI from "element-ui";
import "element-ui/lib/theme-default/index.css";

/**
 * https://cn.vuejs.org/v2/api/#silent
 *
 * @type {boolean} 设置为 false 以阻止 vue 在启动时生成生产提示。
 */
Vue.config.productionTip = false;

/**
 * https://cn.vuejs.org/v2/api/#Vue-use
 *
 * 安装 Vue.js 插件。
 *
 */
Vue.use(ElementUI);

// 接口api方法
import getData from './api/getData.js'
Vue.prototype._apiData = getData;

// 公用方法
import selfUtil from './basic/function.js'
Vue.prototype.selfUtil = selfUtil;

/**
 * 在实例化 Vue 时，需要传入一个选项对象，
 * 它可以包含数据、模板、挂载元素、方法、生命周期钩子等选项。
 * 全部的选项可以在 API 文档中查看。
 */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
});