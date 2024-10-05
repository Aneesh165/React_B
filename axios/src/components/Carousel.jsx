import React, { useEffect, useState } from "react";

const Carousel = () => {
  const images = [
    "https://images.all-free-download.com/images/thumbjpg/countryside_scenery_picture_serene_rice_field_6930631.jpg",
    "https://cdn.pixabay.com/photo/2018/03/11/23/59/sunset-3218412_640.jpg",
    "https://images.pexels.com/photos/821944/pexels-photo-821944.jpeg?cs=srgb&dl=pexels-george-desipris-821944.jpg&fm=jpg",
  ];

  const[currentSlide,setCurrentSlide]=useState(0)
  const delay = 3000; 

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrentSlide((currentSlide + 1) % images.length);
    }, delay);

    return () => clearTimeout(timeout);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide) =>
      currentSlide === 0 ? images.length - 1 : currentSlide - 1
    );
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="overflow-hidden relative h-96">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {images.map((image, index) => (
            <div className="w-full flex-shrink-0" key={index}>
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <button
        className="absolute top-1/2 transform -translate-y-1/2 left-4 bg-black bg-opacity-50 text-white px-4 py-2 rounded-full"
        onClick={prevSlide}
      >
        <h3 className="text-3xl">{`<`}</h3>
      </button>
      <button
        className="absolute top-1/2 transform -translate-y-1/2 right-4 bg-black bg-opacity-50 text-white px-4 py-2 rounded-full"
        onClick={nextSlide}
      >
        <h3 className="text-3xl">{`>`}</h3>
      </button>
    </div>
  );
};

export default Carousel;
