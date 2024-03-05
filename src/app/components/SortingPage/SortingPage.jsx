import SortingGrid from "./atoms/SortingGrid";
import Title from "./atoms/Title";
import InputField from "./atoms/InputField";

const SortingPage = () => {
  return (
    <div className="relative">
      <div className="gradient-bg"></div>
      <div className="flex flex-col items-center justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Title />
        <InputField />
        <SortingGrid />
      </div>
    </div>
  );
};

export default SortingPage;
