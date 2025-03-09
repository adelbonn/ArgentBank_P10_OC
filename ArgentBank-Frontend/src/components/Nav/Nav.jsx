import { Link } from 'react-router-dom'
import '../../styles/main.css'
import Logo from '../Logo/Logo'
/**
 * Nav component - Navigation principale
 * Version de base sans logique d'authentification
 * utilise les styles du template main.css
 * Modifier la partie Link crée le composant avec SingIn et le composant avec l icon puis les ajouter ici en tant que composant
 */

function Nav () {
    return (
        <nav className="main-nav">
            
            <div>
                <Link className="main-nav-item" to="/login">
                    <i className="fa fa-user-circle"></i>
                    Sign In
                </Link>
            </div>
        </nav>
    )
}

export default Nav