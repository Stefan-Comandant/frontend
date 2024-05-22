import * as server from '../entries/pages/profiles/_id_/_page.server.ts.js';

export const index = 14;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/profiles/_id_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/profiles/[id]/+page.server.ts";
export const imports = ["_app/immutable/nodes/14.C2Duk-nJ.js","_app/immutable/chunks/scheduler.DCHIdItQ.js","_app/immutable/chunks/index.BPubO7i7.js","_app/immutable/chunks/stores.DUnNtWjl.js","_app/immutable/chunks/entry.D7BuMwTx.js","_app/immutable/chunks/index.rcJGhOUn.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/stores.CDP2pJ8Z.js"];
export const stylesheets = ["_app/immutable/assets/14.DJ0UVAnk.css"];
export const fonts = [];
