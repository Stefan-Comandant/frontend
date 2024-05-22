<script>import { page } from "$app/stores";
import { GetUsername, formatDate, getProfilePicture } from "../users.ts";
import { onMount } from "svelte";
export let messages = [];
let dates = /* @__PURE__ */ new Map();
export let currentRoomMembers = [];
function computeDateDivider(msg, i) {
  const formattedDate = formatDate(String(msg.sentat));
  if (![...dates.values()].includes(String(formattedDate.ofYear))) {
    dates.set(i, String(formattedDate.ofYear));
  }
  msg.shortened = msg.text.length > 1400;
  return msg;
}
$:
  messages = messages.map(computeDateDivider);
</script>

<div class="msg-container">
	{#each messages as message, index (message.id)}
		{#if dates.get(index)}
			<div class="date-display">
				{dates.get(index)}
			</div>
		{/if}
		<div>
			{#if message.from != $page.data.USER.id}
				<img
					class="msg-profile-picture"
					alt="pfp"
					src={getProfilePicture(message.from, currentRoomMembers)}
				/>
			{/if}
			<div class="msg-content" class:sent-by-me={$page.data.USER.id === message.from}>
				{#if message.from !== $page.data.USER.id}
					<span
						><a href="/profiles/{message.from}">{GetUsername(message.from, currentRoomMembers)}</a
						></span
					>
				{/if}
				<div class={message.shortened ? 'shortened' : ''}>
					{message.shortened ? message.text.split('').slice(0, 1400).join('') : message.text}
					{#if message.shortened}
						<button type="button" class="show-more" on:click={() => (message.shortened = false)}
							>Show more</button
						>
					{/if}
				</div>
				<span>{formatDate(String(message.sentat)).ofDay}</span>
			</div>
		</div>
	{/each}
</div>

<style>.msg-content {
	width: fit-content;
	max-width: 45rem;
	min-width: 250px;
	height: fit-content;
	padding: 12px 14px;
	border-radius: 20px;
	word-wrap: break-word;
	color: #000;
	box-shadow: 1px 3px 3px 4px rgba(0, 0, 0, 0.25);
	background: #fff;
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 6px;
	position: relative;
}

.msg-container::-webkit-scrollbar {
	max-width: 2rem;
}

.msg-content div {
	font-size: 18px;
}

.msg-content span {
	display: flex;
	justify-content: flex-end;
	color: #c5c5c5;
	font-size: 9px;
	position: absolute;
	right: 14px;
	bottom: 4px;
}

.msg-content span:nth-child(1) {
	position: relative;
	color: #7a7a7a;
	font-weight: 700;
	font-size: 0.75rem;
	left: 0;
	justify-content: flex-start;
	width: fit-content;
	height: fit-content;
}

.shortened::after {
	content: '...';
}

.show-more {
	background: transparent;
	cursor: pointer;
	color: #c1dafd;
	border: none;
}

.show-more:hover {
	text-decoration: underline;
}

.msg-content span a {
	color: inherit;
	text-decoration: none;
}

.msg-container {
	display: flex;
	flex-direction: column;
	gap: 1rem;
	width: 100%;
	overflow-y: scroll;
}

.msg-container > div {
	display: flex;
	align-items: start;
	gap: 14px;
}

.sent-by-me {
	background: #479cff;
	color: #fff;
	border: none;
	margin-left: auto;
}

.date-display {
	margin-left: auto;
	margin-right: auto;
	color: #ffffff;
	background: #377206;
	padding: 4px 6px;
	border-radius: 25px;
}

.msg-profile-picture {
	width: 50px;
	height: 50px;
	border-radius: 50%;
}
</style>
