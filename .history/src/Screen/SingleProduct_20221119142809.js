/** @format */

import React from "react";
import Oil from "../Assets/Solgar, Omega-3 EPA & DHA, Triple Strength, 950 mg, 100 Softgels.jpg";
import Heart from "../Assets/Heart.jpg";

const SingleProduct = () => {
  return (
    <>
      <div className="SingleP">
        <div>
          <div className="BP"></div>
          <div className="BP"></div>
          <div className="BP"></div>
          <div className="BP"></div>
          <div className="BP"></div>
        </div>
        <div className="mid">
          <img src={Oil} alt="" />
        </div>
        <div className="right">
          <div className="left">
            <i class="fa-solid fa-star" style={{ color: "#F07F29" }}></i>
            <i class="fa-solid fa-star" style={{ color: "#F07F29" }}></i>
            <i class="fa-solid fa-star" style={{ color: "#F07F29" }}></i>
            <i class="fa-solid fa-star" style={{ color: "#F07F29" }}>
              {" "}
            </i>
            <i class="fa-solid fa-star"></i>
            <img src={Heart} alt="" />
          </div>
          <div className="mid">
          <h

          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
