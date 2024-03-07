import useStore from "@/app/store/store";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import GoogleMapView from "./GoogleMapView";

const StationItem = ({ id, name, address, zipcode, city }) => {
  const { reviews, fetchReviews } = useStore((state) => ({
    reviews: state.reviews[id] || [],
    fetchReviews: state.fetchReviews,
  }));
  const router = useRouter();

  useEffect(() => {
    fetchReviews(id);
  }, [id, fetchReviews]);

  let averageRating = 0;
  if (reviews.length > 0) {
    const totalStars = reviews.reduce(
      (acc, review) => acc + review.num_stars,
      0
    );
    averageRating = totalStars / reviews.length;
  }

  const navigateToDetail = () => {
    router.push(`/stations/${id}`);
  };

  return (
    <div
      onClick={navigateToDetail}
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
    >
      <GoogleMapView orgId={id} />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="mt-1">{address}</p>
        <p className="mt-1">{`${zipcode} ${city}`}</p>
        <hr className="my-4" />
        <div className="flex justify-between items-center">
          <div>
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className={`w-4 h-4 inline-block ${
                  i < averageRating
                    ? "bg-yellow-400 mask-star-filled"
                    : "bg-gray-300 mask-star-empty"
                }`}
              ></div>
            ))}
          </div>
          <span>{reviews.length} reviews</span>
        </div>
      </div>
    </div>
  );
};

export default StationItem;
