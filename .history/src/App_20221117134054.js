/** @format */

import React from "react";
import { Navbar } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Logo from "./Assets/theglobalgenie Logo in black.png";

const App = () => {
  return (
    <>
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
      <Navbar
      <BrowserRouter>
        <Routes></Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
