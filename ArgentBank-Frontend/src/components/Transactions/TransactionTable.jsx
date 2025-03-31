import style from './TransactionTable.module.css'
import PropTypes from 'prop-types'
import TransactionRow from './TransactionRow'


const TransactionTable = ({ transactions }) => {

    return (
        <table className={style.transactionTable}>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Amount</th>
                    <th>Balance</th>
                </tr>
            </thead>
            <tbody>
                {transactions && transactions.length > 0 ? (
                transactions.map((transaction, index) => (
                    <TransactionRow
                    key={`transactions-${index}`}
                    transaction={transaction}
                    />
                ))
                ) : (
                    <tr>
                        <td colSpan="4">No transactions found</td>
                    </tr>
                )}
            </tbody>
        </table>
    )
}

TransactionTable.propTypes = {
    transactions: PropTypes.array
}

export default TransactionTable
