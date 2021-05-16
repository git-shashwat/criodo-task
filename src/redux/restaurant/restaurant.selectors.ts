import { createSelector } from "reselect";
import { selectCuisineFilter } from "../filters/filters.selectors";
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
  [selectRestaurant, selectCuisineFilter],
  (restaurant, cuisineFilter) => {
    if (cuisineFilter.length > 0)
      return (
        reorderRestaurantsByPromotionFlag(
          filterListByCuisine(restaurant.restaurantsList!, cuisineFilter)
        ) || []
      );
    return reorderRestaurantsByPromotionFlag(restaurant.restaurantsList!) || [];
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
