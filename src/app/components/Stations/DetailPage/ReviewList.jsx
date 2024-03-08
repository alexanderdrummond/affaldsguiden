import ReviewItem from "./ReviewItem";

// Format af dato (passet ned til reviewitem)

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
};

const ReviewList = ({ reviews, stationData }) => {
  // Check på reviews array, hvis arrayet er tomt render vi en empty state i stedet for ReviewItem
  if (!reviews || reviews.length === 0) {
    return (
      <div className="p-6 mt-8">
        <h3 className="text-xl semibold mb-4">
          Anmeldelser af {stationData.name}
        </h3>
        <div className=" text-gray-600">Der er endnu ingen anmeldelser.</div>
      </div>
    );
  }

  return (
    <div className="p-6 mt-8">
      <h3 className="text-xl semibold mb-4">
        Anmeldelser af {stationData.name}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {reviews.map((review, index) => (
          <ReviewItem
            key={review.id || index}
            review={review}
            formatDate={formatDate}
          />
        ))}
      </div>
    </div>
  );
};

export default ReviewList;
