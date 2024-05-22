import type { ChatRoom } from './interfaces.ts';
export declare function AddChatRoom(info: ChatRoom): Promise<any>;
export declare function GetChatRooms(type: string): Promise<any>;
export declare function GetRoom(id: string): Promise<any>;
export declare function FetchMessages(ids: number[] | undefined): Promise<any>;
