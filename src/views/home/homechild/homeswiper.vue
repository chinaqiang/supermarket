<template>
  <div>
    <swiper>
        <swiperitem v-for="(item,index) in banners" :key="index">
          <a :href="item.link">
            <img :src="item.image" alt="aa">
          </a>
        </swiperitem>
      </swiper>
  </div>
</template>

<script>
import {swiper, swiperitem} from '../../../components/common/swiper'
export default {
  props: {
    banners: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    swiper,
    swiperitem
  }
}
</script>