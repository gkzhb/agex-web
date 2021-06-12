import { logDebug } from "../utils/others";

export default {
  namespaced: true,
  state: {
    content: "",
    color: "",
    timeout: ""
  },
  mutations: {
    showMessage(state, payload) {
      logDebug("show message ");
      state.content = payload.content;
      state.color = payload.color;
      state.timeout = payload.timeout;
    },
    closeMessage(state) {
      state.content = "";
    }
  },
  actions: {
    info({ commit }, content = "", color = "info", timeout = 4000) {
      logDebug("message info");
      commit("showMessage", {
        content,
        color,
        timeout
      });
    },
    success({ commit }, content = "", color = "success", timeout = 4000) {
      commit("showMessage", {
        content,
        color,
        timeout
      });
    },
    error({ commit }, content = "", color = "error", timeout = 4000) {
      commit("showMessage", {
        content,
        color,
        timeout
      });
    }
  }
};
