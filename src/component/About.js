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
import './About.css'


const About = () => {
  return (
    <>
    <div>
    <div className="px-5 mt-16">
        <h1 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-300">
          WHY CHOOSE US?
        </h1>
      </div>

      <div className="flex flex-col md:flex-row justify-around gap-10 mt-10 px-4 items-center">
        <img src={photo9} alt="Why Compass" className="w-[350px] md:w-[500px] rounded-lg shadow-lg" />
        <div className="space-y-6 text-justify">
          <div>
            <h2 className="text-2xl md:text-3xl text-blue-700 font-serif flex items-center gap-3">
              <img src={photo22} alt="icon" className="w-6 h-6" />
              Our Service
            </h2>
            <p className="text-sm md:text-lg font-semibold px-2 md:px-8">
              At Compass, we don’t just book trips — we craft unforgettable journeys.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl text-blue-700 font-serif flex items-center gap-3">
              <img src={photo23} alt="icon" className="w-6 h-6" />
              Flight & Travel Bookings
            </h2>
            <p className="text-sm md:text-lg font-semibold px-2 md:px-8">
              We handle all your travel arrangements — flights, trains, cruises, and more.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl text-blue-700 font-serif flex items-center gap-3">
              <img src={photo24} alt="icon" className="w-6 h-6" />
              Group Tours
            </h2>
            <p className="text-sm md:text-lg font-semibold px-2 md:px-8">
              Whether it's a destination wedding, corporate retreat, or school trip.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl text-blue-700 font-serif flex items-center gap-3">
              <img src={photo25} alt="icon" className="w-6 h-6" />
              24/7 Travel Support
            </h2>
            <p className="text-sm md:text-lg font-semibold px-2 md:px-8">
              Round-the-clock customer service to assist you before, during, and after your trip.
            </p>
          </div>
        </div>
      </div>
      
          <div class='px-5 mt-32'>
             <h1 class='font-bold text-3xl text-blue-400  mb-10 text-center'>TESTIMONIALS</h1>
          </div>
          <div class=' container-fulid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6    text-justify'>
           <div className='card'>
            <div class=' shawdow-2xl   rounded-xl '>
            <p className='small-desc md:line-clamp-none line-clamp-6' > <span class='flex gap-2'><img src={photo19} alt='photo19' class='w-10 h-10 mb-5  rounded-full '
             /> Vijay </span>"Compass made my dream beach vacation a reality! From the moment I booked my trip to the moment my toes hit the sand, everything was smooth and stress-free. The resort was exactly as promised—breath taking views, crystal-clear water, and peaceful vibes. I loved how easy the whole experience was. Already planning my next tropical escape!" </p>
            <p class='mt-4 '>⭐⭐⭐</p>
            <div className='go-corner'>
              <div className='go-arrow'></div>
            </div>
            </div >

            </div> 
            <div className='card shawdow-2xl  '>
           <div class='rounded-xl '>
            <p className=' small-desc md:line-clamp-none line-clamp-6' ><span class='flex gap-2 ' ><img src={photo20} alt='photo20'  class='w-10 h-10 mb-5 rounded-full '/>Jessica
            </span>you’re into thrilling adventures like me, Compass is the perfect travel partner. I booked a trekking package to Himachal and it was incredible—well-organized, safe, and packed with adrenaline! The guides were super knowledgeable, and the views from the top were worth every step. Compass took care of the logistics, so I could focus on the experience!"</p>
           <p class='mt-4 '>⭐⭐⭐⭐</p>
            <div className='go-corner'>
              <div className='go-arrow'></div>
            </div>
           </div>
           </div>
            <div className='card shawdow-2xl  '>
           <div class='   rounded-xl'>
            <p className='small-desc items-center md:line-clamp-none line-clamp-6 mb-2 gap-2 '><span class='flex gap-2'><img src={photo21} alt='photo21' class='w-10 h-10 mb-5  rounded-full '/>Joseph
            </span>"Traveling with kids can be stressful, but Compass made it a breeze! We booked our family holiday to Singapore, and every detail was thoughtfully planned—from kid-friendly hotels to fun-packed attractions like Universal Studios and the Night Safari. The itinerary was balanced and flexible, which made the trip enjoyable for all of us.  </p>
          <p class=' mt-4 '>⭐⭐</p>
           <div className='go-corner'>
              <div className='go-arrow'></div>
            </div>
          </div>
          </div>
          </div>

    </div>

   
      <div className="flex flex-col-reverse md:flex-row justify-around items-center mt-32 px-4 gap-8">
        <p className="text-justify w-[350px] md:w-[550px] text-xl font-serif tracking-wider">
          At Compass, we believe that true travel is found in the finer details—the charm of your stay, the rhythm of your journey, and the people who shape your experience. With deep local expertise and a global network, we aim to craft travel moments that feel effortless, immersive, and truly exceptional.
        </p>
        <img src={photo10} alt="About Philosophy" className="w-[350px] md:w-[700px] md:h-80 object-cover rounded-lg shadow-lg" />
      </div>


      <div className="flex flex-col md:flex-row justify-around items-center mt-10 px-4 gap-8">
        <img src={photo11} alt="Our Mission" className="w-[350px] md:w-[700px] md:h-80 object-cover rounded-lg shadow-lg" />
        <p className="text-justify w-[350px] md:w-[550px] text-xl font-serif tracking-wider">
          At Compass, we are dedicated to crafting immersive, meaningful travel experiences through thoughtfully curated small group tours and personalized holidays across the globe. Guided by deep destination knowledge and a commitment to responsible travel, we design every itinerary with care. Our mission goes beyond unforgettable journeys—we aim to enrich the lives of travelers and support the places we explore.
        </p>
      </div>
    </>
  )
}

export default About
