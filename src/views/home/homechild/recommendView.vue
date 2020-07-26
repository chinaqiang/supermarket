<template>
  <div class="recommend">
    <div v-for="(item, index) in recommends" class="recommend_item" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'recommend',
  props: {
    recommends: {
      type: Array,
      default() {
        return []
      }
    }
  }

}
</script>

<style>
  .recommend {
    display: flex;
    width: 100%;
    text-align: center;
    padding: 10px 0 20px;
    border-bottom: 10px solid #eee;
  }
  .recommend_item {
    flex: 1;
  }
  .recommend_item img {
    width: 80px;
    height: 80px;
  }
</style>