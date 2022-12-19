import logo from "./logo.svg";
import "./App.css";
import Display from "./components/Display/Display";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Tile from "./components/Tile/Tile";
import Homestead from "./components/Tile/Homestead";
import LoggingCamp from "./components/Tile/LoggingCamp";
import Tannery from "./components/Tile/Tannery";

import React, { useState } from "react";
import Login from "./pages/Login";
import Game from "./pages.Game"

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <>
          <Routes>
            <Route path="/" element={<Game />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="*"
              element={<h1 className="display-2">Wrong page!</h1>}
            />
          </Routes>
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;
