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
            // state.token = "";
            state.isAuthenticated = false;
            localStorage.removeItem('authToken');
        },
        // pour mettre à jour le token
        updateToken(state, action) {
          state.token = action.payload.token;
        },
    },
});

export const { setSignIn, setSignOut, updateToken } = authSlice.actions;
export default authSlice.reducer;