<template>
  <TheLayout>
    <PageHeader> Posts </PageHeader>
    <PostForm class="mb-8"></PostForm>
    <PostGrid></PostGrid>
  </TheLayout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PostGrid from '../components/PostGrid.vue';
import TheLayout from '../components/TheLayout.vue';
import PageHeader from '../components/PageHeader.vue';
import PostForm from '../components/PostForm.vue';
import usePost from '../composables/usePost';

export default defineComponent({
  components: {
    TheLayout, PageHeader, PostForm, PostGrid,
  },
  setup() {
    const { fetchPosts } = usePost();

    return {
      fetchPosts,
    };
  },
  created() {
    this.fetchPosts();
  },
});
</script>
