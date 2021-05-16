import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { filterReducer } from "../filters/filters.reducer";
import { restaurantReducer } from "../restaurant/restaurant.reducer";

export const rootReducer = combineReducers({
  restaurant: restaurantReducer,
  filter: filterReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["filter"],
};

export type RootState = ReturnType<typeof rootReducer>;

export default persistReducer(persistConfig, rootReducer);
