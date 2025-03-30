import PropTypes from 'prop-types'
import style from './Subtitle.module.css'
/**
 * Composant Subtitle - Texte mis en évidence
 * Utilisé principalement dans le Hero banner
 * @param {Object} props
 * @param {string} props.text - Texte à afficher
   */
function Subtitle({ text }) {
  return <p className={style.subtitle}>{text}</p>
}

Subtitle.propTypes = {
  text: PropTypes.string.isRequired
}

export default Subtitle