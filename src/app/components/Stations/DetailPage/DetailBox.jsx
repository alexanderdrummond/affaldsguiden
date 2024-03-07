import { useUser } from "@/app/context/UserContext";
import { useState, useEffect } from "react";
import ReviewList from "./ReviewList";
import Link from "next/link";
import CommentSection from "./CommentSection";

const DetailBox = ({ stationData }) => {
  const { user } = useUser();
  const [reviews, setReviews] = useState([]);
  const [updateReviews, setUpdateReviews] = useState(false);

  useEffect(() => {
    if (stationData?.id) {
      fetch(`http://localhost:3000/reviews/${stationData.id}`)
        .then((response) => response.json())
        .then((data) => {
          setReviews(data);
          setUpdateReviews(false);
        })
        .catch((error) => console.error("error fetching reviews:", error));
    }
  }, [stationData?.id, updateReviews]);

  const addReview = (newReview) => {
    const formattedDate = new Date(newReview.date).toISOString();
    newReview = { ...newReview, created_at: formattedDate };

    setReviews((prevReviews) => {
      return [...prevReviews, newReview];
    });
  };

  return (
    <div className="max-w-6xl mx-8 md:mx-auto my-8 bg-white rounded-lg shadow-md overflow-hidden">
      <div className="h-60 bg-gray-200"></div>
      <div className="p-6">
        <h2 className="text-2xl font-bold">{stationData.name}</h2>
        <div className="flex mt-3">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className={`w-5 h-5 inline-block ${
                i < stationData.averageRating ? "bg-yellow-400" : "bg-gray-300"
              } mask-star-filled`}
            ></div>
          ))}
        </div>
        <p className="mt-3">{stationData.address}</p>
        <p>{`${stationData.zipcode} ${stationData.city}`}</p>
      </div>
      <ReviewList stationId={stationData.id} reviews={reviews} />
      <hr />
      {user ? (
        <CommentSection
          stationId={stationData.id}
          onCommentSubmit={addReview}
        />
      ) : (
        <div className="text-center my-4">
          <p>
            Venligst{" "}
            <Link legacyBehavior href="/auth">
              <a className="text-blue-500 hover:underline">log ind</a>
            </Link>{" "}
            for at skrive en kommentar.
          </p>
        </div>
      )}
    </div>
  );
};

export default DetailBox;
