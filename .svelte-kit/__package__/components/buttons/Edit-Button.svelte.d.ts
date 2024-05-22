import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        stroke?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type EditButtonProps = typeof __propDef.props;
export type EditButtonEvents = typeof __propDef.events;
export type EditButtonSlots = typeof __propDef.slots;
export default class EditButton extends SvelteComponent<EditButtonProps, EditButtonEvents, EditButtonSlots> {
}
export {};
