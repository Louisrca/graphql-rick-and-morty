import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  // uri: "https://flyby-router-demo.herokuapp.com/",
  cache: new InMemoryCache(),
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </BrowserRouter>
  </StrictMode>
);
