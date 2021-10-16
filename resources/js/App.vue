<template>
  <HelloWorld></HelloWorld>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import usePost from './composables/usePost';
import useState from './composables/useState';

export default defineComponent({
  name: 'App',
  setup() {
    const { fetchPosts } = usePost();
    const { computedState } = useState();

    return {
      fetchPosts,
      computedState,
    };
  },
  created() {
    this.fetchPosts();
  },
});
</script>
