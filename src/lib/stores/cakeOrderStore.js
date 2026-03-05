//@ts-nocheck
import { writable } from 'svelte/store';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { auth } from '$lib/firebase/firebase.client';
/**
 * @typedef {import('./components').cakeOrder} cakeOrder
 */

/** @type {{ isLoading: boolean, cakeOrders: cakeOrder[], currentcakeOrder: cakeOrder | null }} */

export const stepIndex = writable(0);

export const cakeOrderStore = writable({
    flavor:'',
    cost:0.00,
    design:'',
    message:'',
    notes:'',
    phone:999-999-9999,
    consent:false,
    address:'',
    date:Date
});

export const steps = [
    {
      name: "Flavor",
      key: "flavor",
      options: [
        { id: "white", label: "White Buttercream Icing with Vanilla Cheesecake Mousse Filling" },
        { id: "chocolate", label: "Chocolate Fudge Icing with Chocolate Cheesecake Mousse Filling" }
      ]
    },
    {
      name: "Size",
      key: "cost",
      options: [
        { id: 15.99, label: "10\" Round Cake         $15.99" },
        { id: 24.99, label: "1/2 Sheet Cake         $24.99" }
      ]
    },
    //Make seasonal a reusable option where the user can choose how differently the selection is shown to the user and the design can change 
    {
      name: "Design",
      key: "design",
      options: [
        { id: "roses", label: "Roses" },
        { id: "candles", label: "Candles" },
        { id: "cross", label: "Cross" },
        { id: "scored", label: "Scored" },
        { id: "rainbow", label: "Rainbow" },
        { id: "flag", label: "Flag" },
        { id: "balloons", label: "Balloons" },
        { id: "babyshower", label: "Baby Shower" },
        { id: "daisy", label: "Daisy" },
        { id: "seasonal", label: "Seasonal-Placeholder" },
        { id: "none", label: "No Design" }
      
      ]
    },
    {
      name: "Message",
      key: "message",
      input: true,
      placeholder: "e.g. Happy Birthday!",
      maxlength: 30
    },   
    {
      name: "Notes",
      key: "notes",
      input: true,
      placeholder: "Anything we should know?",
      maxlength: 100
    },
    {
      name: "Contact",
      key: "contact",
      fields: [
          { type: "tel", key: "phone", placeholder: "Please enter a phone number to contact here" },
          { type: "checkbox", key: "consent", label: "I agree to receive calls and messages regarding my order" }
      ]
    },
  ];
export const cakeOrderListStore = writable({
    isLoading: false,
    cakeOrders: [],
    currentCakeOrder: null
  });


