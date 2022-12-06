import React from 'react'
import img from '../Assets/asset1.jpg'

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
 </>
  )
}

export default CustomerService