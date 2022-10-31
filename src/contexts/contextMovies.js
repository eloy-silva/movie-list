import React, { useState } from "react";
import { searchMoviesByTitle } from "../services/api";

const ContextMovies = React.createContext({});

export const ProviderMovies = (props) => {
    const [movies, setMovies] = useState([]);

    async function submitSearchMovie(title) {
        const data = await searchMoviesByTitle(title);
        setMovies(data.Search);
    }

    return (
        <ContextMovies.Provider
            value={{
                movies,
                setMovies,
                submitSearchMovie,
            }}
        >
            {props.children}
        </ContextMovies.Provider>
    );
};

export const useMovies = () => React.useContext(ContextMovies);
