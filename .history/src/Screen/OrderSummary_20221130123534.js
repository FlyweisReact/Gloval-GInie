/** @format */

import React from "react";
import img1 from "../Assets/asset1.png";
import img2 from "../Assets/Oil.png";
import X from "../Assets/X.png";
import img4 from "../Assets/Group 209.png";

const OrderSummary = () => {
  return (
    <>
      <div className="MyOrderHead">
        <img src={img1} alt="" />
        <h1> ORDER SUMMARY</h1>
      </div>

      <div className="OrderSummary">
        <div className="left">
            <div className="section">
            <p className="sectionP">
                Returns & Refund Policy{" "}
                <span>
                <img src={img4} alt="" />
                </span>
            </p>
            <hr />
            <img src={X} alt="" className="X" style={{ float: "right" }} />

            <div className="Under">
                <div>
                <img src={img2} alt="" />
                </div>
                <div>
                <h5>SOLGAR</h5>
                <p>
                    Solgar B-Complex "100", 100 Vegetable Capsules <br />
                    Non GMO, Vegan, Gluten Free, Dairy Free, <br />
                    Kosher, Halal - 100 Servings.
                </p>
                </div>
                <div>
                <h5 className="spe">₹ 1,965.00</h5>
                <span style={{ fontSize: "0.8rem" }}>
                    [ ALL TAXES & IMPORT DUTY INCLUDED ]
                </span>
                </div>
            </div>
            </div>
        </div>
        <div className="right"></div>
      </div>
    </>
  );
};

export default OrderSummary;
