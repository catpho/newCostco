<script>
import CakeStep from "$lib/components/CakeStep.svelte";
</script>

<div> 
    <nav>
       <ul class="horizontal-list">
        <li>Choose a Store</li>
        <li>Choose a pickup day and time</li>
        <li>Checkout and Subtotal</li>
       </ul>
    </nav>
    
    Picture here 
   
    <CakeStep />
    
    <div class="flex justify-between items-center"> whats up</div>
</div>

<style>
    .horizontal-list {
        display: flex;
        list-style: none;
        padding: 0;
        gap: 1rem; /* Adds spacing between items */
    }
    
    .horizontal-list li {
        margin: 0; /* Removes default margin */
    }
</style>