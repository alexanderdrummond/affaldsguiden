import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const StationItem = ({ id, name, address, zipcode, city }) => {
  const [reviews, setReviews] = useState([]);
  const [averageRating, setAverageRating] = useState(0);
  const router = useRouter();

  useEffect(() => {
    fetch(`http://localhost:3000/reviews/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setReviews(data);
        if (data.length > 0) {
          const totalStars = data.reduce(
            (acc, review) => acc + review.num_stars,
            0
          );
          setAverageRating(totalStars / data.length);
        }
      })
      .catch((error) => console.error("review fetch error:", error));
  }, [id]);

  const navigateToDetail = () => {
    router.push(`/stations/${id}`);
  };

  return (
    <div
      onClick={navigateToDetail}
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
    >
      <div className="h-40 bg-gray-200"></div>{" "}
      <div className="p-4">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="mt-1">{address}</p>
        <p className="mt-1">{`${zipcode} ${city}`}</p>
        <hr className="my-4" />
        <div className="flex justify-between items-center">
          <div>
            {[...Array(5)].map((_, i) => (
              <div
                className={`w-4 h-4 inline-block bg-yellow-400 ${
                  i < averageRating ? "mask-star-filled" : "mask-star-empty"
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
