<script lang="ts">
	import { page } from '$app/stores';
	import logo from '$lib/images/Costco-Logo-Registered.svg';
	import github from '$lib/images/github.svg';
	import { Search } from 'flowbite-svelte';
</script>

<header>
	<!--the container for this nav bar needs to be adjusted to be consistent in style regardless of the browser/screen size	-->
	<!--make sure that number of list items change when the screen is adjusted	-->
	<nav class="top-nav">
		<ul>
			<li>
				<a href="/">Costco Next</a>
			</li>
			<li>
				<a href="/">While Supplies Last</a>
			</li>
			<li>
				<a href="/">Online-Only</a>
			</li>
			<li>
				<a href="/">Treasure Hunt</a>
			</li>
			<li>
				<a href="/">What's New</a>
			</li>
			<li>
				<a href="/">Member Favorites</a>
			</li>
			<li>
				<a href="/">Get Email Offers</a>
			</li>
			<li>
				<a href="/">Customer Service</a>
			</li>
			<li>
				<a href="/">US(dropdownlist)</a>
			</li>
		</ul>
	</nav>
</header>
<nav class="main-nav">
	<a class="costco-logo" href="https://www.costco.com/">
		<img src={logo} alt="Costco Logo" />
	</a>

	<Search size="lg" clearable />

	<a href="/">Sign In/Register</a>

	<a href="/">Orders & Returns</a>

	<span>Cart(with logo)</span>
</nav>
<nav class="bottom-nav">
	<ul>
		<li>
			<a href="/">Shop</a>
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
			<a href="/">US(dropdownlist)</a>
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
		justify-content: center;
		align-items: center;
		width: 100%;
		background: #eeeeee;
		padding: 0;
	}

	.top-nav a {
		color: #1566aa;
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
	}

	.main-nav {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		background: #eeeeee;
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
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

	li[aria-current='page']::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--color-theme-1);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--color-theme-1);
	}
</style>
