"use strict";

import Vue from "vue";
import axios from "axios";

import { BASE_URL } from "../utils/config";
import store from "../store";

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers.post["Content-Type"] = "application/json;charset=UTF-8";
axios.defaults.baseURL = BASE_URL;

let config = {
  // baseURL: BASE_URL || process.env.baseURL || process.env.apiUrl || "",
  timeout: 60 * 1000 // Timeout
  // withCredentials: true, // Check cross-site Access-Control
};

const _axios = axios.create(config);

_axios.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    console.log(config);
    if (!config.url.endsWith("login")) {
      // config.data.token = localStorage.token;
      config.headers["Authorization"] = localStorage.token;
    }
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
_axios.interceptors.response.use(
  function(response) {
    // Do something with response data
    console.log(response);
    return response;
  },
  function(error) {
    // Do something with response error
    console.log(error);
    if (error.response) {
      switch (error.response.status) {
        case 401:
          store.commit("logout");
      }
    }
    return Promise.reject(error);
  }
);

Plugin.install = function(Vue) {
  Vue.axios = _axios;
  window.axios = _axios;
  Object.defineProperties(Vue.prototype, {
    axios: {
      get() {
        return _axios;
      }
    },
    $axios: {
      get() {
        return _axios;
      }
    }
  });
};

Vue.use(Plugin);

export default _axios;
