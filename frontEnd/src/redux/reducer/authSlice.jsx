import { createSlice } from "@reduxjs/toolkit";

const isFirstLoad = localStorage.getItem('isFirstLoad');

if (!isFirstLoad) {
  // Supprime le token au 1er chargement
  localStorage.removeItem('authToken');

  // le first load a bien eu lieu = true
  localStorage.setItem('isFirstLoad', 'true');
}

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

        // setSignOut(state) {
        //     return {
        //       ...state,
        //       token: null,
        //       isAuthenticated: false,
        //     };
        // },

        setSignOut(state) {
            state.token = null;
            // state.token = "";
            state.isAuthenticated = false;
            localStorage.removeItem('authToken');
        },
    },

});

export const { setSignIn, setSignOut } = authSlice.actions;
export default authSlice.reducer;