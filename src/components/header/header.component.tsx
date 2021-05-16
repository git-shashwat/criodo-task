import React from "react";
import { BiSliderAlt } from "react-icons/bi";
import { connect } from "react-redux";
import {
  Button,
  DropdownItem,
  DropdownMenu,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import { Dispatch } from "redux";
import { createStructuredSelector } from "reselect";
import { setCuisineFilter } from "../../redux/filters/filters.actions";
import { EToSet } from "../../redux/filters/filters.types";
import { selectCuisines } from "../../redux/restaurant/restaurant.selectors";
import { RootState } from "../../redux/root/root.reducer";
import DropdownButton from "../dropdown-button/dropdown-button.component";

import "./header.styles.scss";
import { IHeaderProps, IHeaderSelection } from "./header.types";

const Header: React.FC<IHeaderProps> = ({ cuisineList, setCuisineFilter }) => {
  const handleCuisineFilterChange = (e: React.FormEvent<HTMLInputElement>) => {
    if (e.currentTarget.checked) {
      setCuisineFilter(e.currentTarget.value, EToSet.Set);
    } else {
      setCuisineFilter(e.currentTarget.value, EToSet.Unset);
    }
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
          <DropdownItem>High to Low</DropdownItem>
          <DropdownItem>Low to High</DropdownItem>
        </DropdownMenu>
      </DropdownButton>
      <DropdownButton title={"Cost"}>
        <DropdownMenu>
          <DropdownItem>High to Low</DropdownItem>
          <DropdownItem>Low to High</DropdownItem>
        </DropdownMenu>
      </DropdownButton>
      <FormGroup>
        <Input
          type='text'
          width='20px'
          name='search-text'
          id='search-text'
          placeholder='search by name or cuisine'
        />
      </FormGroup>
    </header>
  );
};

const mapStateToProps = createStructuredSelector<RootState, IHeaderSelection>({
  cuisineList: selectCuisines,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setCuisineFilter: (cuisine: string, toSet: EToSet) =>
    dispatch(
      setCuisineFilter({
        cuisine,
        toSet,
      })
    ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
