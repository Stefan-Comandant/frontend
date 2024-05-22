import { SvelteComponent } from "svelte";
import type { HTTPResponse } from '../../interfaces.ts';
declare const __propDef: {
    props: {
        response?: HTTPResponse | undefined;
    };
    events: {
        register: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type RegisterFormProps = typeof __propDef.props;
export type RegisterFormEvents = typeof __propDef.events;
export type RegisterFormSlots = typeof __propDef.slots;
export default class RegisterForm extends SvelteComponent<RegisterFormProps, RegisterFormEvents, RegisterFormSlots> {
}
export {};
