import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import MainPage1 from "./views/MainPage1";
import MainPage2 from "./views/MainPage2";

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home', // router.push()에서 name을 이용해 이동
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: Home
    },{
      path: '/menu1',
      name: 'menu11',
      component: MainPage1
    },{
      path: '/menu2',
      name: 'menu22',
      component: MainPage2
    }
  ]
})
