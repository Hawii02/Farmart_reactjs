import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Import your CSS file for navbar styling

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Logo</Link>
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">About</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link">Contact</Link>
        </li>
        <li className="nav-item">
          <Link to="/dashboard" className="nav-link">Dashboard</Link>
        </li>
        <li className="nav-item">
          <Link to="/login" className="nav-link">Login</Link>
        </li>
        <li className="nav-item">
          <Link to="/signup" className="nav-link">Sign Up</Link>
        </li>
        <li className="nav-item">
          <Link to="/cart" className="nav-link">Cart</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
