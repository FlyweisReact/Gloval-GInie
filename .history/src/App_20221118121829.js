/** @format */

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Logo from "./Assets/theglobalgenie Logo in black.png";
import NavBar from "./Component/NavBar";
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
          <Route 
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
