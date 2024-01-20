import { configureStore } from '@reduxjs/toolkit';
import onboardingReducer from './features/OnBoardingSlice'; // Import your onboarding slice reducer

export type RootState = ReturnType<typeof store.getState>;

const store = configureStore({
  reducer: {
    onboarding: onboardingReducer, 
  },
});

export default store;