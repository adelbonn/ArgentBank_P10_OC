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


const Icon = ({ size = 'default', type = 'user', className }) => { //function Icon({ size = 'default', type = 'user' }) {
 

const iconComponents = {
  user: FaUserCircle,
  signout: FaPowerOff,
  settings: FaGear
}
// selectionne l'icone enfonction du type
const IconComponent = iconComponents[type]
// defini la taille en fonction du contexte (5rem pour icon user ds loginform et 14px ds nav, cf main.css)
const iconSize = size === 'large' ? 80 : 16
const iconClass = size === 'large' ? style.iconLarge : style.iconDefault

// retourne l'icone avec la taille et la classe definie dynamiquement
return <IconComponent size={iconSize} className={`${iconClass} ${className}`} />
}

Icon.propTypes = {
  size: PropTypes.oneOf(['default', 'large']),
  type: PropTypes.oneOf(['user', 'signout', 'settings']),
  className: PropTypes.string
}

export default Icon