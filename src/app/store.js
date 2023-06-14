import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { campsitesReducer } from '../features/campsites/campsitesSlice';
import { commentsReducer } from '../features/comments/commentsSlice';
import { partnersReducer } from '../features/partnersSlice';
import { promotionsReducer } from '../features/promotions/promotionsSlice';
import { curryGetDefaultMiddleware, getDefaultMiddleware } from '@reduxjs/toolkit/dist/getDefaultMiddleware';


export const store = configureStore({
  reducer: {
    campsites: campsitesReducer,
    comments: commentsReducer,
    partners: partnersReducer,
    promotions: partnersReducer
  },
  middleware: (GetDefaultMiddleware) => getDefaultMiddleware().concat([logger])
});
