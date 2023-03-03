// app navigator
import RootNavigator from "./navigator/RootNavigator";
import React from "react";

// @apollo - graphql
import { ApolloProvider } from "@apollo/client/react";
import client from "./lib/ApolloClient";

export default function App() {
  return (
    <ApolloProvider client={client}>
      <RootNavigator />
    </ApolloProvider>
  );
}
