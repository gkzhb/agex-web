import Vue from "vue";
import Vuex from "vuex";
import message from "./message.store";
import config from "./config.store";
import router from "../router";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      id: null,
      username: null
    },
    token: "",
    title: "",
    debug: undefined
  },
  getters: {
    loggedIn: state => {
      return (
        state.token.length > 0 ||
        (localStorage.token && localStorage.token.length > 0)
      );
    },
    userId: state => {
      return state.user.id || parseInt(localStorage.userId);
    },
    username: state => {
      return state.user.username || localStorage.username;
    },
    websiteTitle: state => {
      return state.title;
    },
    debugMode: state => {
      return state.debug || !!localStorage.debugMode;
    }
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
      localStorage.userId = user.id;
      localStorage.username = user.username;
    },
    setTitle(state, title) {
      state.title = title;
    },
    setToken(state, token) {
      localStorage.token = token;
      state.token = token;
    },
    setLogout(state) {
      state.user = {};
      state.token = "";
    },
    setDebugMode(state, debug) {
      state.debug = debug;
      localStorage.debug = debug ? "1" : "";
    }
  },
  actions: {
    logout({ commit }) {
      localStorage.token = "";
      localStorage.userId = "";
      commit("setLogout");
      router.push({ name: "Login" });
    }
  },
  modules: {
    message,
    config
  }
});
