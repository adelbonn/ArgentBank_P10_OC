import { Link } from 'react-router-dom'
import Logo from '../Logo/Logo'
import Nav from '../Nav/Nav'
import '../../styles/main.css'

import style from './Header.module.css'
/**
 * Header component - En-tête principal
 * Structure de base avec les styles du template
 */



function Header() {
  return (
    <header className= {style.header}>
      <Logo />
      <Nav/>
    </header>
  )
}

export default Header
