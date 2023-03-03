import {
  ApolloClient,
  InMemoryCache,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "http://192.168.100.8:5001/api/mottled-lamb",
  cache: new InMemoryCache(),
});

export default client;