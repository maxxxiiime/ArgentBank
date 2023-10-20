import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../reducer/authSlice";
import userReducer from "../reducer/userSlice";

const store = configureStore({
    reducer: {
        auth: authReducer,
        user: userReducer,
    },
});
export default store;