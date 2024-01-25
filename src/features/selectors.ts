import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

const selectOnboarding = (state: RootState) => state.onboarding;

export const selectCurrentPage = createSelector(
  [selectOnboarding],
  (onboarding) => onboarding.currentPage
);

export const selectHasFinished = createSelector(
  [selectOnboarding],
  (onboarding) => onboarding.hasFinished
);