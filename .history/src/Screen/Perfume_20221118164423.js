/** @format */

import React from "react";
import Hero4 from "../Component/Hero4";

// Images

import img from "../Assets/28.png";
import img2 from '../Assets/29.png'

const Perfume = () => {
  return (
    <>
      <Hero4 />
      <div className="NewP">
        <h2>BEAUTY & COSMETICS</h2>
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
          <h1>HEALTH ESSENTIALS </h1>
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
          GLOBAL SALE
        </div>
        <div className="month" style={{ minWidth: "10%" }}>
          NEW ARRIVALS
        </div>
      </div>

      <div className="Give">
        <img src={img2} alt="" />
      </div>
    </>
  );
};

export default Perfume;
