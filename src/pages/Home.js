import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Welcome to the AI-Powered Cancer Support Platform</h1>
      <p>Get personalized nutrition advice, connect with survivors, and get motivated with daily quotes!</p>
      <div>
        <Link to="/nutrition">
          <button style={{ margin: "10px", padding: "10px 20px" }}>Nutrition Guide</button>
        </Link>
        <Link to="/survivors">
          <button style={{ margin: "10px", padding: "10px 20px" }}>Survivor Support</button>
        </Link>
        <Link to="/quotes">
          <button style={{ margin: "10px", padding: "10px 20px" }}>Motivational Quotes</button>
        </Link>
        <Link to="/Research">
          <button style={{ margin: "10px", padding: "10px 20px" }}>Research</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
