
import { createContext, useReducer } from 'react';
import AppReducer from './AppReducer'

// Initial state
const initialState = {
    transaction: [
        {id: 1, text: 'Flower', amount: -20},
        {id: 2, text: 'Salary', amount: +300},
        {id: 3, text: 'Book', amount: -20},
        {id: 4, text: 'Camera', amount: +150}
    ] 
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvier = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions

    // Delete Transaction
    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    // Add Transaction
    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }

    return(
        <GlobalContext.Provider value={{
            transaction: state.transaction,
            deleteTransaction,
            addTransaction
        }}>
            {children}
        </ GlobalContext.Provider>
    )
}