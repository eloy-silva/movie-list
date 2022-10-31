import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMovies } from "../../contexts/contextMovies";
import { SearchContainer } from "./style";

function Search() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const { submitSearchMovie } = useMovies();

  const handleSubmitSearch = () => {
    if (input === "") return;

    submitSearchMovie(input);

    navigate("/");
  };

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <SearchContainer>
      <input
        text="text"
        placeholder="what's your movie"
        value={input}
        name="searchMovie"
        onChange={handleChange}
      />
      <button
        onClick={() => {
          handleSubmitSearch();
        }}
      >
        <p>Search</p>
      </button>
    </SearchContainer>
  );
}

export default Search;
