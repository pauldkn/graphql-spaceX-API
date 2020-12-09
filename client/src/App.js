import "./styles/App.scss";
import Header from "./components/Header";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

import Launches from "./components/Launches";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="container">
        <Header />
        <Launches />
      </div>
    </ApolloProvider>
  );
}

export default App;
