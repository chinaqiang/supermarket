/*  封装网络请求模块  */



// 将接口导出    config=> 配置   success=> 成功 failure=> 失败
/// 方法一
/* export function request(config, success, failure) {
  //1. 创建axios
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })

  // 发送真正的网络请求
  instance(config)
    .then(res => {
      // console.log(res);
      // 通过 回调 打印
      success(res)
    })
    .catch(err => {
      // console.log(err);
      failure(err)
    })
} */

// 方法二
/*
export function request (config) {
  return new Promise((resolve, reject) => {
    //1. 创建 axios 实例
    const instance = axios.create({
      baseURl: 'http://123.207.32.32:8000',
      // 超时报错
      timeout: 5000
    })

    // 发送网络请求
    instance(config)
      .then(res => {
        resolve(res)
      })
      .catch(err => {
        reject(err)
      })
  })
} */


// 方法三

import  axios from 'axios'
export function request(config) {
  const instance = axios.create({
    baseURL: "http://123.207.32.32:8000",
    timeout: 5000
  })
  //2. axios 的拦截器
    // 2.1 请求拦截
  instance.interceptors.request.use(config => {
    console.log(config);
    // 此处拦截了 config 后， 需要将 其返回， 否则服务器拿不到 config 的数据
    return config;
  }, err => {
    console.log(err);
  })

    // 2.2响应拦截
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err);
  })

  // 发送网络请求，  直接返回 promise
  return instance(config)
}