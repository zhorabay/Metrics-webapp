import { configureStore } from '@reduxjs/toolkit';
import comicsReducer from './comicsSlice';

const store = configureStore({
  reducer: {
    comics: comicsReducer,
  },
});

export default store;
