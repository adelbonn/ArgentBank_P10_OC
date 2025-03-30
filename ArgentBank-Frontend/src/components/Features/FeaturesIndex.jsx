import PropTypes from 'prop-types'
import '../../styles/main.css'
import FeatureItem from '../FeatureItem/FeaturesItemIndex'
import style from './Features.module.css'

/**
 * Composant Features - Section des fonctionnalités
 * @param {Object} props
 * @param {Array} props.features - Tableau des fonctionnalités à afficher sur la page Home
 * @returns {JSX.Element} Section des fonctionnalités
 */

function Features({ features }) {
  return (
    <section className={style.features}>
      <h2 className="sr-only">Features</h2>
      {features.map((feature, index) => (
        <FeatureItem
          key={`feature-${index}`}
          imgSrc={feature.imgSrc}
          imgAlt={feature.imgAlt}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </section>
  )
}

Features.propTypes = {
  features: PropTypes.arrayOf(
    PropTypes.shape({
      imgSrc: PropTypes.string.isRequired,
      imgAlt: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired
    })
  ).isRequired
}

export default Features