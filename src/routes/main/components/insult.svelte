<script lang="ts">
  import axios from "axios";
  var target = "";
  const objresponse = document.getElementById("response");

  async function grabInsult() {
    if (target == "") {
      target = "kanye west";
    }
    axios.get("https://insults.tr00st.co.uk/phrases/simple/?target=" + target).then((response: any) => {
      if (objresponse) {
        objresponse.innerHTML = response.data;
      }
    });
  }
</script>

<div class="flex flex-col items-center py-4">
  <h1 class="h1 pb-4">Grab Insult!</h1>
  <div class="flex-col pb-4">
    <input bind:value={target} placeholder="enter target!" class="blue-border font-semibold" />
  </div>
  <button class="text-white blue-border justify-center px-6 text-center font-semibold" on:click={grabInsult}>grab insult ting fam</button>
  <div class="p-2" />
  <div>
    <p class="text-xl font-bold blue-border p-1 px-2" id="response">insult...</p>
  </div>
</div>
