import { TRestaurant } from "../../redux/restaurant/restaurant.types";

export interface IRestaurantsListDesiredSelection {
  isLoading: boolean | null;
}

export interface IRestaurantsListProps {
  restaurantsList: TRestaurant[];
}
