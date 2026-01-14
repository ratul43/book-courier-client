import React, { useState } from "react";
import { IoSend } from "react-icons/io5";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";

const RatingReviewForm = ({ setReviews, id, name }) => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState(0);

  const handleSubmit = async () => {
    if (!reviewText.trim()) {
      alert("Please write a review");
      return;
    }
    if (rating === 0) {
      alert("Please select a rating");
      return;
    }

    const reviewData = {
      userName: user?.displayName || "Anonymous",
      userEmail: user?.email,
      userPhoto: user?.photoURL,
      bookId: id,
      bookName: name,
      rating,
      review: reviewText,
      createdAt: new Date(),
    };

    // POST review
    const res = await axiosSecure.post("/reviews", reviewData);

    // ✅ instant UI update (NO reload)
    setReviews(prev => [res.data, ...prev]);

    // reset form
    setReviewText("");
    setRating(0);

    document
      .querySelectorAll('input[name="rating-2"]')
      .forEach(radio => (radio.checked = false));
  };

  return (
    <div className="my-10">
      <ul className="list bg-base-100 rounded-box shadow-md">
        <li className="p-4 pb-2 text-lg font-bold tracking-wide">
          Write a review
        </li>

        <li className="list-row">
          <div>
            <img
              className="size-12 rounded-box rounded-full"
              src={
                user?.photoURL ||
                "https://www.svgrepo.com/show/452030/avatar-default.svg"
              }
              alt="user"
            />
          </div>

          <div className="flex-1">
            <div className="font-semibold">
              {user?.displayName || "Anonymous"}
            </div>

            <input
              type="text"
              placeholder="Write a review"
              className="input w-full input-md mt-1"
              value={reviewText}
              onChange={e => setReviewText(e.target.value)}
            />
          </div>

          <div className="mt-4">
            <div className="rating">
              {[1, 2, 3, 4, 5].map(star => (
                <input
                  key={star}
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  aria-label={`${star} star`}
                  onClick={() => setRating(star)}
                />
              ))}
            </div>

            {rating > 0 && (
              <div className="text-xs text-center mt-1 text-orange-600">
                Rated: {rating} star{rating !== 1 ? "s" : ""}
              </div>
            )}
          </div>

          <button
            className="mt-4 btn btn-ghost btn-sm"
            onClick={handleSubmit}
            disabled={!reviewText.trim() || rating === 0}
          >
            <IoSend size={20} />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default RatingReviewForm;
