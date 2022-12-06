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
          <hr style={{width : '80%'}}/>
          <h6 style={{fontWeight : 'bolder'}}>Tanmay Pandya</h6>
          <p style={{fontSize : '1rem' , fontFamily : 'Nexa'}}>
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
        <div className="mid">
      
          <h6 style={{fontWeight : 'bolder' , marginTop : '15%'}}>AL</h6>
          <p style={{fontSize : '1rem' , fontFamily : 'Nexa'}}>
            707lotus buisness park , rema bagh lane <br />
            off S V Road Malad West ,
            <br />
            MUMBAi , MAHARASHTRA 400064 India.
            <br />
            Phone Number: +914512368796
          </p>
          <div className="DownBTns" style={{ border: "none" , marginTop : '15%'}}>
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
            <div
              style={{
                width: "1px",
                height: "30px",
                border: "none",
                backgroundColor: "black",
              }}
            ></div>
            <p>Set as Default</p>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default YourAddress;
