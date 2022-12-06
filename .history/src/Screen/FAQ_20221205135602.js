/** @format */

import React from "react";
import img from "../Assets/Search ICon.png";

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

      <div className="FAQtwosec" >
        <div className="left">
            <ul>
                <li>Product FAQs</li>
                <li>Ordering FAQs</li>
                <li>Product FAQs</li>
                <li>Product FAQs</li>
                <li>Product FAQs</li>
                <li>Product FAQs</li>
            </ul>
        </div>
      </div>
    </>
  );
};

export default FAQ;
