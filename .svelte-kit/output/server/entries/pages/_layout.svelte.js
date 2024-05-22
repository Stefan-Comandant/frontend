import { c as create_ssr_component, a as subscribe, b as set_store_value, e as each, d as add_attribute, f as escape, o as onDestroy, v as validate_component } from "../../chunks/ssr.js";
import { p as page } from "../../chunks/stores.js";
import { l as loading, s as settings } from "../../chunks/stores2.js";
import "../../chunks/client.js";
const css$1 = {
  code: "img.svelte-1bx3tks.svelte-1bx3tks{width:42px;height:42px;border-radius:50%}nav.svelte-1bx3tks.svelte-1bx3tks{min-height:fit-content;height:60px;width:100%;display:flex;justify-content:space-around;align-items:center;border-bottom:1px solid #b0b0b0;overflow-x:scroll;z-index:1000;background:#fff}nav.svelte-1bx3tks.svelte-1bx3tks::-webkit-scrollbar{display:none}nav.dark.svelte-1bx3tks.svelte-1bx3tks{border-bottom:2px solid #d6d6d6;background:#02042a}nav.svelte-1bx3tks a.svelte-1bx3tks{text-decoration:none;color:#000;border-radius:20px;padding:10px 20px;height:fit-content}nav.svelte-1bx3tks a.dark.svelte-1bx3tks{color:#fff}.active.svelte-1bx3tks.svelte-1bx3tks{background:#d6d6d6}.active.dark.svelte-1bx3tks.svelte-1bx3tks{background:rgba(255, 255, 255, 0.2)}.bar.svelte-1bx3tks.svelte-1bx3tks{width:100%;height:4px}.line.svelte-1bx3tks.svelte-1bx3tks{width:0;max-width:100%;height:4px;background:red;transition:all 800ms}",
  map: '{"version":3,"file":"Navbar.svelte","sources":["Navbar.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { settings, loading } from \\"../../stores.ts\\";\\nexport let page = {};\\n$:\\n  darkMode = !$settings.LightMode;\\nconst options = [\\n  {\\n    route: \\"/chats\\",\\n    text: \\"Chats\\"\\n  },\\n  {\\n    route: \\"/login\\",\\n    text: \\"Login\\"\\n  },\\n  {\\n    route: \\"/register\\",\\n    text: \\"Register\\"\\n  },\\n  {\\n    route: \\"/profiles\\",\\n    text: \\"Profiles\\"\\n  },\\n  {\\n    route: \\"/settings\\",\\n    text: \\"Settings\\"\\n  }\\n];\\nlet intervalMs = 200;\\nlet multiplier = 0;\\nloading.subscribe((value) => {\\n  if (value.loading) {\\n    const interval = setInterval(() => {\\n      if (multiplier !== 6 || value.goPast)\\n        multiplier++;\\n      if ($loading.goPast)\\n        intervalMs = 100;\\n      if (multiplier == 12) {\\n        clearInterval(interval);\\n        multiplier = 0;\\n        $loading.goPast = false;\\n        $loading.loading = false;\\n      }\\n    }, intervalMs);\\n  }\\n});\\n<\/script>\\r\\n\\r\\n{#if Object.keys(page.data.USER).length}\\r\\n\\t<nav class:dark={!!darkMode}>\\r\\n\\t\\t{#each options as option}\\r\\n\\t\\t\\t<a class:dark={!!darkMode} href={option.route} class:active={page.route.id === option.route}\\r\\n\\t\\t\\t\\t>{option.text}</a\\r\\n\\t\\t\\t>\\r\\n\\t\\t{/each}\\r\\n\\t\\t<img src={page.data.USER.profilepicture} alt=\\"Pfp\\" />\\r\\n\\t</nav>\\r\\n{/if}\\r\\n{#if $loading.loading}\\r\\n\\t<div class=\\"bar\\">\\r\\n\\t\\t<div class=\\"line\\" style=\\"width: {10 * multiplier}%\\" />\\r\\n\\t</div>\\r\\n{/if}\\r\\n\\r\\n<style>\\r\\n\\timg {\\r\\n\\t\\twidth: 42px;\\r\\n\\t\\theight: 42px;\\r\\n\\t\\tborder-radius: 50%;\\r\\n\\t}\\r\\n\\r\\n\\tnav {\\r\\n\\t\\tmin-height: fit-content;\\r\\n\\t\\theight: 60px;\\r\\n\\t\\twidth: 100%;\\r\\n\\t\\tdisplay: flex;\\r\\n\\t\\tjustify-content: space-around;\\r\\n\\t\\talign-items: center;\\r\\n\\t\\tborder-bottom: 1px solid #b0b0b0;\\r\\n\\t\\toverflow-x: scroll;\\r\\n\\t\\tz-index: 1000;\\r\\n\\t\\tbackground: #fff;\\r\\n\\t}\\r\\n\\r\\n\\tnav::-webkit-scrollbar {\\r\\n\\t\\tdisplay: none;\\r\\n\\t}\\r\\n\\r\\n\\tnav.dark {\\r\\n\\t\\tborder-bottom: 2px solid #d6d6d6;\\r\\n\\t\\tbackground: #02042a;\\r\\n\\t}\\r\\n\\r\\n\\tnav a {\\r\\n\\t\\ttext-decoration: none;\\r\\n\\t\\tcolor: #000;\\r\\n\\t\\tborder-radius: 20px;\\r\\n\\t\\tpadding: 10px 20px;\\r\\n\\t\\theight: fit-content;\\r\\n\\t}\\r\\n\\r\\n\\tnav a.dark {\\r\\n\\t\\tcolor: #fff;\\r\\n\\t}\\r\\n\\r\\n\\t.active {\\r\\n\\t\\tbackground: #d6d6d6;\\r\\n\\t}\\r\\n\\r\\n\\t.active.dark {\\r\\n\\t\\tbackground: rgba(255, 255, 255, 0.2);\\r\\n\\t}\\r\\n\\r\\n\\t.bar {\\r\\n\\t\\twidth: 100%;\\r\\n\\t\\theight: 4px;\\r\\n\\t}\\r\\n\\r\\n\\t.line {\\r\\n\\t\\twidth: 0;\\r\\n\\t\\tmax-width: 100%;\\r\\n\\t\\theight: 4px;\\r\\n\\t\\tbackground: red;\\r\\n\\t\\ttransition: all 800ms;\\r\\n\\t}\\r\\n</style>\\r\\n"],"names":[],"mappings":"AA+DC,iCAAI,CACH,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,aAAa,CAAE,GAChB,CAEA,iCAAI,CACH,UAAU,CAAE,WAAW,CACvB,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,YAAY,CAC7B,WAAW,CAAE,MAAM,CACnB,aAAa,CAAE,GAAG,CAAC,KAAK,CAAC,OAAO,CAChC,UAAU,CAAE,MAAM,CAClB,OAAO,CAAE,IAAI,CACb,UAAU,CAAE,IACb,CAEA,iCAAG,mBAAoB,CACtB,OAAO,CAAE,IACV,CAEA,GAAG,mCAAM,CACR,aAAa,CAAE,GAAG,CAAC,KAAK,CAAC,OAAO,CAChC,UAAU,CAAE,OACb,CAEA,kBAAG,CAAC,gBAAE,CACL,eAAe,CAAE,IAAI,CACrB,KAAK,CAAE,IAAI,CACX,aAAa,CAAE,IAAI,CACnB,OAAO,CAAE,IAAI,CAAC,IAAI,CAClB,MAAM,CAAE,WACT,CAEA,kBAAG,CAAC,CAAC,oBAAM,CACV,KAAK,CAAE,IACR,CAEA,qCAAQ,CACP,UAAU,CAAE,OACb,CAEA,OAAO,mCAAM,CACZ,UAAU,CAAE,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CACpC,CAEA,kCAAK,CACJ,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,GACT,CAEA,mCAAM,CACL,KAAK,CAAE,CAAC,CACR,SAAS,CAAE,IAAI,CACf,MAAM,CAAE,GAAG,CACX,UAAU,CAAE,GAAG,CACf,UAAU,CAAE,GAAG,CAAC,KACjB"}'
};
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let darkMode;
  let $loading, $$unsubscribe_loading;
  let $settings, $$unsubscribe_settings;
  $$unsubscribe_loading = subscribe(loading, (value) => $loading = value);
  $$unsubscribe_settings = subscribe(settings, (value) => $settings = value);
  let { page: page2 = {} } = $$props;
  const options = [
    { route: "/chats", text: "Chats" },
    { route: "/login", text: "Login" },
    { route: "/register", text: "Register" },
    { route: "/profiles", text: "Profiles" },
    { route: "/settings", text: "Settings" }
  ];
  let intervalMs = 200;
  let multiplier = 0;
  loading.subscribe((value) => {
    if (value.loading) {
      const interval = setInterval(
        () => {
          if (multiplier !== 6 || value.goPast)
            multiplier++;
          if ($loading.goPast)
            intervalMs = 100;
          if (multiplier == 12) {
            clearInterval(interval);
            multiplier = 0;
            set_store_value(loading, $loading.goPast = false, $loading);
            set_store_value(loading, $loading.loading = false, $loading);
          }
        },
        intervalMs
      );
    }
  });
  if ($$props.page === void 0 && $$bindings.page && page2 !== void 0)
    $$bindings.page(page2);
  $$result.css.add(css$1);
  darkMode = !$settings.LightMode;
  $$unsubscribe_loading();
  $$unsubscribe_settings();
  return `${Object.keys(page2.data.USER).length ? `<nav class="${["svelte-1bx3tks", !!darkMode ? "dark" : ""].join(" ").trim()}">${each(options, (option) => {
    return `<a${add_attribute("href", option.route, 0)} class="${[
      "svelte-1bx3tks",
      (!!darkMode ? "dark" : "") + " " + (page2.route.id === option.route ? "active" : "")
    ].join(" ").trim()}">${escape(option.text)}</a>`;
  })} <img${add_attribute("src", page2.data.USER.profilepicture, 0)} alt="Pfp" class="svelte-1bx3tks"></nav>` : ``} ${$loading.loading ? `<div class="bar svelte-1bx3tks"><div class="line svelte-1bx3tks" style="${"width: " + escape(10 * multiplier, true) + "%"}"></div></div>` : ``}`;
});
const css = {
  code: ".svelte-bos9wu{font-family:Arial;box-sizing:border-box;padding:0;margin:0}header.svelte-bos9wu{height:60px;z-index:1000;position:fixed;top:0;left:0;right:0}main.svelte-bos9wu{padding-top:60px}body{background:#121212}",
  map: '{"version":3,"file":"+layout.svelte","sources":["+layout.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { page } from \\"$app/stores\\";\\nimport Navbar from \\"$lib/components/Navbar.svelte\\";\\nimport { onDestroy, onMount } from \\"svelte\\";\\nimport { loading, settings } from \\"../stores.ts\\";\\nimport { beforeNavigate } from \\"$app/navigation\\";\\nlet unsubscribe = () => {\\n};\\nlet setting = {\\n  LightMode: true\\n};\\nonMount(() => {\\n  const result = localStorage.getItem(\\"settings\\");\\n  if (result) {\\n    setting = JSON.parse(String(result));\\n  }\\n  if ($settings !== setting) {\\n    settings.update(() => setting);\\n  }\\n  unsubscribe = settings.subscribe((value) => {\\n    const backgroundColor = value.LightMode ? \\"#ffffff\\" : \\"#121212\\";\\n    document.body.style.backgroundColor = backgroundColor;\\n  });\\n});\\nonDestroy(() => {\\n  unsubscribe();\\n});\\nbeforeNavigate(() => {\\n  loading.update(() => {\\n    return {\\n      loading: true,\\n      goPast: false\\n    };\\n  });\\n});\\n<\/script>\\r\\n\\r\\n<header>\\r\\n\\t<Navbar page={$page} />\\r\\n</header>\\r\\n\\r\\n<main>\\r\\n\\t<slot />\\r\\n</main>\\r\\n\\r\\n<style>\\r\\n\\t* {\\r\\n\\t\\tfont-family: Arial;\\r\\n\\t\\tbox-sizing: border-box;\\r\\n\\t\\tpadding: 0;\\r\\n\\t\\tmargin: 0;\\r\\n\\t}\\r\\n\\r\\n\\theader {\\r\\n\\t\\theight: 60px;\\r\\n\\t\\tz-index: 1000;\\r\\n\\t\\tposition: fixed;\\r\\n\\t\\ttop: 0;\\r\\n\\t\\tleft: 0;\\r\\n\\t\\tright: 0;\\r\\n\\t}\\r\\n\\r\\n\\tmain {\\r\\n\\t\\tpadding-top: 60px;\\r\\n\\t}\\r\\n\\r\\n\\t:global(body) {\\r\\n\\t\\tbackground: #121212;\\r\\n\\t}\\r\\n</style>\\r\\n"],"names":[],"mappings":"AA6CC,cAAE,CACD,WAAW,CAAE,KAAK,CAClB,UAAU,CAAE,UAAU,CACtB,OAAO,CAAE,CAAC,CACV,MAAM,CAAE,CACT,CAEA,oBAAO,CACN,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,IAAI,CACb,QAAQ,CAAE,KAAK,CACf,GAAG,CAAE,CAAC,CACN,IAAI,CAAE,CAAC,CACP,KAAK,CAAE,CACR,CAEA,kBAAK,CACJ,WAAW,CAAE,IACd,CAEQ,IAAM,CACb,UAAU,CAAE,OACb"}'
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_settings;
  let $page, $$unsubscribe_page;
  $$unsubscribe_settings = subscribe(settings, (value) => value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  onDestroy(() => {
  });
  $$result.css.add(css);
  $$unsubscribe_settings();
  $$unsubscribe_page();
  return `<header class="svelte-bos9wu">${validate_component(Navbar, "Navbar").$$render($$result, { page: $page }, {}, {})}</header> <main class="svelte-bos9wu">${slots.default ? slots.default({}) : ``} </main>`;
});
export {
  Layout as default
};
