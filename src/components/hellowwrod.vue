<template>
  <div>
    <h2>{{categories}}</h2>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      categories: ''
    }
  },
  created() {
    // 因为axios 直接返回了一个 promise  ， 此处就有 then 和catch 方法
    axios({
      url: 'http://123.207.32.32:8000/category'
    }).then(res => {
      this.categories = res;
    })
  }
}
</script>