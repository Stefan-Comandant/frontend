import * as server from '../entries/pages/chats/_page.server.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/chats/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/chats/+page.server.ts";
export const imports = ["_app/immutable/nodes/5.CcGQz3T7.js","_app/immutable/chunks/scheduler.DCHIdItQ.js","_app/immutable/chunks/each.Btz5aSee.js","_app/immutable/chunks/index.BPubO7i7.js","_app/immutable/chunks/stores.CzROKeE2.js","_app/immutable/chunks/entry.ab62d0So.js","_app/immutable/chunks/index.rcJGhOUn.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/stores.CDP2pJ8Z.js","_app/immutable/chunks/users.Dl7qTyP5.js","_app/immutable/chunks/interfaces.CW91EL9d.js","_app/immutable/chunks/chat-rooms.ChhdyGtT.js"];
export const stylesheets = ["_app/immutable/assets/5.CbPl8n-W.css"];
export const fonts = [];
