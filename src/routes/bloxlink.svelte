<script lang="ts">
  let id = "1018551539482230936";
  async function lookup() {
    const idInput = document.querySelector("#lookup") as HTMLInputElement | null;
    interface User {
      robloxId: string;
      primaryAccount: string;
    }

    interface MyApiResponse {
      success: boolean;
      user: User;
    }

    if (idInput && idInput.value && idInput.value.length > 0) {
      let xhttp = new XMLHttpRequest();
      xhttp.open("GET", `https://v3.blox.link/developer/discord/${idInput.value}`);
      xhttp.setRequestHeader("Content-type", "application/json");
      xhttp.setRequestHeader("api-key", "6ce19100-2c11-41c7-bd66-c6a769e90064");
      xhttp.send();
      const response = document.querySelector("#response");
      if (response) {
        console.log("grabbed");
        console.log(xhttp.response);
        const obj: MyApiResponse = JSON.parse(xhttp.response);
        response.innerHTML = obj.user.robloxId;
        console.log("set");
      }
      return;
    } else {
      console.log("Input value is empty");
    }
  }
</script>

<div class="flex flex-col items-center py-4">
  <h1 class="text-3xl font-bold text-white text-center py-2 hover:scale-105 transition-all duration-200">Grab Roblox User from their Discord ID!</h1>
  <div class="py-2" />
  <div class="flex">
    <input bind:value={id} placeholder="enter name!" class="bg-blue-300 text-center rounded-md shadow-md border-2 border-blue-200 hover:scale-105 transition-all duration-200 text-white text-bold" id="lookup" />
    <div class="px-2" />
    <button on:click={lookup} class="bg-blue-300 text-center rounded-md shadow-md border-2 border-blue-200 hover:scale-105 transition-all duration-200 text-white text-bold px-1" id="lookup"> Look up! </button>
  </div>
  <p id="response">Response here...</p>
</div>
