import { c as create_ssr_component, a as subscribe } from "../../../chunks/ssr.js";
import { l as loading } from "../../../chunks/stores2.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_loading;
  $$unsubscribe_loading = subscribe(loading, (value) => value);
  $$unsubscribe_loading();
  return `<button type="button" data-svelte-h="svelte-nbknmp">Logout</button>`;
});
export {
  Page as default
};
