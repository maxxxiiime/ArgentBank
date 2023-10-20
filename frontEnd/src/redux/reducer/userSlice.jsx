import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({

name: "user",
initialState: { 
    firstName: "", 
    lastName: "",
    userName: "",
    email: ""
},

reducers: {
       setUser:(state, action ) => {
    state.firstName = action.payload.body.firstName;
    state.lastName = action.payload.body.lastName;
    state.userName = action.payload.body.userName;
    state.email = action.payload.body.email;
    },
}
})

export const { setUser } = userSlice.actions;
export default userSlice.reducer;