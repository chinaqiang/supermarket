//  将home页 的请求封装在 此处

import {request} from './request'

export function getHomeMultidata() {
  return request({
    url: '/home/multidata'
  })
}