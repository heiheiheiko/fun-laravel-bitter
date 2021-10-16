<template>
  <TheLayout>
    <PageHeader> Posts </PageHeader>
    <PostForm class="mb-8"></PostForm>
    <PostCard></PostCard>
  </TheLayout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PostCard from '../components/PostCard.vue';
import TheLayout from '../components/TheLayout.vue';
import PageHeader from '../components/PageHeader.vue';
import PostForm from '../components/PostForm.vue';

export default defineComponent({
  components: {
    TheLayout, PostCard, PageHeader, PostForm,
  },

});
</script>
