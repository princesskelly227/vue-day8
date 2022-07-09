<template>
  <div>
    <div>
      <router-link to="/find/recommend">推荐</router-link>
      <router-link to="/find/ranking">排行榜</router-link>
      <router-link to="/find/songlist">歌单</router-link>
      <a :href="href" @click="btn">随机切换</a>
      <!-- <van-button type="primary">随机切换</van-button> -->
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      href:'',
      obj:{
        0:'#/find/recommend',
        1:'#/find/ranking',
        2:'#/find/songlist',
      }
    }
  },
  methods:{
    btn(){
      this.href=this.obj[Math.floor(Math.random()*3)];
    },
  }
};
</script>

<style scoped>
a:nth-child(4){
  border: solid 1px black;
  background-color: whitesmoke;
  color: black;
  border-radius: 5px;
  padding: 3px;
  text-decoration: initial;
}
.nav_main {
  background-color: red;
  color: white;
  padding: 10px 0;
}
.nav_main a {
  text-align: center;
  text-decoration: none;
  color: white;
  font-size: 12px;
  margin: 7px 17px 0;
  padding: 0px 15px 2px 15px;
  height: 20px;
  display: inline-block;
  line-height: 20px;
  border-radius: 20px;
}
.nav_main a:hover {
  background-color: brown;
}
.nav_main .router-link-active {
  background-color: brown;
}
</style>
