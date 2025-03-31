import PropTypes from "prop-types";
import Subtitle from "../Subtitle/SubtitleIndex";

import style from './Hero.module.css';

/**
 * Composant Hero - Banner principal de la page d'accueil
 * Utilise Subtitle pour afficher plusieurs lignes de sous-titres
 * @param {Object} props
 * @param {string[]} props.subtitles - Liste des sous-titres à afficher
 * @param {string} props.text - Texte principal du hero
 */

function Hero({ subtitles, text }) {
  return (
    <div className={style.hero}>
      <section className={style.heroContent}>
        <h2 className="sr-only">Promoted Content</h2>
        {subtitles.map((subtitle, index) => (
          <Subtitle key={`subtitle-${index}`} text={subtitle} />
        ))}
        <p className={style.text}>{text}</p>
      </section>
    </div>
  );
}

Hero.propTypes = {
  subtitles: PropTypes.arrayOf(PropTypes.string),
  text: PropTypes.string.isRequired,
};

export default Hero;
