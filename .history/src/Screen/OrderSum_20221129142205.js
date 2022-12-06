/** @format */

import React from "react";
import img1 from "../Assets/asset1.png";
import img2 from "../Assets/Oil.png";

import img3 from '../Assets/Webby Soft Animal Plush Elephant Toy 20cm, Grey.png'
import img4 from '../Assets/712tvc3j0LL._AC_SL1500_.png'
import img5 from '../Assets/71k3V8agL-L._AC_SL1500_.png'

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
        <div className="second" >
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
          <p >
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
        <div className="second" >
          <h5>DISNEY</h5>
          <p>
          Disney Vermont Teddy Bear Stuffed Elephant - Oh
So Soft Elephant Stuffed Animal, Plush Toy, Gray,
18 Inch
          </p>
        </div>
        <div className="third">
          <p>
            {" "}
            <strong>ORDER ID :- </strong> #123456789{" "}
          </p>
          <p >
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
        <div className="second" >
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
          <p >
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
        <div className="second" >
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
          <p >
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
    </>
  );
};

export default OrderSum;
