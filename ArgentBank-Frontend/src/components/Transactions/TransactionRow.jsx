import PropTypes from 'prop-types'
import style from './TransactionRow.module.css'
import { useState } from 'react'

import { transaction } from '../../assets/Data/TransactionsData'
// import Icon from '../Icons/Icon'
 import Button from '../Button/ButtonIndex'


const TransactionRow = ({ transaction }) => {

    const [isExpanded, setIsExpanded] = useState(false)

const toggleExpand = () => {
    setIsExpanded(!isExpanded)
}

    return (
        <tr className={style.transactionRow}>
            <td>{transaction.date}</td>
            <td>{transaction.description}</td>
            <td>{transaction.amount}</td>
            <td>{transaction.balance}</td>
            <Button type="button" onClick={toggleExpand}>
                {isExpanded ? 'Hide' : 'Show'}
            </Button>
            {/* {isExpanded && (
                <tr className={style.expandRow}>
                    <td>{transaction.date}</td>
                    <td>{transaction.description}</td>
                    <td>{transaction.amount}</td>
                    <td>{transaction.balance}</td>
                </tr>
            )} */}
        </tr>
    )
}
