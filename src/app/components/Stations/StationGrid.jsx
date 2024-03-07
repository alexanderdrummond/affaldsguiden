import { useEffect, useState } from "react";
import StationItem from "./StationItem";
import useStore from "@/app/store/store";

const StationGrid = () => {
  const { stations, fetchStations } = useStore((state) => ({
    stations: state.stations,
    fetchStations: state.fetchStations,
  }));

  useEffect(() => {
    fetchStations();
  }, [fetchStations]);

  return (
    <div className=" my-10 mx-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
      {stations.map((station) => (
        <StationItem key={station.id} {...station} />
      ))}
    </div>
  );
};

export default StationGrid;
