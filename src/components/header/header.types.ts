import {
  ESortOrder,
  EToSet,
  FilterActionTypes,
} from "../../redux/filters/filters.types";

export interface IHeaderSelection {
  cuisineList: string[];
  ratingSortOrder: ESortOrder | null;
  costSortOrder: ESortOrder | null;
  cuisineFilter: string[];
  textFilter: string;
}

export interface IHeaderProps extends IHeaderSelection {
  setCuisineFilter: (cuisine: string, toSet: EToSet) => FilterActionTypes;
  setSortByRating: (order: ESortOrder) => FilterActionTypes;
  setSortByCost: (order: ESortOrder) => FilterActionTypes;
  setTextFilter: (text: string) => FilterActionTypes;
}
