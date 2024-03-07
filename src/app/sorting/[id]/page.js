"use client";

import { useEffect, useState } from "react";
import useStore from "@/app/store/store";
import SectionView from "../../components/SortingPage/Specific/SectionView";
import Layout from "@/app/components/Layout/MainLayout";

const ItemDetailPage = ({ params }) => {
  const { id } = params;
  const { sectionDetails, fetchSectionDetail } = useStore((state) => ({
    sectionDetails: state.sectionDetails,
    fetchSectionDetail: state.fetchSectionDetail,
  }));
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  useEffect(() => {
    if (id) {
      fetchSectionDetail(id);
    }
  }, [id, fetchSectionDetail]);

  const sectionData = sectionDetails[id];

  const handleCategoryClick = (categoryId) => {
    setSelectedCategoryId(
      selectedCategoryId === categoryId ? null : categoryId
    );
  };

  if (!sectionData) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <div className="flex flex-col items-center my-10 mx-4 md:mx-auto">
        <div className="rounded-lg shadow-lg w-full md:w-1/2">
          <div
            className="flex items-center justify-between rounded-t-lg"
            style={{ backgroundColor: `#${sectionData.color}` }}
          >
            <h1 className="text-2xl font-bold text-white p-4">
              {sectionData.title}
            </h1>
            <div className="flex-grow flex justify-end items-stretch">
              <img
                src={sectionData.filepath}
                alt={sectionData.title}
                className="object-cover rounded-tr-lg invisible md:visible md:w-[21%] h-[100%]"
              />
            </div>
          </div>
          <div className="p-4 space-y-4">
            {sectionData.categories.map((category) => (
              <div
                key={category.id}
                className="relative bg-gray-100 rounded-lg shadow-md group"
              >
                <div className="flex items-center p-4">
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
                <img
                  src="/icons/dropdown.svg"
                  alt="Toggle"
                  className={`absolute -bottom-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 cursor-pointer ${
                    selectedCategoryId === category.id ? "rotate-180" : ""
                  }`}
                  onClick={() => handleCategoryClick(category.id)}
                  style={{ transition: "transform 0.3s ease" }}
                />
                {selectedCategoryId === category.id ? (
                  <div className="mt-4 p-4 transform opacity-100 scale-100 transition-all duration-700 ease-in-out">
                    <SectionView categoryId={selectedCategoryId} />
                  </div>
                ) : (
                  <div
                    className="mt-4 p-4 transform opacity-0 scale-95 transition-all duration-700 ease-in-out"
                    style={{ height: 0, overflow: "hidden" }}
                  ></div>
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
