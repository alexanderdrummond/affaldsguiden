import { useState } from "react";
import { useUser } from "@/app/context/UserContext";
import useStore from "@/app/store/store";
import Button from "../../Static/atoms/Button";
import { useNotification } from "@/app/context/NotificationContext";

const CommentSection = ({ stationId }) => {
  const [selectedStars, setSelectedStars] = useState(0);
  const [comment, setComment] = useState("");
  const { user } = useUser();
  const { addReview } = useStore((state) => ({
    addReview: state.addReview,
  }));
  const { showNotification } = useNotification();

  const handleStarClick = (starIndex) => {
    setSelectedStars(starIndex);
  };

  const handleSubmit = async () => {
    if (selectedStars === 0) {
      showNotification("error", "Vælg venligst et antal stjerner.");
      return;
    }

    const newReview = {
      org_id: stationId,
      subject: "Anmeldelse",
      comment: comment,
      num_stars: selectedStars,
      date: new Date().toISOString(),
      user: {
        firstname: user.firstname,
        lastname: user.lastname,
      },
    };

    try {
      const response = await fetch("http://localhost:3000/reviews", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newReview),
      });

      if (!response.ok) {
        throw new Error("Failed to post");
      }

      addReview(newReview);
      showNotification("success", "Din kommentar er blevet oprettet.");
      setComment("");
      setSelectedStars(0);
    } catch (error) {
      console.error("Comment error:", error);
      showNotification(
        "error",
        "Der opstod en fejl ved indsendelse af din kommentar."
      );
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto my-8 p-6 ">
      <div className="flex justify-between">
        <h3 className="text-lg font-semibold">Skriv en kommentar</h3>
        <div>
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              onClick={() => handleStarClick(i + 1)}
              className={`w-5 h-5 inline-block cursor-pointer ${
                i < selectedStars ? "bg-yellow-400" : "bg-gray-300"
              } mask-star-filled`}
            ></div>
          ))}
        </div>
      </div>
      <textarea
        className="w-full mt-4 p-2 border rounded-md"
        rows="4"
        placeholder="Din kommentar..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      ></textarea>
      <div className="flex justify-center">
        <Button onClick={handleSubmit}>Send kommentar</Button>
      </div>
    </div>
  );
};

export default CommentSection;
