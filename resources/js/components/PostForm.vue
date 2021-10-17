<template>
  <div class="mt-1 sm:mt-0 sm:col-span-2 flex flex-col items-center
    my-6 px-4 md:px-6 lg:px-8 w-100">
    <textarea
      id="messgae"
      name="message"
      v-model="v$.message.$model"
      rows="3"
      class="w-full md:w-1/2 shadow-sm block focus:ring-gray-500 focus:border-gray-500 sm:text-sm
        border border-gray-300 rounded-md"></textarea>

    <ul class="mt-2 text-sm" v-for="error of v$.message.$errors" :key="error.$uid">
      <li class="text-red-500">{{ error.$message }}</li>
    </ul>

    <p class="my-2  text-gray-500">
      {{ $t('forms.PostForm.fields.message.hint')}}
    </p>

    <BaseButton
      @click="onSubmit"
      color="red"
      :is-disabled="v$.$invalid">
      {{ $t('forms.PostForm.submit')}}
    </BaseButton>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import useVuelidate from '@vuelidate/core';
import { required, minLength, maxLength } from '@vuelidate/validators';
import BaseButton from './BaseButton.vue';
import usePost from '../composables/usePost';

export default defineComponent({
  components: { BaseButton },
  setup() {
    const { createPost } = usePost();

    const state = reactive({
      message: '',
    });
    const rules = {
      message: {
        required,
        minLength: minLength(12),
        maxLength: maxLength(255),
      },
    };
    const v$ = useVuelidate(rules, state);

    const onSubmit = () => {
      createPost(state.message);
    };

    return { state, v$, onSubmit };
  },
});
</script>
