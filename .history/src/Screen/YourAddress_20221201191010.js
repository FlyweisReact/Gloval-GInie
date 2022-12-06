/** @format */

import React from "react";
import img1 from "../Assets/+.png";

const YourAddress = () => {
  return (
    <>
      <h2 className="your-add">YOUR ADDRESSES</h2>

      <div className="your-add-threeSec">
        <div
          style={{
            border: "1px dashed  black",
            textAlign: "center",
            fontSize: "2rem",
            fontWeight: "bolder",
            fontFamily: "Monument",
            color : 'grey'
          }}
        >
          <img src={img1} alt="" width={'10%'} />
          <p>Add Address</p>
        </div>
        <div></div>
        <div></div>
      </div>
    </>
  );
};

export default YourAddress;
