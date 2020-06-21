import Ctrl from './controller';

export const roomTypeDefs = `
    type Query {
      helloWorld: String
    }

    type Room {
      id: ID!
      name: String!
    }    

    type createRoomResponse {
      success: Boolean!
      message: String
      room: Room
    }

    type Mutation {
        createRoom(name: String!): createRoomResponse 
    }
`;

export const roomResolvers = {
  // Include resolvers here
  Query: {

  },
  Mutation: {
    createRoom: Ctrl.createRoom,
  },
  Room: {},
};
