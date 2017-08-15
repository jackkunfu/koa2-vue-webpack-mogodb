import Vue from "vue";
import Router from "vue-router";

import { islogin } from '@/api/getData.js'

Vue.use(Router);

// https://github.com/bailicangdu/vue2-manage

const login = r => require.ensure([], () => r(require('@/page/login')), 'login');
const manage = r => require.ensure([], () => r(require('@/page/manage')), 'manage');
const userList = r => require.ensure([], () => r(require('@/page/components/_table_user')), 'userList');
const userChange = r => require.ensure([], () => r(require('@/page/components/_user_change')), 'userChange');
const couponList = r => require.ensure([], () => r(require('@/page/components/_table_coupon')), 'couponList');
const couponChange = r => require.ensure([], () => r(require('@/page/components/_coupon_change')), 'couponAdd');
const couponSet = r => require.ensure([], () => r(require('@/page/components/_coupon_set')), 'couponSet');

const accountManage = r => require.ensure([], () => r(require('@/page/components/_table_account')), 'accountManage'); // 账户管理
const roleManage = r => require.ensure([], () => r(require('@/page/components/_table_role')), 'roleManage'); // 角色管理
const accessManage = r => require.ensure([], () => r(require('@/page/components/_table_access')), 'accessManage'); // 权限管理
const entryManage = r => require.ensure([], () => r(require('@/page/components/_table_entry')), 'entryManage'); // 入口目录管理

const routes = [{
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
            },
            {
                path: '/accountManage',
                component: accountManage,
                meta: { requiresAuth: true }
            },
            {
                path: '/roleManage',
                component: roleManage,
                meta: { requiresAuth: true }
            },
            {
                path: '/accessManage',
                component: accessManage,
                meta: { requiresAuth: true }
            },
            {
                path: '/entryManage',
                component: entryManage,
                meta: { requiresAuth: true }
            }
        ]
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