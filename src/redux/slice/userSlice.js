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
        editUser: (state, action) => {
            if (state.loggedInUser.name !== action.payload) {
                state.loggedInUser.name = action.payload;
                state.allUsers.map(user => {
                    if (user.id === state.loggedInUser.id) {
                        user.name = action.payload;
                    }
                })
            }
        },
        deleteUser: (state, action) => {
            state.allUsers = state.allUsers.filter(user => user.id !== action.payload);
            state.loggedInUser = null;
        }
    },
})

export const { addUser, toggleLoggedInUser, editUser, deleteUser} = userSlice.actions;

export default userSlice.reducer;