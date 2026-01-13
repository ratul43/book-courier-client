import React, { useEffect, useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";

const RatingCard = () => {
  const [data, setData] = useState([])
  const axiosSecure = useAxiosSecure()

  useEffect(()=>{
    axiosSecure.get("/reviews")
    .then((res)=>{
      setData(res.data)
    })
  }, [axiosSecure])
  
  return (
    <div>
      <ul className="list bg-base-100 rounded-box shadow-md">
        <li className="p-4 pb-2 text-lg font-bold tracking-wide">
          Reviews ({data.length})
        </li>

        {data.map(datum => (
          <li key={datum._id} className="list-row">
            <div>
              <img
                className="size-12 rounded-box rounded-full"
                src={datum.userPhoto || "https://img.daisyui.com/images/profile/demo/1@94.webp"}
                alt={datum.userName}
              />
            </div>
            <div>
              <div>{datum.userName}</div>
              <div className="text-xs uppercase font-semibold opacity-60">
                {datum.review}
              </div>
            </div>
            
            <button>
              <div className="rating">
                {[1, 2, 3, 4, 5].map((star) => (
                  <input 
                    key={star}
                    type="radio" 
                    name={`rating-${datum._id}`} 
                    className="mask mask-star-2 bg-orange-400" 
                    aria-label={`${star} star`}
                    checked={datum.rating === star}
                    readOnly
                  />
                ))}
              </div>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RatingCard;