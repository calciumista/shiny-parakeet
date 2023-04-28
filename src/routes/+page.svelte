<script>
  import Name from "./name.svelte";
  import Info from "./info.svelte";
</script>

<Info />
<Name />

<style lang="postcss">
  :global(html) {
    background-color: theme(colors.blue.400);
  }
</style>
