import React from "react";

function Home() {
  return (
    <div className="w-[80%] h-[550px] mt-14 mx-auto flex gap-5">
      <div className="w-[50%]">
        <h1 className="text-8xl mb-3 font-bold">
          YOUR FEET <br /> DESERVE <br /> THE BEST
        </h1>
        <p className="text-xl pl-4 my-4 text-gray-500">
          Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Saepe,
          possimus! Porro <br /> earum corrupti recusandae ab quibusdam <br />{" "}
          dolores voluptatem, aliquid .
        </p>
        <div className="flex gap-14 ml-5 mt-6">
          <button className="bg-red-500 text-white text-xl font-semibold px-7 py-2 rounded-md hover:bg-red-600 hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
            Shop Now
          </button>
          <button className="border-2 border-gray-600 text-gray-600 text-xl font-semibold py-2 px-7 rounded hover:bg-gray-600 hover:text-white hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
            Category
          </button>
        </div>
      </div>
      <div className="w-[49%]">
        <img
          src="../src/assets/home.jpg"
          className="w-[100%] h-[100%] rounded-lg hover:opacity-90 hover:shadow-lg transition duration-500 ease-in-out transform hover:scale-105 hover:rotate-[12deg]"
          alt="Home"
        />
      </div>
    </div>
  );
}

export default Home;
