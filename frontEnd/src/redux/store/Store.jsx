import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../reducer/authSlice";

const store = configureStore({
    reducer: {
        auth: authReducer,
        //mais encore...?
    },

});

export default store;