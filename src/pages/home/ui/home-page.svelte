<script lang="ts">
  import { Button } from '@/shared/ui';

  let count: number = 0;

  function increment() {
    count += 1;
  }
  function decrement() {
    count -= 1;
  }
</script>

<div
  class="absolute top-1/2 flex w-screen -translate-y-1/2 flex-col items-center justify-center gap-y-10"
>
  <p class="text-xl">Count: {count}</p>

  <div class="flex gap-x-2">
    <Button on:click={increment}>increment</Button>
    <Button on:click={decrement}>decrement</Button>
  </div>
</div>
