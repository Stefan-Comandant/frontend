<script>import { createEventDispatcher, onMount } from "svelte";
import { loading, settings } from "../../../stores.ts";
import LoadingCircle from "../LoadingCircle.svelte";
const dispatch = createEventDispatcher();
let info = {
  username: "",
  email: "",
  password: ""
};
export let response = {};
$:
  darkMode = !$settings.LightMode;
let fileInput;
let showImage = false;
let image;
onMount(() => {
  $loading.goPast = true;
});
let isLoading = false;
$: {
  if (isLoading)
    isLoading = Object.values(response).every((key) => key.length === 0);
}
</script>

<form
	class:dark={darkMode}
	on:submit|preventDefault={() => {
		response = {
			response: '',
			status: ''
		};
		isLoading = true;
		dispatch('register', info);
	}}
>
	<div>
		<input type="text" placeholder="Enter your username" bind:value={info.username} />
	</div>
	<div class="pfp-input-container">
		<label for="file-input">Enter a profile picture</label>
		<input
			id="file-input"
			type="file"
			accept=".jpg, .jpeg, .png"
			bind:this={fileInput}
			on:change={() => {
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
		<input type="email" placeholder="Enter your email" bind:value={info.email} />
	</div>
	<div>
		<input type="text" placeholder="Enter your password" bind:value={info.password} />
	</div>
	<button type="submit" style="pointer-events: {isLoading ? 'none' : 'auto'};">
		{#if isLoading}
			<LoadingCircle />
		{:else}
			Submit
		{/if}
	</button>
	<span class:error={response.status === 'error'} class:success={response.status === 'success'}
		>{response.response}</span
	>
</form>

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
