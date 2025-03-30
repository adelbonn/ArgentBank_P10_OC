
import PropTypes from 'prop-types'
import style from './AccountIndex.module.css'
import Button from '../Button/ButtonIndex'

import { useState } from 'react'
/**
 * Composant Account - Affiche les informations d'un compte bancaire
 * @param {Object} props
 * @param {string} props.title - Titre du compte (ex: "Argent Bank Checking")
 * @param {string} props.accountNumber - Numéro du compte (ex: "x8349")
 * @param {string} props.amount - Montant du compte
 * @param {string} props.description - Description (ex: "Available Balance")
 */
const Account = ({ title, accountNumber, amount, description }) => {
  // état pour afficher ou masquer le formulaire de modification
  const [showTransaction, setShowTransaction] = useState(false)
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

        <Button 
        text="View transactions" 
        className={style.transactionButton}
        onClick={() => setShowTransaction(!showTransaction)}
        />
      </div>
     {showTransaction && (
      <div className={style.transactionWrapper}>
        <p>Transactions,
          emplacement component transaction</p>
      </div>
     )}
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