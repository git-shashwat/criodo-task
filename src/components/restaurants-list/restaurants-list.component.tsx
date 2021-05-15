import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectRestaurantsList } from "../../redux/restaurant/restaurant.selectors";
import { RootState } from "../../redux/root/root.reducer";
import RestaurantCard from "../restaurant-card/restaurant-card.component";

import "./restaurants-list.styles.scss";
import { IRestaurantsListProps } from "./restaurants-list.types";

const RestaurantsList: React.FC<IRestaurantsListProps> = ({
  restaurantsList,
}) => {
  return (
    <div className='restaurant-list'>
      {restaurantsList.map(({ id, ...rest }) => (
        <RestaurantCard key={id} {...rest} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector<
  RootState,
  IRestaurantsListProps
>({
  restaurantsList: selectRestaurantsList,
});

export default connect(mapStateToProps)(RestaurantsList);
