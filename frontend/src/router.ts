import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            component:() => import('./views/About.vue')
        },
        {
            path: '/tags',
            component:() => import('./views/Tags.vue')
        },
        {
            path: '/login',
            component:() => import('./views/Login.vue')
        },
        {
            path: '/product',
            component:() => import('./views/Product.vue')
        },
        {
            path: '/admin',
            component:() => import('./views/Admin.vue')
        },
        {
            path: '/postadd',
            component:() => import('./views/Postadd.vue')
        }
    ]
}) 