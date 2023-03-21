import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    allVideos: [],
    currentVideo: {}
}

export const videoSlice = createSlice({
    name: 'videos',
    initialState,
    reducers: {
        addVideo: (state, action) => {
            state.allVideos.push(action.payload);
        },
        getCurrentVideo: (state, action) => {
            state.currentVideo = action.payload;
        },
        editVideo: (state, action) => {
            state.allVideos.forEach(video => {
                if (video.videoId === action.payload.videoId) {
                    video.videoName = action.payload.videoName;
                }
            })
        },
        deleteVideo: (state, action) => {
            const index = state.allVideos.findIndex(video => video.videoId === action.payload.id);
            state.allVideos.splice(index, 1);
            if (state.currentVideo.videoId === action.payload.id) {
                state.currentVideo = {};
            }
        },
        deleteAllVideos: (state, action) => {
            state.allVideos = state.allVideos.filter(video => video.loggedInUserId !== action.payload);
            state.currentVideo = {};
        }
    },
})

export const { addVideo, getCurrentVideo, editVideo, deleteVideo, deleteAllVideos} = videoSlice.actions;

export default videoSlice.reducer;