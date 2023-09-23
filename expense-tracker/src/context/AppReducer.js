// import uuid from 'uuid/v4';

export const AppReducer = (state, action) => {
    console.log('action', action)
    switch (action.type) {

        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions.filter((transaction) => {
                    return transaction.id !== action.payload
                }),
            };
        case 'ADD_TRANSACTION':
            const transactions = [...state.transactions, {
                id: Math.floor(Math.random() * 100000000),
                text: action.payload.text,
                amount: action.payload.amount
            }];
            return {
                ...state,
                transactions: [...transactions],
            };
        default: return state;
    }
}

// export default AppReducer;