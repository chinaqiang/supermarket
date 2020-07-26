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

