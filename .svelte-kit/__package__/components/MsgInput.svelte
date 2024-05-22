<script>import { page } from "$app/stores";
export let id = "";
let msg = "";
export let socket;
let showBtn = false;
</script>

<div class="msg-input">
	<textarea bind:value={msg} />
	<button
		type="button"
		on:click={() => {
			if (!msg.length) return;
			const data = JSON.stringify({
				text: msg,
				toid: parseInt(id),
				type: $page.route.id?.includes('/direct') ? 'direct' : 'broadcast'
			});
			socket.send(data);

			msg = '';
		}}>Send</button
	>
</div>

<style>.msg-input textarea {
	resize: none;
	width: 50rem;
	min-height: 29px;
	height: fit-content;
	font-size: 15px;
	font-family: inherit;
	border-radius: 25px;
	padding: 10px;
}

.container.dark .msg-input textarea {
	color: #fff;
	background: #303030;
	border: 2px solid #fff;
}

.msg-input {
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 20px;
	margin-top: auto;
	position: relative;
	bottom: 0;
}

.msg-input button {
	background: #ffffff;
	border: #005fcf solid 2px;
	cursor: pointer;
	border-radius: 25px;
	width: 97px;
	height: 49px;
	color: #005fcf;
	font-size: 15px;
	transition:
		background 0.5s,
		color 0.5s;
}

.msg-input button:focus,
.msg-input button:hover {
	background: #005fcf;
	border-color: #fff;
	color: #fff;
}

.container.dark .msg-input button {
	background: #151ca9;
	color: #fff;
	border: none;
}

.container.dark .msg-input button:focus,
.container.dark .msg-input button:hover {
	background: #fff;
	color: #151ca9;
	border: none;
}
</style>
