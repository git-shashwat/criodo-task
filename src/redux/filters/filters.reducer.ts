import {
  FilterActionTypes,
  FilterState,
  SET_CUISINE_FILTER,
  EToSet,
  SET_SORT_BY_RATING,
  ESortOrder,
  SET_SORT_BY_COST,
  SET_TEXT_FILTER,
} from "./filters.types";

const initialState: FilterState = {
  cuisine: [],
  sortByRating: ESortOrder.HighToLow,
  sortByCost: null,
  text: "",
};

export const filterReducer = (
  state = initialState,
  action: FilterActionTypes
): FilterState => {
  switch (action.type) {
    case SET_CUISINE_FILTER:
      return {
        ...state,
        cuisine:
          action.payload.toSet === EToSet.Set
            ? state.cuisine.concat(action.payload.cuisine)
            : state.cuisine.filter((el) => el !== action.payload.cuisine),
      };

    case SET_SORT_BY_RATING:
      return {
        ...state,
        sortByRating: action.payload,
        sortByCost: null,
      };

    case SET_SORT_BY_COST:
      return {
        ...state,
        sortByCost: action.payload,
        sortByRating: null,
      };

    case SET_TEXT_FILTER:
      return {
        ...state,
        text: action.payload,
      };

    default:
      return state;
  }
};
