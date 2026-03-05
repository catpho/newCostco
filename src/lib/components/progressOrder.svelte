<script>
    //@ts-nocheck
	/** @type {{ id: string; label: string }[]} */
	export let steps = [];

	export let activeStep;
	export let selectedStore = null;
	export let selectedPickupDate = null;
	export let selectedPickupTime = null;

	export let canAccessPickup = false;
	export let canAccessCheckout = false;

	export let goToStep;

	function formatTime(time) {
		const [h, m] = time.split(':').map(Number);
		const period = h >= 12 ? 'pm' : 'am';
		const hour = h > 12 ? h - 12 : h === 0 ? 12 : h;
		return `${hour}:${m.toString().padStart(2, '0')} ${period}`;
	}

	function isStepAccessible(step) {
		if (step.id === 'store') return true;
		if (step.id === 'pickup') return canAccessPickup;
		if (step.id === 'checkout') return canAccessCheckout;
		return false;
	}
	
</script>

<nav class="border-b mb-6">
	<ul class="flex gap-8">
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
							class="text-xs text-blue-600 underline mt-1"
							on:click={() => goToStep('store')}
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
							class="text-xs text-blue-600 underline mt-1"
							on:click={() => goToStep('pickup')}
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