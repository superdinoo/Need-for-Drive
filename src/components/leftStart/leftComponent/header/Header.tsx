import React from "react";
import "./Header.scss";

import { CiLocationOn } from "react-icons/ci";

const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="logo">
        <h3 className="logoText">Need for drive</h3>
      </div>
      <div className="city">
        <CiLocationOn className="cityIcon" />
        <p className="cityText">Ульяновск</p>
      </div>
    </div>
  );
};

export default Header;
