export const sidebarRoutes = {
  fav: {
    title: "追番",
    icon: "mdi-heart",
    to: { name: "Home" }
  },
  history: {
    title: "历史",
    icon: "mdi-clock-fast",
    to: { name: "History" }
  },
  chat: {
    title: "交流",
    icon: "mdi-chat-processing",
    to: { name: "Chat" }
  },
  settings: {
    title: "设置",
    icon: "mdi-cog",
    to: { name: "Settings" }
  },
  about: {
    title: "关于",
    icon: "mdi-information",
    to: { name: "About" }
  }
};

export const BASE_URL = process.env.VUE_APP_BASE_API;
export const AGE_BASE_URL = "https://www.agefans.vip/";
export const AGE_DETAIL_PATH = "detail/";
export const BANGUMI_URL = "https://bangumi.tv/";
export const BANGUMI_SEARCH_PATH = "subject_search/";
