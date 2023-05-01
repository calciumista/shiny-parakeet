<script lang="ts">
  import axios from "axios";
  let id = "12345678";
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
      const config = {
        headers: {
          "Content-Type": "application/json",
          "api-key": "6ce19100-2c11-41c7-bd66-c6a769e90064",
        },
      };
      axios.get(`https://v3.blox.link/developer/discord/${idInput.value}`, config).then((response) => {
        console.log(response.data);
        console.log("grabbed");
        const obj: MyApiResponse = response.data;
        console.log(obj.user.robloxId);
        const objresponse = document.querySelector("#response");
        if (objresponse) {
          objresponse.innerHTML = obj.user.robloxId;
        }
        console.log("set");
      });
    } else {
      console.log("Input value is empty");
    }
  }
</script>

<div class="flex flex-col items-center py-4">
  <h1 class="text-3xl font-bold text-white text-center py-2 hover:scale-105 transition-all duration-200">Grab Roblox UserID from someone's Discord ID!</h1>
  <div class="py-2" />
  <div class="flex">
    <input bind:value={id} placeholder="enter discord id!" class="blue-border text-bold" id="lookup" />
    <div class="px-2" />
    <button on:click={lookup} class="blue-border text-bold px-10" id="lookup"> Look up! </button>
  </div>
  <div class="py-2" />
  <p id="response" class="blue-border text-bold px-2">Response here...</p>
  <div class="py-2" />
  <p class="text-white text-bold text-xs hover:scale-105 transition-all duration-200">Requires account to have an account linked via <a href="https://blox.link" class="font-outline-red">BloxLink</a>.</p>
</div>
