import React from "react";
import "./Navbar.css";
import Logo from "../assets/netflix-logo.png";
import Avatar from "../assets/avatar.png";

export default function Navbar() {
  return (
    <div className="navbar">
      <img src={Logo} alt="logo" />
      <img src={Avatar} alt="avatar" />
      <h1>This is the nav</h1>
    </div>
  );
}
