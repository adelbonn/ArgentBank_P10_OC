import style from './TransactionTable.module.css'
import { transactionsData } from '../../assets/Data/TransactionsData'
import PropTypes from 'prop-types'


const TransactionTable = () => {

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
                {transactionsData.map((transaction) => (
                    <tr key={transaction.id}>
                        <td>{transaction.date}</td>
                        <td>{transaction.description}</td>
                        <td>{transaction.amount}</td>
                        <td>{transaction.balance}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

TransactionTable.propTypes = {
    transactions: PropTypes.array
}

export default TransactionTable
