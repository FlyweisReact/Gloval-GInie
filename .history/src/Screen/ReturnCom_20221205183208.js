/** @format */

import React, { useState } from "react";
import img1 from "../Assets/asset1.png";
import img2 from "../Assets/04.png";
import Give from "../Assets/Get Me This.png";
import Whatsapp from "../Assets/Whatsapp icon.png";
import phone from "../Assets/Phone call.png";
import Mail from "../Assets/Mail Icon.png";
import Footer from "../Component/Footer";
import { useNavigate } from "react-router-dom";

const ReturnCom = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="MyOrderHead">
        <img src={img1} alt="" />
        <h1>MY ORDERS</h1>
      </div>

      <div className="MyOrderFour">
        <h3 className="special">All Orders</h3>
        <h3 onClick={() => navigate("/inTransit")}>InTransit</h3>
        <h3 onClick={() => navigate("/orderCancel")}>Cancelled</h3>
        <h3 onClick={() => navigate("/orderSum")}>Buy it Again</h3>
      </div>

      <hr className="MyOrderHr" />

      <div className="ReturnCom">
        <div className="left">
          <div className="up">
            <h4>Why are you returning this?</h4>
            <p>Product and Shipping box both damaged</p>
          </div>
          <hr />
          <h4>How will you mail your return?</h4>
          <div className="down">
            <img src={img2} alt="" />
            <div style={{marginTop : '5%'}}>
              <div>
                <h5 style={{font}}>Refund to your Visa ending in XXXX </h5>
                <p>Change</p>
              </div>

              <div>
                <h5>400064, Maharashtra Lane, Malad (W)</h5>
                <p>Change address </p>
              </div>
              <div>
              Refund will be initiated once we receive the product.
              </div>
            </div>
          </div>
        </div>
        <div className="right"></div>
      </div>

      <div className="Give" style={{ marginTop: "10%" }}>
        <img src={Give} alt="" />
      </div>

      <h1 style={{ textAlign: "center", fontFamily: "Monument" }}>
        TALK TO HUMAN
      </h1>
      <div className="human">
        <div>
          <img src={phone} alt="" />
          <h3 style={{ fontWeight: "400", paddingTop: "10%" }}>PHONE</h3>
        </div>
        <div className="Hori"></div>
        <div>
          <img src={Mail} alt="" />
          <h3 style={{ fontWeight: "400", paddingTop: "10%" }}>EMAIL US</h3>
        </div>
        <div className="Hori"></div>

        <div>
          <img src={Whatsapp} alt="" />
          <h3 style={{ fontWeight: "400", paddingTop: "10%" }}>WHATSAPP US</h3>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default ReturnCom;
