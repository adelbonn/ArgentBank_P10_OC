import { Link } from 'react-router-dom'
import Logo from '../Logo/Logo'
import '../../styles/main.css'

/**
 * Header component - En-tête principal
 * Structure de base avec les styles du template
 */



function Header() {
  return (
    <nav className="main-nav">
      <Logo />
      <div>
        <Link className="main-nav-item" to="/login">
          <i className="fa fa-user-circle"></i>
          Sign In
        </Link>
      </div>
    </nav>
  )
}

export default Header
