import "./App.css";
import React from "react"; 
import { Routes, Route, Link } from "react-router-dom"; 
import Mockman from "mockman-js";
import { Landing } from "./pages/Landing/Landing.js";
import { Login } from "./pages/Login/Login.js";
import { Signup } from "./pages/Signup/Signup";

function App() {
  return (
    <div className="App">
    <Routes> 
      <Route path="/" element={<Landing />} /> 
      <Route path="/login" element={<Login/> } /> 
      <Route path="/signup" element={<Signup />} /> 
      <Route path="/mockman" element={<Mockman />} /> 
      </Routes>  
    </div>
  );
}

export default App;
