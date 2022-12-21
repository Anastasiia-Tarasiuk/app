import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    allVideos: [],
    currentVideo: {},
    editedVideo: {}
}

export const videoSlice = createSlice({
    name: 'videos',
    initialState,
    reducers: {
        addVideo: (state, action) => {
            state.allVideos.push(action.payload);
        },
        playCurrentVideo: (state, action) => {
            state.currentVideo = action.payload;
        },
        editVideo: (state, action) => {
            state.editedVideo = action.payload;


                // = action.payload;
        },
    },
})

export const { addVideo, playCurrentVideo, editVideo} = videoSlice.actions;

export default videoSlice.reducer;