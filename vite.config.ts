import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	package: {
		dir: 'dist',
		emitTypes: true,
		// Define exports to specify the main entry points
		exports: (filepath) => filepath === 'index.js' || filepath === 'index.svelte'
	}
});
