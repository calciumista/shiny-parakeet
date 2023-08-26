<!--suppress pseudo-selector, CssInvalidPseudoSelector -->
<script lang="ts">
  import Work from "./main/components/work.svelte";
</script>


<div class="p-2">
  <div class="artboard phone-4 bg-blue-600 rounded-md artboard-demo m-auto p-4 shadow-lg">
    <img src="/boykisser.png" class="py-2 rounded-3xl" alt="ilovemen">
    <h1 class="font-bold text-xl">hai! im calcium :3</h1>
    <p class="text-center pt-2">I'm a frontend developer - this is my site calcal.space. <br> Its like.. an about me. It shows my work and stuff. Not much but whatever :shrug:.</p>
    <p class="text-center py-4">This site is made with SvelteKit and TailwindCSS (in svelte we trust)</p>
    <div class="py-4"></div>

    <audio class="audio-1 hover:scale-105 transition-all duration-400" controls id="auto" src="/swift.mp3"/>
    <p class="text-center py-2">yes im a big swiftie 🤭</p>
  </div>
  <div class="animate-bounce flex justify-center py-8">
    <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="">
      <line x1="12" y1="4" x2="12" y2="20"/>
      <polyline points="18 14 12 20 6 14"/>
    </svg>
  </div>
  <Work />
  <p class="p-4 text-center">calcal.space 2023</p>
</div>

<style lang="postcss">
  @import url("https://fonts.cdnfonts.com/css/sf-ui-text-2");

  :global(html) {
    font-family: "SF UI Text", sans-serif;
  }

  audio::-webkit-media-controls-panel {
    background-color: #56aeff;
  }

  audio::-webkit-media-controls-volume-slider {
    background-color: #0E53FE;
    border-radius: 25px;
    padding-left: 8px;
    padding-right: 8px;
  }

  audio::-webkit-media-controls-timeline {
    background-color: #0E53FE;
    border-radius: 25px;
    margin-left: 10px;
    margin-right: 10px;
  }

  audio::-webkit-media-controls-time-remaining-display {
    color: #0E53FE;
  }

  audio::-webkit-media-controls-current-time-display {
    color: #0E53FE;
  }

  audio::-webkit-media-controls-play-button {
    background-color: #0E53FE;
    border-radius: 50%;
  }

  audio::-webkit-media-controls-play-button:hover {
    background-color: #0E53FE;
  }

  audio::-webkit-media-controls-mute-button {
    background-color: #0E53FE;
    border-radius: 50%;
  }

  .audio-1 {
    display: table;
    margin: 0 auto;
  }
</style>
