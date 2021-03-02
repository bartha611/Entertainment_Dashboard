import React, { useState } from "react";
import CompleteDropdown from "./Dropdown";

const FilterDropdown = ({
  department,
  setDepartment,
  showType,
  setShowType,
  sortBy,
  setSortBy
}) => {
  return (
    <div className="filterDropdown">
      <CompleteDropdown
        title={"Filter Department"}
        items={["Cast", "Crew"]}
        current={department}
        setCurrent={setDepartment}
      />
      <CompleteDropdown
        title={"Sort Results By"}
        items={[
          "Popularity Descending",
          "Popularity Ascending",
          "Release Date Ascending",
          "Release Date Descending",
          "Top Rated Descending",
          "Top Rated Ascending"
        ]}
        current={sortBy}
        setCurrent={setSortBy}
      />
    </div>
  );
};

export default FilterDropdown;
