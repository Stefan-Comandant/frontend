/// <reference types="svelte" />
import type { Setting } from '$lib/interfaces.ts';
export declare const settings: import("svelte/store").Writable<Setting>;
export declare const loading: import("svelte/store").Writable<{
    goPast: boolean;
    loading: boolean;
}>;
