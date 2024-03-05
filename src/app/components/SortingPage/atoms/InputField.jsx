const InputField = () => {
  return (
    <div className="flex justify-center my-4 mt-10 mb-20">
      <div className="flex items-center rounded-full bg-white shadow-lg">
        <input
          type="text"
          placeholder="søg på affald"
          className="rounded-full py-2 px-4 flex-grow"
        />
        <span className="px-4">
          <svg
            className="w-6 h-6 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 6h13M6 10h15M4 14h15M2 18h15"
            ></path>
          </svg>
        </span>
      </div>
    </div>
  );
};

export default InputField;
