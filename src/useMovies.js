import { useState, useEffect } from "react";

export function useMovies(query, apikey) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(
    function () {
      async function fetchMovies(query, apikey) {
        try {
          setError("");
          setIsLoading(true);
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${apikey}&s=${query}`
          );
          if (!res.ok) throw new Error("Something went wrong fetching movies");
          const data = await res.json();
          if (data.Response === "False") throw new Error("Movie not found");
          setMovies(data.Search);
        } catch (err) {
          console.error(err.message);
          setError(err.message);
        } finally {
          setIsLoading(false);
        }
      }
      if (query.length < 3) {
        setMovies([]);
        setError("");
        return;
      }
      //handleCloseMovie();
      fetchMovies();
    },
    [query]
  );

  return { movies, isLoading, error };
}
