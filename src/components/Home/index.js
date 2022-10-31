import React from "react";
import MovieSearch from "../Search";
import { Container, LinkHome, Title } from "./style";

function Home() {
  return (
    <Container>
      <LinkHome to="/">
        <Title>MOVIE LIST</Title>
      </LinkHome>
      <MovieSearch />
    </Container>
  );
}

export default Home;
