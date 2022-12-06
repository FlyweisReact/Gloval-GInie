/** @format */

import React from "react";
import img1 from "../Assets/asset1.png";
import img2 from "../Assets/Group 166.png";
import img3 from "../Assets/Oil.png";

import img4 from "../Assets/Webby Soft Animal Plush Elephant Toy 20cm, Grey.png";

import img5 from "../Assets/Group 171.png";



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

const Shopping = () => {
  return (
    <>
      <div className="MyOrderHead">
        <img src={img1} alt="" />
      </div>

      <div className="shopping">
        <div>
          <h1>
            THANK YOU <br />
            FOR YOUR ORDER
          </h1>
          <h2>Confirmation will be sent to your registered email ID.</h2>
        </div>

        <img src={img2} alt="" />
      </div>

      <h2 className="shoppingH2">YOUR ORDER HAS BEEN SUCCESSFULLY PLACED,</h2>

      <div className="shoppingAddress">
        <h2>SHIPPING TO RESIDENCE:</h2>
        <p>
          703 lotus business park, <br />
          Mumbai, Maharashtra 400064 India.
        </p>
      </div>

      <div className="shoppingTwoSec">
        <img src={img3} alt="" />
        <p>
          Solgar B-Complex "100", 100 Vegetable Capsules - Heart Health Nervous
          System <br />
          Support - Supports Energy Metabolism - Non GMO, Vegan, Gluten Free,
          Dairy Free, <br />
          Kosher, Halal - 100 Servings.
        </p>
      </div>

      <div className="shoppingTwoSec">
        <img src={img4} alt="" />
        <p>
          Solgar B-Complex "100", 100 Vegetable Capsules - Heart Health Nervous
          System <br />
          Support - Supports Energy Metabolism - Non GMO, Vegan, Gluten Free,
          Dairy Free, <br />
          Kosher, Halal - 100 Servings.
        </p>
      </div>

      <div className="shoppingIndia">
        <h1>ESTIMATED DELIVERY FROM USA TO INDIA</h1>

        <div>
          <p>MONDAY</p>
          <p>SEP 20</p>
          <p>2021</p>
        </div>
      </div>

      <div className="shoppingImage">
        <img src={img5} alt='' />
       </div>

       <button className="shoppingTrack" >TRACK YOUR ORDER </button>
    </>
  );
};

export default Shopping;
