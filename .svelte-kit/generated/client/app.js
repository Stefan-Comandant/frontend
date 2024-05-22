export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14'),
	() => import('./nodes/15'),
	() => import('./nodes/16')
];

export const server_loads = [0];

export const dictionary = {
		"/": [~2],
		"/authorize": [3],
		"/authorize/[id]": [4],
		"/chats": [~5],
		"/chats/direct": [6],
		"/chats/direct/[id]": [~7],
		"/chats/group": [8],
		"/chats/group/[id]": [~9],
		"/chats/new": [10],
		"/login": [11],
		"/logout": [12],
		"/profiles": [~13],
		"/profiles/[id]": [~14],
		"/register": [15],
		"/settings": [16]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),

	reroute: (() => {})
};

export { default as root } from '../root.svelte';