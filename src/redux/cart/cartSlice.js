import { createSlice } from "@reduxjs/toolkit";
import { addItemToCart } from "./cart.utils";

const initialState = {
    hidden: true,
    cartItems: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        toggleCartVisibility: (state)=> {state.hidden = !state.hidden},
        addedItem: (state, action) => { state.cartItems = addItemToCart(state.cartItems, action.payload)}
    }
})


export const {toggleCartVisibility, addedItem} = cartSlice.actions;
export default cartSlice.reducer;