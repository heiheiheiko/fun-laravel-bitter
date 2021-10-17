<template>
  <TheLayout>
    <PageHeader> {{ $t('views.PostIndex.title') }} </PageHeader>
    <PostForm class="mb-8"></PostForm>
    <PostGrid></PostGrid>
  </TheLayout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';
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
    const { t } = useI18n({
      inheritLocale: true,
      useScope: 'local',
    });

    return {
      fetchPosts, t,
    };
  },
  created() {
    this.fetchPosts();
  },
});
</script>

<i18n>
{
  "en": {
    "pageTitle": "Terrefieng posts"
  },
}
</i18n>
