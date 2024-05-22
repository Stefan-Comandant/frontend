import { SvelteComponent } from "svelte";
import type { HTTPResponse } from '../../interfaces.ts';
declare const __propDef: {
    props: {
        response: HTTPResponse;
    };
    events: {
        login: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type LoginFormProps = typeof __propDef.props;
export type LoginFormEvents = typeof __propDef.events;
export type LoginFormSlots = typeof __propDef.slots;
export default class LoginForm extends SvelteComponent<LoginFormProps, LoginFormEvents, LoginFormSlots> {
}
export {};
