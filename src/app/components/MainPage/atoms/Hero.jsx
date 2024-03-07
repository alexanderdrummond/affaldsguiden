import { useState, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const imageUrls = [
  "http://localhost:3000/Assets/Images/Slideshow/malerspande.jpg",
  "http://localhost:3000/Assets/Images/Slideshow/affald-skov-1.jpg",
  "http://localhost:3000/Assets/Images/Slideshow/affald-strand-2.jpg",
];

// Her pre-loader jeg billederne
imageUrls.forEach((url) => {
  const img = new Image();
  img.src = url;
});

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    setFade(true);
    const intervalId = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % imageUrls.length);
        setFade(true);
      }, 500);
    }, 6000);

    return () => clearInterval(intervalId);
  }, []);

  const handlePrevClick = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === 0 ? imageUrls.length - 1 : prevSlide - 1
      );
      setFade(true);
    }, 500);
  };

  const handleNextClick = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % imageUrls.length);
      setFade(true);
    }, 500);
  };

  return (
    <div className="relative w-full">
      <img
        src={imageUrls[currentSlide]}
        alt="hero image"
        className={`w-full h-64 md:h-[32rem] object-cover transition-opacity duration-500 ease-in-out ${
          fade ? "opacity-100" : "opacity-0"
        }`}
      />
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 ml-4">
        <ChevronLeftIcon
          className="h-6 w-6 text-white cursor-pointer"
          onClick={handlePrevClick}
        />
      </div>
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 mr-4">
        <ChevronRightIcon
          className="h-6 w-6 text-white cursor-pointer"
          onClick={handleNextClick}
        />
      </div>
    </div>
  );
};

export default Hero;
