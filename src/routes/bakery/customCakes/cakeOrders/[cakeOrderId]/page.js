//@ts-nocheck
import { cakeOrderHandlers } from '$lib/stores/cakeOrderStore.js';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
    try {
        const { cakeOrderId } = params;
        // console.log('Listing ID =>', cakeOrderId);

        // 1) Fetch the main listing data
        const cakeOrderData = { ... await cakeOrderHandlers.getcakeOrder(cakeOrderId)};
        // console.log('Got listingData =>', listingData);

        if (!cakeOrderData) {
            throw error(404, 'cakeOrder not found');
        }


        // Return both the listingData and fetchedItems to the page
        return {
            cakeOrderData: cakeOrderData,
            
        };
    } catch (err) {
        // This ensures we see exactly what is failing
        console.error('Error in load function =>', err);
        // Rethrow so SvelteKit knows it's an error
        throw err;
    }
}