import React, { useState } from "react";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Collapse
} from "reactstrap";

const CompleteDropdown = ({ title, items, current, setCurrent }) => {
  const [isCollapse, setIsCollapse] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div
        className="filterDropdown__item"
        onClick={() => setIsCollapse(!isCollapse)}
      >
        {title} &#9660;
      </div>
      <Collapse isOpen={isCollapse}>
        <Dropdown
          isOpen={isOpen}
          toggle={() => setIsOpen((prevState) => !prevState)}
          className="filterDropdown__dropdown"
        >
          <DropdownToggle caret className="filterDropdown__toggle">
            {current}
          </DropdownToggle>
          <DropdownMenu>
            {items?.map((item) => {
              return (
                <DropdownItem
                  className="filterDropdown__dropdownItem"
                  onClick={() => setCurrent(item)}
                >
                  {item}
                </DropdownItem>
              );
            })}
          </DropdownMenu>
        </Dropdown>
      </Collapse>
    </div>
  );
};

export default CompleteDropdown;
