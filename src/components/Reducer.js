export const initialState = {
    basket: [],
    user: null,
};

const reducer = (state, action)  => {
    // This console log IS SUPER important.
    console.log(action);
    switch (action.type) {
        case "ADD_TO_BASKET":
            // Logic for adding item to basket
            return { 
                ...state, // Return the exact current state
                basket: [...state.basket, action.item] 
                // but change the basket from whatever
                // it currently was, plus whatever item you just added.
            };
            break;
        case "REMOVE_FROM_BASKET":
            // Logic for Removing item to basket
            return { state };
            
            break;

        default:
            return state;
    }
}

export default reducer;