<script lang="ts">
  import axios from "axios";
  var target = "raisins";
  const objresponse = document.querySelector("#response");

  async function grabInsult() {
    axios.get("https://insults.tr00st.co.uk/phrases/simple/?target=raisin").then((response: any) => {
      let a = response.data;
    });
  }
</script>

<div class="flex flex-col items-center py-4">
  <h1 class="h1 pb-4">Grab Insult!</h1>
  <button class="text-white blue-border justify-center px-6 text-center" on:click={grabInsult}>grab innit ting fam</button>
  <div class="flex-col py-2">
    <input bind:value={target} placeholder="enter target!" class="blue-border font-semibold" />
  </div>
</div>
