"use client";

import useStore from "@/app/store/store";
import { useEffect } from "react";

const SectionView = ({ categoryId }) => {
  const { categoryDetails, fetchCategoryDetails } = useStore((state) => ({
    categoryDetails: state.categoryDetails,
    fetchCategoryDetails: state.fetchCategoryDetails,
  }));

  // Hook til at loade detaljer på kategorier hvis de ikke er present i Zustand.

  useEffect(() => {
    if (categoryId && !categoryDetails[categoryId]) {
      fetchCategoryDetails(categoryId);
    }
  }, [categoryId, categoryDetails, fetchCategoryDetails]);

  // Her accesser jeg kategori data ud fra den enkelte kategoris ID.

  const categoryData = categoryDetails[categoryId];

  // Tabel der render med forskellige typer af conditional rendering. showHeadings sørger for vi kun render de to sorterings parametre
  // i den første tabel. Herefter mapper vi gennem "types" arrayet og filtrere i dem baseret på resultat af is_allowed.
  // Til sidst viser vi i to nye columns headings i den første tabel (hvor is_allowed=true) samt hvor de kan sorteres baseret på
  // reglerne is_home og is_station

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

  if (!categoryData) {
    return <div>Loader eller ingen data fundet..</div>;
  }

  return (
    <div className="flex flex-col items-center">
      <div className="bg-white rounded-lg shadow-lg p-4 w-11/12">
        <h3 className="text-lg font-semibold">Vi modtager</h3>
        {renderTable(categoryData.types, true, true)}
        <h3 className="text-lg font-semibold mt-6">Vi modtager ikke</h3>
        {renderTable(categoryData.types, false, false)}
      </div>
    </div>
  );
};

export default SectionView;
