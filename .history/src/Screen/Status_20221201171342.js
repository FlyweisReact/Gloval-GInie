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

      <div className="StatusRefundB">
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
    </>
  );
};

export default Status;
