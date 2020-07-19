import React, { useContext } from 'react';

// import BalanceContext to manage the state of balance
import { TransactionContext } from './TransactionContext';


const BalanceIncomeExpense = () => {

    const { transactions } = useContext(TransactionContext);

    const getIncomeTotal = () => {
        let income = 0;
        for (var i = 0; i < transactions.length; i++) {
            if (transactions[i].isIncome)
                income += transactions[i].amount
        }
        return income;
    }

    const getExpenseTotal = () => {
        let expense = 0;
        for (var i = 0; i < transactions.length; i++) {
            if (!transactions[i].isIncome)
                expense += transactions[i].amount
        }
        return expense;
    }


    return (
        <div className="balance">
            <h1>
                <span>YOUR BALANCE</span><br />
                ${(getIncomeTotal() - getExpenseTotal()).toFixed(2)}
            </h1>
            <div className="income-expense">
                <div className="income">
                    <p>INCOME <br />
                        <span>${getIncomeTotal().toFixed(2)}</span>
                    </p>
                </div>
                <div className="expense">
                    <p>EXPENSE <br />
                        <span>${getExpenseTotal().toFixed(2)}</span>
                    </p>
                </div>
            </div>


        </div>
    )
}

export default BalanceIncomeExpense;