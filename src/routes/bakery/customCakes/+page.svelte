<script>
	import CakeStep from '$lib/components/CakeStep.svelte';
	import PickupCalendar from '$lib/components/PickupCalendar.svelte';
	import { findStoresNearZip } from '$lib/utils/storeLocator.js';
	import { getPickupTimeSlots } from '$lib/utils/pickupTimes.js';

	let activeStep = 'store';
	let zipCode = '';
	/** @type {{ store: { id: string; name: string; address: string; city: string; state: string; zip: string }; distance: number }[]} */
	let stores = [];
	let isLoading = false;
	let searchError = '';
	/** @type {{ id: string; name: string; address: string; city: string; state: string; zip: string } | null} */
	let selectedStore = null;
	/** @type {Date | null} */
	let selectedPickupDate = null;
	/** @type {string | null} */
	let selectedPickupTime = null;
	let pickupComplete = false;

	/** @type {Date | null} */
	let lastPickupDate = null;
	$: pickupTimeSlots = selectedPickupDate ? getPickupTimeSlots(selectedPickupDate) : [];
	$: {
		if (selectedPickupDate !== lastPickupDate) {
			lastPickupDate = selectedPickupDate;
			selectedPickupTime = null;
		}
	}

	$: canAccessPickup = selectedStore !== null;
	$: canAccessCheckout = pickupComplete;

	/** @param {string} stepId */
	function goToStep(stepId) {
		if (stepId === 'store') activeStep = 'store';
		else if (stepId === 'pickup' && canAccessPickup) activeStep = 'pickup';
		else if (stepId === 'checkout' && canAccessCheckout) activeStep = 'checkout';
	}

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

	/** @param {string} time - "HH:MM" */
	function formatTime(time) {
		const [h, m] = time.split(':').map(Number);
		const period = h >= 12 ? 'pm' : 'am';
		const hour = h > 12 ? h - 12 : h === 0 ? 12 : h;
		return `${hour}:${m.toString().padStart(2, '0')} ${period}`;
	}

	/** @param {{ id: string }} step */
	function isStepAccessible(step) {
		if (step.id === 'store') return true;
		if (step.id === 'pickup') return canAccessPickup;
		if (step.id === 'checkout') return canAccessCheckout;
		return false;
	}
