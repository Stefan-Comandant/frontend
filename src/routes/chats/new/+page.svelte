<script lang="ts">
	import ChatForm from '$lib/components/forms/Chat-Form.svelte';
	import { onMount } from 'svelte';
	import { loading } from '../../../stores.ts';

	onMount(() => {
		$loading.goPast = true;
	});
</script>

<div class="container">
	<ChatForm />
</div>

<style>
	.container {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
</style>
