import {
  RestaurantState,
  RestaurantActionTypes,
  FETCH_RESTAURANTS_LIST_START,
  FETCH_RESTAURANTS_LIST_SUCCESS,
  FETCH_RESTAURANTS_LIST_FAILURE,
} from "./restaurant.types";

const initialState: RestaurantState = {
  isRestaurantsListFetching: false,
  restaurantsList: null,
  errorMessage: null,
};

export const restaurantReducer = (
  state = initialState,
  action: RestaurantActionTypes
): RestaurantState => {
  switch (action.type) {
    case FETCH_RESTAURANTS_LIST_START:
      return {
        ...state,
        isRestaurantsListFetching: true,
      };

    case FETCH_RESTAURANTS_LIST_SUCCESS:
      return {
        ...state,
        isRestaurantsListFetching: false,
        restaurantsList: action.payload,
      };

    case FETCH_RESTAURANTS_LIST_FAILURE:
      return {
        ...state,
        isRestaurantsListFetching: false,
        errorMessage: action.payload,
      };

    default:
      return state;
  }
};
