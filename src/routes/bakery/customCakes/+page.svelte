<script>
	import CakeStep from '$lib/components/CakeStep.svelte';
	import { findStoresNearZip } from '$lib/utils/storeLocator.js';

	let activeStep = 'store';
	let zipCode = '';
	/** @type {{ store: { id: string; name: string; address: string; city: string; state: string; zip: string }; distance: number }[]} */
	let stores = [];
	let isLoading = false;
	let searchError = '';
	/** @type {{ id: string; name: string; address: string; city: string; state: string; zip: string } | null} */
	let selectedStore = null;

	async function searchStores() {
		searchError = '';
		stores = [];
		if (!zipCode.trim()) {
			searchError = 'Please enter a zip code';
			return;
		}
		isLoading = true;
		try {
			const results = await findStoresNearZip(zipCode.trim(), 8);
			if (!results) {
				searchError = 'Invalid zip code or no stores found. Please try another zip.';
			} else {
				stores = results;
			}
		} catch {
			searchError = 'Could not search for stores. Please try again.';
		} finally {
			isLoading = false;
		}
	}

	/** @param {{ store: { id: string; name: string; address: string; city: string; state: string; zip: string } }} item */
	function selectStore(item) {
		selectedStore = item.store;
	}

	const steps = [
		{ id: 'store', label: 'Choose a Store' },
		{ id: 'pickup', label: 'Choose a pickup day and time' },
		{ id: 'checkout', label: 'Checkout and Subtotal' }
	];
</script>

<div>
	<nav>
		<ul class="horizontal-list">
			{#each steps as step}
				<li>
					<button
						class="step-btn"
						class:active={activeStep === step.id}
						on:click={() => (activeStep = step.id)}
						type="button"
					>
						{step.label}
					</button>
				</li>
			{/each}
		</ul>
	</nav>

	<picture>
		<!-- Placeholder for bakery image -->
	</picture>

	{#if activeStep === 'store'}
		<div class="store-selector max-w-xl border rounded p-6 bg-gray-50">
			<h2 class="text-lg font-semibold mb-4">Choose a Store</h2>
			<p class="text-sm text-gray-600 mb-4">
				Enter your zip code to find Costco stores near you.
			</p>
			<div class="flex gap-2 mb-4">
				<input
					type="text"
					inputmode="numeric"
					placeholder="Enter zip code"
					bind:value={zipCode}
					on:keydown={(e) => e.key === 'Enter' && searchStores()}
					maxlength="5"
					class="zip-input"
				/>
				<button
					type="button"
					on:click={searchStores}
					disabled={isLoading}
					class="search-btn"
				>
					{isLoading ? 'Searching...' : 'Find Stores'}
				</button>
			</div>
			{#if searchError}
				<p class="text-red-600 text-sm mb-4">{searchError}</p>
			{/if}
			{#if selectedStore}
				<div class="mb-4 p-3 bg-green-50 border border-green-200 rounded">
					<p class="font-medium text-green-800">Selected: {selectedStore.name}</p>
					<p class="text-sm text-green-700">
						{selectedStore.address}, {selectedStore.city}, {selectedStore.state} {selectedStore.zip}
					</p>
				</div>
			{/if}
			{#if stores.length > 0}
				<ul class="store-list">
					{#each stores as { store, distance }}
						<li>
							<button
								type="button"
								class="store-item"
								class:selected={selectedStore?.id === store.id}
								on:click={() => selectStore({ store })}
							>
								<div class="store-name">{store.name}</div>
								<div class="store-address">
									{store.address}, {store.city}, {store.state} {store.zip}
								</div>
								<div class="store-distance">{distance.toFixed(1)} mi away</div>
							</button>
						</li>
					{/each}
				</ul>
			{/if}
		</div>
	{:else if activeStep === 'pickup'}
		<div class="max-w-xl border rounded p-6 bg-gray-50">
			<h2 class="text-lg font-semibold">Choose a pickup day and time</h2>
			<p class="text-sm text-gray-500 mt-2">Coming soon.</p>
		</div>
	{:else}
		<div class="max-w-xl border rounded p-6 bg-gray-50">
			<h2 class="text-lg font-semibold">Checkout and Subtotal</h2>
			<p class="text-sm text-gray-500 mt-2">Coming soon.</p>
		</div>
	{/if}

	<CakeStep />
</div>

<style>
	.horizontal-list {
		display: flex;
		list-style: none;
		padding: 0;
		gap: 1rem;
	}

	.horizontal-list li {
		margin: 0;
	}

	.step-btn {
		padding: 0.5rem 1rem;
		border: none;
		background: none;
		cursor: pointer;
		font-size: 1rem;
		color: #666;
		border-bottom: 2px solid transparent;
	}

	.step-btn:hover {
		color: #333;
	}

	.step-btn.active {
		color: #005dab;
		font-weight: 600;
		border-bottom-color: #005dab;
	}

	.zip-input {
		flex: 1;
		max-width: 10rem;
		padding: 0.5rem 0.75rem;
		border: 1px solid #ccc;
		border-radius: 0.25rem;
	}

	.zip-input:focus {
		outline: none;
		border-color: #005dab;
		box-shadow: 0 0 0 2px rgba(0, 93, 171, 0.2);
	}

	.search-btn {
		padding: 0.5rem 1rem;
		background: #005dab;
		color: white;
		border: none;
		border-radius: 0.25rem;
		cursor: pointer;
		font-weight: 500;
	}

	.search-btn:hover:not(:disabled) {
		background: #004a8c;
	}

	.search-btn:disabled {
		opacity: 0.7;
		cursor: not-allowed;
	}

	.store-list {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		max-height: 20rem;
		overflow-y: auto;
	}

	.store-item {
		text-align: left;
		width: 100%;
		padding: 0.75rem 1rem;
		border: 1px solid #ddd;
		border-radius: 0.25rem;
		background: white;
		cursor: pointer;
		transition: border-color 0.15s, background 0.15s;
	}

	.store-item:hover {
		border-color: #005dab;
		background: #f8fafc;
	}

	.store-item.selected {
		border-color: #005dab;
		background: #e8f4fc;
	}

	.store-name {
		font-weight: 600;
		color: #333;
		margin-bottom: 0.25rem;
	}

	.store-address {
		font-size: 0.875rem;
		color: #666;
		margin-bottom: 0.25rem;
	}

	.store-distance {
		font-size: 0.75rem;
		color: #005dab;
	}
</style>