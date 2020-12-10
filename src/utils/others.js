import dayjs from "../plugins/dayjs";

const today = dayjs().startOf("day");

export function fromNow(t) {
  const dt = dayjs(t);
  const diff = today.diff(dt, "day");
  if (diff > 5) {
    return dt.format("YYYY-MM-DD HH:mm:ss");
  }
  if (diff > 1) {
    return dt.format("dddd HH:mm:ss");
  }
  return dt.fromNow() + " " + dt.format("HH:mm:ss");
}
