<script>
  import { onMount } from "svelte";
  import { fly, fade } from "svelte/transition";
  import Name from "./name.svelte";
  import Info from "./info.svelte";
  import Blox from "./bloxlink.svelte";
  import Joke from "./joke.svelte";
  import Presence, { getPresence } from "./presence.svelte";

  let ready = false;
  onMount(async () => {
    ready = true;
    getPresence();
  });
</script>

<svelte:head>
  <title>calcal.space</title>
</svelte:head>

{#if ready}
  <div>
    <div class="py-2" />
    <Presence />
    <Name />
    <Joke />

    <div class="flex justify-center py-8 px-1">
      <a href="/more" class="blue-border px-2">See more...</a>
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
