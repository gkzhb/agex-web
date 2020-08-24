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
    loggedIn: state => {
      return (
        state.token.length > 0 ||
        (localStorage.token && localStorage.token.length > 0)
      );
    },
    userId: state => {
      return state.user.id || parseInt(localStorage.userId);
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
    setLogout(state) {
      state.user = {};
      state.token = "";
    }
  },
  actions: {
    logout({ commit }) {
      localStorage.token = "";
      localStorage.userId = "";
      commit("setLogout");
    }
  },
  modules: {}
});
