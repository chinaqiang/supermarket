<template>
  <div class="tabcontrol">
     <div class="tabitem" v-for="(item, index) in titles" :key="index" :class="{active: index=== currentIndex}" @click="tabClick(index)">
        <span class="tab_title">{{item}}</span>
     </div>


     <ul>
      <li>10</li>
      <li>10</li>
      <li>10</li>
      <li>10</li>
      <li>10</li>
      <li>10</li>
      <li>10</li>
      <li>10</li>
      <li>10</li>
      <li>10</li>
      <li>10</li>
      <li>10</li>
      <li>10</li>
      <li>10</li>
      <li>10</li>
      <li>10</li>
      <li>10</li>
      <li>10</li>
      <li>10</li>
      <li>10</li>
     </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      currentIndex: 0
    }
  },
  props: {
    titles: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    tabClick(index) {
      this.currentIndex = index;
    }
  }
}
</script>
<style>
  .tabcontrol {
    display: flex;
    height: 40px;
    line-height: 40px;
  }
  .tabitem {
    flex: 1;
    text-align: center;
  }

  .tab_title {
    font-size: 16px;
  }

  .active {
    color: var(--color-tint);
  }
  .active span {
    padding-bottom: 10px;
    border-bottom: 2px solid var(--color-tint);
  }

</style>