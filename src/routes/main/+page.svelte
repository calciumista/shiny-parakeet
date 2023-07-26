<script lang="ts">
  import { onMount } from "svelte";
  import Saos from "saos";
  import { fly, fade } from "svelte/transition";
  import Name from "./components/name.svelte";
  import Info from "./components/info.svelte";
  import Joke from "./components/joke.svelte";
  import Presence, { getPresence } from "./components/presence.svelte";
  import Insult from "./components/insult.svelte";
  import { base } from "$app/paths";
  import Message from "./components/mots.svelte";

  let ready = false;
  onMount(async () => {
    getPresence();
    ready = true;
  });
</script>

<svelte:head>
  <title>calcal.space</title>
</svelte:head>
<svelte:body class="bg-blue-300" />

{#if ready}
  <div>
    <Saos animation={"scale-in-center 0.225s cubic-bezier(0.250, 0.460, 0.450, 0.940) both"}>
      <Message />
      <div class="py-4" />
      <Presence />
      <div class="py-6" />
      <Name />
      <div class="py-6" />
      <Joke />
      <div class="py-6" />

      <audio src="/swift.mp3" autoplay class="audio-1" id="auto" controls />
      <h6 class="text-white text-center text-lg font-semibold py-1">and you wanna scream dont call me kid dont call me baby...</h6>

      <div class="flex justify-center py-8 px-1">
        <a href="{base}/main/more" class="blue-border px-2">See more...</a>
      </div>
    </Saos>
  </div>
{/if}

<style lang="postcss">
  @import url("https://fonts.cdnfonts.com/css/sf-ui-text-2");

  :global(html) {
    background-color: theme(colors.blue.400);
    font-family: "SF UI Text", sans-serif;
  }
  @keyframes -global-from-left {
    0% {
      transform: rotateX(50deg) translateX(-200vw) skewX(-50deg);
      opacity: 1;
    }
    100% {
      transform: rotateX(0deg) translateX(0) skewX(0deg);
      opacity: 1;
    }
  }

  @keyframes -global-scale-in-ver-center {
    0% {
      -webkit-transform: scaleY(0);
      transform: scaleY(0);
      opacity: 1;
    }
    100% {
      -webkit-transform: scaleY(1);
      transform: scaleY(1);
      opacity: 1;
    }
  }

  @keyframes -global-scale-in-center {
    0% {
      -webkit-transform: scale(0);
      transform: scale(0);
      opacity: 1;
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
      opacity: 1;
    }
  }

  audio::-webkit-media-controls-panel {
    background-color: #56aeff;
  }

  audio::-webkit-media-controls-volume-slider {
    background-color: #fff;
    border-radius: 25px;
    padding-left: 8px;
    padding-right: 8px;
  }

  audio::-webkit-media-controls-timeline {
    background-color: #fff;
    border-radius: 25px;
    margin-left: 10px;
    margin-right: 10px;
  }

  audio::-webkit-media-controls-time-remaining-display {
    color: #fff;
  }

  audio::-webkit-media-controls-current-time-display {
    color: #fff;
  }

  audio::-webkit-media-controls-play-button {
    background-color: #000;
    border-radius: 50%;
  }

  audio::-webkit-media-controls-play-button:hover {
    background-color: #fff;
  }

  audio::-webkit-media-controls-mute-button {
    background-color: #fff;
    border-radius: 50%;
  }

  .audio-1 {
    display: table;
    margin: 0 auto;
  }
</style>
