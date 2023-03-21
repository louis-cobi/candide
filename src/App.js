import React from "react";
import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import View from "./pages/View";
import View2 from "./pages/View2";
import mydata from './data.json';
import mydata2 from './data2.json';
import './App.css'


export default function App() {
  return (
    <Routes>
      <Route path="/view" element={<View mydata={mydata}/>}/>
      <Route path="/view2" element={<View2 mydata={mydata2}/>}/>
      <Route path="/" element={<Home />} />
    </Routes>
  )
}
