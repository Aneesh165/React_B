import React from "react";

function Carousel() {
  return (<>
    <div className="flex w-[80%] mx-auto pb-4 mt-16">
      <div className="flex flex-col text-center mx-auto ">
        <h1 className="text-6xl font-bold pb-4 ">
          From rough design files, to <br /> powerful products
        </h1>
        <p className="my-4 text-xl font  text-slate-800 dark:text-slate-100">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat <br /> nulla pariatur excepteur sint occaecat
          cupidatat.
        </p>
      </div>
    </div>
    <div className="using"></div>
    </>
  );
}

export default Carousel;
