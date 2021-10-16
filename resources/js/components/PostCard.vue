<template>
  <div class="flex flex-col mx-auto rounded-lg shadow-lg overflow-hidden w-1/2">
    <div class="flex-1 bg-gray-700 p-6">
      <div class="flex-1">
        <p class="text-base text-gray-200">
          {{ post.message }}
        </p>
      </div>
      <div class="mt-6 flex items-center">
        <div class="flex-shrink-0">
          <BaseAvatar :color="user.color"> {{ avatarLetters }} </BaseAvatar>
        </div>
        <div class="ml-3">
          <p class="text-sm font-medium text-gray-200">
            <a href="#" class="hover:underline">
              {{ user.name }}
            </a>
          </p>
          <div class="flex space-x-1 text-sm text-gray-400">
            {{ postedAtInWords }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import moment from 'moment';
import useUser from '../composables/useUser';
import BaseAvatar from './BaseAvatar.vue';

export default defineComponent({
  components: { BaseAvatar },
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const { findUser } = useUser();
    const user = computed(() => findUser(props.post.user));
    const postedAtInWords = computed(() => moment(props.post.created_at).fromNow());
    const avatarLetters = computed(() => {
      const splittedName = user.value.name.split(' ');
      if (splittedName.length === 1) { return splittedName[0][0]; }
      return splittedName[0][0] + splittedName[1][0];
    });
    return {
      user, postedAtInWords, avatarLetters,
    };
  },
});
</script>
