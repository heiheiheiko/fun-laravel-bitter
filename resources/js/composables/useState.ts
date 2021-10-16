/* eslint-disable @typescript-eslint/no-explicit-any */

import { reactive, computed } from 'vue';
import { normalize } from 'normalizr';

const state: any = reactive({});

const computedState = computed(() => state);

export default function useState() {
  const normalizeAndAssignData = (data: any, schema: any) => {
    const normalizedData = normalize(data, schema);

    const entityEntries = Object.entries(normalizedData.entities);
    entityEntries.forEach((entityEntry: any) => {
      const key = entityEntry[0];
      const value = entityEntry[1];
      state[key] = { ...state[key], ...value };
    });
  };

  const allResources = (resourceName: string) => {
    if (state[resourceName] === undefined) { return []; }
    return Object.values(state[resourceName]);
  };

  return {
    state,
    computedState,
    normalizeAndAssignData,
    allResources,
  };
}
