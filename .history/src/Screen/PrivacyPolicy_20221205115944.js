/** @format */

import Give from "../Assets/Get Me This.png";

import Whatsapp from "../Assets/Whatsapp icon.png";
import phone from "../Assets/Phone call.png";
import Mail from "../Assets/Mail Icon.png";
import Footer from "../Component/Footer";

const PrivacyPolicy = () => {
  return (
    <>
      <h1 className="returnRefundP">PRIVACY POLICY</h1>
      <div className="returnRefundPdiv">
        <p>
          We value the trust you place in us and recognize the importance of
          secure transactions and information privacy. <br /> Accordingly, we
          have developed this Policy in order for you to understand how we
          collect, use, communicate, disclose <br /> and make use of personal
          information. The below information outlines our privacy policy:
        </p>
      </div>

      <div className="returnRefundPdiv2">
        <h3>Collection of Your Information</h3>
        <p>
          Before or at the time of collecting personal information, we will
          identify the purpose for which they are being collected for. <br /> You can
          browse through our website without revealing any personal information
          about yourself. However, you will not stay  anonymous to us once you
          give us your personal information. You will always have the option to
          not provide information.
        </p>
        <p>
          We use the information you provide to do internal research on user/s
          demographics, behaviours and interests. We may collect personal
          information (such as email address, delivery address, name, phone
          number, credit card/debit card and other payment instrument details)
          from you when you set up an account or transact with us or participate
          in any event or contest.
        </p>
        <p>
        We collect personal information by lawful and fair means – with appropriate knowledge and consent of the individual.
We will protect the provided personal information with security safeguards against theft or loss. 
        </p>
        <p>
        Notes: We will only retain personal information as long as necessary for the fulfillment of those purposes.
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

export default PrivacyPolicy;
