import React from "react";
import {
    MagnifyingGlassIcon,
  } from '@heroicons/react/24/outline'
const Hero = () => {
  return (
    <div
      className="mx-auto flex max-w-5xl items-center justify-between p-6 lg:px-8 place-content-center place-items-center bg-[url('/Hero-1.jpg')] bg-cover bg-no-repeat sm:bg-none"
      aria-label="Global"
    >
      <div className="grid grid-cols-1 gap-0 sm:grid-cols-2 ">
   {/* left side */}
   <div>
        {/* tab */}
        <div className="flex space-x-10">
          <div>
            <h1 className="text-red-500 text-[28px] font-bold ">850+</h1>
            <p>Property</p>
            <p>Listings</p>
          </div>
          <div>
            <h1 className="text-red-500 text-[28px] font-bold ">110+</h1>
            <p>Esteemed</p>
            <p>Agents</p>
          </div>
          <div>
            <h1 className="text-red-500 text-[28px] font-bold ">958+</h1>
            <p>Regular</p>
            <p>Clients</p>
          </div>
        </div>
        {/* content */}
        <div className="relative   bg-black w-[19.5rem] h-[18rem] max-w-none rounded-se-[3rem]  shadow-xl ring-1 ring-gray-400/10 sm:w-[27rem] sm:h-[20rem] mt-5 md:-ml-4 lg:-ml-0">
          <h1 className="relative text-white max-w-sm mx-5 font-bold text-2xl md:leading-10 pt-8 md:text-[40px]">CREATING BLISSFUL PROPERTY SEARCH IS OUR SPECIALITY</h1>
          <p className="text-white/80 mx-5 text-sm mt-3.5 max-w-sm">with a lot of experience we will help you shortlist the Properties you want</p>

          {/* input */}
          <div>

      <div className="relative mt-2 max-w-md  ml-5">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <span className="text-gray-500 "><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>
</span>
        </div>
        <input
          type="text"
          name="price"
          id="price"
          className="block w-[18.5rem] sm:w-[30rem] bg-gray-200 mt-5 h-12 sm:h-16 z-10 border-0 py-1.5 pl-10 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="Search by project,street name, area"
        />
        <div className="absolute inset-y-0 right-0 sm:-right-10 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
</svg>

<button className="bg-red-600 p-2 text-white ml-3">
    search
</button>

        </div>
      </div>
    </div>
        </div>
      </div>

      <div className=" hidden sm:flex space-x-40 relative">
        <img src="/Hero-1.jpg" alt="" className="h-[28.1rem] w-[18rem] absolute inset-0  -left-40 -z-10" />
        <img src="/Hero-1.jpg" alt="h-[28.1rem]  " />
      </div>
      <div>
      
      </div>
      </div>
   

    </div>
  );
};

export default Hero;
