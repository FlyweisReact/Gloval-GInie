/** @format */

import React from "react";
import Give from "../Assets/Get Me This.png";
import Whatsapp from "../Assets/Whatsapp icon.png";
import phone from "../Assets/Phone call.png";
import Mail from "../Assets/Mail Icon.png";
import Footer from "../Component/Footer";

const TermsCondition = () => {
  return (
    <>
      <h1 className="returnRefundP"> TERMS AND CONDITIONS </h1>

      <div className="returnRefundPdiv2" style={{ marginBottom: "2%" }}>
        <h3>1. Terms</h3>
        <p>
          By accessing this website, you are agreeing to be bound by its Terms
          and Conditions of Use, all applicable laws and regulations, and agree
          that you are responsible for compliance with any applicable local
          laws. If you do not agree with any of these terms, you are prohibited
          from using or accessing this site. The materials contained in this
          website are protected by applicable copyright and trademark laws.
        </p>
      </div>

      <div className="returnRefundPdiv2" style={{ marginBottom: "2%" }}>
        <h3>2. Use License</h3>
        <p>
          1. Permission is granted to temporarily download one copy of the
          materials (information or software) on Desertcart Trading's website
          for personal, non-commercial transitory viewing only. This is the
          grant of a license, not a transfer of title, and under this license
          you may not:
          <br />
          <ul>
            <li> modify or copy the material;</li>
            <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);
</li>
            <li>attempt to decompile or reverse engineer any software contained on Desertcart Trading's website;
</li>
            <li></li>
            <li></li>
          </ul>
        </p>
      </div>

      <div className="returnRefundPdiv2" style={{ marginBottom: "2%" }}>
        <h3>Choice to unsubscribe/opt-out:</h3>
        <p>
          We provide all users the opportunity to opt-out of receiving
          non-essential communication. You can login into the Notification{" "}
          <br />
          Preference page of our platform and unsubscribe/opt-out.
        </p>
      </div>

      <div className="returnRefundPdiv2">
        <h3>Cookies: </h3>
        <p>
          Some of the features of the site will turn off if you disable the
          cookies.
        </p>
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

export default TermsCondition;
