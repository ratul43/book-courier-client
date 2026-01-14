import React from "react";

const RatingCard = ({ reviews }) => {
  return (
    <div className="my-10">
      <ul className="list bg-base-100 rounded-box shadow-md">
        <li className="p-4 pb-2 text-lg font-bold tracking-wide">
          Reviews ({reviews.length})
        </li>

        {reviews.length === 0 && (
          <li className="p-4 text-sm text-gray-500">
            No reviews yet. Be the first one ✨
          </li>
        )}

        {reviews.map(review => (
          <li key={review._id} className="list-row">
            <div>
              <img
                className="size-12 rounded-box rounded-full"
                src={
                  review.userPhoto ||
                  "https://www.svgrepo.com/show/452030/avatar-default.svg"
                }
                alt={review.userName}
              />
            </div>

            <div className="flex-1">
              <div className="font-semibold">{review.userName}</div>
              <div className="text-xs opacity-70">{review.review}</div>
            </div>

            <div className="rating">
              {[1, 2, 3, 4, 5].map(star => (
                <input
                  key={star}
                  type="radio"
                  className="mask mask-star-2 bg-orange-400"
                  checked={review.rating === star}
                  readOnly
                />
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RatingCard;
