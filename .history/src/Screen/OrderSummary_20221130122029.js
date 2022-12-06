import React from 'react'
import img1 from "../Assets/asset1.png";
import img2 from "../Assets/Oil.png";

const OrderSummary = () => {
  return (
   <>
     <div className="MyOrderHead">
        <img src={img1} alt="" />
        <h1> ORDER SUMMARY</h1>
      </div>

        <div className='OrderSummary'>
            <div className='left'>
                <div className='section'>
                <p>Returns & Refund Policy  <span> i </span></p>
                <hr />

                </div>
            </div>
            <div className='right' >

            </div>
        </div>
     
   </>
  )
}

export default OrderSummary