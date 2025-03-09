
import PropTypes from 'prop-types'

/**
 * Composant Button - Bouton réutilisable de base
 * @param {Object} props - Propriétés du composant
 * @param {string} props.text - Texte du bouton
 * @param {string} props.className - Classes CSS additionnelles
 * @param {string} props.type - Type du bouton (submit, button)
 * @param {function} props.onClick - Fonction de clic (optionnelle)
 * @returns {JSX.Element} Bouton personnalisable
 */
function Button({ text, className, type, onClick }) {
  return (
    <button
      className={`button ${className}`}
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  type: PropTypes.oneOf(['submit', 'button']),
  onClick: PropTypes.func
}

Button.defaultProps = {
  className: '',
  type: 'button',
  onClick: () => {}
}

export default Button