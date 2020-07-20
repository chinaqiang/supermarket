<template>
  <div id="app">
    <router-view></router-view>
    <tabbar>
      <tabbaritem path="/home">
        <i class="iconfont" slot="info_default">&#xe657;</i>
        <i class="iconfont" slot="info_active">&#xe657;</i>
        <p slot="info_text" activeColor="blue">首页</p>
      </tabbaritem>
       <tabbaritem path="/about">
        <i class="iconfont" slot="info_default">&#xe7f8;</i>
        <i class="iconfont" slot="info_active">&#xe7f8;</i>
        <p slot="info_text" activeColor="#ff0">关于</p>
      </tabbaritem>
       <tabbaritem path="/mine">
        <i class="iconfont" slot="info_default">&#xe6a7;</i>
        <i class="iconfont" slot="info_active">&#xe6a7;</i>
        <p slot="info_text" activeColor="#ff0">我的</p>
      </tabbaritem>
       <tabbaritem path="/profile">
        <i class="iconfont" slot="info_default">&#xe623;</i>
        <i class="iconfont" slot="info_active">&#xe623;</i>
        <p slot="info_text" activeColor="#ff0">档案</p>
      </tabbaritem>

    </tabbar>

  </div>
</template>

<script>
import tabbar from './components/tabbar'
import tabbaritem from './components/tabbaritem'

export default {
  name: 'App',
  components: {
    tabbar,
    tabbaritem
  }
}
</script>

<style>
@import './assets/css/base.css';

</style>