import React, { memo } from "react";
import PropTypes from "prop-types";
import { ClipLoader } from "react-spinners";
import { inject, observer } from "mobx-react";

import Pokemon from "../../components/Pokemon/Pokemon";
import "../../assets/styles/PokemonList.scss";

const PokemonList = ({ PokemonStore }) => {
  const {
    tagValues,
    listStatus,
    searchTerm,
    pokemonList,
    filteredPokemonList,
    filteredListIsTag
  } = PokemonStore;
  const list =
    searchTerm || tagValues.length
      ? filteredListIsTag
        ? filteredListIsTag
        : filteredPokemonList
      : pokemonList;
  let content = null;

  if (listStatus) {
    content = list.length ? (
      list.map(({ name, sprites, types, stats }) => (
        <Pokemon
          key={name}
          name={name}
          stats={stats}
          types={types}
          sprites={sprites}
        />
      ))
    ) : (
      <div className="warning__container">
        <h4>Not found pokemons that type or name in this page</h4>
        <p>Reset your filter settings and try again!</p>
      </div>
    );
  } else {
    content = (
      <div className="loader__container">
        <ClipLoader />
      </div>
    );
  }

  return (
    <section>
      <div className="container">
        <div className="pokemon-list__wrapper">{content}</div>
      </div>
    </section>
  );
};

PokemonList.propTypes = {
  PokemonStore: PropTypes.shape({
    tagValues: PropTypes.array.isRequired,
    listStatus: PropTypes.bool.isRequired,
    pokemonList: PropTypes.array.isRequired,
    searchTerm: PropTypes.string.isRequired,
    filteredPokemonList: PropTypes.array.isRequired,
    filteredListIsTag: PropTypes.oneOfType([PropTypes.bool, PropTypes.object])
  })
};

export default memo(inject("PokemonStore")(observer(PokemonList)));
