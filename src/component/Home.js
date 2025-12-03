
import photo4 from '../images/Rec1.png'
import photo5 from '../images/Rec2.png'
import photo6 from '../images/Rec3.png'
import photo7 from '../images/Rec4.png'
import photo8 from '../images/Rec5.png'
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
<Link to="Book" className="inline-block bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-500 hover:to-blue-300 text-white font-semibold py-2 px-6 rounded-md transition">
            Book
          </Link>
        </div>
        </div>
        </div>
      


            <div className="text-center mt-20">
        <h2 className="text-blue-600 text-3xl font-bold">TOP DESTINATIONS</h2>
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          {['GOA', 'PARIS', 'THAILAND', 'FRANCE', 'NEW YORK'].map((place) => (
            <div key={place} className="border-4 border-blue-300 text-black py-2 px-5 rounded-2xl hover:bg-blue-500 hover:text-white  transition cursor-pointer">
              {place}
            </div>
          ))}
        </div>
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


          <div className="text-center mt-20">
        <h2 className="text-blue-700 font-bold text-3xl md:text-5xl">How It Works</h2>
      </div>

      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 mt-10">
        
        <div className="flex flex-col space-y-8 md:space-y-10 text-blue-900 font-semibold max-w-md w-full">
          
          <div className="bg-yellow-100 p-5 rounded-2xl shadow-md">
            <h3 className="flex items-center text-lg sm:text-xl mb-2">
              <img src={photo26} alt="Icon" className="w-8 h-8 mr-3" />
              Find Your Destination
            </h3>
            <p className="text-black text-sm sm:text-base text-justify">
              Discover the perfect getaway from our wide range of handpicked global destinations, tailored to your travel style.
            </p>
          </div>

          
          <div className="bg-yellow-100 p-5 rounded-2xl shadow-md">
            <h3 className="flex items-center text-lg sm:text-xl mb-2">
              <img src={photo27} alt="Icon" className="w-8 h-8 mr-3" />
              Book a Ticket
            </h3>
            <p className="text-black text-sm sm:text-base text-justify">
              Easily reserve flights, stays, and experiences through our smooth and reliable booking system.
            </p>
          </div>

          
          <div className="bg-yellow-100 p-5 rounded-2xl shadow-md">
            <h3 className="flex items-center text-lg sm:text-xl mb-2">
              <img src={photo28} alt="Icon" className="w-8 h-8 mr-3" />
              Make Payment
            </h3>
            <p className="text-black text-sm sm:text-base text-justify">
              Enjoy secure, hassle-free payment options with instant confirmation.
            </p>
          </div>

    
          <div className="bg-yellow-100 p-5 rounded-2xl shadow-md">
            <h3 className="flex items-center text-lg sm:text-xl mb-2">
              <img src={photo29} alt="Icon" className="w-8 h-8 mr-3" />
              Explore Destination
            </h3>
            <p className="text-black text-sm sm:text-base text-justify">
              Dive into your journey with expert tips, local insights, and all the tools you need for a memorable adventure.
            </p>
          </div>
        </div>

    
        <div className="mt-10 md:mt-0 md:ml-10">
          <img src={photo30} alt="Illustration" className="w-[300px] md:w-[400px] h-[500px] md:h-[600px] object-cover rounded-2xl shadow-lg" />
        </div>
      </div>
    </div>
  );
};

export default Home;