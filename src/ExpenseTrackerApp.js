import React from 'react';

// importing custom components here
import Header from './Header';
import BalanceIncomeExpense from './BalanceIncomExpense';
import TransactionList from './TransactionList';
import NewTransaction from './NewTransaction';

// importing Context 
import { ContextProvider } from './ContextProvider';



const ExpenseTrackerApp = () => {
    return (
        <div className="expense-tracker">
            <div className="container">
                <ContextProvider>
                    <Header />
                    <BalanceIncomeExpense />
                    <TransactionList />
                    <NewTransaction />
                </ContextProvider>
            </div>
        </div>
    )
}


export default ExpenseTrackerApp;