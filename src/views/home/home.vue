<template>
  <div>
      <navbaritem>
          <p slot="center">购物街</p>
      </navbaritem>
      <swiper :banners='banners'></swiper>
  </div>
</template>

<script>
// 导入 navbar 模块
import navbaritem from '../../components/common/navbar/navbaritem'

// 导入swiper 模块
import swiper from './homechild/homeswiper'

// 导入 网络请求模块
import  {getHomeMultidata} from '../../network/home'

// 导入轮播图模块

export default {
    components: {
      navbaritem,
      swiper
    },
    data(){
      return {
        // result: null  只获取 banner 和 recommend
        banners: [],
        recommends: []
      }
    },
    created() {
      // 请求多个数据
      getHomeMultidata().then(res => {
        // console.log(res);
        // 函数执行时， 变量 存入堆栈中， 函数执行后， 数据出堆栈， 变量无意义
        // 在函数执行结束前， 把值传递出去

        // this.result = res   // 此时数据result 将会获取到res 的所有值, 只返回需要获取的数值即可
        this.banners = res.data.banner.list;  // 只获取需要的值
        this.recommends = res.data.recommend.list;

      })
    }
}
</script>

<style>
</style>