import { c as create_ssr_component, a as subscribe, f as escape, d as add_attribute, v as validate_component } from "../../../../../chunks/ssr.js";
import { p as page } from "../../../../../chunks/stores.js";
import { l as loading, s as settings } from "../../../../../chunks/stores2.js";
import { M as MsgsContainer, a as MsgInput } from "../../../../../chunks/MsgsContainer.js";
const css = {
  code: ".container.svelte-11yuiso.svelte-11yuiso{display:flex;flex-direction:column;justify-content:space-between;position:relative;bottom:0;left:0;right:0;height:calc(100vh - 60px)}.container.dark.svelte-11yuiso .room-title.svelte-11yuiso{color:#fff}.room-title.svelte-11yuiso.svelte-11yuiso{display:flex;justify-content:center;align-items:center;gap:2rem}.room-picture.svelte-11yuiso.svelte-11yuiso{width:4rem;height:4rem;border-radius:50%}.room-title.svelte-11yuiso span.svelte-11yuiso{font-style:italic;font-weight:600;font-size:25px}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { page } from \\"$app/stores\\";\\nimport { onMount } from \\"svelte\\";\\nimport { loading, settings } from \\"../../../../stores.ts\\";\\nimport MsgInput from \\"$lib/components/MsgInput.svelte\\";\\nimport MsgsContainer from \\"$lib/components/MsgsContainer.svelte\\";\\nconst id = $page.params.id;\\nlet peer = {};\\nlet messages = [];\\nlet socket;\\n$:\\n  darkMode = !$settings.LightMode;\\nonMount(() => {\\n  socket = new WebSocket(`ws://localhost:7000/api/socket/${id}`);\\n  socket.onopen = () => {\\n    socket.onmessage = ({ data }) => {\\n      let message = JSON.parse(data);\\n      message.shortened = message.text.length > 1400;\\n      messages = [...messages, message];\\n    };\\n  };\\n  messages = $page.data.messages;\\n  peer = $page.data.peer;\\n  $loading.goPast = true;\\n});\\n<\/script>\\r\\n\\r\\n<svelte:head>\\r\\n\\t<title>{peer.username}</title>\\r\\n</svelte:head>\\r\\n\\r\\n<div class=\\"container\\" class:dark={!!darkMode}>\\r\\n\\t<div class=\\"room-title\\">\\r\\n\\t\\t<img src={peer.profilepicture} alt=\\"pfp\\" class=\\"room-picture\\" />\\r\\n\\t\\t<span>{peer.username}</span>\\r\\n\\t</div>\\r\\n\\t{#if messages.length > 0}\\r\\n\\t\\t<MsgsContainer {messages} currentRoomMembers={[$page.data.USER, peer]} />\\r\\n\\t{/if}\\r\\n\\t<MsgInput {id} {socket} />\\r\\n</div>\\r\\n\\r\\n<style>.container {\\r\\n\\tdisplay: flex;\\r\\n\\tflex-direction: column;\\r\\n\\tjustify-content: space-between;\\r\\n\\tposition: relative;\\r\\n\\tbottom: 0;\\r\\n\\tleft: 0;\\r\\n\\tright: 0;\\r\\n\\theight: calc(100vh - 60px);\\r\\n}\\r\\n.container.dark .msg-content {\\r\\n\\tcolor: #fff;\\r\\n\\tbackground: #303030;\\r\\n}\\r\\n.container.dark .sent-by-me {\\r\\n\\tbackground: #02042a;\\r\\n}\\r\\n.container.dark .room-title {\\r\\n\\tcolor: #fff;\\r\\n}\\r\\n.room-title {\\r\\n\\tdisplay: flex;\\r\\n\\tjustify-content: center;\\r\\n\\talign-items: center;\\r\\n\\tgap: 2rem;\\r\\n}\\r\\n.room-picture {\\r\\n\\twidth: 4rem;\\r\\n\\theight: 4rem;\\r\\n\\tborder-radius: 50%;\\r\\n}\\r\\n.room-title span {\\r\\n\\tfont-style: italic;\\r\\n\\tfont-weight: 600;\\r\\n\\tfont-size: 25px;\\r\\n}\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAyCO,wCAAW,CACjB,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,eAAe,CAAE,aAAa,CAC9B,QAAQ,CAAE,QAAQ,CAClB,MAAM,CAAE,CAAC,CACT,IAAI,CAAE,CAAC,CACP,KAAK,CAAE,CAAC,CACR,MAAM,CAAE,KAAK,KAAK,CAAC,CAAC,CAAC,IAAI,CAC1B,CAQA,UAAU,oBAAK,CAAC,0BAAY,CAC3B,KAAK,CAAE,IACR,CACA,yCAAY,CACX,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MAAM,CACnB,GAAG,CAAE,IACN,CACA,2CAAc,CACb,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,aAAa,CAAE,GAChB,CACA,0BAAW,CAAC,mBAAK,CAChB,UAAU,CAAE,MAAM,CAClB,WAAW,CAAE,GAAG,CAChB,SAAS,CAAE,IACZ"}'
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let darkMode;
  let $$unsubscribe_loading;
  let $page, $$unsubscribe_page;
  let $settings, $$unsubscribe_settings;
  $$unsubscribe_loading = subscribe(loading, (value) => value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_settings = subscribe(settings, (value) => $settings = value);
  const id = $page.params.id;
  let peer = {};
  let messages = [];
  let socket;
  $$result.css.add(css);
  darkMode = !$settings.LightMode;
  $$unsubscribe_loading();
  $$unsubscribe_page();
  $$unsubscribe_settings();
  return `${$$result.head += `<!-- HEAD_svelte-qejvw_START -->${$$result.title = `<title>${escape(peer.username)}</title>`, ""}<!-- HEAD_svelte-qejvw_END -->`, ""} <div class="${["container svelte-11yuiso", !!darkMode ? "dark" : ""].join(" ").trim()}"><div class="room-title svelte-11yuiso"><img${add_attribute("src", peer.profilepicture, 0)} alt="pfp" class="room-picture svelte-11yuiso"> <span class="svelte-11yuiso">${escape(peer.username)}</span></div> ${messages.length > 0 ? `${validate_component(MsgsContainer, "MsgsContainer").$$render(
    $$result,
    {
      messages,
      currentRoomMembers: [$page.data.USER, peer]
    },
    {},
    {}
  )}` : ``} ${validate_component(MsgInput, "MsgInput").$$render($$result, { id, socket }, {}, {})} </div>`;
});
export {
  Page as default
};
