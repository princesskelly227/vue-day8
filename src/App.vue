<template>
  <div>
    <div class="footer_wrap">
      <a href="#/find">首页</a>
      <a href="#/music">分类</a>
      <a href="#/my">订单</a>
      <a href="#/part">我的</a>
    </div>
    <div class="top">
      <router-view></router-view> 
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.footer_wrap {
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  width: 100%;
  text-align: center;
  background-color: #333;
  color: #ccc;
}
.footer_wrap a {
  flex: 1;
  text-decoration: none;
  padding: 20px 0;
  line-height: 20px;
  background-color: #333;
  color: #ccc;
  border: 1px solid black;
}
.footer_wrap a:hover {
  background-color: #555;
}
.top {
  padding-top: 62px;
}
</style>