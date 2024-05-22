import type { User, VerificationSession } from './interfaces.ts';
export declare function Login(info: User): Promise<any>;
export declare function VerifyWithCode(info: VerificationSession): Promise<any>;
export declare function Logout(): Promise<any>;
export declare function Register(info: User): Promise<any>;
