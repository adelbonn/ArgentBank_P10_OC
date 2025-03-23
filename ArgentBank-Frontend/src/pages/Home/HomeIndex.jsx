
import Hero from '../../components/Hero/HeroIndex'

import Features from '../../components/Features/FeaturesIndex'
import { heroData, featuresData } from '../../assets/Data/homeData'


/**
 * Page d'accueil
 * Affiche le hero banner et les features
 */
const Home = () => {

  return (
    <>
     <Hero 
     subtitles={heroData.subtitles}
     text={heroData.text}
     />
     <Features features={featuresData} />
    </>
  )
}

export default Home