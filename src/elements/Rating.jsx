import { useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";

const Rating = ({ value = 0, onChange }) => {
  const [hover, setHover] = useState(null);

  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className="cursor-pointer text-yellow-400 text-xl"
          onClick={() => onChange && onChange(star)}
          onMouseEnter={() => setHover(star)}
          onMouseLeave={() => setHover(null)}
        >
          {(hover || value) >= star ? <FaStar /> : <FaRegStar />}
        </span>
      ))}
    </div>
  );
};

export default Rating;
