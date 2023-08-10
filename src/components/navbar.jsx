import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <Link to="/" className="navbar-brand">
        Ali Ahmed's Collection
      </Link>
    </nav>
  );
};

export default Navbar;
