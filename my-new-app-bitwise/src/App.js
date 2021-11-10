import "./App.css";
import React, { useEffect, useState } from "react";
import { getMovie } from "./utils";
import MovieCart from "./MovieCart";
import MovieDetails from "./MovieDetails";
import Header from "./Header";
import Rating from "./Rating";
import ActorsPlot from "./ActorsPlot";

function App() {
  const [movie, setMovie] = useState({});
  const [search, setSearch] = useState("");

  //fetch the movie from the api

  useEffect(() => {
    getMovie(search).then((data) => {
      setMovie(data);
    });
  }, [search]);

  // validate if the response is true
  const checkResponse = (data) => {
    if (data.Response === "True") {
      return (
        <div>
          <MovieDetails
            Poster={data.Poster}
            Title={data.Title}
            Rated={data.Rated}
            Runtime={data.Runtime}
            Genre={data.Genre}
            Plot={data.Plot}
            Actors={data.Actors}
            Rating={data.imdbRating}
          ></MovieDetails>
        </div>
      );
    }
    return <p>No Movie found</p>;
  };

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit" onClick={getMovie}>
        Search
      </button>
      <br></br>
      {checkResponse(movie)}
    </div>
  );
}

export default App;
