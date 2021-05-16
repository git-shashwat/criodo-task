import {
  FilterActionTypes,
  FilterState,
  SET_CUISINE_FILTER,
  EToSet,
} from "./filters.types";

const initialState: FilterState = {
  cuisine: [],
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

    default:
      return state;
  }
};
