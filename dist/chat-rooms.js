import { FetchConfig } from './interfaces.ts';
import { GetProfileByID } from './users.ts';
export async function AddChatRoom(info) {
    const response = await fetch('/api/rooms', {
        ...FetchConfig,
        method: 'POST',
        body: JSON.stringify(info)
    });
    const data = await response.json();
    return data;
}
export async function GetChatRooms(type) {
    const response = await fetch(`/api/rooms/${type}`, FetchConfig);
    const data = await response.json();
    if (data.status === 'success') {
        data.response.forEach(async (room, i) => {
            room.ownerData = await GetProfileByID(room.owner);
            data.response[i] = room;
        });
        return data.response;
    }
    return [];
}
export async function GetRoom(id) {
    const response = await fetch(`/api/rooms/${id}`, FetchConfig);
    const data = await response.json();
    if (data.status === 'success')
        return data.response;
    return {};
}
export async function FetchMessages(ids) {
    const response = await fetch('/api/messages', {
        ...FetchConfig,
        method: 'PUT',
        body: JSON.stringify(ids)
    });
    const data = await response.json();
    if (data.status === 'success')
        return data.response;
    return [];
}
