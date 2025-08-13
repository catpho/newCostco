<script>
	
	import { Search } from 'flowbite-svelte';
	 let location = '';
  function search() {
    alert(`Searching for: ${location}`);
  }
</script>

<footer>
	<div class="footer-top m-[20px] border-b border-[#b3b3b3] pb-8">
		<div>
			<h1 class="text-[20px]">Customer Service</h1>

			<div class="flex mt-[8px] text-[15px] gap-2 ">
			<svg class="text-[#005eab] " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
			<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.529 9.988a2.502 2.502 0 1 1 5 .191A2.441 2.441 0 0 1 12 12.582V14m-.01 3.008H12M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
			</svg>

			<div>
				Get Help</div>
				</div>
		</div>

		<div>
			<h2 class="text-[20px]">Find a Warehouse</h2>

		<div class="mt-[15px] w-[500px] relative">
			<input
				type="text"
				bind:value={location}
				placeholder="City, State, or Zip"
				class="w-full rounded border border-gray-300 shadow-sm pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
			/>
			
			<button
				type="button"
				on:click={search}
				class="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-blue-500 focus:outline-none"
			>
				<svg class="transform scale-x-[-1] text-[#005eab]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
				<path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
				</svg>

			</button>
			</div>
		</div>

		<div>
			<h3 class="text-[20px]">Get Email Offers</h3>
			<div class="mt-[15px] flex w-[500px]">
				<input
					type="text"
					id="location"
					name="location"
					placeholder="Enter your email"
					class="flex-1 rounded-l border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
				/>
				<button
					class="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
				>
					Go
				</button>
				</div>

			
		
		</div>
		
	</div>

	
	<div class="flex m-[20px] border-b border-[#b3b3b3] pb-8">
		<div>
			<h1 class="text-[20px]">About Us</h1>
			
			<ul>
				<li>Get to Know</li>
				<li>Charitable Contributions</li>
				<li>Company Information</li>
				<li>Sustainability Commitment</li>
				<li>Investor Relations</li>
				<li>Careers</li>
				<li>Kirkland Signature</li>
				<li>Logo and Media Requests</li>
				<li>The Costco Connections</li>
				<li>Quick & Easy Recipe Videos</li>
				<li>Costco Blog</li>
				<li>Employee Site</li>
				

			</ul>
				
		</div>

		<div>
			<h2 class="text-[20px]">Membership</h2>
			<ul>
				<li>Membership Information</li>
				<li>Join Now</li>
				<li>Member Privileges</li>
				<li>Executive Membership Terms</li>
				<li>Refer a Friend</li>
				<li>Sign In or Register</li>
				<li>Credit Card</li></ul>

			<h2 class="text-[20px]">Vendors & Supplies</h2>
			<ul>
				<li>Vendor Inquiries</li>
				<li>Supply Chain Disclosure</li>
				<li>Ethics Hotline for Suppliers</li>
				<li>Supplier Inclusion</li>
				<li>Explore Our Brands</li>
				</ul>
		</div>

		<div>
			<h3 class="text-[20px]">Customer Service</h3>
			<ul>
				<li>Costco Customer Service</li>
				<li>Costco Shop Card Balance</li>
				<li>Order By Item Number</li>
				<li>Concierge Tech Support & Warrenty</li>
				<li>Volume Sales: Export & Domestic</li>
				<li>Order Status</li>
				<li>Preventing Fraud</li>
				<li>Shipping</li>
				<li>Rebates</li>
				<li>Recalls & Product Notices</li>
				<li>Returns and Exchanges</li>
				<li>Returns Policy</li>
				<li>Accessibility</li>
			</ul>
		</div>
		<div>
			<h4 class="text-[20px]">Locations & Services</h4>
			<ul>
				<li>Find a Warehouse</li>
				<li>Locations Coming Soon</li>
				<li>Hours and Holiday Closures</li>
				<li>Gasoline</li>
				<li>Hearing Aid Center</li>
				<li>Optical</li>
				<li>Special Events</li>
				<li>CostcoGrocery</li>
				<li>Grocery by Instacart</li>
				<li>Product Collections</li>
			</ul>
		</div>
		
	</div>

<div class="flex gap-3">
	<p> Site Map </p>
	<p> Terms and Conditions </p>
	<p> Your Privacy Rights </p>
	<p> CA Notice</p>
	<p> CA Social Compliance</p>
	<p> Cookie Settings</p>
	<p class="flex"> <img alt="California Consumer Privacy Act (CCPA) Opt-Out Icon" loading="lazy" src="https://azure-na-images.contentstack.com/v3/assets/blt79a1ca72a67c8924/bltf7d7f80fdcfa6466/64e3b60e51fd0d0ac6ee9582/privacy-options.svg" height="14" width="31" data-airgap-id="9">Your Privacy Choices</p>
	<p> Consumer Health Data </p>
	<p> Feedback</p>

</div>
<div class="icons-footer flex">
	<img alt="Costco Facebook" loading="lazy" src="https://azure-na-images.contentstack.com/v3/assets/blt79a1ca72a67c8924/blt68764b90bcb33698/64e3b60eafe0c5ed0ecee3c2/_social-facebook-32x32.svg" height="32" width="32" data-airgap-id="10">
<img alt="Costco Pinterest" loading="lazy" src="https://azure-na-images.contentstack.com/v3/assets/blt79a1ca72a67c8924/blt89ae75a2666fa53e/64e3b60e840f3212eb9a7862/_social-pinterest-32x32.svg" height="32" width="32" data-airgap-id="11">
<img alt="Costco Instagram" loading="lazy" src="https://azure-na-images.contentstack.com/v3/assets/blt79a1ca72a67c8924/blt8af6969b4b536c72/64e3b60e83e48de97f3b32c2/_social-instagram-32x32.svg" height="32" width="32" data-airgap-id="12">

<img alt="Costco App" loading="lazy" src="https://azure-na-images.contentstack.com/v3/assets/blt79a1ca72a67c8924/blt8c4d2e413e2cb617/64e3b60e88e161d1c0fce933/costco-app-icon-32x32.svg" height="32" width="32" data-airgap-id="13">
</div>
<p>©1998 - 2025 Costco Wholesale Corporation. All rights reserved.</p>

</footer>

<style>
	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;

		padding: 12px;
	}

	.footer-top {
		display: flex;
		gap: 25px;
	}
	.list-flex {
  display: flex;        
  margin-top: 4px;      
  font-size: 15px;      
	}
</style>
