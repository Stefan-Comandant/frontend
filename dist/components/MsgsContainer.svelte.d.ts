import { SvelteComponent } from "svelte";
import type { Message, User } from '../interfaces.ts';
declare const __propDef: {
    props: {
        messages?: Message[] | undefined;
        currentRoomMembers?: User[] | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type MsgsContainerProps = typeof __propDef.props;
export type MsgsContainerEvents = typeof __propDef.events;
export type MsgsContainerSlots = typeof __propDef.slots;
export default class MsgsContainer extends SvelteComponent<MsgsContainerProps, MsgsContainerEvents, MsgsContainerSlots> {
}
export {};
