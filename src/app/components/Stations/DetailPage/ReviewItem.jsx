import useStore from "@/app/store/store";
import { useUser } from "@/app/context/UserContext";
import { useNotification } from "@/app/context/NotificationContext";

const ReviewItem = ({ review, formatDate }) => {
  const { user } = useUser();
  const { deleteReview } = useStore((state) => ({
    deleteReview: state.deleteReview,
  })); // Tager deleteReview fra Zustand store
  const { showNotification } = useNotification();

  // Handler delete af reviews ved brug af deleteReview fra store og passer success/error notifikationer

  const handleDelete = async () => {
    try {
      await deleteReview(review.id);
      showNotification("success", "Anmeldelse slettet.");
    } catch (error) {
      console.error("delete review error:", error);
      showNotification("error", "Fejl ved sletning af anmeldelse.");
    }
  };

  // Tjekker om brugerens ID matcher review.user.id

  const isUserReview = user && Number(user.id) === review.user.id;

  return (
    <div className="border-b-2 border-gray-200  p-4">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm text-gray-600">
            {`${review.user.firstname} ${review.user.lastname}`} -{" "}
            <span>{formatDate(review.created_at)}</span>
          </p>
          <h5 className="font-semibold mt-1">{review.subject}</h5>
        </div>
        <div className="flex items-center mt-1">
          {" "}
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={`w-4 h-4 ${
                i < review.num_stars ? "text-yellow-400" : "text-gray-300"
              }`}
              fill="currentColor"
              viewBox="0 0 28 28"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.912 1.653-.912 1.952 0l1.523 4.656a1.763 1.763 0 001.34 1.24l5.136.745c.95.138 1.33 1.31.642 1.98l-3.714 3.615a1.763 1.763 0 00-.508 1.566l.877 5.117c.16.93-.815 1.645-1.695 1.203l-4.601-2.42a1.763 1.763 0 00-1.638 0l-4.601 2.42c-.88.442-1.855-.273-1.695-1.203l.877-5.117a1.763 1.763 0 00-.508-1.566l-3.714-3.615c-.688-.67-.308-1.842.642-1.98l5.136-.745a1.763 1.763 0 001.34-1.24l1.523-4.656z" />
            </svg>
          ))}
        </div>
      </div>
      <p className="mt-4 text-gray-600">{review.comment}</p>

      {/* Conditional rendering af delete knap baseret på om det er brugerens eget review */}

      {isUserReview && (
        <div className="text-right mt-2">
          <button
            onClick={handleDelete}
            className="text-red-600 hover:text-red-800 text-sm"
          >
            delete
          </button>
        </div>
      )}
    </div>
  );
};

export default ReviewItem;
