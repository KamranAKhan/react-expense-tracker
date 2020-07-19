import React, {useContext, useState} from 'react';


// importing BalanceContext to update the balanace on Add Transaction
import {TransactionContext} from './TransactionContext';

const NewTransaction = () => {

    const { transactions, addNewTransaction } = useContext(TransactionContext);
    let [newDesc, setNewDesc] = useState("");
    let [newAmount, setNewAmount] = useState(0);
    let [isIncomeType, setIncomeType] = useState(true);        
    
    const submitNewTransaction = (event) => {
        event.preventDefault();        
        addNewTransaction({            
            desc: newDesc,
            amount: Number(newAmount),
            isIncome: Boolean(isIncomeType)           
        });

        setNewDesc("");
        setNewAmount(0);
        setIncomeType(true);

    }
   
    const updateTransactionType = () => {
        isIncomeType = !isIncomeType;                        
    }

    return (
        <div className="new-transaction">
            <h3>Add new transaction</h3>
            <hr/>
            <div className="transaction-fields">
                <form onSubmit={submitNewTransaction}>                    
                    <div className="input-divider">                        
                        <label> 
                            <input type="radio" name="transaction-type" className="transaction-type" 
                            onChange={()=>setIncomeType(!isIncomeType)} 
                            value={isIncomeType} 
                            checked={isIncomeType}/>
                            Income
                         </label>
                        <label> 
                            <input type="radio" name="transaction-type" className="transaction-type" 
                            onChange={()=>setIncomeType(!isIncomeType)} 
                            value={!isIncomeType} 
                            checked={!isIncomeType}/>
                            Expense
                        </label>                        
                    </div>
                    <div className="input-divider">
                        <label >Transaction Description</label>
                        <input type="text" placeholder="Enter transaction name" onChange={(e)=>setNewDesc(e.target.value)} value={newDesc} required/>
                    </div>
                    <div className="input-divider">
                        <label >Amount</label>
                        <input type="number" placeholder="Enter transaction amount" onChange={(e)=>setNewAmount(e.target.value)} value={newAmount} required/>
                    </div>
                    <div className="input-divider">                        
                        <button type="submit">
                            Add Transaction
                        </button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default NewTransaction;