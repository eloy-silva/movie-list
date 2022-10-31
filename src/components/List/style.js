import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 10px 0px;
`;

export const Movie = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MovieLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  margin-top: 40px;

  :hover {
    transition: all 0.3s;
    transform: scale(1.1);
  }
`;

export const Title = styled.h1`
  color: white;
  text-align: center;
  font-weight: bold;
  font-size: 70%;
  max-width: 7rem;
  margin-bottom: 20px;
`;

export const ListMovies = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  column-gap: 3rem;
  row-gap: 4rem;
`;

export const MoviePoster = styled.div`
  width: 180px;

  img {
    width: 180px;
    border-radius: 1rem;
    margin-bottom: 2rem;
  }
`;
