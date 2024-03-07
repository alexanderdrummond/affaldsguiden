import { useState } from "react";
import Button from "../Static/atoms/Button";

const StepOne = ({
  containers,
  onContinue,
  onContainerSelect,
  selectedContainerId,
}) => {
  const [selectedId, setSelectedId] = useState(selectedContainerId);

  const handleContainerClick = (id) => {
    const newSelectedId = selectedId === id ? null : id;
    setSelectedId(newSelectedId);
    onContainerSelect(newSelectedId);
  };

  return (
    <div>
      <h2 className="text-xl">Trin 1</h2>
      <h3 className="text-lg font-bold mt-4">Vælg type</h3>
      <p className="text-sm mt-2">Lorem ipsum</p>
      <div className="grid grid-cols-2 gap-4 mt-8">
        {containers.map((container) => (
          <div
            key={container.id}
            onClick={() => handleContainerClick(container.id)}
            className={`flex flex-col items-center justify-center border rounded-lg p-4 cursor-pointer ${
              selectedId === container.id
                ? "border-customgreendark bg-customgreenlight"
                : "border-gray-200"
            }`}
          >
            <img
              src={`http://localhost:3000/Assets/Images/Icons/${container.icon_filename}`}
              alt={container.name}
              className="w-12 h-12"
            />
            <span className="mt-2">{container.name}</span>
          </div>
        ))}
      </div>
      <div className="flex justify-end">
        <Button onClick={onContinue} className="mt-10 py-2 px-4 rounded-md">
          Videre
        </Button>
      </div>
    </div>
  );
};

export default StepOne;
