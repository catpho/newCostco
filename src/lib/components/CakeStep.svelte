<script>
  //@ts-nocheck
    import {steps, cakeOrderStore, stepIndex} from '$lib/stores/cakeOrderStore';
    import {get} from 'svelte/store'
    
      
    function next() {
     stepIndex.update(n => n + 1);
    }
  
    function prev() {
      stepIndex.update(n => n - 1);
    }

    function submitOrder(){
      const order = get(cakeOrderStore);
      console.log("Cake Order:", order);
    }
    
    $: step = steps[$stepIndex];
    $: stepKey = step.key;
    $: isLastStep = $stepIndex === steps.length - 1;
  </script>

  <form on:submit|preventDefault ={submitOrder}>
      <fieldset class="max-w-xl ml-auto border rounded p-6 bg-gray-50">
      
        <!-- Header -->
        <div class="flex justify-between items-center mb-4">
          <legend class="text-lg font-semibold">
            {step.name}
          </legend>
      
          <button class="underline text-sm">
            Review your options
          </button>
        </div>
      
        <!-- Options -->
        <div class="space-y-3 mb-6">
          {#if step.fields}
            {#each (step.fields ?? []) as field}
              {#if field.type === "tel"}
                <input
                  type="tel"
                  bind:value={$cakeOrderStore[field.key]}
                  placeholder={field.placeholder ?? ""}
                  class="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                />
              {:else if field.type === "checkbox"}
                <label class="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" bind:checked={$cakeOrderStore[field.key]} />
                  <span class="text-sm">{field.label}</span>
                </label>
              {/if}
            {/each}
          {:else if step.input}
            <input
              type="text"
              bind:value={$cakeOrderStore[stepKey]}
              placeholder={step.placeholder ?? "Enter your message..."}
              maxlength={step.maxlength ?? 30}
              class="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
            />
          {:else}
          {#each (step.options ?? []) as option}
            <label class="cursor-pointer block">
              <input
                type="radio"
                class="hidden peer"
                name={stepKey}
                value={option.id}
                bind:group={$cakeOrderStore[stepKey]}
              />
      
              <div
                class="p-3 border rounded transition
                      peer-checked:border-black
                      peer-checked:bg-white"
              >
                {option.label}
              </div>
            </label>
          {/each}
          {/if}
        </div>
      
        <!-- Navigation -->
        <div class="flex justify-between items-center border-t pt-4">
      
          <button
            on:click={prev}
            disabled={$stepIndex === 0}
            class="w-10 h-10 rounded-full border flex items-center justify-center disabled:opacity-30"
          >
            ←
          </button>
      
          <div class="text-sm">
            {$stepIndex + 1} / {steps.length}
          </div>
      
          

          <button
            type={isLastStep ? "submit" : "button"}
            on:click={!isLastStep ? next : null}
            class="w-10 h-10 rounded-full flex items-center justify-center text-white disabled:opacity-30
              {isLastStep ? 'bg-green-600 hover:bg-green-700' : 'bg-black'}"
          >
            {isLastStep ? "✓" : "→"}
          </button>
      
        </div>
    </fieldset>
</form>
  