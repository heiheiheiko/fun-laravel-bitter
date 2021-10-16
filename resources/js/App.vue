<template>
  <PostIndex></PostIndex>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import usePost from './composables/usePost';
import useState from './composables/useState';
import PostIndex from './views/PostIndex.vue';

export default defineComponent({
  components: { PostIndex },
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
