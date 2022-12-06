import React from 'react'

import img1 from "../Assets/asset1.png";
const OrderSummary = () => {
  return (
   <>
     <div className="MyOrderHead">
        <img src={img1} alt="" />
        <h1>MY ORDERS</h1>
      </div>

      <div className="MyOrderFour">
        <h3 className="special">All Orders</h3>
        <h3>InTransit</h3>
        <h3>Cancelled</h3>
        <h3>Buy it Again</h3>
      </div>
   </>
  )
}

export default OrderSummary