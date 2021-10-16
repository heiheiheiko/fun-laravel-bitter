<template>
  <div class="bg-gray-800 mb-16">
    <TheNavigation class="mb-16"></TheNavigation>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TheNavigation from './TheNavigation.vue';

export default defineComponent({
  components: { TheNavigation },
});
</script>
