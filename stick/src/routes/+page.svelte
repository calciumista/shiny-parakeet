<script>
  let name = "calcium";
  let describe = "daddy";
</script>

<div class="flex flex-col items-center px-4 py-4">
  {#if !name && !describe}
    <h1 class="text-3xl font-bold text-white py-4">something is...</h1>
  {:else if !describe}
    <h1 class="text-3xl font-bold text-white py-4">{name} is...</h1>
  {:else if !name && describe}
    <h1 class="text-3xl font-bold text-white py-4">something is {describe}!</h1>
  {:else}
    <h1 class="text-3xl font-bold text-white py-4">{name} is {describe}!</h1>
  {/if}
  <input bind:value={name} placeholder="enter name!" class="bg-blue-300 text-center rounded-md" />
  <div class="py-2" />
  <input bind:value={describe} placeholder="enter adjective!" class="bg-blue-300 text-center rounded-md" />
</div>

<style lang="postcss">
  :global(html) {
    background-color: theme(colors.blue.400);
  }
</style>
