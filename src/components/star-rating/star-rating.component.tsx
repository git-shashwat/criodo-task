import React from "react";
import { AiFillStar } from "react-icons/ai";
import { TRestaurant } from "../../redux/restaurant/restaurant.types";
import _ from "lodash";

import "./star-rating.styles.scss";

const StarRating: React.FC<Pick<TRestaurant, "userRating">> = ({
  userRating: { aggregateRating, ratingColor },
}) => {
  const fullStar = Math.trunc(aggregateRating);
  let partialStar = aggregateRating % 1,
    temp = partialStar;

  return (
    <div className='star-rating'>
      {_.range(1, 6).map((rate) => (
        <div
          className='star-rating__wrapper'
          key={rate}
          style={{
            background: `${
              rate <= fullStar
                ? `#${ratingColor}`
                : Math.ceil(--temp) === 0
                ? `linear-gradient(to right, #${ratingColor} ${Math.trunc(
                    partialStar * 100
                  )}%, black 50%)`
                : ""
            }`,
          }}
        >
          <AiFillStar />
        </div>
      ))}
    </div>
  );
};

export default StarRating;
