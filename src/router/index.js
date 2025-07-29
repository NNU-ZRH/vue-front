import Vue from 'vue'
import VueRouter from 'vue-router'
import AppHome from "@/views/AppHome";
import UserHome from "@/views/UserHome";
import MainPage from "@/views/MainPage";

// 1.使用
Vue.use(VueRouter)

// 2. 配置路由
const routes = [
    {
        path: '/',
        name: 'MainPage',
        component: MainPage,
        redirect: '/home',
        children: [
            {
                path: 'home',
                name: 'AppHome',
                component: AppHome
            },
            {
                path: 'user',
                name: 'UserHome',
                component: UserHome
            }
        ]
    }
]

// 3.创建路由实例
const router = new VueRouter({
    routes
})
// 4.导出
export default router
// 5.在main.js中引入挂载到实例上