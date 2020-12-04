import Vue from "vue";
import Vuex from "vuex";
import message from "./message.store";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {},
    token: "",
    title: ""
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
    darkMode: state => {
      return state.darkMode || localStorage.darkMode === "true";
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
    setDarkMode(state, dark) {
      console.log("setDarkMode", dark);
      state.darkMode = dark;
      localStorage.darkMode = dark;
    }
  },
  actions: {
    logout({ commit }) {
      localStorage.token = "";
      localStorage.userId = "";
      commit("setLogout");
    }
  },
  modules: {
    message
  }
});
