import _ from "lodash";
import { TRestaurant } from "./restaurant.types";

export const reorderRestaurantsByPromotionFlag = (
  restaurantsList: TRestaurant[]
) => {
  if (restaurantsList) {
    const promotedRestaurants = restaurantsList.filter(
      (restaurant) => restaurant.meta.promoted
    );
    const unpromotedRestaurants = restaurantsList.filter(
      (restaurant) => !restaurant.meta.promoted
    );

    return promotedRestaurants.concat(unpromotedRestaurants);
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
