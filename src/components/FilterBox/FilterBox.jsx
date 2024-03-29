import React, { Component } from "react";
import PropTypes from "prop-types";
import { inject, observer } from "mobx-react";
import { typeColors, typeColourStyles } from "../../constants";

import Select from "react-select";
import "../../assets/styles/FilterBox.scss";

class FilterBox extends Component {
  state = {
    tags: []
  };

  componentDidUpdate() {
    if (!this.props.PokemonStore.tagValues.length && this.state.tags.length) {
      this.setState({ tags: [] });
    }
  }

  selectTagValueHandler = tags => {
    const selectedTags = tags.map(({ value }) => value);

    this.setState({ tags });
    this.props.PokemonStore.filterPokemon(selectedTags);
  };

  getOptions = () =>
    this.props.PokemonStore.pokemonTypes.map(({ name }) => {
      const [{ color }] = typeColors.filter(
        typeColor => typeColor.name === name
      );

      return {
        value: name,
        label: name,
        color
      };
    });

  render() {
    const { tags } = this.state;
    const { typeStatus, listStatus } = this.props.PokemonStore;
    const options = this.getOptions();
    const disabled = !typeStatus || !listStatus;

    return (
      <div className="type-filter__container">
        <Select
          isMulti
          isDisabled={disabled}
          value={tags}
          options={options}
          styles={typeColourStyles}
          onChange={this.selectTagValueHandler}
          placeholder="Select type tags"
          className="type-filter__select"
          classNamePrefix="type-filter-prefix__select"
        />
      </div>
    );
  }
}

FilterBox.propTypes = {
  PokemonStore: PropTypes.shape({
    tagValues: PropTypes.array.isRequired,
    filterPokemon: PropTypes.func.isRequired,
    pokemonTypes: PropTypes.array.isRequired,
    listStatus: PropTypes.bool.isRequired,
    typeStatus: PropTypes.bool.isRequired
  })
};

export default inject("PokemonStore")(observer(FilterBox));
