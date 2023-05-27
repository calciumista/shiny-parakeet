<script>
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";

  let ready = false;
  onMount(async () => {
    ready = true;
  });
</script>

<svelte:head>
  <title>calcal.space</title>
</svelte:head>

{#if ready}
  <div in:fade>
    <div class="flex justify-center p-2 px-1">
      <div class="flex-col blue-border">
        <img src="./zumo.gif" class="px-1 pt-1" alt="zumo my beloved" />
        <p class="font-bold px-2">i love zumo</p>
      </div>
    </div>
    <div class="flex justify-center p-2 px-1">
      <a href="/" class="blue-border px-2">Go back... </a>
    </div>
  </div>
{/if}

<style lang="postcss">
  @import url("https://fonts.cdnfonts.com/css/sf-ui-text-2");

  :global(html) {
    background-color: theme(colors.blue.400);
    font-family: "SF UI Text", sans-serif;
  }
</style>
