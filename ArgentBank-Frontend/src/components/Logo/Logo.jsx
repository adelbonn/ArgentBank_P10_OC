import '../../styles/main.css'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import logoImg from '../../assets/img/argentBankLogo.png'  // optimisé cette img changer en webp

/**
 * Composant Logo réutilisable
 * @param {Object} props
 * @param {string} [props.className] - Classes CSS additionnelles
 * @param {string} [props.imgClassName] - Classes CSS pour l'image
 * @param {string} [props.src] - Source de l'image
 * @param {string} [props.alt] - Texte alternatif
 */
function Logo({ 
  className = 'main-nav-logo',
  imgClassName = 'main-nav-logo-image',
  src = logoImg,
  alt = 'Argent Bank Logo'
}) {
  return (
    <Link className={className} to="/">
      <img
        className={imgClassName}
        src={src}
        alt={alt}
      />
    </Link>
  )
}

Logo.propTypes = {
  className: PropTypes.string,
  imgClassName: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string
}

export default Logo