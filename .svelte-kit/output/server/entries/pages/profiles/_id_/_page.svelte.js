import { c as create_ssr_component, a as subscribe, d as add_attribute, f as escape } from "../../../../chunks/ssr.js";
import { p as page } from "../../../../chunks/stores.js";
import { l as loading } from "../../../../chunks/stores2.js";
const css = {
  code: ".container.svelte-s16t11 img.svelte-s16t11.svelte-s16t11{border-radius:50%;width:200px;height:200px}.container.svelte-s16t11.svelte-s16t11.svelte-s16t11{display:flex;gap:20px;align-items:center}.container.svelte-s16t11 div span.svelte-s16t11.svelte-s16t11{color:#a0a0a0}.container.svelte-s16t11>div.svelte-s16t11>div.svelte-s16t11{font-weight:700;font-size:40px}.container.svelte-s16t11>div.svelte-s16t11.svelte-s16t11{display:flex;height:100px;width:fit-content;flex-direction:column;justify-content:space-around;align-items:flex-start;padding:10px 20px;border-radius:25px}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { page } from \\"$app/stores\\";\\nimport { onMount } from \\"svelte\\";\\nimport { loading } from \\"../../../stores.ts\\";\\nlet profile = {\\n  id: \\"\\",\\n  username: \\"\\",\\n  about: \\"\\",\\n  email: \\"\\",\\n  password: \\"\\",\\n  currency: \\"\\",\\n  balance: 0\\n};\\nonMount(async () => {\\n  profile = $page.data.profile;\\n  $loading.goPast = true;\\n});\\n<\/script>\\r\\n\\r\\n<div class=\\"container\\">\\r\\n\\t<img src={profile.profilepicture} alt=\\"Pfp\\" />\\r\\n\\t<div>\\r\\n\\t\\t<div>{profile.username}</div>\\r\\n\\t\\t<span>{profile.about}</span>\\r\\n\\t</div>\\r\\n</div>\\r\\n\\r\\n<style>.container img {\\r\\n\\tborder-radius: 50%;\\r\\n\\twidth: 200px;\\r\\n\\theight: 200px;\\r\\n}\\r\\n\\r\\n.container {\\r\\n\\tdisplay: flex;\\r\\n\\tgap: 20px;\\r\\n\\talign-items: center;\\r\\n}\\r\\n\\r\\n.container div span {\\r\\n\\tcolor: #a0a0a0;\\r\\n}\\r\\n\\r\\n.container > div > div {\\r\\n\\tfont-weight: 700;\\r\\n\\tfont-size: 40px;\\r\\n}\\r\\n\\r\\n.container > div {\\r\\n\\tdisplay: flex;\\r\\n\\theight: 100px;\\r\\n\\twidth: fit-content;\\r\\n\\tflex-direction: column;\\r\\n\\tjustify-content: space-around;\\r\\n\\talign-items: flex-start;\\r\\n\\tpadding: 10px 20px;\\r\\n\\tborder-radius: 25px;\\r\\n}\\r\\n</style>\\r\\n"],"names":[],"mappings":"AA0BO,wBAAU,CAAC,+BAAI,CACrB,aAAa,CAAE,GAAG,CAClB,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,KACT,CAEA,oDAAW,CACV,OAAO,CAAE,IAAI,CACb,GAAG,CAAE,IAAI,CACT,WAAW,CAAE,MACd,CAEA,wBAAU,CAAC,GAAG,CAAC,gCAAK,CACnB,KAAK,CAAE,OACR,CAEA,wBAAU,CAAG,iBAAG,CAAG,iBAAI,CACtB,WAAW,CAAE,GAAG,CAChB,SAAS,CAAE,IACZ,CAEA,wBAAU,CAAG,+BAAI,CAChB,OAAO,CAAE,IAAI,CACb,MAAM,CAAE,KAAK,CACb,KAAK,CAAE,WAAW,CAClB,cAAc,CAAE,MAAM,CACtB,eAAe,CAAE,YAAY,CAC7B,WAAW,CAAE,UAAU,CACvB,OAAO,CAAE,IAAI,CAAC,IAAI,CAClB,aAAa,CAAE,IAChB"}'
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_loading;
  let $$unsubscribe_page;
  $$unsubscribe_loading = subscribe(loading, (value) => value);
  $$unsubscribe_page = subscribe(page, (value) => value);
  let profile = {
    id: "",
    username: "",
    about: "",
    email: "",
    password: "",
    currency: "",
    balance: 0
  };
  $$result.css.add(css);
  $$unsubscribe_loading();
  $$unsubscribe_page();
  return `<div class="container svelte-s16t11"><img${add_attribute("src", profile.profilepicture, 0)} alt="Pfp" class="svelte-s16t11"> <div class="svelte-s16t11"><div class="svelte-s16t11">${escape(profile.username)}</div> <span class="svelte-s16t11">${escape(profile.about)}</span></div> </div>`;
});
export {
  Page as default
};
