import React from 'react'
import logo from "./images/logo.png";

const Navbar = () => {
  return (
    <div className='flex flex-col justify-start items-center pt-4 h-screen space-y-40 bg-white  ' >
      <div className='' >
        <img src={logo} alt="logo_img" />
      </div>
      <div className='flex flex-col space-y-8' >
        <p>Home</p>
        <p>Info</p>
        <p>feedback</p>
      </div>

      
    </div>
  )
}

export default Navbar;



