<script lang="ts">
	import Header from './Header.svelte';
	import '../app.css';
</script>

<div class="app">
	<p class="theme-duocolor">
		Current Deals are shown here on the header (clickable and will link to the item)
	</p>
	<Header />

	<div
		style="  background-color:#eeeeee; box-shadow: 0 4px 14px rgba(0, 0, 0, 0.25); margin-bottom: 100px;"
	>
		<div class="m-6 ml-8 flex items-start text-sm text-gray-800">
			<!-- My Warehouse -->
			<div>
				<p class="text-xs text-gray-600">My Warehouse</p>
				<div class="flex items-center gap-1 font-semibold">
					<i class="fa-solid fa-location-dot text-gray-700"></i>
					<span class="text-black">Grand Rapids</span>
				</div>
				<p class="mt-1 text-xs text-gray-600">Executive Member hours start at 9AM</p>
				<p class="text-xs text-gray-600">Gold Star & Business hours start at 10AM</p>
			</div>

			<!-- Delivery Location -->
			<div>
				<p class="text-xs text-gray-600">Delivery Location</p>
				<div class="flex items-center justify-end font-semibold">
					<i class="fa-solid fa-box text-gray-700"></i>
					<span class="text-black">48201</span>
				</div>
			</div>
		</div>
	</div>

	<main>
		<slot />
	</main>

	<footer>
		<p>
			visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to learn about SvelteKit
		</p>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	.theme-duocolor {
		background-color: #005dab;
		color: #ffffff;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;

		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
