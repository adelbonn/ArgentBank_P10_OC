
import PropTypes from 'prop-types'
import '../../styles/main.css'

/**
 * Composant Account - Affiche les informations d'un compte bancaire
 * Composant a réutilisé pour les lignes de comptes quand elles seront affichées
 * @param {Object} props
 * @param {string} props.title - Titre du compte (ex: "Argent Bank Checking")
 * @param {string} props.accountNumber - Numéro du compte (ex: "x8349")
 * @param {string} props.amount - Montant du compte
 * @param {string} props.description - Description (ex: "Available Balance")
 */
const Account = ({ title, accountNumber, amount, description }) => {
  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">
          {title} ({accountNumber})
        </h3>
        <p className="account-amount">{amount}</p>
        <p className="account-amount-description">{description}</p>
      </div>
      <div className="account-content-wrapper cta">
        {/* {/**Ajouter une logique pour la position de la flèche et ne pas la mettre en button qui a la className transaction-button (c'est le button générique) et mettre la bonne icon que voici :  <FontAwesomeIcon icon="fas fa-chevron-right" />/, et l'icone de fermeture : <FontAwesomeIcon icon="fa-sharp-duotone fa-regular fa-xmark" /> } */}
        <button className="transaction-button"> <i className="fa fa-chevron-right" aria-hidden="true"/></button>
      </div>
    </section>
  )
}

Account.propTypes = {
  title: PropTypes.string.isRequired,
  accountNumber: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default Account