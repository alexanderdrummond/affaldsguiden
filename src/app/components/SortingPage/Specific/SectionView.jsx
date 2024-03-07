"use client";

import { useEffect, useState } from "react";

const SectionView = ({ categoryId }) => {
  const [categoryDetails, setCategoryDetails] = useState(null);
  const [loading, setLoading] = useState(false);

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

  const renderTable = (types, isAllowed, showHeadings) => (
    <div className="overflow-x-auto w-full">
      <table className="min-w-full divide-y divide-gray-200 mt-2">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Type
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              {showHeadings ? "Sorteres hjemme" : ""}
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              {showHeadings ? "Station" : ""}
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {types
            .filter((type) => type.rules.is_allowed === isAllowed)
            .map((type) => (
              <tr key={type.id}>
                <td className="px-6 py-4 whitespace-nowrap">{type.title}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {showHeadings ? (type.rules.is_home ? "Ja" : "Nej") : ""}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {showHeadings ? (type.rules.is_station ? "Ja" : "Nej") : ""}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="flex flex-col items-center">
      <div className="bg-white rounded-lg shadow-lg p-4 w-11/12">
        {loading && <div>Loading...</div>}
        {!loading && categoryDetails && (
          <>
            <h3 className="text-lg font-semibold">Vi modtager</h3>
            {renderTable(categoryDetails.types, true, true)}
            <h3 className="text-lg font-semibold mt-6">Vi modtager ikke</h3>
            {renderTable(categoryDetails.types, false, false)}
          </>
        )}
      </div>
    </div>
  );
};

export default SectionView;
