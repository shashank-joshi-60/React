import { useContext } from 'react';
import classes from './IncomeExpenses.module.css';
import { GlobalContext } from '../../context/GlobalState';

const IncomeExpenses = () => {

    const { transactions } = useContext(GlobalContext);

    const expense = transactions.filter((item) => item.amount < 0).map((transaction) => transaction.amount).reduce((acc, curr) => acc += curr, 0).toFixed(2);
    const income = transactions.filter((item) => item.amount > 0).map((transaction) => transaction.amount).reduce((acc, curr) => acc += curr, 0).toFixed(2);


    return (
        <div className={classes['inc-exp-container']}>
            <div>
                <h4>Income</h4>
                <p className={[classes.money, classes.minus].join(' ')}>+${income}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className={[classes.money, classes.minus].join(' ')}>-${expense}</p>
            </div>
        </div>
    )
}

export default IncomeExpenses;