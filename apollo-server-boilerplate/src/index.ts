const express = require('express');
const { ApolloServer } = require('apollo-server-express');

import connection from './database';
import schema from './entities';

const server = new ApolloServer({
  typeDefs: schema.typeDefs,
  resolvers: schema.resolvers,
});

const app = express();
const index = () => {
  server.applyMiddleware({ app });

  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
};

connection(index);
export default app;
