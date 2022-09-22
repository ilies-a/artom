import HomePageHandlerActionTypes from "./homepage-handler.types";

const INITIAL_STATE = {
    homePageRef: undefined,
    scrollToSectionFunction: undefined
};

const HomePageHandlerReducer = (state=INITIAL_STATE, action) =>{
    switch(action.type){
        case HomePageHandlerActionTypes.SET_HOMEPAGE_REF:
            return {
                ...state,
                homePageRef: action.payload
            };
        case HomePageHandlerActionTypes.SET_SCROLL_TO_SECTION_FUNCTION:
            return {
                ...state,
                scrollToSectionFunction: action.payload
            };    
        default:
            return state;
    }
}

export default HomePageHandlerReducer;