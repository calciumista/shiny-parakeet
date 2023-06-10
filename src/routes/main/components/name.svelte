<script>
  let name = "calcium";
  let describe = "the best svelte coder ever";
</script>

<div class="flex flex-col items-center px-4 py-4">
  <!--my wonderful if statements-->
  {#if !name && !describe}
    <h1 class="text-3xl font-bold text-white text-center hover:animate-bounce transition-all duration-75">something is...</h1>
  {:else if !describe}
    <h1 class="text-3xl font-bold text-white text-center hover:animate-bounce transition-all duration-75">{name} is...</h1>
  {:else if !name && describe}
    <h1 class="text-3xl font-bold text-white text-center hover:animate-bounce transition-all duration-75">something is {describe}!</h1>
  {:else}
    <h1 class="text-3xl font-bold text-white text-center hover:animate-bounce transition-all duration-75">{name} is {describe}!</h1>
  {/if}
  <div class="py-2" />
  <input bind:value={name} placeholder="enter name!" class="blue-border font-semibold px-2" />
  <div class="py-2" />
  <input bind:value={describe} placeholder="enter adjective!" class="blue-border font-semibold px-2" />
</div>
