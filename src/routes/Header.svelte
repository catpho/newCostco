<script lang="ts">
	import { page } from '$app/stores';
	import logo from '$lib/images/Costco-Logo-Registered.svg';

	import { Search } from 'flowbite-svelte';

		let isOpen = false;
	const toggle = () => (isOpen = !isOpen);

	const options = [
		{ label: "United States", href: "/" },
		{ label: "Canada", href: "/" },
		{ label: "Mexico", href: "/" }
	];
</script>

<header>
	<!--the container for this nav bar needs to be adjusted to be consistent in style regardless of the browser/screen size	-->
	<!--make sure that number of list items change when the screen is adjusted	-->
	<div class="top-nav ">
	<nav class="max-w-[1800px] w-full">
		<a href="/">Costco Next</a>
		<a href="/">While Supplies Last</a>
		<a href="/">Online-Only</a>
		<a href="/">Treasure Hunt</a>
		<a href="/">What's New</a>
		<a href="/">Member Favorites</a>
		<a href="/">Get Email Offers</a>
		<a href="/">Customer Service</a>
		
		<button
			on:click={toggle}
			class="flex items-center gap-1 px-2 py-1 rounded hover:bg-gray-100"
		>
			<span>US</span>
			<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
			</svg>
		</button>

		{#if isOpen}
			<div
				class="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg border border-gray-200 z-50"
			>
				{#each options as option}
					<a
						href={option.href}
						class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
					>
						{option.label}
					</a>
				{/each}
			</div>
		{/if}
	
	</nav>
	</div>
	
</header>
<div class="main-nav p-2 ">
<nav class="max-w-[1800px] w-full">
	<a class="costco-logo" href="https://www.costco.com/">
		<img src={logo} alt="Costco Logo" />
	</a>

	<div class="flex-grow">
		<div class="relative">
			<input
				type="text"
				placeholder="Search Costco"
				class="w-full  pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
			/>
			
			<button
				type="button"
				
				class="absolute inset-y-0 right-0 flex items-center pr-3 text-[#1566aa] hover:text-blue-500 focus:outline-none"
			>
				<svg class="transform scale-x-[-1] text-[#005eab]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
				<path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
				</svg>

			</button>
			</div>
	</div>

	<a href="/">Account</a>

	<a href="/">Orders & Returns</a>

	<a href="/">
		<svg
			class="h-[34px] w-[34px] text-gray-800"
			aria-hidden="true"
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			fill="none"
			viewBox="0 0 24 24"
		>
			<path
				stroke="#1566aa"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="1.3"
				d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"
			/>
		</svg>
		Cart</a
	>
</nav></div>
<div class="bottom-nav ">
<nav class="max-w-[1800px] w-full ">
	<ul class="bottom-nav-list space-x-4 justify-between">
		<li>
			<a href="/"
				><svg
					class="h-6 w-6 text-gray-800 dark:text-white"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					fill="none"
					viewBox="0 0 24 24"
				>
					<path
						stroke="currentColor"
						stroke-linecap="round"
						stroke-width="2"
						d="M5 7h14M5 12h14M5 17h14"
					/>
				</svg>
				Shop</a
			>
		</li>
		<li>
			<a href="https://www.costco.com/grocery-household.html">Grocery</a>
		</li>
		<li>
			<a href="/">Bakery</a>
		</li>
		<li>
			<a href="https://sameday.costco.com/?utm_source=nav&zipcode=20170">Same Day</a>
		</li>
		<li>
			<a href="https://www.costco.com/s?keyword=OFF&dept=All">Savings</a>
		</li>
		<li>
			<a href="https://www.costcobusinessdelivery.com/">Business Delivery</a>
		</li>
		<li>
			<a href="https://www.costco.com/optical.html">Optical</a>
		</li>
		<li>
			<a href="https://rx.costco.com/">Pharmacy</a>
		</li>
		<li>
			<a href="https://www.costco.com/services.html">Services</a>
		</li>
		<li>
			<a href="https://www.costco.com/photo.html">Photo</a>
		</li>
		<li>
			<a href="https://www.costcotravel.com/?utm_source=costco.com&utm_medium=TopNav&utm_campaign=mkt&utm_term=costcotravel.com&utm_content=20160621">Travel</a>
		</li>
		<li>
			<a href="https://www.costco.com/join-costco.html">Membership</a>
		</li>
		<li>
			<a href="https://www.costco.com/warehouse-locations?langId=-1&storeId=10301&catalogId=10701">Locations</a>
		</li>
	</ul>
</nav>
</div>

<style>
	header {
		display: flex;
	}

	.costco-logo img {
		width: 12rem;
		height: 6rem;

		object-fit: contain;
	}

	nav {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 1rem;
	}

	.top-nav {
		display: flex;
		justify-content: right;
		align-items: center;
		width: 100%;
		background: #eeeeee;
		padding: 1rem;
	}

	.top-nav a {
		color: #1566aa;
		font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif !important;
		font-size: 16px;
	}

	.bottom-nav {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		background: #005dab;
		padding: 0;
	}

	.bottom-nav a {
		color: white;
		font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif !important;
		font-size: large;
	}

	.main-nav {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		background: #eeeeee;
	}

	.main-nav a {
		font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif !important;
		color: #1566aa;
		font-size: large;
	}

	.bottom-nav-list {
		position: relative;
		height: 3em;
		display: flex;
		justify-content: left;
		align-items: center;
		list-style: none;
		width: 100%;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: normal;
		font-size: 0.8rem;
		font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif !important;
		text-transform: none;
		letter-spacing: normal;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--color-theme-1);
	}
</style>
