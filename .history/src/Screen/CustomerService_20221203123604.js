import React from 'react'
import img from '../Assets/asset1.jpg'
import img67 from "../Assets/04.png";

const CustomerService = () => {
  return (
 <>
    <div className='customerSer'>
        <p>Welcome to</p>
        <h6>CUSTOMER SERVICES</h6>
    </div>

    <div className='customerSerHead'>
        <p>Manage your Orders</p>
        <img src={img} alt='' />
     </div>

     <hr  style={{width : '80%' , marginLeft : '10%'}}/>

     <div className="shoppingTwoSec">
        <img src={img67} alt="" />
        <p style={{ marginLeft: "5%" }}>
          Solgar B-Complex "100", 100 Vegetable Capsules - Heart Health Nervous
          System <br />
          Support - Supports Energy Metabolism - Non GMO, Vegan, Gluten Free,
          Dairy Free, <br />
          Kosher, Halal - 100 Servings.
        </p>
      </div>
 </>
  )
}

export default CustomerService