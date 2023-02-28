<script lang="ts">
  import '../app.css';
  import '@fontsource/inter';
  import '@fontsource/poppins';

  import Nav from '$lib/Nav.svelte';
</script>

<svelte:head>
  <title>Bluejay | Links, Simplified</title>
</svelte:head>

<div class="min-h-screen bg-neutral-50 bg-[url('/dot.svg')]">
  <Nav />
  <slot />
</div>
