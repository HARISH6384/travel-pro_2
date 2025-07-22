import React from 'react'
import photo19 from '../images/man1.jpg'
import photo20 from '../images/man2.jpg'
import photo21 from '../images/man3.jpg'
import photo22 from '../images/i1.png'
import photo23 from '../images/i2.png'
import photo24 from '../images/i3.png'
import photo25 from '../images/i4.png'
import photo9 from '../images/why.png'
import photo10 from '../images/pac1.png'
import photo11 from '../images/pac2.png'


const About = () => {
  return (
    <>
    <div>


       <div class='px-5 mt-10  '>
            <h1 class='text-5xl font-bold text-blue-400'>WHY CHOOSE US ?</h1>
            <p></p>
          </div>
        <div class=' flex  flex-col md:flex-row item-center gap-8 mt-10'>
          
          <img src={photo9} class='md:w-[500px] w-full  h-auto object-cover   '/>
          <div class='mx-32 space-y-6 text-justify  '> 
            <h1 class='md:text-3xl text-2xl font-serif flex items-center gap-2 text-blue-700'><span class='mx-5 w-8 h-8 '><img className='w-6 h-6' src={photo22}/> </span> our service</h1>
            <p class='md:mx-32 md:text-justif font-bold'>At Compass, we don’t just book trips - we craft unforgettable journeys.</p>
            <h1 class='md:text-3xl text-2xl  gap-2 md:mt-10 font-serif flex items-center text-blue-700'> <span class='mx-5' ><img src={photo23} /> </span> Flight & Travel Bookings</h1>
            <p class='md:mx-32 font-bold md:text-justify '> We handle all your travel arrangements — flights, trains, cruises, and more.</p>
            <h1 class='md:text-3xl  items-center  text-2xl md:mt-10 gap-2 font-serif flex text-blue-700'> <span class='mx-5'><img src={photo24}/> </span> Group Tours</h1>
            <p class='md:text-justify md:mx-32 font-bold'>Whether it's a destination wedding, corporate retreat, or school trip</p>
            <h1 class='md:text-3xl mt-10 gap-2 text-2xl item-center font-serif flex text-blue-700'> <span class='mx-5'><img src={photo25}/> </span> 24/7 Travel support</h1>
             <p class='md:text-justify md:mx-32 font-bold'> Round-the-clock customer service to assist you before, during, and after your trip.</p>
          </div>
        </div>
      
          <div class='px-5 mt-32'>
             <h1 class='font-bold text-3xl text-blue-400  mb-10 text-center'>TESTIMONIALS</h1>
          </div>
          <div class=' container-fulid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6    text-justify'>
            <div class='border shadow-2xl  py-6 px-6   rounded-xl '>
            <p class='items-center mb-4 gap-2' > <span class='flex gap-2'><img src={photo19} class='w-10 h-10 mb-5  rounded-full '
             /> Vijay </span>"Compass made my dream beach vacation a reality! From the moment I booked my trip to the moment my toes hit the sand, everything was smooth and stress-free. The resort was exactly as promised—breath taking views, crystal-clear water, and peaceful vibes. I loved how easy the whole experience was. Already planning my next tropical escape!" </p>
            <p class='mt-4 '>⭐⭐⭐</p>
            </div> 
           <div class='border shadow-2xl py-6  px-6 rounded-xl  text-justify'>
            <p className='item-center  gap-2 mb-4' ><span class='flex gap-2 ' ><img src={photo20}  class='w-10 h-10 mb-5 rounded-full '/>Jessica
            </span>you’re into thrilling adventures like me, Compass is the perfect travel partner. I booked a trekking package to Himachal and it was incredible—well-organized, safe, and packed with adrenaline! The guides were super knowledgeable, and the views from the top were worth every step. Compass took care of the logistics, so I could focus on the experience!"</p>
           <p class='mt-4 '>⭐⭐⭐⭐</p>
           </div>
           <div class='border shadow-2xl py-6 px-6   rounded-xl'>
            <p className='items-center mb-2 gap-2 '><span class='flex gap-2'><img src={photo21} class='w-10 h-10 mb-5  rounded-full '/>Joseph
            </span>"Traveling with kids can be stressful, but Compass made it a breeze! We booked our family holiday to Singapore, and every detail was thoughtfully planned—from kid-friendly hotels to fun-packed attractions like Universal Studios and the Night Safari. The itinerary was balanced and flexible, which made the trip enjoyable for all of us.  </p>
          <p class='mt-4 '>⭐⭐</p>
          </div>
          </div>

    </div>

   
      <div class='flex items-center  gap-8 flex-col-reverse md:flex-row justify-around mt-32' >
        
        <p class='text-justify max-w-xl  text-xl tracking-widest font-serif'>At Compass, we believe that true travel is found in the finer details—the charm of your stay, the rhythm of your journey, and the people who shape your experience. With deep local expertise and a global network, we aim to craft travel moments that feel effortless, immersive, and truly exceptional.
Every itinerary is thoughtfully designed to reveal the soul of each destination—from hidden treasures and cultural insights to smooth transitions and personalized touches. We don’t just plan trips—we create journeys that stay with you long after you return. </p>
      <img class='w-[700px] h-80' src={photo10}/>
      </div>
      <div></div>
?      <div class='flex mt-10 flex-col md:flex-row items-center gap-8 justify-around'>
        
         <img class='w-[700px]  h-80' src={photo11}/>
        
        <p class='text-justify  max-w-xl text-xl tracking-widest font-serif'>At Compass, we are dedicated to crafting immersive, meaningful travel experiences through thoughtfully curated small group tours and personalized holidays across the globe. Guided by deep destination knowledge and a commitment to responsible travel, we design every itinerary with care

Our mission goes beyond creating unforgettable journeys—we aim to enrich the lives of our travelers while supporting the people, cultures, and environments of the places we explore. Every trip is a step toward deeper connection and lasting impact.</p>
       
      </div>
    
      
    </>
  )
}

export default About
