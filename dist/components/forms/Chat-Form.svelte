<script>import { AddChatRoom } from "../../chat-rooms.ts";
import { onMount } from "svelte";
import EditButton from "../buttons/Edit-Button.svelte";
import { GetUsers } from "../../users.ts";
import { loading, settings } from "../../../stores.ts";
import LoadingCircle from "../LoadingCircle.svelte";
let users = [];
let openModal = false;
onMount(async () => {
  users = await GetUsers();
  if (!users)
    users = [];
});
let info = {
  members: [],
  admins: [],
  type: "broadcast"
};
function AddMember(event, id = "") {
  if (!event || !id)
    return;
  const target = event.target;
  if (target.checked === true) {
    info.members = [...info.members, id];
  } else {
    info.members = info.members?.filter((member) => member != id);
  }
}
function AddAdmin(event, id = "") {
  if (!event || !id)
    return;
  const target = event.target;
  if (target.checked === true) {
    info.admins = [...info.admins, id];
  } else {
    info.admins = info.admins?.filter((admin) => admin != id);
  }
}
$:
  darkMode = !$settings.LightMode;
let response = {
  response: ""
};
onMount(() => {
  $loading.goPast = true;
});
let image;
let fileInput;
let showImage = false;
let isLoading = false;
$: {
  if (isLoading)
    isLoading = Object.values(response).every((key) => key.length === 0);
}
</script>

<form
	class:dark={!!darkMode}
	on:submit|preventDefault={async () => {
		if (!info.title?.length) return;
		response = {
			response: '',
			status: ''
		};

		isLoading = true;

		response = await AddChatRoom(info);
	}}
