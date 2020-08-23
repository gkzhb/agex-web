import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {},
    token: "",
    title: ""
  },
  getters: {
    loggedIn: () => {
      return localStorage.token;
    },
    userId: () => {
      return parseInt(localStorage.userId);
    },
    websiteTitle: state => {
      return state.title;
    }
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
      localStorage.userId = user.id;
    },
    setTitle(state, title) {
      state.title = title;
    },
    setToken(state, token) {
      localStorage.token = token;
      state.token = token;
    },
    logout(state) {
      localStorage.token = "";
      state.user = {};
    }
  },
  actions: {},
  modules: {}
});
