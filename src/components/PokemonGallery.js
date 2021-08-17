import React from "react";
import POKEMON from "../pokemon/pokemon";
import PokemonCard from "./PokemonCard";

const style = {
  header: {
    fontSize: "100px",
    color: "red",
    textAlign: "center",
  },
};

function PokemonGallery() {
  //console.log(POKEMON);
  return (
    <div>
      <div style={style.header}>PokeDex</div>
      <div className="pokemonGallery">
        {POKEMON.map((pokemon) => (
          <PokemonCard pokemon={pokemon}></PokemonCard>
        ))}
      </div>
    </div>
  );
}

export default PokemonGallery;
