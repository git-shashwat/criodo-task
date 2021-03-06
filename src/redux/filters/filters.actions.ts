import {
  ESortOrder,
  EToSet,
  FilterActionTypes,
  SET_CUISINE_FILTER,
  SET_SORT_BY_COST,
  SET_SORT_BY_RATING,
  SET_TEXT_FILTER,
} from "./filters.types";

export interface ISetCuisinePayload {
  cuisine: string;
  toSet: EToSet;
}

export const setCuisineFilter = ({
  cuisine,
  toSet,
}: ISetCuisinePayload): FilterActionTypes => ({
  type: SET_CUISINE_FILTER,
  payload: {
    cuisine,
    toSet,
  },
});

export const setSortByRating = (order: ESortOrder): FilterActionTypes => ({
  type: SET_SORT_BY_RATING,
  payload: order,
});

export const setSortByCost = (order: ESortOrder): FilterActionTypes => ({
  type: SET_SORT_BY_COST,
  payload: order,
});

export const setTextFilter = (text: string): FilterActionTypes => ({
  type: SET_TEXT_FILTER,
  payload: text,
});
