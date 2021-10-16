import { computed } from 'vue';
import { schema } from 'normalizr';
import axios from '../axios';
import useState from './useState';
import useUser from './useUser';
import { BackendResponse, Post } from '@/types';

const { allResources, normalizeAndAssignData } = useState();
const { userSchema } = useUser();

// constants
const resourceName = 'posts';
const resourceVersion = '1';
const resourceUrl = `/v${resourceVersion}/${resourceName}`;

// schema
const postSchema = new schema.Entity(resourceName, {
  user: userSchema,
});

// computed
const posts = computed(() => allResources(resourceName));

export default function usePost() {
  // methods
  const fetchPosts = () => axios.get(resourceUrl)
    .then((response: BackendResponse) => {
      normalizeAndAssignData(response.data as Post[], [postSchema]);
    });

  return {
    posts,
    postSchema,
    fetchPosts,
  };
}
