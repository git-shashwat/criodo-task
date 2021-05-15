import React from "react";
import {
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";
import { TRestaurant } from "../../redux/restaurant/restaurant.types";

import "./restaurant-card.styles.scss";

const RestaurantCard: React.FC<Omit<TRestaurant, "id">> = ({
  isOpen,
  link,
  locality,
  meta,
  userRating,
}) => {
  return (
    <>
      <Card body className='restaurant-card'>
        <CardImg
          top
          width='100%'
          src={meta.thumbUrl}
          alt='Card image cap'
          className='restaurant-card__img'
        />
        <CardBody>
          <CardTitle tag='h5'>{meta.title}</CardTitle>
          <CardSubtitle className='text-muted'>
            <div className='restaurant-card__review'>
              <div className='d-flex'>
                <div className='restaurant-card__review__star'>Rating</div>
                <p className='text-bold'>{userRating.aggregateRating}</p>
              </div>
              <div className='text-secondary restaurant-card__review__count'>
                <small>({userRating.numberOfReviews} Delivery Reviews)</small>
              </div>
            </div>
            <h6 className='mb-4 text-bold'>{meta.cuisines}</h6>
          </CardSubtitle>
          <CardSubtitle className='text-muted mb-2'></CardSubtitle>
          <CardText className='text-secondary'>
            <h6 className='restaurant-card__price'>
              {meta.currency} {meta.averageCostForTwo / 2} per person
            </h6>
            {meta.promoted && (
              <p className='text-muted restaurant-card__promoted'>Promoted</p>
            )}
          </CardText>
        </CardBody>
      </Card>
    </>
  );
};

export default RestaurantCard;
