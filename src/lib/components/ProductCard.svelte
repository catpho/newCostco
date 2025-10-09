<script lang="ts">
  export let name: string;
  export let price: number;
  export let rating: number;
  export let reviews: number;
  export let image: string;
  export let deliveryAble: boolean;

  // For handling "Add to Cart" or similar actions
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  const handleAddToCart = () => {
    dispatch('addToCart', { name, price });
  };

  const getStars = (rating: number) => {
    const full = Math.floor(rating);
    const half = rating % 1 >= 0.5;
    return { full, half };
  };
</script>

<div>
  <div class="bg-white p-3 hover:shadow-lg transition flex flex-col rounded-t-md border-b"
  style="width: 250px; height: 460px;">
  <img src={image} alt={name} class="w-full h-40 object-cover rounded-md mb-3" />
  
  <div class="text-right mb-1 flex justify-end items-center space-x-1">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" role="presentation" focusable="false" aria-hidden="true" fill="none" color="#2a6293" class="mui-12g48lj"><path fill="currentColor" fill-rule="evenodd" d="M21.853 7.316a.46.46 0 0 0-.353-.146h-2.178L19.324 5a.46.46 0 0 0-.147-.353.45.45 0 0 0-.345-.147h-.996a.46.46 0 0 0-.353.147.46.46 0 0 0-.13.337l-.005 2.184-2.141-.002a.46.46 0 0 0-.377.162.45.45 0 0 0-.146.346l-.002.987a.45.45 0 0 0 .152.369c.09.098.22.151.354.146l2.162-.001.002 2.167a.46.46 0 0 0 .144.348.46.46 0 0 0 .348.144h1.027c.13.002.256-.05.345-.147a.46.46 0 0 0 .146-.353l.008-2.159 2.13-.014a.46.46 0 0 0 .352-.147.46.46 0 0 0 .148-.353v-1a.45.45 0 0 0-.147-.345m-8.022 2.041H7.759a.3.3 0 0 1-.213-.09.3.3 0 0 1-.09-.213V7.238q0-.124.09-.214a.3.3 0 0 1 .213-.09h6.107c-.131.23-.205.492-.2.762l-.002.949c-.006.255.058.496.167.712m4.047 3.493h.994c.248 0 .484-.067.696-.179V13.9q0 .123-.09.212a.3.3 0 0 1-.213.09H7.759a.3.3 0 0 1-.213-.09.3.3 0 0 1-.09-.213v-1.816q0-.123.09-.213a.3.3 0 0 1 .213-.09h8.647a1.484 1.484 0 0 0 1.425 1.071h.047m1.387 3.774H7.759a.3.3 0 0 0-.213.09.3.3 0 0 0-.09.213v1.816q0 .124.09.213.09.09.213.09h11.506a.3.3 0 0 0 .213-.09q.09-.09.09-.213v-1.816a.3.3 0 0 0-.09-.213.3.3 0 0 0-.213-.09M3.697 9.864a1.697 1.697 0 1 0 0-3.394 1.697 1.697 0 0 0 0 3.394m1.698 3.126a1.697 1.697 0 1 1-3.395 0 1.697 1.697 0 0 1 3.395 0m-1.698 6.643a1.697 1.697 0 1 0 0-3.394 1.697 1.697 0 0 0 0 3.394" clip-rule="evenodd"></path></svg>
  </div>

  <p class="text-black mb-1 font-bold">${price.toFixed(2)}</p>
  <h2 class="">{name}</h2>
  

  <!-- Ratings -->
  <div class="flex items-left  space-x-1 mb-3">
    {#each Array(getStars(rating).full) as _}
      <span class="text-yellow-400">★</span>
    {/each}
    {#if getStars(rating).half}
      <span class="text-yellow-400">☆</span>
    {/if}
    <span class="text-gray-500 text-sm ml-1">({reviews})</span>
  </div>

  
  <div class="flex h-8 items-center ">  
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" 
    role="presentation" focusable="false" aria-hidden="true" fill="none" class="mui-1seo066"><path fill="currentColor" 
    fill-rule="evenodd" d="M20.791 16.893c.014-2.817.014-5.614.014-8.412V7.23l-3.65 1.46-1.03.41q-1.762.705-3.527 
    1.408v9.661l2.079-.832.764-.305zm-8.806-7.446a.2.2 0 0 0 .048-.006q.813-.32 1.624-.647l6.13-2.45a860 860 0 0 0-3.083-1.23c-.882.347-1.755.696-2.628 
    1.046L8.913 8.223l.053.021.262.105q1.378.551 2.757 1.098m-.582 10.721.001-3.666v-.995q0-2.487.003-4.976a16 16 0 0 0-.689-.292L9.31 9.674 3.196 7.23v1.8q0 3.932-.003 
    7.865c.996.389 1.996.789 2.993 1.188l.058.023zm.464-16.889q-1.788.722-3.58 1.436L4.215 6.343l.02.008.728.292q1.164.468 2.33.93a437 437 0 0 0 2.616-1.04l5.177-2.07-.542-.215-.804-.322-1.608-.647a.3.3 0 0 0-.265 0m9.744 2.501c.261.104.389.305.389.615v10.802c0 .388-.111.55-.475.695l-6.056 2.42q-1.603.646-3.211 1.278a.74.74 0 0 1-.525-.003q-2.435-.966-4.867-1.94l-.27-.109-4.142-1.655C2.116 17.75 2 17.58 2 17.214V6.426c0-.376.109-.533.463-.674l7.232-2.89.444-.179q.761-.304 1.521-.613a.86.86 0 0 1 .676-.002q2.16.866 4.322 1.73zm-14.95 4.303 1.982.792q.428.17.426.577a.586.586 0 0 1-.584.6.7.7 0 0 1-.238-.044 51 51 0 0 1-.786-.311l-1.806-.722-.011-.005a2 2 0 0 1-.158-.068.59.59 0 0 1-.29-.77.58.58 0 0 1 .734-.332q.368.135.73.283" clip-rule="evenodd"></path>
    </svg>
    
    <div class="text-xs ml-2">Delivery {deliveryAble ? 'Available' : 'Out of Stock'} </div>
  
  </div>
  
  <br/>
  {#if deliveryAble}
          <div class="">
                <label class="flex items-center space-x-2 mb-2">
                <input type="checkbox" class="form-checkbox" />
                <span>Compare</span>
            </label></div>
        {/if}
  
  
            <button
    on:click={handleAddToCart}
    class="bg-blue-600 text-white text-sm px-4 py-2 rounded-sm hover:bg-blue-700"
  >
    Add to Cart
  </button>
</div>
</div>
