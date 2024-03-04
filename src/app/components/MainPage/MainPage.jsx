import Hero from './atoms/Hero';
import InfoSection from './atoms/InfoSection';
import OverlapBox from './atoms/OverlapBox';

const MainPage = () => (
  <div>
    <Hero />
    <OverlapBox />
    <InfoSection />
    <div className="w-full">
      <img src="/bottom1.svg" alt="Wave" className="w-full" />
    </div>
  </div>
);

export default MainPage;