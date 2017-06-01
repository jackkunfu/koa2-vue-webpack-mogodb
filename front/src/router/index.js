import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import List from '@/components/List'
import Detail from '@/components/Detail'
import Buy from '@/components/Buy'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Hello',
            component: Hello
        },
        {
            path: '/list',
            name: 'List',
            component: List
        },
        {
            path: '/detail',
            name: 'Detail',
            component: Detail
        },
        {
            path: '/buy',
            name: 'Buy',
            component: Buy
        }
    ]
})