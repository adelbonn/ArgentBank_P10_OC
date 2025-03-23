import { NavLink, Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector} from 'react-redux'
import { useGetProfileQuery } from '../../store/api/argentBankApi'
import { logout, selectIsAuthenticated } from '../../store/features/auth/authSlice'

import '../../styles/main.css'
// import Logo from '../Logo/Logo'
import UserIcon from '../UserIcon/UserIconIndex'

/**
 * Nav component - Navigation principale
 * 
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
                            <UserIcon type="user" />
                        </NavLink>
                        <NavLink to="/user/settings" className={getLinkClass} title="Settings">
                            <UserIcon type="settings" />
                        </NavLink>
                        <NavLink
                            to="/"
                            onClick={handleLogout}
                            className="main-nav-item sign-out-button"
                            title="Sign Out"
                        >
                            <UserIcon type="signout" />
                        </NavLink>
                    </>
                ) : (
                <Link className="main-nav-item" to="/login" title="Sign In">
                    <UserIcon size="default" />
                    Sign In
                </Link>
                )
}
            </div>
        </nav>
    );
}

export default Nav