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

    // userProfile(state){
    // state.userFirstName = "";
    // state.lastName = "";
    // },

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
            state.token = "";
            state.isAuthenticated = false;
            localStorage.removeItem('authToken');
        },
    },

});

export const { setSignIn, setSignOut } = authSlice.actions;
export default authSlice.reducer;