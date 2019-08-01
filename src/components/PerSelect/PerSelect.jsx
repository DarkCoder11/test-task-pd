import React from "react";
import PropTypes from "prop-types";
import { inject, observer } from "mobx-react";
import { perOptions } from "../../constants";

import Select from "react-select";
import "../../assets/styles/PerSelect.scss";

const PerSelect = ({ PokemonStore: { listStatus, setPerPage } }) => {
  let selectEl = null;

  const changeHandler = ({ value }) => {
    const { value: currentValue } = selectEl.state.value;

    currentValue !== value && setPerPage(value);
  };

  return (
    <Select
      options={perOptions}
      isSearchable={false}
      isDisabled={!listStatus}
      onChange={changeHandler}
      ref={el => (selectEl = el)}
      defaultValue={perOptions[0]}
      className="per-page__select"
      classNamePrefix="per-page__select"
    />
  );
};

PerSelect.propTypes = {
  PokemonStore: PropTypes.shape({
    setPerPage: PropTypes.func.isRequired,
    listStatus: PropTypes.bool.isRequired
  })
};

export default inject("PokemonStore")(observer(PerSelect));
