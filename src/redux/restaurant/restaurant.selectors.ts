import { createSelector } from "reselect";
import {
  selectCostSort,
  selectCuisineFilter,
  selectRatingSort,
} from "../filters/filters.selectors";
import { ESortOrder } from "../filters/filters.types";
import { RootState } from "../root/root.reducer";
import { RestaurantState } from "./restaurant.types";
import {
  cuisineListGenerator,
  filterListByCuisine,
  reorderRestaurantsByPromotionFlag,
} from "./restaurant.utils";

export const selectRestaurant = (state: RootState): RestaurantState =>
  state.restaurant;

export const selectRestaurantsList = createSelector(
  [selectRestaurant, selectCuisineFilter, selectRatingSort, selectCostSort],
  (restaurant, cuisineFilter, ratingSort, costSort) => {
    let result = reorderRestaurantsByPromotionFlag(
      restaurant.restaurantsList!,
      ratingSort,
      costSort
    );
    if (cuisineFilter.length > 0)
      return filterListByCuisine(result, cuisineFilter) || [];
    return result || [];
  }
);

export const selectCuisines = createSelector(
  selectRestaurant,
  (restaurant) => cuisineListGenerator(restaurant.restaurantsList!) || []
);

export const selectIsRestaurantsListFetching = createSelector(
  [selectRestaurant],
  (restaurant) => restaurant.isRestaurantsListFetching
);

export const selectIsRestaurantsListLoaded = createSelector(
  [selectRestaurant],
  (restaurant) => !!restaurant.restaurantsList
);

export const selectRestaurantError = createSelector(
  [selectRestaurant],
  (restaurant) => restaurant.errorMessage?.message
);
