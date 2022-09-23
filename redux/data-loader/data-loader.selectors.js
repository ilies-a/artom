import { createSelector } from 'reselect';

export const selectDataLoader = state => state.dataLoader;

export const selectLoadingIsComplete = createSelector(
    [selectDataLoader],
    (dataLoader) => (dataLoader.loadingIsComplete)
);