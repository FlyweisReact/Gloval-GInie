/** @format */

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Logo from "./Assets/theglobalgenie Logo in black.png";
import NavBar from "./Component/NavBar";
import Baby from "./Screen/Baby";
import Gym from "./Screen/Gym";
import HomeScreen from "./Screen/HomeScreen";
import PageNotFound from "./Screen/PageNotFound";
import Perfume from "./Screen/Perfume";

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
          <Route path="/gym" element={<Gym />} />
          <Route path="/Per" element={<Perfume />} />

          {/*  */}
          <Route path="*" element={<PageNotFound />} />

        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
