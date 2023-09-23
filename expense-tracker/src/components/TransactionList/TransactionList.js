import React, { useContext } from "react";
import classes from './Transaction.module.css';
import { GlobalContext } from "../../context/GlobalState";
import Transaction from "./Transaction/Transaction";

const TransactionList = () => {

    const { transactions } = useContext(GlobalContext);

    console.log('context', transactions);

    return (
        <React.Fragment>
            <h3>History</h3>

            <ul className={classes?.list}>
                {transactions.map(transaction => {
                    return (
                        // <li key={transaction.id} className={classes?.minus}>
                        //     {transaction.text} <span>-${transaction.amount}</span><button className={classes['delete-btn']}>x</button>
                        // </li>
                        <Transaction key={transaction.id} transaction={transaction}></Transaction>
                    )
                })}
            </ul>
        </React.Fragment>
    )
};

export default TransactionList;