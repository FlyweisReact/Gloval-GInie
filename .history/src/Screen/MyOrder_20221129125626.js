/** @format */

import React from "react";
import img1 from "../Assets/asset1.png";
import img2 from '../Assets'

const MyOrder = () => {
  return (
    <>
      <div className="MyOrderHead">
        <img src={img1} alt="" />
        <h1>MY ORDERS</h1>
      </div>

      <div className="MyOrderFour">
        <h3>All Orders</h3>
        <h3>InTransit</h3>
        <h3>Canceled</h3>
        <h3 className="special">Buy it Again</h3>
      </div>

      <div className="MyOrderPlaced">
        <h2>
          {" "}
          <span style={{fontWeight : '700'}}>18 orders </span> placed in{" "}
        </h2>
        <select>
          <option>Last 30 days</option>
        </select>
      </div>

      <hr  className="MyOrderHr"/>

      <div className="MyOrderTwoSec">
        <div className="left">
        <input type={'checkbox'} />
        </div>
        <div className="right">

        </div>
      </div>
    </>
  );
};

export default MyOrder;
