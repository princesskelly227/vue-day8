import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Music from '@/views/Music.vue'
import Find from '@/views/Find.vue'
import My from '@/views/My.vue'
import Part from '@/views/Part.vue'
import NotFound from '@/views/NotFound.vue'
import Ranking from '@/views/Second/Ranking.vue'
import Recommend from '@/views/Second/Recommend.vue'
import SongList from '@/views/Second/SongList.vue'
const routes = [
  {
    path: '/find',
    component: Find,
    children: [
      {
        path: '/',
        component: Ranking
      },
      {
        path: 'ranking',
        component: Ranking
      },
      {
        path: 'recommend',
        component: Recommend
      },
      {
        path: 'songList',
        component: SongList
      },
    ]
  },
  {
    path: '/',
    component: Find,
  },
  {
    path: '/music',
    component: Music,
  },
  {
    path: '/my',
    component: My
  },
  {
    path: '/part',
    component: Part
  },
  {
    path: '*',
    component: NotFound
  }
]

const router = new VueRouter({
  routes,
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
