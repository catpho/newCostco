<script>
	import { Search } from 'flowbite-svelte';
</script>

<footer>
	<div class="footer-top m-[20px]">
		<div>
			<h1 class="text-[20px]">Customer Service</h1>

			<p class="mt-[10px]">Get Help</p>
		</div>

		<div>
			<h2 class="text-[20px]">Find a Warehouse</h2>
			<input
				type="text"
				id="location"
				name="location"
				placeholder="City, State, or Zip"
				class="mt-[15px] w-[600px] rounded border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
			/>
		</div>

		<div>
			<h3 class="text-[20px]">Get Email Offers</h3>
			<input
				type="text"
				id="location"
				name="location"
				placeholder="Enter your email"
				class="mt-[15px] w-[500px] rounded border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
			/>
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
