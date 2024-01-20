import { createSlice, PayloadAction } from "@reduxjs/toolkit";

//Carousel State

interface OnboardingState {
  currentPage: number;
  hasFinished: boolean;
}

const initialState: OnboardingState = {
  currentPage: 1,
  hasFinished: false,
};

const onboardingSlice = createSlice({
  name: "onboarding",
  initialState,
  reducers: {
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setHasFinished: (state, action: PayloadAction<boolean>) => {
      state.hasFinished = action.payload;
    },
  },
});

export const { setCurrentPage, setHasFinished } = onboardingSlice.actions;

export default onboardingSlice.reducer;
