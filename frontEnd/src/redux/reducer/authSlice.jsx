import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: null,
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
        },
    },

});

export const { setSignIn, setSignOut } = authSlice.actions;
export default authSlice.reducer;