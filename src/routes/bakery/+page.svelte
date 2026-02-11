
<script>
	// @ts-nocheck
	import { Label } from "flowbite-svelte";

    import ProductCard from "$lib/components/ProductCard.svelte";

    let priceOpen = true;
    let customerOpen = true;
    let brandOpen = true;
    let dietaryOpen = true;

     // FIXME: Need to Format the Product Cards so that they stay a static size and that they ae responsive to the change in screen size 
     const products = [
    {
      name: 'David\'s Cookies Variety Cheesecakes, 2-pack(28 Slices Total)',
      price: 69.99,
      rating: 4.5,
      image: 'https://bfasset.costco-static.com/U447IH35/as/5q7xh4xk68fqkv8tcqg836xq/983394-847__1?auto=webp&format=jpg&width=1024&height=1024&fit=bounds&canvas=1024%2C1024',
      reviews: 522,
      deliveryAble: true
    },
    {
      name: 'David\'s Cookies Brownie and Cookie Combo Pack',
      price: 22.99,
      rating: 4.3,
      image: 'https://bfasset.costco-static.com/U447IH35/as/f4m58v8xbz4x6r8hn7crv47q/920464-847__1?auto=webp&format=jpg&width=1024&height=1024&fit=bounds&canvas=1024%2C1024',
      reviews: 2339,
      deliveryAble: true
    },
    {
      name: 'St Micheal Madeleine, Classic French Sponge Cake 100 - count',
      price: 44.99,
      rating: 4.2,
      image: 'https://bfasset.costco-static.com/U447IH35/as/pfvkcr8xgsp7hhc2pf3jfpr/1382164-847__1?auto=webp&format=jpg&width=1024&height=1024&fit=bounds&canvas=1024%2C1024',
      reviews: 714,
      deliveryAble: true
    },
    {
      name: 'David\'s Cookies Mile High Peanut Butter Cake, 6.8 lbs(14 servings)',
      price: 72.99,
      rating: 4.3,
      image: 'https://bfasset.costco-static.com/U447IH35/as/s5b4wsfxb8qvt6vs7pjp8s8/1138994-847__1?auto=webp&format=jpg&width=1024&height=1024&fit=bounds&canvas=1024%2C1024',
      reviews: 306,
      deliveryAble: true
    },
    {
      name: 'The Cake Bake Shop 8\" Round Carrot Cake (16-22 Servings)',
      price: 159.99,
      rating: 4.0,
      image: 'https://bfasset.costco-static.com/U447IH35/as/x3n3mbjsq7fjcvscncwvvbcp/1744591-847__1?auto=webp&format=jpg&width=1024&height=1024&fit=bounds&canvas=1024%2C1024',
      reviews: 10,
      deliveryAble: true
    },
    {
      name: 'David\'s Cookies Mango & Strawberry Cheesecake 2-count (28 Slices Total)',
      price: 69.99,
      rating: 4.3,
      image: 'https://bfasset.costco-static.com/U447IH35/as/p5tmbg68bmsmk6ppbkh7nrz/1350663-847__1?auto=webp&format=jpg&width=1024&height=1024&fit=bounds&canvas=1024%2C1024',
      reviews: 430,
      deliveryAble: true
    },
    {
      name: 'Ferrara\'s Bakery New York Cheesecake 2-pack',
      price: 99.99,
      rating: 4.8,
      image: 'https://bfasset.costco-static.com/U447IH35/as/x75x8c3bsbgqkht64xvxhxtg/1550649-847__1?auto=webp&format=jpg&width=1024&height=1024&fit=bounds&canvas=1024%2C1024',
      reviews: 173,
      deliveryAble: true
    },
    {
      name: 'Austin Cake Ball Catering Assortment, 48 Cake Balls',
      price: 89.99,
      rating: 4.3,
      image: 'https://bfasset.costco-static.com/U447IH35/as/6vjcbskxsjv8bk45g69vfh/1681898-847__1?auto=webp&format=jpg&width=1024&height=1024&fit=bounds&canvas=1024%2C1024',
      reviews: 102,
      deliveryAble: true
    },
    {
      name: 'Hostess Cupcakes & Twinkies, 32-count',
      price: 10.99,
      rating: 4.3,
      image: 'https://bfasset.costco-static.com/U447IH35/as/x3qwv3vnhj85h69j6s9grt/4000153042-847__1?auto=webp&format=jpg&width=1024&height=1024&fit=bounds&canvas=1024%2C1024',
      reviews: 69,
      deliveryAble: true
    },
    {
      name: 'David\'s Cookies No Sugar Added Cheesecake & Marble Truffle Cake, 2-pack (28 Slices Total)',
      price: 69.99,
      rating: 4.3,
      image: 'https://bfasset.costco-static.com/U447IH35/as/q8g86c38fxn8jz7tvt96/1347207-847__1?auto=webp&format=jpg&width=1024&height=1024&fit=bounds&canvas=1024%2C1024',
      reviews: 281,
      deliveryAble: true
    },
    {
      name: 'David\'s Cookies Premier Chocolate Cake, 7.2 lbs (Serves 14)',
      price: 74.99,
      rating: 4.4,
      image: 'https://bfasset.costco-static.com/U447IH35/as/5w3wrxrq9pfvk3h79hwp7sr/1138993-847__1?auto=webp&format=jpg&width=1024&height=1024&fit=bounds&canvas=1024%2C1024',
      reviews: 842,
      deliveryAble: true
    },
    {
      name: 'David\'s Cookies Chocolate Fudge Birthday Cake, 3.75 lbs. Includes Party Pack (16 servings)',
      price: 64.99,
      rating: 4.8,
      image: 'https://bfasset.costco-static.com/U447IH35/as/f68mmcbh6kq4mv7p556j8tv/1160390-847__1?auto=webp&format=jpg&width=1024&height=1024&fit=bounds&canvas=1024%2C1024',
      reviews: 306,
      deliveryAble: true
    },
    {
      name: 'The Cake Bake Shop 8\" Round Pixie Fetti Cake (16-22 Servings)',
      price: 159.99,
      rating: 4.0,
      image: 'https://bfasset.costco-static.com/U447IH35/as/9xhjq5rrv9359tqcmtrtncj/1744589-847__1?auto=webp&format=jpg&width=1024&height=1024&fit=bounds&canvas=1024%2C1024',
      reviews: 10,
      deliveryAble: true
    },
    {
      name: 'David\'s Cookies 10\" Rainbow Cake (12 Servings)',
      price: 72.99,
      rating: 4.3,
      image: 'https://bfasset.costco-static.com/U447IH35/as/2t66ppwvbpfx3p4chbcntnm/1353724-847__1?auto=webp&format=jpg&width=1024&height=1024&fit=bounds&canvas=1024%2C1024',
      reviews: 394,
      deliveryAble: true
    },
    {
      name: 'The Cake Bake Shop 8\" Round Chocolate Cake (16-22 Servings)',
      price: 159.99,
      rating: 4.1,
      image: 'https://bfasset.costco-static.com/U447IH35/as/9khnp5tt9cf8krvwj3tgtnsg/1744573-847__1?auto=webp&format=jpg&width=1024&height=1024&fit=bounds&canvas=1024%2C1024',
      reviews: 11,
      deliveryAble: true
    },
    {
      name: 'Collin Street Bakery Cake Bites Bundle, DeLuxe Fruitcake & Pineapple Pecan Cake, 2-pack, 24 Bites Total',
      price: 39.99,
      rating: 4.3,
      image: 'https://bfasset.costco-static.com/U447IH35/as/7vm63ggjn86cppk2n6nc46v/1848583-847__1?auto=webp&format=jpg&width=1024&height=1024&fit=bounds&canvas=1024%2C1024',
      reviews: 232,
      deliveryAble: true
    },

    {
      name: 'Collin Street Bakery Mini Pecan Cake Bundle, 9oz. per Cake',
      price: 59.99,
      rating: 4.0,
      image: 'https://bfasset.costco-static.com/U447IH35/as/2sh7jkc4gvs4cpr6t6jxtxpc/1838863-847__1?auto=webp&format=jpg&width=1024&height=1024&fit=bounds&canvas=1024%2C1024',
      reviews: 58,
      deliveryAble: true
    },
    {
      name: 'Ferrara\'s Bakery 8in. Tiramisu Cake, 2-pack',
      price: 99.99,
      rating: 4.3,
      image: 'https://bfasset.costco-static.com/U447IH35/as/hf8svv7m484g3cxs67z7h/1792776-847__1?auto=webp&format=jpg&width=1024&height=1024&fit=bounds&canvas=1024%2C1024',
      reviews: 49,
      deliveryAble: true
    },
    {
      name: 'Collin Street Bakery 2 Pecan Pie Bundle, 3.25 lb Total, 16 Total Servings',
      price: 54.99,
      rating: 4.2,
      image: 'https://bfasset.costco-static.com/U447IH35/as/q5jxv3gzhtj6t9nxhzx899/1886569-847__1?auto=webp&format=jpg&width=1024&height=1024&fit=bounds&canvas=1024%2C1024',
      reviews: 45,
      deliveryAble: true
    },
    {
      name: 'Collin Street Bakery Cinnamon Coffee Cake, 3.79 lb.',
      price: 49.99,
      rating: 4.3,
      image: 'https://bfasset.costco-static.com/U447IH35/as/7436n6hr3hfnc94595gjws/1838855-847__1?auto=webp&format=jpg&width=1024&height=1024&fit=bounds&canvas=1024%2C1024',
      reviews: 73,
      deliveryAble: true
    },
    {
      name: 'Libanais Baklava Assortment, 100 Pieces, 4 lb Total',
      price: 39.99,
      rating: 4.0,
      image: 'https://bfasset.costco-static.com/U447IH35/as/sj597vtgfxq9ws833p3q/1880059-847__1?auto=webp&format=jpg&width=1024&height=1024&fit=bounds&canvas=1024%2C1024',
      reviews: 894,
      deliveryAble: true
    },
    {
      name: 'Ferraras\'s Bakery 24 Large Cannolis(12 Plain Filled and 12 Hand Dipped Belgian Chocolate)',
      price: 129.99,
      rating: 4.0,
      image: 'https://bfasset.costco-static.com/U447IH35/as/fxkv9mhr4252bckv4t8f9/1516328-847__1?auto=webp&format=jpg&width=1024&height=1024&fit=bounds&canvas=1024%2C1024',
      reviews: 219,
      deliveryAble: true
    },
    {
      name: 'David\'s Cookies Decadant Triple Chocolate made with mini Hershey\'s Kisses and Reese\'s Peanut Butter Cups Cookies Tin - 2 Count',
      price: 39.99,
      rating: 4.1,
      image: 'https://bfasset.costco-static.com/U447IH35/as/g3pn5mqx2jkv6p2tfnrk8c4/1350660-847__1?auto=webp&format=jpg&width=1024&height=1024&fit=bounds&canvas=1024%2C1024',
      reviews: 1030,
      deliveryAble: true
    },
    {
      name: 'Mary Macleod\'s 8in. Gluten Free Shortbread Cookies Mixed Assortment 8-Pack',
      price: 49.99,
      rating: 4.3,
      image: 'https://bfasset.costco-static.com/U447IH35/as/7f2hrvhxk48k3ffqqbxj5hf9/1593720-847__1?auto=webp&format=jpg&width=1024&height=1024&fit=bounds&canvas=1024%2C1024',
      reviews: 173,
      deliveryAble: true
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

      let currentPage = 1;
  const productsPerPage = 24;

  $: totalPages = Math.ceil(products.length / productsPerPage);

  $: paginatedProducts =
    products.slice(
      (currentPage - 1) * productsPerPage,
      currentPage * productsPerPage
    );

  function goToPage(page) {
    currentPage = page;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function prev() {
    if (currentPage > 1) goToPage(currentPage - 1);
  }

  function next() {
    if (currentPage < totalPages) goToPage(currentPage + 1);
  }

  $: pages = getVisiblePages(currentPage, totalPages);

  function getVisiblePages(current, total) {
    const delta = 2;
    const range = [];
    const result = [];

    for (
      let i = Math.max(2, current - delta);
      i <= Math.min(total - 1, current + delta);
      i++
    ) {
      range.push(i);
    }

    result.push(1);

    if (current - delta > 2) result.push("...");
    result.push(...range);
    if (current + delta < total - 1) result.push("...");

    if (total > 1) result.push(total);

    return [...new Set(result)];
  }

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
                    <a href="/bakery/customCakes">
                    <button class=" border text-black py-3 px-6 rounded-full hover:bg-red-700 transition">
                        Design Your Cake
                    </button>
                    </a>
                </div>
                <div class="md:w-1/2">
                    <img src="https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fit,w_730,h_548/k%2FPhoto%2FSeries%2F2024-08-costco-cakes%2Fcostco-cakes-033" alt="Custom Cake" class="w-80 h-auto rounded-lg object-cover">
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
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 p-2">
        {#each paginatedProducts as product}
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

        <!-- FIXME: Pagination needs to be centered and the arrows should only be shown if it is possible to go back and possible to go forward. If there is not earlier pages, hide left arrow -->

        <div class="p-2 border-t border-b border-gray-300 text-right" >
            
        <!-- Left arrow -->
        <button on:click={prev} class="px-2 py-1  text-[#005eab] hover:bg-gray-100">
            &lt;
        </button>

        {#each pages as page}
            {#if page === "..."}
            <span class="px-2">...</span>
            {:else}
            <button
                on:click={() => goToPage(page)}
                class="px-3 py-1 text-[#005eab] hover:bg-gray-100"
            >
                {page}
            </button>
            {/if}
        {/each}

        <!-- Right arrow -->
        <button on:click={next} class="px-2 py-1  text-[#005eab] hover:bg-gray-100">
            &gt;
        </button> 
        
        <a href= "#top">Back to Top</a>
        </div>
        
        <div class="p-1">
            <h3 class=" my-3 text-2xl"> Shop Related Categories</h3>
        </div>

        <div>
            <ul>
                <li class="inline-block items-center text-center mr-4 mb-2">
                    <div class="w-40 h-40 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                    <img 
                    class="w-full h-full rounded-full object-cover "
                    alt="snackBag"
                    src="https://cdn.bfldr.com/56O3HXZ9/at/n68n8ggbg7w526f37zb8kr/24w09154_cat_tile_snacks_v2.png?auto=webp&amp;format=jpg">
                    </div>
                    <a href="https://www.costco.com/snacks.html" class="font-bold hover:underline">Snacks</a></li>
                <li class="inline-block items-center text-center mr-4 mb-2">
                    <div class="w-40 h-40 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                    <img 
                    class="w-full h-full rounded-full object-cover "
                    alt="giftBag"
                    src="https://cdn.bfldr.com/U447IH35/at/fxrt3th49mgkpnxrnkcztsj/all-gift-baskets-towers-c.png?auto=webp&amp;format=jpg">
                    </div>
                    <a href="https://www.costco.com/all-gift-baskets-towers.html" class="font-bold hover:underline">Gift Baskets & Treats</a></li>
                <li class="inline-block items-center text-center mr-4 mb-2">
                    <div class="w-40 h-40 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                    <img 
                    class="w-full h-full rounded-full object-cover "
                    alt="proteinBar"
                    src="https://cdn.bfldr.com/56O3HXZ9/at/486phtswwxnsvfpbhmr9nm5/snacks-bars-c.png?auto=webp&amp;format=jpg">
                    </div>
                    <a href="https://www.costco.com/breakfast.html" class=" font-bold hover:underline">Breakfast</a></li>
                <li class="inline-block items-center text-center mr-4 mb-2">
                    <div class="w-40 h-40 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                    <img 
                    class="w-full h-full rounded-full object-cover "
                    alt="mintBag"
                    src="https://cdn.bfldr.com/56O3HXZ9/at/3qb5x6h9jbtp8679kfff7n/gum-mints-c.png?auto=webp&amp;format=jpg">
                    </div>
                    <a href="https://www.costco.com/gum-mints.html" class="font-bold hover:underline">Gum & Mints</a></li>
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

