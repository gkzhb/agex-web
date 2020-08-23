import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "收藏"
    }
  },
  {
    path: "/history",
    name: "History",
    component: () =>
      import(/* webpackChunkName: "history" */ "../views/History.vue"),
    meta: {
      title: "历史"
    }
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Login.vue"),
    meta: {
      title: "登录"
    }
  }
];

const router = new VueRouter({
  routes
});

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    store.commit("setTitle", to.meta.title);
    document.title = store.getters.websiteTitle;
  }
  next();
});

export default router;
