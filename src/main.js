import Vue from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.css"
import "./assets/fonts/fonts/iconfont.css"
import axios from "axios";
import VueRouter from 'vue-router'
import MyGoodsList from './views/MyGoodsList'
import MyGoodsSearch from './views/MyGoodsSearch'
import MyUserInfo from './views/MyUserInfo'
axios.defaults.baseURL = "https://www.escook.cn";
Vue.prototype.$axios = axios
Vue.use(VueRouter)
Vue.directive("focus", {
  inserted(el){
    el.focus()
  }
})
const routes = [
  {
    path: "/",
    redirect: "/mygoodslist"
  },
  {
    path: "/mygoodslist",
    component: MyGoodsList,
    name: "MyGoodsList",
  },
  {
    path: "/mygoodssearch",
    component: MyGoodsSearch,
    name: "MyGoodsSearch"
  },
  {
    path: "/myuserinfo",
    component: MyUserInfo,
    name: "MyUserInfo"
  },
]
const router = new VueRouter({
  routes
})
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
