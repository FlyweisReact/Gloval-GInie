import React from "react";
import img1 from "../Assets/asset1.png";

import Give from "../Assets/Get Me This.png";

import Whatsapp from "../Assets/Whatsapp icon.png";
import phone from "../Assets/Phone call.png";
import Mail from "../Assets/Mail Icon.png";
import Footer from "../Component/Footer";

import {Form} from 'react-bootstrap'

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
 
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

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

          <hr  style={{border : '1px solid black'}}/>
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
              <h5 style={{textAlign : 'right'}}>₹2,765.00</h5>
              <span style={{ fontSize: "0.8rem" }}>
                [ ALL TAXES & IMPORT DUTY INCLUDED ]
              </span>
            </div>
          </div>

          <hr  style={{border : '1px solid black'}}/>
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
  )
}

export default Address