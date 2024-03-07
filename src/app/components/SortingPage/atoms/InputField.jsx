import Image from "next/image";

const InputField = () => {
  return (
    <div className="flex justify-center my-4 mt-10 mb-20">
      <div className="flex items-center rounded-full bg-white shadow-lg">
        <input
          type="text"
          placeholder="Søg på affald"
          className="rounded-full py-2 px-4 flex-grow"
        />
        <span className="px-4">
          <Image width="14" height="14" src="/icons/search.svg" />
        </span>
      </div>
    </div>
  );
};

export default InputField;
