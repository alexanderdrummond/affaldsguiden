import { useUser } from "@/app/context/UserContext";
import useStore from "@/app/store/store";
import ReviewList from "./ReviewList";
import CommentSection from "./CommentSection";
import Link from "next/link";

const DetailBox = ({ stationData }) => {
  const { user } = useUser();
  const { reviews, addReview } = useStore((state) => ({
    reviews: state.reviews[stationData.id] || [],
    addReview: state.addReview,
  })); // Tager reviews og addReview fra Zustand store

  // Handler til tilføjelse af nyt review

  const handleAddReview = (newReview) => {
    addReview(stationData.id, newReview);
  };

  // Udregnelse af gennemsnit rating

  let averageRating = 0;
  if (reviews.length > 0) {
    const totalStars = reviews.reduce(
      (acc, review) => acc + review.num_stars,
      0
    );
    averageRating = Math.round(totalStars / reviews.length);
  }

  return (
    <div className="max-w-6xl mx-8 md:mx-auto my-8 bg-white rounded-lg shadow-md overflow-hidden">
      <div className="h-60 bg-gray-200">
        <img className="h-60 w-full object-cover" src="/images/map.webp"></img>
      </div>
      <div className="p-6">
        <h2 className="text-2xl font-semibold">{stationData.name}</h2>
        <div className="flex mt-3">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className={`w-5 h-5 inline-block ${
                i < averageRating ? "bg-yellow-400" : "bg-gray-300"
              } mask-star-filled`}
            ></div>
          ))}
        </div>
        <p className="mt-3">{stationData.address}</p>
        <p>{`${stationData.zipcode} ${stationData.city}`}</p>
        <p>Danmark</p>
      </div>
      <ReviewList
        stationData={stationData}
        stationId={stationData.id}
        reviews={reviews}
      />
      <hr />

      {/* Her er conditional rendering baseret på om vi har en authed bruger */}

      {user ? (
        <CommentSection
          stationId={stationData.id}
          onCommentSubmit={handleAddReview}
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
