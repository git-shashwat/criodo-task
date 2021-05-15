import React from "react";
import { TRestaurant } from "../../redux/restaurant/restaurant.types";

const StarRating: React.FC<Pick<TRestaurant, "userRating">> = ({
  userRating: { aggregateRating, ratingColor },
}) => {
  const fullStar = Math.floor(aggregateRating),
    partialStar = aggregateRating % 1;
  return <div className='star-rating'>{}</div>;
};

export default StarRating;
