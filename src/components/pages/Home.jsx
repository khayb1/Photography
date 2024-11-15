import React from "react";
import "../pages/Home.css"
export const Home = () => {
  return (
  
  <>
<div className="relative h-screen flex items-center justify-center space-x-10 bg-cover bg-center hero px-8 " style={{background: "./"}} >

      {/* Content */}
      <div className="relative text-center  p-6 max-w-3xl z">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Capture Life's Beautiful Moments</h1>
        <p className="text-lg md:text-xl mb-6">
          Professional photography services for all occasions. Creating memories that last a lifetime.
        </p>
        <a href="gallery" className="inline-block px-3 py-3 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded transition">
          View Portfolio
        </a>
      </div>

        <div className="flex items-center justify-center h-90">
        <img
        src="src\hero image.png" 
        alt="Photography img"
        className="w-100 h-90 "
      />
        </div>
    </div>
    </>  
  )
};
