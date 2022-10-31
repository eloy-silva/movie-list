import React, { useState, useLayoutEffect } from "react";
import { useParams } from "react-router-dom";
import { searchMovieById } from "../../services/api";
import { DetailsMovies, Container, Loading } from "./style";

function Details() {
    const { id } = useParams();

    const [movie, setMovie] = useState({});
    const [load, setLoad] = useState(true);

    useLayoutEffect(() => {
        async function loadData() {
            const { data } = await searchMovieById(id);
            setMovie(data);
            setLoad(false);
        }
        loadData();
    }, [id]);

    return (
        <Container>
            {!load ? (
                <DetailsMovies>
                    <h3>{movie.Title}</h3>
                    <img src={movie.Poster} alt={movie.Title} />
                    <h4>IMDB: {movie.imdbRating}</h4>
                    <h4>Runtime: {movie.Runtime}</h4>
                    <h4>Released date of : {movie.Released}</h4>

                    <h4>Genre: {movie.Genre}</h4>
                    <h4>Actors: {movie.Actors}</h4>
                    <h4>Director(s): {movie.Director}</h4>
                    <h4>Awards: {movie.Awards}</h4>

                    <p>
                        <strong>Synopsis:</strong> {movie.Plot}
                    </p>
                </DetailsMovies>
            ) : (
                <Loading>Loading...</Loading>
            )}
        </Container>
    );
}

export default Details;
