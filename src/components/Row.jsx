import React from "react";
import { useCallback } from "react";
import { useState, useEffect } from "react";
import axios from "../api/axios";
import "./Row.css";

export default function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);
  const fetchData = useCallback(async () => {
    const { data } = await axios.get(fetchUrl);
    setMovies(data.results);
  }, [fetchUrl]);

  const baseUrl = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row-posters">
        {movies.map((movie, index) => {
          return (
            ((isLargeRow && movie.backdrop_path) ||
              (!isLargeRow && movie.poster_path)) && (
              <img
                key={index}
                className={`row-poster ${isLargeRow && "row-posterLarge"} `}
                src={`${baseUrl}${
                  isLargeRow ? movie?.backdrop_path : movie?.poster_path
                }`}
                alt="backdrop_image"
              />
            )
          );
        })}
      </div>
    </div>
  );
}
