const NavBar = ({ pokemonNames, handleClick }) => {
  return pokemonNames.map((name, currentNamesIndex) => {
    return (
      <button
        onClick={() => {
          handleClick(currentNamesIndex);
        }}
        key={name}
      >
        {name}
      </button>
    );
  });
};

export default NavBar;
