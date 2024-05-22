

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/chats/new/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/10.DWNY279V.js","_app/immutable/chunks/scheduler.DCHIdItQ.js","_app/immutable/chunks/index.BPubO7i7.js","_app/immutable/chunks/each.Btz5aSee.js","_app/immutable/chunks/chat-rooms.ChhdyGtT.js","_app/immutable/chunks/interfaces.CW91EL9d.js","_app/immutable/chunks/users.Dl7qTyP5.js","_app/immutable/chunks/stores.CDP2pJ8Z.js","_app/immutable/chunks/index.rcJGhOUn.js","_app/immutable/chunks/LoadingCircle.DD_T3a5K.js"];
export const stylesheets = ["_app/immutable/assets/10.DlZuDCiT.css","_app/immutable/assets/LoadingCircle.Cz4U-C2h.css"];
export const fonts = [];
