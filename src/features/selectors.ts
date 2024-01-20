import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

const selectOnboarding = (state: RootState) => state.onboarding;

// Create a selector to get the current page
export const selectCurrentPage = createSelector(
  [selectOnboarding],
  (onboarding) => onboarding.currentPage
);

// Create a selector to get the hasFinished state
export const selectHasFinished = createSelector(
  [selectOnboarding],
  (onboarding) => onboarding.hasFinished
);