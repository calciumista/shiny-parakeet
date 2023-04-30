<script lang="ts">
  import axios from "axios";

  interface Joke {
    category: string;
    joke: string;
  }

  function grabJoke() {
    axios.get("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw&type=single").then((response) => {
      console.log(response.data);
      const obj: Joke = response.data;
      const objresponse = document.querySelector("#category");
      const objresponse2 = document.querySelector("#joke");
      if (objresponse) {
        objresponse.innerHTML = obj.category;
      }
      if (objresponse2) {
        objresponse2.innerHTML = obj.joke;
      }
    });
  }
</script>

<div class="flex flex-col items-center py-4 px-2">
  <button on:click={grabJoke} class="bg-blue-300 text-center rounded-md shadow-md border-2 border-blue-200 hover:scale-105 transition-all duration-200 text-white text-bold px-10" id="lookup"> Look up! </button>
  <div class="py-2" />
  <div class="border-spacing-4">
    <div class="bg-blue-300 text-center rounded-md shadow-md border-2 border-blue-200 hover:scale-105 active:scale-105 transition-all duration-200 text-white text-bold px-4">
      <h3 class="text-bold text-xl" id="category">Insert joke here!</h3>
      <div class="py-1" />
      <p class="" id="joke">Insert joke here!</p>
    </div>
  </div>
</div>
