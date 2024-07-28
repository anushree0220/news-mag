import React, { useState } from "react";
import Navbar from "./components/Navbar";
import NewsBoard from "./components/NewsBoard";
import { Routes, Route } from "react-router-dom";
import HomePage from "./page/HomePage";
import NewsByCategory from "./page/NewsByCategory";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/news/:category" element={<NewsByCategory />} />
      </Routes>
    </>
  );
}

export default App;
