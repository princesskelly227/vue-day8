import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
// import Index from './views/views1/First.vue'
// import Cate from './views/views1/Cate.vue'
// import Order from './views/views1/Order.vue'
// import My from './views/views1/My.vue'
import First from './views/view2/Fir.vue'
import News from './views/view2/News.vue'
import Sport from './views/view2/Sport.vue'
import One from './views/view2/second/One.vue'
import In from './views/view2/second/In.vue'
import Out from './views/view2/second/Out.vue'
Vue.config.productionTip = false
Vue.use(VueRouter)
// const routes = [
//   {
//     path: "/",
//     redirect: "/index"
//   },
//   {
//     path: "/index",
//     component: Index
//   },
//   {
//     path: "/cate",
//     component: Cate
//   },
//   {
//     path: "/order",
//     component: Order
//   },
//   {
//     path: "/my",
//     component: My
//   }
// ]
const routes = [
  {
    path: "/",
    redirect: "/index"
  },
  {
    path: "/index",
    component: First
  },
  {
    path: "/news",
    component: News
  },
  {
    path: "/sport",
    component: Sport,
    children: [
      {
        path: "one",
        component: One,
      },
      {
        path: "in",
        component: In,
      },
      {
        path: "out",
        component: Out,
      }
    ]
  },
]
const router = new VueRouter({
  routes
})
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
