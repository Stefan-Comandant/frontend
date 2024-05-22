<script>import { createEventDispatcher, onMount } from "svelte";
import { loading, settings } from "../../../stores.ts";
import LoadingCircle from "../LoadingCircle.svelte";
const dispatch = createEventDispatcher();
let info = {
  email: "",
  password: ""
};
$:
  darkMode = !$settings.LightMode;
onMount(() => {
  $loading.goPast = true;
});
export let response;
let isLoading = false;
$: {
  if (isLoading)
    isLoading = Object.values(response).every((key) => key.length === 0);
}
</script>

<form
	class:dark={!!darkMode}
	on:submit|preventDefault={async () => {
		response = {
			response: '',
			status: ''
		};
		isLoading = true;
		dispatch('login', info);
	}}
>
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
</style>
