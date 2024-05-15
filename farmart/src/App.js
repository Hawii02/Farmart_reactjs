import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Sidebar from "./components/Sidebar";
import Farmers from "./components/Farmers";
// import FarmersSidebar from "./components/FarmersSidebar";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  /* 
    {role == farmer ?
      <div className="sidebar-container">
          <Farmersidebar />
      </div>
      :
      <div className="sidebar-container">
          <Sidebar />
      </div>
    }
  */
  
  return (
    <Router>
      <div className="App">
        <div className="navbar-container">
          <Navbar />
        <div className="sidebar-container">
          <Sidebar />
          </div>
        </div>
        <div className="routes">
          
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/farmers" element={<Farmers />} />
          <Route
            path="/login"
            element={<Login setIsLoggedIn={setIsLoggedIn} />}
          />
        </Routes>
        </div>
       
        <div className="footer-container">
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;