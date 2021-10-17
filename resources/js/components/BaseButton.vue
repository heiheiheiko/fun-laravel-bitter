<template>
  <button
    type="button"
    :disabled="isDisabled"
    class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium
      rounded-full shadow-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2`"
    :class="[`bg-${color}-600 hover:bg-${color}-700 focus:ring-${color}-500`,
      {'opacity-50 cursor-not-allowed': this.isDisabled}]">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    isDisabled: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: 'gray',
    },
  },
});
</script>
