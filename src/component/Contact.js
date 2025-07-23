import React, { useState } from 'react'
import './Our.css'
 import p1 from '../images/map.png'
  import p2 from '../images/m2.png'
   import p3 from '../images/m3.png'
    import p4 from '../images/m4.png'
 


// import  './Contact.css'
// import logo from '../image/logo-1162901_1280.png'
// import { click } from '@testing-library/user-event/dist/click';

 

const Contact = () => {

  const[name,setName]=useState('');
  const[lastname,setLname]=useState('');
  const[email,setEmail]=useState('');
  const[subject,setSubject]=useState('');
  const[message,setMessage]=useState('');
  const handleSumbit=(e)=>{
    e.preventDefault();
  }
    
    function change(){
      alert(`${name}.${lastname}`)
     
      alert(`${email}`)
      alert(`${subject}`)
      alert(`${message}`)
    }
  
  return (
    <> 
     <div>
        <div>

        </div>
        <div className='con'>
            <div class='flex'>
              

            
            <form class=' md:max-w-3xl  md:mt-20 mt-6 me-10  mx-auto shadow-lg  p-6 rounded-lg space-y-6  bg-gray-300  opacity-60  '>
              <div>
                <h1 class='font-bold text-5xl text-blue-500'>Get In Touch</h1>
                <h1 class='font-bold'>24/7 We Will Answer For Your Question</h1>
                </div>
                <div     className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                <input class='border rounded-md border-transparent outline-blue-700 px-2 md:px-4 md:w-full  h-10 md:h-14 bg-white' type='name' placeholder='First Name'/> <input type='name' class='border rounded-md border-transparent outline-blue-700 md:w-full md:px-4 px-2  h-10 md:h-14' placeholder='Last Name'/>
                <div className='md:gap-2 space-y-3'>
                <input  class='border rounded-md border-transparent outline-blue-700 -px-3  md:px-4 md:py-3 focus:outline-none  md:h-14 h-10 md:w-full' type='email' placeholder='Email'/>
                
                <input  class='border rounded-md border-transparent outline-blue-700 -px-3  md:py-3 md:h-14 md:w-full h-10' type='number' placeholder='Phone no'/>
              </div>
                <div className='md:pt-32'>
                <button  class=' bg-blue-500 text-white  py-3 font-bold px-4 rounded-md hover:bg-blue-600 transition '>Sumbit</button>
                </div>
                <br></br>
                </div>
            </form>
            </div>
        </div>
     </div>
     <div class='mx-5  mt-5'>
        <button class='border py-3 px-3 bg-blue-950 text-white rounded-2xl'>Visit us Anytime</button>
        <h1 className='font-bold text-blue-400 text-3xl mt-3'>Our Office</h1>
        <h1 class='font-medium text-lg'>You can visit our office anytime but please don't stalk us or don't be creepy</h1>
     </div>
     <div class='flex mt-10 flex-col md:flex-row  flex-wrap gap-4  justify-around '>
        <div class='border h-auto w-full md:w-[45%] lg:w-[22%]  rounded-3xl space-y-2 p-5  bg-slate-300'>
         <img src={p1} alt='p1' className='w-10 h-10 mb-3'/>
            <h1 class='font-bold text-2xl text-blue-600'>INDIA</h1>
            <p class=' font-semibold' >123 MG Road, Indira Nagar,Bengaluru, Karnataka - 560038</p>
        </div>
         <div class='border h-auto w-full md:w-[45%] lg:w-[22%]  rounded-3xl   p-5 bg-slate-300'>
        <img src={p2} alt='p2' className='w-10 h-10 mb-3'/>
            <h1 class='font-bold text-2xl text-blue-600'>DUBAI</h1>
            <p class=' font-semibold'>Office 407, Al Wasl Business Tower Sheikh Zayed Road, Dubai, UAE</p>
        </div>
        <div class='border h-auto w-full md:w-[45%] lg:w-[22%]  rounded-3xl   p-5 bg-slate-300'>
            <img src={p3} alt='p3' className='w-10 h-10 mb-3'/>
            <h1 class='font-bold text-2xl text-blue-600'>USA</h1>
            <p class=' font-semibold' >Suite 500, 1100 5th Avenue New York, NY 10011, USA</p>
        </div>
         <div class='border h-auto w-full md:w-[45%] lg:w-[22%]  rounded-3xl   p-5 bg-slate-300'>
           <img src={p4} alt='p4' className='w-10 h-10 mb-3'/>
            <h1 class='font-bold text-2xl text-blue-600'>LONDON</h1>
            <p class=' font-semibold'>Level 3, 9 Savoy Street London WC2E 7EG, UK</p>
        </div>
     </div>
    </>
  )
}

export default Contact;

