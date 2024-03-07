const WaveImage = ({ variant }) => {
  const getImageSrc = () => {
    switch (variant) {
      case "main":
        return "/shapes/main_wave.svg";
      case "secondary":
        return "/shapes/secondary_wave.svg";
      default:
        return "/shapes/main_wave.svg";
    }
  };

  return (
    <div className="w-full">
      <img src={getImageSrc()} alt="Wave" className="w-full" />
    </div>
  );
};

export default WaveImage;
