"use client";

import { useEffect, useState } from "react";
import Layout from "../../components/Layout/MainLayout";
import { useParams } from "next/navigation";
import DetailBox from "@/app/components/Stations/DetailPage/DetailBox";

const StationDetail = () => {
  const { id } = useParams();
  const [stationData, setStationData] = useState({});

  useEffect(() => {
    fetch(`http://localhost:3000/orgs/${id}`)
      .then((response) => response.json())
      .then((data) => setStationData(data))
      .catch((error) => console.error("error fetching:", error));
  }, [id]);

  return (
    <Layout>
      <DetailBox stationData={stationData} />
    </Layout>
  );
};

export default StationDetail;
