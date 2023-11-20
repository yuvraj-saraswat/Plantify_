import React from 'react'
import '../App.css';
import './Styles/Navbar.css';
import menu from './Images/menu.png';
import logo from './Images/Mainlogo.png';
import {Link, NavLink} from 'react-router-dom';

export default function Navbar() {
  return (
    <>
    <div className='Navbar'>
        <Link to="/" className='title'><div className='Logo'>
          <img src={logo}/>
        </div></Link>
      <div className='Links'>
        <ul>
        <li><NavLink to="/cities">Services</NavLink></li>
        <li><NavLink to="/">Memberships</NavLink></li>
        <li><NavLink to="/">Contact</NavLink></li>
        <li><NavLink to="/">About</NavLink></li>
          
        <input value='Search...'/>
        <button >Sign Up</button>
          
        </ul>
        <img src={menu}/> 
      </div>
    </div>
  </>
  )
}
