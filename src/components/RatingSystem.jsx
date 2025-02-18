import { useState } from "react";
import "../styles/RatingSystem.css";

const RatingSystem = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className="rating-container">
      <div className="stars-container">
        {[...Array(5)].map((_, index) => {
          const starValue = index + 1;
          return (
            <button
              type="button"
              key={index}
              className={`star-btn ${
                starValue <= (hover || rating) ? "active" : ""
              }`}
              onClick={() => setRating(starValue)}
              onMouseEnter={() => setHover(starValue)}
              onMouseLeave={() => setHover(rating)}
            >
              <span className="star">★</span>
            </button>
          );
        })}
      </div>
      <p className="rating-text">{rating > 0 ? `${rating} stars` : "Rate"}</p>
    </div>
  );
};

export default RatingSystem;
