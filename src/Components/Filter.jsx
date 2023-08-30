import React, { useState } from "react";
import {
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem,
} from "mdb-react-ui-kit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import "../Sass/Filter.scss";

const Filter = () => {
  const [take_data, setTake_Data] = useState("Default Sorting");

  const Sort = (data) => {
    setTake_Data(data);
  };

  // var e = document.getElementById("ddlViewBy");
  // console.log('e ------ ',e)
  // var value = e.value;
  // var text = e.options[e.selectedIndex].text;

  // console.log('Value -------- ',value)
  // console.log('Text -------- ',text)

  return (
    <div className="filter-maincontainer">
      {/* <form> */}
        <select id="ddlViewBy">
          <option className="filter-opt-1">Default Sorting</option>
          <option className="filter-opt-1">SORT BY NEWNESS</option>
          <option className="filter-opt-1">SORT BY PRICE: LOW TO HIGH</option>
          <option className="filter-opt-1">SORT BY PRICE: HIGH TO LOW</option>
        </select>
      {/* </form> */}
    </div>
  );
};

export default Filter;
