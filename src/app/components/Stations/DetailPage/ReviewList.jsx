import { useEffect, useState } from "react";
import ReviewItem from "./ReviewItem";

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString();
};

const ReviewList = ({ reviews }) => {
  return (
    <div className="p-6 mt-8">
      <h3 className="text-xl font-bold mb-4">Anmeldelser</h3>
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
