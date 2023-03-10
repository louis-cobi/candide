import React, { useState, useRef, useEffect } from "react";
import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import View from "./pages/View";

// Drei is a really helpful library
// It has helpers for react-three-fiber


import "./style.css";

// Our main React component renders a Canvas from
// react-three-fiber. The Canvas component does most
// of the hard work of setting up the scene, renderer
// and other core components of Three.js
export default function App() {
  return (
    <Routes>
      <Route path="/view" element={<View />} />
      <Route path="/" element={<Home />} />
    </Routes>
  )
}



