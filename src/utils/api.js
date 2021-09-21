import axios from "../plugins/axios";
import qs from "qs";
import store from "../store";
import { logDebug } from "../utils/others";

/** 登录 */
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
        logDebug("login result:", resp.data);
        if (resp.data.success) {
          store.commit("setToken", resp.data.token);
          store.commit("setUser", resp.data.data);
          resolve(resp.data);
        } else {
          reject(resp.data);
        }
      })
      .catch(err => reject(err));
  });
}

/** 注册帐号 */
export async function register(data) {
  return new Promise((resolve, reject) => {
    const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    };
    axios
      .post("/users/register", qs.stringify(data), config)
      .then(resp => {
        resolve(resp.data);
      })
      .catch(err => reject(err));
  });
}

/** 获取追番列表 */
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

/** 获取观看历史记录 */
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

/** 发起回复 */
export async function createReply(id, content) {
  return new Promise((resolve, reject) => {
    axios
      .post("/comment/create", {
        userId: store.getters.userId,
        userName: store.getters.username,
        articleId: id,
        content: content
      })
      .then(resp => {
        resolve(resp.data);
      })
      .catch(err => reject(err));
  });
}

/** 获取番剧的评论 */
export async function getAnimeTopic(/* TODO */) {
  return new Promise((resolve, reject) => {
    axios
      .post("/articles/getArticles", {
        userId: store.getters.userId
        // TODO
      })
      .then(resp => {
        resolve(resp.data);
      })
      .catch(err => reject(err));
  });
}

/** 获取主题列表 */
export async function getChatTopicList(page = 1) {
  return new Promise((resolve, reject) => {
    axios
      .post("/articles/list", {
        userId: store.getters.userId,
        currentPage: page
      })
      .then(resp => {
        resolve(resp.data);
      })
      .catch(err => reject(err));
  });
}

/** 新建主题 */
export async function createTopic(content) {
  return new Promise((resolve, reject) => {
    axios
      .post("/articles/create", {
        userId: store.getters.userId,
        userName: store.getters.username,
        content: content
      })
      .then(resp => {
        resolve(resp.data);
      })
      .catch(err => reject(err));
  });
}
