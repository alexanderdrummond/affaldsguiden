import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const Hero = () => {
  return (
    <div className="relative w-full">
 
      <img src="/cb.png" alt="Hero Image" className="w-full h-64 md:h-[32rem] object-cover" />
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 ml-4">
        <ChevronLeftIcon className="h-6 w-6 text-white" />
      </div>
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 mr-4">
        <ChevronRightIcon className="h-6 w-6 text-white" />
      </div>
    </div>
  );
};

export default Hero;