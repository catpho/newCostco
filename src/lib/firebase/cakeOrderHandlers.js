//@ts-nocheck
import { db, auth } from '$lib/firebase/firebase.client';
import { cakeOrderListStore } from '$lib/stores/cakeOrderStore';
import {
    collection,
    addDoc,
    deleteDoc,
    updateDoc,
    getDoc,
    getDocs,
    doc,
    serverTimestamp,
    query,
    where
} from 'firebase/firestore';

export const cakeOrderHandlers = {
    // Fetch all cakeOrders
    getcakeOrders: async () => {
        try {

            const cakeOrdersRef = collection(db, 'cakeOrders');
            const cakeOrders = cakeOrdersRef.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            cakeOrderStore.set({ isLoading: false, cakeOrders, currentcakeOrder: null });
        } catch (error) {
            console.error('Error fetching cakeOrders:', error);
        }
    },

    getUserCakeOrders: async (userId) => {
        try {

            if (!userId) {
                throw new Error("User is not authenticated.");
            }

            const cakeOrdersRef = collection(db, 'cakeOrders');
            const q = query(cakeOrdersRef, where('userId', '==', userId)); // Query only the user's cakeOrders
            const snapshot = await getDocs(q);
            const cakeOrders = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            cakeOrderStore.update((state) => ({ ...state, isLoading: false, cakeOrders, currentcakeOrder: null }));
        } catch (error) {
            console.error('Error fetching cakeOrders:', error);
        }
    },

    // Fetch by ID
    getcakeOrder: async (cakeOrderId) => {
        try {

            const userId = auth.currentUser ? auth.currentUser.uid : null;

            if (!userId) {
                throw new Error("User is not authenticated.");
            }

            const cakeOrdersRef = doc(db, 'cakeOrders', cakeOrderId);
            const cakeOrderDoc = await getDoc(cakeOrderRef);
            if (cakeOrderDoc.exists()) {
                cakeOrderStore.update(state => ({
                    ...state,
                    isLoading: false,
                    currentcakeOrder: { id: cakeOrderDoc.id, ...cakeOrderDoc.data() }
                }));

                return cakeOrderDoc.data();
            } else {
                console.warn(`order with ID ${cakeOrderId} does not exist.`);
                cakeOrderStore.update(state => ({
                    ...state,
                    isLoading: false,
                    currentcakeOrder: null
                }));
            }
        } catch (error) {
            console.error('Error fetching order:', error);
        }
    },

    searchcakeOrder: async (searchQuery) => {
        try {
            const userId = auth.currentUser ? auth.currentUser.uid : null;
            if (!userId) {
                throw new Error("User is not authenticated.");
            }

            cakeOrderStore.update(state => ({ ...state, isLoading: true }));
            // Query Firestore for cakeOrders belonging to the user that match the search query
            const cakeOrdersRef = collection(db, 'cakeOrders');
            const q = query(
                cakeOrdersRef,
                where("userId", "==", userId) // Ensure only user-owned cakeOrders are retrieved
            );

            const querySnapshot = await getDocs(q);
            const filteredcakeOrders = querySnapshot.docs
                .map(doc => ({ id: doc.id, ...doc.data() })) // Convert snapshot to array
                .filter(cakeOrder =>
                    cakeOrder.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    cakeOrder.content.toLowerCase().includes(searchQuery.toLowerCase())
                ); // Client-side filtering

            console.log('Filtered cakeOrders:', filteredcakeOrders); // Debugging log

            // ✅ Correctly updating `cakeOrders`
            cakeOrderStore.update(state => ({
                ...state,
                isLoading: false,
                cakeOrders: filteredcakeOrders
            }));

            return filteredcakeOrders;

        } catch (error) {
            console.error('Error fetching cakeOrders:', error);
            cakeOrderStore.update(state => ({ ...state, isLoading: false }));
        }
    },
    // Add a new cakeOrder

    createcakeOrder: async (cakeOrderData, userId) => {
        try {

            const cakeOrdersRef = collection(db, 'cakeOrders');
            const newcakeOrderRef = await addDoc(cakeOrdersRef, {
                ...cakeOrderData,
                userId,
                cakeOrderCreatedAt: serverTimestamp(),
                lastUpdated: serverTimestamp(),


            });

            await cakeOrderHandlers.getUsercakeOrders(userId);
            return newcakeOrderRef.id;

        } catch (error) {
            console.error('Error creating cakeOrder:', error);
            throw error;
        }
    },

    // Upload cakeOrder images and update the cakeOrder with URLs
    uploadImages: async (cakeOrderId, imageFiles) => {
        try {
            const storage = getStorage();
            const imageUrls = await Promise.all(
                imageFiles.map(async (file) => {
                    const storageRef = ref(storage, `cakeOrder_images/${cakeOrderId}/${file.name}`);
                    await uploadBytes(storageRef, file);
                    return getDownloadURL(storageRef);
                })
            );

            const cakeOrderRef = doc(db, 'cakeOrders', cakeOrderId);

            await updateDoc(cakeOrderRef, { imageUrls });
            return imageUrls;
        } catch (error) {
            console.error('Error uploading images:', error);
            throw error;
        }
    },

    // Update an existing cakeOrder
    updatecakeOrder: async (cakeOrderId, cakeOrderData, userId) => {
        try {
            const cakeOrderRef = doc(db, 'cakeOrders', cakeOrderId);
            const cakeOrderDoc = await getDoc(cakeOrderRef);
            // console.log("cakeOrderdoc id:", cakeOrderDoc.data().userId)
            // console.log("userid:", userId)
            if (!cakeOrderDoc.exists() || cakeOrderDoc.data().userId !== userId) {
                throw new Error("You do not have permission to update this cakeOrder.");
            }
            await updateDoc(cakeOrderRef, cakeOrderData);
            await cakeOrderHandlers.getUsercakeOrders(userId);
            return cakeOrderId;
        } catch (error) {
            console.error('Error updating cakeOrder:', error);
            throw error;
        }
    },

    // Delete a cakeOrder
    deletecakeOrder: async (cakeOrderId, userId) => {
        const confirmation = window.confirm('Are you sure you want to delete this cakeOrder?');
        if (!confirmation) return;

        try {
            // Verify ownership and existence of the cakeOrder before deletion
            const cakeOrderRef = doc(db, 'cakeOrders', cakeOrderId);
            const cakeOrderDoc = await getDoc(cakeOrderRef);
            if (!cakeOrderDoc.exists() || cakeOrderDoc.data().userId !== userId) {
                throw new Error("You do not have permission to delete this cakeOrder.");
            }

            // Delete the cakeOrder document from the "cakeOrders" collection
            await deleteDoc(cakeOrderRef);

            // Remove the cakeOrder from the user's "mycakeOrders" array in Firestore
            const userRef = doc(db, 'users', userId);
            const userDoc = await getDoc(userRef);
            if (userDoc.exists()) {
                const userData = userDoc.data();
                const updatedPersonalcakeOrders = userData.mycakeOrders.filter(cakeOrder => cakeOrder.id !== cakeOrderId);
                await updateDoc(userRef, { mycakeOrders: updatedPersonalcakeOrders });

                // If needed, update the user data locally (e.g., via your userHandlers)
                await userHandlers.updateUser(userId, { mycakeOrders: updatedPersonalcakeOrders });
            }

            // Refresh the cakeOrderStore by re-fetching the user's cakeOrders from the database
            await cakeOrderHandlers.getUsercakeOrders(userId);

            alert('cakeOrder successfully deleted.');
        } catch (error) {
            console.error('Error deleting cakeOrder:', error);
        }
    },
};