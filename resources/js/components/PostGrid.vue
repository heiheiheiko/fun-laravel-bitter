<template>
  <div class="grid grid-cols-1 gap-6 my-6 px-4 md:px-6 lg:px-8">
    <template v-if="posts">
      <PostCard
        v-for="post in posts"
        :key="post.id"
        :post="post">
        </PostCard>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import usePost from '../composables/usePost';
import PostCard from './PostCard.vue';

export default defineComponent({
  components: { PostCard },

  setup() {
    const { posts } = usePost();

    return {
      posts,
    };
  },
});
</script>
