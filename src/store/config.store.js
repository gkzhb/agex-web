import { AGE_BASE_URL, AGE_DETAIL_PATH } from "../utils/constant";
export default {
  namespaced: true,
  state: {
    darkMode: null,
    ageBaseUrl: null
  },
  getters: {
    darkMode: state => {
      return state.darkMode || localStorage.darkMode === "true";
    },
    ageBaseUrl: state => {
      return state.ageBaseUrl || localStorage.ageBaseUrl || AGE_BASE_URL;
    },
    ageDetailUrl: (state, getters) => {
      return new URL(AGE_DETAIL_PATH, getters.ageBaseUrl).toString(); // `${getters.ageBaseUrl}${AGE_DETAIL_PATH}`;
    }
  },
  mutations: {
    setDarkMode(state, dark) {
      state.darkMode = dark;
      localStorage.darkMode = dark;
    },
    setAgeBaseUrl(state, ageBaseUrl) {
      if (ageBaseUrl === AGE_BASE_URL) {
        localStorage.ageBaseUrl = "";
        state.ageBaseUrl = ageBaseUrl;
        return;
      }
      localStorage.ageBaseUrl = state.ageBaseUrl = ageBaseUrl;
    }
  }
};
