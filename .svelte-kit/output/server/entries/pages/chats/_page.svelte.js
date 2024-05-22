import { c as create_ssr_component, a as subscribe, f as escape, e as each, d as add_attribute } from "../../../chunks/ssr.js";
import { p as page } from "../../../chunks/stores.js";
import { s as settings, l as loading } from "../../../chunks/stores2.js";
import { f as formatDate } from "../../../chunks/users.js";
import "../../../chunks/client.js";
const css = {
  code: ".popup.svelte-fs8jkx.svelte-fs8jkx.svelte-fs8jkx.svelte-fs8jkx{margin:0;padding:0;border:none}.popup.svelte-fs8jkx div.svelte-fs8jkx.svelte-fs8jkx.svelte-fs8jkx{display:flex;flex-direction:column}.room-container.svelte-fs8jkx a.svelte-fs8jkx.svelte-fs8jkx.svelte-fs8jkx{display:flex;align-items:center;gap:1rem}.room.svelte-fs8jkx.svelte-fs8jkx.svelte-fs8jkx.svelte-fs8jkx{border-radius:10px;border:#000 solid 1px;width:fit-content;min-width:425px;padding:15px 21px;text-decoration:none;color:inherit}.room.dark.svelte-fs8jkx.svelte-fs8jkx.svelte-fs8jkx.svelte-fs8jkx{border:2px solid #fff}.room.dark.svelte-fs8jkx>div.svelte-fs8jkx.svelte-fs8jkx.svelte-fs8jkx{color:#fff}.room.svelte-fs8jkx span.svelte-fs8jkx.svelte-fs8jkx.svelte-fs8jkx{color:#b0b0b0;font-size:12px}.convo-switch.svelte-fs8jkx.svelte-fs8jkx.svelte-fs8jkx.svelte-fs8jkx{background:#000000;border:1px solid rgba(0, 0, 0, 0);cursor:pointer;color:#fff;border-radius:20px}.convo-switch.active.svelte-fs8jkx.svelte-fs8jkx.svelte-fs8jkx.svelte-fs8jkx{background:#fff;color:#121212;border:2px solid #121212}.details.svelte-fs8jkx>div.svelte-fs8jkx>div.svelte-fs8jkx.svelte-fs8jkx,.details.svelte-fs8jkx>div.svelte-fs8jkx>span.svelte-fs8jkx.svelte-fs8jkx{color:#121212}dialog.svelte-fs8jkx.svelte-fs8jkx.svelte-fs8jkx.svelte-fs8jkx{min-width:fit-content;min-height:fit-content}dialog.dark.svelte-fs8jkx.svelte-fs8jkx.svelte-fs8jkx.svelte-fs8jkx{background:#121212;border:2px solid #fff}dialog.dark.svelte-fs8jkx .account.svelte-fs8jkx.svelte-fs8jkx.svelte-fs8jkx{border:2px solid #fff}dialog.dark.svelte-fs8jkx .details.svelte-fs8jkx>div.svelte-fs8jkx>div.svelte-fs8jkx,dialog.dark.svelte-fs8jkx .details.svelte-fs8jkx>div.svelte-fs8jkx>span.svelte-fs8jkx{color:#fff}.account.svelte-fs8jkx.svelte-fs8jkx.svelte-fs8jkx.svelte-fs8jkx{border:2px solid #121212;border-radius:25px;width:20rem;min-width:fit-content;padding:0.8rem 1.8rem;display:flex;justify-content:space-between}.details.svelte-fs8jkx.svelte-fs8jkx.svelte-fs8jkx.svelte-fs8jkx{display:flex;gap:1rem}.details.svelte-fs8jkx img.svelte-fs8jkx.svelte-fs8jkx.svelte-fs8jkx{width:55px;height:55px;border-radius:50%}.pfp-input-container.svelte-fs8jkx.svelte-fs8jkx.svelte-fs8jkx.svelte-fs8jkx{display:flex;justify-content:space-between;align-items:center;gap:20px}.pfp-input-container.svelte-fs8jkx img.svelte-fs8jkx.svelte-fs8jkx.svelte-fs8jkx{width:60px;height:60px;border:1px solid black;border-radius:50%}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">import {} from \\"$lib/interfaces.ts\\";\\nimport { page } from \\"$app/stores\\";\\nimport { onMount } from \\"svelte\\";\\nimport { loading, settings } from \\"../../stores.ts\\";\\nimport { formatDate, getPeer } from \\"$lib/users.ts\\";\\nimport { AddChatRoom } from \\"$lib/chat-rooms.ts\\";\\nimport { goto } from \\"$app/navigation\\";\\nlet groups = [];\\nlet chats = [];\\nlet USER = {};\\nlet users = [];\\nlet dialog;\\nlet modal;\\nlet usersModal;\\nlet selectMode = \\"view\\";\\nlet selectedRoom = { admins: [], owner: \\"\\" };\\nonMount(() => {\\n  groups = $page.data.groups;\\n  chats = $page.data.chats;\\n  USER = $page.data.USER;\\n  users = $page.data.users;\\n  $loading.goPast = true;\\n});\\n$:\\n  darkMode = !$settings.LightMode;\\nlet convos = \\"rooms\\";\\n<\/script>\\r\\n\\r\\n<div>\\r\\n\\t<button\\r\\n\\t\\tclass=\\"convo-switch {convos == 'rooms' ? 'active' : ''}\\"\\r\\n\\t\\ton:click={() => {\\r\\n\\t\\t\\tconvos = 'rooms';\\r\\n\\t\\t}}>Rooms</button\\r\\n\\t>\\r\\n\\t<button\\r\\n\\t\\tclass=\\"convo-switch {convos == 'chats' ? 'active' : ''}\\"\\r\\n\\t\\ton:click={() => {\\r\\n\\t\\t\\tconvos = 'chats';\\r\\n\\t\\t}}>Chats</button\\r\\n\\t>\\r\\n\\t{#if convos == 'rooms'}\\r\\n\\t\\t{#each groups as group (group.id)}\\r\\n\\t\\t\\t<div class=\\"room-container\\" class:dark={!!darkMode}>\\r\\n\\t\\t\\t\\t<a\\r\\n\\t\\t\\t\\t\\tclass=\\"room\\"\\r\\n\\t\\t\\t\\t\\tclass:dark={!!darkMode}\\r\\n\\t\\t\\t\\t\\thref=\\"/chats/group/{group.id}\\"\\r\\n\\t\\t\\t\\t\\ton:contextmenu|preventDefault={async (event) => {\\r\\n\\t\\t\\t\\t\\t\\tdialog.show();\\r\\n\\r\\n\\t\\t\\t\\t\\t\\tselectedRoom = group;\\r\\n\\r\\n\\t\\t\\t\\t\\t\\tdialog.style.top = event.pageY + 'px';\\r\\n\\t\\t\\t\\t\\t\\tdialog.style.left = event.pageX + 'px';\\r\\n\\t\\t\\t\\t\\t}}\\r\\n\\t\\t\\t\\t>\\r\\n\\t\\t\\t\\t\\t<div class=\\"pfp-input-container\\">\\r\\n\\t\\t\\t\\t\\t\\t<img src={group.profilepicture} alt=\\"pfp\\" class=\\"room-picture\\" />\\r\\n\\t\\t\\t\\t\\t</div>\\r\\n\\t\\t\\t\\t\\t<div>\\r\\n\\t\\t\\t\\t\\t\\t<div>{group.title}</div>\\r\\n\\t\\t\\t\\t\\t\\t<span>{group.description ? group.description : 'No description'}</span>\\r\\n\\t\\t\\t\\t\\t</div>\\r\\n\\t\\t\\t\\t</a>\\r\\n\\t\\t\\t</div>\\r\\n\\t\\t\\t<br />\\r\\n\\t\\t{/each}\\r\\n\\t{:else}\\r\\n\\t\\t{#each chats as chat (chat.id)}\\r\\n\\t\\t\\t<div class=\\"room-container\\" class:dark={!!darkMode}>\\r\\n\\t\\t\\t\\t<a\\r\\n\\t\\t\\t\\t\\tclass=\\"room\\"\\r\\n\\t\\t\\t\\t\\tclass:dark={!!darkMode}\\r\\n\\t\\t\\t\\t\\thref=\\"/chats/direct/{chat.id}\\"\\r\\n\\t\\t\\t\\t\\tstyle=\\"flex-direction: column; align-items: flex-start; gap\\"\\r\\n\\t\\t\\t\\t>\\r\\n\\t\\t\\t\\t\\t<div>{getPeer(users, chat.members, USER).username}</div>\\r\\n\\t\\t\\t\\t\\t<span\\r\\n\\t\\t\\t\\t\\t\\t>{getPeer(users, chat.members, USER).about\\r\\n\\t\\t\\t\\t\\t\\t\\t? getPeer(users, chat.members, USER).about\\r\\n\\t\\t\\t\\t\\t\\t\\t: 'Masturbez!'}</span\\r\\n\\t\\t\\t\\t\\t>\\r\\n\\t\\t\\t\\t</a>\\r\\n\\t\\t\\t</div>\\r\\n\\t\\t\\t<br />\\r\\n\\t\\t{/each}{/if}\\r\\n</div>\\r\\n\\r\\n<dialog class=\\"popup\\" bind:this={dialog}>\\r\\n\\t<div>\\r\\n\\t\\t{#if USER.id && selectedRoom.admins?.includes(USER.id)}\\r\\n\\t\\t\\t<button on:click={() => modal.showModal()}>Edit Room</button>\\r\\n\\t\\t{/if}\\r\\n\\t\\t{#if USER.id && selectedRoom.owner === USER.id}\\r\\n\\t\\t\\t<button>Delete Room</button>\\r\\n\\t\\t{/if}\\r\\n\\t\\t<button>Quit Room</button>\\r\\n\\t</div>\\r\\n</dialog>\\r\\n\\r\\n{#if selectedRoom}\\r\\n\\t<dialog bind:this={modal}>\\r\\n\\t\\t{#if selectMode === 'view'}\\r\\n\\t\\t\\t<span>Title</span>\\r\\n\\t\\t\\t<div>{selectedRoom.title}</div>\\r\\n\\t\\t{:else}\\r\\n\\t\\t\\t<label for=\\"title-input\\">Title</label>\\r\\n\\t\\t\\t<input type=\\"text\\" id=\\"title-input\\" />\\r\\n\\t\\t{/if}\\r\\n\\t\\t{#if selectMode === 'view' && selectedRoom.description}\\r\\n\\t\\t\\t<span>Description</span>\\r\\n\\t\\t\\t<div>{selectedRoom.description}</div>\\r\\n\\t\\t{:else if selectedRoom.description}\\r\\n\\t\\t\\t<label for=\\"title-input\\">Description</label>\\r\\n\\t\\t\\t<input type=\\"text\\" id=\\"title-input\\" />\\r\\n\\t\\t{/if}\\r\\n\\t\\t<span>Created At</span>\\r\\n\\t\\t<div>\\r\\n\\t\\t\\t{formatDate(String(selectedRoom.createdat)).ofDay} on {formatDate(\\r\\n\\t\\t\\t\\tString(selectedRoom.createdat)\\r\\n\\t\\t\\t).ofYear}\\r\\n\\t\\t</div>\\r\\n\\t\\t<span>Owner</span>\\r\\n\\t\\t<div>{selectedRoom.ownerData?.username}</div>\\r\\n\\t</dialog>\\r\\n{/if}\\r\\n\\r\\n{#if convos == 'rooms'}\\r\\n\\t<a href=\\"/chats/new\\">Create New Room</a>\\r\\n{:else}\\r\\n\\t<button\\r\\n\\t\\ttype=\\"button\\"\\r\\n\\t\\ton:click={() => {\\r\\n\\t\\t\\tusersModal.open ? usersModal.close() : usersModal.showModal();\\r\\n\\t\\t}}>New Chat</button\\r\\n\\t>\\r\\n{/if}\\r\\n\\r\\n<dialog bind:this={usersModal} class:dark={!!darkMode}>\\r\\n\\t<div style=\\"display: flex; flex-direction: column; gap: 1.2rem\\">\\r\\n\\t\\t{#each [...users] as user (user.id)}\\r\\n\\t\\t\\t<div class=\\"account\\">\\r\\n\\t\\t\\t\\t<div class=\\"details\\">\\r\\n\\t\\t\\t\\t\\t<img class=\\"profile-picture\\" alt=\\"Pfp\\" src={user.profilepicture} />\\r\\n\\t\\t\\t\\t\\t<div>\\r\\n\\t\\t\\t\\t\\t\\t<div>{user.username}</div>\\r\\n\\t\\t\\t\\t\\t\\t<span>{user.about}</span>\\r\\n\\t\\t\\t\\t\\t</div>\\r\\n\\t\\t\\t\\t</div>\\r\\n\\t\\t\\t\\t<div>\\r\\n\\t\\t\\t\\t\\t<button\\r\\n\\t\\t\\t\\t\\t\\ttype=\\"button\\"\\r\\n\\t\\t\\t\\t\\t\\ton:click={async () => {\\r\\n\\t\\t\\t\\t\\t\\t\\tconst response = await AddChatRoom({\\r\\n\\t\\t\\t\\t\\t\\t\\t\\ttitle: 'Direct Conversation',\\r\\n\\t\\t\\t\\t\\t\\t\\t\\tdescription: '',\\r\\n\\t\\t\\t\\t\\t\\t\\t\\tmembers: [user.id ? user.id : ''],\\r\\n\\t\\t\\t\\t\\t\\t\\t\\tadmins: [],\\r\\n\\t\\t\\t\\t\\t\\t\\t\\tmessages: [],\\r\\n\\t\\t\\t\\t\\t\\t\\t\\ttype: 'direct'\\r\\n\\t\\t\\t\\t\\t\\t\\t});\\r\\n\\r\\n\\t\\t\\t\\t\\t\\t\\tif (response.status === 'success') {\\r\\n\\t\\t\\t\\t\\t\\t\\t\\tgoto(\`/chats/direct/\${response.id}\`);\\r\\n\\t\\t\\t\\t\\t\\t\\t}\\r\\n\\t\\t\\t\\t\\t\\t}}>New Chat</button\\r\\n\\t\\t\\t\\t\\t>\\r\\n\\t\\t\\t\\t</div>\\r\\n\\t\\t\\t</div>\\r\\n\\t\\t{/each}\\r\\n\\t</div>\\r\\n</dialog>\\r\\n\\r\\n<style>.popup {\\r\\n\\tmargin: 0;\\r\\n\\tpadding: 0;\\r\\n\\tborder: none;\\r\\n}\\r\\n\\r\\n.popup div {\\r\\n\\tdisplay: flex;\\r\\n\\tflex-direction: column;\\r\\n}\\r\\n\\r\\n.room-container a {\\r\\n\\tdisplay: flex;\\r\\n\\talign-items: center;\\r\\n\\tgap: 1rem;\\r\\n}\\r\\n\\r\\n.room {\\r\\n\\tborder-radius: 10px;\\r\\n\\tborder: #000 solid 1px;\\r\\n\\twidth: fit-content;\\r\\n\\tmin-width: 425px;\\r\\n\\tpadding: 15px 21px;\\r\\n\\ttext-decoration: none;\\r\\n\\tcolor: inherit;\\r\\n}\\r\\n\\r\\n.room.dark {\\r\\n\\tborder: 2px solid #fff;\\r\\n}\\r\\n\\r\\n.room.dark > div {\\r\\n\\tcolor: #fff;\\r\\n}\\r\\n\\r\\n.room span {\\r\\n\\tcolor: #b0b0b0;\\r\\n\\tfont-size: 12px;\\r\\n}\\r\\n\\r\\n.convo-switch {\\r\\n\\tbackground: #000000;\\r\\n\\tborder: 1px solid rgba(0, 0, 0, 0);\\r\\n\\tcursor: pointer;\\r\\n\\tcolor: #fff;\\r\\n\\tborder-radius: 20px;\\r\\n}\\r\\n\\r\\n.convo-switch.active {\\r\\n\\tbackground: #fff;\\r\\n\\tcolor: #121212;\\r\\n\\tborder: 2px solid #121212;\\r\\n}\\r\\n\\r\\n.details > div > div,\\r\\n.details > div > span {\\r\\n\\tcolor: #121212;\\r\\n}\\r\\n\\r\\n.check > div {\\r\\n\\tcolor: #121212;\\r\\n}\\r\\n\\r\\ndialog {\\r\\n\\tmin-width: fit-content;\\r\\n\\tmin-height: fit-content;\\r\\n}\\r\\n\\r\\ndialog.dark {\\r\\n\\tbackground: #121212;\\r\\n\\tborder: 2px solid #fff;\\r\\n}\\r\\n\\r\\ndialog.dark .account {\\r\\n\\tborder: 2px solid #fff;\\r\\n}\\r\\n\\r\\ndialog.dark .details > div > div,\\r\\ndialog.dark .details > div > span {\\r\\n\\tcolor: #fff;\\r\\n}\\r\\n\\r\\n.account {\\r\\n\\tborder: 2px solid #121212;\\r\\n\\tborder-radius: 25px;\\r\\n\\twidth: 20rem;\\r\\n\\tmin-width: fit-content;\\r\\n\\tpadding: 0.8rem 1.8rem;\\r\\n\\tdisplay: flex;\\r\\n\\tjustify-content: space-between;\\r\\n}\\r\\n\\r\\n.details {\\r\\n\\tdisplay: flex;\\r\\n\\tgap: 1rem;\\r\\n}\\r\\n\\r\\ndialog.dark .check > div {\\r\\n\\tcolor: #ffffff;\\r\\n}\\r\\n\\r\\n.details img {\\r\\n\\twidth: 55px;\\r\\n\\theight: 55px;\\r\\n\\tborder-radius: 50%;\\r\\n}\\r\\n\\r\\n.checks {\\r\\n\\theight: 58px;\\r\\n\\tdisplay: flex;\\r\\n\\tflex-direction: column;\\r\\n\\tjustify-content: space-between;\\r\\n}\\r\\n\\r\\n.check {\\r\\n\\tdisplay: flex;\\r\\n\\talign-items: center;\\r\\n\\tjustify-content: space-between;\\r\\n}\\r\\n\\r\\n.pfp-input-container {\\r\\n\\tdisplay: flex;\\r\\n\\tjustify-content: space-between;\\r\\n\\talign-items: center;\\r\\n\\tgap: 20px;\\r\\n}\\r\\n\\r\\n.pfp-input-container label {\\r\\n\\tfont-size: 20px;\\r\\n\\tcolor: #a0a0a0;\\r\\n}\\r\\n\\r\\n.pfp-input-container input {\\r\\n\\tdisplay: none;\\r\\n}\\r\\n\\r\\n.pfp-input-container img {\\r\\n\\twidth: 60px;\\r\\n\\theight: 60px;\\r\\n\\tborder: 1px solid black;\\r\\n\\tborder-radius: 50%;\\r\\n}\\r\\n</style>\\r\\n"],"names":[],"mappings":"AA8KO,8DAAO,CACb,MAAM,CAAE,CAAC,CACT,OAAO,CAAE,CAAC,CACV,MAAM,CAAE,IACT,CAEA,oBAAM,CAAC,6CAAI,CACV,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MACjB,CAEA,6BAAe,CAAC,2CAAE,CACjB,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,GAAG,CAAE,IACN,CAEA,6DAAM,CACL,aAAa,CAAE,IAAI,CACnB,MAAM,CAAE,IAAI,CAAC,KAAK,CAAC,GAAG,CACtB,KAAK,CAAE,WAAW,CAClB,SAAS,CAAE,KAAK,CAChB,OAAO,CAAE,IAAI,CAAC,IAAI,CAClB,eAAe,CAAE,IAAI,CACrB,KAAK,CAAE,OACR,CAEA,KAAK,6DAAM,CACV,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,IACnB,CAEA,KAAK,mBAAK,CAAG,6CAAI,CAChB,KAAK,CAAE,IACR,CAEA,mBAAK,CAAC,8CAAK,CACV,KAAK,CAAE,OAAO,CACd,SAAS,CAAE,IACZ,CAEA,qEAAc,CACb,UAAU,CAAE,OAAO,CACnB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAClC,MAAM,CAAE,OAAO,CACf,KAAK,CAAE,IAAI,CACX,aAAa,CAAE,IAChB,CAEA,aAAa,+DAAQ,CACpB,UAAU,CAAE,IAAI,CAChB,KAAK,CAAE,OAAO,CACd,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,OACnB,CAEA,sBAAQ,CAAG,iBAAG,CAAG,+BAAG,CACpB,sBAAQ,CAAG,iBAAG,CAAG,gCAAK,CACrB,KAAK,CAAE,OACR,CAMA,8DAAO,CACN,SAAS,CAAE,WAAW,CACtB,UAAU,CAAE,WACb,CAEA,MAAM,6DAAM,CACX,UAAU,CAAE,OAAO,CACnB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,IACnB,CAEA,MAAM,mBAAK,CAAC,kDAAS,CACpB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,IACnB,CAEA,MAAM,mBAAK,CAAC,sBAAQ,CAAG,iBAAG,CAAG,iBAAG,CAChC,MAAM,mBAAK,CAAC,sBAAQ,CAAG,iBAAG,CAAG,kBAAK,CACjC,KAAK,CAAE,IACR,CAEA,gEAAS,CACR,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,OAAO,CACzB,aAAa,CAAE,IAAI,CACnB,KAAK,CAAE,KAAK,CACZ,SAAS,CAAE,WAAW,CACtB,OAAO,CAAE,MAAM,CAAC,MAAM,CACtB,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,aAClB,CAEA,gEAAS,CACR,OAAO,CAAE,IAAI,CACb,GAAG,CAAE,IACN,CAMA,sBAAQ,CAAC,6CAAI,CACZ,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,aAAa,CAAE,GAChB,CAeA,4EAAqB,CACpB,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,aAAa,CAC9B,WAAW,CAAE,MAAM,CACnB,GAAG,CAAE,IACN,CAWA,kCAAoB,CAAC,6CAAI,CACxB,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,KAAK,CACvB,aAAa,CAAE,GAChB"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let darkMode;
  let $settings, $$unsubscribe_settings;
  let $$unsubscribe_loading;
  let $$unsubscribe_page;
  $$unsubscribe_settings = subscribe(settings, (value) => $settings = value);
  $$unsubscribe_loading = subscribe(loading, (value) => value);
  $$unsubscribe_page = subscribe(page, (value) => value);
  let groups = [];
  let USER = {};
  let users = [];
  let dialog;
  let modal;
  let usersModal;
  let selectedRoom = { admins: [], owner: "" };
  $$result.css.add(css);
  darkMode = !$settings.LightMode;
  $$unsubscribe_settings();
  $$unsubscribe_loading();
  $$unsubscribe_page();
  return `<div><button class="${"convo-switch " + escape("active", true) + " svelte-fs8jkx"}">Rooms</button> <button class="${"convo-switch " + escape("", true) + " svelte-fs8jkx"}">Chats</button> ${`${each(groups, (group) => {
    return `<div class="${["room-container svelte-fs8jkx", !!darkMode ? "dark" : ""].join(" ").trim()}"><a class="${["room svelte-fs8jkx", !!darkMode ? "dark" : ""].join(" ").trim()}" href="${"/chats/group/" + escape(group.id, true)}"><div class="pfp-input-container svelte-fs8jkx"><img${add_attribute("src", group.profilepicture, 0)} alt="pfp" class="room-picture svelte-fs8jkx"></div> <div class="svelte-fs8jkx"><div>${escape(group.title)}</div> <span class="svelte-fs8jkx">${escape(group.description ? group.description : "No description")}</span></div> </a></div> <br>`;
  })}`}</div> <dialog class="popup svelte-fs8jkx"${add_attribute("this", dialog, 0)}><div class="svelte-fs8jkx">${USER.id && selectedRoom.admins?.includes(USER.id) ? `<button data-svelte-h="svelte-10h2v7l">Edit Room</button>` : ``} ${USER.id && selectedRoom.owner === USER.id ? `<button data-svelte-h="svelte-1wjnz5o">Delete Room</button>` : ``} <button data-svelte-h="svelte-eey5jc">Quit Room</button></div></dialog> ${selectedRoom ? `<dialog class="svelte-fs8jkx"${add_attribute("this", modal, 0)}>${`<span data-svelte-h="svelte-7ccxmo">Title</span> <div>${escape(selectedRoom.title)}</div>`} ${selectedRoom.description ? `<span data-svelte-h="svelte-rmspr8">Description</span> <div>${escape(selectedRoom.description)}</div>` : `${selectedRoom.description ? `<label for="title-input" data-svelte-h="svelte-5yycfp">Description</label> <input type="text" id="title-input">` : ``}`} <span data-svelte-h="svelte-1yoneiz">Created At</span> <div>${escape(formatDate(String(selectedRoom.createdat)).ofDay)} on ${escape(formatDate(String(selectedRoom.createdat)).ofYear)}</div> <span data-svelte-h="svelte-wj6azn">Owner</span> <div>${escape(selectedRoom.ownerData?.username)}</div></dialog>` : ``} ${`<a href="/chats/new" data-svelte-h="svelte-157jt7w">Create New Room</a>`} <dialog class="${["svelte-fs8jkx", !!darkMode ? "dark" : ""].join(" ").trim()}"${add_attribute("this", usersModal, 0)}><div style="display: flex; flex-direction: column; gap: 1.2rem">${each([...users], (user) => {
    return `<div class="account svelte-fs8jkx"><div class="details svelte-fs8jkx"><img class="profile-picture svelte-fs8jkx" alt="Pfp"${add_attribute("src", user.profilepicture, 0)}> <div class="svelte-fs8jkx"><div class="svelte-fs8jkx">${escape(user.username)}</div> <span class="svelte-fs8jkx">${escape(user.about)}</span> </div></div> <div><button type="button" data-svelte-h="svelte-1qjj2jf">New Chat</button></div> </div>`;
  })}</div> </dialog>`;
});
export {
  Page as default
};
