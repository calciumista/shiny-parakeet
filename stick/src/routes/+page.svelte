<script>
  import { is_empty } from "svelte/internal";

  let name = "calcium";
  let describe = "";
</script>

<div class="flex flex-col items-center px-4 py-4">
  {#if describe}
    <h1 class="text-3xl font-bold text-white py-4">{name} is {describe}!</h1>
  {:else}
    <h1 class="text-3xl font-bold text-white py-4">{name} is...</h1>
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
