import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import About from './views/About'
import MainPage1 from "./views/MainPage1";
import MainPage2 from "./views/MainPage2";
import Sub1 from "./components/sub/Sub1";
import Sub2 from "./components/sub/Sub2";
import Sub3 from "./components/sub/Sub3";
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
            component: About
        }, {
            path: '/menu1',
            name: 'menu11',
            component: MainPage1,
            children: [{
                path: "/",
                redirect:"sub1"
            },{
                path: "sub1",
                component: Sub1
            },{
                path: "sub2",
                component: Sub2
            }]
        }, {
            path: '/menu2',
            name: 'menu22',
            component: MainPage2,
            children: [{
                path: "/",
                redirect:"sub1"
            },{
                path: "sub1",
                component: Sub1
            },{
                path: "sub2",
                component: Sub2
            },{
                path: "sub3",
                component: Sub3
            }]
        }
    ]
})

