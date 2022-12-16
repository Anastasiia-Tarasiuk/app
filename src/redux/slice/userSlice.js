import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    allUsers: [],
    loggedInUser: {}
}

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.allUsers.push(action.payload);
        },
        setLoggedInUser: (state, action) => {
            state.loggedInUser = action.payload;
        },
        removeLoggedInUser: (state) => {
            state.loggedInUser = {};
        }
    },
})

export const { addUser, setLoggedInUser, removeLoggedInUser} = userSlice.actions;

export default userSlice.reducer;