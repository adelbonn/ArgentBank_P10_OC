
import PropTypes from 'prop-types'

/**
 * Composant UserIcon - Icône utilisateur réutilisable
 * @param {Object} props - Propriétés du composant
 * @param {string} props.size - Taille de l'icône ('default' pour nav, 'large' pour form)
 * @returns {JSX.Element} Icône utilisateur
 */


function UserIcon({ size = 'default' }) {
  // Définition des classes selon la taille
  const classes = {
    default: 'fa fa-user-circle',         // Petit icône pour la nav
    large: 'fa fa-user-circle sign-in-icon' // Grand icône pour le form
  }
  
  return <i className={classes[size]}></i>
}

UserIcon.propTypes = {
  size: PropTypes.oneOf(['default', 'large'])
}

export default UserIcon