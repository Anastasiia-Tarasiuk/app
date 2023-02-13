import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    searchQuery: null,
    searchKey: null,
    response: null,
    // loggedInUser: {}
}

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        addSearchQuery: (state, action) => {
            state.searchQuery = action.payload;
        },
        addSearchKey: (state, action) => {
            state.searchKey = action.payload;
        },
        saveResponse: (state, action) => {
            // console.log(action.payload)
            state.response = [action.payload];
        },
        toggleLoggedInUser: (state, action) => {
            // state.loggedInUser = action.payload;
        },
        editUser: (state, action) => {
            // if (state.loggedInUser.name !== action.payload) {
            //     state.loggedInUser.name = action.payload;
            //     state.allUsers.forEach(user => {
            //         if (user.id === state.loggedInUser.id) {
            //             user.name = action.payload;
            //         }
            //     })
            // }
        },
        deleteUser: (state, action) => {
            // state.allUsers = state.allUsers.filter(user => user.id !== action.payload);
            // state.loggedInUser = null;
        }
    },
})

export const { addSearchQuery, addSearchKey, saveResponse, toggleLoggedInUser, editUser, deleteUser} = searchSlice.actions;

export default searchSlice.reducer;