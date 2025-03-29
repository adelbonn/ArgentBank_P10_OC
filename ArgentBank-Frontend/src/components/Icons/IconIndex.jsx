 import { FaUserCircle } from 'react-icons/fa';
 import { FaPowerOff } from 'react-icons/fa';
 import { FaGear } from "react-icons/fa6";
import PropTypes from 'prop-types';

import style from './IconsIndex.module.css';


/**
 * Composant Icon - Icône utilisateur réutilisable
 * @param {Object} props - Propriétés du composant
 * @param {string} props.type - Type d'icône ('user' pour l'utilisateur, 'signout' pour la déconnexion, 'settings' pour les paramètres)
 * @param {string} props.size - Taille de l'icône ('default' pour nav, 'large' pour form)
 * @returns {JSX.Element} Icône 
 */


const Icon = ({ size = 'default', type = 'user', className='' }) => { //function Icon({ size = 'default', type = 'user' }) {
  // Configuration des icônes selon le type et la taille
  // const iconTypes = {
  //   // <i className="fa fa-user-circle"></i>,icone user react : <FontAwesomeIcon icon="fa-regular fa-circle-user" /> (icone power de deconnexion : <FontAwesomeIcon icon="fa-light fa-power-off" />), icone paramètre (a utiliser pour EditProfile : <FontAwesomeIcon icon="fa-light fa-gear" /> */}
  //   default: 'fa fa-user-circle',         // Petit icône pour la nav
  //   large: 'fa fa-user-circle sign-in-icon' // Grand icône pour le form
  // }
//   const iconTypes = {
//   user: {
//     default: 'fa fa-user-circle',
//     large: 'fa fa-user-circle sign-in-icon'
//   },
//   settings: {
//     default: 'fa fa-gear',
//   },
//   signout: {
//     default: 'fa fa-power-off',
//   }
// }
//   return <i className={iconTypes[type][size]}></i>
// }
// configuration des icones selonb le type

const iconComponents = {
  user: FaUserCircle,
  signout: FaPowerOff,
  settings: FaGear
}
// selectionne l'icone enfonction du type
const IconComponent = iconComponents[type]
// defini la taille en fonction du contexte (5rem pour icon user ds loginform et 14px ds nav, cf main.css)
const iconSize = size === 'large' ? 80 : 16
const iconClass = size === 'large' ? style['large'] : style['default']

// retourne l'icone avec la taille et la classe definie dynamiquement
return <IconComponent size={iconSize} className={`${iconClass}`} />
}

Icon.propTypes = {
  size: PropTypes.oneOf(['default', 'large']),
  type: PropTypes.oneOf(['user', 'signout', 'settings']),
  className: PropTypes.string
}

export default Icon