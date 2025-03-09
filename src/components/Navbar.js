import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ padding: "10px", background: "#eee" }}>
      <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
      <Link to="/nutrition" style={{ marginRight: "10px" }}>Nutrition</Link>
      <Link to="/research" style={{ marginRight: "10px" }}>Research</Link>
      <Link to="/survivors" style={{ marginRight: "10px" }}>Survivors</Link>
      <Link to="/quotes" style={{ marginRight: "10px" }}>Quotes</Link>
      <Link to="/login" style={{ marginRight: "10px" }}>Login</Link> {/* Add login link */}
    </nav>
  );
};

export default Navbar;
