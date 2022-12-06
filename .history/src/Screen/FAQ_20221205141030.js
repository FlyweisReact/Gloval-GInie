/** @format */

import React from "react";
import img from "../Assets/Search ICon.png";
import img1 from "../Assets/asset1.jpg";

const FAQ = () => {
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
        <div style={{ borderRight: "1px solid black", width: "5px" }}></div>

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
        </div>
      </div>
    </>
  );
};

export default FAQ;
