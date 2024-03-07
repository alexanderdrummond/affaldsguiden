"use client";

import Layout from "../components/Layout/MainLayout";
import WaveImage from "../components/Static/atoms/WaveImage";
import StationGrid from "../components/Stations/StationGrid";

export default function Stations() {
  return (
    <Layout>
      <div className="flex justify-center">
        <StationGrid />
      </div>
      <WaveImage variant="main" />
    </Layout>
  );
}
