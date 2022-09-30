import { createSelector } from 'reselect';

export const selectNavBar = state => state.navBar;

export const selectSelectedNavButton = createSelector(
    [selectNavBar],
    (navBar) => (navBar.selectedNavButton)
);