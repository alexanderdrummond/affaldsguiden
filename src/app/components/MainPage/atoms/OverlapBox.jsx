"use client";

import Button from "../../Static/atoms/Button";
import { useUser } from "@/app/context/UserContext";

const OverlapBox = () => {
  const { user, loading } = useUser();

  if (loading) {
    return null;
  }

  return (
    <div className="relative mx-auto -mt-16 mb-16 max-w-xs sm:max-w-sm md:max-w-md bg-customgreenlight p-4 md:p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold text-center mb-4">
        Find og anmeld genbrugsstationer
      </h2>

      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Button variant="filled">Find station</Button>
        {!user && <Button variant="filled">Log ind</Button>}
      </div>
    </div>
  );
};

export default OverlapBox;
