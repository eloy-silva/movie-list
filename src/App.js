import React from "react";
import MovieList from "./components/List";
import MovieDetails from "./components/Details";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { AppContainer, GlobalStyles } from "./globalStyle";
import Home from "./components/Home";

export default function App() {
  return (
    <AppContainer>
      <GlobalStyles />
      <BrowserRouter>
        <Home />
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/:id" element={<MovieDetails />} />
        </Routes>
      </BrowserRouter>
    </AppContainer>
  );
}
