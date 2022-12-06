/** @format */

import React from "react";
import img from "../Assets/04.png";

const Status = () => {
  return (
    <>
      <div className="StatusRefund">
        <h2>Return/Refund Status</h2>
      </div>

      <hr
        style={{ width: "80%", marginLeft: "10%", border: "2px solid #414141" }}
      />

      <div className="StatusRefundTwoSec">
        <img src={img} alt="" />
        <p>
          {" "}
          Solgar B-Complex "100", 100 Vegetable Capsules - Heart Health Nervous
          System <br />
          Support - Supports Energy Metabolism - Non GMO, Vegan, Gluten Free,
          Dairy Free, <br />
          Kosher, Halal - 100 Servings.
        </p>
      </div>

      <div className="StatusRefundBox">
        <div className="left">
          <div className="first">
            <img
              src="https://cdn.pixabay.com/photo/2016/01/20/18/59/confirmation-1152155_960_720.png"
              alt=""
              style={{ width: "40px", height: "40px" }}
            />
            <div>
              <h2
                style={{
                  color: "#43a047",
                  fontFamily: "Monument",
                  fontWeight: "bolder",
                }}
              >
                Replacement Requested
              </h2>
              <p
                style={{
                  fontFamily: "Munument",
                  fontWeight: "lighter",
                  fontSize: "1.4rem",
                }}
              >
                Replacement Order : 1287459321
              </p>
            </div>
          </div>

          <div className="second">
            <div className="Fir">
              <div
                style={{
                  width: "30px",
                  marginTop : ''
                  height: "30px",
                  backgroundColor: "#ffbb00",
                  borderRadius: "100%",
                }}
              ></div>
              <div className="Second">
                <h2>Replacement Initiated</h2>{" "}
                <span style={{ fontSize: "1.4rem" , marginTop : '1%' }}>
                  Fri, 26th Apr-11:59am
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="boxs">
            <h2>Address Info :</h2>
            <div>
              <h3>Tanmay</h3>
              <p>
                400069 ,jamaica , S.V Road , Mumbai <br />
                Mob No:- +91123456790
              </p>
            </div>
          </div>
          <div className="boxs2">
            <h2>Order Info :</h2>
            <div>
              <h3>View Order Details</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Status;
