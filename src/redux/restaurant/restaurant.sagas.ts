import { takeLatest, call, put, all } from "redux-saga/effects";
import Axios from "axios";
import { FETCH_RESTAURANTS_LIST_START, TRestaurant } from "./restaurant.types";
import {
  fetchRestaurantsListFailure,
  fetchRestaurantsListSuccess,
} from "./restaurant.actions";

export function* fetchRestaurantsListAsync() {
  try {
    const { data }: { data: TRestaurant[] } = yield Axios({
      method: "GET",
      url: process.env.REACT_APP_API_URL,
    });
    yield put(fetchRestaurantsListSuccess(data));
  } catch (error) {
    yield put(fetchRestaurantsListFailure(error));
  }
}

export function* fetchRestaurantsListStart() {
  yield takeLatest(FETCH_RESTAURANTS_LIST_START, fetchRestaurantsListAsync);
}

export function* restaurantSagas() {
  yield all([call(fetchRestaurantsListStart)]);
}
