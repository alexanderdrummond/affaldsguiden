"use client";

import { useEffect, useState } from "react";

const SectionView = ({ categoryId }) => {
  const [categoryDetails, setCategoryDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [openTypeId, setOpenTypeId] = useState(null);

  useEffect(() => {
    if (categoryId) {
      setLoading(true);
      fetch(`http://localhost:3000/category/details/${categoryId}`)
        .then((response) => response.json())
        .then((data) => {
          setCategoryDetails(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("error fetching category:", error);
          setLoading(false);
        });
    }
  }, [categoryId]);

  const toggleAccordion = (id) => {
    setOpenTypeId(openTypeId === id ? null : id);
  };

  const renderTable = (types, ruleKey) => (
    <table className="table-auto w-full text-left mt-2">
      <thead>
        <tr className="bg-gray-100">
          <th className="px-4 py-2">Type</th>
          <th className="px-4 py-2">Sorteres hjemme</th>
        </tr>
      </thead>
      <tbody>
        {types
          .filter((type) => type.rules[ruleKey])
          .map((type) => (
            <tr key={type.id} className="border-b">
              <td className="px-4 py-2">{type.title}</td>
              <td className="px-4 py-2">{type.rules.is_home ? "Ja" : "Nej"}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 w-full md:w-1/2">
      {loading && <div>Loading...</div>}
      {!loading &&
        categoryDetails &&
        categoryDetails.types.map((type) => (
          <div key={type.id} className="m-2">
            <button
              onClick={() => toggleAccordion(type.id)}
              className="w-full text-left font-semibold p-2 rounded hover:bg-gray-100"
            >
              {type.title}
            </button>
            {openTypeId === type.id && (
              <div className="mt-4">
                <h4 className="font-semibold text-md">Vi modtager</h4>
                {renderTable(categoryDetails.types, "is_allowed")}
                <h4 className="font-semibold text-md mt-4">
                  Vi modtager på station
                </h4>
                {renderTable(categoryDetails.types, "is_station")}
              </div>
            )}
          </div>
        ))}
    </div>
  );
};

export default SectionView;
