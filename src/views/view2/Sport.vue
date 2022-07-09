<template>
  <div>
    <h4>体育-改变人生</h4>
    <div class="header">
      <router-link to="/sport/one">体育的主页</router-link>
      <router-link to="/sport/in">国内的体育</router-link>
      <router-link to="/sport/out">国外的体育</router-link>
    </div>
    <div>
    <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>