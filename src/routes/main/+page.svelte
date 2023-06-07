<script>
  import { onMount } from "svelte";
  import { fly, fade } from "svelte/transition";
  import Name from "./components/name.svelte";
  import Info from "./components/info.svelte";
  import Joke from "./components/joke.svelte";
  import Presence, { getPresence } from "./components/presence.svelte";

  let ready = false;
  onMount(async () => {
    ready = true;
    getPresence();
  });
</script>

<svelte:head>
  <title>calcal.space</title>
</svelte:head>
<svelte:body class="bg-blue-300" />

{#if ready}
  <div>
    <div class="py-2" />
    <Presence />
    <Name />
    <Joke />

    <div class="flex justify-center py-8 px-1">
      <a href="/main/more" class="blue-border px-2">See more...</a>
    </div>
  </div>
{/if}

<style lang="postcss">
  @import url("https://fonts.cdnfonts.com/css/sf-ui-text-2");

  :global(html) {
    background-color: theme(colors.blue.300);
    font-family: "SF UI Text", sans-serif;
  }
</style>
