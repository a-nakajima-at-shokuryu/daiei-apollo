const { ApolloServer } = require('apollo-server-lambda');

const resolvers = '../src/resolvers';
const typeDefs = '../src/typeDefs';

const server = new ApolloServer({
  typeDefs, 
  resolvers, 
});

exports.handler = server.createHandler();