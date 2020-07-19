import React, { useReducer } from 'react';
import TransactionReducer from './TransactionReducer';
import {TransactionContext} from './TransactionContext';

export const ContextProvider = ({ children }) => {
    
    const [state, dispatch] = useReducer(TransactionReducer,[]);

    function addNewTransaction(transaction) {
        dispatch({
            type: 'NEW_TRANSACTION',
            payload: transaction
        })
    }    
    
    function deleteTransaction(index) { 
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: index
        })
    }

    return (
        <TransactionContext.Provider value={
            {
                transactions: state,
                addNewTransaction,                                
                deleteTransaction                
            }
        }>
            {children}
        </TransactionContext.Provider>
    )



}