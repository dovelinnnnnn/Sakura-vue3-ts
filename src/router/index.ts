import { createRouter, createWebHashHistory, RouteRecordRaw,createMemoryHistory } from 'vue-router'
const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        redirect: "/home"
    },
    {
        path: "/home",
        name: "home",
        component: () => import("../view/home.vue")
    },
    {
        path: "/login",
        name: "login",
        component: () => import("../view/login.vue")
    }

]


const router = createRouter({
    history: createWebHashHistory(),
    routes: routes,
})
router.beforeEach((to, from) => {
    // ...
    // 返回 false 以取消导航
    // if (!localStorage.getItem('token') && to.name != "login") {
        // return { name: "login" }
    // }
    return 
})
export default router