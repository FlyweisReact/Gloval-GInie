/** @format */

import React from "react";
import img1 from "../Assets/asset1.png";
import img2 from "../Assets/Oil.png";
import X from "../Assets/X.png";
import img4 from "../Assets/Group 209.png";
import img5 from "../Assets/61f3tehh6-L._AC_.png";
import img6 from "../Assets/712tvc3j0LL._AC_SL1500_.png";

const OrderSummary = () => {
  return (
    <>
      <div className="MyOrderHead">
        <img src={img1} alt="" />
        <h1> ORDER SUMMARY</h1>
      </div>

      <div className="OrderSummary">
        <div className="left">
          <div className="section">
            <p className="sectionP">
              Returns & Refund Policy{" "}
              <span>
                <img src={img4} alt="" />
              </span>
            </p>
            <hr style={{ marginBottom: "10%" }} />
            <img
              src={X}
              alt=""
              className="X"
              style={{ float: "right", fontWeight: "bold" }}
            />

            <div className="Under">
              <div>
                <img src={img2} alt="" />
              </div>
              <div>
                <h5>SOLGAR</h5>
                <p>
                  Solgar B-Complex "100", 100 Vegetable Capsules <br />
                  Non GMO, Vegan, Gluten Free, Dairy Free, <br />
                  Kosher, Halal - 100 Servings.
                </p>
              </div>
              <div>
                <h5 className="spe">₹ 1,965.00</h5>
                <span style={{ fontSize: "0.8rem" }}>
                  [ ALL TAXES & IMPORT DUTY INCLUDED ]
                </span>
              </div>
            </div>
          </div>

          <div className="section">
            <p className="sectionP">
              Returns & Refund Policy{" "}
              <span>
                <img src={img4} alt=""  />
              </span>
            </p>
            <hr style={{ marginBottom: "10%" }} />
            <img src={X} alt="" className="X" style={{ float: "right" }} />

            <div className="Under" style={{marginLeft : '6%'}}>
              <div>
                <img src={img5} alt="" />
              </div>
              <div> 
                <h5>DISNEY</h5>
                <p>
                  Disney Vermont Teddy Bear Stuffed Elephant - Oh <br />
                  So Soft Elephant Stuffed Animal, Plush Toy, Gray, <br />
                  18 Inch
                </p>
              </div>
              <div>
                <h5 className="spe">₹ 1,150.00</h5>
                <span style={{ fontSize: "0.8rem" }}>
                  [ ALL TAXES & IMPORT DUTY INCLUDED ]
                </span>
              </div>
            </div>
          </div>

          <div className="section">
            <p className="sectionP">
              Returns & Refund Policy{" "}
              <span>
                <img src={img4} alt="" />
              </span>
            </p>
            <hr style={{ marginBottom: "10%" }} />
            <img src={X} alt="" className="X" style={{ float: "right" }} />

            <div className="Under">
              <div>
                <img src={img6} alt="" />
              </div>
              <div>
                <h5>CENTRUM</h5>
                <p>
                  Centrum Adult Multivitamin/Multimineral Supplement <br />
                  with Antioxidants, Zinc, Vitamin D3 and B Vitamins
                </p>
              </div>
              <div>
                <h5 className="spe">₹ 1,965.00</h5>
                <span style={{ fontSize: "0.8rem" }}>
                  [ ALL TAXES & IMPORT DUTY INCLUDED ]
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="right"></div>
      </div>
    </>
  );
};

export default OrderSummary;
