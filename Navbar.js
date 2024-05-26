
import React from 'react'
import { useState } from 'react';

import { BsHouseFill } from 'react-icons/bs';

import './Navbar.css'
import {HiOutlineMenu } from 'react-icons/hi';
import { FaRegTimesCircle } from 'react-icons/fa';
const Navbar = () => {

  const[click,setClick] = useState(false)
  const handleClick = () => setClick(!click)


  return(
    <div className='navbar'>
      <div className='container'>
        <h1><span><BsHouseFill/>Real</span>Estate</h1>
        <button className='btn'>Sign In</button>
        <ul className={click? 'nav-menu active':'nav-menu'}>
           <li><a href='#'>Home</a></li>
           <li><a href='#'>Search</a></li>
           <li><a href='#'>About</a></li>
           <li><a href='#'>Contact</a></li>
        </ul>
        <div className='humburger' onClick={handleClick}>
          {click?(<FaRegTimesCircle className='icon'/>):(<HiOutlineMenu className='icon'/>)}
          
        </div>

      </div>

    </div>
  )
}

export default Navbar
