import style from './WelcomeSection.module.css'

/**
 * Composant WelcomeSection - En-tête de la page utilisateur
 * @param {Object} props
 * @param {string} props.firstName - Prénom de l'utilisateur
 * @param {string} props.lastName - Nom de l'utilisateur
 * @param {Function} props.onEdit - Fonction appelée lors du clic sur Edit
 */


const WelcomeSection = ({ firstName, lastName, onEdit }) => {
    return (
      <div>
        <h1>Welcome back<br />{firstName} {lastName}!</h1>
        <button className={style.editButton} onClick={onEdit}>
          Edit Name
        </button>
      </div>
    )
  }

  export default WelcomeSection