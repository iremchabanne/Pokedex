import styles from "./PokemonCard.module.css";
import PropTypes from "prop-types";

function PokemonCard({ pokemon }) {
  return (
    <figure className={styles.card}>
      {pokemon.imgSrc ? (
        <img
          className={styles.cardImg}
          src={pokemon.imgSrc}
          alt={pokemon.name}
        />
      ) : (
        <p>???</p>
      )}
      <figcaption className={styles.pokeName}>{pokemon.name}</figcaption>
      <p>{pokemon.definition}</p>
    </figure>
  );
}

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
    definition: PropTypes.string.isRequired,
  }),
};

export default PokemonCard;
