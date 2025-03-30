import '../../styles/main.css'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import logoImg from '../../assets/img/img-optimisées/argentBankLogo.webp'  // optimisé cette img changer en webp

import style from './Logo.module.css'

/**
 * Composant Logo 
 * @param {Object} props
 * @param {string} [props.className] - Classes CSS additionnelles
 * @param {string} [props.imgClassName] - Classes CSS pour l'image
 * @param {string} [props.src] - Source de l'image
 * @param {string} [props.alt] - Texte alternatif
 */

function Logo({ 
  src = logoImg,
  alt = 'Argent Bank Logo',
  onClick = () => {}
}) {
  return (
    <Link className={style.mainNavLogo} to="/" onClick={onClick}>
      <img
        className={style.mainNavLogoImage}
        src={src}
        alt={alt}
      />
    </Link>
  )
}

Logo.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string
}

export default Logo