import React from 'react';
import logo from '../../../assets/nwml_logo.png'
import { Link } from 'react-router-dom';

const Navber = () => {
    return (
        <div className="navbar bg-base-100">
        <img className='h-16' src={logo} alt="" />
<div className="navbar-end">
  <div className="dropdown">
    <label tabIndex={0} className="btn btn-ghost lg:hidden">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
    </label>
    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
    <Link to='/'><li><a>Home</a></li></Link>
    <li><a>About</a></li>
    <li><a>Services</a></li>
    <li><a>Blogs</a></li>
    <li><a>Contact</a></li>
    
    </ul>
  </div>
</div>

<div className="navbar-center hidden lg:flex">
  
  <ul className="menu menu-horizontal px-1">
    <Link to='/'><li><a>Home</a></li></Link>
    <li><a>About</a></li>
    <li><a>Services</a></li>
    <li><a>Blogs</a></li>
    <li><a>Contact</a></li>
  </ul>
</div>
<div className="navbar-end">
  <a className="btn">Login</a>
</div>
</div>
    );
};

export default Navber;