"use client";

import Layout from "../components/Layout/MainLayout";
import StationGrid from "../components/Stations/StationGrid";

export default function Stations() {
  return (
    <Layout>
      <div className="flex justify-center">
        <StationGrid />
      </div>
    </Layout>
  );
}
