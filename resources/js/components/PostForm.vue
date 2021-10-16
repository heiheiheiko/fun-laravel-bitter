<template>
  <div class="mt-1 sm:mt-0 sm:col-span-2 flex flex-col items-center
    my-6 px-4 md:px-6 lg:px-8 w-100">
    <textarea
      id="messgae"
      name="message"
      rows="3"
      class="w-1/2 shadow-sm block focus:ring-gray-500 focus:border-gray-500 sm:text-sm
        border border-gray-300 rounded-md"></textarea>

    <p class="my-2 text-sm text-gray-500">
      Write a terrifying message or tell the world your evil plans!
    </p>

    <BaseButton >terrify!</BaseButton>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BaseButton from './BaseButton.vue';

export default defineComponent({
  components: { BaseButton },
});
</script>
