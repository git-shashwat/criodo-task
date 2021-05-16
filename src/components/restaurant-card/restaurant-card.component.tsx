import React from "react";
import {
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
  Col,
  Row,
} from "reactstrap";
import { BsDot } from "react-icons/bs";
import { TRestaurant } from "../../redux/restaurant/restaurant.types";
import StarRating from "../star-rating/star-rating.component";

import "./restaurant-card.styles.scss";
import _ from "lodash";

const RestaurantCard: React.FC<Omit<TRestaurant, "id">> = ({
  isOpen,
  link,
  locality,
  meta,
  userRating,
}) => {
  return (
    <>
      <Card
        body
        className='restaurant-card'
        style={{
          cursor: `${isOpen ? "pointer" : ""}`,
          opacity: `${!isOpen ? "0.6" : "1"}`,
        }}
      >
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
                <div className='restaurant-card__review__star'>
                  <StarRating userRating={userRating} />
                </div>
                <p style={{ fontWeight: "bold" }}>
                  <small>{userRating.aggregateRating}</small>
                </p>
              </div>
              <div className='text-secondary restaurant-card__review__count'>
                <small>({userRating.numberOfReviews} Delivery Reviews)</small>
              </div>
            </div>
            <h6 className='restaurant-card__cuisines'>{meta.cuisines}</h6>
          </CardSubtitle>
          <CardSubtitle className='text-muted mb-2'></CardSubtitle>
          <CardText className='text-secondary'>
            <div className='restaurant-card__footer'>
              <h6 className='restaurant-card__price'>
                {meta.currency} {meta.averageCostForTwo / 2} per person
              </h6>
              <div>
                {" "}
                <span>
                  <BsDot />
                </span>{" "}
                {_.random(20, 50)} min
              </div>
            </div>
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
