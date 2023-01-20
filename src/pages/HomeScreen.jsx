import React from "react";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import Row from "../components/Row";
import request from "../api/request";
import "./HomeScreen.css";

export default function HomeScreen() {
  return (
    <div className="homeScreen">
      {/* Navbar */}
      <Navbar />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={request.fetchNetflix}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={request.fetchTrending} />
      <Row title="Top Rated" fetchUrl={request.fetchTopRated} />
      <Row title="Action Movie" fetchUrl={request.fetchActionMovie} />
      <Row title="Comedy Movie" fetchUrl={request.fetchComedyMovie} />
      <Row title="Horror Movie" fetchUrl={request.fetchHorrorMovie} />
      <Row title="Documentaries" fetchUrl={request.fetchDocumentaries} />
    </div>
  );
}
