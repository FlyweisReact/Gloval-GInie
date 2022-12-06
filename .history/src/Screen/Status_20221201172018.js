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
        <p>
          {" "}
          Solgar B-Complex "100", 100 Vegetable Capsules - Heart Health Nervous
          System <br />
          Support - Supports Energy Metabolism - Non GMO, Vegan, Gluten Free,
          Dairy Free, <br />
          Kosher, Halal - 100 Servings.
        </p>
      </div>

      <div className="StatusRefundBox">
        <div className="left">
          <div className="first"> 
            <img
              src="https://cdn.pixabay.com/photo/2016/01/20/18/59/confirmation-1152155_960_720.png"
              alt=""
              style={{ width: "40px" , height : '40px' }}
            />
            <div>
              <h2 style={{ color: "#43a047" , fontFamily  : 'Monument' , fontWeight : 'bolder' }}>Replacement Requested</h2>
              <p style={{fontFamily : 'Ne'}} >Replacement Order : 1287459321</p>
            </div>
          </div>
        </div>
        <div className="right"></div>
      </div>
    </>
  );
};

export default Status;
