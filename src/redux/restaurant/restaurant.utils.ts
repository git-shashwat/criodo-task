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
