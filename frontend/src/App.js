// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/HomePage/HomePage';
import About from './components/About/About';
import DiseasePrediction from './components/DiseasePrediction/DiseasePrediction';
import './App.css';

function App() {
  return (
    <Router> {/* BrowserRouter should wrap the entire app */}
      <Navbar />
      <div className="container">
        <Routes> {/* Wrap routes with Routes component */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/disease-prediction" element={<DiseasePrediction />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
