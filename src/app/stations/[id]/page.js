"use client";

import { useParams } from "next/navigation";
import useStore from "@/app/store/store";
import Layout from "../../components/Layout/MainLayout";
import DetailBox from "@/app/components/Stations/DetailPage/DetailBox";

const StationDetail = () => {
  const { id } = useParams();
  const { stations } = useStore((state) => state);

  const stationData =
    stations.find((station) => station.id.toString() === id) || {};

  return (
    <Layout>
      <DetailBox stationData={stationData} />
    </Layout>
  );
};

export default StationDetail;
