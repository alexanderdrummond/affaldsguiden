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
      <div className="flex flex-col items-center my-10 mx-4 md:mx-auto">
        <div className="rounded-lg shadow-lg w-full md:w-1/2">
          <div
            className="flex items-center justify-between p-4  rounded-t-lg"
            style={{ backgroundColor: `#${sectionData.color}` }}
          >
            <h1 className="text-2xl font-bold text-white">
              {sectionData.title}
            </h1>
            <img
              src={sectionData.filepath}
              alt={sectionData.title}
              className="h-10 w-10"
            />
          </div>
          <div className="p-4 space-y-4">
            {sectionData.categories.map((category) => (
              <div
                key={category.id}
                className="relative bg-gray-100 rounded-lg shadow-md p-4"
              >
                <div className="flex items-center">
                  <div
                    className="w-10 h-10 rounded-full mr-4"
                    style={{ backgroundColor: `#${sectionData.color}` }}
                  >
                    <img
                      src={category.icon_filepath}
                      alt={category.title}
                      className="w-full h-full rounded-md"
                    />
                  </div>
                  <h2 className="text-lg">{category.title}</h2>
                </div>
                <div
                  onClick={() => handleCategoryClick(category.id)}
                  className="absolute -bottom-2.5 left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-black cursor-pointer"
                ></div>
                {selectedCategoryId === category.id && (
                  <div className="mt-4">
                    <SectionView categoryId={selectedCategoryId} />
                  </div>
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
