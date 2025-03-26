
import PropTypes from 'prop-types'

/**
 * Composant Icon - Icône utilisateur réutilisable
 * @param {Object} props - Propriétés du composant
 * @param {string} props.type - Type d'icône ('user' pour l'utilisateur, 'signout' pour la déconnexion, 'settings' pour les paramètres)
 * @param {string} props.size - Taille de l'icône ('default' pour nav, 'large' pour form)
 * @returns {JSX.Element} Icône 
 */


function Icon({ size = 'default', type = 'user' }) {
  // Configuration des icônes selon le type et la taille
  // const iconTypes = {
  //   // <i className="fa fa-user-circle"></i>,icone user react : <FontAwesomeIcon icon="fa-regular fa-circle-user" /> (icone power de deconnexion : <FontAwesomeIcon icon="fa-light fa-power-off" />), icone paramètre (a utiliser pour EditProfile : <FontAwesomeIcon icon="fa-light fa-gear" /> */}
  //   default: 'fa fa-user-circle',         // Petit icône pour la nav
  //   large: 'fa fa-user-circle sign-in-icon' // Grand icône pour le form
  // }
  const iconTypes = {
  user: {
    default: 'fa fa-user-circle',
    large: 'fa fa-user-circle sign-in-icon'
  },
  settings: {
    default: 'fa fa-gear',
  },
  signout: {
    default: 'fa fa-power-off',
  }
}
  return <i className={iconTypes[type][size]}></i>
}

Icon.propTypes = {
  size: PropTypes.oneOf(['default', 'large']),
  type: PropTypes.oneOf(['user', 'signout', 'settings'])
}

export default Icon