import React, { useState } from 'react'
import Bag from '../Assets/Shopping Bag.png'

const NavBar = () => {
  const[side  , setSide] = useState(false)
  return (
  <>
    <div className='MainNav'>
    <div className='left'>
    <i class="fa-solid fa-bars" onClick={() => setSide(true)}></i>
    </div>
    <div className='mid'>
    <i class="fa-solid fa-magnifying-glass"></i>
    <input type='search' />
    
    </div>
    <div className='right'>
    <img src={Bag} alt='Bag' />
    </div>
    </div>

{side ?    <div className='sideBar' style={{left : }}>
    <ul>
      <li>Care</li>
      <li>Gym</li>
      <li>Perfume</li>
    <li>Cosmetics</li>
    <li>Technology</li>
    <li>Home</li>
    </ul>

    </div>}
  
  </>
  )
}

export default NavBar