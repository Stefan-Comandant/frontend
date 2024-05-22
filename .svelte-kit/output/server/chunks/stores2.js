import { w as writable } from "./index2.js";
const value = {
  LightMode: false
};
const settings = writable(value);
const loading = writable({ goPast: false, loading: false });
export {
  loading as l,
  settings as s
};
