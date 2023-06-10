<script>
  import { onMount } from "svelte";

  onMount(async () => {
    const message = document.getElementById("random");
    let messages = ["taylor is the best!!", "#killkanye", "hippapotomous 🦛", "speak now tv out soon!!", "i love taylor swift", "there was a tinder match in antartica once. 😱"];
    var randomItem = messages[Math.floor(Math.random() * messages.length)];

    console.log(randomItem);
    console.log(message?.innerHTML);
    if (message) {
      message.innerHTML = String(randomItem);
      console.log("set");
    }
  });
</script>

<div class="flex pb-2 justify-center">
  <p class="bg-blue-300 text-center rounded-b-md shadow-md border-2 border-blue-200 hover:scale-105 active:scale-105 transition-all duration-200 text-white px-2" id="random">Message here!</p>
</div>
