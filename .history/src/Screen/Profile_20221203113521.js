/** @format */

import React from "react";
import img1 from "../Assets/asset1.png";

const Profile = () => {
  return (
    <>
      <div className="MyOrderHead" style={{ marginTop: "2%" }}>
        <img src={img1} alt="" />
      </div>

      <div className="profileEdit">
        <div className="big">
          <h6>PROFILE</h6>
          <div className="dwn">
            <p
              style={{
                fontFamily: "Futura",
                fontSize: "1.7rem",
                fontWeight: "bold",
              }}
            >
              Name :
            </p>
            <div>
              <p
                style={{
                  fontFamily: "Futura",
                  fontSize: "1.6rem",
                  fontWeight: "lighter",
                }}
              >
                Shravan
              </p>
              <button>Edit</button>
            </div>
          </div>
          <hr style={{ width: "96%", marginLeft: "2%" }} />
        </div>
        <div className="ProfileHidden">
          <img
            src={img1}
            alt=""
            style={{ marginLeft: "90%", transform: "rotate(270deg)" }}
          />
          <p
            style={{
              fontFamily: "Futura",
              marginLeft: "5%",
              marginTop: "0",
              fontSize: "1.4rem",
            }}
          >
            If you want to change the name associated with your Amazon customer
            account, you may do so <br /> below. Be sure to click the Save
            Changes button when you are done.
          </p>
          <h6 style={{marginLeft : '5%' }}>New Name</h6>
          <div>
            <input type={'text'} />
            <button> Save Changes</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
