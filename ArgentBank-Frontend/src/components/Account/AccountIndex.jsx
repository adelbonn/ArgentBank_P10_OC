
import PropTypes from 'prop-types'
import '../../styles/main.css'
import style from './AccountIndex.module.css'
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
    <section className={style.account}>
      <div className={style.accountContentWrapper}>
        <h3 className={style.accountTitle}>
          {title} ({accountNumber})
        </h3>
        <p className={style.accountAmount}>{amount}</p>
        <p className={style.accountAmountDescription}>{description}</p>
      </div>
      <div className={style.accountContentWrapperCta}>

        <button className={style.transactionButton}>View transactions</button>
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