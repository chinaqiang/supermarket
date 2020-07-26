<template>
  <div>
      <navbaritem class="navbar">
          <p slot="center">购物街</p>
      </navbaritem>
      <swiper :banners='banners'></swiper>
      <recommend :recommends="recommends"></recommend>
      <more></more>
      <tabcontrol :titles="['服装','淘宝','衣架']"></tabcontrol>
  </div>
</template>

<script>
// 导入 navbar 模块
import navbaritem from '../../components/common/navbar/navbaritem'

// 导入swiper 模块
import swiper from './homechild/homeswiper'
// 导入轮播图下方的4个圆框
import recommend from './homechild/recommendView'

// 导入 网络请求模块
import  {getHomeMultidata, getHomeGoods} from '../../network/home'

// 添加更多推荐
import more from './homechild/more'
// 添加列表 nav
import tabcontrol from '../../components/content/tablist/tabcontrol'

export default {
    components: {
      navbaritem,
      swiper,
      recommend,
      more,
      tabcontrol
    },
    data(){
      return {
        // result: null  只获取 banner 和 recommend
        banners: [],
        recommends: [],
        goods: {
          'pop': {page: 0, list: []},
          'news': {page:0, list: []},
          'sell': {page:0, list: []}
        }
      }
    },
    created() {
      // 请求多个数据
      this.getHomeMultidata();


    },
    methods: {
      // 请求多个数据

      getHomeMultidata() {
        getHomeMultidata().then(res => {
          // console.log(res);
          // 函数执行时， 变量 存入堆栈中， 函数执行后， 数据出堆栈， 变量无意义
          // 在函数执行结束前， 把值传递出去

          // this.result = res   // 此时数据result 将会获取到res 的所有值, 只返回需要获取的数值即可
          this.banners = res.data.banner.list;  // 只获取需要的值
          this.recommends = res.data.recommend.list;

        })
      }
    },
    getHomeGoods(type) {
      const page = this.goods[type].page+1;
      getHomeGoods(type, page).then(res => {
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page += 1
      })
    }
}
</script>

<style>
  .navbar {
    display: flex;
    box-shadow: 0 1px 1px rgba(255,255,0,.1);
    height: 44px;
    line-height: 44px;

    position: fixed;
    left: 0;
    top:0;
    right:0;
    z-index: 99;
  }
  #app {
    padding-top: 44px;;
  }
</style>