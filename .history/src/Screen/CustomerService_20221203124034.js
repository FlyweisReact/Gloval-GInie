/** @format */

import React from "react";
import img from "../Assets/asset1.jpg";
import img67 from "../Assets/518q7cM2t4L._SL1500_.png";

const CustomerService = () => {
  return (
    <>
      <div className="customerSer">
        <p>Welcome to</p>
        <h6>CUSTOMER SERVICES</h6>
      </div>

      <div className="customerSerHead">
        <p>Manage your Orders</p>
        <img src={img} alt="" />
      </div>

      <hr style={{ width: "80%", marginLeft: "10%" }} />

      <div className="shoppingTwoSec">
        <img src={img67} alt="" />
        <div>
          <p style={{ marginLeft: "5%" }}>
            Cosrx Advanced Snail 96 Mucin Power Essence (100ml)
          </p>
          <p style={{ marginLeft: "5%" }}>
          ₹2,965.00
          </p>
          <span style={{marginLeft : '5%' , fontSize : '1rem'}}>[ ALL TAXES & IMPORT DUTY INCLUDED ]</span>
        </div>
      </div>
    </>
  );
};

export default CustomerService;
