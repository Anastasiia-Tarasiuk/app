import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    searchQuery: null,
    searchKey: null,
    response: null,
    totalPages: null,
    page: null,
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
            state.response = action.payload;
        },
        setTotalPages:(state, action) => {
            state.totalPages = action.payload;
        },
        setPage:(state, action) => {
            state.page = action.payload;
        },
    },
})

export const { addSearchQuery, addSearchKey, saveResponse, setTotalPages, setPage} = searchSlice.actions;

export default searchSlice.reducer;