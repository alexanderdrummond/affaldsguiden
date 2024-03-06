const ReviewItem = ({ review, formatDate }) => {
  return (
    <div className="">
      <div className="flex justify-between items-start">
        <div>
          <h4 className="font-semibold">{`${review.user.firstname} ${review.user.lastname}`}</h4>
          <h5 className="font-semibold mt-2">{review.subject}</h5>
        </div>
        <div className="text-right">
          <span className="block">{formatDate(review.created_at)}</span>
          <div className="flex mt-2">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className={`w-4 h-4 ml-1 ${
                  i < review.num_stars ? "bg-yellow-400" : "bg-gray-300"
                } mask-star-filled`}
              ></div>
            ))}
          </div>
        </div>
      </div>
      <p className="mt-2">{review.comment}</p>
    </div>
  );
};

export default ReviewItem;
