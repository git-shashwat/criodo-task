import { EToSet, FilterActionTypes, SET_CUISINE_FILTER } from "./filters.types";

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
