import React from 'react'
import Header from './Com/Header';
import Home from './Page/Home';
import './Style/index.css';
import { Routes, Route, Link } from "react-router-dom";
import NotFound from './Page/NotFound';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
