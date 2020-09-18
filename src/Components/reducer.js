export const getBasketTotal = (basket) => 
    basket?.reduce((amount, item) => item.price + amount, 0
        
    )

export const initialState = {
    basket: [],
    user:null,
}


function reducer(state, action) {
    console.log(action);
    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user:action.user,
            }
        case 'ADD_TO_BASKET':
            //add
            return { 
                ...state,
                basket: [...state.basket, action.item]
            }
        case 'REMOVE_FROM_BASKET':
            //remove
            let newBasket = [...state.basket];

            const index = state.basket.findIndex((basketItem) =>
            {
                return basketItem.id === action.id
            });

            if (index >= 0) {
                newBasket.splice(index, 1)
            } else {
                console.warn("can't remove");
            }
            return { ...state, basket : newBasket  }
        default:
            return state;
    }
}

export default reducer;