import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ChatFormProps = typeof __propDef.props;
export type ChatFormEvents = typeof __propDef.events;
export type ChatFormSlots = typeof __propDef.slots;
export default class ChatForm extends SvelteComponent<ChatFormProps, ChatFormEvents, ChatFormSlots> {
}
export {};
