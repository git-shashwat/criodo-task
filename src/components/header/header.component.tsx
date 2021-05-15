import React from "react";
import { BiSliderAlt } from "react-icons/bi";
import { FormGroup, Input } from "reactstrap";
import DropdownButton from "../dropdown-button/dropdown-button.component";

import "./header.styles.scss";

const Header = () => {
  return (
    <header className='header'>
      <DropdownButton
        title={"Filters"}
        icon={<BiSliderAlt />}
        isCaretVisible={false}
      />
      <DropdownButton title={"Rating"} />
      <DropdownButton title={"Cost"} />
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

export default Header;
