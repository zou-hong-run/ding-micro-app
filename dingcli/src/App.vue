<template>
  <div id="app">
    <van-tabbar v-model="active" route>
      <van-tabbar-item icon="home-o" replace to="/">Home</van-tabbar-item>
      <van-tabbar-item icon="search" replace to="/about">About</van-tabbar-item>
    </van-tabbar>
    <router-view/>
  </div>
</template>

<script>
import Vue from 'vue';
import { Tabbar, TabbarItem } from 'vant';

Vue.use(Tabbar);
Vue.use(TabbarItem);

export default {
  data() {
    return {
      active: 0,
    };
  },
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
