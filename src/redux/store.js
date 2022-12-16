import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../redux/slice/userSlice';

export const store = configureStore({
    reducer: {
        users: userSlice
    },
})