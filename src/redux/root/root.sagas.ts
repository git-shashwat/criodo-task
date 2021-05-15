import { all, call } from "redux-saga/effects";
import { restaurantSagas } from "../restaurant/restaurant.sagas";

export default function* rootSaga() {
  yield all([call(restaurantSagas)]);
}
