import React, { useState } from 'react';
import { IoSend } from "react-icons/io5";
import useAuth from './../hooks/useAuth';
import useAxiosSecure from '../hooks/useAxiosSecure';

const RatingReviewForm = () => {
    const { user } = useAuth();
    const [reviewText, setReviewText] = useState('');
    const [rating, setRating] = useState(0);

    const axiosSecure = useAxiosSecure()

    // Handle form submission
    const handleSubmit = () => {
        if (!reviewText.trim()) {
            alert("Please write a review");
            return;
        }
        if (rating === 0) {
            alert("Please select a rating");
            return;
        }

        // Create the review object
        const reviewData = {    
            userName: user?.displayName || "Anonymous",
            userEmail: user?.email,
            userPhoto: user?.photoURL,
            rating: rating,
            review: reviewText,
            createdAt: new Date().toISOString()
        };

        axiosSecure.post("/users/reviews", reviewData).then(()=>{
            
        // Reset form
        setReviewText('');
        setRating(0);
        
        // Reset radio buttons
        document.querySelectorAll('input[name="rating-2"]').forEach(radio => {
            radio.checked = false;
        })
        
        });
    };

    // Handle rating change
    const handleRatingChange = (value) => {
        setRating(value);
    };

    return (
        <div className='my-10'>
            <ul className="list bg-base-100 rounded-box shadow-md">
                <li className="p-4 pb-2 text-lg font-bold tracking-wide">
                    Write a review
                </li>

                <li className="list-row">
                    <div>
                        <img
                            className="size-12 rounded-box rounded-full"
                            src={user?.photoURL || "https://www.svgrepo.com/show/452030/avatar-default.svg"}
                            alt={user?.displayName || "User"}
                        />
                    </div>
                    <div className="flex-1">
                        <div className="font-semibold">{user?.displayName || "Anonymous"}</div>
                        <input 
                            type="text" 
                            placeholder='Write a review' 
                            className="input w-full input-md mt-1"
                            value={reviewText}
                            onChange={(e) => setReviewText(e.target.value)}
                        />
                    </div>
                    
                    <div className="mt-4">
                        <div className="rating">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <input 
                                    key={star}
                                    type="radio" 
                                    name="rating-2" 
                                    className="mask mask-star-2 bg-orange-400" 
                                    aria-label={`${star} star`}
                                    onClick={() => handleRatingChange(star)}
                                />
                            ))}
                        </div>
                        {rating > 0 && (
                            <div className="text-xs text-center mt-1 text-orange-600">
                                Rated: {rating} star{rating !== 1 ? 's' : ''}
                            </div>
                        )}
                    </div>

                    <button 
                        className='mt-4 btn btn-ghost btn-sm' 
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