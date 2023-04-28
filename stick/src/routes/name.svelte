<script>
  import "../app.css";
  let name = "calcium";
  let describe = "daddy";
</script>

<div class="flex flex-col items-center px-4 py-4">
  {#if !name && !describe}
    <h1 class="text-3xl font-bold text-white py-4 hover:scale-110 transition-all duration-200">something is...</h1>
  {:else if !describe}
    <h1 class="text-3xl font-bold text-white py-4 hover:scale-110 transition-all duration-200">{name} is...</h1>
  {:else if !name && describe}
    <h1 class="text-3xl font-bold text-white py-4 hover:scale-110 transition-all duration-200">something is {describe}!</h1>
  {:else}
    <h1 class="text-3xl font-bold text-white py- hover:scale-110 transition-all duration-2004">{name} is {describe}!</h1>
  {/if}
  <div class="py-2" />
  <input bind:value={name} placeholder="enter name!" class="bg-blue-300 text-center rounded-md shadow-md border-2 border-blue-200 hover:scale-105 transition-all duration-200 text-white text-bold" />
  <div class="py-2" />
  <input bind:value={describe} placeholder="enter adjective!" class="bg-blue-300 text-center rounded-md shadow-md border-2 border-blue-200 hover:scale-105 transition-all duration-200 text-white text-bold" />
</div>
