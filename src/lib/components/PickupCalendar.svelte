<script>
	import { createEventDispatcher } from 'svelte';

	/** @type {Date | null} */
	export let selectedDate = null;

	const dispatch = createEventDispatcher();

	const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
	const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

	const today = new Date();
	today.setHours(0, 0, 0, 0);

	// Min: 3 days from today
	const minDate = new Date(today);
	minDate.setDate(minDate.getDate() + 3);

	// Max: 2 months from today
	const maxDate = new Date(today);
	maxDate.setMonth(maxDate.getMonth() + 2);

	const minMonthStart = new Date(minDate.getFullYear(), minDate.getMonth(), 1).getTime();
	const maxMonthStart = new Date(maxDate.getFullYear(), maxDate.getMonth(), 1).getTime();

	/** @type {Date} */
	let displayMonth = selectedDate
		? new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1)
		: new Date(today.getFullYear(), today.getMonth(), 1);

	/** @param {Date} date */
	function isInRange(date) {
		const d = new Date(date);
		d.setHours(0, 0, 0, 0);
		return d >= minDate && d <= maxDate;
	}

	/** @param {Date} date */
	function isSelected(date) {
		if (!selectedDate) return false;
		return (
			date.getDate() === selectedDate.getDate() &&
			date.getMonth() === selectedDate.getMonth() &&
			date.getFullYear() === selectedDate.getFullYear()
		);
	}

	/** @param {Date} date */
	function selectDate(date) {
		if (!isInRange(date)) return;
		selectedDate = new Date(date);
		dispatch('select', { date: selectedDate });
	}

	function prevMonth() {
		displayMonth = new Date(displayMonth.getFullYear(), displayMonth.getMonth() - 1, 1);
	}

	function nextMonth() {
		displayMonth = new Date(displayMonth.getFullYear(), displayMonth.getMonth() + 1, 1);
	}

	$: displayMonthStart = new Date(displayMonth.getFullYear(), displayMonth.getMonth(), 1).getTime();
	$: canPrevMonth = displayMonthStart > minMonthStart;
	$: canNextMonth = displayMonthStart < maxMonthStart;

	$: calendarDays = (() => {
		const year = displayMonth.getFullYear();
		const month = displayMonth.getMonth();
		const firstDay = new Date(year, month, 1);
		const lastDay = new Date(year, month + 1, 0);
		const startOffset = firstDay.getDay();
		const daysInMonth = lastDay.getDate();
		const days = [];

		// Empty cells before first day
		for (let i = 0; i < startOffset; i++) {
			days.push({ date: null, inRange: false });
		}
		// Days of month
		for (let d = 1; d <= daysInMonth; d++) {
			const date = new Date(year, month, d);
			days.push({ date, inRange: isInRange(date) });
		}
		return days;
	})();
</script>

<div class="pickup-calendar">
	<div class="calendar-header">
		<button
			type="button"
			class="nav-btn"
			disabled={!canPrevMonth}
			on:click={prevMonth}
			aria-label="Previous month"
		>
			←
		</button>
		<h3 class="calendar-title">{MONTHS[displayMonth.getMonth()]} {displayMonth.getFullYear()}</h3>
		<button
			type="button"
			class="nav-btn"
			disabled={!canNextMonth}
			on:click={nextMonth}
			aria-label="Next month"
		>
			→
		</button>
	</div>

	<div class="weekday-row">
		{#each WEEKDAYS as day}
			<span class="weekday-cell">{day}</span>
		{/each}
	</div>

	<div class="days-grid">
		{#each calendarDays as { date, inRange }}
			{#if date}
				<button
					type="button"
					class="day-cell"
					class:selectable={inRange}
					class:selected={isSelected(date)}
					disabled={!inRange}
					on:click={() => selectDate(date)}
				>
					{date.getDate()}
				</button>
			{:else}
				<span class="day-cell empty"></span>
			{/if}
		{/each}
	</div>

	<p class="calendar-hint">Pickup must be at least 3 days from today, up to 2 months ahead.</p>
</div>

<style>
	.pickup-calendar {
		max-width: 20rem;
	}

	.calendar-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 1rem;
	}

	.calendar-title {
		font-size: 1rem;
		font-weight: 600;
		margin: 0;
	}

	.nav-btn {
		width: 2rem;
		height: 2rem;
		display: flex;
		align-items: center;
		justify-content: center;
		border: 1px solid #ddd;
		background: white;
		border-radius: 0.25rem;
		cursor: pointer;
		font-size: 1rem;
	}

	.nav-btn:hover:not(:disabled) {
		background: #f5f5f5;
		border-color: #005dab;
	}

	.nav-btn:disabled {
		opacity: 0.4;
		cursor: not-allowed;
	}

	.weekday-row {
		display: grid;
		grid-template-columns: repeat(7, 1fr);
		gap: 0.25rem;
		margin-bottom: 0.5rem;
	}

	.weekday-cell {
		font-size: 0.7rem;
		font-weight: 600;
		color: #666;
		text-align: center;
	}

	.days-grid {
		display: grid;
		grid-template-columns: repeat(7, 1fr);
		gap: 0.25rem;
	}

	.day-cell {
		aspect-ratio: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 0.875rem;
		border: none;
		background: transparent;
		border-radius: 0.25rem;
		cursor: default;
	}

	.day-cell.selectable {
		cursor: pointer;
	}

	.day-cell.selectable:hover {
		background: #e8f4fc;
	}

	.day-cell.selected {
		background: #005dab;
		color: white;
		font-weight: 600;
	}

	.day-cell:disabled {
		color: #bbb;
	}

	.day-cell.empty {
		visibility: hidden;
	}

	.calendar-hint {
		margin-top: 0.75rem;
		font-size: 0.75rem;
		color: #666;
	}
</style>