>
	<div>
		<input type="text" placeholder="Name" bind:value={info.title} />
	</div>
	<div class="pfp-input-container">
		<label for="file-input">Enter a profile picture</label>
		<input
			id="file-input"
			type="file"
			accept=".jpg, .jpeg, .png"
			bind:this={fileInput}
			on:change={() => {
				if (!fileInput || !fileInput.files) return;
				const file = fileInput.files[0];

				if (file) showImage = true;

				const reader = new FileReader();
				reader.readAsDataURL(file);
				reader.addEventListener('load', () => {
					const result = reader.result;
					image.setAttribute('src', String(result));
					info.profilepicture = String(result);
				});
			}}
		/>
		{#if showImage}
			<img bind:this={image} alt="pfp" />
		{/if}
	</div>
	<div>
		<input type="text" placeholder="Description" bind:value={info.description} />
	</div>
	<div class="members-display">
		<div class="members-title">
			<span>Members</span>
			<button class="edit-btn" type="button" on:click={() => (openModal = !openModal)}
				><EditButton stroke={darkMode ? '#ffffff' : '#000000'} /></button
			>
		</div>
		<div class="members-container">
			{#each [...info.members] as member (member)}
				<div class="member">
					<img
						class="profile-picture"
						src={users.filter((user) => user.id === member)[0].profilepicture}
						alt="Pfp"
					/>
					<span>{users.filter((user) => user.id === member)[0].username}</span>
				</div>
			{/each}
		</div>
	</div>
	<button type="submit" style="pointer-events: {isLoading ? 'none' : 'auto'};">
		{#if isLoading}
			<LoadingCircle />
		{:else}
			Submit
		{/if}</button
	>
	<span class:error={response.status === 'error'} class:success={response.status === 'success'}
		>{response.response}</span
	>
</form>

<dialog open={openModal} class:dark={!!darkMode}>
	<div>
		{#each users as user (user.id)}
			<div class="account">
				<div class="details" style="border: none;">
					<img class="profile-picture" alt="Pfp" src={user.profilepicture} />
					<div>
						<div>{user.username}</div>
						<span>{user.about}</span>
					</div>
				</div>

				<div class="checks">
					<div class="check">
						<div>Member</div>
						<input
							type="checkbox"
							on:input={(event) => {
								AddMember(event, user.id);
							}}
						/>
					</div>
					<div class="check">
						<div>Admin</div>
						<input
							type="checkbox"
							on:input={(event) => {
								AddAdmin(event, user.id);
							}}
						/>
					</div>
				</div>
			</div>
		{/each}
	</div>
</dialog>

<style>form.dark {
	background: #02042a;
	border: 2px solid #fff;
}

form.dark div input {
	background: #151ca9;
	color: #fff;
}

form.dark div input::placeholder {
	color: #ffffff9c;
}

form.dark > button {
	background: #151ca9;
	color: #fff;
	border: none;
}

form.dark > button:hover,
form.dark > button:focus {
	background: #fff;
	color: #151ca9;
	border: none;
}

form {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 24px;
	height: 426px;
	min-height: fit-content;
	min-width: fit-content;
	width: 350px;
	border: #000 solid 1px;
	padding: 24px 15px;
	border-radius: 25px;
	background: #fff;
}

form div input {
	border-radius: 25px;
	border: black solid 1px;
	width: 320px;
	height: 43px;
	font-size: 20px;
	padding-left: 10px;
}

form > button {
	background: #ffffff;
	border: #005fcf solid 2px;
	cursor: pointer;
	border-radius: 25px;
	min-width: fit-content;
	width: 240px;
	height: 3rem;
	color: #005fcf;
	font-size: 25px;
	transition:
		background 0.5s,
		color 0.5s;
	margin-top: auto;
	display: flex;
	align-items: center;
	justify-content: center;
}

form > button:focus,
form > button:hover {
	background: #005fcf;
	border-color: #fff;
	color: #fff;
}

.error {
	color: red;
}

.success {
	color: lightgreen;
}

@media only screen and (max-height: 600px) {
	form {
		height: 246px;
		gap: 14px;
	}
}

@media only screen and (max-height: 200px) {
	form {
		height: 146px;
		gap: 8px;
	}
}

@media only screen and (max-width: 390px) {
	form > div > input {
		width: 260px;
	}

	form {
		width: 280px;
	}

	form button {
		width: 147px;
	}
}

@media only screen and (max-width: 330px) {
	form div input {
		width: 120px;
	}
	form button {
		width: 100px;
	}

	form {
		width: 180px;
	}
}

.profile-picture {
	width: 40px;
	height: 40px;
	border-radius: 50%;
}

.members-display {
	width: fit-content;
	height: fit-content;
}

.member {
	display: flex;
	align-items: center;
	gap: 10px;
	font-size: 22px;
	margin-bottom: 10px;
}

.members-container {
	border: #000 solid 1px;
	border-radius: 10px;
	min-width: 316px;
	min-height: 161px;
	padding: 8px 16px;
	overflow-y: scroll;
}

dialog {
	width: 427px;
	height: 427px;
	top: 50%;
	right: -50%;
	transform: translate(-50%, -50%);
	border-radius: 25px;
	border: 1px solid #000;
}

dialog.dark {
	background: #121212;
	border: 2px solid #fff;
}

.account {
	border-radius: 20px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 10px;
}

.details {
	border-radius: 20px;
	min-height: 58px;
	min-width: 287px;
	border: 1px solid #000;
	display: flex;
	gap: 10px;
	align-items: center;
	padding: 18px 16px;
}

.details > div {
	font-size: 20px;
	display: flex;
	height: 55px;
	flex-direction: column;
	justify-content: space-between;
}

form.dark .members-title > span {
	color: #fff;
}

form.dark .members-container {
	border: 2px solid #fff;
}

.edit-btn {
	transform: scale(0.4);
	background: none;
	border: none;
	cursor: pointer;
	width: fit-content;
	height: fit-content;
}

.members-title {
	display: flex;
	align-items: center;
	justify-content: center;
	height: 40px;
}

form.dark .member > span {
	color: #fff;
}

.details > div > div,
.details > div > span {
	color: #121212;
}

.check > div {
	color: #121212;
}

dialog {
	min-width: fit-content;
	min-height: fit-content;
}

dialog.dark {
	background: #121212;
	border: 2px solid #fff;
}

dialog.dark .account {
	border: 2px solid #fff;
}

dialog.dark .details > div > div,
dialog.dark .details > div > span {
	color: #fff;
}

.account {
	border: 2px solid #121212;
	border-radius: 25px;
	width: 20rem;
	min-width: fit-content;
	padding: 0.8rem 1.8rem;
	display: flex;
	justify-content: space-between;
}

.details {
	display: flex;
	gap: 1rem;
}

dialog.dark .check > div {
	color: #ffffff;
}

.details img {
	width: 55px;
	height: 55px;
	border-radius: 50%;
}

.checks {
	height: 58px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}

.check {
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.pfp-input-container {
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 20px;
}

.pfp-input-container label {
	font-size: 20px;
	color: #a0a0a0;
}

.pfp-input-container input {
	display: none;
}

.pfp-input-container img {
	width: 60px;
	height: 60px;
	border: 1px solid black;
	border-radius: 50%;
}
</style>
