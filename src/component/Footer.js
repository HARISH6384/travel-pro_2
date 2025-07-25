import { Link } from 'react-router-dom'
import './Nav'
import React, { useState } from 'react'
import './Our.css'
import flight from '../images/travel.png'
import p1 from '../images/phone_7610921.png'
import p2 from '../images/mail-icon_8056414.png'
import p3 from '../images/clock_10945388.png'



const Footer = () => {
  const [data,setData]=useState('')

  const handlesumbit=(e)=>{
    e.preventDefault()
    alert(`messaged`)
  }

  const handlechand=(e)=>{
    const name=e.target.name
    const value=e.target.name
    setData((prevData)=> {return{...prevData,[name]:value}} )
  }
  return (
    <>
        <div className='form' >
        
          
    <div class=' mt-10 md:py-20 py-16  px-16 md:px-20'>
      <div class=' max-w-4xl  mx-auto text-center '> 
        <h1 class='text-3xl font-bold mb-4 text-blue-500'>NewsLetter</h1>
        <h1 class='mb-8 font-semibold text-base md:text-lg'> Enter your email address to register to our newsletter subscription</h1>
        <form onSubmit={handlesumbit} className='flex flex-col sm:flex-row items-center justify-center gap-4' >
          <input class='border rounded-md  px-4 py-2 w-[200px] sm:w-[400px]  text-xs ' type='email' onChange={handlechand} name='email' value={data.value} placeholder='Enter Your Email Address'/>
         
          <button class=' bg-blue-500 text-white px-1 py-2 rounded-md hover:bg-blue-600 transition w-20  '>Submit</button>
          
   
          
        </form>

      </div>
    </div>
    
      </div>
      
    <div className=' bg-blue-950 mt-20 text-white py-10 px-6'>
    <div class='grid grid-cols-1   md:grid-cols-2 lg:grid-cols-4 gap-10 ' >
    <div className='flex items-center space-x-4 '>
      <img src={flight} className='w-10   h-10 animate-ping' alt='flight'/>
        <span class='  font-bold text-4xl'> <Link to='/'>Travel Go </Link>  </span>
    </div>
    
    <div>
        <span class=' font-bold  flex text-lg'> <img src={p1} alt='p1' class='w-10  h-10'/> <Link to='/'>Call Agent </Link></span>
        <span class='mt-1'><Link to='/'>0974090945094</Link></span>
    </div>
    <div>
     <span class=' font-bold  flex text-lg'> <img src={p2} alt='p2' class='w-10 h-10'/> <Link to='/'>Send Email</Link></span>     
        <span class='pt-1'> <Link to='/'>hharish@gmail.com</Link></span>
    </div>
    <div>
      <span class='flex'><span class=' font-bold flex text-lg'><img src={p3} alt='p3' class='w-10 h-10'/>  <Link to='/'>Opening Time</Link></span></span>
        <span class='pt-1'> <Link to='/'>Mon-Fri 8am-9pm</Link></span>
    </div>
    </div>
    </div>
    <hr></hr>
      
    <div className=' bg-blue-950 text-white py-10 px-6'>
    <div class='grid grid-cols-1   md:grid-cols-2 lg:grid-cols-4 gap-10 ' >
        <div className=' items-center space-x-4 '>
            <span class=' font-bold  text-lg'><Link to='/'>About Us</Link></span>
            <span class='mt-4  text-start '><Link to='/'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</Link></span>
        </div>
        <div >
        < span class=' font-bold  text-lg'><Link to='/'>DESTINATION</Link></span>
        <span class='mt-5'><Link to='/'> South Americ</Link></span>
        <span><Link to='/'>Paris</Link></span>
        <span><Link to='/'>Goa</Link></span>
        <span><Link to='/'>New York</Link></span>
         <span><Link to='/'>France</Link></span>
          <span><Link to='/'>Austrlia</Link></span>
    
    </div>
    <div>
         <span class=' font-bold  text-lg'><Link to='/'>SUPPORT</Link></span>
         <span class='mt-5'><Link to='/'>Help Center</Link></span>
       <span><Link to='/'>Sumbit Request</Link></span>
     <span><Link to='/'>policies & Guides</Link></span>
       <span><Link to='/'>Tracking My Booking</Link></span>
      
    </div>
    <div>
        <span class=' font-bold  text-lg'><Link to='/'>Follow Us</Link></span>
        <span></span>
    </div>
    </div>
    </div>
    <hr></hr>
    <div>
      <span class='text-white  bg-blue-950'>Copyrights @ 2025 skillcraft All Rights Reserved </span>
    </div>
    
  

      
    </>
  )
}

export default Footer
