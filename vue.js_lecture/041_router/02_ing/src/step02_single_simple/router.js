import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home";
import About from "./views/About";
import MainPage1 from "./views/MainPage1";
import MainPage2 from "./views/MainPage2";
Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
    {
      path: "/menu1",
      name: "menu1",
      component: MainPage1,
    },
    {
      path: "/menu2",
      name: "menu2",
      component: MainPage2,
    },
  ],
});
