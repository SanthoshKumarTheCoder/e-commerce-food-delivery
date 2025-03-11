import React from 'react'
import { assets } from '../../assets/assets'

function Navbar() {
  return (
    <div className='navbar'>
      <img className='logo' src={assets.logo_1} alt="" />
      <img className='profile' src={assets.profile_image} alt="" />
    </div>
  )
}

export default Navbar
