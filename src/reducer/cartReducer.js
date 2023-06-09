export default function CartReducer(state, action) {
    switch (action.type) {
        case "addProduct":
            return {
                ...state,
                cartProd: action.payload
            };
        case "cart_error":
            return {
                ...state,
                isError: "ERROR..!!"
            }
    }
} 