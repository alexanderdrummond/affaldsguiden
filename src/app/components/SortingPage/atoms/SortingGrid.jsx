import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const SortingGrid = () => {
  const [data, setData] = useState([]);
  const router = useRouter();

  useEffect(() => {
    fetch("http://localhost:3000/section")
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched data:", data);
        setData(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const navigateToItem = (id) => {
    console.log("navigating to id:", id);
    router.push(`/sorting/${id}`);
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
      {data.map((item) => (
        <div
          key={item.id}
          onClick={() => navigateToItem(item.id)}
          className="rounded-lg overflow-hidden shadow-lg block cursor-pointer"
        >
          <img
            src={item.filepath}
            alt={item.title}
            className="w-full object-cover h-48"
          />
          <div style={{ backgroundColor: `#${item.color}` }} className="p-4">
            <h5 className="text-lg font-bold text-white">{item.title}</h5>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SortingGrid;
