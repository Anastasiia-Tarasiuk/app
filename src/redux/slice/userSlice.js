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
        toggleLoggedInUser: (state, action) => {
            state.loggedInUser = action.payload;
        },
    },
})

export const { addUser, toggleLoggedInUser} = userSlice.actions;

export default userSlice.reducer;