import * as universal from '../entries/pages/authorize/_page.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/authorize/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/authorize/+page.ts";
export const imports = ["_app/immutable/nodes/3.Cj2_r3p2.js","_app/immutable/chunks/index.De_1-CT6.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/scheduler.DCHIdItQ.js","_app/immutable/chunks/index.BPubO7i7.js"];
export const stylesheets = [];
export const fonts = [];
