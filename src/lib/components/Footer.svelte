<script>
	import { Search } from 'flowbite-svelte';
	 let location = '';
  function search() {
    alert(`Searching for: ${location}`);
  }
</script>

<footer>
	<div class="footer-top m-[20px]">
		<div>
			<h1 class="text-[20px]">Customer Service</h1>

			<p class="mt-[10px]">Get Help</p>
		</div>

		<div>
			<h2 class="text-[20px]">Find a Warehouse</h2>

		<div class="mt-[15px] w-[500px] relative">
			<input
				type="text"
				bind:value={location}
				placeholder="City, State, or Zip"
				class="w-full rounded border border-gray-300 shadow-sm pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
			/>
			
			<button
				type="button"
				on:click={search}
				class="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-blue-500 focus:outline-none"
			>
				<svg class="w-6 h-6 text-gray-800 dark:text-blue" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
				<path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
				</svg>

			</button>
			</div>
		</div>

		<div>
			<h3 class="text-[20px]">Get Email Offers</h3>
			<div class="mt-[15px] flex w-[500px]">
				<input
					type="text"
					id="location"
					name="location"
					placeholder="Enter your email"
					class="flex-1 rounded-l border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
				/>
				<button
					class="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
				>
					Search
				</button>
				</div>

			
		
		</div>
	</div>
</footer>

<style>
	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;

		padding: 12px;
	}

	.footer-top {
		display: flex;
		gap: 25px;
	}
</style>
