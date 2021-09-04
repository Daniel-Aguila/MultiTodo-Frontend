import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from "@/views/Home.vue"
import Login from "@/views/Login.vue"
import Register from "@/views/Register.vue"
import Logout from "@/views/Logout.vue"


//Connect the views through router
const routes: Array<RouteRecordRaw> = [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/logout', component: Logout }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
