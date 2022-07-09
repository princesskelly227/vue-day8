<template>
  <div>
    <div class="header">
      <router-link to="/index">首页</router-link>
      <router-link to="/cate">分类</router-link>
      <router-link to="/order">订单</router-link>
      <router-link to="/my">我的</router-link>
    </div>
    <div>
    <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
.header a {
  margin-left: 18px;
}
</style>
