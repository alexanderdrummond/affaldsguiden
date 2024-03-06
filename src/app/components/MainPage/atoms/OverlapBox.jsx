import Button from "../../Static/atoms/Button";

const OverlapBox = () => {
  return (
    <div className="relative mx-auto -mt-16 mb-16 max-w-sm md:max-w-md bg-customgreenlight p-4 md:p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold text-center mb-4">
        Find og anmeld genbrugsstationer
      </h2>

      <div className="flex justify-center">
        <Button className="mr-4" variant="filled">
          Find station
        </Button>
        <Button variant="filled">Log ind</Button>
      </div>
    </div>
  );
};

export default OverlapBox;
