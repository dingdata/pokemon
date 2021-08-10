import React from "react";
import "./App.css";
import pokemonData from "./pokemon/pokemon";
import PokemonCard from "./components/PokemonCard";
import PokemonGallery from "./components/PokemonGallery";

// function PokemonCard({ pokemon }) {
//   const { id, name, type, base } = pokemon;
//   return (
//     <div className="container">
//       <div>
//         <img
//           src={`${process.env.PUBLIC_URL}/pokemonImage/${id}.png`}
//           className="image"
//           alt="logo"
//         />
//       </div>
//       <div>{name.english}</div>
//       {type.map((subtype) => (
//         <span className={subtype}>{subtype}</span>
//       ))}
//       <div>HP: {base.HP}</div>
//       <div>Attack: {base.Attack}</div>
//       <div>Defence: {base.Defence}</div>
//       <div>SPAttack: {base.SpAttack}</div>
//       <div>SPDefence: {base.SpDefence}</div>
//       <div>Speed: {base.Speed}</div>
//       {/* <Stats stats={name} /> */}
//     </div>
//   );
// }
const bulbasaur = pokemonData[0];

function App() {
  return (
    <div className="App">
      {/* <PokemonCard pokemon={bulbasaur} /> */}
      <PokemonGallery />
    </div>
  );
}

export default App;
