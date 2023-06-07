<script>
  import { twemoji } from "svelte-twemoji";
</script>

<svelte:head>
  <script src="https://unpkg.com/twemoji@latest/dist/twemoji.min.js" crossorigin="anonymous"></script>
  <meta charset="utf-8" />
</svelte:head>

<div>
  <div class="hero min-h-screen bg-blue-300">
    <div class="hero-content text-center flex-col">
      <h1 class="text-4xl text-neutral">calcal.space</h1>
      <h2 class="py-2 text-xl" use:twemoji>Your one stop shop for Calcium! 🥛</h2>
      <a class="btn btn-secondary" href="/main">Enter</a>
    </div>
  </div>
</div>
