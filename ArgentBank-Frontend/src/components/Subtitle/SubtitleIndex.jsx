import PropTypes from 'prop-types'

/**
 * Composant Subtitle - Texte mis en évidence
 * Utilisé principalement dans le Hero banner
 * @param {Object} props
 * @param {string} props.text - Texte à afficher
 * @param {string} [props.className] - Classes CSS additionnelles
 */
function Subtitle({ text, className = 'subtitle' }) {
  return <p className={className}>{text}</p>
}

Subtitle.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string
}

export default Subtitle