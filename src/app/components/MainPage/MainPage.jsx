import WaveImage from "../Static/atoms/WaveImage";
import Hero from "./atoms/Hero";
import InfoSection from "./atoms/InfoSection";
import OverlapBox from "./atoms/OverlapBox";

const MainPage = () => (
  <div>
    <Hero />
    <OverlapBox />
    <InfoSection />
    <WaveImage variant="main" />
  </div>
);

export default MainPage;
