import React from "react";

function Build() {
  return (
    <div className="text-center dark:bg-[#1f1f22]">
      <div>
        <h1 className="font-bold text-6xl pt-12">
          Build and style every <br /> element to perfection
        </h1>
        <p className="text-xl py-4 text-gray-700">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat <br />
          nulla pariatur excepteur sint occaecat cupidatat.
        </p>
      </div>
      <div className="relative w-full flex justify-between  mx-auto pb-20">
        <div className="relative w-[33%] flex flex-col items-end mt-14 pt-4">
          <div className="text-white bg-[#4fd1c5] w-12 h-12 flex items-center justify-center rounded-full absolute top-0 right-36">
            1
          </div>
          <div className="relative mt-16 pb-8 hover:scale-105 transition-transform duration-300">
            <img
              className="relative w-[346px] z-40"
              src="https://preview.cruip.com/appy/images/iphone-mockup.png"
              alt="iPhone mockup"
              aria-hidden="true"
            />

            <img
              className="absolute top-5 left-6 z-0"
              src="https://preview.cruip.com/appy/images/mockup-image-02.jpg"
              width="295"
              alt="App screen 02"
            />
          </div>
        </div>
        <div className="relative w-[33%] flex flex-col items-center mt-14 pt-4">
          <div className="text-white bg-[#4fd1c5] w-12 h-12 flex items-center justify-center rounded-full absolute top-0 ">
            2
          </div>
          <div className="relative mt-16 pb-8 hover:scale-105 transition-transform duration-300">
            <img
              className="relative w-[346px] z-40"
              src="https://preview.cruip.com/appy/images/iphone-mockup.png"
              alt="iPhone mockup"
              aria-hidden="true"
            />

            <img
              className="absolute top-5 left-6 z-0"
              src="https://preview.cruip.com/appy/images/mockup-image-03.jpg"
              width="295"
              alt="App screen 03"
            />
          </div>
        </div>
        <div className="relative w-[33%] flex flex-col items-start mt-14 pt-4">
          <div className="text-white bg-[#4fd1c5] w-12 h-12 flex items-center justify-center rounded-full absolute top-0 left-36">
            3
          </div>
          <div className="relative mt-16 pb-8 hover:scale-105 transition-transform duration-300">
            <img
              className="relative w-[346px] z-40"
              src="https://preview.cruip.com/appy/images/iphone-mockup.png"
              alt="iPhone mockup"
              aria-hidden="true"
            />

            <img
              className="absolute top-5 left-6 z-0"
              src="https://preview.cruip.com/appy/images/mockup-image-04.jpg"
              width="295"
              alt="App screen 04"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Build;
