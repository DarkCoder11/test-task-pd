import React, { Component } from "react";
import PropTypes from "prop-types";
import { inject, observer } from "mobx-react";

import Header from "./containers/Header/Header";
import Pagination from "./containers/Pagination/Pagination";
import PokemonList from "./containers/PokemonList/PokemonList";
import "./assets/styles/App.scss";

class App extends Component {
  componentDidMount() {
    this.pokeFetches();
  }

  pokeFetches = () => {
      const { getPokemonList, getPokemonTypes } = this.props.PokemonStore;

      getPokemonList();
      getPokemonTypes();
  };

  render() {
    return (
      <>
        <Header />
        <Pagination />
        <PokemonList />
      </>
    );
  }
}

App.propTypes = {
  PokemonStore: PropTypes.shape({
      getPokemonList: PropTypes.func.isRequired,
      getPokemonTypes: PropTypes.func.isRequired,
  }),
};

export default inject("PokemonStore")(observer(App));
