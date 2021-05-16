import { createSelector } from "reselect";
import { RootState } from "../root/root.reducer";
import { FilterState } from "./filters.types";

export const selectFilter = (state: RootState): FilterState => state.filter;

export const selectCuisineFilter = createSelector(
  selectFilter,
  (filter) => filter.cuisine
);

export const selectRatingSort = createSelector(
  selectFilter,
  (filter) => filter.sortByRating
);

export const selectCostSort = createSelector(
  selectFilter,
  (filter) => filter.sortByCost
);

export const selectTextFilter = createSelector(
  selectFilter,
  (filter) => filter.text
);
