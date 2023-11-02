"use client"; // This is a client component 👈🏽

import Image from 'next/image';
import { useEffect, useState } from 'react';

const Carosel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % 2); // Change 2 to the number of slides you have
    }, 3000); // Change 2000 to the interval in milliseconds

    return () => clearInterval(interval);
  }, []);

  const slides = [
    '/mainImg1.jpg', // Add the paths to your images
    '/mainImg2.jpg',
  ];

  return (
    <div id="default-carousel" className="relative w-full" data-carousel="slide" style={{height: '77vh'}}>
      <div className="relative h-56 rounded-lg md:h-96">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`${
              currentSlide === index ? '' : 'hidden'
            } duration-700 ease-in-out`}
            data-carousel-item
          >
            <Image
              src={slide}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={500}
              height={500}
              alt="Description"
            />
          </div>
        ))}
      </div>
      <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${
              currentSlide === index ? 'bg-white' : 'bg-gray-400'
            }`}
            aria-current={currentSlide === index ? 'true' : 'false'}
            aria-label={`Slide ${index + 1}`}
            data-carousel-slide-to={index}
          ></button>
        ))}
      </div>
      <button
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
      >
        {/* Previous button content */}
      </button>
      <button
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
      >
        {/* Next button content */}
      </button>
    </div>
  );
};

export default Carosel;
