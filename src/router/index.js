import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)  // 使用路由插件
// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalReplace = Router.prototype.replace;
  Router.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch(err => err);
};


const Home = () => import('../views/home/home')
const About = () => import('../views/about/about')
const Mine = () => import('../views/mine/mine')
const Profile = () => import('../views/profile/profile')

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/mine',
    component: Mine
  },{
    path: '/profile',
    component: Profile
  }
]
const router = new Router({
  routes,
  linkActiveClass: 'active',
  mode: 'history'
})


export default router