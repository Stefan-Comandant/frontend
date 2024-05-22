import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        id?: string | undefined;
        socket: WebSocket;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type MsgInputProps = typeof __propDef.props;
export type MsgInputEvents = typeof __propDef.events;
export type MsgInputSlots = typeof __propDef.slots;
export default class MsgInput extends SvelteComponent<MsgInputProps, MsgInputEvents, MsgInputSlots> {
}
export {};
