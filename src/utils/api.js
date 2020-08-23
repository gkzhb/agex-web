import axios from "../plugins/axios";
import qs from "qs";
import store from "../store";

export async function login(data) {
  return new Promise((resolve, reject) => {
    const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    };
    axios
      .post("/users/login", qs.stringify(data), config)
      .then(resp => {
        store.commit("setToken", resp.data.token);
        store.commit("setUser", resp.data.data);
        resolve(resp.data);
      })
      .catch(err => reject(err));
  });
}

export async function getFavoriteList() {
  return new Promise((resolve, reject) => {
    axios
      .post("/favorite/list", { userId: store.getters.userId })
      .then(resp => {
        resolve(resp.data);
      })
      .catch(err => reject(err));
  });
}

export async function getHistoryList() {
  return new Promise((resolve, reject) => {
    axios
      .post("/history/list", { userId: store.getters.userId })
      .then(resp => {
        resolve(resp.data);
      })
      .catch(err => reject(err));
  });
}
