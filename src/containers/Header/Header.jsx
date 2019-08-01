import React from "react";

import FilterBox from "../../components/FilterBox/FilterBox";
import PerSelect from "../../components/PerSelect/PerSelect";
import SearchBox from "../../components/SearchBox/SearchBox";
import "../../assets/styles/Header.scss";

const Header = () => (
  <header>
    <div className="container">
      <div className="header">
        <SearchBox />
        <FilterBox />
        <PerSelect />
      </div>
    </div>
  </header>
);

export default Header;
