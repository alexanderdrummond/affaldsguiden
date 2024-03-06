import Image from "next/image";

export default function LeftHalf() {
  return (
    <div className="flex flex-col justify-center items-center w-1/2">
      <div className="flex items-center space-x-3 mb-8">
        <div className="flex justify-center items-center w-full">
          <Image src="/logo.svg" alt="logo" width={25} height={25} />
          <h1 className="text-lg font-semibold ml-4">Affaldsguiden</h1>
        </div>
      </div>
      <div className="text-center text-3xl w-full px-4">
        <p className="mb-4">Log ind på Affaldsguiden</p>
        <p>for at anmelde stationer</p>
      </div>
    </div>
  );
}
