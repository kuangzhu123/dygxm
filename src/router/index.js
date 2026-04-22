import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/Login.vue' // 使用 @ 别名指向 src

Vue.use(VueRouter)

// 定义路由表
const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login }
]

// 创建路由实例
const router = new VueRouter({
  mode: 'history', // 可选，去掉 hash 的 # 号
  base: process.env.BASE_URL,
  routes
})

// 导出路由实例（重要！）
export default router
