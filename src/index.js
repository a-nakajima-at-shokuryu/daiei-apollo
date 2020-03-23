const { ApolloServer } = require('apollo-server');
const {} = require('graphql');

const resolvers = require('./resolvers');
const typeDefs = require('./typeDefs');

const server = new ApolloServer({
  resolvers, 
  typeDefs, 
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
});