
import PropTypes from 'prop-types'
import '../../styles/main.css'

/**
 * Composant FeatureItem - Carte de fonctionnalité
 * @param {Object} props
 * @param {string} props.imgSrc - Source de l'image
 * @param {string} props.imgAlt - Texte alternatif de l'image
 * @param {string} props.title - Titre de la fonctionnalité
 * @param {string} props.description - Description de la fonctionnalité
 */


function FeatureItem({ imgSrc, imgAlt, title, description }) {
  return (
    <div className="feature-item">
      <img src={imgSrc} alt={imgAlt} className="feature-icon" />
      <h3 className="feature-item-title">{title}</h3>
      <p>{description}</p>
    </div>
  )
}

FeatureItem.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default FeatureItem