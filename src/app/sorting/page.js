"use client";

import Layout from "../components/Layout/MainLayout";
import SortingPage from "../components/SortingPage/SortingPage";
import SortingGrid from "../components/SortingPage/atoms/SortingGrid";
import WaveImage from "../components/Static/atoms/WaveImage";

export default function Sorting() {
  return (
    <Layout>
      <SortingPage />
      <WaveImage variant="secondary" />
    </Layout>
  );
}
