const StepOne = ({ containers, onContinue, onContainerSelect }) => {
  return (
    <div>
      <h2 className="text-xl">Trin 1</h2>
      <h3 className="text-lg font-bold mt-4">Vælg type</h3>
      <p className="text-sm mt-2">Lorem ipsum</p>
      <div className="grid grid-cols-2 gap-4 mt-4">
        {containers.map((container) => (
          <div
            key={container.id}
            onClick={() => onContainerSelect(container.id)}
            className="flex flex-col items-center justify-center border border-gray-200 rounded-lg p-4 cursor-pointer"
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
      <button
        onClick={onContinue}
        className="mt-6 bg-blue-500 text-white py-2 px-4 rounded-md"
      >
        Videre
      </button>
    </div>
  );
};

export default StepOne;
