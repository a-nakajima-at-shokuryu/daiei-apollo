const { ApolloServer } = require('apollo-server');
const {} = require('graphql');

const resolvers = require('./resolvers');
const typeDefs = require('./typeDefs');

const server = new ApolloServer({
  resolvers, 
  typeDefs, 
  // productionでfalseになるので
  // https://spectrum.chat/zeit/general/apollo-server-get-query-missing~ae8d5ca5-2faf-4c8d-8097-c3f6e25cad56
  introspection: true, 
  playground: true, 
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
});