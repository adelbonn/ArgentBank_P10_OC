import PropTypes from 'prop-types'
import style from './AccountIndex.module.css'
import Button from '../Button/ButtonIndex'
import Transaction from '../Transactions/TransactionIndex'
import Icon from '../Icons/Icon'
import { useState } from 'react'

/**
 * Composant Account - Affiche les informations d'un compte bancaire
 * @param {Object} props
 * @param {string} props.title - Titre du compte (ex: "Argent Bank Checking")
 * @param {string} props.accountNumber - Numéro du compte (ex: "x8349")
 * @param {string} props.amount - Montant du compte
 * @param {string} props.description - Description (ex: "Available Balance")
 * @param {function} props.onTransactionView - Callback pour afficher/masquer les transactions
 * @param {boolean} props.isActive - Indique si le compte est actif
 */


const Account = ({ title, accountNumber, amount, description, onTransactionView, isActive }) => {
  const [showTransaction, setShowTransaction] = useState(false)

const handleTransactionToggle = () => {
  const newState = !showTransaction;
  setShowTransaction(newState);
  // informe le parent si on affiche ou masque le tableau des transactions
  onTransactionView && onTransactionView(newState)
}
  return (
    <section className={`${style.account} ${isActive ? style.active : ''}`}>
      <div className={style.accountContentWrapper}>
        <h3 className={style.accountTitle}>
          {title} 
        </h3>
        <p className={style.accountNumber}>{accountNumber}</p>
        <p className={style.accountAmount}>{amount}</p>
        <p className={style.accountAmountDescription}>{description}</p>
      </div>
      <div className={style.accountContentWrapperCta}>

        <Button 
        text={showTransaction ? 'Hide Transactions' : 'View Transactions'} 
        className={style.transactionButton}
        onClick={handleTransactionToggle}
        />
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