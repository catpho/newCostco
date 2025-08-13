<script lang="ts">
	import Header from './Header.svelte';
	import '../app.css';
	import Footer from '$lib/components/Footer.svelte';
</script>

<div class="app">
	<div class="theme-duocolor">
		Current Deals are shown here on the header (clickable and will link to the item)
	</div>
	<Header />

	<div style="  background-color:#eeeeee;margin-bottom:0.5px">
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
			<div class="ml-auto">List  |  Buy Again</div>
		</div>
	</div>

	<main>
		<slot />
	</main>

	<Footer />
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
	}

	.theme-duocolor {
		background-color: #005dab;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #ffffff;
		padding: 4px;
		font-size: larger;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		background-color: white;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>
