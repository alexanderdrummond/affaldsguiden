import { useEffect, useState } from "react";
import RecyclingStationItem from "./StationItem";

const StationGrid = () => {
  const [stations, setStations] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/orgs?attributes=id,name,address,zipcode,city")
      .then((response) => response.json())
      .then((data) => setStations(data))
      .catch((error) => console.error("fetch error:", error));
  }, []);

  return (
    <div className=" my-10 mx-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
      {stations.map((station) => (
        <RecyclingStationItem key={station.id} {...station} />
      ))}
    </div>
  );
};

export default StationGrid;
