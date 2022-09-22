import HomePageHandlerActionTypes from "./homepage-handler.types";

export const setHomePageRef = homePageRef => ({
    type: HomePageHandlerActionTypes.SET_HOMEPAGE_REF,
    payload: homePageRef
});

export const setScrollToSectionFunction = scrollToSectionFunction => ({
    type: HomePageHandlerActionTypes.SET_SCROLL_TO_SECTION_FUNCTION,
    payload: scrollToSectionFunction
});