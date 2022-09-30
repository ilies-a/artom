import NavBarActionTypes from "./nav-bar.types";

export const setSelectedNavButton = navButtonName => ({
    type: NavBarActionTypes.SET_SELECTED_NAV_BUTTON,
    payload: navButtonName
});
