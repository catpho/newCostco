<script lang="ts">
	import Header from './Header.svelte';
	import '../app.css';
	import Footer from '$lib/components/Footer.svelte';
</script>

<div class="app bg-[#ffffff]">
	<div class="theme-duocolor">
		Current Deals are shown here on the header (clickable and will link to the item)
	</div>
	<Header />

	<div class= "map" style="margin-bottom:0.5px">
		<div class="container flex items-start justify-between text-sm text-gray-800 py-4">
			<!-- My Warehouse -->
			<div>
				<p class="text-xs text-gray-600">My Warehouse</p>
				<div class="flex items-center gap-1 font-semibold">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" role="presentation" focusable="false" aria-hidden="true" fill="none" class="mui-y3hfh1"><path fill="currentColor" fill-rule="evenodd" d="M18.778 9.966c0 1.382-.416 2.712-1.23 3.899l-5.265 6.997c-.125.14-.289.268-.502.025l-5.22-6.925-.057-.098A6.83 6.83 0 0 1 5.25 9.969c.017-3.706 3.056-6.719 6.773-6.719 3.725 0 6.755 3.012 6.755 6.716M12.023 22.25c.438 0 .87-.199 1.159-.521l5.422-7.205a7.96 7.96 0 0 0 1.424-4.558C20.028 5.573 16.437 2 12.023 2 7.62 2 4.02 5.572 4 9.973c.021 1.685.534 3.281 1.435 4.533l.003.005c.03.059.082.161.132.206l5.25 6.964c.3.362.739.569 1.203.569m-2.5-12.49a2.51 2.51 0 0 1 2.5-2.513c1.38 0 2.5 1.116 2.5 2.488a2.51 2.51 0 0 1-2.5 2.513 2.497 2.497 0 0 1-2.5-2.488m-1.25 0a3.75 3.75 0 0 0 3.75 3.738 3.76 3.76 0 0 0 3.75-3.763 3.75 3.75 0 0 0-3.75-3.738 3.76 3.76 0 0 0-3.75 3.763" clip-rule="evenodd"></path></svg>
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

	<main class="container ">
		<img class="MuiBox-root mui-19dwngb" alt="Join Costco Today!" loading="eager" sizes="(max-width: 768px) 320px, (max-width: 1024px) 768px, 1400px" src="https://bfasset.costco-static.com/56O3HXZ9/at/mph6vvc2c2f6cj9tbrbhjc/d_membership_top_homepage_banner_warehouse_25w12203.png?auto=webp&amp;format=jpg" srcset="https://bfasset.costco-static.com/56O3HXZ9/at/mph6vvc2c2f6cj9tbrbhjc/d_membership_top_homepage_banner_warehouse_25w12203.png?auto=webp&amp;format=jpg&amp;width=320 320w, https://bfasset.costco-static.com/56O3HXZ9/at/mph6vvc2c2f6cj9tbrbhjc/d_membership_top_homepage_banner_warehouse_25w12203.png?auto=webp&amp;format=jpg&amp;width=768 768w, https://bfasset.costco-static.com/56O3HXZ9/at/mph6vvc2c2f6cj9tbrbhjc/d_membership_top_homepage_banner_warehouse_25w12203.png?auto=webp&amp;format=jpg&amp;width=1400 1400w" data-testid="ImageVideo_Image" data-airgap-id="144">
		<slot />
	</main>

	<Footer />
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	.map{
		background-color: #fafafa;
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
	.container {
		max-width: 1800px; 
		margin: 0 auto;
		padding: 1 1rem;
		
	}

	main {
		flex: 1;
		display: flex;
		overflow-y: auto;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		background-color: white;
		box-sizing: border-box;
	}
</style>
