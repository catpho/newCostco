<script>
    let stepIndex = 0;
  
    const steps = [
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
        key: "size",
        options: [
          { id: "round", label: "10\" Round Cake" },
          { id: "half-sheet", label: "1/2 Sheet Cake" }
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
            { type: "tel", key: "phone", placeholder: "Phone number" },
            { type: "checkbox", key: "consent", label: "I agree to receive calls and messages regarding my order" }
        ]
      },
    ];
  /** @type {Record<string, string>} */
    let selections = { flavor: "", size: "", message: "", design: "", phone: "" };
    /** @type {Record<string, boolean>} */
    let checkboxSelections = { consent: false };
  
    function next() {
      if (stepIndex < steps.length - 1) stepIndex++;
    }
  
    function prev() {
      if (stepIndex > 0) stepIndex--;
    }
  
    $: step = steps[stepIndex];
    $: stepKey = step.key;
  </script>
  
  <fieldset class="max-w-xl mx-auto border rounded p-6 bg-gray-50">
  
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
              bind:value={selections[field.key]}
              placeholder={field.placeholder ?? ""}
              class="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
            />
          {:else if field.type === "checkbox"}
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" bind:checked={checkboxSelections[field.key]} />
              <span class="text-sm">{field.label}</span>
            </label>
          {/if}
        {/each}
      {:else if step.input}
        <input
          type="text"
          bind:value={selections[stepKey]}
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
            bind:group={selections[stepKey]}
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
        disabled={stepIndex === 0}
        class="w-10 h-10 rounded-full border flex items-center justify-center disabled:opacity-30"
      >
        ←
      </button>
  
      <div class="text-sm">
        {stepIndex + 1} / {steps.length}
      </div>
  
      <button
        on:click={next}
        disabled={stepIndex === steps.length - 1}
        class="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center disabled:opacity-30"
      >
        →
      </button>
  
    </div>
  </fieldset>
  