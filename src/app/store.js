import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import usersReducer from "../redux/user/userSlice";
import cartReducer from "../redux/cart/cartSlice";

export const store = configureStore({
    reducer:{
        user: usersReducer,
        cart: cartReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}).concat(logger), 
})