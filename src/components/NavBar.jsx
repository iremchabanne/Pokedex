const NavBar = ({ pokemonNames, handleClick }) => {
  return pokemonNames.map((name, currentNamesIndex) => {
    return (
      <button
        onClick={() => {
          handleClick(currentNamesIndex);
          if (name == "PIKACHU") {
            alert("pika pikachu!!!");
          }
        }}
        key={name}
      >
        {name}
      </button>
    );
  });
};

export default NavBar;
