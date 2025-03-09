import { Link } from 'react-router-dom'
import Logo from '../Logo/Logo'
import Nav from '../Nav/Nav'
import '../../styles/main.css'

/**
 * Header component - En-tête principal
 * Structure de base avec les styles du template
 */



function Header() {
  return (
    <nav className="main-nav">
      <Logo />
      <Nav/>
    </nav>
  )
}

export default Header
