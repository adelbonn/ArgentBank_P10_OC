
import PropTypes from 'prop-types'
import '../../styles/main.css'

import style from './FeatureItem.module.css'


/**
 * Composant FeatureItem - Carte de fonctionnalité
 * @param {Object} props
 * @param {string} props.imgSrc - Source de l'image
 * @param {string} props.imgAlt - Texte alternatif de l'image
 * @param {string} props.title - Titre de la fonctionnalité
 * @param {string} props.description - Description de la fonctionnalité
 */

const FeatureItem = ({ imgSrc, imgAlt, title, description }) => {
  return (
    <div className={style.featureItem}>
      <img src={imgSrc} alt={imgAlt} className={style.featureIcon} />
      <h3 className={style.featureItemTitle}>{title}</h3>
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