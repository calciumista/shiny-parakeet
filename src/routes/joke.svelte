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

<div class="flex flex-col items-center px-2">
  <h1 class="text-3xl font-bold text-white text-center hover:scale-110 transition-all duration-200 py-2">Grab a Joke!</h1>
  <div class="py-4" />
  <button on:click={grabJoke} class="blue-border text-bold px-10" id="lookup">Grab Joke!</button>
  <div class="py-2" />
  <div class="border-spacing-4">
    <div class="blue-border px-4">
      <h3 class="font-bold text-xl" id="category">Insert joke here!</h3>
      <div class="py-1" />
      <p class="" id="joke">Insert joke here!</p>
    </div>
  </div>
</div>
