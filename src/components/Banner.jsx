import React from "react";
import { useState, useEffect } from "react";
import "./Banner.css";
import axios from "../api/axios";
import api from "../api/request";

export default function Banner() {
  const [movie, setMovie] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(api.fetchNetflix);
      setMovie(request.data.results[2]);
      return request;
    }
    fetchData();
  }, []);

  console.log(Math.floor(Math.random()))

  console.log(movie);
  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
      }}
    >
      <div className="banner-overlay"></div>
      <div className="banner-content">
        <h1 className="banner-title">{movie.name}</h1>
        <div className="banner-buttons">
          <button className="banner-button">Play</button>
          <button className="banner-button">My List</button>
        </div>
        <div className="banner-description">{movie.overview}</div>
      </div>
      <div className="banner-fadeBottom"></div>
    </header>
  );
}
