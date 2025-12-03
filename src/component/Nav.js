import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import flight from '../images/travel.png';
import './Nav.css';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();


  const isHome = location.pathname === '/';

  return (
    <header className={` text-blue-700 shadow-md w-full z-10 ${isHome ? 'fixed' : 'relative'}`}>
      <nav className="container mx-auto flex items-center justify-between px-4 py-3 md:py-4">
      
        <div className="flex items-center space-x-2">
          <img src={flight} alt="Logo" className="w-10 h-10 animate-pulse" />
          <h1 className="text-blue-700 font-bold text-2xl">TRAVEL</h1>
        </div>

      
        <ul className="hidden md:flex space-x-6 font-semibold">
          <li>
            <Link to="/" className="hover:text-cyan-200 transition duration-300">HOME</Link>
          </li>
          <li>
            <Link to="/Ourpackages" className="hover:text-cyan-200 transition duration-300">OUR PACKAGES</Link>
          </li>
          <li>
            <Link to="/About" className="hover:text-cyan-200 transition duration-300">ABOUT US</Link>
          </li>
          <li>
            <Link to="/Contact" className="hover:text-cyan-200 transition duration-300">CONTACT</Link>
          </li>
        </ul>

        
        <div className="hidden md:flex space-x-3">
          <Link
            to="/Sign"
            className="bg-white text-blue-700 px-4 py-2 rounded-md hover:bg-cyan-200 hover:text-blue-900 transition duration-300 font-semibold"
          >
            Signup
          </Link>
          <Link
            to="/Login"
            className="bg-white text-blue-700 px-4 py-2 rounded-md hover:bg-cyan-200 hover:text-blue-900 transition duration-300 font-semibold"
          >
            Login
          </Link>
        </div>

        
        <button className="md:hidden focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
          <svg className="h-8 w-8 text-blue-700" viewBox="0 0 24 24" fill="none">
            <path
              d="M4 6H20M4 12H20M4 18H20"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </nav>

    
      {isOpen && (
        <div className="md:hidden bg-gradient-to-b from-cyan-500 via-blue-500 to-indigo-600 text-white px-4 pt-4 pb-6 space-y-4">
          <ul className="flex flex-col items-center space-y-4 font-semibold">
            <li><Link to="/" onClick={() => setIsOpen(false)} className="hover:text-cyan-200">HOME</Link></li>
            <li><Link to="/Ourpackages" onClick={() => setIsOpen(false)} className="hover:text-cyan-200">OUR PACKAGES</Link></li>
            <li><Link to="/About" onClick={() => setIsOpen(false)} className="hover:text-cyan-200">ABOUT US</Link></li>
            <li><Link to="/Contact" onClick={() => setIsOpen(false)} className="hover:text-cyan-200">CONTACT</Link></li>
          </ul>
          <div className="flex flex-col items-center gap-3 mt-4">
            <Link
              to="/Sign"
              className="bg-white text-blue-700 px-4 py-2 rounded-md hover:bg-cyan-200 hover:text-blue-900 transition duration-300 font-semibold"
            >
              Signup
            </Link>
            <Link
              to="/Login"
              className="bg-white text-blue-700 px-4 py-2 rounded-md hover:bg-cyan-200 hover:text-blue-900 transition duration-300 font-semibold"
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Nav;
