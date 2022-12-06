/** @format */

import React from "react";
import img1 from "../Assets/asset1.png";
import img2 from "../Assets/Oil.png";

import img3 from "../Assets/Webby Soft Animal Plush Elephant Toy 20cm, Grey.png";
import img4 from "../Assets/712tvc3j0LL._AC_SL1500_.png";
import img5 from "../Assets/71k3V8agL-L._AC_SL1500_.png";

import img6 from "../Assets/mastercard_PNG23.png";

const OrderSum = () => {
  return (
    <>
      <div className="MyOrderHead">
        <img src={img1} alt="" />
        <h1>MY ORDERS</h1>
      </div>

      <div className="MyOrderFour">
        <h3>All Orders</h3>
        <h3>InTransit</h3>
        <h3>Canceled</h3>
        <h3 className="special">Buy it Again</h3>
      </div>

      <div className="MyOrderPlaced">
        <h2>
          {" "}
          <span style={{ fontWeight: "700" }}>18 orders </span> placed in{" "}
        </h2>
        <select>
          <option>Last 30 days</option>
        </select>
      </div>

      <hr className="MyOrderHr" />

      {/* ------------------------------------------------------ */}

      <h2 className="OrderSum">View Order Summary</h2>
      <hr className="MyOrderHr" />

      {/* -------------------------------------------------------- */}

      <div className="OrderSumSection">
        <div className="first">
          <img src={img2} alt="" />
        </div>
        <div className="second">
          <h5>SOLGAR</h5>
          <p>
            Solgar B-Complex "100", 100 Vegetable Capsules Non GMO, Vegan,
            Gluten Free, Dairy Free, Kosher, Halal - 100 Servings.
          </p>
        </div>
        <div className="third">
          <p>
            {" "}
            <strong>ORDER ID :- </strong> #123456789{" "}
          </p>
          <p>
            {" "}
            <strong>PURCHASE DATE :-</strong> November 21, 2022 6:51pm{" "}
          </p>
        </div>
        <div className="four">
          <button> ADD TO CART</button>
          <br />
          <button> BUY NOW </button>
        </div>
      </div>

      {/* ------------------------------------------------------------ */}

      {/* ------------------------------------------------------ */}

      <h2 className="OrderSum">View Order Summary</h2>
      <hr className="MyOrderHr" />

      {/* -------------------------------------------------------- */}

      <div className="OrderSumSection">
        <div className="first">
          <img src={img3} alt="" />
        </div>
        <div className="second">
          <h5>DISNEY</h5>
          <p>
            Disney Vermont Teddy Bear Stuffed Elephant - Oh So Soft Elephant
            Stuffed Animal, Plush Toy, Gray, 18 Inch
          </p>
        </div>
        <div className="third">
          <p>
            {" "}
            <strong>ORDER ID :- </strong> #123456789{" "}
          </p>
          <p>
            {" "}
            <strong>PURCHASE DATE :-</strong> November 21, 2022 6:51pm{" "}
          </p>
        </div>
        <div className="four">
          <button> ADD TO CART</button>
          <br />
          <button> BUY NOW </button>
        </div>
      </div>

      {/* ------------------------------------------------------------ */}

      {/* ------------------------------------------------------ */}

      <h2 className="OrderSum">View Order Summary</h2>
      <hr className="MyOrderHr" />

      {/* -------------------------------------------------------- */}

      <div className="OrderSumSection">
        <div className="first">
          <img src={img4} alt="" />
        </div>
        <div className="second">
          <h5>CENTRUM</h5>
          <p>
            Centrum Adult Multivitamin/Multimineral Supplement with
            Antioxidants, Zinc, Vitamin D3 and B Vitamins
          </p>
        </div>
        <div className="third">
          <p>
            {" "}
            <strong>ORDER ID :- </strong> #123456789{" "}
          </p>
          <p>
            {" "}
            <strong>PURCHASE DATE :-</strong> November 21, 2022 6:51pm{" "}
          </p>
        </div>
        <div className="four">
          <button> ADD TO CART</button>
          <br />
          <button> BUY NOW </button>
        </div>
      </div>

      {/* ------------------------------------------------------------ */}

      {/* ------------------------------------------------------ */}

      <h2 className="OrderSum">View Order Summary</h2>
      <hr className="MyOrderHr" />

      {/* -------------------------------------------------------- */}

      <div className="OrderSumSection">
        <div className="first">
          <img src={img5} alt="" />
        </div>
        <div className="second">
          <h5>NORDIC NATURALS</h5>
          <p>
            Nordic Naturals Children’s DHA, Strawberry - 360 Mini Chewable Soft
            Gels for Kids - 250 mg Omega-3 with EPA & DHA - Brain Development &
            Function - Non-GMO - 90 Servings
          </p>
        </div>
        <div className="third">
          <p>
            {" "}
            <strong>ORDER ID :- </strong> #123456789{" "}
          </p>
          <p>
            {" "}
            <strong>PURCHASE DATE :-</strong> November 21, 2022 6:51pm{" "}
          </p>
        </div>
        <div className="four">
          <button> ADD TO CART</button>
          <br />
          <button> BUY NOW </button>
        </div>
      </div>

      {/* ------------------------------------------------------------ */}

      <h2 className="OrderSum">Invoice ˅ </h2>

      {/* ----------------------------------------------------------- */}

      <div>
        <div>
          <h3>Shipping Address</h3>
          <h3>J SYS</h3>
          <p>
            703/ lotus business park ram baug lane near Indian Oil Mumbai,
            Maharashtra:- 400064
          </p>
        </div>
        <div>
          <h3>Payment Method</h3>
          <div>
            <img src={img6} alt="" />
            <p>****1899</p>
          </div>
        </div>
        <div>
          <div>
            <h5>Subtotal (1)</h5> <h5>₹ 3,115.00</h5>
          </div>
          <div>
          <div>

          </div>
            <h5>₹ 3,115.00</h5>
          </div>
          <div>
            <h5>Subtotal (1)</h5> <h5>₹ 3,115.00</h5>
          </div>
          <div>
            <h5>Subtotal (1)</h5> <h5>₹ 3,115.00</h5>
          </div>
        </div>
      </div>

      {/* ----------------------------------------------------------- */}
    </>
  );
};

export default OrderSum;
