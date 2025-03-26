import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector} from 'react-redux'
import { useGetProfileQuery } from '../../store/api/argentBankApi'
import { logout, selectIsAuthenticated } from '../../store/features/auth/authSlice'

import '../../styles/main.css'
// import Logo from '../Logo/Logo'
import Icon from '../Icons/IconIndex'

/**
 * Nav component - Navigation principale
 * @returns {JSX.Element} Navigation avec les liens
 * utilise les styles du template main.css
 * 
 */

function Nav () {
    const dispatch = useDispatch();
    const navigate = useNavigate();
   
    const isAuthenticated = useSelector(selectIsAuthenticated);

    // Récupération du profil uniquement si authentifié
    const { data: profile } = useGetProfileQuery(undefined, {
        skip: !isAuthenticated, // skip la requête si l'utilisateur n'est pas authentifié
        refetchOnMountOrArgChange: true // refetch quand un composant est monté ou les arguments changent, le cache est invalide 
    });

const handleLogout = (event) => {
    event.preventDefault();
    dispatch(logout()); // dispatch l'action logout du authSlice
    navigate('/');
};
// Fonction pour gerer le style des classes des liens (isActive ou non)
const getLinkClass = ({isActive}) => {
    return `main-nav-item ${isActive ? 'router-link-exact-active' : ''}`;
};
    return (
        <nav className="main-nav">
            
            <div className="main-nav-items">
            {isAuthenticated ? (
                    <>
                        <NavLink to="/user" className={getLinkClass} title="Profile">
                            <span className="username">{profile?.userName}</span>
                            <Icon size="default" type="user" />
                        </NavLink>
                        <NavLink to="/user/settings" className={getLinkClass} title="Settings">
                            <Icon size="default" type="settings" />
                        </NavLink>
                        <NavLink
                            to="/"
                            onClick={handleLogout}
                            className="main-nav-item sign-out-button"
                            title="Sign Out"
                        >
                            <Icon size="default" type="signout" />
                        </NavLink>
                    </>
                ) : (
                <NavLink className="main-nav-item" to="/login" title="Sign In">
                    <Icon size="default" type="user" />
                    Sign In
                </NavLink>
                )
}
            </div>
        </nav>
    );
}

export default Nav