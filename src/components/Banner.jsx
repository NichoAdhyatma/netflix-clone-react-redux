import React, { useCallback } from "react";
import { useState, useEffect } from "react";
import "./Banner.css";
import axios from "../api/axios";
import api from "../api/request";

export default function Banner() {
  const [movie, setMovie] = useState([]);

  const fetchData = useCallback(async () => {
    const request = await axios.get(api.fetchTrending);
    setMovie(request.data.results[Math.floor(Math.random() * (19 - 0) + 0)]);
    return request;
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  };

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
      }}
    >
      <div className="banner-overlay"></div>
      <div className="banner-content">
        <h1 className="banner-title">{movie.title}</h1>
        <div className="banner-buttons">
          <button className="banner-button">Play</button>
          <button className="banner-button" onClick={fetchData}>
            Generate New Movie
          </button>
        </div>
        <div className="banner-description">
          {truncate(movie.overview, 200)}
        </div>
      </div>
      <div className="banner-fadeBottom"></div>
    </header>
  );
}
