import React from "react";

function Plan() {
  return (
    <div className="bg-[#212124] text-white py-6">
      <div className=" text-center mx-auto pt-10 pb-12">
        <h1 className="text-6xl font-bold pt-2 pb-4">
          Start building for free, then <br /> add a plan to go live
        </h1>
        <p className="text-xl py-2">
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt <br /> mollit laborum — semper quis lectus nulla.
        </p>
      </div>
      <div className="w-[80%] mx-auto flex justify-between gap-5 px-4 pb-14">
        <div className="w-[23%]">
          <h4 className="text-xl font-semibold py-4">All plans include:</h4>
          <p className="flex text-md text-gray-400 py-1 gap-1">
            <svg
              class="w-4 "
              fill="aqua"
              viewBox="0 0 12 12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
            </svg>
            Unlimited domains
          </p>
          <p className="flex text-md text-gray-400 py-1 gap-1">
            <svg
              class=" w-4 "
              fill="aqua"
              viewBox="0 0 12 12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
            </svg>
            Unlimited web pages
          </p>
          <p className="flex text-md text-gray-400 py-1 gap-1">
            <svg
              class=" w-4 "
              fill="aqua"
              viewBox="0 0 12 12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
            </svg>
            Conversion analytics
          </p>
          <p className="flex text-md text-gray-400 py-1 gap-1">
            <svg
              class=" w-4 "
              fill="aqua"
              viewBox="0 0 12 12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
            </svg>
            A/B testing
          </p>
          <p className="flex text-md text-gray-400 py-1 gap-1">
            <svg
              class=" w-4 "
              fill="aqua"
              viewBox="0 0 12 12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
            </svg>
            Exclusive channels
          </p>
          <p className="flex text-md text-gray-400 py-1 gap-1">
            <svg
              class=" w-4 "
              fill="aqua"
              viewBox="0 0 12 12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
            </svg>
            Free resources
          </p>
          <p className="flex text-md text-gray-400 py-1 gap-1">
            <svg
              class=" w-4 "
              fill="aqua"
              viewBox="0 0 12 12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
            </svg>
            Landing page builder
          </p>
          <p className="flex text-md text-gray-400 py-1 gap-1">
            <svg
              class=" w-4 "
              fill="aqua"
              viewBox="0 0 12 12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
            </svg>
            Smart forms and reports
          </p>
        </div>
        <div className="w-[23%] bg-white text-black flex flex-col justify-between dark:text-white dark:bg-[#2e2e33] border-2 border-[#2e2e33] dark:hover:border-[#3abab4]">
          <div className="w-[75%] mx-auto mb-[138px]">
            <div className="flex justify-between my-2">
              <h5 className="text-2xl font-semibold py-1">Yearly</h5>
              <p className="my-2  bg-teal-200 text-teal-600 rounded-2xl px-2">
                -40%
              </p>
            </div>
            <div className="flex my-2">
              <p className="text-gray-500 text-2xl font-bold mt-auto">$</p>
              <h1 className="text-5xl font-bold">27</h1>
              <p className="text-gray-500 text-lg  mt-auto">/billedyearly</p>
            </div>
            <div className="text-gray-500">
              <p>— Lorem ipsum dolor amet sit consect adipiscing.</p>
            </div>
          </div>
          <div className="mx-auto mb-6">
            <button className="px-14 py-2 text-white font-semibold bg-[#9f7aea] hover:bg-[#3abab4]">
              GO Premium
            </button>
          </div>
        </div>
        <div className="w-[23%] bg-white text-black flex flex-col justify-between dark:text-white dark:bg-[#2e2e33] border-2 border-[#2e2e33] dark:hover:border-[#3abab4]">
          <div className="w-[75%] mx-auto mb-[138px]">
            <div className="flex justify-between my-2">
              <h5 className="text-2xl font-semibold py-1">Monthly</h5>
              
            </div>
            <div className="flex my-2">
              <p className="text-gray-500 text-2xl font-bold mt-auto">$</p>
              <h1 className="text-5xl font-bold">47</h1>
              <p className="text-gray-500 text-lg  mt-auto">/billedyearly</p>
            </div>
            <div className="text-gray-500">
              <p>— Lorem ipsum dolor amet sit consect adipiscing.</p>
            </div>
          </div>
          <div className="mx-auto mb-6">
            <button className="px-14 py-2 text-white font-semibold bg-[#9f7aea] hover:bg-[#3abab4]">
              GO Premium
            </button>
          </div>
        </div>
        <div className="w-[23%] bg-white text-black flex flex-col justify-between dark:text-white dark:bg-[#2e2e33] border-2 border-[#2e2e33] dark:hover:border-[#3abab4]">
          <div className="w-[75%] mx-auto mb-[138px]">
            <div className="flex justify-between my-2">
              <h5 className="text-2xl font-semibold py-1">Lifetime</h5>
            </div>
            <div className="flex my-2">
              <p className="text-gray-500 text-2xl font-bold mt-auto">$</p>
              <h1 className="text-5xl font-bold">127</h1>
              <p className="text-gray-500 text-lg  mt-auto">/one-time</p>
            </div>
            <div className="text-gray-500">
              <p>— Lorem ipsum dolor amet sit consect adipiscing.</p>
            </div>
          </div>
          <div className="mx-auto mb-6">
            <button className="px-14 py-2 text-white font-semibold bg-[#9f7aea] hover:bg-[#3abab4]">
              GO Premium
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Plan;
