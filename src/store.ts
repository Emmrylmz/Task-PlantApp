import { configureStore } from '@reduxjs/toolkit';
import onboardingReducer from './features/OnBoardingSlice'; 
import { apiService } from './features/apiSlice';

export type RootState = ReturnType<typeof store.getState>;

const store = configureStore({
  reducer: {
    onboarding: onboardingReducer, 
    [apiService.reducerPath]: apiService.reducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(apiService.middleware),

   
});

export default store;