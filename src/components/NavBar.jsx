const NavBar = ({ handleClick, handlePrevious }) => {
  return (
    <div>
      <button onClick={handlePrevious}>Previous</button>
      <button onClick={handleClick}>Next</button>
    </div>
  );
};

export default NavBar;
