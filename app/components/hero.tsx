import React from "react";

function Hero() {
  return (
    <div className="">
      <div className="flex flex-col justify-center items-center px-2">
        <p className="mt-14 max-w-3xl mx-auto text-center text-md text-gray-500">
          SEE THE WORLD FOR LESS!
        </p>
        <br />
        <h3 className="text-6xl md:text-7xl font-black text-center">
          Extraordinary Cars
        </h3>
        <p className="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-500">
          Save up to 50% on the best attractions, tours and activities with
          Havezic
        </p>
      </div>
      <div className="flex mt-8 gap-2 justify-center items-center">
        <button className="btn text-lg bg-[#2167f1] text-white ">Rent a Car</button>
        <button className="btn text-lg btn-warning  w-28">Taxi</button>
        <button className="btn text-lg bg-indigo-600 text-white  w-28">Toure</button>
      </div>
      <div>
        
      </div>
    </div>
  );
}

export default Hero;
