<template>
  <div id="tabbaritem" @click="tabClick">
      <div v-if="!isActive"><slot name="info_default"></slot></div>
      <div v-else class="info_active"><slot name="info_active"></slot></div>
      <div :style='isActiveColor'><slot name="info_text"></slot></div>
  </div>
</template>
<script>
export default {
  name: 'tabbaritem',
  props: {
    path: String,
    activeColor: {
      type: String,
      default: '#f00'
    }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) != -1
    },
    isActiveColor() {
      return this.isActive ? {color: this.activeColor} : {}
    }
  },
  methods: {
    tabClick() {
      this.$router.replace(this.path)
    }
  }
}
</script>
<style>
  #tabbaritem {
    flex: 1;
    text-align: center;
    font-size: 14px;
    line-height: 24px;
    padding-top: 5px;
  }
  .info_active{
    color: #f00;
  }


</style>