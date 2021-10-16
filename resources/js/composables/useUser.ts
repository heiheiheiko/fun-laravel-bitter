import { schema } from 'normalizr';

// constants
const resourceName = 'users';

// schema
const userSchema = new schema.Entity(resourceName, {

});

// computed

export default function usePost() {
  // methods

  return {
    userSchema,
  };
}
