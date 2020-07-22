import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import axios from 'axios'
import { request } from './network/request'
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
// 方法二
request({
  url: '/home/multidata'
}).then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
})



// axios({
//   url: 'http://123.207.32.32:8000/home/multidata'
// }).then(res => {
//   console.log(res)
// })

/* axios({
  // url: 'http://123.207.32.32:8000/home/data?type=sell&page=3'
  url: 'http://123.207.32.32:8000/home/data',
  // 专门针对get请求的参数拼接，  如url 上一句被注释掉
  params: {
    type: 'pop',
    page: 1
  }
}).then(res => {
  console.log(res)
}) */

// 2  axios 发送并发请求
/* axios.all([axios({
  url: 'http://123.207.32.32:8000/home/multidata'
}), axios({
  url: 'http://123.207.32.32:8000/home/data',
  params: {
    type: 'sell',
    page: 5
  }
})]).then(results => {   // 此处获取到的结果
  console.log(results)
}) */

/*3 全局配置  */
/* axios.defaults.baseURL = 'http://123.207.32.32:8000'
axios.defaults.timeout = 5000


axios.all([axios({
  ulr: '/home/multidata'
}), axios({
  url: '/home/data',
  params: {
    type: 'sell',
    page: 5
  }
})]).then(axios.spread((res1, res2) => {   // 与以上方法不同， 此处可直接获取两个参数的结果
  console.log(res1);
  console.log(res2);
}))

axios({
  url: '/category'
}) */
/* const obj = {
  name: 'kobe',
  age: 30
}
 */
// const {name, age} = obj;

// const names = ['why', 'kobe', 'james']

//const name1 = names[0]
//const name2 = names[1]
//const name3 = names[2]

// 使用数组结构 替代 以上方法
// const [name1, name2, name3] = names;



// 4 . 创建对应的axios 实例
/*
const instance1 = axios.create({
  baseURL: 'http://123.207.32.32:8000/home/multidata',
  timeout: 5000
})

instance1({
  url: '/home/multidata'
}).then(res => {
  console.log(res);
})

instance1({
  url: '/home/data',
  params: {
    type: 'pop',
    page: 1
  }
}).then(res => {
  console.log(res);
}) */


// 5 。 封装request 模块
/// 方法一
/* import {request} from './network/request'

request({
  url: '/home/multidata'
},res => {
  console.log(res);
},err => {
  console.log(err);
}) */

