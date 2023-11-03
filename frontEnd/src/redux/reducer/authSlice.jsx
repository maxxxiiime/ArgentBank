import { createSlice } from "@reduxjs/toolkit";

const checkToken = () => {
  return localStorage.getItem("token") || null;
};
const initialState = {
    token: checkToken(),
    isAuthenticated: false,    
  };

  const authSlice = createSlice ({
    name: "auth",
    initialState,
    reducers:{

        setSignIn(state, action) {
            state.token = action.payload.token;
            state.isAuthenticated = true;
        },
        setSignOut(state) {
            state.token = null;
            state.isAuthenticated = false;
            localStorage.removeItem('authToken');
        },
    },
});

export const { setSignIn, setSignOut } = authSlice.actions;
export default authSlice.reducer;