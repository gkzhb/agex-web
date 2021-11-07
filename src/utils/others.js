import dayjs from "../plugins/dayjs";
import store from "../store";

const today = dayjs().startOf("day");

export function fromNow(t) {
  const dt = dayjs(t);
  const diff = today.diff(dt, "day");
  if (diff > 5) {
    return dt.format("YYYY-MM-DD");
  }
  if (diff > 1) {
    return dt.format("dddd HH:mm");
  }
  return dt.fromNow();
}

export function logDebug() {
  if (store.getters.debugMode) {
    console.log(...arguments);
  }
}

export function getLastUrl(ageBaseUrl, lastUrl, lastTime) {
  if (!lastTime || !lastUrl) {
    return "";
  }
  let url;
  if (/agefans/.test(lastUrl)) {
    try {
      url = new URL(lastUrl);
      // replace base URL provided by server
      const tempUrl = new URL(ageBaseUrl);
      url.host = tempUrl.host;
    } catch (e) {
      console.error(e);
      url = new URL(lastUrl, ageBaseUrl);
    }
  } else {
    url = new URL(lastUrl, ageBaseUrl);
  }
  return `${url.toString()}&${lastTime}`;
}
