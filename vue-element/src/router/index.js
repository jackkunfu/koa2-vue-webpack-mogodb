import Vue from "vue";
import Router from "vue-router";

import { islogin } from '@/api/getData.js'

Vue.use(Router);

// https://github.com/bailicangdu/vue2-manage

const login = r => require.ensure([], () => r(require('@/page/login')), 'login');
const manage = r => require.ensure([], () => r(require('@/page/manage')), 'manage');
const userList = r => require.ensure([], () => r(require('@/components/_table_user')), 'userList');
const userChange = r => require.ensure([], () => r(require('@/components/_user_change')), 'userChange');
const couponList = r => require.ensure([], () => r(require('@/components/_table_coupon')), 'couponList');
const couponChange = r => require.ensure([], () => r(require('@/components/_coupon_change')), 'couponAdd');
const couponSet = r => require.ensure([], () => r(require('@/components/_coupon_set')), 'couponSet');

const routes = [
    {
        path: '/',
        name: '',
        component: login
    },
    {
        path: '/manage',
        component: manage,
        name: '',
        children: [{
            path: '/user',
            component: userList,
            meta: { requiresAuth: true }
        },
        {
            path: '/userChange',
            component: userChange,
            name: 'userChange',
            meta: { requiresAuth: true }
        },
        {
            path: '/coupon',
            component: couponList,
            meta: { requiresAuth: true }
        },
        {
            path: '/couponChange',
            name: 'couponChange',
            component: couponChange,
            meta: { requiresAuth: true }
        },
        {
            path: '/couponSet',
            component: couponSet,
            meta: { requiresAuth: true }
        }]
    }
];

const router = new Router({
    routes,
    strict: process.env.NODE_ENV !== 'production'
})

router.beforeEach((to, from, next) => {
    // 路由跳转前的钩子
    // console.log('to')
    // console.log(to)
    // console.log('from')
    // console.log(from)
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (window.localStorage.pdUserId == undefined) {
            next({
                path: '/',
                query: { redirect: to.fullPath }
            })
        } else {
            next()
        }
    } else {
        next() // 确保一定要调用 next()
    }
    
    
})

export default router
