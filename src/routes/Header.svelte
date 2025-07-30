<script lang="ts">
	import { page } from '$app/stores';
	import logo from '$lib/images/Costco-Logo-Registered.svg';

	import { Search } from 'flowbite-svelte';
</script>

<header>
	<!--the container for this nav bar needs to be adjusted to be consistent in style regardless of the browser/screen size	-->
	<!--make sure that number of list items change when the screen is adjusted	-->
	<nav class="top-nav">
		<a href="/">Costco Next</a>
		<a href="/">While Supplies Last</a>
		<a href="/">Online-Only</a>
		<a href="/">Treasure Hunt</a>
		<a href="/">What's New</a>
		<a href="/">Member Favorites</a>
		<a href="/">Get Email Offers</a>
		<a href="/">Customer Service</a>
		<a href="/">US (dropdownlist)</a>
	</nav>
</header>
<nav class="main-nav p-2 pl-6 pr-6">
	<a class="costco-logo" href="https://www.costco.com/">
		<img src={logo} alt="Costco Logo" />
	</a>

	<div class="flex-grow">
		<Search placeholder="Search Costco" class="w-full" />
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
</nav>
<nav class="bottom-nav">
	<ul class="bottom-nav-list space-x-4">
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
			<a href="/">Grocery</a>
		</li>
		<li>
			<a href="/">Same Day</a>
		</li>
		<li>
			<a href="/">Savings</a>
		</li>
		<li>
			<a href="/">Business Delivery</a>
		</li>
		<li>
			<a href="/">Optical</a>
		</li>
		<li>
			<a href="/">Pharmacy</a>
		</li>
		<li>
			<a href="/">Services</a>
		</li>
		<li>
			<a href="/">Photo</a>
		</li>
		<li>
			<a href="/">Travel</a>
		</li>
		<li>
			<a href="/">Membership</a>
		</li>
		<li>
			<a href="/">Locations</a>
		</li>
	</ul>
</nav>

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
		margin-left: 25px;
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
