/** @format */

import React from "react";
import img1 from "../Assets/asset1.png";

import Oil from "../Assets/Oil.png";
import Hair from "../Assets/New 10.png";
import some from "../Assets/Chicco Baby Moments Soft Cleansing Baby Wipes, Ideal for Nappy, Face and Hand, Dermatologically Tested, Paraben Free, Fliptop Pack.png";
import clock from "../Assets/clock.png";
import Apple from "../Assets/Apple Watch Series 7 (GPS, 45mm) Midnight.png";
import adi from "../Assets/adidas Stadium 750 ML (26oz) Plastic Water Bottle.png";
import gel from "../Assets/618-39BSrgL._SL1500_.png";
import Give from "../Assets/Get Me This.png";

import Whatsapp from "../Assets/Whatsapp icon.png";
import phone from "../Assets/Phone call.png";
import Mail from "../Assets/Mail Icon.png";
import Footer from "../Component/Footer";

const TrackOrder = () => {
  return (
    <>

<div className="MyOrderHead">
        <img src={img1} alt="" />
      <div>
        <p>Order Id/Tracking Number</p>
        
      </div>
      </div>

      <div className="StatusRefund">
        <h2>Arriving May 11 - May 12</h2>
      </div>

      <hr
        style={{ width: "80%", marginLeft: "10%", border: "2px solid #414141" }}
      />

      <div className="StatusRefundBox">
        <div className="left">
          <div className="second" style={{ marginTop: 0 }}>
            <div className="Fir" style={{ marginTop: 0 }}>
              <div
                style={{
                  width: "30px",
                  marginTop: "5px",
                  height: "30px",
                  backgroundColor: "#24a73f",
                  borderRadius: "100%",
                }}
              ></div>
              <div className="Second">
                <h2>Order Placed</h2>{" "}
                <span style={{ fontSize: "1.4rem", marginTop: "1%" }}>
                  Fri, 26th Apr-11:59am
                </span>
              </div>
            </div>
            <div className="New">
              <div
                style={{
                  width: "5px",
                  height: "200px",
                  backgroundColor: "#24a73f",
                }}
              ></div>
              <p style={{ color: "grey" }}> 1245789654</p>
            </div>
          </div>

          <div className="second" style={{ marginTop: "5px" }}>
            <div className="Fir">
              <div
                style={{
                  width: "30px",
                  marginTop: "5px",
                  height: "30px",
                  backgroundColor: "#24a73f",
                  borderRadius: "100%",
                }}
              ></div>
              <div className="Second">
                <h2>Indian Custom Clearance</h2>{" "}
                <span style={{ fontSize: "1.4rem", marginTop: "1%" }}>
                  Fri, 26th Apr-11:59am
                </span>
              </div>
            </div>
            <div className="New">
              <div
                style={{
                  width: "5px",
                  height: "200px",
                  backgroundColor: "#24a73f",
                }}
              ></div>
              <p style={{ color: "grey" }}> 1245789654</p>
            </div>
          </div>

          <div className="second" style={{ marginTop: "5px" }}>
            <div className="Fir">
              <div
                style={{
                  width: "30px",
                  marginTop: "5px",
                  height: "30px",
                  backgroundColor: "#24a73f",
                  borderRadius: "100%",
                }}
              ></div>
              <div className="Second">
                <h2>Recieved at TGG INDIA HUB</h2>{" "}
                <span style={{ fontSize: "1.4rem", marginTop: "1%" }}>
                  Fri, 26th Apr-11:59am
                </span>
              </div>
            </div>
            <div className="New">
              <div
                style={{
                  width: "5px",
                  height: "200px",
                  backgroundColor: "#000000",
                }}
              ></div>
              <p style={{ color: "grey" }}> 1245789654</p>
            </div>
          </div>
          <div className="second" style={{ marginTop: "5px" }}>
            <div className="Fir">
              <div
                style={{
                  width: "30px",
                  marginTop: "5px",
                  height: "30px",
                  backgroundColor: "#000000",
                  borderRadius: "100%",
                }}
              ></div>
              <div className="Second">
                <h2>LastMile Delivery</h2>{" "}
                <span style={{ fontSize: "1.4rem", marginTop: "1%" }}>
                  Fri, 26th Apr-11:59am
                </span>
              </div>
            </div>
            <div className="New">
              <div
                style={{
                  width: "5px",
                  height: "200px",
                  backgroundColor: "#000000",
                }}
              ></div>
              <p style={{ color: "grey" }}>
                {" "}
                1245789654{" "}
                <span style={{ color: "#6bc8ef", fontSize: "1rem" }}>
                  {" "}
                  ( HyperLink of bluedart services ){" "}
                </span>{" "}
              </p>
            </div>
          </div>

          <div className="second" style={{ marginTop: "5px" }}>
            <div className="Fir">
              <div
                style={{
                  width: "30px",
                  marginTop: "5px",
                  height: "30px",
                  backgroundColor: "#000000",
                  borderRadius: "100%",
                }}
              ></div>
              <div className="Second">
                <h2>Delivered</h2>{" "}
              </div>
            </div>
            <div className="New">
              <p style={{ color: "grey", marginLeft: "5%" }}> 1245789654</p>
            </div>
          </div>
        </div>

        <div className="right">
          <div className="boxs">
            <h2>Address Info :</h2>
            <div>
              <h3>Tanmay</h3>
              <p>
                400069 ,jamaica , S.V Road , Mumbai <br />
                Mob No:- +91123456790
              </p>
            </div>
          </div>
          <div className="boxs2">
            <h2>Order Info :</h2>
            <div>
              <h3>View Order Details</h3>
            </div>
          </div>
        </div>
      </div>

      <h1
        style={{
          textAlign: "center",
          fontFamily: "Monument",
          marginTop: "15%",
        }}
      >
        RECENTLY VIEWED
      </h1>

      <div className="many">
        <div>
          <img src={Hair} alt="" />
        </div>
        <div>
          <img src={some} alt="" />
        </div>
        <div>
          <img src={Apple} alt="" id="app" />
        </div>
        <div>
          <img src={clock} alt="" id="clock" />
        </div>
        <div>
          <img src={Oil} alt="" />
        </div>
        <div>
          <img src={adi} alt="" />
        </div>
        <div>
          <img src={gel} alt="" />
        </div>
      </div>

      <div className="Give">
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

export default TrackOrder;
