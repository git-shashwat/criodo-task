import { combineReducers } from "redux";
import { restaurantReducer } from "../restaurant/restaurant.reducer";

export const rootReducer = combineReducers({
  restaurant: restaurantReducer,
});

//TODO Add persistconfig later

export type RootState = ReturnType<typeof rootReducer>;
