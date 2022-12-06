/** @format */

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Logo from "./Assets/theglobalgenie Logo in black.png";
import NavBar from "./Component/NavBar";
import Address from "./Screen/Address";
import AllOrders from "./Screen/AllOrders";
import AllProducts from "./Screen/AllProducts";
import Baby from "./Screen/Baby";
import CancelOrder from "./Screen/CancelOrder";
import Gym from "./Screen/Gym";
import Home from "./Screen/Home";
import HomeScreen from "./Screen/HomeScreen";
import Life from "./Screen/Life";
import Mens from "./Screen/Mens";
import MyOrder from "./Screen/MyOrder";
import OrderSum from "./Screen/OrderSum";
import OrderSummary from "./Screen/OrderSummary";
import PageNotFound from "./Screen/PageNotFound";
import Perfume from "./Screen/Perfume";
import Shopping from "./Screen/Shopping";
import SingleProduct from "./Screen/SingleProduct";
import Tech from "./Screen/Tech";
import Transit from "./Screen/Transit";

const App = () => {
  return (
    <>
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
     
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/second" element={<Baby />} />
          <Route path="/gym" element={<Gym />} />
          <Route path="/Per" element={<Perfume />} />
          <Route path="/tech" element={<Tech />} />
          <Route path="/home" element={<Home />} />
          <Route path="/mens" element={<Mens />} />
          <Route path="/life" element={<Life />} />
          <Route path="/single" element={<SingleProduct />} />
          <Route path="/allPro" element={<AllProducts /> } />


        <Route path="/myOrder" element={<MyOrder />} />
        <Route path="/orderSum" element={<OrderSum />} />
        <Route path="/orderCancel" element={<CancelOrder />} />
        <Route path="/inTransit" element={<Transit />} />
        <Route path="/allOrders" element={<AllOrders />} />
        <Route path="/shopping" element={<Shopping />} />


          <Route path='/OrderS' element={<OrderSummary />} />
          <Route path="/address" element={<Address />} />
          <Route path="/shoopi"

          {/* 404 Page  */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
