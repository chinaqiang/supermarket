<template>
  <div id="app">
    <!--  ----------------------navbar  state---------------------------------------->
    <!--  ----------------------navbar  end---------------------------------------->

    <router-view></router-view>

    <!--  ----------------------tabbar  state---------------------------------------->
    <tabbar>
      <tabbaritem path="/home" activeColor="blue">
        <i class="iconfont" slot="info_default">&#xe657;</i>
        <i class="iconfont" slot="info_active">&#xe657;</i>
        <p slot="info_text" >首页</p>
      </tabbaritem>
       <tabbaritem path="/about" activeColor="yellow">
        <i class="iconfont" slot="info_default">&#xe7f8;</i>
        <i class="iconfont" slot="info_active">&#xe7f8;</i>
        <p slot="info_text" >关于</p>
      </tabbaritem>
       <tabbaritem path="/mine" activeColor="green">
        <i class="iconfont" slot="info_default">&#xe6a7;</i>
        <i class="iconfont" slot="info_active">&#xe6a7;</i>
        <p slot="info_text" >我的</p>
      </tabbaritem>
       <tabbaritem path="/profile" activeColor="pink">
        <i class="iconfont" slot="info_default">&#xe623;</i>
        <i class="iconfont" slot="info_active">&#xe623;</i>
        <p slot="info_text" >档案</p>
      </tabbaritem>
    </tabbar>
     <!--  ----------------------tabbar  end---------------------------------------->
  </div>
</template>

<script>
/* tabbar 栏 */
import tabbar from './components/common/tabbar/tabbar'
import tabbaritem from './components/common/tabbar/tabbaritem'




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