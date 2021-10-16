import { schema } from 'normalizr';
import useState from './useState';

const { findResource } = useState();

// constants
const resourceName = 'users';

// schema
const userSchema = new schema.Entity(resourceName, {

});

// computed

export default function useUser() {
  // methods
  const findUser = (id: number) => findResource(resourceName, id);

  return {
    userSchema,
    findUser,
  };
}
