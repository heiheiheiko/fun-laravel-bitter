<template>
<div class="grid grid-cols-1 gap-6 my-6 px-4 md:px-6 lg:px-8">
  <div class="flex flex-col mx-auto rounded-lg shadow-lg overflow-hidden w-1/2">
    <div class="flex-1 bg-gray-700 p-6">
      <div class="flex-1">
        <p class="text-base text-gray-200">
          Lorem ipsum
        </p>
      </div>
      <div class="mt-6 flex items-center">
        <div class="flex-shrink-0">
          <BaseAvatar> 88 </BaseAvatar>
        </div>
        <div class="ml-3">
          <p class="text-sm font-medium text-gray-200">
            <a href="#" class="hover:underline">
              Author
            </a>
          </p>
          <div class="flex space-x-1 text-sm text-gray-400">
            2 Minutes
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BaseAvatar from './BaseAvatar.vue';

export default defineComponent({
  components: { BaseAvatar },
});
</script>
