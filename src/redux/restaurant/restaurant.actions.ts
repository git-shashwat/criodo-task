import {
  FETCH_RESTAURANTS_LIST_FAILURE,
  FETCH_RESTAURANTS_LIST_START,
  FETCH_RESTAURANTS_LIST_SUCCESS,
  RestaurantActionTypes,
  TRestaurant,
} from "./restaurant.types";

export const fetchRestaurantsListStart = (): RestaurantActionTypes => {
  return {
    type: FETCH_RESTAURANTS_LIST_START,
  };
};

export const fetchRestaurantsListSuccess = (restaurantsList: TRestaurant[]) => {
  return {
    type: FETCH_RESTAURANTS_LIST_SUCCESS,
    payload: restaurantsList,
  };
};

export const fetchRestaurantsListFailure = (
  errorMessage: Error
): RestaurantActionTypes => {
  return {
    type: FETCH_RESTAURANTS_LIST_FAILURE,
    payload: errorMessage,
  };
};
