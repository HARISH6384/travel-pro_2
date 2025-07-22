import React, { useState } from 'react'

const Book = () => {
    
 
  const [bookingData, setBookingData] = useState({
    destination: '',
    departureDate: '',
    returnDate: '',
    travelers: 1,
  });

  const handleChange = (e) => {
    setBookingData({ ...bookingData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking Info:', bookingData);
    // You can send this to a backend or display a confirmation message
  };
  return (
 
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-sky-300 flex items-center justify-center p-4">
      <div className="w-full max-w-xl bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">Plan Your Trip<span class='animate-bounce'> 🌴</span>  </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700">Destination</label>
            <input
              type="text"
              name="destination"
              value={bookingData.destination}
              onChange={handleChange}
              required
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              placeholder="e.g., Paris, Tokyo, Bali"
            />
          </div>

          <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">Departure Date</label>
              <input
                type="date"
                name="departureDate"
                value={bookingData.departureDate}
                onChange={handleChange}
                required
                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">Return Date</label>
              <input
                type="date"
                name="returnDate"
                value={bookingData.returnDate}
                onChange={handleChange}
                required
                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Number of Travelers</label>
            <input
              type="number"
              name="travelers"
              min="1"
              value={bookingData.travelers}
              onChange={handleChange}
              required
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              placeholder="1"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
          >
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Book
