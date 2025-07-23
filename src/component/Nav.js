import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import flight from '../images/travel.png'
import './Nav.css'

const Nav = () => {
  const [isopen,setIsopen]=useState(false)

    
  return (
    <div >
        <nav className='items-center  justify-between'>
          <div className='flex   '>
          <img src={flight} alt='f' className='w-10   h-10 animate-ping'/>
            <h1 class='text-blue-600 font-bold text-2xl'>TRAVEL</h1>
            </div>
           
            <ul class='hidden md:flex text-blue-600 font-bold'>
                <li> <Link to='/'>HOME</Link> </li>
                  <li> <Link to='Ourpackages'>OUR PACKAGES</Link> </li>
                   <li> <Link  to='About'>ABOUT US</Link> </li>
                   <li> <Link to='Contact'>CONTACT</Link> </li>
            </ul>
            <div className='  md:block hidden'>
              <div className='flex'>
            <li><Link  className='border py-2 px-3 hiddden md:block  rounded-md bg-blue-700 text-white font-semibold' to='Sign'>Signup</Link></li>
            <li><Link className='border py-2 px-3 hidden md:block rounded-md bg-blue-700 text-white font-semibold' to='Login'>Login</Link></li>
            </div>
            </div>
            <button className='md:hidden  ' onClick={()=> setIsopen(!isopen)}><svg className='h-10 w-10 mr-5'  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 6H20M4 12H20M4 18H20" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg></button>
        </nav>
        {isopen && (
        <div className='md:hidden'>
          <ul class=' flex flex-col items-center space-y-6 text-blue-600 font-bold'>
                <li> <Link to='/'>HOME</Link> </li>
                  <li> <Link to='Ourpackages'>OUR PACKAGES</Link> </li>
                   <li> <Link  to='About'>ABOUT US</Link> </li>
                   <li> <Link to='Contact'>CONTACT</Link> </li>
            </ul>
            <div className='flex gap-1 mb-5 mt-10 pl-48 items-center'>
            <li><Link  className='border py-2 px-3  rounded-md bg-blue-700 text-white font-semibold' to='Sign'>Signup</Link></li>
            <li><Link className='border py-2 px-3   rounded-md bg-blue-700 text-white font-semibold' to='Login'>Login</Link></li>
            </div>

        </div>
)}
      
    </div>
  )
}

export default Nav
