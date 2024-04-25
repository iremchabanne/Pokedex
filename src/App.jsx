import "./App.css";
import NavBar from "./components/NavBar";
import PokemonCard from "./components/PokemonCard";
import { useState } from "react";

const pokemonList = [
  {
    name: "BULBASAUR",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    definition:
      "Bulbasaur are small, squat amphibian and plant Pokémon that move on all four legs, and have blue-green bodies with darker blue-green spots. As a Bulbasaur undergoes evolution into Ivysaur and then later into Venusaur, the bulb on its back blossoms into a large flower.",
  },
  {
    name: "MEW",
    definition:
      "A Mew is said to possess the genes of all Pokémon. It is capable of making itself invisible at will, so it entirely avoids notice even if it approaches people. A Pokémon of South America that was thought to have been extinct. It is very intelligent and learns any move.",
  },
  {
    name: "JIGGLYPUFF",
    imgSrc:
      "https://www.pokepedia.fr/images/thumb/c/cd/Rondoudou-RFVF.png/800px-Rondoudou-RFVF.png",
    definition:
      "Jigglypuff can use its eyes to mesmerize opponents. It has a large lung capacity, exceeding most other Pokémon. Once it has an opponent's attention, Jigglypuff will inflate its lungs and begin to sing a soothing and mysterious lullaby. This melody can cause anyone who listens to become sleepy.",
  },
  {
    name: "NIDORINA",
    imgSrc:
      "https://w7.pngwing.com/pngs/417/425/png-transparent-pokemon-crystal-nidoran%E2%99%82-nidoran%E2%99%80-nidorino-others.png",
    definition:
      "Nidorina is a female-only species. Nidorina is a gentle Pokémon, and it is known to be a caring mother that chews food for its young. It seems to display close family bonds with others of its kind, and becomes nervous when separated.",
  },
  {
    name: "PSYDUCK",
    imgSrc: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/054.png",
    definition:
      "Psyduck is constantly stunned by its headache, and usually just stands there vacantly, trying to calm its headache. When the headache gets too bad, its brain cells awaken, allowing it to use strong psychic powers. Some use their vacant look to their advantage, lulling the enemy and then using its psychokinetic powers.",
  },
  {
    name: "DRAGONAIR",
    imgSrc: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/148.png",
    definition:
      "Dragonair are wary Pokémon. They are quick to respond to perceived threats, and they tend to flee when they sense danger. Dragonair shed their skin periodically, but not as frequently as Dratini. These skins were at first mistaken for huge Dratini, and fetched hefty sums as collectors clamored over them. According to popular legend, seeing a Dragonair flying overhead at the start of a new year is a sign of good health for the rest of the year.Dragonair live in the bottoms of many lakes, but they usually never come to the surface.",
  },
];

function App() {
  const [index, setIndex] = useState(0);

  const handleClick = (selectedButtonIndex) => {
    setIndex(selectedButtonIndex);
  };
  const pokemonNames = pokemonList.map((currentPokemon) => currentPokemon.name);

  return (
    <div>
      <PokemonCard pokemon={pokemonList[index]} />
      <NavBar handleClick={handleClick} pokemonNames={pokemonNames} />
    </div>
  );
}

export default App;
