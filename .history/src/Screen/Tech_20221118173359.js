/** @format */

import React from "react";
import TechCarousel from "../Component/TechCarousel";

// Images
import img from '../Assets/Mask Group 2.png'
import img1 from '../Assets/'

const Tech = () => {
  return (
    <>
      <TechCarousel />
      <div className="NewP">
        <h1>GADGETS & ELECTRONICS</h1>
        <p>
          Allow notifications for tailored new arrivals ,
          <br />
          exciting launches and promotions
        </p>
      </div>

      <div className="two-sec">
        <div className="left">
          <img src={img} alt="" />
        </div>
        <div className="right">
          <h1>ELECTRONIC ESSENTIALS  </h1>
          <p>
            Allow notifications for tailored new arrivals,
            <br />
            exciting launches and promotions.
          </p>
          <button>Explore More</button>
        </div>
      </div>

      <h1 style={{ textAlign: "center", marginTop: "3%" }}>SHOP BY</h1>
      <div className="child">
        <div className="month" style={{ minWidth: "10%" }}>
        MEN
        </div>
        <div className="month" style={{ minWidth: "10%" }}>
        WOMEN
        </div>
        <div className="month" style={{ minWidth: "10%" }}>
        KIDS
        </div>
      </div>


    </>
  );
};

export default Tech;
