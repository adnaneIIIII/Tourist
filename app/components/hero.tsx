import React from "react";
import Image from "next/image";

function Hero() {
  return (
    <div className="">
      <div className="flex flex-col justify-center items-center px-2">
        <p className="mt-8 max-w-3xl mx-auto text-center text-md text-gray-500">
          SEE THE WORLD FOR LESS!
        </p>
        <br />
        <h3 className="text-6xl md:text-7xl font-black text-center">
          Extraordinary Cars
        </h3>
        <p className="mt-6 max-w-3xl mx-auto text-center text-xl text-gray-500">
          Save up to 50% on the best attractions, tours and activities with
          Havezic
        </p>
      </div>
      <div className="flex mt-8 gap-2 justify-center items-center">
      <button className="btn text-lg btn-warning  w-28">Taxi</button>

        <button className="btn text-lg bg-[#2167f1] hover:bg-blue-800 text-white ">
          Rent a Car
        </button>
        <button className="btn text-lg bg-cyan-500 hover:bg-cyan-600 text-white  w-28">
          Tour
        </button>
      </div>
      <div>
        <div className="hidden md:flex justify-center mt-12 w-full">
          <Image
            src="/heromd.jpg"
            alt="hero"
            width={1920}
            height={1080}
            className="w-full md:w-3/5"
          />
        </div>
        <div className=" md:hidden justify-center mt-10  w-full">
          <Image
            src="/herosm.jpg"
            alt="hero one"
            width={1920}
            height={1080}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
