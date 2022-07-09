import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Index from './views/First.vue'
import Cate from './views/Cate.vue'
import Order from './views/Order.vue'
import My from './views/My.vue'
Vue.config.productionTip = false
Vue.use(VueRouter)
const routes = [
  {
    path: "/",
    redirect: "/index"
  },
  {
    path: "/index",
    component: Index
  },
  {
    path: "/cate",
    component: Cate
  },
  {
    path: "/order",
    component: Order
  },
  {
    path: "/my",
    component: My
  }
]
const router = new VueRouter({
  routes
})
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
