import React, { useState } from "react";

function Home() {
  const [modalExpanded, setModalExpanded] = useState(false);

  return (
    <>
      <div className="w-[80%] h-[690px] mx-auto mt-28 flex justify-between ">
        <div className="w-[60%] h-[680px] pl-6 flex flex-col mt-6 pt-6">
          <div className="w-[90%] ml-8 mt-16 py-4 text-black dark:text-white">
            <h1 className="text-8xl font-bold">
              Your website, <br /> reimagined
            </h1>
          </div>
          <div className="pl-8 py-4 text-gray-700 dark:text-gray-500">
            <p className="text-[1.4rem]">
              Our landing page template works on all devices, so you only have{" "}
              <br /> to set it up once, and get beautiful results forever.
            </p>
          </div>
          <div className="flex gap-4 py-2 ml-8">
            <div className="">
              <input
                className="w-[280px] h-[50px] p-3 border-2 text-lg pl-6 border-gray-400 dark:bg-gray-700  rounded"
                type="text"
                placeholder="Phone number"
              />
            </div>
            <div>
              <button className="bg-[#3abab4] text-white text-lg font-semibold py-3 px-6 rounded transition-all hover:bg-blue-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-300">
                Request Code
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-1 mt-6 pl-8 dark:text-gray-500 text-gray-700">
            <div className="flex gap-2">
              <div className="w-[22px] pt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  id="Right"
                >
                  <path
                    fill="none"
                    stroke="#4BE494"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M2.01 7.755 5.297 12l8.691-6.991"
                    class="colorStroke25b39e svgStroke"
                  ></path>
                </svg>
              </div>
              <p className="text-lg">
                Lorem ipsum is placeholder text commonly.
              </p>
            </div>
            <div className="flex gap-2">
              <div className="w-[22px]  pt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  id="Right"
                >
                  <path
                    fill="none"
                    stroke="#4BE494"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M2.01 7.755 5.297 12l8.691-6.991"
                    class="colorStroke25b39e svgStroke"
                  ></path>
                </svg>
              </div>
              <p className="text-lg">Excepteur sint occaecat cupidatat.</p>
            </div>
            <div className="flex gap-2">
              <div className="w-[22px] pt-1 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  id="Right"
                >
                  <path
                    fill="none"
                    stroke="#4BE494"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M2.01 7.755 5.297 12l8.691-6.991"
                    class="colorStroke25b39e svgStroke"
                  ></path>
                </svg>
              </div>
              <p className="text-lg">
                Lorem ipsum is placeholder text commonly.
              </p>
            </div>
          </div>
        </div>
        <div className="relative w-[40%] h-[680px] flex justify-end overflow-hidden">
          <div className="relative w-[80%]">
            {/*  image inside the phone */}
            <img
              className="absolute top-0 left-4 w-[83%] h-full object-cover rounded-[70px] "
              src="https://preview.cruip.com/appy/images/mockup-image-01.jpg"
              alt="Features illustration"
            />

            {/* iPhone  image */}
            <img
              className="relative z-10 h-full"
              src="https://preview.cruip.com/appy/images/iphone-mockup.png"
              alt="iPhone mockup"
            />
          </div>
        </div>
      </div>
      <div className="mt-20 pb-12 flex justify-center gap-8 text-center ">
        <div className="bg-white dark:bg-gray-700 text-black dark:text-white py-10 px-16 shadow-md shadow-gray-300 dark:shadow-gray-700">
          <h2 className="text-4xl font-bold mb-2">2.4M</h2>
          <p className="text-lg">Days turn around</p>
        </div>
        <div className="bg-white dark:bg-gray-700 text-black dark:text-white py-10 px-16 shadow-md shadow-gray-300 dark:shadow-gray-700">
          <h2 className="text-4xl font-bold mb-2">7M</h2>
          <p className="text-lg">Days turn around</p>
        </div>
        <div className="bg-white dark:bg-gray-700 text-black dark:text-white py-10 px-16 shadow-md shadow-gray-300 dark:shadow-gray-700">
          <h2 className="text-4xl font-bold mb-2">7.4%</h2>
          <p className="text-lg">Days turn around</p>
        </div>
        <div className="bg-white dark:bg-gray-700 text-black dark:text-white py-10 px-16 shadow-md shadow-gray-300 dark:shadow-gray-700">
          <h2 className="text-4xl font-bold mb-2">49K</h2>
          <p className="text-lg">Days turn around</p>
        </div>
      </div>
      <div className="p-6"></div>
      <hr />
    </>
  );
}

export default Home;
