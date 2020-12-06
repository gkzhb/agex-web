import dayjs from "../plugins/dayjs";

export function fromNow(t) {
  const dt = dayjs(t);
  return dt.fromNow() + " " + dt.format("HH:mm:ss");
}
