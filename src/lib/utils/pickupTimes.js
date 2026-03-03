/**
 * Pickup hours by day (0=Sun, 1=Mon, ..., 6=Sat):
 * - Weekdays (Mon-Fri): 10:00 - 20:15
 * - Saturday: 10:00 - 18:45
 * - Sunday: 10:00 - 17:45
 * All slots in 15-minute increments.
 */

/** @type {{ end: string }[]} */
const DAY_END_TIMES = [
	{ end: '17:45' }, // Sunday
	{ end: '20:15' }, // Monday
	{ end: '20:15' }, // Tuesday
	{ end: '20:15' }, // Wednesday
	{ end: '20:15' }, // Thursday
	{ end: '20:15' }, // Friday
	{ end: '18:45' }  // Saturday
];

function parseTime(timeStr) {
	const [h, m] = timeStr.split(':').map(Number);
	return h * 60 + m;
}

/** @returns {string[]} */
function generateAllSlots() {
	const slots = [];
	for (let h = 10; h <= 20; h++) {
		for (let m = 0; m < 60; m += 15) {
			if (h === 20 && m > 15) break;
			slots.push(`${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`);
		}
	}
	return slots;
}

const ALL_SLOTS = generateAllSlots();

/**
 * Get pickup time slots for a given date
 * @param {Date} date
 * @returns {string[]}
 */
export function getPickupTimeSlots(date) {
	const day = date.getDay();
	const endTime = DAY_END_TIMES[day].end;
	const endMinutes = parseTime(endTime);
	const startMinutes = parseTime('10:00');

	return ALL_SLOTS.filter((slot) => {
		const slotMinutes = parseTime(slot);
		return slotMinutes >= startMinutes && slotMinutes <= endMinutes;
	});
}
