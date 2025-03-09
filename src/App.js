import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Nutrition from "./pages/Nutrition";
import Research from "./pages/Research";
import Survivors from "./pages/Survivors";
import Quotes from "./pages/Quotes";
import Chat from "./components/Chat";
import Login from "./components/Login"; // Import the Login component
import { SocketProvider } from "./SocketContext";

function App() {
  return (
    <SocketProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nutrition" element={<Nutrition />} />
          <Route path="/research" element={<Research />} />
          <Route path="/survivors" element={<Survivors />} />
          <Route path="/quotes" element={<Quotes />} />
          <Route path="/chat/:cancerType" element={<Chat />} />
          <Route path="/login" element={<Login />} /> {/* Add the login route */}
        </Routes>
      </Router>
    </SocketProvider>
  );
}

export default App;
