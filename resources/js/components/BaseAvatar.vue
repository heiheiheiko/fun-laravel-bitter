<template>
  <div
    class="flex items-center justify-center rounded-full"
    :class="[sizeClass[size], colorClass]"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { Dimension } from '@/types';

const sizeClass = {
  tiny: 'h-6 w-6',
  small: 'h-8 w-8',
  normal: 'h-10 w-10',
  large: 'h-12 w-12',
  huge: 'h-14 w-14',
} as Dimension;

export default defineComponent({
  props: {
    color: {
      type: String,
      default: 'gray',
    },
    size: {
      type: String,
      default: 'normal',
    },
  },
  setup(props) {
    const colorClass = computed(() => `bg-${props.color}-300`);
    return { sizeClass, colorClass };
  },
});
</script>
