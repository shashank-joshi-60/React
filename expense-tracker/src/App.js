import React from 'react';
import AddTransaction from './components/AddTransaction/AddTransaction';
import Balance from './components/Balance/Balance';
import Header from './components/Header/Header';
import IncomeExpenses from './components/IncomeExpenses/IncomeExpenses';
import TransactionList from './components/TransactionList/TransactionList';
import { GlobalProvider } from './context/GlobalState';




function App() {
  return (
    <React.Fragment>
      <GlobalProvider>
        <Header />
        <div className="container">
          <Balance></Balance>
          <IncomeExpenses></IncomeExpenses>
          <TransactionList></TransactionList>
          <AddTransaction></AddTransaction>
        </div>
      </GlobalProvider>

    </React.Fragment>

  );
}

export default App;
