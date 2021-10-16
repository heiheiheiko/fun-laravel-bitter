<template>
  <PostIndex></PostIndex>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import useState from './composables/useState';
import PostIndex from './views/PostIndex.vue';

export default defineComponent({
  components: { PostIndex },
  name: 'App',
  setup() {
    const { computedState } = useState();

    return {
      computedState,
    };
  },
});
</script>
