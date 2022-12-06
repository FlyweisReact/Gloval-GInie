/** @format */

import React from "react";
import img1 from "../Assets/asset1.png";

import Give from "../Assets/Get Me This.png";

import Whatsapp from "../Assets/Whatsapp icon.png";
import phone from "../Assets/Phone call.png";
import Mail from "../Assets/Mail Icon.png";
import Footer from "../Component/Footer";

const Address = () => {
  return (
    <>
      <div className="MyOrderHead">
        <img src={img1} alt="" />
        <h1> ADDRESSES</h1>
      </div>

      <div className="OrderSummary">
        <div className="left">
          <div className="LeftForm">
            <div>
              <label>Country/Region</label>
              <br />
              <select
                style={{
                  backgroundColor: "#D9DADA",
                  border: "1px solid #707070",
                }}
              >
                <option></option>
              </select>
            </div>

            <div>
              <label>Full Name</label>
              <br />
              <input type={"text"} />
            </div>

            <div>
              <label>Mobile Number</label>
              <br />
              <input type={"number"} />
            </div>

            <div>
              <label>User Name</label>
              <br />
              <input type={"text"} />
            </div>

            <div>
              <label>Password</label>
              <br />
              <input type={"password"} />
            </div>

            <div>
              <label>Pincode</label>
              <br />
              <input type={"number"} placeholder="6 digits (0-9) PIN code" />
            </div>

            <div>
              <label>Flat House no, Building, Company, Apartment</label>
              <br />
              <input type={"text"} />
            </div>

            <div>
              <label>Area, Street, Sector, village</label>
              <br />
              <input type={"text"} />
            </div>

            <div>
              <label>Landmark</label>
              <br />
              <input type={"password"} />
            </div>

            <div className="mix">
              <div>
                <label>Town/city</label>
                <input type="text"></input>
              </div>
              <div>
                <label>State</label>
                <select    style={{
                  backgroundColor: "#D9DADA",
                  border: "1px solid #707070",
                  color : '#7E7E7E'
                }}>
                  <option>Choose a state</option>
                </select>
              </div>
            </div>

            <div className="check">
            <div>
                
            </div>
                <input type={'checkbox'} />
                <h5>Make this my default address and save it for further purchases.</h5>
            </div>

            <div>
              <label>Address Type</label>
              <br />
              <select>
                <option>Select an Address Type</option>
              </select>
            </div>
          </div>
        </div>

        <div className="right">
          <div className="upper">
            <h5>Subtotal (1)</h5>
            <h5 className="down">₹ 3,115.00</h5>
          </div>

          <div className="upper">
            <div>
              <h5>Shipping</h5>
              <p>USA to INDIA</p>
            </div>
            <div className="down">
              <h5>Free</h5>
              <p>-150</p>
            </div>
          </div>

          <div className="upper">
            <div>
              <h5>Discount</h5>
              <p>FIRSTWISH- 10%</p>
            </div>
            <div>
              <h5>-180</h5>
            </div>
          </div>

          <div className="upper">
            <div>
              <h5>TOTAL</h5>
            </div>
            <div>
              <h5 style={{ textAlign: "right" }}>₹2,765.00</h5>
              <span style={{ fontSize: "0.8rem" }}>
                [ ALL TAXES & IMPORT DUTY INCLUDED ]
              </span>
            </div>
          </div>

          <hr style={{ border: "1px solid black" }} />
          <button>PROCEED TO CHECKOUT</button>
        </div>
      </div>

      <div className="OrderSummaryDropDown">
        <div className="upper">
          <h5>Subtotal (1)</h5>
          <h5 className="down">₹ 3,115.00</h5>
        </div>

        <div className="upper">
          <div>
            <h5>Shipping</h5>
            <p>USA to INDIA</p>
          </div>
          <div className="down">
            <h5>Free</h5>
            <p>-150</p>
          </div>
        </div>

        <div className="upper">
          <div>
            <h5>Discount</h5>
            <p>FIRSTWISH- 10%</p>
          </div>
          <div>
            <h5>-180</h5>
          </div>
        </div>

        <div className="upper">
          <div>
            <h5>TOTAL</h5>
          </div>
          <div>
            <h5 style={{ textAlign: "right" }}>₹2,765.00</h5>
            <span style={{ fontSize: "0.8rem" }}>
              [ ALL TAXES & IMPORT DUTY INCLUDED ]
            </span>
          </div>
        </div>

        <hr style={{ border: "1px solid black" }} />
        <button>PROCEED TO CHECKOUT</button>
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

export default Address;
