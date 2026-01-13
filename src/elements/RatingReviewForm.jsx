import React from 'react';
import { IoSend } from "react-icons/io5";
import { Link } from 'react-router';

const RatingReviewForm = () => {
    return (
      <div className='my-10'>
      <ul className="list bg-base-100 rounded-box shadow-md">
        <li className="p-4 pb-2 text-lg font-bold tracking-wide">
          Write a review
        </li>

        <li className="list-row">
          <div>
            <img
              className="size-10 rounded-box"
              src="https://img.daisyui.com/images/profile/demo/1@94.webp"
            />
          </div>
          <div>
            <div>Dio Lupa</div>
            <div className="text-xs uppercase font-semibold opacity-60">
             <input type="text" placeholder='write a review' className="input w-full input-xl mt-1" />

            </div>
          </div>
          
          <button>
            <div className="rating">
<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="2 star" defaultChecked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="5 star" />
            </div>

          </button>

          <button> <Link><IoSend size={20}/></Link> </button>
      
        </li>
           
           </ul>
        </div>
    );
};

export default RatingReviewForm;