import "./App.css";
import NavBar from "./components/NavBar";
import PokemonCard from "./components/PokemonCard";
import { useEffect, useState } from "react";
import pokemonList from "./assets/pokemonList";

function App() {
  useEffect(() => {
    alert("hello pokemon trainer :)");
  }, []);

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
