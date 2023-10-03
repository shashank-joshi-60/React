// import uuid from 'uuid/v4';

export const AppReducer = (state, action) => {
    console.log('action', action)
    switch (action.type) {
        case 'GET_TRANSACTIONS':
            return {
                ...state,
                loading: false,
                transactions: action.payload
            };
        case 'TRANSACTIONS_ERROR':
            return {
                ...state,
                loading: false,
                transactions: [],
                error: action.payload,
            };
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions.filter((transaction) => {
                    return transaction._id !== action.payload
                }),
            };
        case 'ADD_TRANSACTION':
            const transactions = [...state.transactions, { ...action.payload }];
            return {
                ...state,
                transactions: [...transactions],
            };

        default: return state;
    }
}

// export default AppReducer;