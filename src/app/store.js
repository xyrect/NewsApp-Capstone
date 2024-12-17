import { configureStore } from '@reduxjs/toolkit';
import newsSlice from './feattures/newsSlice';

export const store = configureStore({
  reducer: {
    news: newsSlice,
  },
});
