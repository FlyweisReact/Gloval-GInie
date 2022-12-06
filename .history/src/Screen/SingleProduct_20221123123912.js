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

import { Card } from "react-bootstrap";

import Camera2 from "../Assets/71cWQ3Yr8NL._AC_SL1500_.png";
import Bag from "../Assets/71I8bdpX2UL._AC_SL1500_.png";
import Game from "../Assets/719xFB+eo6L._SL1500_.png";
import Head from "../Assets/818c8Lnb8GL._AC_SL1500_.png";
import man from "../Assets/photographer-man-taking-photos-village.png";

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
          <h3>₹3,965.00</h3>
          <span style={{ fontSize: "10px" }}>
            [ ALL TAXES & IMPORT DUTY INCLUDED ]
          </span>
          <div className="hi">
            <div className="dd"> ADD TO CART </div>
          </div>
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
       <div className="pro">
        <h1>WHAT'S TRENDING</h1>
        <button>View all</button>
      </div>

      <div className="product">
        <Card className="ProductCard" >
          <Card.Body>
            <img src={Cam} alt="" className="camera" />
          </Card.Body>
        </Card>
        <div className="desc2">
          <p>
            Meta Quest 2 — Advanced All-In-One Virtual Reality
            <br />
            Headset — 128 GB
            <br />
            <soan>₹31,970.00</soan>
          </p>{" "}
        </div>

        <Card className="ProductCard">
          <Card.Body>
            <img src={Carioke} alt="" className="carioke" />
          </Card.Body>
        </Card>
        <div className="desc2">
          <p>
            Corsair Vengeance RGB PRO 16GB (2x8GB) DDR4
            <br />
            3200MHz C16 LED Desktop Memory - Black
            <br />
            <soan>₹31,970.00</soan>
          </p>{" "}
        </div>
        <Card className="ProductCard">
          <Card.Body>
            <img src={Watch} alt="" />
          </Card.Body>
        </Card>
        <div className="desc2">
          <p>
            Apple Watch Series 8 GPS + Cellular 45mm Midnight
            <br />
            Aluminium Case with Midnight Sport Band - M/L <br />
            <soan>₹41,970.00</soan>
          </p>{" "}
        </div>
        <Card className="ProductCard">
          <Card.Body>
            <img src={Bud} alt="" />
          </Card.Body>
        </Card>
        <div className="desc2">
          <p>
            Meta Quest 2 — Advanced All-In-One Virtual Reality
            <br />
            Headset — 128 GB <br />
            <soan>₹31,970.00</soan>
          </p>
        </div>
      </div>

      <div className="Desc">
        <p style={{paddingLeft : '15px'}}>
          Meta Quest 2 — Advanced All-In-One Virtual Reality
          <br />
          Headset — 128 GB
          <br />
          <soan>₹31,970.00</soan>
        </p>{" "}
        <p style={{paddingLeft : '50px'}}>
          Corsair Vengeance RGB PRO 16GB (2x8GB) DDR4
          <br />
          3200MHz C16 LED Desktop Memory - Black
          <br />
          <soan>₹31,970.00</soan>
        </p>{" "}
        <p style={{paddingLeft : '80px'}}>
          Apple Watch Series 8 GPS + Cellular 45mm Midnight
          <br />
          Aluminium Case with Midnight Sport Band - M/L <br />
          <soan>₹41,970.00</soan>
        </p>{" "}
        <p style={{paddingLeft : '50px'}}>
          Meta Quest 2 — Advanced All-In-One Virtual Reality
          <br />
          Headset — 128 GB <br />
          <soan>₹31,970.00</soan>
        </p>
      </div>



    </>
  );
};

export default SingleProduct;
