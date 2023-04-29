<script>
  import Name from "./name.svelte";
  import Info from "./info.svelte";
  import Blox from "./bloxlink.svelte";
</script>

<svelte:head>
  <title>calcal.space</title>
</svelte:head>

<Info />
<Name />
<Blox />

<style lang="postcss">
  :global(html) {
    background-color: theme(colors.blue.400);
  }
</style>
