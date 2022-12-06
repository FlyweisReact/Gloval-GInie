/** @format */

import React from "react";
import img from "../Assets/04.png";

const Status = () => {
  return (
    <>
      <div className="StatusRefund">
        <h2>Return/Refund Status</h2>
      </div>

      <hr
        style={{ width: "80%", marginLeft: "10%", border: "2px solid #414141" }}
      />

      <div className="StatusRefundTwoSec">
        <img src={img} alt="" />
        <p></p>
      </div>
    </>
  );
};

export default Status;
