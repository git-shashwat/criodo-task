export enum EToSet {
  Unset,
  Set,
}

// STATE INTERFACE
export interface FilterState {
  cuisine: string[];
}

// ACTION TYPES
export const SET_CUISINE_FILTER = "SET_CUISINE_FILTER";

// ACTION INTERFACES
interface ISetCuisineFilter {
  type: typeof SET_CUISINE_FILTER;
  payload: {
    cuisine: string;
    toSet: EToSet;
  };
}

export type FilterActionTypes = ISetCuisineFilter;
