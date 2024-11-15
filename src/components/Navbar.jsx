import React, { useState } from "react";

import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  return (
    <nav>
      <Link to="/" className="title text-3xl">
        Sparkle Lens
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
      <li>
          <NavLink to="/" onClick={handleMenuClose}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" onClick={handleMenuClose}>About</NavLink>
        </li>
        <li>
          <NavLink to="/services" onClick={handleMenuClose}>Services</NavLink>
        </li>
        <li>
          <NavLink to="/gallery" onClick={handleMenuClose}>Gallery</NavLink>
        </li>
        <li>
          <NavLink to="/contact" onClick={handleMenuClose}>Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};
