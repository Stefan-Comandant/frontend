import type { ChatRoom } from '$lib/interfaces.ts';
import { FetchConfig } from '$lib/interfaces.ts';
import { GetProfileByID } from './users.ts';

export async function AddChatRoom(info: ChatRoom) {
	const response = await fetch('/api/rooms', {
		...FetchConfig,
		method: 'POST',
		body: JSON.stringify(info)
	});
	const data = await response.json();

	return data;
}

export async function GetChatRooms(type: string) {
	const response = await fetch(`/api/rooms/${type}`, FetchConfig);
	const data = await response.json();

	if (data.status === 'success') {
		data.response.forEach(async (room: ChatRoom, i: number) => {
			room.ownerData = await GetProfileByID(room.owner);
			data.response[i] = room;
		});
		return data.response;
	}
	return [];
}

export async function GetRoom(id: string) {
	const response = await fetch(`/api/rooms/${id}`, FetchConfig);
	const data = await response.json();

	if (data.status === 'success') return data.response;
	return {};
}

export async function FetchMessages(ids: number[] | undefined) {
	const response = await fetch('/api/messages', {
		...FetchConfig,
		method: 'PUT',
		body: JSON.stringify(ids)
	});
	const data = await response.json();

	if (data.status === 'success') return data.response;
	return [];
}