</script>
<!-- TODO: REFACTOR THE CODE TO BE SO THAT THE PROGRESS ORDER BAR IS A COMPONENT THAT IS IMPORTED TO USED HERE  -->
<div>
	
		<nav class="border-b mb-6">
			<ul class="flex gap-8 items-start">
				{#each steps as step}
					<li>
						{#if step.id === 'store' && selectedStore && activeStep !== 'store'}
							<div class="flex flex-col">
								<span class="font-semibold text-gray-800">
									{selectedStore.name}
								</span>
								<span class="text-sm text-gray-500">
									{selectedStore.address}, {selectedStore.city}, {selectedStore.state} {selectedStore.zip}
								</span>
								<button
									type="button"
									class="text-xs text-blue-600 underline mt-1 hover:text-blue-800"
									on:click={() => (activeStep = 'store')}
								>
									edit
								</button>
							</div>
		
						{:else if step.id === 'pickup' && selectedPickupDate && selectedPickupTime && activeStep === 'checkout'}
							<div class="flex flex-col">
								<span class="font-semibold text-gray-800">
									{selectedPickupDate.toLocaleDateString('en-US', {
										weekday: 'long',
										month: 'long',
										day: 'numeric',
										year: 'numeric'
									})}
								</span>
								<span class="text-sm text-gray-500">
									{formatTime(selectedPickupTime)}
								</span>
								<button
									type="button"
									class="text-xs text-blue-600 underline mt-1 hover:text-blue-800"
									on:click={() => (activeStep = 'pickup')}
								>
									edit
								</button>
							</div>
		
						{:else}
							<button
								type="button"
								on:click={() => goToStep(step.id)}
								disabled={!isStepAccessible(step)}
								class="pb-2 border-b-2 transition
								{activeStep === step.id
									? 'border-blue-600 text-blue-600 font-semibold'
									: 'border-transparent text-gray-500 hover:text-gray-800'}
								disabled:text-gray-400 disabled:cursor-not-allowed"
							>
								{step.label}
							</button>
						{/if}
					</li>
				{/each}
			</ul>
		</nav>
	

	<picture>
		<!-- Placeholder for bakery image -->
	</picture>

	{#if activeStep === 'store'}
		<div class="max-w-xl border border-gray-200 rounded-lg p-6 bg-gray-50 shadow-sm">
			
			<p class="text-sm text-gray-600 mb-4">
				Enter your zipcode to find avaliable Costco stores with online cake ordering. 
			</p>
			<div class="flex gap-2 mb-4">
				<input
					type="text"
					inputmode="numeric"
					placeholder="Enter zip code"
					bind:value={zipCode}
					on:keydown={(e) => e.key === 'Enter' && searchStores()}
					maxlength="5"
					class="w-40 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
				/>
				<button
					type="button"
					on:click={searchStores}
					disabled={isLoading}
					class="px-4 py-2 bg-blue-600 text-white rounded-md font-medium 
					hover:bg-blue-700 transition
					disabled:opacity-70 disabled:cursor-not-allowed"
				>
					{isLoading ? 'Searching...' : 'Find Stores'}
				</button>
			</div>
			{#if searchError}
				<p class="text-red-600 text-sm mb-4">{searchError}</p>
			{/if}
			{#if selectedStore}
				<div class="mb-4 p-3 bg-green-50 border border-green-200 rounded">
					<p class="font-medium text-green-800">Selected: {selectedStore.city}</p>
					<p class="text-sm text-green-700">
						{selectedStore.address}, 
                        <br>{selectedStore.state} {selectedStore.zip}
					</p>
					<button
						type="button"
						on:click={() => (activeStep = 'pickup')}
						class="px-4 py-2 bg-blue-600 text-white rounded font-medium hover:bg-blue-700 disabled:opacity-70 disabled:cursor-not-allowed mt-3"
					>
						Continue to Pickup
					</button>
				</div>
			{/if}
			{#if stores.length > 0}
				<ul class="flex flex-col gap-2 max-h-80 overflow-y-auto">
					{#each stores as { store, distance }}
						<li>
							<button
								type="button"
								class="w-full text-left px-4 py-3 border border-gray-300 rounded bg-white
								hover:border-blue-600 hover:bg-gray-50 transition
								{selectedStore?.id === store.id ? 'border-blue-600 bg-blue-50' : ''}"
								class:selected={selectedStore?.id === store.id}
								on:click={() => selectStore({ store })}
							>
								<div class="font-semibold text-gray-800">{store.city}</div>
								<div class="text-sm text-gray-500">
									{store.address},
                                    <br>{store.state} {store.zip}
								</div>
								<div class="text-xs text-blue-600">{distance.toFixed(1)} mi away</div>
							</button>
						</li>
					{/each}
				</ul>
			{/if}
		</div>
	{:else if activeStep === 'pickup'}
		<div class="max-w-xl border rounded p-6 bg-gray-50">
			<h2 class="text-lg font-semibold mb-4">Choose a pickup day and time</h2>
			<PickupCalendar bind:selectedDate={selectedPickupDate} />
			{#if selectedPickupDate}
				<p class="text-sm text-gray-700 mt-3">
					Selected date: {selectedPickupDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
				</p>
				<div class="mt-4">
					<p class="text-sm font-medium text-gray-700 mb-2">Pickup time</p>
					<div class="flex flex-wrap gap-2">
						{#each pickupTimeSlots as slot}
							<button
								type="button"
								class="px-3 py-2 border border-gray-300 rounded text-sm transition
								hover:border-blue-600 hover:bg-gray-50
								{selectedPickupTime === slot
									? 'bg-blue-600 text-white border-blue-600'
									: 'bg-white'}"
								class:selected={selectedPickupTime === slot}
								on:click={() => (selectedPickupTime = slot)}
							>
								{formatTime(slot)}
							</button>
						{/each}
					</div>
				</div>
			{/if}
			<button
				type="button"
				on:click={() => { pickupComplete = true; activeStep = 'checkout'; }}
				class="px-4 py-2 bg-blue-600 text-white rounded font-medium hover:bg-blue-700 disabled:opacity-70 disabled:cursor-not-allowed mt-4"
				disabled={!selectedPickupDate || !selectedPickupTime}
			>
				Continue to Checkout
			</button>
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
	
</style>