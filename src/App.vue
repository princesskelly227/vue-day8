<template>
  <div id="app">
    <!-- <router-link style="margin-left: 30px" to="/shouye?name=张三"
      >首页</router-link
    >
    <router-link style="margin-left: 30px" to="/music:李四">歌单</router-link>
    <router-link style="margin-left: 30px" to="/My">我的</router-link> -->

    <!-- 模拟实现router-link -->
    <!-- <span style="margin-left: 30px" @click="btn('/shouye', 'sy')">首页</span>
    <span style="margin-left: 30px" @click="btn('/music', 'ms')">歌单</span>
    <span style="margin-left: 30px" @click="btn('/My', 'my')">我的</span>

    <div><router-view></router-view></div> -->

    <!-- 附加练习一 -->
    <router-link to="/find">首页</router-link>
    <router-link to="/fenlei">分类</router-link>
    <router-link to="/dingdan">订单</router-link>
    <router-link to="/myde">我的</router-link>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// export default {
//   name: 'App',
//   components: {},
//   methods: {
//     btn(val, name) {
//       // console.log(val);
//       // this.$router.push({
//       //   path: val,
//       // });
//       this.$router.push({
//         name: name,
//         query: {
//           name: 'zs',
//           id: 1,
//         },
//       });
//     },
//   },
// };
</script>

<style>
span {
  cursor: pointer;
}
</style>
