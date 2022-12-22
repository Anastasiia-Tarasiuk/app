import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    allVideos: [],
    currentVideo: {},
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
            state.allVideos.map(video => {
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



            // state.allVideos = state.allVideos.find(video => video.videoId !== action.payload.id);
        }
    },
})

export const { addVideo, getCurrentVideo, editVideo, deleteVideo} = videoSlice.actions;

export default videoSlice.reducer;