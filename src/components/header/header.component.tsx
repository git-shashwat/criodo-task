import React from "react";
import { BiSliderAlt } from "react-icons/bi";
import { connect } from "react-redux";
import {
  DropdownItem,
  DropdownMenu,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import { Dispatch } from "redux";
import { createStructuredSelector } from "reselect";
import {
  setCuisineFilter,
  setSortByCost,
  setSortByRating,
  setTextFilter,
} from "../../redux/filters/filters.actions";
import {
  selectCostSort,
  selectCuisineFilter,
  selectRatingSort,
  selectTextFilter,
} from "../../redux/filters/filters.selectors";
import { ESortOrder, EToSet } from "../../redux/filters/filters.types";
import { selectCuisines } from "../../redux/restaurant/restaurant.selectors";
import { RootState } from "../../redux/root/root.reducer";
import DropdownButton from "../dropdown-button/dropdown-button.component";

import "./header.styles.scss";
import { IHeaderProps, IHeaderSelection } from "./header.types";

const Header: React.FC<IHeaderProps> = ({
  cuisineList,
  ratingSortOrder,
  costSortOrder,
  cuisineFilter,
  textFilter,
  setCuisineFilter,
  setSortByRating,
  setSortByCost,
  setTextFilter,
}) => {
  const handleCuisineFilterChange = (e: React.FormEvent<HTMLInputElement>) => {
    if (e.currentTarget.checked) {
      setCuisineFilter(e.currentTarget.value, EToSet.Set);
    } else {
      setCuisineFilter(e.currentTarget.value, EToSet.Unset);
    }
  };

  const handleTextChange = (e: React.FormEvent<HTMLInputElement>) => {
    setTextFilter(e.currentTarget.value);
  };

  return (
    <header className='header'>
      <DropdownButton
        title={"Filters"}
        icon={<BiSliderAlt />}
        isCaretVisible={false}
      >
        <DropdownMenu>
          <DropdownItem header>Cuisines</DropdownItem>
          {cuisineList.map((cuisine, idx) => (
            <div key={idx} className='header__cuisine-filter'>
              {" "}
              <FormGroup check>
                <Label check>
                  <Input
                    type='checkbox'
                    onChange={handleCuisineFilterChange}
                    checked={cuisineFilter.includes(cuisine)}
                    value={cuisine}
                  />
                  {cuisine}
                </Label>
              </FormGroup>
            </div>
          ))}
          <DropdownItem divider />
        </DropdownMenu>
      </DropdownButton>
      <DropdownButton title={"Rating"}>
        <DropdownMenu>
          <DropdownItem
            active={
              ratingSortOrder === null ||
              ratingSortOrder === ESortOrder.HighToLow
            }
            onClick={() => setSortByRating(ESortOrder.HighToLow)}
          >
            High to Low
          </DropdownItem>
          <DropdownItem
            active={
              ratingSortOrder !== null &&
              ratingSortOrder === ESortOrder.LowToHigh
            }
            onClick={() => setSortByRating(ESortOrder.LowToHigh)}
          >
            Low to High
          </DropdownItem>
        </DropdownMenu>
      </DropdownButton>
      <DropdownButton title={"Cost"}>
        <DropdownMenu>
          <DropdownItem
            active={
              costSortOrder === null || costSortOrder === ESortOrder.LowToHigh
            }
            onClick={() => setSortByCost(ESortOrder.LowToHigh)}
          >
            Low to High
          </DropdownItem>
          <DropdownItem
            active={
              costSortOrder !== null && costSortOrder === ESortOrder.HighToLow
            }
            onClick={() => setSortByCost(ESortOrder.HighToLow)}
          >
            High to Low
          </DropdownItem>
        </DropdownMenu>
      </DropdownButton>
      <FormGroup>
        <Input
          type='text'
          width='20px'
          name='search-text'
          id='search-text'
          placeholder='search by name or cuisine'
          value={textFilter}
          onChange={handleTextChange}
        />
      </FormGroup>
    </header>
  );
};

const mapStateToProps = createStructuredSelector<RootState, IHeaderSelection>({
  cuisineList: selectCuisines,
  ratingSortOrder: selectRatingSort,
  costSortOrder: selectCostSort,
  cuisineFilter: selectCuisineFilter,
  textFilter: selectTextFilter,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setCuisineFilter: (cuisine: string, toSet: EToSet) =>
    dispatch(
      setCuisineFilter({
        cuisine,
        toSet,
      })
    ),
  setSortByRating: (order: ESortOrder) => dispatch(setSortByRating(order)),
  setSortByCost: (order: ESortOrder) => dispatch(setSortByCost(order)),
  setTextFilter: (text: string) => dispatch(setTextFilter(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
