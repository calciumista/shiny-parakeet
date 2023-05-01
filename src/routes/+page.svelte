<script>
  import { onMount } from "svelte";
  import { fly } from "svelte/transition";
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
  <div transition:fly={{ y: 400, duration: 1750 }}>
    <Info />
    <Presence />
    <Name />
    <Blox />
    <Joke />
  </div>
{/if}

<style lang="postcss">
  :global(html) {
    background-color: theme(colors.blue.400);
  }
</style>
