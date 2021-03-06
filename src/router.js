import Vue from "vue"
import Router from "vue-router"
import Home from "@/views/Home"
import ErrorView from "@/views/ErrorView"
import AboutView from "@/views/AboutView"
import CoinDetail from '@/views/CoinDetail'

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
            name: 'about',
            component: AboutView
        },
        {
            path: '/coin/:id',
            name: 'coin-detail',
            component: CoinDetail
        },
        {
            path: '*',
            name: 'Error',
            component: ErrorView

        }
    ]
})