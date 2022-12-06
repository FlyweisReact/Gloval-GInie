/** @format */

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Logo from "./Assets/theglobalgenie Logo in black.png";
import Footer from "./Component/Footer";
import NavBar from "./Component/NavBar";
import Baby from "./Screen/Baby";
import HomeScreen from "./Screen/HomeScreen";

const App = () => {
  return (
    <>
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/second" element={<Baby />} />
          <Route path="*" element={<Page}
        </Routes>
      </BrowserRouter>
    
    </>
  );
};

export default App;
