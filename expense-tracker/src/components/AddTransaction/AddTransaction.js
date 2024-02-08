import React, { useContext, useState } from "react";
import classes from './AddTransaction.module.css';
import { GlobalContext } from "../../context/GlobalState";

const AddTransaction = () => {

    const [transaction, setTransaction] = useState({ _id: 0, text: '', amount: 0 });

    const { addTransaction } = useContext(GlobalContext);

    function addTransact() {
        console.log('addTransact', transaction);
        addTransaction(transaction);
        updateInput('', 'text');
        updateInput(0, 'amount');
    }

    function updateInput(value, type) {
        console.log('event', value, type);
        if (type === 'text') {
            setTransaction((prevState) => {
                return {
                    ...prevState,
                    text: value
                }
            })
            // transaction.text = event
        } else {
            setTransaction((prevState) => {
                return {
                    ...prevState,
                    amount: Number(value)
                }
            })
        }
    }

    function formSubmitted(event) {
        event.preventDefault();
        addTransact();
    }


    return (
        <React.Fragment>
            <h3>Add new transaction</h3>
            <form onSubmit={formSubmitted}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={transaction.text} onChange={(event) => updateInput(event.target.value, 'text')} placeholder="Enter text..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount"
                    >Amount <br />
                        (negative - expense, positive - income)</label
                    >
                    <input type="number"
                        onChange={(event) => updateInput(event.target.value, 'amount')}
                        value={transaction.amount} placeholder="Enter amount..." />
                </div>
                <button type="submit" className={classes?.btn} >Add transaction</button>
            </form>
        </React.Fragment>
    )
};

export default AddTransaction;