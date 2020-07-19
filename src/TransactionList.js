import React, { useContext } from 'react';
import { render } from '@testing-library/react';
import { TransactionContext } from './TransactionContext';


const TransactionList = () => {

    const { transactions, deleteTransaction } = useContext(TransactionContext);    
    

    const deleteSingleTransaction = (index) => {        
        deleteTransaction(index);                
    }

    return (
        <div className="transaction-history">
            <h3>History</h3>
            <hr />
            <div className="transaction-list">
                <ul>
                    {transactions.map((transObj, ind) => {
                        return (
                            <li className={transObj.isIncome ? "transaction-income" : "transaction-expense"} key={ind} data-abc={ind}>
                                {transObj.desc}
                                <span>${transObj.amount}</span>
                                <button className="delete-transaction" onClick={() => deleteSingleTransaction(ind)}>x</button>
                            </li>
                        )
                    })}                   
                </ul>
            </div>
        </div>
    )
}

export default TransactionList;