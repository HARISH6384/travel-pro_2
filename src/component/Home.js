import React from 'react'
import photo from '../images/1.png'
import photo2 from '../images/2.png'
import photo3 from '../images/3.png'
import photo4 from '../images/Rec1.png'
import photo5 from '../images/Rec2.png'
import photo6 from '../images/Rec3.png'
import photo7 from '../images/Rec4.png'
import photo8 from '../images/Rec5.png'
import photo10 from '../images/t.png'
import photo11 from '../images/t2.png'
import photo12 from '../images/t3.png'
import photo13 from '../images/t4.png'
import photo14 from '../images/t5.png'
import photo15 from '../images/t5.png'
import photo16 from '../images/t6.png'
import photo17 from '../images/t7.png'
import photo18 from '../images/t8.png'
import photo26 from '../images/G1.png'
import photo27 from '../images/G2.png'
import photo28 from '../images/G3.png'
import photo29 from '../images/G4.png'
import photo30 from '../images/eli 2.png'
import './Home.css'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    < div className='body'>
    <div className='back'>
        <div  class='container-fluid items-center grid md:grid-cols-2 grid-cols-1 px-4 md:py-32 py-20 gap-10 ' >
            <div class='md:mx-10   text-center md:text-left space-y-5 '>
        <h1 class='text-3xl sm:text-4xl md:text-5xl     font-bold text-white '>Navigate your dreams explore without limits</h1>
        <p  class='text-base text-justify px-4 md:px-0  text-white font-bold  '>Discover a world of adventure with Compass. We transform travel from a simple trip into an unforgettable experience. Our expertly crafted tours and personalized itineraries unlock the most breathtaking destinations across the globe. </p>
         <li><Link className='border py-2 px-3 rounded-md bg-blue-700 text-white font-semibold' to='Book'>Book</Link></li>
        </div>
        </div>
        </div>
      


           <div class=' text-center mt-10 md:mt-28' >
          <h1 class='text-blue-300  font-bold text-xl sm:text-2xl md:text-3xl'>TOP DESTINATION</h1>
        </div>
        <div class='flex  flex-wrap  gap-3 justify-center px-3 mt-6 '>
          <h1 class='border-4  py-2 px-4 border-blue-500 rounded-2xl '>GOA</h1>
          <h1 class='border-4 py-2 px-4 border-blue-500 rounded-2xl '>PARIS</h1>
          <h1 class='border-4 py-2 px-4 border-blue-500 rounded-2xl '> THAILAND</h1>
           <h1 class='border-4 py-2 px-4 border-blue-500 rounded-2xl '>FRANCE</h1>
          <h1 class='border-4 py-2 px-4 border-blue-500 rounded-2xl '>NEW YORK</h1>
        </div>



          


               <div className='container-fulid rounded-md gap-3 flex-wrap justify-center flex mx-auto mt-10 '>
         <img src={photo4}  alt='photo4' class='w-[300px]  sm:w-[370px] h-[490px] sm:h-[560px] transform transition duration-500 ease-in-out hover:scale-105 animate-fade-in delay-300   '/>  
          
          <img src={photo5} alt='photo5' class='w-[300px] sm:w-[270px] h-52 sm:h-[280px]  transform transition duration-500 ease-in-out hover:scale-105 animate-fade-in delay-300 '/>
          <img src={photo6} alt='photo6' class='w-[300px] sm:w-[270px] h-52 sm:h-[280px] transform transition duration-500 ease-in-out hover:scale-105 animate-fade-in delay-300  '/>
          <img src={photo8} alt='photo8' class='w-[300px] sm:w-[370px] h-[490px] sm:h-[560px] transform transition duration-500 ease-in-out hover:scale-105 animate-fade-in delay-300 '/>
          

        </div>
        
        <div class=' relative  flex justify-center items-center gap-4'>  
          
          <img src={photo7} alt='photo7' class='w-[300px] rounded-2xl   h-[150px] sm:w-[559px]  sm:h-[270px]  relative  
           md:bottom-[270px] left-0.5 -bottom-4 sm:right-4 transform transition duration-500 ease-in-out hover:scale-105 animate-fade-in delay-300 '/>
        </div>
         
        
        
       
        
         {/* <div className='slider '>
          <div className=' px-4  md:px-8 py-4 '>

          

          <div className='co '>
  
          <div className='ro  '>
        
            <div className='co1 flex-1'>
            <img className='im ' src={photo10}  />
            </div>

             <div className='co2 flex-2'>
            <img className='im ' src={photo11} />
            </div >
            <div className='co3 flex-3'>
            <img className='im ' src={photo12}   />
            </div>
            <div className='ro'>
            <img className='im ' src={photo13}  />
            </div>
            <div className='ro'>
            <img className='im ' src={photo14} />
            </div>
            <div className='ro'>
            <img className='im ' src={photo15}  />
            </div>
            <div className='ro'>
            <img className='im ' src={photo16}  />
            </div>
            <div className='ro'>
            <img className='im ' src={photo17}  />
            </div>
            <div className='ro'>
             <img className='im ' src={photo18} />
             </div>
             </div>
             </div>
             </div> */}


          <div class='font-bold mt-10 text-blue-400 sm:text-4xl md:text-5xl text-center '> 
            <h1 class='mx-4  sm:mx-10'>How It Works</h1>
          </div>
          <div class='flex flex-col md:flex-row   items-center me-10 md:justify-between'>
              
          <div class='md:w-full    me-10 mt-10 text-blue-700 font-bold mx-20 space-y-10'>
            <div class='border rounded-2xl    bg-yellow-50 py-3  w-72   md:w-96 '> 
            <h1 class=' text-base sm:text-xl flex px-2 py-1'><span><img alt='i' className='w-10 pr-2 h-8' src={photo26}/></span>Find Your Destination</h1>
            <p class='text-black font-normal md:text-base text-xs leading-5 items-center px-12 text-justify gap-5 '>Discover the perfect getaway from our wide range of handpicked global destinations, tailored to your travel style.</p>
            </div>
            <div class='border rounded-2xl py-5 w-72 bg-yellow-50 md:w-96 '>
              <h1 class=' text-base  py-1 sm:text-xl flex px-2'> <span><img alt='c' className='w-10 pr-2 h-8' src={photo27}/></span>Book a Ticket</h1>
              <p class='text-black font-normal leading-5 md:text-base text-xs  px-12 gap-3 items-center text-justify '>Easily reserve flights,stays and experiences through our smooth and reliable booking system.</p>
            </div>
            <div class='border rounded-2xl w-72 py-8 bg-yellow-50  md:w-96 '>
              <h1 class=' text-base  sm:text-xl flex px-2'><span><img alt='o' className='w-10 pr-2 h-8' src={photo28}/></span>Make Payment</h1>
              <p class='text-black font-normal md:text-base leading-6 text-xs px-12 gap-3 items-center text-justify '> Enjoy secure,hassle-free payment options with instant confirmation.</p>
              </div>
              <div class='border rounded-2xl py-3 w-72 bg-yellow-50 md:w-96 '>
                <h1 class=' text-base py-1 sm:text-xl flex px-2'><sapn><img alt='n' className='w-10 pr-2 h-8' src={photo29}/> </sapn>Explore Destination</h1>
                <p class='text-black leading-5 font-normal px-12 md:text-base text-xs gap-3 items-center text-justify '> Dive into your journey with expert tips,local insights,and all the tools you need for a memorable adventure.</p>
              </div>
              
             
              
              </div>
              <div className='mt-10   px-28'>
               <img class='w-[400px]  h-[600px]' alt='photo20'  src={photo30}/>
               </div>

            
          </div>
          </div>
      
          


     










  )
}

export default Home
