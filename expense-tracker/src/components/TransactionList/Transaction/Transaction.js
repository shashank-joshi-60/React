import { useContext } from 'react';
import classes from './Transaction.module.css';
import { GlobalContext } from '../../../context/GlobalState';

const Transaction = ({ transaction }) => {

    const sign = transaction.amount < 0 ? '-' : '+';
    const className = transaction.amount < 0 ? classes?.minus : classes?.plus;

    const { deleteTransaction } = useContext(GlobalContext);

    const deleteTransac = () => {
        deleteTransaction(transaction.id);
    }

    return (
        <li key={transaction.id} className={className}>
            {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span><button onClick={deleteTransac} className={classes['delete-btn']}>x</button>
        </li>
    )
}

export default Transaction;