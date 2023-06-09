import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/cartReducer";

const CartContext = createContext();

const initialState ={
    cartProd: []
}

const CartProvider= ({children})=>{

    const [state, dispatch] = useReducer(reducer, initialState);

    // const getCartProd = ()=>{
    //     let cartItems = (localStorage.getItem('product')===[])? [] : JSON.parse(localStorage.getItem('product'));
    //     dispatch({type: "addProduct", payload: cartItems});
    // }
    // let cartProducts = "mobile phone";
    function addToCart(product){
        try {
            dispatch({type: "addProduct", payload: product});
        } catch (error) {
            dispatch({ type: "cart_error" });
        }
    }
    console.log(state);

    return (
        <CartContext.Provider value={{state, addToCart}}>{children}</CartContext.Provider>
    );
}

const useCartContext = ()=> {
    return useContext(CartContext);
}
export {CartProvider, useCartContext};