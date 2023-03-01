<script lang="ts">
  import { page } from '$app/stores';
  let slug: any = $page.url.searchParams.get('m');
  let input: any;
</script>

<main
  class="flex flex-col items-center justify-center min-h-[calc(100vh-100px)] pb-[100px]"
>
  <h1 class="pb-6 text-5xl font-medium --ui-head">
    {slug ? 'Your link has been made!' : 'All your links, simplified.'}
  </h1>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  {#if !slug}
    <form
      class="flex items-center w-5/12 gap-4 p-4 bg-white rounded-md shadow-md"
      method="post"
      on:click={input.focus()}
    >
      <label
        for="url"
        class="pr-4 border-r-[1px] text-sm border-neutral-200 text-neutral-400"
      >
        https://
      </label>
      <!-- svelte-ignore a11y-autofocus -->
      <input
        bind:this={input}
        type="text"
        name="url"
        class="w-full h-full text-sm bg-transparent outline-0 placeholder:text-neutral-400"
        placeholder="Enter a link to shorten..."
        required
        autofocus
      />
      <button class="pl-4 text-neutral-400">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-5"
        >
          <path
            fill-rule="evenodd"
            d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </form>
  {:else}
    <p class="max-w-3xl text-center">
      You can view it at <a
        href={'https://' + $page.url.host + '/' + slug}
        target="_blank"
        rel="noreferrer"
        class="text-blue-400 hover:underline">{$page.url.host}/{slug}</a
      >.
    </p>
    <a
      href="/"
      target="_parent"
      class="px-4 py-2 mt-6 text-sm text-white bg-black rounded-md"
      >Create a new link &rarr;</a
    >
  {/if}
</main>
