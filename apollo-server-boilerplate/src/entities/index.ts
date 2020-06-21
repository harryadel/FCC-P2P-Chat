import { roomTypeDefs, roomResolvers } from './room/index';
import { merge } from 'lodash';

export const schema = {
  typeDefs: roomTypeDefs,
  // Include resolvers here
  resolvers: merge(
      roomResolvers
  ),
};

export default schema;
