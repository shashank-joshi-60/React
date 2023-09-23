import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";

const Balance = () => {

    const { transactions } = useContext(GlobalContext);

    const balance = transactions.map((transaction) => transaction.amount).reduce((acc, curr) => acc += curr, 0).toFixed(2);

    return (
        <React.Fragment>
            <h4>Your Balance</h4>
            <h1>${balance}</h1>
        </React.Fragment>
    )
}

export default Balance;