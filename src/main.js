import Vue from 'vue'
import App from './App.vue'
// 导入路由组件
// import ShouYe from '@/views/ShouYe'
// import Music from '@/views/Music'
// import My from '@/views/My'
import NotFount from '@/views/NotFount'
// 附加练习1
import Find from "@/views/fujia/Find"
import FenLei from "@/views/fujia/FenLei"
import DingDan from "@/views/fujia/DingDan"
import MyDe from "@/views/fujia/MyDe"
// 二级嵌套
import DongMan from '@/views/fujia/qiantao/DongMan'
import XiJu from '@/views/fujia/qiantao/XiJu'

Vue.config.productionTip = false
// 全局配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// const routes = [
//   {
//     path: "/", // 默认hash值路径
//     redirect: "/shouye" // 重定向到/find
//   }, {
//     path: '/shouye',
//     name: 'sy',
//     component: ShouYe
//   }, {
//     path: '/music:name',
//     name: 'ms',
//     component: Music

//   }, {
//     path: '/my',
//     name: 'my',
//     component: My

//   }, {
//     path: '*',
//     component: NotFount
//   }
// ]
const routes = [
  {
    path: '/',
    redirect: Find

  },
  {
    path: '/find',
    component: Find

  }, {
    path: '/fenlei',
    component: FenLei,
    children: [
      {
        path: 'xiju',
        component: XiJu
      },
      {
        path: 'dongman',
        component: DongMan
      }
    ]

  }, {
    path: '/dingdan',
    component: DingDan

  }, {
    path: '/myde',
    component: MyDe

  },
  // {
  //   path: '*',
  //   component: NotFount
  // }
]
const router = new VueRouter({
  routes
})
// 前置守卫 
// const isLogin = true;
// router.beforeEach((to, from, next) => {
//   if (to.path !== 'shouye' && isLogin == false) {
//     return alert('请登录')
//   } else {
//     next()
//   }
// })


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
