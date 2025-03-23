import PropTypes from 'prop-types'
import '../../styles/main.css'
import Subtitle from '../Subtitle/SubtitleIndex'

/**
 * Composant Hero - Banner principal de la page d'accueil
 * Utilise Subtitle pour afficher plusieurs lignes de sous-titres
 * @param {Object} props
 * @param {string[]} props.subtitles - Liste des sous-titres à afficher
 * @param {string} props.text - Texte principal du hero
 */

function Hero ({subtitles, text}) {
    return (
        <div className='hero'>
            <section className='hero-content'>
                <h2 className='sr-only'>Promoted Content</h2>
  {/* map sur le tableau de sous-titres pour créer plusieurs Subtitle */}
  {subtitles.map((subtitle, index) => (
          <Subtitle key={`subtitle-${index}`} text={subtitle} />
        ))}
  <p className='text'>{text}</p>
            </section>
        </div>
    )
}

Hero.propTypes = {
    subtitles: PropTypes.arrayOf(PropTypes.string),
    text: PropTypes.string.isRequired
}

export default Hero