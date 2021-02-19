import React, { useState } from "react";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle
} from "reactstrap";

const FilterDropdown = ({
  department,
  setDepartment,
  showType,
  setShowType
}) => {
  const [departmentOpen, setDepartmentOpen] = useState(false);
  const [showOpen, setShowOpen] = useState(false);

  return (
    <div className="filterDropdown">
      <Dropdown
        isOpen={departmentOpen}
        toggle={() => setDepartmentOpen((prevState) => !prevState)}
      >
        <DropdownToggle caret className="dropdown__toggle">
          {department}
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem
            className="dropdown__item"
            onClick={() => setDepartment("Cast")}
          >
            Cast
          </DropdownItem>
          <DropdownItem
            className="dropdown__item"
            onClick={() => setDepartment("Crew")}
          >
            Crew
          </DropdownItem>
          <DropdownItem
            className="dropdown__item"
            onClick={() => setDepartment("Cast & Crew")}
          >
            Cast & Crew
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <Dropdown
        isOpen={showOpen}
        toggle={() => setShowOpen((prevState) => !prevState)}
      >
        <DropdownToggle caret className="dropdown__toggle">
          {showType}
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem
            className="dropdown__item"
            onClick={() => setShowType("movies")}
          >
            movie
          </DropdownItem>
          <DropdownItem
            className="dropdown__item"
            onClick={() => setShowType("Tv")}
          >
            Tv
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default FilterDropdown;
