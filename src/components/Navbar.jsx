import React, { useCallback, useEffect, useState } from "react";
import "./Navbar.css";
import Logo from "../assets/netflix.svg";
import Avatar from "../assets/avatar.png";

export default function Navbar() {
  const [show, handleShow] = useState(false);
  const transitionNavbar = useCallback(() => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => window.removeEventListener("scroll", transitionNavbar);
  }, [show, transitionNavbar]);

  return (
    <div className={`navbar ${show ? "nav-black" : ""}`}>
      <div className="nav-container">
        <img className="logo" src={Logo} alt="logo" />
        <img className="avatar" src={Avatar} alt="avatar" />
      </div>
    </div>
  );
}
