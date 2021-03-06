import Realm from 'realm';
import RepositorySchema from '../schemas/RepositorySchema';

export default () => {
  return Realm.open({
    schema: [
      RepositorySchema,
    ]
  })
}