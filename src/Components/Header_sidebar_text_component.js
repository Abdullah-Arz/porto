import { faAngleRight, faCompass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";
import "../Sass/Header_sidebar_text_component.scss";

function Header_sidebar_text_component({ name, icon, navigation }) {

  const navigate = useNavigate();

  const Navigation = () => {
    navigate(navigation)  
  }
  return (
    <div onClick={Navigation} className="header-sidebar-accordion">
      <div className="header-sidebar-accordion-div">
        <FontAwesomeIcon
          icon={icon}
          className="header-sidebar-accordion-icon"
        />
        <span className="header-sidebar-accordion-text">{name}</span>
      </div>
      <FontAwesomeIcon
        icon={faAngleRight}
        className="header-sidebar-accordion-icon"
      />
    </div>
  );
}

export default Header_sidebar_text_component;
