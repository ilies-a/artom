import NavBarActionTypes from "./nav-bar.types";

const INITIAL_STATE = {
    selectedNavButton: undefined,
};

const NavBarReducer = (state=INITIAL_STATE, action) =>{
    switch(action.type){
        case NavBarActionTypes.SET_SELECTED_NAV_BUTTON:
            return {
                ...state,
                selectedNavButton: action.payload
            };
        default:
            return state;
    }
}

export default NavBarReducer;