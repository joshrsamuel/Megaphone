import React from 'react';
import '../App.css';
import megaphoneLogo from '../pictures/megaphone1.png'
import nameLogo from '../pictures/Frame.png'

export default function Navbar() {
  return <div className='Navbar'>
    <div className='links'>
      <img className='megaphoneLogo' src={megaphoneLogo}></img>
      <img className='logo' src={nameLogo}></img>
      <a href='/home'>Events</a>
      <a href='/aboutus'>About Us</a>
      <a href='/contact'>Contact</a>
      <button className='loginBtn'>Login</button>
      </div>
  </div>;
}
