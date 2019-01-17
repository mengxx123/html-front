import Vue from 'vue'
import Router from 'vue-router'

const Home = resolve => require(['@/views/Home'], resolve)
const Tool = resolve => require(['@/views/Tool'], resolve)
const About = resolve => require(['@/views/About'], resolve)
const Deal = resolve => require(['@/views/Deal'], resolve)
const Coding = resolve => require(['@/views/Coding'], resolve)
const CodingHelp = resolve => require(['@/views/CodingHelp'], resolve)
const Error404 = resolve => require(['@/views/error/Error404'], resolve)

Vue.use(Router)

let routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/tool',
        component: Tool
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/deal',
        component: Deal
    },
    {
        path: '/coding',
        component: Coding
    },
    {
        path: '/coding/help',
        component: CodingHelp
    },
    {
        path: '*',
        component: Error404
    }
]

let router = new Router({
    mode: 'history',
    routes: routes,
    scrollBehavior (to, from, savedPosition) {
        return {
            x: 0,
            y: 0
        }
    }
})

export default router
