import * as server from '../entries/pages/chats/group/_id_/_page.server.ts.js';

export const index = 9;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/chats/group/_id_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/chats/group/[id]/+page.server.ts";
export const imports = ["_app/immutable/nodes/9.DYVdJ2Lz.js","_app/immutable/chunks/scheduler.DCHIdItQ.js","_app/immutable/chunks/index.BPubO7i7.js","_app/immutable/chunks/stores.CzROKeE2.js","_app/immutable/chunks/entry.ab62d0So.js","_app/immutable/chunks/index.rcJGhOUn.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/stores.CDP2pJ8Z.js","_app/immutable/chunks/MsgsContainer.BVWQkB8Q.js","_app/immutable/chunks/each.Btz5aSee.js","_app/immutable/chunks/users.Dl7qTyP5.js","_app/immutable/chunks/interfaces.CW91EL9d.js"];
export const stylesheets = ["_app/immutable/assets/7.Bfid_Bnm.css","_app/immutable/assets/MsgsContainer.DgyzGU96.css"];
export const fonts = [];
