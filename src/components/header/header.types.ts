import { EToSet, FilterActionTypes } from "../../redux/filters/filters.types";

export interface IHeaderSelection {
  cuisineList: string[];
}

export interface IHeaderProps extends IHeaderSelection {
  setCuisineFilter: (cuisine: string, toSet: EToSet) => FilterActionTypes;
}
