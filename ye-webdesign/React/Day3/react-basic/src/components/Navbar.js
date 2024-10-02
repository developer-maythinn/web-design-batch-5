import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <Link to="/hook">Hook</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/projects">Projects</Link>
    </>
  );
}

export default Navbar;
