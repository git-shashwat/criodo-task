// ENUMS
export enum EToSet {
  Unset,
  Set,
}

export enum ESortOrder {
  LowToHigh,
  HighToLow,
}

// STATE INTERFACE
export interface FilterState {
  cuisine: string[];
  sortByRating: ESortOrder | null;
  sortByCost: ESortOrder | null;
  text: string;
}

// ACTION TYPES
export const SET_CUISINE_FILTER = "SET_CUISINE_FILTER";
export const SET_SORT_BY_RATING = "SET_SORT_BY_RATING";
export const SET_SORT_BY_COST = "SET_SORT_BY_COST";
export const SET_TEXT_FILTER = "SET_TEXT_FILTER";

// ACTION INTERFACES
interface ISetCuisineFilter {
  type: typeof SET_CUISINE_FILTER;
  payload: {
    cuisine: string;
    toSet: EToSet;
  };
}

interface ISetSortByRating {
  type: typeof SET_SORT_BY_RATING;
  payload: ESortOrder;
}

interface ISetSortByCost {
  type: typeof SET_SORT_BY_COST;
  payload: ESortOrder;
}

interface ISetTextFilter {
  type: typeof SET_TEXT_FILTER;
  payload: string;
}

export type FilterActionTypes =
  | ISetCuisineFilter
  | ISetSortByRating
  | ISetSortByCost
  | ISetTextFilter;
