import style from './Transaction.module.css'    
import TransactionTable from './TransactionTable'
import PropTypes from 'prop-types'

/**
 * Composant Transaction - Container des transactions
 * @param {Object} props
 * @param {Array} props.transactions - Liste des transactions
 */

const Transaction = ({transactions}) => {
    return (
        <div className={style.transactionWrapper}>
            <TransactionTable transactions={transactions} />
        </div>
    )
}

Transaction.propTypes = {
    transactions: PropTypes.array.isRequired
}

export default Transaction