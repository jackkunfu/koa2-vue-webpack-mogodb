import Vue from "vue";
import Vuex from "vuex";
import {getAdminInfo} from "@/api/getData";

Vue.use(Vuex);

/**
 * Vuex 的状态存储是响应式的。
 * @type {{adminInfo: {avatar: string}}}
 */
const state = {
    adminInfo: {
        avatar: 'default.jpg'
    },
    topTip: '首页'
};
/**
 * 改变 store 中的状态的唯一途径就是显式地提交(commit) mutations。
 *
 * @type {{saveAdminInfo: (function(*, *))}}
 */
const mutations = {
    /**
     * @param state 状态上下文
     * @param adminInfo 数据对象
     */
    saveAdminInfo(state, adminInfo){
        state.adminInfo = adminInfo;
    }
};

/**
 * 改变状态后需要执行的行为
 * @type {{getAdminData: (function({commit: *}))}}
 */
const actions = {
    async getAdminData({commit}){
        try {
            const res = await getAdminInfo();
            if (res.status == 1) {
                commit('saveAdminInfo', res.data);
            } else {
                throw new Error(res)
            }
        } catch (err) {
            console.log('您尚未登陆或者session失效')
        }
    }
};

export default new Vuex.Store({
    state,
    actions,
    mutations
})
