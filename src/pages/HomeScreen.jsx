import React from "react";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import "./HomeScreen.css";

export default function HomeScreen() {
  return (
    <div className="homeScreen">
      {/* Navbar */}
      <Navbar />
      <Banner/>
      {/* row */}
    </div>
  );
}
