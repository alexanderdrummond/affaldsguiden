import useStore from "@/app/store/store";
import { useRouter } from "next/navigation";

const SortingGrid = () => {
  const { sortingSections } = useStore((state) => state);
  const router = useRouter();

  const navigateToItem = (id) => {
    router.push(`/sorting/${id}`);
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
      {sortingSections.map((item) => (
        <div
          key={item.id}
          onClick={() => navigateToItem(item.id)}
          className="rounded-lg overflow-hidden shadow-lg block cursor-pointer transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
        >
          <img
            src={item.filepath}
            alt={item.title}
            className="w-full object-cover h-48"
          />
          <div style={{ backgroundColor: `#${item.color}` }} className="p-4">
            <h5 className="text-sm text-center font-semibold text-gray-200">
              {item.title}
            </h5>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SortingGrid;
