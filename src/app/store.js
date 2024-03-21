import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import usersReducer from "../redux/user/userSlice";

export const store = configureStore({
    reducer:{
        user: usersReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}).concat(logger), 
})