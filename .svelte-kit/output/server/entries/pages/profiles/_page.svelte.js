import { c as create_ssr_component, a as subscribe, e as each, f as escape, d as add_attribute } from "../../../chunks/ssr.js";
import { p as page } from "../../../chunks/stores.js";
import { s as settings, l as loading } from "../../../chunks/stores2.js";
const css = {
  code: ".account.svelte-1sbsmcx.svelte-1sbsmcx.svelte-1sbsmcx{display:flex;text-decoration:none;color:inherit;width:fit-content;padding:10px 15px;gap:10px;border-radius:25px}h1.dark.svelte-1sbsmcx.svelte-1sbsmcx.svelte-1sbsmcx{color:#fff}.account.svelte-1sbsmcx>div.svelte-1sbsmcx>span.svelte-1sbsmcx{color:#a0a0a0}.account.svelte-1sbsmcx>div.svelte-1sbsmcx.svelte-1sbsmcx{display:flex;flex-direction:column;justify-content:space-around}.account.dark.svelte-1sbsmcx>div.svelte-1sbsmcx>div.svelte-1sbsmcx{color:#fff}.account.svelte-1sbsmcx.svelte-1sbsmcx.svelte-1sbsmcx:hover{border:1px solid #000}.account.dark.svelte-1sbsmcx.svelte-1sbsmcx.svelte-1sbsmcx:hover{border:2px solid #fff}.account.svelte-1sbsmcx>img.svelte-1sbsmcx.svelte-1sbsmcx{width:55px;height:55px;border-radius:50%}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { onMount } from \\"svelte\\";\\nimport { page } from \\"$app/stores\\";\\nimport { loading, settings } from \\"../../stores.ts\\";\\nlet profiles = [];\\nonMount(() => {\\n  profiles = $page.data.profiles;\\n  $loading.goPast = true;\\n});\\n$:\\n  darkMode = !$settings.LightMode;\\n<\/script>\\r\\n\\r\\n<h1 class:dark={!!darkMode}>Other Users</h1>\\r\\n<div>\\r\\n\\t{#each profiles as profile (profile.id)}\\r\\n\\t\\t<div>\\r\\n\\t\\t\\t<a class=\\"account\\" href=\\"/profiles/{profile.id}\\" class:dark={!!darkMode}>\\r\\n\\t\\t\\t\\t<img src={profile.profilepicture} alt=\\"Pfp\\" />\\r\\n\\t\\t\\t\\t<div>\\r\\n\\t\\t\\t\\t\\t<div>{profile.username}</div>\\r\\n\\t\\t\\t\\t\\t<span>{profile.about}</span>\\r\\n\\t\\t\\t\\t</div>\\r\\n\\t\\t\\t</a>\\r\\n\\t\\t</div>\\r\\n\\t{/each}\\r\\n</div>\\r\\n\\r\\n<style>.account {\\r\\n\\tdisplay: flex;\\r\\n\\ttext-decoration: none;\\r\\n\\tcolor: inherit;\\r\\n\\twidth: fit-content;\\r\\n\\tpadding: 10px 15px;\\r\\n\\tgap: 10px;\\r\\n\\tborder-radius: 25px;\\r\\n}\\r\\n\\r\\nh1.dark {\\r\\n\\tcolor: #fff;\\r\\n}\\r\\n\\r\\n.account > div > span {\\r\\n\\tcolor: #a0a0a0;\\r\\n}\\r\\n\\r\\n.account > div {\\r\\n\\tdisplay: flex;\\r\\n\\tflex-direction: column;\\r\\n\\tjustify-content: space-around;\\r\\n}\\r\\n\\r\\n.account.dark > div > div {\\r\\n\\tcolor: #fff;\\r\\n}\\r\\n\\r\\n.account:hover {\\r\\n\\tborder: 1px solid #000;\\r\\n}\\r\\n\\r\\n.account.dark:hover {\\r\\n\\tborder: 2px solid #fff;\\r\\n}\\r\\n\\r\\n.account > img {\\r\\n\\twidth: 55px;\\r\\n\\theight: 55px;\\r\\n\\tborder-radius: 50%;\\r\\n}\\r\\n</style>\\r\\n"],"names":[],"mappings":"AA2BO,qDAAS,CACf,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,IAAI,CACrB,KAAK,CAAE,OAAO,CACd,KAAK,CAAE,WAAW,CAClB,OAAO,CAAE,IAAI,CAAC,IAAI,CAClB,GAAG,CAAE,IAAI,CACT,aAAa,CAAE,IAChB,CAEA,EAAE,kDAAM,CACP,KAAK,CAAE,IACR,CAEA,uBAAQ,CAAG,kBAAG,CAAG,mBAAK,CACrB,KAAK,CAAE,OACR,CAEA,uBAAQ,CAAG,iCAAI,CACd,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,eAAe,CAAE,YAClB,CAEA,QAAQ,oBAAK,CAAG,kBAAG,CAAG,kBAAI,CACzB,KAAK,CAAE,IACR,CAEA,qDAAQ,MAAO,CACd,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,IACnB,CAEA,QAAQ,kDAAK,MAAO,CACnB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,IACnB,CAEA,uBAAQ,CAAG,iCAAI,CACd,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,aAAa,CAAE,GAChB"}'
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let darkMode;
  let $settings, $$unsubscribe_settings;
  let $$unsubscribe_loading;
  let $$unsubscribe_page;
  $$unsubscribe_settings = subscribe(settings, (value) => $settings = value);
  $$unsubscribe_loading = subscribe(loading, (value) => value);
  $$unsubscribe_page = subscribe(page, (value) => value);
  let profiles = [];
  $$result.css.add(css);
  darkMode = !$settings.LightMode;
  $$unsubscribe_settings();
  $$unsubscribe_loading();
  $$unsubscribe_page();
  return `<h1 class="${["svelte-1sbsmcx", !!darkMode ? "dark" : ""].join(" ").trim()}" data-svelte-h="svelte-1nurvrq">Other Users</h1> <div>${each(profiles, (profile) => {
    return `<div><a class="${["account svelte-1sbsmcx", !!darkMode ? "dark" : ""].join(" ").trim()}" href="${"/profiles/" + escape(profile.id, true)}"><img${add_attribute("src", profile.profilepicture, 0)} alt="Pfp" class="svelte-1sbsmcx"> <div class="svelte-1sbsmcx"><div class="svelte-1sbsmcx">${escape(profile.username)}</div> <span class="svelte-1sbsmcx">${escape(profile.about)}</span> </div></a> </div>`;
  })} </div>`;
});
export {
  Page as default
};
