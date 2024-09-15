import React from "react";

function Navbar({ darkMode, setDarkMode }) {
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="flex justify-between items-center py-4 px-8 mx-auto max-w-7xl">
  <div className="flex items-center space-x-16">
    <a href="index.html" aria-label="Cruip" className="w-12 h-12">
      <svg
        className="w-full h-full"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            x1="26%"
            y1="100%"
            x2="100%"
            y2="100%"
            id="logo_a"
          >
            <stop stopColor="#3ABAB4" offset="0%"></stop>
            <stop stopColor="#7F9CF5" offset="100%"></stop>
          </linearGradient>
          <linearGradient
            x1="26%"
            y1="100%"
            x2="100%"
            y2="100%"
            id="logo_b"
          >
            <stop stopColor="#3ABAB4" offset="0%"></stop>
            <stop stopColor="#3ABAB4" stopOpacity="0" offset="100%"></stop>
          </linearGradient>
        </defs>
        <path
          d="M32 16h-8a8 8 0 10-16 0H0C0 7.163 7.163 0 16 0s16 7.163 16 16z"
          fill="url(#logo_a)"
        ></path>
        <path
          d="M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16h8a8 8 0 1016 0h8z"
          fill="url(#logo_b)"
        ></path>
      </svg>
    </a>

    <nav className="hidden md:flex space-x-8 pt-1 pl-8 gap-2">
      <a href="#" className="font-semibold text-lg text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white">About</a>
      <a href="#" className="font-semibold text-lg text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white">Blog</a>
      <a href="#" className="font-semibold text-lg text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white">Testimonials</a>

      <div className="group relative inline-block">
        <div className="cursor-pointer font-semibold text-lg text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white">
          Resources 
        </div>
        <div className="absolute hidden group-hover:block dark:bg-gray-700 shadow-lg rounded-md w-40 mt-2 z-10">
          <a href="#" className="block px-4 py-2 ">Help Center</a>
          <a href="#" className="block px-4 py-2">404</a>
        </div>
      </div>
    </nav>
  </div>

<div className="form-switch relative inline-block w-[44px] h-[24px] align-middle select-none transition duration-200 ease-in">
  <input
    type="checkbox"
    name="light-switch"
    id="light-switch-mobile"
    className="absolute block w-[28px] h-[28px] rounded-full bg-white border-2 appearance-none cursor-pointer transition-transform duration-300 transform"
    checked={darkMode}
    onChange={toggleDarkMode}
    style={{ transform: darkMode ? 'translateX(20px)' : 'translateX(0)' }}
  />
  <label
    htmlFor="light-switch-mobile"
    className={`block overflow-hidden h-[28px] w-[48px] rounded-full cursor-pointer transition-colors duration-300 ${
      darkMode ? 'bg-sky-400' : 'bg-sky-400'
    }`}
  >
    <span
      className=""
      aria-hidden="true"
    >
       <svg
  className={`w-[49px] h-[28px] ${darkMode ? 'text-white' : 'text-black'}`}
  width="44"
  height="24"
  viewBox="0 0 44 24"
  xmlns="http://www.w3.org/2000/svg"
>
  <g fill="currentColor" fillRule="nonzero" opacity=".88">
    <path d="M32 8a.5.5 0 00.5-.5v-1a.5.5 0 10-1 0v1a.5.5 0 00.5.5zM35.182 9.318a.5.5 0 00.354-.147l.707-.707a.5.5 0 00-.707-.707l-.707.707a.5.5 0 00.353.854zM37.5 11.5h-1a.5.5 0 100 1h1a.5.5 0 100-1zM35.536 14.829a.5.5 0 00-.707.707l.707.707a.5.5 0 00.707-.707l-.707-.707zM32 16a.5.5 0 00-.5.5v1a.5.5 0 101 0v-1a.5.5 0 00-.5-.5zM28.464 14.829l-.707.707a.5.5 0 00.707.707l.707-.707a.5.5 0 00-.707-.707zM28 12a.5.5 0 00-.5-.5h-1a.5.5 0 100 1h1a.5.5 0 00.5-.5zM28.464 9.171a.5.5 0 00.707-.707l-.707-.707a.5.5 0 00-.707.707l.707.707z"></path>
    <circle cx="32" cy="12" r="3"></circle>
    <circle fillOpacity=".4" cx="12" cy="12" r="6"></circle>
    <circle fillOpacity=".88" cx="12" cy="12" r="3"></circle>
  </g>
</svg>
    </span>
    <span className="sr-only">Switch to light/dark version</span>
  </label>
</div>

</div>

  );
}

export default Navbar;
