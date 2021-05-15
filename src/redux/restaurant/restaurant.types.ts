export type TRestaurant = {
  id: number;
  isOpen: boolean;
  locality: {
    title: string;
    latitude: number;
    longitude: number;
  };
  meta: {
    title: string;
    cuisines: string;
    averageCostForTwo: number;
    currency: number;
    thumbUrl: string;
    promoted: boolean;
  };
  userRating: {
    aggregateRating: number;
    ratingColor: string;
    numberOfReviews: number;
  };
  link: string;
};

// STATE INTERFACE
export interface RestaurantState {
  isRestaurantsListFetching: boolean;
  restaurantsList: TRestaurant[] | null;
  errorMessage: Error | null;
}

// ACTION TYPES
export const FETCH_RESTAURANTS_LIST_START = "FETCH_RESTAURANTS_LIST_START";
export const FETCH_RESTAURANTS_LIST_SUCCESS = "FETCH_RESTAURANTS_LIST_SUCCESS";
export const FETCH_RESTAURANTS_LIST_FAILURE = "FETCH_RESTAURANTS_LIST_FAILURE";

// ACTION INTERFACES
interface IFetchRestaurantsListStart {
  type: typeof FETCH_RESTAURANTS_LIST_START;
}

interface IFetchRestaurantsListSuccess {
  type: typeof FETCH_RESTAURANTS_LIST_SUCCESS;
  payload: TRestaurant[];
}

interface IFetchRestaurantsListFailure {
  type: typeof FETCH_RESTAURANTS_LIST_FAILURE;
  payload: Error;
}

export type RestaurantActionTypes =
  | IFetchRestaurantsListStart
  | IFetchRestaurantsListSuccess
  | IFetchRestaurantsListFailure;
