import _ from "lodash";
import { ESortOrder } from "../filters/filters.types";
import { TRestaurant } from "./restaurant.types";

export const sortRestaurants = (
  restaurantsList: TRestaurant[],
  ratingSort: ESortOrder | null,
  costSort: ESortOrder | null
) => {
  if (ratingSort !== null) {
    restaurantsList.sort((a, b) => {
      if (ratingSort === ESortOrder.LowToHigh)
        return a.userRating.aggregateRating - b.userRating.aggregateRating;
      return b.userRating.aggregateRating - a.userRating.aggregateRating;
    });
  }
  if (costSort !== null) {
    restaurantsList.sort((a, b) => {
      if (costSort === ESortOrder.LowToHigh)
        return a.meta.averageCostForTwo - b.meta.averageCostForTwo;
      return b.meta.averageCostForTwo - a.meta.averageCostForTwo;
    });
  }

  return restaurantsList;
};

export const reorderRestaurantsByPromotionFlag = (
  restaurantsList: TRestaurant[],
  ratingSort: ESortOrder | null,
  costSort: ESortOrder | null
) => {
  if (restaurantsList) {
    const promotedRestaurants = restaurantsList.filter(
      (restaurant) => restaurant.meta.promoted
    );
    const unpromotedRestaurants = restaurantsList.filter(
      (restaurant) => !restaurant.meta.promoted
    );

    return sortRestaurants(promotedRestaurants, ratingSort, costSort).concat(
      sortRestaurants(unpromotedRestaurants, ratingSort, costSort)
    );
  }
  return [];
};

export const cuisineListGenerator = (restaurantsList: TRestaurant[]) => {
  if (restaurantsList) {
    const cuisineSet = new Set();
    restaurantsList.forEach((restaurant) => {
      const cuisines = restaurant.meta.cuisines.split(", ");
      cuisines.forEach((c) => cuisineSet.add(c));
    });

    const cuisineArray = Array.from(cuisineSet) as string[];
    return cuisineArray;
  }
  return [];
};

export const filterListByCuisine = (
  restaurantList: TRestaurant[],
  cuisineFilter: string[]
) => {
  if (restaurantList) {
    return restaurantList.filter((restaurant) => {
      const cuisines = restaurant.meta.cuisines.split(", ");
      return _.intersectionWith(cuisines, cuisineFilter).length > 0;
    });
  }
  return [];
};
