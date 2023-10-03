import React, { useContext, useEffect } from "react";
import classes from './Transaction.module.css';
import { GlobalContext } from "../../context/GlobalState";
import Transaction from "./Transaction/Transaction";

const TransactionList = () => {

    const { transactions, getTransactions } = useContext(GlobalContext);

    useEffect(() => {

        getTransactions();
        // eslint-disable-next-line
    }, [])

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
                        <Transaction key={transaction._id} transaction={transaction}></Transaction>
                    )
                })}
            </ul>
        </React.Fragment>
    )
};

export default TransactionList;