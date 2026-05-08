import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import usHome from '../components/usHome.vue'
import WelcomePage from '../components/WelcomePage.vue'
import UserS from '../components/user/UserS.vue'
import RightS from '../components/power/rightS.vue'
import roleS from '../components/power/roleS.vue'
import Cate from '../components/goods/catE.vue'
// import { from } from 'core-js/core/array'
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', component: Login },
    {
      path: '/usHome',
      component: usHome,
      redirect: '/WelcomePage',
      children: [
        { path: '/WelcomePage', component: WelcomePage },
        { path: '/users', component: UserS },
        { path: '/rights', component: RightS },
        { path: '/roles', component: roleS },
        { path: '/categories', component: Cate }
      ]
    }
  ]
})
// 挂载路由守卫
router.beforeEach((to, from, next) => {
  // to代表将要访问的路径
  // from 代表从那个路径跳转而来
  // next 是一个函数，表示放行
  // next()放行  next（‘/login’）强制跳转
  if (to.path === '/login') return next()
  // 获取token
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) return next('/login')
  next()
})
export default router
