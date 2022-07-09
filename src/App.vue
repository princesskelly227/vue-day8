<template>
  <div>
    <h3>嵌套路由</h3>
    <div class="header">
      <router-link to="/index">主页</router-link>
      <router-link to="/news">新闻</router-link>
      <router-link to="/sport">体育</router-link>
    </div>
    <div style="margin-top: 10px">
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
  margin-left: 10px;
}
</style>
