<template>
  <div>
    <MyHeader title="tabbar"></MyHeader>
    <!-- <component :is="comName" style="margin-top:45px"></component> -->
    <router-view style="margin-top:45px"></router-view>
    <MyTabBar :list="tabList" @changeTab="Fn"></MyTabBar>
  </div>
</template>

<script>
import MyHeader from './components/MyHeader.vue'
import MyTabBar from './components/MyTabBar.vue'
export default {
  name: 'App',
  components: {
    MyHeader,
    MyTabBar,
  },
  data() {
    return {
      tabList: [
        {
          iconText: 'icon-shangpinliebiao',
          text: '商品列表',
          componentName: 'MyGoodsList',
        },
        {
          iconText: 'icon-sousuo',
          text: '商品搜索',
          componentName: 'MyGoodsSearch',
        },
        {
          iconText: 'icon-user',
          text: '我的信息',
          componentName: 'MyUserInfo',
        },
      ],
      comName: 'MyGoodsList'
    }
  },
  methods: {
    Fn(val) {
      this.comName = val
    }
  }
}
</script>

<style></style>
