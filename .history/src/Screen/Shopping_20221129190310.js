/** @format */

import React from "react";
import img1 from "../Assets/asset1.png";
import img2 from "../Assets/Group 166.png";
import img3 from "../Assets/Oil.png";

const Shopping = () => {
  return (
    <>
      <div className="MyOrderHead">
        <img src={img1} alt="" />
      </div>

      <div className="shopping">
        <div>
          <h1>
            THANK YOU <br />
            FOR YOUR ORDER
          </h1>
          <h2>Confirmation will be sent to your registered email ID.</h2>
        </div>

        <img src={img2} alt="" />
      </div>

      <h2 className="shoppingH2">YOUR ORDER HAS BEEN SUCCESSFULLY PLACED,</h2>

      <div className="shoppingAddress">
        <h2>SHIPPING TO RESIDENCE:</h2>
        <p>
          703 lotus business park, <br />
          Mumbai, Maharashtra 400064 India.
        </p>
      </div>

      <div className="shoppingTwoSec">
        <img src={img3} alt="" />
        <p>
          Solgar B-Complex "100", 100 Vegetable Capsules - Heart Health Nervous
          System 
          Support - Supports Energy Metabolism - Non GMO, Vegan, Gluten Free,
          Dairy Free, <br />
          Kosher, Halal - 100 Servings.
        </p>
      </div>
    </>
  );
};

export default Shopping;
