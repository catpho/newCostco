
<script>
	// @ts-nocheck
	import { Label } from "flowbite-svelte";

    import ProductCard from "$lib/components/ProductCard.svelte";

    let priceOpen = true;
    let customerOpen = true;
    let brandOpen = true;
    let dietaryOpen = true;

     
     const products = [
    {
      name: 'Chocolate Fudge Cake',
      price: 24.99,
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1605478071316-d1f7c4afcf39?auto=format&fit=crop&w=400&q=80',
      reviews: 120,
      deliveryAble: true
    },
    {
      name: 'Cheesecake Sampler',
      price: 32.5,
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1605478533919-46b7cb9a5b0e?auto=format&fit=crop&w=400&q=80',
      reviews: 120,
      deliveryAble: false
    },
    {
      name: 'Lemon Tart',
      price: 19.99,
      rating: 4.2,
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=400&q=80',
      reviews: 120,
      deliveryAble: true
    }
  ];

  // @ts-ignore
  const handleAddToCart = (event) => {
    console.log('Added to cart:', event.detail);
  };
</script>

<div>
    
        
        <nav aria-label="Breadcrumb">
            <ol class="breadcrumb">
            <li><a href="/">Home</a></li>
            <li><a href="/grocery-household.html">Grocery & Household Essentials</a></li>
            <li aria-current="page">Bakery & Desserts</li>
            </ol>
        </nav>
        
        <div class="flex">
        <!-- Sidebar -->
        <aside class="w-64 p-4 ">
            <h2 class="text-lg font-semibold mb-4 border-b border-gray-300">Filter Results</h2>

            <!-- Category -->
            <div class="mb-6 border-b border-gray-300">
            <h3 class="font-medium text-gray-700 mb-2">Category</h3>
            <ul class="space-y-2 text-sm text-blue-600 mb-2">
                <!-- svelte-ignore a11y-invalid-attribute -->
                <li><a href="#" class="hover:underline">Grocery & Household Essentials</a></li>
                <!-- svelte-ignore a11y-invalid-attribute -->
                <li><a href="#" class="hover:underline">Bakery & Desserts</a></li>
            </ul>
            </div>

            <!-- Delivery Location -->
            <div class="mb-6 border-b border-gray-300">
            <h3 class="font-medium text-gray-700 ">Delivery Location</h3>
            <label class="flex items-center space-x-2">
                <input type="checkbox" class="form-checkbox" />
                <span>2-Day Delivery</span>
            </label>
            <label class="flex items-center space-x-2">
                <input type="checkbox" class="form-checkbox" />
                <span>Bakery</span>
            </label>
            <label class="flex items-center space-x-2 mb-2">
                <input type="checkbox" class="form-checkbox" />
                <span>Buy in Warehouse</span>
            </label>
            </div>

            <div class="mb-6 border-b border-gray-300">
                <label class="flex items-center space-x-2 mb-2">
                <input type="checkbox" class="form-checkbox" />
                <span>Show Out of Stock Items</span>
            </label></div>

            <!-- Price -->
               <div class="mb-6 border-b border-gray-300">
                <button 
                    on:click={() => priceOpen = !priceOpen}
                    class="flex items-center justify-between w-full font-medium text-gray-700"
                >
                    <span>Price</span>
                    <svg 
                    class="w-4 h-4 transform transition-transform duration-200"
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    class:rotate-180={priceOpen}
                    >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                        d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
            {#if priceOpen}
            <label class="flex items-center space-x-2">
                <input type="checkbox" class="form-checkbox" />
                <span>$0 to $25</span>
            </label>
            <label class="flex items-center space-x-2">
                <input type="checkbox" class="form-checkbox" />
                <span>$25 to $50</span>
            </label>
            <label class="flex items-center space-x-2">
                <input type="checkbox" class="form-checkbox" />
                <span>$50 to $100</span>
            </label>
            <label class="flex items-center space-x-2 mb-2">
                <input type="checkbox" class="form-checkbox" />
                <span>$100 to $200</span>
            </label>
            {/if}
            </div>
           <!-- Customer reviews -->
            
               <div class="mb-6 border-b border-gray-300">
                <button 
                    on:click={() => customerOpen = !customerOpen}
                    class="flex items-center justify-between w-full font-medium text-gray-700"
                >
                    <span>Customer Reviews</span>
                    <svg 
                    class="w-4 h-4 transform transition-transform duration-200"
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    class:rotate-180={customerOpen}
                    >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                        d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
            {#if customerOpen}
            <label class="flex items-center space-x-2">
                <input type="checkbox" class="form-checkbox" />
                <span>4 & Up</span>
            </label>
            <label class="flex items-center space-x-2">
                <input type="checkbox" class="form-checkbox" />
                <span>3 & Up</span>
            </label>
            <label class="flex items-center space-x-2">
                <input type="checkbox" class="form-checkbox" />
                <span>2 & Up</span>
            </label>
            <label class="flex items-center space-x-2 mb-2">
                <input type="checkbox" class="form-checkbox" />
                <span>1 & Up</span>
            </label>
            {/if}
            </div>
            <!--Brands--> 
            
               <div class="mb-6 border-b border-gray-300">
                <button 
                    on:click={() => brandOpen  = !brandOpen }
                    class="flex items-center justify-between w-full font-medium text-gray-700"
                >
                    <span>Brands</span>
                    <svg 
                    class="w-4 h-4 transform transition-transform duration-200"
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    class:rotate-180={brandOpen}
                    >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                        d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
            {#if brandOpen }
            <label class="flex items-center space-x-2">
                <input type="checkbox" class="form-checkbox" />
                <span>Collin Street Bakery</span>
            </label>
            <label class="flex items-center space-x-2">
                <input type="checkbox" class="form-checkbox" />
                <span>David's Cookies</span>
            </label>
            <label class="flex items-center space-x-2">
                <input type="checkbox" class="form-checkbox" />
                <span>Ferrara's Bakery</span>
            </label>
            <label class="flex items-center space-x-2 ">
                <input type="checkbox" class="form-checkbox" />
                <span>Hostess</span>
            </label>
            <label class="flex items-center space-x-2 mb-2">
                <input type="checkbox" class="form-checkbox" />
                <span>Kirkland Signature</span>
            </label>
            {/if}
            </div>

            <!--Dietary Features-->
            <div class="mb-6 border-b border-gray-300">
                <button 
                    on:click={() => dietaryOpen = !dietaryOpen}
                    class="flex items-center justify-between w-full font-medium text-gray-700"
                >
                    <span>Dietary Features</span>
                    <svg 
                    class="w-4 h-4 transform transition-transform duration-200"
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    class:rotate-180={dietaryOpen}
                    >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                        d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
            {#if dietaryOpen}
            <label class="flex items-center space-x-2">
                <input type="checkbox" class="form-checkbox" />
                <span>Gluten Free</span>
            </label>
            <label class="flex items-center space-x-2">
                <input type="checkbox" class="form-checkbox" />
                <span>Kosher</span>
            </label>
            <label class="flex items-center space-x-2 mb-2">
                <input type="checkbox" class="form-checkbox" />
                <span>Non-GMO</span>
            </label>
            {/if}
            </div>
            
        </aside>

        <!-- Main Content -->
        <main class="flex-1 p-6">
            <h1 class="text-2xl text-left font-bold">Bakery & Desserts</h1>
            
        <div class="bg-white rounded-lg shadow-md p-6 mb-8">
            <div class="flex flex-col md:flex-row items-center">
                <div class="md:w-1/2 mb-6 md:mb-0 md:pr-6">
                    <h2 class="text-2xl font-bold mb-4">Customize Your Cake</h2>
                    <p class="text-gray-600 mb-4">Create the perfect cake for your special occasion with our customization options. Choose from various flavors, frostings, and decorations.</p>
                    <button class=" border text-black py-3 px-6 rounded-full hover:bg-red-700 transition">
                        Design Your Cake
                    </button>
                </div>
                <div class="md:w-1/2">
                    <img src="https://images.unsplash.com/photo-1542826438-bd32f43d626f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" alt="Custom cake" class="rounded-lg shadow-md w-full">
                </div>
            </div>
        </div>

        <div class="p-2 border-t border-b border-gray-300" >
          <div class="flex justify-between items-center w-full">
                <!-- Left side -->
                <div class="text-gray-700">
                    Showing 1–20 of 200 results
                </div>

                <!-- Right side -->
                <div class="flex items-center">
                    <label for="sort" class="text-gray-700 font-medium">Sort by:</label>
                    <select
                    id="sort"
                    class="ml-2 p-1 border border-gray-300 rounded"
                    >
                    <option>Best Match</option>
                    <option>Price (High to Low)</option>
                    <option>Price (Low to High)</option>
                    <option>Ratings (High to Low)</option>
                    <option>Newest</option>
                    <option>Most Viewed</option>
                    </select>
                </div>

            </div>

             <!-- Filter tags -->
                <div>
                <ul class="flex flex-wrap gap-3">
                <li class="flex items-center  text-[#005dab] px-3 py-1 border border-[#005dab] rounded">
                    <span class="mr-2">$0 to $25</span>
                    <button class=" hover:text-red-700 font-bold">✕</button>
                </li>

                <li class="flex items-center  text-[#005dab] px-3 py-1 border border-[#005dab] rounded">
                    <span class="mr-2">$25 to $50</span>
                    <button class=" hover:text-red-700 font-bold">✕</button>
                </li>

                <li class="flex items-center  text-[#005dab] px-3 py-1 border border-[#005dab] rounded">
                    <span class="mr-2">Show Out of Stock Items</span>
                    <button class=" hover:text-red-700 font-bold">✕</button>
                </li>
                </ul>
                </div>

            

            
        </div>

        <!-- Placeholder for product grid -->
        <div class="flex p-2 gap-6"> 
                {#each products as product}
                    <ProductCard
                    name={product.name}
                    price={product.price}
                    rating={product.rating}
                    image={product.image}
                    reviews={product.reviews}
                    deliveryAble={product.deliveryAble}
                    on:addToCart={handleAddToCart}
                    />
                {/each}
                 </div>



        <div class="p-2 border-t border-b border-gray-300 text-right" > <a href= "#">Back to Top</a></div>
        
        <div class="p-1">
            <h3 class=" my-3 text-2xl"> Shop Related Categories</h3>
        </div>

        <div>
            <ul>
                <li class="inline-block items-center text-center mr-4 mb-2">
                    <div class="w-40 h-40 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                    <img 
                    class="w-full h-full rounded-full object-cover "
                    src="https://cdn.bfldr.com/56O3HXZ9/at/n68n8ggbg7w526f37zb8kr/24w09154_cat_tile_snacks_v2.png?auto=webp&amp;format=jpg">
                    </div>
                    <a href="#" class="font-bold hover:underline">Snacks</a></li>
                <li class="inline-block items-center text-center mr-4 mb-2">
                    <div class="w-40 h-40 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                    <img 
                    class="w-full h-full rounded-full object-cover "
                    src="https://cdn.bfldr.com/U447IH35/at/fxrt3th49mgkpnxrnkcztsj/all-gift-baskets-towers-c.png?auto=webp&amp;format=jpg">
                    </div>
                    <a href="#" class="font-bold hover:underline">Gift Baskets & Treats</a></li>
                <li class="inline-block items-center text-center mr-4 mb-2">
                    <div class="w-40 h-40 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                    <img 
                    class="w-full h-full rounded-full object-cover "
                    src="https://cdn.bfldr.com/56O3HXZ9/at/486phtswwxnsvfpbhmr9nm5/snacks-bars-c.png?auto=webp&amp;format=jpg">
                    </div>
                    <a href="#" class=" font-bold hover:underline">Breakfast</a></li>
                <li class="inline-block items-center text-center mr-4 mb-2">
                    <div class="w-40 h-40 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                    <img 
                    class="w-full h-full rounded-full object-cover "
                    src="https://cdn.bfldr.com/56O3HXZ9/at/3qb5x6h9jbtp8679kfff7n/gum-mints-c.png?auto=webp&amp;format=jpg">
                    </div>
                    <a href="#" class="font-bold hover:underline">Gum & Mints</a></li>
            </ul>
            <!--FIXME: make sure main content is cropped similiarly to the original website -->
        </div>

        <div class="text-sm">
            <p>Celebrate life’s special
                 moments with a delicious assortment of baked goods and 
                 desserts from Costco. We offer a mouth-watering array of gourmet
                  treats that are perfect for any occasion. From decadent cakes, and
                   moist delicious brownies to creamy cheesecakes, and fruit-filled tarts,
                    Costco offers something to satisfy everyone’s sweet tooth. Having a holiday gathering? 
                    Try serving a tray filled with tasty finger-foods like chocolate truffles or cake pops. 
                    It’s been said that the way to the heart is through the stomach, so why not send your loved one a box filled 
                    with ripe strawberries covered in rich, dark chocolate? No matter what you choose, Costco’s grocery section has bakery and dessert 
                    items you’re sure to love. Shop in stores or online at Costco.com, and enjoy wholesale prices on the tastiest items in the store!</p>
                    <p>Need a bakery or dessert item fast? You can now enjoy the convenience of having grocery items delivered directly to your doorstep,
                         with two new delivery options from Costco. You can choose a 2-day delivery service with CostcoGrocery, 
                        or a same-day delivery service with Costco powered by Instacart. 
                        Checkout our FAQ page to learn more about the Costco Grocery Delivery Program.</p>
        </div>
        </main>
</div>


</div>




<style>
.breadcrumb {
  list-style: none;        /* remove default numbers */
  display: flex;
  gap: 0.5rem;             /* spacing between items */
  padding: 0;
  margin: 0;
}

.breadcrumb li::after {
  content: " / ";          /* add separators */
}

.breadcrumb li:last-child::after {
  content: "";             /* remove trailing slash */
}

.breadcrumb a {
  text-decoration: none;
  color:inherit;          /* link color */
}
.breadcrumb a:hover {
  text-decoration: underline;
}

.breadcrumb li[aria-current="page"] {
  font-weight: 500;        /* highlight current page */
}
</style>

