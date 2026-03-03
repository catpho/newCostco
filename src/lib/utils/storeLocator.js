import { costcoStores } from '$lib/data/costcoStores.js';

/**
 * Convert degrees to radians
 */
function toRad(deg) {
	return (deg * Math.PI) / 180;
}

/**
 * Haversine formula - distance in miles between two lat/lng points
 */
function haversineDistance(lat1, lng1, lat2, lng2) {
	const R = 3959; // Earth's radius in miles
	const dLat = toRad(lat2 - lat1);
	const dLng = toRad(lng2 - lng1);
	const a =
		Math.sin(dLat / 2) * Math.sin(dLat / 2) +
		Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) * Math.sin(dLng / 2);
	const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
	return R * c;
}

/**
 * Fetch coordinates for a US zip code via zippopotam API
 * @param {string} zip - 5-digit US zip code
 * @returns {Promise<{ lat: number, lng: number } | null>}
 */
export async function getZipCoordinates(zip) {
	const cleanZip = String(zip).trim().slice(0, 5);
	if (cleanZip.length < 5 || !/^\d{5}$/.test(cleanZip)) return null;
	try {
		const res = await fetch(`https://api.zippopotam.us/us/${cleanZip}`);
		if (!res.ok) return null;
		const data = await res.json();
		const place = data?.places?.[0];
		if (!place) return null;
		return {
			lat: parseFloat(place.latitude),
			lng: parseFloat(place.longitude)
		};
	} catch {
		return null;
	}
}

/**
 * Find Costco stores near a zip code, sorted by distance
 * @param {string} zip - 5-digit US zip code
 * @param {number} limit - max stores to return (default 8)
 * @returns {Promise<{ store: typeof costcoStores[0], distance: number }[] | null>}
 */
export async function findStoresNearZip(zip, limit = 8) {
	const coords = await getZipCoordinates(zip);
	if (!coords) return null;
	const withDistance = costcoStores.map((store) => ({
		store,
		distance: haversineDistance(coords.lat, coords.lng, store.lat, store.lng)
	}));
	withDistance.sort((a, b) => a.distance - b.distance);
	return withDistance.slice(0, limit);
}
