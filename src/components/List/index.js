import React, { useEffect } from "react";
import { searchMoviesByTitle } from "../../services/api";
import { useMovies } from "../../contexts/contextMovies";
import { MovieLink, Title, Movie, Container, ListMovies } from "./style";

function List() {
    const { movies, setMovies } = useMovies();

    useEffect(() => {
        async function response() {
            if (!movies.length) {
                const data = await searchMoviesByTitle("back to future");
                setMovies(data.Search);
            }
        }
        response();
    }, [movies.length, setMovies]);

    return (
        <Container>
            {movies.map((movie, index) => (
                <ListMovies key={index}>
                    <MovieLink to={`/${movie.imdbID}`}>
                        <Movie>
                            <img src={movie.Poster} alt={movie.Title} />
                        </Movie>
                        <Title>{movie.Title}</Title>
                    </MovieLink>
                </ListMovies>
            ))}
        </Container>
    );
}

export default List;
