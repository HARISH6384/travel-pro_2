import React from 'react'
import './Our.css'
import photo1 from '../images/target.png'
import photo2 from '../images/happy.png'
import photo3 from '../images/exp.png'
import photo4 from '../images/trophy_3134162.png'

 
const Ourpackages = () => {
  return (
    <>
    <div class='text-center px-2  sm:px-4 sm:mt-5 mt-5'>
        <h1 class='text-blue-400 text-xl sm:text-2xl font-bold'>special offer</h1>
        <h1 class='text-black font-bold text-2xl sm:text-2xl'>Offers to inspire you</h1>
    </div>
    <div class='flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0  sm:mt-10'>
    <div className='p1'>
      <div class='text-justify w-full px-3 py-4'>
            <div>
            <h1 class='  mx-4 bg-gray-400 my-2 text-white sm:text-base rounded p-1  sm:w-52Q' >Valid on 20jan- 27jan 2025</h1> 
            </div>
        <h1 class='sm:text-2xl text-xl mt-14 text-white font-bold'>Exclusive Hotel</h1>
        <h1 class='sm:text-2xl text-xl text-white font-bold'>Deals Just for you</h1>
        <h1 class='sm:text-5xl text-2xl text-white'>15%</h1>
        <h1> *with terms and condtions</h1>
        </div>
      
        
    </div>
    <div className='p2'>
         <div class='text-justify  w-full px-4 py-5'>
            <div>
            <h1 class=' mx-4  bg-gray-400  my-2 text-white sm:textbase rounded p-1 sm:w-48'>Valid on 20 A-27 A 2025</h1>
            </div>
        <h1 class='sm:text-2xl text-xl mt-14 text-white font-bold'>Exclusive Hotel</h1>
        <h1 class='sm:text-2xl text-xl text-white font-bold'>Deals Just for you</h1>
        <h1 class='sm:text-5xl text-2xl text-white'>25%</h1>
        <h1> *with terms and condtions</h1>
        </div>
      

    </div>
    <div className='p3'>
      <div class='text-justify w-full  px-4 py-5'>
            <div>
            <h1 class=' mx-4  bg-gray-400 my-2 sm:text-base rounded p-1  text-white sm:w-48'>Valid on 20 Oct- 27 2025</h1>
            </div>
        <h1 class='sm:text-2xl text-xl mt-14 text-white font-bold'>Exclusive Hotel</h1>
        <h1 class='sm:text-2xl text:xl  text-white font-bold'>Deals Just for you</h1>
        <h1 class='sm:text-5xl text-2xl text-white'>35%</h1>
        <h1> *with terms and condtions</h1>
        </div>
      
      
        
    </div>
    </div>
    <div >

    </div>



    
          <div class='container-fulid mx-auto px-4 my-20 '>
            <div   className='treck' >

              <div class=' md:w-96 w-52   md:mx-[800px] sm:max-mx-[800px] md:py-32 mx-20 py-8 items-center text-center '> 
                <div class='grid grid-cols-1 md:grid-cols-2  space-y-10 text-black font-bold   rounded-3xl opacity-65  bg-slate-50 items-center '>
                <div  className='space-y-1' >
                   <img className='w-10 h-10  md:mx-20 mx-44 animate-bounce' src={photo1}/>
                 <h1 >30k</h1>
                 
                 <h1>tour succes</h1>
                 </div>
                 <div className='space-y-1'>
                  <img className='w-10 h-10  md:mx-20 mx-44 animate-bounce' src={photo2}/>
                  <h1>5480</h1>
                  <h1>Happy Traveler</h1>
                   
                 </div>
                 
                
                 
                 <div className='space-y-1'>
                   <img className='w-10 h-10  md:mx-20 mx-44 animate-bounce' src={photo3}/>
                  <h1>6,562</h1>
                  <h1>Awards winning</h1>
                 </div>
                 <div className='space-y-1'>
                   <img className='w-10 h-10  md:mx-20 mx-44 animate-bounce' src={photo4}/>
                  <h1>25</h1>
                  <h1>our experience</h1>
                 </div>
                 </div>
                 
              </div>
             

            </div>
          </div>
      
    </>
  )
}

export default Ourpackages
