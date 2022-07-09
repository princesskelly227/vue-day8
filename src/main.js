import Vue from 'vue'
import App from './App.vue'
// 导入路由组件
import ShouYe from '@/views/ShouYe'
import Music from '@/views/Music'
import My from '@/views/My'
import NotFount from '@/views/NotFount'

Vue.config.productionTip = false
// 全局配置路由
import VueRouter from 'vue-router'



Vue.use(VueRouter)

const routes = [
  {
    path: "/", // 默认hash值路径
    redirect: "/shouye" // 重定向到/find
  },
  {
    path: '/shouye',
    name: 'sy',
    component: ShouYe

  },
  {
    path: '/music:name',
    name: 'ms',
    component: Music

  },
  {
    path: '/my',
    name: 'my',
    component: My

  },
  {
    path: '*',
    component: NotFount
  }
]

const router = new VueRouter({
  routes
})
// 前置守卫 
const isLogin = true;
router.beforeEach((to, from, next) => {
  if (to.path !== 'shouye' && isLogin == false) {
    return alert('请登录')
  } else {
    next()
  }
})


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
