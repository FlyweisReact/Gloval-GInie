/** @format */

import React from "react";
import img from "../Assets/Banner  012.png";

const Facial = () => {
  return (
    <>
      <div className="facial">
        <img src={img} alt="" />
      </div>

      <p className="facialH1">
        <strong>Rejuvenate & Reinvent</strong>
        Your Facial Skin With <strong>The Ordinary.</strong>
      </p>

      <div className="facialAdd">
        <p>
          March 23, 2022 <br />
          By: TGG Editorial Team
        </p>
        <hr
          style={{
            border: "1px solid black",
            color: "black",
            backgroundColor: "black",
          }}
        />
      </div>


      <div className="facialDesc">
        <h4>Tell us: What does being a TGG trainer mean to you?</h4>
        <p> <strong></strong>  </p>
      </div>
    </>
  );
};

export default Facial;
