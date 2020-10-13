import React, { useState, useEffect } from "react";
import "./Nav.css";
import logo from "./Moor_logo.png";
import avi from "./avatar.jpeg";

function Nav() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img className="nav__logo" src={logo} />

      <img className="nav__avatar" src={avi} />
    </div>
  );
}

export default Nav;
