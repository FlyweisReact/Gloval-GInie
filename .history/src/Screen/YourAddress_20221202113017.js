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
            color: "grey",
          }}
        >
          <img src={img1} alt="" width={"20%"} style={{ marginTop: "10%" }} />
          <p>Add Address</p>
        </div>
        <div className="mid">
          <span>Default</span>
          <hr />
          <h6 style={{fontWeight : 'bolder'}}>Tanmay Pandya</h6>
          <p style={{fontSize : '1.2rem'}}>
            707lotus buisness park , rema bagh lane <br />
            off S V Road Malad West ,
            <br />
            MUMBAi , MAHARASHTRA 400064 India.
            <br />
            Phone Number: +914512368796
          </p>
          <div className="DownBTns" style={{ border: "none" }}>
            <p>Edit</p>
            <div
              style={{
                width: "1px",
                height: "30px",
                border: "none",
                backgroundColor: "black",
              }}
            ></div>
            <p>Remove</p>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default YourAddress;
