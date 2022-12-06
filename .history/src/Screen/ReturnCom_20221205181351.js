/** @format */

import React, { useState } from "react";
import img1 from "../Assets/asset1.png";
import img2 from "../Assets/04.png";
import img4 from "../Assets/618-39BSrgL._SL1500_.png";
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

      <div className="MyOrderTwoSec">
        <div className="left">
        <div className=""
          <img src={img2} alt="" className='specialsImg' />
        </div>

        <div className="right">
          <button>CONTINUE</button>

          <hr style={{ width: "80%", marginLeft: "10%" }} />

          <div>
            <img src={img4} alt="" className="MyOrder-img" />
          </div>
        </div>
      </div>

      <div className="MyOrder2">
        <button>CONTINUE</button>

        <hr style={{ width: "80%", marginLeft: "10%" }} />

        <div>
          <img src={img4} alt="" className="MyOrder-img" />
        </div>
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
