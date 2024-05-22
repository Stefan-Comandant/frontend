import { c as create_ssr_component, a as subscribe } from "../../../chunks/ssr.js";
import { l as loading } from "../../../chunks/stores2.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_loading;
  $$unsubscribe_loading = subscribe(loading, (value) => value);
  $$unsubscribe_loading();
  return `<div><label for="color-theme" data-svelte-h="svelte-l4podp">Color Theme</label> <select id="color-theme"><option value="dark" data-svelte-h="svelte-1b6hfej">Dark Mode</option><option value="light" data-svelte-h="svelte-4syso3">Light Mode</option></select> </div>`;
});
export {
  Page as default
};
