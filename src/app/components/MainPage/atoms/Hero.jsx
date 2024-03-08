import { useState, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const imageUrls = [
  "/images/affald-skov-1.webp",
  "/images/affald-strand-2.webp",
  "/images/malerspande.webp",
];

// Her pre-loader jeg billederne, der er dog en fejl i denne funktion som jeg ikke når at rette.
// Idéelt skal denne funktion expandes for at sikre et pre-load og reduce first contentful paint tid
imageUrls.forEach((url) => {
  const img = new Image();
  img.src = url;
});

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [fade, setFade] = useState(true);

  // Applikation af fade + shuffle mellem slides af de tre imageUrls

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

  // Handler klik til sidste slide

  const handlePrevClick = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === 0 ? imageUrls.length - 1 : prevSlide - 1
      );
      setFade(true);
    }, 500);
  };

  // Handler klik til næste slide

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
        loading="lazy"
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
