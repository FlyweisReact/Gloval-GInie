/** @format */

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Logo from "./Assets/theglobalgenie Logo in black.png";

const App = () => {
  return (
    <>
      <div className="logo">
      div.logo
        <img src={Logo} alt="logo" />
      </div>
      <BrowserRouter>
        <Routes></Routes>
      </BrowserRouter>
    </>
  );
};

export default App;