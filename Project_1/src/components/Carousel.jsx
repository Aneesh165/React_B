import React, { useState } from "react";
import image1 from "../assets/carousel-item-01.jpg";
import image2 from "../assets/carousel-item-02.jpg";
import image3 from "../assets/carousel-item-03.jpg";
import image4 from "../assets/carousel-item-04.jpg";
import image5 from "../assets/carousel-item-05.jpg";

const carouselItems = [
  {
    id: 1,
    img: image1,
    alt: "Carousel item 01",
    link: "#0",
    label: "Creative Services",
  },
  {
    id: 2,
    img: image2,
    alt: "Carousel item 02",
    link: "#0",
    label: "Creative Services",
  },
  {
    id: 3,
    img: image3,
    alt: "Carousel item 03",
    link: "#0",
    label: "Creative Services",
  },
  {
    id: 4,
    img: image4,
    alt: "Carousel item 04",
    link: "#0",
    label: "Creative Services",
  },
  {
    id: 5,
    img: image5,
    alt: "Carousel item 05",
    link: "#0",
    label: "Creative Services",
  },
];

const extendedCarouselItems = [
  ...carouselItems.slice(-1),
  ...carouselItems,
  ...carouselItems.slice(0, 1),
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(1);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === extendedCarouselItems.length - 2) {
        return 1;
      }
      return prevIndex + 1;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === 1) {
        return extendedCarouselItems.length - 2;
      }
      return prevIndex - 1;
    });
  };

  return (
 <div className="bg-gradient-to-b from-gray-100 to-white dark:bg-gradient-to-b dark:from-black dark:to-[#1f1f22]">
      <div className="flex w-[80%] mx-auto pb-4 pt-16">
        <div className="flex flex-col text-center mx-auto ">
          <h1 className="text-6xl font-bold pb-4 ">
            From rough design files, to <br /> powerful products
          </h1>
          <p className="my-4 text-xl font  text-slate-800 dark:text-slate-100">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat <br /> nulla pariatur excepteur sint
            occaecat cupidatat.
          </p>
        </div>
      </div>

      <section className="relative w-full h-[650px] overflow-hidden">
        <div className="relative w-full h-full flex items-center justify-center">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${(currentIndex - 1) * 34}%)`,
            }}
          >
            {extendedCarouselItems.map((item, index) => (
              <div
                key={item.id}
                className={`flex-none w-[33%] h-[450px] mx-1 relative ${
                  index === currentIndex ? "opacity-100 z-10" : "opacity-50"
                }`}
              >
                <img
                  className="w-full h-full object-cover"
                  src={item.img}
                  alt={item.alt}
                />
              </div>
            ))}
          </div>

          <button
            className="absolute top-[95%] left-[10%] transform -translate-y-1/2 p-4 bg-[#3abab4] text-white rounded-xl"
            onClick={prevSlide}
            aria-label="Previous slide"
          >
            <svg
              className="w-6 h-6"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6.7 14.7l1.4-1.4L3.8 9H16V7H3.8l4.3-4.3-1.4-1.4L0 8z"></path>
            </svg>
          </button>
          <button
            className="absolute top-[95%] right-[10%] transform -translate-y-1/2 p-4 bg-teal-500 text-white rounded-lg"
            onClick={nextSlide}
            aria-label="Next slide"
          >
            <svg
              className="w-6 h-6"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.3 14.7l-1.4-1.4L12.2 9H0V7h12.2L7.9 2.7l1.4-1.4L16 8z"></path>
            </svg>
          </button>
        </div>
      </section>
      </div>
 
  );
};

export default Carousel;
