/** @format */

import React from "react";
import Oil from "../Assets/Solgar, Omega-3 EPA & DHA, Triple Strength, 950 mg, 100 Softgels.jpg";
import Rating from "../Assets/Ratings.png";
import thumn from "../Assets/01.png";
import img from "../Assets/02.png";
import img1 from "../Assets/03.png";
import img2 from "../Assets/Veg logo.png";

import amazon from "../Assets/Amazon Logo.png";
import plus from "../Assets/+.png";

const SingleProduct = () => {
  return (
    <>
      <div className="SingleP">
        <div className="nnn">
          <div className="BP">
            <img src={Oil} alt="" className="img-thumbnail img-fluid" />
          </div>
          <div className="BP">
            {" "}
            <img src={thumn} alt="" className="img-thumbnail img-fluid" />
          </div>
          <div className="BP">
            <img src={img} alt="" className="img-thumbnail img-fluid" />
          </div>
          <div className="BP">
            <img src={img1} alt="" className="img-thumbnail img-fluid" />
          </div>
        </div>
        <div className="mid">
          <img src={Oil} alt="" />
        </div>
        <div className="right">
          <div className="left"></div>
          <div className="mid">
            <h2>
              Solgar Glucosamine, Hyaluronic Acid, Chondroitin and MSM
              <br />
              Tablets 120 Tablets
            </h2>
            <div className="ratingP">
              <div>
                <h3>₹2,965.00</h3>
                <span style={{ fontSize: "10px" }}>
                  [ ALL TAXES & IMPORT DUTY INCLUDED ]
                </span>
              </div>
              <div
                style={{ borderRight: "1px solid black", height: "50px" }}
              ></div>
              <img src={Rating} alt="" />
            </div>

            <div className="hi">
              <div className="dd"> ADD TO CART </div>
              <div className="dd"> BUY NOW </div>
            </div>

            <div className="Deliver">
              <h6>ESTIMATED DELIVERY FROM USA TO INDIA</h6>
              <div>
                <p>MONDAY</p>
                <p>SEP 20</p>
                <p>2021</p>
              </div>
            </div>
            <div className="vegLogo">
              <div className="first">
                <img src={img2} alt="" />
                <p>This is a vegetarian product.</p>
              </div>
              <div className="second">
                <p>
                  Free Of: Gluten, wheat, dairy, soy, yeast,sugar, artificial
                  flavour, sweetener,
                  <br />
                  preservatives and color.
                </p>
                <p>
                  Wheat & Dairy Free. Non-GMO and Certified Gluten Free Shell
                  fish-Free
                  <br />
                  FSSAI Importer Licence no:10017022006293
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="amazon">
        <h2>YOU CAN ALSO BUY FROM US @</h2>
        <div>
          <img src={amazon} alt="" />
        </div>
      </div>

      <hr
        style={{
          marginTop: "5%",
          marginBottom: "5%",
          width: "90%",
          marginLeft: "5%",
          border: "2px solid #707070",
        }}
      />

      <p className="Tog">FREQUENTLY BOUGHT TOGETHER</p>
      <div className="Syrup">
        <img src={Oil} alt="" className="SyrupImg" />
        <img src={plus} alt="" className="plus" />
        <img src={Oil} alt="" className="SyrupImg" />
        <div>
          <h3>₹2,965.00</h3>
          <span style={{ fontSize: "10px" }}>
            [ ALL TAXES & IMPORT DUTY INCLUDED ]
          </span>
          <div className="hi">
            <div className="dd"> ADD TO CART </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
