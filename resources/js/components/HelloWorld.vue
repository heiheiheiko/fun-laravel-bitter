<template>
    <h1 class="text-green-500">{{ greeting }}</h1>
</template>

<script>
export default {
  setup: () => ({
    greeting: 'Hello World from Vue 3!',
  }),
};
</script>
