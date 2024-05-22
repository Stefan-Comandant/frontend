import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        page?: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type NavbarProps = typeof __propDef.props;
export type NavbarEvents = typeof __propDef.events;
export type NavbarSlots = typeof __propDef.slots;
export default class Navbar extends SvelteComponent<NavbarProps, NavbarEvents, NavbarSlots> {
}
export {};
