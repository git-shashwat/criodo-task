import React, { useState } from "react";
import { ButtonDropdown, DropdownToggle } from "reactstrap";
import { FiChevronDown } from "react-icons/fi";

import "./dropdown-button.styles.scss";
import { IDropdownButtonProps } from "./dropdown-button.types";

const DropdownButton: React.FC<IDropdownButtonProps> = ({
  title,
  icon,
  isCaretVisible,
  children,
}) => {
  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);
  return (
    <>
      <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle className='dropdown-button__toggle' outline>
          {icon && (
            <span className='dropdown-button__toggle__icon'>{icon}</span>
          )}
          {title}
          {isCaretVisible === undefined && <FiChevronDown />}
        </DropdownToggle>
        {children}
      </ButtonDropdown>
    </>
  );
};

export default DropdownButton;
