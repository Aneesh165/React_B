import React from "react";

function Navbar() {
  return (
    <div className="flex justify-between mx-9 my-5">
      <div className="text-3xl font-bold">NIKE</div>
      <div className="text-xl pt-2 font-bold text-gray-600 flex justify-between gap-8">
        <div>MENU</div>
        <div>LOCATION</div>
        <div>ABOUT</div>
        <div>CONTACT</div>
      </div>
      <div>
        <button className="border-2 border-red-500 text-red-500 font-semibold py-2 px-6 rounded-lg hover:bg-red-500 hover:text-white transition duration-300 ease-in-out transform hover:scale-105">
          Login
        </button>
      </div>
    </div>
  );
}

export default Navbar;
