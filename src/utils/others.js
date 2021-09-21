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
