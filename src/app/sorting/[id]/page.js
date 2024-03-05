"use client";

import { useEffect, useState } from "react";
import SectionView from "../../components/SortingPage/Specific/SectionView";
import Layout from "@/app/components/Layout/MainLayout";

const ItemDetailPage = ({ params }) => {
  const [sectionData, setSectionData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  const { id } = params;

  useEffect(() => {
    if (id) {
      setLoading(true);
      fetch(`http://localhost:3000/section/${id}`)
        .then((response) => response.json())
        .then((data) => {
          setSectionData(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("error fetching:", error);
          setLoading(false);
        });
    }
  }, [id]);

  const handleCategoryClick = (categoryId) => {
    setSelectedCategoryId(
      selectedCategoryId === categoryId ? null : categoryId
    );
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!sectionData) {
    return <div>no data</div>;
  }

  return (
    <Layout>
      <div className="flex flex-col items-center">
        <div className="bg-white rounded-lg shadow-lg p-4 m-4 w-full md:w-1/2">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">{sectionData.title}</h1>
            <img
              src={sectionData.filepath}
              alt={sectionData.title}
              className="h-10 w-10 rounded-full"
            />
          </div>
          <div className="mt-4">
            {sectionData.categories.map((category) => (
              <div key={category.id}>
                <div
                  onClick={() => handleCategoryClick(category.id)}
                  className="cursor-pointer p-2 hover:bg-gray-100 rounded-md"
                >
                  <h2 className="text-lg">{category.title}</h2>
                </div>
                {selectedCategoryId === category.id && (
                  <SectionView categoryId={selectedCategoryId} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ItemDetailPage;
