// components/NavItem/NavItemIndex.jsx
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import UserIcon from '../UserIcon/UserIconIndex'

/**
 * Composant NavItem - Élément de navigation réutilisable
 * @param {Object} props - Propriétés du composant
 * @param {string} props.to - URL de destination
 * @param {string} props.icon - Classe de l'icône
 * @param {string} props.text - Texte du lien
 * @returns {JSX.Element} Élément de navigation
 */
function NavItem({ to, icon, text }) {
  return (
    <Link to={to} className="main-nav-item">
    {icon && <i className={`fa ${icon}`}></i>}
    {text}
  </Link>
    // si je veux utiliser ceci pour pouvoir chenger l'icône modifier la prop icon par shoOcon et modifier les proptypes, et la doc jsx, showIcon etant un booleen
    // <Link to={to} className="main-nav-item">
    //   {showIcon && <UserIcon size="default" />}
    //   {text}
    // </Link>
  )
}

NavItem.propTypes = {
  to: PropTypes.string.isRequired,
  icon: PropTypes.string,
  text: PropTypes.string.isRequired
}

NavItem.defaultProps = {
  icon: ''
}

export default NavItem