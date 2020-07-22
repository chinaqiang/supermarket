<template>
  <div class="navbaritem" :style="isBgColor">
    <div class="left"><slot name="left"></slot></div>
    <div class="center" :style="isFontColor"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>
<script>
export default {
  name: 'navbaritem',
  props: {
    bgColor: {
      type: String,
      default: 'pink'
    },
    fontColor: {
      type: String,
      default: '#fff'
    }
  },
  computed: {
    isBgColor() {
      return {background: this.bgColor}
    },
    isFontColor() {
      return {color: this.fontColor}
    }
  }
}
</script>
<style>
    .navbaritem {
    display: flex;
    box-shadow: 0 1px 1px rgba(255,255,0,.1);
    height: 44px;
    line-height: 44px;
  }
  .left,
  .right {
    width: 60px;
  }
  .center {
    flex: 1;
    text-align: center;
    font-size: 16px;
    font-weight: bold;
  }
</style>

