import { createSelector } from 'reselect';

export const selectHomePageHandler = state => state.homePageHandler;

export const selectHomePageRef = createSelector(
    [selectHomePageHandler],
    (homePageHandler) => (homePageHandler.homePageRef)
);

export const selectScrollToSectionFunction = createSelector(
    [selectHomePageHandler],
    (homePageHandler) => (homePageHandler.scrollToSectionFunction)
);