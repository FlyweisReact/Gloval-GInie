import React from 'react'
import Bag from '../Assets/Shopping Bag.png'

const NavBar = () => {
  return (
  <>
    <div className='MainNav'>
    <div className='left'>
    <i class="fa-solid fa-bars"></i>
    </div>
    <div className='mid'>
    <i class="fa-solid fa-magnifying-glass"></i>
    <input type='search' />
    
    </div>
    <div className='right'>
    <img src={Bag} alt='Bag' />
    </div>
    </div>

    <div className='sideBar'>
    <ul>
      <li>Care</li>
      <li>Gym</li>
      <li>Perfume</li>
    <li>Cosmetics</li>
    <li>Technology</li>
    <li>Home</li>
    </ul>

    </div>
  </>
  )
}

export default NavBar