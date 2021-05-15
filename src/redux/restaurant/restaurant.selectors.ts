import { createSelector } from "reselect";
import { RootState } from "../root/root.reducer";
import { RestaurantState } from "./restaurant.types";
import { reorderRestaurantsByPromotionFlag } from "./restaurant.utils";

export const selectRestaurant = (state: RootState): RestaurantState =>
  state.restaurant;

export const selectRestaurantsList = createSelector(
  selectRestaurant,
  (restaurant) =>
    reorderRestaurantsByPromotionFlag(restaurant.restaurantsList!) || []
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
