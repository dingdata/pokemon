import React from "react";

function PokemonCard({ pokemon }) {
  const { id, name, type, base } = pokemon;
  return (
    <div className="container">
      <div>
        <img
          src={`${process.env.PUBLIC_URL}/pokemonImage/${id}.png`}
          className="image"
          alt="logo"
        />
      </div>
      <div className="pokeName">{name.english}</div>
      {type.map((subtype) => (
        <span className={`typePoke ${subtype}`}>{subtype}</span>
      ))}
      <div>HP: {base.HP}</div>
      <div>Attack: {base.Attack}</div>
      <div>Defence: {base.Defence}</div>
      <div>SPAttack: {base.SpAttack}</div>
      <div>SPDefence: {base.SpDefence}</div>
      <div>Speed: {base.Speed}</div>
      {/* <Stats stats={name} /> */}
    </div>
  );
}

export default PokemonCard;
