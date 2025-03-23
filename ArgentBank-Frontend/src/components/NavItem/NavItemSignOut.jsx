import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import '../../styles/main.css'

/*
* NavItemSignOut component - Élément de navigation réutilisable
* @param {Object} props
* @param {string} props.to - URL de destination
* @param {string} props.icon - Classe de l'icône
* @returns {JSX.Element} Élément de navigation
*/




const NavItemSignOut = ({ to, icon }) => {
const dispatch = useDispatch();
const navigate = useNavigate();



    return (
        <NavLink to={to} className="main-nav-item">
            {icon && <i className={`fa ${icon}`}></i>}
            Sign Out
        </NavLink>
    )
}
export default NavItemSignOut