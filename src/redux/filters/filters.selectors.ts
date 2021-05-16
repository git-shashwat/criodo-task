import { createSelector } from "reselect";
import { RootState } from "../root/root.reducer";
import { FilterState } from "./filters.types";

export const selectFilter = (state: RootState): FilterState => state.filter;

export const selectCuisineFilter = createSelector(
  selectFilter,
  (filter) => filter.cuisine
);
