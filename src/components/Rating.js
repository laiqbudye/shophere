import React from "react";

const Rating = ({ val, numOfReviews, color = "#ffa41c" }) => {
  return (
    <div className="rating">
      {[1, 2, 3, 4, 5].map((item) => (
        <span>
          <i
            style={{ color: color }}
            className={
              val >= item
                ? "fas fa-star"
                : val >= item - 0.5
                ? "fas fa-star-half-alt"
                : "far fa-star"
            }
          ></i>
        </span>
      ))}
      <span className="m-2">{numOfReviews} reviews</span>
    </div>
  );
};

export default Rating;
