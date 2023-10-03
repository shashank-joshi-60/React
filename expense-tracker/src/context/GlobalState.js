import React, { createContext, useReducer } from "react";
import { AppReducer } from "./AppReducer";
import axios from 'axios';

const initialState = {
    transactions: [
        // { id: 1, text: 'Flower', amount: -20 },
        // { id: 2, text: 'Salary', amount: 300 },
        // { id: 3, text: 'Book', amount: -10 },
        // { id: 4, text: 'Camera', amount: 150 }
    ],
    error: null,
    loading: true,
};

// Create Context
export const GlobalContext = createContext(initialState);

// Provide  Component

export const GlobalProvider = ({ children }) => {

    const [state, dispatch] = useReducer(AppReducer, initialState);

    async function getTransactions() {

        try {
            const res = await axios('http://localhost:5000/api/v1/transactions');

            dispatch({
                type: 'GET_TRANSACTIONS',
                payload: res.data.data
            });
        } catch (error) {
            dispatch({
                type: 'TRANSACTIONS_ERROR',
                payload: error.response.data.error
            })
        }
    }



    async function deleteTransaction(id) {
        try {
            const res = await axios.delete(`http://localhost:5000/api/v1/transactions/${id}`);
            if (res.data.data) {
                dispatch({
                    type: 'DELETE_TRANSACTION',
                    payload: id,
                });
            }

        } catch (error) {
            dispatch({
                type: 'TRANSACTIONS_ERROR',
                payload: error.response.data.error
            })
        }

    }

    async function addTransaction({ text, amount }) {
        try {
            const config = {
                header: {
                    'Content-Type': 'application/json'
                }
            };
            const res = await axios.post('http://localhost:5000/api/v1/transactions', { text, amount }, config)
            dispatch({
                type: 'ADD_TRANSACTION',
                payload: res.data.data,
            })
        } catch (error) {
            dispatch({
                type: 'TRANSACTIONS_ERROR',
                payload: error.response.data.error
            })
        }
    }

    return <GlobalContext.Provider value={{
        transactions: state.transactions,
        error: state.error,
        loading: state.loading,
        deleteTransaction: deleteTransaction,
        addTransaction: addTransaction,
        getTransactions: getTransactions
    }}>
        {children}
    </GlobalContext.Provider>
}