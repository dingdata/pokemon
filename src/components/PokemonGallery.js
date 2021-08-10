import React from "react";
import POKEMON from "../pokemon/pokemon";
import PokemonCard from "./PokemonCard";

function PokemonGallery() {
  //console.log(POKEMON);
  return (
    <div className="pokemonGallery">
      {POKEMON.map((pokemon) => (
        <PokemonCard pokemon={pokemon}></PokemonCard>
      ))}
    </div>
  );
}

export default PokemonGallery;
