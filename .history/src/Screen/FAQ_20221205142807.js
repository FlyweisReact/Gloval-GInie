/** @format */

import React, { useState } from "react";
import img from "../Assets/Search ICon.png";
import img1 from "../Assets/asset1.jpg";
import Give from "../Assets/Get Me This.png";

import Whatsapp from "../Assets/Whatsapp icon.png";
import phone from "../Assets/Phone call.png";
import Mail from "../Assets/Mail Icon.png";
import Footer from "../Component/Footer";

const FAQ = () => {

  const [order , setOrder] = useState(false)
  const [product ,setProduct] = useState(true)
  const [shipping , setS]

  return (
    <>
      <div className="FAQ">
        <h2>ABOUT US & FREQUENTLY ASKED QUESTIONS</h2>
        <p>Search product info, Q&A, reviews</p>
      </div>
      <div className="FAQInput">
        <input type="text" placeholder="Type a Keyword" />
        <img src={img} alt="" />
      </div>

      <div className="FAQtwosec">
        <div className="left">
          <ul>
            <li>
              <strong>Product FAQs</strong>
            </li>
            <li>Ordering FAQs</li>
            <li>Shipping FAQs</li>
            <li>
              Refund & <br /> Cancellation FAQs
            </li>
            <li>Return FAQs</li>
            <li>Other FAQs</li>
          </ul>
        </div>
        <div
          style={{
            borderRight: "1px solid black",
            width: "5px",
            height: "80vh",
          }}
          id='forHide'
        ></div>

        <div className="right">
          <div className="new">
            <div className="up">
              <h4>Where do the products come from?</h4>
              <p style={{ marginTop: "0" }}>
                The procurement of the products is done from the respective
                brands.
              </p>
            </div>
            <div className="down">
              <img src={img1} alt="" style={{ transform: "rotate(90deg" }} />
            </div>
          </div>
          <hr />

          <div className="new">
            <div className="up">
              <h4>Do you sell genuine products?</h4>
              <p style={{ marginTop: "0" }}>
                Yes, we procure the products directly from the brand. You may
                rest assured that <br />
                The Global Genie is the ' One Stop Shop' for all your needs.
              </p>
            </div>
            <div className="down">
              <img src={img1} alt="" style={{ transform: "rotate(90deg" }} />
            </div>
          </div>
          <hr />

          <div className="new">
            <div className="up">
              <h4>
                Will I get some type of discount when I create an account <br />
                and order for the first time from The Global Genie?
              </h4>
              <p style={{ marginTop: "0" }}>
                We have seasonal and festival discounts for all our customers.
                Same will be <br />
                updated on the homepage and product page as well. We recommend
                signing up for our newsletters for easily access to all new
                updates.
              </p>
            </div>
            <div className="down">
              <img src={img1} alt="" style={{ transform: "rotate(90deg" }} />
            </div>
          </div>
          <hr />

          <div className="new">
            <div className="up">
              <h4>Do you provide adapters for electronic products?</h4>
              <p style={{ marginTop: "0" }}>
                Yes, a converter will be provided for electronic products.
              </p>
            </div>
            <div className="down">
              <img src={img1} alt="" style={{ transform: "rotate(90deg" }} />
            </div>
          </div>
          <hr />
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

export default FAQ;
