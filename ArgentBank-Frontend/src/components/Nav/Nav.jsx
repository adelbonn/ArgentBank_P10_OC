import { Link } from 'react-router-dom'
import '../../styles/main.css'
// import Logo from '../Logo/Logo'
import UserIcon from '../UserIcon/UserIconIndex'

/**
 * Nav component - Navigation principale
 * 
 * utilise les styles du template main.css
 * Modifier la partie Link crée le composant avec SingIn
 */

function Nav () {
    return (
        <nav className="main-nav">
            
            <div>
                <Link className="main-nav-item" to="/login">
                    {/* <i className="fa fa-user-circle"></i> */}
                    <UserIcon size="default" />
                    Sign In
                </Link>
            </div>
        </nav>
    )
}

export default Nav